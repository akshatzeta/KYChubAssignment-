import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <aside className="w-64 bg-gray-300 text-violet-800 p-4 rounded-xl shadow-lg h-full">
    <ul>
      <h1 className="text-2xl font-bold text-black mb-4">Select Function</h1>
      <li className="p-3 hover:bg-violet-400 rounded-md">
        <Link to="/" className="block">Product Details</Link>
      </li>
      <li className="p-3 hover:bg-violet-400 rounded-md">
        <Link to="/compare" className="block">Compare Products</Link>
      </li>
    </ul>
  </aside>
);

export default Sidebar;
