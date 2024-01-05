import styles from '../styles/About.module.scss'
import FadeInWhenVisible from './FadeInWhenVisible'

export default function About() {
    return (
        <>
            <div className = {styles.root}>
                <div className = {styles.main}>
                    <div className = {styles.left}>
                        <div>01/</div>
                    </div>
                    <div className = {styles.right}>
                        <FadeInWhenVisible flow = "up">
                        I&apos;m a full-stack engineer skilled in front-end and back-end development, with a focus on crafting functional user interfaces and robust backend solutions in web technologies.<br /><br />
                        </FadeInWhenVisible>
                        <FadeInWhenVisible flow = "up">
                        I&apos;ve explored machine learning, showcasing adaptability.<br /><br /> 
                        </FadeInWhenVisible>
                        <FadeInWhenVisible flow = "up">
                        Passionate about algorithmic problem-solving, I engage in competitive programming for continuous skill enhancement and staying sharp.
                        </FadeInWhenVisible>
                    </div>
                </div>
            </div> 
        </>
    )
}
