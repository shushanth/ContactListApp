import React, { Component } from 'react';
import Contact from './components/Contact'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contactList: []
    };
  };

  fetchRandomContacts() {
    fetch('https://randomuser.me/api/?results=50')
    .then(response => response.json())
    .then(response => {
      const contactList = [];
      const { results } = response;
      return results
    })
    .then(results => {
      let contactList = results.map(contact => {
        const { email, name: { first, last}, picture:{ thumbnail } , phone } = contact;
        return {
          personalDetails: {
            email,
            name: `${first} ${last}`,
            phone
          },
          thumbnail
        };
      });
      return contactList;
    })
    .then(finalContacts => {
      this.loadContacts(finalContacts);
    });
  }

  componentDidMount() {
    this.fetchRandomContacts();
  }

  loadContacts(contacts) {
    this.setState({
      contactList: contacts
    })
  }

  filterContactActions = (event) => {
    const { target: {value} } = event;
    const { contactList } = this.state;
    if(!value) {
     this.fetchRandomContacts();
    };
    //delay and filter the component state tree.
    setTimeout(() => {
      const filterdItems = contactList.filter(items => {
        const {personalDetails:{name, email, phone}} = items;
        return ( 
          name.toLowerCase().includes(value) 
            || email.toLowerCase().includes(value) || phone.toLowerCase().includes(value));
      });
      this.setState({
        contactList : filterdItems
      });
    },300);
  }

  render() {
    const contactList = this.state.contactList;
    return (
      <div className="App">
        { (contactList.length) ? <Contact contacts={contactList} filterContacts={this.filterContactActions}/> : 'loading' }
      </div>
    );
  }
}

export default App;
