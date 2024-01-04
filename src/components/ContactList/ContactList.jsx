import { ContactElement } from "components/ContactElement/ContactElement";
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from "redux/contacts/contacts.reducer";
import { useEffect } from "react";
import Loader from "components/Loader/Loader";
import { selectFilterContacts } from 'redux/contacts/contacts.selectors';

export const ContactList = () => {

  const isLoading = useSelector(state => state.isLoading);
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();

  const contactsFilter = useSelector(selectFilterContacts);
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);
  
    return (
    <div>
      
        <ul>
          {error !== null && <p className="error-bage">{error}</p>}
      {isLoading && <Loader />}
         {contactsFilter.map(({ id, name, phone }) => (
          <ContactElement
            key={id}
            id={id}
            name={name}
            phone={phone} />
        ))}
      </ul>
    </div>
  );
};