    //sessions done
    import { useState } from 'react'
    import ProfileNavBar from '../components/ProfileNavBar'
    import InstructorNavbar from '../components/InstructorNavbar'

    const InstructorReportAProblemPage = () => {
    const [Reported_Problem,setReported_Problem] = useState('')
    const [Report_Title,setReport_Title] = useState('')
    const[Report_Type,setReport_Type]= useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const queryParams = new URLSearchParams(window.location.search);
        //const instructorId = queryParams.get('id');
        const courseId = queryParams.get('CourseId');


        const report = {Report_Title,Reported_Problem,Report_Type};
        console.log(report)

        // const response = await fetch(`/instructorSendReport/?id=${instructorId}`, {
        // method: 'POST',
        // body: JSON.stringify(report),
        // headers: {
        //     'Content-Type': 'application/json'
        // }
        // })

        const response = await fetch(`/instructorSendReport`, {
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
        setReported_Problem('')
        setReport_Title('')
        setReport_Type(null)
        
        console.log('report sent:', json)
        // window.location=`http://localhost:3000/CurrentCourse?id=${instructorId}&CourseId=${courseId}`
        window.location=`http://localhost:3000/CurrentCourse?CourseId=${courseId}`
        }

    }

    return (

        <>
        <InstructorNavbar/>
        <form className="create" onSubmit={handleSubmit}>
        
        <br></br>
        <h3><strong>What type of issues are you facing?</strong></h3>

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
        <br></br>

        <label><strong>Report Title:</strong></label>
        <input 
            className='course'
            type="text" 
            onChange={(e) => setReport_Title(e.target.value)} 
            value={Report_Title}
        />

        <label><strong>Please write a brief description of the issue so we could help you to the best of our abilities:</strong></label>
        <input 
            className='course'
            type="text" 
            onChange={(e) => setReported_Problem(e.target.value)} 
            value={Reported_Problem}
        />

<button className="button-48" role="button"><span class="text">Submit Report</span></button>
        {error && <div className="error">{error}</div>}
        </form>
        </>
    )
    }

    export default InstructorReportAProblemPage