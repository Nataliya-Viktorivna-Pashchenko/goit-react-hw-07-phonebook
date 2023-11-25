import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contacts.reducer';
import { nanoid } from 'nanoid';
import css from "components/Styles.module.css"

const ContactForm = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsStore.contacts);

  const onFormSubmit = event => {
    event.preventDefault();
const form = event.target;
    const contact = {
      id: nanoid(),
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    };
    

    const hasDuplicates = contacts.some(item => item.name === contact.name);

    if (hasDuplicates) {
      alert(`${contact.name} is already in the contacts list`);
      return;
    }

    dispatch(addContact(contact));

    form.reset();
     
  };

    return (
        
        <form className={css.form} onSubmit={onFormSubmit}>
        <label>
          Name
        </label>

            <input
          className={css.input}
          type="text"
          name="name"
          
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />

        <label>
          Number
        </label>

            <input
          className={css.input}
          type="tel"
          name="number"
         
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required
        />

        <button className={css.btn} type="submit">
          Add Contact
        </button>
      </form>
    );
  };
export default ContactForm;