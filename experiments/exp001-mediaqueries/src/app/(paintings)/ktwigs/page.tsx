import React from "react";
import ImageEffect from "@/components/ImageMagnifier";
export default function Ktwigs() {
  return (
    <>
      <div className="flex justify-between portrait:flex-col portrait:items-center">
        <div className="flex p-4 w-1/2 justify-center align-middle portrait:w-full ">
          <ImageEffect
            className="flex border-2 p-4 bg-gray-700 border-black dark:border-white dark:bg-gray-600"
            src="/ktwigs.jpg"
            alt="king of twigs"
            width={347}
            height={476}
          />
        </div>

        <div className="flex-row border-2 border-black dark:border-white w-1/2 portrait:w-[80%] my-4">
          <div className="flex justify-center p-4 ">
            <h1 className="flex mb-4 text-xl underline underline-offset-8">
              King of twigs
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
              One of my favourite characters for a surreal approach, the pigeon
              is a remarkable bird that collects and deposits branches
              relentlessly with minimal noise but is not really welcomed in the
              urban settings of human settlements, which, does not bother the
              king at all and he keeps at it.
            </p>
            <p>
              <span className=" text-red-600 font-bold">size:&nbsp;</span>
              22&quot; X 29.7&quot;
            </p>
            <p>
              <span className=" text-red-600 font-bold">
                artist&apos;s comments:&nbsp;
              </span>
              signed at the back without any blank margins.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
