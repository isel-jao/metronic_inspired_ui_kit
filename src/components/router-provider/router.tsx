import App from "@/App";
import { Outlet, createBrowserRouter } from "react-router-dom";
import NotfoundPage from "@/pages/notfound";
import HomePage from "@/pages/home";
import DevPage from "@/pages/dev";
import ButtonPage from "@/pages/components/button";
import AccordionPage from "@/pages/components/accodion";

export type Route = {
  path: string;
  name?: string;
  element: JSX.Element;
  children?: Route[];
};

export const routes: Route[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        name: "Home",
        element: <HomePage />,
      },
      {
        path: "components",
        name: "Components",
        element: <Outlet />,
        children: [
          {
            name: "Button",
            path: "button",
            element: <ButtonPage />,
          },
          {
            name: "Accordion",
            path: "accordion",
            element: <AccordionPage />,
          },
        ],
      },
      {
        path: "dev",
        name: "Dev",
        element: <DevPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotfoundPage />,
  },
];
export const router = createBrowserRouter(routes);
