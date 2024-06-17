"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";


const page =async () => {
  const router = useRouter()

  let getcategories = async ()=>{
    let response = await fetch('http://127.0.0.1:8000/api/categories',{cache: "no-store"})
    let data = await response.json()
    return data
  } 

  let getregions = async ()=>{
    let response = await fetch('http://127.0.0.1:8000/api/regions',{cache: "no-store"})
    let data = await response.json()
    return data
  } 
  
  let addproducts = async (body : createproduct) => {
    let res = await fetch("http://127.0.0.1:8000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });
    
    if (!res.ok) {
      return undefined;
    }
    let data = await res.json();
  
  
    
    return data
  };



  let categories:category[] = await getcategories()
  let regions:region[] = await getregions()
  
  
  return (
    <main>
      <div className=" py-16 flex gap-16 justify-center">
        <p className="text-center">Add Products In Store</p>
      </div>
      <Formik
        initialValues ={{ name: "", price: 0,description: "",regions_id: 0, quantity: 0,categories_id: 0}}
        validate={(values) => {
          const errors:producterrors  = {};
          if (!values.name) {
            errors.name = "Required";
          }
          if (!values.description) {
            errors.description = "Required";
          }
          if (values.quantity<=0) {
            errors.quantity = "Quantity Must be reater than 0";
          }
          if (values.price<=0) {
            errors.price = "Price Must be reater than 0";
          }
          if (values.categories_id<=0) {
            errors.categories_id = "Please select a cateory";
          }
          if (values.regions_id<=0) {
            errors.region = "Please select a region";
          }
          return errors;
        }}
        onSubmit={async (values, {setSubmitting }) => {
          let data=await addproducts(values)
          setSubmitting(false);
          alert(`Product ${data.name} Added Successfully`)
          router.push('/admin/products')
        }}
      >
        {({ isSubmitting }) => (
          <Form
          
            className="max-w-[500px] relative left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col gap-2 mb-6">
              <label htmlFor="name">Product name</label>
              <Field className="border-[1px] outline-none border-gray-400 p-2 focus:border-primary" type="name" name="name" />
              <ErrorMessage name="name" component="small" className="text-red-400"/>
            </div>

            <div className="flex flex-col gap-2 mb-6">
              <label htmlFor="name">Product price</label>
              <Field className="border-[1px] outline-none border-gray-400 p-2 focus:border-primary" type="price" name="price" />
              <ErrorMessage name="price" component="small" className="text-red-400"/>
            </div>

            <div className="flex flex-col gap-2 mb-6">
              <label htmlFor="description">Product description</label>
              <Field className="border-[1px] outline-none border-gray-400 p-2 focus:border-primary" type="description" name="description" />
              <ErrorMessage name="description" component="small" className="text-red-400"/>
            </div>

            <div className="flex flex-col gap-2 mb-6">
              <label htmlFor="quantity">Product Quantity</label>
              <Field className="border-[1px] outline-none border-gray-400 p-2 focus:border-primary" type="number" name="quantity" />
              <ErrorMessage name="quantity" component="small" className="text-red-400"/>
            </div>

            <div className="flex flex-col gap-2 mb-6">
              <label htmlFor="categories_id">Category</label>
              <Field as= "select"  className="border-[1px] outline-none border-gray-400 p-2 focus:border-primary" name="categories_id" id="categories_id">
                <option value={0}>Select Category</option>
                {categories && categories.map(category=>(
                  <option value={category.id}>{category.name}</option>
                ))}
              </Field>
              <ErrorMessage name="categories_id" component="small" className="text-red-400"/>
            </div>

            <div className="flex flex-col gap-2 mb-6">
              <label htmlFor="regions_id">Region</label>
              <Field as= "select" className="border-[1px] outline-none border-gray-400 p-2 focus:border-primary" name="regions_id" id="regions_id">
                <option value={0}>Select A Region</option>
                {regions && regions.map(region=>(
                  <option value={region.id}>{region.name}</option>
                ))}
              </Field>
              <ErrorMessage name="regions_id" component="small" className="text-red-400"/>
            </div>

            <button className={` text-white p-2 px-4 text-sm rounded-lg relative left-1/2 -translate-x-1/2 ${isSubmitting? "bg-gray-": "bg-primary"}`}  type="submit" disabled={isSubmitting}>
              Add Product
            </button>
          </Form>
        )}
      </Formik>
      
    </main>
  );
};

export default page;