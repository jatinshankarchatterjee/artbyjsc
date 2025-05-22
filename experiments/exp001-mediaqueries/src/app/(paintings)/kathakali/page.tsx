import React from "react";
import ImageEffect from "@/components/ImageMagnifier";
export default function Kathakali() {
  return (
    <>
      <div className="flex justify-between portrait:flex-col portrait:items-center">
        <div className="flex p-4 w-1/2 justify-center align-middle portrait:w-full">
          <ImageEffect
            className="flex border-2 p-4 bg-gray-700 border-black dark:border-white dark:bg-gray-600"
            src="/kk.jpg"
            alt="kathakali"
            width={937}
            height={624}
          />
        </div>

        <div className="flex-row border-2 border-black dark:border-white w-1/2 portrait:w-[80%] my-4">
          <div className="flex justify-center p-4">
            <h1 className="flex mb-4 underline underline-offset-8 text-xl">
              Kathakali
            </h1>
          </div>
          <div className="flex-row space-y-2 mx-4">
            <p>
              <span className=" text-red-600 font-bold">media:&nbsp;</span>
              Oil colours on paper
            </p>
            <p>
              <span className=" text-red-600 font-bold">description:&nbsp;</span>
              Kathakali is one of the old forms of classical dances of India. It
              is a way of telling a story with dance moves, gestures, postions
              etc. and involves painting faces and elaborate costumes. It is a
              fascinating cultural part of Indian heritage and the painting is a
              still from one of the dance performances.
            </p>
            <p>
              <span className=" text-red-600 font-bold">size:&nbsp;</span>
              28.5&quot; X 21&quot;
            </p>
            <p>
              <span className=" text-red-600 font-bold">
                artist&apos;s comments:&nbsp;
              </span>
              signed at the back with no blank margins left.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
