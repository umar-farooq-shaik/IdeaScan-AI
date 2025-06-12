import Link from 'next/link';
import { Github, Linkedin, Twitter, BrainCircuit, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 text-3xl font-orbitron mb-4">
              <BrainCircuit className="h-8 w-8 text-accent" />
              <span>IdeaScan</span>
            </Link>
            <p className="text-sm text-muted-foreground font-poppins">
              Validate your startup ideas with the power of AI.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm font-poppins">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/#features" className="hover:text-accent transition-colors">Features</Link></li>
              <li><Link href="/validate" className="hover:text-accent transition-colors">Try IdeaScan</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-accent transition-colors"><Github size={24} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent transition-colors"><Linkedin size={24} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-accent transition-colors"><Twitter size={24} /></a>
            </div>
            <div className="flex items-center space-x-2 text-sm font-poppins">
              <Mail size={20} className="text-accent"/>
              <a href="mailto:contact@ideascan.ai" className="hover:text-accent transition-colors">contact@ideascan.ai</a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-muted-foreground font-poppins">
          <p>&copy; {new Date().getFullYear()} IdeaScan AI. All rights reserved.</p>
          <p>Built by Umar Farooq.</p>
        </div>
      </div>
    </footer>
  );
}
