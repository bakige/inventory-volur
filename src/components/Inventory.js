import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_categories, fetch_inventory } from "../store/inventory/actions";

const Inventory = ({ categories }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(fetch_inventory(e.target.value));
  };

  const items = useSelector((state) => state.items);

  return (
    <div className="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap flex-grow">
      <main role="main" className="w-full flex-grow pt-1 px-3 w-2/4">
        <ul>
          <li>
            {items.map((item) => {
              <span>{item.name}</span>;
            })}
          </li>
        </ul>
      </main>
      <div className="w-fixed flex-shrink flex-grow-0 right-0">
        {/* <!-- fixed-width --> */}
        <div className="flex sm:flex-col px-2">
          <div className="w-1/2 md:w-1/3 lg:w-64 md:top-0 md:left-0 h-screen lg:block bg-gray-100 border-r z-30">
            <div className="w-full h-20 border-b flex px-4 items-center mb-8">
              <p className="font-semibold text-3xl text-blue-400 pl-4">
                FILTER
              </p>
            </div>

            <div className="mb-4 px-4 ">
              <select className="w-full" onChange={handleChange}>
                {categories.map((item) => {
                  <option value={item.id}>{item.name}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Inventory;
