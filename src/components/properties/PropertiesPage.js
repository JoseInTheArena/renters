import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as propertyActions from '../../actions/propertyActions';
import {bindActionCreators} from 'redux';
import PropertyList from './PropertyList';

class PropertiesPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {properties} = this.props;

    return (
      <div>
        <h1>Properties</h1>
        <PropertyList properties={properties} />
      </div>
    );
  }
}

PropertiesPage.propTypes = {
  properties: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    properties: state.properties
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(propertyActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertiesPage); //mapDispatchToProps is optional, connect puts in a default
//export default connect(mapStateToProps)(PropertiesPage);
