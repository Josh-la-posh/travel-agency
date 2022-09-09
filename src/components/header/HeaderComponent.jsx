import React, { Component } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Navbar, Nav, NavbarBrand, NavbarToggler, Collapse, NavItem, Label, Button, Form, Input,Modal, ModalHeader, ModalBody, FormGroup, Col, Row, FormFeedback } from 'reactstrap';
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
            isLoginOpen : false,
            isModalOpen : false,
            username : '',
            firstname : '',
            surname : '',
            email : '',
            password : '',
            agree : false,
            touched : {
                firstname : false,
                surname : false,
                email : false,
                password : false
            }
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleLogin = this.toggleLogin.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]:value
        })
    }

    toggleNav () {
        this.setState({
            isNavToggled: !this.state.isNavToggled
        })
    }

    toggleLogin () {
        this.setState({
            isLoginOpen : !this.state.isLoginOpen
        })
    }

    toggleModal () {
        this.setState({
            isModalOpen : !this.state.isModalOpen
        })
    }

    handleLogin = (e) => {
        e.preventDefault();
        this.toggleLogin();
        alert('Username: ' + this.username.value + ' Password:  ' + this.password.value + " Remember " + this.agree.checked);
    }

    handleSignup = (e) => {
        e.preventDefault();
        alert('Username or email: ' + this.email.value + ' Password: ' + this.password.value);
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched : {...this.state.touched, [field]:true}
        });
    }

    validate (firstname, surname, password, email) {
        const errors = {
            firstname : '',
            surname : '',
            password : '',
            email : ''
        };

        if (this.state.touched.firstname && firstname.length < 3) 
            errors.firstname = 'What\'s your name?';
        else if (this.state.touched.firstname && firstname.length >15)
            errors.firstname = 'What\'s your firstname?';
        
        if (this.state.touched.surname && surname.lenght < 3)
            errors.surname = 'What\'s your name?'
        else if (this.state.touched.surname && surname.legth > 15)
            errors.surname = 'What\'s your surname?';
        
        if (this.state.touched.password && password.length < 8)
            errors.password = 'Your password should be greater than 7 characters';
        else if (this.state.touched.password && password.contain);

        const reg = /^\d+$/;
        
        if (this.state.touched.email && email.length < 8)
            errors.email = 'Enter a valid email or mobile number';

        return errors;
    }

    render() {
        const errors = this.validate(this.state.firstname, this.state.surname, this.state.password, this.state.email);
    
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
                                        <Button onClick={this.toggleLogin}>Login</Button>
                                        <Button onClick={this.toggleModal}>Sign Up</Button>
                                    </div>
                                </Popup>
                            </div>
                            
                        </div>
                    </Navbar>

                    <Modal id='modal-login' isOpen={this.state.isLoginOpen} toggle={this.toggleLogin}>
                        <ModalHeader toggle={this.toggleLogin}>Login</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleLogin}>
                                <FormGroup>
                                    <Label>Username</Label>
                                    <Input type='text'
                                            id='username'
                                            name='username'
                                            value={this.state.username}
                                            onChange={this.handleChange}
                                            innerRef={(input) => this.username = input} 
                                            />
                                    <Label htmlFor='password'>Password</Label>
                                    <Input type='password' id='password' name='password'
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                            innerRef={(input) => this.password = input} 
                                            />
                                </FormGroup>
                                <FormGroup check>
                                    <Label check md={9}>
                                        <Input type='checkbox'
                                                name='agre'
                                                value={this.state.agree}
                                                onChange={this.handleChange}
                                                innerRef={(input) => this.agree = input}
                                                />
                                        Remember me
                                    </Label>
                                    <NavLink to='/' md={3}>Need Help</NavLink>
                                </FormGroup>
                                <Button type='submit' value='submit'>Login</Button>

                            </Form>
                        </ModalBody>
                    </Modal>

                    <Modal id='modal-signup' isOpen={this.state.isModalOpen}>
                        <ModalHeader toggle={this.toggleModal}>
                            <h1>Sign Up</h1>
                            <p>It's quick and easy.</p>
                        </ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleSignup}>
                                <FormGroup row>
                                    <Col md={6}>
                                        <Input type='text'
                                                placeholder='First Name'
                                                name='firstname'
                                                value={this.state.firstname}
                                                valid={errors.firstname === ''}
                                                invalid={errors.firstname !== ''}
                                                onBlur={this.handleBlur('firstname')}
                                                onChange={this.handleChange}
                                            />
                                        <FormFeedback>{errors.firstname}</FormFeedback>
                                    </Col>
                                    <Col md={6}>
                                        <Input type='text'
                                                placeholder='Surname'
                                                name='surname'
                                                value={this.state.surname}
                                                onChange={this.handleChange}
                                                valid={errors.surname === ''}
                                                invalid={errors.surname !== ''}
                                                onBlur={this.handleBlur('surname')}
                                            />
                                        <FormFeedback>{errors.surname}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <Col md={12}>
                                    <Input type='text'
                                            placeholder='Mobile number or email address'
                                            name='email'
                                            value={this.state.email}
                                            valid={errors.email === ''}
                                            invalid={errors.email !== ''}
                                            onBlur={this.handleBlur('email')}
                                            onChange={this.handleChange} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                                <Col md={12}>
                                    <Input type='password'
                                            placeholder='New password'
                                            name='password'
                                            value={this.state.password}
                                            onChange={this.handleChange} />
                                </Col>
                                <Col md={12}>
                                    <Label>Date of birth</Label>
                                    <Row>
                                        <Col md={4}>
                                            <Input type='number' />
                                        </Col>
                                        <Col md={4}>
                                            <Input type='month'
                                                className='form-control' />                                            
                                        </Col>
                                        <Col md={4}>
                                            <Input type='year'
                                                className='form-control' />                                            
                                        </Col>                                        
                                    </Row>
                                </Col>
                                <Col md={12}>
                                    <Label>Gender</Label>
                                    <Row>
                                        <Col md={4}>
                                            <Input type='checkbox' placeholder='Female' />
                                        </Col>
                                        <Col md={4}>
                                            <Input type='month'
                                                className='form-control' />                                            
                                        </Col>
                                        <Col md={4}>
                                            <Input type='year'
                                                className='form-control' />                                            
                                        </Col>                                        
                                    </Row>
                                </Col>
                                <Button>Sign Up</Button>
                            </Form>
                        </ModalBody>
                    </Modal>

                    <Outlet />
                </React.Fragment>
            );
    }
}
 
export default Header;