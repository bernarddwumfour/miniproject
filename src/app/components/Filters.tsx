"use client";
import React from "react";

const Filters = ({
  categories,
  regions,
}: {
  categories: category[];
  regions: region[];
  
}) => {
  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setfilters({ category: "Electronics", region: "Accra" });
  };

  return (
    <form className="flex gap-6" onSubmit={handlesubmit}>
      <button type="submit" className="bg-primary py-2 px-6 text-white">
        Filter
      </button>

      <select
        className="border-[1px] outline-none border-gray-400 p-2 focus:border-primary"
        name="categories_id"
        id="categories_id"
      >
        <option value={0}>Select Category</option>
        {categories &&
          categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
      </select>

      <select
        className="border-[1px] outline-none border-gray-400 p-2 focus:border-primary"
        name="regions_id"
        id="r egions_id"
      >
        <option value={0}>Select A Region</option>
        {regions &&
          regions.map((region) => (
            <option key={region.id} value={region.id}>
              {region.name}
            </option>
          ))}
      </select>
    </form>
  );
};

export default Filters;
