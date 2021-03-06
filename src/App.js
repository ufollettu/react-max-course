import React, { Component } from "react";
import stili from "./App.modules.css";
// import Radium, { StyleRoot } from "radium";

import Person from "./Person/Person";

class App extends Component {
  // state is managed only inside the class component
  state = {
    persons: [
      {
        id: "asd1",
        name: "Pasquale",
        age: 58
      },
      {
        id: "asd2",
        name: "Claudia",
        age: 45
      },
      {
        id: "asd3",
        name: "Susy",
        age: 2
      }
    ],
    otherState: "no",
    showPerson: false
  };

  deletePersonHandler(personIndex) {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonHandler() {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  }

  nameChangedHandler(event, id) {
    const personIndex = this.state.persons.findIndex(per => {
      return per.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  render() {
    let persons = null;
    let btnClass = "";

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      btnClass = stili.Red;
    }

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push(stili.red);
    }

    if (this.state.persons.length <= 1) {
      classes.push(stili.bold);
    }

    return (
      //<StyleRoot>
      <div className={stili.App}>
        <h1>Hi I'm react app</h1>

        <p className={classes.join(" ")}>this is a p</p>
        <button className={btnClass} onClick={() => this.togglePersonHandler()}>
          Toggle
        </button>
        {persons}
      </div>
      //</StyleRoot>
    );
  }
}

export default App;
