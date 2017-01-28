import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const PropertyListRow = ({property}) => {
  return (
    <tr>
      <td><a href={property.href} target="_blank">Visit</a></td>
      <td><Link to={'/property/' + property.id}>{property.title}</Link></td>
      <td>{property.agentId}</td>
      <td>{property.type}</td>
      <td>{property.price}</td>
    </tr>
  );
};

PropertyListRow.propTypes = {
  property: PropTypes.object.isRequired
};

export default PropertyListRow;
