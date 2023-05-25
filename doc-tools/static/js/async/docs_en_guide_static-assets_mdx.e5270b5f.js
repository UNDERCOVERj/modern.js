(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["docs_en_guide_static-assets_mdx"],{84598:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},title:function(){return t},toc:function(){return d},default:function(){return a}});var r=s("9880"),o=s("23169"),c={},t="Static Assets",d=[];function i(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre"},(0,o.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"static-assets",children:["Static Assets",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#static-assets",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["You can import static assets in ",(0,r.jsx)(n.code,{children:"markdown"})," (or ",(0,r.jsx)(n.code,{children:"mdx"}),") files. Both relative and absolute paths are supported. For example, if you have an image in the same directory as markdown, you can reference it like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mdx",children:"![](./demo.png)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Of course, you can also directly use the img tag in ",(0,r.jsx)(n.code,{children:".mdx"})," files:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mdx",children:'<img src="./demo.png" />\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js Doc will automatically find the image and respond to the browser according to the ",(0,r.jsx)(n.code,{children:".mdx"})," file path and image path."]}),"\n",(0,r.jsxs)(n.p,{children:["On the other hand, static resources can also be imported using absolute paths. In this way, Modern.js Doc will look for resources in the ",(0,r.jsx)(n.code,{children:"public"})," folder under the root directory of the project, which is the directory specified by the ",(0,r.jsx)(n.code,{children:"doc.root"})," field in ",(0,r.jsx)(n.code,{children:"modern.config.ts"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"import { defineConfig } from '@modern-js/doc-tools';\nimport path from 'path';\nexport default defineConfig({\n  doc: {\n    root: path.join(__dirname, 'docs'),\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["For example, if the root directory is ",(0,r.jsx)(n.code,{children:"docs"})," and the directory structure is as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docs\n├── public\n│   └── demo.png\n├── index.mdx\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"index.mdx"})," file above, you can reference ",(0,r.jsx)(n.code,{children:"demo.png"})," like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mdx",children:"![](./public/demo.png)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Or refer to it with an absolute path:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mdx",children:"![](/demo.png)\n"})})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}}}]);