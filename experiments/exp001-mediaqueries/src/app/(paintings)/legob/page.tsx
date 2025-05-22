import React from "react";
import ImageEffect from "@/components/ImageMagnifier";
export default function Legob() {
  return (
    <>
      <div className="flex justify-between portrait:flex-col portrait:items-center">
        <div className="flex p-4 w-1/2 justify-center align-middle portrait:w-full ">
          <ImageEffect
            className="flex border-2 p-4 bg-gray-700 border-black dark:border-white dark:bg-gray-600"
            src="/legob.jpg"
            alt="lego buddha"
            width={325}
            height={493}
          />
        </div>

        <div className="flex-row border-2 border-black dark:border-white w-1/2 portrait:w-[80%] my-4">
          <div className="flex justify-center p-4 ">
            <h1 className="flex mb-4 text-xl underline underline-offset-8">
              Lego Buddha
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
              The lego buddha is a painting about the comic approach to how in
              fact commercially a religion is used under the mask of peace and
              harmony. It might be the biggest contradictive business of the
              century.
            </p>
            <p>
              <span className=" text-red-600 font-bold">size:&nbsp;</span>
              14.5&quot; X 21.5&quot;
            </p>
            <p>
              <span className=" text-red-600 font-bold">
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
