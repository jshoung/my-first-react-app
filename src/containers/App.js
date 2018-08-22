import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'asd34f', name: 'Julian', age: 24, hobbies: 'Coding' },
      { id: 'hw4g53', name: 'Alicia', age: 23, hobbies: 'Animals' },
      { id: 'btwv3rf', name: 'John', age: 27, hobbies: 'Unknown' },
    ],
    showPersons: true,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === id;
    });

    const persons = [...this.state.persons];
    persons[personIndex].name = event.target.value;
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const isShowing = this.state.showPersons;
    this.setState({ showPersons: !isShowing });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  // Render method should be lean and concise
  render() {
    let persons = null;

    // Preferred method to output conditional content!
    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
    }

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle={this.props.title}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          toggle={this.togglePersonsHandler}
        />
        {persons}
      </div >
    );
  };
}

export default App;
