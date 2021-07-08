import React, { useState } from "react";
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
                ? "flex"
                : "none";
    };

    const handleInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleStar = (e) => {
        setForm({ ...form, valoracion: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post(`/api/reviews/${id}/add`, form)
            .then(() => dispatch(setReviews(id)));
    };

    return (
        <div className="writeReview">
            <button onClick={handleClick} type="button">
                Write a review
            </button>
            <div className="addReview">
                <form
                    onSubmit={handleSubmit}
                    id="reviewText"
                    className="reviewText"
                    style={{ display: "none" }}
                >
                    <div className='comentario'>
                        <label htmlFor="comentario">Comentario</label>
                        <input
                            onChange={handleInput}
                            name="comentario"
                            type="text"
                            placeholder="Write a review..."
                        ></input>
                    </div>
                    <div className='valoracion'>
                        <label htmlFor="valoracion">Valoracion</label>
                        <div className="rate">
                            <input
                                onClick={handleStar}
                                type="radio"
                                id="star5"
                                name="rate"
                                value="5"
                            />
                            <label htmlFor="star5" title="text">
                                5 stars
                            </label>
                            <input
                                onClick={handleStar}
                                type="radio"
                                id="star4"
                                name="rate"
                                value="4"
                            />
                            <label htmlFor="star4" title="text">
                                4 stars
                            </label>
                            <input
                                onClick={handleStar}
                                type="radio"
                                id="star3"
                                name="rate"
                                value="3"
                            />
                            <label htmlFor="star3" title="text">
                                3 stars
                            </label>
                            <input
                                onClick={handleStar}
                                type="radio"
                                id="star2"
                                name="rate"
                                value="2"
                            />
                            <label htmlFor="star2" title="text">
                                2 stars
                            </label>
                            <input
                                onClick={handleStar}
                                type="radio"
                                id="star1"
                                name="rate"
                                value="1"
                            />
                            <label htmlFor="star1" title="text">
                                1 star
                            </label>
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
