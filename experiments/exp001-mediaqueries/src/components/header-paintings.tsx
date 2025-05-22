import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function HeaderPaintings() {
  return (
    <>
      <div className="flex justify-between mt-2 mb-2">
        <div className="flex  justify-center align-middle ">
          <Link href={"/about"}>
            <Image
              src={"/PROFILEPIC.jpg"}
              width={100}
              height={100}
              alt="profilepicture"
              title="about artist"
              className="border-4 border-red-600 rounded-full w-12 h-12 mx-4"
            />
          </Link>
        </div>
        <h1 className="text-4xl">
          Art by <span className="text-5xl font-bold text-red-600">JSC</span>
        </h1>
        <ModeToggle />
      </div>
      <hr className="h-0.5 bg-black dark:bg-white" />
    </>
  );
}
