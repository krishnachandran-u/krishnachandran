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
                                index = "01/09"
                                title = "TEXTRADE"
                                link = "textrade.irfan.live"
                                image = "https://images.pexels.com/photos/2663851/pexels-photo-2663851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                description = "A trading platform for college essentials"
                             /> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}