import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function createProduct() {
  const router = useRouter();

  //controlled components
  const [formData, setFormData] = useState({});

  //extract all those
  const { sku, name, price, size, weight, height, length, width, type } =
    formData;

  // on mutate
  const onMutate = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  // on submit action

  const handleSubmit = async (e) => {
    e.preventDefault();

    const req = await axios.post(
      "https://scandiweb-task-mbj.000webhostapp.com/api/create.php",
      JSON.stringify(formData)
    );

    const res = req.data;
    alert(res.message);
    router.push("/");
  };

  // handle cancel action
  const handleCancel = (e) => {
    e.preventDefault();
    router.push("/");
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
          onChange={onMutate}
          required
          step={0.01}
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
          onChange={onMutate}
          required
          step={0.01}
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
          onChange={onMutate}
          required
        />
        <label htmlFor="price">Width</label>
        <input
          className="mb-4 appearance-none outline-none rounded h-12 px-6 border-2 border-black focus:border-emerald-500"
          type="number"
          name="width"
          id="width"
          onChange={onMutate}
          required
        />
        <label htmlFor="price">Length</label>
        <input
          className="mb-4 appearance-none outline-none rounded h-12 px-6 border-2 border-black focus:border-emerald-500"
          type="number"
          name="length"
          id="length"
          onChange={onMutate}
          required
        />
      </>
    );
  }
  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-0">
      <h1 className="text-3xl font-semibold my-8">Add a product</h1>

      <form
        id="product_form"
        onSubmit={handleSubmit}
        className="flex flex-col mb-36"
      >
        <label htmlFor="sku">SKU</label>
        <input
          className="mb-4 outline-none rounded h-12 px-6 border-2 border-black focus:border-emerald-500"
          type="text"
          name="sku"
          id="sku"
          onChange={onMutate}
          required
        />

        <label htmlFor="name">Name</label>
        <input
          className="mb-4 outline-none rounded h-12 px-6 border-2 border-black focus:border-emerald-500"
          type="text"
          name="name"
          id="name"
          onChange={onMutate}
          required
        />

        <label htmlFor="price">Price</label>
        <input
          className="mb-4 appearance-none outline-none rounded h-12 px-6 border-2 border-black focus:border-emerald-500"
          type="number"
          name="price"
          id="price"
          onChange={onMutate}
          required
          step={0.1}
        />

        <label htmlFor="type">Type</label>
        <select
          className="mb-4 outline-none rounded h-12 px-6 border-2 border-black focus:border-emerald-500"
          name="type"
          onChange={onMutate}
          id="productType"
          required
        >
          <option value="" defaultValue>
            Choose type
          </option>
          <option value="book">Book</option>
          <option value="disc">Disc</option>
          <option value="furniture">Furniture</option>
        </select>

        {/* Dynamic form inputs come here  */}
        {customPart}

        <input
          className="w-1/2 sm:w-1/4 mt-8 px-6 h-14 text-emerald-500 border-2 border-emerald-500 rounded-xl hover:bg-emerald-500 hover:text-white transition ease-in-out delay-50"
          type="submit"
          value="Submit"
        />
        <button
          onClick={handleCancel}
          className="w-1/2 sm:w-1/4 mt-3 px-6 h-14 text-gray-500 border-2 border-gray-500 rounded-xl hover:bg-gray-500 hover:text-white transition ease-in-out delay-50"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
