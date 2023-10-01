import React, {useState} from "react";
import {useRef} from "react";
import './App.css';
import Card from "./Components/Paintings/Card"
import Api from "./Components/Api/Api"
import Home from "./Components/Home/Home"
import Footer from "./Components/Footer/Footer"
import ImageCarousel from "./Components/ImageCarousel/ImageCarousel";

function App() {
  const [menuData, setMenuData] = useState(Api);
  const [showHamburger, setShowHamburger] = useState(true)
  const [showBuyOption, setShowBuyOption] = useState(false); 

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
     <nav ref={navRef}>
        <ul >
            <li ><a  href="#home" onClick={showNavbar}><i class="fa-solid fa-house"></i></a></li>
            <li ><a  href="#about" onClick={showNavbar}>About</a></li>
            <li><a href="#cards"  onClick={() => { filterItem("Buy"); trueBuyOption(); }}>Buy</a></li>
            <li><a href="#cards"  onClick={() => filterItem("Abstract")}>Abstract</a></li>
            <li><a href="#cards" onClick={() => filterItem("Landscape")}>Landscape</a></li>
            <li><a href="#cards" onClick={() => filterItem("Stained Glass")}>Stained Glass</a></li>
            <li><a href="#cards" onClick={() => filterItem("Sketches")}>Sketches</a></li>
            <li><a href="#cards" onClick={() => {setMenuData(Api); showNavbar(); falseBuyOption();}}>All</a></li>
            <li ><a  href="#contact" onClick={showNavbar}><i class="fa-solid fa-link"></i></a></li>
            <button className="nav-btn nav-close-btn" onClick={() => {
              showNavbar()
              setShowHamburger(true)
            }}><i class="fa-solid fa-angles-up"></i></button>

        </ul>
    </nav>

    <button className={`${showHamburger ? 'nav-btn1' : 'active'}`} onClick={() => {
      showNavbar()
      setShowHamburger(false)
      }}><i class="fa-solid fa-bars"></i></button>
    </header>
  <br />
  <br />
  <br />
  <Home />
  <br />
  <br />
  <br  />
  <hr  />
  <br  />
  <br />
  <br />
  <ImageCarousel/>
  <br />
  <br />
  <br />
  <hr  />
  <br />
  <br />
  <br />
  <Card  props={menuData}  showBuyOption={showBuyOption}/>
  <br />
  <br />
  <br />
  <Footer/>
  </div>
  </>
  
  );
}

export default App;
