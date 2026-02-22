import { ReactNode } from "react";

interface ObituarySectionProps {
  heading?: string;
  children: ReactNode;
  variant?: "default" | "boxed" | "clinical";
  className?: string;
}

export function ObituarySection({
  heading,
  children,
  variant = "default",
  className = "",
}: ObituarySectionProps) {
  const variantStyles = {
    default: "",
    boxed: "border border-border-light p-6 bg-surface",
    clinical: "border-l-2 border-foreground pl-6",
  };

  return (
    <section className={`${variantStyles[variant]} ${className}`}>
      {heading && (
        <h2 className="font-[family-name:var(--font-playfair-display)] text-2xl font-bold mb-4">
          {heading}
        </h2>
      )}
      {children}
    </section>
  );
}
