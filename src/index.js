import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Redirect } from 'react-router';
import { HashRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './components/app.js'
import Basics from './components/basics.js';
import Viewer from './components/viewer.js'
import './css/app.css';

ReactDOM.render((
      <Router>
         <div className="react-root">
          <Route path="/" component={App}></Route>
          <Route exact path="/" render={() => (
              <Redirect to="/home"/>
          )}/>
          <Route path="/home" component={Basics}></Route>
          <Route path="/apis" component={Viewer}></Route>
          <Route path="/consumers" component={Viewer}></Route>
          <Route path="/plugins" component={Viewer}></Route>
          <Route path="/upstreams" component={Viewer}></Route>
         </div>
      </Router>
), document.getElementById('root'))

registerServiceWorker();
