import {Route, Routes, Navigate} from 'react-router-dom';
import '../App.css';
import Header from './header/HeaderComponent';
import Home from './menuComponents/Home';
import NoPage from './menuComponents/NoPage';
import Footer from './footer/FooterComponent';

export default function Main () {
    return (
        <div className='App'>
            {/* <Header /> */}
            <Routes>
                <Route path='/' element={<Header />}>
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