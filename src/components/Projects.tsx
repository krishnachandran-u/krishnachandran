import styles from '../styles/Projects.module.scss'
import { useState, useEffect } from 'react';
import WorkListItem from './WorkListItem'
import FadeInWhenVisible from './FadeInWhenVisible';

export default function Projects() {
    return (
        <>
            <div className = {styles.root}>
                <div className = {styles.main}>
                    <div className = {styles.index}>
                        <FadeInWhenVisible flow = "left">
                        <div>02/</div>
                        </FadeInWhenVisible>
                    </div> 
                    <div className = {styles.works}>
                        <FadeInWhenVisible flow = "up">
                        <div className = {styles.heading}>
                            SOME OF MY WORKS
                        </div>
                        </FadeInWhenVisible>
                        <div className = {styles.worksList}>
                            <WorkListItem
                                index = "01/09"
                                title = "TEXTRADE"
                                link = "https://textrade.irfan.live"
                                image = "https://images.pexels.com/photos/2663851/pexels-photo-2663851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                description = "A trading platform for college essentials"
                             /> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}