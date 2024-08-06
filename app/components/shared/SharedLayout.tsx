import React from "react";
// import Footer from "./Footer";
import NavbarComponent from "./NavbarComponent";

async function SharedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarComponent />
      {children}
      {/* <Footer /> */}
    </>
  );
}

export default SharedLayout;
