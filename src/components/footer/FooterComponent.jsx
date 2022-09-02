import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import './FooterComponent.css';

class Footer extends Component {
    render() { 
        return (
            <div>
                <section className="footer">

                    <div className="box-container">

                        <div className="box" data-aos="fade-up" data-aos-delay="150">
                            <NavLink className='nav-link' to="#" id="logo"> 
                                <FontAwesomeIcon icon="paper-plane" className='header-logo' />travel
                            </NavLink>
                            <p>Our main goal is to help you connect with this magical continent; its kind and generous people, colourful culture, and extremely varied wildlife.</p>
                            <div className="share">
                                <NavLink to="#"><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></NavLink>
                                <NavLink to="#" className="fab fa-twitter"></NavLink>
                                <NavLink to="#" className="fab fa-instagram"></NavLink>
                                <NavLink to="#" className="fab fa-linkedin"></NavLink>
                            </div>
                        </div>

                        <div className="box" data-aos="fade-up" data-aos-delay="300">
                            <h3>quick links</h3>
                            <NavLink to="#home" className="nav-link"> <FontAwesomeIcon icon='arrow-right' className='icon' /> home </NavLink>
                            <NavLink to="#about" className="nav-link"> <FontAwesomeIcon icon='arrow-right' className='icon' /> about </NavLink>
                            <NavLink to="#destination" className="nav-link"> <FontAwesomeIcon icon='arrow-right' className='icon' /> destination </NavLink>
                            <NavLink to="#services" className="nav-link"> <FontAwesomeIcon icon='arrow-right' className='icon' /> services </NavLink>
                            <NavLink to="#gallery" className="nav-link"> <FontAwesomeIcon icon='arrow-right' className='icon' /> gallery </NavLink>
                            <NavLink to="#blogs" className="nav-link"> <FontAwesomeIcon icon='arrow-right' className='icon' /> blogs </NavLink>
                        </div>

                        <div className="box" data-aos="fade-up" data-aos-delay="450">
                            <h3>contact info</h3>
                            <p> <FontAwesomeIcon icon='map' className='icon' />  Ottawa, Canada </p>
                            <p> <FontAwesomeIcon icon='phone' className='icon' /> +123-456-7890 </p>
                            <p> <FontAwesomeIcon icon='envelope' className='icon' /> demil@gmail.com </p>
                            <p> <FontAwesomeIcon icon='clock' className='icon' /> 7:00am - 10:00pm </p>
                        </div>

                        <div className="box" data-aos="fade-up" data-aos-delay="600">
                            <h3>newsletter</h3>
                            <p>subscribe for latest updates</p>
                            <Form>
                                <Input type="email" name="" placeholder="enter your email" className="email" id=""/>
                                <Button type='submit' id='btn' data-aos="zoom-in-left" data-aos-delay="1300" href="#book-form">book now</Button> {' '}
                            </Form>
                        </div>

                    </div>

                </section>

                <div className="credit">created by <span>Daddydof</span> | all rights reserved!</div>

                {/* <!-- footer section ends --> */}
            </div>
        );
    }
}
 
export default Footer;