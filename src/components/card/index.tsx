import { cn } from "@/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(
        "rounded border bg-card  text-card-foreground shadow",
        className,
      )}
    >
      {children}
    </div>
  );
};
