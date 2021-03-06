import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import './StarRating.css'

const StarRating = () => {
    const [rating, setRating] = useState(0);
    
    return (

        <div className = "StarRating">
            {[ ... Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return(

                <label>
                    <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                    
                    />
                    <FaStar className="star"
                        color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
                        size={40} />
                </label>
                )
                

            })}
        </div>
    );
};

export default StarRating;