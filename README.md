# InstaDogs - Redux

This project is a refactoring of the [Instadogs](https://github.com/julianachagas/instadogs) project using Redux to manage the global state.

In the original project, React's Context API was used to manage the global state and the shared data, such as the current authenticated user. In the refactoring process, we migrate the global state management to Redux.

In Redux, there is a single state object that's responsible for the global state of the application. The unidirectional data flow makes it easier to track state management and share data across different components.

The project is a social media app to share dogs' photos and it's the final project of the Redux with React course from [Origamid](https://www.origamid.com/curso/redux-com-react/), a Brazilian learning platform.

Read more about the original project in [this repository](https://github.com/julianachagas/instadogs).

## 🛠️ Technologies

- HTML
- CSS Modules
- [React](https://pt-br.reactjs.org/)
- [React Router](https://reactrouter.com/en/main)
- [Redux](https://redux.js.org/)
- [Victory](https://formidable.com/open-source/victory/)

## 🔗 Link

- Live Site URL: [InstaDogs: Redux](https://instadogs-redux.netlify.app/)

## ⚙️ How to use

To clone and run this project you'll need [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com) installed on your computer. In addition, it is good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/). Follow the instructions bellow:

```bash
# Clone this repository
$ git clone https://github.com/julianachagas/instadogs-redux.git

# Go into the repository
$ cd instadogs-redux

# Install the dependencies
$ npm install

# Run the app in development mode
# Open http://localhost:3000 to view it in your browser
$ npm start

# Build the app for production to the `build` folder
# It correctly bundles React in production mode and optimizes the build for the best performance.
$ npm run build

```

## 👩🏻‍💻 Author

<a href="https://www.linkedin.com/in/juliana--chagas/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
<a href="https://twitter.com/JulianaCoding" target="_blank"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"></a>

---

##### Made with 💜 by Juliana Chagas
