import React, { useEffect, useState } from "react";
import "../styles/AddReview.css";
import { editReview } from "../state/reviews";
import { useDispatch, useSelector } from "react-redux";


export default function EditReview() {
    const dispatch = useDispatch();
    const { reviewEditing } = useSelector((store) => store.reviews);
    const [form, setForm] = useState({ comentario: "", valoracion: 1 });

    useEffect(() => {
        setForm({comentario: reviewEditing.comentario, valoracion:  reviewEditing.valoracion})
    }, [reviewEditing.comentario, reviewEditing.valoracion])

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
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editReview({id : reviewEditing.id, form}))
    };

    return (
        <div className="writeReview">
            <button onClick={handleClick} type="button">
                Edit Review
            </button>
            <div className="addReview">
                <form
                    onSubmit={handleSubmit}
                    id="reviewText"
                    style={{ display: "none" }}
                >
                    <label htmlFor="comentario">Comentario</label>
                    <input
                        onChange={handleInput}
                        name="comentario"
                        type="text"
                        placeholder="Write a review..."
                        // value={reviewEditing.comentario}
                    ></input>
                    <label htmlFor="valoracion">Valoracion</label>
                    <div class="rate">
                        <input
                            onClick={handleStar}
                            type="radio"
                            id="star5"
                            name="rate"
                            value="5"
                        />
                        <label for="star5" title="text">
                            5 stars
                        </label>
                        <input
                            onClick={handleStar}
                            type="radio"
                            id="star4"
                            name="rate"
                            value="4"
                        />
                        <label for="star4" title="text">
                            4 stars
                        </label>
                        <input
                            onClick={handleStar}
                            type="radio"
                            id="star3"
                            name="rate"
                            value="3"
                        />
                        <label for="star3" title="text">
                            3 stars
                        </label>
                        <input
                            onClick={handleStar}
                            type="radio"
                            id="star2"
                            name="rate"
                            value="2"
                        />
                        <label for="star2" title="text">
                            2 stars
                        </label>
                        <input
                            onClick={handleStar}
                            type="radio"
                            id="star1"
                            name="rate"
                            value="1"
                        />
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
