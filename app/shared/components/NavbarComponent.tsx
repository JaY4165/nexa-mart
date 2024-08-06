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

export type NavProps = {
  signInUrl: string;
  signUpUrl: string;
};

export default function NavbarComponent({ signInUrl, signUpUrl }: NavProps) {
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
          <Link href="/" color="foreground">
            <p className="font-bold text-inherit">
              Nexa<span className="text-danger-400">Mart</span>
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden justify-around md:flex md:items-center"
        justify="start"
      >
        <NavbarBrand>
          <Link href="/" color="foreground">
            <p className="text-2xl font-extrabold text-inherit">
              Nexa<span className="text-danger-400">Mart</span>
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-8 pr-20 md:flex" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.title}>
            <Link
              color="foreground"
              className="font-semibold hover:text-danger-400"
              href={item.href}
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
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
        <NavUtilClickables signInUrl={signInUrl} signUpUrl={signUpUrl} />
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
