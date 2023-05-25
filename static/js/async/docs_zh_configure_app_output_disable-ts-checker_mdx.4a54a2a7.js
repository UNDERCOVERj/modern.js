(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_output_disable-ts-checker_mdx"],{62900:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var s=r("9880"),i=r("23169");function c(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",pre:"pre",div:"div"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"false"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"打包工具："})," ",(0,s.jsx)(n.code,{children:"仅支持 webpack"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"是否禁用编译过程中的 TypeScript 类型检查。"}),"\n",(0,s.jsxs)(n.p,{children:["默认情况下，Builder 执行构建的过程中，会在一个独立的进程里运行 TypeScript 类型检查工具，它的检查逻辑与 TypeScript 原生的 ",(0,s.jsx)(n.code,{children:"tsc"})," 命令一致，你可以通过 ",(0,s.jsx)(n.code,{children:"tsconfig.json"})," 或是 Builder 的 ",(0,s.jsx)(n.code,{children:"tools.tsChecker"})," 配置项来自定义检查行为。"]}),"\n",(0,s.jsxs)(n.h3,{id:"阻塞编译",children:["阻塞编译",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#阻塞编译",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"在开发环境构建时，类型错误不会阻塞编译流程。"}),"\n",(0,s.jsx)(n.li,{children:"在生产环境构建时，类型错误会导致构建失败，以保证生产环境代码的稳定性。"}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"示例",children:["示例",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"禁用 TypeScript 类型检查："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableTsChecker: true,\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"禁用开发环境构建时的类型检查："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableTsChecker: process.env.NODE_ENV === 'development',\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"禁用生产环境构建时的类型检查："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    disableTsChecker: process.env.NODE_ENV === 'production',\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsx)(n.p,{children:"不建议在生产环境构建时禁用类型检查，这会导致线上代码的稳定性下降，请谨慎使用。"})})]})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},85472:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return t},title:function(){return d},toc:function(){return l},default:function(){return o}});var s=r("9880"),i=r("23169"),c=r.ir(r("62900")),t={sidebar_label:"disableTsChecker"},d="output.disableTsChecker",l=[];function a(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"outputdisabletschecker",children:["output.disableTsChecker",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputdisabletschecker",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-output.html#outputdisabletschecker",target:"_blank",rel:"noopener noreferrer",children:"output.disableTsChecker"}),"。\n"]})})]}),"\n","\n",(0,s.jsx)(c.default,{})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}}}]);