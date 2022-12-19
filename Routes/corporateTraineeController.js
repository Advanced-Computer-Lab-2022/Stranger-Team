    const express = require("express");
    const mongoose = require('mongoose');
    const instructor = require("../Models/Instructor");
    const course = require("../Models/Course");
    const {corporateTrainees} = require("../Models/corporateTrainees");
    const reportedProblem = require("../Models/CorporateTraineeReports");
    const courseRequests = require("../Models/CourseRequests");
    const crypto = require("crypto");
    const bcrypt = require("bcrypt");
    const addCorporateTrainee = async(req,res) => {
    
   // const {Username,Email,Password,First_Name,Last_Name,Gender,Corporate} = req.body;

    try{
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(req.body.Password, salt);
        console.log("hash:");
    const result = await new corporateTrainees({ ...req.body, Password: hashPassword }).save();
    
    res.status(200).json(result)
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}

    const corporateTraineeRegisterCourse = async(req,res) => {
    
        const corporateTrainee = req.query.CorporateTraineeId;
        const courseId = req.query.CourseId;
        console.log(courseId);

    try{
    const currTrainee = await corporateTrainees.findById({_id:corporateTrainee});
    const updatedArray = currTrainee.Registered_Courses;
    console.log(updatedArray);
    updatedArray.push(courseId);
    console.log(updatedArray)

    const updatedTrainee =  await corporateTrainees.findByIdAndUpdate({_id:corporateTrainee},{Registered_Courses:updatedArray},{new:true});
    console.log(updatedTrainee)
    res.status(200).json(updatedTrainee)
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}

    const corporateViewMyRegisteredCourses = async(req,res) => {
    
        const corporateTrainee = req.query.CorporateTraineeId;
        

    try{
    const currTrainee = await corporateTrainees.findById({_id:corporateTrainee});
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


const corporateTraineeSendReport = async(req,res) => {

    const traineeId = req.query.CorporateTraineeId;
    const {Reported_Problem,Report_Type} = req.body;
    const trainee = await corporateTrainees.findById({_id:traineeId});
    const traineeUsername = trainee.Username;

    try{
    const result = await reportedProblem.create({corporateTrainees_Id:traineeId,Reported_Problem,Report_Type,Status:"Delivered", Username:traineeUsername});
    console.log(result)
    res.status(200).json(result)
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}


const fetchCorporateTraineeAllPreviousReports = async(req,res) => {

    const corporateTraineeId = req.query.CorporateTraineeId;
    const allReports=[];

    try{
    const resolvedProblems = await reportedProblem.find({corporateTrainees_Id:mongoose.Types.ObjectId(corporateTraineeId),Status:"Resolved"}).populate('corporateTrainees_Id');
    const underSupervisionProblems = await reportedProblem.find({corporateTrainees_Id:mongoose.Types.ObjectId(corporateTraineeId),Status:"Pending"}).populate('corporateTrainees_Id');
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

const fetchCorporateTraineeProfileDetails = async(req,res) => {

    const corporateTraineeId = req.query.CorporateTraineeId;

    try{
    const trainee = await corporateTrainees.findById({_id:corporateTraineeId});
    console.log(trainee)
    res.status(200).json(trainee)
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}


const fetchCorporateTraineeDeliveredReports = async(req,res) => {

    const traineeId = req.query.CorporateTraineeId;

    try{
    const deliveredProblems = await reportedProblem.find({corporateTrainees_Id:mongoose.Types.ObjectId(traineeId),Status:"Delivered"}).populate('corporateTrainees_Id');

    console.log(deliveredProblems)
    res.status(200).json(deliveredProblems)
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}

const fetchCorporateTraineePendingReports = async(req,res) => {

    const traineeId = req.query.CorporateTraineeId;

    try{
    const pendingProblems = await reportedProblem.find({corporateTrainees_Id:mongoose.Types.ObjectId(traineeId),Status:"Pending"}).populate('corporateTrainees_Id');

    console.log(pendingProblems)
    res.status(200).json(pendingProblems)
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}

const fetchCorporateTraineeResolvedReports = async(req,res) => {

    const traineeId = req.query.CorporateTraineeId;

    try{
    const resolvedProblems = await reportedProblem.find({corporateTrainees_Id:mongoose.Types.ObjectId(traineeId),Status:"Resolved"}).populate('corporateTrainees_Id');

    console.log(resolvedProblems)
    res.status(200).json(resolvedProblems)
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}

const fetchCorporateProblem = async(req,res) => {

    const problemId = req.query.ReportId;

    try{
    const problem = await reportedProblem.findById({_id:problemId});

    console.log(problem)
    res.status(200).json(problem)
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}

const fetchNonRegisteredCorporateTraineeCoursesForInstructor = async(req,res) => {

    const traineeId = req.query.CorporateTraineeId;
    const instructorId = req.query.id;


    try{
    const trainee = await corporateTrainees.findById({_id:traineeId});
    const traineeRegisteredCourses = trainee.Registered_Courses;
    const instructorCourses = await course.find({Instructor:mongoose.Types.ObjectId(instructorId)}).populate('Instructor');
    const traineeNonRegisteredCourses = [];

    for (let i = 0; i < traineeRegisteredCourses.length; i++) {
            for(let j=0;j<instructorCourses.length;j++)
            {
                console.log(traineeRegisteredCourses[i]._id)
                console.log(instructorCourses[j]._id)
                if(traineeRegisteredCourses[i]._id != instructorCourses[j]._id)
                {
                    traineeNonRegisteredCourses.push(instructorCourses[j])
                }
            }

        }

        console.log(traineeNonRegisteredCourses);
        res.status(200).json(traineeNonRegisteredCourses)

    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}


const requestCourseAccess = async(req,res) => {
    const corporateTraineeId = req.query.CorporateTraineeId;
    console.log(corporateTraineeId)
    const courseId = req.query.CourseId;
    //console.log(courseId)
    const ct = await corporateTrainees.findById({_id:corporateTraineeId}).populate();
    //console.log(ct)
    const c = await course.findById({_id:courseId}).populate();
    const CourseTitle = c.Title;
    const TUsername = ct.Username;
    const Role = ct.Role;

    try {
        const data = await courseRequests.create({"CourseId":courseId, "CorporateTraineeId":corporateTraineeId, "CourseTitle":CourseTitle, "TUsername":TUsername, "Role":Role })
        res.status(200).json(data)
    }
    catch(error) {
        res.status(400).json({error: error.message})
    }


}



    module.exports ={corporateTraineeSendReport,fetchCorporateTraineeAllPreviousReports,corporateViewMyRegisteredCourses,corporateTraineeRegisterCourse,addCorporateTrainee,fetchCorporateTraineeProfileDetails,fetchCorporateTraineeDeliveredReports,fetchCorporateTraineePendingReports,fetchCorporateTraineeResolvedReports,fetchCorporateProblem,fetchNonRegisteredCorporateTraineeCoursesForInstructor, requestCourseAccess};
