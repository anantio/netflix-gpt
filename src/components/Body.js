import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/browse" element={<Browse />}></Route>
          </Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
};

export default Body;
