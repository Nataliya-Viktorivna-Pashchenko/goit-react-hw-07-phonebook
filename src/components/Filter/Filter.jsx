import css from "components/Styles.module.css";
import { useDispatch } from 'react-redux';
import {  changeFilter } from 'redux/contacts/contacts.reducer';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChangeFilter = event => {
    dispatch(changeFilter(event.target.value));
  };
    return (
        <div>
      <label className={css.filter}>
        Find contacts by name
                <input
                    className={css.input}
          type="text"
          name="filter"
          onChange={onChangeFilter}
        />
      </label>
    </div>
  );
};