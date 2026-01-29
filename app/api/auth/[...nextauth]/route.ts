
import { prisma } from "@/lib/prisma/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),

  providers: [
    EmailProvider({
      // DEV MODE: log magic link instead of emailing
      sendVerificationRequest({ url, identifier }) {
        console.log(`\nMAGIC LINK for ${identifier}:\n${url}\n`);
      },
    }),
  ],

  session: {
    strategy: "database",
  },

  debug: true,
});

export { handler as GET, handler as POST };
