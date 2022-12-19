//8-9-10
const mongoose = require('mongoose');
const express = require("express");
const projection = require('projection');

const course = require('../Models/Course');
const instructor = require('../Models/Instructor');
const discount = require('../Models/CourseDiscount');
const subtitles = require('../Models/Subtitles');
const individual_Trainee = require("../Models/Individual Trainee");
const corporate_Trainee = require("../Models/corporateTrainees");


const router = require("express").Router();
const session = require('express-session');
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

        const {Title, Subject,Subtitles_Total_Hours,Course_Total_Hours,Price,Discount,Discount_Start_Date,Discount_End_Date,Course_Description,PreviewLink,Subtitle_Title,Link,Description}= req.body;
        const instructorid=req.query.id;
        const currinstructor = await instructor.findById({_id:instructorid});
        const currInstructorName = currinstructor.First_Name +" "+currinstructor.Last_Name;
        console.log(currInstructorName)
    try{

    var dateEnd = new Date(Discount_End_Date);
    var dateStart = new Date(Discount_Start_Date)

    const date = new Date();

    if(!(dateStart>=dateEnd))
    {
        if(date>=dateEnd)
    {
        const addCourse =await course.create({Title, Subject,Subtitles_Total_Hours,Course_Total_Hours,Price,Course_Description,PreviewLink,Instructor_Name:currInstructorName,"Instructor":req.query.id});
        const newlyAddedCourseId = addCourse._id;
        console.log(newlyAddedCourseId);

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
    else
    {
        const addCourse =await course.create({Title, Subject,Subtitles_Total_Hours,Course_Total_Hours,Price,Discount,Discount_Start_Date,Discount_End_Date,Course_Description,PreviewLink,Instructor_Name:currInstructorName,"Instructor":req.query.id});
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

    }
    else
    {
        res.status(400).json({error:"The dates don't align"});
    }

    }
    catch(error){
        res.status(400).json({error:error.message});
    }

}

const isDiscountViable = async(req,res) => {

    const courseid = req.query.CourseId;
    
    if(courseid){
    const currCourse = await course.findById({_id:courseid});
    const currCourseStartDate = currCourse.Discount_Start_Date;
    const currCourseEndDate = currCourse.Discount_End_Date;


    //var display = false;
    if(currCourseEndDate==null||currCourseEndDate=="")
    {
        res.status(200).json(currCourse)
    }
    else
    {
        const date = new Date();
        const day = currCourseStartDate.getDate();
        const month = currCourseStartDate.getMonth();
        const year = currCourseStartDate.getFullYear();
        var dateStart = new Date(year, month, day);
        
        const endday = currCourseEndDate.getDate();
        const endmonth = currCourseEndDate.getMonth();
        const endyear = currCourseEndDate.getFullYear();

        var dateEnd = new Date(endyear, endmonth, endday);
        //console.log("date"+date)
        //console.log("dateStart"+dateStart)
        //console.log("dateEnd"+dateEnd)

        //console.log("dateStart >= date"+dateStart >= date)
        //console.log("date <= dateEnd"+date <= dateEnd)

        if((date<= dateEnd))
        {
            //console.log("jjj");
            res.status(200).json(currCourse)
        }
        else
        {
            //console.log("hhhjdk")
            const finalcourse = await course.findByIdAndUpdate({_id:courseid},{Discount:"",Discount_Start_Date:"",Discount_End_Date:""},{new:true});
            res.status(200).json(finalcourse)
        }
    }
    
    
    }else{
        res.status(400).json({error:"course is required"})
    }
}

const displayCourseDiscount = async(req,res) => {

    const courseid = req.query.CourseId;
    
    if(courseid){
    const currCourse = await course.findById({_id:courseid});
    const currCourseStartDate = currCourse.Discount_Start_Date;
    const currCourseEndDate = currCourse.Discount_End_Date;


    var display = false;
    if(currCourseEndDate==null||currCourseEndDate=="")
    {
        res.status(200).json(true)
    }
    else
    {
        const date = new Date();
        const day = currCourseStartDate.getDate();
        const month = currCourseStartDate.getMonth();
        const year = currCourseStartDate.getFullYear();
        var dateStart = new Date(year, month, day);

        if((date.getDate() == day || date.getDate() > day)&&(date.getMonth()==month||date.getMonth()>month)&&(date.getFullYear()==year||date.getFullYear()>year))
        {
            console.log("kk")
                    display = true;
                    res.status(200).json(display)
            
        }
        else
        {
            res.status(200).json(display)
        }
    }
    
    
    }else{
        res.status(400).json({error:"courseid is required"})
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

        const {Discount,Discount_Start_Date,Discount_End_Date}= req.body;
        const courseId=req.query.CourseId;
        
    try{

        
        const currCourse = await course.findById({_id:courseId});
        console.log(currCourse.Discount);
        if(currCourse.Discount==null||currCourse.Discount=="")
        {
            console.log("jj")
            const updatedDiscount= await course.findByIdAndUpdate({_id:req.query.CourseId}, { Discount: Discount,Discount_Start_Date:Discount_Start_Date,Discount_End_Date:Discount_End_Date},{new:true});
            console.log(updatedDiscount);
            res.status(200).json(updatedDiscount);
        }
        else
        {
            console.log("ll");
            res.status(400).json({error:"There is a discount already defined for this course! Please try at a later time."});
        }
        
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

const isCurrentCourseRegistered = async (req,res) => { 
            try{
                const courseId = req.query.CourseId;
                const traineeId = req.query.TraineeId;
                //const userid= req.session.user._id;
                //console.log("userid"+userid);
                const corporateTraineeId = req.query.CorporateTraineeId;
                let x = false;
                console.log(corporateTraineeId)
                if(corporateTraineeId==null)
                {
                    const currTrainee=await individual_Trainee.findById({_id:traineeId});
                    //const usertrainee =await individual_Trainee.findById({_id:userid}); 
                    console.log(currTrainee.Registered_Courses)
                    //console.log("usertraineeregcourses"+usertrainee.Registered_Courses)
                    const registeredCourses = currTrainee.Registered_Courses;
                    //const registeredCourses = usertrainee.Registered_Courses;
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
                    console.log("kjhydui")
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

module.exports = {View_All_Courses, Filter_By_Subject, Filter_By_Rate, Filter_By_Price,data,createCourse,addANewInstructor,Search_By_Instructor_Name,Search_By_Title,Filter_By_Subject_And_Price,Filter_By_Subject_And_Rating,Filter_By_Subject_And_Rating_And_Price,viewMyInstructorCoursesById,getCurrentCourseDetails,getCurrentCourseInformation,addCourseDiscount,fetchCourseDiscountsByCourseId,addSubtitle,fetchSubtitlesByCourseId,fetchInstructorById,fetchCoursePreviewLink,getCurrentCourseInstructor,fetchCurrentCourseInstructorByInstructorId,fetchCurrentCourseInstructorCoursesByInstructorId,ratingACourse,fetchTheSubtitleBySubtitleId,isCurrentCourseRegistered,FilteredCourses,isDiscountViable,displayCourseDiscount};