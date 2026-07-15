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
    <div className="bg-light dark:bg-dark h-[65px] w-full">
      <div className="flex h-full items-center justify-between border-b border-neutral-800 px-8 text-sm font-[500] text-neutral-400">
        <div>
          {/* logo */}
          <h2 className="text-2xl font-black">Ace UI</h2>
        </div>
        <div className="flex items-center gap-8">
          {/* search */}
          <div className="flex items-center gap-2 rounded-md border border-neutral-700 px-2 py-1">
            <IconSearch className="h-4 w-4" />
            <p>Search...</p>
            <div className="flex items-center gap-0.5 rounded-md border border-neutral-700 bg-neutral-800 px-1 py-0">
              <IconCommand className="h-3 w-3" />
              <p className="text-[10px]">K</p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            {/* github */}
            <div className="flex items-center gap-2 rounded-2xl border border-neutral-900 px-2 py-1">
              <div className="flex gap-2">
                <GithubLogo />
                <span className="border-r border-r-neutral-800"></span>
              </div>
              <div className="flex items-center gap-1">
                <IconStar className="h-4 w-4 fill-neutral-600 stroke-neutral-600" />
                <p>000</p>
              </div>
            </div>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="cursor-pointer"
            >
              {theme === "dark" ? (
                <IconSun className="h-5 w-5" />
              ) : (
                <IconMoon className="h-5 w-5" />
              )}
            </button>
            <h2>Docs</h2>
            <div className="h-4 border-r border-neutral-600"></div>
            <h2>Templates</h2>
            <button className="cursor-pointer rounded-lg border border-neutral-300 bg-neutral-200 px-2 py-2 font-semibold text-neutral-800 text-shadow-lg hover:bg-neutral-300 active:scale-[0.97]">
              All Component
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
