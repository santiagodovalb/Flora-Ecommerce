import React from "react";
import Products from "../components/Products";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Search() {
  const [products, setProducts] = useState([]);

  const { search } = useParams();

  useEffect(() => {
    axios
      .get(`/api/products/search?nombre=${search}`)
      .then((res) => res.data)
      .then((prods) => setProducts(prods));
  }, [search]);

  return (
    <div>
      <Products products={products} />
    </div>
  );
}
