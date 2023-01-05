<h1> ✨LEARNED - Online Learning System✨ </h1>
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#motivation">Motivation </a>
    </li>
    <li>
      <a href="#build-status">Build Status</a>
    </li>
    <li><a href="#code-style">Code Style</a></li>
    <li><a href="#screenshots">Screenshots</a></li>
    <li><a href="#framework-used">Framework Used</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#codeexamples">Code Examples</a></li>
    <li><a href="#installations">Installations</a></li>
         <ul>
        <li><a href="#how-to-run-the-backend">how to run backend </a></li>
      </ul>
     <ul>
        <li><a href="#how-to-run-the-frontend">how to run frontend</a></li>
      </ul>
    <li><a href="#api-reference">Api Reference </a></li>
     <li><a href="#tests">Tests</a></li>
     <li><a href="#how-to-use">How to use?</a></li>
    <li><a href="#contribute">Contribute</a></li>
    <li><a href="#license">License</a></li>
  
 
  </ol>
</details>

## Motivation
LEARNED is a university project for CSEN704 - 
Advanced Computer Lab course at the GUC, the main purpose of 
the project was to build an online learning platform
system, where users of the web application can search for course,
register and attend courses. Moreover, you can use the web application
as an instructor to teach courses.


## Build Status
* When user is signing up or signing in, the feature of hiding/showing password is not availabe, While the show/hide icon is misused in one of the admin pages.
* There's no navigation buttons throughout the whole website neither back nor forth ones.
* Search bar should only be present in course page so user can search not in the nav bar in the whole website.
* Navbar does not include a link to navigate to courses of the website.
*  While instructor creating a new course,he inserts all subtitles hours and course hours while it should be calculated from subtitle videos automatically.
*  There's no footer present in the website,the footer should contain general informations about the website(About,Contact us,T&C, Help and support ,Language,...).
*  Courses containers have different sizes and not consisitent.
*  Filter Component should be placed in a fixed side bar on the left to be easier for better usability,Also filtring prices should be within a range(min and max price) not exact value.Filtring subjects should not be an input field to prevent user memorization, it should be check box or drop down menu with all subjects present in the database.The features of the filter component should work separately, we do not need to fill all of them in order to filter the courses.
*  There are a lot of pages containing a lot of white space while it could be better if it was placed in a side bar or navigation bar like the wallet or balance of users.
*  There's no sidebar present in this website while it would be better for UI/UX as a lot of navigations would present like : Trainees' Certificates and Exams with the grade and answers if it was solved, Wallet Balance,...
* The clickable instructor name that navigates the instructor to his page should have a different feature indicating that it is clickable(different color, underlined...).
* The positive act like for example paying for a course should be at the top of the page not at the bottom. Also, negative act like refund or report should be placed at the bottom of the page not at the top.
* Fonts througout the website are not pleasent for eyes as some are in smaller size than it should be and vice versa.
* The trainee course page has a container filled with buttons creating an unpleasant look for the user.  These buttons could have been placed in better positions (side bar, navbar, footer...), depending on the button function.
* Instructor cannot see any reviews written about him by any other user or even the ratings.
* Admin home page does not contain any statistics like number of trainees or instructors joined or the profit of a certain time .
* Indvidual/Corporate Trainee when solving subtitle question,they can see the answers before solving, also when they solve the question the answer appear and the choices disappear.
* There's no Contract for instructor before adding a course for the first time.


## Code Style
* Our Code style is standard and simple.

