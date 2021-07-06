import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import "../styles/Reviews.css";

export default function Reviews() {
  const [review, setReview] = useState([]);
  const { id } = useParams();
  useEffect(() => {

    axios
      .get(`/api/reviews/${id}`)
      .then((res) => res.data)
      .then((data) => setReview(data));
  }, []);

  const handleClick = (e) => {
    //e.preventDefault();
    document.getElementById("reviewText").style.display =
      document.getElementById("reviewText").style.display === "none"
        ? "block"
        : "none";
  };

  return (
    <div>
      <button onClick={handleClick} type="button">
        Write a review
      </button>
      <input
        style={{ display: "none" }}
        type="text"
        id="reviewText"
        placeholder="Write a review..."
      ></input>
      {review.map((oneRev) => {
        return <h1>{oneRev}</h1>;
      })}
    </div>
  );
}
