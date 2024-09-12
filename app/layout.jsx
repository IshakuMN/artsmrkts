//loayout
import {Arimo} from "next/font/google";
import "./globals.css";
import Header from "./header/header";
import Footer from "@/app/footer";
import Dialogue from "@/app/dialogue";
import React from "react";
import {ThemeProvider} from "./context/nav";

const work_sans = Arimo({
    subsets: ["latin"],
    // weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
    title: "artsmrkt",
    description: "artsmrkt",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <ThemeProvider>
            <body className={work_sans.className}>
            <Header/>
            {children}
            <Dialogue/>
            <Footer/>
            </body>
        </ThemeProvider>
        </html>
    );
}
