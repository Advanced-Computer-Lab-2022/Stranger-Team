    import React, {useState} from "react";
    import { FaStar } from "react-icons/fa";


    const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [Error,setError]= useState(null);
    var newrating=null;

    

    const handleSubmit = async (e) => {
        e.preventDefault()
        const params = new URLSearchParams(window.location.search);
        const userId = params.get('traineeId');
        console.log("user"+userId); 
        const courseId = params.get('CourseId');
        console.log("course"+courseId); 
        console.log("newrating"+newrating)
        const response = await fetch(`/saveUserRating/?CourseId=${courseId}&traineeId=${userId}`, {
        method: 'POST',
        body: JSON.stringify(rating),
        headers: {
            'Content-Type': 'application/json'
        }
        })

        // const response = await fetch(`/saveUserRating/?CourseId=${courseId}&traineeId=${userId}`)

        const json = await response.json()
        console.log(response)
        console.log( json)

        if (!response.ok) {
        setError(json.error)
        }
        if (response.ok) {
        
        
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
            // onClick={() => setRating(ratingValue)}
            onClick={handleSubmit}
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
