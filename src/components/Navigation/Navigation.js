import {  useState } from "react";
import "./Navigation.css"
function Navigation() {
    const [isVisible, setVisible] = useState(false)
    const [barClass, setBarClass] = useState('bar')
    const [navClass, setNavClass] = useState('nav-options')
    const showMenu = () =>{
        if(isVisible){
            setBarClass('bar')
            setNavClass('nav-options')
            setVisible(false)
        }else{
            setBarClass('bar clicked')
            setNavClass('nav-options active')
            setVisible(true)
        }
    }
    const hideMenu = () =>{
        if(isVisible){
            setNavClass('nav-options')
            setBarClass('bar')
        }

    }
    
    return ( 
    <div className="navbar">
        <a href="#home" className="nav-logo">
        </a>
        <div className="hamburger" onClick={showMenu}>
            <div className={barClass}></div>
            <div className={barClass}></div>
            <div className={barClass}></div>
        </div>
        <ul className={navClass} >
            <li className="option"><a href="#about" onClick={hideMenu}>About</a></li>
            <li className="option"><a href="#projects" onClick={hideMenu}>Projects</a></li>
            <li className="option"><a href="#contact" onClick={hideMenu}>Contact</a></li>
        </ul>
    </div> 
    );
}

export default Navigation;