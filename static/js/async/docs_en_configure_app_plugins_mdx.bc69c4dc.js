(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_plugins_mdx"],{10933:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return l},title:function(){return o},toc:function(){return t},default:function(){return d}});var r=i("9880"),s=i("23169"),l={title:"plugins",sidebar_position:9},o="plugins",t=[{text:"Precautions",depth:2,id:"precautions"},{text:"Plugin type",depth:2,id:"plugin-type"},{text:"Plugin execution order",depth:2,id:"plugin-execution-order"},{text:"Example",depth:2,id:"example"},{text:"Using plugins on npm",depth:3,id:"using-plugins-on-npm"},{text:"Use local plugins",depth:3,id:"use-local-plugins"},{text:"Plugin configuration",depth:3,id:"plugin-configuration"}];function a(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h2:"h2",h3:"h3",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"plugins",children:["plugins",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugins",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"CliPlugin[]"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Used to configure custom Modern.js framework plugins."}),"\n",(0,r.jsxs)(n.p,{children:["For the way to write custom plugins, please refer to ",(0,r.jsx)(n.a,{href:"/guides/topic-detail/framework-plugin/implement",children:"How to Write Plugins"}),"."]}),"\n",(0,r.jsxs)(n.h2,{id:"precautions",children:["Precautions",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#precautions",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["This config ",(0,r.jsx)(n.strong,{children:"is used to configure the Modern.js framework plugin"}),". If you need to configure other types of plugins, please select the corresponding configs:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Use ",(0,r.jsx)(n.a,{href:"/configure/app/builder-plugins",children:"builderPlugins"})," to configure Modern.js Builder plugins."]}),"\n",(0,r.jsxs)(n.li,{children:["Use ",(0,r.jsx)(n.a,{href:"/configure/app/tools/webpack",children:"tools.webpack"})," or ",(0,r.jsx)(n.a,{href:"/configure/app/tools/webpack-chain",children:"tools.webpackChain"})," to configure webpack plugins."]}),"\n",(0,r.jsxs)(n.li,{children:["Use ",(0,r.jsx)(n.a,{href:"/configure/app/tools/babel",children:"tools.babel"})," to configure babel plugins."]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"plugin-type",children:["Plugin type",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-type",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"There are three different type of framework plugins built into the Modern.js:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"CLI Plugin"}),", for local development, compilation and build phases, can extend various capabilities on the command line and compilation phases."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Server Plugin"}),", for server-level."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Runtime Plugin"}),", for runtime."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The ability to customize CLI plugins is currently open Modern.js, and the Server plugin and Runtime plugin will be available in the future."}),"\n",(0,r.jsxs)(n.h2,{id:"plugin-execution-order",children:["Plugin execution order",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-execution-order",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["By default, custom plugins are executed sequentially in the order of an array of ",(0,r.jsx)(n.code,{children:"plugins"}),", Modern.js built-in plugins are executed earlier than custom plugins."]}),"\n",(0,r.jsxs)(n.p,{children:["When the plugin uses related fields that control the order, such as ",(0,r.jsx)(n.code,{children:"pre"})," and ",(0,r.jsx)(n.code,{children:"post"}),", the execution order will be adjusted based on the declared fields, see ",(0,r.jsx)(n.a,{href:"/guides/topic-detail/framework-plugin/relationship",children:"Relationship between plugins"}),"."]}),"\n",(0,r.jsxs)(n.h2,{id:"example",children:["Example",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Below is an example of using the CLI plugin."}),"\n",(0,r.jsxs)(n.h3,{id:"using-plugins-on-npm",children:["Using plugins on npm",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-plugins-on-npm",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"To use the plugin on npm, you need to install the plugin through the package manager and import it."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import myPlugin from 'my-plugin';\n\nexport default defineConfig({\n  plugins: [myPlugin()],\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"use-local-plugins",children:["Use local plugins",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-local-plugins",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Using the plugin in the local code repository, you can import it directly through the relative path import."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import myPlugin from './config/plugin/myPlugin';\n\nexport default defineConfig({\n  plugins: [myPlugin()],\n});\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"plugin-configuration",children:["Plugin configuration",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-configuration",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"If the plugin provides some custom configuration options, you can pass in the configuration through the parameters of the plugin function."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import myPlugin from 'my-plugin';\n\nexport default defineConfig({\n  plugins: [\n    myPlugin({\n      foo: 1,\n      bar: 2,\n    }),\n  ],\n});\n"})})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}}}]);