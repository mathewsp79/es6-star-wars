import React from 'react';
import GridRow from './GridRow';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gridData: []};
  }

  chunkGridData (chunkSize) {
    let i;
    let j;
    let gridData = this.props.gridData;
    let chunkedArray = [];

    for (i = 0, j = gridData.length; i < j; i += chunkSize) {
      chunkedArray.push(gridData.slice(i, i + chunkSize));
    }

    return chunkedArray;
  }

  render() {
    // let chunkedGrid = this.chunkGridData(5);

    // let gridRows = this.state.gridData.map((chunk) => {
    //   return (<GridRow rowData={chunk} />);
    // });

    return (
    <section id="portfolio" className="bg-light-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
                <h2 className="section-heading">{this.props.gridHeadingText}</h2>
                <h3 className="section-subheading text-muted">{this.props.subHeadingText}</h3>
            </div>
          </div>
          <GridRow rowData={this.props.gridData} />
        </div>
    </section>
    );
  }
}

// Set propTypes and defaultProps
Grid.propTypes = {
  gridData: React.PropTypes.array,
  headingText: React.PropTypes.string,
  subHeadingText: React.PropTypes.string
};

Grid.defaultProps = {
  gridData: [],
  headingText: '',
  subHeadingText: 'Wookiee antilles solo moff skywalker secura skywalker solo'
};

module.exports = Grid;
