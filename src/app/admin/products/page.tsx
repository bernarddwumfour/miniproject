import React from 'react'
import Adminproduct from './(components)/Adminproduct'
import Link from 'next/link'

const getproducts = async () =>{
  let res = await fetch("http://127.0.0.1:8000/api/products")

  if(!(res.ok)){
    return undefined
  }
  
  let data = await res.json()
  return data
}


const page = async () => {

  let products =await getproducts()


  return (
    <main>
          <div className=" py-16 flex justify-center gap-24">
      <p className="text-center">
        All Products In Store
      </p>

      </div>
    <div className="px-2 ">
    {products  && products.map((product:product)=><Adminproduct key={product.id} product={product}/>)}
   </div>
</main>
  )
}

export default page