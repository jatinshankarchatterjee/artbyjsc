import React from "react";
import ImageEffect from "@/components/ImageMagnifier";
export default function Kedarnath() {
  return (
    <>
      <div className="flex justify-between portrait:flex-col portrait:items-center">
        <div className="flex p-4 w-1/2 justify-center align-middle portrait:w-full ">
          <ImageEffect
            className="flex border-2 p-4 bg-gray-700 border-black dark:border-white dark:bg-gray-600"
            src="/kedarnath.jpg"
            alt="the kedarnath temple"
            width={400}
            height={405}
          />
        </div>

        <div className="flex-row border-2 border-black dark:border-white w-1/2 portrait:w-[80%] my-4">
          <div className="flex justify-center p-4 ">
            <h1 className="flex mb-4 text-xl underline underline-offset-8">
              The Kedarnath Temple
            </h1>
          </div>
          <div className="flex-row space-y-2 mx-4">
            <p>
              <span className=" text-red-600 font-bold">media:&nbsp;</span>
              Oil colours on canvas board
            </p>
            <p>
              <span className=" text-red-600 font-bold">
                description:&nbsp;
              </span>
              A painting of Kedarnath temple.
            </p>
            <p>
              <span className=" text-red-600 font-bold">size:&nbsp;</span>
              90cm X 90cm
            </p>
            <p>
              <span className=" text-red-600 font-bold">
                artist&apos;s comments:&nbsp;
              </span>
              signed at front right bottom.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
