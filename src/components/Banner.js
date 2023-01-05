import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import HeaderImg from '../assets/img/header-img.svg'

const Banner = () => {
  return (
    <section id='home' className='banner'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Hello my name is Jailson Sanches and welcome to my Portfolio</span>
                    <button  onClick={()=>{}}><span>Let's Connect</span></button>
                </Col>
                <Col xs={12} md={6} lg={5}>
                    <img src={HeaderImg} alt="header image" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner