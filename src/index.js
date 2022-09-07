import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "/node_modules/jquery/dist/jquery.min.js";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faPaperPlane, faChevronRight, faPersonHiking, faGlobe, faUtensils, faHotel, faWallet, faHeadset, faClock, faUser, faArrowRight, faMap, faEnvelope, faPhone, faAngleDown, faCircleUser, faCalendarDays} from '@fortawesome/free-solid-svg-icons';


library.add(faCheckSquare, faCoffee, faPaperPlane, faChevronRight, faPersonHiking, faGlobe, faUtensils, faHotel, faWallet, faHeadset, faClock, faUser, faArrowRight, faMap, faEnvelope, faPhone, faAngleDown, faCircleUser, faCalendarDays)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
