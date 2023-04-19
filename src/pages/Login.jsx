import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Col, Container, Form, FormGroup, Row } from 'reactstrap'
import Helmet from '../Components/Helmet/Helmet'
import '../styles/login.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase.config'
import { toast } from 'react-toastify'

const Login = () => {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [loading, setloading] = useState(false)
  const navigate = useNavigate()
  const signIn = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user;
      setloading(false);
      toast.success('Logged in successfully');
      navigate('/home');
    }
    catch (error) {
      setloading(false);
      toast.error(error.message)
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <Container>
        <Row>
          {
            loading ? (
              <Col lg='12' className='text-center mt-5 mb-5'>
              <h5 className='fw-bold mt-5 mb-5'>Loading...</h5>
            </Col>
            ):
              (
      <Col lg = '6' className = 'm-auto text-center'>
        <h3 className = 'fw-bold fs-4 mt-5'>Login</h3>
        <Form className='auth_form' onSubmit={signIn}>
          <FormGroup className='form_group'>
            <input type='email' placeholder='Enter Your Email' value={email} onChange={e => setemail(e.target.value)} />
          </FormGroup>
          <FormGroup className='form_group'>
            <input type='password' placeholder='Enter Your Password' value={password} onChange={e => setpassword(e.target.value)} />
          </FormGroup>
          <button type='submit' className='login_btn auth_btn'>Login</button>
          <p>Don't have an account ? <Link to='/signup'>Create an account </Link></p>
        </Form>
      </Col>
      )
          }
    </Row>
     </Container >
    </>
  )
}

export default Login
