import React, {useState,useContext} from 'react'
import './styles/adminHome.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button, Container, Col, Row } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from './../utils/config'

import SearchBar from '../shared/SearchBar'
import Tours from '../pages/Tours'




const AdminHome = () => {

    const { user } = useContext(AuthContext);
    const token = user.token;

    const navigate = useNavigate();

    //const {user} = useContext(AuthContext)

    const [creatingTour, setCreatingTour] = useState(
        {
            title: '', 
            city: '',
            address: '',
            distance: '',
            price:'',
            maxGroupSize:1,
            desc:'',
            reviews:[],
            photo:'/tour-images/tour-img03.jpg',
            featured:''
        }
    )
    
    const handleChange = e => {
        setCreatingTour(prev=>({...prev,[e.target.id]:e.target.value}))
    };

    //send data to the server
    const handleClick = async e => {
        console.log(creatingTour);
        e.preventDefault();

        const titlePattern = /^[a-zA-Z0-9 ]+$/;
  const cityPattern = /^[a-zA-Z ]+$/;
  const addressPattern = /^[a-zA-Z0-9\s,-./\\#&]*$/;
  const numberPattern = /^[1-9][0-9]*$/;
  const descPattern = /^[a-zA-Z0-9\s,-./\\#&]*$/;
  const featuredPattern = /^(true|false)$/;

  if (!creatingTour.title.match(titlePattern)) {
    return alert("Please enter a valid title (no special characters)");
  }
  if (!creatingTour.city.match(cityPattern)) {
    return alert("Please enter a valid city name (no special characters)");
  }
  if (!creatingTour.address.match(addressPattern)) {
    return alert("Please enter a valid address (no special characters)");
  }
  if (!creatingTour.distance.toString().match(numberPattern)) {
    return alert("Please enter a valid distance (a positive integer)");
  }
  if (!creatingTour.price.toString().match(numberPattern)) {
    return alert("Please enter a valid price (a positive integer)");
  }
  if (!creatingTour.maxGroupSize.toString().match(numberPattern)) {
    return alert("Please enter a valid max group size (a positive integer)");
  }
  if (!creatingTour.desc.match(descPattern)) {
    return alert("Please enter a valid description");
}
  if (!creatingTour.featured.toString().match(featuredPattern)) {
    return alert("Please enter 'true' or 'false' for featured");
  }


        try {
           const res = await fetch(`${BASE_URL}/tours`,{
            method:'post',
            headers:{
                'content-type':'application/json',

                'Authorization': `Bearer ${token}`
            },
            credentials: 'include',
            body: JSON.stringify(creatingTour)
           })

           const result  = await res.json()

           if(!res.ok){
            return alert(result.message)
           }
           alert("Created Tour Successfully")
           navigate('/allTours');
        } catch (err) {
            alert(err.message);
        }
       
    }


    return <>
    <section>
        <Container>
            <Row>
                <Col lg='12'>
                <div className='booking_admin'>
        {/* {/--------------------------------------------Creating Tour Form------------------------------------/} */}
        <div className="booking__form_admin">
            <h2>Create Tour</h2><br></br>
            <Form className='booking__info-form_admin' onSubmit={handleClick}>  
               <FormGroup>
               <span><h4>Title: </h4></span>
                    <input type='text' placeholder='Title' id='title' required pattern='^[a-zA-Z0-9 ]+$' onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                <span><h4>City: </h4></span>
                    <input type='text' placeholder='City' id='city' required pattern='^[a-zA-Z ]+$' onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                <span><h4>Address: </h4></span>
                    <input type='text' placeholder='Address' id='address' required pattern='^[a-zA-Z0-9\s,-./\\#&]*$' onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                <span><h4>Distance: </h4></span>
                    <input type='number' placeholder='Distance' id='distance' required pattern='^[1-9][0-9]*$' onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                <span><h4>Price: </h4></span>
                    <input type='number' placeholder='Price' id='price' required pattern='^[1-9][0-9]*$' onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                <span><h4>MaxGroupSize: </h4></span>
                    <input type='number' placeholder='MaxGroupSize' id='maxGroupSize' required pattern='^[1-9][0-9]*$' onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                <span><h4>Description: </h4></span>
                    <input type='text' placeholder='Description' id='desc' required pattern='^[a-zA-Z0-9\s,-./\\#&]*$' onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                <span><h4>Featured: </h4></span>
                    <input type='text' placeholder='featured' id='featured' required pattern='^(true|false)$' onChange={handleChange} />
                </FormGroup>
                <Button className='btn primary__btn w-100 mt-4' id='createBtn' onClick={handleClick}>Create Tour</Button>
            </Form>
        </div>
        {/* {/--------------------------------------------------------------------------------------------------/} */}
    </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
}

export default AdminHome;