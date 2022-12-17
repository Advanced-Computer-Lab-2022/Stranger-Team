    import { useState } from 'react'

    const SendFollowUpComponent = () => {
    const [followup,setFollowUp] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const queryParams = new URLSearchParams(window.location.search);
        const reportId = queryParams.get('ReportId');
        const traineeId = queryParams.get('TraineeId');


        const report = {Followup};
        console.log(report)

        const response = await fetch(`/traineeSendFollowup/?ReportId=${reportId}`, {
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
        setFollowUp('')
        
        console.log('report sent:', json)
        window.location=`http://localhost:3000/CurrentCoursePageTrainee?TraineeId=${traineeId}&CourseId=${courseId}`
        }

    }

    return (
        <form className="create" onSubmit={handleSubmit}> 
        <h3>Fill In The Following Fields To Send Your Report:</h3>

        <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Technical" onChange={(e) => setReport_Type(e.target.value)}/>
        <label className="form-check-label" >
            Technical
        </label>
        </div>
        <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="Financial" onChange={(e) => setReport_Type(e.target.value)}  />
        <label className="form-check-label" >
            Financial
        </label>
        </div>
        <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Other" onChange={(e) => setReport_Type(e.target.value)}/>
        <label className="form-check-label" >
            Other
        </label>
        </div>
        

        {/* <label> Please select the report type:</label>
        <input  type="radio" value="Technical" onChange={(e) => setReport_Type(e.target.value)} 
            /> Technical
        <label className="radio-inline">
        <input type="radio" value="Financial" onChange={(e) => setReport_Type(e.target.value)} 
            /> Financial
        </label>
        <label className="radio-inline">
        <input type="radio" value="Other" onChange={(e) => setReport_Type(e.target.value)} 
            /> Other
        </label> */}

        <label> Report Title:</label>
        <input 
            className='course'
            type="text" 
            onChange={(e) => setReport_Title(e.target.value)} 
            value={Report_Title}
        />

        <label> Please write a brief description of the issue so we could help you to the best of our abilities:</label>
        <input 
            className='course'
            type="text" 
            onChange={(e) => setReported_Problem(e.target.value)} 
            value={Reported_Problem}
        />

        <button>Submit Report</button>
        {error && <div className="error">{error}</div>}
        </form>
    )
    }

    export default SendFollowUpComponent