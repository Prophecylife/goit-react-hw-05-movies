import { useState } from 'react';

import s from './SearchForm.module.css';

export const SearchForm = ({ onSubmit }) => {
  const [input, setInput] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(input);
  };

  const handleChange = e => {
    setInput(e.target.value);
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={handleChange}
            value={input}
          />
        </label>
        <button className={s.button} type="submit">
          Search
        </button>
      </form>
    </>
  );
};
