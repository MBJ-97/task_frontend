import Image from "next/image";
import { useState } from "react";
import disc from "../public/compact-disk.png";
import furniture from "../public/table.png";
import book from "../public/open-book.png";

export default function ProductCard({
  productData,
  checkboxInfos,
  setCheckboxInfos,
}) {
  //get fields lengths
  const count = productData.length;

  // handle on Change
  const handleOnChange = (position) => {
    const updatedCheckedState = checked.map((item, index) =>
      index === position ? !item : item
    );
  };

  //Custom Illustration and Infos by product category
  const { id, sku, name, price, type, size, weight, height, length, width } =
    productData;

  let physicalInfos;
  let image;

  if (type == "furniture") {
    physicalInfos = `Dimensions: ${height}x${width}x${length}`;
    image = (
      <Image src={furniture} layout="fixed" width={50} height={50} alt="type" />
    );
  } else if (type == "book") {
    physicalInfos = `Weight: ${weight}KG`;
    image = (
      <Image src={book} layout="fixed" width={50} height={50} alt="type" />
    );
  } else {
    physicalInfos = `Size: ${size}MB`;
    image = (
      <Image src={disc} layout="fixed" width={50} height={50} alt="type" />
    );
  }

  return (
    <div className="w-full sm:w-80 p-4 hover:-translate-y-2 transition ease-in-out delay-50">
      <article
        className={
          "border-2 border-black rounded-xl flex py-6 pl-8 pr-2" +
          (checked == true ? "bg-red-300" : "")
        }
      >
        <div className="infos w-2/3">
          {" "}
          {/*If to see type of card comes here (wela f listing au moment d'assign les props?) ALSO dont forget the props that are passed*/}
          <ul className="list-disc">
            <li>SKU: {sku}</li>
            <li>{name}</li>
            <li>{price} $</li>
            <li>{physicalInfos}</li>
          </ul>
        </div>
        <div className="checkbox-image flex flex-col items-center justify-between w-1/3">
          <input
            id={sku}
            // checked={checked}
            onChange={() => {
              handleOnChange(index);
            }}
            className="w-5 h-5 mb-8"
            type="checkbox"
          />
          {image}
        </div>
      </article>
    </div>
  );
}
