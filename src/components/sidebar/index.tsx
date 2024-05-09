import { ArrowLeftToLineIcon } from "lucide-react";

export const Sidebar = () => {
  const toggleSidebarOpen = () => {
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
  };

  return (
    <div
      data-sidebar-open="false"
      className="dark fixed inset-y-0 left-0 w-sidebar-width shrink-0 border-r bg-card  text-card-foreground transition-[width] duration-300 ease-in-out hover:w-sidebar-open"
    >
      <div className="relative h-header border-b">
        <div className=" grid h-full w-sidebar-closed place-content-center font-extrabold">
          LOGO
        </div>
        <button
          onClick={toggleSidebarOpen}
          onMouseEnter={(e) => e.stopPropagation()}
          className="absolute bottom-1/2 right-0 top-1/2 grid size-7 -translate-y-1/2 translate-x-1/2 place-content-center rounded-sm border border-gray-500/10 bg-white text-gray-500  shadow-lg shadow-black/20 transition-colors hover:text-primary"
        >
          <ArrowLeftToLineIcon
            className="transition-transform duration-500"
            size={14}
            style={{
              transform: "rotate(var(--sidebar-toggle-icon-rotate))",
            }}
          />
        </button>
      </div>
    </div>
  );
};
