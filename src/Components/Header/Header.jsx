import React from 'react'
import { useRef, useEffect } from 'react'
import './Header.css'
import { Container , Row} from 'reactstrap'
import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'
import { Link, Navigate, NavLink,useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import useAuth from '../../custom-hooks/useAuth'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase.config'
import { toast } from 'react-toastify'

const Header = () => {

    
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const headerRef = useRef(null);
    const profileActionRef = useRef(null)
    const menuRef = useRef(null);
    const menuToggle = () => menuRef.current.classList.toggle('active_menu')
    const navigate = useNavigate()
    const { currentUser } = useAuth()
    // console.log(currentUser)
    const logout = () =>{
        signOut(auth).then(()=>{
            toast.success("Logged out successfully")
            navigate('/home')
        }
        ).catch(err =>{
            toast.error(err.message)
        })
    }

    const Linker = [
        {
            path:'home',
            display: 'Home'
        },
        {
            path:'shop',
            display: 'Shop'
        },
        {
            path:'cart',
            display: 'Cart'
        },
    ]

    const navigateToCart = () =>{
        navigate("/cart")
    }

    const toggleProfileActions = () => profileActionRef.current.classList.toggle('show_profileActions')
  return (
    <header className='header' ref={headerRef}>
    <Container>
      <Row>
        <div className="nav_wrapper">
            <div className="logo">
                <img src={logo} alt="Logo" />
                    <div className="">
                        <h1><Link to="/home">I-Mart</Link></h1>
                        {/* <p>Since 1995</p> */}
                    </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
                <ul className="menu">
                    
                    {
                        Linker.map((data,id)=>(
                    <li className="nav_item" key={id}>
                        <NavLink to={data.path}>{data.display}</NavLink>
                    </li>
                        ))
                    }
                </ul>
            </div>
            <div className="nav_icons">
                <span className='fav_icon'><i className="ri-heart-line"></i><span className='badge'>1</span></span>
                <span className='cart_icon' onClick={navigateToCart}><i className="ri-shopping-bag-line"></i><span className='badge'>{totalQuantity}</span></span>
                <div className='profile'><motion.img whileTap={{scale: 1.3 }} onClick={toggleProfileActions} src={userIcon} alt="User Icon" />
                <div className='profile_actions' ref={profileActionRef} onClick={toggleProfileActions}>
                    {currentUser ? (<span onClick={logout}>Logout</span> )
                    :( 
                        <div className='d-flex align-items-center justify-content-center flex-column'>
                            <Link to='/signup'>SignUp</Link>
                            <Link to='/login'>Login</Link>
                        </div>
                    )   
                    }    
                   </div> 
                </div>    
            </div>
            <div className="mobile_menu">
                <span onClick={menuToggle}><i className="ri-menu-line"></i></span>
            </div>
        </div>
      </Row>
    </Container>
    </header>
  )
}

export default Header
