import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, hashHistory, Redirect } from 'react-router';
import { HashRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './components/app.js'
import Apis from './components/apis.js';
import Consumers from './components/consumers.js';
import Upstreams from './components/upstreams.js';
import Plugins from './components/plugins.js';
import './css/app.css';

ReactDOM.render((
      <Router>
         <div className="react-root">
          <Route path="/" component={App}></Route>
          <Route exact path="/" render={() => (
              <Redirect to="/home"/>
          )}/>
          <Route path="/apis" component={Apis}></Route>
          <Route path="/consumers" component={Consumers}></Route>
          <Route path="/plugins" component={Plugins}></Route>
          <Route path="/upstreams" component={Upstreams}></Route>
         </div>
      </Router>
), document.getElementById('root'))

registerServiceWorker();
