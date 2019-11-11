import React from "react";
import Header from "./header";
import Navbar from "./navbar";

const Layout = props => {
  return (
    <>
      <Header />
      <Navbar />
      {props.children}
    </>
  );
};

export default Layout;
