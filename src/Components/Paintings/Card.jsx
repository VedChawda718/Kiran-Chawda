import React from 'react';
import "./Card.css";

const Card = ({ props, showBuyOption }) => {
  
  return (
   <>
  <div id="cards" className="title"><h1 className='my-work-title'>My Work</h1></div>
    <div className='cardWrapper'>
    {props.map((currElem) => {
      return(
        <>
        <div className="card-container"  key={currElem.id}>
        <div className="img-container">
         <a href={currElem.image}><img src={currElem.image} alt="" /></a>
          <br/>
          <hr />
          <h2>{currElem.name}</h2>  
        </div>
        <div className="img-details">
        {showBuyOption && ( // Conditionally render price and buy option
                <>
                  <p>Price: {currElem.price}</p>
                  <button><i class="fa-solid fa-bag-shopping"></i>Order</button>
                </>
              )}
          </div>
      </div>
      
      </>
      )
    })}
    </div>
   
    </>
  )
}

export default Card