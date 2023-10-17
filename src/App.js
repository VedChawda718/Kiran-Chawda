import React, {useState} from "react";
import {useRef} from "react";
import './App.css';
import Card from "./Components/Paintings/Card"
import Api from "./Components/Api/Api"
import Home from "./Components/Home/Home"
import Footer from "./Components/Footer/Footer"
import ImageCarousel from "./Components/ImageCarousel/ImageCarousel";
import logo from "./assets/logo.png"
import Poem from "./Components/Poem/Poem"
import logo1 from "./assets/logo1.png"



function App() {
  const [menuData, setMenuData] = useState(Api);
  const [showBuyOption, setShowBuyOption] = useState(false); 
  const [isOpen, setIsOpen] = useState(true);

  // useEffect(() => {
  //   // Apply CSS to disable scrolling when the menu is open
  //   if (!isOpen) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'auto';
  //   }
  // }, [isOpen]);

  const filterItem = (category) => {
    const updatedList = Api.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
    showNavbar();
   falseBuyOption();
  };

  const trueBuyOption = () => {
    setShowBuyOption((prevState) => true); // Toggle the state
  };

  const falseBuyOption = () => {
    setShowBuyOption((prevState) => false); // Toggle the state
  };

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav")
  }
  return (

      
  <>

  <div className="main-container">
  <header id="home">
 
  <img className="responsive" src={logo} alt="" />
     <nav ref={navRef}>
    
        <ul className="nav-links">
        <img className="non-responsive" src={logo} alt="" />
            {/* <img src={logo1} className={`${(isOpen && window.innerWidth >600) ? "not-visible": "logo-responsive"}`}  alt="" /> */}
            <li ><a href="#home" onClick={()=>{showNavbar(); setIsOpen(!isOpen)}}>HOME</a></li>
            <li ><a href="#about" onClick= {()=>{showNavbar(); setIsOpen(!isOpen)}}>ABOUT</a></li>
            <li><a href="#cards"  onClick={() => { filterItem("Buy"); trueBuyOption();setIsOpen(!isOpen) }}>BUY</a></li>
            <li><a href="#cards"  onClick={() => {filterItem("Abstract") ; setIsOpen(!isOpen)}}>ABSTRACT</a></li>
            <li><a href="#cards" onClick={() => {filterItem("Landscape") ; setIsOpen(!isOpen)}}>LANDSCAPE</a></li>
            <li><a href="#cards" onClick={() =>{filterItem("Stained Glass") ; setIsOpen(!isOpen)}}>STAINED GLASS</a></li>
            <li><a href="#cards" onClick={() => {filterItem("Sketches") ; setIsOpen(!isOpen)}}>SKETCHES</a></li>
            <li><a href="#cards" onClick={() => {setMenuData(Api); showNavbar(); falseBuyOption(); setIsOpen(!isOpen) }}>ALL</a></li>
            <li ><a  href="#contact" onClick={()=> {showNavbar(); setIsOpen(!isOpen)}}>CONTACT</a></li>
            <p className={`${window.innerWidth > 600 ? "not-visible" : "visible"}`}>&copy; Designed by <a href="https://www.instagram.com/vedchawda.718/"><b>Ved Chawda</b></a></p>
        </ul>
    </nav>
    <div className="nav-button">
    <div className={`${isOpen ? 'menu-button' : 'menu-button-open'   }`} onClick={()=> {setIsOpen(!isOpen); showNavbar()}}>
             <div className="menu-button-burger">
             </div>
    </div>    
    </div>
    </header>
  <br />
  <br />
  <br />
  <Home />
  <br />
  <br />
  <br />
  <br />
  <ImageCarousel/>
  <br />
  <br />
  <br id="cards"/>
  <Card  props={menuData}  showBuyOption={showBuyOption}  />
  <hr />
  <br />
  <br />
  <br />
  <Poem/>
  <br />
  <br />
  <br />
  <hr />
  <br />
  <br />
  <br />
  <Footer/>
  </div>
  </>
  
  );
}

export default App;
