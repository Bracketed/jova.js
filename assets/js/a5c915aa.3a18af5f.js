"use strict";(self.webpackChunkjova_js_org=self.webpackChunkjova_js_org||[]).push([[689],{4424:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=i(4848),s=i(8453);const r={},o="Interface: JovaServerOptions",a={id:"Documentation/types/config/jovaServerOptionsObject/interfaces/JovaServerOptions",title:"Interface: JovaServerOptions",description:"Jova Server options.",source:"@site/docs/Documentation/types/config/jovaServerOptionsObject/interfaces/JovaServerOptions.md",sourceDirName:"Documentation/types/config/jovaServerOptionsObject/interfaces",slug:"/Documentation/types/config/jovaServerOptionsObject/interfaces/JovaServerOptions",permalink:"/docs/Documentation/types/config/jovaServerOptionsObject/interfaces/JovaServerOptions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"types/config/jovaServerOptionsObject",permalink:"/docs/Documentation/types/config/jovaServerOptionsObject/"},next:{title:"types/config/jovaSettingsObject",permalink:"/docs/Documentation/types/config/jovaSettingsObject/"}},d={},c=[{value:"Properties",id:"properties",level:2},{value:"basePath?",id:"basepath",level:3},{value:"Example",id:"example",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"cors?",id:"cors",level:3},{value:"Default",id:"default",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"customHeaders?",id:"customheaders",level:3},{value:"Default",id:"default-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"customOptions?",id:"customoptions",level:3},{value:"Default",id:"default-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"middlewares?",id:"middlewares",level:3},{value:"Example",id:"example-1",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"paths?",id:"paths",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"port?",id:"port",level:3},{value:"Default",id:"default-3",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"ratelimiting?",id:"ratelimiting",level:3},{value:"Default",id:"default-4",level:4},{value:"Example",id:"example-2",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"settings?",id:"settings",level:3},{value:"Default",id:"default-5",level:4},{value:"Defined in",id:"defined-in-8",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"interface-jovaserveroptions",children:"Interface: JovaServerOptions"})}),"\n",(0,t.jsx)(n.p,{children:"Jova Server options."}),"\n",(0,t.jsx)(n.p,{children:"JovaServerOptions"}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h3,{id:"basepath",children:"basePath?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"basePath"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"An optional base path for all of your routes to begin at."}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'"/api"\n'})}),"\n",(0,t.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/Bracketed/jova.js/blob/f266e559c5359942c4deca998e61a0b824a5aed2/src/types/config/jovaServerOptionsObject.ts#L30",children:"types/config/jovaServerOptionsObject.ts:30"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"cors",children:"cors?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"cors"}),": ",(0,t.jsx)(n.code,{children:"CorsOptions"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Enable cors and set up certain values for the cors middleware."}),"\n",(0,t.jsx)(n.h4,{id:"default",children:"Default"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"undefined\n"})}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/Bracketed/jova.js/blob/f266e559c5359942c4deca998e61a0b824a5aed2/src/types/config/jovaServerOptionsObject.ts#L92",children:"types/config/jovaServerOptionsObject.ts:92"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"customheaders",children:"customHeaders?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"customHeaders"}),": ",(0,t.jsx)(n.a,{href:"/docs/Documentation/types/config/jovaHeaderAdditionObject/interfaces/JovaHeaderSetting",children:(0,t.jsx)(n.code,{children:"JovaHeaderSetting"})}),"[]"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Custom headers to be applied to outgoing responses, this is a middleware of optional use but the headers put in here are read-only at runtime until the request is received by a request handler."}),"\n",(0,t.jsx)(n.h4,{id:"default-1",children:"Default"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"[]\n"})}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/Bracketed/jova.js/blob/f266e559c5359942c4deca998e61a0b824a5aed2/src/types/config/jovaServerOptionsObject.ts#L86",children:"types/config/jovaServerOptionsObject.ts:86"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"customoptions",children:"customOptions?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"customOptions"}),": ",(0,t.jsx)(n.a,{href:"/docs/Documentation/types/config/jovaCustomOptions/interfaces/JovaCustomOption",children:(0,t.jsx)(n.code,{children:"JovaCustomOption"})}),"[]"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Custom options from express to be set upon the server starting, similar to ",(0,t.jsx)(n.code,{children:"settings"})," but this sets any value unlike ",(0,t.jsx)(n.code,{children:"settings"})," which only allows settings from the ",(0,t.jsx)(n.code,{children:"JovaSettingsTable"})," enum."]}),"\n",(0,t.jsx)(n.h4,{id:"default-2",children:"Default"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"[]\n"})}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/Bracketed/jova.js/blob/f266e559c5359942c4deca998e61a0b824a5aed2/src/types/config/jovaServerOptionsObject.ts#L80",children:"types/config/jovaServerOptionsObject.ts:80"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"middlewares",children:"middlewares?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"middlewares"}),": ",(0,t.jsx)(n.a,{href:"/docs/Documentation/types/type-aliases/MiddlewareHandler",children:(0,t.jsx)(n.code,{children:"MiddlewareHandler"})}),"[]"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"An array containing middlewares you would like to use in your application."}),"\n",(0,t.jsxs)(n.p,{children:["Middlewares built to support ",(0,t.jsx)(n.strong,{children:"Express"})," only, or alternatively you can write them in yourself."]}),"\n",(0,t.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// An example of a middleware component coded raw into Jova's Middleware Array.\n((request: Request, response: Response, next: NextFunction) => {\n\tconsole.log(`New request at ${request.path}!`)\n\treturn next()\n})\n"})}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/Bracketed/jova.js/blob/f266e559c5359942c4deca998e61a0b824a5aed2/src/types/config/jovaServerOptionsObject.ts#L44",children:"types/config/jovaServerOptionsObject.ts:44"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"paths",children:"paths?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"paths"}),": ",(0,t.jsx)(n.a,{href:"/docs/Documentation/types/config/jovaPathOptions/interfaces/JovaPathSettings",children:(0,t.jsx)(n.code,{children:"JovaPathSettings"})})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Deploy example middlewares and routes when running the Jova.js Server."}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/Bracketed/jova.js/blob/f266e559c5359942c4deca998e61a0b824a5aed2/src/types/config/jovaServerOptionsObject.ts#L23",children:"types/config/jovaServerOptionsObject.ts:23"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"port",children:"port?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"port"}),": ",(0,t.jsx)(n.code,{children:"string"})," | ",(0,t.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The port for the Jova Server to run on."}),"\n",(0,t.jsx)(n.h4,{id:"default-3",children:"Default"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"3000\n"})}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/Bracketed/jova.js/blob/f266e559c5359942c4deca998e61a0b824a5aed2/src/types/config/jovaServerOptionsObject.ts#L50",children:"types/config/jovaServerOptionsObject.ts:50"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"ratelimiting",children:"ratelimiting?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"ratelimiting"}),": ",(0,t.jsx)(n.a,{href:"/docs/Documentation/types/config/rateLimitOptionsObject/interfaces/RatelimitConfig",children:(0,t.jsx)(n.code,{children:"RatelimitConfig"})})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The ratelimit config for a Jova Server Instance."}),"\n",(0,t.jsx)(n.h4,{id:"default-4",children:"Default"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"undefined // (Disabled by default)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// Config types for the ratelimiting feature for Jova\ninterface LimitConfig {\n\t\trefreshTime: number;\n\t\trequestLimitAmount: number | Middleware;\n\t\trequestLimitMessage?: string;\n\t\trequestLimitCode?: string;\n\t\trequestLimitHandler?: Middleware;\n\t\tcountFailedRequests?: boolean;\n\t\tallowOnInternalError?: boolean;\n\t\tratelimitDatabase?: string | RatelimitDatabaseConfig;\n}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/Bracketed/jova.js/blob/f266e559c5359942c4deca998e61a0b824a5aed2/src/types/config/jovaServerOptionsObject.ts#L68",children:"types/config/jovaServerOptionsObject.ts:68"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"settings",children:"settings?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"optional"})," ",(0,t.jsx)(n.strong,{children:"settings"}),": ",(0,t.jsx)(n.a,{href:"/docs/Documentation/types/config/jovaSettingsObject/interfaces/JovaSettings",children:(0,t.jsx)(n.code,{children:"JovaSettings"})})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Custom settings from express to be enabled or disabled upon the server starting."}),"\n",(0,t.jsx)(n.h4,{id:"default-5",children:"Default"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"undefined\n"})}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/Bracketed/jova.js/blob/f266e559c5359942c4deca998e61a0b824a5aed2/src/types/config/jovaServerOptionsObject.ts#L74",children:"types/config/jovaServerOptionsObject.ts:74"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(6540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);