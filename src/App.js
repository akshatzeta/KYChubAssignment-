import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainComponent from "./components/MainComponent";

const App = () => {
  const [comparedProducts, setComparedProducts] = useState([]);

  const addToCompare = (product) => {
    if (comparedProducts.length < 4 && !comparedProducts.some((p) => p.id === product.id)) {
      setComparedProducts([...comparedProducts, product]);
    }
  };

  const removeFromCompare = (id) => {
    setComparedProducts(comparedProducts.filter((product) => product.id !== id));
  };

  return (
    <Router>
      <MainComponent 
        comparedProducts={comparedProducts} 
        addToCompare={addToCompare} 
        removeFromCompare={removeFromCompare} 
      />
    </Router>
  );
};

export default App;
