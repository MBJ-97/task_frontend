import ProductList from "../components/ProductList";
import { useState } from "react";

export default function Home({ products }) {
  console.log(products);

  return (
    <div className="max-w-5xl mx-auto">
      <ProductList products={products} />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://scandiweb-task-mbj.000webhostapp.com/api/read.php"
  );
  const json = await res.json();
  const products = json.data;

  return {
    props: {
      products,
    },
  };
}
