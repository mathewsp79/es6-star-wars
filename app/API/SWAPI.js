let axios = require('axios');

module.exports = {
  uri: 'http://swapi.com/api',
  validEndpoints: {},
  getList (endpoint) {
    if (!this.validateEndpoint(endpoint)) {
      throw 'Invalid endpoint option';
    }

    return axios.get(this.uri + '/' + endpoint);
  },
  validateEndpoint (endpoint) {
    let isValid = false;
    // Get the valid endpoints if they have not yet been retrieved
    if (this.validEndpoints.length == 0) {
      this.getValidEndpoints(this.validateEndpoint.bind(this, endpoint));
    } else {
      let endpointKeys = Object.keys(this.validEndpoints);
      if (endpoinKeys.indexOf(endpoint) !== -1) {
        isValid = true;
      }
    }

    return isValid;
  },
  getValidEndpoints (callback) {
    // Get the available endpoints
    axios.get(this.uri)
      .then((response) => {
        this.validEndpoints = response;
        callback();
      })
      .catch((response) {
        console.error(response);
      });
  }
};
