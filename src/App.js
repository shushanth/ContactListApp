import React, { Component } from 'react';
import Contact from './components/Contact'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contactList: []
    };
  }

  componentDidMount() {
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
      })
  }

  loadContacts(contacts) {
    this.setState({
      contactList: contacts
    })
  }

  render() {
    const contactList = this.state.contactList;
    return (
      <div className="App">
        { (contactList.length) ? <Contact contacts={contactList}/> : 'loading' }
      </div>
    );
  }
}

export default App;
