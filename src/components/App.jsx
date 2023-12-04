import { ContactList } from './ContactList/ContactList';
import ContactForm  from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import css from "./Styles.module.css";

export const App = () => {

  
    return (
      <div className={css.main}>
        
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts:</h2>
          <Filter />
          <ContactList />
        
        
      </div>
    );
  
}
