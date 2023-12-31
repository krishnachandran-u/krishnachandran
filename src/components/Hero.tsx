"use client"
import styles from '../styles/Hero.module.scss'

import { MdArrowOutward } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import FadeInWhenVisible from './FadeInWhenVisible';

export default function Hero() {
  return (
    <>
        <main className = {styles.root}>
            <div className = {`${styles.desktop}`}>
                <div className = {styles.pageOne}>
                    <FadeInWhenVisible flow = "down">
                    <div className = {styles.nav}>
                        <div className = {styles.name}>
                                Krishnachandran U
                        </div>
                        <div className = {`${styles.mid}`}>
                            <div className = {styles.midElement}>About</div>
                            <div className = {styles.midElement}>Projects</div>
                            <div className = {styles.midElement}>Social</div>
                        </div>
                        <div className = {styles.button}>
                            <div className = {styles.contact}>Contact me !</div>
                            <div className = {styles.circle}>
                                <MdArrowOutward className = {styles.arrow} color = "#181818" />
                            </div>
                        </div>
                    </div>
                    </FadeInWhenVisible>
                    <div className = {styles.main}>
                        <div className = {`${styles.web}`}>
                            <FadeInWhenVisible flow = "up">
                            Web
                            </FadeInWhenVisible>
                            <FadeInWhenVisible>
                            <div className  = {`${styles.portfolio2023}`}>
                                2023<br />
                                PORTFOLIO
                            </div>
                            </FadeInWhenVisible>
                            <FadeInWhenVisible>
                            <div className = {`${styles.localTime}`}>
                                MY LOCAL TIME 8:30<br />
                                GMT (+5:30)
                            </div>
                            </FadeInWhenVisible>
                        </div>
                        <FadeInWhenVisible flow = "left">
                            <div>Developer</div>
                        </FadeInWhenVisible>
                    </div>
                </div>
                <div className = {styles.pageTwo}>
                    <FadeInWhenVisible flow = "right">
                        <div className = {styles.description}>
                            In the vast full-stack landscape, I explore both frontend and backend realms, mastering design and user experience principles. On this exciting journey, I craft interfaces that seamlessly combine functionality and visual allure. 
                        </div>    
                    </FadeInWhenVisible>
                    <FadeInWhenVisible>
                        <div className = {styles.hireMeNow}>
                            Hire Me Now !
                            <div className = {styles.block}>
                                <FaArrowRight color = "#181818" className = {styles.arrow}/>
                            </div>
                        </div>
                    </FadeInWhenVisible>
                </div>
            </div>


            <div className = {`${styles.mobile} hidden md:flex`}>
                <div className = {styles.nav}>
                    <div className = {styles.name}>
                            Krishnachandran U
                    </div>
                    <div className = {styles.button}>
                        <div className = {styles.contact}>Contact me !</div>
                        <div className = {styles.circle}>
                            <MdArrowOutward className = {styles.arrow} color = "#181818" />
                        </div>
                    </div>
                </div>
                <div className = {styles.mid}>
                    <div className = {styles.links}>
                        <div className = {styles.about}>About</div>
                        <div className = {styles.projects}>Projects</div>
                        <div className = {styles.social}>Social</div>
                    </div>
                    <div className = {styles.text}>
                        <div>
                            2023<br />
                            PORTFOLIO
                        </div>
                        <div className = {`${styles.localTime}`}>
                            MY LOCAL TIME 8:30<br />
                            GMT (+5:30)
                        </div>
                    </div>
                </div>
                <div className = {styles.main}>
                    Web<br/>
                    Developer 
                </div>
                <div className = {styles.description}>
                   In the vast full-stack landscape, I explore both frontend and backend realms, mastering design and user experience principles. On this exciting journey, I craft interfaces that seamlessly combine functionality and visual allure. 
                </div>
                <div className = {styles.hireMeNow}>
                    <div className = {styles.arrow}></div>
                </div>
            </div>
        </main>
    </>
  )
}