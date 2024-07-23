import React from "react";
import Image from "next/image";
function Navbar() {
  const Logo = "/images/nexa-light.png";
  return (
    <header className="mt-6 w-full">
      <nav className="flex items-center justify-between">
        <div>
          <ul className="flex w-full items-center justify-between space-x-5 font-semibold uppercase">
            <li>Women</li>
            <li>Men</li>
            <li>Kids</li>
            <li>Brands</li>
          </ul>
        </div>
        <div className="">
          <Image
            src={Logo}
            alt="logo"
            width={200}
            height={200}
            objectFit="scale-down"
          />
        </div>

        <div className="">
          <ul className="flex items-center justify-center space-x-5 font-semibold uppercase">
            <li>Account</li>
            <li>Cart</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
