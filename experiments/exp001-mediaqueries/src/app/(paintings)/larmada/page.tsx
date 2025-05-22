import React from "react";
import ImageEffect from "@/components/ImageMagnifier";
export default function Larmada() {
  return (
    <>
      <div className="flex justify-between portrait:flex-col portrait:items-center">
        <div className="flex p-4 w-1/2 justify-center align-middle portrait:w-full ">
          <ImageEffect
            className="flex border-2 p-4 bg-gray-700 border-black dark:border-white dark:bg-gray-600"
            src="/larmada.jpg"
            alt="lighthouse armada"
            width={928}
            height={581}
          />
        </div>

        <div className="flex-row border-2 border-black dark:border-white w-1/2 portrait:w-[80%] my-4">
          <div className="flex justify-center p-4 ">
            <h1 className="flex mb-4 underline underline-offset-8 text-xl">
              The Lighthouse Armada
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
              How many does it need to fix a lightbulb? maybe an armada of ships
              and the lighthouse waits for its seasonal encounter. A geometric
              approach to a landscape and an experiment with the combination of
              oils changed somewhat as mediums.
            </p>
            <p>
              <span className=" text-red-600 font-bold">size:&nbsp;</span>
              21.5&quot; X 14.5&quot;
            </p>
            <p>
              <span className=" text-red-600 font-bold">
                artist&apos;s comments:&nbsp;
              </span>
              signed at the back and has no blank margins.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
