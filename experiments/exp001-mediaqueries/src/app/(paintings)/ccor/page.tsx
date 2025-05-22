import React from "react";
import ImageEffect from "@/components/ImageMagnifier";
export default function Ccor() {
  return (
    <>
      <div className="flex justify-between portrait:flex-col portrait:items-center">
        <div className="flex p-4 w-1/2 justify-center align-middle portrait:w-full ">
          <ImageEffect
            className="flex border-2 p-4 bg-gray-700 border-black dark:border-white dark:bg-gray-600"
            src="/ccor.jpg"
            alt="catholic church of redemption"
            width={1080}
            height={815}
          />
        </div>

        <div className="flex-row border-2 border-black dark:border-white w-1/2 portrait:w-[80%] my-4">
          <div className="flex justify-center p-4 ">
            <h1 className="flex mb-4 underline underline-offset-8 text-xl">
              The catholic church of redemption, New Delhi
            </h1>
          </div>
          <div className="flex-row space-y-2 mx-4">
            <p>
              <span className=" text-red-600">media:&nbsp;</span>
              Oil colours on paper
            </p>
            <p>
              <span className=" text-red-600">description:&nbsp;</span>A
              landscape of an old church in our city that I was fond of and have
              been inside a few times as a child. Maybe on of these days, I
              might revisit the place and repaint it again.
            </p>
            <p>
              <span className=" text-red-600">size:&nbsp;</span>
              11.75&quot; X 8.25&quot;
            </p>
            <p>
              <span className=" text-red-600">
                artist&apos;s comments:&nbsp;
              </span>
              signed at front right bottom and framed,which can be
              removed..however,there are no blank margins.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
