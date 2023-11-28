import { db } from "@/lib/db";
import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const options: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      profile(profile) {
        console.log("Google Profile: " + JSON.stringify(profile));

        return {
          ...profile,
          id: profile.sub,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token = { ...user };
      }
      return token;
    },
    async session({ session, token }) {
      const currentDate = new Date();
      const expires = new Date(currentDate);
      expires.setDate(expires.getDate() + 1);
      session.expires = expires.toISOString();
      const toReturn = { ...session, id: token.sub };
      return toReturn;
    },
  },
};
