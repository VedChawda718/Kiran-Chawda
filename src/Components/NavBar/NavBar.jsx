import React, { useState, useEffect } from 'react';
import './NavBar.css';
import Api from '../Api/Api';
import logo from "../../assets/logo.png"


const NavBar = () => {
  const [menuData, setMenuData] = useState(Api);
  const [isOpen, setIsOpen] = useState(true);


  const falseBuyOption = () => {
    setShowBuyOption((prevState) => false); // Toggle the state
  };

  useEffect(() => {
    // Apply CSS to disable scrolling when the menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);
  return (
    <>
    <div className="nav-box">
    <div className={`${isOpen ? 'menu-button' : 'menu-button-open' }`} onClick={()=> setIsOpen(!isOpen)}>
        <div className="menu-button-burger">
        </div>
    </div>
    <div className="navBox">
    <nav className={`${isOpen ? 'navBar': 'navBar-open'}`}>
            <ul>
            <img className="logo_K" src={logo} alt="" />
                <li><a href="" id="home">HOME</a></li>
                <li><a href="" id="home">ABSTRACT</a></li>
                <li><a href="" id="home">LANSCAPE</a></li>
                <li><a href="" id="home">SKETCHES</a></li>
                <li><a href="" id="home">STAINED GLASS</a></li>
                <li><a href="" id="home">BUY</a></li>
                <li><a href="" id="home">CONTACT</a></li>
         <div className="nav__footer">
                <h5> <b>&copy;</b>. Designed by <a href="https://www.instagram.com/vedchawda.718/"><b>Ved Chawda</b></a></h5>
        </div>
            </ul>
        
    </nav>
    </div>
    </div>
    </>
  )
}

export default NavBar

