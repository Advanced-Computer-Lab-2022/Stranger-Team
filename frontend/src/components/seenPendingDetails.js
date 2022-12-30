import { useNavigate } from "react-router-dom";



const SeenPendingDetails = ({ pendingReports }) => {

 // const [instructorUsername, setInstructorUsername] = useState(null)
  

let navigate = useNavigate();
        const routeChange = () =>{ 
       // const params = new URLSearchParams(window.location.search);
       const RID = pendingReports._id
        //console.log(RID); 
        let path = `/SeenReportSingle/?RID=${RID}`; 
        navigate(path);
    }
    return (
      
      <div className="admin-details">
          <h4 onClick={routeChange}><strong>{pendingReports.Report_Title}</strong></h4>
        <h6>{pendingReports.Role} <strong>{pendingReports.Username}</strong></h6>
        <p><strong>{pendingReports.Status}</strong></p>
        <h4><strong>{pendingReports.Report_Type}</strong></h4>
        <span className="material-symbols-outlined">visibility</span>
      </div>
      
    )
  }
  
  export default SeenPendingDetails