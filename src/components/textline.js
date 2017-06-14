import React, { Component } from 'react';
import $ from 'jquery';
import '../css/app.css';
import {Header} from './header.js';
import {Basics} from './basics.js';

export class Textline extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div id={this.props.idname} className="text-line">{this.props.text}</div>
    );
  }
}
