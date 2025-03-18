import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";


const API_URL = "https://dummyjson.com/products";

const CompareProducts = ({ comparedProducts, removeFromCompare, addToCompare }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [randomProducts, setRandomProducts] = useState([]);
  const [comparisonResult, setComparisonResult] = useState("");


  useEffect(() => {
    if (isModalOpen) {
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          const shuffled = data.products.sort(() => 0.5 - Math.random()).slice(0, 4);
          setRandomProducts(shuffled);
        });
    }
  }, [isModalOpen]);


  useEffect(() => {
    if (comparedProducts.length < 2) {
      setComparisonResult("⚠️ Add at least two products to compare!");
      return;
    }

    const categorySet = new Set(comparedProducts.map((product) => product.category));

    if (categorySet.size > 1) {
      setComparisonResult("❌ Can't compare different categories! Pick similar products. 🚀🍏");
      return;
    }

    const sortedProducts = [...comparedProducts].sort((a, b) => a.price - b.price);
    const cheapest = sortedProducts[0];
    const expensive = sortedProducts[sortedProducts.length - 1];

    setComparisonResult(`💰 Cheapest: ${cheapest.title} - $${cheapest.price} | 🏆 Most Expensive: ${expensive.title} - $${expensive.price}`);
  }, [comparedProducts]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800">Compare Products</h1>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700 uppercase text-left">
              <th className="p-3 w-1/5">Title</th>
              <th className="p-3 w-1/5">Price</th>
              <th className="p-3 w-1/5">Brand</th>
              <th className="p-3 w-1/5">Category</th>
              <th className="p-3 w-1/5">Action</th>
            </tr>
          </thead>
          <tbody>
            {comparedProducts.map((product) => (
              <tr key={product.id} className="border-b text-left">
                <td className="p-3">{product.title}</td>
                <td className="p-3">${product.price}</td>
                <td className="p-3">{product.brand}</td>
                <td className="p-3">{product.category}</td>
                <td className="p-3">
                  <Button 
                    danger 
                    className="text-red px-4 py-1 rounded-lg"
                    onClick={() => removeFromCompare(product.id)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 p-3 bg-gray-100 text-gray-800 rounded-lg shadow">
        {comparisonResult}
      </div>

      <Button 
        type="primary"
        className="mt-4 bg-green-500 hover:bg-green-600 text-white rounded-lg"
        onClick={() => setIsModalOpen(true)}
      >
        Add More
      </Button>

      <Modal 
        title="Add More Products" 
        open={isModalOpen} 
        onCancel={() => setIsModalOpen(false)} 
        footer={null}
      >
        {randomProducts.length > 0 ? (
          <div className="space-y-3">
            {randomProducts.map((product) => (
              <div key={product.id} className="flex items-center justify-between border p-3 rounded-lg">
                <span>{product.title}</span>
                <Button 
                  type="primary"
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                  onClick={() => {
                    addToCompare(product);
                    setIsModalOpen(false);
                  }}
                >
                  Add
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading products...</p>
        )}
      </Modal>

    </div>
  );
};

export default CompareProducts;
