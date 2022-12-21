    const express = require("express");
    const mongoose = require('mongoose');
    const instructor = require("../Models/Instructor");
    const course = require("../Models/Course");
    const corporate_Trainee = require("../Models/corporateTrainees");
    const reportedProblem = require("../Models/CorporateTraineeReports");
    const CorporateTraineeNotes=require("../Models/CorporateTraineeNotes");
    const CorporateTraineeProgress=require("../Models/CorporateProgress")

    //const corporateTrainee=require("../Models/corporateTrainees")




//     const getProgress = async(req,res) => {
//     // const {Notes} = req.body;
//     const corporateTrainee = req.query.CorporateTraineeId;
//     const SubtitleId = req.query.SubtitleId;

//     try{
//     const currTrainee = await CorporateTraineeProgress.create({Corporate_Trainee_Id:corporateTrainee,SubtitleId:SubtitleId, Notes:Notes});
//     res.status(200).json(currTrainee)
//     }
//     catch(error){
//         res.status(400).json({error:error.message});
//     }
// }
    const AddNotes = async(req,res) => {
    const {Notes} = req.body;
    const corporateTrainee = req.query.CorporateTraineeId;
    const SubtitleId = req.query.SubtitleId;

    try{
    const currTrainee = await CorporateTraineeNotes.create({Corporate_Trainee_Id:corporateTrainee,SubtitleId:SubtitleId, Notes:Notes});
    res.status(200).json(currTrainee)
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}
    const getNotes = async(req,res) => {
   // const {Notes} = req.body;
    const corporateTrainee = req.query.CorporateTraineeId;
    const SubtitleId = req.query.SubtitleId;

    try{
    const notes = await CorporateTraineeNotes.find({Corporate_Trainee_Id:corporateTrainee,SubtitleId:SubtitleId},{Notes:1});
    res.status(200).json(notes)
    //console.log(notes)
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}





    const addCorporateTrainee = async(req,res) => {

    const {Username,Email,Password,First_Name,Last_Name,Gender,Corporate} = req.body;

    try{
    const result = await corporate_Trainee.create({Username,Email,Password,First_Name,Last_Name,Gender,Corporate});
    console.log(result)
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
    const currTrainee = await corporate_Trainee.findById({_id:corporateTrainee});
    const updatedArray = currTrainee.Registered_Courses;
    console.log(updatedArray);
    updatedArray.push(courseId);
    console.log(updatedArray)

    const updatedTrainee =  await corporate_Trainee.findByIdAndUpdate({_id:corporateTrainee},{Registered_Courses:updatedArray},{new:true})
    //.populate({path:'Registered_Courses',select:['Progress']});
    console.log(updatedTrainee)
    res.status(200).json(updatedTrainee)
   // const progress=await CorporateTraineeProgress.create({"Corporate_Trainee_Id":mongoose.Types.ObjectId(corporateTrainee),"CourseId":mongoose.Types.ObjectId(courseId)})
    console.log(progress)
    
//------------------------->>>>>>>> New Part
    //creating Progress
     var c;
    console.log(req.query.CourseId);
    const sub = await subtitle.find({"CourseId":mongoose.Types.ObjectId(req.query.CourseId)});
    //check if this corporate has this course or not
    const cop=await corporateTrainee.findById({_id:req.query.CorporateTraineeId})
    const coursesArray = cop.Registered_Courses;
    console.log(coursesArray)
    for (let i = 0; i < coursesArray.length; i++) {
        //coursesArray1.push(await course.findById({_id:coursesArray[i]},{_id:1}));
        for (let j = 0; i < (sub.length)-1; j++) {
            old= await CorporateTraineeProgress.create({"Corporate_Trainee_Id":req.query.CorporateTraineeId,"SubtitleId":mongoose.Types.ObjectId(sub[j]._id),"CourseId":mongoose.Types.ObjectId(coursesArray[i])});
            }    
    } 
    console.log(sub)
    res.status(200).json(sub);
        }
catch(error){
    res.status(400).json({error:error.message});
 }
        }; 
    



    const corporateViewMyRegisteredCourses = async(req,res) => {

        const corporateTrainee = req.query.CorporateTraineeId;


    try{
    const currTrainee = await corporate_Trainee.findById({_id:corporateTrainee});
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

    const corporateTraineeId = req.query.CorporateTraineeId;


    const {Reported_Problem,Report_Type} = req.body;

    try{
    const result = await reportedProblem.create({Corporate_Trainee_Id:corporateTraineeId,Reported_Problem,Report_Type,Status:"Delivered"});
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
    const resolvedProblems = await reportedProblem.find({Corporate_Trainee_Id:mongoose.Types.ObjectId(corporateTraineeId),Status:"Resolved"}).populate('Trainee_Id');
    const underSupervisionProblems = await reportedProblem.find({Corporate_Trainee_Id:mongoose.Types.ObjectId(corporateTraineeId),Status:"Pending"}).populate('Trainee_Id');
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






    module.exports ={corporateTraineeSendReport,
        fetchCorporateTraineeAllPreviousReports,
        corporateViewMyRegisteredCourses,
        corporateTraineeRegisterCourse,
        addCorporateTrainee,AddNotes,getNotes};