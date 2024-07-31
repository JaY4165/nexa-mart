"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Input,
  Divider,
} from "@nextui-org/react";
import { Heart, Search, ShoppingBag, User } from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Kids", "Women", "Men", "Brands"];

  return (
    <Navbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="w-full"
    >
      <NavbarContent className="md:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="md:hidden" justify="end">
        <NavbarBrand className="flex items-center justify-end">
          <p className="font-bold text-inherit">NexaMart</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden justify-around md:flex md:items-center"
        justify="start"
      >
        <NavbarBrand>
          <p className="text-xl font-extrabold text-inherit">NexaMart</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-8 pr-20 md:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" className="font-semibold" href="#">
            Kids
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" className="font-semibold">
            Women
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="font-semibold" href="#">
            Men
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="font-semibold" href="#">
            Brands
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="gap-5 max-md:hidden">
        <NavbarItem className="hidden lg:flex">
          <Input
            isClearable
            classNames={{
              base: "max-w-full h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<Search size={18} />}
            type="input"
          />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <User />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Heart />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <ShoppingBag />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="max-md:hidden">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
