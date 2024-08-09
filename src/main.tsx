import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Linkinbio from "./pages/Linkinbio.tsx";
import LinkinbioContextProvider from "./context/linkinbio.context.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:id",
    element: <Linkinbio />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LinkinbioContextProvider>
      <RouterProvider router={router} />
    </LinkinbioContextProvider>
  </React.StrictMode>
);
