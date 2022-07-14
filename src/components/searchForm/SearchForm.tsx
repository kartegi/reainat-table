import React from "react";

import "./search-form.sass";

const SearchForm: React.FC = () => {
  return (
    <form className="search-form">
      <input
        type="text"
        className="search-form__text-input"
        placeholder="Search"
      />
      <select className="search-form__select">
        <option value="10">10</option>
        <option value="10">20</option>
        <option value="10">30</option>
        <option value="10">40</option>
        <option value="10">50</option>
      </select>
    </form>
  );
};

export default SearchForm;
