"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[1628],{21456:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=s(74848),o=s(28453);const i={title:"Staking",id:"staking"},r=void 0,a={id:"bee/working-with-bee/staking",title:"Staking",description:"In order to participate in the redistribution of xBZZ from uploaders to storers, storers must first deposit a non-refundable xBZZ stake with a smart contract. Then, they are going to be chosen for payout with a probability proportional to their stake in their neighbourhood, as long as they can log storing the part of the content that they are supposed to be storing according to protocol rules.",source:"@site/docs/bee/working-with-bee/staking.md",sourceDirName:"bee/working-with-bee",slug:"/bee/working-with-bee/staking",permalink:"/docs/bee/working-with-bee/staking",draft:!1,unlisted:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/bee/working-with-bee/staking.md",tags:[],version:"current",frontMatter:{title:"Staking",id:"staking"},sidebar:"bee",previous:{title:"Swarm CLI",permalink:"/docs/bee/working-with-bee/swarm-cli"},next:{title:"Cashing Out",permalink:"/docs/bee/working-with-bee/cashing-out"}},d={},c=[{value:"Add stake",id:"add-stake",level:2},{value:"Check redistribution status",id:"check-redistribution-status",level:2},{value:"Maximize rewards",id:"maximize-rewards",level:2},{value:"Neighborhood selection",id:"neighborhood-selection",level:3},{value:"Stake density",id:"stake-density",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Frozen node",id:"frozen-node",level:3},{value:"Check frozen status",id:"check-frozen-status",level:4},{value:"Diagnosing freezing issues",id:"diagnosing-freezing-issues",level:4},{value:"Repairing corrupt reserve",id:"repairing-corrupt-reserve",level:3},{value:"Node occupies unusually large space on disk",id:"node-occupies-unusually-large-space-on-disk",level:3},{value:"Node not participating in redistribution",id:"node-not-participating-in-redistribution",level:3},{value:"Run sampler process to benchmark performance",id:"run-sampler-process-to-benchmark-performance",level:4}];function h(e){const n={a:"a",admonition:"admonition",annotation:"annotation",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",math:"math",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",mtext:"mtext",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"In order to participate in the redistribution of xBZZ from uploaders to storers, storers must first deposit a non-refundable xBZZ stake with a smart contract. Then, they are going to be chosen for payout with a probability proportional to their stake in their neighbourhood, as long as they can log storing the part of the content that they are supposed to be storing according to protocol rules."}),"\n",(0,t.jsx)(n.p,{children:"In order to participate in redistribution, storers need to do the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Join the network and download all the data that the protocol assigns to them. They can only participate if they are fully synchronised with the network."}),"\n",(0,t.jsx)(n.li,{children:"Deposit a stake with the staking contract. There is a minimum staking requirement, presently 10 xBZZ. It can change in the future."}),"\n",(0,t.jsx)(n.li,{children:"Stay online and fully synced, so that when a redistribution round comes, their node can check whether their neighbourhood (nodes that are assigned the same content to store) has been selected and if so, they can perform a certain calculation (a random sampling) on their content and submit the result to the redistribution contract. This happens in two phases (commit and reveal), so that the nodes cannot know the results of others\u2019 calculations when committing to their own."}),"\n",(0,t.jsx)(n.li,{children:"Round length is estimated around 15 minutes (152 blocks to be precise), though it can be extended."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Amongst the nodes that agree with the correct result, one is chosen \u2014 with a probability in proportion to their stake \u2014 as the winner. The winner must execute an on-chain transaction claiming their reward, which is the entire pot of storage rent paid since the previous round, or even more, if the previous pot has not been claimed at that time."}),"\n",(0,t.jsx)(n.h2,{id:"add-stake",children:"Add stake"}),"\n",(0,t.jsx)(n.p,{children:"Bee has builtin endpoints for depositing the stake. Currently the minimum staking requirement is 10 xBZZ, so make sure that there is enough tokens in the node's wallet and you must have some native token as well for paying the gas."}),"\n",(0,t.jsxs)(n.p,{children:["Then you can run the following command to stake 10 xBZZ. The amount is given in PLUR which is the smallest denomination of xBZZ and ",(0,t.jsx)(n.code,{children:"1 xBZZ == 1e16 PLUR"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -X POST localhost:1633/stake/100000000000000000\n"})}),"\n",(0,t.jsx)(n.p,{children:"If the command executed successfully it returns a transaction hash that you can use to verify on a block explorer."}),"\n",(0,t.jsx)(n.p,{children:"It is possible to deposit more by repeatedly using the command above."}),"\n",(0,t.jsx)(n.p,{children:"You can also check the amount staked with the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl localhost:1633/stake\n"})}),"\n",(0,t.jsx)(n.h2,{id:"check-redistribution-status",children:"Check redistribution status"}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)("a",{href:"/api/#tag/RedistributionState",target:"_blank",rel:"noopener noreferrer",children:"RedistributionState"})," endpoint of the API to get more information about the redistribution status of the node."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -X GET http://localhost:1633/redistributionstate | jq\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{ \n  "minimumFunds": "18750000000000000",\n  "hasSufficientFunds": true,\n  "isFrozen": false,\n  "isFullySynced": true,\n  "phase": "commit",\n  "round": 176319,\n  "lastWonRound": 176024,\n  "lastPlayedRound": 176182,\n  "lastFrozenRound": 0,\n  "block": 26800488,\n  "reward": "10479124611072000",\n  "fees": "30166618102500000"\n}\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:'"minimumFunds": <integer>'})," - The minimum xDAI needed to play a single round of the redistribution game (the unit is 1e-18 xDAI)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:'"hasSufficientFunds": <bool>'})," - Shows whether the node has enough xDAI balance to submit at least five storage incentives redistribution related transactions.  If ",(0,t.jsx)(n.code,{children:"false"})," the node will not be permitted to participate in next round."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:'"isFrozen": <bool>'})," - Shows node frozen status."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:'"isFullySynced": <bool>'})," - Shows whether node's localstore has completed full historical syncing with all connected peers."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:'"phase": <string>'})," - Current phase of ",(0,t.jsx)(n.a,{href:"/docs/learn/technology/incentives#storage-incentives-details",children:"redistribution game"})," (",(0,t.jsx)(n.code,{children:"commit"}),", ",(0,t.jsx)(n.code,{children:"reveal"}),", or ",(0,t.jsx)(n.code,{children:"claim"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:'"round": <integer>'}),' - Current round of redistribution game. The round number is determined by dividing the current Gnosis Chain block height by the number of blocks in one round. One round takes 152 blocks, so using the "block" output from the example above we can confirm that the round number is 176319 (block 26800488 / 152 blocks = round 176319).']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:'"lastWonRound": <integer>'})," - Number of round last won by this node."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:'"lastPlayedRound": <integer>'})," - Number of the last round where node's neighborhood was selected to participate in redistribution game."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:'"lastFrozenRound": <integer>'})," The number the round when node was last frozen."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:'"block": <integer>'})," - Gnosis block of the current redistribution game."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:'"reward": <string (BigInt)>'})," - Record of total reward received in ",(0,t.jsx)(n.a,{href:"/docs/learn/glossary#plur",children:"PLUR"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:'"fees": <string (BigInt)>'})," - Record of total spent in 1E-18 xDAI on all redistribution related transactions."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["Nodes should not be shut down or updated in the middle of a round they are playing in as it may cause them to lose out on winnings or become frozen. To see if your node is playing the current round, check if ",(0,t.jsx)(n.code,{children:"lastPlayedRound"})," equals ",(0,t.jsx)(n.code,{children:"round"})," in the output from the ",(0,t.jsxs)(n.a,{href:"/api/#tag/RedistributionState/paths/~1redistributionstate/get",children:[(0,t.jsx)(n.code,{children:"/redistributionstate"})," endpoint"]}),"."]})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["If your node is not operating properly such as getting frozen or not participating in any rounds, see the ",(0,t.jsx)(n.a,{href:"#troubleshooting",children:"troubleshooting section"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"maximize-rewards",children:"Maximize rewards"}),"\n",(0,t.jsxs)(n.p,{children:["There are two main factors which determine the chances for a staking node to win a reward \u2014 neighborhood selection and stake density. Both of these should be considered together before starting up a Bee node for the first time. See the ",(0,t.jsx)(n.a,{href:"/docs/learn/technology/incentives/",children:"incentives page"})," for more context."]}),"\n",(0,t.jsx)(n.h3,{id:"neighborhood-selection",children:"Neighborhood selection"}),"\n",(0,t.jsxs)(n.p,{children:["By default when running a Bee node for the first time an overlay address will be generated and used to assign the node to a random ",(0,t.jsx)(n.a,{href:"/docs/learn/technology/disc#neighborhoods",children:"neighborhood"}),". However, by using the ",(0,t.jsx)(n.code,{children:"target-neighborhood"})," config option, a specific neighborhood can be selected in which to generate the node's overlay address. This is an excellent tool for maximizing reward chances as generally speaking running in a less populated neighborhood will increase the chances of winning a reward. See the ",(0,t.jsx)(n.a,{href:"/docs/bee/installation/install#set-target-neighborhood-optional",children:"config section"})," on the installation page for more information on how to set a target neighborhood."]}),"\n",(0,t.jsx)(n.h3,{id:"stake-density",children:"Stake density"}),"\n",(0,t.jsx)(n.p,{children:"Stake density is defined as:"}),"\n",(0,t.jsx)(n.span,{className:"katex-display",children:(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mtext,{children:"stake\xa0density"}),(0,t.jsx)(n.mo,{children:"="}),(0,t.jsx)(n.mtext,{children:"staked\xa0xBZZ"}),(0,t.jsx)(n.mo,{children:"\xd7"}),(0,t.jsxs)(n.msup,{children:[(0,t.jsx)(n.mn,{children:"2"}),(0,t.jsx)(n.mtext,{children:"storageDepth"})]})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\text{stake density} = \\text{staked xBZZ} \\times {2}^\\text{storageDepth}"})]})})}),(0,t.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(n.span,{className:"mord text",children:(0,t.jsx)(n.span,{className:"mord",children:"stake\xa0density"})}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(n.span,{className:"mrel",children:"="}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,t.jsx)(n.span,{className:"mord text",children:(0,t.jsx)(n.span,{className:"mord",children:"staked\xa0xBZZ"})}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(n.span,{className:"mbin",children:"\xd7"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.8991em"}}),(0,t.jsxs)(n.span,{className:"mord",children:[(0,t.jsx)(n.span,{className:"mord",children:(0,t.jsx)(n.span,{className:"mord",children:"2"})}),(0,t.jsx)(n.span,{className:"msupsub",children:(0,t.jsx)(n.span,{className:"vlist-t",children:(0,t.jsx)(n.span,{className:"vlist-r",children:(0,t.jsx)(n.span,{className:"vlist",style:{height:"0.8991em"},children:(0,t.jsxs)(n.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,t.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(n.span,{className:"mord text mtight",children:(0,t.jsx)(n.span,{className:"mord mtight",children:"storageDepth"})})})]})})})})})]})]})]})]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["To learn more about stake density and the mechanics of the incentives system, see the ",(0,t.jsx)(n.a,{href:"/docs/learn/technology/incentives/",children:"incentives page"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"Stake density determines the weighted chances of nodes within a neighborhood of winning rewards. The chance of winning within a neighborhood corresponds to stake density. Stake density can be increased by depositing more xBZZ as stake (note that stake withdrawals are not currently possible, so any staked xBZZ is not currently recoverable)."}),"\n",(0,t.jsxs)(n.p,{children:["Generally speaking, the minimum required stake of 10 xBZZ is sufficient, and rewards can be better maximized by operating more nodes over a greater range of neighborhoods rather than increasing stake. However this may not be true for all node operators depending on how many different neighborhoods they operate nodes in, and it also may change as network dynamics continue to evolve (join the ",(0,t.jsx)(n.code,{children:"#node-operators"})," ",(0,t.jsx)(n.a,{href:"https://discord.com/channels/799027393297514537/811553590170353685",children:"Discord channel"})," to stay up to date with the latest discussions about staking and network dynamics)."]}),"\n",(0,t.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsxs)(n.p,{children:["In this section we cover several commonly seen issues encountered for staking nodes participating in the redistribution game. If you don't see your issue covered here or require additional guidance, check out the ",(0,t.jsx)(n.code,{children:"#node-operators"})," ",(0,t.jsx)(n.a,{href:"https://discord.com/channels/799027393297514537/811553590170353685",children:"Discord channel"})," where you will find support from other node operators and community members."]}),"\n",(0,t.jsx)(n.h3,{id:"frozen-node",children:"Frozen node"}),"\n",(0,t.jsxs)(n.p,{children:["A node will be frozen when the reserve commitment hash it submits in its ",(0,t.jsxs)(n.a,{href:"/docs/learn/technology/incentives#storage-incentives-details",children:[(0,t.jsx)(n.code,{children:"commit"})," transaction"]})," does not match the correct hash. The reserve commitment hash is used as proof that a node is storing the chunks it is responsible for. It will not be able to play in the redistribution game during the freezing period. See the  ",(0,t.jsx)(n.a,{href:"/docs/learn/technology/incentives#penalties",children:"penalties"})," section for more information."]}),"\n",(0,t.jsx)(n.h4,{id:"check-frozen-status",children:"Check frozen status"}),"\n",(0,t.jsxs)(n.p,{children:["You can check your node's frozen status using the ",(0,t.jsx)(n.code,{children:"/redistributionstate"})," endpoint:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -X GET http://localhost:1633/redistributionstate | jq\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{ \n  "minimumFunds": "18750000000000000",\n  "hasSufficientFunds": true,\n  "isFrozen": false,\n  "isFullySynced": true,\n  "phase": "commit",\n  "round": 176319,\n  "lastWonRound": 176024,\n  "lastPlayedRound": 176182,\n  "lastFrozenRound": 0,\n  "block": 26800488,\n  "reward": "10479124611072000",\n  "fees": "30166618102500000"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The relevant fields here are ",(0,t.jsx)(n.code,{children:"isFrozen"})," and ",(0,t.jsx)(n.code,{children:"lastFrozenRound"}),", which respectively indicate whether the node is currently frozen and the last round in which the node was frozen."]}),"\n",(0,t.jsx)(n.h4,{id:"diagnosing-freezing-issues",children:"Diagnosing freezing issues"}),"\n",(0,t.jsxs)(n.p,{children:["In order to diagnose the cause of freezing issues we must compare our own node's status to that of other nodes within the same neighborhood by comparing the results from our own node returned from the ",(0,t.jsx)(n.code,{children:"/status"})," endpoint to the other nodes in the same neighborhood which can be found from the ",(0,t.jsx)(n.code,{children:"/status/peers"})," endpoint."]}),"\n",(0,t.jsx)(n.p,{children:"First we check our own node's status:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:" curl -s localhost:1633/status | jq\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'  {\n    "peer": "da7e5cc3ed9a46b6e7491d3bf738535d98112641380cbed2e9ddfe4cf4fc01c4",\n    "proximity": 0,\n    "beeMode": "full",\n    "reserveSize": 3747532,\n    "pullsyncRate": 0,\n    "storageRadius": 10,\n    "connectedPeers": 183,\n    "neighborhoodSize": 12,\n    "batchCommitment": 133828050944,\n    "isReachable": true \n  }\n'})}),"\n",(0,t.jsx)(n.p,{children:"And next we will find the status for all the other nodes in the same neighborhood as our own."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:" curl -s  localhost:1633/status/peers | jq\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"/status/peers"})," endpoint returns all the peers of our node, but we are only concerned with peers in the same neighborhood as our own node. Nodes whose ",(0,t.jsx)(n.code,{children:"proximity"})," value is equal to or greater than our own node's ",(0,t.jsx)(n.code,{children:"storageRadius"})," value all fall into the same neighborhood as our node, so the rest have been omitted in the example output below:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'{ \n  ...\n   {\n    "peer": "da33f7a504a74094242d3e542475b49847d1d0f375e0c86bac1c9d7f0937acc0",\n    "proximity": 9,\n    "beeMode": "full",\n    "reserveSize": 3782924,\n    "pullsyncRate": 0,\n    "storageRadius": 10,\n    "connectedPeers": 188,\n    "neighborhoodSize": 11,\n    "batchCommitment": 133828050944,\n    "isReachable": true\n  },\n  {\n    "peer": "da4b529cc1aedc62e31849cf7f8ab8c1866d9d86038b857d6cf2f590604387fe",\n    "proximity": 10,\n    "beeMode": "full",\n    "reserveSize": 3719593,\n    "pullsyncRate": 0,\n    "storageRadius": 10,\n    "connectedPeers": 176,\n    "neighborhoodSize": 11,\n    "batchCommitment": 133828050944,\n    "isReachable": true\n  },\n  {\n    "peer": "da5d39a5508fadf66c8665d5e51617f0e9e5fd501e429c38471b861f104c1504",\n    "proximity": 10,\n    "beeMode": "full",\n    "reserveSize": 3777241,\n    "pullsyncRate": 0,\n    "storageRadius": 10,\n    "connectedPeers": 198,\n    "neighborhoodSize": 12,\n    "batchCommitment": 133828050944,\n    "isReachable": true\n  },\n  {\n    "peer": "da4cb0d125bba638def55c0061b00d7c01ed4033fa193d6e53a67183c5488d73",\n    "proximity": 10,\n    "beeMode": "full",\n    "reserveSize": 3849125,\n    "pullsyncRate": 0,\n    "storageRadius": 10,\n    "connectedPeers": 181,\n    "neighborhoodSize": 13,\n    "batchCommitment": 133828050944,\n    "isReachable": true\n  },\n  {\n    "peer": "da4b1cd5d15e061fdd474003b5602ab1cff939b4b9e30d60f8ff693141ede810",\n    "proximity": 10,\n    "beeMode": "full",\n    "reserveSize": 3778452,\n    "pullsyncRate": 0,\n    "storageRadius": 10,\n    "connectedPeers": 183,\n    "neighborhoodSize": 12,\n    "batchCommitment": 133827002368,\n    "isReachable": true\n  },\n  {\n    "peer": "da49e6c6174e3410edad2e0f05d704bbc33e9996bc0ead310d55372677316593",\n    "proximity": 10,\n    "beeMode": "full",\n    "reserveSize": 3779560,\n    "pullsyncRate": 0,\n    "storageRadius": 10,\n    "connectedPeers": 185,\n    "neighborhoodSize": 12,\n    "batchCommitment": 133828050944,\n    "isReachable": true\n  },\n  {\n    "peer": "da4cdab480f323d5791d3ab8d22d99147f110841e44a8991a169f0ab1f47d8e5",\n    "proximity": 10,\n    "beeMode": "full",\n    "reserveSize": 3778518,\n    "pullsyncRate": 0,\n    "storageRadius": 10,\n    "connectedPeers": 189,\n    "neighborhoodSize": 11,\n    "batchCommitment": 133828050944,\n    "isReachable": true\n  },\n  {\n    "peer": "da4ccec79bc34b502c802415b0008c4cee161faf3cee0f572bb019b117c89b2f",\n    "proximity": 10,\n    "beeMode": "full",\n    "reserveSize": 3779003,\n    "pullsyncRate": 0,\n    "storageRadius": 10,\n    "connectedPeers": 179,\n    "neighborhoodSize": 10,\n    "batchCommitment": 133828050944,\n    "isReachable": true\n  },\n  {\n    "peer": "da69d412b79358f84b7928d2f6b7ccdaf165a21313608e16edd317a5355ba250",\n    "proximity": 11,\n    "beeMode": "full",\n    "reserveSize": 3712586,\n    "pullsyncRate": 0,\n    "storageRadius": 10,\n    "connectedPeers": 189,\n    "neighborhoodSize": 12,\n    "batchCommitment": 133827002368,\n    "isReachable": true\n  },\n  {\n    "peer": "da61967b1bd614a69e5e83f73cc98a63a70ebe20454ca9aafea6b57493e00a34",\n    "proximity": 11,\n    "beeMode": "full",\n    "reserveSize": 3780190,\n    "pullsyncRate": 0,\n    "storageRadius": 10,\n    "connectedPeers": 182,\n    "neighborhoodSize": 13,\n    "batchCommitment": 133828050944,\n    "isReachable": true\n  },\n  {\n    "peer": "da7b6a268637cfd6799a9923129347fc3d564496ea79aea119e89c09c5d9efed",\n    "proximity": 13,\n    "beeMode": "full",\n    "reserveSize": 3721494,\n    "pullsyncRate": 0,\n    "storageRadius": 10,\n    "connectedPeers": 188,\n    "neighborhoodSize": 14,\n    "batchCommitment": 133828050944,\n    "isReachable": true\n  },\n  {\n    "peer": "da7a974149543df1b459831286b42b302f22393a20e9b3dd9a7bb5a7aa5af263",\n    "proximity": 13,\n    "beeMode": "full",\n    "reserveSize": 3852986,\n    "pullsyncRate": 0,\n    "storageRadius": 10,\n    "connectedPeers": 186,\n    "neighborhoodSize": 12,\n    "batchCommitment": 133828050944,\n    "isReachable": true\n  }\n]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Now that we have the status for our own node and all its neighborhood peers we can begin to diagnose the issue through a series of checks outlined below:"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"If you are able to identify and fix a problem with your node from the checklist below, it's possible that your node's reserve has become corrupted. Therefore, after fixing the problem, stop your node, and repair your node according to the instructions in the section following the checklist."})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Compare ",(0,t.jsx)(n.code,{children:"reserveSize"})," with peers"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"reserveSize"})," value is the number of chunks stored by a node in its reserve. The value for ",(0,t.jsx)(n.code,{children:"reserveSize"})," for a healthy node should be around +/- 1% the size of most other nodes in the neighborhood. In our example, for our node's ",(0,t.jsx)(n.code,{children:"reserveSize"})," of 3747532, it falls within that normal range. This does not guarantee our node has no missing or corrupted chunks, but it does indicate that it is generally storing the same chunks as its neighbors. If it falls outside this range, see the next section for instructions on repairing reserves."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Compare ",(0,t.jsx)(n.code,{children:"batchCommitment"})," with peers"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"batchCommitment"})," value shows how many chunks would be stored if all postage batches were fully utilised. It also represents whether the node has fully synced postage batch data from on-chain. If your node's ",(0,t.jsx)(n.code,{children:"batchCommitment"})," value falls below that of its peers in the same neighborhood, it could indicate an issue with your blockchain RPC endpoint that is preventing it from properly syncing on-chain data. If you are running your own node, check your setup to make sure it is functioning properly, or check with your provider if you are using a 3rd party service for your RPC endpoint."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Check ",(0,t.jsx)(n.code,{children:"pullsyncRate"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"pullsyncRate"})," value measures the speed at which a node is syncing chunks from its peers. Once a node is fully synced, ",(0,t.jsx)(n.code,{children:"pullsyncRate"})," should go to zero. If ",(0,t.jsx)(n.code,{children:"pullsyncRate"})," is above zero it indicates that your node is still syncing chunks, so you should wait until it goes to zero before doing any other checks. If ",(0,t.jsx)(n.code,{children:"pullsyncRate"})," is at zero but your node's ",(0,t.jsx)(n.code,{children:"reserveSize"})," does not match its peers, you should check whether your network connection and RPC endpoint are stable and functioning properly. A node should be fully synced after several hours at most."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Check most recent ",(0,t.jsx)(n.code,{children:"block"})," number"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"block"})," value returned from the ",(0,t.jsx)(n.code,{children:"/redistributionstate"})," endpoint shows the most recent block a node has synced. If this number is far behind the actual more recent block then it indicates an issue with your RPC endpoint or network. If you are running your own node, check your setup to make sure it is functioning properly, or check with your provider if you are using a 3rd party service for your RPC endpoint."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -X GET http://localhost:1633/redistributionstate | jq\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{ \n  "minimumFunds": "18750000000000000",\n  "hasSufficientFunds": true,\n  "isFrozen": false,\n  "isFullySynced": true,\n  "phase": "commit",\n  "round": 176319,\n  "lastWonRound": 176024,\n  "lastPlayedRound": 176182,\n  "lastFrozenRound": 0,\n  "block": 26800488,\n  "reward": "10479124611072000",\n  "fees": "30166618102500000"\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Check peer connectivity"}),"\n",(0,t.jsxs)(n.p,{children:["Compare the value of your node's ",(0,t.jsx)(n.code,{children:"neighborhoodSize"})," from the ",(0,t.jsx)(n.code,{children:"/status"})," endpoint and the ",(0,t.jsx)(n.code,{children:"neighborhoodSize"})," of its peers in the same neighborhood from the ",(0,t.jsx)(n.code,{children:"/status/peers"})," endpoint. The figure should be generally the same (although it may fluctuate slightly up or down at any one point in time). If your node's ",(0,t.jsx)(n.code,{children:"neighborhoodSize"})," value is significantly different and remains so over time then your node likely has a connectivity problem. Make sure to ",(0,t.jsx)(n.a,{href:"/docs/bee/installation/connectivity",children:"check your network environment"})," to ensure your node is able to communicate with the network."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If no problems are identified during these checks it likely indicates that your node was frozen in error and there are no additional steps you need to take."}),"\n",(0,t.jsx)(n.h3,{id:"repairing-corrupt-reserve",children:"Repairing corrupt reserve"}),"\n",(0,t.jsxs)(n.p,{children:["If you have identified and fixed a problem causing your node to become frozen or have other reason to believe that your node's reserves are corrupted then you should repair your node's reserve using the ",(0,t.jsx)(n.code,{children:"db repair-reserve"})," command."]}),"\n",(0,t.jsx)(n.p,{children:"First stop your node, and then run the following command:"}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Make sure to replace ",(0,t.jsx)(n.code,{children:"/home/bee/.bee"})," with your node\u2019s data directory if it differs from the one shown in the example. Make sure that the directory you specify is the root directory for your node\u2019s data files, not the localstore directory itself. This is the same directory specified using the ",(0,t.jsx)(n.code,{children:"data-dir"})," option in your node\u2019s ",(0,t.jsx)(n.a,{href:"/docs/bee/working-with-bee/configuration/",children:"configuration"}),"."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"bee db repair-reserve --data-dir=/home/bee/.bee\n"})}),"\n",(0,t.jsx)(n.p,{children:"After the command has finished running, you may restart your node."}),"\n",(0,t.jsx)(n.h3,{id:"node-occupies-unusually-large-space-on-disk",children:"Node occupies unusually large space on disk"}),"\n",(0,t.jsxs)(n.p,{children:["During normal operation of a Bee node, it should not take up more than ~30 GB of disk space. In the rare cases when the node's occupied disk space grows larger, you may need to use the compaction ",(0,t.jsx)(n.code,{children:"db compact"})," command."]}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"To prevent any data loss, operators should run the compaction on a copy of the localstore directory and, if successful, replace the original localstore with the compacted copy."})}),"\n",(0,t.jsxs)(n.p,{children:["The command is available as a sub-command under db as such (make sure to replace the value for ",(0,t.jsx)(n.code,{children:"--data-dir"})," with the correct path to your bee node's data folder if it differs from the path shown in the example):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"bee db compact --data-dir=/home/bee/.bee\n"})}),"\n",(0,t.jsx)(n.h3,{id:"node-not-participating-in-redistribution",children:"Node not participating in redistribution"}),"\n",(0,t.jsxs)(n.p,{children:["First check that the node is fully synced, is not frozen, and has sufficient funds to participate in staking. To check node sync status, call the ",(0,t.jsx)(n.code,{children:"redistributionstate"})," endpoint:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"curl -X GET http://localhost:1633/redistributionstate | jq\n"})}),"\n",(0,t.jsx)(n.p,{children:"Response:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{ \n  "minimumFunds": "18750000000000000",\n  "hasSufficientFunds": true,\n  "isFrozen": false,\n  "isFullySynced": true,\n  "phase": "commit",\n  "round": 176319,\n  "lastWonRound": 176024,\n  "lastPlayedRound": 176182,\n  "lastFrozenRound": 0,\n  "block": 26800488,\n  "reward": "10479124611072000",\n  "fees": "30166618102500000"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Confirm that ",(0,t.jsx)(n.code,{children:"hasSufficientFunds"})," is ",(0,t.jsx)(n.code,{children:"true"}),", and ",(0,t.jsx)(n.code,{children:"isFullySynced"})," is ",(0,t.jsx)(n.code,{children:"true"})," before moving to the next step. If ",(0,t.jsx)(n.code,{children:"hasSufficientFunds"})," if ",(0,t.jsx)(n.code,{children:"false"}),", make sure to add at least the amount of xDAI shown in ",(0,t.jsx)(n.code,{children:"minimumFunds"})," (unit of 1e-18 xDAI). If the node was recently installed and ",(0,t.jsx)(n.code,{children:"isFullySynced"})," is ",(0,t.jsx)(n.code,{children:"false"}),", wait for the node to fully sync before continuing. After confirming the node's status, continue to the next step."]}),"\n",(0,t.jsx)(n.h4,{id:"run-sampler-process-to-benchmark-performance",children:"Run sampler process to benchmark performance"}),"\n",(0,t.jsxs)(n.p,{children:["One of the most common issues affecting staking is the ",(0,t.jsx)(n.code,{children:"sampler"})," process failing. The sampler is a resource intensive process which is run by nodes which are selected to take part in redistribution. The process may fail or time out if the node's hardware specifications aren't high enough. To check a node's performance the ",(0,t.jsx)(n.code,{children:"/rchash/{depth}/{anchor_01}/{anchor_02}"})," endpoint of the API may be used. The ",(0,t.jsx)(n.code,{children:"anchor_01"})," and ",(0,t.jsx)(n.code,{children:"anchor_02"})," must be a hex string with an even number of digits. For simplicity, you can just use ",(0,t.jsx)(n.code,{children:"aaaa"})," for both anchors as we do in the example further down."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"{anchor}"})," value can be set to any random hexadecimal string, while ",(0,t.jsx)(n.code,{children:"{depth}"})," should be set to the current depth."]}),"\n",(0,t.jsxs)(n.p,{children:["To get the current depth, call the ",(0,t.jsx)(n.code,{children:"/reservestate"})," endpoint"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo curl -sX GET http://localhost:1633/reservestate | jq\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Copy the ",(0,t.jsx)(n.code,{children:"storageRadius"})," value from the output (this represents the ACTUAL depth for your node, in other words, the depth to which your node is responsible for storing files. The ",(0,t.jsx)(n.code,{children:"radius"})," value is the hypothetical depth your node would be at if every postage batch was fully utilised.)"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'{\n  "radius": 15,\n  "storageRadius": 10,\n  "commitment": 128332464128\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Call the endpoint like so:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo curl -sX GET http://localhost:1633/rchash/10/aaaa/aaaa | jq\n"})}),"\n",(0,t.jsx)(n.p,{children:"If the sampler runs successfully, you should see output like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'{\n  "Sample": {\n    "Items": [\n      "000003dac2b2f75842e410474dfa4c1e6e0b9970d81b57b33564c5620667ba96",\n      "00000baace30916f7445dbcc44d9b55cb699925acfbe157e4498c63bde834f40",\n      "0000126f48fb1e99e471efc683565e4b245703c922b9956f89cbe09e1238e983",\n      "000012db04a281b7cc0e6436a49bdc5b06ff85396fcb327330ca307e409d2a04",\n      "000014f365b1a381dda85bbeabdd3040fb1395ca9e222e72a597f4cc76ecf6c2",\n      "00001869a9216b3da6814a877fdbc31f156fc2e983b52bc68ffc6d3f3cc79af0",\n      "0000198c0456230b555d5261091cf9206e75b4ad738495a60640b425ecdf408f",\n      "00001a523bd1b688472c6ea5a3c87c697db64d54744829372ac808de8ec1d427"\n    ],\n    "Hash": "7f7d93c6235855fedc34e32c6b67253e27910ca4e3b8f2d942efcd758a6d8829"\n  },\n  "Time": "2m54.087909745s"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If the ",(0,t.jsx)(n.code,{children:"Time"})," value is higher than 6 minutes, then the hardware specifications for the node may need to be upgraded."]}),"\n",(0,t.jsxs)(n.p,{children:["If there is an evictions related error such as the one below, try running the call to the ",(0,t.jsx)(n.code,{children:"/rchash/"})," endpoint again."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'error: "level"="error" "logger"="node/storageincentives" "msg"="make sample" "error"="sampler: failed creating sample: sampler stopped due to ongoing evictions"\n'})}),"\n",(0,t.jsx)(n.p,{children:"While evictions are a normal part of Bee's standard operation, the event of an eviction will interrupt the sampler process."}),"\n",(0,t.jsxs)(n.p,{children:["If you are still experiencing problems, you can find more help in the ",(0,t.jsx)(n.a,{href:"https://discord.gg/kHRyMNpw7t",children:"node-operators"})," Discord channel (for your safety, do not accept advice from anyone sending a private message on Discord)."]})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(96540);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);