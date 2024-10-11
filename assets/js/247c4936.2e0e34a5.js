"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[4785],{3541:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=a(74848),r=a(28453);const s={title:"Price Oracle",id:"price-oracle"},n=void 0,c={id:"learn/technology/contracts/price-oracle",title:"Price Oracle",description:'The job of the Oracle contract is to set the price of Postage Stamps. The oracle contract uses data from the Postage Stamp contract in order to set the appropriate price for Postage Stamps. The data in the Postage Stamp contract is used to calculate a "utilisation signal". This signal is an indicator of how much the Swarm network\u2019s data storage capacity is being utilized. Specifically, the signal is a measure of data redundancy on the network. Redundancy is a measure of how many copies of each piece of data can be stored by the network. The protocol targets a fourfold level of data redundancy as a safe minimum.',source:"@site/docs/learn/technology/contracts/price-oracle.md",sourceDirName:"learn/technology/contracts",slug:"/learn/technology/contracts/price-oracle",permalink:"/docs/learn/technology/contracts/price-oracle",draft:!1,unlisted:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/learn/technology/contracts/price-oracle.md",tags:[],version:"current",frontMatter:{title:"Price Oracle",id:"price-oracle"},sidebar:"learn",previous:{title:"Postage Stamp",permalink:"/docs/learn/technology/contracts/postage-stamp"},next:{title:"Foundation",permalink:"/docs/learn/ecosystem/swarm-foundation"}},i={},l=[];function d(e){const t={a:"a",p:"p",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["The job of the ",(0,o.jsx)(t.a,{href:"https://github.com/ethersphere/price-oracle",children:"Oracle contract"})," is to set the price of Postage Stamps. The oracle contract uses data from the ",(0,o.jsx)(t.a,{href:"/docs/learn/technology/contracts/postage-stamp",children:"Postage Stamp contract"}),' in order to set the appropriate price for Postage Stamps. The data in the Postage Stamp contract is used to calculate a "utilisation signal". This signal is an indicator of how much the Swarm network\u2019s data storage capacity is being utilized. Specifically, the signal is a measure of data redundancy on the network. Redundancy is a measure of how many copies of each piece of data can be stored by the network. The protocol targets a fourfold level of data redundancy as a safe minimum.']}),"\n",(0,o.jsx)(t.p,{children:"For example, if there is an increase in postage stamps being purchased while the number of nodes remains constant, the data redundancy level will begin to fall as data storers\u2019 available space begins to become reserved. If too many postage stamps are purchased without an equivalent increase in storage providers, the redundancy level may fall below four. In this case, the oracle will increase the price of postage stamps so that it becomes more expensive to store data on Swarm. The higher cost of storage will then lead to less postage stamps being purchased, and will push the redundancy level back up towards four."}),"\n",(0,o.jsx)(t.p,{children:"Conversely, if the amount of Stamps being purchased decreases while the number of storage provider nodes remains constant, the redundancy level will increase as there are fewer chunks of data to be distributed amongst the same number of nodes. In this case, the oracle will decrease the Postage Stamp price in order to promote more data storers to store their data on Swarm. The lower cost of storage will then lead to more Postage Stamps being purchased and push the redundancy level back down towards four."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>n,x:()=>c});var o=a(96540);const r={},s=o.createContext(r);function n(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);