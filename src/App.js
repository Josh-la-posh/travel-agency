import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/MainComponent';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Component } from 'react';

class App extends Component {
  componentDidMount() {
    AOS.init({
        duration : 2000
    })
  }
  
  render () {
    return (
      <BrowserRouter>
        <div className='App'>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
