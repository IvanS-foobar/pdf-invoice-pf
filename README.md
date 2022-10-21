# PDF Invoice App
## Proof of concept invoice tracker and invoice generator built for Transit Freight Systems

This project was a learning experience, and a side project delivered for a trucking company in Brampton, Ontario.

The technology of choice was the MERN stack (Mongo, Express, React and NodeJS), along with Bootstrap CSS and Auth0 API authentication. Dev environment was run locally, with no production instance of this running (yet!).

CRA (Create React App) was the template of choice.

### To-Do

- Add Form Validation
- Store JWT to not spam Auth0 provisioning endpoints
- Split Main Form into multiple components and implement a State library to manage state more effectively between components
- Get off of Mongo (not an appropriate DB for this tool, SQL probably much better)

### Lessons Learned

- Create React App, MERN Stack and Bootstrap are tried and true classics, but simply not a goto tech stack anymore. Any future fullstack implementations I will looking to read the docs of the tools I will be using more and choose tools better fit for the job (and try some bleeding edge stuff because that's fun)
- Owning authentication is probably moreso the way the go for small scale commercial and personal projects. Relying on a 3rd party for token provisioning is great for security reasons, but not the best way to do it overall. If going with a 3rd party token provisioning, definitely caching the token would be required. So why not own the auth process then?
- Typing is important. Many issues and bugs I ran into building this tool could have been solved typing my data. Time to go down the Typescript rabbit hole
- Bootstrap isn't really pretty anymore
- Having something to build to solve someone's problem made coding a lot more fun and gratifying. More of that.

---

Demo screenshots WIP

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
