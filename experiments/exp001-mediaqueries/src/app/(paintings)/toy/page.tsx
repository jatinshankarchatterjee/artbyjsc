import React from "react";
import ImageEffect from "@/components/ImageMagnifier";
export default function Toy() {
  return (
    <>
      {" "}
      <div className="flex justify-between portrait:flex-col portrait:items-center">
        <div className="flex p-4 w-1/2 justify-center align-middle portrait:w-full ">
          <ImageEffect
            className="flex border-2 p-4 bg-gray-700 border-black dark:border-white dark:bg-gray-600"
            src="/toy.jpg"
            alt="toy pony by the window"
            width={2470}
            height={1775}
          />
        </div>

        <div className="flex-row border-2 border-black dark:border-white w-1/2 portrait:w-[80%] my-4">
          <div className="flex justify-center p-4 ">
            <h1 className="flex mb-4 underline underline-offset-8 text-xl">
              Toy pony by the window
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
              The painting is of a old house and clearly visible by the stale
              yellow shade of the wall with old toys and vases. It is symbolic
              of how things fade away with time and its always remenescant of
              happenings in that place. A little toy can easily tell tales of
              the cheers that once filled that empty space.
            </p>
            <p>
              <span className=" text-red-600 font-bold">size:&nbsp;</span>
              28.5&quot;x21&quot;
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
