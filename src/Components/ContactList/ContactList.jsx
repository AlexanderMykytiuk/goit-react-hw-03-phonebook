import React from "react";
import styles from "./ContactList.module.css";
import ListItem from "../ListItem";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.listContacts}>
      <ListItem filterContacts={contacts} onDeleteContact={onDeleteContact} />
    </ul>
  );
};
export default ContactList;
