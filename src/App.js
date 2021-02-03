import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {

  state = {
    persons: [
      {name: 'Max', age: 29},
      {name: 'Manu', age: 39},
      {name: 'Sthepanie', age: 49},
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was Click!');
    // this.state.persons[0].name = 'Alexandre';
    this.setState({persons:  [
      {name: newName, age: 29},
      {name: 'Manu', age: 39},
      {name: 'Sthepanie', age: 49},
    ]})
  }

  nameChangedHandler = (event) => {
    console.log(event.target.value);
    this.setState({persons:  [
      {name: 'Max', age: 29},
      {name: event.target.value, age: 39},
      {name: 'Sthepanie', age: 49},
    ]})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding:  '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Ola</h1>
        <p>sadjhsadhs</p>
        <button style={style} onClick={() => this.switchNameHandler('Best')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          >
        </Person>
        <Person 
          click={this.switchNameHandler.bind(this, 'ollslldkdk')}
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
          >
        </Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Ola'));
  }
}

export default App;
