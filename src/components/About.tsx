import styles from '../styles/About.module.scss'

export default function About() {
    return (
        <>
            <div className = {styles.root}>
                <div className = {styles.main}>
                    <div className = {styles.left}>
                        <div>01/</div>
                    </div>
                    <div className = {styles.right}>
                        I&apos;m a full-stack engineer skilled in front-end and back-end development, with a focus on crafting functional user interfaces and robust backend solutions in web technologies.<br /><br /> I&apos;ve explored machine learning, showcasing adaptability.<br /><br /> Passionate about algorithmic problem-solving, I engage in competitive programming for continuous skill enhancement and staying sharp.
                    </div>
                </div>
            </div> 
        </>
    )
}
