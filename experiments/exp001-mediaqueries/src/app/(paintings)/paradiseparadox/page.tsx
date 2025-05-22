import React from "react";
import ImageEffect from "@/components/ImageMagnifier";
export default function Paradiseparadox() {
  return (
    <>
      <div className="flex justify-between portrait:flex-col portrait:items-center">
        <div className="flex p-4 w-1/2 justify-center align-middle portrait:w-full ">
          <ImageEffect
            className="flex border-2 p-4 bg-gray-700 border-black dark:border-white dark:bg-gray-600"
            src="/paradiseparadox.jpg"
            alt="paradise paradox"
            width={982}
            height={685}
          />
        </div>

        <div className="flex-row border-2 border-black dark:border-white w-1/2 portrait:w-[80%] my-4">
          <div className="flex justify-center p-4 ">
            <h1 className="flex mb-4 underline underline-offset-8 text-xl">
              Paradise Paradox
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
              This is a geometric painting and depicts life, the journey and
              ultimately death in one frame. It also shows how important
              industrialisation is and in the end it affects the nature creating
              a paradox. Every new step of mankind has proven to come with a
              high price unless thorughly worked upon.
            </p>
            <p>
              <span className=" text-red-600 font-bold">size:&nbsp;</span>
              21.5&quot; X 14.5&quot;
            </p>
            <p>
              <span className="text-red-600 font-bold">
                artist&apos;s comments:&nbsp;
              </span>
              signed at the front right bottom and without any blank margins.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
