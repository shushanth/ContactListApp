import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './listRow.css';

class ListRow extends Component {
  constructor(props) {
    super(props);
  }

  static propsTypes = {
    rowData: PropTypes.object
  };

  render() {
    return(
      <div className="list-row">
        {
          this.props.children(this.props.rowData)
        }
      </div>
    )
  }
};

export default ListRow
