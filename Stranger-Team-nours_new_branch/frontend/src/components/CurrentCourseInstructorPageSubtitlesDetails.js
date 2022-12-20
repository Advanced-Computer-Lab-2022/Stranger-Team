    import YoutubeEmbed from "./YoutubeEmbed"


    const CurrentCoursePageSubtitleDetails = ({ subtitle }) => {


    return (
        <div className="course-details">
        <h4>{subtitle.Title}</h4> 
        <h3><strong>Shot Video Description:</strong></h3>
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