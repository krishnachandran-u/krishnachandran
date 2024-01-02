import styles from '../styles/Hero.module.scss'

import { FiCornerLeftDown } from "react-icons/fi";

export default function Hero() {
    return (
        <>
            <div className = {styles.root}>
                <div className = {styles.desktop}>
                    <div className = {styles.top}>
                        <div className = {styles.name}>
                            KRISHNA-<br />
                            CHANDRAN
                        </div>
                        <div className = {styles.details}>
                            <div>Home</div>
                            <div>About</div>
                            <div>Resume</div>
                            <div>Projects</div>
                            <div>Contact Me!</div>
                        </div>
                    </div>
                    <div className = {styles.bottom}>
                        <div className = {styles.about}>
                            <div className = {styles.description}>I CRAFT CAPTIVATING AND FUNCTIONAL DIGITAL EXPERIENCES, MERGING CREATIVITY WITH CODE TO BRING IDEAS TO LIFE.</div>
                            <div className = {styles.arrowdown}>
                            <FiCornerLeftDown />
                            </div>
                        </div>
                        <div className = {styles.profession}>
                            <span className = {styles.c}>C</span>REATIVE<br />
                            DEVELOPER
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}