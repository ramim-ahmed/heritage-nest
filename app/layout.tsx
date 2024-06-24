import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
export const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Heritage Nest | Home",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
