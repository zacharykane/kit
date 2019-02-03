# kit (React branch)

Here is a complete React app environment. We use React, ReactDOM & PropTypes for typical components. React Router for creating navigable views, and Redux & React-Redux bindings for accessing and modifying state across the app. React Transition Group is brought in for help with mounting/unmounting animations.

> The `master` branch is concerned with ES8 JavaScript and PostCSS styling. Other branches take the kit into different directions.

## Major features

-   Raect & ReactDOM
-   PropTypes for type checking
-   Redux for app-wide state
-   React-Redux bindings for simpler container components
-   React Router for navigable view components
-   React Transition Group for animation assistance

## Further explanations

Under the `src/js` we've organized the containers, components, and views directories responsible for their titular types of React components. The index.js entry points pulls in the `react-router` and `redux` connections, which in turn import the rest of the app structure.

ESlint has been extended with React focused rules and to allow file extensions to `.jsx`. Babel and webpack have naturally been modifed where needed as well.

// TODO setup Jest and Enzyme

## Scripts

```
npm start
```

Start a Webpack Dev Server

```
npm run build
```

Generate production bundle, stylesheet and servable template
