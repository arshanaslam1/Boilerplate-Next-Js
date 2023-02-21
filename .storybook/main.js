module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-zeplin/register",
    "@storybook/addon-jest",
  ],
  staticDirs: ['../public'],
  framework: "@storybook/react",
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    }
  },
  core: {
    builder: "@storybook/builder-webpack5",
  },

  refs:{
    "chromatic-published-Storybook":{
      title: "Published Desgin",
      url: ""
    }
  },
};
