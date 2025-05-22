import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Header />
      <div className=" min-h-[60vh] landscape:flex  portrait:flex-row justify-center ">
        <Image
          className="border-6 p-4 bg-gray-400 border-black dark:bg-gray-600 dark:border-white w-[20%] h-[20%] portrait:w-[40%] portrait:h-[40%] m-6 mx-auto"
          src="/ess1.jpg"
          alt="essentials1 painting"
          width={701}
          height={957}
          priority
        />
        <Image
          className="border-6 p-4 bg-gray-400 border-black dark:bg-gray-600 dark:border-white w-[20%] h-[20%] portrait:w-[40%] portrait:h-[40%] m-6 mx-auto"
          src="/ess2.jpg"
          alt="essentials2 painting"
          width={701}
          height={957}
          priority
        />
        <Image
          className="border-6 p-4 bg-gray-400 border-black dark:bg-gray-600 dark:border-white w-[20%] h-[20%] portrait:w-[40%] portrait:h-[40%] m-6 mx-auto"
          src="/ess3.jpg"
          alt="essentials3 painting"
          width={701}
          height={957}
          priority
        />
      </div>
      <Footer />
    </>
  );
}
