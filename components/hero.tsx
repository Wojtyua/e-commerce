"use client";

import Image from "next/image";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="grid grid-row-2 md:grid-cols-2 items-center mt-4 pb-4 border-b">
      <div className="p-4 space-y-4 flex flex-col items-center order-2 md:order-1">
        <h1 className="text-3xl font-semibold tracking-wider">
          Explore the best sneakers in the world
        </h1>
        <Button size="lg">Shop now</Button>
      </div>

      <div className="order-1">
        {/* przerobić na odddzielny komponent */}
        <Image
          src="/images/landing_page.jpg"
          alt="image placeholder"
          width={400}
          height={200}
          className="rounded-md"
        />
      </div>
    </section>
  );
};

export default HeroSection;
