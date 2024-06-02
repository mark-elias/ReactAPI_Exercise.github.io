// to make routing
import { createBrowserRouter } from "react-router-dom";

import HomePage from "./HomePage";
import PostDetails from "./PostDetails";

// create the router
const router = createBrowserRouter(
  [
    {
      path: "/ReactAPI_Exercise.github.io",
      element: <HomePage></HomePage>,
    },
    { path: "/ReactAPI_Exercise.github.io/", element: <HomePage></HomePage> },
    {
      path: "/ReactAPI_Exercise.github.io/postdetails",
      element: <PostDetails></PostDetails>,
    },
  ]

  // { basename: "https://github.com/mark-elias/ReactAPI_Exercise.github.io/blob/main/src/routing/HomePage.tsx" }
);

export default router;
