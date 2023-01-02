    //sessions done
    import { Container } from "react-bootstrap"
import YoutubeEmbed from "./YoutubeEmbed"


    const CurrentCoursePageSubtitleDetails = ({ subtitle }) => {


    return (
        <div className="course-details">
        
    
        {/* <h4><strong>Short Video Description:</strong></h4> */}
        <Container style={{align:"center", right: "-270px"}}><h3><strong>{subtitle.Subtitle_Title}</strong></h3> </Container>
        <hr></hr>
        <label><strong>{subtitle.Description}</strong></label>
     
      <br></br>
      <br></br>
        {/* <iframe
        width="853"
        height="480"
        src={`${subtitle.Link}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        /> */}
        <YoutubeEmbed embedId={subtitle.Link}/>
        
        </div>
    )
    }

    export default CurrentCoursePageSubtitleDetails