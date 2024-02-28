import Image from "next/image";

const Brandings = () => {
  return (
    <section className="p-4">
      <h2 className="text-xl font-semibold mt-4">
        We work with the best brandings
      </h2>
      <div className="flex w-full justify-center">
        <ul className="flex space-x-8">
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
            <Image
              src="/images/brandings/nike_logo.webp"
              alt="nike logo"
              fill
            />
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
      </div>
    </section>
  );
};

export default Brandings;
