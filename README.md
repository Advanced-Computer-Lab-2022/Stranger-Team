# Stranger-Team
# LearnEd
The aim of our project is to implement a learning website that is user friendly with an ease of navigation to facilitate the online learning experience. 
# Behind This Project 
The main objective behind implementing this project is to help pave the way for us to learn more about developing an interactive website using MERN Stack and help enhance our skills further, preparing us for the real working world. 
# Build Status 
If the user is logged in as an instructor and they are adding a course, the course total hours and the subtitle total hours should be inserted manually since they are not calculated automatically. 
The filter components applied can only filter the results only once and the user can navigate and search through them further.

# Code Style 
Our code style is standard and consistent throughout the entire project. 
# Screenshots 

# Framework Used
The framework used in our project is react.
# Features 
Our website's flow is smooth to navigate through and easy to understand. It is not complicated and everything is laid out in simplicity for the user to be able to understand and doesn't face any problems while using the website.
# Code Exmaples 
A snippet of our code: An admin adding another admin to the system. 
```javascript
const Administrator = require ('../Models/Administrator');
const corporateTrainees = require ('../Models/corporateTrainees');
const {Individual_Trainee} = require ('../Models/Individual Trainee');
const Instructors = require ('../Models/Instructor');
//adding a new Admin
        const addAdmin = async (req, res) => {
        const {Username, Password} = req.body
        let user = await Individual_Trainee.findOne({ Username: req.body.Username });
		if (user)
        return res.status(400).json({error: "User with given Username already exists."})
		user = await corporateTrainees.findOne({ Username: req.body.Username });
		if (user)
        return res.status(400).json({error: "User with given Username already exists."})
		user = await Instructors.findOne({ Username: req.body.Username });
		if (user)
        return res.status(400).json({error: "User with given Username already exists."})
        if(req.body.Password !== req.body.confirmPassword){
            return res.status(400).json({error: "Passwords are not compatible."})
		}
        user = await Administrator.findOne({ Username: req.body.Username });
		if (user)
        return res.status(400).json({error: "User with given Username already exists."})
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
            const salt = await bcrypt.genSalt();
            const hashPassword = await bcrypt.hash(req.body.Password, salt);
            console.log("USERNAME: " + req.body.Username)
            console.log("pass 3ady " + req.body.Password)
            console.log("hashed " + hashPassword)
         //   const admin = await Administrator.create({Username, hashPassword})        
		const admin = await new Administrator({ Username: req.body.Username, Password: hashPassword }).save();
            res.status(200).json(admin)
        }
        catch(error) {
            res.status(400).json({error: error.message})
        }

        };
const express = require("express");
const app = express();
app.post("/adminHome/addAdmin", addAdmin);


```

# Installation 
The following libraries were installed so that the website runs on javascript.

react-stripe-js": "^1.16.1",
    "@stripe/stripe-js": "^1.46.0",
    "alert": "^5.1.3",
    "bcrypt": "^5.1.0",
    "bootstrap": "^5.2.3",
    "crypto": "^1.0.1",
    "dotenv": "^16.0.3",
    "ejs": "^3.1.8",
    "emailer": "^0.0.0",
    "express": "^4.18.2",
    "express-session": "^1.17.3",
    "final-form": "^4.20.7",
    "git": "^0.1.5",
    "install": "^0.13.0",
    "iso-country-currency": "^0.6.0",
    "joi": "^17.7.0",
    "joi-password-complexity": "^5.1.0",
    "jsonwebtoken": "^9.0.0",
    "mdb-react-ui-kit": "^5.1.0",
    "mongoose": "^6.8.1",
    "nodemailer": "^6.8.0",
    "npm": "^9.2.0",
    "projection": "^1.1.0",
    "react": "^18.2.0",
    "react-bootstrap": "^2.6.0",
    "react-icons": "^4.7.1",
    "react-stripe": "^0.1.0",
    "stripe": "^11.5.0"

# API References 
We used a rate exchange API that converts the course's USD price to the user's country currency.
Rate Exchange API: "https://api.exchangerate-api.com/v4/latest/USD"
We also used the stripe API to simulate a payment transaction for the user. 
Stripe API:"https://stripe.com/"

# Tests

