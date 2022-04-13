import ProductCard from "./ProductCard";
import { useState } from "react";

export default function ProductList({ products }) {
  const [checkboxInfos, setCheckboxInfos] = useState([]);
  return (
    <div className="mt-16 flex flex-wrap gap-4">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            productData={product}
            checkboxInfos={checkboxInfos}
            setCheckboxInfos={setCheckboxInfos}
          />
        ))
      ) : (
        <p>No posts to display</p>
      )}
    </div>
  );
}
