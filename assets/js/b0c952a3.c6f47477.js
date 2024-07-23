"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[5428],{87500:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=o(17624),s=o(4552);const r={title:"Starting a Test Network",id:"starting-a-test-network"},a=void 0,i={id:"develop/tools-and-features/starting-a-test-network",title:"Starting a Test Network",description:"A test network can be used to test your applications in an isolated environment before you deploy to Swarm mainnet. It can be started by overriding the default configuration values of your Swarm node. Throughout this tutorial, we will make use of configuration files to configure the nodes but of course you can also do the same using flags or environment variables (see Start your node).",source:"@site/docs/develop/tools-and-features/starting-a-test-network.md",sourceDirName:"develop/tools-and-features",slug:"/develop/tools-and-features/starting-a-test-network",permalink:"/docs/develop/tools-and-features/starting-a-test-network",draft:!1,unlisted:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/develop/tools-and-features/starting-a-test-network.md",tags:[],version:"current",frontMatter:{title:"Starting a Test Network",id:"starting-a-test-network"},sidebar:"develop",previous:{title:"Developer mode",permalink:"/docs/develop/tools-and-features/bee-dev-mode"},next:{title:"Introduction",permalink:"/docs/develop/contribute/introduction"}},d={},c=[{value:"Start a network on your own computer",id:"start-a-network-on-your-own-computer",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Starting Your Nodes",id:"starting-your-nodes",level:3},{value:"Making a network",id:"making-a-network",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["A test network can be used to test your applications in an isolated environment before you deploy to Swarm mainnet. It can be started by overriding the default configuration values of your Swarm node. Throughout this tutorial, we will make use of configuration files to configure the nodes but of course you can also do the same using flags or environment variables (see ",(0,t.jsx)(n.a,{href:"/docs/bee/working-with-bee/configuration",children:"Start your node"}),")."]}),"\n",(0,t.jsx)(n.h2,{id:"start-a-network-on-your-own-computer",children:"Start a network on your own computer"}),"\n",(0,t.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Starting a network is easiest achieved by making use of configuration files. We need at least two nodes to start a network. Hence, below two configuration files are provided. Save them respectively as ",(0,t.jsx)(n.code,{children:"config_1.yaml"})," and ",(0,t.jsx)(n.code,{children:"config_2.yaml"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"config_1.yaml"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'network-id: 7357\napi-addr: 127.0.0.1:1633\np2p-addr: :1634\nbootnode: ""\ndata-dir: /tmp/bee/node1\npassword: some pass phze\nswap-enable: false\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"config_2.yaml"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'network-id: 7357\napi-addr: 127.0.0.1::1733\np2p-addr: :1734\ndata-dir: /tmp/bee/node2\nbootnode: ""\npassword: some pass phze\nwelcome-message: "Bzz Bzz Bzz"\nswap-enable: false\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Note that for each node, we provide a different ",(0,t.jsx)(n.code,{children:"api-addr"}),". If we had not specified different addresses here, we\nwould get an ",(0,t.jsx)(n.code,{children:"address already in use"})," error, as no two applications\ncan listen to the same port. We also specify a different\n",(0,t.jsx)(n.code,{children:"p2p-addr"}),". If we had not, our nodes would not be able to communicate\nwith each other. We also specify a separate ",(0,t.jsx)(n.code,{children:"data-dir"})," for each node,\nas each node must have its own separate key and chunk data store."]}),"\n",(0,t.jsxs)(n.p,{children:["We also provide a network-id, so that our network remains separate\nfrom the Swarm mainnet, which has network-id 1. Nodes will not connect\nto peers which have a different network id. We also set our bootnode\nto be the empty string ",(0,t.jsx)(n.code,{children:'""'}),". A bootnode is responsible for\nbootstrapping the network so that a new node can find its first few\npeers before it begins its own journey to find friends in the\nSwarm. In Swarm any node can be used as a bootnode. Later, we will\nmanually join our nodes together so in this case a bootnode isn't\nrequired."]}),"\n",(0,t.jsxs)(n.p,{children:["Finally, note the ",(0,t.jsx)(n.code,{children:"welcome-message"})," in the first nodes configuration file. This is a friendly feature allowing you to send a message to peers that connect to you!"]}),"\n",(0,t.jsx)(n.h3,{id:"starting-your-nodes",children:"Starting Your Nodes"}),"\n",(0,t.jsxs)(n.p,{children:["Now we have created our configuration files, let's start our nodes by running ",(0,t.jsx)(n.code,{children:"bee start --config config_1.yaml"}),", then in another Terminal session, run ",(0,t.jsx)(n.code,{children:"bee start --config-file config_2.yaml"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["We can now inspect the state of our network by sending HTTP requests to the ",(0,t.jsx)(n.a,{href:"/api/",children:"API"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -s http://localhost:1633/topology | jq .connected\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"0\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -s http://localhost:1733/topology | jq .connected\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"0\n"})}),"\n",(0,t.jsx)(n.p,{children:"No connections yet? Right! Let's remedy that!"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Here we are using the ",(0,t.jsx)(n.code,{children:"jq"})," command line utility to count the amount of objects in the ",(0,t.jsx)(n.code,{children:"peers"})," array in the JSON response we have received from our API, learn more about how to install and use ",(0,t.jsx)(n.code,{children:"jq"})," ",(0,t.jsx)(n.a,{href:"https://stedolan.github.io/jq/",children:"here"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"making-a-network",children:"Making a network"}),"\n",(0,t.jsx)(n.p,{children:"In order to create a network from our two isolated nodes, we must first instruct our nodes to connect to each other. This step is not explicitly needed if you connect to the main Swarm network, as the default bootnodes in the Swarm network will automatically suggest peers."}),"\n",(0,t.jsxs)(n.p,{children:["First, we will need to find out the network address of the first node. To do this, we send a HTTP request to the ",(0,t.jsx)(n.code,{children:"addresses"})," endpoint of the API."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl localhost:1633/addresses | jq\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "overlay": "f57a65207f5766084d3ebb6bea5e2e4a712504e54d86a00961136b514f07cdac",\n  "underlay": [\n    "/ip4/127.0.0.1/tcp/1634/p2p/16Uiu2HAmUdCRWmyQCEahHthy7G4VsbBQ6dY9Hnk79337NfadKJEs",\n    "/ip4/192.168.0.10/tcp/1634/p2p/16Uiu2HAmUdCRWmyQCEahHthy7G4VsbBQ6dY9Hnk79337NfadKJEs",\n    "/ip6/::1/tcp/1634/p2p/16Uiu2HAmUdCRWmyQCEahHthy7G4VsbBQ6dY9Hnk79337NfadKJEs",\n    "/ip4/xx.xx.xx.xx/tcp/40317/p2p/16Uiu2HAmUdCRWmyQCEahHthy7G4VsbBQ6dY9Hnk79337NfadKJEs"\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Here, we get firstly the ",(0,t.jsx)(n.strong,{children:"overlay address"})," - this is the permanent address Swarm uses as your anonymous identity in the network and secondly, a list of all the ",(0,t.jsx)(n.a,{href:"https://docs.libp2p.io/reference/glossary/#multiaddr",children:"multiaddresses"}),", which are physical network addresses at which you node can be found by peers."]}),"\n",(0,t.jsxs)(n.p,{children:["Note the addresses starting with an ",(0,t.jsx)(n.code,{children:"/ip4"}),", followed by ",(0,t.jsx)(n.code,{children:"127.0.0.1"}),", which is the ",(0,t.jsx)(n.code,{children:"localhost"})," internal network in your computer. Now we can use this full address to be the bootnode of our second node so that when it starts up, it goes to this address and both nodes become peers of each other. Let's add this into our config_2.yaml file."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"config_2.yaml"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'network-id: 7357\napi-addr: 127.0.0.1::1733\np2p-addr: :1734\ndata-dir: /tmp/bee/node2\nbootnode: "/ip4/127.0.0.1/tcp/1634/p2p/16Uiu2HAmUdCRWmyQCEahHthy7G4VsbBQ6dY9Hnk79337NfadKJEs"\npassword: some pass phze\nwelcome-message: "Bzz Bzz Bzz"\nswap-enable: false\n'})}),"\n",(0,t.jsx)(n.p,{children:"Now, we can shut our second node and reboot with the new configuration."}),"\n",(0,t.jsx)(n.p,{children:"Look at the the output for your first node, you should see our connection message!"}),"\n",(0,t.jsx)(n.p,{children:"Let's also verify that we can see both nodes in using each other's API's."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -s http://localhost:1633/peers | jq\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -s http://localhost:1733/peers | jq\n"})}),"\n",(0,t.jsx)(n.p,{children:"Congratulations! You have made your own tiny two bee Swarm! \ud83d\udc1d \ud83d\udc1d"})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},4552:(e,n,o)=>{o.d(n,{I:()=>i,M:()=>a});var t=o(11504);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);