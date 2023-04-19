import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Col, Container, Form, FormGroup, Row } from 'reactstrap'
import Helmet from '../Components/Helmet/Helmet'
import '../styles/login.css'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadUrl, getDownloadURL } from 'firebase/storage' 
import { auth } from '../firebase.config'
import { storage } from '../firebase.config'
import { toast } from 'react-toastify'
import { setDoc , doc } from 'firebase/firestore'
import { db } from '../firebase.config'

const Signup = () => {

  const [name,setname] = useState('')
  const [email,setemail] = useState('')
  const [password,setpassword] = useState('')
  const [loading,setloading] = useState(false)
  const navigate = useNavigate();
  const signup = async(e) =>{
    e.preventDefault()
    setloading(true)
    try{
        const userCredential = await createUserWithEmailAndPassword(auth,email,password)
        const user = userCredential.user;
        // console.log('s')
        // const storageRef = ref(storage, `images/${Date.now() + name}`);
        // const uploadTask = uploadBytesResumable(storageRef, file)
        // uploadTask.on((error) =>{
        //     toast.error(error.message)
        // },() =>{  
        //     getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) =>{
        //       await updateProfile(user,{
        //         displayName:name,
        //         photoURL:downloadURL
        //       });
        //       await setDoc(doc(db,'users',user.uid),{
        //         uid:user.uid,
        //         displayName:name,
        //         email,
        //         photoURL:downloadURL
        //       })
        //     })
        // })
        setloading('false');
        toast.success('Account created');
        navigate('/login')
    }
    catch (error){
      toast.error('Something went wrong');      
    }
  }
  return (
    <>
     <Helmet title="Signup"/>
     <Container>
        <Row>
          {
            loading ? (
              <Col lg='12' className='text-center mt-5 mb-5'>
                <h5 className='fw-bold mt-5 mb-5'>Loading...</h5>
              </Col>
            ) :
            (
          <Col lg='6' className='m-auto text-center'>
            <h3 className='fw-bold fs-4 mt-5'>SignUp</h3>
            <Form className='auth_form' onSubmit={signup}>
            <FormGroup className='form_group'>
                <input type='text' placeholder='Enter Your Name' required value={name} onChange={e => setname(e.target.value)} />
              </FormGroup>
              <FormGroup className='form_group'>
                <input type='email' placeholder='Enter Your Email' required value={email} onChange={e => setemail(e.target.value)} />
              </FormGroup>
              <FormGroup className='form_group'>
                <input type='password' placeholder='Enter Your Password' required value={password} onChange={e => setpassword(e.target.value)}/>
              </FormGroup>
              <button type='submit' className='login_btn auth_btn'>Create an account</button>
              <p>Already have an account ? <Link to='/login'>Login</Link></p>
            </Form>
          </Col>
        
            )
          }
          </Row>
     </Container>
    </>
  )
}

export default Signup
