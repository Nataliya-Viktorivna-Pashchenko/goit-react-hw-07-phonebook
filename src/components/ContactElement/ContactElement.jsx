import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { removeContact } from 'redux/contacts/contacts.reducer';

import css from "components/Styles.module.css"

export const ContactElement = ({ id, name, phone }) => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch()
  
  const onDelete = id => {

    setIsLoading(true);
    dispatch(removeContact(id));
    setIsLoading(false);
  };

  return (
    <li className={css.item}>
      <span className={css.item}>
        {name}:
      </span>

      <span className={css.item}>
        {phone}:
      </span>
      
      <button
        className={css.btnDel}
        id={name}
        disabled={isLoading}
        onClick={() => { onDelete(id) }}>
        Delete
      </button>
    </li>
  );
};