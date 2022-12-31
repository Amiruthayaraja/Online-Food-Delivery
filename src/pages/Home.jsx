import React, { useState, useEffect } from 'react';
import Helmet from '../components/Helmet/Helmet.js';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import '../styles/hero-section.css';
import { Link } from 'react-router-dom';
import Category from '../components/UI/category/Category.jsx';
import '../styles/home.css';
import featureImg01 from '../assets/images/service-01.png';
import featureImg02 from '../assets/images/service-02.png';
import featureImg03 from '../assets/images/service-03.png';
import products from '../assets/fake-data/products.js';
import foodCategoryImg01 from '../assets/images/hamburger.png';
import foodCategoryImg02 from '../assets/images/pizza.png';
import foodCategoryImg03 from '../assets/images/bread.png';
import ProductCard from '../components/UI/product-card/ProductCard.jsx';
import whyImg from '../assets/images/location.png';
import networkImg from '../assets/images/network.png';
import TestimonialSlider from '../components/UI/slider/TestimonialSlider.jsx';

const featureData = [
  {
    title: 'Fast Delivery',
    imgUrl: featureImg01,
    desc: 'Enter your address and let us do the rest.',
  },
  {
    title: 'Super Dine In',
    imgUrl: featureImg02,
    desc: 'Hot and fresh food delivered hygienically.',
  },
  {
    title: 'Easy Pick Up',
    imgUrl: featureImg03,
    desc: 'We make it simple  to find the food you crave.',
  },
];
const Home = () => {
  const [category, setCategory] = useState('ALL');
  const [allProducts, setAllProducts] = useState(products);
  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === 'Pizza');
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);
  useEffect(() => {
    if (category === 'ALL') {
      setAllProducts(products);
    }
    if (category === 'BURGER') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Burger'
      );
      setAllProducts(filteredProducts);
    }
    if (category === 'PIZZA') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Pizza'
      );
      setAllProducts(filteredProducts);
    }
    if (category === 'BREAD') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Bread'
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);
  return (
    <Helmet title='Home'>
      <section>
        <Container align='center'>
          <Row>
            <Col lg='12' md='6'>
              <div className='hero__content'>
                <h5 className='mb-3'>
                  Fast and easy food delivery service to spoil the Foodie within
                  you
                </h5>
                <h1 className='mb-4 hero__title'>
                  <span>HUNGRY?</span> just wait <br /> food at
                  <span> your door!</span>
                </h1>

                

                <div className='hero__btns d-flex align-items-center gap-5 mt-4 justify-content-center'>
                <Link to='/foods'>
                  <button className='order__btn d-flex align-items-center justify-content-between'>
                  
                    Order now <i className='ri-arrow-right-s-line'></i>
                  
                  </button>
                </Link>
                  <button className='all__foods-btn'>
                    <Link to='/foods'>See all foods</Link>
                  </button>
                </div>
                <div className='hero__service d-flex align-items-center gap-5 mt-5 justify-content-center'>
                  <p className='d-flex align-items-center gap-2'>
                    <span className='shipping__icon'>
                      <i className='ri-car-line'></i>
                    </span>
                    Low Cost Delivery
                  </p>
                  <p className='d-flex align-items-center gap-2'>
                    <span className='shipping__icon'>
                      <i className='ri-shield-check-line'></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
           
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h5 className='feature__subtitle mb-4'>What we serve</h5>
              <h2 className='feature__title'> Just sit back at home</h2>
              <h2 className='feature__title'>
                we will <span>take care</span>
              </h2>
              <p className='mb-1 mt-4 feature__text'>
              Craving something delicious from your favourite restaurant ? 
              </p>
              <p className='mb-1 mt-4 feature__text'>
              Forgot to pick up the shopping on your way home ? 
              </p>
              <p className='mb-1 mt-4 feature__text'>
              We deliver food and groceries in a flash - whatever you're after .
              </p>

              
            </Col>

            {featureData.map((item, index) => {
              return (
                <Col lg='4' md='6' sm='6' key={index} className='mt-5'>
                  <div className='feature__item text-center px-5 py-3'>
                    <img
                      className='w-25 mb-3'
                      src={item.imgUrl}
                      alt='feature-img'
                    />
                    <h5 className='fw-bold mb-3'>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2>Popular Foods</h2>
            </Col>
            <Col lg='12'>
              <div className='food__category d-flex align-items-center justify-content-center gap-5'>
                <button
                  onClick={() => setCategory('ALL')}
                  className={`all__btn ${
                    category === 'ALL' ? 'foodBtnActive' : ''
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setCategory('BURGER')}
                  className={`d-flex align-items-center gap-2 ${
                    category === 'BURGER' ? 'foodBtnActive' : ''
                  }`}
                >
                  <img src={foodCategoryImg01} alt='' />
                  Burger
                </button>
                <button
                  onClick={() => setCategory('PIZZA')}
                  className={`d-flex align-items-center gap-2 ${
                    category === 'PIZZA' ? 'foodBtnActive' : ''
                  }`}
                >
                  <img src={foodCategoryImg02} alt='' />
                  Pizza
                </button>
                <button
                  onClick={() => setCategory('BREAD')}
                  className={`d-flex align-items-center gap-2 ${
                    category === 'BREAD' ? 'foodBtnActive' : ''
                  }`}
                >
                  <img src={foodCategoryImg03} alt='' />
                  Bread
                </button>
              </div>
            </Col>

            {allProducts.map((item) => {
              return (
                <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mt-5'>
                  <ProductCard item={item} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <section className='why__choose-us'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <img src={whyImg} alt='why-PickFood' className='w-100'></img>
            </Col>
            <Col lg='6' md='6'>
              <div className='why__PickFood'>
                <h2 className='PickFood-title mb-4'>
                  Why <span>PickFood?</span>
                </h2>
                <p className='PickFood-desc'>
                Craving something delicious from your favourite restaurant ? Forgot to pick up the shopping on your way home ? 
                We deliver food and groceries in a flash - whatever you're after . 
                It's our mission to bring everything you want , need or crave right to your door , 
                whether it's a meal from your favourite local restaurant or same day 
                grocery delivery and cleaning supplies 
                </p>
                <ListGroup className='mt-4'>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose__us-title d-flex align-items-center gap-2'>
                      <i className='ri-checkbox-circle-line'></i>Fresh and Tasty
                      food
                    </p>
                    
                  </ListGroupItem>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose__us-title d-flex align-items-center gap-2'>
                      <i className='ri-checkbox-circle-line'></i>Quality support
                    </p>
                    
                  </ListGroupItem>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose__us-title d-flex align-items-center gap-2'>
                      <i className='ri-checkbox-circle-line'></i>Order from any
                      location
                    </p>
                    
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    

      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='testimonial'>
                <h5 className='testimonial__subtitle mb-4'>Testimonial</h5>
                <h2 className='testimonial__title mb-40'>
                  What our <span>customers </span>are saying
                </h2>
                <p className='testimonial__desc'>
                We are proud of the things our customers are saying about us, and we’d like to share some of their comments with you
                </p>
                <TestimonialSlider />
              </div>
            </Col>
            <Col lg='6' md='6'>
              <img src={networkImg} alt='testimonial-img' className='w-100' />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
