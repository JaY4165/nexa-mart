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
  return (
    <>
      <NavbarItem className="hidden cursor-pointer md:flex">
        <Dropdown placement="bottom" backdrop="blur">
          <DropdownTrigger>
            <User />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            {/* <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem> */}
            <DropdownItem key="SignIn" color="danger">
              <Link href={signInUrl}>Log In</Link>
            </DropdownItem>
            <DropdownItem key="signUp" color="danger">
              <Link href={signUpUrl}>Sign Up</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarItem>
      <NavbarItem className="hidden cursor-pointer md:flex">
        <Heart className="hover:fill-danger-400" />
      </NavbarItem>
      <NavbarItem className="hidden cursor-pointer md:flex">
        <ShoppingBag />
      </NavbarItem>
      <NavbarItem className="hidden cursor-pointer md:flex">
        <ThemeSwitcher />
      </NavbarItem>
    </>
  );
}

export default NavUtilClickables;
