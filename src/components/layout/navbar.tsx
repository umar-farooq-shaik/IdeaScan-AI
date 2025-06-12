
import Link from 'next/link';
import { BrainCircuit } from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button'; // Assuming GradientButton is for CTAs

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 text-2xl md:text-3xl font-orbitron text-primary hover:text-accent transition-colors duration-300">
          <BrainCircuit className="h-7 w-7 md:h-8 md:w-8 text-accent" />
          <span>IdeaScan</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 font-poppins text-sm">
          <Link href="/" className="text-foreground hover:text-accent transition-colors duration-300">
            Home
          </Link>
          <Link href="/#features" className="text-foreground hover:text-accent transition-colors duration-300">
            Features
          </Link>
          <Link href="/about" className="text-foreground hover:text-accent transition-colors duration-300">
            About
          </Link>
          <GradientButton asChild className="px-4 py-2 text-sm">
            <Link href="/validate">Try IdeaScan</Link>
          </GradientButton>
          {/* <Link href="/auth" className="text-foreground hover:text-accent transition-colors duration-300">
            Login
          </Link> */}
        </nav>
        <div className="md:hidden">
          {/* Mobile Menu Trigger (to be implemented if needed) */}
          <GradientButton asChild className="px-3 py-1.5 text-xs">
            <Link href="/validate">Try Now</Link>
          </GradientButton>
        </div>
      </div>
    </header>
  );
}
