# Week 5 MAD9135 Sample App

## Setting Up

Run the `npm` or `yarn` command to install all the dependencies based on the current package.json file.

```bash
npm install
yarn add
```

## Notes of Interest

The `Home` component has the `PropTypes` validation being done. The props are passed from `App.js` to `Home.js`. You can edit the required props on `Home.js` or remove props in `App.js` to see the generated error messages.

The `Person` and `Planet` components are using `PropTypes` to check for the function being passed in.
