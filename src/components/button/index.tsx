import { cn } from "@/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "text" | "outlined" | "muted";
  size?: "sm" | "md" | "lg" | "icon";
}

export function Button({
  className,
  children,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        " h-fit w-fit rounded-sm px-3 py-1.5 font-semibold duration-300 ",
        {
          "bg-primary text-primary-foreground transition-[filter] hover:brightness-90 active:brightness-105":
            variant === "primary",
          "bg-muted text-muted-foreground transition-[filter] hover:brightness-95 active:brightness-100":
            variant === "muted",
          "transition-colors hover:text-primary active:bg-primary/5":
            variant === "text",
          "border border-primary/50 text-primary transition-colors hover:border-primary hover:bg-primary/5 active:bg-primary/10":
            variant === "outlined",
          "px-2 py-1": size === "sm",
          "px-3 py-1.5": size === "md",
          "px-4 py-2": size === "lg",
          "grid size-8 place-content-center": size === "icon",
        },
        className,
      )}
    >
      {children}
    </button>
  );
}
