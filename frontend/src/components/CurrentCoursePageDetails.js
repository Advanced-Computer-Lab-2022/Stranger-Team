    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate,useLocation  } from "react-router-dom";
    

    const CurrentCoursePageDetails = ({ course }) => {
        
        const [instructorFirstName, setInstructorFirstName] = useState(null)
        const [instructorLastName, setInstructorLastName] = useState(null)
        const [currentInstructorId, setCurrentInstructorId] = useState(null)
        const [Discount, setDiscount] = useState(null);
        const [Discount_Start_Date, setDiscount_Start_Date] = useState(null);
        const [Discount_End_Date, setDiscount_End_Date] = useState(null);
        
        // var instructorFirstName = null;
        // var instructorLastName = null;
        const fetchCurrentCourseInstructor = async () => {
        
        //getCurrentCourseInstructor
        const instructorId = course.Instructor;
        console.log("instid "+instructorId); 
        
        
        const response = await fetch(`/getCurrentCourseInstructor/?id=${instructorId}`)
        
        
        const json = await response.json()
        const instructorAttributes = Object.entries(json);
        const firstName = JSON.stringify(instructorAttributes[1]);
        const firstNameString = firstName.split(",");
        const lastName = JSON.stringify(instructorAttributes[2]);
        const lastNameString = lastName.split(",");

        //removing the ] 
        const firstNameArray = firstNameString[1].split("]");
        //console.log("firstNameArray"+firstNameArray)

        // removing the , 
        const firstNameRemoveComma = firstNameArray[0].split(",");
        //console.log("firstNameRemoveComma"+firstNameRemoveComma[0])

        //removing the quotations
        const firstNameFinalArray = firstNameRemoveComma[0].split("\"");
        //console.log("firstNameFinalArray"+firstNameFinalArray[1])

        //removing the ] 
        const lastNameArray = lastNameString[1].split("]");
        //console.log("lastNameArray"+lastNameArray)

        // removing the , 
        const lastNameRemoveComma = lastNameArray[0].split(",");
        //console.log("lastNameRemoveComma"+lastNameRemoveComma[0])

        //removing the quotations
        const lastNameFinalArray = lastNameRemoveComma[0].split("\"");
        //console.log("lastNameFinalArray"+lastNameFinalArray[1])




        // console.log("instructorAttributes "+instructorAttributes[1]);
        // console.log("first name stringify "+firstName);
        // console.log("first name "+firstNameString);
        // console.log("last name stringify "+lastName);
        // console.log("last name "+lastNameString);

        if (response.ok) {
            setInstructorFirstName(firstNameFinalArray[1]);
            setInstructorLastName(lastNameFinalArray[1]);
            setCurrentInstructorId(course.Instructor);
            //instructorFirstName = firstNameFinalArray[1];
            //instructorLastName = lastNameFinalArray[1];
        }

        //console.log(instructorFirstName+" "+instructorLastName);

        }
        fetchCurrentCourseInstructor();

        let navigate = useNavigate();

        const routeChange = () =>{ 
        const params = new URLSearchParams(window.location.search);
        const traineeId = params.get('TraineeId');
        let path = `/CurrentCourseInstructorPage/?TraineeId=${traineeId}&id=${currentInstructorId}`; 
        navigate(path);
    }

    const fetchCourseDicountDetails = async () => {
        const courseId = course._id;
        
        
        const response = await fetch(`/isDiscountViable/?CourseId=${courseId}`)
        
        
        const json = await response.json()
        console.log(json.Discount)
        
        }
        fetchCourseDicountDetails();

        const displayDiscount = async () => {
        const courseId = course._id;
        const response = await fetch(`/displayCourseDiscount/?CourseId=${courseId}`)
        const json = await response.json()

        console.log("json"+json)

        
        if(response.ok)
        {
            if(json == false)
            {
                setDiscount_Start_Date("");
                setDiscount_End_Date("");
                setDiscount("");
                
            }
            else
            {
                const courseStart = json.startDate.slice(0, 10);
                const courseEnd = json.endDate.slice(0, 10);
                setDiscount_Start_Date(courseStart);
                setDiscount_End_Date(courseEnd);
                setDiscount(course.Discount);
                console.log("start "+courseStart)
            }
        }
        
        }
        displayDiscount();
        
    return (

        
        <div className="course-details">


        <h4>{course.Title}</h4>
        <div className="course-details" onClick={routeChange}>
            <p><strong>Instructor Name: </strong>{instructorFirstName} {instructorLastName}</p> 
        </div>
        <p><strong>Subject: </strong>{course.Subject}</p>
        <p><strong>Subtitles Total Hours: </strong>{course.Subtitles_Total_Hours}</p>
        <p><strong>Course Total Hours: </strong>{course.Course_Total_Hours}</p>
        <p><strong>Price: </strong>{course.Price}</p>
        <p><strong>Rating: </strong>{course.Rating}</p>
        <p><strong>Dicount: </strong>{Discount}</p>
        <p><strong>Course Description: </strong>{course.Course_Description}</p> 

        
        
        
        </div>
    )
    }

    export default CurrentCoursePageDetails