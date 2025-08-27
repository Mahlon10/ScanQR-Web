"use client";

import '../styles/globals.css';
import { usePathname } from "next/navigation";
import Navbar from '../components/Navbar';

export default function RootLayout({ children }) {
    const pathname = usePathname();
    const hideNav = pathname === "/PurchaseForm";
    return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://i.ibb.co/Rp630MQT/scanqr-fav.jpg" sizes="any" />
        <title>ScanQR</title>
        <meta name="description" content="A modern webapp containing profile social links and contacts" />
      </head>
      <body>
      {!hideNav && <Navbar />}
      <main>{children}</main>
      </body>
    </html>
  );
}

