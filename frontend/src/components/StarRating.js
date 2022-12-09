import React, {useState} from "react";
import { FaStar } from "react-icons/fa";


const StarRating = () => {
const [rating, setRating] = useState(null);
const [hover, setHover] = useState(null);

    const handleSubmit = async() => {

        
        const params = new URLSearchParams(window.location.search);
        const instructorId = params.get('id');
        console.log(instructorId); 
        console.log("rating"+rating);
        const response = await fetch(`/ratingAnInstructor/?id=${instructorId}&rating=${rating}`, {
            method: 'POST',
            body: JSON.stringify(rating),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()
        console.log(json)

        if(!response.ok) {
            
        }

        if (response.ok) {
            console.log(response)
        }
    }

    return (
    <div class="starsLine">
        {[ ... Array(5)].map((star , i)=>{
        const ratingValue = i + 1;

        return (
            <label> 
            <input 
            type="radio" 
            name="rating" 
            value={ratingValue} 
            onClick={() => {setRating(ratingValue);handleSubmit()}}
            />
            <FaStar 
            className="star" 
            color={ratingValue <= (hover ||rating) ? "#ffc107" : "lightgray"} 
            size={20}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)} 
            
            />
            </label>
            );
        })}
    
    </div>
    );
};

export default StarRating