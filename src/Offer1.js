import React from 'react';
import { Link } from 'react-router-dom';
import { TbMassage, TbCalendar, TbHome } from "react-icons/tb";
import { IoMdContact } from "react-icons/io";
import './Offer.css';
import ReactPlayer from "react-player";


function Offer1() {
    return (
        <div className='Offer'>

            <h1 className='ReadMore'>Level 1 </h1>


            <Link to="/" className='link'> <TbHome className='icons' icon="home" size="30" /> </Link>
            <Link to="/Massages" className='link'> <TbMassage className='icons' icon="Massages" size="30" /> </Link>
            <Link to="/ServiceOffered" className='link'> <TbCalendar className='icons' icon="ServiceOffered" size="30" /> </Link>
            <Link to="/Contact" className='link'> <IoMdContact className='icons' icon="Contact" size="30" /> </Link>


            <div className='time'> 
                30mins, 45mins, 1hr
            </div>

            <div className='price'> $130-$180</div>

            <div className='serviceDescription'>

                <h3>Service Description</h3>
                <p> Full body massage from head to toe.</p>
            </div>

            <div className='Policy'>

                <h3>Cancellation Policy</h3>
                <p>NO REFUNDS. I am able to reschedule your appointment one time. Understand that I am not responsible if you booked for the wrong city or booked when I will not be in your state.</p>

            </div>



        </div>
    )
}

export default Offer1
