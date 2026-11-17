import React from "react";
import Products from "./redux/components/Products";
import NavBar from "./redux/components/NavBar";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

const App = () => {
  return (
    <>
     <RouterProvider router={router} />;
    </>
  );
};

export default App;
