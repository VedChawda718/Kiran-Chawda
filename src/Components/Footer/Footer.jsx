import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <>
    <div id='contact'className="footer-wrapper">
    <div className="footer-container1">
    <div className="link-name">
       <h1>Kiran Chawda</h1>
       <a href="https://maps.app.goo.gl/m1yborHB6eWeyirA7"><i class="fa-solid fa-location-dot"></i>Dev Glass, Nagpur, Maharashtra, India.</a>
     </div>
      <hr className="responsive-hr" />
     <div className="other-links">
      <h3>Also Visit</h3>
     <ul>
      <li><a href="http://kiranchawdapaintings.blogspot.com/search?updated-max=2018-01-19T09:15:00-08:00&max-results=7&start=21&by-date=false&m=1">BlogSpot.com</a></li>
      <li><a href="https://www.artwanted.com/kiranchawda/profile/">ArtWanted.com</a></li>
    </ul>
     </div>
    </div>
    <br />
    <br />
    <div className='footer-container2'>
    <ul className='footer2' >
        <hr />
        <li><a href="https://www.facebook.com/kiran.chawda.75?mibextid=nW3QTL"><i class="fa-brands fa-facebook"></i></a></li>
        <li><a href="mailto:kiranbhai.chawda@gmail.com"><i class="fa-solid fa-at"></i></a></li>
        <li><a href="https://www.instagram.com/kiranchawda_paintings/#"><i class="fa-brands fa-instagram"></i></a></li>
        <hr />
    </ul>
    <p>&copy; 2023. All Rights Reserved.</p>
    </div>
    </div>
    {/* <h1>. . .Contact. . .</h1>
    <ul className='footer-container'>
        
        <li><a href="https://www.facebook.com/kiran.chawda.75?mibextid=nW3QTL"><i class="fa-brands fa-facebook"></i></a></li>
        <li><a href="mailto:kiranbhai.chawda@gmail.com"><i class="fa-solid fa-at"></i></a></li>
        <li><a href="https://www.instagram.com/kiranchawda_paintings/#"><i class="fa-brands fa-instagram"></i></a></li>
    </ul>
  <br />
  <hr  />
  <br />
    <h1>. . .Also Visit. . .</h1>
    <ul className='footer-container2'>
        
        <li><a href="http://kiranchawdapaintings.blogspot.com/search?updated-max=2018-01-19T09:15:00-08:00&max-results=7&start=21&by-date=false&m=1">KiranChawda.BlogSpot.com</a></li>
        <li><a href="https://www.artwanted.com/kiranchawda/profile/">KiranChawda.ArtWanted.com</a></li>
    </ul>
  <hr  />
  <br /> */}
    </>
  )
}

export default Footer