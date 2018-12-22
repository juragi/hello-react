import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import MyName from './MyName';
import Counter from './Counter'

class App extends Component {
  render() {
    const name = 'juragi';
    const style = {
      backgroundColor: 'black',
      fontSize: '12px'
    };
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <MyName name="juragi"/>
          <Counter/>
          <Fragment>
            <div className="test">
              test css
              {/* react example */}
            </div>
            <div style={style}>
              hi there
            </div>
            <div>
              Hello {name} !
            </div>
            <div>
              {
                Math.random() > 0.5
                ? (<span>Big</span>)
                : (<span>Small</span>)
              }
              <br/>
            </div>
          </Fragment>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
