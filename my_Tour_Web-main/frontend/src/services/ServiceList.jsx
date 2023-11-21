import React from 'react'
import ServiceCard from "./ServiceCard"
import {Col} from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'


const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Solo Trip Deals",
        desc: "Be the Hero of Your Own Solo Adventure - Grab the Hottest Deals Now!"
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Experience the World Like Never Before - Guided by the Best Tour Guides"
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Create Your Ultimate Travel Story with Unmatched Customization Options"
    }
]

const ServiceList = () => {
    return <>
    {
        servicesData.map((item,index)=> <Col lg='3' md='6' sm='12'className='mb-4' key={index}><ServiceCard item={item}/></Col>)
    }
    </>
}

export default ServiceList;