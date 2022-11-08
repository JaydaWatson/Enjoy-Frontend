import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import { TbHome } from "react-icons/tb";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "./firebase";
import axios from 'axios';
import moment from 'moment';
import './BookingInfo.css';

function BookingInfo() {

    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        axios.get('/api').then(res => {
            console.log(res.data)
            setBookings(res.data.data)

        })

    }, []
    )

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/Login");
    }, [user, loading]);

    return (

        <div>

            <h1 className='title' style={{ textAlign: "center" }}>Appointments Booked</h1>

            <div className='homebutton'>
                <Link to="/" className='link'> <TbHome className='icons' icon="home" size="30" /> </Link>
            </div>

            {bookings ?
                bookings.map((book) =>

                    <div className='BookedAppointments' key={book._id}>
                        <div>
                            Name: {book.name}
                        </div>

                        <div>
                            Number: {book.number}
                        </div>

                        <div>
                            Town: {book.town}
                        </div>

                        <div>
                            State: {book.state}
                        </div>

                        <div>
                            Zip: {book.zip}
                        </div>

                        <div>
                            Date & Time: {moment(book.startDate).format('MMMM Do YYYY, h:mm:a')}
                        </div>

                        <div>
                            Level: {book.level}
                        </div>

                        <div>
                            Duration: {book.duration}
                        </div>

                        <br />

                    </div>

                ) :

                <div/>
            }

            <button className="logout__btn" onClick={logout}>
                Logout
            </button>

        </div >
    )
}

export default BookingInfo