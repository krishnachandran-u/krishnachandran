"use client"
import { useState, useEffect } from 'react';

import styles from '../styles/Hero.module.scss'

import { FiCornerLeftDown } from "react-icons/fi";

export default function Hero() {

    const [animationApplied, setAnimationApplied] = useState(false);

    useEffect(() => {
        if(!animationApplied) {
            const nameElement = document.querySelector(`.${styles.name}`) as HTMLElement;

            nameElement.innerHTML = "KRISHNA-<br/>CHANDRAN";
            const letters = nameElement.innerText.split('');
            nameElement.innerHTML = '';

            letters.forEach((letter , index) => {
                if (index === 0 || letter !== letters[index - 1]) {
                    const span = document.createElement('span');
                    span.textContent = letter;
                    span.classList.add(styles.animatedLetter);
                    span.style.animationDelay = `${0}s`;
                    nameElement.appendChild(span);
                }
            });

            setAnimationApplied(true);

        }
    }, [animationApplied])

    return (
        <>
            <div className = {styles.root}>
                <div className = {styles.desktop}>
                    <div className = {styles.top}>
                        <div className = {styles.name}>
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
                            <FiCornerLeftDown size = "4vmin" />
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