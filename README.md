This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Value Range Input Component

a Financial Range component with two text inputs, the minimum and maximum value of the range.

## Transforms

Predefined transforms are expanded to larger numbers.

- b -> millions,
- m -> millions,
- k -> thousands.

ex: If a value of '2k' is entered by the user, the value is expanded to 2000.

## Validation

- The form should be in an invalid state when:
- Either value is not a numerical value.
- The minimum value is > than the maximum value
- The maximum value is < the minimum value.
- One value is entered, and the other is empty (it is valid when both numbers are empty)

# Implementation

## Features

My goal in designing this component was not only to satisfy the validation requirements defined in the spec. I wanted to allow the component to be extensible; flexible enough to handle the addition of any additional validation requirements or value transforms without modifying the core component; any depth of conversion, any type of data normalization. I wanted the freedom to convert the inputs' values to FizzBuzz strings if necessary.

This was handled by viewing the component as three seperate areas of concern:

- The view: A simple react component which processes input through a variable series of transforms and validators and displays any error which may exist. Each field has its own configuration defined in the view's state, and that input's behaviors are independent from those of any other inputs.

- Transforms: Simple text parsing function which accept input and return a value.

- Validators: Simple function which accept input and return an error string, if applicable, or null if the input is valid. Validators may be stateful methods belonging to the component itself, or stateless, external utility functions.

## Improvements

- <b>Error reporting is factually correct, but a little aggressive from a UX perspective.</b><br><br> It would be nice to add some checking on the inputs so that erros wouldn't show until the user has had a chance to fully interact with the component, but I felt that adding that kind of noize (while improving the UX) would complicate the code in a way that would be detrimental to the purpose of the exercise.

- <b>This stated purpose of this component, while simple, is rife with edge cases.</b><br><br> Comma seperation, for example, is forbidden in this implementation. While decimals are handled, the Norweigan/Spanish case of decimals acting as seperators is not. Currency symbols are disallowed as well. All of these things could be easily handled using the transform/validation system, but again, I felt that the addition of further functionality would add unnecessary noise to the exercise.

# Development

I have added linting and prettification to the build process, so that every commit and push applies Prettier's code styling and lints the code.

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
