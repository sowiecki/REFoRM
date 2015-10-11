import {
  FETCH_EXAMPLE
} from '../actions/example';

export function example(state = {}, action) {
  switch (action.type) {
  case FETCH_EXAMPLE:
    return action.example;
  default:
    return state;
  }
}
