"use client";
import { HomeIcon, GalleryThumbnailsIcon,MailboxIcon } from "lucide-react";
import Link from "next/link";
export default function FooterPaintings() {
  return (
    <>
      <hr className="h-0.5 bg-black dark:bg-white mb-2" />
      <div className="flex justify-between align-middle min-h-[15vh] mx-16">
        <Link href="/">
          <HomeIcon />
        </Link>
        <Link href="/gallery">
          <GalleryThumbnailsIcon />
        </Link>
        <a href="mailto:jatinshankarchatterjee@gmail.com"><MailboxIcon /></a>
      </div>
    </>
  );
}
