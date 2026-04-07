

import { createBrowserRouter } from 'react-router-dom';
import { Home } from "./components/pages/Home";
import { App } from "./App";
import { NotFound } from './components/pages/NotFound';
import Blog from './components/pages/Blog';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "blog", element: <Blog /> },
      {
        path: "*",
        element: <NotFound />,

      },
    ],

  },
  {
    path: "*",
    element: <NotFound />,

  },
]);


