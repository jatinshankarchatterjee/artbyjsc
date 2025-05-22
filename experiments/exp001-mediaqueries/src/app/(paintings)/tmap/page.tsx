import React from "react";
import ImageEffect from "@/components/ImageMagnifier";
export default function Tmap() {
  return (
    <>
      <div className="flex justify-between portrait:flex-col portrait:items-center">
        <div className="flex p-4 w-1/2 justify-center align-middle portrait:w-full ">
          <ImageEffect
            className="flex border-2 p-4 bg-gray-700 border-black dark:border-white dark:bg-gray-600"
            src="/tmap.jpg"
            alt="tawang monastery arunachal pradesh"
            width={1052}
            height={726}
          />
        </div>

        <div className="flex-row border-2 border-black dark:border-white w-1/2 portrait:w-[80%] my-4">
          <div className="flex justify-center p-4 ">
            <h1 className="flex mb-4 underline underline-offset-8 text-xl">
              Tawang Monastery, Arunachal Pradesh
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
              A landscape painting of Tawang Monastery at Arunachal Pradesh in
              India
            </p>
            <p>
              <span className=" text-red-600 font-bold">size:&nbsp;</span>
              21&quot; X 14.5&quot;
            </p>
            <p>
              <span className=" text-red-600 font-bold">
                artist&apos;s comments:&nbsp;
              </span>
              signed and framed, which can be removed, and has no blank margins
              at all.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
