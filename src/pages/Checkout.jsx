import React from 'react'
import { Container, FormGroup, Row ,Col,Form } from 'reactstrap'
import Helmet from '../Components/Helmet/Helmet'
import CommonSection from '../Components/UI/CommonSection'
import "../styles/checkout.css"

const Checkout = () => {
  return (
    <>
      <Helmet title='Checkout'/>
      <CommonSection title="Checkout"/>
      <Container>
        <Row>
          <Col lg='8'>
            <h6 className='mb-4 fw-bold mt-5'>Billing Details</h6>
            <Form className='billing_form mb-5'>
              <FormGroup className='form_group'>
                  <input type="text" placeholder='Name'/>
              </FormGroup>
              <FormGroup className='form_group'>
                  <input type="email" placeholder='Email'/>
              </FormGroup>
              <FormGroup className='form_group'>
                  <input type="number" placeholder='Mobile Number'/>
              </FormGroup>
              <FormGroup className='form_group'>
                  <input type="text" placeholder='Street Address'/>
              </FormGroup>
              <FormGroup className='form_group'>
                  <input type="text" placeholder='City'/>
              </FormGroup>
              <FormGroup className='form_group'>
                  <input type="text" placeholder='Postal code'/>
              </FormGroup>
              <FormGroup className='form_group'>
                  <input type="text" placeholder='Country'/>
              </FormGroup>
            </Form>
          </Col>
          <Col lg='4'>
            <div className='checkout_cart mt-5 mb-5'>
            <h6>Total Qty:<span>2</span></h6>
            <h6>Subtotal:<span>$499</span></h6>
            <h6><span>Shipping: <br/>Free Shipping </span><span>$0</span></h6>
            <h4>Total:<span>$499</span></h4>
            <br></br>    
            <button className='buy_btn auth_btn w-100'>Place An Order</button>
        
            </div>
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default Checkout
