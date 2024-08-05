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

function NavUtilClickables() {
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
            <DropdownItem key="login" color="danger">
              Log In
            </DropdownItem>
            <DropdownItem key="logout" color="danger">
              Sign Up
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarItem>
      <NavbarItem className="hidden cursor-pointer md:flex">
        <Heart />
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
