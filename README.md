# Chewbaaka - Change the World to Save the Cheetahs

This project powers the virtual Cheetah Museum
at [https://hope4cheetahs.org](https://hope4cheetahs.org).

[![CircleCI](https://circleci.com/gh/tetrachrome/chewbaaka.svg?style=svg&circle-token=3ff42881c6c3f2a44809d10947587a4c566fd574)](https://circleci.com/gh/tetrachrome/chewbaaka)
[![Actions Status](https://github.com/tetrachrome/chewbaaka/workflows/Node.js%20CI/badge.svg)](https://github.com/tetrachrome/chewbaaka/actions)
[![platform-linux](https://img.shields.io/badge/platform-linux-orange)](#)
[![platform-osx](https://img.shields.io/badge/platform-OSX-blue)](#)

[![Help Stop Illegal Cheetah Trafficking](https://img.shields.io/static/v1?label=HELP&message=Stop%20Illegal%20Cheetah%20Trafficking&color=red&style=for-the-badge)](https://gf.me/u/yu5nuj)
[![Support Cheetah Conservation Fund](https://img.shields.io/static/v1?label=SUPPORT&message=Cheetah%20Conservation%20Fund&color=yellow&style=for-the-badge)](https://cheetah.org)

[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://github.com/tetrachrome/)

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a>

![logo](./Resources/Chewbaaka_Logo_256x256.png)


## Goals and Objectives

Named after the iconic cheetah ambassador *Chewbaaka*, this project is
dedicated to [Cheetah Conservation Fund](https://cheetah.org)
and to showcase CCF's [Cheetah Museum](https://youtu.be/p5r1NxE2kLU) virtually
at [https://hope4cheetahs.org](https://hope4cheetahs.org). The goal is to
**promote cheetah conservation** and get more people to learn about the amazing cheetahs
and their current plight.

[![Watch the video](https://img.youtube.com/vi/p5r1NxE2kLU/hqdefault.jpg)](https://youtu.be/p5r1NxE2kLU)

[Here](https://youtu.be/p5r1NxE2kLU)'s CCF's official video tour of the Cheetah Museum.

## Contributions

Anybody interested in this project is encouraged to contribute in any ways possible.
Currently contributions are mostly needed in these areas:

### Core site functionality and performance improvements

Help in improving the core functionalities and performance of the site is always welcomed
and highly needed.

- Site performance improvements in various aspects including but not limiting to
  site launch and rendering performance, payload optimizations, graphics and image
  assets optimizations and compressions. [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/)
  is the de-facto performance metrics tool used so far to determine
  perf improvement opportunities.

- Design and implement more interactive elements. This site was designed to
  simulate the experience of visiting the actual museum as close as possible.
  There are a lot more that could be done to refine the experience to be more
  interactive and engaging. Ideas, designs, and implementations in this area
  are highly needed and valued.

### Search Engine Optimization

SEO has been an aspect that is currently lacking in this project.
Contributions from folks that are experts in SEO are very much needed
at the moment.

### Help spread the words out

[![Help Stop Illegal Cheetah Trafficking](https://img.shields.io/static/v1?label=HELP&message=Stop%20Illegal%20Cheetah%20Trafficking&color=red&style=for-the-badge)](https://gf.me/u/yu5nuj)

Simply help spread the word out about the current plight of the cheetahs
to your family and friends is a great way to help.

You can read about CCF's work in stopping illegal cheetah trades and trafficking
in eastern Africa and the Persian Gulf on CCF's official site [here](https://cheetah.org/ccf-blog/illegal-pet-trade/somali-state-somaliland-border-meeting-on-cheetah-trafficking/), and
[here](https://www.cnn.com/2019/08/28/africa/somaliland-cheetahs-gulf-intl/index.html).

### Contribute directly to Cheetah Conservation Fund

[![Support Cheetah Conservation Fund](https://img.shields.io/static/v1?label=SUPPORT&message=Cheetah%20Conservation%20Fund&color=yellow&style=for-the-badge)](https://cheetah.org)

Visit Cheetah Conservation Fund's official site at
[https://cheetah.org/](https://cheetah.org/) to learn about many ways
people can contribute, including donations, fundraising campaigns,
internship and volunteering opportunities (both domestically and overseas).


## How do I get started?

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

### Pull request and commit best practices

Both pull requests and commit messages should document the relevant
changes with concise descriptions.


## Setup, build, and test

The project requires **Node.js** and **npm** to be installed.

### Node.js

Node.js version `14.x` is the recommended version for development.
Node.js install should automatically installs the **npm** package manager.

Node.js official link [here](https://nodejs.org/en/download/).

(Currently I have Node.js version `v14.17.4` (check with `node --version`) installed for development,
which also installs npm version `6.14.14` (check with `npm --version`)).

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

If you are able to build the project successfully, you should see the
following in the terminal:

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


## Versions and Releases

Release note can be found [here](./RELEASE.md).


## Documentations

All documentations are hosted on the project's [wiki](https://github.com/tetrachrome/chewbaaka/wiki).


## License

This project is licensed under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
Public License](https://creativecommons.org/licenses/by-nc-sa/4.0/).

This project is **not** affiliated with Cheetah Conservation Fund.
