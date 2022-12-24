//8-9-10
const mongoose = require('mongoose');
const express = require("express");
const projection = require('projection');
const fetch = require("node-fetch");

const course = require('../Models/Course');
const {Instructors} = require('../Models/Instructor');
const discount = require('../Models/CourseDiscount');
const subtitles = require('../Models/Subtitles');
const individual_Trainee = require("../Models/Individual Trainee");
const corporate_Trainee = require("../Models/corporateTrainees");


const router = require("express").Router();
const session = require('express-session');
const { findById } = require('../Models/Course');
router.use(session( 
	{
	secret : 'secret-key',
	resave : false ,
	saveUninitialized : true,
	}));



const addSubtitle = async(req,res) => {

    const courseId = req.query.CourseId;
    const {Subtitle_Title,Link,Description} = req.body;

    if(courseId){
    const result = await subtitles.create({Subtitle_Title,Link,Description,CourseId:req.query.CourseId});
    console.log(result)
    res.status(200).json(result)
    }else{
        res.status(400).json({error:"courseId is required"})
    }
}


const data = (req, res) => {
    res.status(200).send("You have everything installed!");
    }


//new addCourse

const createCourse = async(req,res)=>{
        // const questionId = (await Question.create({QNumber,Q,correctAnswer,ExerciseID:req.query.id}))._id;
        // const currQuestion = await Question.findById({_id:questionId});

        const {Title, Subject,Subtitles_Total_Hours,Course_Total_Hours,Price,Discount,Course_Description,PreviewLink,Subtitle_Title,Link,Description}= req.body;
        const instructorid=req.query.id;
    try{

    const addCourse =await course.create({Title, Subject,Subtitles_Total_Hours,Course_Total_Hours,Price,Discount,Course_Description,PreviewLink,"Instructor":req.query.id});
    const newlyAddedCourseId = addCourse._id;
    console.log(newlyAddedCourseId);
    
    // const {Subtitle_Title,Link,Description} = req.body;

    if(newlyAddedCourseId){
    const newlyAddedSubtitle = await subtitles.create({Subtitle_Title,Link,Description,CourseId:newlyAddedCourseId});
    console.log(newlyAddedSubtitle)
    //res.status(200).json(newlyAddedSubtitle)
    }else{
        res.status(400).json({error:"courseId is required"})
    }

    console.log(addCourse);
    res.status(200).json(addCourse);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }

}






const viewMyInstructorCoursesById = async(req,res) => {

    const instructorId = req.query.id;
    // check if userId is not empty
    if(instructorId){
    const result = await course.find({Instructor:mongoose.Types.ObjectId(instructorId)}).sort({createdAt:-1}).populate('Instructor');
    res.status(200).json(result)
    }else{
        res.status(400).json({error:"instructorId is required"})
    }
}


const addCourseDiscount = async(req,res)=>{

        const {Discount}= req.body;
        const courseId=req.query.CourseId;
        
    try{

        const currCourse = await course.find({_id:courseId},{});
        console.log(currCourse);
        const updatedDiscount= await course.findByIdAndUpdate(req.query.CourseId, { Discount: Discount });
        console.log(updatedDiscount);
        res.status(200).json(updatedDiscount);

    }
    catch(error){
        res.status(400).json({error:error.message});
    }

}


const fetchCourseDiscountsByCourseId = async(req,res) => {

    const courseId = req.query.CourseId;
    // check if userId is not empty
    if(courseId){
    const currentCourse = await course.findById(courseId);
    if(currentCourse.Discount)
    {
        res.status(200).json(currentCourse.Discount)
    }
    else
    {
        const result = await discount.find({courseId:mongoose.Types.ObjectId(courseId)}).populate('courseId');
        res.status(200).json(result)
    }
    
    }else{
        res.status(400).json({error:"courseId is required"})
    }
}



