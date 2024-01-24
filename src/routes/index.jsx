import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import ErrorPage from "./error-page";
import Contact from "./contacts";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "contacts/:contactId",
          element: <Contact />,
        },
      ],
  
    },
]);

export default router;
