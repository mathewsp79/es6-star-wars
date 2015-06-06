import React from 'react';
import Profile from './Profile';

class GridRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gridData: []};
  }

  render() {
    let profiles = this.props.rowData.map((profileData) => {
      return (<Profile key={profileData.name} profileData={profileData} />);
    });

    return (
      <div className="grid__row row">
        {profiles}
      </div>
    );
  }
}

// Set propTypes and defaultProps
GridRow.propTypes = {
  rowData: React.PropTypes.array
};

GridRow.defaultProps = {
  rowData: []
};

module.exports = GridRow;
