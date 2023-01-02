import { useNavigate } from "react-router-dom";



const SeenResolvedDetails = ({ resolvedReports }) => {

 // const [instructorUsername, setInstructorUsername] = useState(null)
  

let navigate = useNavigate();
        const routeChange = () =>{ 
       // const params = new URLSearchParams(window.location.search);
       const RID = resolvedReports._id
        //console.log(RID); 
        let path = `/SeenReportSingle/?RID=${RID}`; 
        navigate(path);
    }
    return (
      
      <div className="admin-details">
          <h4 onClick={routeChange}><strong>{resolvedReports.Report_Title}</strong></h4>
        <h6>{resolvedReports.Role} <strong>{resolvedReports.Username}</strong></h6>
        <p><strong>{resolvedReports.Status}</strong></p>
        <h4><strong>{resolvedReports.Report_Type}</strong></h4>
        <span className="material-symbols-outlined">visibility</span>
      </div>
      
    )
  }
  
  export default SeenResolvedDetails