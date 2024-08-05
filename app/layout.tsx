import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import SharedLayout from "./shared/components/SharedLayout";
import React from "react";
import Providers from "./shared/provider/Providers";

const raleway = Raleway({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Providers>
          <div className="w-full">
            <SharedLayout>{children}</SharedLayout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
