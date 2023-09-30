import React from 'react'
import "./MyCard.css"
import Small from "../../assets/images1/S-IMG1.jpg"
import Big from "../../assets/images1/B-IMG1.jpg"
import Small2 from "../../assets/images1/S-IMG2.jpg"
import Big2 from "../../assets/images1/B-IMG2.jpg"
import Small3 from "../../assets/images1/S-IMG3.jpg"
import Big3 from "../../assets/images1/B-IMG3.jpg"
import Small4 from "../../assets/images1/S-IMG4.jpg"
import Big4 from "../../assets/images1/B-IMG4.png"
import Small5 from "../../assets/images1/S-IMG5.jpg"
import Big5 from "../../assets/images1/B-IMG5.jpg"


const MyCard = (props) => {
   
  return (
    <>
      <div className="mycard-wrapper" >
        <div className="mycard-container" >
            <div className="img-box">
                <img className='img-big' src={Big4} alt="" />
                <img className='img-small'src={Small4} alt="" />
            </div>
            <div className="event-title">
                <h3><span>1987</span></h3>
                <h1>Art Work got Selected In All India Youth Art Exhibition</h1>
            </div>
            <div className="event-details">
                <p>Artwork was selected from 15,000 entries in the All India Youth Art Exhibition, organized by the All India Youth Art Exhibition Committee. Patrons included <b>Mrs. Shabana Azmi</b> , and executive committee members included <b>Shri M. J. Akbar</b>, with a judging panel that included <b> M.F. Husain</b>.</p>
            </div>
        </div>
    </div>
    <div className="mycard-wrapper" >
    
        <div className="mycard-container" >
            <div className="img-box">
                <img className='img-big' src={Big} alt="" />
                <img className='img-small'src={Small} alt="" />
            </div>
            <div className="event-title">
                <h3><span>2007</span></h3>
                <h1>Exhibition</h1>
            </div>
            <div className="event-details">
                <p>The ArtWork was Awarded and Exhibited in Indian Art Exhibtion held at <b>Taman Ismail Marzuki</b> in <b>Jakarta</b>, <b>Indonesia</b> from 23rd August till 5th September 2007 organized by <b>Ajit Vahadane</b>, <b>Indian Artist Network</b>, Mumbai, India.</p>
            </div>
        </div>
    </div>
    <div className="mycard-wrapper" >
   <div className="mycard-container" >
       <div className="img-box">
           <img className='img-big' src={Big2} alt="" />
           <img className='img-small'src={Small2} alt="" />
       </div>
       <div className="event-title">
           <h3><span>2008</span></h3>
           <h1>First National Level Art Competition & Exhibition</h1>
       </div>
       <div className="event-details">
           <p>The ArtWork was recognized with a merit award in the first national-level art competition organized by Kala Sangati. </p>
       </div>
   </div>
</div>
    <div className="mycard-wrapper" >
        <div className="mycard-container" >
            <div className="img-box">
                <img className='img-big' src={Big5} alt="" />
                <img className='img-small'src={Small5} alt="" />
            </div>
            <div className="event-title">
                <h3><span>2009</span></h3>
                <h1>Live-Demo in Santoor Vadak Rahul Sharma's Show </h1>
            </div>
            <div className="event-details">
                <p>Engaged in live concert alongside renowned musician, Santoor Vadak <b>Rahul Sharma</b>.These collaboration added a unique dimension to the work .</p>
            </div>
        </div>
    </div>
    <div className="mycard-wrapper" >
    
        <div className="mycard-container" >
            <div className="img-box">
                <img className='img-big' src={Big3} alt="" />
                <img className='img-small'src={Small3} alt="" />
            </div>
            <div className="event-title">
                <h3><span>2016</span></h3>
                <h1>Live-Demo at Camlin, India</h1>
            </div>
            <div className="event-details">
                <p> Live demonstration sponsored by <b>Camlin.</b></p>
            </div>
        </div>
    </div>
    
    </>
  )

}

export default MyCard