import { Link } from 'react-router-dom';
import React, { useState, useRef } from "react";
import logo from "../../assets/logo.png";
import './NavBar.css'
const NavBar = ({ handleFilter }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [showBuyOption, setShowBuyOption] = useState(false);
  const navRef = useRef();
 


  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };
  const trueBuyOption = () => {
    setShowBuyOption((prevState) => true); // Toggle the state
  };


  const filterItem = (category) => {
    handleFilter(category);
    showNavbar();
  };

  return (
    <div className='main-container'>
      <header id="home">
        <img className="responsive" src={logo} alt="" />
        <nav ref={navRef}>
          <ul className="nav-links">
            <img className="non-responsive" src={logo} alt="" />
            <li>
              <a href="#home" onClick={() => { showNavbar(); setIsOpen(!isOpen) }}>
                HOME
              </a>
            </li>
            <li ><a href="#about" onClick= {()=>{showNavbar(); setIsOpen(!isOpen)}}>ABOUT</a></li>
            <li>
              <a href="#cards" onClick={() => { filterItem("Buy"); trueBuyOption(); setShowBuyOption(true); setIsOpen(!isOpen) }}>
                BUY
              </a>
            </li>
            <li>
              <a href="#cards" onClick={() => { filterItem("Abstract"); setIsOpen(!isOpen) }}>
                ABSTRACT
              </a>
            </li>
            <li><a href="#cards" onClick={() => {filterItem("Landscape") ; setIsOpen(!isOpen)}}>LANDSCAPE</a></li>
           <li><a href="#cards" onClick={() =>{filterItem("Stained Glass") ; setIsOpen(!isOpen)}}>STAINED GLASS</a></li>
           <li><a href="#cards" onClick={() => {filterItem("Sketches") ; setIsOpen(!isOpen)}}>SKETCHES</a></li>
           {/* <li><a href="#cards" onClick={() => {filterItem("All"); showNavbar(); setIsOpen(!isOpen) }}>ALL</a></li> */}
           <li ><a  href="#contact" onClick={()=> {showNavbar(); setIsOpen(!isOpen)}}>CONTACT</a></li>
           <li><Link to='/signup'><i class="fa-solid fa-user"></i></Link></li>

           <p className={`${window.innerWidth > 600 ? "not-visible" : "visible"}`}>&copy; Designed by <a href="https://www.instagram.com/vedchawda.718/"><b>Ved Chawda</b></a></p>
          </ul>
        </nav>
        <div className="nav-button">
          <div
            className={`${isOpen ? "menu-button" : "menu-button-open"}`}
            onClick={() => {
              setIsOpen(!isOpen);
              showNavbar();
            }}
          >
            <div className="menu-button-burger"></div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
