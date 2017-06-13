import React, { Component } from 'react';
import $ from 'jquery';
import logo from '../images/mashapelogo.svg';
import { Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

export class Header extends Component {
  constructor(props) {
      super(props);
      this.state = {activeKey: "1",
                    title: "APIs"};
      this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    let titleArray = [];
    document.querySelectorAll('.nav .dropdown ul li a').forEach(el=>titleArray.push(el.text))
    this.setState({activeKey: eventKey})
    this.setState({title: titleArray[eventKey - 1]})
  }



  render() {
    return (
      <header>
        <img src={logo} id="top-logo" />
        <div>Kong Admin GUI</div>
        <Nav bsStyle="tabs" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
          <NavItem className="nav-item" eventKey="1">APIs</NavItem>
          <NavItem className="nav-item" eventKey="2">Consumers</NavItem>
          <NavItem className="nav-item" eventKey="3">Upstreams</NavItem>
          <NavItem className="nav-item" eventKey="4">Plugins</NavItem>
          <NavDropdown title={this.state.title} id="nav-dropdown">
            <MenuItem eventKey="1">APIs</MenuItem>
            <MenuItem eventKey="2">Consumers</MenuItem>
            <MenuItem eventKey="3">Upstreams</MenuItem>
            <MenuItem eventKey="4">Plugins</MenuItem>
          </NavDropdown>
        </Nav>
      </header>
    );
  }
}
