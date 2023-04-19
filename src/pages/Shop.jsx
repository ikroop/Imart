import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../Components/Helmet/Helmet'
import CommonSection from '../Components/UI/CommonSection'
import '../styles/shop.css'
import products from '../assets/data/products'
import ProductList from '../Components/UI/ProductList'
import useAuth from '../custom-hooks/useAuth'

const Shop = () => {

  const {currentUser} = useAuth(); 
  console.log(currentUser)

  const [productData, setproductData] = useState(products);
  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === 'sofa') {
      const filteredProducts = products.filter((item) => (
        item.category === 'sofa'
      ));

      setproductData(filteredProducts)
    }

    if (filterValue === 'mobile') {
      const filteredProducts = products.filter((item) => (
        item.category === 'mobile'
      ));

      setproductData(filteredProducts)
    }

    if (filterValue === 'chair') {
      const filteredProducts = products.filter((item) => (
        item.category === 'chair'
      ));

      setproductData(filteredProducts)
    }

    if (filterValue === 'watch') {
      const filteredProducts = products.filter((item) => (
        item.category === 'watch'
      ));

      setproductData(filteredProducts)
    }

    if (filterValue === 'wireless') {
      const filteredProducts = products.filter((item) => (
        item.category === 'wireless'
      ));

      setproductData(filteredProducts)
    }
  }

  const handleSearch = (e) =>{
      const searchTerm = e.target.value;
      const searchProducts = products.filter((item) =>(
        item.productName.toLowerCase().includes(searchTerm.toLowerCase())
      )) 
      setproductData(searchProducts); 
  }


  return (
    <>
      <Helmet title={'Shop'} />
      <CommonSection title="Products" />
      <section>
        <Container>
          <Row>
            <Col lg='3' md='6'>
              <div className="filter_widget mt-3">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='6' className=''>
              <div className="filter_widget mt-3">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg='6' md='12'>
              <div className="search_box mt-3">
                <input type="text" placeholder="Search..." name="" id="" onChange={handleSearch} />
                <span><i className="ri-search-2-line"></i></span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {
              productData.length === 0 ?
                (<h1 className='text-center fs-4'>No Products are found !!!</h1>)
                : (<ProductList data={productData} />)
            }
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Shop
