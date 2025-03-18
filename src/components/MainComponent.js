import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ProductDetails from "./ProductDetails";
import CompareProducts from "./CompareProducts";

const MainComponent = ({ comparedProducts, addToCompare, removeFromCompare }) => (
  <div className="h-screen flex flex-col">
    <Navbar />
  
    <div className="flex flex-1 overflow-hidden pl-3 pt-3 pb-3">
      <Sidebar />
      
      <div className="flex-1 p-4 overflow-auto">
        <Routes>
          <Route path="/" element={<ProductDetails addToCompare={addToCompare} comparedProducts={comparedProducts} />} />
          <Route path="/compare" element={<CompareProducts comparedProducts={comparedProducts} removeFromCompare={removeFromCompare} />} />
        </Routes>
      </div>
    </div>
  </div>
);

export default MainComponent;
