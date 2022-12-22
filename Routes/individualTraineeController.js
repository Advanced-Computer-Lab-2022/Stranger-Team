    const express = require("express");
    const mongoose = require('mongoose');
    const instructor = require("../Models/Instructor");
    const course = require("../Models/Course");
    const individual_Trainee = require("../Models/Individual Trainee");
    const reportedProblem = require("../Models/TraineeReports");
    const refund = require("../Models/TraineeRefunds");

    const addIndividualTrainee = async(req,res) => {
    
    const {Username,Email,Password,First_Name,Last_Name,Gender} = req.body;

    try{
    const result = await individual_Trainee.create({Username,Email,Password,First_Name,Last_Name,Gender,Role:"Individual Trainee"});
    console.log(result)
    res.status(200).json(result)
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}

const viewMyWalletBalance = async(req,res) => {
    
    //const traineeId = req.session.user._id;
    const traineeId = req.query.TraineeId;

    try{
    const result = await individual_Trainee.findById({_id:traineeId});
    const wallet = result.Wallet;
    console.log(wallet)
    res.status(200).json(wallet)
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}

const payByWalletBalance = async(req,res) => {
    
    //const traineeId = req.session.user._id;
    const traineeId = req.query.TraineeId;
    const courseId = req.query.CourseId;

    try{
    if(traineeId)
    {
        const currCourse = await course.findById({_id:courseId});
        const currCoursePrice = currCourse.Price;
        const currTrainee = await individual_Trainee.findById({_id:traineeId});
        const balance = currTrainee.Wallet;
        if(balance>=currCoursePrice)
        {
            const newBalance = balance - currCoursePrice;
            const newArray = currTrainee.Registered_Courses;
            newArray.push(courseId)
            console.log("newArray"+newArray)

            const updatedBalance = await individual_Trainee.findByIdAndUpdate({_id:traineeId},{Registered_Courses:newArray,Wallet:newBalance},{new:true});

            res.status(200).json(updatedBalance)
        }
        else
        {
            res.status(400).json({error:"There isn't enough balance to pay for the course!"});
        }
    }
    else
    {
        res.status(400).json({error:"TraineeId isn't correct"});
    }
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}

const traineeRefundRequest = async(req,res) => {
    
    //const traineeId = req.session.user._id;
    const traineeId = req.query.TraineeId;
    const courseId = req.query.CourseId;
    const{Problem}= req.body;

    try{
    if(traineeId)
    {
        var newRefund=null;
        const currTrainee = await individual_Trainee.findById({_id:traineeId});
        const currUsername = currTrainee.Username;
        const currRole = currTrainee.Role;
        if(Problem==null||Problem=="")
        {
            newRefund= await refund.create({Trainee_Id:traineeId,Course_Id:courseId,Problem:"",Status:"Pending",Username:currUsername,Role:currRole});
        }
        else
        {
            newRefund= await refund.create({Trainee_Id:traineeId,Course_Id:courseId,Problem:Problem,Status:"Pending",Username:currUsername,Role:currRole});
        }
        res.status(200).json(newRefund)
        
        
    }
}
    catch(error){
        res.status(400).json({error:error.message});
    }
}

const fetchTraineePendingRequests = async(req,res) => {

    const traineeId = req.query.TraineeId;

    try{
    const pendingProblems = await refund.find({Trainee_Id:mongoose.Types.ObjectId(traineeId),Status:"Pending"}).populate('Trainee_Id');

    console.log(pendingProblems)
    res.status(200).json(pendingProblems)
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}

const fetchTraineeResolvedRequests = async(req,res) => {

    const traineeId = req.query.TraineeId;

    try{
    const resolvedProblems = await refund.find({Trainee_Id:mongoose.Types.ObjectId(traineeId),Status:"Resolved"}).populate('Trainee_Id');

    console.log(resolvedProblems)
    res.status(200).json(resolvedProblems)
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}

const getCurrentCourse = async(req,res) => {

    const courseId = req.query.CourseId;

    if(courseId){
    const currCourse = await course.findById({_id:courseId},{Title:1,Price:1});
    res.status(200).json(currCourse)
    }else{
        res.status(400).json({error:"courseId is required"})
    }
}

const fetchCurrentRequest = async(req,res) => {

    const reqId = req.query.RequestId;

    try{
        
    const problem = await refund.findById({_id:reqId});

    console.log(problem)
    res.status(200).json(problem)
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

// const traineeSendReport = async(req,res) => {

//     const traineeId = req.query.TraineeId;

    
//     const {Reported_Problem,Report_Type} = req.body;

//     try{
//     const result = await reportedProblem.create({Trainee_Id:traineeId,Reported_Problem,Report_Type,Status:"Delivered"});
//     console.log(result)
//     res.status(200).json(result)
//     }
//     catch(error){
//         res.status(400).json({error:error.message});
//     }
// }

const traineeSendReport = async(req,res) => {

    const traineeId = req.query.TraineeId;
    const {Report_Title,Reported_Problem,Report_Type} = req.body;
    const trainee = await individual_Trainee.findById({_id:traineeId});
    const traineeUsername = trainee.Username;

    try{
    const result = await reportedProblem.create({Trainee_Id:traineeId,Report_Title,Reported_Problem,Report_Type,Status:"Delivered", Username:traineeUsername,Role:"From Individual Trainee"});
    console.log(result)
    res.status(200).json(result)
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}

const traineeSendFollowup = async(req,res) => {

    //const traineeId = req.query.TraineeId;
    const reportId = req.query.ReportId;
    const {Followup} = req.body;
    

    try{
    
    const currReport = await reportedProblem.findById({_id:reportId});
    const newtitle = "Followup on: "+currReport.Report_Title;
    const followupArray = currReport.Followups;
    followupArray.push(Followup);
    const updatedReport = await reportedProblem.findByIdAndUpdate({_id:reportId},{Report_Title:newtitle,Status:"Delivered",Followups:followupArray},{new:true})
    console.log(updatedReport)
    res.status(200).json(updatedReport)
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

    console.log(allReports)
    res.status(200).json(allReports)
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}

const fetchTraineeDeliveredReports = async(req,res) => {

    const traineeId = req.query.TraineeId;

    try{
    const deliveredProblems = await reportedProblem.find({Trainee_Id:mongoose.Types.ObjectId(traineeId),Status:"Delivered"}).populate('Trainee_Id');

    console.log(deliveredProblems)
    res.status(200).json(deliveredProblems)
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}

const fetchTraineePendingReports = async(req,res) => {

    const traineeId = req.query.TraineeId;

    try{
    const pendingProblems = await reportedProblem.find({Trainee_Id:mongoose.Types.ObjectId(traineeId),Status:"Pending"}).populate('Trainee_Id');

    console.log(pendingProblems)
    res.status(200).json(pendingProblems)
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}

const fetchTraineeResolvedReports = async(req,res) => {

    const traineeId = req.query.TraineeId;

    try{
    const resolvedProblems = await reportedProblem.find({Trainee_Id:mongoose.Types.ObjectId(traineeId),Status:"Resolved"}).populate('Trainee_Id');

    console.log(resolvedProblems)
    res.status(200).json(resolvedProblems)
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}

const fetchProblem = async(req,res) => {

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


const fetchTraineeProfileDetails = async(req,res) => {

    const traineeId = req.query.TraineeId;

    try{
    const trainee = await individual_Trainee.findById({_id:traineeId});
    console.log(trainee)
    res.status(200).json(trainee)
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}

const fetchNonRegisteredTraineeCoursesForInstructor = async(req,res) => {

    const traineeId = req.query.TraineeId;
    const instructorId = req.query.id;


    try{
    const trainee = await individual_Trainee.findById({_id:traineeId});
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

const checkIfAdminRespondedTrainee = async(req,res) => {

    const traineeId = req.query.TraineeId;
    const reportId = req.query.ReportId;

    try{

    const allReports = await reportedProblem.find({Trainee_Id:mongoose.Types.ObjectId(traineeId),Status:"Pending"}).populate('Trainee_Id');
    
    const adminResponseArray=[];
    for(let i=0;i<allReports.length;i++)
    {
        
        const temp = allReports[i].Admin_Response+"";
        if(allReports[i].Admin_Response ==null || allReports[i].Admin_Response =="" || allReports[i].Admin_Response==undefined) 
        {
            console.log("no responses found")
        }
        else
        {
            adminResponseArray.push(allReports[i])
        }
        
    }
        console.log("adminResponseArray"+adminResponseArray);
        res.status(200).json(adminResponseArray)
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}

//updating status from pending to resolved
        const updateReportStatusFromPendingToResolvedTrainee = async (req, res) => {
        const RID = req.query.ReportId;

        try{
            if(RID)
        {
            
            const updatedIR = await reportedProblem.findByIdAndUpdate({_id:RID}, {Status:"Resolved"}, {new : true})
            res.status(200).json(updatedIR)
        }
        }
        catch(error){
        res.status(400).json({error:error.message});
    }

        }
        const getWalletBalance =async(req,res)=>{
            console.log('d5l')
            
            const traineeId=req.query.TraineeId;
            //const balance = await Balance.find({})
        try{
            const wallet1=await Traineewallet.findOne({"TraineeId":mongoose.Types.ObjectId(traineeId)},{Balance:1,_id:0});
            console.log(wallet1)
            res.status(200).json(wallet1);
        
        }
        catch(error){
            res.status(400).json({error:error.message});
        }
        }

        
            

    module.exports ={addIndividualTrainee,indiviualTraineeRegisterCourse,viewMyRegisteredCourses,traineeSendReport,fetchTraineeAllPreviousReports,fetchTraineeProfileDetails,fetchTraineeDeliveredReports,fetchTraineePendingReports,fetchTraineeResolvedReports,fetchProblem,fetchNonRegisteredTraineeCoursesForInstructor,checkIfAdminRespondedTrainee,updateReportStatusFromPendingToResolvedTrainee,traineeSendFollowup,getWalletBalance,viewMyWalletBalance,payByWalletBalance,traineeRefundRequest,fetchTraineePendingRequests,fetchCurrentRequest,getCurrentCourse,fetchTraineeResolvedRequests};
