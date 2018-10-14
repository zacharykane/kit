# kit

Here is a very simple, typical, extendable, delete-able client-side web setup. I wanted something I could reference for future projects without having to rewrite all of the usual tooling.

The bulk of this repo is concerned with dev-dependencies. The few actual source files are included just to test the setup's compatibility/support for features. I wanted something that keeps (or attempts to keep) current with best practices and useful utilities. Whether this is used to setup a simple brochure website, complex web application, or something in between or beyond should be irrelevant to the included utilities.

> The `master` branch is concerned with ES8 JavaScript and PostCSS styling. Other branches take the kit into different directions.

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

Webpack is configured for development and production. The config generates an `index.html` based on the source `EJS` template. Under development, `webpack-dev-server` provides a local hosting environment. The stylesheet is extracted during production to a standalone file. Node modules and webpack's runtime are extracted into their own bundles as well.

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

## Further explanations

Current development is fairly wrapped up in your editor of choice. I've configured all of my development dependencies for VSCode. This became particularly confusing when setting up ESLint and Prettier. You need to disable the editor's built in validation/linting for javascript and css. I've also installed an extension for PostCSS syntax support and set that up to respond to all css files in my workspace. The editor is set to use Unix style (LF) breaks, and ESLint to enforce that. I felt that if 95% of this project's output would be deployed to a \*nix system, it might as well use them from the start.

On the topic of ESLint and Prettier, my Prettier extension needs to toggle on the eslint-integration option, otherwise I get constant problems listed. ESLint is extending the recommended config and adding in Prettier. It's ECMA features are set to 2018 and 'module' sources. Prettier is configured to use four (4) space indents (because it's easier for me to read), single quotes, and commas everywhere possible.

Babel is configured to get as far as async functions and whatever other features that picks up along the way. I'm leaving ES6 module syntax alone, and including the rest/spread and class properties plugins because they are extremely useful.

I've included a `.browserlistrc` file to give instructions to babel and others about what features I want to support. It should be edited based on project need of course. I've included a 'sensible' ruleset, targeting greater than 0.25% market share, _not_ IE 11 (sorry) and _not_ Opera Mini (sorry again). I've also included a very unforgiving "modern" ruleset of latest 2 versions of the big, US browsers and iOS Safari.

The instance properties of classes reveals an 'Unexpected token =' error. Since it is an experimental feature, I'll need to adjust ESLint's parser to `babel-eslint`. I assume I would have to had done this for the spread syntax, however this has been supported in es2018.
