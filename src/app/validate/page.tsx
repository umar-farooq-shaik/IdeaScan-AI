import { IdeaForm } from '@/components/validate/idea-form';

export const metadata = {
  title: 'Validate Your Idea - IdeaScan AI',
  description: 'Submit your startup idea for AI-powered analysis and validation.',
};

export default function ValidatePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-primary mb-4">
          Idea Validator
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-poppins max-w-2xl mx-auto">
          Describe your startup idea below. Our AI will analyze its potential and provide valuable insights.
        </p>
      </header>
      
      <IdeaForm />

      <section className="mt-16 p-8 bg-secondary rounded-2xl shadow-lg">
        <h2 className="text-2xl font-orbitron font-semibold text-primary mb-4">How We Analyze Your Idea</h2>
        <p className="text-muted-foreground font-poppins mb-2">
          IdeaScan uses Google's Gemini AI to perform a multi-faceted analysis of your submission. We look at:
        </p>
        <ul className="list-disc list-inside text-muted-foreground font-poppins space-y-1">
          <li><span className="font-semibold text-primary/80">Market Demand:</span> Potential interest and need for your solution.</li>
          <li><span className="font-semibold text-primary/80">Competition:</span> Existing players and the competitive landscape.</li>
          <li><span className="font-semibold text-primary/80">Investor Interest:</span> Alignment with current investment trends.</li>
          <li><span className="font-semibold text-primary/80">Uniqueness & Feasibility:</span> Novelty of your idea and its practicality.</li>
        </ul>
        <p className="mt-4 text-sm text-muted-foreground font-poppins">
          Our goal is to provide you with a quick, data-driven perspective to help you refine your concept.
        </p>
      </section>
    </div>
  );
}
