const { appendFile } = require('fs');
const passwordResetRoutes = require("./Routes/passwordReset");
const changePasswordRoutes = require("./Routes/changePassword");

const express = require("express");
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const MongoURI = 'mongodb+srv://roka:roka@cluster0.9sdu6uc.mongodb.net/test' ;
//const MongoURI = 'mongodb+srv://ACL123:ACL123@aclcluster.1uihlnr.mongodb.net/ACL?retryWrites=true&w=majority' ;

//'mongodb+srv://nour:nour@cluster1.yxlcle2.mongodb.net/test'
//mongodb+srv://roka:roka@cluster0.9sdu6uc.mongodb.net/test
//mongodb+srv://nour:nour@cluster1.yxlcle2.mongodb.net/cluster1?retryWrites=true&w=majority
var path = require('path');
const user = require('./Models/User');



const countryToCurrency = require('iso-country-currency');

const app = express();
const port = "4000";
app.use("/passwordReset", passwordResetRoutes);
app.use("/changePassword", changePasswordRoutes);
app.use(express.static("ACL Project/views/"));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.engine('ejs', require('ejs').__express);


const course = require('./Models/Course');
const instructor = require('./Models/Instructor');
const userRating = require('./Models/UserRating');
const courseDiscount = require('./Models/CourseDiscount');
const subtitles = require('./Models/Subtitles');
const admins = require('./Models/Administrator');
const pendingInstructors = require('./Models/pendingInstructors');
const corporateTrainees = require('./Models/corporateTrainees');
const individual_Trainee=require('./Models/Individual Trainee');
const {View_All_Courses, Filter_By_Subject, Filter_By_Rate, Filter_By_Price,data,createCourse,Search_By_Title,Search_By_Instructor_Name,Filter_By_Subject_And_Price,Filter_By_Subject_And_Rating,Filter_By_Subject_And_Rating_And_Price,viewMyInstructorCoursesById,getCurrentCourseDetails,getCurrentCourseInformation,addCourseDiscount,fetchCourseDiscountsByCourseId,addSubtitle,fetchSubtitlesByCourseId,fetchInstructorById,fetchCoursePreviewLink,addANewInstructor,getCurrentCourseInstructor,fetchCurrentCourseInstructorByInstructorId,fetchCurrentCourseInstructorCoursesByInstructorId,ratingACourse,fetchTheSubtitleBySubtitleId} = require('./Routes/coursesController');

const {addUserRating,saveUserRating} = require('./Routes/usersController');

const {insttitles,filterTitles2,getInstructorInformation,editInstructorProfileEmailAndBio,ratingAnInstructor,reviewingAnInstructor,getInstructorRatings} = require('./Routes/instructorController');

const {addAdmin, addCorporateTrainee, viewPendingInstructors, registerPendingInstructor, addInstructor, deletePendingInstructor, viewAdmins, deleteAdmin, viewInstructors, deleteInstructor, viewCT, deleteCT, updateAdmin, updateInstructor, updateCT, addPendingInstructor} = require('./Routes/adminController');

//solving exercises
const {addCourse, viewCourses, addWeek, viewWeeks, addExercise, viewExercises, addQuestions, viewQuestions, addResults, viewResults, viewAnswers,addQuestion} = require('./Routes/solvingExercisesController');

const {addIndividualTrainee,indiviualTraineeRegisterCourse,viewMyRegisteredCourses} = require('./Routes/individualTraineeController');


const { isNumberObject } = require('util/types');


const cs1 = new course({
    Title: "cs1",
    Subject: "Computer",
    Instructor_Name: "Slim",
    Course_Total_Hours: 61,
    Subtitles:"5 weeks",
    Subtitles_Total_Hours:14,
    Exercises:"blalba",
    Price: 8000,
    Rating:5,
    discount: 2
  });
  const cs5 = new course({
    Title: "cs5",
    Subject: "Computer",
    Instructor_Name: "Mervat",
    Course_Total_Hours: 48,
    Subtitles:"5 weeks",
    Subtitles_Total_Hours:14,
    Exercises:"blalba",
    Price: 5800,
    Rating:5,
    discount: 29
  })
  const calculus = new course({
    Title: "calculus",
    Subject: "Math",
    Instructor_Name: "Ramy",
    Course_Total_Hours: 89,
    Subtitles:"5 weeks",
    Subtitles_Total_Hours:14,
    Exercises:"blalba",
    Price: 10000,
    Rating:5,
    discount: 50
  })
  const math5 = new course({
    Title: "math5",
    Subject: "Math",
    Instructor_Name: "Slim",
    Course_Total_Hours: 42,
    Subtitles:"5 weeks",
    Subtitles_Total_Hours:14,
    Exercises:"blalba",
    Price: 4600,
    Rating:5,
    discount: 50
  });
  app.use(express.json());