const fetchSubtitlesByCourseId = async(req,res) => {

    const courseId = req.query.CourseId;

    if(courseId){
    const result = await subtitles.find({CourseId:mongoose.Types.ObjectId(courseId)}).populate('CourseId');
    res.status(200).json(result)
    }else{
        res.status(400).json({error:"courseId is required"})
    }
}

const fetchTheSubtitleBySubtitleId= async(req,res) => {

    const subtitleId = req.query.SubtitleId;

    if(subtitleId){
    const result = await subtitles.findById({_id:subtitleId});
    res.status(200).json(result)
    }else{
        res.status(400).json({error:"subtitleId is required"})
    }
}

const fetchCoursePreviewLink = async(req,res) => {

    const courseId = req.query.CourseId;

    if(courseId){
    const currCourse = await course.find({_id:courseId});
    res.status(200).json(currCourse)
    }else{
        res.status(400).json({error:"courseId is required"})
    }
}

const getCurrentCourseInstructor = async(req,res) => {

    const instructorId = req.query.id;

    if(instructorId){
    const currInstructor = await Instructors.findById({_id:instructorId},{First_Name:1,Last_Name:1});
    res.status(200).json(currInstructor)
    }else{
        res.status(400).json({error:"instructorId is required"})
    }
}

const fetchCurrentCourseInstructorByInstructorId = async(req,res) => {

    const instructorId = req.query.id;
    if(instructorId)
    {
        const currInstructor = await Instructors.find({_id:instructorId});
        
        res.status(200).json(currInstructor)
    }
    else
    {
        res.status(400).json({error:"courseId is required"})
    }

}

const fetchCurrentCourseInstructorCoursesByInstructorId = async(req,res) => {

    const instructorId = req.query.id;
    if(instructorId)
    {
        const currInstructorCourses = await course.find({Instructor:mongoose.Types.ObjectId(instructorId)});
        
        res.status(200).json(currInstructorCourses)
    }
    else
    {
        res.status(400).json({error:"courseId is required"})
    }

}

const fetchInstructorById = async(req,res) => {

    const courseId = req.query.CourseId;
    const currCourse = await course.find({_id:courseId});
    console.log(currCourse)
    if(currCourse)
    {
        const currInstructor = await course.find({_id:courseId}).populate('Instructor');
        
        res.status(200).json(currInstructor)
    }
    else
    {
        res.status(400).json({error:"courseId is required"})
    }


    // if(instructorId){
    // const instructors = await instructor.find({_id:instructorId});
    // res.status(200).json(instructors)
    // }else{
    //     res.status(400).json({error:"instructorId is required"})
    // }
}





const addANewInstructor = async(req,res)=>{
        
    const {Username, Password,First_Name,Last_Name,Email,Gender,Bio} = req.body;
    try{
    const addANewInstructor =await Instructors.create({Username,Password,First_Name,Last_Name,Email,Gender,Bio});
    res.status(200).json(addANewInstructor);

    }
    catch(error){
        res.status(400).json({error:error.message});
    }

}

    const ratingACourse = async (req,res) => { 
            try{

                const courseId= req.query.CourseId;
                const courseRating = req.query.rating;
                const currCourse = await course.findById({_id:courseId});
                
                const array = currCourse.Course_Ratings;
                console.log(array);
                array.push(courseRating);
                console.log(array);
                const updatedCourse =  await course.findByIdAndUpdate({_id:courseId},{Course_Ratings:array},{new:true});
                const updatedarray = updatedCourse.Course_Ratings;
                var x = 0;
                for (let i = 0; i < updatedarray.length; i++) {
                    x += updatedarray[i];
                }
                x= x / updatedarray.length;
                console.log(x);
                const finalUpdatedCourse = await course.findByIdAndUpdate({_id:courseId},{"Rating":x},{new:true});
                res.status(200).json(finalUpdatedCourse);

            }
            catch(error){
                res.status(400).json({error:error.message});
            }

            };



    const View_All_Courses = async(req,res) =>{
    const allCourses = await course.find({}, {Title: 1, Subject: 1,Subtitles:1,Subtitles_Total_Hours:1,Exercises:1, Course_Total_Hours:1,Price:1,Rating:1,Instructor_Name:1,discout:1,Course_Description:1 }).sort({createdAt:-1}) ;
    // currency exchange API
   
    console.log("object");
//     const api = "https://api.exchangerate-api.com/v4/latest/USD";
//     var search = document.querySelector(".searchBox");
//     var convert = document.querySelector(".convert");
//     var fromCurrecy = document.querySelector(".from");
//     var toCurrecy = document.querySelector(".to");
//     var finalValue = document.querySelector(".finalValue");
//     var finalAmount = document.getElementById("finalAmount");
//     var resultFrom;
//     var resultTo;
//     var searchValue;
//     fetch(`${api}`)
//         .then(currency => {
//             return currency.json();
//         }).then(displayResults);
//     res.status(200).json(allCourses);
 }
 async function fetchRates(base = "USD") {
    const res = await fetch(`${endpoint}?base=${base}`);
    const rates = await res.json();
    console.log(rates);
  }
