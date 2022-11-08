import React, { useEffect, useContext, useRef } from 'react';
import './AppointmentBooked.css';
import axios from 'axios';
import { BookingContext } from './BookingContext';


function AppointmentBooked() {

  const { startDate, setStartDate } = useContext(BookingContext);
  const { level, setLevels } = useContext(BookingContext);
  const { duration, setDuration } = useContext(BookingContext);
  const { name, setName } = useContext(BookingContext);
  const { town, setTown } = useContext(BookingContext);
  const { state, setState } = useContext(BookingContext);
  const { zip, setZip } = useContext(BookingContext);
  const { number, setNumber } = useContext(BookingContext);

  let getbooking = JSON.parse(window.sessionStorage.getItem('booking'));
  const shouldRender = useRef(true)

  useEffect(() => {
    // console.log("effect running")

    if (shouldRender.current) {
      shouldRender.current = false


      if (getbooking && getbooking !== "") {
        axios.post('/api', getbooking)
          .then(res => {
            // console.log(res)
            window.sessionStorage.clear()
            getbooking = ""

          })
          .catch(err => {
            // console.log(err)
          })
      }
    }
    // sessionStorage.removeItem('booking')

  }, []);

  return (
    <div className='AppointmentBooked'>

      <h1>You Have Successfully Booked Your Appointment</h1>

    </div>
  )
}

export default AppointmentBooked