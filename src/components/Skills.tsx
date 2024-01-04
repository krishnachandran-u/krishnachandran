import styles from '../styles/Skills.module.scss'
import SkillCard from './SkillCard'

export default function Skills() {
    return (
        <div className = {styles.root}>
            <div className = {styles.index}>
                03/
            </div>
            <div className = {styles.main}>
                <div className = {styles.title}>
                    MY SKILLS
                </div> 
                <div className = {styles.cards}>
                    <SkillCard
                        skill = "NEXT.JS"
                        description = "THIS IS WHERE I CRAFT MY WEB"
                    /> 
                    <SkillCard
                        skill = "TYPESCRIPT"
                        description = "I USE THIS TO MAKE FUNCTIONAL AND BEAUTIFUL COMPONENTS"
                    />
                    <SkillCard
                        skill="FIGMA"
                        description="I DESIGN BEAUTIFUL USER INTERFACES USING FIGMA"
                    />
                    <SkillCard
                        skill="TAILWIND"
                        description="I UTILIZE TAILWIND CSS TO CREATE RESPONSIVE AND STYLISH DESIGNS"
                    />
                    <SkillCard
                        skill="PYTHON"
                        description="I DEVELOP APPLICATIONS AND AUTOMATE TASKS USING PYTHON"
                    />
                    <SkillCard
                        skill="JAVASCRIPT"
                        description="I BUILD INTERACTIVE AND DYNAMIC WEB APPLICATIONS WITH JAVASCRIPT"
                    />
                    <SkillCard
                        skill="TENSORFLOW"
                        description="I APPLY MACHINE LEARNING AND DEEP LEARNING TECHNIQUES USING TENSORFLOW"
                    />
                    <SkillCard
                        skill="PRISMA"
                        description="I WORK WITH PRISMA TO BUILD DATABASE-DRIVEN APPLICATIONS"
                    />
                    <SkillCard
                        skill="SASS"
                        description="I USE SASS TO WRITE MODULAR AND REUSABLE CSS CODE"
                    />
                    <SkillCard
                        skill="C++"
                        description="I DEVELOP HIGH-PERFORMANCE APPLICATIONS USING C++"
                    />
                </div>
            </div>
        </div>
    )
}