# How to Use?
There are four different types of users that can access the website. The user experience differs for each user. The four users are Admin, Instructor, Individual Trainee, and Corporate Trainee. Beginning with the admin, they are elgible to add and view instructors as well as corporate trainees, which otherwise do not have access to their role privilages. Beginning with the Admin Homepage, it is where the admin can choose where to navigate to and what to access next. Admin privilages include adding and removing users; admins can only add other admins, corporate trainees and instructors but not individual trainees, individual trainees will have to sign-up in order to gain access to the use of the website. Admins can also recieve requests from corporate trainees if they wish access to courses; the admin can either grant or block acccess to the corporate trainee for that course. Admins are also allowed to view and add discounts to any course given on the platform/website if there are no discounts previously added to said courses. Additionally, admins recieve reports from the different website users and view as well as edit the status of given reports. There are three report statuses; Delivered, Pending and Resolved. Delivered reports are categorised as unseen reports which are ones that are yet to be opened/viewed by the admin(s). Pending and Resolved reports fall under the category of seen/previously viewed reports. The main difference between pending and resolved reports is that pending reports are ones which have been viewed by the admin but are yet to be solved while resolved reports are ones that have been viewed by the admin and resolved therefore had their status changed to resolved. The admin is allowed to change the status of any sent report to either pending or resolved. Additionally, he can easily filter the view of the reports according to their status to his liking. Admins are granted the merit of delivered, pending and resolved reports separately according to their liking. Admins are also allowed to recieve refund requests from individual trainees for a certain course. They can either accept or reject these requests. If they accept the refund request, an amount equal to the price of the course is refunded to the wallet of the individual trainee that requested the refund, and the course is then removed from the registered courses of said trainee and they will no longer have access to that course. Admins can log in using their given username and password. They are also allowed to change their password but not their username. A navigation bar is placed atop the admin pages in order to facilitate the user experience and elevate the ease of flow of the website allowing the admin an unchallenging environment to use the website. The user experience and navigation differ vastly as in comparison. Firstly, as an instructor one is not allowed certain privilages relevant to the role of the instructor on the website unless they are registered by the admin; in other words instructors cannot sign up and will be given their account information in order to log into the website by the admin. At the beginning, when an instructor logs in for the very first time they are given a contract including the website policies, terms and conditions and are asked to either accept or reject these policies if they wish to continue to use the website. If an instructor rejects the contract they are re-routed to the login page and not granted access to their account. They can log in again and accept the contract in order to gain access to their account as well as its privilages. The instructor homepage includes a display of all their created courses as well as the option to create a new course. The homepage includes the option of filtering through their created courses by either rate, subject or price for ease of navigation. There is also a navigation bar included in all pages to traverse through the website with little to no difficulty. If an instructor wishes to add a new course they can simply click on the button that says so and they will be redirected to a page where they will be asked to insert information relevant to the course and essentially its content; the title of the course, its description, hours, pricing , relevant subtitles and their titles, subtitle hours, links to said subtitles for display purposes, subtitle questions, and subtitle descriptions. A discount can be applied to the course upon creation or can be added later according the instructor's liking. After the course creation the instructor is taken to a page where they can add more subtitles with questions if they wish to do so or they can skip this step and click on done and add more subtitles later; a course must have at least one subtitle and subtitle question upon creation. After clicking on done the Instructor is taken to a new page where they can edit their course exam; they are able to add MCQ questions with a restriction of four options per question and a correct answer. A course exam must have at least 3 questions or more and each course must have an exam. After creating/editing their course exam the instructor is taken back to their homepage where they can once again view their created courses as well as filter through them and create new ones. An instructor can view their account information including their first and last name, their associated email, gender, money owed to them by the other website users otherwise known as individual trainees in case they are registered to their created courses. Instructors are allowed to edit and update their profile information including first name, last name, bio and email. An instructor is allowed to report a problem relevant to the course and this problem can be categorised as type technical, financial or other. The report is sent to the admin and has 3 statuses; delivered, pending and resolved. The instructor can view their reports according to their status; meaning they can view their delivered, pending and resolved reports separately. The delivered reports are ones that have yet to be opened/viewed by the admin, pending ones have been opened by the admin but are yet to be resolved, and resolved reports are ones that have been settled/solved. An instructor can send a followup on any of their unresolved reports in case they wish to do so or if the admin has yet to respond. An instructor is also allowed to change their password. For a corporate trainee and individual trainee, the user experience is similar with minimal differences. Beginning with the similiarities, both types of trainees can access their registered courses' content; watch subtitles, solve their question subtitles, as well as solve a course exam and view its answers as well as their results after finishing it if they are registered to this course. For each registered trainee whether they be a corporate or individual, a progress for each registered course is created that records the development and progression of each trainee in their registered course. The progress increments with the individual/corporate trainee watching the provided course subtitles. The progress references and is strictly relevant to each trainee and their progress in their registered course meaning each trainee has a progress for each of their registered courses. Both trainees have the merit of writing and editing notes relevant to each subtitle and saving them as a PDF file if they wish to do so. Both individual and corporate trainees can report a problem relevant to a course and can view those reports separately according to their status; meaning they can view their delivered, pending and resolved reports separately. The delivered reports are ones that have yet to be opened/viewed by the admin, pending ones have been opened by the admin but are yet to be resolved, and resolved reports are ones that have been settled/solved. A corporate/individual trainee can send a followup on any of their unresolved reports in case they wish to do so or if the admin has yet to respond. A corporate/individual trainee can edit their profile information including their username, email and password. Differences between the individual and corporate trainee arise in their access to the course where the corporate trainee is registered by the admin and has privilages over the individual trainee as they do not have to pay to register for the course but instead only have to request access to it. Such requests are sent to the admin for them to approve of. Individual trainees must pay for the course in order to gain access to it unless it is free. An individual trainee can pay for a course in two ways; either by Visa where they are then taken another page to insert their credit card information and proceed with their payment, however, if they chose to pay by wallet which is where the amount refunded from previous accepted refund requests is added. An individual trainee can request refund for a registered course if  and only if their progress is less than 50%. Both trainees have a navigation bar included in all their pages for ease of navigation and an elevated online learning environment. Lastly, the guest user experience, which allows the non-registered user to navigate through the website and the services it offers which include vieweing the different courses offered on the website as well as the instructors giving these courses. A guest is able sign up and view the website terms, conditions and policies of LearnEd. When signing up, the guest is asked to insert their required information, and then recieves an email for verification. Once they are verified they are free to login and use LearnEd for a better online learning experience.

# Credits
https://www.youtube.com/watch?v=98BzS5Oz5E4&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE
https://www.youtube.com/watch?v=BNN4o4gnSF4
CyberWolves channel on youtube.