import React from "react";
import ImageEffect from "@/components/ImageMagnifier";
export default function Vml() {
  return (
    <>
      <div className="flex justify-between portrait:flex-col portrait:items-center">
        <div className="flex p-4 w-1/2 justify-center align-middle portrait:w-full ">
          <ImageEffect
            className="flex border-2 p-4 bg-gray-700 border-black dark:border-white dark:bg-gray-600"
            src="/vml.jpg"
            alt="victoria memorial"
            width={1052}
            height={723}
          />
        </div>

        <div className="flex-row border-2 border-black dark:border-white w-1/2 portrait:w-[80%] my-4">
          <div className="flex justify-center p-4 ">
            <h1 className="flex mb-4 underline underline-offset-8 text-xl">
              Victoria Memorial
            </h1>
          </div>
          <div className="flex-row space-y-2 mx-4">
            <p>
              <span className=" font-bold text-red-600">media:&nbsp;</span>
              Oil colours on paper
            </p>
            <p>
              <span className=" font-bold text-red-600">
                description:&nbsp;
              </span>
              A landscape painting of the Victoria Memorial which is located in
              Calcutta(now known as Kolkata) in India.
            </p>
            <p>
              <span className=" font-bold text-red-600">size:&nbsp;</span>
              21&quot; X 14.5&quot;
            </p>
            <p>
              <span className=" font-bold text-red-600">
                artist&apos;s comments:&nbsp;
              </span>
              signed at the back and without any blank margins.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
