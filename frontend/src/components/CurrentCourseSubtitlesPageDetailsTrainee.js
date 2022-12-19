    import YoutubeEmbed from "./YoutubeEmbed"


    const CurrentCourseSubtitlesPageDetailsTrainee = ({ subtitle }) => {


    return (
        <div className="course-details">
        <h3><strong>Title:</strong></h3>
        <p>{subtitle.Subtitle_Title}</p>
        <h3><strong>Short Video Description:</strong></h3>
        <p>{subtitle.Description}</p>
        <YoutubeEmbed embedId={subtitle.Link}/>
        
        </div>
    )
    }

    export default CurrentCourseSubtitlesPageDetailsTrainee