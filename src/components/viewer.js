import React, { Component } from 'react';
import '../css/app.css';
import {Textline} from './textline.js';
import {createPanel} from '../util.js';
import {fetchFunction} from '../ajax/ajax.js'

export default class Viewer extends Component {
  constructor(props) {
      super(props);
      this.state = {objects: ""};
  }

  componentWillMount(){
    console.log(this.props)
    fetchFunction(response => this.setState({objects: response.data}), this.props.location.pathname);
  }

  componentDidUpdate(){
    console.log(this.state.objects)
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

    return (
      <div className="page-content">
          <Textline text={this.props.location.pathname.slice(1)}/>
          {panels}
      </div>
    );
  }
}
