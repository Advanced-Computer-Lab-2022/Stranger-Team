//8-9-10
const mongoose = require('mongoose');
const express = require("express");
const projection = require('projection');

const course = require('../Models/Course');
const instructor = require('../Models/Instructor');


const data = (req, res) => {
    res.status(200).send("You have everything installed!");
    }


    const createCourse = async(req,res)=>{

        const {Title, Subject, Subtitles,Subtitles_Total_Hours,Exercises,Course_Total_Hours,Price,Rating,Instructor_Name,discount,Course_Description}= req.body;
    try{

    const addCourse =await course.create({Title, Subject, Subtitles,Subtitles_Total_Hours,Exercises,Course_Total_Hours,Price,Rating,Instructor_Name,discount,Course_Description});
    console.log(addCourse);
    res.status(200).json(addCourse);

    }
    catch(error){
        res.status(400).json({error:error.message});
    }

}
const addInstructor = async(req,res)=>{
        
    const {Username, Password,First_Name} = req.body;
    try{
    const addInstructor =await instructor.create({Username,Password,First_Name});
    res.status(200).json(addInstructor);

    }
    catch(error){
        res.status(400).json({error:error.message});
    }

}



const View_All_Courses = async(req,res) =>{
    const allCourses = await course.find({}, {Title: 1, Subject: 1,Subtitles:1,Subtitles_Total_Hours:1,Exercises:1, Course_Total_Hours:1,Price:1,Rating:1,Instructor_Name:1,discout:1,Course_Description:1 }).sort({createdAt:-1}) ;
    res.status(200).json(allCourses);
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

module.exports = {View_All_Courses, Filter_By_Subject, Filter_By_Rate, Filter_By_Price,data,createCourse,addInstructor,Search_By_Instructor_Name,Search_By_Title,Filter_By_Subject_And_Price,Filter_By_Subject_And_Rating,Filter_By_Subject_And_Rating_And_Price};