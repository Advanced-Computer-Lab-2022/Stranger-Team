
        const Administrator = require ('../Models/Administrator');
        const pendingInstructors = require ('../Models/pendingInstructors');
        const corporateTrainees = require ('../Models/corporateTrainees');
        const Instructors = require ('../Models/Instructor');
        const InstructorReports = require ('../Models/InstructorReports');
        const TraineeReports = require ('../Models/TraineeReports');
        const CTraineeReports = require ('../Models/CorporateTraineeReports');

        const mongoose = require('mongoose');
    const { findOneAndUpdate } = require('../Models/pendingInstructors');
    const courseRequests = require("../Models/CourseRequests");



        //to view admins from instructors
        const viewAdmins = async (req, res) => {
        const data = await Administrator.find({})
        res.status(200).json(data)
        // console.log(data)
        
        };



        //adding a new Admin
        const addAdmin = async (req, res) => {
        const {Username, Password} = req.body

        let emptyFields = []
        if (!Username) {
            emptyFields.push('Username')
        }

        if (!Password) {
            emptyFields.push('Password')
        }

        if(emptyFields.length > 0) {
            return res.status(400).json({error: 'Please fill in the missing fields.', emptyFields})
        }



        try {
            const admin = await Administrator.create({Username, Password})
            res.status(200).json(admin)
        }
        catch(error) {
            res.status(400).json({error: error.message})
        }
        
        // const data = req.body 
        // console.log(data)
        // if (!data) {
        //   res.status(400).json('Please insert in required text fields.')
        //   throw new Error('Please insert in required text fields.')
        // }
        // else {
        // const insertData = Administrator.create(req.body)
        // res.status(200).json('Admin added successfully.')
        // }

        };



        //deleting an admin

        const deleteAdmin = async (req, res) => {
        const { id } = req.params

        const deletedAdmin = await Administrator.findOneAndDelete({_id: id})

        if(!deletedAdmin) {
            return res.status(400).json({error: 'No such admin'})
        }

        res.status(200).json(deletedAdmin)


        // const deleteAdmin = async (req, res) => {
        //   const data = await Administrator.findById(req.params.id)
        //   console.log("hereeee")
        //   if (!data) {
        //     res.status(400).json('Record not found.')
        //     throw new Error('Record not found.')
        //   }
        //   await data.remove()
        //   res.status(200).json({id: req.params.id})
        // }
        }





        //updating admin
        const updateAdmin = async (req, res) => {
        const admoona = await Administrator.findById(req.params.id) 
        if (!admoona) {
            res.status(400).json('Admin not found')
            throw new Error('Admin not found.')
        }

        const updatedAdmin = await Administrator.findByIdAndUpdate(req.params.id, req.body, {new : true})
        res.status(200).json(updatedAdmin)

        }




        //to view pending requests from instructors
        const viewPendingInstructors = async (req, res) => {
        const data = await pendingInstructors.find({})
        res.status(200).json(data)
        console.log(data)


        // const viewPendingInstructors = async (req, res) => {
        //   const data = await pendingInstructors.find({})
        //   console.log(data)
        //   if (data.length == 0) {
        //     res.status(400).json("No records found.")
        //   }
        //   res.status(200).json(data)
        // };
        }



        //adding a pending instructor
        const registerPendingInstructor = async (req, res) => {
        const {Username, Password, First_Name, Last_Name, Email, Gender} = req.body

        let emptyFields = []
        if (!Username) {
            emptyFields.push('Username')
        }

        if (!Password) {
            emptyFields.push('Password')
        }

        if (!First_Name) {
            emptyFields.push('First_Name')
        }

        if (!Last_Name) {
            emptyFields.push('Last_Name')
        }

        if (!Email) {
            emptyFields.push('Email')
        }

        if (!Gender) {
            emptyFields.push('Gender')
        }

        if(emptyFields.length > 0) {
            return res.status(400).json({error: 'Please fill in the missing fields.', emptyFields})
        }



        try {
            const pendingI = await pendingInstructors.create({Username, Password, First_Name, Last_Name, Email, Gender})
            res.status(200).json(pendingI)
        }
        catch(error) {
            res.status(400).json({error: error.message})
        }
        // const registerPendingInstructor = async (req,res) => {
        //   const data = pendingInstructors.create(req.body);
        //   res.status(200).json('Pending instructor added successfully.')
        }



        //deleting a pending instructor

        const deletePendingInstructor = async (req, res) => {
        const { id } = req.params

        const deletedPendingInstructor = await pendingInstructors.findOneAndDelete({_id: id})

        if(!deletedPendingInstructor) {
            return res.status(400).json({error: 'No such pending Instructor'})
        }

        res.status(200).json(deletedPendingInstructor)

        // const deletePendingInstructor = async (req, res) => {
        //   const data = await pendingInstructors.findById(req.params.id)
        //   console.log(data)
        //   if (!data) {
        //     res.status(400).json('Record not found.')
        //     throw new Error('Record not found.')
        //   }
        //   await data.remove()
        //   res.status(200).json({id: req.params.id})
        }



        //to view instructors
        const viewInstructors = async (req, res) => {
        const data = await Instructors.find({})
        console.log(data)
        if (data.length == 0) {
            res.status(400).json("No records found.")
        }
        res.status(200).json(data)
        };



        //adding a pending instructor
        const addPendingInstructor = async (req, res) => {
        const data = await pendingInstructors.findById(req.params.id)
        const {Username, Password, First_Name, Last_Name, Email, Gender} = data
        const setData = Instructors.create({Username, Password, First_Name, Last_Name, Email, Gender})

        res.json(Username)

        }


        //adding an instructor

        const addInstructor = async (req, res) => {
        const {Username, Password, First_Name, Last_Name, Email, Gender,Bio} = req.body

        let emptyFields = []
        if (!Username) {
            emptyFields.push('Username')
        }

        if (!Password) {
            emptyFields.push('Password')
        }

        if (!First_Name) {
            emptyFields.push('First_Name')
        }

        if (!Last_Name) {
            emptyFields.push('Last_Name')
        }

        if (!Email) {
            emptyFields.push('Email')
        }

        if (!Gender) {
            emptyFields.push('Gender')
        }
        if(!Bio){
            emptyFields.push('Bio')
        }

        if(emptyFields.length > 0) {
            console.log(emptyFields.length)
            return res.status(400).json({error: 'Please fill in the missing fields.', emptyFields})
        }



        try {
            const instructor = await Instructors.create({Username, Password, First_Name, Last_Name, Email, Gender,Bio})
            res.status(200).json(instructor)
        }
        catch(error) {
            res.status(400).json({error: error.message})
        }
        // const addInstructor = async (req, res) => {
        //   const data = Instructors.create(req.body)
        //   res.status(200).json('Instructor added successfully.')
        // }
        }




        //deleting an instructor

        const deleteInstructor = async (req, res) => {
        const { id } = req.params

        const deletedInstructor = await Instructors.findOneAndDelete({_id: id})

        if(!deletedInstructor) {
            return res.status(400).json({error: 'No such pending Instructor'})
        }

        res.status(200).json(deletedInstructor)
        // const deleteInstructor = async (req, res) => {
        //   const data = await Instructors.findById(req.params.id)
        //   console.log(data)
        //   if (!data) {
        //     res.status(400).json('Record not found.')
        //     throw new Error('Record not found.')
        //   }
        //   await data.remove()
        //   res.status(200).json({id: req.params.id})
        }


        //updating an instructor
        const updateInstructor = async (req, res) => {
        const admoona = await Instructors.findById(req.params.id) 
        if (!admoona) {
            res.status(400).json('Admin not found')
            throw new Error('Admin not found.')
        }

        const updatedAdmin = await Instructors.findByIdAndUpdate(req.params.id, req.body, {new : true})
        res.status(200).json(updatedAdmin)

        }



        //to view corporate trainees
        const viewCT = async (req, res) => {
        const data = await corporateTrainees.find({})
        res.status(200).json(data)
        console.log(data)

        // const viewCT = async (req, res) => {
        //   const data = await corporateTrainees.find({})
        //   console.log(data)
        //   if (data.length == 0) {
        //     res.status(400).json("No records found.")
        //   }
        //   res.status(200).json(data)
        // };
        }



        //adding a corporate Trainee

        const addCorporateTrainee = async (req, res) => {
        const {Username, Password, First_Name, Last_Name, Email, Gender, Corporate} = req.body

        let emptyFields = []
        if (!Username) {
            emptyFields.push('Username')
        }

        if (!Password) {
            emptyFields.push('Password')
        }

        if (!First_Name) {
            emptyFields.push('First_Name')
        }

        if (!Last_Name) {
            emptyFields.push('Last_Name')
        }

        if (!Email) {
            emptyFields.push('Email')
        }

        if (!Gender) {
            emptyFields.push('Gender')
        }

        if (!Corporate) {
            emptyFields.push('Corporate')
        }

        if(emptyFields.length > 0) {
            return res.status(400).json({error: 'Please fill in the missing fields.', emptyFields})
        }



        try {
            const ct = await corporateTrainees.create({Username, Password, First_Name, Last_Name, Email, Gender, Corporate,"Role":"Corporate Trainee"})
            res.status(200).json(ct)
        }
        catch(error) {
            res.status(400).json({error: error.message})
        }

        // const addCorporateTrainee = async (req, res) => {
        //   const data = corporateTrainees.create(req.body)
        //   res.status(200).json('Trainee added.')
        // }
        }


        //deleting a corporate trainee

        const deleteCT = async (req, res) => {
        const { id } = req.params

        const deletedCT = await corporateTrainees.findOneAndDelete({_id: id})

        if(!deletedCT) {
            return res.status(400).json({error: 'No such trainee.'})
        }

        res.status(200).json(deletedCT)
        // const deleteCT = async (req, res) => {
        //   const data = await corporateTrainees.findById(req.params.id)
        //   console.log(data)
        //   if (!data) {
        //     res.status(400).json('Record not found.')
        //     throw new Error('Record not found.')
        //   }
        //   await data.remove()
        //   res.status(200).json({id: req.params.id})
        // }
        }


        //updating a corporate trainee
        const updateCT = async (req, res) => {
        const admoona = await corporateTrainees.findById(req.params.id) 
        if (!admoona) {
            res.status(400).json('Admin not found')
            throw new Error('Admin not found.')
        }

        const updatedAdmin = await corporateTrainees.findByIdAndUpdate(req.params.id, req.body, {new : true})
        res.status(200).json(updatedAdmin)

        }


        //REPORTS
        // const viewInstructorReports = async (req, res) => {
        //     const data = await InstructorReports.find({})
        //     console.log(data)
        //     if (data.length == 0) {
        //         res.status(400).json("No reports found.")
        //     }
        //     res.status(200).json(data)
        //     };

        // const fetchInstructorAllPendingReports = async(req,res) => {
        
        //     try{
        //     const pendingReports = await InstructorReports.find({Status:"Pending"}).populate()
        //     res.status(200).json(pendingReports)
        //     // for (let i = 0; i < pendingProblems.length; i++) {
        //     //             pendingReports.push(pendingProblems[i]);
        //     //             console.log(pendingReports)
        //     // }
        
        // }
        //     catch(error){
        //         res.status(400).json({error:error.message});
        //     }
        // }


        const fetchSeenReports = async(req,res) => {

            const allReports=[];
        
            try{
            const iResolvedProblems = await InstructorReports.find({Status:"Resolved"}).populate();
            const iPendingProblems = await InstructorReports.find({Status:"Pending"}).populate();

            const tResolvedProblems = await TraineeReports.find({Status:"Resolved"}).populate();
            const tPendingProblems = await TraineeReports.find({Status:"Pending"}).populate();

            const ctResolvedProblems = await CTraineeReports.find({Status:"Resolved"}).populate();
            const ctPendingProblems = await CTraineeReports.find({Status:"Pending"}).populate();

            for (let i = 0; i < iResolvedProblems.length; i++) {
                        allReports.push(iResolvedProblems[i]);
                }
        
            for (let i = 0; i < iPendingProblems.length; i++) {
                        allReports.push(iPendingProblems[i]);
                }


                for (let i = 0; i < tResolvedProblems.length; i++) {
                    allReports.push(tResolvedProblems[i]);
            }

        for (let i = 0; i < tPendingProblems.length; i++) {
                    allReports.push(tPendingProblems[i]);
            }


            for (let i = 0; i < ctResolvedProblems.length; i++) {
                        allReports.push(ctResolvedProblems[i]);
                }
        
            for (let i = 0; i < ctPendingProblems.length; i++) {
                        allReports.push(ctPendingProblems[i]);
                }
        
        
            console.log(allReports)
            res.status(200).json(allReports)
            }
            catch(error){
                res.status(400).json({error:error.message});
            }
        }


        const fetchAllDeliveredReports = async(req,res) => {
        const allReports = [];
            try{
            const iDeliveredReports = await InstructorReports.find({Status:"Delivered"}).populate()
            const tDeliveredReports = await TraineeReports.find({Status:"Delivered"}).populate()
            const ctDeliveredReports = await CTraineeReports.find({Status:"Delivered"}).populate()
            for (let i = 0; i < iDeliveredReports.length; i++) {
                allReports.push(iDeliveredReports[i]);
        }


        for (let i = 0; i < tDeliveredReports.length; i++) {
            allReports.push(tDeliveredReports[i]);
    }

    for (let i = 0; i < ctDeliveredReports.length; i++) {
        allReports.push(ctDeliveredReports[i]);
    }
            res.status(200).json(allReports)
            // for (let i = 0; i < pendingProblems.length; i++) {
            //             pendingReports.push(pendingProblems[i]);
            //             console.log(pendingReports)
            // }
            
        
        }
            catch(error){
                res.status(400).json({error:error.message});
            }
        }

        const viewIReport = async (req, res) => {
            const RID = req.query.RID;
            //console.log(repId)

            if(RID)
            {
                const currRep = await InstructorReports.find({_id:RID}).populate();
            // console.log(currRep.length)
                if (currRep.length > 0) {
                // console.log("here0")
                    res.status(200).json(currRep)
                }

                if (currRep == 0) {
                // console.log("here1")
                    const currRep1 = await TraineeReports.find({_id:RID}).populate();
                    if (currRep1.length > 0) {
                        res.status(200).json(currRep1)
                    }

                    if(currRep1.length == 0 ) {
                        const currRep2 = await CTraineeReports.find({_id:RID}).populate();
                        res.status(200).json(currRep2)
                    }
                }
            }
            
        } 
        


        //updating status from delivered to pending
        const updateReportStatus = async (req, res) => {
        const RID = req.query.RID

        if(RID)
        {
            const currRep = await InstructorReports.find({_id:RID}).populate();
            // console.log(currRep.length)
            if (currRep.length > 0) {
                const updatedIR = await InstructorReports.findByIdAndUpdate({_id:RID}, {Status:"Pending"}, {new : true})
                res.status(200).json(updatedIR)
            }

            if (currRep == 0) {
                // console.log("here1")
                const currRep1 = await TraineeReports.find({_id:RID}).populate();
                if (currRep1.length > 0) {
                    const updatedTR = await TraineeReports.findByIdAndUpdate({_id:RID}, {Status:"Pending"}, {new : true})
                    res.status(200).json(updatedTR)
                }

                if(currRep1.length == 0 ) {
                    const updatedCTR = await CTraineeReports.findByIdAndUpdate({_id:RID}, {Status:"Pending"}, {new : true})
                res.status(200).json(updatedCTR)
                }
            }
        }

        }




        const updateR = async (req, res) => {
            const RID = req.query.RID
            const {Status} = req.body
            let emptyFields = []
            if (!Status) {
            emptyFields.push('Status')
            }

            if(emptyFields.length > 0) {
            return res.status(400).json({error: 'Please fill in the missing fields.', emptyFields})
        }
        

        if (Status) {if(RID)
            {
            const currRep = await InstructorReports.find({_id:RID}).populate();
            // console.log(currRep.length)
            if (currRep.length > 0) {
                const updatedIR = await InstructorReports.findByIdAndUpdate({_id:RID},{Status}, {new : true})
                res.status(200).json(updatedIR)
            }
    
            if (currRep == 0) {
                // console.log("here1")
                const currRep1 = await TraineeReports.find({_id:RID}).populate();
                if (currRep1.length > 0) {
                    const updatedTR = await TraineeReports.findByIdAndUpdate({_id:RID}, {Status}, {new : true})
                    res.status(200).json(updatedTR)
                }
    
                if(currRep1.length == 0 ) {
                    const updatedCTR = await CTraineeReports.findByIdAndUpdate({_id:RID}, {Status}, {new : true})
                res.status(200).json(updatedCTR)
                }
            }
        }

        }}


        const adminResponse = async (req, res) => { 
            const RID = req.query.RID
            const {Admin_Response} = req.body
            let emptyFieldz = []
        if (!Admin_Response) {
            emptyFieldz.push('Admin_Response')
            }

            if(emptyFieldz.length > 0) {
                return res.status(400).json({error1: 'Please fill in the missing fields.', emptyFieldz})
            }
    

            if (Admin_Response) { if(RID)
                {
                const currRep = await InstructorReports.find({_id:RID}).populate();
                // console.log(currRep.length)
                if (currRep.length > 0) {
                    const updatedIR = await InstructorReports.findByIdAndUpdate({_id:RID},{Admin_Response}, {new : true})
                    res.status(200).json(updatedIR)
                }
        
                if (currRep == 0) {
                    // console.log("here1")
                    const currRep1 = await TraineeReports.find({_id:RID}).populate();
                    if (currRep1.length > 0) {
                        const updatedTR = await TraineeReports.findByIdAndUpdate({_id:RID}, {Admin_Response}, {new : true})
                        res.status(200).json(updatedTR)
                    }
        
                    if(currRep1.length == 0 ) {
                        const updatedCTR = await CTraineeReports.findByIdAndUpdate({_id:RID}, {Admin_Response}, {new : true})
                    res.status(200).json(updatedCTR)
                    }
                }
            }}
        
    }
            
           const deleteRequest = async (req, res) => {
        const { id } = req.params

        const deletedRequest = await courseRequests.findOneAndDelete({_id: id})

        if(!deletedRequest) {
            return res.status(400).json({error: 'No such request'})
        }

        res.status(200).json(deletedRequest)
        }


        const grantAccess = async (req, res) => {
            const { id } = req.params //id of the request
            const request = await courseRequests.findById({_id:id}).populate();
            console.log(request)
            const courseId = request.CourseId;
            const traineeId = request.CorporateTraineeId;
            const currTrainee =  await corporateTrainees.findById({_id:traineeId}).populate();
            const updatedArray = currTrainee.Registered_Courses;
        // console.log(updatedArray);
            updatedArray.push(courseId);
        // console.log(updatedArray);
        

            try{
            const updatedTrainee =  await corporateTrainees.findByIdAndUpdate({_id:traineeId},{Registered_Courses:updatedArray},{new:true});
            console.log(updatedTrainee)
            res.status(200).json(updatedTrainee)
            }
            catch(error){
                res.status(400).json({error:error.message});
            }
        }
        


        const viewRequests = async (req, res) => {
            const data = await courseRequests.find({})
            console.log(data)
            if (data.length == 0) {
                res.status(400).json("No new requests.")
            }
            res.status(200).json(data)
            };
        
        module.exports = {addAdmin, addCorporateTrainee, viewPendingInstructors, registerPendingInstructor, addInstructor, deletePendingInstructor, viewAdmins, deleteAdmin, viewInstructors, deleteInstructor, viewCT, deleteCT, updateAdmin, updateInstructor, updateCT, addPendingInstructor, fetchSeenReports, fetchAllDeliveredReports, viewIReport, updateReportStatus, updateR, adminResponse, deleteRequest, grantAccess, viewRequests}