import styles from './../styles/Two.module.scss';
import StackIcon from './../components/StackIcon';
import { FaReact } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

const Two = () => {
    return (
        <>
            <div className={styles.root}>
                <h1>WHAT DO I KNOW?</h1>
                <div className = {styles.stacks}>
                    <StackIcon icon = {FaReact} IconName = "REACT"/>
                    <StackIcon icon = {SiCplusplus} IconName = "C++"/>
                </div>
            </div>
        </>
    );
}

export default Two;