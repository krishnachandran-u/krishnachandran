import Link from 'next/link';

import { backIn } from 'framer-motion'
import styles from '../styles/WorkListItem.module.scss'
import { MdArrowOutward } from "react-icons/md";
import FadeInWhenVisible from './FadeInWhenVisible';

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
                    <div>
                        <FadeInWhenVisible flow = "right">
                        <div className = {styles.index}>
                            {index}
                        </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible flow = "right">
                        <div className = {styles.title}>
                            {title}
                        </div>
                        </FadeInWhenVisible>
                    </div>
                    <div className = {styles.imageDiv}>
                        <FadeInWhenVisible flow = "right">
                        <div className={styles.image} style={{backgroundImage: `url(${image})`}}>

                        </div>
                        </FadeInWhenVisible>
                    </div>
                    <FadeInWhenVisible flow = "right">
                    <div className = {styles.descriptionAndLink}> 
                        <FadeInWhenVisible flow = "right">
                        <div className = {styles.description} >
                            {description}
                        </div>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible flow = "right">
                        <Link href = {link} target = "_blank">
                        <div className = {styles.link}>
                            <MdArrowOutward size = "3rem" />
                        </div>
                        </Link>
                        </FadeInWhenVisible>
                    </div>
                    </FadeInWhenVisible>
                </div>
            </div> 
        </>
    )
}