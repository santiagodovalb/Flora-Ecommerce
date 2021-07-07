import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { setReviews } from "../state/reviews";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Reviews() {

  const reviews = useSelector(state => state.reviews)
  const { id } = useParams();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setReviews(id))
  }, []);

  return (
    <div className="reviews">
      {reviews.map((review) => {
        return (
          <div className='review'>
            <h2> {review.user.nick}</h2>
            <p>{review.comentario}</p>
            <p>{review.valoracion}</p>
          </div>
        );
      })}
    </div>
  );
}
