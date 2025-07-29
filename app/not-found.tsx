"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-8 p-8">
        <div className="space-y-4">
          <h1 className="text-9xl font-bold text-primary/20">404</h1>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-foreground">
              Page Not Found
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Sorry, we couldn&apos;t find the page you&apos;re looking for. It
              might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Go to homepage
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go back
          </Button>
        </div>

        <div className="pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-4">
            Looking for something specific?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="ghost" asChild>
              <Link href="/#features" className="flex items-center gap-2">
                <Search className="w-4 h-4" />
                Explore Features
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/#pricing" className="flex items-center gap-2">
                View Pricing
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/#contact" className="flex items-center gap-2">
                Contact Support
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
