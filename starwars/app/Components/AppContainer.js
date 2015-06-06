import React from 'react';
import Nav from './Nav';
import Grid from './Grid';
import Footer from './Footer';
import SWAPI from '../API/SWAPI';
import Loader from 'react-loader';

class AppContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedNavItem: 'people',
      gridData: []
    };
  }

  componentDidMount () {
    this.loadGridData();
  }

  onNavItemSelect (selectedNavItem) {
    this.setState({ selectedNavItem }, () => {
      this.loadGridData();
    });
  }

  loadGridData() {
    this.setState({
      loaded: false
    });

    SWAPI.getData(this.state.selectedNavItem, (data) => {
      this.setState({
        gridData: data.results,
        loaded: true
      });
    });
  }

  render() {
    return (
      <div className="app-container">
        <Nav selectedItem={this.state.selectedNavItem} onClickNavItem={this.onNavItemSelect.bind(this)} />
        <Loader loaded={this.state.loaded} >
          <Grid gridData={this.state.gridData} gridHeadingText={this.state.selectedNavItem} />
        </Loader>
        <Footer />
      </div>
    );
  }
}

module.exports = AppContainer;
