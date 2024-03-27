import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, Link, RouterProvider } from "react-router-dom";
import "./index.css";
import { Layout } from "./layout/layout";
import FileExplorer from "./modules/file-explorer";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <div>
            Hello world!: <Link to="/test">Test</Link>
          </div>
        ),
      },
      {
        path: "/file-explorer",
        element: <FileExplorer />,
      },
      {
        path: "/test",
        element: <div>Hello test!</div>,
      },
      {
        path: "*",
        element: <div>Not found!</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
