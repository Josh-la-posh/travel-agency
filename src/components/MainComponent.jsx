import { Component } from 'react';
import { connect } from 'react-redux';
import {Route, Routes, Navigate} from 'react-router-dom';
import '../App.css';
import Header from './header/HeaderComponent';
import Home from './menuComponents/Home';
import NoPage from './menuComponents/NoPage';
import Footer from './footer/FooterComponent';
import { setToggleNav, setOpenLoginModal, setOpenModal,
         setUsername, setFirstname, setSurname,
         setEmail, setPassword, setAgree, setTouchedFirstname,
         setTouchedSurname, setTouchedEmail, setTouchedPassword } from '../action';

const mapStateToProps = (state) => {
    return {
        isNavToggled : state.isNavToggled,
        isLoginOpen : state.isLoginOpen,
        isModalOpen : state.isModalOpen,
        username : state.username,
        firstname : state.firstname,
        surname : state.surname,
        email : state.email,
        password : state.password,
        agree : state.agree,
        touchedFirstname: state.touched.firstname,
        touchedSurname: state.touched.surname,
        touchedEmail: state.touched.email,
        touchedPassowrd: state.touched.password,
        touched : {
            touchedFirstname: state.touched.firstname,
            touchedSurname: state.touched.surname,
            touchedEmail: state.touched.email,
            touchedPassowrd: state.touched.password
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleNav: () => dispatch(setToggleNav()),
        toggleLogin : () => dispatch(setOpenLoginModal()),
        toggleModal: () => dispatch(setOpenModal()),
    }
}

 class Main extends Component {
     constructor(props) {
         super(props);
         this.state = {
            touched : {
                firstname : false,
                surname : false,
                email : false,
                password : false
            }
         }
     }

     render() {
         const {isNavToggled, isLoginOpen, isModalOpen,
                username, firstname, surname, email, agree,
                password, toggleNav, toggleLogin, toggleModal, touchedFirstname, touchedPassowrd, touchedEmail, touchedSurname } = this.props;

        return (
            <div className='App'>
                {/* <Header /> */}
                <Routes>
                    <Route path='/' 
                            element={<Header 
                                isNavToggled={isNavToggled}
                                isLoginOpen= {isLoginOpen}
                                isModalOpen={isModalOpen}
                                username={username}
                                firstname={firstname}
                                surname={surname}
                                email={email}
                                agree={agree}
                                password={password}
                                // touched={touched.firstname}
                                touchedFirstname={touchedFirstname}
                                touchedSurname={touchedSurname}
                                touchedEmail={touchedEmail}
                                touchedPassowrd={touchedPassowrd}
                                toggleNav={toggleNav}
                                toggleLogin={toggleLogin}
                                toggleModal={toggleModal}                           
                            />}>

                        <Route index element={<Home />} />



                        {/* <Route path='blog' element={<Blog />} />
                        <Route path='contact' element={<Contact />} />
                        <Route path='about' element={<About />} /> */}
                        <Route path='*' element={<NoPage />} />
                    </Route>
                </Routes>
                <Footer />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);