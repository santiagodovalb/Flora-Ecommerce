import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { setReviews } from "../state/reviews";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import '../styles/Reviews.css'


export default function Reviews() {

  const reviews = useSelector(state => state.reviews)
  const { id } = useParams();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setReviews(id))
  }, []);

  return (
    <div className="reviews">
      {reviews?.map((review) => {
        return (
            <div className="review">
                <h3> {review.user.nick}</h3>
                <h3>{review.comentario}</h3>
                <h3>{review.valoracion} ★ </h3>
            </div>
        );
      })}
    </div>
  );
}
