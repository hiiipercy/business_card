import React from 'react';
import ReactDOM from 'react-dom';
import Headpart from './Headpart';
import Info from './Info';
import About from './About';
import Social from './Social';
import './Style.css';
import reportWebVitals from './reportWebVitals';

  function Card() {
  return (
        <div className='mycard'>
          <Headpart />
          <Info />
          <About />
          <Social />
        </div>
        )
  }
ReactDOM.render(<Card/>, document.getElementById('root'));
reportWebVitals();
