import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';

const storageKey = 'contacts';

export function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem(storageKey)) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (name, number) => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: uuidv4(),
      name,
      number,
    };

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleDeleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <div style={{ marginLeft: 40 }}>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleChange={handleFilterChange} />
      <ContactList
        contacts={getFilteredContacts()}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
}
