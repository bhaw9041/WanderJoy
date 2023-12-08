import React, {useEffect, useRef, useState, useContext} from 'react'
import '../styles/tour-details.css'
import {Container, Row, Col, Form, ListGroup} from 'reactstrap'
import {Await, useParams} from 'react-router-dom'

import calculateAvgRating from '../utils/avgRating'
import avatar from '../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking'
import Newsletter from '../shared/Newsletter'
import useFetch from './../hooks/useFetch'
import {BASE_URL} from './../utils/config'
import {AuthContext} from './../context/AuthContext'
import {toast, ToastContainer } from 'react-toastify'

const TourDetails = () => {

    const {id} = useParams()
    const reviewMsgRef = useRef('');
    const[tourRating, setTourRating] = useState(null)
    const {user} = useContext(AuthContext)

    //Now using static data at first
    //const tour = tourData.find(tour=> tour.id === id)
    //fetch data from database

    const {data:tour, loading, error} = useFetch(`${BASE_URL}/tours/${id}`);
    //destructive properties
    const {photo, title, desc, price, address, reviews, city, distance, maxGroupSize} = tour;

    const {totalRating, avgRating} = calculateAvgRating(reviews);

    //date format
    const options ={day:'numeric', month:'long', year:'numeric'}


    //submit button
    const submitHandler = async e =>{
        e.preventDefault();
        const reviewText = reviewMsgRef.current.value;
        

        try {
            if(!user || user===undefined || user ===null){
                 toast.warn('Please sign in')
            }
            const reviewObj = {
                username: user?.username,
                reviewText,
                rating:tourRating
            }
            const res = await fetch (`${BASE_URL}/review/${id}`,{
                method:'post',
                headers:{
                    'content-type':'application/json'
                },
                credentials:'include',
                body: JSON.stringify(reviewObj)
            })
               
            const result = await res.json();
            if(!res.ok) {
                return alert(result.message);
            }
            alert(result.message)
            
        } catch (err) {
            alert(err.message);
        }
    
    }

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return <>
    <section>
    <ToastContainer/>
        <Container>
            {
                loading && <h4 className='text-center pt-5'>Loading.............</h4>
            }
            {
                error && <h4 className='text-center pt-5'>{error}</h4>
            }
            {
                !loading && !error &&( <Row>
                <Col lg='8'>
                    <div className='tour__content'>
                        <img src={photo} alt=""/>
                        <div className='tour__info'>
                            <h2>{title}</h2>
                            <div className='d-flex align-items-center gap-5'>

                                <span>
                                <i class="ri-map-pin-user-fill"></i> {address}
                                
                                </span>
                                
                            </div>
                            <div className='tour__extra-details'>
                                <span><i class="ri-map-pin-2-fill"></i> {city} </span>
                                <span><i class="ri-money-dollar-circle-line"></i> {price} /per person </span>
                                <span><i class="ri-pin-distance-line"></i> {distance} k/m </span>
                                <span><i class="ri-group-2-line"></i> {maxGroupSize} People </span>
                            </div>
                            <h5>Description</h5>
                            <p>{desc}</p>
                        </div>
                      
                        {/*-------------------------------------------------------------------------- */}
                    </div>
                </Col>
                <Col lg='4'>
                    <Booking tour={tour} avgRating={avgRating} />
                </Col>
            </Row>)
            }
        </Container>
    </section>
    <Newsletter />
    </>
    
}

export default TourDetails;