import React from "react";
import ImageEffect from "@/components/ImageMagnifier";
export default function Rajasthanioonth() {
  return (
    <>
      <div className="flex justify-between portrait:flex-col portrait:items-center">
        <div className="flex p-4 w-1/2 justify-center align-middle portrait:w-full ">
          <ImageEffect
            className="flex border-2 p-4 bg-gray-700 border-black dark:border-white dark:bg-gray-600"
            src="/rajasthanioonth.jpg"
            alt="rajasthani oonth"
            width={1080}
            height={810}
          />
        </div>

        <div className="flex-row border-2 border-black dark:border-white w-1/2 portrait:w-[80%] my-4">
          <div className="flex justify-center p-4 ">
            <h1 className="flex mb-4 underline underline-offset-8 text-xl">
              Rajasthani Oonth
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
              A painting of a camel and his caretaker from Rajasthan in India.
            </p>
            <p>
              <span className=" text-red-600 font-bold">size:&nbsp;</span>
              16&quot; X 11.75&quot;
            </p>
            <p>
              <span className=" text-red-600 font-bold">
                artist&apos;s comments:&nbsp;
              </span>
              signed at the front right bottom and has no blank margins.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
