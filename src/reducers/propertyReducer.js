export default function propertyReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_PROPERTY':
      return [...state, Object.assign({}, action.property)];
    default:
      return state;
  }
}
