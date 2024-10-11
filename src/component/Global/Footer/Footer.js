import React from 'react';
import { Col, Container } from 'react-bootstrap';
import logo from '../../../assets/logo.svg'
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <Container className='d-flex flex-row align-items-center justify-content-between pt-4 pb-4'>
                <Col lg={6}>
                    <div className="left">
                        <div className="thumb">
                            <img src={logo} alt="" />
                        </div>
                        <div className="intro">
                            <p>© 2023 <span>Filmlane</span>. All Rights Reserved by <span>Tan Phat</span></p>
                        </div>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="right">
                        <Link to="/">Home</Link>
                        <Link to="/movies">Movie</Link>
                    </div>
                </Col>
            </Container>
        </div>
    );
};

export default Footer;