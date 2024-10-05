"use strict";(self.webpackChunkjova_js_org=self.webpackChunkjova_js_org||[]).push([[8765],{8844:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var t=s(4848),i=s(8453);const r={},o="Enumeration: ApplicationEvent",d={id:"Documentation/types/jova/Events/enumerations/ApplicationEvent",title:"Enumeration: ApplicationEvent",description:"Events for Jova Listeners.",source:"@site/docs/Documentation/types/jova/Events/enumerations/ApplicationEvent.md",sourceDirName:"Documentation/types/jova/Events/enumerations",slug:"/Documentation/types/jova/Events/enumerations/ApplicationEvent",permalink:"/docs/Documentation/types/jova/Events/enumerations/ApplicationEvent",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"types/jova/Events",permalink:"/docs/Documentation/types/jova/Events/"},next:{title:"types/registry/Events/AppEventType",permalink:"/docs/Documentation/types/registry/Events/AppEventType/"}},c={},a=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"ALL",id:"all",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"ERROR",id:"error",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"MOUNT",id:"mount",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"READY",id:"ready",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"ROUTE",id:"route",level:3},{value:"Defined in",id:"defined-in-4",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"enumeration-applicationevent",children:"Enumeration: ApplicationEvent"})}),"\n",(0,t.jsx)(n.p,{children:"Events for Jova Listeners."}),"\n",(0,t.jsx)(n.p,{children:"string"}),"\n",(0,t.jsx)(n.h2,{id:"enumeration-members",children:"Enumeration Members"}),"\n",(0,t.jsx)(n.h3,{id:"all",children:"ALL"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ALL"}),": ",(0,t.jsx)(n.code,{children:'"any"'})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Catch all events."}),"\n",(0,t.jsxs)(n.p,{children:["Listener Handler Params: ",(0,t.jsx)(n.code,{children:"event: ApplicationEvent, ...args: any[]"})]}),"\n",(0,t.jsx)(n.p,{children:"string"}),"\n",(0,t.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/Bracketed/jova.js/blob/e717b3441abcb73a8b9967866c142ddf54382394/src/types/jova/Events.ts#L31",children:"types/jova/Events.ts:31"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"error",children:"ERROR"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ERROR"}),": ",(0,t.jsx)(n.code,{children:'"error"'})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If an error occurs in the Jova Server."}),"\n",(0,t.jsxs)(n.p,{children:["Listener Handler Params: ",(0,t.jsx)(n.code,{children:"error: Error | unknown"})]}),"\n",(0,t.jsx)(n.p,{children:"string"}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/Bracketed/jova.js/blob/e717b3441abcb73a8b9967866c142ddf54382394/src/types/jova/Events.ts#L39",children:"types/jova/Events.ts:39"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"mount",children:"MOUNT"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"MOUNT"}),": ",(0,t.jsx)(n.code,{children:'"mount"'})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The mount event is fired on a sub-app, when it is mounted on a parent application. The parent app is passed to the callback function."}),"\n",(0,t.jsxs)(n.p,{children:["Listener Handler Params: ",(0,t.jsx)(n.code,{children:"application: JovaServer"})]}),"\n",(0,t.jsx)(n.p,{children:"string"}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/Bracketed/jova.js/blob/e717b3441abcb73a8b9967866c142ddf54382394/src/types/jova/Events.ts#L47",children:"types/jova/Events.ts:47"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"ready",children:"READY"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"READY"}),": ",(0,t.jsx)(n.code,{children:'"ready"'})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"When the Jova Server has successfully started."}),"\n",(0,t.jsxs)(n.p,{children:["Listener Handler Params: ",(0,t.jsx)(n.code,{children:"none"})]}),"\n",(0,t.jsx)(n.p,{children:"string"}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/Bracketed/jova.js/blob/e717b3441abcb73a8b9967866c142ddf54382394/src/types/jova/Events.ts#L15",children:"types/jova/Events.ts:15"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"route",children:"ROUTE"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ROUTE"}),": ",(0,t.jsx)(n.code,{children:'"route"'})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"When a route runs its handler function."}),"\n",(0,t.jsxs)(n.p,{children:["Listener Handler Params: ",(0,t.jsx)(n.code,{children:"request: ApplicationRequest"})]}),"\n",(0,t.jsx)(n.p,{children:"string"}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/Bracketed/jova.js/blob/e717b3441abcb73a8b9967866c142ddf54382394/src/types/jova/Events.ts#L23",children:"types/jova/Events.ts:23"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var t=s(6540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);