## Screenshots
1️. Home Page
![HOME](https://github.com/Advanced-Computer-Lab-2022/Stranger-Team/blob/main/Screenshot%202023-01-05%20at%2011.23.28%20PM.png)

2. Sign up Page
![SIGN UP](https://github.com/Advanced-Computer-Lab-2022/Stranger-Team/blob/main/Screenshot%202023-01-05%20at%2011.23.39%20PM.png)

3. Login Page
![LOGIN](https://github.com/Advanced-Computer-Lab-2022/Stranger-Team/blob/main/Screenshot%202023-01-05%20at%2011.23.32%20PM.png)

4. Payment method
 ![PAYMENT](https://github.com/Advanced-Computer-Lab-2022/Stranger-Team/blob/main/Screenshot%202023-01-05%20at%2011.34.54%20PM.png)
 
5. Admin Home
 ![ADMIN](https://github.com/Advanced-Computer-Lab-2022/Stranger-Team/blob/main/Screenshot%202023-01-05%20at%2011.53.38%20PM.png)
 
## Framework Used
This web application was build with MERN stack:

- MongoDB as our NoSQL database
- ExpressJS as our NodeJS wrapper
- ReactJS for our view library
- NodeJS for server-side JS runtime enviroment

Additional libraries used:

- React-BootStrap - a utility based CSS library
- BootStrap- a utility based CSS library
- Axios - promise-based http client
- Stripe - payment gateway
- jsonwebtoken
- bcryptjs
- mongoose - Object Document Mapper (ODM) of choice
- 
## Features

- individual trainee /corporate trainee can see his/her progress in the course as a percentage of how much of the course has been completed so far and receive a certificate as a PDF after completing the course via email
- A trainee could view the most popular courses followed by other courses once he logs in to his account.
- UI is so simple and not complicated

## Code Examples

A snippet of our code: Getting the progress of an individual/corporate Trainee in an already registered course. 
```javascript
const mongoose = require('mongoose');
const express = require("express");
const projection = require('projection');
let nodemailer = require('nodemailer');
const path = require('path');
const subtitleQuestion = require('../Models/SubtitleQuestion');
const CorporateTraineeProgress=require("../Models/TraineeProgress");


onst router = require("express").Router();
const session = require('express-session');
router.use(session( 
	{
	secret : 'secret-key',
	resave : false ,
	saveUninitialized : true,
	}));
  
      const checkFinished=async(req,res)=>{
                let f=false
                const traineeId = req.session.user._id;
                try{
                var finished=await CorporateTraineeProgress.find({"CourseId":mongoose.Types.ObjectId(req.query.CourseId),"Trainee_Id":traineeId},     {Finished:1,_id:0})
                f=finished[0].toJSON();
                const ff=f.Finished

                console.log(ff);
                res.status(200).json(ff);
            }
                catch(error){
                res.status(400).json({error:error.message});

                }
            
            } 
          module.exports ={checkFinished}  
            
```
## Installations

1. Get a free API Key at [https://localhost7007.com](https://example.com)
2. Clone the repository 
   ```sh
   git clone https://github.com/Advanced-Computer-Lab-2022/Stranger-Team

- Make sure you have [NodeJS](https://nodejs.org/en/) installed on your machine

  You can check by running

         node -v

  in your terminal to make sure NodeJS is setup correctly

- Make sure to include .env file in your directories

### How to run the frontend:

1.  In your terminal navigate to

         /frontend/src

2.  Install npm by running

         npm install

3.  Install required packages by running

         npm install

4.  Spin up the development server using

          npm start server

    open your browser at http://localhost:3000

### How to run the backend:


1. In your terminal Install nodemon by running

         npm i -g nodemon

2.  Install required packages by running

         npm install

3.  Spin up the development backend using

          npm start server

    It will run on http://localhost:4000

## API Reference 

1. [Axios](https://axios-http.com/docs/intro) for communication between backend and frontend
2. [Stripe](https://stripe.com/docs/js) for online Payments.
3. [Nodemailer](https://nodemailer.com/about/) for sending emails to users
4. 
5. (GET)
6.  ## Getting All Admins
### Request

`GET /adminHome/admins`

    curl -i -H 'Accept: application/json' http://localhost:4000/adminHome/admins
    
### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2
    []

6. (POST)

 ## Trainee Add Notes

### Request

`POST /fetchCorporateTraineeAddNotes`

    curl -i -H 'Accept: application/json' -d 'Notes=HIIIII' http://localhost:4000/fetchCorporateTraineeAddNotes

### Response

    HTTP/1.1 201 Created
    Status: 200 Created
    Connection: close
    Content-Type: application/json

    {"id":1,"Notes":"HIIIII"}

8. (PUT)
## Updating status from delivered to pending

### Request

`PUT /updatePending`

    curl -i -H 'Accept: application/json' -X PUT http://localhost:4000/updatePending

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:31 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json

    {"id":1,"RID":"true"}

## Tests
- Postman can be used to test the functionality of different API endpoints make sure to attach bearer token if endpoint requires token
- Any browser can be used to test the functionality of the frontend webpages and web compenents 

## How to use?
What can you do on the website

- Login/Signup to the website

- Go to the admin dashboard if signed in with admin account

  - Create Users (Instructor, CorpotateTrainee, Admin)
  - Set course promotion
  - View and grant access to course requests
  - Accept or Decline course's refund requests
  - View reported problems and mark resolved or pending

- Go to the Individual Trainee home if signed in with Individual Trainee account

  - Search for a course
  - Choose a course 
  - View Course details if signed in
  - Register in a course and pay for it
  - Enter visa details
  - Confirm payment to be enrolled
  - Rate
  - Add review
  - Add Report
  - Watch videos
  - Take exams

- Go to the Corporate Trainee home if signed in with Corporate Trainee account
    - Rate 
    - Add review
    - Add Report
    - Watch videos
    - Take exams
    - Request access to specific course

- Go to the Instructor home if signed in with Instructor account

  - Create Course
  - Create exams
  - Add Report
  - Upload Videos
  - Update personal informations


  - Update your password

  - Logout

## Contribute 
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are *greatly appreciated*.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch
            
             git checkout -b BranchName
3. Commit your Changes 
           
            git commit -m 'message'
4. Push to the Branch 

            git push origin BranchName
5. Open a Pull Request

## License
Apache 2.0
## Credits
✨[https://wwww.youtube.com/NetNinga](https://www.youtube.com/results?search_query=net+ninga)
✨[https://wwww.ReactBootStrap.com](https://react-bootstrap.github.io/)
✨[https://wwww.youtube.com/ReactRatings](https://youtu.be/nErdlbLWqtA)
✨[https://wwww.youtube.com/Stripe](https://youtu.be/1r-F3FIONl8)

