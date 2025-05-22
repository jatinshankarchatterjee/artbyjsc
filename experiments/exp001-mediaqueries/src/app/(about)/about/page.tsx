import React from "react";
import Header from "@/components/header";
import FooterAbout from "@/components/footerAbout";

export default function About() {
  return (
    <>
      <Header />
      <div>
        <h1 className="font-semibold text-3xl ml-10">about the artist..</h1>
        <br />
        <p className="flex mx-20">
          Born in the year 1979 at my hometown,New Delhi in India, with a
          childhood passion to sketch and draw cartoons,flora and fauna, real
          life scenes etc.. I had the chance to explore the use of oil paints at
          a very later age. However, influenced by a lot of old masters from
          various eras, I took on the paintbrush and worked on a few paintings.
          My works with colour and mediums are displayed here for the audience
          and are also explained quite accurately from my point of view.
        </p>
        <br />
        <p className="flex mx-20">
          The artwork sessions are pretty vague depending on mood .I hope the
          viewers would appreciate the paintings and, if interested, can contact
          me via the provided communication channel.
        </p>

        <p className="flex mx-10 mt-5">Thank you all.</p>

        <p className="flex mx-10 mt-10">The artist,</p>
        <p className="flex mx-10">Jatin Shankar Chatterjee</p>
      </div>
      <FooterAbout />
    </>
  );
}
