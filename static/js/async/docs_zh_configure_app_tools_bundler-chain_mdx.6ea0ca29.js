(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_tools_bundler-chain_mdx"],{7691:function(n,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i}});var r=d("9880"),s=d("23169");function c(n){var e=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",a:"a",blockquote:"blockquote",h3:"h3",h4:"h4",pre:"pre",h5:"h5",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.useMDXComponents)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"类型："})," ",(0,r.jsx)(e.code,{children:"Function | undefined"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"默认值："})," ",(0,r.jsx)(e.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["你可以通过 ",(0,r.jsx)(e.code,{children:"tools.bundlerChain"})," 来修改默认的 webpack 和 Rspack 配置，它的值为 ",(0,r.jsx)(e.code,{children:"Function"})," 类型，接收两个参数："]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["第一个参数为 ",(0,r.jsx)(e.code,{children:"bundler-chain"})," 对象实例，你可以通过这个实例来修改 webpack 和 Rspack 的配置。"]}),"\n",(0,r.jsxs)(e.li,{children:["第二个参数为一个工具集合，包括",(0,r.jsx)(e.code,{children:"env"}),"、",(0,r.jsx)(e.code,{children:"isProd"}),"、",(0,r.jsx)(e.code,{children:"CHAIN_ID"})," 等。"]}),"\n"]}),"\n",(0,r.jsxs)(e.div,{className:"modern-directive tip",children:[(0,r.jsx)(e.div,{className:"modern-directive-title",children:"什么是 BundlerChain"}),(0,r.jsxs)(e.div,{className:"modern-directive-content",children:["\n",(0,r.jsx)(e.p,{children:"Bundler chain 是 webpack chain 的子集，其中包含一部分 webpack chain API，你可以用它来同时修改 webpack 和 Rspack 的配置。"}),"\n",(0,r.jsxs)(e.p,{children:["通过 bundler chain 修改的配置，在 webpack 和 Rspack 构建时均可生效。需要注意的是，bundler chain 只支持修改 webpack 和 Rspack 间无差异部分的配置。如，修改 devtool 配置项(webpack 和 Rspack 的 devtool 属性值类型相同)，或添加一个",(0,r.jsx)(e.a,{href:"https://www.rspack.dev/zh/guide/plugin-compat.html",target:"_blank",rel:"noopener noreferrer",children:"Rspack 兼容"}),"的 webpack 插件。"]}),"\n"]})]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"tools.bundlerChain"})," 的执行时机早于 tools.webpackChain / tools.webpack / tools.rspack，因此会被其他几个配置中的修改所覆盖。"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"工具集合",children:["工具集合",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#工具集合",children:"#"})]}),"\n",(0,r.jsxs)(e.h4,{id:"env",children:["env",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#env",children:"#"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"类型："})," ",(0,r.jsx)(e.code,{children:"'development' | 'production' | 'test'"})]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"通过 env 参数可以判断当前环境为 development、production 还是 test。比如："}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain: (chain, { env }) => {\n      if (env === 'development') {\n        chain.devtool('cheap-module-eval-source-map');\n      }\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(e.h4,{id:"isprod",children:["isProd",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#isprod",children:"#"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"类型："})," ",(0,r.jsx)(e.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"通过 isProd 参数可以判断当前环境是否为 production。比如："}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain: (chain, { isProd }) => {\n      if (isProd) {\n        chain.devtool('source-map');\n      }\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(e.h4,{id:"target",children:["target",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#target",children:"#"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"类型："})," ",(0,r.jsx)(e.code,{children:"'web' | 'node' | 'modern-web' | 'web-worker'"})]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"通过 target 参数可以判断当前构建的目标运行时环境。比如："}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain: (chain, { target }) => {\n      if (target === 'node') {\n        // ...\n      }\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(e.h4,{id:"isserver",children:["isServer",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#isserver",children:"#"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"类型："})," ",(0,r.jsx)(e.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["判断当前构建的目标运行时环境是否为 ",(0,r.jsx)(e.code,{children:"node"}),"，等价于 ",(0,r.jsx)(e.code,{children:"target === 'node'"}),"。"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain: (chain, { isServer }) => {\n      if (isServer) {\n        // ...\n      }\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(e.h4,{id:"iswebworker",children:["isWebWorker",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#iswebworker",children:"#"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"类型："})," ",(0,r.jsx)(e.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["判断当前构建的目标运行时环境是否为 ",(0,r.jsx)(e.code,{children:"web-worker"}),"，等价于 ",(0,r.jsx)(e.code,{children:"target === 'web-worker'"}),"。"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain: (chain, { isWebWorker }) => {\n      if (isWebWorker) {\n        // ...\n      }\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"htmlplugin",children:["HtmlPlugin",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#htmlplugin",children:"#"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"类型："})," ",(0,r.jsx)(e.code,{children:"typeof import('html-webpack-plugin') | import('@rspack/plugin-html') "})]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"通过这个参数你可以拿到 webpack 或 Rspack 中的 HtmlPlugin 实例。"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"export default {\n  tools: {\n    bundlerChain: (chain, { HtmlPlugin }) => {\n      console.log(HtmlPlugin);\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(e.h4,{id:"chain_id",children:["CHAIN_ID",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_id",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"Builder 中预先定义了一些常用的 Chain ID，你可以通过这些 ID 来定位到内置的 Rule 或 Plugin。"}),"\n",(0,r.jsxs)(e.h5,{id:"chain_idrule",children:["CHAIN_ID.RULE",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_idrule",children:"#"})]}),"\n",(0,r.jsxs)(e.table,{children:["\n",(0,r.jsxs)(e.thead,{children:["\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.th,{children:"ID"}),"\n",(0,r.jsx)(e.th,{children:"描述"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.tbody,{children:["\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"RULE.MJS"})}),"\n",(0,r.jsxs)(e.td,{children:["处理 ",(0,r.jsx)(e.code,{children:"mjs"})," 的规则"]}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"RULE.CSS"})}),"\n",(0,r.jsxs)(e.td,{children:["处理 ",(0,r.jsx)(e.code,{children:"css"})," 的规则"]}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"RULE.LESS"})}),"\n",(0,r.jsxs)(e.td,{children:["处理 ",(0,r.jsx)(e.code,{children:"less"})," 的规则"]}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"RULE.SASS"})}),"\n",(0,r.jsxs)(e.td,{children:["处理 ",(0,r.jsx)(e.code,{children:"sass"})," 的规则"]}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"RULE.TOML"})}),"\n",(0,r.jsxs)(e.td,{children:["处理 ",(0,r.jsx)(e.code,{children:"toml"})," 的规则"]}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"RULE.YAML"})}),"\n",(0,r.jsxs)(e.td,{children:["处理 ",(0,r.jsx)(e.code,{children:"yaml"})," 的规则"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"chain_idone_of",children:["CHAIN_ID.ONE_OF",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_idone_of",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["通过 ",(0,r.jsx)(e.code,{children:"ONE_OF.XXX"})," 可以匹配到规则数组中的某一类规则。"]}),"\n",(0,r.jsxs)(e.table,{children:["\n",(0,r.jsxs)(e.thead,{children:["\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.th,{children:"ID"}),"\n",(0,r.jsx)(e.th,{children:"描述"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.tbody,{children:["\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"ONE_OF.SVG"})}),"\n",(0,r.jsx)(e.td,{children:"处理 SVG 的规则，在 data URI 和单独文件之间自动选择"}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"ONE_OF.SVG_URL"})}),"\n",(0,r.jsx)(e.td,{children:"处理 SVG 的规则，输出为单独文件"}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"ONE_OF.SVG_INLINE"})}),"\n",(0,r.jsx)(e.td,{children:"处理 SVG 的规则，作为 data URI 内联到 bundle 中"}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"ONE_OF.SVG_ASSETS"})}),"\n",(0,r.jsx)(e.td,{children:"处理 SVG 的规则，在 data URI 和单独文件之间自动选择"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"chain_iduse",children:["CHAIN_ID.USE",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_iduse",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["通过 ",(0,r.jsx)(e.code,{children:"USE.XXX"})," 可以匹配到对应的 loader。"]}),"\n",(0,r.jsxs)(e.table,{children:["\n",(0,r.jsxs)(e.thead,{children:["\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.th,{children:"ID"}),"\n",(0,r.jsx)(e.th,{children:"描述"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.tbody,{children:["\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"USE.LESS"})}),"\n",(0,r.jsxs)(e.td,{children:["对应 ",(0,r.jsx)(e.code,{children:"less-loader"})]}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"USE.SASS"})}),"\n",(0,r.jsxs)(e.td,{children:["对应 ",(0,r.jsx)(e.code,{children:"sass-loader"})]}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"USE.TOML"})}),"\n",(0,r.jsxs)(e.td,{children:["对应 ",(0,r.jsx)(e.code,{children:"toml-loader"})]}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"USE.YAML"})}),"\n",(0,r.jsxs)(e.td,{children:["对应 ",(0,r.jsx)(e.code,{children:"yaml-loader"})]}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"USE.SVGR"})}),"\n",(0,r.jsxs)(e.td,{children:["对应 ",(0,r.jsx)(e.code,{children:"@svgr/webpack"})]}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"USE.POSTCSS"})}),"\n",(0,r.jsxs)(e.td,{children:["对应 ",(0,r.jsx)(e.code,{children:"postcss-loader"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"chain_idplugin",children:["CHAIN_ID.PLUGIN",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#chain_idplugin",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["通过 ",(0,r.jsx)(e.code,{children:"PLUGIN.XXX"})," 可以匹配到对应的 plugin。"]}),"\n",(0,r.jsxs)(e.table,{children:["\n",(0,r.jsxs)(e.thead,{children:["\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.th,{children:"ID"}),"\n",(0,r.jsx)(e.th,{children:"描述"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.tbody,{children:["\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"PLUGIN.HTML"})}),"\n",(0,r.jsxs)(e.td,{children:["对应 ",(0,r.jsx)(e.code,{children:"HtmlPlugin"}),"，使用时需要拼接 entry 名称：",(0,r.jsx)(e.code,{children:"${PLUGIN.HTML}-${entryName}"})]}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"PLUGIN.APP_ICON"})}),"\n",(0,r.jsxs)(e.td,{children:["对应 ",(0,r.jsx)(e.code,{children:"AppIconPlugin"})]}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"PLUGIN.INLINE_HTML"})}),"\n",(0,r.jsxs)(e.td,{children:["对应 ",(0,r.jsx)(e.code,{children:"InlineChunkHtmlPlugin"})]}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"PLUGIN.BUNDLE_ANALYZER"})}),"\n",(0,r.jsxs)(e.td,{children:["对应 ",(0,r.jsx)(e.code,{children:"WebpackBundleAnalyzer"})]}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"PLUGIN.BOTTOM_TEMPLATE"})}),"\n",(0,r.jsxs)(e.td,{children:["对应 ",(0,r.jsx)(e.code,{children:"BottomTemplatePlugin"})]}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"PLUGIN.ASSETS_RETRY"})}),"\n",(0,r.jsxs)(e.td,{children:["对应 Builder 中的 webpack 静态资源重试插件 ",(0,r.jsx)(e.code,{children:"WebpackAssetsRetryPlugin"})]}),"\n"]}),"\n",(0,r.jsxs)(e.tr,{children:["\n",(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"PLUGIN.AUTO_SET_ROOT_SIZE"})}),"\n",(0,r.jsxs)(e.td,{children:["对应 Builder 中的自动设置根字体大小插件 ",(0,r.jsx)(e.code,{children:"AutoSetRootSizePlugin"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"常用-bundlerchain-使用示例",children:["常用 BundlerChain 使用示例",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#常用-bundlerchain-使用示例",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["BundlerChain 的使用可参考：",(0,r.jsx)(e.a,{href:"https://modernjs.dev/builder/guide/advanced/custom-webpack-config.html#%E4%BD%BF%E7%94%A8-webpack-chain",target:"_blank",rel:"noopener noreferrer",children:"常用 WebpackChain 使用示例"}),"。"]})]})}var i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,s.useMDXComponents)(),n.components).wrapper;return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(c,n)})):c(n)}},72551:function(n,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(n,e){for(var d in e)Object.defineProperty(n,d,{enumerable:!0,get:e[d]})}(e,{frontmatter:function(){return i},title:function(){return l},toc:function(){return h},default:function(){return a}});var r=d("9880"),s=d("23169"),c=d.ir(d("7691")),i={sidebar_label:"bundlerChain"},l="tools.bundlerChain",h=[];function t(n){var e=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,s.useMDXComponents)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"toolsbundlerchain",children:["tools.bundlerChain",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsbundlerchain",children:"#"})]}),"\n",(0,r.jsxs)(e.div,{className:"modern-directive tip",children:[(0,r.jsx)(e.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(e.div,{className:"modern-directive-content",children:(0,r.jsxs)(e.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,r.jsx)(e.a,{href:"https://modernjs.dev/builder/api/config-tools.html#toolsbundlerchain",target:"_blank",rel:"noopener noreferrer",children:"tools.bundlerChain"}),"。\n"]})})]}),"\n","\n",(0,r.jsx)(c.default,{})]})}var a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,s.useMDXComponents)(),n.components).wrapper;return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(t,n)})):t(n)}}}]);