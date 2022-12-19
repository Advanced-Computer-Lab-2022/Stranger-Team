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
      
      <div className="admin-details">
        <h4 onClick={routeChange}>FROM <strong>{seenReports.Username}</strong></h4>
        <p><strong>{seenReports.Report_Type}</strong></p>
        <span className="material-symbols-outlined">visibility</span>
      </div>
      
    )
  }
  
  export default SeenReportsDetails