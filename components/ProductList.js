import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <div className="mt-16 flex flex-wrap gap-4">
      {products.length > 0 ? (
        products.map((product) => <ProductCard productData={product} />)
      ) : (
        <p>No posts to display</p>
      )}
    </div>
  );
}
