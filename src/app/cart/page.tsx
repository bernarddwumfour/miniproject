import React from 'react'
import Cartproduct from './(components)/Cartproduct'
// import { useRouter } from 'next/navigation'

//Fetching data or all products here
const getcart = async () =>{
  let res = await fetch("http://127.0.0.1:8000/api/cart",{cache : "no-store"})

  if(!(res.ok)){
    return undefined
  }
  
  let data = await res.json()
  return data
}


const page =async () => {

  // let router = useRouter()

  let cartproducts:cartitem[] =  await getcart()

  return (
    <main>
         <p className="text-center py-8">
        Products In Cart
      </p>
    <div className="px-2 ">
      {cartproducts && cartproducts.map(item => <Cartproduct item={item} />)}
   </div>
</main>
  )
}

export default page