import React from 'react'
import './Newsletter.css'

import { Container, Row,Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
    return(
        <section className="newsletter">
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="newsletter__content">
                            <h2> Subscribe to unlock a world of unique destinations</h2>
                            <div className="newsletter__input">
                                <input type="email" placeholder="Enter your email" />
                                <button className="btn newsletter__btn">Subscribe</button>
                            </div>
                            <p>Unlock a world of wander with us! Subscribe and discover captivating destinations that will leave you spellbound. Join now and let the adventures begin!</p>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="newsletter__img">
                            <img src={maleTourist} alt ="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Newsletter