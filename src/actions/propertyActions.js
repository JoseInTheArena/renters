//Action Creator.
import * as types from './actionTypes;';
import courseApi from '../api/mockPropertiesApi';

export function loadPropertiesSuccess(properties) {
  return {type: types.LOAD_PROPERTIES_SUCCESS, properties}; //Returns an action
}

export function loadProperties() {
  return function(dispatch) {
    return courseApi.getAllProperties().then(courses => {
      dispatch(loadPropertiesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}
