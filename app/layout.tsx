import { PageLayoutWrapper } from "@/components/layout/PageLayoutWrapper";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { Geist, Geist_Mono } from "next/font/google";
import { authOptions } from "./api/auth/[...nextauth]/route";
import "./globals.css";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "🏹 Web Fletcher",
  description: "Fletch your own web designs with AI precision.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers session={session}>
          <PageLayoutWrapper>{children}</PageLayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
