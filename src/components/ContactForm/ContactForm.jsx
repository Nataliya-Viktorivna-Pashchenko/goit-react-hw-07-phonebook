import { useDispatch, useSelector } from 'react-redux';
import { addNewContact } from 'redux/contacts/contacts.reducer';
import { nanoid } from 'nanoid';
import css from "components/Styles.module.css"
import { selectContacts } from 'redux/contacts/contacts.selectors';

const ContactForm = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onFormSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const newContact = {
      id: nanoid(),
      name: event.target.elements.name.value,
      phone: event.target.elements.phone.value,
    };
    
    const hasDuplicates = contacts.some(item => item.name === newContact.name);

    if (hasDuplicates) {
      alert(`${newContact.name} is already in the contacts list`);
      return;
    }

    dispatch(addNewContact(newContact));

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
          name="phone"
         
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