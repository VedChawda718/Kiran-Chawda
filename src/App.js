// import React, { useState } from "react";
// import "./App.css";
// import Card from "./Components/Paintings/Card";
// import Home from "./Components/Home/Home";
// import Footer from "./Components/Footer/Footer";
// import ImageCarousel from "./Components/ImageCarousel/ImageCarousel";
// import logo from "./assets/logo.png";
// import Poem from "./Components/Poem/Poem";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import SignupForm from "./Components/SignupForm/SignupForm";
// import NavBar from "./Components/NavBar/NavBar";
// import Api from "./Components/Api/Api";

// function App() {
//   const [menuData, setMenuData] = useState(Api);
//   const [showBuyOption, setShowBuyOption] = useState(false);
//   const handleFilter = (category) => {
//     const updatedList = Api.filter((curElem) => {
//       return  curElem.category === category;
//     });
//     setMenuData(updatedList);
//     setShowBuyOption(false);
//   };

//   return (
//     <>
//       <Router>
   
     
          
//         <div className="main-container">
//           <NavBar handleFilter={handleFilter} />
//           <br />
//           <br />
//           <br />
//           <Home />
//           <br />
//           <br />
//           <br />
//           <br />
//           <ImageCarousel />
//           <br />
//           <br />
//           <br id="cards" />
//          <Card props={menuData} showBuyOption={showBuyOption} />  
//           <hr />
//           <br />
//           <br />
//           <br />
//          <Poem /> 
//           <br />
//           <br />
//           <br />
//           <hr />
//           <br />
//           <br />
//           <br />
//         <Footer />
//         <Routes>
//             <Route path="/signup" element={<SignupForm />} />

//           </Routes>
//           </div>
//       </Router>
//     </>
//   );
// }

// export default App;
import React, { useState } from "react";
import "./App.css";
import Card from "./Components/Paintings/Card";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import ImageCarousel from "./Components/ImageCarousel/ImageCarousel";
// import logo from "./assets/logo.png";
import Poem from "./Components/Poem/Poem";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupForm from "./Components/SignupForm/SignupForm";
import NavBar from "./Components/NavBar/NavBar";
import Api from "./Components/Api/Api";

function App() {
  const [menuData, setMenuData] = useState(Api);
  const [showBuyOption, setShowBuyOption] = useState(false);
  const handleFilter = (category) => {
    const updatedList = Api.filter((curElem) => {
      return  curElem.category === category;
    });
    setMenuData(updatedList);
    setShowBuyOption(false);
  };

  return (
    <>
      <Router>
   
      <Routes>
          
      <Route
      path="/"
       element = {<>
        <NavBar handleFilter={handleFilter} />
        <Home />
        <ImageCarousel />
        <Card  props={menuData} showBuyOption={showBuyOption} />
        <Poem /> 
        <Footer />
       </>}
         />
        <Route path="/signup" element={<SignupForm />} />

       </Routes>
      
      </Router>
    </>
  );
}

export default App;