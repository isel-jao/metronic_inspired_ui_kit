import { SidebarToggleButton } from "../sidebar-toggle-button";
import { Link } from "react-router-dom";
import React from "react";

export type Route = {
  name: string;
  icon?: React.ReactNode;
} & (
  | {
      path: string;
    }
  | {
      children: Route[];
    }
);

export const routes: Route[] = [
  {
    name: "Dashboard",
    path: "/",
  },
  {
    name: "Components",
    children: [
      {
        name: "Button",
        path: "/components/button",
      },
    ],
  },
];

export const RouteItem = ({ route }: { route: Route; level?: number }) => {
  if ("path" in route) {
    return (
      <Link to={route.path} className="px-4 py-2 font-semibold  ">
        {route.name}
      </Link>
    );
  }
  return (
    <>
      <div className=" flex items-center px-4 py-2 font-semibold">
        {route.icon}
        <span>{route.name}</span>
      </div>
      <div className="flex flex-col pl-4">
        {route.children.map((child) => (
          <RouteItem key={child.name} route={child} />
        ))}
      </div>
    </>
  );
};

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
