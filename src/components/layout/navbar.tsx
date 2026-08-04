"use client";

import {
  IconCommand,
  IconComponents,
  IconMoon,
  IconSearch,
  IconStar,
  IconSun,
} from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { GithubLogo } from "../icons/icons";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Button } from "./button";

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
            <h2 className="text-xl leading-[28px] font-[700] text-neutral-800 dark:text-neutral-100">
              Ace UI
            </h2>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {/* search */}
          <div className="dark:bg-dark flex items-center gap-2 rounded-lg bg-neutral-100 px-2 py-1.5 shadow-[inset_0_0_0_1px_hsl(0_0%_85%)] dark:shadow-[inset_0_0_0_1.2px_hsl(0_0%_20%)]">
            <IconSearch className="h-4 w-4" />
            <p>Search...</p>
            <div className="flex items-center gap-0.5 rounded-md border border-neutral-200 px-1 py-0 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
              <IconCommand className="h-3 w-3" />
              <p className="text-[10px]">K</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* github */}
            <div className="group flex cursor-pointer items-center gap-2 rounded-2xl border border-neutral-300 px-2 py-1 dark:border-neutral-900">
              <div className="flex gap-2">
                <GithubLogo />
                <span className="border-r border-r-neutral-800"></span>
              </div>
              <div className="flex items-center gap-1">
                <IconStar className="h-4 w-4 fill-neutral-400 stroke-neutral-400 transition-all duration-200 group-hover:fill-amber-500 group-hover:stroke-amber-500 dark:fill-neutral-600 dark:stroke-neutral-600" />
                <p>000</p>
              </div>
            </div>
            <div
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative"
            >
              <button className="relative flex size-4 cursor-pointer items-center justify-center rounded-md bg-neutral-200 p-3.5 shadow-[inset_0_0_0_2px_hsl(0_0%_85%)] active:scale-[0.97] dark:bg-neutral-800 dark:shadow-[inset_0_0_0_2px_hsl(0_0%_20%)]">
                {theme === "dark" ? (
                  <IconMoon
                    size={12}
                    className="absolute scale-0 rotate-90 transition-all duration-200 dark:scale-100 dark:rotate-0"
                  />
                ) : (
                  <IconSun
                    size={12}
                    className="absolute scale-100 rotate-0 transition-all duration-200 dark:scale-0 dark:rotate-90"
                  />
                )}
              </button>
            </div>
            <div className="-mr-2 cursor-pointer rounded-md px-3 py-2 transition-colors duration-200 hover:bg-neutral-200 dark:hover:bg-neutral-800">
              <h2>Docs</h2>
            </div>
            <div className="h-4 border-r border-neutral-600"></div>
            <div className="-ml-2 cursor-pointer rounded-md px-3 py-2 transition-colors duration-200 hover:bg-neutral-200 dark:hover:bg-neutral-800">
              <h2>Templates</h2>
            </div>
            <Link href={`/components`}>
              <Button className="flex items-center gap-2 px-2.5 py-2.5">
                All Components
                <IconComponents size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
