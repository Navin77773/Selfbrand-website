import React from "react";
import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <div className="bg-home px-5 py-2">
      <div className="text-[5rem]  sm:text-lg md:text-xl text-center lg:text-2xl">
        Journey of Hope
      </div>
      <div className="space-y-14">
        <div className="content-container md:fixed  md:left-1/2 md:top-[50%] lg:top-[55%]  md:-translate-x-1/2 md:-translate-y-1/2 ">
          <Link href="https://x.com/hopefx7?s=21">
            <Image
              src="/images/boat.png"
              alt="Follow my journey"
              width={400}
              height={300}
              className="md:w-[25vw]"
            />
            <div className="text-center text-sm md:text-base">
              Follow my journey
            </div>
          </Link>
        </div>
        <div className="content-container md:fixed md:bottom-16 lg:bottom:28 left-14">
          <Link href="https://fundedfriends.com">
            <Image
              src="/images/clan castle.png"
              alt="Follow my journey"
              width={300}
              height={300}
              className="md:w-[15vw] "
            />
            <div className="text-center text-sm md:text-base ">
              Recommended Propfirm
            </div>
          </Link>
        </div>
        <div className="content-container md:fixed left-[80%] top-18 ">
          <Link href="/scroll">
            <Image
              src="/images/scroll.png"
              alt="Follow my journey"
              width={250}
              height={300}
              className="md:w-[10vw]"
            />
            <div className="text-center text-sm md:text-base">Resources</div>
          </Link>
        </div>
        <div className="content-container md:fixed left-[75%] top-2/3 ">
          <Link href={"https://arjo.io"}>
            <Image
              src="/images/treasure chest.png"
              alt="Follow my journey"
              width={250}
              height={300}
              className="md:w-[10vw]"
            />
            <div className="text-center text-sm md:text-base">
              Arjo's Mentorship
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
