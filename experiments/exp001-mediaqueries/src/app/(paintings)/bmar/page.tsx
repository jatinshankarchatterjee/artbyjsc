import React from "react";
import ImageEffect from "@/components/ImageMagnifier";
export default function Bmar() {
  return (
    <>
      <div className="flex justify-between portrait:flex-col portrait:items-center">
        <div className="flex p-4 w-1/2 justify-center align-middle portrait:w-full ">
          <ImageEffect
            className="flex border-2 p-4 bg-gray-500 border-black dark:border-white dark:bg-gray-700"
            src="/bmar.jpg"
            alt="benevolent march"
            width={921}
            height={655}
          />
        </div>

        <div className="flex-row border-2 border-black dark:border-white w-1/2 portrait:w-[80%] my-4">
          <div className="flex justify-center p-4 ">
            <h1 className="flex mb-4 text-xl underline underline-offset-8">
              The Benevolent March
            </h1>
          </div>
          <div className="flex-row space-y-2 mx-4">
            <p>
              <span className=" text-red-600 font-bold">media:&nbsp;</span>
              Oil colours on paper
            </p>
            <p>
              <span className="text-red-600 font-bold">description:&nbsp;</span>
              A parade that shows the perils of society showing how masses are
              directed in a proposed direction which usually benefits the
              director, and opposition finally succumbs with bowed heads and
              closed eyes listening to the blind music.
            </p>
            <p>
              <span className=" text-red-600 font-bold">size:&nbsp;</span>
              28.5&quot;x21&quot;
            </p>
            <p>
              <span className=" text-red-600 font-bold">
                artist&apos;s comments:&nbsp;
              </span>
              Signed at the back and with no blank margins.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
