import React, { useEffect, useState } from 'react'
import { Container,Row,Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import Helmet from '../Components/Helmet/Helmet'
import CommonSection from '../Components/UI/CommonSection'
import '../styles/product_details.css'
import { motion } from 'framer-motion'
import ProductList from '../Components/UI/ProductList'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import { toast } from 'react-toastify'

const ProductDetails = () => {

  const [tab,setTab] = useState('desc');
  const {id} = useParams()
  const product = products.find((item) => item.id === id)
  const { imgUrl , productName, price, avgRating, reviews, description, category} = product;
//  console.log(imgUrl);
const dispatch = useDispatch();
const relatedProducts = products.filter((item) => item.category === category);

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      image:imgUrl,
      productName,
      price
    }))
    toast.success('Product added successfully')
  }

  useEffect(()=>{
    window.scrollTo(0,0);
  },[product])
  return (
    <>
    <Helmet title={productName}/>
      <CommonSection title={productName}/>
        <section>
          <Container>
            <Row>
              <Col lg='6' >
                <img src={imgUrl} alt='' />
              </Col>
              <Col lg='6' >
                <div className="product_details">
                  <h2>Product Name</h2>
                  <div className="product_rating d-flex align-items-center gap-3">
                    <div>
                      <span><i className='ri-star-s-fill'></i></span>
                      <span><i className='ri-star-s-fill'></i></span>
                      <span><i className='ri-star-s-fill'></i></span>
                      <span><i className='ri-star-s-fill'></i></span>
                      <span><i className='ri-star-half-s-fill'></i></span>
                    </div>
                    <p>({avgRating}ratings)</p>
                  </div>
                  <span className='product_price'>${price}</span>
                  <p className='mt-3'>{description}</p>
                  <motion.button whileTap={{scale:1.2}} className='buy_btn mt-4' onClick={addToCart}>Add to cart</motion.button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row>
              <Col lg='12'>
                <div className="tab-wrapper d-flex align-items-center gap-5">
                  <h6 className={`${tab==='desc' ? 'active_tab': ''}`} onClick={()=> setTab('desc')}>Description</h6>
                  <h6 className={`${tab==='rev' ? 'active_tab': ''}`} onClick={()=> setTab('rev')}>Reviews ({reviews.length})</h6>
                </div>
                <div className="tab_content mt-5">
                  {
                    tab === 'desc' ? (
                      <p>{description}</p>
                    )
                    :
                    (
                      <div className='product_review'>
                        <div className='review_wrapper'>
                          <ul>
                            {
                              reviews.map((item,index) =>(
                                 <li key={index}>
                                  <span>{item.rating} (rating)</span>
                                  <p>{item.text}</p>
                                 </li> 
                              ))
                            }
                          </ul>
                        </div>
                      </div>

                    )
                  }
                 </div>
              </Col>
              <Col lg='12'>
                <h2 className='related_title mt-5'>You might also like</h2>
              </Col>
              <ProductList data={relatedProducts}/>
            </Row>
          </Container>
        </section>
    </>
  )
}

export default ProductDetails
