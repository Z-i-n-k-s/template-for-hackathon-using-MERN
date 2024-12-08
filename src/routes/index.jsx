import App from "@/App";
import HomePage from "@/pages/HomePage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
     
    },
  ]);
  
  export default router;