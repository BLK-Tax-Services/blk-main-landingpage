"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import React, { useState } from "react";
import "../globals.css";
import ToasterContext from "../context/ToastContext";

import Lottie from "lottie-react";
import comingSoonAnimation from "../../public/images/f9g6P0Y5Xz.json";
import { SecretCodeModal } from "@/components/SecretModal";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [landingHidden, setLandingHidden] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCodeSubmit = (inputCode: string) => {
    const correctCode = '1234abcd'; // Your secret code
    if (inputCode === correctCode) {
      setLandingHidden(false);
    }
    setIsModalOpen(false);
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Using the clean, modern 'Inter' font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* Applying the new font and anti-aliasing for smooth text */}
      <body className={`font-inter bg-black antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {landingHidden ? (
            <div className="flex h-screen w-full items-center justify-center bg-black p-4">
              <div className="flex flex-col items-center text-center max-w-2xl">
                <Lottie
                  animationData={comingSoonAnimation}
                  loop={true}
                  // Reduced bottom margin from mb-6 to mb-2 for tighter spacing
                  className="h-96 w-auto cursor-pointer mb-2"
                  onDoubleClick={() => setIsModalOpen(true)}
                />
                <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
                  Something incredible is on the way.
                </h1>
                <p className="mt-4 text-lg text-gray-400">
                  We're preparing for launch. See you in the next tax season.
                </p>
                <p className="mt-8 text-sm text-gray-600 animate-pulse">
                  (Hint: Double-click the logo to enter)
                </p>
              </div>
            </div>
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