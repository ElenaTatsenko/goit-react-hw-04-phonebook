import PropTypes from 'prop-types';
import React from 'react';
import css from '../ContactFilter/ContactFilter.module.css'

const ContactFilter = ({ value, onChange }) => (
    <label className={css.contactFilterLabel}>Find contact by name
        <input className={css.contactFilterInput} type="text" value={value} onChange={onChange}></input>
    </label>
);
   

export default ContactFilter;

ContactFilter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
}
