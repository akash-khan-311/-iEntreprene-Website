"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ActiveLinks = ({ path , children } : { path: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === path;
  return (
    <>
      <Link
        className={`${
          isActive && "text-gray-200 dark:text-gray-800 after:w-full"
        } inline-block after:contents[""] after:block after:w-0 after:h-[2px] after:bg-gray-500 dark:after:bg-gray-200 after:transition-all after:duration-300 after:hover:w-full  transition-colors hover:text-gray-500`}
        href={path}
      >
        {children}
      </Link>
    </>
  );
};
export default ActiveLinks;