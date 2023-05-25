(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_guide_optimization_split-chunk_md"],{74535:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return t},title:function(){return c},toc:function(){return a},default:function(){return l}});var s=i("9880"),r=i("23169"),t={},c="Chunk Splitting Practice",a=[{text:"Splitting Strategies",depth:2,id:"splitting-strategies"},{text:"split-by-experience",depth:3,id:"split-by-experience"},{text:"Behavior",depth:4,id:"behavior"},{text:"Config",depth:4,id:"config"},{text:"split-by-module",depth:3,id:"split-by-module"},{text:"Behavior",depth:4,id:"behavior-1"},{text:"Config",depth:4,id:"config-1"},{text:"all-in-one",depth:3,id:"all-in-one"},{text:"Behavior",depth:4,id:"behavior-2"},{text:"Config",depth:4,id:"config-2"},{text:"single-vendor",depth:3,id:"single-vendor"},{text:"Behavior",depth:4,id:"behavior-3"},{text:"Config",depth:4,id:"config-3"},{text:"split-by-size",depth:3,id:"split-by-size"},{text:"Behavior",depth:4,id:"behavior-4"},{text:"Config",depth:4,id:"config-4"},{text:"Custom Splitting Strategy",depth:2,id:"custom-splitting-strategy"},{text:"Custom Group",depth:3,id:"custom-group"},{text:"Custom Bundler splitChunks Config",depth:3,id:"custom-bundler-splitchunks-config"}];function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",blockquote:"blockquote",ul:"ul",li:"li",code:"code",h3:"h3",h4:"h4",div:"div",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"chunk-splitting-practice",children:["Chunk Splitting Practice",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunk-splitting-practice",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"A great chunk splitting strategy is very important to improve the loading performance of the application. It can make full use of the browser's caching mechanism to reduce the number of requests and improve the loading speed of the application."}),"\n",(0,s.jsx)(n.p,{children:"A variety of chunk splitting strategies are built into Builder, which can meet the needs of most applications. You can also customize the chunk splitting config according to your own business scenarios."}),"\n",(0,s.jsxs)(n.h2,{id:"splitting-strategies",children:["Splitting Strategies",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#splitting-strategies",children:"#"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["The chunk splitting config of Builder is in ",(0,s.jsx)(n.a,{href:"/en/api/config-performance#performancechunksplit",children:"performance.chunkSplit"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Builder supports the following chunk splitting strategies:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"split-by-experience"}),": an empirical splitting strategy, automatically splits some commonly used npm packages into chunks of moderate size."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"split-by-module"}),": split by NPM package granularity, each NPM package corresponds to a chunk."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"split-by-size"}),": automatically split according to module size."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"all-in-one"}),": bundle all codes into one chunk."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"single-vendor"}),": bundle all NPM packages into a single chunk."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"custom"}),": custom chunk splitting strategy."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"split-by-experience",children:["split-by-experience",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#split-by-experience",children:"#"})]}),"\n",(0,s.jsxs)(n.h4,{id:"behavior",children:["Behavior",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#behavior",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Builder adopts the ",(0,s.jsx)(n.code,{children:"split-by-experience"})," strategy by default, which is a strategy we have developed from experience. Specifically, when the following npm packages are referenced in your project, they will automatically be split into separate chunks:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lib-polyfill.js"}),": includes ",(0,s.jsx)(n.code,{children:"core-js"}),", ",(0,s.jsx)(n.code,{children:"@babel/runtime"}),", ",(0,s.jsx)(n.code,{children:"@swc/helpers"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lib-react.js"}),": includes ",(0,s.jsx)(n.code,{children:"react"}),", ",(0,s.jsx)(n.code,{children:"react-dom"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lib-router.js"}),": includes ",(0,s.jsx)(n.code,{children:"react-router"}),", ",(0,s.jsx)(n.code,{children:"react-router-dom"}),", ",(0,s.jsx)(n.code,{children:"history"}),", ",(0,s.jsx)(n.code,{children:"@remix-run/router"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lib-lodash.js"}),": includes ",(0,s.jsx)(n.code,{children:"lodash"}),", ",(0,s.jsx)(n.code,{children:"lodash-es"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lib-antd.js"}),": includes ",(0,s.jsx)(n.code,{children:"antd"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lib-arco.js"}),": includes ",(0,s.jsx)(n.code,{children:"@arco-design/web-react"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lib-semi.js"}),": includes ",(0,s.jsx)(n.code,{children:"@douyinfe/semi-ui"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This strategy groups commonly used packages and then splits them into separate chunks. Generally, the number of chunks is not large, which is suitable for most applications and is also our recommended strategy."}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsx)(n.p,{children:"If the above npm packages are not installed or used in the project, the corresponding chunk will not be generated."})})]}),"\n",(0,s.jsxs)(n.h4,{id:"config",children:["Config",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-experience',\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"split-by-module",children:["split-by-module",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#split-by-module",children:"#"})]}),"\n",(0,s.jsxs)(n.h4,{id:"behavior-1",children:["Behavior",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#behavior-1",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Split each NPM package into a Chunk."}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive warning",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsx)(n.p,{children:"This strategy will split the node_modules in the most granular way, and at the same time, under HTTP/2, multiplexing will speed up the loading time of resources.However, in non-HTTP/2 environments, it needs to be used with caution because of HTTP head-of-line blocking problem."})})]}),"\n",(0,s.jsxs)(n.h4,{id:"config-1",children:["Config",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config-1",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-module',\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"all-in-one",children:["all-in-one",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#all-in-one",children:"#"})]}),"\n",(0,s.jsxs)(n.h4,{id:"behavior-2",children:["Behavior",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#behavior-2",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"This strategy puts business code and third-party dependencies in the same Chunk."}),"\n",(0,s.jsxs)(n.h4,{id:"config-2",children:["Config",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config-2",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'all-in-one',\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"single-vendor",children:["single-vendor",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#single-vendor",children:"#"})]}),"\n",(0,s.jsxs)(n.h4,{id:"behavior-3",children:["Behavior",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#behavior-3",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"This strategy puts third-party dependencies in one Chunk, and business code in another Chunk."}),"\n",(0,s.jsxs)(n.h4,{id:"config-3",children:["Config",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config-3",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'single-vendor',\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"split-by-size",children:["split-by-size",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#split-by-size",children:"#"})]}),"\n",(0,s.jsxs)(n.h4,{id:"behavior-4",children:["Behavior",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#behavior-4",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Under this strategy, after setting ",(0,s.jsx)(n.code,{children:"minSize"}),", ",(0,s.jsx)(n.code,{children:"maxSize"})," to a fixed value, Builder will automatically split them without extra config."]}),"\n",(0,s.jsxs)(n.h4,{id:"config-4",children:["Config",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config-4",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-size',\n      minSize: 30000,\n      maxSize: 50000,\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"custom-splitting-strategy",children:["Custom Splitting Strategy",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-splitting-strategy",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"In addition to using the built-in strategies, you can also customize the splitting strategy to meet more customization needs. Custom strategy is divided into two parts:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Custom group"}),"\n",(0,s.jsxs)(n.li,{children:["Custom bundler ",(0,s.jsx)(n.code,{children:"splitChunks"})," config"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"It is worth noting that these two custom capabilities can be used together with the built-in strategy, that is, you can use the built-in strategy to split commonly used packages, and then use the custom function to split other packages."}),"\n",(0,s.jsxs)(n.h3,{id:"custom-group",children:["Custom Group",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-group",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Builder supports custom group, which is more flexible than the built-in strategies, and simpler than writing bundler config."}),"\n",(0,s.jsxs)(n.p,{children:["For example, split the ",(0,s.jsx)(n.code,{children:"axios"})," library under node_modules into ",(0,s.jsx)(n.code,{children:"axios.js"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n   performance: {\n     chunkSplit: {\n       strategy: 'split-by-experience',\n       forceSplitting: {\n         axios: /node_modules\\/axios/,\n       },\n     },\n   },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Through ",(0,s.jsx)(n.code,{children:"forceSplitting"})," config, you can easily split some packages into a Chunk."]}),"\n",(0,s.jsxs)(n.h3,{id:"custom-bundler-splitchunks-config",children:["Custom Bundler ",(0,s.jsx)(n.code,{children:"splitChunks"})," Config",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-bundler-splitchunks-config",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["In addition to using custom grouping, you can also customize the native bundler config through ",(0,s.jsx)(n.code,{children:"override"}),", such as:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  performance: {\n    chunkSplit: {\n      strategy: 'split-by-experience',\n      override: {\n        chunks: 'all',\n        minSize: 30000,\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The config in ",(0,s.jsx)(n.code,{children:"override"})," will be merged with the bundler config. For specific config details, please refer to ",(0,s.jsx)(n.a,{href:"https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkschunks",target:"_blank",rel:"noopener noreferrer",children:"webpack - splitChunks"})," or ",(0,s.jsx)(n.a,{href:"https://rspack.dev/config/optimization.html#optimization-splitchunks",target:"_blank",rel:"noopener noreferrer",children:"Rspack - splitChunks"}),"."]})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}}}]);