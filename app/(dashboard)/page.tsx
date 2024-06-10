"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ipadScrollAnimate";
import HeroSectionSimpleCentred from "@/components/hero";

export default function HeroScrollDemo() {
  return (
    <>
      <HeroSectionSimpleCentred />
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Welcome to <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  MoneyMap
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/page.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </>
  );
}


