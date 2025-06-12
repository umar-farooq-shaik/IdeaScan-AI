// Placeholder for /dashboard page
// Full implementation of dashboard is beyond this scope.

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card className="max-w-2xl mx-auto bg-card shadow-xl rounded-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-orbitron text-primary">User Dashboard</CardTitle>
          <CardDescription className="font-poppins">Coming Soon!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 p-8 text-center">
          <p className="text-muted-foreground font-poppins">
            The user dashboard will allow you to track your submitted ideas, view detailed analysis history, save insights, and much more.
          </p>
          <p className="font-semibold text-primary font-poppins">
            Stay tuned for updates!
          </p>
          <Button variant="default" className="font-poppins" asChild>
            <Link href="/">Return to Homepage</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
