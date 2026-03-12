// app/providers.tsx
"use client";

import { SessionProvider } from "next-auth/react";
import { ModalProvider } from "@/lib/providers/ModalProvider";
import { Session } from "next-auth";

export default function Providers({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null | undefined;
}) {
  return (
    <SessionProvider session={session}>
      <ModalProvider>{children}</ModalProvider>
    </SessionProvider>
  );
}