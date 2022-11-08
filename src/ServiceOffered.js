import React from "react";
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";
import { TbMassage, TbCalendar, TbHome } from "react-icons/tb";
import { IoMdContact } from "react-icons/io";
import "./ServiceOffered.css"

function ServiceOffered() {

    const nav = useNavigate();

    const navigateBooking = () => {
        nav('./Booking');
      };

    const navigateDeepTissueBooking = () => {
        nav('./DeepTissueBooking')
    }

    return(

        <div className="main">

            <h1 className="header"> Services Offered</h1>

            <Link to="/" className='link'> <TbHome className='icons' icon="home" size="30" /> </Link>
            <Link to="/Massages" className='link'> <TbMassage className='icons' icon="Massages" size="30" /> </Link>
            <Link to="/ServiceOffered" className='link'> <TbCalendar className='icons' icon="ServiceOffered" size="30" /> </Link>
            <Link to="/Contact" className='link'> <IoMdContact className='icons' icon="Contact" size="30" /> </Link>

            <div className="offer1">

                <h2>Level 1 </h2>

                <Link to="/Offer1">Read More</Link>

                <p>30 minutes = $130 </p>
                <p>45 minutes = $150 </p>
                <p>1 hour = $180 </p>

                <button className="Button" onClick={ navigateBooking } >Book Now</button>
            </div>

            <div className="offer2">

                <h2>Level 2 </h2>

                <Link to="/Offer2">Read More</Link>

                <p> 30 minutes = $140 </p>
                <p>45 minutes = $160 </p>
                <p>1 hour = $180 </p>

                <button className="Button" onClick={ navigateBooking }>Book Now</button>

            </div>

            <div className="offer3">

                <h2>Level 3 </h2>

                <Link to="/Offer3">Read More</Link>

                <p>30 minutes = $160 </p>
                <p>45 minutes = $180 </p>
                <p>1 hour = $200 </p>

                <button className="Button" onClick={ navigateBooking }>Book Now</button>

            </div>

            <div className="offer4"> 

                <h2> 20 Minute Deep Tissue Massage</h2>

                <Link to="/Offer4">Read More</Link>

                <p className="p1"> 20 minutes = $60</p>

                <button className="Button" onClick={ navigateDeepTissueBooking } >Book Now</button>

            </div>
        
        </div>
        

    );
}

export default ServiceOffered;