let React = require('react');
let Loader = require('react-loader');
let GoogleImageSearch = require('../API/GoogleImageSearch');
let ReactLoaderMixin = require('./Mixins/ReactLoaderMixin');

let Profile = React.createClass({
  mixins: [ReactLoaderMixin],
  propTypes: {
    profile: React.PropTypes.object
  },
  getInitialState () {
    return {
      profileImg: ''
    };
  },
  componentDidMount () {
    this.startSpinner();
    let promise = GoogleImageSearch.search('Luke Skywalker');
    promise.then((response) => {
      // Get random image from the search result
      let index = parseInt(Math.random(0, 9) * 10);
      let image = response.data.items[index];
      this.setState({
        profileImg: image.link
      });
      this.stopSpinner();
    })
    .catch((response) => {
      console.log(response);
      throw 'Error loading image';
    });
  },
  render () {
    return (
      <div className="profile col-lg-6">
        <Loader loaded={this.state.loaded} >
          <img className="profile__img" src={this.state.profileImg} />
        </Loader>
        <div className="profile__details">
          <h3 className="name">Darth Vader</h3>
          <dl className="dl-horizontal">
            <dt>Height</dt>
            <dd>202</dd>

            <dt>Mass</dt>
            <dd>136</dd>

            <dt>Hair color</dt>
            <dd>None</dd>

            <dt>Skin Color</dt>
            <dd>White</dd>

            <dt>Eye Color</dt>
            <dd>Yellow</dd>

            <dt>Birth Year</dt>
            <dd>41.9BBY</dd>

            <dt>Gender</dt>
            <dd>Male</dd>
          </dl>
        </div>
      </div>
    );
  }
});

module.exports = Profile;
