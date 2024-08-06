import React from "react";
// import Footer from "./Footer";
import NavbarComponent from "./NavbarComponent";
import {
  getSignInUrl,
  getSignUpUrl,
  getUser,
  signOut,
} from "@workos-inc/authkit-nextjs";
async function SharedLayout({ children }: { children: React.ReactNode }) {
  const signInUrl = await getSignInUrl();
  const signUpUrl = await getSignUpUrl();
  const signOutUser = async () => {
    await signOut();
  };
  return (
    <>
      <NavbarComponent
        signInUrl={signInUrl}
        signUpUrl={signUpUrl}
        signOutUser={signOutUser}
      />
      {children}
      {/* <Footer /> */}
    </>
  );
}

export default SharedLayout;
