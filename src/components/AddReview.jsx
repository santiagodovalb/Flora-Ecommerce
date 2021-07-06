import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import "../styles/AddReview.css";
import { setReviews } from "../state/reviews";
import { useDispatch } from "react-redux";

export default function AddReview() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [form, setForm] = useState({ comentario: "", valoracion: 1 });

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

  const handleStar = (e) => {
    setForm({ ...form, valoracion: e.target.value });

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`/api/reviews/${id}/add`, form)
      .then(() => dispatch(setReviews(id)));
  };

  return (
    <div>
    <button onClick={handleClick} type="button">
        Write a review
      </button>
    <div className='addReview'>
      
      <form onSubmit={handleSubmit} id="reviewText" style={{display: 'none'}}>
        <label htmlFor="comentario">Comentario</label>
        <input
          onChange={handleInput}
          name="comentario"
          type="text"
          placeholder="Write a review..."
        ></input>
        <label htmlFor="valoracion">Valoracion</label>
        <div class="rate">
          <input onClick={handleStar} type="radio" id="star5" name="rate" value="5" />
          <label for="star5" title="text">
            5 stars
          </label>
          <input onClick={handleStar} type="radio" id="star4" name="rate" value="4" />
          <label for="star4" title="text">
            4 stars
          </label>
          <input onClick={handleStar} type="radio" id="star3" name="rate" value="3" />
          <label for="star3" title="text">
            3 stars
          </label>
          <input onClick={handleStar} type="radio" id="star2" name="rate" value="2" />
          <label for="star2" title="text">
            2 stars
          </label>
          <input onClick={handleStar} type="radio" id="star1" name="rate" value="1" />
          <label for="star1" title="text">
            1 star
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}
