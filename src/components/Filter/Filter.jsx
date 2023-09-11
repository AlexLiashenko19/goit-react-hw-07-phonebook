import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        value={filter}
        onChange={event => dispatch(setFilter(event.target.value.trim()))}
      />
    </>
  );
};
