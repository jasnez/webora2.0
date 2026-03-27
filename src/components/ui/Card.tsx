import { clsx } from "clsx";

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  href?: string;
  className?: string;
  padding?: boolean;
}

export function Card({
  children,
  hover = false,
  href,
  className,
  padding = true,
}: CardProps) {
  const classes = clsx(
    "bg-white border border-neutral-200 rounded-xl shadow-card",
    hover &&
      "transition-transform duration-200 hover:-translate-y-1 hover:shadow-hover cursor-pointer",
    padding && "p-6",
    className,
  );

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return <div className={classes}>{children}</div>;
}
