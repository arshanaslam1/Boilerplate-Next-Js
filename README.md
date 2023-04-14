# Boilerplate-Next-Js

🚀 Boilerplate-Next-Js uses Next.js, MUI v5 and TypeScript, Storybook, Zeplin, ESLint, Prettier, Husky, Lint-Staged, Jest, Testing Library, Commitlint, VSCode, Varcel, PostCSS.

### Features

Developer experience first:

- ⚡ [Next.js](https://nextjs.org) for Static Site Generator
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [MUI v5](https://mui.com/material-ui/getting-started/overview/)
- ✅ Strict Mode for TypeScript and React 18.2
- 📏 Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, MUI v5 and Airbnb configuration)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🚓 Lint git commit with Commitlint
- 📓 Write standard compliant commit messages with Commitizen
- 🦺 Unit Testing with Jest and React Testing Library
- 👷 Run tests on pull request with GitLab Actions
- 🎁 Automatic changelog generation with Semantic Release
- 💡 Absolute Imports using `@` prefix
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript, Jest
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- 🗺️ Sitemap.xml and robots.txt with next-sitemap
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 🖱️ One click deployment with Vercel.(or manual deployment to any hosting services)
- 💯 Maximize lighthouse score

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

### Philosophy

- All the Next.js pages are statically generated by default. You can easily switch to SSR adding `getServerSideProps` to your page.
- Nothing is hidden from you, so you have the freedom to make the necessary adjustments to fit your needs and preferences.
- Minimal code
- SEO-friendly
- 🚀 Production-ready

### Requirements

- Node.js 18+ and npm or yarn

### Getting started

Run the following command on your local environment:

```shell
git clone git@xxxxxxxxxxxxxxxxxxxxxxxxxxx
Boilerplate-Next-Js
yarn install
```

Then, you can run locally in development mode with live reload:

```shell
yarn run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```shell
.
├── README.md                       # README file
├── __mocks__                       # Mocks for testing
├── .GitLab                         # GitLab folder
├── .husky                          # Husky configuration
├── .vscode                         # VSCode configuration
├── public                          # Public assets folder
├── src
│   ├── components                  # shared components
│   ├── constants                   # globel constant
│   ├── types                       # globel types
│   ├── hooks                       # hooks
│   ├── modlues                     # complete feature with all its compenets except shared components
│   ├── pages                       # Next JS Pages
│   ├── pages.test                  # Next JS Pages tests (this avoid test to treated as a Next.js pages)
│   ├── styles                      # Styles folder
│   └── utils                       # Utility functions
├── .eslintignore                   # ignore eslint file
├── .eslintrc                       # eslint config file
├── .gitignore                      # git ignore file
├── .commitlint.config.js           # commitlint config file
├── .jest.config.js                 # jest config file
├── .jest.setup.js                  # jest setup file
├── .lint-staged.config.js          # lint staged config file
├── .next-sitemap.config.js         # next-sitemap config file
├── .next.config.js                 # next config file
└── tsconfig.json                   # TypeScript configuration
```

### Zeplin

Zeplin is a web-based design and collaboration tool that helps software engineers and designers create and manage user interfaces, web designs, and mobile app designs. The tool allows users to easily share design assets, such as colors, fonts, icons, and images, with developers. It also helps developers quickly create the code for the design, and provides a comprehensive library of design elements that can be reused and customized. With Zeplin, developers and designers can collaborate in real-time to create high-quality user interfaces that are consistent, efficient, and optimized for the best user experience.

### Storybook

Storybook is a frontend workshop for building UI components and pages in isolation.

```shell
yarn run storybook
```

#### Deploy Storybook on Chromatic

```shell
yarn chromatic --project-token=$CHROMATIC_PROJECT_TOKEN
```

### Commit Message Format

The project enforces [Conventional Commits](https://www.conventionalcommits.org/) specification. This means that all your commit messages must be formatted according to the specification. To help you write commit messages, the project uses [Commitizen](https://GitLab.com/commitizen/cz-cli), an interactive CLI that guides you through the commit process. To use it, run the following command:

```shell
yarn run commit
```

One of the benefits of using Conventional Commits is that it allows us to automatically generate a `CHANGELOG` file. It also allows us to automatically determine the next version number based on the types of commits that are included in a release.

### Deploy to production

You can see the results locally in production mode with:

```shell
$ yarn run build
$ yarn run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [MUI v5](https://mui.com/material-ui/getting-started/overview/).

You can create an optimized production build with:

```shell
yarn run build-prod
```

Now, your blog is ready to be deployed. All generated files are located at `out` folder, which you can deploy with any hosting service.

### Testing

All tests are colocated with the source code inside the same directory. So, it makes it easier to find them. Unfortunately, it is not possible with the `pages` folder which is used by Next.js for routing. So, what is why we have a `pages.test` folder to write tests from files located in `pages` folder.

```shell
yarn run test
```

### Deploy to Vercel

Deploy this Project on Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2FGitLab.com%2Fixartz%2FNext-js-Boilerplate)

### VSCode information (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

With the plugins installed on your VSCode, ESLint and Prettier can automatically fix the code and show you the errors. Same goes for testing, you can install VSCode Jest extension to automatically run your tests and it also show the code coverage in context.

Pro tips: if you need a project wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.

### License

Licensed under the Private License, Copyright © 2023

See [LICENSE](LICENSE) for more information.

---

Made with ♥ by Arshan Aslam.
