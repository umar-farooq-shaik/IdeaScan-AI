import Image from 'next/image';
import { Mail, CheckCircle, Users, ShieldCheck, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'About IdeaScan AI - Our Mission and Technology',
  description: 'Learn about IdeaScan AI, our mission to empower innovators, and how we use Gemini AI ethically.',
};

export default function AboutPage() {
  return (
    <div className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-primary mb-4">
            About IdeaScan AI
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-poppins max-w-3xl mx-auto">
            Empowering innovators with AI-driven insights to build the future, responsibly.
          </p>
        </header>

        <section className="mb-16">
          <Card className="rounded-2xl shadow-xl border-transparent bg-card overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <Image
                  src="/images/about.png"
                  alt="Team working on IdeaScan"
                  width={800}
                  height={600}
                  className="object-cover h-full w-full"
                  data-ai-hint="team collaboration"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-orbitron font-semibold text-primary mb-6">Our Story & Mission</h2>
                <p className="font-poppins text-muted-foreground mb-4">
                  IdeaScan was born from a simple observation: great ideas are abundant, but the path to validating and launching them is often fraught with uncertainty. We envisioned a tool that could provide aspiring entrepreneurs and innovators with quick, accessible, and data-driven feedback.
                </p>
                <p className="font-poppins text-muted-foreground mb-4">
                  Our mission is to democratize startup validation. By leveraging the power of advanced AI like Google's Gemini, we aim to help creators refine their concepts, understand market dynamics, and make more informed decisions, ultimately increasing their chances of success.
                </p>
                <div className="mt-6 flex items-center text-accent font-semibold font-poppins">
                  <CheckCircle className="h-6 w-6 mr-2"/>
                  <span>Empowering Innovators, One Idea at a Time.</span>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-orbitron font-bold text-primary mb-8 text-center">The Technology Behind IdeaScan</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="p-6 bg-card rounded-2xl shadow-lg border-transparent hover-glow">
              <h3 className="text-2xl font-orbitron font-semibold text-primary mb-4">Google's Gemini AI</h3>
              <p className="font-poppins text-muted-foreground mb-4">
                At the heart of IdeaScan is Google's state-of-the-art Gemini AI model. This powerful large language model allows us to process and analyze your startup ideas with remarkable nuance and depth.
              </p>
              <p className="font-poppins text-muted-foreground">
                Gemini helps us evaluate aspects like market demand, competitive landscape, investor alignment, and uniqueness by drawing on its vast knowledge base and sophisticated reasoning capabilities. This enables us to provide you with insights that go beyond simple keyword matching.
              </p>
            </div>
            <div>
              <Image
                src="/images/tech.png"
                alt="Abstract representation of AI"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
                data-ai-hint="AI network"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-orbitron font-bold text-primary mb-8 text-center">Privacy & Ethical AI</h2>
          <div className="max-w-3xl mx-auto p-8 bg-card rounded-2xl shadow-lg border-transparent">
            <div className="flex items-center mb-4">
              <ShieldCheck className="h-10 w-10 text-accent mr-4" />
              <h3 className="text-2xl font-orbitron font-semibold text-primary">Our Commitment</h3>
            </div>
            <p className="font-poppins text-muted-foreground mb-4">
              Your ideas are valuable, and we treat them with the utmost respect and confidentiality. We are committed to the ethical use of AI and ensuring your data privacy.
            </p>
            <ul className="list-disc list-inside font-poppins text-muted-foreground space-y-2">
              <li>We do not store your detailed idea descriptions after the analysis is complete, unless you explicitly choose to save them (feature coming soon for registered users).</li>
              <li>Your ideas are not used to train public AI models.</li>
              <li>We strive to provide unbiased analysis, but AI is a tool, and its insights should be one part of your broader decision-making process.</li>
            </ul>
          </div>
        </section>
        
        <section className="text-center mb-16">
           <div className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg font-poppins">
              <Heart className="h-6 w-6 mr-2 text-accent fill-accent" />

              <span>Built by Umar Farooq</span>
           </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-orbitron font-bold text-primary mb-6">Get in Touch</h2>
          <p className="font-poppins text-muted-foreground mb-8 max-w-xl mx-auto">
            Have questions, feedback, or partnership inquiries? We'd love to hear from you!
          </p>
          <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-300 group">
            <a href="mailto:contact@ideascan.ai" className="font-poppins">
              <Mail className="h-5 w-5 mr-2 group-hover:text-accent-foreground transition-colors duration-300" />
              Email Us: contact@ideascan.ai
            </a>
          </Button>
        </section>
      </div>
    </div>
  );
}
