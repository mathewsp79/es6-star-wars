let ReactLoaderMixin = {
  startSpinner () {
    this.setState({
      loaded: false
    });
  },

  stopSpinner () {
    this.setState({
      loaded: true
    });
  }
};

module.exports = ReactLoaderMixin;
