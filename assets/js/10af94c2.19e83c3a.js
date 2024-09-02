"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[3269],{33199:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=t(74848),i=t(28453);const o={title:"Configuration",id:"configuration"},d=void 0,r={id:"desktop/configuration",title:"Configuration",description:"Setting RPC Endpoint",source:"@site/docs/desktop/configuration.md",sourceDirName:"desktop",slug:"/desktop/configuration",permalink:"/docs/desktop/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/desktop/configuration.md",tags:[],version:"current",frontMatter:{title:"Configuration",id:"configuration"},sidebar:"desktop",previous:{title:"Install",permalink:"/docs/desktop/install"},next:{title:"Access Content",permalink:"/docs/desktop/access-content"}},a={},c=[{value:"Setting RPC Endpoint",id:"setting-rpc-endpoint",level:2},{value:"Upgrading from an Ultra-light to a Light Node",id:"upgrading-from-an-ultra-light-to-a-light-node",level:2},{value:"Bridging Ethereum DAI to Gnosis Chain as xDAI",id:"bridging-ethereum-dai-to-gnosis-chain-as-xdai",level:3},{value:"Funding Node with xDAI",id:"funding-node-with-xdai",level:3},{value:"Set Up Wallet",id:"set-up-wallet",level:3},{value:"Fund Chequebook",id:"fund-chequebook",level:2}];function h(e){const n={a:"a",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"setting-rpc-endpoint",children:"Setting RPC Endpoint"}),"\n",(0,s.jsxs)(n.p,{children:["In order to interact with the Gnosis Chain to buy stamps, participate in staking, and manage assets such as xBZZ, Bee nodes require a valid Gnosis Chain RPC endpoint. By default the RPC endpoint is set to ",(0,s.jsx)(n.a,{href:"https://xdai.fairdatasociety.org",children:"https://xdai.fairdatasociety.org"}),", however any valid Gnosis Chain RPC endpoint may be used."]}),"\n",(0,s.jsxs)(n.p,{children:["To modify the RPC endpoint, first navigate to the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Settings"})})," tab:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(69472).A+"",width:"2527",height:"1197"})}),"\n",(0,s.jsxs)(n.p,{children:["From the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Settings"})})," tab, expand the API Settings section and click the pen button next to Blockchain RPC URL to edit the default RPC. You can choose any valid Gnosis Chain RPC, either from your own Gnosis node or a service provider. You can find a list of paid and free RPC options from the ",(0,s.jsx)(n.a,{href:"https://docs.gnosischain.com/tools/RPC%20Providers/",children:"Gnosis Chain docs"}),". For this example we will use the free endpoint - ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.a,{href:"https://rpc.gnosischain.com/",children:"https://rpc.gnosischain.com/"})}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(67035).A+"",width:"2478",height:"1155"})}),"\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Save and Restart"})})," to finish changing the RPC endpoint."]}),"\n",(0,s.jsx)(n.h2,{id:"upgrading-from-an-ultra-light-to-a-light-node",children:"Upgrading from an Ultra-light to a Light Node"}),"\n",(0,s.jsx)(n.p,{children:"Bee ultra-light nodes are limited to only downloading small amounts of data from Swarm. In order to download greater amounts of data or to upload data to Swarm you must upgrade to a light node. To do this we need to first fund our Swarm Desktop Bee node with some xDAI (DAI bridged from Ethereum to Gnosis Chain which serves as Gnosis Chain's native token for paying transaction fees) in order to pay for the Gnosis Chain transactions required for setting up a light node."}),"\n",(0,s.jsx)(n.h3,{id:"bridging-ethereum-dai-to-gnosis-chain-as-xdai",children:"Bridging Ethereum DAI to Gnosis Chain as xDAI"}),"\n",(0,s.jsxs)(n.p,{children:["If you already have some xDAI on a Gnosis Chain address, skip to the next step ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Funding Node with xDAI"})}),". If you have DAI on Ethereum and need to swap it for xDAI, you can use one of the ",(0,s.jsx)(n.a,{href:"https://bridge.gnosischain.com/",children:"Gnosis Chain Bridge"})]}),"\n",(0,s.jsx)(n.p,{children:"Five to ten xDAI is plenty to get started."}),"\n",(0,s.jsx)(n.h3,{id:"funding-node-with-xdai",children:"Funding Node with xDAI"}),"\n",(0,s.jsxs)(n.p,{children:["Once you have a few xDAI in your Gnosis Chain address, to fund your Bee node you need to send it from your wallet to your Swarm Desktop wallet. You can find your address from the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Account"})})," tab of the app."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(45490).A+"",width:"2547",height:"1155"})}),"\n",(0,s.jsx)(n.p,{children:"Next simply send your xDAI to that address. Before sending, make sure you have set your wallet to use the Gnosis Chain network and not the Ethereum mainnet. If Gnosis Chain is not included as default selectable network in your wallet, you may need to add the network manually. You can use this configuration to add Gnosis Chain:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Network name:"})}),(0,s.jsx)(n.td,{children:"Gnosis"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"New RPC URL:"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://rpc.gnosischain.com",children:"https://rpc.gnosischain.com"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Chain ID:"})}),(0,s.jsx)(n.td,{children:"100"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Symbol:"})}),(0,s.jsx)(n.td,{children:"xDai"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Block Explorer URL (Optional):"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://blockscout.com/xdai/mainnet",children:"https://blockscout.com/xdai/mainnet"})})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(75469).A+"",width:"1675",height:"1177"})}),"\n",(0,s.jsxs)(n.p,{children:["The transaction should be confirmed in under a minute. We can check on the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Account"})})," page to see when the xDAI has been received:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(12228).A+"",width:"2535",height:"1143"})}),"\n",(0,s.jsx)(n.h3,{id:"set-up-wallet",children:"Set Up Wallet"}),"\n",(0,s.jsx)(n.p,{children:"Now with some xDAI in the Swarm Desktop wallet, we can upgrade our Bee node from ultra-light to a light node. Completing the setup process will swap xDAI for some xBZZ at the current price, and will issue the transactions needed to set up the chequebook contract."}),"\n",(0,s.jsxs)(n.p,{children:["To get started, navigate to the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Info"})})," tab and click the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Setup wallet"})})," button.\n",(0,s.jsx)(n.img,{src:t(76994).A+"",width:"2541",height:"1190"}),"\nClick ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Use xDAI"})}),".\n",(0,s.jsx)(n.img,{src:t(97503).A+"",width:"2528",height:"1168"}),"\nConfirm that you have sufficient xDAI balance and click ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Proceed"})}),".\n",(0,s.jsx)(n.img,{src:t(43702).A+"",width:"2506",height:"1188"}),"\nClick ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Swap Now and Upgrade"})}),".\n",(0,s.jsx)(n.img,{src:t(82481).A+"",width:"2465",height:"1187"}),"\nWait for the upgrade to complete.\n",(0,s.jsx)(n.img,{src:t(34088).A+"",width:"2556",height:"1170"}),"\nAfter the upgrade is complete, you will see several new sections within the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Account"})})," tab: ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Chequebook"})}),", ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Stamps"})}),", and ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Feeds"})}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"fund-chequebook",children:"Fund Chequebook"}),"\n",(0,s.jsxs)(n.p,{children:["After setting up your wallet you will have access to the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Chequebook"})})," section from the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Accounts"})})," tab. From here you can manage your chequebook for your Swarm Desktop Bee node."]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},69472:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/config1-15196d3cb27f623451d8370424129607.png"},76994:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/config10-c0c2ea8894a3bb3efa3ef7b3f5055b31.png"},67035:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/config2-db261ee73394366683c1419b667ab502.png"},45490:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/config3-ce9c6cd07388bdab2037bc88c3d49855.png"},75469:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/config4-57276e415842625888aa7d6973572a7b.png"},12228:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/config5-ddc7105976d468c38f2697f61cab9f4b.png"},97503:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/config6-60dcf8e9b6e900e032e1e0ef0406d04e.png"},43702:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/config7-67af3ebb34dd4a823c2a2fb702dc952f.png"},82481:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/config8-950886e558f0f854278cee1881d5b917.png"},34088:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/config9-3b54daefeaecdc9099e06bbb2bf3f92e.png"},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>r});var s=t(96540);const i={},o=s.createContext(i);function d(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);