import { RouterProvider as ReactRouterProvider } from "react-router-dom";
import { router } from "./router";

export default function RouterProvider() {
  return <ReactRouterProvider router={router} />;
}
