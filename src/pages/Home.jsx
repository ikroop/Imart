import React, { useEffect, useState } from 'react'
import Helmet from '../Components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'
import '../styles/home.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Service from '../services/Service'
import ProductList from '../Components/UI/ProductList'
import products from '../assets/data/products'
import counterImg from '../assets/images/counter-timer-img.png'
import Clock from '../Components/UI/Clock'
const Home = () => {

  const [data,setData] = useState(products);
  const [trendingProducts,settrendingProducts] = useState([]);
  const [bestSaleProducts,setbestSaleProducts] = useState([]);
  const [mobileProducts,setMobileProducts] = useState([]);
  const [wirelessProducts,setWirelessProducts] = useState([]);
  const [popularProducts,setPopularProducts] = useState([]);

  useEffect(()=>{
      const filteredTrendingProducts = products.filter((item)=>(
          item.category === 'chair'
      ));

      const filteredbestSaleProducts = products.filter((item)=>(
          item.category === 'sofa'
      ));
      const filteredMobileProducts = products.filter((item)=>(
          item.category === 'mobile'
      ));
      const filteredWirelessProducts = products.filter((item)=>(
          item.category === 'wireless'
      ));
      const filteredPopularProducts = products.filter((item)=>(
          item.category === 'watch'
      ));
      
      settrendingProducts(filteredTrendingProducts);
      setbestSaleProducts(filteredbestSaleProducts);
      setMobileProducts(filteredMobileProducts);
      setWirelessProducts(filteredWirelessProducts);
      setPopularProducts(filteredPopularProducts);
  },[]) 
  const year = new Date().getFullYear();

  return (
    <>
      <Helmet title={'Home'}></Helmet>
      <section className='hero_section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero_content">
                <p className="hero_subtitle">
                  Trending profuct in {year}
                </p>
                <h2>Make your Interior more Minimalistic & Modern</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Similique eaque sit laborum nesciunt amet, vitae explicabo
                  incidunt omnis? Porro corporis, maxime fuga explicabo tempora
                  quibusdam reprehenderit dolorem modi veniam fugiat?</p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy_button"><Link to='/shop'>SHOP NOW</Link></motion.button>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className="hero_img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Service />
      <section className='trending_products'>
            <Container>
              <Row>
                <Col lg='12'className='text-center'>
                  <h2 className="section_title">Trending Products</h2>
                </Col>
                <ProductList data={trendingProducts}/>
              </Row>
            </Container>
      </section>
      <section className="best_sales">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section_title'>Best Sales</h2>
            </Col>
            <ProductList data={bestSaleProducts}/>
          </Row>
        </Container>
      </section>
      <section className="timer_count">
        <Container>
          <Row>
            <Col lg='6' md='6' className='count_down_col'>
              <div className="clock_top_content">
                <h4 className='text-white fs-6 mb-2'>Limited Offer</h4>
                <h3 className='text-white fs-5 mb-3'>Quality ArmChair</h3>
              </div>
              <Clock/>
              <motion.button whileTap={{scale:1.2}} className='buy_button store_btn'><Link to='/shop'>Visit Store</Link></motion.button>
            </Col>
            <Col lg='6' md='12' className='text-end counter_img'>
              <img src={counterImg} alt=''/>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='new_arrivals'>
          <Container>
            <Row>
              <Col lg='12' className='text-center'>
                <h2 className='section_title text-center'>New Arrivals</h2>
                </Col>
                <ProductList data={mobileProducts}/>
                <ProductList data={wirelessProducts}/>
            </Row>
          </Container>
      </section>
      <section className="popular_category">
      <Container>
            <Row>
              <Col lg='12' className='text-center'>
                <h2 className='section_title text-center mb-5'>Popular Category</h2>
                </Col>
                <ProductList data={popularProducts}/>
            </Row>
          </Container>
      </section>
    </>
  )
}

export default Home
