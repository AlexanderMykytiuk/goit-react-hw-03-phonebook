import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ filter, onInputSearch }) => {
  return (
    <div className={styles.findContact}>
      <h2>Contacts</h2>
      <h3>Find contacts by name</h3>
      <label className={styles.findContactLabel}>        
        <input
          className={styles.findContactInput}
          name="filter"
          type="text"
          value={filter}
          onChange={onInputSearch}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  onInputSearch: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
