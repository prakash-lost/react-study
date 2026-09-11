import React, { Component } from "react";
import Layout from "./layout/Layout";
import App from "./App";
import Aboutuspage from "./pages/Aboutuspage";
import Myskillpage from "./pages/Myskillpage";

// import { BrowserRouter, Routes, Route } from "react-router";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Authlayout from "./layout/Authlayout";
import Loginpage from "./pages/Loginpage";
import Authentication from "./pages/Authentication";
import Register from "./components/Register";
import Deal from "./pages/Deal";
import Detailspage from "./pages/Detailspage";
import AddProductForm from "./components/AddProductFrom";
import Signin from "./pages/Signin";

const RouterPage = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Layout,
      children: [
        { index: true, Component: App },
        { path: "about-us", Component: Aboutuspage },
        { path: "myskill-us", Component: Myskillpage },
        { path: "register", Component: Register },
        {path:'deal',Component:Deal},
        {path:'detailspage/:id',Component:Detailspage},
        {path:'deal/addproduct',Component:AddProductForm},
        {path:'signin',Component:Signin}
      ],
    },
    {
      // path: ,
      Component: Authlayout,
      children: [
        { path: "login", Component: Loginpage },
        { path: "auth", Component: Authentication },
      ],
    },
  ]);
  return (
    //     <BrowserRouter>
    //       <Routes>
    //         <Route element={<Layout />}>
    //           <Route path="/" element={<App />} />
    //           <Route path="/about-us" element={<Aboutuspage />} />
    //           <Route path="/myskill-us" element={<Myskillpage />} />
    //         </Route>
    //       </Routes>
    //     </BrowserRouter>
    //   );
    // };

    <RouterProvider router={router} />
  );
};

export default RouterPage;
