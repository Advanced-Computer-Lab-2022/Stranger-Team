const { appendFile } = require('fs');

const express = require("express");
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const MongoURI = 'mongodb+srv://ACL123:ACL123@aclcluster.1uihlnr.mongodb.net/ACL?retryWrites=true&w=majority' ;
//'mongodb+srv://nour:nour@cluster1.yxlcle2.mongodb.net/test'
// marams db --> mongodb+srv://ACL123:ACL123@aclcluster.1uihlnr.mongodb.net/ACL?retryWrites=true&w=majority
var path = require('path');
const user = require('./Models/User');


const countryToCurrency = require('iso-country-currency');

const app = express();
const port = "4000";
app.use(express.static("ACL Project/views/"));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.engine('ejs', require('ejs').__express);


const course = require('./Models/Course');
const instructor = require('./Models/Instructor');
const admins = require('./Models/Administrator');
const corporateTrainees = require('./Models/corporateTrainees');
const {View_All_Courses, Filter_By_Subject, Filter_By_Rate, Filter_By_Price,data,createCourse,Search_By_Title,Search_By_Instructor_Name,Filter_By_Subject_And_Price,Filter_By_Subject_And_Rating,Filter_By_Subject_And_Rating_And_Price} = require('./Routes/coursesController');

const {insttitles,filterTitles2} = require('./Routes/instructorController');

const {addAdmin, addCorporateTrainee, addInstructor, viewAdmins, deleteAdmin, viewInstructors, deleteInstructor, viewCT, deleteCT, updateAdmin, updateInstructor, updateCT} = require('./Routes/adminController');

//solving exercises
const {addCourse, viewCourses, addWeek, viewWeeks, addExercise, viewExercises, addQuestions, viewQuestions, addResults, viewResults} = require('./Routes/solvingExercisesController');


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
    // cs1.save(function(err, savedUser){
    //   if (err) {
    //     console.log(err);
    //     return res.status(500).send();
    //   }
    //   return res.status(200).send();
    // });
    // cs5.save(function(err, savedUser){
    //   if (err) {
    //     console.log(err);
    //     return res.status(500).send();
    //   }
    //   return res.status(200).send();
    // });
    // math5.save(function(err, savedUser){
    //   if (err) {
    //     console.log(err);
    //     return res.status(500).send();
    //   }
    //   return res.status(200).send();
    // });
    // calculus.save(function(err, savedUser){
    //   if (err) {
    //     console.log(err);
    //     return res.status(500).send();
    //   }
    //   return res.status(200).send();
    // });
  
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
app.get("/View_All_Courses", View_All_Courses);
app.post("/Filter_By_Subject/", Filter_By_Subject);
app.post("/Filter_By_Price/",Filter_By_Price);
app.post("/Filter_By_Rate/",Filter_By_Rate);
app.post("/Search_By_Instructor_Name/",Search_By_Instructor_Name);
app.post("/Search_By_Title/",Search_By_Title);
app.post("/Filter_By_Subject_And_Price/",Filter_By_Subject_And_Price);
app.post("/Filter_By_Subject_And_Rating/",Filter_By_Subject_And_Rating);
app.post("/Filter_By_Subject_And_Rating_And_Price/",Filter_By_Subject_And_Rating_And_Price);

app.post("/createCourse/", createCourse);
app.get("/View_My_Courses/:Instructor_Name",insttitles);
app.get("/Filter_By_Price_And_Subject/:Price/:Subject",filterTitles2);

app.get("/adminHome/admins", viewAdmins);

app.get("/adminHome/instructors", viewInstructors);

app.get("/adminHome/corporateTrainees", viewCT);

app.post("/adminHome/addAdmin", addAdmin);

app.post("/adminHome/addCorporateTrainee", addCorporateTrainee);

app.post("/adminHome/addInstructor", addInstructor);

app.put("/adminHome/update/admins/:id", updateAdmin);

app.put("/adminHome/update/instructors/:id", updateInstructor);

app.put("/adminHome/update/corporateTrainees/:id", updateCT);

app.delete('/adminHome/delete/admins/:id', deleteAdmin);

app.delete('/adminHome/delete/instructors/:id', deleteInstructor);

app.delete('/adminHome/delete/corporateTrainees/:id', deleteCT);

//solving exercises 


// COURSES (JUST FOR TESTS)
app.get('/courses', viewCourses);
app.post('/addCourse', addCourse);


// WEEKS
app.post('/addWeek', addWeek);
app.get('/viewWeeks', viewWeeks);

//EXERCISES
app.post('/addExercise', addExercise);
app.get('/viewExercises', viewExercises);

//QUESTIONS
app.post('/addQ', addQuestions)
app.get('/viewQuestions', viewQuestions);

//RESULTS
app.post('/addResults' , addResults);
app.get('/viewResults', viewResults);

