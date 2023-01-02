    import YoutubeEmbed from "./YoutubeEmbed"
    import { useEffect, useState } from "react"
    import React from 'react';

    const PreviewCourseVideoPageDetails = ({ course }) => {

        const [subtitle,setSubtitle] = useState("")
        const fetchSubtitles = async () => {
        
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('CourseId');
        
        const response = await fetch(`/fetchThePreviewByCourseId/?CourseId=${courseId}`)

        const json = await response.json()
        console.log(json);

        if (response.ok) {
            setSubtitle(json)
        }


        }


        fetchSubtitles()

    return (
        <div className="course-details">
        <div className="preview">
        <h3><strong>Short Course Preview:</strong></h3>
        <YoutubeEmbed embedId={subtitle}/>
        </div>
        </div>
        
    )
    }

    export default PreviewCourseVideoPageDetails