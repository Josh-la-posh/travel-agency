import React, { useMemo, useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import {Navbar, Nav, NavItem, Button, Form, FormGroup, Label, Input, Col, Row, Card, CardImgOverlay, CardImg, CardTitle, CardBody, CardText } from "reactstrap";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import './Home.css';

function Home() {
    const [tabIndex, setTabIndex] = useState(0);
    const [value, setValue] = useState('');
    const options = useMemo(() => countryList().getData(), [])
    const changeHandler = value => {
        setValue(value)
    }

    return (
        <div className="">
            <section className="home">

                <div className="content">
                    <span data-aos="fade-up" data-aos-delay="150">follow us</span>
                    <h3 data-aos="fade-up" data-aos-delay="300">to the unknown</h3>
                    <p data-aos="fade-up" data-aos-delay="450">Our collection offers travel at the finest hotels and resorts, in the exciting landscape of cruising and the exclusive world of private touring.</p>
                    <NavLink className='nav-link' data-aos="fade-up" data-aos-delay="600" to="#" id="btn">book now</NavLink>
                </div>

            </section>

            {/* home section ends */}

            {/* <!-- booking form section starts  --> */}

            <section className="book-form" id="book-form">
                <Tabs selectedIndex={tabIndex} onSelect={(index)=>setTabIndex(index)}>
                    <TabList id='tab-list'>
                        {/* <Collapse navbar className='nav-col'> */}
                            <Tab>Packages</Tab>
                            <Tab>Flights</Tab>
                            <Tab>Hotels</Tab>
                            {/* <Tab>Car Rentals</Tab> */}
                            <Tab>Cruises</Tab>
                        {/* </Collapse> */}
                                        
                    </TabList>

                    <TabPanel>
                        <Form show>
                            
                            <Row>
                                <Col data-aos="zoom-in" className='inputBox' data-aos-delay="150">
                                    <FormGroup>
                                        <Label>Leaving from</Label>
                                        <Select id='select-primary' placeholder='Choose Your Destination' options={options} value={value} onChange={changeHandler}>                                            
                                        </Select>
                                    </FormGroup>
                                </Col>
                                <Col data-aos="zoom-in" className='inputBox' data-aos-delay="300">
                                    <FormGroup>
                                        <Label>Going to</Label>
                                        <Select id='select-primary' placeholder='Choose Your Destination' options={options} value={value} onChange={changeHandler}>                                            
                                        </Select>
                                    </FormGroup>
                                </Col>
                                <Col data-aos="zoom-in" className='inputBox' data-aos-delay="450">
                                    <FormGroup>
                                        <Label>Departing On</Label>
                                        <Input id='option-input' type="date" value=""/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col md={2} data-aos="zoom-in" data-aos-delay="300" className="inputBox">
                                    <span>Duration</span>
                                    <Input id='select-secondary' type='select' value="">
                                        <option>3 to 4 nights</option>
                                        <option>5 to 10 nights</option>
                                        <option>11 to 16 nights</option>
                                    </Input>
                                </Col>
                                <Col md={2} data-aos="zoom-in" data-aos-delay="450" className="inputBox">
                                    <span>Hotel</span>
                                    <Input type='select' id='select-secondary' value=""></Input>
                                </Col>
                                <Col md={2} data-aos="zoom-in" data-aos-delay="450" className="inputBox">
                                    <span>Star Rating</span>
                                    <Input type='select' id='select-secondary' value="">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </Col>
                                <Col md={4} data-aos="zoom-in" data-aos-delay="450" className="inputBox">
                                    <span>Price Range</span>
                                    <Row>
                                        <Col><Input id='select-secondary' type='text' placeholder='Minimum' value=''/></Col>
                                        <Col><Input id='select-secondary' type='text' placeholder='Maximun' value=''/></Col>
                                    </Row>
                                </Col>
                                <Col md={{size:2}} data-aos="zoom-in" data-aos-delay="450" className="inputBox">
                                    <span>Rooms</span>
                                    <Input type='select' id='select-secondary' value="">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </Col>                            
                            </Row>

                            <Row className=''>
                                <Col md={2}>
                                    <FormGroup data-aos="zoom-in" data-aos-delay="450">
                                        <Label>
                                            <Input type='checkbox' name='agree'  /> {""}
                                            All Inclusive Only
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup data-aos="zoom-in" data-aos-delay="450">
                                        <Label>
                                            <Input type='checkbox' name='agree' /> {""}
                                            Adults Only
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup data-aos="zoom-in" data-aos-delay="450">
                                        <Label>
                                            <Input type='checkbox' name='agree' /> {""}
                                            Beach
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup data-aos="zoom-in" data-aos-delay="450">
                                        <Label>
                                            <Input type='checkbox' name='agree' /> {""}
                                            Casino
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup data-aos="zoom-in" data-aos-delay="450">
                                        <Label>
                                            <Input type='checkbox' name='agree' /> {""}
                                            Family Friendly
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup data-aos="zoom-in" data-aos-delay="450">
                                        <Label>
                                            <Input type='checkbox' name='agree' /> {""}
                                            Golf
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup data-aos="zoom-in" data-aos-delay="450">
                                        <Label>
                                            <Input type='checkbox' name='agree' /> {""}
                                            Kichenette
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup data-aos="zoom-in" data-aos-delay="450">
                                        <Label>
                                            <Input type='checkbox' name='agree' /> {""}
                                            Miniclub
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup data-aos="zoom-in" data-aos-delay="450">
                                        <Label>
                                            <Input type='checkbox' name='agree' /> {""}
                                            Oceanview
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup data-aos="zoom-in" data-aos-delay="450">
                                        <Label>
                                            <Input type='checkbox' name='agree' /> {""}
                                            Spa
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup data-aos="zoom-in" data-aos-delay="450">
                                        <Label>
                                            <Input type='checkbox' name='agree' /> {""}
                                            Wedding
                                        </Label>
                                    </FormGroup>
                                </Col>
                            </Row>
                            
                            <Input id='btn-submit' data-aos="zoom-in" data-aos-delay="600" type="submit" value="find now" />
                        </Form>
                    </TabPanel>
                    <TabPanel>
                        <Form show>
                            <Row>

                                <Col className='inputBox' data-aos="zoom-in" data-aos-delay="150" className="inputBox">
                                    <Label>Leaving from</Label>
                                    <Select id='select-primary' value=""/>
                                </Col>
                                <Col className='inputBox' data-aos="zoom-in" data-aos-delay="300" className="inputBox">
                                    <Label>Going to</Label>
                                    <Select id='select-primary' value=""/>
                                </Col>
                                <Col className='inputBox' data-aos="zoom-in" data-aos-delay="450" className="inputBox">
                                    <Label>Departing On</Label>
                                    <Input id='option-input' type="date" value=""/>
                                </Col>
                                <Col className='inputBox' data-aos="zoom-in" data-aos-delay="450" className="inputBox">
                                    <Label>Return On</Label>
                                    <Input id='option-input' type="date" value=""/>
                                </Col>

                            </Row>

                            <Row className='align-items-center'>

                                <Col data-aos="zoom-in" data-aos-delay="450" className="inputBox">
                                    <Input type="checkbox" md={{size:3, offset:2}} value=""/>
                                    <span md={7}>Direct Flight Only</span>
                                </Col>
                                <Col data-aos="zoom-in" data-aos-delay="450" className="inputBox">
                                    <span>Adult</span>
                                    <Input id='select-secondary' type="select" value="">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                    </Input>
                                </Col>
                                <Col data-aos="zoom-in" data-aos-delay="450" className="inputBox">
                                    <span>Children</span>
                                    <Input id='select-secondary' type="select" value="">
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </Input>
                                </Col>
                                <Col data-aos="zoom-in" data-aos-delay="450" className="inputBox">
                                    <span>Infant</span>
                                    <Input id='select-secondary' type="select" value="">
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </Input>
                                </Col>
                            </Row>
                            <Input id='btn-submit' data-aos="zoom-in" data-aos-delay="600" type="submit" value="find now" />

                        </Form>
                    </TabPanel>
                    <TabPanel>
                        <Form show>
                            <Row>
                                <Col data-aos="zoom-in" data-aos-delay="150" className="inputBox">
                                    <Label>Destination</Label>
                                    <Select id='select-primary' type="text" value=""/>
                                </Col>
                                <Col data-aos="zoom-in" data-aos-delay="300" className="inputBox">
                                    <Label>Check-in Date</Label>
                                    <Input id='option-input' type="date" value=""/>
                                </Col>
                                <Col data-aos="zoom-in" data-aos-delay="300" className="inputBox">
                                    <Label>Check-out Date</Label>
                                    <Input id='option-input' type="date" value=""/>
                                </Col>
                                <Col data-aos="zoom-in" data-aos-delay="450" className="inputBox">
                                    <span>Rooms</span>
                                    <Input id='select-secondary' type='select' name="">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </Input>
                                </Col>                                
                            </Row>
                            <Input id='btn-submit' data-aos="zoom-in" data-aos-delay="600" type="submit" value="find now" />
                        </Form>
                    </TabPanel>
                    {/* <TabPanel>                        
                        <Form show>
                            <Row>
                                <h1>Search for Car Hire</h1>
                                <Col data-aos="zoom-in" data-aos-delay="150" className="inputBox">
                                    <Label>where to?</Label>
                                    <Input type="text" placeholder="place name" value=""/>
                                </Col>
                                <Col data-aos="zoom-in" data-aos-delay="150" className="inputBox">
                                    <Label>where to?</Label>
                                    <Input type="text" placeholder="place name" value=""/>
                                </Col>
                                <Col data-aos="zoom-in" data-aos-delay="300" className="inputBox">
                                    <Label>when?</Label>
                                    <Input type="date" value=""/>
                                </Col>
                                <Col data-aos="zoom-in" data-aos-delay="450" className="inputBox">
                                    <Label>how many?</Label>
                                    <Input type="number" placeholder="number of travelers" value=""/>
                                </Col>
                            </Row>
                            <Input id='btn-submit' data-aos="zoom-in" data-aos-delay="600" type="submit" value="find now" />
                        </Form>
                    </TabPanel> */}
                    <TabPanel>                        
                        <Form show>
                            <Row>
                                <Col md={3} data-aos="zoom-in" data-aos-delay="150" className="inputBox">
                                    <Label>Destination</Label>
                                    <Select id='select-primary' placeholder="Any destination" value=""/>
                                </Col>
                                <Col md={5} data-aos="zoom-in" data-aos-delay="300" className="inputBox">
                                    <Label>Embarking Date Range</Label>
                                    <Row className='align-items-center'>
                                        <Col>
                                            <Input id='option-input' type="date" value=""/>
                                        </Col>to
                                        <Col>
                                            <Input id='option-input' type="date" value=""/>
                                        </Col>                                        
                                    </Row>                                    
                                </Col>
                                <Col md={2} data-aos="zoom-in" data-aos-delay="450" className="inputBox">
                                    <Label>how many?</Label>
                                    <Input id='option-input' type="select" value=""/>
                                </Col>
                                <Col md={2} data-aos="zoom-in" data-aos-delay="150" className="inputBox">
                                    <Label>Duration</Label>
                                    <Input type='select' name="" id="option-input">
                                        <option value="ngt">1-2 Nights</option>
                                        <option value="ngt">3-6 Nights</option>
                                        <option value="ngt">7-9 Nights</option>
                                        <option value="ngt">10-14 Nights</option>
                                        <option value="ngt">Over 14 Nights</option>
                                    </Input>
                                </Col>                            
                            </Row>
                            <Input id='btn-submit' data-aos="zoom-in" data-aos-delay="600" type="submit" value="find now" />
                        </Form>
                    </TabPanel>

                </Tabs>

            </section>

                {/* <!-- booking form section ends --> */}

                {/* <!-- about section starts  --> */}

            <section>
                <Row className='about'>
                    <Col className="video-container" data-aos="fade-right" data-aos-delay="300">
                        <video src="images/about-vid-1.mp4" muted autoplay loop className="video"></video>
                        <div className="controls">
                            <span className="control-btn" data-src="images/about-vid-1.mp4"></span>
                            <span className="control-btn" data-src="images/about-vid-2.mp4"></span>
                            <span className="control-btn" data-src="images/about-vid-3.mp4"></span>
                        </div>
                    </Col>

                    <Col className="content" data-aos="fade-left" data-aos-delay="600">
                        <span>why choose us?</span>
                        <h3>Nature's Majesty Awaits You</h3>
                        <p>Frontier Travel advisors are brilliantly skilled at delivering unique, personal travel experiences whether they be for personal or business travel. No matter how complex your needs may seem, our team will come up with a dynamic and creative plan to suit your specific requirements.</p>
                        <Link to="#" className='nav-link' id="btn">read more</Link>
                    </Col>
                </Row>

            </section>

                {/* <!-- about section ends --> */}

                {/* <!-- destination section starts  --> */}

            <section>

                <div className="heading">
                    <span>our destination</span>
                    <h1>make yours destination</h1>
                </div>

                <div className="destination">

                    <Card data-aos="fade-up" data-aos-delay="150">
                        <div className="tag">
                            <p>Likely to sell out</p>
                        </div>
                        <CardImgOverlay>
                            <CardImg src="images/des-1.jpg" alt=""/>
                        </CardImgOverlay>
                        <CardBody id='card-body'>
                            <CardTitle>Reef and Island Scenic Flight from Airlie Beach</CardTitle>
                            <CardText>Take a scenic flight over the Whitsunday Islands and Great Barrier Reef that provides unobstructed views of tropical islands surrounded by turquoise ocean and coral reef.</CardText>
                            <Link className='nav-link' to="#">read more <FontAwesomeIcon icon="chevron-right" className='right-arrow' /></Link>
                        </CardBody>
                    </Card>

                    <Card data-aos="fade-up" data-aos-delay="300">
                        <div className="tag">
                            <p>Likely to sell out</p>
                        </div>
                        <CardImgOverlay>
                            <CardImg src="images/des-2.jpg" alt=""/>
                        </CardImgOverlay>
                        <CardBody id='card-body'>
                            <CardTitle>All Inclusive Small-Group Blue Mountains Day Trip</CardTitle>
                            <CardText>Experience the majestic World Heritage-listed Blue Mountains on a small-group full-day tour from Sydney.</CardText>
                            <Link className='nav-link' to="#">read more <FontAwesomeIcon icon="chevron-right" className='right-arrow' /></Link>
                        </CardBody>
                    </Card>

                    <Card data-aos="fade-up" data-aos-delay="450">
                        <CardImgOverlay>
                            <CardImg src="images/des-3.jpg" alt=""/>
                        </CardImgOverlay>
                        <CardBody id='card-body'>
                            <CardTitle>Ocean Freedom Great Barrier Reef Personal Luxury Snorkel & Dive Cruise</CardTitle>
                            <CardText>Spend a day on the Great Barrier Reef at two different snorkel and dive sites on this luxury catamaran cruise from Cairns.</CardText>
                            <Link className='nav-link' to="#">read more <FontAwesomeIcon icon="chevron-right" className='right-arrow' /></Link>
                        </CardBody>
                    </Card>

                    <Card data-aos="fade-up" data-aos-delay="600">
                        <div className="tag">
                            <p>Likely to sell out</p>
                        </div>
                        <CardImgOverlay>
                            <CardImg src="images/des-4.jpg" alt=""/>
                        </CardImgOverlay>
                        <CardBody id='card-body'>
                            <CardTitle>Nepal Tours and Trips</CardTitle>
                            <CardText>Nepal, the heart of the Himalayas, boasts plenty of amazing tours. Visit Sherpa villages while trekking the Everest Base Camp trek.</CardText>
                            <Link className='nav-link' to="#">read more <FontAwesomeIcon icon="chevron-right" className='right-arrow' /></Link>
                        </CardBody>
                    </Card>
                    
                </div>

            </section>

            {/* <!-- destination section ends --> */}

            {/* <!-- services section starts  --> */}

            <section>

                <div className="heading">
                    <span>our services</span>
                    <h1>countless expericences</h1>
                </div>

                <div className="services">

                    <Card data-aos="zoom-in-up" data-aos-delay="150">
                        <FontAwesomeIcon icon="globe" className='icon' />
                        <CardBody id='card-body'>
                            <CardTitle>worldwide</CardTitle>
                            <CardText>A strict screening process ensures that we only offer the best tours and trip packages globally.</CardText>
                        </CardBody>                        
                    </Card>

                    <Card data-aos="zoom-in-up" data-aos-delay="300">
                        <FontAwesomeIcon icon="person-hiking" className='icon' />
                        <CardBody id='card-body'>
                            <CardTitle>adventures</CardTitle>
                            <CardText>You will find a multitude of adventures here: from camping and caravanning, to canoe expeditions</CardText>
                        </CardBody>                        
                    </Card>

                    <Card data-aos="zoom-in-up" data-aos-delay="450">
                        <FontAwesomeIcon icon="utensils" className='icon' />
                        <CardBody id='card-body'>
                            <CardTitle>food & drinks</CardTitle>
                            <CardText>Exploring fantastic food - whether it is for the outdoors, adventuring - or even a slap-up meal in port. You will  enjoy the recipes 😊</CardText>                            
                        </CardBody>
                    </Card>

                    <Card data-aos="zoom-in-up" data-aos-delay="600">
                        <FontAwesomeIcon icon="hotel" className='icon' />
                        <CardBody id='card-body'>
                            <CardTitle>affordable hotels</CardTitle>
                            <CardText>The Finest Luxury Hotels & Resorts. 24/7 Support. Great rates with our Best Price Guarantee.</CardText>
                        </CardBody>                        
                    </Card>

                    <Card data-aos="zoom-in-up" data-aos-delay="750">
                        <FontAwesomeIcon icon="wallet" className='icon' />
                        <CardBody id='card-body'>
                            <CardTitle>affordable price</CardTitle>
                            <CardText>We guarantee you the best price. Found a lower price? We will match it.</CardText>
                        </CardBody>                        
                    </Card>

                    <Card data-aos="zoom-in-up" data-aos-delay="900">
                        <FontAwesomeIcon icon="headset" className='icon' />
                        <CardBody id='card-body'>
                            <CardTitle>24/7 support</CardTitle>
                            <CardText>Customers have rated our trips 4.8 of 5 stars out of more than 25,000 trip ratings.</CardText>
                        </CardBody>                        
                    </Card>

                </div>

            </section>

                {/* <!-- services section ends --> */}

                {/* <!-- gallery section starts  --> */}

            <section>

                <div className="heading">
                    <span>our gallery</span>
                    <h1>we record memories</h1>
                </div>
                
                <div className="gallery">

                    <div className="box" data-aos="zoom-in-up" data-aos-delay="150">
                        <img src="images/gallery-img-1.jpg" alt=""/>
                        <span>travel spot</span>
                        <h3>iceland</h3>
                    </div>

                    <div className="box" data-aos="zoom-in-up" data-aos-delay="300">
                        <img src="images/gallery-img-2.jpg" alt=""/>
                        <span>travel spot</span>
                        <h3>greenland</h3>
                    </div>

                    <div className="box" data-aos="zoom-in-up" data-aos-delay="450">
                        <img src="images/gallery-img-3.jpg" alt=""/>
                        <span>travel spot</span>
                        <h3>alaska</h3>
                    </div>

                    <div className="box" data-aos="zoom-in-up" data-aos-delay="150">
                        <img src="images/gallery-img-4.jpg" alt=""/>
                        <span>travel spot</span>
                        <h3>thailand</h3>
                    </div>

                    <div className="box" data-aos="zoom-in-up" data-aos-delay="300">
                        <img src="images/gallery-img-5.jpg" alt=""/>
                        <span>travel spot</span>
                        <h3>brazil</h3>
                    </div>

                    <div className="box" data-aos="zoom-in-up" data-aos-delay="450">
                        <img src="images/gallery-img-6.jpg" alt=""/>
                        <span>travel spot</span>
                        <h3>maldive</h3>
                    </div>

                    <div className="box" data-aos="zoom-in-up" data-aos-delay="150">
                        <img src="images/gallery-img-7.jpg" alt=""/>
                        <span>travel spot</span>
                        <h3>iceland</h3>
                    </div>

                    <div className="box" data-aos="zoom-in-up" data-aos-delay="300">
                        <img src="images/gallery-img-8.jpg" alt=""/>
                        <span>travel spot</span>
                        <h3>alaska</h3>
                    </div>

                    <div className="box" data-aos="zoom-in-up" data-aos-delay="450">
                        <img src="images/gallery-img-9.jpg" alt=""/>
                        <span>travel spot</span>
                        <h3>maldive</h3>
                    </div>

                </div>

            </section>

                {/* <!-- gallery section ends --> */}

                {/* <!-- review section starts  --> */}

            <section className="review">

                <div className="content" data-aos="fade-right" data-aos-delay="300">
                    <span>testimonials</span>
                    <h3>good news from our clients</h3>
                    <p>Our agents come highly recommended, but you don’t have to take our word for it.</p>
                </div>

                <Row className="box-container" data-aos="fade-left" data-aos-delay="600">

                    <div className="box">
                        <p>“Wouldn't trust my travel to anyone else. Julie you are amazing!"</p>
                        <div className="user">
                            <img src="images/pic-1.png" alt=""/>
                            <div className="info">
                                <h3>Steve</h3>
                                <span>traveller</span>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <p>“I could not have asked for a better stay than Klausturhof. Thanks again, Meg S."</p>
                        <div className="user">
                            <img src="images/pic-2.png" alt=""/>
                            <div className="info">
                                <h3>Meg S.</h3>
                                <span>traveller</span>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <p>“Our experience was truely memorable and hastle free. All thanks to Agoda and Meeru :)"</p>
                        <div className="user">
                            <img src="images/pic-4.png" alt=""/>
                            <div className="info">
                                <h3>Stephanie B.</h3>
                                <span>travellerr</span>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <p>“Vali, thank you once again for your help and kindness. I’m glad we have YOU working with us."</p>
                        <div className="user">
                            <img src="images/pic-3.png" alt=""/>
                            <div className="info">
                                <h3>Derek T.</h3>
                                <span>traveller</span>
                            </div>
                        </div>
                    </div>

                </Row>

            </section>

                {/* <!-- review section ends --> */}

                {/* <!-- blogs section starts  --> */}

            <section>

                <div className="heading">
                    <span>blogs & posts</span>
                    <h1>we untold stories</h1>
                </div>

                <div className="blogs">

                    <Card data-aos="fade-up" data-aos-delay="150">
                        <CardImgOverlay>
                            <CardImg src="images/blog-1.jpg" alt=""/>
                        </CardImgOverlay>
                        <CardBody id='card-body'>
                            <Link to="#" className="nav-link">Excited to plan your next travel!</Link>
                            <CardText>Happy to travel new places in USA and Europe. What is the best airline to travel with around Europe? Train or road trip? What is best hotels to stay in London and Italy?</CardText>
                            <div className="links">
                                <Link className='nav-link' to="#"><FontAwesomeIcon icon="clock" className='icon' /> 5 days ago</Link>
                                <Link className='nav-link' to="#"><FontAwesomeIcon icon="user" className='icon' /> by admin</Link>
                            </div>
                        </CardBody>
                    </Card>

                    <Card data-aos="fade-up" data-aos-delay="300">
                        <CardImgOverlay>
                            <CardImg src="images/blog-2.jpg" alt=""/>
                        </CardImgOverlay>
                        <CardBody id='card-body'>
                            <Link to="#" className="nav-link">Traveling solo</Link>
                            <CardText>You’ve never flown anywhere & plan to do so alone this year, so what is the best advice to give someone traveling alone?</CardText>
                            <div className="links">
                                <Link className='nav-link' to="#"><FontAwesomeIcon icon="clock" className='icon' /> 5 days ago</Link>
                                <Link className='nav-link' to="#"><FontAwesomeIcon icon="user" className='icon' /> by admin</Link>
                            </div>
                        </CardBody>
                    </Card>

                    <Card data-aos="fade-up" data-aos-delay="450">
                        <CardImgOverlay>
                            <CardImg src="images/blog-3.jpg" alt=""/>
                        </CardImgOverlay>
                        <CardBody id='card-body'>
                            <Link to="#" className="nav-link">Visiting in October</Link>
                            <CardText>Any place that is a must for my first time to the island? Best food? Beaches?</CardText>
                            <div className="links">
                                <Link className='nav-link' to="#"><FontAwesomeIcon icon="clock" className='icon' /> 5 days ago</Link>
                                <Link className='nav-link' to="#"><FontAwesomeIcon icon="user" className='icon' /> by admin</Link>
                            </div>
                        </CardBody>
                    </Card>

                </div>

            </section>

            {/* <!-- blogs section ends --> */}

            {/* <!-- banner section starts  --> */}

            <div className="banner">

                <div className="content" data-aos="zoom-in-up" data-aos-delay="300">
                    <span>start your adventures</span>
                    <h3>Let's Explore This World</h3>
                    <p>So set free the adventurer within you and let us guide you through this mesmerizing continent!</p>
                    <Link to="#book-form" className='nav-link' id="btn">book now</Link>
                </div>

            </div>

                {/* <!-- banner section ends --> */}
        </div>
    );
}
 
export default Home;