(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_advanced-features_eslint_mdx"],{68292:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return d},title:function(){return c},toc:function(){return t},default:function(){return a}});var s=r("9880"),i=r("23169"),d={title:"ESLint 规则集",sidebar_position:8},c="ESLint 规则集",t=[{text:"Q: 如何处理 Lint",depth:2,id:"q:-如何处理-lint"},{text:"实时自动修复",depth:3,id:"实时自动修复"},{text:"批量自动修复",depth:3,id:"批量自动修复"},{text:"人工修复",depth:3,id:"人工修复"},{text:"声明例外情况",depth:3,id:"声明例外情况"},{text:"Q: 如何自定义 ESLint 规则",depth:2,id:"q:-如何自定义-eslint-规则"},{text:'仓库根目录下 package.json 里的 "eslintConfig" 字段',depth:3,id:'仓库根目录下-packagejson-里的-"eslintconfig"-字段'},{text:"src/.eslintrc.js 文件",depth:3,id:"src/eslintrcjs-文件"},{text:"package.json 里的 eslintIgnore 字段",depth:3,id:"packagejson-里的-eslintignore-字段"},{text:"Q: 如何升级 ESLint 插件的版本",depth:2,id:"q:-如何升级-eslint-插件的版本"},{text:"Q: WebStorm 有时候会报 ESLint 错误",depth:2,id:"q:-webstorm-有时候会报-eslint-错误"}];function l(e){var n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",code:"code",h2:"h2",h3:"h3",div:"div",pre:"pre",ul:"ul",li:"li",img:"img"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"eslint-规则集",children:["ESLint 规则集",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eslint-规则集",children:"#"})]}),"\n","\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Modern.js ESLint 规则集"}),"是全量的 ",(0,s.jsx)(n.strong,{children:"ESLint"})," 规则集合，包含 ",(0,s.jsx)(n.code,{children:"@modern-js"})," （对于 Node.js 项目的 Lint 规则）和 ",(0,s.jsx)(n.code,{children:"@modern-js-app"}),"（对于前端项目的 Lint 规则）。"]}),"\n",(0,s.jsx)(n.p,{children:"下面以具体问题介绍更多 ESLint 用法。"}),"\n",(0,s.jsxs)(n.h2,{id:"q:-如何处理-lint",children:["Q: 如何处理 Lint",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#q:-如何处理-lint",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:"实时自动修复",children:["实时自动修复",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#实时自动修复",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["多数问题会被 ESLint 规则的自动修复功能或 ",(0,s.jsx)(n.a,{href:"https://prettier.io/",target:"_blank",rel:"noopener noreferrer",children:"Prettier"})," 的代码格式化功能（已被集成到 ESLint 里）自动解决，开发者不需要关心问题的细节和解决方式。"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsx)(n.p,{children:"主要在 IDE 保存文件的环节执行这种自动修复，少数漏网之鱼会在提交代码环节被自动修复。"}),"\n"]})]}),"\n",(0,s.jsxs)(n.h3,{id:"批量自动修复",children:["批量自动修复",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#批量自动修复",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"在少数情况下，比如旧项目迁移的时候，可以执行以下命令，批量修复和检查所有文件："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm run lint:error\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"人工修复",children:["人工修复",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#人工修复",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"对于无法自动修复的问题，可以在 IDE 里点击问题提示框里的规则链接，打开这条规则的文档，查看问题的解释和解决方案。"}),"\n",(0,s.jsxs)(n.h3,{id:"声明例外情况",children:["声明例外情况",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#声明例外情况",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"目前阶段，有些规则并不能做到足够智能，多数情况下会有很大收益，在少数情况下也许不适用。但如果为了这些少数情况就把整个规则关掉或改掉，得不偿失。"}),"\n",(0,s.jsxs)(n.p,{children:["这种情况下可以用 ",(0,s.jsx)(n.a,{href:"https://eslint.org/docs/user-guide/configuring/rules#disabling-rules",target:"_blank",rel:"noopener noreferrer",children:"eslint-disable"})," 注释，对符合",(0,s.jsx)(n.strong,{children:"少数情况"}),"的代码块做标注，声明这里是一个例外，应该忽略。比如："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"/* eslint-disable filenames/match-exported */\n...\n/* eslint-enable filenames/match-exported */\n"})}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsx)(n.p,{children:'在 VS Code 编辑器里输入 eslint，会自动出现关于 "eslint-disable" 的提示框，选择提示选项生成对应注释对。'}),"\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["【Modern.js ESLint 规则集】要求 ",(0,s.jsx)(n.a,{href:"https://eslint.org/docs/user-guide/configuring/rules#disabling-rules",target:"_blank",rel:"noopener noreferrer",children:"eslint-disable"})," 必须成对使用，必须明确表达要影响的范围，以及在这个范围内明确表达要禁用什么规则，目的是让",(0,s.jsx)(n.strong,{children:"例外"}),"有明确的、最小化的范围，避免 ",(0,s.jsx)(n.a,{href:"https://eslint.org/docs/user-guide/configuring/rules#disabling-rules",target:"_blank",rel:"noopener noreferrer",children:"eslint-disable"})," 被滥用，导致不属于例外的代码也被禁用了规则。"]}),"\n",(0,s.jsxs)(n.h2,{id:"q:-如何自定义-eslint-规则",children:["Q: 如何自定义 ESLint 规则",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#q:-如何自定义-eslint-规则",children:"#"})]}),"\n",(0,s.jsxs)(n.h3,{id:'仓库根目录下-packagejson-里的-\\"eslintconfig\\"-字段',children:["仓库根目录下 ",(0,s.jsx)(n.code,{children:"package.json"}),' 里的 "eslintConfig" 字段',(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:'#仓库根目录下-packagejson-里的-\\"eslintconfig\\"-字段',children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"这个地方是整个仓库的默认 ESLint 配置，是针对纯 Node.js 代码（只能在 Node.js 里运行）设计的。"}),"\n",(0,s.jsx)(n.p,{children:"如果项目在某些规则上确实有特殊要求或不可避免的兼容问题（不是例外），可以在这里增加规则配置。该配置会优先于默认的【Modern.js ESLint 规则集】，比如："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:' "eslintConfig": {\n    "extends": [\n      "@modern-js"\n    ],\n    "rules": {\n      "filenames/match-exported": "off"\n    }\n  },\n\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"src/eslintrcjs-文件",children:[(0,s.jsx)(n.code,{children:"src/.eslintrc.js"})," 文件",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#src/eslintrcjs-文件",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Modern.js 的应用工程、模块工程，源代码目录里都会默认有这个配置文件，是针对 Universal JS 代码设计的。"}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsx)(n.p,{children:"Universal JS 代码是既能浏览器端也能在服务器端运行的代码。"}),"\n"]})]}),"\n",(0,s.jsx)(n.p,{children:"如果项目在某些规则上确实有特殊要求或不可避免的兼容问题（不是例外），可以在这里增加规则配置，该配置会优先于默认的【Modern.js ESLint 规则集】，比如："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// eslint-disable-next-line import/no-commonjs\nmodule.exports = {\n  root: true,\n  extends: ['@modern-js-app'],\n  parserOptions: {\n    tsconfigRootDir: __dirname,\n    project: ['../tsconfig.json'],\n  },\n  rules: {\n    'filenames/match-exported': 'off',\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["如果有需要，还可以继续在不同的子目录里增加 ",(0,s.jsx)(n.code,{children:".eslintrc.js"})," 文件，针对这个子目录里的代码做特殊配置："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  rules: {\n    'filenames/match-exported': 'off',\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"提示"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:["注意：没有必要使用 ",(0,s.jsx)(n.code,{children:"extends"})," 字段，会自动继承父目录的配置。"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h3,{id:"packagejson-里的-eslintignore-字段",children:["package.json 里的 ",(0,s.jsx)(n.code,{children:"eslintIgnore"})," 字段",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#packagejson-里的-eslintignore-字段",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["把包含 ",(0,s.jsx)(n.code,{children:".js"}),"、",(0,s.jsx)(n.code,{children:".jsx"}),"、",(0,s.jsx)(n.code,{children:".ts"}),"、",(0,s.jsx)(n.code,{children:".tsx"})," 文件、但不需要做代码检查和自动修复的目录，添加到 ",(0,s.jsx)(n.code,{children:"eslintIgnore"})," 里，可以优化 ESLint 检查的速度，比如："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:' "eslintIgnore": [\n    "node_modules",\n    "dist",\n    "output"\n  ],\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"q:-如何升级-eslint-插件的版本",children:["Q: 如何升级 ESLint 插件的版本",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#q:-如何升级-eslint-插件的版本",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["只要不是 Major 版本的变化（不符合 ",(0,s.jsx)(n.a,{href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer",children:"Semver"})," 规则的 ",(0,s.jsx)(n.code,{children:"^"})," 符号），就可以直接在业务项目的 ",(0,s.jsx)(n.code,{children:"package.json"})," 里指定这个依赖，删除 Lock 文件（或尝试手动删除 Lock 文件中这个包名的内容），执行 ",(0,s.jsx)(n.code,{children:"pnpm install"})," 重新安装依赖并且生成新的 Lock 文件。"]}),"\n",(0,s.jsxs)(n.p,{children:["做完这些操作之后，在业务项目的 ",(0,s.jsx)(n.code,{children:"./node_modules"})," 目录里，这个插件应该只存在一份，并且升级到了你指定的版本。"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"提示"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Major 版本就是主版本号。更多信息，请阅读 ",(0,s.jsx)(n.a,{href:"https://semver.org/#summary",target:"_blank",rel:"noopener noreferrer",children:"Semantic Versioning"}),"。"]}),"\n",(0,s.jsxs)(n.li,{children:["所有被 Modern.js 封装的上游项目（比如 ESLint、",(0,s.jsx)(n.a,{href:"https://eslint.org/docs/user-guide/configuring/plugins#plugins",target:"_blank",rel:"noopener noreferrer",children:"ESLint 插件"}),"、",(0,s.jsx)(n.a,{href:"https://reactrouter.com/",target:"_blank",rel:"noopener noreferrer",children:"React Router"})," 等），也都可以这样升级。"]}),"\n",(0,s.jsx)(n.li,{children:"Modern.js 也会在每次发版中尽量及时的升级这些上游依赖。"}),"\n",(0,s.jsx)(n.li,{children:"Major 版本的升级需要由 Modern.js 来发版。"}),"\n"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h2,{id:"q:-webstorm-有时候会报-eslint-错误",children:["Q: WebStorm 有时候会报 ESLint 错误",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#q:-webstorm-有时候会报-eslint-错误",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["由于 WebStorm 认为 ESLint 执行目录是根据 ",(0,s.jsx)(n.code,{children:".eslintrc"})," 文件来决定的。因此 ",(0,s.jsx)(n.code,{children:"src/.eslintrc"})," 文件位置的放置会导致 ",(0,s.jsx)(n.code,{children:"tsconfig.json"})," 文件指定的位置（项目根目录下）在 ",(0,s.jsx)(n.code,{children:"src/"})," 目录下找不到。"]}),"\n",(0,s.jsx)(n.p,{children:"此时需要手动配置一下："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:"--parser-options=project:../tsconfig.json\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/webstorm-lint-error.png",alt:"webstorm-lint-error"})})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);