import { useState } from "react";

export default function createProduct() {
  const [type, setType] = useState(""); //HANDLE FORM DATA see traversy tutorial

  const handleChange = (e) => {
    setType(e.target.value);
  };
  // render changing form part
  let customPart;

  if (type == "book") {
    customPart = (
      <>
        <label htmlFor="price">Weight</label>
        <input
          className="mb-4 appearance-none outline-none rounded h-12 px-6 border-2 border-black focus:border-emerald-500"
          type="number"
          name="weight"
          id="weight"
        />
      </>
    );
  } else if (type == "disc") {
    customPart = (
      <>
        <label htmlFor="price">Size</label>
        <input
          className="mb-4 appearance-none outline-none rounded h-12 px-6 border-2 border-black focus:border-emerald-500"
          type="number"
          name="size"
          id="size"
        />
      </>
    );
  } else if (type === "furniture") {
    customPart = (
      <>
        <label htmlFor="price">Height</label>
        <input
          className="mb-4 appearance-none outline-none rounded h-12 px-6 border-2 border-black focus:border-emerald-500"
          type="number"
          name="height"
          id="height"
        />
        <label htmlFor="price">Width</label>
        <input
          className="mb-4 appearance-none outline-none rounded h-12 px-6 border-2 border-black focus:border-emerald-500"
          type="number"
          name="width"
          id="width"
        />
        <label htmlFor="price">Length</label>
        <input
          className="mb-4 appearance-none outline-none rounded h-12 px-6 border-2 border-black focus:border-emerald-500"
          type="number"
          name="length"
          id="length"
        />
      </>
    );
  }
  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-0">
      <h1 className="text-3xl font-semibold my-8">Add a product</h1>

      <form action="" className="flex flex-col mb-36">
        <label htmlFor="sku">SKU</label>
        <input
          className="mb-4 outline-none rounded h-12 px-6 border-2 border-black focus:border-emerald-500"
          type="text"
          name="sku"
          id="sku"
        />

        <label htmlFor="name">Name</label>
        <input
          className="mb-4 outline-none rounded h-12 px-6 border-2 border-black focus:border-emerald-500"
          type="text"
          name="name"
          id="name"
        />

        <label htmlFor="price">Price</label>
        <input
          className="mb-4 appearance-none outline-none rounded h-12 px-6 border-2 border-black focus:border-emerald-500"
          type="number"
          name="price"
          id="price"
        />

        <label htmlFor="type">Type</label>
        <select
          className="mb-4 outline-none rounded h-12 px-6 border-2 border-black focus:border-emerald-500"
          name="type"
          onChange={handleChange}
          id="type"
        >
          <option value="" selected>
            Choose type
          </option>
          <option value="book">Book</option>
          <option value="disc">Disc</option>
          <option value="furniture">Furniture</option>
        </select>

        {customPart}

        <input
          className="w-1/2 sm:w-1/4 mt-8 px-6 h-14 text-emerald-500 border-2 border-emerald-500 rounded-xl hover:bg-emerald-500 hover:text-white transition ease-in-out delay-50"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}
