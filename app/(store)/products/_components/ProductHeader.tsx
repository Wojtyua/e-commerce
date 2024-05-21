type ProductHeaderProps = {
  model: string | null;
  target: string | null;
  price: number | null;
};

const ProductHeader = ({ model, target, price }: ProductHeaderProps) => {
  return (
    <div className="px-3 md:px-0">
      <h2 className="text-3xl font-semibold tracking-wide capitalize ">
        {model}
      </h2>
      <p className="text-lg text-neutral-500 first-letter:uppercase">
        {target}&apos;s shoes
      </p>
      <p className="text-lg font-bold">{price} PLN</p>
    </div>
  );
};
export default ProductHeader;
