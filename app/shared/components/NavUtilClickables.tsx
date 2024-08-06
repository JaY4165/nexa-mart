import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarItem,
} from "@nextui-org/react";
import { Heart, ShoppingBag, User } from "lucide-react";
import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { NavProps } from "./NavbarComponent";
import Link from "next/link";

function NavUtilClickables({ signInUrl, signUpUrl }: NavProps) {
  const handleSignIn = () => {
    window.location.href = signInUrl;
  };

  const handleSignUp = () => {
    window.location.href = signUpUrl;
  };
  return (
    <>
      <NavbarItem className="hidden cursor-pointer md:flex">
        <Dropdown placement="bottom" backdrop="blur">
          <DropdownTrigger>
            <User className="hover:animate-appearance-in hover:fill-black hover:text-black hover:transition-all hover:duration-500 hover:ease-in-out" />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            {/* <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem> */}
            <DropdownItem key="SignIn" color="danger" onClick={handleSignIn}>
              <Link href={signInUrl}>Log In</Link>
            </DropdownItem>
            <DropdownItem key="signUp" color="danger" onClick={handleSignUp}>
              <Link href={signUpUrl}>Sign Up</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarItem>
      <NavbarItem className="hidden cursor-pointer md:flex">
        <Heart className="hover:animate-appearance-in hover:fill-danger-400 hover:text-danger-400 hover:transition-all hover:duration-500 hover:ease-in-out" />
      </NavbarItem>
      <NavbarItem className="hidden cursor-pointer md:flex">
        <ShoppingBag className="hover:animate-appearance-in hover:fill-fuchsia-600 hover:text-fuchsia-900 hover:transition-all hover:duration-500 hover:ease-in-out" />
      </NavbarItem>
      <NavbarItem className="hidden cursor-pointer md:flex">
        <ThemeSwitcher />
      </NavbarItem>
    </>
  );
}

export default NavUtilClickables;
