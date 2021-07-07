import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { editing, setReviews } from "../state/reviews";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { BsTrash, BsPencilSquare } from "react-icons/bs";
import "../styles/Reviews.css";
import axios from "axios";

export default function Reviews() {
    const user = useSelector((state) => state.user);
    const { reviews, toggleEditing } = useSelector((state) => state.reviews);
    const { id } = useParams();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(setReviews(id));
    }, [dispatch, id, toggleEditing]);

    const handleClickDelete = (reviewId) => {  
        axios.delete(`/api/reviews/${reviewId}`).then(() => {
            dispatch(setReviews(id));
        });
    };



    return (
        <div className="reviews">
            {reviews?.map((review) => {
                return (
                    <div className="review">
                        <h3> {review.user.nick}</h3>
                        <h3>{review.comentario}</h3>
                        <h3>{review.valoracion} ★ </h3>
                        {user.id === review.userId ? (
                            <div>
                                <BsTrash
                                    className="BsTrash"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => handleClickDelete(review.id)}
                                />
                                <BsPencilSquare
                                    className="BsPencilSquare"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => dispatch(editing(review))}
                                />
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                );
            })}
        </div>
    );

}
