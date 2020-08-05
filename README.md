# Chewbaaka

[![CircleCI](https://circleci.com/gh/tetrachrome/chewbaaka.svg?style=svg&circle-token=3ff42881c6c3f2a44809d10947587a4c566fd574)](https://circleci.com/gh/tetrachrome/chewbaaka)

[![Actions Status](https://github.com/tetrachrome/chewbaaka/workflows/Node.js%20CI/badge.svg)](https://github.com/tetrachrome/chewbaaka/actions)

![logo](./Resources/Chewbaaka_Logo_256x256.png)


## Workflow and branching strategies

Currently, there are only two major branches - **master** and **release**.

The **master** branch is served to hold the most active development work.
TOT of this branch should hold the latest work merged from
feature branch approved Pull Requests.

All work need to be done on a feature branch branched off from the **master**
branch, and have a Pull Request open once ready to be reviewed and have
CI jobs kick in. All feature branches will merge back to the **master**
branch once approved and have green status across all required CI jobs.

The **release** branch should ALWAYS holds the latest **stable release version**,
as any updates to the **release** branch is automatically deployed to the server.
Only merging of version git tags authored on **master** to the **release**
branch is allowed.

## Setup, build, and test

The project requires **Node.js** and **npm** to be installed.

### Node.js

Node.js version `12.x` is the recommended version for development.
Node.js install should automatically installs the **npm** package manager.

Node.js official link [here](https://nodejs.org/en/download/).

(Currently I have Node.js version `v12.18.3` installed for development,
which also installs npm `v6.14.6`).

### Setup

Once the repo is cloned, the first thing is to setup the necessary
environment and all dependencies. Run the following in the terminal.

```
npm ci
```

### Build and development

Building the development version of the project while developing
is the most recommended practice, as all changes are instantaneously
reflected through the Node.js "server". To build and run the project, do

```
npm start
```

If the project able to build successfully, you should see the following
in the terminal:

```
Compiled successfully!

You can now view chewbaaka in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.14:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

Simply go to [http://localhost:3000](http://localhost:3000) in the
web browser to view the rendered site. Any changes in source code that
result in successful builds will automatically be reflected in the browser.

#### Production build

There are occasions when it is necessary to test the production build locally.
To build a production build, run

```
npm run build
```

Once the build finishes successfully, follow the message prompted
in the terminal:

```
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

  serve -s build

Find out more about deployment here:

  bit.ly/CRA-deploy
```

### Test

Writing and exercising unit tests frequently is a good practice
in React development. To run the test suite, run:

```
npm test
```

Test files should have the same naming convention of their corresponding
`.js` files, except with the `.test.js` file extension, and be placed
in the `__tests__` directory. For example, if the component file is
named `MyComponent.js`, then the test file should be named `MyComponent.test.js`.

There are currently two types of tests -

1. Jest-based tests
2. Snapshot tests

Snapshot files (with `.snap` extension) should be updated to be correct
and be checked-in in the corresponding `__snapshots__` directory as
part of the repository source artifact.

## Pull request and commit best practices

Both pull requests and commit messages should document the relevant
changes with concise descriptions.

## Versions and Releases

Release note can be found [here](./RELEASE.md).

## Documentations

Useful links:

- [Node.js](https://nodejs.org/en/)
- [React JS](https://reactjs.org/)
- [Semantic UI React](https://react.semantic-ui.com/)
- [Jest](https://jestjs.io/)
- [Jest Snapshot Testing](https://jestjs.io/docs/en/snapshot-testing)
- [Learn React JS - Full Course for Beginners - Tutorial 2019 | YouTube](https://www.youtube.com/watch?v=DLX62G4lc44)
- [Sitemaps XML format | sitemaps.org](https://www.sitemaps.org/protocol.html)
- [Robots.txt Specifications | Google Developers](https://developers.google.com/search/reference/robots_txt)
- [Cache-Control - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)

Resources on SEO:

- [Martin Splitt - Technical SEO 101 for React Developers | React Next 2019 | YouTube](https://www.youtube.com/watch?v=3B7gBVTsEaE)
- [Martin Splitt "Technical SEO for JavaScript developers" | YouTube](https://www.youtube.com/watch?v=vjj8B4sq0UI)
- [SEO for Developers | 2020 SEO Tutorial | YouTube](https://www.youtube.com/watch?v=JSm4aQl4w_U)

Documentations related to Amazon AWS:

- [AWS Amplify Console User Guide](https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html)
- [Amazon CloudFront Developer Guide](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
- [Why doesn't Amazon CloudFront cache files in the amount of time I specified?](https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-cache-files-time/)
