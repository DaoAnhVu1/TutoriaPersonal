import { db } from "@/lib/db";
import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const options: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      profile(profile) {
        console.log("Google Profile: " + profile);

        return {
          ...profile,
          id: profile.sub,
        };
      },
    }),
  ],
};
