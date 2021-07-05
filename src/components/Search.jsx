import React from "react";
import Products from "../components/Products";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchProducts } from "../state/products";

export default function Search() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch()

  const { search } = useParams();

  useEffect(() => {
    dispatch(setSearchProducts(search))
  }, [search]);

  return (
    <div>
      <Products />
    </div>
  );
}
