    import { useState } from 'react'
    import RadioButtonsForRateInstructor from '../RadioButtonsForRateInstructor'

    const RateAnInstructorComponent = () => {
    
    const [rating, setRating] = useState(null)
    const [error, setError] = useState(null)
    const availableratings = [1,2,3,4,5]

    //const [instructorId, setInstructorId] = useState("")


    return (

        <RadioButtonsForRateInstructor/>
    )
    }

    export default RateAnInstructorComponent