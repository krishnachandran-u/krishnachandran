import styles from '../styles/Projects.module.scss'
import WorkListItem from './WorkListItem'

export default function Projects() {
    return (
        <>
            <div className = {styles.root}>
                <div className = {styles.main}>
                    <div className = {styles.index}>
                        <div>02/</div>
                    </div> 
                    <div className = {styles.works}>
                        <div className = {styles.heading}>
                            SOME OF MY WORKS
                        </div>
                        <div className = {styles.worksList}>
                            <WorkListItem 
                                title = "TEXTRADE"
                                description = "Your premier destination for a seamless, service-oriented exchange platform offering a diverse range of used college essentials. Connect effortlessly, trade smartly, and elevate your academic journey."
                                link = ""
                                image = "https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg"
                                align = "left"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}