import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const properties = [
  {
    id: "1",
    title: "1000 SW 128th Ter #310",
    href: "https://www.trulia.com/property/3258177494-1000-SW-128th-Ter-310-Pembroke-Pines-FL-33027",
    agentId: "cory-house",
    price: "120,000",
    type: "SingleFamily"
  },
  {
    id: "2",
    title: "15372 SW 18th St",
    href: "https://www.trulia.com/property/3186749946-15372-SW-18th-St-Miramar-FL-33027",
    agentId: "cory-house",
    price: "424,999",
    type: "SingleFamily"
  },{
    id: "3",
    title: "8985 NW 188th Ter",
    href: "https://www.trulia.com/property/3258478585-8985-NW-188th-Ter-Hialeah-FL-33018",
    agentId: "cory-house",
    price: "450,000",
    type: "SingleFamily"
  },{
    id: "4",
    title: "1942 NW 184th Way",
    href: "https://www.trulia.com/property/3258482279-1942-NW-184th-Way-Pembroke-Pines-FL-33029",
    agentId: "cory-house",
    price: "349,943",
    type: "SingleFamily"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (property) => {
  return replaceAll(property.title, ' ', '-');
};

class PropertyApi {
  static getAllProperties() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], properties));
      }, delay);
    });
  }

  static saveProperty(property) {
    property = Object.assign({}, property); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minPropertyTitleLength = 1;
        if (property.title.length < minPropertyTitleLength) {
          reject(`Title must be at least ${minPropertyTitleLength} characters.`);
        }

        if (property.id) {
          const existingPropertyIndex = properties.findIndex(a => a.id == property.id);
          properties.splice(existingPropertyIndex, 1, property);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new properties in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          property.id = generateId(property);
          property.href = `http://www.trulia.com/properties/${property.id}`;
          properties.push(property);
        }

        resolve(property);
      }, delay);
    });
  }

  static deleteProperty(propertyId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfPropertyToDelete = properties.findIndex(property => {
          property.id == propertyId;
        });
        properties.splice(indexOfPropertyToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default PropertyApi;
