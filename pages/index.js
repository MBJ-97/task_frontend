import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Home({ products }) {
  const [checkboxInfos, setCheckboxInfos] = useState([]);
  const router = useRouter();
  if (products !== null) {
    return false;
  }
  useEffect(() => {
    if (products?.length > 0) {
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
    }

    return () => {
      console.log("This will be logged on unmount");
    };
  }, [products]);

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
    <div className="max-w-5xl mx-auto">
      <div className="mt-16 flex flex-col">
        <div className="flex justify-between mb-10 w-full">
          <h2 className="text-2xl font-semibold mr-0 sm:mr-6">Products list</h2>
          <button
            className="bg-red-400 text-white px-6 h-14 rounded-xl ml-0 sm:ml-6"
            onClick={deleteProducts}
            id="delete-product-btn"
          >
            MASS DELETE
          </button>
        </div>
        <div className="flex flex-wrap gap-4">
          {products?.length > 0 ? (
            products.map((product) => (
              <ProductCard
                key={product.id}
                checkboxInfos={checkboxInfos}
                setCheckboxInfos={setCheckboxInfos}
                productData={product}
              />
            ))
          ) : (
            <p>No products to display</p>
          )}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  let products = {};
  const res = await fetch(
    "https://scandiweb-task-mbj.000webhostapp.com/api/read.php"
  );
  const result = await res?.json();

  products = result.data;

  return {
    props: {
      products: result.data || null,
    },
  };
}
