import styles from '../styles/Projects.module.scss'

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
                        <div>
                            <div className = {`${styles.list} ${styles.textrade}`}>
                                
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}