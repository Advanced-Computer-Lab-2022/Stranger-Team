    import { useState } from 'react'
    import { useCourseContext } from "../hooks/useCoursesContext";

    const TraineeReviewAnInstructor = () => {
    const[review,setReview]= useState('')
    const [error, setError] = useState(null)
    //const [instructorId, setInstructorId] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const params = new URLSearchParams(window.location.search);
        const instructorId = params.get('id');
        console.log(instructorId);
        console.log(review);



        const response = await fetch(`/reviewingAnInstructor/?id=${instructorId}&review=${review}`)


        const json = await response.json()
        console.log(response)

        if (!response.ok) {
        setError(json.error)
        }
        if (response.ok) {
        setError(null)
        setReview('')
        
        console.log('new review added:', json)
        }

    }

    return (
        <form className="create" onSubmit={handleSubmit}> 
        <h3>Please Enter the Review You Would Like To Submit</h3>

        <input 
            className='course'
            type="text" 
            onChange={(e) => setReview(e.target.value)} 
            value={review}
        />

        <button>Add Review</button>

        {error && <div className="error">{error}</div>}
        </form>
    )
    }

    export default TraineeReviewAnInstructor