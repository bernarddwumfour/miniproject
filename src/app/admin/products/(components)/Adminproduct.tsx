"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaTrash } from 'react-icons/fa'

const Adminproduct = ({product}:{product:product}) => {


  const router = useRouter();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const deleteitem = async (id: number) => {
    try {
      const response = await fetch(`${apiUrl}/products`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      });
      const data = await response.json();
    } catch (err) {
      alert(err);
    }
    router.refresh();
  };

  return (
    <div className="flex lg:gap-8 py-2 items-center justify-between lg:justify-center  text-sm ">
    <div className="image flex-none bg-gray-200 w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-36 my-4"></div>

    <div className="details lg:p-4 p-2">
    <p className="capitalize text-orange-300 font-semibold">
      {product.name}
    </p>
    <div className="min-w-[350px] text-sm hidden md:block text-gray-500 lg:leading-6 leading-5 py-1 max-w-xl">
      {product.description}
    </div>
   
    <p className="text-gray-700">${product.price}</p>
  </div>

  <div className="actions flex flex-col-reverse gap-4 items-center justify-center scale-75 origin-center">
  <button
          className="bg-red-500 text-white px-3 rounded-md py-3 lg:text-lg text-sm"
          onClick={() => deleteitem(product.id)}
        >
          <FaTrash />
        </button>
  </div>
</div>
  )
}

export default Adminproduct