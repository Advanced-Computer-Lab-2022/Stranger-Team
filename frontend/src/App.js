import {BrowserRouter,Navigate,Routes,Route} from 'react-router-dom'

import Main2 from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import EmailVerify from "./components/EmailVerify";
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


//imports for quiz
import Main from './pages/mainForQuiz';
import Quiz from './components/Quiz';
import Result from './components/Result';
import CorporateTraineeReportAProblemPage from './pages/CorporateTraineeReportAProblemPage'
import MyRegisteredCoursesCorporateTraineePage from './pages/MyRegisteredCoursesCorporateTraineePage'
import TraineeProfilePage from './pages/TraineeProfilePage'
import TraineeCurrentReportPage from './pages/TraineeCurrentReportPage'
import TraineeDeliveredReportsPage from './pages/TraineeDeliveredReportsPage'
import TraineeReportsPage from './pages/TraineeReportsPage'
import TraineePendingReportsPage from './pages/TraineePendingReportsPage'
import TraineeResolvedReportsPage from './pages/TraineeResolvedReportsPage'
import TraineeCurrentResolvedReportPage from './pages/TraineeCurrentResolvedReportPage'
import CurrentNonRegisteredCoursePageTrainee from './pages/CurrentNonRegisteredCoursePageTrainee'
import CurrentNonRegisteredCoursePageCorporateTrainee from './pages/CurrentNonRegisteredCoursepageCorporateTrainee'
import CorporateTraineeProfilePage from './pages/CorporateTraineeProfilePage'
import CorporateTraineeCurrentReportPage from './pages/CorporateTraineeCurrentReportPage'
import CorporateTraineeDeliveredReportsPage from './pages/CorporateTraineeDeliveredReportsPage'
import CorporateTraineePendingReportsPage from './pages/CorporateTraineePendingReportsPage'
import CorporateTraineeCurrentResolvedReportPage from './pages/CorporateTraineeCurrentResolvedReportPage'
import CurrentNonRegisteredCourseInstructorPage from './components/CurrentNonRegisteredCourseInstructorPage'
import CorporateTraineeReportsPage from './pages/CorporateTraineeReportsPage'
import CorporateTraineeResolvedReportsPage from './pages/CorporateTraineeResolvedReportsPage'
import InstructorCurrentReportPage from './pages/InstructorCurrentReportPage'
import InstructorDeliveredReportsPage from './pages/InstructorDeliveredReportsPage'
import InstructorPendingReportsPage from './pages/InstructorPendingReportsPage'
import InstructorCurrentResolvedReportPage from './pages/InstructorCurrentResolvedReportPage'
import InstructorReportsPage from './pages/InstructorReportsPage'
import InstructorResolvedReportsPage from './pages/InstructorResolvedReportsPage'
import CurrentCourseInstructorPageCorporateTrainee from './pages/CurrentCourseInstructorPageCorporateTrainee'
import FromCurrentNonRegisteredCoursePageTrainee from './pages/FromCurrentNonRegisteredCoursePageTrainee'
import FromCurrentNonRegisteredCoursePageCorporateTrainee from './pages/FromCurrentNonRegisteredCoursePageCorporateTrainee'



//imports for admin reports
import DeliveredReportsPage from './components/DeliveredReports'
import DeliveredReportSingle from './components/DeliveredReportSingle'
import SeenReportsPage from './components/SeenReports'
import SeenReportSingle from './components/SeenReportSingle'
import ReportsPage from './pages/reportsPage'
import AdminResponsesPageTrainee from './pages/AdminResponsesPageTrainee'
import AdminResponseCurrentReportPageTrainee from './pages/AdminResponseCurrentReportPageTrainee'

import CourseRequestsPage from './pages/courseRequests'
import FilteredCoursesPageTrainee from './pages/FilteredCoursesPageTrainee';
import FilteredCoursesPageCorporateTrainee from './pages/FilteredCoursesPageCorporateTrainee';
import FilteredCoursesInstructorPage from './pages/FilteredCoursesInstructorPage';

