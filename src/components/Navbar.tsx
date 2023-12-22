declare module "*.module.css";
import styles from './../styles/Navbar.module.scss';
import navbarBg from './../assets/images/navbarBg.jpg'

 const Navbar = () => {
    return (
        <>
            <nav className = {styles.root}>
                <div className = {styles.largeScreen}>
                    <div className = {styles.topLeft}>
                        <p className = {styles.name}>krishnachandran u</p>
                    </div>
                    <div className = {styles.topRight}>
                        <p className = {styles.about}>about</p>
                        <p className = {styles.contact}>contact</p>
                        <p className = {styles.resume}>resume</p>
                    </div>
                </div>
            </nav>
            <nav className = {styles.root}>
                <div className = {styles.smallScreen} >
                    <div className = {styles.bottom}>
                        <p className = {styles.about}>about</p>
                        <p>resume</p>
                    </div>
                </div>
            </nav>
        </>
    );
 }

 export default Navbar;