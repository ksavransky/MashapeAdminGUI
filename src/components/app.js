import React, { Component } from 'react';
import $ from 'jquery';
import '../css/app.css';
import {fetchNode} from '../ajax/ajax.js';
import {Header} from './header.js';
// import { Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {node: ""};
  }

  componentWillMount(){
    fetchNode(data => this.setState({node: data}));
  }

  componentDidUpdate(){
    console.log("this.state.node:")
    console.log(this.state.node)
  }

  render() {
    return (
      <div className="main">
        <Header/>
      </div>
    );
  }
}

export default App;
