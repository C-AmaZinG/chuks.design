import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Script from "next/script";
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
        <Script id="hotjar" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3265395,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
        <Navbar />
        <main className="layout-wrapper">
          {children}
        </main>
      </body>
    </html>
  );
}
