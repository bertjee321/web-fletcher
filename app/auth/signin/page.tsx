"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { TextInput } from "@/components/ui/TextInput";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await signIn("email", { email, callbackUrl: "/" });
    } catch (error) {
      console.error("Sign in error:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-md w-full py-16">
      <Card className="p-6">
        <CardHeader
          title="🏹 Sign In to Web Fletcher"
          byline="Enter your email to receive a magic sign-in link"
          className="mb-6 text-center"
        />

        <CardBody>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#3f3a2f] mb-2">
                Email Address
              </label>
              <TextInput
                placeholder="you@example.com"
                value={email}
                setValue={setEmail}
              />
            </div>

            <Button
              className="w-full bg-[#7a5f3e] hover:bg-[#8b7355] text-white font-medium py-3 rounded-lg transition-colors"
              disabled={isSubmitting || !email}
            >
              {isSubmitting ? "Sending magic link..." : "Send Magic Link"}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-[#6e6556]">
            <p>We&apos;ll send you a secure link to sign in.</p>
            <p className="mt-2 italic">No password required.</p>
            <p className="mt-2">
              If it doesn&apos;t arrive, please check your spam or junk folder.
            </p>
          </div>
        </CardBody>
      </Card>

      <div className="mt-6 text-center text-xs text-[#6e6556]">
        <p>
          New to Web Fletcher?{" "}
          <Link
            href="/"
            className="text-[#7a5f3e] hover:text-[#8b7355] underline"
          >
            Learn more
          </Link>
        </p>
      </div>
    </section>
  );
}
