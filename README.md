# kit (React branch)

Here is a complete React app environment. We use React, ReactDOM & PropTypes for typical components. React Router for creating navigable views, and Redux & React-Redux bindings for accessing and modifying state across the app. React Transition Group is brought in for help with mounting/unmounting animations. Emotion is used for CSS-in-JS styling options.

> The `master` branch is concerned with ES8 JavaScript and PostCSS styling. Other branches take the kit into different directions.

## Major features

-   Raect & ReactDOM
-   PropTypes for type checking
-   Redux for app-wide state
-   React-Redux bindings for simpler container components
-   React Router for navigable view components
-   React Transition Group for animation assistance
-   Emotion for CSS-in-JS styles
-   Jest & Enzyme for unit and snapshot testing

## Further explanations

Under the `src/js` we've organized the containers, (future) components, and views directories responsible for their titular types of React components. The index.js entry points pulls in the `react-router` and `redux` connections, which in turn import the rest of the app structure. We'll keep redux level things in a store directory. Right now we have a super simple reducer and action creator functions, going forward that could change as our data handling gets more complex. We're also trying out various styling options in conjunction with `emotion`: writing inline object styles directly, importing object styles from a separate 'stylesheet', and using emotion's css helper to write template string styles that we're more used to.

Tests will be written alongside their source code files, and aided in organization and execution by `jest` and `enzyme`. Modificiations have been made to allow emotion styles to be captured in snapshots.

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

Generate production bundle and servable template

```
npm test
```

Run Jest tests against \*.test.jsx files

```
npm run lint
```

Run ESLint against source
