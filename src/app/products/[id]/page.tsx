import Product from '@/app/components/Product'
import React from 'react'

const page = () => {
  return (
    <main>

<div className="flex gap-12 mt-0 my-24 items-center">
    <div className="image h-[350px] bg-gray-200 w-1/2">

    </div>
    <div className="p-2">
      <p className="text-gray-600 font-semibold">
        Product name
      </p>
      <p className="text-gray-600">
        $100.00
      </p>
      <button className="bg-primary text-white p-2 px-4 text-sm rounded-lg">
        Add To Cart
      </button>
    </div>
  </div>
        
        <div className="grid grid-cols-4 gap-8">
       
       <Product/>
       <Product/>
       <Product/>
       <Product/>

      </div>
    </main>
  )
}

export default page