import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cards from '@/components/cards'
import Home from "@/pages/Home";
import AddNote from "@/pages/AddNote";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "home",
        element: <Cards />,
      },
      {
        path: "add",
        element: <AddNote />
      }
    ]
  },
]);

export default router
