    const express = require("express");
    const mongoose = require('mongoose');
    const instructor = require("../Models/Instructor");
    const course = require("../Models/Course");
    const reportedProblem = require("../Models/InstructorReports");
const { update } = require("../Models/User");
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

            
            const getInstructorInformation= async (req,res) => { 
            try{
                const data=await instructor.find( { "_id":req.query.id,},{})
                res.status(200).json(data);
            }
            catch(error){
                res.status(400).json({error:error.message});
            }

            };
            
            const getInstructorRatings= async (req,res) => { 
            try{
                const instructorId = req.query.id;
                if(instructorId)
                {
                    const currInstructor=await instructor.findById({_id:instructorId});
                    console.log(currInstructor);
                    const instructorRatings = currInstructor.Instructor_Ratings;
                    console.log(instructorRatings);
                    res.status(200).json(instructorRatings);
                }
                else
                {
                    res.status(400).json({error:"instructorId is required"});
                }
                
            }
            catch(error){
                res.status(400).json({error:error.message});
            }

            };

            const editInstructorProfileEmailAndBio = async (req,res) => { 
            try{

                const instructorId= req.query.id;
                const updatedprofile =await instructor.findByIdAndUpdate(instructorId,{First_Name:req.body.First_Name,Last_Name:req.body.Last_Name,Email:req.body.Email,Bio:req.body.Bio},{new:true});
                console.log(updatedprofile)
                res.status(200).json(updatedprofile);

                
            }
            catch(error){
                res.status(400).json({error:error.message});
            }

            };
            
            
            const ratingAnInstructor = async (req,res) => { 
            try{

                const instructorId= req.query.id;
                const instructorRating = req.query.rating;
                const currInstructor = await instructor.findById({_id:instructorId});
                
                const array = currInstructor.Instructor_Ratings;
                console.log(array);
                array.push(instructorRating);
                console.log(array);
                const updatedInstructor =  await instructor.findByIdAndUpdate({_id:instructorId},{Instructor_Ratings:array},{new:true});
                const updatedarray = updatedInstructor.Instructor_Ratings;
                var x = 0;
                for (let i = 0; i < updatedarray.length; i++) {
                    x += updatedarray[i];
                }
                x= x / updatedarray.length;
                console.log(x);
                const finalUpdatedInstructor = await instructor.findByIdAndUpdate({_id:instructorId},{"Rating":x},{new:true});
                res.status(200).json(finalUpdatedInstructor);

            }
            catch(error){
                res.status(400).json({error:error.message});
            }

            };

            const reviewingAnInstructor = async (req,res) => { 
            try{

                const instructorId= req.query.id;
                const instructorReview = req.query.review;
                const currInstructor = await instructor.findById({_id:instructorId});
                
                const array = currInstructor.Instructor_Reviews;
                console.log(array);
                array.push(instructorReview);
                console.log(array);
                const updatedInstructor =  await instructor.findByIdAndUpdate({_id:instructorId},{Instructor_Reviews:array},{new:true});

                res.status(200).json(updatedInstructor);

            }
            catch(error){
                res.status(400).json({error:error.message});
            }

            };

    const instructorSendReport = async(req,res) => {

    const instructorId = req.query.id;
    const {Reported_Problem,Report_Type, Status} = req.body;
    const selectedi = await instructor.findById({_id:instructorId});
    const instructorUsername = selectedi.Username;
    try{
    const result = await reportedProblem.create({Instructor_Id:instructorId,Reported_Problem,Report_Type,Status,Username:instructorUsername});
    console.log(result)
    res.status(200).json(result)
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}

const fetchInstructorAllPreviousReports = async(req,res) => {

    const instructorId = req.query.id;
    const allReports=[];

    try{
    const resolvedProblems = await reportedProblem.find({Instructor_Id:mongoose.Types.ObjectId(instructorId),Status:"Resolved"}).populate('Trainee_Id');
    const underSupervisionProblems = await reportedProblem.find({Instructor_Id:mongoose.Types.ObjectId(instructorId),Status:"Pending"}).populate('Trainee_Id');
    for (let i = 0; i < resolvedProblems.length; i++) {
                allReports.push(resolvedProblems[i]);
        }

    for (let i = 0; i < underSupervisionProblems.length; i++) {
                allReports.push(underSupervisionProblems[i]);
        }
    // allReports.push(resolvedProblems);
    // allReports.push(underSupervisionProblems)

    console.log(allReports)
    res.status(200).json(allReports)
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}




    module.exports ={insttitles,filterTitles2,getInstructorInformation,editInstructorProfileEmailAndBio,ratingAnInstructor,reviewingAnInstructor,getInstructorRatings,instructorSendReport,fetchInstructorAllPreviousReports};

    // module.exports =filterTitles;
    //module.exports =createinst;