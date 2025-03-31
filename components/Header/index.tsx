"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import menuData from "./menuData";
import { Sun, Moon } from "lucide-react";
// Import our new hover card components
import { MenuItem } from "@/components/MenuItem/MenuItem";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [stickyMenu, setStickyMenu] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathUrl = usePathname();
  const isSurveyPage = pathUrl === "/survey";

  // Sticky menu: add background/shadow once scrolled beyond 80px
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 z-99999 w-full py-7 ${
        stickyMenu
          ? "bg-white !py-4 shadow transition duration-100 dark:bg-black"
          : ""
      }`}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        {/* Logo & Mobile Hamburger */}
        <div className="flex w-full items-center justify-between xl:w-1/4">
          <Link href="/">
            <Image
              src="/images/logo/logo-light.svg"
              alt="logo"
              width={119.03}
              height={30}
              className="w-full dark:hidden"
            />
            <Image
              src="/images/logo/logo-dark.svg"
              alt="logo"
              width={119.03}
              height={30}
              className="w-full hidden dark:block"
            />
          </Link>

          {/* Hamburger Toggle BTN for Mobile */}
          <button
            aria-label="hamburger Toggler"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black dark:bg-white duration-200 ease-in-out ${
                    !navigationOpen ? "w-full delay-300" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black dark:bg-white duration-200 ease-in-out ${
                    !navigationOpen ? "w-full delay-400" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black dark:bg-white duration-200 ease-in-out ${
                    !navigationOpen ? "w-full delay-500" : "w-0"
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 block h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black dark:bg-white duration-200 ease-in-out ${
                    !navigationOpen ? "h-0" : "h-full"
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black dark:bg-white duration-200 ease-in-out ${
                    !navigationOpen ? "h-0" : "h-0.5"
                  }`}
                ></span>
              </span>
            </span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full">
          <nav>
            <ul className="flex font-sans relative xl:left-1/2 flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
              {menuData.map((menuItem, key) =>
                menuItem.submenu ? (
                  // Use our hover MenuItem for items with submenu on desktop
                  <li key={key}>
                    <MenuItem
                      item={menuItem.title}
                      active={active}
                      setActive={setActive}
                    >
                      <ul className="flex flex-col gap-2">
                        {menuItem.submenu.map((subItem, subKey) => (
                          <li key={subKey} className="hover:text-primary">
                            <Link href={subItem.path || "#"}>
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </MenuItem>
                  </li>
                ) : (
                  <li key={key}>
                    <Link
                      href={menuItem.path}
                      className={
                        pathUrl === menuItem.path
                          ? "text-primary hover:text-primary"
                          : "hover:text-primary"
                      }
                    >
                      {menuItem.title}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* CTA Button & Dark Mode Toggle (Desktop) */}
          <div className="mt-7 flex font-sans items-center xl:mt-0">
            {!isSurveyPage && (
              <Link
                href="/survey"
                className="flex items-center justify-center font-bold rounded-md bg-blue-600 px-7.5 py-2.5 text-white duration-300 ease-in-out"
              >
                Fill Our Survey
              </Link>
            )}
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-blue-500" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {navigationOpen && (
          <div className="xl:hidden mt-4 w-full bg-white p-7.5 shadow-solid-5 dark:bg-blacksection">
            <nav>
              <ul className="flex flex-col gap-5">
                {menuData.map((menuItem, key) =>
                  menuItem.submenu ? (
                    // For mobile, you might continue using click toggling (or a simplified version)
                    <li key={key} className="group relative">
                      <button
                        onClick={() =>
                          setActive(active === menuItem.title ? null : menuItem.title)
                        }
                        className="flex cursor-pointer items-center justify-between gap-3 hover:text-primary"
                      >
                        {menuItem.title}
                        <span>
                          <svg
                            className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                          </svg>
                        </span>
                      </button>
                      {active === menuItem.title && (
                        <ul className="mt-4 flex flex-col gap-2">
                          {menuItem.submenu.map((subItem, subKey) => (
                            <li key={subKey} className="hover:text-primary">
                              <Link
                                href={subItem.path || "#"}
                                onClick={() => setNavigationOpen(false)}
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ) : (
                    <li key={key}>
                      <Link
                        href={menuItem.path}
                        className="hover:text-primary"
                        onClick={() => setNavigationOpen(false)}
                      >
                        {menuItem.title}
                      </Link>
                    </li>
                  )
                )}
                {!isSurveyPage && (
                  <li>
                    <Link
                      href="/survey"
                      className="block text-center rounded-md bg-blue-600 px-7.5 py-2.5 text-white duration-300 ease-in-out"
                      onClick={() => setNavigationOpen(false)}
                    >
                      Fill Our Survey
                    </Link>
                  </li>
                )}
                <li>
                  <button
                    onClick={toggleDarkMode}
                    className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
                    aria-label="Toggle Dark Mode"
                  >
                    {theme === "dark" ? (
                      <Sun className="h-5 w-5 text-yellow-500" />
                    ) : (
                      <Moon className="h-5 w-5 text-blue-500" />
                    )}
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
