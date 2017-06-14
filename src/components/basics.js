import React, { Component } from 'react';
import '../css/app.css';
import {fetchNode} from '../ajax/ajax.js';
import {Textline} from './textline.js';
import { Panel, ListGroup, ListGroupItem} from 'react-bootstrap';
import {createPanel} from '../util.js';

export default class Basics extends Component {
  constructor(props) {
      super(props);
      this.state = {node: ""};
  }

  componentWillMount(){
    fetchNode(data => this.setState({node: data}));
  }

  render() {
    let node = this.state.node;
    let database = "";
    if(node.configuration){
        database = node.configuration["database"]
    };

    let panels = [];

     Object.keys(node).forEach(key => {
      let panel = "";
      if(typeof node[key] == 'object'){
        panel = createPanel(key, node[key]);
      }
      panels.push(panel);
     });

    return (
      <div className="page-content">
        <Textline text={node.tagline + " v" + node.version}/>
        <Textline text={"Lua version: " + node.lua_version}/>
        <Textline text={"Database: " + database}/>
        <Textline text={"Hostname: " + node.hostname}/>
        <Textline idname="add-info" text={"Additional Node Information:"}/>
        {panels}
      </div>
    );
  }
}
