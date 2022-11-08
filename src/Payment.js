import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { loadStripe } from "@stripe/stripe-js";
import { Link } from "react-router-dom"
import { TbMassage, TbCalendar, TbHome } from "react-icons/tb";
import { IoMdContact } from "react-icons/io";
import { BookingContext } from './BookingContext';
import moment from 'moment';
import './Payment.css';

function Payment() {

    useEffect(() => {

        findprice(level, duration)

    }, [])

    const { level, setLevels } = useContext(BookingContext);
    const { duration, setDuration } = useContext(BookingContext);
    const { name, setName } = useContext(BookingContext);
    const { town, setTown } = useContext(BookingContext);
    const { state, setState } = useContext(BookingContext);
    const { zip, setZip } = useContext(BookingContext);
    const { number, setNumber } = useContext(BookingContext);
    const { startDate, setStartDate } = useContext(BookingContext);

    const nav = useNavigate();

    const [box1, setbox1] = useState(false);
    const [box2, setbox2] = useState(false);
    const [box3, setbox3] = useState(false);
    const [box4, setbox4] = useState(false);
    const [box5, setbox5] = useState(false);

    const [cardclicked, setCardClicked] = useState(false);
    const [manualclicked, setManualClicked] = useState(false);

    const [stripeError, setStripeError] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const [price, setPrice] = useState('');

    const bookinginfo = {
        name,
        number,
        town,
        state,
        zip,
        startDate,
        level,
        duration
    }
    // console.log(bookinginfo)

    const findprice = (level, duration) => {

        if (level === 'Level 1' && duration === '30 minutes') {
            setPrice("price_1LbG7RHYLfw8Ok4Zrjg3G6wF")
        } else if (level === 'Level 1' && duration === "45 minutes") {
            setPrice("price_1LbHZBHYLfw8Ok4ZniqZPgU6")
        } else if (level === 'Level 1' && duration === "1 hour") {
            setPrice("price_1LbHaMHYLfw8Ok4ZgKKVy11T")
        } else if (level === 'Level 2' && duration === "30 minutes") {
            setPrice("price_1LbHbFHYLfw8Ok4Z2oyPXP9e")
        } else if (level === 'Level 2' && duration === "45 minutes") {
            setPrice("price_1LbHc0HYLfw8Ok4ZQHLxjmG1")
        } else if (level === 'Level 2' && duration === "1 hour") {
            setPrice("price_1LbHcUHYLfw8Ok4ZZhqE3eMp")
        } else if (level === 'Level 3' && duration === "30 minutes") {
            setPrice("price_1LbHdLHYLfw8Ok4Z5Xlvz5cN")
        } else if (level === 'Level 3' && duration === "45 minutes") {
            setPrice("price_1LbHdpHYLfw8Ok4ZeNuOb1zL")
        } else if (level === 'Level 3' && duration === "1 hour") {
            setPrice("price_1LbHe9HYLfw8Ok4ZxVdIuwtc")
        }
    }

    let stripePromise;

    const getStripe = () => {
        if (!stripePromise) {
            stripePromise = loadStripe("pk_test_51Lb89gHYLfw8Ok4Zpo12JJV2fvvxHvTeDvWCvat8lgOtWueOvhRlauK9v8jSadBHPL5mLXK2kJMiagcRlj8lFFZ700KA7FTfVs");
        }

        return stripePromise;
    };


    const item = {
        price: price,
        quantity: 1
    };

    const checkoutOptions = {
        lineItems: [item],
        mode: "payment",
        successUrl: `${window.location.origin}/AppointmentBooked`,
        cancelUrl: `${window.location.origin}/ServiceOffered/Booking/Payment`
    };

    const redirectToCheckout = async () => {
        if (validateCheckbox() === true) {

            window.sessionStorage.setItem('booking', JSON.stringify(bookinginfo));

            setLoading(true);
            console.log("redirectToCheckout");

            const stripe = await getStripe();
            const { error } = await stripe.redirectToCheckout(checkoutOptions);
            console.log("Stripe checkout error", error);

            if (error) setStripeError(error.message);
            setLoading(false);
        }
    };

    if (stripeError) alert(stripeError);

    // const [cvc, SetCvc] = useState('')
    // const [expiry, setExpiry] = useState('')
    // const [focus, setFocus] = useState('')
    // const [name, setName] = useState('')
    // const [number, setNumber] = useState('')

    const isclicked = () => {
        if (cardclicked === false) {
            setCardClicked(true)
        }
        setManualClicked(false)
    };

    const manualisclicked = () => {
        if (manualclicked === false) {
            setManualClicked(true)
        }
        setCardClicked(false)
    };

    const checkthebox = (e) => {
        if (e.target.value === 'box1') {
            if (box1 === true) {
                setbox1(false)
            } else {
                setbox1(true)
            }
        } else if (e.target.value === 'box2') {
            if (box2 === true) {
                setbox2(false)
            } else {
                setbox2(true)
            }
        } else if (e.target.value === 'box3') {
            if (box3 === true) {
                setbox3(false)
            } else {
                setbox3(true)
            }
        } else if (e.target.value === 'box4') {
            if (box4 === true) {
                setbox4(false)
            } else {
                setbox4(true)
            }
        } else if (e.target.value === 'box5') {
            if (box5 === true) {
                setbox5(false)
            } else {
                setbox5(true)
            }
        }
        validateCheckbox()
    }

    const validateCheckbox = () => {
        if (box1 === true && box2 === true && box3 === true && box4 === true && box5 === true) {
            return (true)

        } else return (false)
    }

    // console.log(JSON.stringify(bookinginfo))

    const navigateAppointmentBooked = () => {
        if (validateCheckbox() === true) {

            nav('./AppointmentBooked')

        }
    }

    return (

        <div className='payment'>

            <Link to="/" className='link'> <TbHome className='icons' icon="home" size="30" /> </Link>
            <Link to="/Massages" className='link'> <TbMassage className='icons' icon="Massages" size="30" /> </Link>
            <Link to="/ServiceOffered" className='link'> <TbCalendar className='icons' icon="ServiceOffered" size="30" /> </Link>
            <Link to="/Contact" className='link'> <IoMdContact className='icons' icon="Contact" size="30" /> </Link>

            <div className='payment1'>
                <input
                    type="radio"
                    id="CreditCardPayment"
                    name="Payment"
                    value="Credit/Debit Cards"
                    onClick={isclicked}
                /> <p className='textpayment'> Credit/Debit Cards </p>

                <br />

                <div className={(cardclicked === true) ? 'PaymentForm' : 'hidepayment'}>
                    {/* <Cards
                        cvc={cvc}
                        expiry={expiry}
                        focused={focus}
                        name={name}
                        number={number}
                    /> */}

                    {/* <form className='PaymentMethod'>
                        <input
                            className='CardNumber'
                            type="tel"
                            name="number"
                            placeholder="Card Number"
                            value={number}
                            onChange={e => setNumber(e.target.value)}
                            onFocus={e => setFocus(e.target.name)}
                        />

                        <input
                            className='Expiry'
                            type="tel"
                            name='expiry'
                            placeholder='MM/YY'
                            value={expiry}
                            onChange={e => setExpiry(e.target.value)}
                            onFocus={e => setFocus(e.target.name)}
                        />
                        <input
                            className='CVC'
                            type="tel"
                            name='cvc'
                            placeholder='XXX'
                            value={cvc}
                            onChange={e => SetCvc(e.target.value)}
                            onFocus={e => setFocus(e.target.name)}
                        />

                        <input
                            className='Name'
                            type="textpayment"
                            name='name'
                            placeholder='Card Holder Name'
                            value={name}
                            onChange={e => setName(e.target.value)}
                            onFocus={e => setFocus(e.target.name)}
                        />

                    </form> */}
                </div>
            </div>

            <div className='payment2'>
                <input
                    type="radio"
                    id="ManualPayment"
                    name="Payment"
                    value="ManualPayment"
                    onClick={manualisclicked}
                /> <p className='textpayment'>Manual Payment </p>

                <div className={(manualclicked === true) ? 'ManualPayment' : 'hidepayment'}>

                    <p className='textpayment'>
                        Please CashApp $Tommyja to confirm your booking.
                        In the comments for payment put your first name, last name, time, and date so I can match it with your appointment.
                        If I do not receive your payment immediately after booking, It will be released back on the calander and you will receive an email advising your appointment has been cancelled.
                        Please see other payments options if you do not have Cashapp
                    </p>
                </div>

            </div>

            <div className='bookingsummary'>
                <h3>Booking Summary</h3>

                <h4>
                    {level},
                    <br />
                    {duration},
                    <br />
                    {JSON.stringify(moment(startDate).format('MMMM Do YYYY, h:mm a'))},
                    <br />
                    {name},
                    <br />
                    {number},
                    <br />
                    {town},
                    {state},
                    <br />
                    {zip}
                </h4>
            </div>

            <form className="confirm">
                <div className='confirm1'>
                    <input
                        type="checkbox"
                        id="Policy"
                        name="confirm"
                        value="box1"
                        defaultChecked={box1}
                        onChange={(e) => checkthebox(e)}
                    // onClick={event => setValid(event.target.form.checkValidity())}
                    /> <p className='textpayment'> Location of appointment will be sent the day before or morning of appointment. Please understand that NO REFUNDS are allowed. Confirm your time & date before booking. I am not responsible if you book the wrong time slot. Checking here confirms "Policy Understood" </p>
                </div>

                <div className='confirm2'>
                    <input
                        type="checkbox"
                        id="CancellationPolicy"
                        name="confirm"
                        value="box2"
                        defaultChecked={box2}
                        onChange={(e) => checkthebox(e)}
                    // onClick={event => setValid(event.target.form.checkValidity())}
                    /> <p className='textpayment'>Cancellation Policy: No refunds. I (the masseuse) am able to reschedule your appointment one time. (Understand that I am not responsible if you booked for the wrong city or booked when I will not be in your state.) </p>
                </div>

                <div className='confirm3'>
                    <input
                        type="checkbox"
                        id="Policy"
                        name="confirm"
                        value="box3"
                        defaultChecked={box3}
                        onChange={(e) => checkthebox(e)}
                    // onClick={event => setValid(event.target.form.checkValidity())}
                    /> <p className='textpayment'>This service is for Women only. I do not Massage men </p>
                </div>

                <div className='confirm4'>
                    <input
                        type="checkbox"
                        id="Policy"
                        name="confirm"
                        value="box4"
                        defaultChecked={box4}
                        onChange={(e) => checkthebox(e)}
                    // onClick={event => setValid(event.target.form.checkValidity())}
                    /><p className='textpayment'>PLEASE confirm the dates you are selecting to be sure I am in your area. There are no refunds for accidental bookings. No exceptions. If you are unsure, please contact me to confirm! </p>
                </div>

                <div className='confirm5'>
                    <input
                        type="checkbox"
                        id="Policy"
                        name="confirm"
                        value="box5"
                        defaultChecked={box5}
                        onChange={(e) => checkthebox(e)}
                    // onClick={event => setValid(event.target.form.checkValidity())}
                    /><p className='textpayment'> I understand that after clicking manual payment method that I am responsible for making a depisit payment directly after booking the apppointment </p>
                </div>

                <br />

                <p className='textpayment'> All boxes must be checked to continue.
                    By checking these boxes you agree and understand the terms and conditions </p>

            </form>

            {cardclicked === true ?

                <div>
                    <button
                        className='button'
                        onClick={redirectToCheckout}
                        disabled={isLoading}
                    >Pay Now</button>

                </div>

                : manualclicked === true ?

                    <div>
                        <button
                            className='button2'
                            onClick={navigateAppointmentBooked}
                        >Pay Manually</button>

                    </div>
                    :

                    <div />
            }
        </div>


    );
}

export default Payment;