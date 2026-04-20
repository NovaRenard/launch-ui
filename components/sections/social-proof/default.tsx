import {
  GraduationCap,
  Stethoscope,
  Flower,
  ShoppingCart,
} from "lucide-react";

import { Section } from "../../ui/section";

interface SocialProofProps {
  title?: string;
  className?: string;
}

export default function SocialProof({
  title = "Нам доверяют",
  className,
}: SocialProofProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h3 className="text-muted-foreground text-center text-sm font-medium uppercase tracking-wider">
          {title}
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          <div className="text-muted-foreground flex flex-col items-center gap-2 opacity-60 transition-opacity hover:opacity-100">
            <GraduationCap className="size-12 stroke-1" />
            <span className="text-xs">Образование</span>
          </div>
          <div className="text-muted-foreground flex flex-col items-center gap-2 opacity-60 transition-opacity hover:opacity-100">
            <Stethoscope className="size-12 stroke-1" />
            <span className="text-xs">Медицина</span>
          </div>
          <div className="text-muted-foreground flex flex-col items-center gap-2 opacity-60 transition-opacity hover:opacity-100">
            <Flower className="size-12 stroke-1" />
            <span className="text-xs">Ритейл</span>
          </div>
          <div className="text-muted-foreground flex flex-col items-center gap-2 opacity-60 transition-opacity hover:opacity-100">
            <ShoppingCart className="size-12 stroke-1" />
            <span className="text-xs">E-commerce</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
