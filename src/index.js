import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "/node_modules/jquery/dist/jquery.min.js";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee, faPaperPlane, faChevronRight, faPersonHiking, faGlobe, faUtensils, faHotel, faWallet, faHeadset, faClock, faUser, faArrowRight, faMap, faEnvelope, faPhone, faAngleDown, faCircleUser, faCalendarDays} from '@fortawesome/free-solid-svg-icons';

library.add(faCheckSquare, faCoffee, faPaperPlane, faChevronRight, faPersonHiking, faGlobe, faUtensils, faHotel, faWallet, faHeadset, faClock, faUser, faArrowRight, faMap, faEnvelope, faPhone, faAngleDown, faCircleUser, faCalendarDays)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

