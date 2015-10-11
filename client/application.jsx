import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route } from 'react-router';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import configureStore from './store/configure-store';

// Containers
import Body from './containers/body';
import Index from './containers/index';
import ExampleContainer from './containers/example';

// require('./styles/index.scss');

const store = configureStore();
const node = document.getElementById('root');

let history = createBrowserHistory();

let Application = (
  <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={Body}>
          <Route path='example/:id' component={ExampleContainer}/>
          <IndexRoute component={Index}/>
        </Route>
      </Router>
  </Provider>
);

// Initialze client
ReactDOM.render(Application, node);
