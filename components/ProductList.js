import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function ProductList({ products }) {
  const [checkboxInfos, setCheckboxInfos] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setCheckboxInfos(
      products.map((p) => {
        return {
          select: false,
          id: p.id,
          sku: p.sku,
          name: p.name,
          price: p.price,
          type: p.type,
          size: p.size,
          weight: p.weight,
          height: p.height,
          width: p.width,
          length: p.length,
        };
      })
    );
  }, []);

  // delete products by ID
  const deleteProducts = async () => {
    let arrIds = [];

    checkboxInfos.forEach((p) => {
      if (p.select) {
        arrIds.push(p.id);
      }
    });

    //post req to delete

    let data = { id: [...arrIds] };
    const req = await axios.post(
      "https://scandiweb-task-mbj.000webhostapp.com/api/delete.php",
      JSON.stringify(data)
    );

    const res = req.data;
    router.push("/");
  };

  return (
    <div className="mt-16 flex flex-col">
      <div className="flex justify-between mb-10">
        <h2 className="text-2xl font-semibold">Products list</h2>
        <button
          className="bg-red-400 text-white px-6 h-14 rounded-xl"
          onClick={deleteProducts}
          id="delete-product-btn"
        >
          MASS DELETE
        </button>
      </div>
      <div className="flex flex-wrap gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              checkboxInfos={checkboxInfos}
              setCheckboxInfos={setCheckboxInfos}
              productData={product}
            />
          ))
        ) : (
          <p>No posts to display</p>
        )}
      </div>
    </div>
  );
}
