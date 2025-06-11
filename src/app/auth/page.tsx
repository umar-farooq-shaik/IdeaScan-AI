// Placeholder for /auth page
// Full implementation of authentication is beyond this scope.

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-midnight-blue to-purple-900 p-4">
      <Card className="w-full max-w-md bg-card/80 backdrop-blur-lg shadow-2xl rounded-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-orbitron text-primary">IdeaScan Access</CardTitle>
          <CardDescription className="font-poppins">Login or Sign Up (Feature Coming Soon)</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 p-8">
          <p className="text-center text-muted-foreground font-poppins">
            User authentication and dashboards are currently under development.
            We're working hard to bring you features like saving your ideas, tracking progress, and more!
          </p>
          <Button variant="outline" className="w-full font-poppins" asChild>
            <Link href="/">Go to Homepage</Link>
          </Button>
           <Button variant="secondary" className="w-full font-poppins" asChild>
            <Link href="/validate">Try Validator as Guest</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