// function displayResults(currency) {
//     let fromRate = currency.rates[resultFrom];
//     let toRate = currency.rates[resultTo];
// }
const getCurrentCourseDetails  = async(req,res) =>{
    const currentCourse = req.query.CourseId;
    const endpoint = "https://api.exchangerate-api.com/v4/latest/USD";
    const result = await fetch(`${endpoint}?base=${req.session.user.Currency}`);
    const rates = await result.json();
   // const max= await course.find({$max : "$Views" });
   //const max = await course.find( {Title: 1, Subject: 1,Subtitles_Total_Hours:1, Course_Total_Hours:1,Price:1,Discount:1,Rating:1,Course_Description:1,Instructor:1 }).sort({Views: -1}) ;

    const currCourse = await course.findById({_id:currentCourse}).populate();
    const currentCourseDetails = await course.find({_id:currentCourse}, {Title: 1, Subject: 1,Subtitles_Total_Hours:1, Course_Total_Hours:1,Price:1,Discount:1,Rating:1,Course_Description:1,Instructor:1 }).sort({createdAt:-1}) ;
    const courseViews = currCourse.Views
    const updatedViews = courseViews + 1
 //  console.log("max views is "+max);
   console.log(courseViews)
    const updatedCourse = await course.findByIdAndUpdate({_id:currentCourse}, {"Views": updatedViews}, {new:true});
   
    const allCourses2 = currentCourseDetails.map(async coursaya => {
        //  let insCurrency= await Instructors.findOne({_id : coursaya.Instructor})
          const x= rates.rates.USD;
       //   console.log(coursaya.Instructor.Currency);
          coursaya.Price = coursaya.Price/x + req.session.user.Currency;
          //Do somethign with the user
      });
   // console.log("updatedcourse " + currentCourseDetails.Price)
    res.status(200).json(currentCourseDetails); 

}

const viewMostViewedCourses = async(req,res) =>{
let popularCourses = [];


}

const Filter_By_Subject  = async(req,res) =>{
    const Subject = req.body.Subject;
    console.log(Subject);
    // JSON.parse(JSON.stringify(req.body))
    // const wait = await course.find({"Subject":Subject},{_id:0,Title:1});
    // res.status(200).JSON.parse

    const a = res.status(200).json(await course.find({"Subject":Subject},{}));
    console.log(a)

}

const Filter_By_Rate = async(req,res) =>{
    const Rating = req.body.Rating;

    res.status(200).json( await course.find({ "Rating":Rating },{}));

}

const Filter_By_Price  = async(req,res) =>{
    const Price = req.body.Price;

    res.status(200).json( await course.find({ "Price":Price },{}));

}

