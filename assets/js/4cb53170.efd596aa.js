"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[4590],{52303:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=t(74848),r=t(28453);const i={title:"Introduction",id:"introduction"},s="Contribute to Bee Development",c={id:"develop/contribute/introduction",title:"Introduction",description:"Welcome to the Dev area! We love PR's! \ud83d\udc1d",source:"@site/docs/develop/contribute/introduction.md",sourceDirName:"develop/contribute",slug:"/develop/contribute/introduction",permalink:"/docs/develop/contribute/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/develop/contribute/introduction.md",tags:[],version:"current",frontMatter:{title:"Introduction",id:"introduction"},sidebar:"develop",previous:{title:"Access Control",permalink:"/docs/develop/tools-and-features/act"},next:{title:"Protocols",permalink:"/docs/develop/contribute/protocols"}},d={},l=[{value:"Testing a connection with PingPong protocol",id:"testing-a-connection-with-pingpong-protocol",level:2},{value:"Generating protobuf",id:"generating-protobuf",level:2}];function a(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"contribute-to-bee-development",children:"Contribute to Bee Development"})}),"\n",(0,n.jsx)(o.p,{children:"Welcome to the Dev area! We love PR's! \ud83d\udc1d"}),"\n",(0,n.jsxs)(o.p,{children:["We would would love you to get involved with our ",(0,n.jsx)(o.a,{href:"https://github.com/ethersphere/bee",children:"Github repo"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["Connect with other Bee developers over at the official ",(0,n.jsx)(o.a,{href:"https://discord.gg/wdghaQsGq5",children:"Discord Server"}),". Sign up and get involved with our buzzing hive of daily dev chat."]}),"\n",(0,n.jsxs)(o.p,{children:["If you would like to contribute, please read the ",(0,n.jsx)(o.a,{href:"https://github.com/ethersphere/bee/blob/master/CODING.md",children:"coding guidelines"})," before you get started."]}),"\n",(0,n.jsxs)(o.p,{children:["Installation from source is described in the ",(0,n.jsx)(o.a,{href:"/docs/bee/installation/build-from-source",children:"Installation"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"testing-a-connection-with-pingpong-protocol",children:"Testing a connection with PingPong protocol"}),"\n",(0,n.jsx)(o.p,{children:"To check if two nodes are connected and to see the round trip time for message exchange between them, get the overlay address from one node, for example local node 2:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"curl localhost:1833/addresses\n"})}),"\n",(0,n.jsx)(o.p,{children:"Make sure addresses are configured as in examples above."}),"\n",(0,n.jsx)(o.p,{children:"And use that address in the API call on another node, for example, local node 1:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"curl -X POST localhost:1735/pingpong/d4440baf2d79e481c3c6fd93a2014d2e6fe0386418829439f26d13a8253d04f1\n"})}),"\n",(0,n.jsx)(o.h2,{id:"generating-protobuf",children:"Generating protobuf"}),"\n",(0,n.jsx)(o.p,{children:"To process protocol buffer files and generate the Go code from it two tools are needed:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://github.com/protocolbuffers/protobuf/releases",children:"protoc"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://github.com/gogo/protobuf",children:"protoc-gen-gogofaster"})}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["Makefile rule ",(0,n.jsx)(o.code,{children:"protobuf"})," can be used to automate ",(0,n.jsx)(o.code,{children:"protoc-gen-gogofaster"})," installation and code generation:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"make protobuf\n"})})]})}function h(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>s,x:()=>c});var n=t(96540);const r={},i=n.createContext(r);function s(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);