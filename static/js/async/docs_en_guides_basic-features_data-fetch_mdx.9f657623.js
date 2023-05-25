(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_basic-features_data-fetch_mdx"],{39517:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return o},title:function(){return a},toc:function(){return d},default:function(){return c}});var t=r("9880"),s=r("23169"),o={title:"Data Fetching",sidebar_position:3},a="Data Fetching",d=[{text:"Data Loader (Recommended)",depth:2,id:"data-loader-(recommended)"},{text:"Basic Example",depth:3,id:"basic-example"},{text:"The loader Function",depth:3,id:"the-loader-function"},{text:"params",depth:4,id:"params"},{text:"request",depth:4,id:"request"},{text:"Return Value",depth:4,id:"return-value"},{text:"Request API",depth:3,id:"request-api"},{text:"Error Handling",depth:3,id:"error-handling"},{text:"Get data from parent component",depth:3,id:"get-data-from-parent-component"},{text:"(WIP)Loading UI",depth:3,id:"(wip)loading-ui"},{text:"Incorrect usage",depth:3,id:"incorrect-usage"},{text:"FAQ",depth:3,id:"faq"},{text:"useLoader (old version)",depth:2,id:"useloader-(old-version)"}];function i(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",div:"div",h3:"h3",pre:"pre",h4:"h4",ol:"ol",li:"li",strong:"strong"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"data-fetching",children:["Data Fetching",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#data-fetching",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Modern.js provides out-of-the-box data fetching capabilities, allowing developers to develop in an isomorphic way in both client-side and server-side code."}),"\n",(0,t.jsx)(n.p,{children:"It should be noted that these APIs do not help applications initiate requests, but rather help developers better manage data and improve project performance."}),"\n",(0,t.jsxs)(n.h2,{id:"data-loader-(recommended)",children:["Data Loader (Recommended)",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#data-loader-(recommended)",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Modern.js recommends using ",(0,t.jsx)(n.a,{href:"/guides/basic-features/routes",children:"conventional routing"})," for routing management. Through Modern.js's ",(0,t.jsx)(n.a,{href:"/guides/basic-features/routes#conventional-routing",children:"conventional (nested) routing"}),", each routing component (",(0,t.jsx)(n.code,{children:"layout.ts"})," or ",(0,t.jsx)(n.code,{children:"page.ts"}),") can have a same-named ",(0,t.jsx)(n.code,{children:"loader"})," file. The ",(0,t.jsx)(n.code,{children:"loader"})," file needs to export a function that will be executed before the component is rendered to provide data for the routing component."]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive info",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsxs)(n.p,{children:["Modern.js v1 supports fetching data via ",(0,t.jsx)(n.a,{href:"/guides/basic-features/data-fetch#useloader-(old-version)",children:"useLoader"}),", which is no longer the recommended usage. We do not recommend mixing the two except during the migration process."]}),"\n"]})]}),"\n",(0,t.jsxs)(n.h3,{id:"basic-example",children:["Basic Example",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#basic-example",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Routing components such as ",(0,t.jsx)(n.code,{children:"layout.ts"})," or ",(0,t.jsx)(n.code,{children:"page.ts"})," can define a same-named ",(0,t.jsx)(n.code,{children:"loader"})," file. The function exported by the ",(0,t.jsx)(n.code,{children:"loader"})," file provides the data required by the component, and then the data is obtained in the routing component through the ",(0,t.jsx)(n.code,{children:"useLoaderData"})," function, as shown in the following example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:".\n└── routes\n    ├── layout.tsx\n    └── user\n        ├── layout.tsx\n        ├── layout.loader.ts\n        ├── page.tsx\n        └── page.loader.ts\n"})}),"\n",(0,t.jsx)(n.p,{children:"Define the following code in the file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="routes/user/page.tsx"',children:"import { useLoaderData } from '@modern-js/runtime/router';\nimport type { ProfileData } from './page.loader.ts';\n\nexport default function UserPage() {\n  const profileData = useLoaderData() as ProfileData;\n  return <div>{profileData}</div>;\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="routes/user/page.loader.ts"',children:"export type ProfileData = {\n  /*  some types */\n};\n\nexport default async (): Promise<ProfileData> => {\n  const res = await fetch('https://api/user/profile');\n  return await res.json();\n};\n"})}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive caution",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"CAUTION"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsxs)(n.p,{children:["Here, routing components and ",(0,t.jsx)(n.code,{children:"loader"})," files share a type, so the ",(0,t.jsx)(n.code,{children:"import type"})," syntax should be used."]}),"\n"]})]}),"\n",(0,t.jsxs)(n.p,{children:["In the CSR environment, the ",(0,t.jsx)(n.code,{children:"loader"})," function is executed on the client and can use browser APIs (although it is not necessary and not recommended)."]}),"\n",(0,t.jsxs)(n.p,{children:["In the SSR environment, whether it is the first screen or client navigation, the ",(0,t.jsx)(n.code,{children:"loader"})," function will only be executed on the server, and any Node.js API can be called here. Also, any dependencies and code used here will not be included in the client's bundle."]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive info",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsxs)(n.p,{children:["In future versions, Modern.js may support running the ",(0,t.jsx)(n.code,{children:"loader"})," function on the server in the CSR environment to improve performance and security. Therefore, it is recommended to ensure that the ",(0,t.jsx)(n.code,{children:"loader"})," function is as pure as possible and only used for data fetching scenarios."]}),"\n"]})]}),"\n",(0,t.jsxs)(n.p,{children:["When navigating on the client based on Modern.js's ",(0,t.jsx)(n.a,{href:"/guides/basic-features/routes",children:"conventional routing"}),", all ",(0,t.jsx)(n.code,{children:"loader"})," functions will be executed in parallel (requested). That is, when accessing ",(0,t.jsx)(n.code,{children:"/user/profile"}),", the loader functions under ",(0,t.jsx)(n.code,{children:"/user"})," and ",(0,t.jsx)(n.code,{children:"/user/profile"})," will be executed in parallel (requested) to improve the performance of the client."]}),"\n",(0,t.jsxs)(n.h3,{id:"the-loader-function",children:["The ",(0,t.jsx)(n.code,{children:"loader"})," Function",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#the-loader-function",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"loader"})," function has two input parameters:"]}),"\n",(0,t.jsxs)(n.h4,{id:"params",children:[(0,t.jsx)(n.code,{children:"params"}),(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#params",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["When the route file is accessed through ",(0,t.jsx)(n.code,{children:"[]"}),", it is used as ",(0,t.jsx)(n.a,{href:"/guides/basic-features/routes#dynamic-routing",children:"dynamic routing"}),", and the dynamic routing fragment is passed as a parameter to the ",(0,t.jsx)(n.code,{children:"loader"})," function:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"// routes/user/[id]/page.loader.tsx\nimport { LoaderFunctionArgs } from '@modern-js/runtime/router';\n\nexport default async ({ params }: LoaderFunctionArgs) => {\n  const { id } = params;\n  const res = await fetch(`https://api/user/${id}`);\n  return res.json();\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When accessing ",(0,t.jsx)(n.code,{children:"/user/123"}),", the parameter of the ",(0,t.jsx)(n.code,{children:"loader"})," function is ",(0,t.jsx)(n.code,{children:"{ params: { id: '123' } }"}),"."]}),"\n",(0,t.jsxs)(n.h4,{id:"request",children:[(0,t.jsx)(n.code,{children:"request"}),(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#request",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"request"})," is a ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Request",target:"_blank",rel:"noopener noreferrer",children:"Fetch Request"})," instance."]}),"\n",(0,t.jsxs)(n.p,{children:["A common usage scenario is to get query parameters through ",(0,t.jsx)(n.code,{children:"request"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"// routes/user/[id]/page.loader.ts\nimport { LoaderFunctionArgs } from '@modern-js/runtime/router';\n\nexport default async ({ request }: LoaderFunctionArgs) => {\n  const url = new URL(request.url);\n  const userId = url.searchParams.get('id');\n  return queryUser(userId);\n};\n"})}),"\n",(0,t.jsxs)(n.h4,{id:"return-value",children:["Return Value",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#return-value",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["The return value of the ",(0,t.jsx)(n.code,{children:"loader"})," function can be any serializable content or a ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Response",target:"_blank",rel:"noopener noreferrer",children:"Fetch Response"})," instance:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"const loader = async (): Promise<ProfileData> => {\n  return {\n    message: 'hello world',\n  };\n};\nexport default loader;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["By default, the ",(0,t.jsx)(n.code,{children:"Content-type"})," of the response returned by the ",(0,t.jsx)(n.code,{children:"loader"})," is ",(0,t.jsx)(n.code,{children:"application/json"}),", and the ",(0,t.jsx)(n.code,{children:"status"})," is 200. You can customize the ",(0,t.jsx)(n.code,{children:"Response"})," to set it:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"const loader = async (): Promise<ProfileData> => {\n  const data = { message: 'hello world' };\n  return new Response(JSON.stringify(data), {\n    status: 200,\n    headers: {\n      'Content-Type': 'application/json; utf-8',\n    },\n  });\n};\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"request-api",children:["Request API",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#request-api",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Modern.js provides a polyfill for the ",(0,t.jsx)(n.code,{children:"fetch"})," API to make requests. This API is consistent with the browser's ",(0,t.jsx)(n.code,{children:"fetch"})," API, but can also be used to make requests on the server. This means that whether it is CSR or SSR, a unified ",(0,t.jsx)(n.code,{children:"fetch"})," API can be used to get data:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"function loader() {\n  const res = await fetch('https://api/user/profile');\n}\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"error-handling",children:["Error Handling",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#error-handling",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"loader"})," function, errors can be handled by throwing an ",(0,t.jsx)(n.code,{children:"error"})," or a ",(0,t.jsx)(n.code,{children:"response"}),". When an error is thrown in the ",(0,t.jsx)(n.code,{children:"loader"})," function, Modern.js will stop executing the code in the current ",(0,t.jsx)(n.code,{children:"loader"})," and switch the front-end UI to the defined ",(0,t.jsx)(n.a,{href:"/guides/basic-features/routes#error-handling",children:(0,t.jsx)(n.code,{children:"ErrorBoundary"})})," component:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"// routes/user/profile/page.loader.tsx\nexport default async function loader() {\n  const res = await fetch('https://api/user/profile');\n  if (!res.ok) {\n    throw res;\n  }\n  return res.json();\n}\n\n// routes/user/profile/error.tsx\nimport { useRouteError } from '@modern-js/runtime/router';\nconst ErrorBoundary = () => {\n  const error = useRouteError() as Response;\n  return (\n    <div>\n      <h1>{error.status}</h1>\n      <h2>{error.statusText}</h2>\n    </div>\n  );\n};\n\nexport default ErrorBoundary;\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"get-data-from-parent-component",children:["Get data from parent component",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#get-data-from-parent-component",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["In many cases, child components need to access data in the parent component ",(0,t.jsx)(n.code,{children:"loader"}),". You can easily get the data from the parent component using ",(0,t.jsx)(n.code,{children:"useRouteLoaderData"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"// routes/user/profile/page.tsx\nimport { useRouteLoaderData } from '@modern-js/runtime/router';\n\nexport default function UserLayout() {\n  // Get the data returned by the loader in routes/user/layout.loader.ts\n  const data = useRouteLoaderData('user/layout');\n  return (\n    <div>\n      <h1>{data.name}</h1>\n      <h2>{data.age}</h2>\n    </div>\n  );\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"useRouteLoaderData"})," function accepts a parameter ",(0,t.jsx)(n.code,{children:"routeId"}),". When using ",(0,t.jsx)(n.a,{href:"/guides/basic-features/routes",children:"conventional routing"}),", Modern.js will automatically generate the ",(0,t.jsx)(n.code,{children:"routeId"})," for you. The value of ",(0,t.jsx)(n.code,{children:"routeId"})," is the path of the corresponding component relative to ",(0,t.jsx)(n.code,{children:"src/routes"}),". For example, in the above example, if the child component wants to get the data returned by the loader in ",(0,t.jsx)(n.code,{children:"routes/user/layout.tsx"}),", the value of ",(0,t.jsx)(n.code,{children:"routeId"})," is ",(0,t.jsx)(n.code,{children:"user/layout"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In a multi-entry (MPA) scenario, the value of ",(0,t.jsx)(n.code,{children:"routeId"})," needs to include the name of the corresponding entry. Unless specified, the entry name is generally the name of the entry directory. For example, in the following directory structure:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:".\n└── src\n    ├── entry1\n    │     └── routes\n    │           └── layout.tsx\n    └── entry2\n          └── routes\n                └── layout.tsx\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you want to get the data returned by the ",(0,t.jsx)(n.code,{children:"loader"})," in ",(0,t.jsx)(n.code,{children:"entry1/routes/layout.tsx"}),", the value of ",(0,t.jsx)(n.code,{children:"routeId"})," is ",(0,t.jsx)(n.code,{children:"entry1_layout"}),"."]}),"\n",(0,t.jsxs)(n.h3,{id:"(wip)loading-ui",children:["(WIP)Loading UI",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#(wip)loading-ui",children:"#"})]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive info",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsx)(n.p,{children:"This feature is currently experimental and the API may change in the future."}),(0,t.jsx)(n.p,{children:"Currently only supports CSR, please look forward to Streaming SSR."})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Create ",(0,t.jsx)(n.code,{children:"user/layout.loader.ts"})," and add the following code:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",meta:'title="routes/user/layout.loader.ts"',children:"import { defer } from \"@modern-js/runtime/router\"\n\nconst loader = () =>\ndefer({\n  userInfo: new Promise((resolve) => {\n      setTimeout(() => {\n        resolve({\n          age: 1,\n          name: 'user layout'\n        })\n      }, 1000)\n    })\n  })\n\nexport default loader;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Add the following code in ",(0,t.jsx)(n.code,{children:"user/layout.tsx"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",meta:'title="routes/user/layout.tsx"',children:"import {\n  Await,\n  defer,\n  useLoaderData,\n  Outlet\n} from '@modern-js/runtime/router';\n\nexport default function UserLayout() {\n  const { userInfo } = useLoaderData() as {userInfo: Promise<UserInfo>};\n  return (\n    <div>\n      <React.Suspense\n        fallback={<p>Loading...</p>}\n      >\n        <Await resolve={userInfo} children={userInfo => (\n          <div>\n            <span>{userInfo.name}</span>\n            <span>{userInfo.age}</span>\n            <Outlet>\n          </div>\n        )}>\n        </Await>\n      </React.Suspense>\n    </div>\n  );\n}\n"})}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive info",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsxs)(n.p,{children:["For details on how to use the Await component, please refer to ",(0,t.jsx)(n.a,{href:"https://reactrouter.com/en/main/components/await",target:"_blank",rel:"noopener noreferrer",children:"Await"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For details on how to use defer, please refer to ",(0,t.jsx)(n.a,{href:"https://reactrouter.com/en/main/guides/deferred",target:"_blank",rel:"noopener noreferrer",children:"defer"}),".\n"]})]})]}),"\n",(0,t.jsxs)(n.h3,{id:"incorrect-usage",children:["Incorrect usage",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#incorrect-usage",children:"#"})]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"loader"})," can only return serializable data. In the SSR environment, the return value of the ",(0,t.jsx)(n.code,{children:"loader"})," function will be serialized as a JSON string and then deserialized into an object on the client side. Therefore, the ",(0,t.jsx)(n.code,{children:"loader"})," function cannot return non-serializable data (such as functions)."]}),"\n"]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive warning",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:(0,t.jsx)(n.p,{children:"Currently, there is no such restriction under CSR, but we strongly recommend that you follow this restriction, and we may also add this restriction under CSR in the future."})})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// This won't work!\nexport default () => {\n  return {\n    user: {},\n    method: () => {},\n  };\n};\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Modern.js will call the ",(0,t.jsx)(n.code,{children:"loader"})," function for you, so you should not call the ",(0,t.jsx)(n.code,{children:"loader"})," function yourself:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"// This won't work!\nexport default async () => {\n  const res = fetch('https://api/user/profile');\n  return res.json();\n};\n\nimport loader from './page.loader.ts';\nexport default function RouteComp() {\n  const data = loader();\n}\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["You should not import the loader file from the route component, and you should also avoid importing variables from the route component into the loader file. If you need to share types, you should use ",(0,t.jsx)(n.code,{children:"import type"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// Not allowed\n// routes/layout.tsx\nimport { useLoaderData } from '@modern-js/runtime/router';\nimport { ProfileData } from './page.loader.ts'; // should use \"import type\" instead\n\nexport const fetch = wrapFetch(fetch);\n\nexport default function UserPage() {\n  const profileData = useLoaderData() as ProfileData;\n  return <div>{profileData}</div>;\n}\n\n// routes/layout.loader.ts\nimport { fetch } from './layout.tsx'; // should not be imported from the routing component\nexport type ProfileData = {\n  /*  some types */\n};\n\nexport default async (): Promise<ProfileData> => {\n  const res = await fetch('https://api/user/profile');\n  return await res.json();\n};\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["When running on the server, the ",(0,t.jsx)(n.code,{children:"loader"})," function will be packaged into a unified bundle, so we do not recommend using ",(0,t.jsx)(n.code,{children:"__filename"})," and ",(0,t.jsx)(n.code,{children:"__dirname"})," in server-side code."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"faq",children:["FAQ",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#faq",children:"#"})]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Relationship between ",(0,t.jsx)(n.code,{children:"loader"})," and BFF functions"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In CSR projects, ",(0,t.jsx)(n.code,{children:"loader"})," is executed on the client side, and the BFF function can be called directly in the ",(0,t.jsx)(n.code,{children:"loader"})," to make interface requests."]}),"\n",(0,t.jsxs)(n.p,{children:["In SSR projects, each ",(0,t.jsx)(n.code,{children:"loader"})," is also a server-side interface. We recommend using the ",(0,t.jsx)(n.code,{children:"loader"})," instead of the BFF function with an http method of ",(0,t.jsx)(n.code,{children:"get"})," as the interface layer to avoid an extra layer of forwarding and execution."]}),"\n",(0,t.jsxs)(n.h2,{id:"useloader-(old-version)",children:["useLoader (old version)",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#useloader-(old-version)",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"useLoader"})})," is a legacy API in Modern.js v1. This API is a React Hook designed specifically for SSR applications, allowing developers to fetch data in components in isomorphic development."]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive tip",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:(0,t.jsxs)(n.p,{children:["It is not necessary to use ",(0,t.jsx)(n.code,{children:"useLoader"})," to fetch data in CSR projects.\n"]})})]}),"\n",(0,t.jsx)(n.p,{children:"Here is the simplest example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useLoader } from '@modern-js/runtime';\n\nexport default () => {\n  const { data } = useLoader(async () => {\n    console.log('fetch in useLoader');\n\n    // No real request is sent here, just a hard coding data is returned.\n    // In a real project, the data obtained from the remote end should be returned.\n    return {\n      name: 'Modern.js',\n    };\n  });\n\n  return <div>Hello, {data?.name}</div>;\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"After running the above code, when you access the page, you can see that logs are output to the terminal, but not printed in the browser console."}),"\n",(0,t.jsxs)(n.p,{children:["This is because Modern.js collects the data returned by ",(0,t.jsx)(n.code,{children:"useLoader"})," during server-side rendering and injects it into the corresponding HTML. If the SSR rendering is successful, you can see the following code snippet in the HTML:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<script>\n  window._SSR_DATA = {};\n</script>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This global variable is used to record data, and during the browser-side rendering process, this data is used first. If the data does not exist, the ",(0,t.jsx)(n.code,{children:"useLoader"})," function will be executed again."]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive note",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:(0,t.jsxs)(n.p,{children:["During the build phase, Modern.js will automatically generate a Loader ID for each ",(0,t.jsx)(n.code,{children:"useLoader"})," and inject it into the SSR and CSR JS Bundles to associate the Loader with the data.\n"]})})]}),"\n",(0,t.jsxs)(n.p,{children:["Compared to ",(0,t.jsx)(n.code,{children:"getServerSideProps"})," in Next.js, which fetches data before rendering, using ",(0,t.jsx)(n.code,{children:"useLoader"})," allows you to get data required for local UI in the component without passing data through multiple layers. Similarly, you don't have to add redundant logic to the outermost data acquisition function because different routes require different data requests. Of course, ",(0,t.jsx)(n.code,{children:"useLoader"})," also has some issues, such as difficulties in server-side code tree shaking and the need for an additional pre-rendering step on the server."]}),"\n",(0,t.jsxs)(n.p,{children:["In the new version of Modern.js, a new Loader solution has been designed. The new solution solves these problems and can be optimized for page performance in conjunction with ",(0,t.jsx)(n.a,{href:"/guides/basic-features/routes",children:"conventional routing"}),"."]}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive note",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,t.jsx)(n.div,{className:"modern-directive-content",children:(0,t.jsxs)(n.p,{children:["For detailed API information, see ",(0,t.jsx)(n.a,{href:"/apis/app/runtime/core/use-loader",children:"useLoader"}),".\n"]})})]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}}}]);