const Router = require('falcor-router');

const Form = require('../models/form');

const formId = '2_ABaOnudOkS5QcWN1kqzbeJxg9cRQ9ORqZ75GzZjeB7ZjjFuL3rX478bRJp8';

const formRouter = (req, res) => {
  return new Router([
    {
      route: 'example',
      get: (pathSet) => {
        return Form.findOne({id: formId}).then((form) => {
          return {
            path: pathSet,
            value: JSON.stringify(form)
          };
        });
      }
    }
  ]);
};

module.exports = formRouter;
