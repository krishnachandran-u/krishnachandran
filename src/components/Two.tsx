import styles from './../styles/Two.module.scss';
import StackIcon from './../components/StackIcon';

import { FaReact } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { SiC } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { FaSass } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiPhp } from "react-icons/si";

const Two = () => {
    return (
        <>
            <div className={styles.root}>
                <h1>WHAT DO I KNOW?</h1>
                <div className = {styles.webdev}>
                    <h2>WEB DEVELOPMENT</h2>
                    <div className = {styles.stacks}>
                        <StackIcon icon={FaHtml5} IconName="HTML" />
                        <StackIcon icon={IoLogoJavascript} IconName="JAVASCRIPT" />
                        <StackIcon icon={DiJqueryLogo} IconName="JQUERY" />
                        <StackIcon icon={FaNodeJs} IconName="NODE.JS" />
                        <StackIcon icon={BiLogoPostgresql} IconName="POSTGRESQL" />
                        <StackIcon icon={SiPrisma} IconName="PRISMA" />
                        <StackIcon icon={FaReact} IconName="REACT" />
                        <StackIcon icon={SiMongodb} IconName="MONGODB" />
                        <StackIcon icon={SiNextdotjs} IconName="NEXT.JS" />
                        <StackIcon icon={SiTailwindcss} IconName="TAILWIND CSS" />
                        <StackIcon icon={FaCss3Alt} IconName="CSS" />
                        <StackIcon icon={FaSass} IconName="SASS" />
                        <StackIcon icon={BiLogoTypescript} IconName="TYPESCRIPT" />
                    </div>
                </div>
                <div className = {styles.webdev}>
                    <h2>SOFTWARE DEVELOPMENT</h2>
                    <div className = {styles.stacks}>
                        <StackIcon icon={SiCplusplus} IconName="C++" />
                        <StackIcon icon={SiC} IconName="C" />
                        <StackIcon icon={FaPython} IconName="PYTHON" />
                        <StackIcon icon={FaJava} IconName="JAVA" />
                        <StackIcon icon={SiPhp} IconName="PHP" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Two;