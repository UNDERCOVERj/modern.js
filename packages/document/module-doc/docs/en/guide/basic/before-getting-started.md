---
sidebar_position: 1
---

# Before you start

## Environment preparation

In order to use the Modern.js Module Tools, you first need [NodeJS](https://nodejs.org/zh/) engine, we recommend the latest [LTS version](https://github.com/nodejs/Release), and make sure the Node version is **>=14.18.0**. because non-stable NodeJS releases frequently have bugs. You might consider installing via [nvm-windows](https://github.com/coreybutler/nvm-windows) and [nvm](https://github.com/nvm-sh/nvm) (Mac / Linux), so you can easily switch to different NodeJS versions that might be required for different projects that you work on.

## Getting Started with npm

Once NodeJS is installed, not only can you access the `node` executable from the command line, but you can also execute the `npm` command.

Npm is the standard package manager for NodeJS. It started out as a tool for downloading and managing NodeJS package dependencies, but it has since evolved into a tool for front-end JavaScript.

**If you already know something about usage of npm and npm packages, then you can directly see [npm package manager](/en/guide/basic/before-getting-started#npm-package-manager) section.**

## npm package type project

So what is an npm package type project? When we execute the `npm init` command in an empty project directory, it creates a JSON file with the file name `package.json` under the current directory. During the creation process, we will need to fill in information including but not limited to the _name_, _version_ _number_, _description_, etc. of the npm package, which will be found in the resulting `package.json` file as follows

```json
{
  "name": "npm-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

At this point the project containing the initialized `package.json` file is an npm package type project, and you can execute the `npm publish` command to publish the project to the [npm Registry](https://www.npmjs.com/).

The npm Registry is a [npm package store](https://docs.npmjs.com/about-the-public-npm-registry) where developers can not only publish their own npm packages to the npm Registry, but also use npm packages published by other developers through the npm Registry.

A quality npm package will be used by more people because it not only saves a lot of code implementation work, but is also less likely to cause problems with the project.

## Using third-party npm packages

When adding a third-party npm package to an initial project, we can call this process "installing dependencies for the project" or "adding dependencies to the project". Before adding dependencies, we need to know one thing in particular -- **the types of packages npm depends on**.

- `"dependencies"`: a type of package that your application will need in a production environment.
- `"devDependencies"`: another type of package that is only needed for local development and testing.
  > packages can be understood as third-party npm packages.

You can install the packages you need in a **production environment** by running `npm install npm-package-name` or `npm add npm-package-name`, or you can manually write the packages you need to install and the corresponding [semantic version](https://docs.npmjs.com/about-semantic-versioning) in `"dependencies"` in the `package.json` file, and run the `npm install` command to.

```json
{
  "name": "your-npm-project",
  "dependencies": {
    "npm-package-name": "0.1.0"
  }
}
```

Similarly, you can install **only packages needed for local development and testing** by running `npm install npm-package-name --save-dev` or `npm add npm-package-name --save-dev`, or you can manually write the packages to be installed and the corresponding [semantic version](https://docs.npmjs.com/about-semantic-versioning) in `"devDependencies"` in the `package.json` file, and run the `npm install` command as follows

```json
{
  "name": "your-npm-project",
  "devDependencies": {
    "npm-package-name": "0.1.0"
  }
}
```

**When installing or using third-party npm packages be sure to determine what they are for and whether they should be placed in `"dependencies"` or `"devDependencies"` by distinguishing between their types.**

:::tip
In general, packages that need to be used in source code are `dependencies` dependencies. Unless you are exporting dependent code locally via packaging, in which case it can be treated as a `devDependencies` dependency.
:::

## Other npm bits and pieces to know

### Program entry for npm packages

There is a `"main"` attribute in `package.json` that corresponds to a module ID or, more intuitively, a NodeJS file path, which is the main entry point for your application.

For example, if your package is named `foo` and the user installs it, and then executes the `require("foo")` code, then the file corresponding to the `"main"` field of the npm package `foo` will be exported.

**It is recommended to set the `"main"` field in your npm package**. If `"main"` is not set, the default entry will be the `index.js` file in the root of the package.

In addition to the `"main"` attribute, the `"module"` attribute is usually set. It is similar to the `"main"` attribute in that it is mainly used in webpack scenarios. webpack reads the npm package entry (file) in most cases in the order **"module" -> "main "**.

> To learn more about how webpack does this, check out this [link](https://webpack.js.org/configuration/resolve/#resolvemainfields).

### `scripts`

The `"scripts"` attribute of the `package.json` file supports a number of built-in scripts and npm-preset lifecycle events, as well as arbitrary scripts.

These can be executed by running `npm run-script <stage>` or simply `npm run <stage>`.

Name matching [pre and post commands](https://docs.npmjs.com/cli/v9/using-npm/scripts#pre--post-scripts) will also be run (e.g. `premyscript`, `myscript`, `postmyscript` ).

```json
{
  "scripts": {
    "premyscript": "",
    "myscript": "",
    "postmyscript": ""
  }
}
```

When `npm run myscripts` is executed, the script corresponding to `premyscripts` will be executed before it, and the script corresponding to `postmyscripts` will be executed after it.

Script commands from dependencies can be run with `npm explore <pkg> -- npm run <stage>`.

There are also special lifecycle scripts that occur only under certain circumstances. Here are a few that are usually necessary to know.

#### `npm install`

When you run `npm install -g <pkg-name>`, the following scripts will run.

- `preinstall`
- `install`
- `postinstall`
- `prepublish`
- `preprepare`
- `prepare`
- `postprepare`

If your package root has a `binding.gyp` file and you don't define an `install` or `preinstall` script, then npm will build with `node-gyp rebuild` as the default install command, using [node-gyp](https://github.com/nodejs/node-gyp).

#### `npm publish`

When publishing a project, executing this command will trigger the following script.

- `prepublishOnly`
- `prepack`
- `prepare`
- `postpack`
- `publish`
- `postpublish`

When running in [`-dry-run`](https://docs.npmjs.com/cli/v7/commands/npm-publish#dry-run) mode, the script corresponding to `prepare` will not be executed.

### peerDependencies

In some cases, your npm project has a compatibility relationship with its host tool or library (e.g. a webpack plugin project and webpack), and your npm project does not want to use the host as a necessary dependency, which usually means that your project is probably a plugin for that host tool or library. Your npm project will have certain requirements for the version of the host package, as only the APIs required by the npm project will be exposed under a specific version.

For more explanation of `peerDependencies`, you can learn about the different ways npm, pnpm, and Yarn handle it at the following links.

- [npm's explanation of peerDependencies](https://docs.npmjs.com/cli/v9/configuring-npm/package-json#peerdependencies)
- [pnpm vs npm vs Yarn](https://pnpm.io/feature-comparison)

## npm package manager

In addition to the standard package manager like npm, the mainstream ones are **pnpm** and **Yarn**, both of which are good alternatives to npm cli.

It is recommended to use [pnpm](https://pnpm.io/installation) to manage project dependencies, which can be installed as follows.

```bash
npm install -g pnpm
```

## Module Tools configuration file

The Module Tools configuration file - `modern.config.(j|t)s` - is provided in the project directory of the module project created with `@modern-js/create`. However, the `modern.config` configuration file is not required to exist.

By default, the contents of the generated configuration file are as follows.

```ts title="modern.config.ts"
import { moduleTools, defineConfig } from '@modern-js/module-tools';

export default defineConfig({
  plugins: [moduleTools()],
  buildPreset: 'npm-library',
});
```

**We recommend using the `defineConfig` function**, but it is not mandatory to use it. So you can also return an object directly in the config file: the

```ts title="modern.config.ts"
import { moduleTools } from '@modern-js/module-tools';

export default {
  plugins: [moduleTools()],
  buildPreset: 'npm-library',
};
```
