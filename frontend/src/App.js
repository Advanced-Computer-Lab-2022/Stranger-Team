import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home1 from './pages/Home1'
import SignIn from './pages/SignIn'
import InstructorCoursePage from './pages/InstructorCoursePage'
import InstructorAddCourse from './pages/InstructorAddCourse'
import Navbar from './components/Navbar'
import CoursesPage from './pages/CoursesPage';
import CourseFilterBySubject from './pages/CourseFilterBySubject';
import CourseSearchByTitle from './pages/CourseSearchByTitle';
import CourseSearchByInstructorName from './pages/CourseSearchByInstructorName';
import CourseFilterByPrice from './pages/CourseFilterByPrice';
import CourseFilterByRate from './pages/CourseFilterByRate';
import CourseFilterBySubjectAndPrice from './pages/CourseFilterBySubjectAndPrice'
import CourseFilterBySubjectAndRating from './pages/CourseFilterBySubjectAndRating'
import CourseFilterBySubjectAndRatingAndPrice from './pages/CourseFilterBySubjectAndRatingAndPrice'

import HomeAdmin from './pages/adminH'; //admin homepage
import InstructorsPage from './pages/instructors';
import CorporateTPage from './pages/corporateTrainees';
import PendingInstructorsPage from './pages/pendingInstructors';
import InstructorProfilePage from './pages/InstructorProfilePage';
import EditMyProfilePage from './pages/EditMyProfilePage'
import Home from './pages/adminHome'; //admins

import CorporateHome from './pages/corporateTraineeHome'
import CurrentCoursePage from './pages/CurrentCoursePage'
import CurrentCoursePageTrainee from './pages/CurrentCoursePageTrainee'
// import CurrentCourseDiscountPage from './pages/CurrentCourseDiscountPage'
import DefineACourseDiscountInstructorPage from './pages/DefineACourseDiscountInstructorPage'
import InstructorAddNewSubtitlePage from './pages/InstructorAddANewSubtitlePage'
import InstructorAddANewCoursePage from './pages/InstructorAddANewCoursePage'
import PasswordReset from './components/passwordReset'
import ForgetPassword from './components/forgetPassword/ForgotPassword'
import ChangePassword from './components/changePassword/ChangePassword'
import CurrentCoursePageCorporateTrainee from './pages/CurrentCoursePageCorporateTrainee'
import InstructorEditMyProfilePage from './pages/InstructorEditMyProfilePage'
import CurrentCourseInstructorPage from './pages/CurrentCourseInstructorPage'
import RadioButtonsRateAnInstructor from './components/RadioButtonsRateAnInstructor'
import TraineeReviewAnInstructor from './components/TraineeReviewAnInstructor'
import MyRegisteredCoursesTraineePage from './pages/MyRegisteredCoursesTraineePage'
import InstructorAddANewCourseSubtitlePageDirectlyAfterAddingCourse from './pages/InstructorAddANewCourseSubtitlePageDirectlyAfterAddingCourse'
import CurrentCourseSubtitlesPageTrainee from './pages/CurrentCourseSubtitlesPageTrainee'
import TraineeReportAProblemPage from './pages/TraineeReportAProblemPage'
import InstructorReportAProblemPage from './pages/InstructorReportAProblemPage'

import CorporateTraineeNotes from './components/CorporateTraineeAddNotes'
//imports for quiz
import Main from './pages/mainForQuiz';
import Quiz from './components/Quiz';
import Result from './components/Result';
import CorporateTraineeReportAProblemPage from './pages/CorporateTraineeReportAProblemPage'
import MyRegisteredCoursesCorporateTraineePage from './pages/MyRegisteredCoursesCorporateTraineePage'
import MyQuizzes from './components/ViewMyQuizzesCorporateTrainee'

