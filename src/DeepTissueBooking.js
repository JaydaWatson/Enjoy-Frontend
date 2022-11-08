import React, { useState, useEffect, useContext } from 'react';
import { TbMassage, TbCalendar, TbHome } from "react-icons/tb";
import { IoMdContact } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { BookingContext } from './BookingContext';
import DatePicker from "react-datepicker";
import axios from 'axios';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import "./Booking.css"


function DeepTissueBooking() {

    const {startDate, setStartDate} = useContext(BookingContext);

    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    };

    const { level, setLevels } = useContext(BookingContext);
    const { duration, setDuration } = useContext(BookingContext);
    const {name, setName} = useContext(BookingContext);
    const {town, setTown} = useContext(BookingContext);
    const {state, setState} = useContext(BookingContext);
    const {zip, setZip} = useContext(BookingContext);
    const {number, setNumber}= useContext(BookingContext);

    const [emessage, setMessage] = useState('');

    const [bookings, setBookings] = useState([]);

    const [excludedDates, setExcludedDates] = useState([]);

    const [arrDates, setArrDates] = useState([]);

    const nav = useNavigate()

    const validation = () => {
        if (name === '') {
            setMessage('You need to enter a name')
            return false
        } else if (number === '') {
            setMessage('You need to enter a phone number')
            return false
        } else if (town === '') {
            setMessage('You need to enter a town/city')
            return false
        } else if (state === '') {
            setMessage('You need to enter a state')
            return false
        } else if (zip === '') {
            setMessage('Youn need to enter a zip code')
            return false
        } else {
            setMessage('')
            return true
        }
    }

    const appponitmentBooked = () => {
        if (validation() === true) {
            const bookinginfo = {
                name,
                number,
                town,
                state,
                zip,
                startDate,
            }
            if (name !== '') {
                bookinginfo.name = name
            } else if (number !== '') {
                bookinginfo.number = number
            } else if (town !== '') {
                bookinginfo.town = town
            } else if (state !== '') {
                bookinginfo.state = state
            } else {
                bookinginfo.zip = zip
            }

            // const res = axios.post('/api', { bookinginfo })

            nav('./Payment')
        }

    };

    useEffect(() => {
        axios.get('/api').then(res => {
            // console.log(res.data.data)
            setBookings(res.data.data)

        });

    }, []);

    useEffect(() => {
        getData()

        getExcludedDates()

    }, [bookings])


    // console.log(bookings)

    function getData() {
        const setAlreadyBooked = bookings.map((booked) =>

            moment(booked.startDate).format()

        );

        const temp = {};

        for (const alreadybooked of setAlreadyBooked) {
            temp[alreadybooked] = true;
        }

        const uniqueAlreadyBooked = []
        for (const alreadybooked in temp) {
            uniqueAlreadyBooked.push(alreadybooked)
        }

        const results = uniqueAlreadyBooked.toString()

        // console.log (results)

        setArrDates(results.split(","))

        // console.log(arrDates)

    }


    function getExcludedDates() {
        let arrSpecificDates = [];

        for (let i = 0; i < arrDates.length; i++) {

            let dateinarr = moment(arrDates[i], moment.ISO_8601).toObject()

            arrSpecificDates.push(new Date(dateinarr.years, dateinarr.months, dateinarr.date));

        }
        arrSpecificDates.push(new Date())

        setExcludedDates(arrSpecificDates)

    }
   
    return (

        <div className='AppointmentBooking'>

            <div>

                <h2 className='header'>Appointment Booking</h2>
                <Link to="/" className='link'> <TbHome className='icons' icon="home" size="30" /> </Link>
                <Link to="/Massages" className='link'> <TbMassage className='icons' icon="Massages" size="30" /> </Link>
                <Link to="/ServiceOffered" className='link'> <TbCalendar className='icons' icon="ServiceOffered" size="30" /> </Link>
                <Link to="/Contact" className='link'> <IoMdContact className='icons' icon="Contact" size="30" /> </Link>

                <br />
                <br />

            </div>

            <div>

                <div className='datepicker'>

                <DatePicker
                        selected={startDate}
                        onSelect={getExcludedDates}
                        onChange={(date) => setStartDate(date)}
                        showTimeSelect
                        minTime={new Date(0, 0, 0, 8, 30)} //8:30am
                        maxTime={new Date(0, 0, 0, 22, 30)} //10:30pm
                        filterTime={filterPassedTime}
                        excludeDates={excludedDates}
                        timeCaption="Time"
                        dateFormat="MMMM d, yyyy h:mm aa"
                        minDate={new Date()}
                        inline
                        required={true}
                    />

                </div>

                <div className="form">

                    <h4 className='Error'>{emessage}</h4>

                    <div>

                        <div className='Form'>
                            <input
                                className='input'
                                type={'text'}
                                required
                                label="Name"
                                placeholder="Enter Your Full Name"
                                onChange={(e) => setName(e.target.value)} />

                            <input
                                className='input'
                                type={'number'}
                                required
                                label="Number"
                                maxLength={10}
                                placeholder="973-222-1111"
                                onChange={(e) => setNumber(e.target.value)} />

                            <input
                                className='input'
                                type={'text'}
                                required
                                label="Town"
                                placeholder="Enter Your Town"
                                onChange={(e) => setTown(e.target.value)} />

                            <input
                                className='input'
                                type={'text'}
                                required
                                label="State"
                                placeholder="Enter Your State"
                                onChange={(e) => setState(e.target.value)} />

                            <input
                                className='input'
                                type={'number'}
                                required
                                label="Zip"
                                maxLength={5}
                                placeholder="Enter Your Zip Code"
                                onChange={(e) => setZip(e.target.value)} />
                        </div>

                    </div>

                </div>
                
                <div className='Selectors'>
                Selected Massage

                <div className="Levels">
                    <input
                        type="radio"
                        id="level 1"
                        value="Deep Tissue Massage"
                        name='levels'
                        onClick={(e) => setLevels(e.target.value)}
                    />Deep Tissue Massage

                </div>

                Desired Duration

                <div className="Duration">
                    <input
                        type="radio"
                        id="30 minutes"
                        name="duration"
                        value="20 minutes"
                        onClick={(e) => setDuration(e.target.value)}
                    />20 minutes

                </div>
            </div>

            </div>

            <div>
                <button className="button" onClick={appponitmentBooked} >Book Appointment</button>
            </div>


        </div>


    );

}

export default DeepTissueBooking;
