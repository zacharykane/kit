# kit

Here is a very simple, typical, extendable, delete-able client-side web setup. I wanted something I could reference for future projects without having to rewrite all of the usual tooling.

The bulk of this repo is concerned with dev-dependencies. The few actual source files are included just to test the setup's compatibility/support for features. I wanted something that keeps (or attempts to keep) current with best practices and useful utilities. Whether this is used to setup a simple brochure website, complex web application, or something in between or beyond should be irrelevant to the included utilities.

The `master` branch is concerned with ES8 JavaScript and PostCSS styling. Other branches take the kit into different directions.

## Major features

-   public files based off HTML5 Boilerplate
-   webpack & webpack-dev-server for bundling and local server development
-   Babel setup for native es6 modules and es8 support
-   PostCSS Preset Env from PostCSS (includes Autoprefixer)
-   ESLint & Stylelint for hinting/enforcement
-   Tape for unit testing
-   Prettier to stave off needless (re)formatting
-   browserlist for optimium and more realistic requirements
-   Editorconfig to hopefully hint at how I type

## Further explanations

Webpack is configured for development, testing, and production. The config generates an `index.html` based on the source `EJS` template. Under development, `webpack-dev-server` provides a local hosting environment. The stylesheet is extracted during production to a standalone file. Node modules and webpack's runtime are extracted into their own bundles as well.

ESLint and Stylelint (backed by Prettier) are configured to enforce four space tabs, single quotes, an eighty character line limit, & trailing commas. JSON files are excepted.

The HTML template and associated meta files are based on HTML5 Boilerplate.

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
