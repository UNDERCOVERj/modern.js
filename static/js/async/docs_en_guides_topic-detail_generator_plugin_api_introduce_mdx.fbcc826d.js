(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_generator_plugin_api_introduce_mdx"],{38287:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return s},title:function(){return o},toc:function(){return d},default:function(){return a}});var t=i("9880"),r=i("23169"),s={sidebar_position:1},o="Introduction",d=[{text:"Generator plugin composition",depth:2,id:"generator-plugin-composition"},{text:"Classification",depth:2,id:"classification"},{text:"Type definition",depth:3,id:"type-definition"},{text:"Extended engineering",depth:4,id:"extended-engineering"},{text:"Create engineering scenes",depth:4,id:"create-engineering-scenes"},{text:"Custom type",depth:3,id:"custom-type"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",pre:"pre",ol:"ol",li:"li",h3:"h3",h4:"h4"},(0,r.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"introduction",children:["Introduction",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#introduction",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Modern.js supports the customization of the provided engineering solutions by means of generator plugins or the customization of specific scenarios for engineering solutions."}),"\n",(0,t.jsxs)(n.h2,{id:"generator-plugin-composition",children:["Generator plugin composition",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#generator-plugin-composition",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["The generator plugin is a module that can be developed directly using Modern.js module engineering solutions. Of course, Modern.js also provides the corresponding generator plugin (",(0,t.jsx)(n.code,{children:"@modern-js/generator-plugin-plugin"}),") to directly create a new generator plugin project."]}),"\n",(0,t.jsx)(n.p,{children:"A generator plugin project directory is as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:".\n├── README.md\n├── package.json\n├── src\n│   ├── index.ts\n│   └── modern-app-env.d.ts\n├── templates\n└── tsconfig.json\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"src/index.ts"})," is the source code directory, which is used to develop the generator plugin logic. The plugin exports a function by default, and the function parameter is ",(0,t.jsx)(n.code,{children:"context"}),". Some methods are provided on the ",(0,t.jsx)(n.code,{children:"context"})," to directly operate the current project. These methods will be introduced in detail later in this chapter."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"templates"})," directory is the template directory used to store template files that need to be used in the generator plugin."]}),"\n",(0,t.jsxs)(n.h2,{id:"classification",children:["Classification",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#classification",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"There are two types of generator plugins:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Extended engineering: directly customize the three major engineering provided by default."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create engineering scenes: Create corresponding engineering scenes based on the default three major engineering schemes."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"type-definition",children:["Type definition",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#type-definition",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["The classification of the generator plugin is provided by the meta information in the ",(0,t.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,t.jsxs)(n.h4,{id:"extended-engineering",children:["Extended engineering",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#extended-engineering",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "meta": {\n    "extend": "mwa" // The three engineering is mwa, module, monorepo\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.h4,{id:"create-engineering-scenes",children:["Create engineering scenes",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#create-engineering-scenes",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "meta": {\n    "key": "new_solution",\n    "name": "New Solution",\n    "type": "mwa" // In addition to the three major engineering solutions, the type here also supports the customize (custom) type\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"key"})," is the scene scheme name and the value is a character string.\n",(0,t.jsx)(n.code,{children:"name"})," is the display name of the scene scheme, used for the display of the option when used, and the value is a character string.\n",(0,t.jsx)(n.code,{children:"type"})," is the project solution type. In addition to supporting three project solutions like ",(0,t.jsx)(n.code,{children:"extend"}),", it also supports the customize (custom) type."]}),"\n",(0,t.jsxs)(n.h3,{id:"custom-type",children:["Custom type",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-type",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["The customize type provides the implementation capability of the full custom project solution. When using this type to create a new project solution scenario, only a small amount of code for best practices at the development level is provided, such as ",(0,t.jsx)(n.code,{children:".gitignore"}),", ",(0,t.jsx)(n.code,{children:".editorConfig"})," and other files, specifically for the following directory structure:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:".\n├── .editorconfig\n├── .gitignore\n├── .idea\n│   ├── codeStyles\n│   │   ├── Project.xml\n│   │   └── codeStyleConfig.xml\n│   ├── inspectionProfiles\n│   │   └── Project_Default.xml\n│   └── jsLinters\n│       └── eslint.xml\n├── .nvmrc\n└── .vscode\n    ├── extensions.json\n    └── settings.json\n"})}),"\n",(0,t.jsx)(n.p,{children:"Customized types ensure flexible configuration according to their needs for engineering solutions."})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}}}]);