import { ContactElement } from "components/ContactElement/ContactElement";
import { useSelector } from 'react-redux';

export const ContactList = () => {
   const contacts = useSelector(state => state.contactsStore.contacts);
 const filter = useSelector(state => state.contactsStore.filter);
 
  const contactsFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );



    return (
    <div>
      
      <ul>
         {contactsFilter.map(({ id, name, number }) => (
          <ContactElement
            key={id}
            id={id}
            name={name}
            number={number} />
        ))}
      </ul>
    </div>
  );
};