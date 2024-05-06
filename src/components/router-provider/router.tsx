import App from "@/App";
import { createBrowserRouter } from "react-router-dom";
import NotfoundPage from "@/pages/notfound";
import HomePage from "@/pages/home";
import DevPage from "@/pages/dev";

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
