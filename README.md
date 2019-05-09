This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Value Range Input Component

a Financial Range component with two text inputs, the minimum and maximum value of the range.

## Shortcuts

Predefined shortcuts should be expanded to larger numbers. (m -> millions, k -> thousands. If a value of '2k' is entered by the user, the value should be expanded to 2000).

## Validation

- The form should be in an invalid state when:
- Either value is not a numerical value.
- The minimum value is > than the maximum value
- The maximum value is < the minimum value.
- One value is entered, and the other is empty (it is valid when both numbers are empty)

# Implementation

My goal in designing this c omponent was not only to satisfy the validation requirements included in the spec, but to allow the component to be extensible; flexible enough to handle the addition of any additional validation requirements without modifying the core component.

This was handled by viewing the component as three seperate areas of concern:

- The view: A simple react component which processes input through a variable series of transforms and validators and displays any error which may exist. Each field has its own configuration defined in the view's state, and that input's behaviors are independent from those of any other inputs.

- Transforms: Simple text parsing function which accept input and return a value.

- Validators: Simple function which accept input and return an error string, if applicable, or null if the input is valid. Validators may be stateful methods belonging to the component itself, or stateless, external utility functions.

## Available Scripts

In the project directory, you can run:

### `npm/yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm/yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm/yarn lint`

Lints the application using the react, airbnb, prettier, jsx-a11y, and JSDoc configs.

### `npm/yarn prettier`

Prettifies all code currently staged by git.
