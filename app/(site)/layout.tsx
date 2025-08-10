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
  const [landingHidden, setLandingHidden] = React.useState(true);

  const showPrompt = () => {
    let inputCode = prompt("Please enter your code:", "");
    const code = '1234abcd'
    if (inputCode != null) {
      if (inputCode === code) {
        setLandingHidden(false);
      }
    }
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Boldonse */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Boldonse&display=swap"
          rel="stylesheet"
        />
        {/* Roboto with all weights */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`boldonse font-roboto bg-white  ${
          landingHidden ? "" : "dark:bg-[#151A21]"
        }`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {landingHidden ? (
            <div className={`flex h-screen items-center justify-center`}>
              <div className="flex-col justify-items-center">
                <img
                  src={`/images/construction.svg`}
                  className={`h-66 mx-auto`}
                  alt={`construction image`}
                  onDoubleClick={() => showPrompt()}
                />
                <p className={`mx-auto mt-2 text-5xl text-black`}>Coming Soon</p>
                <p className={`mx-auto text-xl`}>Site Under Construction</p>
              </div>
            </div>
          ) : (
            <>
              <Lines />
              <Header />
              <ToasterContext />
              {children}
              <Footer />
              <ScrollToTop />
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
