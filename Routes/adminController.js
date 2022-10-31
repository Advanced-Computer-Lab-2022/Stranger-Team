
    const Administrator = require ('../Models/Administrator');
    const pendingInstructors = require ('../Models/pendingInstructors');
    const corporateTrainees = require ('../Models/corporateTrainees');
    const Instructors = require ('../Models/Instructor');





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
        console.log(emptyFields.length)
        return res.status(400).json({error: 'Please fill in the missing fields.', emptyFields})
    }



    try {
        const instructor = await Instructors.create({Username, Password, First_Name, Last_Name, Email, Gender})
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
        const ct = await corporateTrainees.create({Username, Password, First_Name, Last_Name, Email, Gender, Corporate})
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


    module.exports = {addAdmin, addCorporateTrainee, viewPendingInstructors, registerPendingInstructor, addInstructor, deletePendingInstructor, viewAdmins, deleteAdmin, viewInstructors, deleteInstructor, viewCT, deleteCT, updateAdmin, updateInstructor, updateCT, addPendingInstructor}