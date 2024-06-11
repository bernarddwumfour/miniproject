"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";


let addproducts = async (body : createproduct) => {
  let res = await fetch("http://127.0.0.1:8000/api/products", {
    method: "GET",
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
};

const page = () => {
  return (
    <main>
      <div className=" py-16 flex gap-16 justify-center">
        <p className="text-center">All Products In Store</p>
      </div>
      <Formik
        initialValues ={{ name: "", price: 0,description: "", quantity: 0,categories_id: 0}}
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
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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
              <label htmlFor="description">Cateory</label>
              <Field className="border-[1px] outline-none border-gray-400 p-2 focus:border-primary" type="number" name="cateories_id" />
              <ErrorMessage name="categories_id" component="small" className="text-red-400"/>
            </div>

            <button className="bg-primary text-white p-2 px-4 text-sm rounded-lg relative left-1/2 -translate-x-1/2"  type="submit" disabled={isSubmitting}>
              Add Product
            </button>
          </Form>
        )}
      </Formik>
      
    </main>
  );
};

export default page;
