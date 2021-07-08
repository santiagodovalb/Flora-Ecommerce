import React from "react";
import Products from "../components/Products";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSearchProducts } from "../state/products";

export default function Search() {
  const dispatch = useDispatch()

  const { search } = useParams();

  useEffect(() => {
    dispatch(setSearchProducts(search))
  }, [search, dispatch]);

  return (
    <div>
      <Products />
    </div>
  );
}
