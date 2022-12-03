    const express = require("express");
    const mongoose = require('mongoose');
    const instructor = require("../Models/Instructor");
    const course = require("../Models/Course");
    var instTitles = [];
    let instname;




        const insttitles= async (req,res) => { 
            const instructorName = req.body;
            const instData=await course.find({ Instructor_Name: req.params.Instructor_Name },{});
            //Title:1,Instructor_Name:1
            console.log(instData)
            if (!instData){ 
                res.status(400)
                console.log("No instructors found")
            }
            // const data2= await instructor.find({ },{ _id: 0, Course: 1 } )
            res.status(200).json(instData);
            }; 


    //Filter courses based on price or subject -->Works for both only
        const filterTitles2= async (req,res) => { 
            const data=await course.find( { "Price":req.params.Price,"Subject":req.params.Subject },{Title:1,Subject:1,Price:1,_id:0})
            //const data=await instructor.find( {or:[{ "Course.Price":req.params.Price,"Course.Subject":req.params.Subject }]},{Course:1,_id:0})
            
            if (!data){ 
                res.status(400)
                console.log("No instructors found")
            }
            // const data2= await instructor.find({ },{ _id: 0, Course: 1 } )
            res.status(200).json(data);
            }; 

                                
    module.exports ={insttitles,filterTitles2};

    // module.exports =filterTitles;
    //module.exports =createinst;