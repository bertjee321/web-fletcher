import { prisma } from "@/lib/prisma/prisma";
import { html, text } from "@/server/email/email.template";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import nodemailer from "nodemailer";

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),

  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      async sendVerificationRequest({ identifier, url, provider }) {
        const transport = nodemailer.createTransport(provider.server);

        await transport.sendMail({
          to: identifier,
          from: provider.from,
          subject: "Sign in to YourApp",
          text: text({ url }),
          html: html({ url }),
        });
      },
    }),
  ],

  session: {
    strategy: "database",
  },

  debug: true,
});

export { handler as GET, handler as POST };