app.use(express.urlencoded({ extended: true }));



  var database
mongoose.connect(MongoURI)
.then(()=>{
    console.log("MongoDB is now connected!")
// Starting server
    app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:4000`);
    })
})
.catch(err => console.log(err));

  app.get("/", (req, res) => {
    
    res.sendFile('/Users/Dell/Desktop/ACL Project/ACL Project/views/index.html');
    cs1.save(function(err, savedUser){
      if (err) {
        console.log(err);
        return res.status(500).send();
      }
      return res.status(200).send();
    });
    cs5.save(function(err, savedUser){
      if (err) {
        console.log(err);
        return res.status(500).send();
      }
      return res.status(200).send();
    });
    math5.save(function(err, savedUser){
      if (err) {
        console.log(err);
        return res.status(500).send();
      }
      return res.status(200).send();
    });
    calculus.save(function(err, savedUser){
      if (err) {
        console.log(err);
        return res.status(500).send();
      }
      return res.status(200).send();
    });
  
  });
  app.post("/", (req, res) => {
    console.log(req.body);
    const x = new user(req.body);
    console.log(countryToCurrency.getParamByParam('countryName', x.Country, 'currency')); // USD
    x.Currency = countryToCurrency.getParamByParam('countryName', x.Country, 'currency');
    x.save(function (err, savedUser) {
      if (err) {
        console.log(err);
        return res.status(500).send();
      }
      return res.status(200).send();
    });
  })
  app.get('/search', async function (req, res) {
    
      course.find().then((result) => {
        res.render("coursesList",{array : result,searchKey:"req.body.Search"});
    //  console.log(result);
      }).catch((err) => {console.log(err);
    
      });
      
  
    
    });
    
    
    
    app.post("/search", async (req, res) => {
    
      // var u = req.body.Search;
      // var z = await search(u);
      course.find().then((result) => {
      res.render("coursesList",{array : result,searchKey:req.body.Search});
    //  console.log(result);
      }).catch((err) => {console.log(err);
    
      });
      

  
  
  })
app.get("/home", data);
//app.get("/View_All_Courses/", View_All_Courses);

app.get("/View_All_Courses/",async (req,res)=>{

  const q = req.query.q;
  

  const keys=["Title","Subject"];
  const search = (data)=>{
    return data.filter((item)=>
    keys.some((key)=>item[key].toLowerCase().includes(q))
    );
  };

  if(parseInt(q))
  {
    
    const allCourses = await course.find({"Rating":q}, {Title: 1, Subject: 1,Subtitles_Total_Hours:1, Course_Total_Hours:1,Price:1,Discount:1,Rating:1,Course_Description:1 }).sort({createdAt:-1}) ;
    
    res.status(200).json(allCourses);
  }
  else{
    const allCourses = await course.find({}, {Title: 1, Subject: 1,Subtitles_Total_Hours:1, Course_Total_Hours:1,Price:1,Discount:1,Course_Description:1 }).sort({createdAt:-1}) ;
    res.status(200).json(search(allCourses));
  }

  

});

app.get("/CurrentCourse/",getCurrentCourseDetails);

app.post("/addUserCourseRating/",addUserRating);

app.post("/addCourseDiscount/",addCourseDiscount);

app.post("/addSubtitle/",addSubtitle);

app.post("/addANewInstructor",addANewInstructor);

app.post("/addIndividualTrainee",addIndividualTrainee);

app.get("/ratingACourse",ratingACourse);

app.get("/ratingAnInstructor",ratingAnInstructor);

app.get("/reviewingAnInstructor",reviewingAnInstructor);

app.get("/getInstructorRatings",getInstructorRatings);

app.get("/indiviualTraineeRegisterCourse",indiviualTraineeRegisterCourse);

app.get("/viewMyRegisteredCourses",viewMyRegisteredCourses);

app.get("/fetchTheSubtitleBySubtitleId",fetchTheSubtitleBySubtitleId);


app.post("/addQuestion",addQuestion);

app.post("/Filter_By_Subject/", Filter_By_Subject);
app.post("/Filter_By_Price/",Filter_By_Price);
app.post("/Filter_By_Rate/",Filter_By_Rate);
app.post("/Search_By_Instructor_Name/",Search_By_Instructor_Name);
app.post("/Search_By_Title/",Search_By_Title);
app.post("/Filter_By_Subject_And_Price/",Filter_By_Subject_And_Price);
app.post("/Filter_By_Subject_And_Rating/",Filter_By_Subject_And_Rating);
app.post("/Filter_By_Subject_And_Rating_And_Price/",Filter_By_Subject_And_Rating_And_Price);

app.post("/createCourse/", createCourse);
//app.get("/View_My_Courses/:Instructor_Name",insttitles);

// app.get("/View_My_Courses/:Instructor_Name",async (req,res)=>{

//   const q = req.query.q;
//   console.log(q);

//   const keys=["Title","Subject"];
//   const search = (data)=>{
//     return data.filter((item)=>
//     keys.some((key)=>item[key].toLowerCase().includes(q))
//     );
//   };

//   const instData=await course.find({ Instructor_Name: req.params.Instructor_Name },{});

//     res.status(200).json(search(instData));

// });

//app.get("/MyCourses/",viewMyInstructorCoursesById);
app.get("/MyCourses/:id",async (req,res)=>{

  const q = req.query.q;
  const p = req.query.p;
  const instructorId = req.params.id;
  console.log(q);
  console.log(p);

  const keys=["Title","Subject","Price"];
  const search = (data)=>{
    return data.filter((item)=>
    keys.some((key)=>item[key].toLowerCase().includes(q))
    );
  };

  if(parseInt(p))
  {
    const instData=await course.find({Instructor:mongoose.Types.ObjectId(instructorId),"Price":p},{}).sort({createdAt:-1});
    console.log(instData)
    console.log(instData)
    res.status(200).json(instData);
  }
  else
  {
    const instData=await course.find({Instructor:mongoose.Types.ObjectId(instructorId)},{});
    console.log(instData)
    console.log(search(instData))
    res.status(200).json(search(instData));
  }
  

});


app.get("/MyProfile/",getInstructorInformation);

app.post("/EditMyProfile/",editInstructorProfileEmailAndBio);

app.post("/saveUserRating/",saveUserRating);

app.get("/CurrentCourse/",getCurrentCourseInformation);

app.get("/fetchCourseDiscounts",fetchCourseDiscountsByCourseId);

app.get("/fetchSubtitlesByCourseId",fetchSubtitlesByCourseId);

app.get("/fetchInstructorById",fetchInstructorById);

app.get("/fetchCoursePreviewLink",fetchCoursePreviewLink);

app.get("/getCurrentCourseInstructor",getCurrentCourseInstructor);

app.get("/fetchCurrentCourseInstructorByInstructorId",fetchCurrentCourseInstructorByInstructorId);

app.get("/fetchCurrentCourseInstructorCoursesByInstructorId",fetchCurrentCourseInstructorCoursesByInstructorId);

// const insttitles= async (req,res) => { 
//             const instructorName = req.body;
//             const instData=await course.find({ Instructor_Name: req.params.Instructor_Name },{});
//             //Title:1,Instructor_Name:1
//             console.log(instData)
//             if (!instData){ 
//                 res.status(400)
//                 console.log("No instructors found")
//             }
//             // const data2= await instructor.find({ },{ _id: 0, Course: 1 } )
//             res.status(200).json(instData);
//             }; 



app.get("/Filter_By_Price_And_Subject/:Price/:Subject",filterTitles2);

app.get("/adminHome/admins", viewAdmins);

app.get("/adminHome/pendingInstructors", viewPendingInstructors);

app.get("/adminHome/instructors", viewInstructors);

app.get("/adminHome/corporateTrainees", viewCT);

app.post("/adminHome/addAdmin", addAdmin);

app.post("/adminHome/addCorporateTrainee", addCorporateTrainee);

app.post("/adminHome/registerInstructorRequest", registerPendingInstructor);

app.post("/acceptPendingInstructor/:id", addPendingInstructor)

app.post("/adminHome/addInstructor", addInstructor);

app.put("/adminHome/update/admins/:id", updateAdmin);

app.put("/adminHome/update/instructors/:id", updateInstructor);

app.put("/adminHome/update/corporateTrainees/:id", updateCT);

app.delete('/adminHome/pendingInstructors/:id', deletePendingInstructor);

app.delete('/adminHome/delete/admins/:id', deleteAdmin);

app.delete('/adminHome/delete/instructors/:id', deleteInstructor);

app.delete('/adminHome/delete/corporateTrainees/:id', deleteCT);


// WEEKS
app.post('/addWeek', addWeek);
app.get('/viewWeeks', viewWeeks);

//EXERCISES
app.post('/addExercise', addExercise);
app.get('/viewExercises', viewExercises);

//QUESTIONS
app.post('/addQ', addQuestions)
app.get('/viewQuestions', viewQuestions);
app.get('/viewAnswers', viewAnswers);
//RESULTS
app.post('/addResults' , addResults);
app.get('/viewResults', viewResults);

