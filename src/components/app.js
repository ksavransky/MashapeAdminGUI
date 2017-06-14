import React, { Component } from 'react';
import $ from 'jquery';
import '../css/app.css';
import {Header} from './header.js';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header/>
      </div>
    );
  }
}

export default App;
