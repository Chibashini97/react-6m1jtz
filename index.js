import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Login from './Login'

class App extends Component {
  render() {
    return (
      <div>
       <Login/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
