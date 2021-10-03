import { Fragment } from "react";
import React from "react";
import MainHeader from "./MainHeader";

function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
