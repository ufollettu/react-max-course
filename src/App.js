import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  // state is managed only inside the class component
  state = {
    persons: [
      {
        name: "Pasquale",
        age: 58
      },
      {
        name: "Claudia",
        age: 58
      },
      {
        name: "Susy",
        age: 58
      }
    ],
    otherState: "no"
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        {
          name: newName,
          age: 58
        },
        {
          name: "Claudia",
          age: 58
        },
        {
          name: "Susy",
          age: 1
        }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        {
          name: "Pasquale",
          age: 58
        },
        {
          name: event.target.value,
          age: 58
        },
        {
          name: "Susy",
          age: 1
        }
      ]
    });
  };
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    return (
      <div className="App">
        <h1>Hi I'm react app</h1>
        <p>this is a p</p>
        <button style={style} onClick={() => this.switchNameHandler("cane")}>
          Switch
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          click={this.switchNameHandler.bind(this, "gattino")}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}>
          Something here
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
