import React from 'react'
import './footer.css'

import { Container, Row,Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.png";

const quick__links=[
    {
        path:'/home',
        display: 'Home'
    },
    {
        path:'/about',
        display: 'About'
    },
    {
        path:'/tour',
        display: 'Tours'
    }
]
const quick__links2=[
    {
        path:'/login',
        display: 'Login'
    },
    {
        path:'/register',
        display: 'Register'
    }
]

const Footer = () => {
    const year = new Date().getFullYear() 
    return <footer className='footer'>
        <Container>
            <Row>
                <Col lg='3'>
                    <div className="logo">
                        <img src={logo} alt="" />
                        <p>Join us on our travel website as we share our passion for adventure. Be inspired by our meticulously curated travel guides, insider tips, and breathtaking photos that will undoubtedly ignite your sense of wanderlust.</p>
                    </div>
                    <div className="social__links d-flex align-items-center gap-4">
                        <span>
                            <Link to = '#'><i class="ri-youtube-line"></i></Link>
                        </span>
                        <span>
                            <Link to = '#'><i class="ri-github-fill"></i></Link>
                        </span>
                        <span>
                            <Link to = '#'><i class="ri-facebook-circle-line"></i></Link>
                        </span>
                        <span>
                            <Link to = '#'><i class="ri-instagram-line"></i></Link>
                        </span>
                    </div>
                </Col>
                <Col lg='3'>
                    <h5 className="footer__link-title">Browse</h5>
                    <ListGroup className="footer__quick-links">
                        {
                            quick__links.map((item,index) => (
                                <ListGroupItem key ={index} className="ps-0 border-0">
                                    <Link to ={item.path}>{item.display}</Link>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>
                <Col lg='3'>
                <h5 className="footer__link-title">Quick Links</h5>
                    <ListGroup className="footer__quick-links">
                        {
                            quick__links2.map((item,index) => (
                                <ListGroupItem key ={index} className="ps-0 border-0">
                                    <Link to ={item.path}>{item.display}</Link>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>
                <Col lg='3'>
                <h5 className="footer__link-title">Contact</h5>
                    <ListGroup className="footer__quick-links">
                        
                            
                            <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                                <h6 className="mb-0 d-flex align-items-center gap-2">
                                    <span>
                                        <i class="ri-map-pin-line"></i>
                                    </span>
                                    Address:
                                </h6>

                                <p className="mb-0">MA, USA</p>
                            </ListGroupItem>
                            
                            <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                            <h6 className="mb-0 d-flex align-items-center gap-2">
                                <span>
                                    <i class="ri-mail-line"></i>
                                </span>
                                Email:
                            </h6>

                            <p className="mb-0">Wanderjoy@gmail.com</p>
                        </ListGroupItem>
                        <ListGroupItem  className="ps-0 border-0 d-flex align-items-center gap-3">
                                <h6 className="mb-0 d-flex align-items-center gap-2">
                                    <span>
                                        <i class="ri-phone-fill"></i>
                                    </span>
                                    Phone:
                                </h6>

                                <p className="mb-0">857-099-9999</p>
                            </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col lg='12' className="text-center pt-5">
                    <p className="copyright">Copyright {year}</p>
                </Col>
            </Row>
        </Container>
        
    </footer>
}

export default Footer;