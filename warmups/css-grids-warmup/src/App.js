import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='whole'>
        <div className='top'>
          <div className='top-left'>
            <span>PROJECTS</span>
          </div>
          <div className='top-right'>
            <div className='top-right-top'>
              <span>INFO</span>
            </div>
            <div className='top-right-bottom'>
              <span>CONTACT</span>
            </div>
          </div>
        </div>
        <div className='bottom'>
          <div className='bottom-left'>
            <div className='bottom-left-top'>
              <span>SHOP</span>
            </div>
            <div className='bottom-left-bottom'>
              <div className='bottom-left-bottom-left'>
                <span>IMPRINT</span>
              </div>
              <div className='bottom-left-bottom-right'>
                <span>DE</span>
              </div>
            </div>
          </div>
          <div className='bottom-right'>
            <div className='bottom-right-left'>
              <span>LAB</span>
            </div>
            <div className='bottom-right-right'>
              <span>RELAX</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
