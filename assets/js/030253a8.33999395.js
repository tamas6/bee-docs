"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[4468],{97740:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=a(17624),t=a(4552);const i={title:"Incentives",id:"incentives"},r=void 0,c={id:"learn/technology/incentives",title:"Incentives",description:"One of the key challenges in a decentralised data network is incentivising users to store data and provide bandwidth. Swarm addresses this challenge with two incentives systems, one which rewards nodes for sharing their storage space and another which rewards them for sharing bandwidth.",source:"@site/docs/learn/technology/incentives.md",sourceDirName:"learn/technology",slug:"/learn/technology/incentives",permalink:"/docs/learn/technology/incentives",draft:!1,unlisted:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/learn/technology/incentives.md",tags:[],version:"current",frontMatter:{title:"Incentives",id:"incentives"},sidebar:"learn",previous:{title:"DISC",permalink:"/docs/learn/technology/disc"},next:{title:"PSS",permalink:"/docs/learn/technology/pss"}},h={},l=[{value:"Storage Incentives",id:"storage-incentives",level:2},{value:"Storage Incentives Details",id:"storage-incentives-details",level:3},{value:"Penalties",id:"penalties",level:3},{value:"Bandwidth Incentives (SWAP)",id:"bandwidth-incentives-swap",level:2}];function o(e){const s={a:"a",annotation:"annotation",code:"code",h2:"h2",h3:"h3",math:"math",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",mtext:"mtext",p:"p",semantics:"semantics",span:"span",...(0,t.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"One of the key challenges in a decentralised data network is incentivising users to store data and provide bandwidth. Swarm addresses this challenge with two incentives systems, one which rewards nodes for sharing their storage space and another which rewards them for sharing bandwidth."}),"\n",(0,n.jsx)(s.h2,{id:"storage-incentives",children:"Storage Incentives"}),"\n",(0,n.jsxs)(s.p,{children:["Swarm's storage incentives protocol is defined in depth in the ",(0,n.jsx)(s.a,{href:"https://www.ethswarm.org/swarm-storage-incentives.pdf",children:"Future Proof Storage"})," paper published by the Swarm team."]}),"\n",(0,n.jsxs)(s.p,{children:["Swarm's storage incentives are based on ",(0,n.jsx)(s.a,{href:"/docs/learn/technology/contracts/postage-stamp",children:"postage stamps"}),", which serve as verifiable proof of payment associated with chunks witnessed by their owner's signature. Postage stamps signal chunks' relative importance by ascribing them with xBZZ quantity which storer nodes can use when selecting which chunks to retain and which to evict from their reserve when their reserve capacity is exceeded."]}),"\n",(0,n.jsx)(s.p,{children:"The amount of xBZZ required for a postage stamp depends on the amount of data being stored and the duration for which it will be stored. The longer a chunk is stored, the more xBZZ is required for the postage stamp. This ensures that users are incentivised to store data for longer periods, which helps ensure that data remains available in the network."}),"\n",(0,n.jsx)(s.p,{children:"Storer nodes can use the xBZZ associated with postage stamps when selecting which chunks to retain and serve or garbage collect during capacity shortage. This means that popular content will be widely distributed across the network, reducing retrieval latency."}),"\n",(0,n.jsx)(s.h3,{id:"storage-incentives-details",children:"Storage Incentives Details"}),"\n",(0,n.jsxs)(s.p,{children:["When someone wants to upload data to Swarm, they do so by buying ",(0,n.jsx)(s.a,{href:"/docs/learn/technology/contracts/postage-stamp",children:"postage stamp batches"}),' with xBZZ. The xBZZ is collected and later redistributed to storage provider nodes to pay for their services. Which node earns the reward is determined by playing a "game". Every 152 Gnosis Chain blocks the game is played, and one node will win the accumulated xBZZ.']}),"\n",(0,n.jsxs)(s.p,{children:["The game has 3 phases, ",(0,n.jsx)(s.code,{children:"commit"}),", ",(0,n.jsx)(s.code,{children:"reveal"}),", and ",(0,n.jsx)(s.code,{children:"claim"}),". In the ",(0,n.jsx)(s.code,{children:"reveal"}),' phase of a previous game, an "anchor" overlay address is randomly generated and used to determine the neighborhood for the current round. Only nodes within that neighborhood (meaning they have a certain number of ',(0,n.jsx)(s.a,{href:"/docs/learn/glossary#proximity-order-po",children:"shared leading bits"})," with the neighborhood address) may participate and have a chance to win."]}),"\n",(0,n.jsxs)(s.p,{children:["In the ",(0,n.jsx)(s.code,{children:"commit"}),' phase, nodes issue an on-chain transaction including an encrypted hash of the data they are storing (the unencrypted hash is known as the "reserve commitment") along with the ',(0,n.jsx)(s.a,{href:"/docs/learn/glossary#2-area-of-responsibility-related-depths",children:"depth"})," for which they are reporting. This serves as an attestation of the data they are storing without revealing any other information."]}),"\n",(0,n.jsxs)(s.p,{children:["In the ",(0,n.jsx)(s.code,{children:"reveal"})," phase, each node reveals the decryption key for their encrypted hashes thereby publishing the hash. One of the nodes is chosen as the honest node, and from among the honest nodes, one node is chosen as the winner. The winner is chosen at random among the honest nodes, but it is weighted in proportion to each node's stake density. Stake density is calculated as so:"]}),"\n",(0,n.jsx)(s.span,{className:"katex-display",children:(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mtext,{children:"stake\xa0density"}),(0,n.jsx)(s.mo,{children:"="}),(0,n.jsx)(s.mtext,{children:"stake(xBZZ)"}),(0,n.jsx)(s.mo,{children:"\xd7"}),(0,n.jsxs)(s.msup,{children:[(0,n.jsx)(s.mn,{children:"2"}),(0,n.jsx)(s.mtext,{children:"storage\xa0depth"})]})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\text{stake density} = \\text{stake(xBZZ)} \\times {2}^\\text{storage depth}"})]})})}),(0,n.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(s.span,{className:"mord text",children:(0,n.jsx)(s.span,{className:"mord",children:"stake\xa0density"})}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(s.span,{className:"mrel",children:"="}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord text",children:(0,n.jsx)(s.span,{className:"mord",children:"stake(xBZZ)"})}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(s.span,{className:"mbin",children:"\xd7"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.8991em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord",children:(0,n.jsx)(s.span,{className:"mord",children:"2"})}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsx)(s.span,{className:"vlist-t",children:(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.8991em"},children:(0,n.jsxs)(s.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord text mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:"storage\xa0depth"})})})]})})})})})]})]})]})]})}),"\n",(0,n.jsx)(s.h3,{id:"penalties",children:"Penalties"}),"\n",(0,n.jsxs)(s.p,{children:["During the ",(0,n.jsx)(s.code,{children:"reveal"})," phase if a nodes' revealed hash does not match the honest nodes' hash, that node will be temporarily frozen and will not be able to participate in a number of upcoming rounds. Currently the freeze period is defined in the ",(0,n.jsx)(s.a,{href:"https://github.com/ethersphere/storage-incentives/blob/master/src/Redistribution.sol#L536C1-L536C100",children:"redistribution smart contract"})," as:"]}),"\n",(0,n.jsx)(s.span,{className:"katex-display",children:(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mn,{children:"152"}),(0,n.jsx)(s.mo,{children:"\xd7"}),(0,n.jsxs)(s.msup,{children:[(0,n.jsx)(s.mn,{children:"2"}),(0,n.jsx)(s.mtext,{children:"storage\xa0radius"})]}),(0,n.jsx)(s.mtext,{children:"\xa0blocks\xa0(at\xa05s\xa0per\xa0block)"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"152 \\times 2^\\text{storage radius} \\text{ blocks (at 5s per block)}"})]})})}),(0,n.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(s.span,{className:"mord",children:"152"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(s.span,{className:"mbin",children:"\xd7"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1.1491em",verticalAlign:"-0.25em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord",children:"2"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsx)(s.span,{className:"vlist-t",children:(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.8991em"},children:(0,n.jsxs)(s.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord text mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:"storage\xa0radius"})})})]})})})})})]}),(0,n.jsx)(s.span,{className:"mord text",children:(0,n.jsx)(s.span,{className:"mord",children:"\xa0blocks\xa0(at\xa05s\xa0per\xa0block)"})})]})]})]})}),"\n",(0,n.jsx)(s.p,{children:"So for example at a storage radius of 10:"}),"\n",(0,n.jsx)(s.span,{className:"katex-display",children:(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mn,{children:"152"}),(0,n.jsx)(s.mo,{children:"\xd7"}),(0,n.jsxs)(s.msup,{children:[(0,n.jsx)(s.mn,{children:"2"}),(0,n.jsx)(s.mn,{children:"10"})]}),(0,n.jsx)(s.mtext,{children:"\xa0blocks\xa0(at\xa05s\xa0per\xa0block)"}),(0,n.jsx)(s.mo,{children:"\u2248"}),(0,n.jsx)(s.mtext,{children:"\xa09\xa0days"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"152 \\times 2^{10} \\text{ blocks (at 5s per block)} \u2248 \\text{ 9 days}"})]})})}),(0,n.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(s.span,{className:"mord",children:"152"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(s.span,{className:"mbin",children:"\xd7"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1.1141em",verticalAlign:"-0.25em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord",children:"2"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsx)(s.span,{className:"vlist-t",children:(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.8641em"},children:(0,n.jsxs)(s.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:"10"})})})]})})})})})]}),(0,n.jsx)(s.span,{className:"mord text",children:(0,n.jsx)(s.span,{className:"mord",children:"\xa0blocks\xa0(at\xa05s\xa0per\xa0block)"})}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(s.span,{className:"mrel",children:"\u2248"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(s.span,{className:"mord text",children:(0,n.jsx)(s.span,{className:"mord",children:"\xa09\xa0days"})})]})]})]})}),"\n",(0,n.jsx)(s.h2,{id:"bandwidth-incentives-swap",children:"Bandwidth Incentives (SWAP)"}),"\n",(0,n.jsx)(s.p,{children:"The Swarm Accounting Protocol (SWAP) is a protocol used in the Swarm network to manage the exchange of resources between nodes. SWAP ensures that node operators collaborate in routing messages and data while protecting the network against frivolous use of bandwidth."}),"\n",(0,n.jsx)(s.p,{children:"SWAP works by tracking the relative consumption of bandwidth between nodes. As nodes relay requests and responses, they keep track of their bandwidth usage with each of their peers. Within bounds, peers engage in a service-for-service exchange, where they provide resources to each other based on their relative usage."}),"\n",(0,n.jsxs)(s.p,{children:["However, once a limit is reached, the party in debt can either wait until their liabilities are amortized over time or can pay by sending cheques that cash out in xBZZ on the blockchain. ",(0,n.jsx)(s.a,{href:"/docs/learn/technology/contracts/chequebook/",children:"Chequebook"})," contracts are used to manage these cheques and ensure that they are valid and can be cashed out correctly."]}),"\n",(0,n.jsx)(s.p,{children:"SWAP uses built-in incentives to optimize the allocation of bandwidth and storage resources and render Swarm economically self-sustaining. Swarm nodes track their relative bandwidth contribution on each peer connection, and excess debt due to unequal consumption can be settled in xBZZ. Publishers in Swarm must spend xBZZ to purchase the right to write data to Swarm and prepay some rent for long-term storage."}),"\n",(0,n.jsx)(s.p,{children:"The SWAP protocol also includes some additional features to prevent abuse or fraud. For example, it can impose limits on how much debt a node can accumulate before requiring payment or require nodes to provide collateral before sending cheques."})]})}function d(e={}){const{wrapper:s}={...(0,t.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},4552:(e,s,a)=>{a.d(s,{I:()=>c,M:()=>r});var n=a(11504);const t={},i=n.createContext(t);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);