const ProductDetailsPage = ({ params }: { params: { productId: number } }) => {
  return (
    <section className="grid justify-center">
      <p>Product details page</p>
      <p>Product id: {params.productId}</p>
    </section>
  );
};

export default ProductDetailsPage;
