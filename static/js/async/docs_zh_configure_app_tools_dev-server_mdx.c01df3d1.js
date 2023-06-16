(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_tools_dev-server_mdx"],{17703:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});var s=r("9880"),d=r("23169");function l(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",h4:"h4",pre:"pre"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"Object"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["通过 ",(0,s.jsx)(n.code,{children:"tools.devServer"})," 可以修改开发环境服务器的配置。"]}),"\n",(0,s.jsxs)(n.h3,{id:"选项",children:["选项",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#选项",children:"#"})]}),"\n",(0,s.jsxs)(n.h4,{id:"after",children:["after",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#after",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"Array"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"添加自定义中间件，在所有开发环境中间件后执行。"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    devServer: {\n      after: [\n        async (req, res, next) => {\n          console.log('after dev middleware');\n          next();\n        },\n      ],\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"webpack-dev-server"})," 使用 Express 作为服务端框架。Modern.js 中没有使用任何框架，上述中间件中 ",(0,s.jsx)(n.code,{children:"req"})," 和 ",(0,s.jsx)(n.code,{children:"res"})," 都是 Node 原生对象，因此 ",(0,s.jsx)(n.code,{children:"webpack-dev-server"})," 的 Express 中间件不一定能直接在 Modern.js 中使用。"]}),"\n",(0,s.jsxs)(n.p,{children:["如果要迁移 ",(0,s.jsx)(n.code,{children:"webpack-dev-server"})," 中使用的 Express 中间件，可以使用以下方式，将 Express app 作为中间件传入："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import expressMiddleware from 'my-express-middleware';\nimport express from 'express';\n\n// 初始化 Express app\nconst app = express();\napp.use(expressMiddleware);\n\nexport default {\n  tools: {\n    devServer: {\n      after: [app],\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"before",children:["before",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#before",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"Array"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"添加自定义中间件，在所有开发环境中间件前执行。"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    devServer: {\n      before: [\n        async (req, res, next) => {\n          console.log('before dev middleware');\n          next();\n        },\n      ],\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"client",children:["client",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#client",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"{\n    /** 指定协议名称 */\n    protocol?: string;\n    /** 事件流路径 */\n    path?: string;\n    /** 指定监听请求的端口号 */\n    port?: string;\n    /** 指定要使用的 host */\n    host?: string;\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"默认值："})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const defaultConfig = {\n  path: '/webpack-hmr',\n  // By default it is set to the port number of the dev server\n  port: '',\n  // By default it is set to \"location.hostname\"\n  host: '',\n  // By default it is set to \"location.protocol === 'https:' ? 'wss' : 'ws'\"\"\n  protocol: '',\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"对应 HMR 客户端的配置，通常用于设置 HMR 对应的 WebSocket URL。"}),"\n",(0,s.jsxs)(n.h4,{id:"compress",children:["compress",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#compress",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"是否对静态资源启用 gzip 压缩。"}),"\n",(0,s.jsxs)(n.p,{children:["如果你需要禁用 gzip 压缩，可以将 ",(0,s.jsx)(n.code,{children:"compress"})," 设置为 ",(0,s.jsx)(n.code,{children:"false"}),"："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default {\n  tools: {\n    devServer: {\n      compress: false,\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"devmiddleware",children:["devMiddleware",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#devmiddleware",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"{\n  writeToDisk: boolean | ((filename: string) => boolean);\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"默认值："})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"{\n  writeToDisk: (file: string) => !file.includes('.hot-update.'),\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["devMiddleware 配置项。当前配置是 ",(0,s.jsx)(n.a,{href:"https://github.com/webpack/webpack-dev-middleware",target:"_blank",rel:"noopener noreferrer",children:"webpack-dev-middleware"})," 配置项的子集."]}),"\n",(0,s.jsxs)(n.h4,{id:"headers",children:["headers",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#headers",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"Record<string, string>"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"设置自定义响应头。"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    devServer: {\n      headers: {\n        'X-Custom-Foo': 'bar',\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"historyapifallback",children:["historyApiFallback",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#historyapifallback",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"boolean | ConnectHistoryApiFallbackOptions"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["在需要对一些 404 响应或其他请求提供替代页面的场景，可通过 ",(0,s.jsx)(n.code,{children:"devServer.historyApiFallback"})," 进行设置："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    devServer: {\n      historyApiFallback: true,\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["更多选项和详细信息可参考 ",(0,s.jsx)(n.a,{href:"https://github.com/bripkens/connect-history-api-fallback",target:"_blank",rel:"noopener noreferrer",children:"connect-history-api-fallback"})," 文档。"]}),"\n",(0,s.jsxs)(n.h4,{id:"hot",children:["hot",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hot",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["是否开启 ",(0,s.jsx)(n.a,{href:"https://webpack.js.org/concepts/hot-module-replacement/",target:"_blank",rel:"noopener noreferrer",children:"Hot Module Replacement"})," 热更新能力。"]}),"\n",(0,s.jsxs)(n.h4,{id:"https",children:["https",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#https",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"boolean | { key: string; cert: string }"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["默认情况下，DevServer 会启用 HTTP 服务器。通过设置 ",(0,s.jsx)(n.code,{children:"devServer.https"})," 为 ",(0,s.jsx)(n.code,{children:"true"})," 将开启对 HTTPS 的支持，同时会禁用 HTTP 服务器。"]}),"\n",(0,s.jsx)(n.p,{children:"你也可以手动传入 HTTPS 服务器所需要的证书和对应的私钥："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    devServer: {\n      https: {\n        key: fs.readFileSync('certificates/private.pem'),\n        cert: fs.readFileSync('certificates/public.pem'),\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"livereload",children:["liveReload",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#livereload",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["默认情况下，当监听到文件变化时，DevServer 将会刷新页面（为使 liveReload 能够生效，",(0,s.jsx)(n.code,{children:"devServer.hot"})," 配置项应当禁用）。通过设置 ",(0,s.jsx)(n.code,{children:"devServer.liveReload"})," 为 ",(0,s.jsx)(n.code,{children:"false"})," 可以关闭该行为。"]}),"\n",(0,s.jsxs)(n.h4,{id:"setupmiddlewares",children:["setupMiddlewares",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#setupmiddlewares",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"类型："})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"Array<\n  (\n    middlewares: {\n      unshift: (...handlers: RequestHandler[]) => void;\n      push: (...handlers: RequestHandler[]) => void;\n    },\n    server: {\n      sockWrite: (\n        type: string,\n        data?: string | boolean | Record<string, any>,\n      ) => void;\n    },\n  ) => void\n>;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"提供执行自定义函数和应用自定义中间件的能力。"}),"\n",(0,s.jsxs)(n.p,{children:["几种不同中间件之间的执行顺序是: ",(0,s.jsx)(n.code,{children:"devServer.before"})," => ",(0,s.jsx)(n.code,{children:"unshift"})," => 内置中间件 => ",(0,s.jsx)(n.code,{children:"push"})," => ",(0,s.jsx)(n.code,{children:"devServer.after"}),"。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    devServer: {\n      setupMiddlewares: [\n        (middlewares, server) => {\n          middlewares.unshift((req, res, next) => {\n            next();\n          });\n\n          middlewares.push((req, res, next) => {\n            next();\n          });\n        },\n      ],\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"一些特殊场景需求可能需要使用服务器 API："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'sockWrite。允许向 hmr 客户端传递一些消息，hmr 客户端将根据接收到的消息类型进行不同的处理。如果你发送一个 "content-changed " 的消息，页面将会重新加载。'}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    devServer: {\n      setupMiddlewares: [\n        (middlewares, server) => {\n          // 添加自定义 watcher 并在文件更新时触发页面刷新\n          watcher.on('change', changed => {\n            server.sockWrite('content-changed');\n          });\n        },\n      ],\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"proxy",children:["proxy",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#proxy",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"Record<string, string> | Record<string, ProxyDetail>"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"代理请求到指定的服务上。"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    devServer: {\n      proxy: {\n        '/api': 'http://localhost:3000',\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["此时，/api/users 请求将会代理到 ",(0,s.jsx)(n.a,{href:"http://localhost:3000/api/users%E3%80%82",target:"_blank",rel:"noopener noreferrer",children:"http://localhost:3000/api/users。"})]}),"\n",(0,s.jsxs)(n.p,{children:["如果你不想传递 /api，可以通过 ",(0,s.jsx)(n.code,{children:"pathRewrite"})," 重写请求路径："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  tools: {\n    devServer: {\n      proxy: {\n        '/api': {\n          target: 'http://localhost:3000',\n          pathRewrite: { '^/api': '' },\n        },\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["DevServer Proxy 基于 ",(0,s.jsx)(n.a,{href:"https://github.com/chimurai/http-proxy-middleware/tree/2.x",target:"_blank",rel:"noopener noreferrer",children:"http-proxy-middleware"})," 实现。你可以使用 http-proxy-middleware 的所有配置项，具体可以查看文档。"]}),"\n",(0,s.jsx)(n.p,{children:"DevServer Proxy 完整类型定义为："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import type { Options as HttpProxyOptions } from 'http-proxy-middleware';\n\ntype ProxyDetail = HttpProxyOptions & {\n  bypass?: (\n    req: IncomingMessage,\n    res: ServerResponse,\n    proxyOptions: ProxyOptions,\n  ) => string | undefined | null | false;\n  context?: string | string[];\n};\n\ntype ProxyOptions =\n  | Record<string, string>\n  | Record<string, ProxyDetail>\n  | ProxyDetail[]\n  | ProxyDetail;\n"})}),"\n",(0,s.jsx)(n.p,{children:"除了 http-proxy-middleware 的选项外，还支持 bypass 和 context 两个配置项："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["bypass：根据函数的返回值绕过代理。","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["返回 ",(0,s.jsx)(n.code,{children:"null"})," 或 ",(0,s.jsx)(n.code,{children:"undefined"})," 会继续用代理处理请求。"]}),"\n",(0,s.jsxs)(n.li,{children:["返回 ",(0,s.jsx)(n.code,{children:"false"})," 会返回 404 错误。"]}),"\n",(0,s.jsx)(n.li,{children:"返回一个具体的服务路径，将会使用此路径替代原请求路径。"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"context：如果你想代理多个特定的路径到同一个目标，你可以使用 context 配置项。"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// 自定义 bypass 方法\nexport default {\n  tools: {\n    devServer: {\n      proxy: {\n        '/api': {\n          target: 'http://localhost:3000',\n          bypass: function (req, res, proxyOptions) {\n            if (req.headers.accept.indexOf('html') !== -1) {\n              console.log('Skipping proxy for browser request.');\n              return '/index.html';\n            }\n          },\n        },\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// 代理多个路径到同一个目标\nexport default {\n  tools: {\n    devServer: {\n      proxy: [\n        {\n          context: ['/auth', '/api'],\n          target: 'http://localhost:3000',\n        },\n      ],\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"watch",children:["watch",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#watch",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["是否监听 ",(0,s.jsx)(n.code,{children:"mock/"}),"、",(0,s.jsx)(n.code,{children:"server/"}),"、",(0,s.jsx)(n.code,{children:"api/"})," 等目录的文件变化。"]})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},33329:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return c},toc:function(){return a},default:function(){return t}});var s=r("9880"),d=r("23169"),l=r.ir(r("17703")),i={sidebar_label:"devServer"},c="tools.devServer",a=[];function o(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,d.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"toolsdevserver",children:["tools.devServer",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#toolsdevserver",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-tools.html#toolsdevserver",target:"_blank",rel:"noopener noreferrer",children:"tools.devServer"}),"。\n"]})})]}),"\n","\n",(0,s.jsx)(l.default,{})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}}}]);