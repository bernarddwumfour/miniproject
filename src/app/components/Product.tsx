import Link from "next/link";
import React from "react";
import Productcounter from "./Productcounter";


const Product = ({ product }: { product: product }) => {
  return (
    <div className="">
      <Link href={`/products/${product.id}`}>
        <div className="image h-36 bg-gray-200"></div>
      </Link>

      <div className="p-2">
        <Link href={`/products/${product.id}`}>
          <p className="text-gray-600 font-semibold">{product.name}</p>
        </Link>
        <p className="text-gray-600">${product.price}</p>

       <Productcounter id={product.id}/>
      </div>
    </div>
  );
};

export default Product;
