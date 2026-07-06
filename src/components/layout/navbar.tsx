import React from "react";

export function Navbar() {
  return (
    <div className="bg-light dark:bg-dark h-[65px] w-full">
      <div className="flex h-full items-center justify-between border-b border-neutral-800 px-8 text-sm font-[500] text-neutral-400">
        <div>
          {/* logo */}
          <h2 className="text-2xl font-black">Ace UI</h2>
        </div>
        <div className="flex items-center gap-8">
          <div>Search</div>
          <div className="flex items-center gap-8">
            <div>Github</div>
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
