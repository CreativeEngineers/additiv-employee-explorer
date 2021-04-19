This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Overview of the Employee Explorer application

Here we have added the simple serach functionality so that user can search for the employee. To have the better user experience added the error message if the requested employee not in the directory.

Once the user is able to retrieve the data then user will be redirected to employee overview page, where in which 
we wil display the direct subordinates of the search employee. If user is trying to look for the indirect subordinates then user has to click on the respective direct subordinates

## Enhancement can be done via showing the tree view

As per the time line has given added the feature to look for the employees with direct and indirect suboridnates. But the ideal solution will be showing the tree strcture in the same page with sligh modification in the backend api structure to ease the experience of the user and better code management.

## Added the sample test cases

As per the timeline, added the sample test cases how the reducer functions can be tested. Enhancement will be doing the jest test with mock api to verify the backend async call data

## Comments for the each method

Added the comments for almost each method to know more about it before can be modified by other developers in the team.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

