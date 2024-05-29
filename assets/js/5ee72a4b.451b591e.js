"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[7496],{1864:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var s=t(17624),i=t(4552);const o={title:"Staking",id:"staking"},r=void 0,a={id:"bee/working-with-bee/staking",title:"Staking",description:"In order to participate in the redistribution of xBZZ from uploaders to storers, storers must first deposit a non-refundable xBZZ stake with a smart contract. Then, they are going to be chosen for payout with a probability proportional to their stake in their neighbourhood, as long as they can log storing the part of the content that they are supposed to be storing according to protocol rules.",source:"@site/docs/bee/working-with-bee/staking.md",sourceDirName:"bee/working-with-bee",slug:"/bee/working-with-bee/staking",permalink:"/docs/bee/working-with-bee/staking",draft:!1,unlisted:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/bee/working-with-bee/staking.md",tags:[],version:"current",frontMatter:{title:"Staking",id:"staking"},sidebar:"bee",previous:{title:"Swarm CLI",permalink:"/docs/bee/working-with-bee/swarm-cli"},next:{title:"Cashing Out",permalink:"/docs/bee/working-with-bee/cashing-out"}},d={},h=[{value:"Adding stake",id:"adding-stake",level:2},{value:"Check redistribution status",id:"check-redistribution-status",level:2},{value:"Maximizing Staking Rewards",id:"maximizing-staking-rewards",level:2},{value:"Neighborhood Selection",id:"neighborhood-selection",level:3},{value:"Stake Density",id:"stake-density",level:3}];function l(e){const n={a:"a",admonition:"admonition",annotation:"annotation",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",math:"math",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",mtext:"mtext",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"In order to participate in the redistribution of xBZZ from uploaders to storers, storers must first deposit a non-refundable xBZZ stake with a smart contract. Then, they are going to be chosen for payout with a probability proportional to their stake in their neighbourhood, as long as they can log storing the part of the content that they are supposed to be storing according to protocol rules."}),"\n",(0,s.jsx)(n.p,{children:"In order to participate in redistribution, storers need to do the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Join the network and download all the data that the protocol assigns to them. They can only participate if they are fully synchronised with the network."}),"\n",(0,s.jsx)(n.li,{children:"Deposit a stake with the staking contract. There is a minimum staking requirement, presently 10 xBZZ. It can change in the future."}),"\n",(0,s.jsx)(n.li,{children:"Stay online and fully synced, so that when a redistribution round comes, their node can check whether their neighbourhood (nodes that are assigned the same content to store) has been selected and if so, they can perform a certain calculation (a random sampling) on their content and submit the result to the redistribution contract. This happens in two phases (commit and reveal), so that the nodes cannot know the results of others\u2019 calculations when committing to their own."}),"\n",(0,s.jsx)(n.li,{children:"Round length is estimated around 15 minutes (152 blocks to be precise), though it can be extended."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Amongst the nodes that agree with the correct result, one is chosen \u2014 with a probability in proportion to their stake \u2014 as the winner. The winner must execute an on-chain transaction claiming their reward, which is the entire pot of storage rent paid since the previous round, or even more, if the previous pot has not been claimed at that time."}),"\n",(0,s.jsx)(n.h2,{id:"adding-stake",children:"Adding stake"}),"\n",(0,s.jsx)(n.p,{children:"Bee has builtin endpoints for depositing the stake. Currently the minimum staking requirement is 10 xBZZ, so make sure that there is enough tokens in the node's wallet and you must have some native token as well for paying the gas."}),"\n",(0,s.jsxs)(n.p,{children:["Then you can run the following command to stake 10 xBZZ. The amount is given in PLUR which is the smallest denomination of xBZZ and ",(0,s.jsx)(n.code,{children:"1 xBZZ == 1e16 PLUR"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -XPOST localhost:1633/stake/100000000000000000\n"})}),"\n",(0,s.jsx)(n.p,{children:"If the command executed successfully it returns a transaction hash that you can use to verify on a block explorer."}),"\n",(0,s.jsx)(n.p,{children:"It is possible to deposit more by repeatedly using the command above."}),"\n",(0,s.jsx)(n.p,{children:"You can also check the amount staked with the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl localhost:1633/stake\n"})}),"\n",(0,s.jsx)(n.h2,{id:"check-redistribution-status",children:"Check redistribution status"}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)("a",{href:"/api/#tag/RedistributionState",target:"_blank",rel:"noopener noreferrer",children:"RedistributionState"})," endpoint of the API to get more information about the redistribution status of the node."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"curl -X GET http://localhost:1633/redistributionstate | jq\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{ \n  "minimumFunds": "18750000000000000",\n  "hasSufficientFunds": true,\n  "isFrozen": false,\n  "isFullySynced": true,\n  "phase": "commit",\n  "round": 176319,\n  "lastWonRound": 176024,\n  "lastPlayedRound": 176182,\n  "lastFrozenRound": 0,\n  "block": 26800488,\n  "reward": "10479124611072000",\n  "fees": "30166618102500000"\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"minimumFunds": <integer>'})," - The minimum xDAI needed to play a single round of the redistribution game (the unit is 1e-18 xDAI)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"hasSufficientFunds": <bool>'})," - Shows whether the node has enough xDAI balance to submit at least five storage incentives redistribution related transactions.  If ",(0,s.jsx)(n.code,{children:"false"})," the node will not be permitted to participate in next round."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"isFrozen": <bool>'})," - Shows node frozen status."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"isFullySynced": <bool>'})," - Shows whether node's localstore has completed full historical syncing with all connected peers."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"phase": <string>'})," - Current phase of ",(0,s.jsx)(n.a,{href:"/docs/learn/technology/incentives#storage-incentives-details",children:"redistribution game"})," (",(0,s.jsx)(n.code,{children:"commit"}),", ",(0,s.jsx)(n.code,{children:"reveal"}),", or ",(0,s.jsx)(n.code,{children:"claim"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"round": <integer>'}),' - Current round of redistribution game. The round number is determined by dividing the current Gnosis Chain block height by the number of blocks in one round. One round takes 152 blocks, so using the "block" output from the example above we can confirm that the round number is 176319 (block 26800488 / 152 blocks = round 176319).']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"lastWonRound": <integer>'})," - Number of round last won by this node."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"lastPlayedRound": <integer>'})," - Number of the last round where node's neighborhood was selected to participate in redistribution game."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"lastFrozenRound": <integer>'})," The number the round when node was last frozen."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"block": <integer>'})," - Gnosis block of the current redistribution game."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"reward": <string (BigInt)>'})," - Record of total reward received in ",(0,s.jsx)(n.a,{href:"/docs/learn/glossary#plur",children:"PLUR"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"fees": <string (BigInt)>'})," - Record of total spent in 1E-18 xDAI on all redistribution related transactions."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Nodes should not be shut down or updated in the middle of a round they are playing in as it may cause them to lose out on winnings or become frozen. To see if your node is playing the current round, check if ",(0,s.jsx)(n.code,{children:"lastPlayedRound"})," equals ",(0,s.jsx)(n.code,{children:"round"})," in the output from the ",(0,s.jsxs)(n.a,{href:"/api/#tag/RedistributionState/paths/~1redistributionstate/get",children:[(0,s.jsx)(n.code,{children:"/redistributionstate"})," endpoint"]}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["For issues relating to your node not participating in redistribution properly, see the ",(0,s.jsx)(n.a,{href:"troubleshooting",children:"troubleshooting section"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"maximizing-staking-rewards",children:"Maximizing Staking Rewards"}),"\n",(0,s.jsxs)(n.p,{children:["There are two main factors which determine the chances for a staking node to win a reward \u2014 neighborhood selection and stake density. Both of these should be considered together before starting up a Bee node for the first time. See the ",(0,s.jsx)(n.a,{href:"/docs/learn/technology/incentives/",children:"incentives page"})," for more context."]}),"\n",(0,s.jsx)(n.h3,{id:"neighborhood-selection",children:"Neighborhood Selection"}),"\n",(0,s.jsxs)(n.p,{children:["By default when running a Bee node for the first time an overlay address will be generated and used to assign the node to a random ",(0,s.jsx)(n.a,{href:"/docs/learn/technology/disc#neighborhoods",children:"neighborhood"}),". However, by using the ",(0,s.jsx)(n.code,{children:"target-neighborhood"})," config option, a specific neighborhood can be selected in which to generate the node's overlay address. This is an excellent tool for maximizing reward chances as generally speaking running in a less populated neighborhood will increase the chances of winning a reward. See the ",(0,s.jsx)(n.a,{href:"/docs/bee/installation/install#set-target-neighborhood-optional",children:"config section"})," on the installation page for more information on how to set a target neighborhood."]}),"\n",(0,s.jsx)(n.h3,{id:"stake-density",children:"Stake Density"}),"\n",(0,s.jsx)(n.p,{children:"Stake density is defined as:"}),"\n",(0,s.jsx)(n.span,{className:"katex-display",children:(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mtext,{children:"stake\xa0density"}),(0,s.jsx)(n.mo,{children:"="}),(0,s.jsx)(n.mtext,{children:"staked\xa0xBZZ"}),(0,s.jsx)(n.mo,{children:"\xd7"}),(0,s.jsxs)(n.msup,{children:[(0,s.jsx)(n.mn,{children:"2"}),(0,s.jsx)(n.mtext,{children:"storageDepth"})]})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\text{stake density} = \\text{staked xBZZ} \\times {2}^\\text{storageDepth}"})]})})}),(0,s.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.jsx)(n.span,{className:"mord text",children:(0,s.jsx)(n.span,{className:"mord",children:"stake\xa0density"})}),(0,s.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.jsx)(n.span,{className:"mrel",children:"="}),(0,s.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,s.jsx)(n.span,{className:"mord text",children:(0,s.jsx)(n.span,{className:"mord",children:"staked\xa0xBZZ"})}),(0,s.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.jsx)(n.span,{className:"mbin",children:"\xd7"}),(0,s.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"0.8991em"}}),(0,s.jsxs)(n.span,{className:"mord",children:[(0,s.jsx)(n.span,{className:"mord",children:(0,s.jsx)(n.span,{className:"mord",children:"2"})}),(0,s.jsx)(n.span,{className:"msupsub",children:(0,s.jsx)(n.span,{className:"vlist-t",children:(0,s.jsx)(n.span,{className:"vlist-r",children:(0,s.jsx)(n.span,{className:"vlist",style:{height:"0.8991em"},children:(0,s.jsxs)(n.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,s.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,s.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,s.jsx)(n.span,{className:"mord text mtight",children:(0,s.jsx)(n.span,{className:"mord mtight",children:"storageDepth"})})})]})})})})})]})]})]})]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["To learn more about stake density and the mechanics of the incentives system, see the ",(0,s.jsx)(n.a,{href:"/docs/learn/technology/incentives/",children:"incentives page"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:"Stake density determines the weighted chances of nodes within a neighborhood of winning rewards. The chance of winning within a neighborhood corresponds to stake density. Stake density can be increased by depositing more xBZZ as stake (note that stake withdrawals are not currently possible, so any staked xBZZ is not currently recoverable)."}),"\n",(0,s.jsxs)(n.p,{children:["Generally speaking, the minimum required stake of 10 xBZZ is sufficient, and rewards can be better maximized by operating more nodes over a greater range of neighborhoods rather than increasing stake. However this may not be true for all node operators depending on how many different neighborhoods they operate nodes in, and it also may change as network dynamics continue to evolve (join the ",(0,s.jsx)(n.code,{children:"#node-operators"})," ",(0,s.jsx)(n.a,{href:"https://discord.com/channels/799027393297514537/811553590170353685",children:"Discord channel"})," to stay up to date with the latest discussions about staking and network dynamics)."]})]})}function c(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>r});var s=t(11504);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);