import Link from 'next/link'
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
                                <Link href = "https://github.com/krishnachandran-u" target = "_blank">
                                <div className = {styles.icon}>GIT</div>
                                </Link>
                                <Link href = "https://www.linkedin.com/in/krishnachandran-u-a79012273/" target = "_blank">
                                <div className = {styles.icon}>LIN</div>
                                </Link>
                                <Link href = "https://www.instagram.com/krishnachandran_u/" target = "_blank">
                                <div className = {styles.icon}>IG</div>
                                </Link>
                                <Link href = "https://twitter.com/casstrops" target = "_blank">
                                <div className = {styles.icon}>X</div>
                                </Link>
                                <Link href = "https://www.facebook.com/krishna.chandran.1088/" target = "_blank">
                                <div className = {styles.icon}>FB</div>
                                </Link>
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
                        <Link href = "mailto:krishnachandran.u@outlook.com" target = "_blank">
                        <div className = {styles.connectNow}>
                            <div className = {styles.connectNowText}>
                                CONNECT<br />
                                NOW
                            </div>
                        </div>
                        </Link>
                        </FadeInWhenVisible>
                    </div>
                </div>
            </div>
        </>
    )
}