"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import menuData from "./menuData";
import { MenuItem } from "@/components/MenuItem/MenuItem";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [stickyMenu, setStickyMenu] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathUrl = usePathname();
  const isSurveyPage = pathUrl === "/survey";

  useEffect(() => {
    const onScroll = () => setStickyMenu(window.scrollY >= 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDarkMode = () => setTheme(theme === "dark" ? "light" : "dark");
  const toggleNavigation = () => setNavigationOpen((o) => !o);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all ${
        stickyMenu ? "bg-white py-4 shadow dark:bg-black" : "bg-transparent py-7"
      }`}
    >
      <div className="mx-auto flex max-w-c-1390 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo/logo-light.svg"
            alt="logo"
            width={119}
            height={30}
            className="dark:hidden"
          />
          <Image
            src="/images/logo/logo-dark.svg"
            alt="logo"
            width={119}
            height={30}
            className="hidden dark:block"
          />
        </Link>

        {/* Hamburger for Mobile */}
        <button
          aria-label="Toggle navigation"
          onClick={toggleNavigation}
          className="xl:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {navigationOpen ? (
            <X className="h-6 w-6 text-black dark:text-white" />
          ) : (
            <Menu className="h-6 w-6 text-black dark:text-white" />
          )}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex xl:items-center xl:space-x-8">
          <ul className="flex items-center space-x-6">
            {menuData.map((item, idx) => (
              <li key={idx}>
                {item.submenu ? (
                  <MenuItem item={item.title} active={active} setActive={setActive}>
                    <ul className="flex flex-col bg-white p-4 shadow-md">
                      {item.submenu.map((sub, i) => (
                        <li key={i} className="py-1">
                          <Link href={sub.path || "#"} className="hover:text-primary">
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </MenuItem>
                ) : (
                  <Link
                    href={item.path}
                    className={`hover:text-primary ${pathUrl === item.path ? "text-primary" : ""}`}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          {!isSurveyPage && (
            <Link
              href="/survey"
              className="ml-4 rounded bg-blue-600 px-4 py-2 text-white"
            >
              Fill Our Survey
            </Link>
          )}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-blue-500" />}
          </button>
        </nav>

        {/* Mobile Nav */}
        {navigationOpen && (
          <div className="absolute inset-x-0 top-full bg-white p-4 shadow-md dark:bg-blacksection xl:hidden">
            <ul className="flex flex-col space-y-4">
              {menuData.map((item, idx) => (
                <li key={idx}>
                  {item.submenu ? (
                    <details>
                      <summary className="cursor-pointer py-2 hover:text-primary">
                        {item.title}
                      </summary>
                      <ul className="mt-2 flex flex-col space-y-2 pl-4">
                        {item.submenu.map((sub, i) => (
                          <li key={i}>
                            <Link
                              href={sub.path || "#"}
                              onClick={toggleNavigation}
                              className="hover:text-primary"
                            >
                              {sub.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link
                      href={item.path}
                      onClick={toggleNavigation}
                      className="block py-2 hover:text-primary"
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
              {!isSurveyPage && (
                <li>
                  <Link
                    href="/survey"
                    onClick={toggleNavigation}
                    className="block rounded bg-blue-600 px-4 py-2 text-center text-white"
                  >
                    Fill Our Survey
                  </Link>
                </li>
              )}
              <li>
                <button
                  onClick={toggleDarkMode}
                  className="mt-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700"  
                  aria-label="Toggle Dark Mode"
                >
                  {theme === "dark" ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-blue-500" />}
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
