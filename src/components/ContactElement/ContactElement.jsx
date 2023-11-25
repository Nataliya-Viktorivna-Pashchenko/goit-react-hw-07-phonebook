import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts.reducer';

import css from "components/Styles.module.css"

export const ContactElement = ({ id, name, number }) => {
  const dispatch = useDispatch()
  
  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.item}>
      <span className={css.item}>
        {name}:
      </span>
<span className={css.item}>{number}</span>
      <button
        className={css.btnDel}
        id={name}
        onClick={() => { onDelete(id) }}>
        Delete
      </button>
    </li>
  );
};