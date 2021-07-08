import React, { useEffect } from "react";
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

    const promedio = reviews.reduce((accumulator, currentValue) => accumulator + currentValue.valoracion, 0) / reviews.length
   
    return (
        <div className="reviews">
            {promedio ? <h2>Promedio: {Math.round(promedio)} ★</h2> : <h2>No hay valoraciones</h2>}
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
