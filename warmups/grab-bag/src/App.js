import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      inputValue: []
    }
  }

  addToBag = (e) => {
    let newInputValue = this.state.inputValue.slice()
    newInputValue.push(e.target.value)
    this.setState({
      inputValue: newInputValue
    })
    e.target.value = ''
  }

  pickRandomItem = () => {
    let random = Math.floor(Math.random() * this.state.inputValue.length)
    console.log(random)
  }

  render() {
    return (
      <div className="grab-bag-app">
        <div className="search">
          <input id="" type="text" placeholder="Enter item..." onBlur={(e) => this.addToBag(e)}/>
        </div>
        <div className="display-grab-bag">
          {this.state.inputValue.map((value, i) => {
            return (
              <div key={i}>
                {value}
              </div>
            )
          })}
        </div>
        <div>
          <button onClick={this.pickRandomItem}>Pick random</button>
        </div>
      </div>
    );
  }
}

export default App;
