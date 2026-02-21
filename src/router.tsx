import { createBrowserRouter } from "react-router";
import App from "./App.tsx";
import Home from "./components/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);

export default router;
