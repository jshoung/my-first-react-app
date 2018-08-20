import React from 'react';

import classes from './Person.css';

const person = (props) => {
  return (
    <div className={classes.Person}>
      <p>I'm {props.name} and I am {props.age} years old!</p>
      <p>My Hobbies: {props.hobbies}</p>
      <input type='text' onChange={props.changed} value={props.name} />
      <button onClick={props.click}>Delete Person</button>
    </div>
  )
}

export default person