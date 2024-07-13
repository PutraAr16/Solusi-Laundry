import React from "react";
import Icons from "../assets/css/icons";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function Root() {
  return (
    <>
      <Navbar />
      <Icons />
      <div id="content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
  // ) : (
  //   <Navigate to="/admin" />
  // );
  // <>
  //   <Icons />
  //   <div id="content">
  //     <Outlet />
  //   </div>
  // </>
}
