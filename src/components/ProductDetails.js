import React, { useEffect, useState } from "react";
import { Table, Button, Select } from "antd";

const { Option } = Select;
const API_URL = "https://dummyjson.com/products";

const ProductDetails = ({ addToCompare, comparedProducts }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products);
      });
  }, []);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    if (value === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === value));
    }
  };

  const columns = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "Price ($)", dataIndex: "price", key: "price", sorter: (a, b) => a.price - b.price },
    { title: "Discount (%)", dataIndex: "discountPercentage", key: "discount" },
    { title: "Brand", dataIndex: "brand", key: "brand" },
    { title: "Category", dataIndex: "category", key: "category" },
    { 
      title: "Image", 
      dataIndex: "thumbnail", 
      key: "image", 
      render: (img) => (
        <img src={img} alt="product" className="w-28 h-20 rounded-full shadow-md border-2 border-gray-300" />
      ) 
    },
    {
      title: "Compare",
      key: "compare",
      render: (product) => (
        <Button 
          type="primary"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2"
          disabled={comparedProducts.some((p) => p.id === product.id)}
          onClick={() => addToCompare(product)}
        >
          Compare
        </Button>
      ),
    },
  ];

  return (
    <div className="p-10 bg-white rounded-lg shadow-lg">
     
      <div className="mb-3">
        <Select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-60"
          placeholder="Select Category"
        >
          <Option value="all">All Categories</Option>
          <Option value="beauty">Beauty</Option>
          <Option value="fragrances">Fragrances</Option>
          <Option value="furniture">Furniture</Option>
          <Option value="groceries">Groceries</Option>
        </Select>
      </div>

      <div className="overflow-x-auto">
        <Table 
          dataSource={filteredProducts} 
          columns={columns} 
          rowKey="id" 
          pagination={{ pageSize: 5 }} 
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default ProductDetails;
