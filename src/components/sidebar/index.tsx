import { routes } from "./routes";
import { RouteItem } from "./route-item";

export const Sidebar = () => {
  return (
    <div
      data-sidebar-open="false"
      className="dark fixed inset-y-0 left-0 z-[11] w-sidebar-width shrink-0 border-r bg-card  text-card-foreground transition-[width] duration-300 ease-in-out hover:w-sidebar-open"
    >
      <div className="relative h-header border-b">
        <div className=" grid h-full w-sidebar-closed place-content-center font-extrabold">
          LOGO
        </div>
        {/* <SidebarToggleButton /> */}
        <div className="flex flex-col px-4">
          {routes.map((route) => (
            <RouteItem key={route.name} route={route} />
          ))}
        </div>
      </div>
    </div>
  );
};
