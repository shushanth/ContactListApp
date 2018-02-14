import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContactList  from './ContactList/ContactList';

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    contacts : PropTypes.arrayOf(Object),
    filterContacts: PropTypes.func
  }

  listFilterAction = (event) => {
    this.props.filterContacts(event);
  }

  render() {
    return(
      <div>
        <ContactList 
          lists={ this.props.contacts }
          onListFilter={this.listFilterAction}
        />
      </div>
    )
  }
}

export default Contact;
