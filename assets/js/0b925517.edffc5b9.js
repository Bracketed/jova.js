"use strict";(self.webpackChunkjova_js_org=self.webpackChunkjova_js_org||[]).push([[4498],{8457:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(4848),i=n(8453);const s={},o="Events",a={id:"Guide/Events",title:"Events",description:"Put your event handlers into the /events directory of your Jova application.",source:"@site/docs/Guide/Events.md",sourceDirName:"Guide",slug:"/Guide/Events",permalink:"/docs/Guide/Events",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Guide",permalink:"/docs/Guide/"},next:{title:"Guide",permalink:"/docs/Guide/"}},c={},l=[{value:"Event Handler Boilerplates",id:"event-handler-boilerplates",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"events",children:"Events"})}),"\n",(0,r.jsxs)(t.p,{children:["Put your event handlers into the ",(0,r.jsx)(t.code,{children:"/events"})," directory of your Jova application."]}),"\n",(0,r.jsx)(t.h2,{id:"event-handler-boilerplates",children:"Event Handler Boilerplates"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// ESM\n// ./events/Event.ts\nimport { ApplicationEvent, ApplicationListener, ApplicationRegistry } from '@bracketed.jova.js/types';\n\nexport class Event {\n\tpublic registerApplicationEvent(registry: ApplicationRegistry): ApplicationListener {\n\t\treturn registry.registerApplicationEvent((event) =>\n\t\t\tevent //\n\t\t\t\t.setEventType(ApplicationEvent.ALL)\n\t\t\t\t.setHandler(this.run)\n\t\t);\n\t}\n\n\tpublic async run(e: ApplicationEvent, ...args: any[]) {\n\t\tconsole.log('Event Hit:', e);\n\t\tconsole.log(...args);\n\t\treturn;\n\t}\n}\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// CJS\n// ./events/Event.ts\nconst { ApplicationEvent, ApplicationListener, ApplicationRegistry } = require('@bracketed.jova.js/types');\n\nexport class Event {\n\tpublic registerApplicationEvent(registry: ApplicationRegistry): ApplicationListener {\n\t\treturn registry.registerApplicationEvent((event) =>\n\t\t\tevent //\n\t\t\t\t.setEventType(ApplicationEvent.ALL)\n\t\t\t\t.setHandler(this.run)\n\t\t);\n\t}\n\n\tpublic async run(e: ApplicationEvent, ...args: any[]) {\n\t\tconsole.log('Event Hit:', e);\n\t\tconsole.log(...args);\n\t\treturn;\n\t}\n}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(6540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);