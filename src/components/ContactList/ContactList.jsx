import Contact from "../Contact/Contact";
import css from './ContactList.module.css'


const ContactList = ({ contacts, handleDelete }) => {
  if (!contacts) {
    return null;
  }

  return (
    <ul className={css.contact}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contactItem} key={id}>
          <Contact
            handleDelete={handleDelete}
            name={name}
            number={number}
            id={id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;










