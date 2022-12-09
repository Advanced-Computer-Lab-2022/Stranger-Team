const Course = require ('../Models/Course');
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



//   // adding a week
//     const addWeek = async (req, res) => {
//     const{Title,Hours} = req.body;
//     //const CourseID = req.query.id;
//     try{
//         const week = await Week.create({Title,Hours,"CourseID":req.query.id});
        
//         res.status(200).json(week);
//     }catch(error){
//         res.status(400).json({error:error.message});
//     }
 
//  }

  //adding a question
  const insertQuestions = async (req, res) => {
    const courseId = req.query.CourseId;
    console.log("courseid"+courseId);
    const{QNumber,Q,Answer1,Answer2,Answer3,Answer4,correctAnswer} = req.body;
    
    
    try{
        const questionId = (await Question.create({QNumber,Q,correctAnswer,CourseId:req.query.CourseId}))._id;
        const currQuestion = await Question.findById({_id:questionId});
        const answersArray = currQuestion.Answers;
        answersArray.push(Answer1);
        answersArray.push(Answer2);
        answersArray.push(Answer3);
        answersArray.push(Answer4);
        console.log(answersArray)
        const newQuestion = await Question.findByIdAndUpdate({_id:questionId},{Answers:answersArray},{new:true});
        
        res.status(200).json(newQuestion);
    }catch(error){
        res.status(400).json({error:error.message});
    }
 
 }



//  //to view Weeks
// const viewWeeks = async (req, res) => {
//     const data = await Week.find({})
//     res.status(200).json(data)
//    // console.log(data)
   
//   };


//   // adding an exercise 
//   const addExercise = async (req, res) => {
//     const{Num,Score} = req.body;
//     //const CourseID = req.query.id;
//     try{
//         const exercise = await Exercise.create({Num, Score,"WeekID":req.query.id});
        
//         res.status(200).json(exercise);
//     }catch(error){
//         res.status(400).json({error:error.message});
//     }
 
//  }


//  //to view Exercises
// const viewExercises = async (req, res) => {
//     const data = await Exercise.find({})
//     res.status(200).json(data)
//    // console.log(data)
   
//   };


// const insertQuestions=async(req,res)=>{
//   console.log(req.body);
//   var quiz=req.body
//  const q= await Question.create({quiz:quiz})
// }


// adding questions
// const addQuestions = async (req, res) => {
//     const{QNumber, Q, Answers} = req.body;
//     try {
//         Question.insertMany({ QNumber, Q,Answers, "ExerciseID":req.query.id }, function(err, data){
//             res.json({ msg: "Data Saved Successfully...!"})
//         })
//     } catch (error) {
//         res.json({ error })
//     }
// }


//to view the questions
const viewQuestions = async (req, res) => {
    const data = await Question.find({})
    res.status(200).json(data)
 
   
  };


  //viewing questions of a specific exercise
  const fetchQuestionsByCID = async(req,res) => {

    const courseId = req.query.id;

    if(courseId){
    const result = await Question.find({CourseId:mongoose.Types.ObjectId(courseId)}).populate('CourseId');
    res.status(200).json(result)
    }else{
        res.status(400).json({error:"courseId is required"})
    }
}




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

// to view results
const viewResults = async (req, res) => {
  const data = await Result.find({})
  res.status(200).json(data)
 // console.log(data)
 
};

 


  module.exports = {addCourse, viewCourses, insertQuestions, viewQuestions, addResults, viewResults, viewAnswers, fetchQuestionsByCID}