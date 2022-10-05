import PropTypes from 'prop-types';
import React from 'react';
import css from '../ContactList/ContactList.module.css'


const ContactList = ({ contacts, onDeleteContact }) =>
    <ul className={css.contactList}>{contacts.map(({id, name, number}) =>
        <li key={id} className={css.contactListItem}>
            <p className={css.contactListEl}><span className={css.contactListSpan}>Name:</span> {name}</p>
            <p className={css.contactListEl}> <span className={css.contactListSpan}>Number:</span> {number}</p>
            <button className={css.contactListDelBtn} onClick={() => onDeleteContact(id)} type="button">Remove</button>
        </li>)}
    </ul>

export default ContactList;



ContactList.propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }))
}