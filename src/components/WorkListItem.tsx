import Link from 'next/link';

import { backIn } from 'framer-motion'
import styles from '../styles/WorkListItem.module.scss'
import { MdArrowOutward } from "react-icons/md";

interface WorkListItemProps {
    index: string,
    description: string,
    title: string,
    link: string,
    image: string,
}

export default function WorkListItem({index, description, title, link, image}: WorkListItemProps) {

    return (
        <>
            <div className = {styles.root}>
                <div className = {styles.main}>
                    <div className = {styles.index}>
                        {index}
                    </div>
                    <div className = {styles.title}>
                        {title}
                    </div>
                    <div className = {styles.imageDiv}>
                        <div className={styles.image} style={{backgroundImage: `url(${image})`}}>

                        </div>
                    </div>
                    <div className = {styles.descriptionAndLink}> 
                        <div className = {styles.description} >
                            {description}
                        </div>
                        <div className = {styles.link}>
                            <MdArrowOutward size = "3rem" />
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}