import React from "react";
import { useState ,useEffect} from "react";
import PropTypes from "prop-types";
import Iframe from 'react-iframe-click';



import Progressbar from "../components/progressBar";

var p;

const YoutubeEmbed = ({ embedId }) => {
const [play, setPlay] = useState(false);
const [progress,setProgress]=useState([]);

  useEffect(() => {

    const fetchProgress = async () => {
      const params = new URLSearchParams(window.location.search);
      const subtitleId = params.get('SubtitleId');
      const courseId = params.get('CourseId');
      //const Trainee_Id = params.get('CorporateTraineeId');
      console.log(subtitleId); 
      //&TraineeId=${Trainee_Id}
      const response = await fetch(`/getSubtitlesStatus/?CourseId=${courseId}&SubtitleId=${subtitleId}`)
      const json = await response.json()
      console.log( json)
      if (response.ok) {
          p=json.Progress;
          setProgress([json])                  
      }}

fetchProgress();
  });

  const updateProgress = async () => {
    const params = new URLSearchParams(window.location.search);
    const subtitleId = params.get('SubtitleId');
    const courseId = params.get('CourseId');
    //const Trainee_Id = params.get('CorporateTraineeId');
    //&TraineeId=${Trainee_Id}
    console.log(subtitleId); 
    const response = await fetch(`/updatetSubtitlesStatus/?CourseId=${courseId}&SubtitleId=${subtitleId}`)
    const json = await response.json()
    console.log( json)
    if (response.ok) {
        p=json.Progress;
        setProgress([json])               
    }
    else{
        console.log("ERRORRRRRRRR")
    }
}

  return(
    <>
       
        {/* <button onClick={updateProgress} style={{margin:"20px 640px",padding:"10px 20px",width:"300px",borderRadius:"10px"}}>Play</button> */}
        <div className="video-responsive">
        <Iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            onInferredClick={updateProgress}
           // onStateChange={updateProgress}
            // onCanPlay={updateProgress}
            //onPlay={updateProgress}
    />
  </div>
  </>
  );
};

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;