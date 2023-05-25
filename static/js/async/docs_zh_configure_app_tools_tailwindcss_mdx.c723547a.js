(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_tools_tailwindcss_mdx"],{32950:function(n,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(n,e){for(var s in e)Object.defineProperty(n,s,{enumerable:!0,get:e[s]})}(e,{frontmatter:function(){return t},title:function(){return c},toc:function(){return o},default:function(){return l}});var i=s("9880"),r=s("23169"),t={sidebar_label:"tailwindcss"},c="tools.tailwindcss",o=[{text:"Function 类型",depth:3,id:"function-类型"},{text:"Object 类型",depth:3,id:"object-类型"},{text:"限制",depth:3,id:"限制"}];function d(n){var e=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",p:"p",h3:"h3"},(0,r.useMDXComponents)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.h1,{id:"toolstailwindcss",children:["tools.tailwindcss",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#toolstailwindcss",children:"#"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"类型："})," ",(0,i.jsx)(e.code,{children:"Object | Function"})]}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"默认值："})}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"const tailwind = {\n  content: [\n    './config/html/**/*.html',\n    './config/html/**/*.ejs',\n    './config/html/**/*.hbs',\n    './src/**/*.js',\n    './src/**/*.jsx',\n    './src/**/*.ts',\n    './src/**/*.tsx',\n    './storybook/**/*',\n  ],\n  // 使用 source.designSystem 配置作为 Tailwind CSS Theme 配置\n  theme: source.designSystem,\n};\n"})}),"\n",(0,i.jsxs)(e.p,{children:["对应 ",(0,i.jsx)(e.a,{href:"https://tailwindcss.com/docs/configuration",target:"_blank",rel:"noopener noreferrer",children:"TailwindCSS"})," 的配置。"]}),"\n",(0,i.jsxs)(e.h3,{id:"function-类型",children:["Function 类型",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#function-类型",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:["当 ",(0,i.jsx)(e.code,{children:"tools.tailwindcss"})," 为 Function 类型时，默认配置会作为第一个参数传入，你可以直接修改配置对象，也可以返回一个值作为最终结果："]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default {\n  tools: {\n    tailwindcss(config) {\n      config.content.push('./some-folder/**/*.{js,ts}');\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(e.h3,{id:"object-类型",children:["Object 类型",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#object-类型",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:["当 ",(0,i.jsx)(e.code,{children:"tools.tailwindcss"})," 的值为 ",(0,i.jsx)(e.code,{children:"Object"})," 类型时，会与默认配置通过 ",(0,i.jsx)(e.code,{children:"Object.assign"})," 浅合并。"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default {\n  tools: {\n    tailwindcss: {\n      plugins: [\n        require('@tailwindcss/forms'),\n        require('@tailwindcss/aspect-ratio'),\n        require('@tailwindcss/typography'),\n      ],\n    },\n  },\n};\n"})}),"\n",(0,i.jsxs)(e.h3,{id:"限制",children:["限制",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#限制",children:"#"})]}),"\n",(0,i.jsxs)(e.p,{children:["注意，该配置中不允许使用 ",(0,i.jsx)(e.code,{children:"theme"})," 配置项，否则会构建失败。在 Modern.js 中，请使用 ",(0,i.jsx)(e.a,{href:"/configure/app/source/design-system",children:"source.designSystem"})," 作为 ",(0,i.jsx)(e.code,{children:"Tailwind CSS Theme"})," 配置。"]}),"\n",(0,i.jsxs)(e.p,{children:["其他配置的使用方式和 Tailwind CSS 一致，请参考 ",(0,i.jsx)(e.a,{href:"https://tailwindcss.com/docs/configuration",target:"_blank",rel:"noopener noreferrer",children:"tailwindcss - Configuration"}),"。"]})]})}var l=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,r.useMDXComponents)(),n.components).wrapper;return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(d,n)})):d(n)}}}]);