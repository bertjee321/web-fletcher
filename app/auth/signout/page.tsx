"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function SignOutPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignOut = async () => {
    setIsSubmitting(true);
    try {
      await signOut({ callbackUrl: "/" });
    } catch (error) {
      console.error("Sign out error:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-md w-full py-16">
      <Card className="p-6">
        <CardHeader
          title="🏹 Sign Out"
          byline="Are you sure you want to sign out?"
          className="mb-6 text-center"
        />

        <CardBody>
          <div className="space-y-4">
            <Button
              onClick={handleSignOut}
              className="w-full bg-[#7a5f3e] hover:bg-[#8b7355] text-white font-medium py-3 rounded-lg transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing out..." : "Yes, Sign Out"}
            </Button>

            <Link href="/" className="block">
              <Button
                className="w-full border border-[#d3c9b4] hover:bg-[#f8f5ef] text-[#3f3a2f] font-medium py-3 rounded-lg transition-colors"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
            </Link>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}
