# User management


[![Package](https://img.shields.io/github/package-json/v/alexSp84/user-management)](https://img.shields.io/github/package-json/v/alexSp84/user-management) [![License](https://img.shields.io/github/license/alexSp84/user-management?logoColor=MIT)](./LICENSE) [![Build](https://img.shields.io/badge/build-passing-brightgreen)](https://img.shields.io/badge/build-passing-brightgreen)

[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/) [![Redux](https://img.shields.io/badge/Redux-593D88?style=flat&logo=redux&logoColor=white)](https://redux.js.org/) [![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)]( https://user-management-opal.vercel.app/) 


It's a simple user management Web App.

The application is deployed with Vercel and can be accessed at the link: [User Managment](https://user-management-opal.vercel.app/).

You can run it on [codesandbox](https://codesandbox.io/p/github/alexSp84/user-management/master?file=%2Fsrc%2Findex.js).

## Features 📚
- Display a list of users in alphabetical order from a static JSON
- Create user
- Edit user
- Delete user
- Search users by e-mail address
- Changes made are visible even if you reload the page
- If all users have been deleted, reload the page to repopulate the list with users from the initial JSON.
- The list is paginated and it is possible to choose, based on predefined values (10, 25, 50. 100), the number of items to be displayed.

## Tech 💻

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

- [Material UI] - React UI framework

## Installation 🛠️

User management requires Node.js v18+ to run.

Install the dependencies and start the server.

```sh
nvm use
npm i
```

## Development 💡

In the project directory, you can run:

```sh
npm start
```

Runs the app in the development mode.\
Open [localhost](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Building 📦

For production release:

```sh
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Deployment 🚀

The application is deployed with Vercel automatically by pushing on the master branch.

## License 📝

MIT
