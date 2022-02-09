import React from "react";
import MenuWeb from "../components/Header/Menu/MenuWeb";

export default function Layout(props) {
  return (
    <>
      {/* <MenuWeb /> */}
      <div className="adaptative">
        {props.children}
      </div>
      {/* <Footer /> */}
    </>
  );
}