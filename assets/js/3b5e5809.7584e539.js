"use strict";(self.webpackChunkjova_js_org=self.webpackChunkjova_js_org||[]).push([[2168],{9411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>a});var i=n(4848),r=n(8453);const o={},d="Middlewares",s={id:"Guide/Middlewares",title:"Middlewares",description:"Put your middlewares into the /middlewares directory of your Jova application.",source:"@site/docs/Guide/Middlewares.md",sourceDirName:"Guide",slug:"/Guide/Middlewares",permalink:"/docs/Guide/Middlewares",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Guide",permalink:"/docs/Guide/"},next:{title:"Routes",permalink:"/docs/Guide/Routes"}},l={},a=[{value:"Middleware Boilerplates",id:"middleware-boilerplates",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"middlewares",children:"Middlewares"})}),"\n",(0,i.jsxs)(t.p,{children:["Put your middlewares into the ",(0,i.jsx)(t.code,{children:"/middlewares"})," directory of your Jova application."]}),"\n",(0,i.jsx)(t.h2,{id:"middleware-boilerplates",children:"Middleware Boilerplates"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"// ESM\n// ./middlewares/Middleware.ts\nimport {\n\tApplicationNextFunction,\n\tApplicationRequest,\n\tApplicationResponse,\n\tMiddlewareController,\n\tMiddlewareOptions,\n} from '@bracketed/jova.js/types';\n\nexport class Middleware extends MiddlewareController {\n\tpublic override setApplicationMiddlewareOptions(): MiddlewareOptions {\n\t\treturn {\n\t\t\tmiddlewareName: 'middleware',\n\t\t\trunsOnAllRoutes: true,\n\t\t};\n\t}\n\n\tpublic override async run(\n\t\t_request: ApplicationRequest,\n\t\t_response: ApplicationResponse,\n\t\tnext: ApplicationNextFunction\n\t): Promise<ApplicationResponse | void> {\n\t\tthis.logger.info('Connected to middleware!');\n\t\treturn next();\n\t}\n}\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"// CJS\n// ./middlewares/Middleware.ts\nconst {\n\tApplicationNextFunction,\n\tApplicationRequest,\n\tApplicationResponse,\n\tMiddlewareController,\n\tMiddlewareOptions,\n} = require('@bracketed/jova.js/types');\n\nexport class Middleware extends MiddlewareController {\n\tpublic override setApplicationMiddlewareOptions(): MiddlewareOptions {\n\t\treturn {\n\t\t\tmiddlewareName: 'middleware',\n\t\t\trunsOnAllRoutes: true,\n\t\t};\n\t}\n\n\tpublic override async run(\n\t\t_request: ApplicationRequest,\n\t\t_response: ApplicationResponse,\n\t\tnext: ApplicationNextFunction\n\t): Promise<ApplicationResponse | void> {\n\t\tthis.logger.info('Connected to middleware!');\n\t\treturn next();\n\t}\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>s});var i=n(6540);const r={},o=i.createContext(r);function d(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);