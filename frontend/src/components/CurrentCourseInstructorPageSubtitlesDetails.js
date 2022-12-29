    //sessions done
    import YoutubeEmbed from "./YoutubeEmbed"


    const CurrentCoursePageSubtitleDetails = ({ subtitle }) => {


    return (
        <div className="course-details">
        <h3>{subtitle.Subtitle_Title}</h3> 
        <h4><strong>Short Video Description:</strong></h4>
        <p>{subtitle.Description}</p>
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