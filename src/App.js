import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './reducer';
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

    const store = createStore(reducer);

    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='App'>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
