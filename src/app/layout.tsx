import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'IdeaScan AI - Validate Your Startup Idea',
  description: 'Get real-time feedback, insights, and market signals for your startup idea using AI.',
  openGraph: {
    title: 'IdeaScan AI',
    description: 'Scan your startup idea with AI and get instant validation.',
    type: 'website',
    images: [{ url: '/og-image.png' }], // Replace with actual OG image URL
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />

      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Toaster />
        <Navbar />
        <main className="flex-grow pt-16 md:pt-20"> {/* Adjust padding top based on Navbar height */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
