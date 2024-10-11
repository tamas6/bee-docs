"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[4623],{33271:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=t(74848),r=t(28453);const i={title:"What is Swarm?",id:"what-is-swarm"},o="What is Swarm?",s={id:"learn/technology/what-is-swarm",title:"What is Swarm?",description:"The complete vision of Swarm is described in detail in The Book of Swarm written by Swarm founder Viktor Tron, with further high level details described in the whitepaper. More in depth low level implementation details can be found in the Swarm Specification paper. To stay up to date with all the latest research and technical papers from Swarm, make sure to bookmark the Papers section of the Ethswarm homepage.",source:"@site/docs/learn/technology/what-is-swarm.md",sourceDirName:"learn/technology",slug:"/learn/technology/what-is-swarm",permalink:"/docs/learn/technology/what-is-swarm",draft:!1,unlisted:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/learn/technology/what-is-swarm.md",tags:[],version:"current",frontMatter:{title:"What is Swarm?",id:"what-is-swarm"},sidebar:"learn",previous:{title:"Introduction",permalink:"/docs/learn/introduction"},next:{title:"DISC",permalink:"/docs/learn/technology/disc"}},l={},d=[{value:"1. Underlay Network",id:"1-underlay-network",level:3},{value:"2. Overlay Network",id:"2-overlay-network",level:3},{value:"3. Data Access Layer",id:"3-data-access-layer",level:3},{value:"4. Application Layer",id:"4-application-layer",level:3}];function c(e){const n={a:"a",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"what-is-swarm",children:"What is Swarm?"})}),"\n",(0,a.jsxs)(n.p,{children:["The complete vision of Swarm is described in detail in ",(0,a.jsx)(n.a,{href:"https://www.ethswarm.org/the-book-of-swarm-2.pdf",children:"The Book of Swarm"})," written by Swarm founder Viktor Tron, with further high level details described in the ",(0,a.jsx)(n.a,{href:"https://papers.ethswarm.org/p/whitepaper/",children:"whitepaper"}),". More in depth low level implementation details can be found in the ",(0,a.jsx)(n.a,{href:"https://papers.ethswarm.org/p/swarm-specification/",children:"Swarm Specification paper"}),". To stay up to date with all the latest research and technical papers from Swarm, make sure to bookmark the ",(0,a.jsx)(n.a,{href:"https://papers.ethswarm.org/",children:"Papers section"})," of the Ethswarm homepage."]}),"\n",(0,a.jsx)(n.p,{children:"Swarm is peer-to-peer network of nodes which work together to provide decentralised storage and communication infrastructure."}),"\n",(0,a.jsx)(n.p,{children:"Swarm can be divided into four main parts:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Underlay Network - A peer-to-peer network protocol to serve as underlay transport."}),"\n",(0,a.jsx)(n.li,{children:"Overlay Network - An overlay network with protocols powering a distributed immutable storage of chunks (fixed size data blocks)."}),"\n",(0,a.jsx)(n.li,{children:"Data Access Layer - A component providing high-level data access and defining APIs for base-layer features."}),"\n",(0,a.jsx)(n.li,{children:"Application Layer - An application layer defining standards and outlining best practices for more elaborate use cases."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"1-underlay-network",children:"1. Underlay Network"}),"\n",(0,a.jsx)(n.p,{children:"The first part of Swarm is a peer-to-peer network protocol that serves as the underlay transport. The underlay transport layer is responsible for establishing connections between nodes in the network and routing data between them. It provides a low-level communication channel that enables nodes to communicate with each other directly, without relying on any centralised infrastructure."}),"\n",(0,a.jsx)(n.p,{children:"Swarm is designed to be agnostic of the particular underlay transport used, as long as it satisfies certain requirements."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Addressing \u2013 Nodes are identified by their underlay address."}),"\n",(0,a.jsx)(n.li,{children:"Dialling \u2013 Nodes can initiate a direct connection to a peer by dialing them on\ntheir underlay address."}),"\n",(0,a.jsx)(n.li,{children:"Listening \u2013 Nodes can listen to other peers dialing them and can accept incoming\nconnections. Nodes that do not accept incoming connections are called light\nnodes."}),"\n",(0,a.jsx)(n.li,{children:"Live connection \u2013 A node connection establishes a channel of communication which\nis kept alive until explicit disconnection, so that the existence of a connection\nmeans the remote peer is online and accepting messages."}),"\n",(0,a.jsx)(n.li,{children:"Channel security \u2013 The channel provides identity verification and implements\nencrypted and authenticated transport resisting man in the middle attacks."}),"\n",(0,a.jsx)(n.li,{children:"Protocol multiplexing \u2013 The underlay network service can accommodate several\nprotocols running on the same connection."}),"\n",(0,a.jsx)(n.li,{children:"Delivery guarantees \u2013 Protocol messages have guaranteed delivery, i.e. delivery\nfailures due to network problems result in direct error response. Order of delivery\nof messages within each protocol is guaranteed."}),"\n",(0,a.jsx)(n.li,{children:"Serialisation \u2013 The protocol message construction supports arbitrary data structure\nserialisation conventions."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["As the ",(0,a.jsx)(n.a,{href:"https://libp2p.io/",children:"libp2p"})," library meets all these requirements it has been used to build the Swarm underlay network."]}),"\n",(0,a.jsx)(n.h3,{id:"2-overlay-network",children:"2. Overlay Network"}),"\n",(0,a.jsxs)(n.p,{children:["The second part of Swarm is an overlay network with protocols powering the ",(0,a.jsx)(n.a,{href:"/docs/learn/technology/disc/",children:"Distributed Immutable Store of Chunks (DISC)"}),". This layer is responsible for storing and retrieving data in a decentralised and secure manner."]}),"\n",(0,a.jsxs)(n.p,{children:["Swarm's overlay network is built on top of the underlay transport layer and uses ",(0,a.jsx)(n.a,{href:"/docs/learn/glossary#kademlia",children:"Kademlia"})," overlay routing to enable efficient and scalable communication between nodes. Kademlia is a distributed hash table (DHT) algorithm that allows nodes to locate each other in the network based on their unique identifier or hash."]}),"\n",(0,a.jsx)(n.p,{children:"Swarm's DISC is an implementation of a Kademlia DHT optimized for storage. While the use of DHTs in distributed data storage protocols is common, for many implementations DHTs are used only for indexing of specific file locations. Swarm's DISC distinguishes itself from other implementations by instead breaking files into chunks and storing the chunks themselves directly within a Kademlia DHT."}),"\n",(0,a.jsx)(n.p,{children:"Each chunk has a fixed size of 4kb and is distributed across the network using the DISC model. Each chunk has a unique address taken from the same namespace as the network node addresses that allows it to be located and retrieved by other nodes in the network."}),"\n",(0,a.jsx)(n.p,{children:"Swarm's distributed immutable storage provides several benefits, including data redundancy, tamper-proofing, and fault tolerance. Because data is stored across multiple nodes in the network, it can be retrieved even if some nodes fail or go offline."}),"\n",(0,a.jsx)(n.h3,{id:"3-data-access-layer",children:"3. Data Access Layer"}),"\n",(0,a.jsx)(n.p,{children:"The third part of Swarm is a component that provides high-level data access and defines APIs for base-layer features. This layer is responsible for providing an easy-to-use interface for developers to interact with Swarm's underlying storage and communication infrastructure."}),"\n",(0,a.jsxs)(n.p,{children:["Swarm's high-level data access component provides APIs that allow developers to perform various operations on the network, including ",(0,a.jsx)(n.a,{href:"/docs/develop/access-the-swarm/upload-and-download",children:"uploading and downloading data"})," and searching for content. These APIs are designed to be simple and intuitive, making it easy for developers to build decentralised applications on top of Swarm."]}),"\n",(0,a.jsx)(n.h3,{id:"4-application-layer",children:"4. Application Layer"}),"\n",(0,a.jsxs)(n.p,{children:["The fourth part of Swarm is an application layer that defines standards and outlines best practices for more elaborate use cases. This layer is responsible for providing guidance to developers on ",(0,a.jsx)(n.a,{href:"/docs/develop/introduction",children:"how to build complex applications"})," on top of Swarm's underlying infrastructure."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var a=t(96540);const r={},i=a.createContext(r);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);