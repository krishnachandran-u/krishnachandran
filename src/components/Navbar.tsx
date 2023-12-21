declare module "*.module.css";
import Navbarstyles from './../styles/Navbar.module.css';

 const Navbar = () => {
    return (
        <>
            <nav className = {Navbarstyles.root}>
                <div className = {Navbarstyles.largeScreen}>
                    <div className = {Navbarstyles.topLeft}>
                        <p>krishnachandran u</p>
                    </div>
                    <div className = {Navbarstyles.topRight}>
                        <p className = {Navbarstyles.about}>about</p>
                        <p>contact</p>
                        <p className = {Navbarstyles.resume}>resume</p>
                    </div>
                </div>
            </nav>
            <nav className = {Navbarstyles.root}>
                <div className = {Navbarstyles.smallScreen} >
                    <div className = {Navbarstyles.bottom}>
                        <p>about</p>
                        <p>resume</p>
                    </div>
                </div>
            </nav>
        </>
    );
 }

 export default Navbar;