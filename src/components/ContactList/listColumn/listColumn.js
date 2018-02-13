import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './listColumn.css';

class ListColumn extends Component {
  constructor(props) {
    super(props);
  };

  static propTypes = {
    cell: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    children: PropTypes.func
  }

  render() {
    return(
      <div className="list-cell">
        {
          this.props.children(this.props.cell)
        }
      </div>
    )
  }
};

export default ListColumn
