import React from "react";
// import Footer from "./Footer";
import NavbarComponent from "./NavbarComponent";
function SharedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarComponent />
      {children}
      {/* <Footer /> */}
    </>
  );
}

export default SharedLayout;
