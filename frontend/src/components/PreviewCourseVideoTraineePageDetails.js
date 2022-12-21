    import YoutubeEmbed from "./YoutubeEmbed"


    const PreviewCourseVideoPageDetails = ({ course }) => {


    return (
        <div className="course-details">
        <div className="preview">
        <h3><strong>Short Video Description:</strong></h3>
        <YoutubeEmbed embedId={course.PreviewLink}/>
        </div>
        </div>
    )
    }

    export default PreviewCourseVideoPageDetails