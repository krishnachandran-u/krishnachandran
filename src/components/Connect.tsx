import styles from '../styles/Connect.module.scss'
import FadeInWhenVisible from './FadeInWhenVisible'

export default function Connect() {
    return (
        <>
            <div className = {styles.root}>
                <div className = {styles.main}>
                    <FadeInWhenVisible flow = "left">
                    <div className = {styles.title}>
                        LET&apos;S TALK
                    </div>
                    </FadeInWhenVisible>
                    <div className = {styles.contact}>
                        <div className = {styles.socialAndMail}>
                        <div className = {styles.social}>
                            <FadeInWhenVisible flow = "up">
                            <div className = {styles.subheading}>
                                SOCIAL
                            </div>
                            </FadeInWhenVisible>
                            <FadeInWhenVisible flow = "up">
                            <div className = {styles.iconList}>
                                <div className = {styles.icon}>GH</div>
                                <div className = {styles.icon}>LIN</div>
                                <div className = {styles.icon}>IG</div>
                                <div className = {styles.icon}>GIT</div>
                                <div className = {styles.icon}>X</div>
                                <div className = {styles.icon}>FB</div>
                            </div>
                            </FadeInWhenVisible>
                        </div>
                        <div className = {styles.mail}>
                            <FadeInWhenVisible flow = "up">
                            <div className = {styles.subheading}>
                                MAIL
                            </div>
                            </FadeInWhenVisible>
                            <FadeInWhenVisible flow = "up">
                            <div className = {styles.mailID}>
                                krishnachandran.u@outlook.com
                            </div>
                            </FadeInWhenVisible>
                        </div>
                        </div>
                        <FadeInWhenVisible flow = "up">
                        <div className = {styles.connectNow}>
                            <div className = {styles.connectNowText}>
                                CONNECT<br />
                                NOW
                            </div>
                        </div>
                        </FadeInWhenVisible>
                    </div>
                </div>
            </div>
        </>
    )
}