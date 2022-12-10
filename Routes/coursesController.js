//8-9-10
const mongoose = require('mongoose');
const express = require("express");
const projection = require('projection');

const course = require('../Models/Course');
const instructor = require('../Models/Instructor');
const discount = require('../Models/CourseDiscount');
const subtitles = require('../Models/Subtitles');


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
    const currInstructor = await instructor.findById({_id:instructorId},{First_Name:1,Last_Name:1});
    res.status(200).json(currInstructor)
    }else{
        res.status(400).json({error:"instructorId is required"})
    }
}

const fetchCurrentCourseInstructorByInstructorId = async(req,res) => {

    const instructorId = req.query.id;
    if(instructorId)
    {
        const currInstructor = await instructor.find({_id:instructorId});
        
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
    const addANewInstructor =await instructor.create({Username,Password,First_Name,Last_Name,Email,Gender,Bio});
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
    res.status(200).json(allCourses);
}

const getCurrentCourseDetails  = async(req,res) =>{
    const currentCourse = req.query.CourseId;

    
    const currentCourseDetails = await course.find({_id:currentCourse}, {Title: 1, Subject: 1,Subtitles_Total_Hours:1, Course_Total_Hours:1,Price:1,Discount:1,Rating:1,Course_Description:1,Instructor:1 }).sort({createdAt:-1}) ;


    console.log(currentCourseDetails)

    res.status(200).json(currentCourseDetails); 

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

module.exports = {View_All_Courses, Filter_By_Subject, Filter_By_Rate, Filter_By_Price,data,createCourse,addANewInstructor,Search_By_Instructor_Name,Search_By_Title,Filter_By_Subject_And_Price,Filter_By_Subject_And_Rating,Filter_By_Subject_And_Rating_And_Price,viewMyInstructorCoursesById,getCurrentCourseDetails,getCurrentCourseInformation,addCourseDiscount,fetchCourseDiscountsByCourseId,addSubtitle,fetchSubtitlesByCourseId,fetchInstructorById,fetchCoursePreviewLink,getCurrentCourseInstructor,fetchCurrentCourseInstructorByInstructorId,fetchCurrentCourseInstructorCoursesByInstructorId,ratingACourse};