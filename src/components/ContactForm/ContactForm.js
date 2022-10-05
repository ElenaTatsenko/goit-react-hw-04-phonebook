import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import css from '../ContactForm/ContactForm.module.css'

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')


  const hendleInputChange = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'number':
        setNumber(event.currentTarget.value);
        break;
      default:
        return;
    }
  }
    const handleSubmit = event => {
      event.preventDefault();
      onSubmit({ name: name, number: number })
        reset()
    }

    const reset = () => {
      setName('')
      setNumber ('')
          
  }
  
    const inputNameId = nanoid();
    const inputTelId = nanoid();
  

        return (
     <form className={css.conactForm} onSubmit={handleSubmit}>
        <label htmlFor={inputNameId} className={css.conactFormLabel}>
            Name
          <input
            className={css.conactFormItem}
            id={inputNameId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={hendleInputChange}>
          </input>
        </label>
        <label htmlFor={inputTelId} className={css.conactFormLabel}>
            Number
          <input
            className={css.conactFormItem}
            id={inputTelId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={hendleInputChange}>
          </input>
        </label>
        <button className={css.contactFormBtn } type="submit">Add contact</button>
      </form>
        );
    }


ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,

}

//const hendleNameChange = event => {
    
 // setName(event.currentTarget.value);
  
//};
  
 // const hendleNumberChange = event => {
    
 // setNumber(event.currentTarget.value);
  
 // };