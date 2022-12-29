    //REMOVED ID's ====>>>>>>Done
    
    import { useEffect, useState } from "react"
    import React from 'react';
    import { useNavigate,useLocation  } from "react-router-dom";
    

    const CurrentNonRegisteredCoursePageDetailsCorporateTrainee = ({ course }) => {
        
        const [instructorFirstName, setInstructorFirstName] = useState(null)
        const [instructorLastName, setInstructorLastName] = useState(null)
        const [currentInstructorId, setCurrentInstructorId] = useState(null)
        
        // var instructorFirstName = null;
        // var instructorLastName = null;
        const fetchCurrentCourseInstructor = async () => {
        
        //getCurrentCourseInstructor
        //const instructorId = course.Instructor;
        //console.log("instid "+instructorId); 

        //?id=${instructorId}
        
        const response = await fetch(`/getCurrentCourseInstructor/`)
        
        
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
            //?id=${currentInstructorId}
        let path = `/CurrentNonRegisteredCourseInstructorPage/`; 
        navigate(path);
    }
        
    return (

        
        <div className="course-details">


        <h4>{course.Title}</h4>
        <div className="course-details" onClick={routeChange}>
            <p><strong>Instructor Name: </strong>{instructorFirstName} {instructorLastName}</p> 
        </div>
        <p><strong>Subject: </strong>{course.Subject}</p>
        <p><strong>Subtitles Total Hours: </strong>{course.Subtitles_Total_Hours}</p>
        <p><strong>Course Total Hours: </strong>{course.Course_Total_Hours}</p>
        <p><strong>Rating: </strong>{course.Rating}</p>
        <p><strong>Course Description: </strong>{course.Course_Description}</p> 

        
        
        
        </div>
    )
    }

    export default CurrentNonRegisteredCoursePageDetailsCorporateTrainee