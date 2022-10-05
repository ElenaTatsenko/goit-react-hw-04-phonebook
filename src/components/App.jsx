import React, { useState, useEffect} from "react";
import { nanoid } from 'nanoid';

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import ContactFilter from "./ContactFilter/ContactFilter";
import useLocalStorage from '../hooks/useLocalStorage'

 export default function App () {
const [contacts, setContacts] = useLocalStorage('contacts',[])
const [filter, setFilter] = useState('');
  

  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const normalizeNewContact = name.toLowerCase();
    const addedName = contacts.find(contact => contact.name.toLowerCase() === normalizeNewContact);
        
    if (addedName) {
      return alert(`${name} is already in contacts.`);
    }

    setContacts(prevState => [newContact, ...prevState],
    );
    console.log('done')

  }

 const deleteContact = (contactId) => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId)
    )
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value );
  }

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
  
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  
  useEffect(() => {
  window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);
 // componentDidMount() {
    

  //  if (parsedContacts) {
 //     this.setState({ contacts: parsedContacts })
  //  };
    
 // };

  //componentDidUpdate(prevProps, prevState) {
  //  if (this.state.contacts !== prevState.contacts) {
  //    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  //  }
  //};
    
  
   
       
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact}></ContactForm>        
        <h2>Contacts</h2>
        <ContactFilter value={filter} onChange={changeFilter}></ContactFilter>
        <ContactList contacts={getFilterContacts()} onDeleteContact={deleteContact}></ContactList>
       
      </>
     
    );
  }



 //const useLocalStorage = (key, defaultValue) => {
 // const [state, setstate] = useState(() => {
 //   return JSON.parse(window.localStorage.getItem('key')) ?? defaultValue;
 // });

  //  useEffect(() => {
   // window.localStorage.setItem(key, JSON.stringify(state))
  //  }, [key, state]);
  
  //  return [state, setstate];
  //}