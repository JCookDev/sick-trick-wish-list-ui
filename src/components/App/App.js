import { Component } from "react";
import Tricks from '../Tricks/Tricks';
import Form from '../Form/Form';
import "./App.css";

const API = 'http://localhost:3001/api/v1';
const DEFAULT_Query = '/tricks';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tricks: [],
    };
  }

  componentDidMount() {
    fetch(API + DEFAULT_Query)
      .then((response) => response.json())
      .then((data) => this.setState({ tricks: data }));
  }

  render() {
    const { tricks } = this.state;
    return (
      <main className="App">
        <h1>Sick Trick Wish List</h1>
        <Form />
        <Tricks tricks={tricks} />
      </main>
    );
  }
}

export default App;
