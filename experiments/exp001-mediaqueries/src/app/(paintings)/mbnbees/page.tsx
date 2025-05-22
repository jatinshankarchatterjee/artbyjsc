import React from "react";
import ImageEffect from "@/components/ImageMagnifier";
export default function Mbnbees() {
  return (
    <>
      <div className="flex justify-between portrait:flex-col portrait:items-center">
        <div className="flex p-4 w-1/2 justify-center align-middle portrait:w-full ">
          <ImageEffect
            className="flex border-2 p-4 bg-gray-700 border-black dark:border-white dark:bg-gray-600"
            src="/mbnbees.jpg"
            alt="mango butterscotch neanderthal bees"
            width={932}
            height={654}
          />
        </div>

        <div className="flex-row border-2 border-black dark:border-white w-1/2 portrait:w-[80%] my-4">
          <div className="flex justify-center p-4 ">
            <h1 className="flex mb-4 underline underline-offset-8 text-xl">
              Mango Butterscotch Neanderthal Bees
            </h1>
          </div>
          <div className="flex-row space-y-2 mx-4">
            <p>
              <span className="text-red-600 font-bold">media:&nbsp;</span>
              Oil colours on paper
            </p>
            <p>
              <span className=" text-red-600 font-bold">
                description:&nbsp;
              </span>
              Bees are responsible for life on the planet in so many ways, and
              have so many qualities. These bees have been on earth for longer
              than humans but its sad that humans have found more and more ways
              to exploit them, all the while pretending to praise their
              character. Humans have a issue of equating themselves with other
              natural beings as soon as there is a use of it.
            </p>
            <p>
              <span className=" text-red-600 font-bold">size:&nbsp;</span>
              21&quot; X 28.5&quot;
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
