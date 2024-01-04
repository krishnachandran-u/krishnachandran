import styles from '../styles/Connect.module.scss'

export default function Connect() {
    return (
        <>
            <div className = {styles.root}>
                <div className = {styles.main}>
                    <div className = {styles.title}>
                        LET'S TALK
                    </div>
                    <div className = {styles.contact}>
                        <div className = {styles.socialAndMail}>
                        <div className = {styles.social}>
                            <div className = {styles.subheading}>
                                SOCIAL
                            </div>
                            <div className = {styles.iconList}>
                                <div className = {styles.icon}>GH</div>
                                <div className = {styles.icon}>LIN</div>
                                <div className = {styles.icon}>IG</div>
                                <div className = {styles.icon}>GIT</div>
                                <div className = {styles.icon}>X</div>
                                <div className = {styles.icon}>FB</div>
                            </div>
                        </div>
                        <div className = {styles.mail}>
                            <div className = {styles.subheading}>
                                MAIL
                            </div>
                            <div className = {styles.mailID}>
                                krishnachandran.u@outlook.com
                            </div>
                        </div>
                        </div>
                        <div className = {styles.connectNow}>
                            <div className = {styles.connectNowText}>
                                CONNECT<br />
                                NOW
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}