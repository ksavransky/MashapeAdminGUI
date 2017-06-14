// import React, { Component } from 'react';
// import '../css/app.css';
// import {fetchAPIs} from '../ajax/ajax.js';
// import {Textline} from './textline.js';
// import { Panel, ListGroup, ListGroupItem} from 'react-bootstrap';
// import {createPanel} from '../util.js';
//
// export default class Apis extends Component {
//   constructor(props) {
//       super(props);
//       this.state = {apis: ""};
//   }
//
//   componentWillMount(){
//     fetchAPIs(response => this.setState({apis: response.data}));
//   }
//
//   componentDidUpdate(){
//     console.log("in Basics, this.state.apis: ")
//     console.log(this.state.apis)
//   }
//
//
//   render() {
//     let apis = this.state.apis;
//     let panels = [];
//
//      Object.keys(apis).forEach(key => {
//       let panel = "";
//       if(typeof apis[key] == 'object'){
//         panel = createPanel(apis[key].name, apis[key]);
//       }
//       panels.push(panel);
//      });
//
//     return (
//       <div className="page-content">
//           <Textline text={"APIs"}/>
//           {panels}
//       </div>
//     );
//   }
// }
