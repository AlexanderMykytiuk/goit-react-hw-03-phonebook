import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Container from "./Components/Container";
import ContactForm from "./Components/ContactForm";
import Filter from "./Components/Filter";
import ContactList from "./Components/ContactList";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
      filter: "",
    }));
  };

  handleInputSearch = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getfilterContact = () => {
    const { contacts, filter } = this.state;
    const normalizedContact = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedContact)
    );
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contactId !== contact.id
      ),
      filter: "",
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const persedContacts = JSON.parse(contacts);
    if (persedContacts) {
      this.setState({ contacts: persedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter, contacts } = this.state;

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} addContact={this.addContact} />

        <Filter filter={filter} onInputSearch={this.handleInputSearch} />

        <ContactList
          contacts={this.getfilterContact()}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
export default App;
