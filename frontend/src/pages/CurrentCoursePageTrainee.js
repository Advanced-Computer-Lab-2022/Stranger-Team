//sessions done fadel MAIN FOR QUIZ 
    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate,useLocation  } from "react-router-dom";
    // import{Button, Alert, Container,Card} from 'react-bootstrap'

    // components
    import MyCourses from "../components/MyCourses"
    import 'bootstrap/dist/css/bootstrap.min.css'

    import{Button, Alert, Container, Nav,Card} from 'react-bootstrap'
    import Navbar from "../components/Navbar";
    import CourseDetails from "../components/CourseDetails";
    import StarRating from "../components/StarRating";
    import CurrentCoursePageDetails from "../components/CurrentCoursePageDetails";
    import CurrentCoursePageDiscountDetails from "../components/CurrentCoursePageDiscountDetails";
    import CurrentCourseDiscountPage from "../components/CurrentCourseDiscountPage";
    import CurrentCourseSubtitlesPageTrainee from "./CurrentCourseSubtitlesPageTrainee";
    import RadioButtonsRateACourse from "../components/RadioButtonsRateACourse";
    import TraineeSubtitleTitlesPage from "./TraineeSubtitleTitlesPage";
    import TraineeProfileNavBar from "../components/TraineeProfilNavBar";
    import PreviewCourseVideoPageDetails from "../components/PreviewCourseVideoTraineePageDetails";
    import { Certificate } from "../components/Certificate";
    import styles from '../components/Guest/styles.module.css';

    var p;
    const CurrentCoursePageTrainee = () => {
    const [course, setCourse] = useState(null);
    const[error,setError] = useState('');
    const[enableRefundButton, setEnableRefundButton]=useState(false);
    const [button, setButton] = useState(false)
    const [price, setPrice] = useState("")
    

    useEffect(() => {
        const fetchCourse = async () => {
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
        //const traineeId = params.get('TraineeId');
        
        
        const response = await fetch(`/CurrentCourse/?CourseId=${courseId}`)
        
        
        const json = await response.json()
        console.log("res "+response)
        console.log( "json "+json)

        if (response.ok) {
            setCourse(json)
        }
        p=course[0].Price;

        console.log("-------------------------->>>>>>>>>>PRICEEE",course[0].Price)
        }

        fetchCourse()
    })


    // const fetchPrice = async () => {
    //     const courseId = course._id;
        
        
    //     const response = await fetch(`/isCourseFree/?CourseId=${courseId}`)
        
        
    //     const json = await response.json()
    //     console.log(json)
    //     if(response.ok)
    //     {
    //         if(json==true)
    //         {
    //             setPrice("Free");
    //         }
    //         else
    //         {
    //             setPrice(json);
    //             setButton(true);
    //         }
    //     }
        
        
    //     }
    //     fetchPrice();
        

    let navigate = useNavigate();
        const routeChange = () =>{ 
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
        // const traineeId = params.get('TraineeId');
        // console.log(courseId); 
        // let path = `/TraineeReportAProblemPage/?TraineeId=${traineeId}&CourseId=${courseId}`; 
        let path = `/TraineeReportAProblemPage/?CourseId=${courseId}`; 
        navigate(path);
        
    }


//NEED TO DO THE SESSION FOR IT !!!!
    const routeChange1 = () =>{ 
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
        //const traineeId = params.get('TraineeId');
        //let path = `/mainForQuiz/?TraineeId=${traineeId}&CourseId=${courseId}`; 
        let path = `/mainForQuiz/?CourseId=${courseId}`; 
        navigate(path);
    }



    // const routeChange2 = () =>{ 
    //     const params = new URLSearchParams(window.location.search);
    //     const courseId = params.get('CourseId');
    //     const traineeId = params.get('TraineeId');
    //     console.log(traineeId); 
    //     let path = `/RequestARefundPageTrainee/?TraineeId=${traineeId}&CourseId=${courseId}`; 
    //     navigate(path);
    // }
    const routeChange3 = () =>{ 
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
        //const corporateTraineeId = params.get('TraineeId');
        // let path = `/TraineeCertificate/?CourseId=${courseId}&TraineeId=${corporateTraineeId}`; 
        let path = `/TraineeCertificate/?CourseId=${courseId}`; 
        navigate(path);
        <Certificate></Certificate>
    }
    const routeChange4 = () =>{ 
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
        // const corporateTraineeId = params.get('TraineeId');
        // let path = `/viewqwizanswers/?CourseId=${courseId}&CorporateTraineeId=${corporateTraineeId}`; 
        let path = `/viewqwizanswers/?CourseId=${courseId}`; 
        navigate(path);

    }


    const checkIfRefundEligible = async (e) => {
        e.preventDefault()
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
        //const traineeId = params.get('TraineeId');
        
        
        // const response = await fetch(`/checkIfRefundEligible/?CourseId=${courseId}&TraineeId=${traineeId}`)
        const response = await fetch(`/checkIfRefundEligible/?CourseId=${courseId}`)
        
        
        const json = await response.json()
        console.log("res "+response)
        console.log( "json "+json)

        if(!response.ok)
        {
            setError(json.error);
        }

        if (response.ok) {
            if(json == true)
            {
                // window.location.href=`/RequestARefundPageTrainee/?TraineeId=${traineeId}&CourseId=${courseId}`;
                window.location.href=`/RequestARefundPageTrainee/?CourseId=${courseId}`;
            }
            else
            {
                setError(json.error);
            }

            
        }


        }


    return (
        <div>
        <TraineeProfileNavBar/>
        <Container>

        <div className="row gutters">
        <Card style={{height:'949px'}}>
            <div className="card-body">

                <form className="course-details">
                    
                    <button className={styles.blueButton}  onClick={routeChange3}>My Certificate</button>
                </form>
            

                {/* <FetchInstructorNameForTraineeCourseDetails/> */}
                <form className="course-details">
                    <button className={styles.blueButton}  onClick={routeChange}>Report a problem</button>

                    {/* {!button &&  <button  onClick={checkIfRefundEligible}>Request A Refund</button>} */}
                    {p==0 ? <div></div> :
                    <button className={styles.blueButton}  onClick={checkIfRefundEligible}>Request A Refund</button>
    }
                    {error && <div className="error">{error}</div>}
                    
                    
                </form>

                <form className="course-details">
                    <button className={styles.blueButton}  onClick={routeChange1}>Start Exam</button>
                    <button className={styles.blueButton}  onClick={routeChange4}>Quiz Answer</button>
                </form>

                {/* <form  className="course-details" onSubmit={checkIfRefundEligible}> 
                
                </form> */}

                {/* {error && <div className="error">{error}</div>} */}
                {course && course.map(course => (
                <div className={styles.currentCourseContainerTrainee} 
                key={course._id} >
                <CurrentCoursePageDetails course={course} key={course._id} />
                </div>
                ))[0]}
                
                {/* <CurrentCourseDiscountPage/> */}
                <RadioButtonsRateACourse/>
                <PreviewCourseVideoPageDetails/>
                <TraineeSubtitleTitlesPage/>
                
                {/* <CurrentCourseSubtitlesPageTrainee/>  */}
                {/* <StarRating></StarRating>  */}
            </div>
            
        </Card>
        </div>
        
        
        </Container>
        

        </div>
//--------------------------------------------------------------------------------------
        // <div>
        // <TraineeProfileNavBar/>
        // <Container >

        // <div className="row gutters">
        // <div className="card h-100">
        //     <div className="card-body">
        //         <form className="course-details">
        //             <button style={styles.registerForCourseButton}  onClick={routeChange4}>Quiz Answer</button>
        //             <button style={styles.registerForCourseButton}  onClick={routeChange3}>My Certificate</button>
        //         </form>
        //         <form className="course-details">
        //             <button style={styles.registerForCourseButton}  onClick={routeChange}>Report a problem</button>

        //             {/* {!button &&  <button  onClick={checkIfRefundEligible}>Request A Refund</button>} */}
        //             {p==0 ? <div></div> :
        //             <button style={styles.registerForCourseButton}  onClick={checkIfRefundEligible}>Request A Refund</button>
        //             }
        //             {error && <div className="error">{error}</div>}
                    
                    
        //         </form>

        //         {course && course.map(course => (
                
        //     <div  className={styles.currentCourseContainer} hover
        //         key={course._id}>
        //         <CurrentCoursePageDetails course={course} key={course._id} />
                
        //         </div>
        //     ))[0]}
        //     <RadioButtonsRateACourse/>
        //     <PreviewCourseVideoPageDetails/>
        //     <TraineeSubtitleTitlesPage/>

                
        //     </div>
        //     <form className="course-details">
        //             <button  onClick={routeChange1}>Start Exam</button>
        //     </form>
            
        // </div>
        // </div>
        
        
        // </Container>
        // </div>


    )
    }

    export default CurrentCoursePageTrainee