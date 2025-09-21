"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import React, { useState, useEffect } from "react";
import "../globals.css";
import ToasterContext from "../context/ToastContext";

import Image from "next/image";
import Lottie from "lottie-react";
import comingSoonAnimation from "../../public/images/f9g6P0Y5Xz.json";
import { SecretCodeModal } from "@/components/SecretModal";

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
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const hasAccess = sessionStorage.getItem("site_unlocked") === "true";
    if (hasAccess) {
      setIsUnlocked(true);
    }
  }, []);

  const handleCodeSubmit = (inputCode: string) => {
    const correctCode = '1234abcd';
    if (inputCode === correctCode) {
      sessionStorage.setItem("site_unlocked", "true");
      setIsUnlocked(true);
    }
    setIsModalOpen(false);
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.className} bg-white dark:bg-black antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {!isUnlocked ? (
            <main className="flex h-screen w-full flex-col items-center justify-center bg-gray-50 dark:bg-black p-4">
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/images/logo/logo-light.svg"
                  alt="BLK Logo"
                  width={240}
                  height={50}
                  className="dark:hidden"
                />
                <Image
                  src="/images/logo/logo-dark.svg"
                  alt="BLK Logo"
                  width={240}
                  height={50}
                  className="hidden dark:block"
                />
                <Lottie
                  animationData={comingSoonAnimation}
                  loop={true}
                  className="h-80 w-auto cursor-pointer my-4"
                  onDoubleClick={() => setIsModalOpen(true)}
                />
                <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r from-gray-200 to-gray-500">
                  Something incredible is on the way.
                </h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                  We're preparing for launch. See you in the next tax season.
                </p>
                <p className="mt-8 text-sm text-gray-500 dark:text-gray-600 animate-pulse">
                  (Hint: Double-click the logo to enter)
                </p>
              </div>
            </main>
          ) : (
            <div className="bg-white dark:bg-[#151A21]">
              <Lines />
              <Header />
              <ToasterContext />
              {children}
              <Footer />
              <ScrollToTop />
            </div>
          )}
          
          <SecretCodeModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleCodeSubmit}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}