const Search_By_Instructor_Name  = async(req,res) =>{
    const Instructor_Name = req.body.Instructor_Name;

    const a = res.status(200).json( await course.find({ "Instructor_Name":Instructor_Name },{}));
    console.log(a)

}

const Search_By_Title  = async(req,res) =>{
    const Title = req.body.Title;

    const a = res.status(200).json( await course.find({ "Title":Title },{}));
    console.log(a)

}

const getCurrentCourseInformation = async (req,res) => { 
            try{
                console.log(req.query.CourseId);
                const data=await course.find({ "_id":req.query.CourseId,},{})
                console.log(data)
                res.status(200).json(data);
            }
            catch(error){
                res.status(400).json({error:error.message});
            }

            }; 

const isCurrentCourseRegistered = async (req,res) => { 
            try{
                const courseId = req.query.CourseId;
                const traineeId = req.query.TraineeId;
                const userid= req.session.user._id;
                console.log("userid"+userid);
                const corporateTraineeId = req.query.CorporateTraineeId;
                let x = false;
                console.log(corporateTraineeId)
                if(corporateTraineeId==null)
                {
                    //const currTrainee=await individual_Trainee.findById({_id:traineeId});
                    const usertrainee =await individual_Trainee.findById({_id:userid}); 
                    //console.log(currTrainee.Registered_Courses)
                    console.log("usertraineeregcourses"+usertrainee.Registered_Courses)
                    // const registeredCourses = currTrainee.Registered_Courses;
                    const registeredCourses = usertrainee.Registered_Courses;
                    var isFound = 0;
                    var courseFound=null;
                    for(let i =0;i<registeredCourses.length;i++)
                    {
                        if(registeredCourses[i]._id==courseId)
                        {
                            isFound = 1;
                            courseFound=registeredCourses[i];
                            x=true;
                            
                            break;
                        }
                    }
                    console.log(courseFound)
                    res.status(200).json(x);
                }
                else
                {
                    const currTrainee=await corporate_Trainee.findById({_id:corporateTraineeId});
                    console.log(currTrainee)
                    console.log(currTrainee.Registered_Courses)
                    const registeredCourses = currTrainee.Registered_Courses;
                    var isFound = 0;
                    var courseFound=null;
                    for(let i =0;i<registeredCourses.length;i++)
                    {
                        if(registeredCourses[i]._id==courseId)
                        {
                            isFound = 1;
                            courseFound=registeredCourses[i];
                            x=true;
                            break;
                        }
                    }
                    console.log(courseFound)
                    res.status(200).json(x);
                    
                }
                
            }
            catch(error){
                res.status(400).json({error:error.message});
            }

            }; 


const Filter_By_Subject_And_Price= async (req,res) => {
            const subject = req.body.Subject;
            const price = req.body.Price;

            const data=await course.find( { "Price":price,"Subject":subject },{})
            //const data=await instructor.find( {or:[{ "Course.Price":req.params.Price,"Course.Subject":req.params.Subject }]},{Course:1,_id:0})
            
            if (!data){ 
                res.status(400)
                console.log("No instructors found")
            }
            // const data2= await instructor.find({ },{ _id: 0, Course: 1 } )
            res.status(200).json(data);
            }; 

const Filter_By_Subject_And_Rating= async (req,res) => {
            const subject = req.body.Subject;
            const rating = req.body.Rating;

            const data=await course.find( { "Rating":rating,"Subject":subject },{})
            //const data=await instructor.find( {or:[{ "Course.Price":req.params.Price,"Course.Subject":req.params.Subject }]},{Course:1,_id:0})
            
            if (!data){ 
                res.status(400)
                console.log("No instructors found")
            }
            // const data2= await instructor.find({ },{ _id: 0, Course: 1 } )
            res.status(200).json(data);
            };    
            
