import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 z-[99] flex h-10 w-10 items-center justify-center rounded-sm bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-opacity-90"
    >
      <span className="block h-3 w-3 rotate-45 border-l border-t border-white dark:border-gray-200"></span>
      <span className="sr-only">Scroll to top</span>
    </button>
  );
}
