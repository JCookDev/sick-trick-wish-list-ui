import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tricks : []
    }
  }


  render() {
    return (
      <main className="App">
        <h1>Sick Trick Wish List</h1>
      </main>
    );
  }
}

export default App;