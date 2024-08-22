//loayout
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "./header/header";
import Footer from "@/app/footer";

const work_sans = Work_Sans({
  subsets: ["latin"],
  // weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "artsmarket",
  description: "artsmarket",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={work_sans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
