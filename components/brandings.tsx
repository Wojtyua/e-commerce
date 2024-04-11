import Image from "next/image";

const Brandings = () => {
  return (
    <section className="p-4 border-b mb-4">
      <h2 className="text-2xl font-semibold mt-4">
        We work with the best brandings
      </h2>

      <ul className="grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-6 mx-auto w-full items-center">
        <li className="w-28 aspect-square relative">
          <Image
            src="/images/brandings/adidas_logo.webp"
            alt="nike logo"
            fill
          />
        </li>
        <li className="w-28 aspect-square relative">
          <Image
            src="/images/brandings/vans_logo.webp"
            alt="nike loasdgo"
            fill
          />
        </li>
        <li className="w-28 aspect-square relative">
          <Image
            src="/images/brandings/new_balance_logo.webp"
            alt="nike loasdgo"
            fill
          />
        </li>
        <li className="w-28 aspect-square relative">
          <Image src="/images/brandings/nike_logo.webp" alt="nike logo" fill />
        </li>
        <li className="w-28 aspect-square relative">
          <Image
            src="/images/brandings/rebook_logo.webp"
            alt="nike logo"
            fill
          />
        </li>
        <li className="w-28 aspect-square relative">
          <Image
            src="/images/brandings/north_face_logo.webp"
            alt="nike logo"
            fill
          />
        </li>
      </ul>
    </section>
  );
};

export default Brandings;
