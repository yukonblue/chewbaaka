# Chewbaaka - Change the World to Save the Cheetahs

This project powers the virtual Cheetah Museum of [Cheetah Conservation Fund](https://cheetah.org)
at [https://hope4cheetahs.org](https://hope4cheetahs.org).

[![CircleCI](https://circleci.com/gh/tetrachrome/chewbaaka.svg?style=svg&circle-token=3ff42881c6c3f2a44809d10947587a4c566fd574)](https://circleci.com/gh/tetrachrome/chewbaaka)
[![Actions Status](https://github.com/tetrachrome/chewbaaka/workflows/Node.js%20CI/badge.svg)](https://github.com/tetrachrome/chewbaaka/actions)

![logo](./Resources/Chewbaaka_Logo_256x256.png)

[![Watch the video](https://img.youtube.com/vi/p5r1NxE2kLU/maxresdefault.jpg)](https://youtu.be/p5r1NxE2kLU)

## Goals and Objectives

Named after the iconic cheetah ambassador *Chewbaaka*, this project is
dedicated to [Cheetah Conservation Fund](https://cheetah.org)
and to showcase CCF's [Cheetah Museum](https://youtu.be/p5r1NxE2kLU) virtually
at [https://hope4cheetahs.org](https://hope4cheetahs.org). The goal is to
**promote cheetah conservation** and get more people to learn about the amazing cheetahs
and their current plight.

## Contributions

Anybody interested in this project is encouraged to contribute in any way possible.
Currently we are looking for contributions in several aspects:

### Core site functionality and performance improvements

Help in improving the core functionality and improvement of the site is always welcomed
and highly needed. Currently these are the domains that need the most help:

- Site performance improvements in various including but not limiting to
  launch and rendering performance, payload optimizations, graphics and image
  assets optimizations and compressions. [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/)
  is the de-facto performance metrics tool used so far to determine
  perf improvement opportunities.

- Design and implement more interactive elements. This site was designed to simulate
  experience of visiting the actual museum as close as possible. There's a lot more
  that could be done to refine the experience to be more interactive and engaging.
  Ideas, designs, and implementations in this area are highly needed and valued.

### Search Engine Optimization

SEO has been an aspect that is currently lacking in this project.
Helps in this are also highly needed. Contributions from folks that are
experts in SEO are very much needed at the moment.

### How do I get started?

First, thank you for your interest! The first step would be to read down below
to get familiar with the workflow and build steps of this project.

For opening up discussions on ideas and questions, opening up an issue
[here](https://github.com/tetrachrome/chewbaaka/issues/new) is the best way.

For other changes, please open up a Pull Request.

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

All documentations are hosted on the project's [wiki](https://github.com/tetrachrome/chewbaaka/wiki).
