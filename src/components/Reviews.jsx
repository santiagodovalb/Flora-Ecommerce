import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import "../styles/Reviews.css";

export default function Reviews() {
  const [review, setReview] = useState([]);
  const { id } = useParams();
  const [form, setForm] = useState({ comentario: "", valoracion: 1 });

  useEffect(() => {
    axios
      .get(`/api/reviews/${id}`)
      .then((res) => res.data)
      .then((data) => {
        console.log("data", data);
        setReview(data);
      });
  }, []);

  const handleClick = (e) => {
    //e.preventDefault();
    document.getElementById("reviewText").style.display =
      document.getElementById("reviewText").style.display === "none"
        ? "block"
        : "none";
  };

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`/api/reviews/${id}/add`, form)
      .then((res) => res.data)
      .then((data) => setReview([...review, data]));
  };

  return (
    <div>
      <button onClick={handleClick} type="button">
        Write a review
      </button>
      <form onSubmit={handleSubmit} style={{ display: "none" }} id="reviewText">
        <label htmlFor="comentario">Comentario</label>
        <input
          onChange={handleInput}
          name="comentario"
          type="text"
          placeholder="Write a review..."
        ></input>
        <label htmlFor="valoracion">Valoracion</label>
        <select onChange={handleInput} name="valoracion">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      {review.map((oneRev) => {
        return <h1>{oneRev.comentario}</h1>;
      })}
    </div>
  );
}
