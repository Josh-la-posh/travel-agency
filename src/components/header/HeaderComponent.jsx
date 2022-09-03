// import React, { Component } from 'react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { Modal } from 'react-modal';
import { Navbar, Nav, NavbarBrand, NavbarToggler, Collapse, NavItem, Label, Card, CardTitle, CardBody, CardText, Button, Form, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import ReactTooltip from 'react-tooltip';
// import OverlayTrigger from 'react-overlay-trigger';
import './HeaderComponent.css';
import { Popover } from 'bootstrap';
import Popup from 'reactjs-popup';

function Header () {

    const [isNavToggled, setIsNavToggled] = useState(false);
    
        return (
            <React.Fragment>
                <Navbar expand='md' dark>
                    <div id='header-nav'>

                        {/* <NavbarToggler onClick={this.toggleNav} /> */}

                        <NavbarToggler onClick={() => setIsNavToggled(!isNavToggled)} />

                        {/* <div id="menu-btn" className="fas fa-bars"></div> */}

                        <NavbarBrand data-aos="zoom-in-left" data-aos-delay="150" href="#" id="logo">
                            <FontAwesomeIcon icon="paper-plane" className='header-logo' /> travel
                        </NavbarBrand>

                        <Collapse navbar isNavToggled={isNavToggled} className='nav-col'>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink data-aos="zoom-in-left" data-aos-delay="300" className='nav-link' id='nav-link-item' to="/">home</NavLink>
                                    {/* <ReactTooltip id='homei' place='bottom' effect='solid'> */}
                                        {/* Home */}
                                    {/* </ReactTooltip> */}
                                </NavItem>
                                <NavItem>
                                    {/* <OverlayTrigger
                                        placement='bottom'
                                        overlay={
                                            <Tooltip id='tooltip-bottom'>About</Tooltip>
                                        }
                                        > */}
                                        <NavLink data-aos="zoom-in-left" data-aos-delay="450" className='nav-link' id='nav-link-item' to="/about">about</NavLink>

                                    {/* </OverlayTrigger> */}
                                    
                                </NavItem>
                                <NavItem>
                                    <NavLink data-aos="zoom-in-left" data-aos-delay="750" className='nav-link' id='nav-link-item' to="/services">services</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink data-aos="zoom-in-left" data-aos-delay="900" className='nav-link' id='nav-link-item' to="/gallery">gallery</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink data-aos="zoom-in-left" data-aos-delay="1150" className='nav-link' id='nav-link-item' to="/blogs">blogs</NavLink>
                                </NavItem>
                                
                            </Nav>
                        </Collapse>

                        <div id='logo-btn' data-aos="zoom-in-left" data-aos-delay="1300">
                            <Popup
                                trigger={
                                    <button type='button' id='logo-btn'>
                                        EN | NGN <FontAwesomeIcon icon="angle-down" className='icon-right'/>
                                    </button>
                                }
                                position={['bottom right']}
                                on={['hover', 'focus']}
                            >
                                <Card>
                                    <CardTitle>Change Language</CardTitle>
                                    <CardBody>
                                        <CardText>English</CardText>
                                    </CardBody>
                                </Card>
                            </Popup>
                            <Popup
                                trigger={
                                    <button type='button' id='logo-btn'>
                                        My Account <FontAwesomeIcon icon="angle-down" className='icon-right'/>
                                    </button>
                                }
                                position="bottom right"
                                on={['hover', 'focus']}
                            >
                                <div className="logo-btn__btn">
                                    <Button>Login</Button>
                                    <Button>Sign Up</Button>{''}
                                </div>
                            </Popup>
                        </div>
                        
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
// }
 
export default Header;