import { useState, useMemo } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { Form, FormGroup, Label, Input, Col, Row } from "reactstrap";
import './menuComponents/Home.css';

export default function TabForm() {
    const [tabIndex, setTabIndex] = useState(0);
    const [value, setValue] = useState('');
    const options = useMemo(() => countryList().getData(), [])
    const changeHandler = value => {
        setValue(value)
    }
  return (
    <div>
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
    </div>
  )
}
