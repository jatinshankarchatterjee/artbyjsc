import React from "react";
import ImageEffect from "@/components/ImageMagnifier";
export default function Dhcow() {
  return (
    <>
     <div className="flex justify-between portrait:flex-col portrait:items-center">
        <div className="flex p-4 w-1/2 justify-center align-middle portrait:w-full ">
          <ImageEffect
            className="flex border-2 p-4 bg-gray-700 border-black dark:border-white dark:bg-gray-600"
            src="/dhcow.jpg"
            alt="dont hit the cow"
            width={2381}
            height={1765}
          />
        </div>

        <div className="flex-row border-2 border-black dark:border-white w-1/2 portrait:w-[80%] my-4">
          <div className="flex justify-center p-4 ">
     
            <h1 className="flex mb-4 underline underline-offset-8 text-xl">
              Don&apos;t hit the cow
            </h1>
          </div>
          <div className="flex-row space-y-2 mx-4">
            <p>
              <span className=" text-red-600">
                media:&nbsp;
              </span>
              Oil colours on paper
            </p>
            <p>
              <span className=" text-red-600">
                description:&nbsp;
              </span>
              The painting shows an old country setting with a big red house and
              some children being mischievous while at play. A maid governing
              the kids is trying to tell them not to hurt the little cow resting
              midway.
            </p>
            <p>
              <span className=" text-red-600">
                size:&nbsp;
              </span>
              28.5&quot; X 21&quot;
            </p>
            <p>
              <span className=" text-red-600">
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
