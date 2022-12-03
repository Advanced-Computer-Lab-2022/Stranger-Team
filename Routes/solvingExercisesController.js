const Course = require ('../Models/Course');
const Exercise = require('../Models/Exercise');
const Week = require('../Models/Week');
const Question = require('../Models/Question');
const Result = require('../Models/Result');


//adding a new Course
const addCourse = async (req, res) => {
    const {Title, Subject, Course_Total_Hours, Price, Rating, Instructor_Name, discount, Course_Description} = req.body
  
    let emptyFields = []
    if (!Title) {
      emptyFields.push('Title')
    }
  
    if (!Subject) {
      emptyFields.push('Subject')
    }

      if (!Course_Total_Hours) {
        emptyFields.push('Course_Total_Hours')
      }

      if (!Price) {
        emptyFields.push('Price')
      }


      if (!Rating) {
        emptyFields.push('Rating')
      }

      if (!Instructor_Name) {
        emptyFields.push('Instructor_Name')
      }

      if (!discount) {
        emptyFields.push('discount')
      }

      if (!Course_Description) {
        emptyFields.push('Course_Description')
      }
  
    if(emptyFields.length > 0) {
      return res.status(400).json({error: 'Please fill in the missing fields.', emptyFields})
    }


    try {
        const courseAdded = await Course.create({Title, Subject, Course_Total_Hours, Price, Rating, Instructor_Name, discount, Course_Description})
        res.status(200).json(courseAdded)
      }
      catch(error) {
        res.status(400).json({error: error.message})
      }
}



//to view Courses
const viewCourses = async (req, res) => {
    const data = await Course.find({})
    res.status(200).json(data)
   // console.log(data)
   
  };



  // adding a week
    const addWeek = async (req, res) => {
    const{Title,Hours} = req.body;
    //const CourseID = req.query.id;
    try{
        const week = await Week.create({Title,Hours,"CourseID":req.query.id});
        
        res.status(200).json(week);
    }catch(error){
        res.status(400).json({error:error.message});
    }
 
 }



 //to view Weeks
const viewWeeks = async (req, res) => {
    const data = await Week.find({})
    res.status(200).json(data)
   // console.log(data)
   
  };


  // adding an exercise 
  const addExercise = async (req, res) => {
    const{Num,Score} = req.body;
    //const CourseID = req.query.id;
    try{
        const exercise = await Exercise.create({Num, Score,"WeekID":req.query.id});
        
        res.status(200).json(exercise);
    }catch(error){
        res.status(400).json({error:error.message});
    }
 
 }


 //to view Exercises
const viewExercises = async (req, res) => {
    const data = await Exercise.find({})
    res.status(200).json(data)
   // console.log(data)
   
  };



// adding questions
const addQuestions = async (req, res) => {
    const{QNumber, Q, Answers, correctAnswer} = req.body;
    try {
        Question.insertMany({ QNumber, Q,Answers,correctAnswer, "ExerciseID":req.query.id }, function(err, data){
            res.json({ msg: "Data Saved Successfully...!"})
        })
    } catch (error) {
        res.json({ error })
    }
}


//to view the questions
const viewQuestions = async (req, res) => {
    const data = await Question.find({})
    res.status(200).json(data)
 
   
  };
  const viewAnswers = async (req, res) => {
    const data = await Question.find({})
    const t = []
    for (let i = 0; i < data.length; i++) {
        t[i]=data[i].correctAnswer
        console.log(t);
    }
    res.status(200).json(t)
 
   
  };


// to add results
const addResults = async (req, res) => {
    const{Res, Attempts, Points, Achieved} = req.body;

    try {
        Result.insertMany({ "UserID":req.query.id, "EID":req.query.Ei , Res, Attempts, Points, Achieved }, function(err, data){
            res.json({ msg: "Data Saved Successfully...!"})
        })
    } catch (error) {
        res.json({ error })
    }
}
//to mark exercise !!
const exerciseMarker = async (req, res) => {
 
  let question = await Question.find({ExerciseID : req.query.Ei});
  
  console.log("question:"+question);
  //console.log("result:"+result);
  
  let temp = req.query.result;
  console.log("result:"+temp);
        for (let i = 0; i < temp.length; i++) {
          const question = await Question.findOne({ExerciseID : req.query.Ei ,QNumber :i+1});
         if(question.correctAnswer==temp.get(i)) 
         {
          // result.Points++;
         }
}
result.Attempts++;
result.save();
res.json({ msg: "Exercise Marked Successfully...!"});
}
// to view results
const viewResults = async (req, res) => {
  const data = await Result.find({})
  res.status(200).json(data)
 // console.log(data)
 
};

 


  module.exports = {addCourse, viewCourses, addWeek, viewWeeks, addExercise, viewExercises, addQuestions, viewQuestions, addResults, viewResults,exerciseMarker,viewAnswers}