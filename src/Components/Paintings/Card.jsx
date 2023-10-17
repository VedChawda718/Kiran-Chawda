import React, { useState } from 'react';
import './Card.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // This is for the CSS file
import Pagination from '@mui/material/Pagination';
import { useSwipeable } from 'react-swipeable';

AOS.init();

const Card = ({ props, showBuyOption }) => {
  const itemsPerPage = window.innerWidth > 600 ? 3 : 9; // Show 12 cards on larger screens, and 6 on mobile devices
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = props.slice(indexOfFirstItem, indexOfLastItem);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentPage < Math.ceil(props.length / itemsPerPage)) {
        setCurrentPage(currentPage + 1);
      }
    },
    onSwipedRight: () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    },
  });

  return (
    <>
      <br />
      <br />
      <br />
     
      <Pagination
        count={Math.ceil(props.length / itemsPerPage)}
        page={currentPage}
        onChange={handleChangePage}
      />
    
          <div {...handlers}>
      <div className="cardWrapper">
        {currentItems.map((currElem) => {
          return (
            <div data-aos={window.innerWidth > 600 ? 'zoom-in' : ''} key={currElem.id}>
              <div className="card-container">
                <div className="img-container">
                  <a href={currElem.image}>
                    <img src={currElem.image} alt="" />
                  </a>
                  <br />
                  <hr />
                  <h2>{currElem.name}</h2>
                </div>
                <div className="img-details">
                  {showBuyOption && (
                    <>
                      <p>Price: {currElem.price}</p>
                      <button>Order</button>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Card;

