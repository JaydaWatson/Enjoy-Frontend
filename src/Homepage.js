import React from "react";
import './Homepage.css';
import ReactPlayer from "react-player";
import { Link } from "react-router-dom"
import { TbMassage, TbCalendar, TbHome } from "react-icons/tb";
import { IoMdContact, IoMdLogIn } from "react-icons/io";


function Header() {
    return (
        <header className="header" >
            <h1 className="h1"> Enjoy The Moment Massage </h1>

            <Link to="/" className='link'> <TbHome className='icons' icon="home" size="30" /> </Link>
            <Link to="/Massages" className='link'> <TbMassage className='icons' icon="Massages" size="30" /> </Link>
            <Link to="/ServiceOffered" className='link'> <TbCalendar className='icons' icon="ServiceOffered" size="30" /> </Link>
            <Link to="/Contact" className='link'> <IoMdContact className='icons' icon="Contact" size="30" /> </Link>

        </header>
    );
}

function Main() {

    // const [videoFilePath, setVideoFilePath] = useState(null);

    // const handleVideoUpload = (event) => {
    //     const [file] = event.target.files;
    //     setVideoFilePath(URL.createObjectURL(file));
    // };

    return (
        <section>

            {/* <input type='file' onChange={handleVideoUpload}/> */}


            <ReactPlayer
                className='react-player'
                width="65%"
                height="560px"
                url='https://firebasestorage.googleapis.com/v0/b/react-enjoythemomentmassage.appspot.com/o/HomepageVideo.mp4?alt=media&token=ff817a67-4187-46fd-8653-493e167729a2'
                controls={true}
            />

            <p></p>

        </section>
    );
}

function Footer() {
    return (
        <footer className="footer">
            
            <Link to="/Login" className='link'> <IoMdLogIn className='bookingicon' icon="BookingInfo" size="30" /> </Link>

            <p>Copyright 2022</p>

        </footer>
    );
}

function Homepage() {
    return (
        <div className="Homepage">
            <Header />

            <Main />

            <Footer />
            
        </div>


);
}

export default Homepage;
