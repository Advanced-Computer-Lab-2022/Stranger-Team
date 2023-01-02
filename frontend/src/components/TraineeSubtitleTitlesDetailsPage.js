//sessions done
import styles from '../components/Guest/styles.module.css';
    const TraineeSubtitleTitlesDetailsPage = ({ subtitle }) => {


    return (

        <div>
        <form className={styles.subtitleTitleHeading}>
        <h4 >Title:</h4>
        <p>{subtitle.Subtitle_Title}</p>
        
        </form>
        </div>
    )
    }

    export default TraineeSubtitleTitlesDetailsPage