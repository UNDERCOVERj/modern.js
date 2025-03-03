---
sidebar_position: 1
---

# 开始之前

## 环境准备

为了使用 Modern.js 模块工程解决方案，首先需要 [NodeJS](https://nodejs.org/zh/)，我们推荐最新的[长期维护版本](https://github.com/nodejs/Release)，并确保 Node 版本大于等于 **14.18.0**。因为非稳定的 NodeJS 时常有一些 Bug，你可以使用 [nvm-windows](https://github.com/coreybutler/nvm-windows) 和 [nvm](https://github.com/nvm-sh/nvm)（Mac / Linux）安装，这样你就可以方便地切换到不同的 NodeJS 版本，这些版本可能会用于不同的项目。

## 初识 npm

当 NodeJS 被安装后，你不仅可以在命令行中访问 `node` 可执行程序，同时你也可以执行 `npm` 命令。

npm 是 NodeJS 的标准软件包管理器。它一开始的用途是用于下载和管理 NodeJS 包的依赖关系，但后来它逐渐变成为一个用于前端 JavaScript 的工具。

**如果你已经对 npm 和 npm 包的使用方式有所了解，那么可以直接跳到[「npm 包管理器」](/guide/basic/before-getting-started#npm-包管理器)部分。**

## npm 包类型项目

那么什么是 npm 包类型的项目呢？当我们在一个空的项目目录下执行 `npm init` 命令的时候，它会在当前目录下面创建一个文件名为 `package.json` 的 JSON 文件。在创建过程中，我们需要填写包括但不限于 npm 包的名称、版本号、描述等等内容，这些填写的内容都会在生成的 `package.json` 文件中找到：

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

此时这个包含了初始化后的 `package.json` 文件的项目就是一个 npm 包类型的项目，你可以执行 `npm publish` 命令将这个项目发布到 [npm Registry](https://www.npmjs.com/)。

npm Registry 是一个 [npm 包存储的地方](https://docs.npmjs.com/about-the-public-npm-registry)，开发者们不仅可以将他们自己的 npm 包发布到 npm Registry，还可以通过 npm Registry 使用其他开发者发布的 npm 包。

优质的 npm 包会有更多的人去使用，因为它不仅节省了很多代码实现的工作，同时也不容易让项目出现问题。

## 使用第三方 npm 包

当要为初始化的项目增加第三方的 npm 包的时候，我们可以把这一过程叫做“为项目安装依赖”或是“为项目增加依赖”。在增加依赖之前，首先我们要特别了解一件事情 —— **npm 依赖的软件包类型**：

- `"dependencies"`：一种是你的应用程序在生产环境中需要的软件包。
- `"devDependencies"`：另一种是仅在本地开发和测试中需要的软件包。
  > 软件包可以理解为是第三方的 npm 包。

你可以通过执行 `npm install npm-package-name` 或者 `npm add npm-package-name` 的方式来安装在**生产环境中需要的软件包**，或者也可以在 `package.json` 文件中手动的将需要安装的包和对应的[语义化版本](https://docs.npmjs.com/about-semantic-versioning)写在 `"dependencies"` 里，并执行 `npm install` 命令：

```json
{
  "name": "your-npm-project",
  "dependencies": {
    "npm-package-name": "0.1.0"
  }
}
```

同理，你也可以执行 `npm install npm-package-name --save-dev` 或 `npm add npm-package-name --save-dev` 的方式来安装**仅在本地开发和测试中需要的软件包**，或者也可以在 `package.json` 文件中手动的将需要安装的包和对应的[语义化版本](https://docs.npmjs.com/about-semantic-versioning)写在 `"devDependencies"` 里，并执行 `npm install` 命令：

```json
{
  "name": "your-npm-project",
  "devDependencies": {
    "npm-package-name": "0.1.0"
  }
}
```

**在安装或者使用第三方 npm 包的时候一定要确定它们的用途，以及通过区分它们的类型确定好它们应该放在 `"dependencies"` 还是 `"devDependencies"` 中。**

:::tip
一般来说，需要在源代码中使用到的包都属于 `dependencies` 依赖。除非你通过打包的方式将依赖的代码输出到本地，那么这种情况可以将它作为 `devDependencies` 依赖。
:::

## 还需要了解的 npm 零碎知识

### npm 包的程序入口

在 `package.json` 中存在一个 `"main"` 属性，它对应的值是一个模块 ID，或者更直观的说是一个 NodeJS 文件路径，它是你程序的主要入口。

例如你的包名为 `foo`，并且用户安装了它，然后执行 `require("foo")` 代码，那么 `foo` 这个 npm 包的 `"main"` 字段对应的文件将会被导出。

**推荐在你的 npm 包里一定要设置 `"main"` 字段**。如果没有设置 `"main"`，则默认入口为包的根目录下的 `index.js` 文件。

除了需要设置 `"main"` 属性以外，一般还会设置 `"module"` 属性。它与 `"main"` 属性的用途类似，它主要是用于在 webpack 场景下使用。webpack 在大多数情况下，会以 **"module" -> "main"** 这个顺序读取 npm 包的入口（文件）。

> 想要了解关于 webpack 如何做这件事，可以查看这个[链接](https://webpack.js.org/configuration/resolve/#resolvemainfields)。

### "scripts"

`package.json` 文件的 `"scripts"` 属性支持一些内置的脚本和 npm 预设的生命周期事件，以及任意的脚本。

这些都可以通过运行 `npm run-script <stage>` 或简称 `npm run <stage>` 来执行。

名称匹配的[前置命令和后置命令](https://docs.npmjs.com/cli/v9/using-npm/scripts#pre--post-scripts)也会被运行（例如 `premyscript`、`myscript`、`postmyscript`）。

```json
{
  "scripts": {
    "premyscript": "",
    "myscript": "",
    "postmyscript": ""
  }
}
```

当执行 `npm run myscripts` 的时候，`premyscripts` 对应的脚本会在它之前执行，`postmyscripts` 对应的脚本会在它之后执行。

来自依赖的脚本命令可以用 `npm explore <pkg> -- npm run <stage>` 运行。

还有一些特殊的生命周期脚本（Life Scripts），只在某些情况下发生。这里介绍几个通常需要了解的情况。

#### `npm install`

当你运行 `npm install -g <pkg-name>` 时，以下脚本会运行。

- `preinstall`
- `install`
- `postinstall`
- `prepublish`
- `preprepare`
- `prepare`
- `postprepare`

如果你的软件包根目录有一个 `binding.gyp` 文件，而你没有定义 `install` 或 `preinstall` 脚本，那么 npm 将以 `node-gyp rebuild` 作为默认的 install 命令，使用 [node-gyp](https://github.com/nodejs/node-gyp) 进行编译。

#### `npm publish`

当发布项目的时候，执行该命令会触发以下脚本：

- `prepublishOnly`
- `prepack`
- `prepare`
- `postpack`
- `publish`
- `postpublish`

当以 [`--dry-run`](https://docs.npmjs.com/cli/v7/commands/npm-publish#dry-run) 模式运行的时候，`prepare` 对应的脚本将不会执行。

### peerDependencies

在某些情况下，你的 npm 项目与它的宿主工具或者库之间存在某种兼容关系（例如一个 webpack 插件项目和 webpack），同时你的 npm 项目不想将宿主作为必要的依赖，这个时候通常说明你的项目可能是这个宿主工具或者库的插件。你的 npm 项目会对宿主包的版本有一定的要求，因为只有在特定的版本下才会暴露出 npm 项目所需要的 API。

关于更多 `peerDependencies` 的解释，可以通过下面的链接了解 npm、pnpm、Yarn 对于它的不同处理方式：

- [npm 对 peerDependencies 的解释](https://docs.npmjs.com/cli/v9/configuring-npm/package-json#peerdependencies)
- [pnpm vs npm VS Yarn](https://pnpm.io/feature-comparison)

## npm 包管理器

除了 npm 这种标准的包管理器以外，目前主流的还有 **pnpm** 和 **Yarn**，它们都是不错的 npm cli 替代品。

推荐使用 [pnpm](https://pnpm.io/installation) 来管理项目依赖，可以通过下面的方式安装它：

```bash
npm install -g pnpm
```

## Module Tools 配置文件

通过`@modern-js/create`创建的模块工程项目目录下提供了 Module Tools 的配置文件 —— `modern.config.(j|t)s`。但 `modern.config` 配置文件不是必须存在的。

默认情况下，生成的配置文件的内容如下：

```ts title="modern.config.ts"
import { moduleTools, defineConfig } from '@modern-js/module-tools';

export default defineConfig({
  plugins: [moduleTools()],
  buildPreset: 'npm-library',
});
```

**我们推荐使用 `defineConfig` 函数**，不过并不强制使用它。因此你也可以在配置文件中直接返回一个对象：

```ts title="modern.config.ts"
import { moduleTools } from '@modern-js/module-tools';

export default {
  plugins: [moduleTools()],
  buildPreset: 'npm-library',
};
```
