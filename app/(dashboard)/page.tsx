"use client";
import React from "react";
import Image from "next/image";
import HeroSectionSimpleCentred from "@/components/hero";

import ContactForm from "@/components/contact";

import { Faq } from "@/components/faq";
import Features from "@/components/feature";

export default function HeroScrollDemo() {
  return (
    <>
      <div className="min-h-full w-full dark:bg-slate-900 bg-slate-100 dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>
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
        <Features />
        <ContactForm />
        <Faq />
      </div>
    </>
  );
}