const Filter_By_Subject_And_Rating_And_Price= async (req,res) => {
            const subject = req.body.Subject;
            const rating = req.body.Rating;
            const price = req.body.Price;

            const data=await course.find( { "Subject":subject,"Rating":rating,"Price":price },{})
            //const data=await instructor.find( {or:[{ "Course.Price":req.params.Price,"Course.Subject":req.params.Subject }]},{Course:1,_id:0})
            
            if (!data){ 
                res.status(400)
                console.log("No instructors found")
            }
            // const data2= await instructor.find({ },{ _id: 0, Course: 1 } )
            res.status(200).json(data);
            }; 
            
            
const FilteredCourses = async (req,res) => {
            const subject = req.query.Subject;
            const rating = req.query.Rating;
            const price = req.query.Price;
            var filteredCourses=null;

            if(subject==null||subject=="")
            {
                if(rating==null||rating=="")
                {
                    if(price==null||price=="")
                    {
                        filteredCourses = await course.find({});

                        res.status(200).json(filteredCourses);
                    }
                    else
                    {
                        filteredCourses = await course.find({Price:price});

                        res.status(200).json(filteredCourses);
                    }
                }
                else
                {
                    if(price==null||price=="")
                    {
                        filteredCourses = await course.find({Rating:rating});

                        res.status(200).json(filteredCourses);
                    }
                    else
                    {
                        filteredCourses = await course.find({Rating:rating,Price:price});

                        res.status(200).json(filteredCourses);
                    }
                }
            }
            else
            {
                if(rating==null||rating=="")
                {
                    if(price==null||price=="")
                    {
                        filteredCourses = await course.find({Subject:subject});

                        res.status(200).json(filteredCourses);
                    }
                    else
                    {
                        filteredCourses = await course.find({Subject:subject,Price:price});

                        res.status(200).json(filteredCourses);
                    }
                }
                else
                {
                    if(price==null||price=="")
                    {
                        filteredCourses = await course.find({Subject:subject,Rating:rating});

                        res.status(200).json(filteredCourses);
                    }
                    else
                    {
                        filteredCourses = await course.find({Subject:subject,Rating:rating,Price:price});

                        res.status(200).json(filteredCourses);

                    }
                }
            }
            }; 

            const fetchRatePrice =  async (req,res) => {
                const courseId = req.query.CourseId;
                const currCourse = await course.findById({_id :courseId})
                const currInstructor = currCourse.Instructor;
                console.log(currInstructor)
                
                const endpoint = "https://api.exchangerate-api.com/v4/latest/USD";
                const result = await fetch(`${endpoint}?base=${req.session.user.Currency}`);
                const rates = await result.json();
                const inst = await Instructors.findById({_id :mongoose.Types.ObjectId(currInstructor)})
                
                const currCurrency = inst.Currency;
                console.log(currCurrency)
                const x= rates.rates[currCurrency];
                console.log(x);
                
                currCourse.Price = currCourse.Price/x + req.session.user.Currency;
                console.log("currprice "+currCourse.Price);
                res.status(200).json(currCourse.Price);
                
                //Do somethign with the user
            };

module.exports = {View_All_Courses, Filter_By_Subject, Filter_By_Rate, Filter_By_Price,data,createCourse,addANewInstructor,Search_By_Instructor_Name,Search_By_Title,Filter_By_Subject_And_Price,Filter_By_Subject_And_Rating,Filter_By_Subject_And_Rating_And_Price,viewMyInstructorCoursesById,getCurrentCourseDetails,getCurrentCourseInformation,addCourseDiscount,fetchCourseDiscountsByCourseId,addSubtitle,fetchSubtitlesByCourseId,fetchInstructorById,fetchCoursePreviewLink,getCurrentCourseInstructor,fetchCurrentCourseInstructorByInstructorId,fetchCurrentCourseInstructorCoursesByInstructorId,ratingACourse,fetchTheSubtitleBySubtitleId,isCurrentCourseRegistered,FilteredCourses,fetchRatePrice};