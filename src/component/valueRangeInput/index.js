import './index.scss';
import React, { Component } from 'react';
import {
  allowedCharacters,
  isGreaterThan,
  isLessThan,
  trailingModifier as trailingModifierValidation
} from '../../validations';
import { trailingModifier as trailingModifierTransform } from '../../transforms';

/**
 * A value range input component
 * @description A component which allows the user to input two values to indicate a range.
 * of values. Includes validations and normalization transforms.
 * @class ValueRangeInput
 * @extends {Component}
 */
class ValueRangeInput extends Component {
  state = {
    // The initial state of the maximum value input field
    maximum: {
      error: null,
      transforms: [trailingModifierTransform],
      validations: [
        allowedCharacters,
        trailingModifierValidation,
        () => isGreaterThan(this.state.maximum.value, this.state.minimum.value)
      ],
      value: ''
    },
    // The initial state of the minimum value input field
    minimum: {
      error: null,
      transforms: [trailingModifierTransform],
      validations: [
        allowedCharacters,
        trailingModifierValidation,
        () => isLessThan(this.state.minimum.value, this.state.maximum.value)
      ],
      value: ''
    }
  };

  /**
   * @function applyTransforms
   * @description A method which iteratively applies a list of transform functions.
   * to an object.
   * @param {String} key
   * @param {String} value
   * @memberof ValueRangeInput
   * @returns a transformed copy of the incoming value
   */
  applyTransforms = (key, value) => {
    const { transforms } = this.state[key];
    let incomingValue = value;
    for (let i = 0; i < transforms.length; i++) {
      incomingValue = transforms[i](incomingValue);
    }
    return incomingValue;
  };

  /**
   * @function applyValidations
   * @description A method which iteratively applies a list of validation functions
   * to an object until an error is returned or the list has been traversed.
   * @param {String} key
   * @memberof ValueRangeInput
   * @returns a string describing copy of the incoming value
   */
  applyValidations = key => {
    const validations = this.state[key].validations;
    const value = this.state[key].value;
    let error = null;
    let index = 0;
    do {
      error = validations[index](value);
      index++;
    } while (index < validations.length && !error);
    return error;
  };

  /**
   * React lifecylke method called once the component is mounted ontro the DOM
   *
   * @function componentDidUpdate
   * @param {*} _prevProps
   * @param {*} prevState
   * @memberof ValueRangeInput
   */
  componentDidUpdate(_prevProps, prevState) {
    const { maximum, minimum } = this.state;
    const valuesHaveChanged =
      prevState.maximum.value !== maximum.value ||
      prevState.minimum.value !== minimum.value;
    if (valuesHaveChanged) {
      this.setState({
        maximum: { ...maximum, error: this.applyValidations('maximum') }
      });
      this.setState({
        minimum: { ...minimum, error: this.applyValidations('minimum') }
      });
    }
  }

  /**
   * @function onChange
   * @description the onChange handler for the two range inputs. Fired when user input is received.
   * Updates the appropriate input based on the 'key' property of the DOM element's dataset. The
   * value's transforms are applied here.
   * @param {InputEvent} event
   * @memberof ValueRangeInput
   */
  onChange = event => {
    const key = event.target.dataset.key;
    const value = event.target.value;
    this.setState({
      [key]: {
        ...this.state[key],
        value: this.applyTransforms(key, value)
      }
    });
  };

  /**
   * @function onSubmit
   * @description the onSubmit handler for the range input form. Fired when the sumbit button is clicked.
   * @param {SubmitEvent} event
   * @memberof ValueRangeInput
   */
  onSubmit = event => {
    const { maximum, minimum } = this.state;
    const message = `Values was submitted. maximum: ${
      maximum.value
    }, minimum: ${minimum.value}`;
    alert(message);
    event.preventDefault();
  };

  /**
   * @function render
   * @returns {ReactNode}
   * @memberof ValueRangeInput
   */
  render() {
    const { maximum, minimum } = this.state;

    return (
      <div className="min-max__container">
        <div className="min-max__form-container">
          <form onSubmit={this.onSubmit}>
            <div className="min-max__input-component">
              <label className="min-max__input-component-label">
                Minimum:
                <input
                  className="min-max__input-component-textfield"
                  data-key="minimum"
                  onBlur={this.onBlur}
                  onChange={this.onChange}
                  type="text"
                  value={minimum.value}
                />
              </label>
              <span className="min-max__input-component-error">
                {minimum.error}
              </span>
            </div>
            <div className="min-max__input-component">
              <label className="min-max__input-component-label">
                Maximum:
                <input
                  className="min-max__input-component-textfield"
                  data-key="maximum"
                  onBlur={this.onBlur}
                  onChange={this.onChange}
                  type="text"
                  value={maximum.value}
                />
              </label>
              <span className="min-max__input-component-error">
                {maximum.error}
              </span>
            </div>
            <input
              className="min-max__button"
              disabled={!this.hasValidInput}
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    );
  }

  get hasValidInput() {
    const { maximum, minimum } = this.state;
    return maximum.value && minimum.value && !maximum.error && !minimum.error;
  }
}

export default ValueRangeInput;
