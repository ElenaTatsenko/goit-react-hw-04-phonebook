import React, { Component } from "react";
import { nanoid } from 'nanoid';

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import ContactFilter from "./ContactFilter/ContactFilter";


class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const normalizeNewContact = name.toLowerCase();
    const addedName = this.state.contacts.find(contact => contact.name.toLowerCase() === normalizeNewContact);
        
    if (addedName) {
      return alert(`${name} is already in contacts.`);
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));

  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  }

  getFilterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
  
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts })
    };
    
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  };
    
  render() {
    const {  filter } = this.state
    const filterContacts = this.getFilterContacts();
       
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact}></ContactForm>        
        <h2>Contacts</h2>
        <ContactFilter value={filter} onChange={this.changeFilter}></ContactFilter>
        <ContactList contacts={filterContacts} onDeleteContact={this.deleteContact}></ContactList>
      </>
     
    );
  }
}


export default App;