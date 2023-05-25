(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_advanced-features_ssr_mdx"],{16395:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return a},title:function(){return i},toc:function(){return d},default:function(){return c}});var t=r("9880"),s=r("23169"),a={title:"Server-side rendering",sidebar_position:3},i="Server-side rendering",d=[{text:"SSR Data Fetch",depth:2,id:"ssr-data-fetch"},{text:"Keep Rendering Consistent",depth:2,id:"keep-rendering-consistent"},{text:"Concerned Memory Leaks",depth:2,id:"concerned-memory-leaks"},{text:"Crop SSR Data",depth:2,id:"crop-ssr-data"},{text:"Serverless Pre-render",depth:2,id:"serverless-pre-render"},{text:"Treeshaking",depth:2,id:"treeshaking"},{text:"Use Environment Variables",depth:3,id:"use-environment-variables"},{text:"Use File Suffix",depth:3,id:"use-file-suffix"},{text:"Independent File",depth:3,id:"independent-file"},{text:"Remote Request",depth:2,id:"remote-request"},{text:"Streaming SSR",depth:2,id:"streaming-ssr"},{text:"Return async data",depth:3,id:"return-async-data"},{text:"Render async data",depth:3,id:"render-async-data"},{text:"Error handling",depth:3,id:"error-handling"}];function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2",div:"div",ol:"ol",li:"li",strong:"strong",h3:"h3",ul:"ul"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"server-side-rendering",children:["Server-side rendering",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#server-side-rendering",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"In Modern.js, SSR also works out of the box. Developers do not need to write complex server level logic for SSR, nor do they need to care about the operation and maintenance of SSR, or create services. Modern.js have a comprehensive SSR degradation strategy to ensure that pages can run safely."}),"\n",(0,t.jsxs)(n.p,{children:["Enabling SSR is very easy, just set ",(0,t.jsx)(n.a,{href:"/configure/app/server/ssr",children:"'server.ssr'"})," to ",(0,t.jsx)(n.code,{children:"true"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:'import { defineConfig } from \'@modern-js/app-tools\';\n\nexport default defineConfig({\n  "server": {\n    "ssr": true,\n  },\n})\n'})}),"\n",(0,t.jsxs)(n.h2,{id:"ssr-data-fetch",children:["SSR Data Fetch",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ssr-data-fetch",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Modern.js provides Data Loader, which is convenient for developers to fetch data under SSR and CSR. Each routing module, such as ",(0,t.jsx)(n.code,{children:"layout.tsx"})," and ",(0,t.jsx)(n.code,{children:"page.tsx"}),", can define its own Data Loader:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="src/routes/page.loader.ts"',children:"export default () => {\n  return {\n    message: 'Hello World',\n  };\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["in the component, the data returned by the ",(0,t.jsx)(n.code,{children:"loader"})," function can be get data through the Hooks API:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"export default () => {\n  const data = useLoaderData();\n  return <div>{data.message}</div>;\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"Modern.js break the traditional SSR development model and provide users with a user-friendly SSR development experience."}),"\n",(0,t.jsx)(n.p,{children:"And it provides elegant degradation processing. Once the SSR request fails, it will automatically downgrade and restart the request on the browser side."}),"\n",(0,t.jsxs)(n.p,{children:["However, developers still need to pay attention to the fallback of data, such as ",(0,t.jsx)(n.code,{children:"null"})," values or data returns that do not as expect. Avoid React rendering errors or messy rendering results when SSR."]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive info",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:["\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"When you request the page on client-side page transitions, Modern.js sends an API request to the server, which runs Data Loader function."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["When using Data Loader, data fetching happens before rendering, Modern.js still supports fetching data when the component is rendered. See ",(0,t.jsx)(n.a,{href:"/guides/basic-features/data-fetch",children:"Data Fetch"}),"."]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,t.jsxs)(n.h2,{id:"keep-rendering-consistent",children:["Keep Rendering Consistent",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#keep-rendering-consistent",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["In some businesses, it is usually necessary to display different UI displays according to the current operating container environment characteristics, such as ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent",target:"_blank",rel:"noopener noreferrer",children:"UA"})," information."]}),"\n",(0,t.jsx)(n.p,{children:"If the processing is not careful enough, the rendering results may do not meet the expectations at this time."}),"\n",(0,t.jsx)(n.p,{children:"Here is an example to show the problem when SSR and CSR rendering are inconsistent, add the following code to the component:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"{\n  typeof window !== 'undefined' ? <div>browser content</div> : null;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"After starting the app, visit the page and will find that the browser console throws a warning message:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"Warning: Expected server HTML to contain a matching <div> in <div>.\n"})}),"\n",(0,t.jsx)(n.p,{children:"This is caused by the inconsistency between the rendering result and the SSR rendering result when React executes the hydrate logic on the client side. Although the page performs normally, in complex applications, it is likely to cause problems such as DOM hierarchy confusion and style confusion."}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive info",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsxs)(n.p,{children:["For hydrate logic, please refer to ",(0,t.jsx)(n.a,{href:"https://reactjs.org/docs/react-dom.html#hydrate",target:"_blank",rel:"noopener noreferrer",children:"here"}),"."]}),"\n"]})]}),"\n",(0,t.jsx)(n.p,{children:"Applications need to maintain the consistency of SSR and CSR rendering results. If there are inconsistencies, it means that this part of the content does not need to be rendered in SSR."}),"\n",(0,t.jsxs)(n.p,{children:["Modern.js provide ",(0,t.jsx)(n.a,{href:"/apis/app/runtime/core/use-runtime-context",children:(0,t.jsx)(n.code,{children:"<NoSSR>"})})," for such content that does not need to be rendered in SSR:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { NoSSR } from '@modern-js/runtime/ssr';\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Outside of elements that do not require SSR, wrap with a ",(0,t.jsx)(n.code,{children:"NoSSR"})," component:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"<NoSSR>\n  <div>client content</div>\n</NoSSR>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After modifying the code, refresh page found that the previous Waring disappeared. Open the Network window of the browser developer tool to see that the returned HTML document does not contain the content of the ",(0,t.jsx)(n.code,{children:"NoSSR"})," component package."]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive info",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/apis/app/runtime/core/use-runtime-context",children:"'useRuntimeContext'"})," can get complete request information, which can be used to ensure that the rendering results of SSR and CSR are consistent."]}),"\n"]})]}),"\n",(0,t.jsxs)(n.h2,{id:"concerned-memory-leaks",children:["Concerned Memory Leaks",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#concerned-memory-leaks",children:"#"})]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive warning",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsx)(n.p,{children:"In the SSR, developers need to pay special attention to the problem of memory leaks. Even small memory leaks can affect services.."}),"\n"]})]}),"\n",(0,t.jsx)(n.p,{children:"In SSR, every request triggers the component rendering. So, you need to avoid defining any potentially growing global data, or subscribing to events globally, or creating streams that will not be destroyed."}),"\n",(0,t.jsxs)(n.p,{children:["For example, the following code, when using ",(0,t.jsx)(n.a,{href:"https://redux-observable.js.org/",target:"_blank",rel:"noopener noreferrer",children:"redux-observable"}),", developers used to code like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { createEpicMiddleware, combineEpics } from 'redux-observable';\n\nconst epicMiddleware = createEpicMiddleware();\nconst rootEpic = combineEpics();\n\nexport default function Test() {\n  epicMiddleware.run(rootEpic);\n  return <div>Hello Modern.js</div>;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Create a Middleware instance ",(0,t.jsx)(n.code,{children:"epicMiddleware"})," outside the component and call epicMiddleware.run inside the component."]}),"\n",(0,t.jsxs)(n.p,{children:["On the browser side, this code does not cause any problems. But in SSR, the Middleware instance will never be destroyed. Every time the component is rendered and ",(0,t.jsx)(n.code,{children:"rootEpic"})," is called, new event bindings are added internally, causing the entire object to continue to grow larger, which ultimately affects application performance."]}),"\n",(0,t.jsx)(n.p,{children:"Such problems in CSR are not easy to detect, so when switching from CSR to SSR, if you are not sure whether the application has such hidden dangers, you can press the application."}),"\n",(0,t.jsxs)(n.h2,{id:"crop-ssr-data",children:["Crop SSR Data",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#crop-ssr-data",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"In order to keep the data requested in the SSR phase, it can be used directly on the browser side, Modern.js inject the data and state that collected during the rendering process into the HTML."}),"\n",(0,t.jsx)(n.p,{children:"As a result, CSR applications often have a large amount of interface data and the state of the components is not crop. If SSR is used directly, the rendered HTML size may be too large."}),"\n",(0,t.jsx)(n.p,{children:"At this time, SSR not only cannot bring an improvement in the user experience, but may have the opposite effect."}),"\n",(0,t.jsxs)(n.p,{children:["Therefore, when using SSR, ",(0,t.jsx)(n.strong,{children:"developers need to do reasonable weight loss for the application"}),":"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Pay attention to the first screen, you can only request the data needed for the first screen in SSR, and render the rest on the browser side."}),"\n",(0,t.jsx)(n.li,{children:"Removes the data independent with render from the data returned by the interface."}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"serverless-pre-render",children:["Serverless Pre-render",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#serverless-pre-render",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Modern.js provide Serverless Pre-rendering(SPR) to improve SSR performance."}),"\n",(0,t.jsx)(n.p,{children:"SPR uses pre-rendering and caching to provide the responsive performance of static Web for SSR pages. It allows SSR applications to have the responsiveness and stability of static Web pages, while keeping data dynamically updated."}),"\n",(0,t.jsxs)(n.p,{children:["Using SPR in the Modern.js is very simple, just add the ",(0,t.jsx)(n.code,{children:"<PreRender>"})," component, and the page where the component is located will automatically open SPR."]}),"\n",(0,t.jsxs)(n.p,{children:["This mock a component that uses the ",(0,t.jsx)(n.code,{children:"useLoaderData"})," API, and the request in the Data Loader takes 2s."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import { useLoaderData } from '@modern-js/runtime/router';\n\nexport const loader = async () => {\n  await new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve(null);\n    }, 2000);\n  });\n\n  return {\n    message: 'Hello Modern.js',\n  };\n};\n\nexport default () => {\n  const data = useLoaderData();\n  return <div>{data?.message}</div>;\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After executing the ",(0,t.jsx)(n.code,{children:"dev"})," command and opening the page, it is obvious that the page needs to wait 2s before returning."]}),"\n",(0,t.jsxs)(n.p,{children:["The next is to use the ",(0,t.jsx)(n.code,{children:"<PreRender>"})," component, which can be exported directly from ",(0,t.jsx)(n.code,{children:"@modern-js/runtime/ssr "}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { PreRender } from '@modern-js/runtime/ssr';\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"PreRender"})," component in the routing component and set the parameter ",(0,t.jsx)(n.code,{children:"interval"})," to indicate that the expiration time of the rendering result is 5s:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"<PreRender interval={5} />\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After modification, execute ",(0,t.jsx)(n.code,{children:"pnpm run build && pnpm run serve"})," to start the application and open the page."]}),"\n",(0,t.jsx)(n.p,{children:"When open page for the first time, it is no different from the previous rendering, and there is also a 2s delay."}),"\n",(0,t.jsx)(n.p,{children:"Refresh page, and the page opens instantly, but at this time, the page data has not changed due to the refresh, because the cache has not expired."}),"\n",(0,t.jsx)(n.p,{children:"Wait 5s, refresh the page again, the data of the page is still unchanged. Refresh the page again The data changes, but the page still responds almost instantaneously."}),"\n",(0,t.jsx)(n.p,{children:"This is because in the previous request, the SPR has asynchronously obtained the new rendering result in the background, and the page requested this time is the version that has been cached in the server."}),"\n",(0,t.jsxs)(n.p,{children:["It is conceivable that when ",(0,t.jsx)(n.code,{children:"interval"})," is set to 1, users can have the responsive experience of a static page."]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive info",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsxs)(n.p,{children:["For more detail, see ",(0,t.jsx)(n.a,{href:"/apis/app/runtime/ssr/pre-render",children:(0,t.jsx)(n.code,{children:"<PreRender>"})}),"."]}),"\n"]})]}),"\n",(0,t.jsxs)(n.h2,{id:"treeshaking",children:["Treeshaking",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#treeshaking",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"When SSR is enabled, Modern.js will use the same entry to build both the SSR Bundle and the CSR Bundle. Therefore, the Web API in the SSR Bundle, or the Node API in the CSR Bundle, can lead to runtime errors."}),"\n",(0,t.jsx)(n.p,{children:"Web API into a component is usually to do some global listening, or to get browser-related data, such as:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"document.addEventListener('load', () => {\n  console.log('document load');\n});\nconst App = () => {\n  return <div>Hello World</div>;\n};\nexport default App;\n"})}),"\n",(0,t.jsx)(n.p,{children:"The Node API is introduced in the component file, usually because of the use of Data Loader, for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import fse from 'fs-extra';\nexport default () => {\n  const file = fse.readFileSync('./myfile');\n  return {\n    ...\n  };\n};\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"use-environment-variables",children:["Use Environment Variables",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-environment-variables",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["For the first case, we can directly use Modern.js built-in environment variables ",(0,t.jsx)(n.code,{children:"MODERN_TARGET"})," to remove useless code at build time:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"if (process.env.MODERN_TARGET === 'browser') {\n  document.addEventListener('load', () => {\n    console.log('document load');\n  });\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"After packaging in the development environment, SSR and CSR artifacts will be compiled into the following content. Therefore, there will be no more errors due to Web API in the SSR environment:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// SSR production\nif (false) {\n}\n\n// CSR production\nif (true) {\n  document.addEventListener('load', () => {\n    console.log('document load');\n  });\n}\n"})}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive note",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsxs)(n.p,{children:["For more information, see ",(0,t.jsx)(n.a,{href:"/guides/basic-features/env-vars",children:"environment variables"}),"."]}),"\n"]})]}),"\n",(0,t.jsxs)(n.h3,{id:"use-file-suffix",children:["Use File Suffix",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-file-suffix",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["However, in the second case, for example, when ",(0,t.jsx)(n.code,{children:"fs-extra"})," is imported into the code, it internally uses the Node API with side effects. If it is directly referenced in the component, it will cause CSR loading errors."]}),"\n",(0,t.jsxs)(n.p,{children:["Env vars is not effective in this situation. Modern.js also supports distinguishing SSR Bundle and CSR Bundle packaging files through files with the ",(0,t.jsx)(n.code,{children:".node."})," suffix."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, the import of ",(0,t.jsx)(n.code,{children:"fs-extra"})," in the code, when it is directly referenced to the component, will cause the CSR to load an error. You can create ",(0,t.jsx)(n.code,{children:".ts"})," and ",(0,t.jsx)(n.code,{children:".node.ts"})," files of the same name as a layer of proxy:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="compat.ts"',children:"export const readFileSync: any = () => {};\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="compat.node.ts"',children:"export { readFileSync } from 'fs-extra';\n"})}),"\n",(0,t.jsxs)(n.p,{children:["use ",(0,t.jsx)(n.code,{children:"./compat"})," directly into the file. At this time, files with the ",(0,t.jsx)(n.code,{children:".node.ts"})," suffix will be used first in the SSR environment, and files with the ",(0,t.jsx)(n.code,{children:".ts"})," suffix will be used in the CSR environment."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="App.tsx"',children:"import { readFileSync } from './compat'\n\nexport const loader = () => {\n  const file = readFileSync('./myfile');\n  return {\n    ...\n  };\n};\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"independent-file",children:["Independent File",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#independent-file",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Both of the above methods can bring some mental burden to developers. In real business scenarios, we found that most of the mixed Node/Web code occurs in data requests."}),"\n",(0,t.jsxs)(n.p,{children:["Therefore, Modern.js developed a ",(0,t.jsx)(n.a,{href:"/guides/basic-features/data-fetch",children:"Data Fetch"})," to separate CSR and SSR code based on ",(0,t.jsx)(n.a,{href:"/guides/basic-features/routes",children:"Nested Routing"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["We can separate ",(0,t.jsx)(n.strong,{children:"data request"})," and ",(0,t.jsx)(n.strong,{children:"component code"})," by using independent files. Write component logic in ",(0,t.jsx)(n.code,{children:"routes/page.tsx"})," and data request logic in ",(0,t.jsx)(n.code,{children:"routes/page.loader.ts"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="routes/page.tsx"',children:"export default Page = () => {\n  return <div>Hello World<div>\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="routes/page.loader.tsx"',children:"import fse from 'fs-extra';\nexport default () => {\n  const file = fse.readFileSync('./myfile');\n  return {\n    ...\n  };\n}\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"remote-request",children:["Remote Request",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#remote-request",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["When initiating remote requests in SSR, developers sometimes use request tools. Some interfaces need to pass user cookies, which developers can get through the ",(0,t.jsx)(n.a,{href:"/guides/basic-features/data-fetch#route-loader",children:"'useRuntimeContext'"})," API to achieve."]}),"\n",(0,t.jsxs)(n.p,{children:["It should be noted, the request header of the HTML request is obtained, which may not be applicable to remote requests, so ",(0,t.jsx)(n.strong,{children:"must not"})," pass through all request headers."]}),"\n",(0,t.jsxs)(n.p,{children:["In addition, some backend interfaces, or general gateways, will verify according to the information in the request header, and full pass-through is prone to various problems that are difficult to debug. It is recommended that ",(0,t.jsx)(n.strong,{children:"pass-through on demand"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Be sure to filter the ",(0,t.jsx)(n.code,{children:"host"})," field if you really need to pass through all request headers."]}),"\n",(0,t.jsxs)(n.h2,{id:"streaming-ssr",children:["Streaming SSR",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#streaming-ssr",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Modern.js supports streaming rendering in React 18. Opt in it with the following configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:'import { defineConfig } from \'@modern-js/app-tools\';\n\nexport default defineConfig({\n  "server": {\n    "ssr": {\n      "mode": "stream",\n    },\n  },\n})\n'})}),"\n",(0,t.jsx)(n.p,{children:"The streaming SSR of Modern.js is implemented based on React Router, and the main APIs involved are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://reactrouter.com/en/main/utils/defer",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)(n.code,{children:"defer"})}),": This utility allows you to defer values returned from loaders by passing promises instead of resolved values."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://reactrouter.com/en/main/components/await",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)(n.code,{children:"Await"})}),": Used to render deferred values with automatic error handling."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://reactrouter.com/en/main/hooks/use-async-value",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)(n.code,{children:"useAsyncValue"})}),": Returns the resolved data from the nearest ",(0,t.jsx)(n.code,{children:"<Await>"})," ancestor component."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"return-async-data",children:["Return async data",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#return-async-data",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="page.loader.ts"',children:"import { defer, type LoaderFunctionArgs } from '@modern-js/runtime/router';\n\ninterface User {\n  name: string;\n  age: number;\n}\n\nexport interface Data {\n  data: User;\n}\n\nexport default ({ params }: LoaderFunctionArgs) => {\n  const userId = params.id;\n\n  const user = new Promise<User>(resolve => {\n    setTimeout(() => {\n      resolve({\n        name: `user-${userId}`,\n        age: 18,\n      });\n    }, 200);\n  });\n\n  return defer({ data: user });\n};\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"user"})," is of ",(0,t.jsx)(n.code,{children:"Promise"})," type, which means the data will be obtained asynchronously. Note that ",(0,t.jsx)(n.code,{children:"defer"})," must accept an object type parameter,\ntherefore, the parameter passed to ",(0,t.jsx)(n.code,{children:"defer"})," is ",(0,t.jsx)(n.code,{children:"{data: user}"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"defer"})," can also receive asynchronous data and synchronous data at the same time. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="page.loader.ts"',children:"\n// skip some codes\n\nexport default ({ params }: LoaderFunctionArgs) => {\n  const userId = params.id;\n\n  const user = new Promise<User>(resolve => {\n    setTimeout(() => {\n      resolve({\n        name: `user-${userId}`,\n        age: 18,\n      });\n    }, 200);\n  });\n\n  const otherData = new Promise<string>(resolve => {\n    setTimeout(() => {\n      resolve('some sync data');\n    }, 200);\n  });\n\n  return defer({\n    data: user,\n    other: await otherData\n  });\n};\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"await"})," is added before ",(0,t.jsx)(n.code,{children:"otherData"}),", so the data is obtained synchronously. It can be passed to ",(0,t.jsx)(n.code,{children:"defer"})," with the data ",(0,t.jsx)(n.code,{children:"user"})," at the same time."]}),"\n",(0,t.jsxs)(n.h3,{id:"render-async-data",children:["Render async data",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#render-async-data",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"Await"})," component to render the data returned asynchronously from the Data Loader. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",meta:'title="page.tsx"',children:"import { Await, useLoaderData } from '@modern-js/runtime/router';\nimport { Suspense } from 'react';\nimport type { Data } from './page.loader';\n\nconst Page = () => {\n  const data = useLoaderData() as Data;\n\n  return (\n    <div>\n      User info:\n      <Suspense fallback={<div id=\"loading\">loading user data ...</div>}>\n        <Await resolve={data.data}>\n          {(user) => {\n            return (\n              <div id=\"data\">\n                name: {user.name}, age: {user.age}\n              </div>\n            );\n          }}\n        </Await>\n      </Suspense>\n    </div>\n  );\n};\n\nexport default Page;\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Await"})," needs to be wrapped inside the ",(0,t.jsx)(n.code,{children:"Suspense"})," component. The ",(0,t.jsx)(n.code,{children:"resolve"})," of ",(0,t.jsx)(n.code,{children:"Await"})," passes in the data acquired asynchronously by the Data Loader. When the data acquisition is completed,\nthe obtained data is rendered through the ",(0,t.jsx)(n.a,{href:"https://reactjs.org/docs/render-props.html",target:"_blank",rel:"noopener noreferrer",children:"Render Props"})," mode. When the data acquisition is in pending status, the\ncontent set by the ",(0,t.jsx)(n.code,{children:"fallback"})," property of the ",(0,t.jsx)(n.code,{children:"Suspense"})," component will display."]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive warning",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"Warning"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsxs)(n.p,{children:["When importing a type from a Data Loader file, you need to use the ",(0,t.jsx)(n.code,{children:"import type"})," syntax to ensure that only type information is imported, which can prevent the Data Loader code from being packaged into the client bundle."]}),"\n",(0,t.jsxs)(n.p,{children:["So, here we import like this: ",(0,t.jsx)(n.code,{children:"import type { Data } from './page.loader'"}),";\n"]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["You can also get the asynchronous data returned by Data Loader through ",(0,t.jsx)(n.code,{children:"useAsyncValue"}),". For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",meta:'title="page.tsx"',children:"import { useAsyncValue } from '@modern-js/runtime/router';\n\n// skip some codes\n\nconst UserInfo = () => {\n  const user = useAsyncValue();\n\n  return (\n     <div>\n      name: {user.name}, age: {user.age}\n    </div>\n  )\n}\n\nconst Page = () => {\n  const data = useLoaderData() as Data;\n\n  return (\n    <div>\n      User info:\n      <Suspense fallback={<div id=\"loading\">loading user data ...</div>}>\n        <Await resolve={data.data}>\n          <UserInfo />\n        </Await>\n      </Suspense>\n    </div>\n  );\n};\n\nexport default Page;\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"error-handling",children:["Error handling",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#error-handling",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"errorElement"})," property of the ",(0,t.jsx)(n.code,{children:"Await"})," component can be used to handle errors thrown when the Data Loader executes or when a child component renders.\nFor example, we intentionally throw an error in the Data Loader function:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="page.loader.ts"',children:"import { defer } from '@modern-js/runtime/router';\n\nexport default () => {\n  const data = new Promise((resolve, reject) => {\n    setTimeout(() => {\n      reject(new Error('error occurs'));\n    }, 200);\n  });\n\n  return defer({ data });\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then use ",(0,t.jsx)(n.code,{children:"useAsyncError"})," to get the error, and assign the component used to render the error to the ",(0,t.jsx)(n.code,{children:"errorElement"})," property of the ",(0,t.jsx)(n.code,{children:"Await"})," component:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",meta:'title="page.ts"',children:"import { Await, useAsyncError, useLoaderData } from '@modern-js/runtime/router';\nimport { Suspense } from 'react';\n\nexport default function Page() {\n  const data = useLoaderData();\n\n  return (\n    <div>\n      Error page\n      <Suspense fallback={<div>loading ...</div>}>\n        <Await resolve={data.data} errorElement={<ErrorElement />}>\n          {(data: any) => {\n            return <div>never displayed</div>;\n          }}\n        </Await>\n      </Suspense>\n    </div>\n  );\n}\n\nfunction ErrorElement() {\n  const error = useAsyncError() as Error;\n  return <p>Something went wrong! {error.message}</p>;\n}\n"})}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive info",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"More"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:["\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://reactrouter.com/en/main/guides/deferred",target:"_blank",rel:"noopener noreferrer",children:"Deferred Data"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/reactwg/react-18/discussions/37",target:"_blank",rel:"noopener noreferrer",children:"New Suspense SSR Architecture in React 18"})}),"\n"]}),"\n"]})]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}}}]);