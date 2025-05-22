import React from "react";
import ImageEffect from "@/components/ImageMagnifier";
export default function Fg() {
  return (
    <>
      <div className="flex justify-between portrait:flex-col portrait:items-center">
        <div className="flex p-4 w-1/2 justify-center align-middle portrait:w-full ">
          <ImageEffect
            className="flex border-2 p-4 bg-gray-700 border-black dark:border-white dark:bg-gray-600"
            src="/fg.jpg"
            alt="evolution faceless gamble"
            width={2384}
            height={1775}
          />
        </div>

        <div className="flex-row border-2 border-black dark:border-white w-1/2 portrait:w-[80%] my-4">
          <div className="flex justify-center p-4 ">
            <h1 className="flex mb-4 underline underline-offset-8 text-xl">
              Evolution: Faceless Gamble
            </h1>
          </div>
          <div className="flex-row space-y-2 mx-4">
            <p>
              <span className=" text-red-600 font-bold">media:&nbsp;</span>
              Oil colours on paper
            </p>
            <p>
              <span className=" text-red-600 font-bold">
                description:&nbsp;
              </span>
              It is another surreal objective painting showing how a dice has
              developed into more and more shapes and the evolution of gambling
              that has no particular identity, but, still most of the world
              believes in it. Also, the fact that its done in the name of
              religion, peace and harmony and all whatever jargon helps.
            </p>
            <p>
              <span className=" text-red-600 font-bold">size:&nbsp;</span>
              28.5&quot; X 21&quot;
            </p>
            <p>
              <span className=" text-red-600 font-bold">
                artist&apos;&quot;s comments:&nbsp;
              </span>
              signed at the back with no blank margins left at all.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
