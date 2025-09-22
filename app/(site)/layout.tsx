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
  const [isLoading, setIsLoading] = useState(true);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const hasAccess = sessionStorage.getItem("site_unlocked") === "true";
    if (hasAccess) {
      setIsUnlocked(true);
    }
    setIsLoading(false);

    import("@lottiefiles/lottie-player");
  }, []);

  const handleCodeSubmit = (inputCode: string) => {
    const correctCode = '9274018356228105';
    if (inputCode === correctCode) {
      sessionStorage.setItem("site_unlocked", "true");
      setIsUnlocked(true);
    }
    setIsModalOpen(false);
  };

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
          {!isUnlocked ? (
            <main className="flex h-screen w-full flex-col items-center justify-center bg-gray-50 p-4 dark:bg-black">
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
                
                <lottie-player
                  autoplay
                  loop
                  mode="normal"
                  src="/images/f9g6P0Y5Xz.json"
                  style={{ width: "400px", height: "400px" }}
                ></lottie-player>

                <h1 className="from-gray-200 to-gray-500 text-5xl font-extrabold text-gray-800 dark:bg-gradient-to-r dark:bg-clip-text dark:text-transparent sm:text-6xl">
                  Something incredible is on the way.
                </h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                  We're preparing for launch. See you in the next tax season.
                </p>
                
                {/* Replaced the hint with a button */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="mt-8 rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition-transform duration-300 hover:scale-105 hover:bg-blue-700"
                >
                  Take a Look
                </button>
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