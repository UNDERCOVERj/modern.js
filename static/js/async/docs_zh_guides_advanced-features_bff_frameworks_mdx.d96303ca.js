(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_advanced-features_bff_frameworks_mdx"],{14564:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return a},title:function(){return c},toc:function(){return o},default:function(){return i}});var r=s("9880"),t=s("23169"),a={sidebar_position:3,title:"运行时框架"},c="运行时框架",o=[{text:"函数写法",depth:2,id:"函数写法"},{text:"框架写法",depth:2,id:"框架写法"},{text:"Express",depth:3,id:"express"},{text:"Koa",depth:3,id:"koa"}];function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",pre:"pre",img:"img",h3:"h3",div:"div"},(0,t.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"运行时框架",children:["运行时框架",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#运行时框架",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js 的 BFF 支持不同的运行时框架，当前 Modern.js 的 BFF 支持两种运行时框架 ",(0,r.jsx)(n.a,{href:"https://expressjs.com/",target:"_blank",rel:"noopener noreferrer",children:"Express.js"})," 和 ",(0,r.jsx)(n.a,{href:"https://koajs.com/",target:"_blank",rel:"noopener noreferrer",children:"Koa.js"}),"。"]}),"\n",(0,r.jsxs)(n.h2,{id:"函数写法",children:["函数写法",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#函数写法",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["在函数写法下，各类运行时框架仅中间件写法存在差异，其他实现基本相同。这里以 Express 为例，介绍如何在 ",(0,r.jsx)(n.code,{children:"api/_app.ts"})," 中，手写一个中间件，添加权限校验："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { hook } from '@modern-js/runtime/server';\nimport { Request, Response, NextFunction } from 'express';\n\nexport default hook(({ addMiddleware }) => {\n  addMiddleware(async (req: Request, res: Response, next: NextFunction) => {\n    if (req.url !== '/api/login') {\n      const sid = req?.cookies?.sid;\n      if (!sid) {\n        res.status(400);\n        res.json({ code: -1, message: 'need login' });\n      } else {\n        next();\n      }\n    } else {\n      next();\n    }\n  });\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["然后添加一个普通的 BFF 函数 ",(0,r.jsx)(n.code,{children:"/api/hello.ts"}),"："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default async () => {\n  return 'Hello Modern.js';\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["最后在前端 ",(0,r.jsx)(n.code,{children:"src/App.tsx"})," 添加接口的访问代码，直接使用一体化的方式调用："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { useState, useEffect } from 'react';\nimport { get as hello } from '@api/hello';\n\nexport default () => {\n  const [text, setText] = useState('');\n\n  useEffect(() => {\n    async function fetchMyApi() {\n      const { message } = await hello();\n      setText(message);\n    }\n\n    fetchMyApi();\n  }, []);\n\n  return <p>{text}</p>;\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["然后 ",(0,r.jsx)(n.code,{children:"pnpm run dev"})," 启动项目，访问 ",(0,r.jsx)(n.code,{children:"http://localhost:8080/"})," 会发现 ",(0,r.jsx)(n.code,{children:"/api/hello"})," 的请求被拦截了："]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/network2.png",alt:"Network"})}),"\n",(0,r.jsxs)(n.p,{children:["最后再修改前端代码 ",(0,r.jsx)(n.code,{children:"src/App.tsx"}),"，在访问 ",(0,r.jsx)(n.code,{children:"/api/hello"})," 前先调用登录接口："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { useState, useEffect } from 'react';\nimport { get as hello } from '@api/hello';\nimport { post as login } from '@api/login';\n\nexport default () => {\n  const [text, setText] = useState('');\n\n  useEffect(() => {\n    async function fetchAfterLogin() {\n      const { code } = await login();\n      if (code === 0) {\n        const { message } = await hello();\n        setText(message);\n      }\n    }\n    fetchAfterLogin();\n  }, []);\n\n  return <p>{text}</p>;\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["刷新页面，可以看到 ",(0,r.jsx)(n.code,{children:"/api/hello"})," 访问成功："]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/network3.png",alt:"Network"})}),"\n",(0,r.jsxs)(n.p,{children:["以上代码模拟了在 ",(0,r.jsx)(n.code,{children:"/api/_app.ts"})," 中添加中间件的方式，实现了简易的登录功能。同样，可以在这个钩子文件中实现其他功能来扩展 BFF Server。"]}),"\n",(0,r.jsxs)(n.h2,{id:"框架写法",children:["框架写法",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#框架写法",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["框架写法下，Modern.js 不会收集 ",(0,r.jsx)(n.code,{children:"api/_app.ts"})," 中的中间件，运行流程由插件自行控制。"]}),"\n",(0,r.jsxs)(n.h3,{id:"express",children:["Express",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#express",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Express 的框架写法支持可在 ",(0,r.jsx)(n.code,{children:"api/app.[tj]s"})," 定义 API Server 的启动逻辑，执行应用的初始化工作，添加全局中间件，声明路由，甚至扩展原有框架等。"]}),"\n",(0,r.jsxs)(n.p,{children:["BFF 函数定义的路由会在 ",(0,r.jsx)(n.code,{children:"app.ts"})," 文件定义的路由之后注册，所以在这里你也可以拦截 BFF 函数定义的路由，进行预处理或是提前响应。"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="api/app.ts"',children:"import express from 'express';\n\nconst app = express();\n\napp.put('/user', function (req, res) {\n  res.send('Got a PUT request at /user');\n});\n\napp.use(async (req, res, next) => {\n  console.info(`access url: ${req.url}`);\n  next();\n});\n\nexport default app;\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"koa",children:["Koa",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#koa",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Koa 框架写法与 Express 类似，支持在 ",(0,r.jsx)(n.code,{children:"app.[tj]s"})," 定义 API Server 的启动逻辑，执行应用的初始化工作，添加全局中间件，声明路由，扩展原有框架等。"]}),"\n",(0,r.jsxs)(n.p,{children:["BFF 函数定义的路由会在 ",(0,r.jsx)(n.code,{children:"app.ts"})," 文件定义的路由之后注册，所以在这里你也可以拦截 BFF 函数定义的路由，进行预处理或是提前响应。"]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive caution",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"注意"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:["在框架写法下，当没有 ",(0,r.jsx)(n.code,{children:"app.ts"})," 的时候，Modern.js 默认会添加 ",(0,r.jsx)(n.code,{children:"koa-body"}),"；当有 ",(0,r.jsx)(n.code,{children:"app.ts"})," 时，如果开发者希望使用带有 Body 的 BFF 函数，需要确保 ",(0,r.jsx)(n.code,{children:"koa-body"})," 中间件已经添加。"]}),"\n"]})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:"title=api/app.ts",children:"import koa from 'koa';\n\nconst app = new Koa();\n\napp.put('/user', function (req, res) {\n  res.send('Got a PUT request at /user');\n});\n\napp.use(async (ctx, next) => {\n  console.info(`access url: ${ctx.url}`);\n  await next();\n});\n\nexport default app;\n"})})]})}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}}}]);