import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-medium text-white",
          "bg-gradient-to-r from-neon-pink to-highlight-yellow",
          "transition-all duration-300 ease-in-out",
          "hover:scale-105 hover:shadow-neon-pink-yellow",
          "focus:outline-none focus:ring-2 focus:ring-highlight-yellow focus:ring-offset-2 focus:ring-offset-background",
          "relative overflow-hidden", // For potential glassmorphism pseudo-elements if needed via CSS
          // "backdrop-blur-sm bg-white/10", // Example glassmorphism, might need adjustments
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
GradientButton.displayName = "GradientButton";

export { GradientButton };
