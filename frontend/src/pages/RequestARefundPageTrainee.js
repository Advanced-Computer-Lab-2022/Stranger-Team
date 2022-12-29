    //sessions done
    import { useState } from 'react'
    import TraineeProfileNavBar from '../components/TraineeProfilNavBar'

    const RequestARefundPageTrainee = () => {
    const [Problem,setProblem] = useState('')
    
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const queryParams = new URLSearchParams(window.location.search);
        //const traineeId = queryParams.get('TraineeId');
        const courseId = queryParams.get('CourseId');


        const report = {Problem};
        console.log(report)

        // const response = await fetch(`/traineeRefundRequest/?TraineeId=${traineeId}&CourseId=${courseId}`, {
        // method: 'POST',
        // body: JSON.stringify(report),
        // headers: {
        //     'Content-Type': 'application/json'
        // }
        // })

        const response = await fetch(`/traineeRefundRequest/?CourseId=${courseId}`, {
        method: 'POST',
        body: JSON.stringify(report),
        headers: {
            'Content-Type': 'application/json'
        }
        })


        const json = await response.json()
        console.log(response)

        if (!response.ok) {
        setError(json.error)
        }
        if (response.ok) {
        setError(null)
        setProblem('')
        
        console.log('refund request sent:', json)
        // window.location=`http://localhost:3000/CurrentCoursePageTrainee?TraineeId=${traineeId}&CourseId=${courseId}`
        window.location=`http://localhost:3000/CurrentCoursePageTrainee?CourseId=${courseId}`
        }

    }

    return (
        <>
        <TraineeProfileNavBar/>
        <form className="create" onSubmit={handleSubmit}> 
        <h3>Please write a brief explanation as to why you are requesting a refund so we could help provide for your convenience: </h3>


        <label>Problem: </label>
        <input 
            className='course'
            type="text" 
            onChange={(e) => setProblem(e.target.value)} 
            value={Problem}
        />


        <button>Request Refund</button>
        {error && <div className="error">{error}</div>}
        </form>

        </>
    )
    }

    export default RequestARefundPageTrainee