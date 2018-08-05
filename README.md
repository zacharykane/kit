# kit

Here is a very simple, typical, extendable, delete-able client-side web setup. I wanted something I could reference for future projects without having to rewrite all of the usual tooling.

The bulk of this repo is concerned with dev-dependencies. The few actual source files are included just to test the setup's compatibility/support for features. I wanted something that keeps (or attempts to keep) current with best practices and useful utilities. Whether this is used to setup a simple brochure website, complex web application, or something in between or beyond should be irrelevant to the included utilities.

> The `master` branch is concerned with ES8 JavaScript and PostCSS styling. Other branches take the kit into different directions.

## Major features

-   webpack configuration for bundling and local dev server
-   babel setup for native es6 modules and es8 support
-   CSSNext from PostCSS (includes Autoprefixer)
-   ESLint & Stylelint for hinting/enforcement
-   Tape for unit testing
-   Prettier to stave off needless (re)formatting
-   Editorconfig to hopefully hint at how I type

## Scripts

```
npm start
```

Start a Webpack Dev Server

```
npm run build
```

Webpack the JS and CSS for production, and also generate the HTML index

```
npm run build-dom-test
```

Build a test bundle meant to run in a browser for DOM tests. This generates a testing html file as well.

```
npm test
```

Run unit, TAP tests over \*.test.js files and pipe through faucet

## Further explanations

Current development is fairly wrapped up in your editor of choice. I've configured all of my development dependencies for VSCode. This became particularly confusing when setting up ESLint and Prettier. You need to disable the editor's built in validation/linting for javascript and css. I've also installed an extension for PostCSS syntax support and set that up to respond to all css files in my workspace. I've also set up the editor to use Unix style (LF) breaks, and ESLint to enforce that. I felt that if 95% of this project's output would be deployed to a \*nix system, it might as well use them from the start.

On the topic of ESLint and Prettier, my Prettier extension needs to toggle on the eslint-integration option, otherwise I get constant problems listed. ESLint is extending the recommended config and adding in Prettier and React support (though a project may not use it, the likely hood is high). It's ECMA features are set to 2018, JSX support and 'module' sources. Prettier is configured to use four (4) space indents (because it's easier for me to read), single quotes, and commas everywhere possible.

Babel is configured to get as far as async functions and whatever other features that picks up along the way. I'm leaving ES6 module syntax alone, and including the rest/spread and class properties plugins because they are extremely useful. The env preset has a target of greater than 0.25% market share, _not_ IE 11 (sorry) and _not_ Opera Mini (sorry again).

The instance properties of classes reveals an 'Unexpected token =' error. Since it is an experimental feature, I'll need to adjust ESLint's parser to `babel-eslint`. I assume I would have to had done this for the spread syntax, however this has been supported in es2018.

Webpack is configured for development, testing, and production. The config generates an `index.html` based on the source `EJS` template. Under development, `webpack-dev-server` provides a local hosting environment. The stylesheet is extracted during production to a standalone file. Node modules and webpack's runtime are extracted into their own bundles as well.

ESLint and Stylelint (backed by Prettier) are configured to enforce four space tabs, single quotes, an eighty character line limit, & trailing commas. JSON files are excepted.

The HTML template and associated meta files are based on HTML5 Boilerplate.
