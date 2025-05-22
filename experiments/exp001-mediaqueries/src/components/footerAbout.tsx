import React from "react";
import { GalleryThumbnailsIcon, MailboxIcon, HomeIcon } from "lucide-react";
import Link from "next/link";
export default function FooterAbout() {
  return (
    <>
      <hr className="h-0.5 bg-black dark:bg-white" />
      <div className="flex justify-between items-center  min-h-[15vh]">
        <Link href="/" title="Home">
          <HomeIcon className="w-10 h-10 mx-4" />
        </Link>
        <Link href="/gallery" title="Gallery">
          <GalleryThumbnailsIcon className="w-10 h-10 mx-4" />
        </Link>
        <a href="mailto:jatinshankarchatterjee@gmail.com" title="Mailbox">
          <MailboxIcon className="w-10 h-10 mx-4" />
        </a>
      </div>
    </>
  );
}
