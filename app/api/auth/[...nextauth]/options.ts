import { db } from "@/lib/db";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { redirect } from "next/navigation";

export const options: NextAuthOptions = {
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id;
      }
      const currentDate = new Date();
      const expires = new Date(currentDate);
      expires.setDate(expires.getDate() + 1);
      session.expires = expires.toISOString();
      return session;
    },
    async redirect() {
      return process.env.NEXTAUTH_URL + "/setup";
    },
  },
};

// callbacks: {
//   async jwt({ token }) {
//     return token;
//   },
//   async session({ session, token }) {
//     console.log("Session: " + JSON.stringify(session));
//     console.log();
//     console.log("Token: " + JSON.stringify(token));
//     const currentDate = new Date();
//     const expires = new Date(currentDate);
//     expires.setDate(expires.getDate() + 1);
//     session.expires = expires.toISOString();
//     const toReturn = { ...session, id: token.sub };
//     return toReturn;
//   },
//   async redirect({ url, baseUrl }) {
//     return process.env.NEXTAUTH_URL + "/setup";
//   },
// },
