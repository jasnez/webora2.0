import { clsx } from "clsx";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  bg?: "white" | "muted" | "dark";
  className?: string;
}

const bgMap = {
  white: "bg-white",
  muted: "bg-neutral-50",
  dark: "bg-neutral-900",
} as const;

export function Section({ children, id, bg = "white", className }: SectionProps) {
  return (
    <section id={id} className={clsx("section-spacing", bgMap[bg], className)}>
      {children}
    </section>
  );
}
