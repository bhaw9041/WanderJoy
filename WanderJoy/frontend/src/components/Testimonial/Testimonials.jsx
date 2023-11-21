import React from "react";
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import ava04 from '../../assets/images/ava-4.jpg'
import ava05 from '../../assets/images/ava-5.jpg'
import ava06 from '../../assets/images/ava-6.jpg'



const Testimonials = () => {

    const settings = {
        dots:true,
        infinite: true,
        autoplay:true,
        speed:1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow:3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow:2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },
        ]
    }
   return <Slider{...settings}>
   
    <div className="testimonail py-4 px-3">
        <p>"Thanks to this travel website, I've become an avid explorer, uncovering hidden gems and creating cherished memories. The personalized guides and insider tips have truly elevated my travel experiences to a whole new level. I'm counting down the days until my next thrilling adventure!"</p>
    
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className="mb-0 mt-3">Jake Paul</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonail py-4 px-3">
        <p>"This website is my go-to for unique travel experiences. The off-the-beaten-path destinations are a breath of fresh air, and the insider tips have helped me plan some unforgettable trips. The community is also fantastic, with fellow travelers sharing their stories and recommendations. Love it!" </p>
    
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className="mb-0 mt-3">Riya Singh</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
   
    <div className="testimonail py-4 px-3">
        <p>"This website has transformed my travel experiences. From unique cultural encounters to breathtaking natural wonders, I've discovered so many hidden gems that have left me awe-inspired. The website is user-friendly, and the team behind it is clearly passionate about travel. I'm hooked!"</p>
    
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className="mb-0 mt-3">Samuel Adams</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>

    <div className="testimonail py-4 px-3">
        <p>"I've been using this travel website for years, and it never disappoints. The recommendations are always spot-on, and I've had some of my most memorable trips thanks to this website. The community is friendly and helpful, and the website is my go-to for travel inspiration. Highly recommended!"</p>
    
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava04} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className="mb-0 mt-3">Lily Johnson</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonail py-4 px-3">
        <p>"I had a fantastic cruise vacation booked through your travel website. The website's cruise options were extensive, and I was able to find the perfect itinerary for my preferences. Thank you for the exceptional service!"</p>
    
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava05} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className="mb-0 mt-3">Lucas Parker</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonail py-4 px-3">
        <p>"I had a wonderful solo trip booked through your travel website. The website's solo traveler options made it easy for me to find accommodations that catered to solo travelers, and I felt safe and comfortable throughout my trip."</p>
    
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava06} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className="mb-0 mt-3">Emily Wilson</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>

   </Slider>
};

export default Testimonials;