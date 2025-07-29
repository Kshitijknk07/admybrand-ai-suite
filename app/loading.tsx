import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <div className="relative">
          <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto" />
          <div className="absolute inset-0 w-8 h-8 border-2 border-primary/20 rounded-full animate-ping"></div>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">
            Loading ADmyBRAND AI
          </h2>
          <p className="text-sm text-muted-foreground">
            Preparing your AI-powered marketing experience...
          </p>
        </div>
      </div>
    </div>
  );
}
