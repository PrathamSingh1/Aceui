"use client";

import {
  IconCommand,
  IconMoon,
  IconSearch,
  IconStar,
  IconSun,
} from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { GithubLogo } from "../icons/icons";
import { useTheme } from "next-themes";
import Link from "next/link";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <button className="h-5 w-5" aria-label="Toggle theme"></button>;
  }
  return (
    <div className="bg-light dark:bg-dark sticky top-0 right-0 left-0 z-50 h-[65px] w-full">
      <div className="flex h-full items-center justify-between border-b border-neutral-300 px-8 text-sm font-medium text-neutral-800 dark:border-neutral-800 dark:text-neutral-400">
        <div>
          {/* logo */}
          <Link href="/">
            <h2 className="text-xl font-[700] leading-[28px] text-neutral-800 dark:text-neutral-100">Ace UI</h2>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {/* search */}
          <div className="dark:bg-dark flex items-center gap-2 rounded-lg bg-neutral-100 px-2 py-1 shadow-[inset_0_0_0_1px_hsl(0_0%_85%)] dark:shadow-[inset_0_0_0_1.2px_hsl(0_0%_20%)]">
            <IconSearch className="h-4 w-4" />
            <p>Search...</p>
            <div className="flex items-center gap-0.5 rounded-md border border-neutral-200 px-1 py-0 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
              <IconCommand className="h-3 w-3" />
              <p className="text-[10px]">K</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* github */}
            <div className="flex items-center gap-2 rounded-2xl border border-neutral-300 px-2 py-1 dark:border-neutral-900 group cursor-pointer">
              <div className="flex gap-2">
                <GithubLogo />
                <span className="border-r border-r-neutral-800"></span>
              </div>
              <div className="flex items-center gap-1">
                <IconStar className="h-4 w-4 dark:fill-neutral-600 fill-neutral-400 dark:stroke-neutral-600 stroke-neutral-400 group-hover:fill-amber-500 group-hover:stroke-amber-500 transition-all duration-200" />
                <p>000</p>
              </div>
            </div>
            <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="relative">
              <button
                className="size-4 flex items-center justify-center relative rounded-md bg-neutral-200 dark:bg-neutral-800 p-3.5 cursor-pointer active:scale-[0.97] shadow-[inset_0_0_0_2px_hsl(0_0%_85%)] dark:shadow-[inset_0_0_0_2px_hsl(0_0%_20%)]"
            >
                {theme === "dark" ? (
                  <IconMoon size = { 12 }  className="rotate-90 absolute scale-0 transition-all duration-200 dark:rotate-0 dark:scale-100" />

              ) : (
                    <IconSun size={12} className="rotate-0 absolute scale-100 transition-all duration-200 dark:rotate-90 dark:scale-0" />

              )}
              </button>
            </div>
            <div className="px-3 py-2 hover:bg-neutral-800 rounded-md cursor-pointer transition-colors duration-200 -mr-2">
              <h2>Docs</h2>
            </div>
            <div className="h-4 border-r border-neutral-600"></div>
            <div className="px-3 py-2 hover:bg-neutral-800 rounded-md cursor-pointer transition-colors duration-200 -ml-2">
              <h2>Templates</h2>
            </div>
            <Link href="/components">
              <button className="cursor-pointer rounded-lg border border-neutral-300 bg-neutral-200 px-2 py-2 font-semibold text-neutral-800 text-shadow-lg hover:bg-neutral-300 active:scale-[0.97]">
                All Component
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
