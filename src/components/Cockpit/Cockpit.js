import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = '';

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  if (props.persons.length === 0) {
    assignedClasses.push(classes.large);
  }

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>This is working!</p>
      <button
        className={btnClass}
        onClick={() => props.toggle()}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;