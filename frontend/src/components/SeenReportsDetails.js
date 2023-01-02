import { useNavigate } from "react-router-dom";



const SeenReportsDetails = ({ seenReports }) => {

 // const [instructorUsername, setInstructorUsername] = useState(null)
  

let navigate = useNavigate();
        const routeChange = () =>{ 
       // const params = new URLSearchParams(window.location.search);
       const RID = seenReports._id
        //console.log(RID); 
        let path = `/SeenReportSingle/?RID=${RID}`; 
        navigate(path);
    }
    return (
      
      <div className="admin-details" onClick={routeChange}>
          <h4><strong>{seenReports.Report_Title}</strong></h4>
        <h6>{seenReports.Role} <strong>{seenReports.Username}</strong></h6>
        <p><strong>{seenReports.Status}</strong></p>
        <h4><strong>{seenReports.Report_Type}</strong></h4>
        <span className="material-symbols-outlined">visibility</span>
      </div>
      
    )
  }
  
  export default SeenReportsDetails