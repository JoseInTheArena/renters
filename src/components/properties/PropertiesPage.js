import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as propertyActions from '../../actions/propertyActions';

class PropertiesPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      property: {
        title: ""
      }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const property = this.state.property;
    property.title = event.target.value;
    this.setState({property: property});
  }

  onClickSave() {
    this.props.dispatch(propertyActions.createProperty(this.state.property));
    //console.log(`Saving: ${this.state.property.title}`);
  }

  propertyRow(property, index) {
    return <div key={index}>{property.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Properties</h1>
        {this.props.properties.map(this.propertyRow)}
        <h2>Add Property</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.property.title}/>

        <input
          type="submit"
          onClick={this.onClickSave}
          value="Save"/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    properties: state.properties
  };
}

PropertiesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  properties: PropTypes.array.isRequired
};

//export default connect(mapStateToProps, mapDispatchToProps)(PropertiesPage); //mapDispatchToProps is optional, connect puts in a default
export default connect(mapStateToProps)(PropertiesPage);
