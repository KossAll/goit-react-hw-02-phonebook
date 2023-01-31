import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Search from './Search';
import style from './style.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    this.repeatControl(data);
  };

  repeatControl = data => {
    let Array = [];
    Array = this.state.contacts.map(cur => cur.name);
    if (!Array.includes(data.name)) {
      let arrayCont = [];
      arrayCont = [
        ...this.state.contacts,
        { id: nanoid(), name: data.name, number: data.number },
      ];
      return this.setState({ ...this.state, contacts: arrayCont });
    } else {
      alert(' Такой контакт уже есть !!!');
    }
  };

  elementDelete = (arr, idContact) => {
    let newArr = arr.filter(elem => elem.id !== idContact);
    return newArr;
  };

  deleteContactFromContact = idContact => {
    let newArrAfterDel = this.elementDelete(this.state.contacts, idContact);
    this.setState({
      ...this.state,
      contacts: [...newArrAfterDel],
    });
  };

  setFilterToState = filterData => {
    this.setState({ ...this.state, filter: `${filterData}` });
  };

  filterArr = fArr => {
    let newArr = fArr.filter(cur =>
      cur.name.toUpperCase().includes(this.state.filter)
    );
    return newArr;
  };

  render() {
    return (
      <div>
        <h1 className={style.title}>Phonebook</h1>
        <ContactForm onSubmitData={this.formSubmitHandler} />
        <h1 className={style.title}>Contacts</h1>
        <Search setFilterToState={this.setFilterToState} />
        <ContactList
          contacts={this.filterArr(this.state.contacts)}
          del={this.deleteContactFromContact}
        />
      </div>
    );
  }
}
export default App;
