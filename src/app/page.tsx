
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GradientButton } from '@/components/ui/gradient-button';
import { BarChartBig, Binoculars, DollarSign, FileText, BrainCircuit, BarChartHorizontalBig, Star, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: <BarChartBig className="h-10 w-10 text-accent mb-4" />,
    title: 'Market Demand Analysis',
    description: 'Gauge potential user interest and market size for your idea.',
  },
  {
    icon: <Binoculars className="h-10 w-10 text-accent mb-4" />,
    title: 'Competitor Scan',
    description: 'Identify existing players and analyze their strengths and weaknesses.',
  },
  {
    icon: <DollarSign className="h-10 w-10 text-accent mb-4" />,
    title: 'Investor Interest Score',
    description: 'Understand if your idea aligns with current investor interests and funding patterns.',
  },
];

const workflowSteps = [
  {
    icon: <FileText className="h-12 w-12 text-accent mb-4" />,
    title: '1. Input Your Idea',
    description: 'Clearly describe your startup concept, target audience, and problem you solve.',
  },
  {
    icon: <BrainCircuit className="h-12 w-12 text-accent mb-4" />,
    title: '2. AI Analysis',
    description: 'Our Gemini-powered AI meticulously analyzes your idea against market data and trends.',
  },
  {
    icon: <BarChartHorizontalBig className="h-12 w-12 text-accent mb-4" />,
    title: '3. Instant Validation Report',
    description: 'Receive a comprehensive report with scores, insights, and actionable suggestions.',
  },
];

const testimonials = [
  {
    quote: "IdeaScan gave me the clarity I needed to pivot my startup. The AI insights were spot on!",
    name: "Sarah L.",
    title: "Founder, Tech Innovators",
    avatar: "/images/woman2.png",
    stars: 5,
  },
  {
    quote: "The competitor analysis was incredibly detailed. Saved me weeks of research.",
    name: "John B.",
    title: "Entrepreneur",
    avatar: "/images/men1.jpeg",
    stars: 5,
  },
  {
    quote: "A must-have tool for anyone serious about launching a successful startup.",
    name: "Maria K.",
    title: "Startup Advisor",
    avatar: "/images/woman1.png",
    stars: 4,
  },
];

export default function HomePage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary via-midnight-blue to-purple-900 text-primary-foreground animate-hero-glow overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           {/* Decorative background pattern or elements can go here */}
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6 leading-tight">
            Scan your startup idea before you build.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-poppins text-primary-foreground/80 max-w-3xl mx-auto mb-10">
            Enter your idea. Get insights. Avoid building the wrong thing.
          </p>
          <GradientButton asChild className="px-8 py-4 text-lg md:text-xl bouncing-cta">
            <Link href="/validate">Scan My Idea</Link>
          </GradientButton>
          <div className="mt-16">
          <Image
  src="/images/Image1.png"
  alt="An artistic rendering of a stylized brain connected to a glowing lightbulb, symbolizing AI-driven ideas and innovation. The image has a futuristic and slightly abstract feel."
  width={800}
  height={600}
  className="mx-auto rounded-lg"
  priority
/>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center text-primary mb-4">Why IdeaScan?</h2>
          <p className="text-center text-muted-foreground font-poppins max-w-2xl mx-auto mb-12 md:mb-16">
            Leverage cutting-edge AI to make informed decisions and de-risk your startup journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 rounded-2xl hover-glow bg-card shadow-lg border-transparent hover:border-accent/50">
                <CardHeader className="items-center">
                  {feature.icon}
                  <CardTitle className="text-2xl font-orbitron text-primary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-poppins">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center text-primary mb-4">Simple 3-Step Workflow</h2>
          <p className="text-center text-muted-foreground font-poppins max-w-2xl mx-auto mb-12 md:mb-16">
            Getting your idea validated is quick and easy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6">
                <div className="p-4 bg-background rounded-full shadow-md mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-orbitron font-semibold text-primary mb-2">{step.title}</h3>
                <p className="text-muted-foreground font-poppins">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <CheckCircle className="h-16 w-16 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6">Ready to Validate Your Vision?</h2>
          <p className="text-lg md:text-xl font-poppins max-w-2xl mx-auto mb-10">
            Don't let uncertainty hold you back. Get AI-powered insights today and build with confidence.
          </p>
          <GradientButton asChild className="px-10 py-4 text-lg md:text-xl">
            <Link href="/validate">Scan My Idea</Link>
          </GradientButton>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-center text-primary mb-4">Loved by Innovators</h2>
          <p className="text-center text-muted-foreground font-poppins max-w-2xl mx-auto mb-12 md:mb-16">
            See what others are saying about IdeaScan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="rounded-2xl p-6 bg-card shadow-lg border-transparent hover-glow">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
                    {[...Array(5 - testimonial.stars)].map((_, i) => <Star key={i} className="h-5 w-5 text-muted-foreground/30" />)}
                  </div>
                  <p className="italic text-muted-foreground font-poppins mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                      data-ai-hint="person avatar"
                    />
                    <div>
                      <p className="font-orbitron font-semibold text-primary">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground font-poppins">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
