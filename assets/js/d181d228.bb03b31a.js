"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[4371],{24384:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var t=o(17624),s=o(4552);const i={title:"Bee FAQ",id:"bee-faq"},a=void 0,r={id:"bee/bee-faq",title:"Bee FAQ",description:"Running a Bee Node",source:"@site/docs/bee/faq.md",sourceDirName:"bee",slug:"/bee/bee-faq",permalink:"/docs/bee/bee-faq",draft:!1,unlisted:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/bee/faq.md",tags:[],version:"current",frontMatter:{title:"Bee FAQ",id:"bee-faq"},sidebar:"bee",previous:{title:"Ultra Light Nodes",permalink:"/docs/bee/working-with-bee/ultra-light-nodes"}},d={},h=[{value:"Running a Bee Node",id:"running-a-bee-node",level:2},{value:"How can I become part of the Swarm network?",id:"how-can-i-become-part-of-the-swarm-network",level:3},{value:"What are the differences between Bee node types?",id:"what-are-the-differences-between-bee-node-types",level:3},{value:"What are the requirements for running a Bee node?",id:"what-are-the-requirements-for-running-a-bee-node",level:4},{value:"Full node",id:"full-node",level:5},{value:"How much bandwidth is required for each node?",id:"how-much-bandwidth-is-required-for-each-node",level:5},{value:"How do I Install Bee on Windows?",id:"how-do-i-install-bee-on-windows",level:5},{value:"How do I get the node&#39;s wallet&#39;s private key (use-case for Desktop app)?",id:"how-do-i-get-the-nodes-wallets-private-key-use-case-for-desktop-app",level:5},{value:"How do I import the swarm private key to metamask?",id:"how-do-i-import-the-swarm-private-key-to-metamask",level:5},{value:"Where can I find my password?",id:"where-can-i-find-my-password",level:5},{value:"Connectivity",id:"connectivity",level:2},{value:"Which p2p port does Bee use and which should I open in my router?",id:"which-p2p-port-does-bee-use-and-which-should-i-open-in-my-router",level:3},{value:"How do I know if I am connected to other peers?",id:"how-do-i-know-if-i-am-connected-to-other-peers",level:3},{value:"Errors",id:"errors",level:2},{value:"What does &quot;could not connect to peer&quot; mean?",id:"what-does-could-not-connect-to-peer-mean",level:3},{value:"What does &quot;context deadline exceeded&quot; error mean?",id:"what-does-context-deadline-exceeded-error-mean",level:3},{value:"How do I set up a blockchain endpoint?",id:"how-do-i-set-up-a-blockchain-endpoint",level:3},{value:"How can I export my private keys?",id:"how-can-i-export-my-private-keys",level:3},{value:"How to import bee node address to MetaMask?",id:"how-to-import-bee-node-address-to-metamask",level:3},{value:"What are the restart commands of bee?",id:"what-are-the-restart-commands-of-bee",level:3},{value:"Relevant endpoints and explanations",id:"relevant-endpoints-and-explanations",level:3},{value:"How can I check how many cashed out cheques do I have?",id:"how-can-i-check-how-many-cashed-out-cheques-do-i-have",level:3},{value:"I have compared transactions between my ethereum address and my chequebook address, the numbers are different, which is quite weird.",id:"i-have-compared-transactions-between-my-ethereum-address-and-my-chequebook-address-the-numbers-are-different-which-is-quite-weird",level:3},{value:"Where can I find documents about the cashout commands?",id:"where-can-i-find-documents-about-the-cashout-commands",level:3},{value:"When I run http://localhost:1633/chequebook/balance I get &quot;totalBalance&quot; and &quot;availableBalance&quot; what is the difference?",id:"when-i-run-httplocalhost1633chequebookbalance-i-get-totalbalance-and-availablebalance-what-is-the-difference",level:3},{value:"What determines the number of peers and how to influence their number? Why are there sometimes 300+ peers and sometimes 30?",id:"what-determines-the-number-of-peers-and-how-to-influence-their-number-why-are-there-sometimes-300-peers-and-sometimes-30",level:3},{value:"What is the difference between &quot;systemctl&quot; and &quot;bee start&quot;?",id:"what-is-the-difference-between-systemctl-and-bee-start",level:3},{value:"Swarm Protocol",id:"swarm-protocol",level:2},{value:"Can I use one Ethereum Address/Wallet for many nodes?",id:"can-i-use-one-ethereum-addresswallet-for-many-nodes",level:3},{value:"Miscellaneous",id:"miscellaneous",level:2},{value:"How can I add Gnosis / Sepolia to Metamask?",id:"how-can-i-add-gnosis--sepolia-to-metamask",level:3},{value:"Gnosis Chain",id:"gnosis-chain",level:4},{value:"Sepolia",id:"sepolia",level:4}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"running-a-bee-node",children:"Running a Bee Node"}),"\n",(0,t.jsx)(n.h3,{id:"how-can-i-become-part-of-the-swarm-network",children:"How can I become part of the Swarm network?"}),"\n",(0,t.jsx)(n.p,{children:"You can become part of the network by running a bee node. Bee is a peer-to-peer client that connects you with other peers all over the world to become part of Swarm network, a global distributed p2p storage network that aims to store and distribute all of the world's data"}),"\n",(0,t.jsx)(n.p,{children:"Depending on your needs you can run ultra-light, light or full node."}),"\n",(0,t.jsx)(n.h3,{id:"what-are-the-differences-between-bee-node-types",children:"What are the differences between Bee node types?"}),"\n",(0,t.jsxs)(n.p,{children:["A bee node can be configured to run in various modes based on specific use cases and requirements. ",(0,t.jsx)(n.a,{href:"/docs/bee/installation/quick-start",children:"See here"})," for an overview of the differences."]}),"\n",(0,t.jsx)(n.h4,{id:"what-are-the-requirements-for-running-a-bee-node",children:"What are the requirements for running a Bee node?"}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"/docs/bee/installation/install",children:"install section"})," for more information about running a Bee node."]}),"\n",(0,t.jsx)(n.h5,{id:"full-node",children:"Full node"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"20GB -30GB SSD (ideally nvme)."}),"\n",(0,t.jsx)(n.li,{children:"8GB RAM"}),"\n",(0,t.jsx)(n.li,{children:"CPU with 2+ cores"}),"\n",(0,t.jsx)(n.li,{children:"RCP connection to Gnosis Chaiin"}),"\n",(0,t.jsx)(n.li,{children:"Min 0.1 xDAI for Gnosis GAS fees"}),"\n",(0,t.jsx)(n.li,{children:"1 xBZZ for initial chequebook deployment"}),"\n",(0,t.jsx)(n.li,{children:"10 xBZZ for staking (optional)"}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"how-much-bandwidth-is-required-for-each-node",children:"How much bandwidth is required for each node?"}),"\n",(0,t.jsx)(n.p,{children:"Typically, each node requires around 10 megabits per second (Mbps) of bandwidth during normal operation."}),"\n",(0,t.jsx)(n.h5,{id:"how-do-i-install-bee-on-windows",children:"How do I Install Bee on Windows?"}),"\n",(0,t.jsxs)(n.p,{children:["You can install Bee node on Windows but it is not mentioned in the documentation, however, the steps are the same as the manual installation ",(0,t.jsx)(n.a,{href:"https://docs.ethswarm.org/docs/bee/installation/manual",children:"https://docs.ethswarm.org/docs/bee/installation/manual"})," you can download the binary from here"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/ethersphere/bee/releases",children:"https://github.com/ethersphere/bee/releases"})," and download one of the Windows releases."]}),"\n",(0,t.jsx)(n.p,{children:"It is also possible to build from the source."}),"\n",(0,t.jsx)(n.h5,{id:"how-do-i-get-the-nodes-wallets-private-key-use-case-for-desktop-app",children:"How do I get the node's wallet's private key (use-case for Desktop app)?"}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"/docs/bee/working-with-bee/backups/",children:"backup section"})," for more info."]}),"\n",(0,t.jsx)(n.h5,{id:"how-do-i-import-the-swarm-private-key-to-metamask",children:"How do I import the swarm private key to metamask?"}),"\n",(0,t.jsxs)(n.p,{children:["You can import the ",(0,t.jsx)(n.code,{children:"swarm.key"})," json file in MetaMask using your password file or the password you have set in your bee config file."]}),"\n",(0,t.jsx)(n.h5,{id:"where-can-i-find-my-password",children:"Where can I find my password?"}),"\n",(0,t.jsxs)(n.p,{children:["You can find the password in the root of your data directory. See the ",(0,t.jsx)(n.a,{href:"/docs/bee/working-with-bee/backups/",children:"backup section"})," for more info."]}),"\n",(0,t.jsx)(n.h2,{id:"connectivity",children:"Connectivity"}),"\n",(0,t.jsx)(n.h3,{id:"which-p2p-port-does-bee-use-and-which-should-i-open-in-my-router",children:"Which p2p port does Bee use and which should I open in my router?"}),"\n",(0,t.jsxs)(n.p,{children:["The default p2p port for Bee is 1634, please forward this using your router and allow traffic over your firewall as necessary. Bee also supports UPnP but it is recommended you do not use this protocol as it lacks security. For more detailed information see the connectivity section in the docs. ",(0,t.jsx)(n.a,{href:"https://docs.ethswarm.org/docs/bee/installation/connectivity",children:"https://docs.ethswarm.org/docs/bee/installation/connectivity"})]}),"\n",(0,t.jsx)(n.h3,{id:"how-do-i-know-if-i-am-connected-to-other-peers",children:"How do I know if I am connected to other peers?"}),"\n",(0,t.jsxs)(n.p,{children:["You may communicate with your Bee using its HTTP api. Type ",(0,t.jsx)(n.code,{children:"curl http://localhost:1633/peers"})," at your command line to see a list of your peers."]}),"\n",(0,t.jsx)(n.h2,{id:"errors",children:"Errors"}),"\n",(0,t.jsx)(n.h3,{id:"what-does-could-not-connect-to-peer-mean",children:'What does "could not connect to peer" mean?'}),"\n",(0,t.jsx)(n.p,{children:"\u201cCould connect to peer can happen for various reasons.\u201d One of the most common is that you have the identifier of a peer in your address book from a previous session. When trying to connect to this node again, the peer may no longer be online."}),"\n",(0,t.jsx)(n.h3,{id:"what-does-context-deadline-exceeded-error-mean",children:'What does "context deadline exceeded" error mean?'}),"\n",(0,t.jsx)(n.p,{children:'The "context deadline exceeded" is a non critical warning. It means that a node took unexpectedly long to respond to a request from your node. Your node will automatically try again via another node.'}),"\n",(0,t.jsx)(n.h3,{id:"how-do-i-set-up-a-blockchain-endpoint",children:"How do I set up a blockchain endpoint?"}),"\n",(0,t.jsxs)(n.p,{children:["We recommend you run your own ",(0,t.jsx)(n.a,{href:"https://docs.gnosischain.com/node/tools/sedge",children:"Gnosis Node using Nethermind"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'If you use "bee start"'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"you can set it in your bee configuration under --blockchain-rpc-endpoint or BEE_BLOCKCHAIN_RPC_ENDPOINT"}),"\n",(0,t.jsx)(n.li,{children:"open ~/.bee.yaml"}),"\n",(0,t.jsxs)(n.li,{children:["set ",(0,t.jsx)(n.code,{children:"blockchain-rpc-endpoint: http://localhost:8545"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If you use bee.service"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"you can set it in your bee configuration under --blockchain-rpc-endpoint or BEE_BLOCKCHAIN_RPC_ENDPOINT"}),"\n",(0,t.jsx)(n.li,{children:"open /etc/bee/bee.yaml"}),"\n",(0,t.jsxs)(n.li,{children:["and then uncomment ",(0,t.jsx)(n.code,{children:"blockchain-rpc-endpoint"})," configuration"]}),"\n",(0,t.jsxs)(n.li,{children:["and set it to ",(0,t.jsx)(n.code,{children:"http://localhost:8545"})]}),"\n",(0,t.jsx)(n.li,{children:"after that sudo systemctl restart bee"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"how-can-i-export-my-private-keys",children:"How can I export my private keys?"}),"\n",(0,t.jsxs)(n.p,{children:["See the section on ",(0,t.jsx)(n.a,{href:"/docs/bee/working-with-bee/backups#files",children:"backups"})," for exporting your keys."]}),"\n",(0,t.jsx)(n.h3,{id:"how-to-import-bee-node-address-to-metamask",children:"How to import bee node address to MetaMask?"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["See the ",(0,t.jsx)(n.a,{href:"/docs/bee/working-with-bee/backups/",children:"backup section"})," for info on exporting keys."]}),"\n",(0,t.jsx)(n.li,{children:'Go to Metamask and click "Account 1" --\x3e "Import Account"'}),"\n",(0,t.jsx)(n.li,{children:'Choose the "Select Type" dropdown menu and choose "JSON file"'}),"\n",(0,t.jsx)(n.li,{children:"Paste the password (Make sure to do this first)"}),"\n",(0,t.jsx)(n.li,{children:"Upload exported JSON file"}),"\n",(0,t.jsx)(n.li,{children:'Click "Import"'}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"what-are-the-restart-commands-of-bee",children:"What are the restart commands of bee?"}),"\n",(0,t.jsx)(n.p,{children:"If you use bee.service:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Start: ",(0,t.jsx)(n.code,{children:"sudo systemctl start bee.service"})]}),"\n",(0,t.jsxs)(n.li,{children:["Stop: ",(0,t.jsx)(n.code,{children:"sudo systemctl stop bee.service"})]}),"\n",(0,t.jsxs)(n.li,{children:["Status: ",(0,t.jsx)(n.code,{children:"sudo systemctl status bee.service"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'If you use "bee start"'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Start: ",(0,t.jsx)(n.code,{children:"bee start"})]}),"\n",(0,t.jsxs)(n.li,{children:["Stop: ",(0,t.jsx)(n.code,{children:"ctrl + c"})," or ",(0,t.jsx)(n.code,{children:"cmd + c"})," or close terminal to stop process"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"relevant-endpoints-and-explanations",children:"Relevant endpoints and explanations"}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"https://docs.ethswarm.org/api/",children:"API Reference"})," pages for details."]}),"\n",(0,t.jsx)(n.p,{children:"Most common use cases:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"curl http://localhost:1633/peers"})," - Shows you the currently connected peers"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"curl http://localhost:1633/balances"})," - Shows balances (positive=incoming, negative=outgoing) accumulating with peers, some of which may or may not be currently connected"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"curl http://localhost:1633/settlements"})," - When the balance with a given peer exceeds a threshold, a settlement will be issued, if the settlement is received, then your node should have a check from that peer."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"curl http://localhost:1633/chequebook/address"})," your chequebook contract to see the xBZZ."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"how-can-i-check-how-many-cashed-out-cheques-do-i-have",children:"How can I check how many cashed out cheques do I have?"}),"\n",(0,t.jsxs)(n.p,{children:["You can look at your chequebook contract at etherscan.\nGet your chequebook contract address with: ",(0,t.jsx)(n.code,{children:"curl http://localhost:1633/chequebook/address"})]}),"\n",(0,t.jsx)(n.h3,{id:"i-have-compared-transactions-between-my-ethereum-address-and-my-chequebook-address-the-numbers-are-different-which-is-quite-weird",children:"I have compared transactions between my ethereum address and my chequebook address, the numbers are different, which is quite weird."}),"\n",(0,t.jsx)(n.p,{children:"Your chequebook will show OUT xBZZ transactions when your peers cash cheques issued by you, but you don't pay any gas for those so they won't show up in your Ethereum address transaction list."}),"\n",(0,t.jsx)(n.h3,{id:"where-can-i-find-documents-about-the-cashout-commands",children:"Where can I find documents about the cashout commands?"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://docs.ethswarm.org/docs/bee/working-with-bee/cashing-out",children:"https://docs.ethswarm.org/docs/bee/working-with-bee/cashing-out"})}),"\n",(0,t.jsxs)(n.h3,{id:"when-i-run-httplocalhost1633chequebookbalance-i-get-totalbalance-and-availablebalance-what-is-the-difference",children:["When I run ",(0,t.jsx)(n.a,{href:"http://localhost:1633/chequebook/balance",children:"http://localhost:1633/chequebook/balance"}),' I get "totalBalance" and "availableBalance" what is the difference?']}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"totalBalance"})," is the balance on the blockchain, ",(0,t.jsx)(n.code,{children:"availableBalance"})," is that balance minus the outstanding (non-cashed) cheques that you have issued to your peers. These latter cheques do not show up on the blockchain."]}),"\n",(0,t.jsx)(n.p,{children:"It's like what the bank thinks your balance is vs what your chequebook knows is actually available because of the cheques you've written that are still \"in the mail\" and not yet cashed."}),"\n",(0,t.jsx)(n.h3,{id:"what-determines-the-number-of-peers-and-how-to-influence-their-number-why-are-there-sometimes-300-peers-and-sometimes-30",children:"What determines the number of peers and how to influence their number? Why are there sometimes 300+ peers and sometimes 30?"}),"\n",(0,t.jsxs)(n.p,{children:['The number of connected peers is determined by your node as it attempts to keep the distributed Kademlia well connected. As nodes come and go in the network your peer count will go up and down. If you watch bee\'s output logs for "successfully connected", there should be a mix of (inbound) and (outbound) at the end of those messages. If you only get (outbound) then you may need to get your p2p port opened through your firewall and/or forwarded by your router. Check out the connectivity section in the docs ',(0,t.jsx)(n.a,{href:"https://docs.ethswarm.org/docs/bee/installation/connectivity",children:"https://docs.ethswarm.org/docs/bee/installation/connectivity"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"what-is-the-difference-between-systemctl-and-bee-start",children:'What is the difference between "systemctl" and "bee start"?'}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"bee start"})," and ",(0,t.jsx)(n.em,{children:"systemctl start bee"})," actually run 2 different instances with 2 different ",(0,t.jsx)(n.em,{children:"bee.yaml"})," files and two different data directories."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"bee start"})," uses ",(0,t.jsx)(n.em,{children:"~/.bee.yaml"})," and the ",(0,t.jsx)(n.em,{children:"~/.bee"})," directory for data\n",(0,t.jsx)(n.em,{children:"systemctl"})," uses ",(0,t.jsx)(n.em,{children:"/etc/bee/bee.yaml"})," and (IIRC) ",(0,t.jsx)(n.em,{children:"/var/lib/bee"})," for data"]}),"\n",(0,t.jsx)(n.h2,{id:"swarm-protocol",children:"Swarm Protocol"}),"\n",(0,t.jsx)(n.h3,{id:"can-i-use-one-ethereum-addresswallet-for-many-nodes",children:"Can I use one Ethereum Address/Wallet for many nodes?"}),"\n",(0,t.jsx)(n.p,{children:"No, this violates the requirements of the Swarm Protocol and will break critical node functions such as staking, purchasing stamp batches, and uploading data."}),"\n",(0,t.jsx)(n.p,{children:"Therefore, the rule is, each node must have:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"1 Ethereum address (this address, the Swarm network id, and a random nonce are used to determine the node's overlay address)"}),"\n",(0,t.jsx)(n.li,{children:"1 Chequebook"}),"\n",(0,t.jsx)(n.li,{children:"2 Unique ports for Bee API / p2p API"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"miscellaneous",children:"Miscellaneous"}),"\n",(0,t.jsx)(n.h3,{id:"how-can-i-add-gnosis--sepolia-to-metamask",children:"How can I add Gnosis / Sepolia to Metamask?"}),"\n",(0,t.jsxs)(n.p,{children:["You can easily add Sepolia or Gnosis to metamask using the ",(0,t.jsx)(n.a,{href:"https://support.metamask.io/networks-and-sidechains/managing-networks/how-to-add-a-custom-network-rpc/",children:"official guide from Metamask"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"If you are using a different wallet which does not have an easy option for adding networks like Metamask does, then you may need to add the networks manually. You need to fill in four pieces of information to do so:"}),"\n",(0,t.jsx)(n.h4,{id:"gnosis-chain",children:"Gnosis Chain"}),"\n",(0,t.jsxs)(n.p,{children:["Network name: Gnosis\nRPC URL: ",(0,t.jsx)(n.a,{href:"https://rpc.gnosischain.com",children:"https://rpc.gnosischain.com"}),"\nChain ID: 100\nCurrency symbol: XDAI"]}),"\n",(0,t.jsx)(n.h4,{id:"sepolia",children:"Sepolia"}),"\n",(0,t.jsxs)(n.p,{children:["Network name: Sepolia test network\nRPC URL: ",(0,t.jsx)(n.a,{href:"https://sepolia.infura.io/v3/",children:"https://sepolia.infura.io/v3/"}),"\nChain ID: 11155111\nCurrency symbol: SepoliaETH"]})]})}function l(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4552:(e,n,o)=>{o.d(n,{I:()=>r,M:()=>a});var t=o(11504);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);