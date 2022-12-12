    const express = require("express");
    const mongoose = require('mongoose');
    const instructor = require("../Models/Instructor");
    const course = require("../Models/Course");
    const individual_Trainee = require("../Models/Individual Trainee");
    const reportedProblem = require("../Models/TraineeReports");

    const addIndividualTrainee = async(req,res) => {
    
    const {Username,Email,Password,First_Name,Last_Name,Gender} = req.body;

    try{
    const result = await individual_Trainee.create({Username,Email,Password,First_Name,Last_Name,Gender});
    console.log(result)
    res.status(200).json(result)
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}

    const indiviualTraineeRegisterCourse = async(req,res) => {
    
        const individualTraineeId = req.query.TraineeId;
        const courseId = req.query.CourseId;

    try{
    const currTrainee = await individual_Trainee.findById({_id:individualTraineeId});
    const updatedArray = currTrainee.Registered_Courses;
    console.log(updatedArray);
    updatedArray.push(courseId);
    console.log(updatedArray)

    const updatedTrainee =  await individual_Trainee.findByIdAndUpdate({_id:individualTraineeId},{Registered_Courses:updatedArray},{new:true});
    console.log(updatedTrainee)
    res.status(200).json(updatedTrainee)
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}

    const viewMyRegisteredCourses = async(req,res) => {
    
        const individualTraineeId = req.query.TraineeId;
        

    try{
    const currTrainee = await individual_Trainee.findById({_id:individualTraineeId});
    const coursesArray = currTrainee.Registered_Courses;
    const coursesArray1 = [];
    console.log(coursesArray)

    for (let i = 0; i < coursesArray.length; i++) {
            coursesArray1.push(await course.findById({_id:coursesArray[i]}));
        }
    
    console.log(coursesArray1)
    res.status(200).json(coursesArray1)
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}

const traineeSendReport = async(req,res) => {

    const traineeId = req.query.TraineeId;
    const {Reported_Problem,Report_Type,Status} = req.body;
    const itrainee = await individual_Trainee.findById({_id:traineeId});
    const itraineeUsername = itrainee.Username;

    try{
    const result = await reportedProblem.create({Trainee_Id:traineeId,Reported_Problem,Report_Type,Status,Username:itraineeUsername});
    console.log(result)
    res.status(200).json(result)
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}

const fetchTraineeAllPreviousReports = async(req,res) => {

    const traineeId = req.query.TraineeId;
    const allReports=[];

    try{
    const resolvedProblems = await reportedProblem.find({Trainee_Id:mongoose.Types.ObjectId(traineeId),Status:"Resolved"}).populate('Trainee_Id');
    const underSupervisionProblems = await reportedProblem.find({Trainee_Id:mongoose.Types.ObjectId(traineeId),Status:"Pending"}).populate('Trainee_Id');
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






    module.exports ={addIndividualTrainee,indiviualTraineeRegisterCourse,viewMyRegisteredCourses,traineeSendReport,fetchTraineeAllPreviousReports};
