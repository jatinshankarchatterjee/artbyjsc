import React from "react";
import ImageEffect from "@/components/ImageMagnifier";
export default function Um1() {
  return (
    <>
      <div className="flex justify-between portrait:flex-col portrait:items-center">
        <div className="flex p-4 w-1/2 justify-center align-middle portrait:w-full ">
          <ImageEffect
            className="flex border-2 p-4 bg-gray-700 border-black dark:border-white dark:bg-gray-600"
            src="/um1.jpg"
            alt="uno momento 1"
            width={2546}
            height={1800}
          />
        </div>

        <div className="flex-row border-2 border-black dark:border-white w-1/2 portrait:w-[80%] my-4">
          <div className="flex justify-center p-4 ">
            <h1 className="flex mb-4 underline underline-offset-8 text-xl">
              Uno Momento -1
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
              Its first of the two series paintings, also called the Uno
              Momento-Red. Uno momenmto is a description of how in today&apos;s
              world people get the freedom of invading spaces that they should
              not. a fancy word like paparazzi or any idiot with a camera feels
              entitled to cook up whatever story they like. Its a bad example of
              in your face that should be considered as a crime towards the
              society.
            </p>
            <p>
              <span className=" text-red-600 font-bold">size:&nbsp;</span>
              28.5&quot; X 21&quot;
            </p>
            <p>
              <span className=" text-red-600 font-bold">
                artist&apos;s comments:&nbsp;
              </span>
              signed at the back and has no blank margins at all.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
