import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chuks.Design | Growth Designer & Creative Director",
  description:
    "Portfolio of Chukwudi Ananti, a growth designer and creative director crafting digital products, brand systems, and conversion-driven interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
