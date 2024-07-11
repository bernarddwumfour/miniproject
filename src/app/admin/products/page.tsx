import React from "react";
import Adminproduct from "./(components)/Adminproduct";

const getproducts = async () => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    let res = await fetch(`${apiUrl}/products`, { cache: "no-store" });

    if (!res.ok) {
      return undefined;
    }

    let data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

const page = async () => {
  let products = await getproducts();
  // console.log(products);

  return (
    <main>
      <div className=" py-16 flex justify-center gap-24">
        <p className="text-center">All Products In Store</p>
      </div>
      <div className="px-2 ">
        {products.length > 0 ? (
          products.map((product: product) => (
            <Adminproduct key={product.id} product={product} />
          ))
        ) : (
          <div>No products to Show</div>
        )}
      </div>
    </main>
  );
};

export default page;
