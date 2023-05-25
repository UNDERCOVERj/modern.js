(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_output_disable-css-module-extension_mdx"],{71447:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return r}});var i=n("9880"),d=n("23169");function l(e){var s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",h3:"h3",a:"a",pre:"pre",h4:"h4"},(0,d.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Type:"})," ",(0,i.jsx)(s.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Default:"})," ",(0,i.jsx)(s.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Whether to treat all ",(0,i.jsx)(s.code,{children:".css"})," files in the source directory as CSS Modules."]}),"\n",(0,i.jsxs)(s.p,{children:["By default, only the ",(0,i.jsx)(s.code,{children:"*.module.css"})," files are treated as CSS Modules. After enabling this config, all ",(0,i.jsx)(s.code,{children:"*.css"})," style files in the source directory will be regarded as CSS Modules."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:".sass"}),", ",(0,i.jsx)(s.code,{children:".scss"})," and ",(0,i.jsx)(s.code,{children:".less"})," files are also affected by ",(0,i.jsx)(s.code,{children:"disableCssModuleExtension"}),"."]}),"\n",(0,i.jsxs)(s.div,{className:"modern-directive tip",children:[(0,i.jsx)(s.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(s.div,{className:"modern-directive-content",children:(0,i.jsxs)(s.p,{children:["We do not recommend enabling this config, because after enabling ",(0,i.jsx)(s.code,{children:"disableCssModuleExtension"}),", CSS Modules files and ordinary CSS files cannot be clearly distinguished, which is not conducive to long-term maintenance.\n"]})})]}),"\n",(0,i.jsxs)(s.h3,{id:"example",children:["Example",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"export default {\n  output: {\n    disableCssModuleExtension: true,\n  },\n};\n"})}),"\n",(0,i.jsxs)(s.h3,{id:"detailed",children:["Detailed",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#detailed",children:"#"})]}),"\n",(0,i.jsx)(s.p,{children:"The following is a detailed explanation of the CSS Modules rules:"}),"\n",(0,i.jsxs)(s.h4,{id:"disablecssmoduleextension-is-false-(default)",children:["disableCssModuleExtension is false (default)",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#disablecssmoduleextension-is-false-(default)",children:"#"})]}),"\n",(0,i.jsx)(s.p,{children:"The following files are treated as CSS Modules:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["all ",(0,i.jsx)(s.code,{children:"*.module.css"})," files"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"The following files are treated as normal CSS:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["all ",(0,i.jsx)(s.code,{children:"*.css"})," files (excluding ",(0,i.jsx)(s.code,{children:".module"}),")"]}),"\n",(0,i.jsxs)(s.li,{children:["all ",(0,i.jsx)(s.code,{children:"*.global.css"})," files"]}),"\n"]}),"\n",(0,i.jsxs)(s.h4,{id:"disablecssmoduleextension-is-true",children:["disableCssModuleExtension is true",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#disablecssmoduleextension-is-true",children:"#"})]}),"\n",(0,i.jsx)(s.p,{children:"The following files are treated as CSS Modules:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"*.css"})," and ",(0,i.jsx)(s.code,{children:"*.module.css"})," files in the source directory"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"*.module.css"})," files under node_modules"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"The following files are treated as normal CSS:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["all ",(0,i.jsx)(s.code,{children:"*.global.css"})," files"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"*.css"})," files under node_modules (without ",(0,i.jsx)(s.code,{children:".module"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(s.div,{className:"modern-directive tip",children:[(0,i.jsx)(s.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(s.div,{className:"modern-directive-content",children:(0,i.jsxs)(s.p,{children:["For CSS Modules files inside node_modules, please always use the ",(0,i.jsx)(s.code,{children:"*.module.css"})," suffix.\n"]})})]})]})}var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return s?(0,i.jsx)(s,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}},21849:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return r},title:function(){return c},toc:function(){return o},default:function(){return a}});var i=n("9880"),d=n("23169"),l=n.ir(n("71447")),r={sidebar_label:"disableCssModuleExtension"},c="output.disableCssModuleExtension",o=[];function t(e){var s=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,d.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.h1,{id:"outputdisablecssmoduleextension",children:["output.disableCssModuleExtension",(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#outputdisablecssmoduleextension",children:"#"})]}),"\n",(0,i.jsxs)(s.div,{className:"modern-directive tip",children:[(0,i.jsx)(s.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(s.div,{className:"modern-directive-content",children:(0,i.jsxs)(s.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,i.jsx)(s.a,{href:"https://modernjs.dev/builder/en/api/config-output.html#outputdisablecssmoduleextension",target:"_blank",rel:"noopener noreferrer",children:"output.disableCssModuleExtension"}),".\n"]})})]}),"\n","\n",(0,i.jsx)(l.default,{})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return s?(0,i.jsx)(s,Object.assign({},e,{children:(0,i.jsx)(t,e)})):t(e)}}}]);