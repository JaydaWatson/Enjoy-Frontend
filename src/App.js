import React, { useMemo, useState } from "react";
import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Homepage from "./Homepage";
import Massages from "./Massages";
import Booking from "./Booking";
import Contact from "./Contact";
import BookingInfo from "./BookingInfo";
import ServiceOffered from './ServiceOffered'
import Login from "./Login";
import Reset from "./Reset";
import AppointmentBooked from "./AppointmentBooked";
import DeepTissueBooking from "./DeepTissueBooking";
import Payment from './Payment';
import Offer1 from './Offer1';
import Offer2 from './Offer2';
import Offer3 from './Offer3';
import Offer4 from './Offer4';
import DeepTissuePayment from "./DeepTissuePayment";
import "@stripe/stripe-js";
import { BookingContext } from './BookingContext';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

function App() {

  const [level, setLevels] = useState('Level 1');
  const [duration, setDuration] = useState('30 minutes');
  const [name, setName] = useState('');
  const [town, setTown] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [number, setNumber] = useState('');
  const [startDate, setStartDate] = useState(setHours(setMinutes(new Date(), 30), 8));
 
  const providerValue = useMemo(() => ({ level, setLevels, duration, setDuration, name, setName, town, setTown, state, setState, zip, setZip, number, setNumber, startDate, setStartDate }), [level, setLevels, duration, setDuration, name, setName, town, setTown, state, setState, zip, setZip, number, setNumber, startDate, setStartDate ]);

  return (
    
    <div>

      <Router>

          <BookingContext.Provider value={providerValue}>

            <Routes>

              <Route path="/" element={<Homepage />} />
              <Route path="/Massages" element={<Massages />} />
              <Route path="/ServiceOffered/Booking" element={<Booking />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/BookingInfo" element={<BookingInfo />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Reset" element={<Reset />} />
              <Route path="/ServiceOffered" element={<ServiceOffered />} />
              <Route path="/ServiceOffered/DeepTissueBooking" element={<DeepTissueBooking />} />
              <Route path="/ServiceOffered/Booking/Payment" element={<Payment />} />
              <Route path="/ServiceOffered/DeepTissueBooking/Payment" element={<DeepTissuePayment />} />
              <Route path="/Offer1" element={<Offer1 />} />
              <Route path="/Offer2" element={<Offer2 />} />
              <Route path="/Offer3" element={<Offer3 />} />
              <Route path="/Offer4" element={<Offer4 />} />
              <Route path="/AppointmentBooked" element={<AppointmentBooked />} />
              <Route path="/ServiceOffered/Booking/Payment/AppointmentBooked" element={<AppointmentBooked />} />
              <Route path="/ServiceOffered/DeepTissueBooking/Payment/AppointmentBooked" element={<AppointmentBooked />} />
            </Routes>

          </BookingContext.Provider>

      </Router>

    </div>
  );
}

export default App;
