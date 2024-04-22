import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Head from "next/head";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marina Oreskovic",
  description: "Marina Oreskovic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head> {/* Agrega el componente Head */}
        <link rel="icon" href="app/favicon.ico" /> {/* Ruta al ícono en tu carpeta /public */}
      </Head>
      <body className={urbanist.className}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
