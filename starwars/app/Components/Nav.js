import React, { PropTypes } from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  handleNavItemClick(selectedNavItem) {
    this.props.onClickNavItem(selectedNavItem);
  }

  getNavLinks() {
    let options = [
      'people',
      'films',
      'starships',
      'vehicles',
      'species',
      'planets'
    ];

    return options.map((option) => {
      let activeClass = '';
      if (option.toLowerCase() === this.props.selectedItem.toLowerCase()) {
        activeClass = 'active';
      }

      return (
        <li key={option} role="presentation" className={activeClass}><a onClick={this.handleNavItemClick.bind(this, option)} className="page-scroll" href="#portfolio">{option}</a></li>
      );
    });
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top navbar-shrink">
        <div className="container">
          <div className="navbar-header page-scroll">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
              <a className="navbar-brand page-scroll" href="#page-top">Star Wars ES6</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li className="hidden"><a href="#page-top"></a></li>
              {this.getNavLinks()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

// Set propTypes and defaultProps
Nav.propTypes = {
  selectedItem: PropTypes.string,
  onClickNavItem: PropTypes.func
};

Nav.defaultProps = {
  selectedItem: 'people',
  onClickNavItem: () => {}
};

module.exports = Nav;
