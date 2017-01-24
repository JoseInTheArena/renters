import * as types from '../actions/actionTypes;';

export default function propertyReducer(state = [], action) {
  switch(action.type) {
    case types.CREATE_PROPERTY:
      return [...state, Object.assign({}, action.property)];
    default:
      return state;
  }
}
