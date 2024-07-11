import Filters from "./components/Filters";
import Product from "./components/Product";


const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  let getcategories = async () => {
    let response = await fetch(`${apiUrl}/categories`, {
      cache: "no-store",
    });
    let data = await response.json();
    return data;
  };

  let getregions = async () => {
    let response = await fetch(`${apiUrl}/regions`, {
      cache: "no-store",
    });
    let data = await response.json();
    return data;
  };

  

  

//Fetching data or all products here
let filter = {
  category:"Electronics",
  region:"Ashanti",
}

const getproducts = async () =>{
  
  try{
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  let res = await fetch(`${apiUrl}/products`,{cache : "no-store"})

  if(!(res.ok)){
    return undefined
  }
  
  let data = await res.json()
  return data
}catch(err){
  console.log(err)
  return undefined
}

}
//FILTERING THROUGH PRODUCTS

type filters ={category:string,region:string}

let filters:filters= {
  category: "",
  region : ""
}

const setfilters = ({category,region}:filters)=>{
  filters.category = category
  filters.region = region
}

// setfilters({category:"Electronics",region:"Accra"})

export default async function Home() {


  let products:product[] =await getproducts()
  if(filters.category != ""){
    products = products.filter(product=>product.category[0].name == filters.category) 
  }
  if(filters.region != ""){
    products = products.filter(product=>product.region[0].name == filters.region) 
  }
  

  let regions =await getregions()
  let categories =await getcategories()

  return (
    <main>
      <Filters categories= {categories} regions= {regions} />
      <div className=" py-16 flex justify-between">
      <p className="text-center">
        All Products In Store
      </p>

      </div>
      <div className="grid grid-cols-4 gap-8">
       {products ? products.map((product:product)=><Product key={product.id} product={product}/>) : "No Products To Show"}
      </div>
    </main>
  );
}
