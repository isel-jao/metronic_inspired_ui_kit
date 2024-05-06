import { ArrowLeftToLineIcon } from "lucide-react";
import { useRef } from "react";
import { Link, Outlet } from "react-router-dom";

export const Header = () => {
  return (
    <div className="h-header left-sidebar-width fixed right-0 top-0 flex shrink-0 items-center gap-4 border px-8 font-semibold transition-[left]">
      <Link to="/">
        <button className="rounded-sm px-3 py-1.5 text-primary shadow">
          Dashboard
        </button>
      </Link>
      <Link to="/components">
        <button className="rounded-sm px-3 py-1.5 hover:text-primary ">
          Compents
        </button>
      </Link>
      <Link to="/dev">
        <button className="rounded-sm px-3 py-1.5 hover:text-primary ">
          Dev
        </button>
      </Link>
    </div>
  );
};
export const Sidebar = () => {
  const ref = useRef<HTMLDivElement>(null);

  const toggleSidebarOpen = () => {
    const sidebar = ref.current;
    if (!sidebar) return;
    const isOpen = sidebar.getAttribute("data-sidebar-open") === "true";
    sidebar.setAttribute("data-sidebar-open", String(!isOpen));
    document.body.style.setProperty(
      "--sidebar-width",
      isOpen ? "var(--sidebar-opened-width)" : "var(--sidebar-closed-width)",
    );
  };

  return (
    <div
      ref={ref}
      data-sidebar-open="false"
      className="w-sidebar-width dark fixed inset-y-0 left-0 shrink-0 border-r bg-card  text-card-foreground transition-[width] "
    >
      <div className="h-header relative border-b">
        <div className="debug w-sidebar-closed grid h-full place-content-center font-extrabold">
          LOGO
        </div>
        <button
          onClick={toggleSidebarOpen}
          className="absolute bottom-1/2 right-0 top-1/2 grid size-7 -translate-y-1/2 translate-x-1/2 place-content-center rounded-sm border border-gray-500/10 bg-white text-gray-500  shadow-lg shadow-black/20 transition-colors hover:text-primary"
        >
          <ArrowLeftToLineIcon size={14} />
        </button>
      </div>
    </div>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="pt-header pl-sidebar-width  transition-[padding-left]">
      <Header />
      <Sidebar />
      {children}
    </main>
  );
};

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
