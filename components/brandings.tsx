import Image from "next/image";
import SectionHeader from "./ui/SectionHeader";

const brands = [
  {
    name: "Adidas",
    logo: "/images/brandings/adidas_logo.webp",
  },
  {
    name: "Vans",
    logo: "/images/brandings/vans_logo.webp",
  },
  {
    name: "New Balance",
    logo: "/images/brandings/new_balance_logo.webp",
  },
  {
    name: "Nike",
    logo: "/images/brandings/nike_logo.webp",
  },
  {
    name: "Reebok",
    logo: "/images/brandings/rebook_logo.webp",
  },
  {
    name: "The North Face",
    logo: "/images/brandings/north_face_logo.webp",
  },
  { name: "Puma", logo: "/images/brandings/puma_logo.png" },
  { name: "Converse", logo: "/images/brandings/converse_logo.png" },
];

const Brandings = () => {
  return (
    <section className="pb-10 border-b">
      <SectionHeader title="We work with the best brandings" />

      <ul className="grid place-items-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 mx-auto w-full items-center">
        {brands.map((brand) => (
          <li key={brand.name} className="p-4">
            <Image src={brand.logo} alt={brand.name} width={125} height={125} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Brandings;
