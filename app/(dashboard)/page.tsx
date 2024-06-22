"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ipadScrollAnimate";
import HeroSectionSimpleCentred from "@/components/hero";
import { Button } from "@/components/ui/button";

export default function HeroScrollDemo() {
  return (
    <>
      <HeroSectionSimpleCentred />
      <div className="flex items-center justify-center flex-col pb-12 px-12">
        <Image
          src="/hero.png"
          width={1200}
          height={1200}
          alt="Logo"
          className="max-w-full object-contain"
        />
      </div>
    </>
  );
}
