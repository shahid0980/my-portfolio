

import { createBrowserRouter } from 'react-router-dom';
import { Home } from "./components/pages/Home";
import { Blog } from "./components/pages/Blog";
import { App } from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "blog", element: <Blog /> },
    ],
  },
]);


