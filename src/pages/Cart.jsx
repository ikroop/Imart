import React from 'react'
import Helmet from '../Components/Helmet/Helmet'
import CommonSection from '../Components/UI/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { cartActions } from '../redux/slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalQuantity);
  // console.log(totalAmount)
  
  return (
    <>
      <Helmet title={'Cart'} />
      <CommonSection title="Shopping Cart" />
      <Container>
        <Row>
          <Col lg='9'>
            {
              cartItems.length === 0 ?
                (<h2 className='fs-4 text-center mt-5 mb-5'>No items added to cart</h2>
                )
                :
                (
                  <table className='table bordered mt-5'>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cartItems.map((item, index) => (
                          <Tr item={item} key={item.id} />
                        ))
                      }
                    </tbody>
                  </table>
                )
            }
          </Col>
          <Col lg='3'>
            <div className=' mt-5'>
              <h6>Subtotal</h6>
              <span className='fw-bold'>$499</span>
              <p>taxes and shipping will be calculated at checkout</p>
              <div>
                <button className='buy_btn m-3'><Link to='/shop'>Continue Shopping</Link></button>
                <button className='buy_btn m-3'><Link to='/checkout'>Checkout</Link></button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

const Tr = ({ item }) => {
  const dispatch = useDispatch()
  const deleteProduct = () =>{
    dispatch(cartActions.deleteItem(item.id))
  }

  return <tr>
    <td><img src={item.image} alt='imq' /></td>
    <td>{item.productName}</td>
    <td>${item.price}</td>
    <td>{item.quantity}</td>
    <motion.td whileTap={{ scale: 1.2 }} onClick={deleteProduct}><i className='ri-delete-bin-line'></i></motion.td>
  </tr>

}

export default Cart
