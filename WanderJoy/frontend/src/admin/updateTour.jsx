import React, { useState, useContext} from 'react'
import './styles/updatetour.css'
import {Container, Row, Col, Form,FormGroup,Button, Label} from 'reactstrap'
import { useParams, useNavigate} from 'react-router-dom'



import useFetch from './../hooks/useFetch'
import {BASE_URL} from './../utils/config'
import {AuthContext} from './../context/AuthContext'

const UpdateTour = () => {

    const { id } = useParams();

  const { user } = useContext(AuthContext);
  const token = user.token;
  const navigate = useNavigate();

  // Fetch data from database
  const { data: tour } = useFetch(`${BASE_URL}/tours/${id}`);
  const { title, desc, price, address, featured, city, distance, maxGroupSize} = tour;
  

  const [createTour, setTour] = useState({
            title: '', 
            city: '',
            address: '',
            distance: '',
            price:'',
            maxGroupSize:1,
            desc:'',
            featured:''
  })

  const handleChange = (e) => {
    // Update state when input value changes
    setTour(prev => ({...prev, [e.target.id]: e.target.value}))
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/tours/${id}`, {
        method: 'put', // Use put method to update data
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        credentials: 'include',
        body: JSON.stringify(createTour),
      });

      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
      alert(result.message);
      navigate('/allTours');
    } catch (err) {
      alert(err.message);
    }
  };


    return <>
    <section>
        <Container>
        <Row>
        <Col lg="12">
            <div className="tour__content_myadmin">
              <div className="tour__info_myadmin">
                <Form className="booking__info-form_myadmin" onSubmit={submitHandler}>
                  <FormGroup>
                    <span><h4>Title: </h4></span>
                    <input
                      type="text"
                      value={title+" (Present data)"}
                      id="title"
                      lg='12'
                      required
                      disabled
                    />
                    <input
                      type="text"
                      placeholder={title+" (Please enter new value here..)"}
                      id="title"
                      lg='12'
                      required
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                  <span><h4>City: </h4></span>
                    <input
                      type="text"
                      id="city"
                      value={city+" (Present data)"}
                      required
                      disabled
                    />
                    <input
                      type="text"
                      id="city"
                      placeholder={city+" (Please enter new value here..)"}
                      required
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                  <span><h4>Address: </h4></span>
                    <input
                      type="text"
                      
                      id="address"
                      value={address+" (Present data)"}
                      required
                      disabled
                    />
                    <input
                      type="text"
                      
                      id="address"
                      placeholder={address+" (Please enter new value here..)"}
                      required
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                  <span><h4>Distance: </h4></span>
                    <input
                      type="number"
                     
                      id="distance"
                      value={distance}
                      required
                      disabled
                    />
                    <input
                      type="number"
                     
                      id="distance"
                      placeholder={distance}
                      required
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                  <span><h4>Price: </h4></span>
                    <input
                      type="number"
                     
                      id="price"
                      value={price}
                      required
                      disabled
                    />
                    <input
                      type="number"
                     
                      id="price"
                      placeholder={price}
                      required
                      onChange={handleChange}
                    />
                    </FormGroup>
                  <FormGroup>
                  <span><h4>MaxGroupSize: </h4></span>
                    <input
                      type="number"
                      id="maxGroupSize"
                      value={maxGroupSize}
                      required
                      disabled
                    />
                    <input
                      type="number"
                      
                      id="maxGroupSize"
                      placeholder={maxGroupSize}
                      required
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                  <span><h4>Description: </h4></span>
                    <input
                      type="text"
                      
                      id="desc"
                      value={desc+" (Present data)"}
                      required
                      disabled
                    />
                    <input
                      type="text"
                      
                      id="desc"
                      placeholder={desc+" (Please enter new value here..)"}
                      required
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                  <span><h4>Featured: </h4></span>
                    <input
                      type="text"
                      
                      id="featured"
                      value={featured+" (Present data)"}
                      
                      required
                      disabled
                    />
                    <input
                      type="boolean"
                      
                      id="featured"
                      placeholder="true/false"
                      
                      required
                      onChange={handleChange}
                    />
                  </FormGroup>
                <Button className='btn primary__btn w-100 mt-4' onClick={submitHandler}>Update Tour</Button>
            </Form>
                            
                        </div>

                        {/*-------------------------------------------------------------------------- */}
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
    
}

export default UpdateTour;