import React, { useState, useContext } from 'react';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';
import loginImg from '../assets/images/login.jpg';
import userIcon from '../assets/images/user.png';

import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from './../utils/config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    dispatch({ type: 'LOGIN_START' });

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(credentials),
      });

      const result = await res.json();

      if (res.status === 404) {
        // Display a toast notification saying "user not found"
        toast.error('User not found');
      } else if (!res.ok) {
        // Display a toast notification with the error message from the server
        toast.error(result.message);
      } else {
        // Login was successful, dispatch the LOGIN_SUCCESS action and navigate to the home page
        dispatch({ type: 'LOGIN_SUCCESS',
        payload: { 
          data: result.data, 
          role: result.role 
        } 
         });
        //console.log(result);
        toast.success(result.message);
        navigate('/');
      }
    } catch (err) {
      // Display a toast notification with the error message from the server
      toast.error(err.message);
      dispatch({ type: 'LOGIN_FAILURE', payload: err.message });
    }
  };
    
    return <section>
        <Container>
        <ToastContainer/>
            <Row>
                <Col lg='8' className='m-auto'>
                    <div className='login__container d-flex justify-content-between'>
                        <div className='login__img'>
                            <img src={loginImg} alt='' />
                        </div>
                        <div className='login__form'>
                        <div className="user">
                            <img src={userIcon} alt='' />
                        </div>
                        <h2>Login</h2>
                        <Form onSubmit={handleClick}>
                            <FormGroup>
                                <input type='text' placeholder='Email' required id='email' onChange={handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <input type='password' placeholder='Password' required id='password' onChange={handleChange} />
                            </FormGroup>
                            <Button className='btn secondary__btn auth__btn' type='submit'>Login</Button>
                        </Form>
                        <p>Don't have an account? <Link to='/register'>Create</Link></p>
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    
}

export default Login;