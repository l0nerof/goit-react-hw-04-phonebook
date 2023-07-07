import PropTypes from 'prop-types';

function ContactList({ contacts, handleDeleteContact }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} style={{ marginBottom: 5 }}>
          {contact.name}: {contact.number}
          <button
            type="button"
            onClick={() => handleDeleteContact(contact.id)}
            style={{ marginLeft: 5 }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
};

export default ContactList;
