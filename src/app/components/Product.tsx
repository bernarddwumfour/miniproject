import Link from 'next/link'
import React from 'react'

const Product = ({product}:{product:product}) => {
  return (
    <div className="">
    <Link href={"/products/1"}>
    <div className="image h-36 bg-gray-200">

    </div>
    </Link>

    <div className="p-2">
    <Link href={"/products/1"}>
      <p className="text-gray-600 font-semibold">
        {product.name}
      </p>
    </Link>
      <p className="text-gray-600">
        ${product.price}.00
      </p>
      <button className="bg-primary text-white p-2 px-4 text-sm rounded-lg">
        Add To Cart
      </button>
    </div>
  </div>

  )
}

export default Product