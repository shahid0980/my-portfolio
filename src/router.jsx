import { createBrowserRouter } from "react-router";
import App from "./App.jsx";
import Home from "./components/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/my-portfolio/",
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
