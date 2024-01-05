"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

import styles from '../styles/Hero.module.scss'

import { FiCornerLeftDown } from "react-icons/fi";
import FadeInWhenVisible from './FadeInWhenVisible';

export default function Hero() {

    const [animationApplied, setAnimationApplied] = useState(false);

    useEffect(() => {
        if(!animationApplied) {
            const nameElement = document.querySelector(`.${styles.krishna}`) as HTMLElement;

            nameElement.innerText = "KRISHNA-";

            const letters = nameElement.innerText.split('');
            nameElement.innerHTML = '';

            letters.forEach((letter , index) => {

                if (index === 0 || letter !== letters[index - 1]) {
                    const span = document.createElement('span');
                    span.textContent = letter;
                    span.classList.add(styles.animatedLetter);
                    span.style.animationDelay = `${index * 0.1}s`;
                    nameElement.appendChild(span);
                }
            });

        }

        if(!animationApplied) {
            const nameElement = document.querySelector(`.${styles.chandran}`) as HTMLElement;

            nameElement.innerText = "CHANDRAN";

            const letters = nameElement.innerText.split('');
            nameElement.innerHTML = '';

            letters.forEach((letter , index) => {

                if (index === 0 || letter !== letters[index - 1]) {
                    const span = document.createElement('span');
                    span.textContent = letter;
                    span.classList.add(styles.animatedLetter);
                    span.style.animationDelay = `${index * 0.1}s`;
                    nameElement.appendChild(span);
                }
            });

        }

        if(!animationApplied) {
            const nameElement = document.querySelector(`.${styles.creative}`) as HTMLElement;

            nameElement.innerText = "CREATIVE";

            const letters = nameElement.innerText.split('');
            nameElement.innerHTML = '';

            letters.forEach((letter , index) => {

                if (index === 0 || letter !== letters[index - 1]) {
                    const span = document.createElement('span');
                    span.textContent = letter;
                    span.classList.add(styles.animatedLetter);
                    span.style.animationDelay = `${index * 0.1}s`;
                    nameElement.appendChild(span);
                }
            });

        }

        if(!animationApplied) {
            const nameElement = document.querySelector(`.${styles.developer}`) as HTMLElement;

            nameElement.innerText = "DEVELOPER";

            const letters = nameElement.innerText.split('');
            nameElement.innerHTML = '';

            letters.forEach((letter , index) => {

                if (index === 0 || letter !== letters[index - 1]) {
                    const span = document.createElement('span');
                    span.textContent = letter;
                    span.classList.add(styles.animatedLetter);
                    span.style.animationDelay = `${index * 0.1}s`;
                    nameElement.appendChild(span);
                }
            });

        }

        setAnimationApplied(true);


    }, [animationApplied])

    return (
        <>
            <div className = {styles.root}>
                <div className = {styles.desktop}>
                    <div className = {styles.top}>
                        <div className = {styles.name}>
                            <div className = {styles.krishna}>

                            </div>
                            <div className = {styles.chandran}>

                            </div>
                        </div>
                        <div className = {styles.details}>
                            <FadeInWhenVisible flow = "right">
                            <Link href = "" target = "_self">
                            <div>Home</div>
                            </Link>
                            </FadeInWhenVisible>
                            <FadeInWhenVisible flow = "right">
                            <Link href = "/about">
                            <div>About</div>
                            </Link>
                            </FadeInWhenVisible>
                            <FadeInWhenVisible flow = "right">
                            <div>Resume</div>
                            </FadeInWhenVisible>
                            <FadeInWhenVisible flow = "right">
                            <div>Projects</div>
                            </FadeInWhenVisible>
                            <FadeInWhenVisible flow = "right">
                            <Link href = "mailto:krishnachandran.u@outlook.com" target = "_blank">
                            <div>Contact Me!</div>
                            </Link>
                            </FadeInWhenVisible>
                        </div>
                    </div>
                    <div className = {styles.bottom}>
                        <div className = {styles.about}>
                            <FadeInWhenVisible flow = "left">
                            <div className = {styles.description}>I CRAFT CAPTIVATING AND FUNCTIONAL DIGITAL EXPERIENCES, MERGING CREATIVITY WITH CODE TO BRING IDEAS TO LIFE.</div>
                            </FadeInWhenVisible>
                            <FadeInWhenVisible flow = "left">
                            <div className = {styles.arrowdown}>
                                <FiCornerLeftDown size = "4vmin" />
                            </div>
                            </FadeInWhenVisible>
                        </div>
                        <div className = {styles.profession}>
                            <div className = {styles.creative}>

                            </div>
                            <div className = {styles.developer}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}