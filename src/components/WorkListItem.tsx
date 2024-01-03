"use client"
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/WorkListItem.module.scss'

interface WorkListItemProps {
    title: string,
    description: string,
    link: string,
    image: string
    align: string
}

export default function WorkListItem({title, description, link, image, align}: WorkListItemProps) {

    return (
        <>
            <div className = {styles.root}>
                <div className = {styles.main} style = {{ alignItems: (align == "left")? "start" : (align == "right")? "flex-end": "" }}>
                    <div className = {styles.text}>
                        <div>
                            01/09
                        </div>
                        <div className = {styles.title}>
                            {title}
                        </div>
                        <div className = {styles.description}>
                            {description} 
                        </div>
                        <div className = {styles.link}>

                        </div>
                    </div>
                    <div className = {styles.imageDiv}>
                        <div className={styles.image} style={{ backgroundImage: `url(${image})` }}>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}