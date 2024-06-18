import { getProducts } from "@/utils/getProducts";
import { useQuery } from "@tanstack/react-query";

const ProductsTable = () => {
  const { data, status } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div>
      <h1>siema</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsTable;
