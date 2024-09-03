//loayout
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "./header/header";
import Footer from "@/app/footer";
import Dialogue from "@/app/dialogue";
import React from "react";

const work_sans = Work_Sans({
  subsets: ["latin"],
  // weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "artsmrkt",
  description: "artsmrkt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={work_sans.className}>
        <Header />
        {children}
        <Dialogue />
        <Footer />
      </body>
    </html>
  );
}
