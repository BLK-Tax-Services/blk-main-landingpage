"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import React, { useState, useEffect } from "react";
import "../globals.css";
import ToasterContext from "../context/ToastContext";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    import("@lottiefiles/lottie-player");
  }, []);

  if (isLoading) {
    return (
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} bg-white dark:bg-black`}></body>
      </html>
    );
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.className} bg-white antialiased dark:bg-black`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="bg-white dark:bg-[#151A21]">
            <Lines />
            <Header />
            <ToasterContext />
            {children}
            <Footer />
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}