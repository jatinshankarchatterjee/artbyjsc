import React from "react";
import ImageEffect from "@/components/ImageMagnifier";
export default function Chaikaadda() {
  return (
    <>
      <div className="flex justify-between portrait:flex-col portrait:items-center">
        <div className="flex p-4 w-1/2 justify-center align-middle portrait:w-full ">
          <ImageEffect
            className="flex border-2 p-4 bg-gray-700 border-black dark:border-white dark:bg-gray-600"
            src="/chaikaadda.jpg"
            alt="chaikaadda"
            width={1070}
            height={802}
          />
        </div>

        <div className="flex-row border-2 border-black dark:border-white w-1/2 portrait:w-[80%] my-4">
          <div className="flex justify-center p-4 ">
            <h1 className="flex mb-4 underline underline-offset-8 text-xl">
              Chaai ka Adda
            </h1>
          </div>
          <div className="flex-row space-y-2 mx-4">
            <p>
              <span className="text-red-600 font-bold">media:&nbsp;</span>
              Oil colours on paper
            </p>
            <p>
              <span className="text-red-600 font-bold">description:&nbsp;</span>
              Chaai as everyone knows is perhaps the most popular beverage in
              India, and most of the things are discussed over a cup of tea but
              generally a large amount of it is useless gossips, stupid chatter,
              vague comments, political analysis etc.. and thus the people who
              discuss such matters are most insignificant, and are portrayed as
              incomplete and without faces. The image used for the painting is
              from a magazine.
            </p>
            <p>
              <span className="text-red-600 font-bold">size:&nbsp;</span>
              28&quot; X 21&quot;
            </p>
            <p>
              <span className="text-red-600 font-bold">
                artist&apos;s comments:&nbsp;
              </span>
              signed at the back and has no margins at all.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
