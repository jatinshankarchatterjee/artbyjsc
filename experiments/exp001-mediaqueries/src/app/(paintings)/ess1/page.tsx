import React from "react";
import ImageEffect from "@/components/ImageMagnifier";
export default function Essentials1() {
  return (
    <>
      <div className="flex justify-between portrait:flex-col portrait:items-center">
        <div className="flex p-4 w-1/2 justify-center align-middle portrait:w-full ">
          <ImageEffect
            className="flex border-2 p-4 bg-gray-700 border-black dark:border-white dark:bg-gray-600"
            src="/ess1.jpg"
            alt="essentials1"
            width={350}
            height={478}
          />
        </div>

        <div className="flex-row border-2 border-black dark:border-white w-1/2 portrait:w-[80%] my-4">
          <div className="flex justify-center p-4 ">
            <h1 className="flex mb-4 text-xl underline underline-offset-8">
              Essentials -1
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
              This is the first of a three painting series titled essentials and
              were painted during the Covid hoax or drama at a global government
              level. This one is dedicated to beverages and it all is a
              commercial play for an online increase of things.
            </p>
            <p>
              <span className=" text-red-600 font-bold">size:&nbsp;</span>
              21&quot; X 28.5&quot;
            </p>
            <p>
              <span className="text-red-600 font-bold">
                artist&apos;s comments:&nbsp;
              </span>
              signes at the back and with no blank margins at all.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
