import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="grid grid-row-2 md:grid-cols-2 items-center bg-landing  w-full h-[750px] bg-cover bg-center bg-no-repeat filter grayscale-[.45] relative">
      <div className="absolute right-0 bg-black bg-opacity-70 p-5 text-white-primary flex flex-col gap-4">
        <h1 className="text-4xl font-semibold ">
          The best sneakers in the world
        </h1>
        <p>
          We have the best sneakers in the world. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Quisquam, quod.
        </p>
        <Button className="w-28">Shop now</Button>
      </div>
    </section>
  );
};

export default HeroSection;
