import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
    this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    const isShowing = this.state.showPersons;
    this.setState({ showPersons: !isShowing });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      pointer: 'cursor',
    };

    let persons = null;

    // Preferred method to output conditional content!
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            // calls onClick property in Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            hobbies={person.hobbies}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      )
    }

    return (
      <div className='App'>
        <h1>Hi, I'm a React App!</h1>
        <button
          style={style}
          onClick={() => this.togglePersonsHandler()}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  };
}

export default App;
