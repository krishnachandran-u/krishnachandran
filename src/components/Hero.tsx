import styles from '../styles/Hero.module.scss'

import { MdArrowOutward } from "react-icons/md";

export default function Hero() {
  return (
    <>
        <main className = {styles.root}>
            <div className = {styles.desktop}>
                <div className = {styles.pageOne}>
                    <div className = {styles.nav}>
                        <div className = {styles.name}>
                            Krishnachandran U
                        </div>
                        <div className = {styles.mid}>
                            <div className = "hover:text-2xl transition-all duration-300">About</div>
                            <div className = "hover:text-2xl transition-all duration-300">Projects</div>
                            <div className = "hover:text-2xl transition-all duration-300">Social</div>
                        </div>
                        <div className = {styles.button}>
                            <div className = {styles.contact}>Contact me !</div>
                            <div className = {styles.circle}>
                                <MdArrowOutward className = {styles.arrow} color = "#181818" />
                            </div>
                        </div>
                    </div>
                    <div className = {styles.main}>
                        <div className = {styles.web}>
                            Web
                            <div className  = {styles.portfolio2023}>
                                2023<br />
                                PORTFOLIO
                            </div>
                            <div className = {styles.localTime}>
                                MY LOCAL TIME 8:30<br />
                                GMT (+5:30)
                            </div>
                        </div>
                        <div>Developer</div>
                    </div>
                </div>
            </div>


            <div>
                <div>

                </div>
            </div>
        </main>
    </>
  )
}