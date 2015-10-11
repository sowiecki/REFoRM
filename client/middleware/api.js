import falcor, { Model } from 'falcor';
import HttpDataSource from 'falcor-http-datasource';
import immutable from 'immutable';
import http from 'http';

import {
  FETCH_EXAMPLE,
  FETCH_EXAMPLE_ERROR
} from '../actions/example';

export default store => next => action => {
  let url;

  switch(action.type) {
    case FETCH_EXAMPLE:
      const id = action.example.id;
      url = `/api/${id}`;
    break;
  }

  // TODO replace mock data with actions hooked into api

  const formId = '2_ABaOnudOkS5QcWN1kqzbeJxg9cRQ9ORqZ75GzZjeB7ZjjFuL3rX478bRJp8';

  const form = new Model({
    source: new HttpDataSource('/model.json')
  });

  form.get(['example']).then((response) => {
    const example = immutable.fromJS(response.json);
    next({
      type: action.type,
      example: example
    });
  },
  (pathValue) => {
    next({
      type: FETCH_EXAMPLE_ERROR,
      error: pathValue
    });
  });
};
