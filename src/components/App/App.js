import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tricks: [
        {
          stance: "regular",
          name: "treflip",
          obstacle: "flat ground",
          tutorial: "https://www.youtube.com/watch?v=XGw3YkQmNig",
          id: 1,
        },
        {
          stance: "switch",
          name: "heelflip",
          obstacle: "stairs",
          tutorial: "https://www.youtube.com/watch?v=9N9swrZU1HA",
          id: 2,
        },
        {
          stance: "regular",
          name: "frontside 50-50, backside 180 out",
          obstacle: "ledge",
          tutorial: "https://www.youtube.com/watch?v=9N9swrZU1HA",
          id: 3,
        },
      ],
    };
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
