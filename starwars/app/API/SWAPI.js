import SWAPI from './vendor/SWAPI';

module.exports = {
  getData (resourceName, cb, page = 1) {
    // Create getter method
    let getterMethod;
    if (resourceName.toLowerCase() === 'species') {
      getterMethod = 'getAllSpecies';
    } else {
      resourceName = resourceName.substr(0, 1).toUpperCase() + resourceName.substr(1, resourceName.length);
      getterMethod = 'get' + resourceName;
    }

    SWAPI[getterMethod](page, cb);
  }
};
