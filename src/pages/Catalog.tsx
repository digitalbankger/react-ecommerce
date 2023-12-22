import React, { useState } from "react";
import { products } from "../data/products";
import { ShopItem } from "../components/ShopItem";

export function Catalog() {
  const [sortOrder, setSortOrder] = useState("desc");

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === "desc") {
      return b.price - a.price;
    } else {
      return a.price - b.price;
    }
  });

  const toggleSortOrder = () => {
    setSortOrder(prevOrder => (prevOrder === "desc" ? "asc" : "desc"));
  };

  return (
    <div className='section flex justify-center bg-center bg-cover py-20'>
      <div className="container flex flex-col item">
        <div className="flex justify-between mt-14 mb-14">
            <h2 className="font-exo text-black font-semibold text-4xl">Каталог карт</h2>
            <label className="flex items-center">
                <span className="mr-3 text-lead-dark tracking-[0.6px] font-exo text-lg font-light leading-normal">От большего номинала</span>
            
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox"               
                        checked={sortOrder === "asc"}
                        onChange={toggleSortOrder} 
                        className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>

                <span className="ml-3 text-lead-dark tracking-[0.6px] font-exo text-lg font-light leading-normal">От меньшего номинала</span>
            </label>
        </div>
        <div className="shop grid grid-cols-2 gap-8">
          {sortedProducts.map(product => (
            <ShopItem product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}