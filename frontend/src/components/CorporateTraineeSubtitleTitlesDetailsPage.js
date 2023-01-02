import styles from '../components/Guest/styles.module.css';
    const CorporateTraineeSubtitleTitlesDetailsPage = ({ subtitle }) => {


    return (

        // <div>
        // <form className="course-details">
        // <h4>Title:</h4>
        // <p>{subtitle.Subtitle_Title}</p>
        
        // </form>
        // </div>
        //-------------------------------------------------
        <div>
        <form className={styles.subtitleTitleHeading}>
        <h4 >Title:</h4>
        <p>{subtitle.Subtitle_Title}</p>
        
        </form>
        </div>
    )
    }

    export default CorporateTraineeSubtitleTitlesDetailsPage