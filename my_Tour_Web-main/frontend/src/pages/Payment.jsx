import React, { useState} from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Payment = () => {
  
  const navigate = useNavigate();
  const cardTypeImages = {
    Visa: 'Visa',
    Mastercard: 'Mastercard',
    'American Express': 'Amex',
    Discover: 'Discover',
    'Invalid card type': 'Invalid card type'
  };

  const [cardNumber, setCardNumber] = useState('');
  const [cardType, setCardType] = useState('');

  const handleCardNumberChange = (event) => {
    // Remove all non-digit characters from the input
    let input = event.target.value.replace(/\D/g, '');
    
    // Format the card number by adding spaces after every fourth digit
    input = input.replace(/(\d{4})(?=\d)/g, '$1 ');
    
    // Determine the card type based on the input
    let type = '';
if (/^4/.test(input)) {
  type = 'Visa';
} else if (/^5[1-5]/.test(input)) {
  type = 'Mastercard';
} else if (/^3[47]/.test(input)) {
  type = 'American Express';
} else if (/^6(?:011|5)/.test(input)) {
  type = 'Discover';
} else {
  type = 'Invalid card type'
}
const cardTypeImage = cardTypeImages[type];
setCardType(cardTypeImage);
setCardNumber(input);
  };

  const handlePayment = async (event) => {
    event.preventDefault();

    navigate('/thank-you');
  };

  
  return (
    <Container>
      <Row>
        <Col md={6}>
          <h2>Payment Details</h2>
          <Form onSubmit={handlePayment}>
            <FormGroup>
              <Label for='name'>Name on Card</Label>
              <Input type='text' id='name' placeholder='Enter the name of the cardholder' pattern='/^[a-zA-Z\s]+$/' required />
            </FormGroup>
            <FormGroup>
              <Label for='cardNumber'>Card Number ({cardType})</Label>
              <Input type='text' id='cardNumber' placeholder='XXXX XXXX XXXX XXXX' value={cardNumber} maxLength={19} onChange={handleCardNumberChange} required />
              
            </FormGroup>
          
            <Row>
              <Col md={4}>
                <FormGroup>
                  <Label for='expiryMonth'>Expiry Month</Label>
                  <Input type='text' id='expiryMonth' placeholder='MM' pattern='/^(0?[1-9]|1[0-2])$/' required maxLength={2} max={12}/>
                </FormGroup>

              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for='expiryYear'>Expiry Year</Label>
                  <Input type='text' id='expiryYear' placeholder='YY' pattern='^(0[1-9]|1[0-2])\/\d{2}$' required maxLength={2} />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for='cvv'>CVV</Label>
                  <Input type='password' id='cvv' placeholder='*' required maxLength={4}/>
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for='amount'>Amount</Label>
              <Input type='number' id='amount' placeholder='100' required />
            </FormGroup>

          </Form>
        </Col>

        <Col md={6}>
          <h2>Billing Address</h2>
          <Form>
            <FormGroup>
              <Label for='address'>Address</Label>
              <Input type='text' id='address' />
            </FormGroup>
            <FormGroup>
              <Label for='city'>City</Label>
              <Input type='text' id='city' />
            </FormGroup>
            <FormGroup>
              <Label for='state'>State</Label>
              <Input type='text' id='state' />
            </FormGroup>
            <FormGroup>
              <Label for='zip'>Zip</Label>
              <Input type='text' id='zip' />
            </FormGroup>

            <Button color='primary' id='pay-now' onClick={handlePayment}>Pay Now</Button>
          </Form>
        </Col>
      </Row>
     
    </Container>
  );
};

export default Payment;