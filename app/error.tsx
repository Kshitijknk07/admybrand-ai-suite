"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 p-8">
        <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
          <AlertTriangle className="w-8 h-8 text-destructive" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-foreground">
            Something went wrong!
          </h1>
          <p className="text-muted-foreground max-w-md">
            We apologize for the inconvenience. An unexpected error occurred.
            Please try refreshing the page or contact support if the problem
            persists.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} className="flex items-center gap-2">
            <RefreshCw className="w-4 h-4" />
            Try again
          </Button>
          <Button
            variant="outline"
            onClick={() => (window.location.href = "/")}
          >
            Go to homepage
          </Button>
        </div>

        {process.env.NODE_ENV === "development" && (
          <details className="mt-8 text-left max-w-md mx-auto">
            <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
              Error details (development only)
            </summary>
            <pre className="mt-2 p-4 bg-muted rounded-lg text-xs overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
