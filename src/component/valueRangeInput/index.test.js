import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ValueRangeInput from './index.js';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

it('renders without crashing', () => {
  wrapper = mount(<ValueRangeInput />);
});

describe('Value Range Input', () => {
  beforeEach(() => {
    wrapper = mount(<ValueRangeInput />);
  });

  it('initializes with correct elements', () => {
    expect(wrapper.find('.min-max__input-component-label').length).toEqual(2);
    expect(wrapper.find('.min-max__input-component-textfield').length).toEqual(
      2
    );
    expect(wrapper.find('.min-max__input-component-error').length).toEqual(2);
    expect(wrapper.find('.min-max__button').length).toEqual(1);
  });
});
