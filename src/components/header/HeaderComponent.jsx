// import React, { Component } from 'react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavbarBrand, NavbarToggler, Collapse, NavItem, Tooltip, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTooltip from 'react-tooltip';
import OverlayTrigger from 'react-overlay-trigger';
import './HeaderComponent.css';
import { Popover } from 'bootstrap';

// class Header extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             isNavToggled : false,
//             isOpenNav : false
//         }
//         this.toggleNav = this.toggleNav.bind(this);
//     }

//     toggleNav() {
//         this.setState.isNavToggled({
//             isNavToggled : !this.state.isNavToggled
//         })
//     }
    
//     render() {

function Header () {

    const [isNavToggled, setIsNavToggled] = useState(false);
    // const [isHover, setIsHover] = useState(false);
    
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

                        
                        <Button id='btn' data-aos="zoom-in-left" data-aos-delay="1300" href="#book-form">book now</Button> {' '}
                        
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
// }
 
export default Header;