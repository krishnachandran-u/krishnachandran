import styles from '../styles/SkillCard.module.scss'

interface SkillCardProps {
    skill: string,
    description: string
}

export default function SkillCard({skill, description}: SkillCardProps) {
    return (
        <>
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
        </>
    )
}