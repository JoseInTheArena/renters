//Action Creator.

export function createProperty(property) {
  return {type: 'CREATE_PROPERTY', property}; //Returns an action
}
