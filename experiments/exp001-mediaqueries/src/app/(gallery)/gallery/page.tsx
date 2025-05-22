import React from "react";
import "@/app/globals.css";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

export default function Gallery() {
  return (
    <>
      <div className="flex justify-center align-middle h-[70vh]">
        <Carousel
          opts={{ align: "start", loop: true }}
          className="flex my-auto basis-2/3 w-[60vw]"
        >
          <CarouselPrevious />
          <CarouselContent>
            <CarouselItem className="flex justify-center align-middle max-h-[50%] max-w-[50%] portrait:max-h-[80%] portrait:max-w-[80%] my-auto">
              <Link href={"/chaaikaadda"}>
                <Image
                  className="p-4 border-2 bg-gray-400 border-black dark:border-white dark:bg-gray-700"
                  src={"/chaikaadda.jpg"}
                  width={1070}
                  height={802}
                  alt="chaikaaddaImage"
                  priority
                />
              </Link>
            </CarouselItem>
            <CarouselItem className="flex justify-center align-middle max-h-[50%] max-w-[50%] portrait:max-h-[80%] portrait:max-w-[80%] my-auto">
              <Link href={"/kathakali"}>
                <Image
                  className="p-4 border-2 bg-gray-400 border-black dark:border-white dark:bg-gray-700"
                  src={"/kk.jpg"}
                  width={1070}
                  height={802}
                  alt="kathakaliImage"
                  priority
                />
              </Link>
            </CarouselItem>
            <CarouselItem className="flex justify-center align-middle max-h-[35%] max-w-[35%] portrait:max-h-[80%] portrait:max-w-[80%] my-auto">
              <Link href={"/abitofnature"}>
                <Image
                  className="p-4 border-2 bg-gray-400 border-black dark:border-white dark:bg-gray-700"
                  src={"/abitofnature.jpg"}
                  width={1080}
                  height={1440}
                  alt="abitofnatureImage"
                  priority
                />
              </Link>
            </CarouselItem>

            <CarouselItem className="flex justify-center align-middle max-h-[50%] max-w-[50%] portrait:max-h-[80%] portrait:max-w-[80%] my-auto">
              <Link href={"/bmar"}>
                <Image
                  className="p-4 border-2 bg-gray-400 border-black dark:border-white dark:bg-gray-700"
                  src={"/bmar.jpg"}
                  width={921}
                  height={655}
                  alt="benevolentmarchImage"
                  priority
                />
              </Link>
            </CarouselItem>
            <CarouselItem className="flex justify-center align-middle max-h-[30%] max-w-[30%]  portrait:max-h-[80%] portrait:max-w-[80%] my-auto">
              <Link href={"/broses"}>
                <Image
                  className="p-4 border-2 bg-gray-400 border-black dark:border-white dark:bg-gray-700"
                  src={"/broses.jpg"}
                  width={986}
                  height={1418}
                  alt="bizzarerosesImage"
                  priority
                />
              </Link>
            </CarouselItem>
            <CarouselItem className="flex justify-center align-middlemax-h-[50%] max-w-[50%] portrait:max-h-[80%] portrait:max-w-[80%] my-auto">
              <Link href={"/ccor"}>
                <Image
                  className="p-4 border-2 bg-gray-400 border-black dark:border-white dark:bg-gray-700"
                  src={"/ccor.jpg"}
                  width={1080}
                  height={815}
                  alt="catholicchurchofredemptionImage"
                  priority
                />
              </Link>
            </CarouselItem>
            <CarouselItem className="flex justify-center align-middle max-h-[50%] max-w-[50%] portrait:max-h-[80%] portrait:max-w-[80%] my-auto">
              <Link href={"/dhcow"}>
                <Image
                  className="p-4 border-2 bg-gray-400 border-black dark:border-white dark:bg-gray-700"
                  src={"/dhcow.jpg"}
                  width={2381}
                  height={1765}
                  alt="donthitthecowImage"
                  priority
                />
              </Link>
            </CarouselItem>
            <CarouselItem className="flex justify-center align-middle max-h-[30%] max-w-[30%] portrait:max-h-[80%] portrait:max-w-[80%] my-auto">
              <Link href={"/ess1"}>
                <Image
                  className="p-4 border-2 bg-gray-400 border-black dark:border-white dark:bg-gray-700"
                  src={"/ess1.jpg"}
                  width={701}
                  height={957}
                  alt="essentials1Image"
                  priority
                />
              </Link>
            </CarouselItem>
            <CarouselItem className="flex justify-center align-middle max-h-[30%] max-w-[30%] portrait:max-h-[80%] portrait:max-w-[80%] my-auto">
              <Link href={"/ess2"}>
                <Image
                  className="p-4 border-2 bg-gray-400 border-black dark:border-white dark:bg-gray-700"
                  src={"/ess2.jpg"}
                  width={701}
                  height={957}
                  alt="essentials2Image"
                  priority
                />
              </Link>
            </CarouselItem>
            <CarouselItem className="flex justify-center align-middle max-h-[30%] max-w-[30%] portrait:max-h-[80%] portrait:max-w-[80%] my-auto">
              <Link href={"/ess3"}>
                <Image
                  className="p-4 border-2 bg-gray-400 border-black dark:border-white dark:bg-gray-700"
                  src={"/ess3.jpg"}
                  width={701}
                  height={957}
                  alt="essentials3Image"
                  priority
                />
              </Link>
            </CarouselItem>
            <CarouselItem className="flex justify-center align-middle max-h-[50%] max-w-[50%] portrait:max-h-[80%] portrait:max-w-[80%] my-auto">
              <Link href={"/fg"}>
                <Image
                  className="p-4 border-2 bg-gray-400 border-black dark:border-white dark:bg-gray-700"
                  src={"/fg.jpg"}
                  width={2384}
                  height={1775}
                  alt="facelessgambleImage"
                  priority
                />
              </Link>
            </CarouselItem>
            <CarouselItem className="flex justify-center align-middle max-h-[35%] max-w-[35%] portrait:max-h-[80%] portrait:max-w-[80%] my-auto">
              <Link href={"/kedarnath"}>
                <Image
                  className="p-4 border-2 bg-gray-400 border-black dark:border-white dark:bg-gray-700"
                  src={"/kedarnath.jpg"}
                  width={400}
                  height={405}
                  alt="kedarnathtempleImage"
                  priority
                />
              </Link>
            </CarouselItem>
            <CarouselItem className="flex justify-center align-middle max-h-[30%] max-w-[30%] portrait:max-h-[80%] portrait:max-w-[80%] my-auto">
              <Link href={"/ktwigs"}>
                <Image
                  className="p-4 border-2 bg-gray-400 border-black dark:border-white dark:bg-gray-700"
                  src={"/ktwigs.jpg"}
                  width={694}
                  height={952}
                  alt="kingoftwigsImage"
                  priority
                />
              </Link>
            </CarouselItem>
            <CarouselItem className="flex justify-center align-middle max-h-[50%] max-w-[50%] portrait:max-h-[80%] portrait:max-w-[80%] my-auto">
              <Link href={"/larmada"}>
                <Image
                  className="p-4 border-2 bg-gray-400 border-black dark:border-white dark:bg-gray-700"
                  src={"/larmada.jpg"}
                  width={928}
                  height={581}
                  alt="lighthousearmadaImage"
                  priority
                />
              </Link>
            </CarouselItem>
            <CarouselItem className="flex justify-center align-middle max-h-[50%] max-w-[50%] portrait:max-h-[80%] portrait:max-w-[80%] my-auto">
              <Link href={"/lefft"}>
                <Image
                  className="p-4 border-2 bg-gray-400 border-black dark:border-white dark:bg-gray-700"
                  src={"/lefft.jpg"}
                  width={960}
                  height={598}
                  alt="lincolneffectImage"
                  priority
                />
              </Link>
            </CarouselItem>
            <CarouselItem className="flex justify-center align-middle max-h-[30%] max-w-[30%] portrait:max-h-[80%] portrait:max-w-[80%] my-auto">
              <Link href={"/legob"}>
                <Image
                  className="p-4 border-2 bg-gray-400 border-black dark:border-white dark:bg-gray-700"
                  src={"/legob.jpg"}
                  width={975}
                  height={1480}
                  alt="legobuddhaImage"
                  priority
                />
              </Link>
            </CarouselItem>
            <CarouselItem className="flex justify-center align-middle max-h-[30%] max-w-[30%] portrait:max-h-[80%] portrait:max-w-[80%] my-auto">
              <Link href={"/lisa"}>
                <Image
                  className="p-4 border-2 bg-gray-400 border-black dark:border-white dark:bg-gray-700"
                  src={"/lisa.jpg"}
                  width={650}
                  height={936}
                  alt="lisaImage"
                  priority
                />
              </Link>
            </CarouselItem>
            <CarouselItem className="flex justify-center align-middle max-h-[30%] max-w-[30%] portrait:max-h-[80%] portrait:max-w-[80%] my-auto">
              <Link href={"/ot"}>
                <Image
                  className="p-4 border-2 bg-gray-400 border-black dark:border-white dark:bg-gray-700"
                  src={"/ot.jpg"}
                  width={1686}
                  height={2315}
                  alt="overturnImage"
                  priority
                />
              </Link>
            </CarouselItem>
            <CarouselItem className="flex justify-center align-middle max-h-[50%] max-w-[50%] portrait:max-h-[80%] portrait:max-w-[80%] my-auto">
              <Link href={"/mbnbees"}>
                <Image
                  className="p-4 border-2 bg-gray-400 border-black dark:border-white dark:bg-gray-700"
                  src={"/mbnbees.jpg"}
                  width={932}
                  height={654}
                  alt="mangobutterscotchneanderthalbeesImage"
                  priority
                />
              </Link>
            </CarouselItem>
            <CarouselItem className="flex justify-center align-middle max-h-[50%] max-w-[50%] portrait:max-h-[80%] portrait:max-w-[80%] my-auto">
              <Link href={"/paradiseparadox"}>
                <Image
                  className="p-4 border-2 bg-gray-400 border-black dark:border-white dark:bg-gray-700"
                  src={"/paradiseparadox.jpg"}
                  width={982}
                  height={685}
                  alt="paradiseparadoxImage"
                  priority
                />
              </Link>
            </CarouselItem>
            <CarouselItem className="flex justify-center align-middle max-h-[50%] max-w-[50%] portrait:max-h-[80%] portrait:max-w-[80%] my-auto">
              <Link href={"/rajasthanioonth"}>
                <Image
                  className="p-4 border-2 bg-gray-400 border-black dark:border-white dark:bg-gray-700"
                  src={"/rajasthanioonth.jpg"}
                  width={1080}
                  height={810}
                  alt="rajasthanioonthImage"
                  priority
                />
              </Link>
            </CarouselItem>
            <CarouselItem className="flex justify-center align-middle max-h-[50%] max-w-[50%] portrait:max-h-[80%] portrait:max-w-[80%] my-auto">
              <Link href={"/stemp"}>
                <Image
                  className="p-4 border-2 bg-gray-400 border-black dark:border-white dark:bg-gray-700"
                  src={"/stemp.jpg"}
                  width={1033}
                  height={695}
                  alt="shoretempleImage"
                  priority
                />
              </Link>
            </CarouselItem>
            <CarouselItem className="flex justify-center align-middle max-h-[50%] max-w-[50%] portrait:max-h-[80%] portrait:max-w-[80%] my-auto">
              <Link href={"/tmap"}>
                <Image
                  className="p-4 border-2 bg-gray-400 border-black dark:border-white dark:bg-gray-700"
                  src={"/tmap.jpg"}
                  width={1052}
                  height={726}
                  alt="tawangmonasteryarunachalpradeshImage"
                  priority
                />
              </Link>
            </CarouselItem>
            <CarouselItem className="flex justify-center align-middle max-h-[50%] max-w-[50%] portrait:max-h-[80%] portrait:max-w-[80%] my-auto">
              <Link href={"/toy"}>
                <Image
                  className="p-4 border-2 bg-gray-400 border-black dark:border-white dark:bg-gray-700"
                  src={"/toy.jpg"}
                  width={2470}
                  height={1775}
                  alt="toyponybythewindowImage"
                  priority
                />
              </Link>
            </CarouselItem>
            <CarouselItem className="flex justify-center align-middle max-h-[50%] max-w-[50%] portrait:max-h-[80%] portrait:max-w-[80%] my-auto">
              <Link href={"/um1"}>
                <Image
                  className="p-4 border-2 bg-gray-400 border-black dark:border-white dark:bg-gray-700"
                  src={"/um1.jpg"}
                  width={2546}
                  height={1800}
                  alt="unomomentoImage"
                  priority
                />
              </Link>
            </CarouselItem>
            <CarouselItem className="flex justify-center align-middle max-h-[50%] max-w-[50%] portrait:max-h-[80%] portrait:max-w-[80%] my-auto">
              <Link href={"/um2"}>
                <Image
                  className="p-4 border-2 bg-gray-400 border-black dark:border-white dark:bg-gray-700"
                  src={"/um2.jpg"}
                  width={2498}
                  height={1840}
                  alt="unomomento2Image"
                  priority
                />
              </Link>
            </CarouselItem>
            <CarouselItem className="flex justify-center align-middle max-h-[50%] max-w-[50%] portrait:max-h-[80%] portrait:max-w-[80%] my-auto">
              <Link href={"/vml"}>
                <Image
                  className="p-4 border-2 bg-gray-400 border-black dark:border-white dark:bg-gray-700"
                  src={"/vml.jpg"}
                  width={1052}
                  height={723}
                  alt="victoriamemorialImage"
                  priority
                />
              </Link>
            </CarouselItem>
            <CarouselItem className="flex justify-center align-middle max-h-[30%] max-w-[30%] portrait:max-h-[80%] portrait:max-w-[80%] my-auto">
              <Link href={"/amnr"}>
                <Image
                  className="p-4 border-2 bg-gray-400 border-black dark:border-white dark:bg-gray-700"
                  src={"/amnr.jpg"}
                  width={1080}
                  height={1485}
                  alt="victoriamemorialImage"
                  priority
                />
              </Link>
            </CarouselItem>
            <CarouselItem className="flex justify-center align-middle max-h-[30%] max-w-[30%] portrait:max-h-[80%] portrait:max-w-[80%] my-auto">
              <Link href={"/mepi"}>
                <Image
                  className="p-4 border-2 bg-gray-400 border-black dark:border-white dark:bg-gray-700"
                  src={"/mepi.jpg"}
                  width={702}
                  height={960}
                  alt="mosesepitomeImage"
                  priority
                />
              </Link>
            </CarouselItem>
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
