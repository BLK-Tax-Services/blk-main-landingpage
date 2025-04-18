"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import React from "react";
import "../globals.css";
import ToasterContext from "../context/ToastContext";

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head>
      {/* Boldonse */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Boldonse&display=swap" rel="stylesheet" />
      {/* Roboto with all weights */}
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
        rel="stylesheet"
      />
    </head>
    <body className="font-roboto bg-white dark:bg-[#151A21]">
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Lines />
      <Header />
      <ToasterContext />
      {children}
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
    </body>
    </html>
  );
}