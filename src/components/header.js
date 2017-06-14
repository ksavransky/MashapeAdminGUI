import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import logo from '../images/mashapelogo.svg';
import { Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

export class Header extends Component {
  constructor(props) {
      super(props);
      this.state = {activeKey: "1",
                    title: "Home"};
      this.handleSelect = this.handleSelect.bind(this);
      this.logoClick = this.logoClick.bind(this);
  }

  handleSelect(eventKey = "1") {
    let titleArray = [];
    document.querySelectorAll('.nav .dropdown ul li a>a').forEach(el=>titleArray.push(el.text));
    this.setState({activeKey: eventKey, title: titleArray[eventKey - 1]});
    if(window.location.hash.slice(2) !== titleArray[eventKey - 1].toLowerCase()){
      document.querySelectorAll(`.nav-item:nth-child(${eventKey}) a`)[1].click();
    }
  }

  logoClick(){
    document.querySelectorAll(`.nav-item:nth-child(1) a`)[1].click();
  }

  componentDidMount(){
    let hashChangeClick = function(){
      document.querySelectorAll('.nav-item>a>a').forEach(el=>{
        if("#/" + el.innerHTML.toLowerCase() == window.location.hash){
          el.click()
        }
      });
    }
    $(window).off('hashchange', hashChangeClick).on('hashchange', hashChangeClick);
  }

  render() {
    return (
      <header>
        <img src={logo} id="top-logo" onClick={this.logoClick}/>
        <div>Administrator Interface</div>
        <Nav bsStyle="tabs" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
          <NavItem className="nav-item" eventKey="1"><Link to="/home">Home</Link></NavItem>
          <NavItem className="nav-item" eventKey="2"><Link to="/apis">APIs</Link></NavItem>
          <NavItem className="nav-item" eventKey="3"><Link to="/consumers">Consumers</Link></NavItem>
          <NavItem className="nav-item" eventKey="4"><Link to="/upstreams">Upstreams</Link></NavItem>
          <NavItem className="nav-item" eventKey="5"><Link to="/plugins">Plugins</Link></NavItem>
          <NavDropdown title={this.state.title} id="nav-dropdown">
            <MenuItem eventKey="1"><Link to="/home">Home</Link></MenuItem>
            <MenuItem eventKey="2"><Link to="/apis">APIs</Link></MenuItem>
            <MenuItem eventKey="3"><Link to="/consumers">Consumers</Link></MenuItem>
            <MenuItem eventKey="4"><Link to="/upstreams">Upstreams</Link></MenuItem>
            <MenuItem eventKey="5"><Link to="/plugins">Plugins</Link></MenuItem>
          </NavDropdown>
        </Nav>
      </header>
    );
  }
}
