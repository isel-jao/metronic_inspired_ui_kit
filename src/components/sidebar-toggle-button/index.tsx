import { cn } from "@/utils";
import { ArrowLeftToLineIcon } from "lucide-react";

interface SidebarToggleButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {}
export const SidebarToggleButton = ({
  className,
  onClick,
  children,
  ...props
}: SidebarToggleButtonProps) => {
  const toggleSidebarOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    const isOpen = document.body.getAttribute("data-sidebar-open") === "true";
    document.body.setAttribute("data-sidebar-open", String(!isOpen));
    document.body.style.setProperty(
      "--sidebar-width",
      isOpen ? "var(--sidebar-opened-width)" : "var(--sidebar-closed-width)",
    );
    document.body.style.setProperty(
      "--sidebar-toggle-icon-rotate",
      isOpen ? "0deg" : "180deg",
    );
    onClick?.(e);
  };

  return (
    <button
      {...props}
      onClick={toggleSidebarOpen}
      onMouseEnter={(e) => e.stopPropagation()}
      className={cn(
        "absolute bottom-1/2 right-0 top-1/2 grid size-7 -translate-y-1/2 translate-x-1/2 place-content-center rounded-sm border border-gray-500/10 bg-white text-gray-500  shadow-lg shadow-black/20 transition-colors hover:text-primary",
        className,
      )}
    >
      {children ?? (
        <ArrowLeftToLineIcon
          className="transition-transform duration-500"
          size={14}
          style={{
            transform: "rotate(var(--sidebar-toggle-icon-rotate))",
          }}
        />
      )}
    </button>
  );
};