import MyCertificate from './pages/MyCertificate'
import TraineeRefund from './components/TraineeRequestARefund'




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbar/> */}
      <div className="pages">
        <Routes>
        <Route
        path="/adminHome"
        element={<HomeAdmin/>}
        />

        <Route
        path="/corporateTraineeHome"
        element={<CorporateHome/>}
        />

        <Route
        path="/instructors"
        element={<InstructorsPage/>}
        />

        <Route
        path="/admins"
        element={<Home />}
        />

        <Route
        path="/CourseFilterBySubjectAndPrice"
        element={<CourseFilterBySubjectAndPrice />}
        />

        
        <Route
        path="/InstructorAddANewCoursePage"
        element={<InstructorAddANewCoursePage />}
        />

        
        <Route
        path="/InstructorAddMoreSubtitles"
        element={<InstructorAddANewCourseSubtitlePageDirectlyAfterAddingCourse />}
        />

        

        

        <Route
        path="/EditMyProfile"
        element={<EditMyProfilePage />}
        />

        <Route
        path="/CurrentCourse"
        element={<CurrentCoursePage />}
        />

        <Route
        path="/CurrentCourseInstructorPage"
        element={<CurrentCourseInstructorPage />}
        />

        
        <Route
        path="/RadioButtonsRateAnInstructor"
        element={<RadioButtonsRateAnInstructor />}
        />

        
        <Route
        path="/TraineeReviewAnInstructor"
        element={<TraineeReviewAnInstructor />}
        />

        <Route
        path="/TraineeReportAProblemPage"
        element={<TraineeReportAProblemPage />}
        />

        <Route
        path="/InstructorReportAProblemPage"
        element={<InstructorReportAProblemPage />}
        />

        <Route
        path="/CorporateTraineeReportAProblemPage"
        element={<CorporateTraineeReportAProblemPage />}
        />

        
        <Route
        path="/MyRegisteredCoursesTrainee"
        element={<MyRegisteredCoursesTraineePage />}
        />

        
        <Route
        path="/MyRegisteredCoursesCorporateTraineePage"
        element={<MyRegisteredCoursesCorporateTraineePage />}
        />

        
        <Route
        path="/CurrentCourseSubtitlesPageTrainee"
        element={<CurrentCourseSubtitlesPageTrainee />}
        />

          <Route
            path="/forgetPassword"
            element={<ForgetPassword/>}
            />
            <Route
            path="/passwordReset/:id/:token"
            element={<PasswordReset/>}
            />
            <Route
            path="/changePassword"
            element={<ChangePassword/>}
            />


        <Route
        path="/CurrentCoursePageTrainee"
        element={<CurrentCoursePageTrainee />}
        />
        

        <Route
        path="/CurrentCoursePageCorporateTrainee"
        element={<CurrentCoursePageCorporateTrainee />}
        />

        
        <Route
        path="/DefineACourseDiscountInstructorPage"
        element={<DefineACourseDiscountInstructorPage />}
        />

        
        <Route
        path="/InstructorEditMyProfilePage"
        element={<InstructorEditMyProfilePage />}
        />

        
        

        <Route
        path="/AddANewSubtitle"
        element={<InstructorAddNewSubtitlePage />}
        />

        {/* <Route
        path="/CurrentCourseDiscountPage"
        element={<CurrentCourseDiscountPage />}
        /> */}

        <Route
        path="/MyProfile/"
        element={<InstructorProfilePage />}
        />
        
        <Route
        path="/CourseFilterBySubjectAndRating"
        element={<CourseFilterBySubjectAndRating />}
        />

        <Route
        path="/CourseFilterBySubjectAndRatingAndPrice"
        element={<CourseFilterBySubjectAndRatingAndPrice />}
        />


        <Route
        path="/corporateTrainees"
        element={<CorporateTPage/>}
        />

        <Route
        path="/pendingInstructors"
        element={<PendingInstructorsPage/>}
        />

          <Route
          path="/"
          element={<SignIn />}
          /> 
          <Route
          path="/InstructorCoursePage"
          element={<InstructorCoursePage />}
          /> 
          <Route
          path="/InstructorAddCourse"
          element={<InstructorAddCourse />}
          /> 
          <Route path="/Home/"
          element={<Home1 />}
          />
          <Route path="/Courses"
          element={<CoursesPage />}/>
          <Route
          path="/CourseSearchByTitle"
          element={<CourseSearchByTitle/>}
          />

          <Route path="/CourseFilterByPrice"
          element={<CourseFilterByPrice />}
          />
          <Route path="/CourseFilterByRate"
          element={<CourseFilterByRate />}
          />

        <Route
        path="/CourseSearchByInstructorName"
        element={<CourseSearchByInstructorName/>}
        />
          <Route path="/CoursesFilterBySubject"
          element={<CourseFilterBySubject />}/>

          



       <Route
        path="/mainForQuiz"
        element={<Main/>}
        />

        <Route
        path="/quiz"
        element={<Quiz />}
        />
        <Route
        path="/MyQuizzesCorporateTrainee"
        element={<MyQuizzes/>}
        />


        <Route
        path="/results"
        element={<Result/>}
        />
        <Route
        path="/addNotes"
        element={<CorporateTraineeNotes />}
        />
        <Route
        path="/CorporateTraineeCertificate"
        element={<MyCertificate />}
        />
        <Route
        path="/TraineeRefund"
        element={<TraineeRefund />}
        />





        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
