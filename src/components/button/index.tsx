import { cn } from "@/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "text" | "outlined" | "muted" | "base";
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
        "relative flex h-fit w-fit items-center justify-center rounded-sm px-3 py-1.5 font-semibold capitalize opacity-75 duration-300 disabled:pointer-events-none disabled:grayscale-[75%]",
        {
          "bg-primary text-primary-foreground transition-[filter] hover:brightness-90 active:brightness-105":
            variant === "primary",
          "bg-muted text-muted-foreground transition-[filter] hover:brightness-95 active:brightness-100":
            variant === "muted",
          "after:contents-[''] text-primary after:absolute after:inset-0 after:rounded-sm after:bg-current after:opacity-0 after:transition-opacity hover:after:opacity-5 active:after:opacity-10":
            variant === "text",
          "after:contents-[''] before:contents-[''] text-primary before:absolute before:inset-0 before:rounded-sm before:bg-current before:opacity-0 before:transition-opacity after:absolute after:inset-0 after:rounded-sm after:border after:border-current after:opacity-50 after:transition-opacity hover:after:opacity-100 active:before:opacity-10":
            variant === "outlined",
          "px-2 py-1": size === "sm",
          "px-4 py-2": size === "md",
          "px-6 py-3": size === "lg",
          "size-8 p-0": size === "icon",
        },
        className,
      )}
    >
      {children}
    </button>
  );
}
