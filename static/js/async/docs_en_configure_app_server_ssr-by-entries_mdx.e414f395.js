(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_configure_app_server_ssr-by-entries_mdx"],{16356:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return i},title:function(){return c},toc:function(){return d},default:function(){return a}});var s=r("9880"),t=r("23169"),i={sidebar_label:"ssrByEntries"},c="server.ssrByEntries",d=[];function o(e){var n=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",pre:"pre"},(0,t.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"serverssrbyentries",children:["server.ssrByEntries",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#serverssrbyentries",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type:"})," ",(0,s.jsx)(n.code,{children:"Object"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Default:"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Set the ssr option according to the entry. The attributes in the option are the same as ",(0,s.jsx)(n.a,{href:"/en/configure/app/server/ssr",children:"ssr"}),". The specified value will be replaced and merged with the content of the ssr attribute. For example:"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:['The "entry name" defaults to the directory name. In a few cases, when the entry is customized by ',(0,s.jsx)(n.code,{children:"source.entries"}),", the entry name ",(0,s.jsx)(n.code,{children:"source.entries"})," the ",(0,s.jsx)(n.code,{children:"key"})," of the object."]}),"\n"]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  server: {\n    ssr: true,\n    ssrByEntries: {\n      // page-a does not enable ssr\n      'page-a': false,\n    },\n  },\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["As configured above, the project has ssr enabled as a whole, but the ssr rendering capability is turned off for the entry ",(0,s.jsx)(n.code,{children:"page-a"}),"."]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}}}]);