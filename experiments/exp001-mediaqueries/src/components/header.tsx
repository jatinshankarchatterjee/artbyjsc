import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <>
      <div className="flex items-center justify-between min-h-[15vh] mx-6">
        <h1 className="text-4xl">
          Art by <span className="text-5xl font-bold text-red-600">JSC</span>
        </h1>
        <div className="flex justify-between">
          <Link href="/about">
            <Image
            className="border-4 border-red-600 rounded-full w-12 h-12 mx-4"
              src="/PROFILEPIC.jpg"
              alt="about"
              width={100}
              height={100}
            />
          </Link>
          <ModeToggle />
        </div>
      </div>
      <hr className="h-0.5 bg-black dark:bg-white" />
    </>
  );
}
