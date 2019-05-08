import './index.scss';
import React, { Component } from 'react';

class App extends Component {
  state = {
    maximumInputError: '',
    maximumInputValue: '',
    minimumInputError: '',
    minimumInputValue: ''
  };

  handleChange = event => {
    const key = event.target.dataset.key;
    this.setState({ [key]: event.target.value });
  };

  handleSubmit = event => {
    alert('A value was submitted: ' + this.state);
    event.preventDefault();
  };

  render() {
    const {
      maximumInputError,
      maximumInputValue,
      minimumInputError,
      minimumInputValue
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Minimum:
            <input
              data-key="minimumInputValue"
              type="text"
              value={minimumInputValue}
              onChange={this.handleChange}
            />
          </label>
          <span>{minimumInputError}</span>
        </div>
        <div>
          <label>
            Maximum:
            <input
              data-key="maximumInputValue"
              type="text"
              value={maximumInputValue}
              onChange={this.handleChange}
            />
          </label>
          <span>{maximumInputError}</span>
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
