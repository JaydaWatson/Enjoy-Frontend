import React from 'react';
import { TbMassage, TbCalendar, TbHome } from "react-icons/tb";
import { IoMdContact, IoLogoTwitter } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import { SiOnlyfans } from "react-icons/si";
import './Contact.css';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <div className='contact'>
            <h1 className='Header'>Contact</h1>

            <br />

            <Link to="/" className='link'> <TbHome className='icons' icon="home" size="30" /> </Link>
            <Link to="/Massages" className='link'> <TbMassage className='icons' icon="Massages" size="30" /> </Link>
            <Link to="/ServiceOffered" className='link'> <TbCalendar className='icons' icon="ServiceOffered" size="30" /> </Link>
            <Link to="/Contact" className='link'> <IoMdContact className='icons' icon="Contact" size="30" /> </Link>

            <br />
            <br />

            <p className='text'> <GrInstagram /> Instagram: @enjoythemoment_wtommy </p>
            <p1 className='text'> <SiOnlyfans /> OnlyFans: @enjoythemoment_massage</p1>

            <br />
            <br />

            <p2 className='text'> <IoLogoTwitter /> Twitter: @_tommyjay33333</p2>
        </div>
    );
}

export default Contact;