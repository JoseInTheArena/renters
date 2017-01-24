//Action Creator.
import * as types from './actionTypes;';

export function createProperty(property) {
  return {type: types.CREATE_PROPERTY, property}; //Returns an action
}
