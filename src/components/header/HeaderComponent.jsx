import React, { Component } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Navbar, Nav, NavbarBrand, NavbarToggler, Collapse, NavItem, Label, Button, Form, Input,Modal, ModalHeader, ModalBody, FormGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import ReactTooltip from 'react-tooltip';
// import OverlayTrigger from 'react-overlay-trigger';
import './HeaderComponent.css';
// import { Popover } from 'bootstrap';
import Popup from 'reactjs-popup';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavToggled : false,
            isModalOpen : false,
            username : '',
            password : '',
            agree : false
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name]:value
        })
    }

    toggleNav () {
        this.setState({
            isNavToggled: !this.state.isNavToggled
        })
    }

    toggleModal () {
        this.setState({
            isModalOpen : !this.state.isModalOpen
        })
    }

    handleLogin = (e) => {
        e.preventDefault();
        this.toggleModal();
        alert('Username: ' + this.username.value + ' Password:  ' + this.password.value + " Remember " + this.remember.checked);
    }

    render() {
    
            return (
                <React.Fragment>
                    <Navbar expand='md' dark>
                        <div id='header-nav'>

                            <NavbarToggler onClick={()=>this.state.isNavToggled} />

                            {/* <div id="menu-btn" className="fas fa-bars"></div> */}

                            <NavbarBrand data-aos="zoom-in-left" data-aos-delay="150" href="#" id="logo">
                                <FontAwesomeIcon icon="paper-plane" className='header-logo' /> travel
                            </NavbarBrand>

                            <Collapse navbar isNavToggled={this.toggleNav} className='nav-col'>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink data-aos="zoom-in-left" data-aos-delay="300" className='nav-link' id='nav-link-item' to="/">home</NavLink>
                                    </NavItem>
                                    <NavItem>                                        
                                        <NavLink data-aos="zoom-in-left" data-aos-delay="450" className='nav-link' id='nav-link-item' to="/about">about</NavLink>
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
                                    <Form>
                                        <Label>Change Language</Label>                                
                                        <Input
                                            value='English'
                                             />
                                        <hr />
                                        <Label>Change Country</Label>
                                        <Input type='select'>
                                            <option value="">Nigeria</option>
                                        </Input>
                                        <hr />
                                        <Label>Change Currency</Label>
                                        <Input type='select'>
                                            <option value="">NGN</option>
                                        </Input>
                                        <hr />
                                    </Form>
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
                                        <Button onClick={this.toggleModal}>Login</Button>
                                        <Button>Sign Up</Button>{''}
                                    </div>
                                </Popup>
                            </div>
                            
                        </div>
                    </Navbar>

                    <Modal id='modal' isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleLogin}>
                                <FormGroup>
                                    <Label>Username</Label>
                                    <Input type='text' id='username' name='username'
                                            value={this.state.username}
                                            onChange={this.handleChange}
                                            innerRef={(input) => this.username = input} 
                                            />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor='password'>Password</Label>
                                    <Input type='password' id='password' name='password'
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                            innerRef={(input) => this.password = input} 
                                            />
                                </FormGroup>
                                <FormGroup check>
                                    <Label check md={9}>
                                        <Input type='checkbox' name='agre'
                                                value={this.state.agree}
                                                onChange={this.handleChange}
                                                innerRef={(input) => this.remember = input}
                                                />
                                        Remember me
                                    </Label>
                                    <NavLink to='/' md={3}>Need Help</NavLink>
                                </FormGroup>
                                <Button type='submit' value='submit'>Login</Button>

                            </Form>
                        </ModalBody>
                    </Modal>

                    <Modal>
                        
                    </Modal>

                    <Outlet />
                </React.Fragment>
            );
    }
}
 
export default Header;