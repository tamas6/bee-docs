"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[1592],{68388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=n(17624),i=n(4552);const s={title:"Light Nodes",id:"light-nodes"},r=void 0,a={id:"bee/working-with-bee/light-nodes",title:"Light Nodes",description:"When a light node is requesting data from the network - it will not benefit from plausible deniability. This is because a light node does not forward on behalf of other nodes, and so it is always the originator of the request.",source:"@site/docs/bee/working-with-bee/light-nodes.md",sourceDirName:"bee/working-with-bee",slug:"/bee/working-with-bee/light-nodes",permalink:"/docs/bee/working-with-bee/light-nodes",draft:!1,unlisted:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/bee/working-with-bee/light-nodes.md",tags:[],version:"current",frontMatter:{title:"Light Nodes",id:"light-nodes"},sidebar:"bee",previous:{title:"Uninstalling Bee",permalink:"/docs/bee/working-with-bee/uninstalling-bee"},next:{title:"Troubleshooting",permalink:"/docs/bee/working-with-bee/troubleshooting"}},d={},l=[{value:"Configuration",id:"configuration",level:4},{value:"Mode of Operation",id:"mode-of-operation",level:4}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h4:"h4",p:"p",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["When a light node is requesting data from the network - it will not benefit from plausible deniability. This is because a light node does not forward on behalf of other nodes, and so it is always the ",(0,o.jsx)(t.em,{children:"originator"})," of the request."]})}),"\n",(0,o.jsx)(t.h4,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsxs)(t.p,{children:["To run Bee as a light node ",(0,o.jsx)(t.code,{children:"full-node"})," must be set to ",(0,o.jsx)(t.code,{children:"false"})," and ",(0,o.jsx)(t.code,{children:"swap-enable"})," must be set to ",(0,o.jsx)(t.code,{children:"true"}),", and a stable Gnosis Chain RPC endpoint URL must be specified with ",(0,o.jsx)(t.code,{children:"blockchain-rpc-endpoint"})," in the ",(0,o.jsx)(t.a,{href:"/docs/bee/working-with-bee/configuration",children:"configuration"}),"."]}),"\n",(0,o.jsx)(t.h4,{id:"mode-of-operation",children:"Mode of Operation"}),"\n",(0,o.jsx)(t.p,{children:"At present, light mode represents a pragmatic and elegant approach to improving network stability, reliability and resilience."}),"\n",(0,o.jsxs)(t.p,{children:["In general, ",(0,o.jsx)(t.em,{children:"light mode"})," may be thought of as simply not participating\nin the activity of forwarding or storing chunks for other members of\nthe swarm, these nodes are strictly consumers, who will pay xBZZ in\nreturn for services rendered by ",(0,o.jsx)(t.em,{children:"full nodes"})," - those contributing\ntowards moving data around the network."]}),"\n",(0,o.jsx)(t.p,{children:"This means that although the node will participate in the pull\nsyncing protocol by filling up its local storage with the chunks\nclosest to its overlay address, the node will not serve these chunks\nto other peers."}),"\n",(0,o.jsx)(t.p,{children:"Additionally, a light node will not participate in the forwarding protocol, as it will not forward chunks to peers closer to the destination address."})]})}function c(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>r});var o=n(11504);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);