import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import style from './style.module.css';

class ContactList extends Component {
  deleteId = Id => {
    this.props.del(Id);
  };
  createList = () => {
    return this.props.contacts.map(contact => {
      return (
        <li className={style.createList_item} key={nanoid()} id={contact.id}>
          {`${contact.name}: ${contact.number}`}
          <button
            data-id={contact.id}
            onClick={() => this.deleteId(contact.id)}
          >
            Delete
          </button>
        </li>
      );
    });
  };

  render() {
    return <ul className={style.contact_list}>{this.createList()}</ul>;
  }
}
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  del: PropTypes.func.isRequired,
};
ContactList.defaultProps = {
  contacts: [],
};

export default ContactList;
