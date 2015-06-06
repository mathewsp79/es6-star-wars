import React from 'react';
import Loader from 'react-loader';
import GoogleImageSearch from '../API/GoogleImageSearch';
import ReactLoaderMixin from '../Mixins/ReactLoaderMixin';

let Profile = React.createClass({
  mixins: [ReactLoaderMixin],

  propTypes: {
    profileData: React.PropTypes.object.isRequired
  },

  getDefaultProps () {
    return {
      profileData: {}
    };
  },

  getInitialState () {
    return {
      profileImg: ''
    };
  },

  componentDidMount () {
    this.loadProfileImg();
  },

  getProfileName () {
    let name;
    if (this.props.profileData.title) {
      name = this.props.profileData.title;
    } else {
      name = this.props.profileData.name;
    }

    return name;
  },

  loadProfileImg () {
    this.startSpinner();
    let promise = GoogleImageSearch.search(this.getProfileName());
    let profileImg = '/public/images/star-wars-logo.jpg';

    promise.then((response) => {
      // Get random image from the search result
      let index = parseInt(Math.random(0, response.data.items.length) * 10);
      let image = response.data.items[index];
      profileImg = image.link;

      this.setState({
        profileImg
      });

      this.stopSpinner();
    })
    .catch((response) => {
      console.error(response);
      this.setState({
        profileImg
      });

      this.stopSpinner();
    });
  },

  getHeight () {
    let feet = this.convertCentimetersToFeet(this.props.profileData.height);
    let meters = this.props.profileData.height / 100;

    return `${feet.toFixed(2)} ft/${meters} m`;
  },

  getWeight () {
    let lbs = this.convertKilogramsToPounds(this.props.profileData.weight);
    let kg = this.props.profileData.weight;

    return `${lbs.toFixed(2)} lbs/${kg} kg`;
  },

  convertCentimetersToFeet(numCentimeters) {
    return numCentimeters * 0.032808;
  },

  convertKilogramsToPounds(numKilograms) {
    return numKilograms * 2.20462;
  },

  render () {
    return (
      <div className="col-md-4 col-sm-6 portfolio-item profile">
        <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <i className="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <Loader loaded={this.state.loaded} />
          <div className="profile__img-container" >
            <img src={this.state.profileImg} className="img-responsive" alt="" />
          </div>
        </a>
        <div className="portfolio-caption profile__caption">
          <h4>{this.getProfileName()}</h4>
          <p className="text-muted">Graphic Design</p>
        </div>
      </div>
    );
  }
});

module.exports = Profile;
