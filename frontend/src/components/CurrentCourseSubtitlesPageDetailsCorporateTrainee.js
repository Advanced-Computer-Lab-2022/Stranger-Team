import YoutubeEmbed from "./YoutubeEmbed"
import CorporateTraineeNotes from "./CorporateTraineeAddNotes"
//import Progressbar from "./progressBar"
import  "../styles//progressBar.css";

const CurrentCourseSubtitlesPageDetailsCTrainee = ({ subtitle }) => {


return (
    <div>
    <div className="course-details">
    <h3><strong>Title:</strong></h3>
    <p>{subtitle.Subtitle_Title}</p>
    <h3><strong>Short Video Description:</strong></h3>
    <p>{subtitle.Description}</p>
    <YoutubeEmbed embedId={subtitle.Link}/>
    </div>
 
    <CorporateTraineeNotes > Add your Notes</CorporateTraineeNotes>
   
    </div>
)
}

export default CurrentCourseSubtitlesPageDetailsCTrainee