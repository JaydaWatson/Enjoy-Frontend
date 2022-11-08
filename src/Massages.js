import React from 'react';
import { Link } from 'react-router-dom';
import { TbMassage, TbCalendar, TbHome } from "react-icons/tb";
import { IoMdContact } from "react-icons/io";
import './Massages.css';
import ReactPlayer from "react-player";


function Massages() {
    return (
        <div className='Massages'>

            <h1 className='h1'>Massages</h1>

            <Link to="/" className='link'> <TbHome className='icons' icon="home" size="30" /> </Link>
            <Link to="/Massages" className='link'> <TbMassage className='icons' icon="Massages" size="30" /> </Link>
            <Link to="/ServiceOffered" className='link'> <TbCalendar className='icons' icon="ServiceOffered" size="30" /> </Link>
            <Link to="/Contact" className='link'> <IoMdContact className='icons' icon="Contact" size="30" /> </Link>

            <div>
                <div className='level1'>

                    <h2 className='levelHeader'>Level 1 Head-Toe Full Body Massage </h2>

                    <ReactPlayer
                        className='react-player'
                        width="65%"
                        height="600px"
                        controls={true}
                        url="https://firebasestorage.googleapis.com/v0/b/react-enjoythemomentmassage.appspot.com/o/Level-1.mp4?alt=media&token=1273b856-c308-4f2f-851c-9ec1f27e646d"
                    />

                    <ReactPlayer
                        className='react-player'
                        width="65%"
                        height="600px"
                        controls={true}
                        url="https://firebasestorage.googleapis.com/v0/b/react-enjoythemomentmassage.appspot.com/o/Level-1.mp4?alt=media&token=1273b856-c308-4f2f-851c-9ec1f27e646d"
                    />

                    <ReactPlayer
                        width="65%"
                        height="600px" 
                        className='react-player'
                        controls={true}
                        url="https://firebasestorage.googleapis.com/v0/b/react-enjoythemomentmassage.appspot.com/o/Level-1.mp4?alt=media&token=1273b856-c308-4f2f-851c-9ec1f27e646d"
                    />

                </div>

                <div className='level2'>

                    <h2 className='levelHeader'>Level 2 Focusing on Tension/Stress With A Taste of Level 3 </h2>

                    <ReactPlayer
                        className='react-player'
                        width="65%"
                        height="600px"
                        controls={true}
                        url="https://firebasestorage.googleapis.com/v0/b/react-enjoythemomentmassage.appspot.com/o/Level-1.mp4?alt=media&token=1273b856-c308-4f2f-851c-9ec1f27e646d"
                    />

                    <ReactPlayer
                        className='react-player'
                        width="65%"
                        height="600px"
                        controls={true}
                        url="https://firebasestorage.googleapis.com/v0/b/react-enjoythemomentmassage.appspot.com/o/Level-1.mp4?alt=media&token=1273b856-c308-4f2f-851c-9ec1f27e646d"
                    />

                    <ReactPlayer
                        className='react-player'
                        width="65%"
                        height="600px"
                        controls={true}
                        url="https://firebasestorage.googleapis.com/v0/b/react-enjoythemomentmassage.appspot.com/o/Level-1.mp4?alt=media&token=1273b856-c308-4f2f-851c-9ec1f27e646d"
                    />

                </div>

                <div className='level3'>

                    <h2 className='levelHeader'>Level 3 Make You Fall In Love Experience, Stretch Therapy, Body2Body, Up Close And Personal </h2>

                    <ReactPlayer
                        className='react-player'
                        width="65%"
                        height="600px"
                        url="https://firebasestorage.googleapis.com/v0/b/react-enjoythemomentmassage.appspot.com/o/Level-3.mp4?alt=media&token=352e93c4-3d68-45a6-9341-24b1d6b85302"
                        controls={true}
                    />

                    <ReactPlayer
                        className='react-player'
                        width="65%"
                        height="600px"
                        controls={true}
                        url="https://firebasestorage.googleapis.com/v0/b/react-enjoythemomentmassage.appspot.com/o/Level-33.mp4?alt=media&token=d3925743-6534-413a-bf5b-cbd3b045e5f6"
                    />

                    <ReactPlayer
                        className='react-player'
                        width="65%"
                        height="600px"
                        controls={true}
                        url="https://firebasestorage.googleapis.com/v0/b/react-enjoythemomentmassage.appspot.com/o/Level-333.mp4?alt=media&token=0d523ec0-62f1-4e1f-8905-92f0144f57d0"
                    />

                </div>

            </div>

        </div>
    );
}

export default Massages;