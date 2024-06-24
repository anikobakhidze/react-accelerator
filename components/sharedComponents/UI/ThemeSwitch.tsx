"use client";
import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { ClipLoader } from "react-spinners";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
    if (!theme) {
      setTheme("system");
    }
  }, [setTheme, theme]);

  if (!mounted) {
    return <ClipLoader size={20} color="#e4986a" />;
  }

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div
      className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-btn-primary-color flex justify-center items-center hover:opacity-75 transition-opacity duration-300 cursor-pointer"
      onClick={toggleTheme}
    >
      {resolvedTheme === "dark" ? (
        <FiSun className="text-white w-4 h-4 md:w-5 md:h-5" />
      ) : (
        <FiMoon className="text-white w-4 h-4 md:w-5 md:h-5" />
      )}
    </div>
  );
}
