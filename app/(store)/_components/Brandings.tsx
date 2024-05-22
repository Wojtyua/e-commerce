import Image from "next/image";
import SectionHeader from "./ui/SectionHeader";
import { brands } from "@/data";

const Brandings = () => {
  return (
    <section className="pb-10 border-b">
      <SectionHeader title="We work with the best brandings" />

      <ul className="grid place-items-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 mx-auto w-full items-center">
        {brands.map((brand) => (
          <li key={brand.name} className="p-4">
            <Image
              className="w-auto h-auto"
              src={brand.logo}
              alt={brand.name}
              width={125}
              height={125}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Brandings;
