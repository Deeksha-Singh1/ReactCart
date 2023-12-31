import React from "react";
import Product from "./Product";
import {useState, useEffect} from 'react'


const Products = () => {

  const [products, setProducts]= useState([]);

  useEffect(() => {
    fetch('/api/products')
  }, [])

  return (

    <div className="container mx-auto py-24">
      <h1 className="text-lg font-bold my-8">Pizzzaaas</h1>

      <div className="grid grid-cols-5 my-8 gap-24">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>

      </div>
    </div>
  );
};

export default Products;