function App() {
   const User = localStorage.getItem("token");
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
        path="/CurrentNonRegisteredCoursePageCorporateTrainee"
        element={<CurrentNonRegisteredCoursePageCorporateTrainee />}
        />

        
        <Route
        path="/CurrentNonRegisteredCourseInstructorPage"
        element={<CurrentNonRegisteredCourseInstructorPage />}
        />

        <Route
        path="/CorporateTraineeProfilePage"
        element={<CorporateTraineeProfilePage />}
        />

        
        <Route
        path="/FromCurrentNonRegisteredCoursePageCorporateTrainee"
        element={<FromCurrentNonRegisteredCoursePageCorporateTrainee />}
        />

        
        <Route
        path="/CorporateTraineeReportsPage"
        element={<CorporateTraineeReportsPage />}
        />

        <Route
        path="/CorporateTraineeCurrentReportPage"
        element={<CorporateTraineeCurrentReportPage />}
        />

        <Route
        path="/CorporateTraineeDeliveredReportsPage"
        element={<CorporateTraineeDeliveredReportsPage />}
        />

        <Route
        path="/CorporateTraineePendingReportsPage"
        element={<CorporateTraineePendingReportsPage />}
        />

        
        <Route
        path="/CorporateTraineeResolvedReportsPage"
        element={<CorporateTraineeResolvedReportsPage />}
        />

        

        <Route
        path="/CorporateTraineeCurrentResolvedReportPage"
        element={<CorporateTraineeCurrentResolvedReportPage />}
        />

        
        <Route
        path="/CurrentCourseInstructorPageCorporateTrainee"
        element={<CurrentCourseInstructorPageCorporateTrainee />}
        />

        <Route
        path="/InstructorCurrentReportPage"
        element={<InstructorCurrentReportPage />}
        />

        <Route
        path="/InstructorDeliveredReportsPage"
        element={<InstructorDeliveredReportsPage />}
        />

        <Route
        path="/InstructorPendingReportsPage"
        element={<InstructorPendingReportsPage />}
        />

        <Route
        path="/InstructorResolvedReportsPage"
        element={<InstructorResolvedReportsPage />}
        />

        <Route
        path="/InstructorCurrentResolvedReportPage"
        element={<InstructorCurrentResolvedReportPage />}
        />

        <Route
        path="/InstructorReportsPage"
        element={<InstructorReportsPage />}
        />

        <Route
        path="/CurrentNonRegisteredCoursePageTrainee"
        element={<CurrentNonRegisteredCoursePageTrainee />}
        />

        
        <Route
        path="/FromCurrentNonRegisteredCoursePageTrainee"
        element={<FromCurrentNonRegisteredCoursePageTrainee />}
        />

        
        <Route
        path="/FilteredCoursesPageTrainee"
        element={<FilteredCoursesPageTrainee />}
        />

        
        <Route
        path="/FilteredCoursesPageCorporateTrainee"
        element={<FilteredCoursesPageCorporateTrainee />}
        />

        
        <Route
        path="/FilteredCoursesInstructorPage"
        element={<FilteredCoursesInstructorPage />}
        />

        
        <Route
        path="/TraineeProfilePage"
        element={<TraineeProfilePage />}
        />

        <Route
        path="/TraineeReportsPage"
        element={<TraineeReportsPage />}
        />


        <Route
        path="/AdminResponsesPageTrainee"
        element={<AdminResponsesPageTrainee />}
        />

        
        <Route
        path="/AdminResponseCurrentReportPageTrainee"
        element={<AdminResponseCurrentReportPageTrainee />}
        />


        <Route
        path="/TraineeDeliveredReportsPage"
        element={<TraineeDeliveredReportsPage />}
        />

        
        <Route
        path="/TraineePendingReportsPage"
        element={<TraineePendingReportsPage />}
        />

        <Route
        path="/TraineeResolvedReportsPage"
        element={<TraineeResolvedReportsPage />}
        />

        
        <Route
        path="/TraineeCurrentReportPage"
        element={<TraineeCurrentReportPage />}
        />

        
        <Route
        path="/TraineeCurrentResolvedReportPage"
        element={<TraineeCurrentResolvedReportPage />}
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
    {User && <Route path="/" exact element={<Main2 />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
      <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
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
        path="/results"
        element={<Result />}
        />


 <Route
        path="/DeliveredReportSingle"
        element={<DeliveredReportSingle />}
        />


       <Route
        path="/deliveredReports"
        element={<DeliveredReportsPage/>}
        />

       <Route
        path="/SeenReportSingle"
        element={<SeenReportSingle />}
        />


       <Route
        path="/seenReports"
        element={<SeenReportsPage/>}
        />

<Route
        path="/reports"
        element={<ReportsPage/>}
        />


<Route
        path="/courseRequests"
        element={<CourseRequestsPage />}
        />

        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
