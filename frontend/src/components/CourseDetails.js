    const CourseDetails = ({ course }) => {
        console.log("outside");
        

        //    const componentDidMount= () => {
        //     fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
        //           .then(res => res.json())
        //           .then(json => this.setState({ data: json }));
        //           console.log("here");
        //       }
           
                
            // const endpoint = "https://api.exchangerate-api.com/v4/latest/USD";
            // const res = await fetch(`${endpoint}?base=${base}`);
            // const rates = await res.json();
           // console.log("object");
         //   console.log(rates);
        //    console.log("inside");
          
          
        
    return (
        <div className="course-details">
        <h4>{course.Title}</h4>
        <p><strong>Subject: </strong>{course.Subject}</p>
        {/* <p><strong>Subtitles: </strong>{course.Subtitles}</p>
        <p><strong>Subtitles Total Hours: </strong>{course.Subtitles_Total_Hours}</p>
        <p><strong>Exercises: </strong>{course.Exercises}</p>
        <p><strong>Course Total Hours: </strong>{course.Course_Total_Hours}</p> */}
        <p><strong>Price: </strong>{course.Price}</p>
        <p><strong>Discount: </strong>{course.Discount}</p> 
        {/* <p><strong>Rating: </strong>{course.Rating}</p> */}
        <p><strong>Course Description: </strong>{course.Course_Description}</p> 
        
        </div>
    )
    }

    export default CourseDetails