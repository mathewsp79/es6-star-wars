var axios = require('axios');

module.exports = {
  search (searchFor) {
    var url = 'https://www.googleapis.com/customsearch/v1/?key=AIzaSyAzIFU_Q7YX6wK307pxL0ha1sue9sdHElQ&cx=005166653721172385643:cwylwv__90i&safe=high&searchType=image&q=' + searchFor;
    return axios.get(url);
  }
};
