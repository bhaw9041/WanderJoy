import React, {useState,useContext} from 'react'
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { BASE_URL } from '../../utils/config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Booking = ({tour, avgRating}) => {

    const{price, reviews, title} = tour;

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
        const token = user.token;

    
    const [booking, setBooking] = useState(
        {
            userId: user && user._id, //we need to use api here
            userEmail: user && user.email,
            tourName: title,
            fullName: '',
            phone:'',
            guestSize:1,
            bookAt:'',
            totalamount:99,
        }
    )

    const handleChange = e => {
        const { id, value } = e.target;
        setBooking(prevBooking => {
        const newBooking = { ...prevBooking, [id]: value };
        const totalAmount = Number(price) * Number(newBooking.guestSize) + Number(serviceFee);
        return { ...newBooking, totalamount: totalAmount };
    });
    };

    const serviceFee = 10;
    const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee);

    //send data to the server
    const handleClick = async e => {
        console.log(booking);
        e.preventDefault();
        

        try {
           if(!user || user === undefined || user === null) { 
            return toast.warn('Please sign in')
           }
           const res = await fetch(`${BASE_URL}/booking`,{
            method:'post',
            headers:{
                'content-type':'application/json',

                'Authorization': `Bearer ${token}`
            },
            credentials: 'include',
            body: JSON.stringify(booking)
           })

           const result  = await res.json()

           if(!res.ok){
            return alert(result.message)
           }
           navigate('/payment');
        } catch (err) {
            alert(err.message);
        }
       
    }


    return  <div>
    <ToastContainer/>
    <div className='booking'>
        <div className="booking__top d-flex align-items-center justify-content-between">
            <h3>${price} <span>/per person</span></h3>
            <span className='tour__rating d-flex align-items-center'>
            <i class="ri-star-fill"></i>
            {avgRating=== 0 ? null : avgRating} ({reviews?.length})
            </span>
                                
        
        </div>
       
        <div className="booking__form">
            <h5>Information</h5>
            <Form className='booking__info-form' onSubmit={handleClick}>
                <FormGroup>
                    <input type='text' placeholder='Full Name' id='fullName' required onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <input type='number' placeholder='Phone' id='phone' required onChange={handleChange} />
                </FormGroup>
                <FormGroup className='d-flex align-items-center gap-3'>
                    <input type='date' placeholder='' id='bookAt' required min={new Date().toISOString().split("T")[0]} onChange={handleChange} />
                    <input type='number' placeholder='Guests' id='guestSize' min={0} max={8}required onChange={handleChange} />
                </FormGroup>
            </Form>
        </div>
        

        <div className="booking__bottom">
            <ListGroup>
                <ListGroupItem className='border-0 px-0'>
                    <h5 className='d-flex align-items-center gap-1'>
                        ${price}<i class="ri-close-line"></i> 1 Person</h5>
                    <span>${price}</span>
                </ListGroupItem>
            </ListGroup>
            <ListGroupItem className='border-0 px-0'>
                    <h5>Service charge</h5>
                    <span>${serviceFee}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0 total'>
                    <h5>Total</h5>
                    <span>${totalAmount}</span>
                    
            </ListGroupItem>
            <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
        </div>

    </div>
    </div>
}

export default Booking;