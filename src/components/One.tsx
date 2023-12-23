import styles from './../styles/One.module.scss';

const One = () => {
    return (
        <>
            <div className = {styles.root}>
                {/*
                <div className = {styles.nameLine}>
                    <h2 className = {styles.hi}>HI, I'M&nbsp;</h2>
                    <h2>KRISHNACHANDRAN&nbsp;</h2>
                    <h2 className = {styles.hi}>AND I AM A</h2>
                </div>
                */}
                <div className={styles.professionLine}>
                    <h1>FULL STACK DEVELOPER <br /> & DATA ENGINEEER.</h1>
                </div>
                {/* 
                <div className = {styles.youNeed}>
                    <p className = {styles.developer}>Download CV</p>
                    <p className = {styles.dataEngineer}>Hire Me Now</p>
                </div>
                <div className = {styles.scrollDownParentDiv}>
                    <p className = {styles.scrollDown}>^</p>
                </div>
                */}
            </div>
        </>
    );
}

export default One;