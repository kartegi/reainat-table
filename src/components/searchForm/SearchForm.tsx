import React from "react";
import { dataTypedSelector } from "../../hooks/dataTypedSelector";
import { useActions } from "../../hooks/useActions";

import "./search-form.sass";

const SearchForm: React.FC = () => {
  const { search, step } = dataTypedSelector((state) => state.data);
  const { changeSearch, changeStep } = useActions();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    changeSearch(e.target.value);
  };

  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    changeStep(Number(e.target.value));
  };

  return (
    <form className="search-form">
      <input
        onChange={handleInputChange}
        value={search}
        type="text"
        className="search-form__text-input"
        placeholder="Search"
      />
      <select
        onChange={handleSelectChange}
        value={step}
        className="search-form__select"
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
      </select>
    </form>
  );
};

export default SearchForm;
