import React,{useState,useEffect} from "react";
import { Link} from 'react-router-dom'

import logoDark from '../assets/images/logo-dark.png'
import logoLight from '../assets/images/logo-light.png'


export default function Navbar({navDark, manuClass,containerClass}){
    let [scroll, setScroll] = useState(false);
    let [isMenu, setisMenu] = useState(false);

    // let location = useLocation();

    useEffect(() => {

        // let current = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
        // setManu(current)

        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 50);
        });
        window.scrollTo(0, 0);
        const closeModal = ()=>{
            // setModal(false)
        }
        document.addEventListener("mousedown",closeModal)
        return()=>{
            document.removeEventListener("mousedown",closeModal)
        }
      }, []);

      let toggleMenu = () => {
        setisMenu(!isMenu);
        if (document.getElementById("navigation")) {
            const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
            anchorArray.forEach(element => {
                element.addEventListener('click', (elem) => {
                    const target = elem.target.getAttribute("href")
                    if (target !== "") {
                        if (elem.target.nextElementSibling) {
                            var submenu = elem.target.nextElementSibling.nextElementSibling;
                            submenu.classList.toggle('open');
                        }
                    }
                })
            });
        }
    };
    return(
        <header id="topnav" className={`${scroll ? "nav-sticky" :""} navigation sticky`}>
            <div className={containerClass}>
                <div>
                    {navDark === true ? 
                    <Link className="logo" to="/">
                        <img src={logoDark} height="22" className="logo-light-mode" alt=""/>
                        <img src={logoLight} height="22" className="logo-dark-mode" alt=""/>
                    </Link> :

                    <Link className="logo" to="/">
                        <span className="logo-light-mode">
                            <img src={logoDark} className="l-dark" height="22" alt=""/>
                            <img src={logoLight} className="l-light" height="22" alt=""/>
                        </span>
                        <img src={logoLight} height="22" className="logo-dark-mode" alt=""/>
                    </Link>
                    }
                </div>
        
                <div className="menu-extras">
                    <div className="menu-item">
                        <Link to="#"  className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>

                

                <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>
                    <ul className={manuClass}>
                        <li>
                            <Link to="/index">Home</Link>                           
                        </li>
                        {/* <li>
                            <Link to="#">Doutores</Link>                            
                        </li> */}
                        <li>
                            <Link to="/contact">Contato</Link>                            
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}