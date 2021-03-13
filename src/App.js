import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Container from "./Components/Container";
import ContactForm from "./Components/ContactForm";
import Filter from "./Components/Filter";
import ContactList from "./Components/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Alex Simona", number: "459-00-56" },
      { id: "id-2", name: "Harison Krein", number: "460-89-12" },
      { id: "id-3", name: "Lui Clemensa", number: "623-17-56" },
      { id: "id-4", name: "Olga Kopernik", number: "290-71-59" },
    ],
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
      filter: '',
    }));
  };

  

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
