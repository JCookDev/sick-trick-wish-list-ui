import React, { Component } from 'react';
import '../Form/Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
        stance: '',
        name: '',
        obstacle: '',
        tutorial: '',
    }
  }

  render() {
    return (
      <form>
        <select
            value={this.state.stance}>
            <option disabled={true} value="">
                Choose your Stance
            </option>
            <option value="regular">Regular</option>
            <option value="switch">Switch</option>
        </select>

        <input
          type='text'
          placeholder='Name of Trick'
          name='name'
          value={this.state.name}
        />

        <select
            value={this.state.obstacle}>
            <option disabled={true} value="">
                Choose your Obstacle
            </option>
            <option value="flatground">Flatground</option>
            <option value="ledge">Ledge</option>
            <option value="rail">Rail</option>
            <option value="stairs">Stairs</option>
            <option value="pool">Pool</option>
        </select>

        <input
          type='text'
          placeholder='Link to Tutorial'
          name='tutorial'
          value={this.state.tutorial}
        />

        <button>Send It!</button>
      </form>
    )
  }
}

export default Form;