import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import './service.css'
import serviceData from '../assets/data/serviceData'

const Service = () => {
    return (
        <section className='services'>
            <Container>
                <Row>
                    {
                        serviceData.map((data,index) => (
                            <Col lg='3' md='4' key={index}>
                                <motion.div whileHover={{scale:1.1}} className="service_item" style={{background:`${data.bg}`}}>
                                    <span><i className={data.icon}></i></span>
                                    <div>
                                        <h3>{data.title}</h3>
                                        <p>{data.subtitle}</p>
                                    </div>
                                </motion.div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Service
