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
  Input,
} from "@nextui-org/react";
import { Search } from "lucide-react";
import NavUtilClickables from "./NavUtilClickables";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  const menuItems: INavItem[] = [
    {
      title: "Kids",
      href: "/kids",
    },
    {
      title: "Women",
      href: "/women",
    },
    {
      title: "Men",
      href: "/men",
    },
    {
      title: "Brands",
      href: "/brands",
    },
  ];
  return (
    <Navbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="min-md:px-[-5rem] w-full pt-2"
    >
      <NavbarContent className="md:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="md:hidden" justify="end">
        <NavbarBrand className="flex items-center justify-end">
          <p className="font-bold text-inherit">
            Nexa<span className="text-danger-400">Mart</span>
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden justify-around md:flex md:items-center"
        justify="start"
      >
        <NavbarBrand>
          <p className="text-2xl font-extrabold text-inherit">
            Nexa<span className="text-danger-400">Mart</span>
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-8 pr-20 md:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" className="font-semibold" href="#">
            Kids
          </Link>
        </NavbarItem>
        <NavbarItem isActive className="text-danger-400">
          <Link
            href="/"
            color="foreground"
            className="font-semibold active:text-danger-400"
          >
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
            variant="flat"
            classNames={{
              base: "max-w-full h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Search for products"
            size="sm"
            startContent={<Search size={18} />}
            type="input"
          />
        </NavbarItem>
        <NavUtilClickables />
      </NavbarContent>

      <NavbarMenu className="min-md:hidden">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={item.title}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              href={item.href}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
