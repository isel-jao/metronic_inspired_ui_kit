import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="pl-sidebar-width pt-header  text-sm transition-[padding-left] duration-300">
      <Header />
      <Sidebar />
      {children}
    </main>
  );
};
