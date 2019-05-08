import './index.scss';
import React, { Component } from 'react';
import {
  allowedCharacters,
  isGreaterThan,
  isLessThan,
  trailingModifier
} from '../../validations';

class App extends Component {
  state = {
    maximum: {
      error: null,
      validations: {
        blur: null,
        change: [allowedCharacters, trailingModifier]
      },
      value: ''
    },
    minimum: {
      error: null,
      validations: {
        blur: null,
        change: [allowedCharacters, trailingModifier]
      },
      value: ''
    }
  };

  componentDidMount() {
    const { maximum, minimum } = this.state;
    const maximumWithBlurValidations = Object.assign({}, maximum, {
      validations: {
        ...maximum.validations,
        blur: [this.curryIsGreaterThan('maximum')]
      }
    });
    const minimumWithBlurValidations = Object.assign({}, minimum, {
      validations: {
        ...minimum.validations,
        blur: [this.curryIsLessThan('minimum')]
      }
    });
    this.setState({
      maximum: maximumWithBlurValidations,
      minimum: minimumWithBlurValidations
    });
  }

  curryIsGreaterThan = key => {
    return value => {
      const { minimum, maximum } = this.state;
      return isGreaterThan(maximum.value, minimum.value);
    };
  };

  curryIsLessThan = key => {
    return () => {
      const { minimum, maximum } = this.state;
      return isLessThan(minimum.value, maximum.value);
    };
  };

  onBlur = event => {
    const { minimum, maximum } = this.state;
    const key = event.target.dataset.key;
    if (!this.state[key].error) {
      const maximumError = this.validate('maximum', null, 'blur');
      const minimumError = this.validate('minimum', null, 'blur');
      const newMaximum = Object.assign({}, { ...maximum, error: maximumError });
      const newMinimum = Object.assign({}, { ...minimum, error: minimumError });
      this.setState({ maximum: newMaximum, minimum: newMinimum });
    }
  };

  onChange = event => {
    const key = event.target.dataset.key;
    const value = event.target.value;
    const error = this.validate(key, value, 'change');
    const currentKeyState = this.state[key];
    const newKeyState = Object.assign({}, currentKeyState, { error, value });
    this.setState({ [key]: newKeyState });
  };

  onSubmit = event => {
    alert('A value was submitted: ' + this.state);
    event.preventDefault();
  };

  validate = (key, value, action) => {
    const changeValidations = this.state[key].validations[action];
    let error = null;
    let index = 0;
    console.log('Doing', key, value, action);
    do {
      error = changeValidations[index](value);
      index++;
    } while (index < changeValidations.length && !error);
    return error;
  };

  validatePair = value => {
    let error = null;
    let index = 0;
    do {
      console.log('Doing', index);
      error = this.changeValidations[index](value);
      index++;
    } while (index < this.changeValidations.length && !error);
    return error;
  };

  render() {
    const { maximum, minimum } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Minimum:
            <input
              data-key="minimum"
              onBlur={this.onBlur}
              onChange={this.onChange}
              type="text"
              value={minimum.value}
            />
          </label>
          <span>{minimum.error}</span>
        </div>
        <div>
          <label>
            Maximum:
            <input
              data-key="maximum"
              onBlur={this.onBlur}
              onChange={this.onChange}
              type="text"
              value={maximum.value}
            />
          </label>
          <span>{maximum.error}</span>
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
