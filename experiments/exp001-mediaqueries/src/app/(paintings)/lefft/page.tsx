import React from "react";
import ImageEffect from "@/components/ImageMagnifier";
export default function Lefft() {
  return (
    <>
      <div className="flex justify-between portrait:flex-col portrait:items-center">
        <div className="flex p-4 w-1/2 justify-center align-middle portrait:w-full ">
          <ImageEffect
            className="flex border-2 p-4 bg-gray-700 border-black dark:border-white dark:bg-gray-600"
            src="/lefft.jpg"
            alt="lincoln effect"
            width={960}
            height={598}
          />
        </div>

        <div className="flex-row border-2 border-black dark:border-white w-1/2 portrait:w-[80%] my-4">
          <div className="flex justify-center p-4 ">
            <h1 className="flex mb-4 underline underline-offset-8 text-xl">
              The Lincoln Effect
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
              The Lincoln effect is a painting that shows that being phenomenal
              has its own disadvantages and all the great decisions end up in a
              delirium because the fault is in believing that other people would
              have the same level of intelligence and perception.
            </p>
            <p>
              <span className=" text-red-600 font-bold">size:&nbsp;</span>
              16&quot; X 11.75&quot;
            </p>
            <p>
              <span className="text-red-600 font-bold">
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
