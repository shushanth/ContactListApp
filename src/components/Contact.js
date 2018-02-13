import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContactList  from './ContactList/ContactList';

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    contacts : PropTypes.arrayOf(Object)
  }

  render() {
    return(
      <div>
        <ContactList lists={ this.props.contacts }/>
      </div>
    )
  }
}

export default Contact;
