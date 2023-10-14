import React from "react";
import { useState } from "react";
import MenuIcon from "./assets/icons/MenuIcon";
import PlusIcon from "./assets/icons/PlusIcon";
import LeftSection from "./components/left-section/LeftSectionComponent";
import RightSection from "./components/right-section/RightSectionComponent";

export default function App() {
  // Toggle
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <div className="sticky z-10 flex items-center border-b border-white/20 bg-gray-700 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden">
        <button
          type="button"
          className={`-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center outline-none justify-center rounded-md ${
            !show 
          } dark:hover:text-white text-gray-100`}
          onClick={() => setShow((pastShow)=> !pastShow)}
        >
          <span className="sr-only">Open sidebar</span>
          <MenuIcon />
        </button>
        <h1 className="flex-1 text-center text-base font-normal">New chat</h1>
        <button type="button" className="px-3">
          <PlusIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Left Section */}
      <LeftSection {...{ show }} />

      {/* Right Section */}
      <RightSection />
    </div>
  );
}
