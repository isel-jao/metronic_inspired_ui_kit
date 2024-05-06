import React from "react";
import ReactDOM from "react-dom/client";
import RouterProvider from "@/components/router-provider/index.tsx";
import "@/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider />
  </React.StrictMode>,
);
