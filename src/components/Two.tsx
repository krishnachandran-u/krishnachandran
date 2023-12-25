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

import StackSwiper from './StackSwiper';

const Two = () => {
    return (
        <>
            <div className = {styles.root}>
                <h1>h3llo</h1>
                <div className = {styles.stackSwiper}>
                    <StackSwiper /> 
                </div>
            </div>
        </>
    );
}

export default Two;