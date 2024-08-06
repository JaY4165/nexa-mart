import React from "react";
// import Footer from "./Footer";
import NavbarComponent from "./NavbarComponent";
import {
  getSignInUrl,
  getSignUpUrl,
  getUser,
} from "@workos-inc/authkit-nextjs";
async function SharedLayout({ children }: { children: React.ReactNode }) {
  const signInUrl = await getSignInUrl();
  const signUpUrl = await getSignUpUrl();
  return (
    <>
      <NavbarComponent signInUrl={signInUrl} signUpUrl={signUpUrl} />
      {children}
      {/* <Footer /> */}
    </>
  );
}

export default SharedLayout;
