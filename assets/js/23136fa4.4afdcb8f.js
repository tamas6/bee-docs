"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[4804],{11216:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=t(17624),i=t(4552);const s={title:"Ultra Light Nodes",id:"ultra-light-nodes"},r=void 0,a={id:"develop/access-the-swarm/ultra-light-nodes",title:"Ultra Light Nodes",description:"When running without a blockchain connections, bandwidth incentive payments (SWAP) cannot be made so there is a risk of getting blocklisted by other peers for unpaid services.",source:"@site/docs/develop/access-the-swarm/ultra-light-nodes.md",sourceDirName:"develop/access-the-swarm",slug:"/develop/access-the-swarm/ultra-light-nodes",permalink:"/docs/develop/access-the-swarm/ultra-light-nodes",draft:!1,unlisted:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/develop/access-the-swarm/ultra-light-nodes.md",tags:[],version:"current",frontMatter:{title:"Ultra Light Nodes",id:"ultra-light-nodes"}},c={},d=[{value:"Configuration",id:"configuration",level:4},{value:"Mode of Operation",id:"mode-of-operation",level:4}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h4:"h4",li:"li",p:"p",ul:"ul",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{type:"danger",children:(0,o.jsx)(n.p,{children:"When running without a blockchain connections, bandwidth incentive payments (SWAP) cannot be made so there is a risk of getting blocklisted by other peers for unpaid services."})}),"\n",(0,o.jsx)(n.h4,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsxs)(n.p,{children:["To run Bee as an ultra-light node ",(0,o.jsx)(n.code,{children:"full-node"})," and ",(0,o.jsx)(n.code,{children:"swap-enable"})," must both be set to ",(0,o.jsx)(n.code,{children:"false"}),", and the ",(0,o.jsx)(n.code,{children:"blockchain-rpc-endpoint"})," value should be set to an empty string ",(0,o.jsx)(n.code,{children:'""'})," or commented out in the ",(0,o.jsx)(n.a,{href:"/docs/bee/working-with-bee/configuration",children:"configuration"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"mode-of-operation",children:"Mode of Operation"}),"\n",(0,o.jsxs)(n.p,{children:["The target audience for this mode of operations are users who want to try out running a node but don't\nwant to go through the hassle of blockchain onboarding. Ultra-light nodes will be able to download data as long as the data consumed does not exceed the payment threshold (",(0,o.jsx)(n.code,{children:"payment-threshold"})," in ",(0,o.jsx)(n.a,{href:"/docs/bee/working-with-bee/configuration",children:"configuration"}),") set by peers they connect to."]}),"\n",(0,o.jsx)(n.p,{children:"Running Bee without a connected blockchain backend, however, imposes some limitations:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Can't do overlay verification"}),"\n",(0,o.jsx)(n.li,{children:"Can't do SWAP settlements"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Since we can't buy postage stamps:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Can't send PSS messages"}),"\n",(0,o.jsx)(n.li,{children:"Can't upload data to the network"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>r});var o=t(11504);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);