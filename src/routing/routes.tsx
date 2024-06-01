// to make routing
import { createBrowserRouter } from "react-router-dom";

import HomePage from "./HomePage";
import PostDetails from "./PostDetails";

// create the router
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage></HomePage>,
    },
    {
      path: "/postdetails",
      element: <PostDetails></PostDetails>,
    },
  ],

  { basename: "/ReactAPI_Exercise.github.io" }
);

export default router;
