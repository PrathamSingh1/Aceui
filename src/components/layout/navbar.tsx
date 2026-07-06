import { IconCommand, IconSearch, IconStar } from "@tabler/icons-react";
import React from "react";
import { GithubLogo } from "../icons/icons";

export function Navbar() {
  return (
    <div className="bg-light dark:bg-dark h-[65px] w-full">
      <div className="flex h-full items-center justify-between border-b border-neutral-800 px-8 text-sm font-[500] text-neutral-400">
        <div>
          {/* logo */}
          <h2 className="text-2xl font-black">Ace UI</h2>
        </div>
        <div className="flex items-center gap-8">
          {/* search */}
          <div className="flex items-center gap-2 rounded-md border border-t-2 border-neutral-700 px-2 py-1">
            <IconSearch className="h-4 w-4" />
            <p>Search...</p>
            <div className="flex items-center gap-0.5 rounded-md border border-neutral-700 bg-neutral-800 px-1 py-0">
              <IconCommand className="h-3 w-3" />
              <p className="text-[10px]">K</p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            {/* github */}
            <div className="flex">
              <div>
                <GithubLogo />
              </div>
              <div>
                <IconStar />
                <p>000</p>
              </div>
            </div>
            <div>Switch</div>
            <h2>Docs</h2>
            <h2>Templates</h2>
            <div>Get All Component</div>
          </div>
        </div>
      </div>
    </div>
  );
}
