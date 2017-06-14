import React, { Component } from 'react';
import $ from 'jquery';
import '../css/app.css';
import {fetchNode} from '../ajax/ajax.js';
import {Textline} from './textline.js';
import { Panel, ListGroup, ListGroupItem} from 'react-bootstrap';

export default class Basics extends Component {
  constructor(props) {
      super(props);
      this.state = {node: ""};
  }

  componentWillMount(){
    fetchNode(data => this.setState({node: data}));
  }

  componentDidUpdate(){
    console.log("in Basics, this.state.node: ")
    console.log(this.state.node)
  }

  render() {
    let node = this.state.node;
    let panels = [];
     function createPanel(name, obj){
        let listItems = [];

        for(let key in obj){
          if(typeof obj[key] == 'object'){
              let innerItems = [];
              let innerVal = obj[key];
              for(let key2 in innerVal){
                innerItems.push(<ListGroupItem key={key2}> {key2}: {" "+ innerVal[key2]} </ListGroupItem>)
              }
              if(innerItems.length > 0){
                          listItems.push(<Panel className="inner-panel" collapsible header={key}>
                              <ListGroup fill>
                                <ListGroupItem> {innerItems} </ListGroupItem>
                              </ListGroup>
                            </Panel>);
              }
          } else {
            listItems.push(<ListGroupItem key={key}> {key}: {" "+ obj[key]} </ListGroupItem>);
          }
        }
        let panelInstance = (
          <Panel collapsible header={name}>
            <ListGroup fill>
              {listItems}
            </ListGroup>
          </Panel>
        );
        panels.push(panelInstance);
      }

     Object.keys(node).forEach(key => {
      if(typeof node[key] == 'object'){
        createPanel(key, node[key]);
      }
     });

    return (
      <div className="basic-info">
        <Textline text={node.tagline + " v" + node.version}/>
        <Textline text={"Lua version: " + node.lua_version}/>
        <Textline text={"Hostname: " + node.hostname}/>
        <Textline idname="add-info" text={"Additional Node Information:"}/>
        {panels}
      </div>
    );
  }
}
