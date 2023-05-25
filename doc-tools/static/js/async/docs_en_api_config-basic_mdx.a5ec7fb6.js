(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_en_api_config-basic_mdx"],{34902:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var o in n)Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}(n,{frontmatter:function(){return d},title:function(){return l},toc:function(){return r},default:function(){return c}});var i=o("9880"),s=o("23169"),d={},l="Basic Config",r=[{text:"base",depth:2,id:"base"},{text:"title",depth:2,id:"title"},{text:"description",depth:2,id:"description"},{text:"icon",depth:2,id:"icon"},{text:"logo",depth:2,id:"logo"},{text:"outDir",depth:2,id:"outdir"},{text:"locales",depth:2,id:"locales"},{text:"mediumZoom",depth:2,id:"mediumzoom"}];function t(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",ul:"ul",li:"li",code:"code",p:"p",pre:"pre",blockquote:"blockquote"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"basic-config",children:["Basic Config",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#basic-config",children:"#"})]}),"\n",(0,i.jsxs)(n.h2,{id:"base",children:["base",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#base",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"/"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Deployment base path. For example, if you plan to deploy your site to ",(0,i.jsx)(n.code,{children:"https://foo.github.io/bar/"}),", then you should set ",(0,i.jsx)(n.code,{children:"base"})," to ",(0,i.jsx)(n.code,{children:'"/bar/"'}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    base: '/bar/',\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"title",children:["title",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#title",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:'"Island"'})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Site title. This parameter will be used as the title of the HTML page. For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    title: 'My Site',\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"description",children:["description",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#description",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:'""'})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Site description. This will be used as the description of the HTML page. For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    description: 'My Site Description',\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"icon",children:["icon",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#icon",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:'""'})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Site icon. This path will be used as the icon path for the HTML page. For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    icon: '/favicon.ico',\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The framework will find your icon in the ",(0,i.jsx)(n.code,{children:"public"})," directory, of course you can also set it to a CDN address."]}),"\n",(0,i.jsxs)(n.h2,{id:"logo",children:["logo",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#logo",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"string | { dark: string; light: string }"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:'""'})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Site logo. This path will be used as the logo path in the upper left corner of the navbar. For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    logo: '/logo.png',\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The framework will find your icon in the ",(0,i.jsx)(n.code,{children:"public"})," directory, you can also set it to a CDN address."]}),"\n",(0,i.jsx)(n.p,{children:"Of course you can set different logos for dark/light mode:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    logo: {\n      dark: '/logo-dark.png',\n      light: '/logo-light.png',\n    },\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"outdir",children:["outDir",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outdir",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"string"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"doc_build"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Custom output directory for built sites. for example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    outDir: 'doc_build',\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"locales",children:["locales",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#locales",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"Locale[]"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export interface Locale {\n  lang: string;\n  label: string;\n  title?: string;\n  description?: string;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"I18n config of the site. for example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    locales: [\n      {\n        lang: 'en-US',\n        label: 'English',\n        title: 'Doc Tools',\n        description: 'Doc Tools',\n      },\n      {\n        lang: 'zh-CN',\n        label: '简体中文',\n        title: '文档框架',\n        description: '文档框架',\n      },\n    ],\n  },\n  plugins: [docTools()],\n});\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"mediumzoom",children:["mediumZoom",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#mediumzoom",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type: ",(0,i.jsx)(n.code,{children:"boolean"})," | ",(0,i.jsx)(n.code,{children:"{ selector?: string }"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Whether to enable the image zoom function. It is enabled by default, you can disable it by setting ",(0,i.jsx)(n.code,{children:"mediumZoom"})," to ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["The bottom layer is implemented using the ",(0,i.jsx)(n.a,{href:"https://github.com/francoischalifour/medium-zoom",target:"_blank",rel:"noopener noreferrer",children:"medium-zoom"})," library."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example usage:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import docTools, { defineConfig } from '@modern-js/doc-tools';\n\nexport default defineConfig({\n  doc: {\n    // Turn off image zoom\n    mediumZoom: false,\n    // Configure the CSS selector to customize the picture to be zoomed, the default is '.modern-doc img'\n    mediumZoom: {\n      selector: '.modern-doc img',\n    },\n  },\n  plugins: [docTools()],\n});\n"})})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(t,e)})):t(e)}}}]);