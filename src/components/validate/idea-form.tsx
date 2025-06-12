"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Textarea } from '@/components/ui/textarea';
import { GradientButton } from '@/components/ui/gradient-button';
import { Loader2, AlertTriangle, Info } from 'lucide-react';
import { validateStartupIdea, type ValidateStartupIdeaOutput } from '@/ai/flows/validate-startup-idea';
import { AnalysisReport } from './analysis-report';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";


const formSchema = z.object({
  ideaDescription: z.string().min(50, { message: "Idea description must be at least 50 characters." }).max(5000, { message: "Idea description must be at most 5000 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export function IdeaForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<ValidateStartupIdeaOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);
    try {
      const result = await validateStartupIdea({ userInput: data.ideaDescription });
      setAnalysisResult(result);
      toast({
        title: "Analysis Complete!",
        description: "Your startup idea has been successfully analyzed.",
      });
    } catch (err) {
      console.error("AI Analysis Error:", err);
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred during analysis.";
      setError(`Failed to analyze idea: ${errorMessage}. Please try again.`);
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description: `Could not analyze your idea. ${errorMessage}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6 md:p-8 bg-card rounded-2xl shadow-xl border border-border">
        <div>
          <Textarea
            {...register("ideaDescription")}
            placeholder="Describe your idea like you're pitching a friend... What problem does it solve? Who is it for? What's unique?"
            rows={8}
            className="text-base border-2 focus-visible:border-accent focus-visible:ring-accent"
            aria-invalid={errors.ideaDescription ? "true" : "false"}
          />
          {errors.ideaDescription && (
            <p className="text-sm text-destructive mt-2 font-poppins">{errors.ideaDescription.message}</p>
          )}
        </div>
        <GradientButton type="submit" disabled={isLoading} className="w-full text-lg">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Analyzing...
            </>
          ) : (
            "🔍 Scan with AI"
          )}
        </GradientButton>
      </form>

      {error && (
        <Alert variant="destructive" className="mt-8">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {analysisResult && !error && (
         <div className="mt-12">
            <h2 className="text-3xl font-orbitron font-bold text-primary mb-6 text-center">
              AI Validation Report
            </h2>
           <AnalysisReport result={analysisResult} />
         </div>
      )}

      {!analysisResult && !isLoading && !error && (
        <Alert className="mt-8 bg-secondary/50 border-primary/20">
          <Info className="h-4 w-4 text-primary" />
          <AlertTitle className="text-primary font-orbitron">Ready to Validate?</AlertTitle>
          <AlertDescription className="text-muted-foreground font-poppins">
            Enter your startup idea above and click "Scan with AI" to get your personalized analysis.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
