import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function SharedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default SharedLayout;
