import {Route, Routes, Navigate} from 'react-router-dom';
import '../App.css';
import Header from './header/HeaderComponent';
import Home from './menuComponents/Home';
import Footer from './footer/FooterComponent';

function Main () {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/' element={<Navigate replace to='/home' />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Main;