import React, {PropTypes} from 'react';
import PropertyListRow from './PropertyListRow';

const PropertyList = ({properties}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
      </tr>
      </thead>
      <tbody>
      {properties.map(property =>
        <PropertyListRow key={property.id} property={property}/>
      )}
      </tbody>
    </table>
  );
};

PropertyList.propTypes = {
  properties: PropTypes.array.isRequired
};

export default PropertyList;
