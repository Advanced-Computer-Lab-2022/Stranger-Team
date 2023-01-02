//sessions done
import YoutubeEmbed from "./YoutubeEmbed"
import IndTraineeNotes from "./IndTraineeAddNotes";
//import Progressbar from "./progressBar"
import  "../styles//progressBar.css";
//import TraineeNotes from "./TraineeAddNotes";

const CurrentCourseSubtitlesPageDetailsTrainee = ({ subtitle }) => {


return (
    <div className="course-details">
    <h3><strong>Title:</strong></h3>
    <p>{subtitle.Subtitle_Title}</p>
    <h3><strong>Short Video Description:</strong></h3>
    <p>{subtitle.Description}</p>
    <YoutubeEmbed embedId={subtitle.Link}/>
    <div>
    <IndTraineeNotes > Add your Notes</IndTraineeNotes>
    {/* <TraineeNotes>Add your Notes</TraineeNotes> */}
    </div>
    </div>
)
}

export default CurrentCourseSubtitlesPageDetailsTrainee