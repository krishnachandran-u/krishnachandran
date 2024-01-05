import styles from '../styles/SkillCard.module.scss'
import FadeInWhenVisible from './FadeInWhenVisible'

interface SkillCardProps {
    skill: string,
    description: string
}

export default function SkillCard({skill, description}: SkillCardProps) {
    return (
        <>
            <FadeInWhenVisible flow = "up">
            <div className = {styles.root}>
                <div className = {styles.main}>
                    <div className = {styles.title}>
                        {skill}
                    </div>
                    <div className = {styles.description}>
                        {description}
                    </div>
                </div>
            </div>
            </FadeInWhenVisible>
        </>
    )
}