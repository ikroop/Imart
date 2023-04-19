import React from 'react'
// import productImg from '../../assets/images/arm-chair-01.jpg'
import { motion } from 'framer-motion'
import '../../styles/product-card.css'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({ item }) => {

    const dispatch = useDispatch()
    const addtoCart = () => {dispatch(cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        image:item.imgUrl
    }))
    toast.success("Product added Succesfully")
    }

    return (

        <Col lg='3' md='4' className='mb-2'>
            <div className='product_item'>
                <div className="product_img">
                <Link to={`/shop/${item.id}`}>
                    <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
                </Link>    
                </div>
                <div className='p-2 product_info'>
                    <h3 className="product_name"><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
                    <span>{item.category}</span>
                </div>
                <div className="product_card_bottom d-flex align-items-center justify-content-between">
                    <span className="price">${item.price}</span>
                    <motion.span whileTap={{ scale: 1.2 }} onClick={addtoCart}><i className='ri-add-line'></i></motion.span>
                </div>
            </div>
        </Col>
    )
}

export default ProductCard
