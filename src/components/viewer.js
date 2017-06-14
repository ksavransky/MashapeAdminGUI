import React, { Component } from 'react';
import '../css/app.css';
import {Textline} from './textline.js';
import {createPanel} from '../util.js';
import {fetchFunction} from '../ajax/ajax.js'

export default class Viewer extends Component {
  constructor(props) {
      super(props);
      this.state = {objects: "", updated: false};
  }

  componentWillMount(){
    fetchFunction(response => this.setState({objects: response.data, updated: true}), this.props.location.pathname);
  }

  render() {
    let objects = this.state.objects;
    let panels = [];
    let name = "";

     Object.keys(objects).forEach(key => {
      let panel = "";
      if(typeof objects[key] == 'object'){
        if(objects[key].name){
            name = objects[key].name;
        }
        if(objects[key].username){
            name = objects[key].username;
        }
        panel = createPanel(name, objects[key]);
      }
      panels.push(panel);
     });

     let title = this.props.location.pathname.slice(1);
     if(title == "apis"){
       title = "APIs";
     } else {
      title = title.slice(0, 1).toUpperCase() + title.slice(1);
     }

     if(panels.length == 0 && this.state.updated){
         panels = "No " + title + ". Please create some " + title + ".";
     }

    return (
      <div className="page-content">
          <Textline text={title}/>
          {panels}
      </div>
    );
  }
}
