import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-300 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary - Solid black/white
        default:
          "bg-primary text-primary-foreground border border-primary hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5",
        // Outline - Sharp border
        outline:
          "border border-foreground/20 bg-transparent text-foreground hover:bg-foreground hover:text-background hover:border-foreground",
        // Secondary - Muted
        secondary:
          "bg-secondary text-secondary-foreground border border-border hover:bg-secondary/80",
        // Ghost - Minimal
        ghost:
          "hover:bg-accent hover:text-accent-foreground",
        // Link
        link:
          "text-foreground underline-offset-4 hover:underline p-0 h-auto",
        // Destructive
        destructive:
          "bg-destructive text-destructive-foreground border border-destructive hover:bg-destructive/90",
        // Glass - Premium glassmorphism
        glass:
          "bg-background/60 backdrop-blur-lg border border-border/50 text-foreground hover:bg-background/80 hover:border-border",
        // CTA - High contrast with glow
        cta:
          "bg-primary text-primary-foreground border border-primary shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]",
        // Subtle - Very light
        subtle:
          "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground",
      },
      size: {
        default: "h-10 px-5 py-2 rounded",
        sm: "h-8 px-4 text-xs rounded",
        lg: "h-12 px-8 text-base rounded",
        xl: "h-14 px-10 text-base font-semibold rounded",
        icon: "h-10 w-10 rounded",
        "icon-sm": "h-8 w-8 rounded",
        "icon-lg": "h-12 w-12 rounded",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
