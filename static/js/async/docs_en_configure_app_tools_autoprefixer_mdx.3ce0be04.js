(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_tools_autoprefixer_mdx"],{70165:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var o=r("9880"),t=r("23169");function s(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",a:"a",h3:"h3"},(0,t.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Type:"})," ",(0,o.jsx)(n.code,{children:"Object | Function"})]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"{\n  flexbox: 'no-2009',\n  // Depends on the browserslist config in the project\n  // and the `output.overrideBrowserslist` (higher priority) config\n  overrideBrowserslist: browserslist,\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can modify the config of ",(0,o.jsx)(n.a,{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"noopener noreferrer",children:"autoprefixer"})," by ",(0,o.jsx)(n.code,{children:"tools.autoprefixer"}),"."]}),"\n",(0,o.jsxs)(n.h3,{id:"object-type",children:["Object Type",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["When ",(0,o.jsx)(n.code,{children:"tools.autoprefixer"})," is configured as ",(0,o.jsx)(n.code,{children:"Object"})," type, it is merged with the default config through Object.assign. For example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    autoprefixer: {\n      flexbox: 'no-2009',\n    },\n  },\n};\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"function-type",children:["Function Type",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"})]}),"\n",(0,o.jsxs)(n.p,{children:["When ",(0,o.jsx)(n.code,{children:"tools.autoprefixer"})," is a Function, the default config is passed as the first parameter and can be directly modified or returned as the final result. For example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    autoprefixer(config) {\n      // modify flexbox config\n      config.flexbox = 'no-2009';\n    },\n  },\n};\n"})})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(s,e)})):s(e)}},30177:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return c},toc:function(){return a},default:function(){return l}});var o=r("9880"),t=r("23169"),s=r.ir(r("70165")),i={sidebar_label:"autoprefixer"},c="tools.autoprefixer",a=[];function d(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,t.useMDXComponents)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"toolsautoprefixer",children:["tools.autoprefixer",(0,o.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsautoprefixer",children:"#"})]}),"\n",(0,o.jsxs)(n.div,{className:"modern-directive tip",children:[(0,o.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,o.jsx)(n.div,{className:"modern-directive-content",children:(0,o.jsxs)(n.p,{children:["This config is provided by Modern.js Builder, more detail can see ",(0,o.jsx)(n.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolsautoprefixer",target:"_blank",rel:"noopener noreferrer",children:"tools.autoprefixer"}),".\n"]})})]}),"\n","\n",(0,o.jsx)(s.default,{})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(d,e)})):d(e)}}}]);