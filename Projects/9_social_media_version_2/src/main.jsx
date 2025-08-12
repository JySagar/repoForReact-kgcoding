import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App.jsx";
import CreatePost, { createPostAction } from "./components/CreatePost.jsx";
import PostList, { postLoader } from "./components/PostList.jsx";

const routerVar = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // loader makes PostList render only after the loading of fetching inside loader is done.
      { path: "/", element: <PostList />, loader: postLoader },
      // action will be called only when any submission is done in CreatePost.
      {
        path: "create-post",
        element: <CreatePost />,
        action: createPostAction,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routerVar} />
    {/* Below not needed as it is now rendered in routerVar */}
    {/* <App /> */}
  </StrictMode>
);
