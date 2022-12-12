import { useNavigate } from "react-router-dom";



const DeliveredReportsDetails = ({ deliveredReports }) => {

 // const [instructorUsername, setInstructorUsername] = useState(null)
  

let navigate = useNavigate();
        const routeChange = () =>{ 
       // const params = new URLSearchParams(window.location.search);
       const RID = deliveredReports._id
        //console.log(RID); 
        let path = `/DeliveredReportSingle/?RID=${RID}`; 
        navigate(path);
    }
    return (
      <div className="admin-details">
        <h4 onClick={routeChange}>FROM <strong>{deliveredReports.Username}</strong></h4>
        <p><strong>{deliveredReports.Report_Type}</strong></p>
        <span className="material-symbols-outlined">visibility_off</span>
      </div>
    )
  }
  
  export default DeliveredReportsDetails