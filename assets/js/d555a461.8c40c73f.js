"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[9272],{88898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=n(74848),r=n(28453);const s={title:"Store with Encryption",id:"store-with-encryption"},o="Encrypt and Upload a File",i={id:"develop/access-the-swarm/store-with-encryption",title:"Store with Encryption",description:"In Swarm, all data is public by default. To protect sensitive content, it must be encrypted so that only authorised users are able to decrypt and then view the plaintext content.",source:"@site/docs/develop/access-the-swarm/store-with-encryption.md",sourceDirName:"develop/access-the-swarm",slug:"/develop/access-the-swarm/store-with-encryption",permalink:"/docs/develop/access-the-swarm/store-with-encryption",draft:!1,unlisted:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/develop/access-the-swarm/store-with-encryption.md",tags:[],version:"current",frontMatter:{title:"Store with Encryption",id:"store-with-encryption"},sidebar:"develop",previous:{title:"Erasure Coding",permalink:"/docs/develop/access-the-swarm/erasure-coding"},next:{title:"Host Your Website on Swarm",permalink:"/docs/develop/access-the-swarm/host-your-website"}},c={},d=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["In Swarm, all data is ",(0,a.jsx)(t.em,{children:"public"})," by default. To protect sensitive content, it must be encrypted so that only authorised users are able to decrypt and then view the plaintext content."]}),"\n",(0,a.jsx)(t.p,{children:"The Bee client provides a facility to encrypt files and directories while uploading which are only able to be read by users with access to the corresponding decryption key."}),"\n",(0,a.jsx)(t.h1,{id:"encrypt-and-upload-a-file",children:"Encrypt and Upload a File"}),"\n",(0,a.jsxs)(t.p,{children:["To encrypt a file simply include the ",(0,a.jsx)(t.code,{children:"Swarm-Encrypt: true"})," header with your HTTP request."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'curl -F file=@bee.jpg -H "Swarm-Postage-Batch-Id: 78a26be9b42317fe6f0cbea3e47cbd0cf34f533db4e9c91cf92be40eb2968264" -H "Swarm-Encrypt: true" http://localhost:1633/bzz\n'})}),"\n",(0,a.jsx)(t.p,{children:"When successful, the Bee client will return a 64 byte reference, instead of the usual 32 bytes."}),"\n",(0,a.jsxs)(t.p,{children:["More information on how to buy a postage stamp batch and get its batch id can be found ",(0,a.jsx)(t.a,{href:"/docs/develop/access-the-swarm/buy-a-stamp-batch",children:"here"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n  "reference": "f7b1a45b70ee91d3dbfd98a2a692387f24db7279a9c96c447409e9205cf265baef29bf6aa294264762e33f6a18318562c86383dd8bfea2cec14fae08a8039bf3"\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"Here we see that, when using the Bee node's encryption function, the reference hash that is returned is 128 hex characters long. The first 64 characters of this is the familiar Swarm address - the reference that allows us to retrieve the data from the swarm. This is the same reference we would get uploading unencrypted files using Bee, so it is safe to share."}),"\n",(0,a.jsx)(t.p,{children:"The second part of the reference is a 64 character decryption key which is required to decrypt the referenced content and view the original data in the clear. This is sensitive key material and must be kept private."}),"\n",(0,a.jsxs)(t.p,{children:["It is important that this data not be sent in requests to a public gateway as this would mean that gateway would be able to decrypt your data. However, if you are running a node on your local machine, you may safely use the API bound to ",(0,a.jsx)(t.code,{children:"localhost"}),". The key material is never exposed to the network so your data remains safe."]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["Encryption is disabled by default on all Swarm Gateways to keep your data safe. ",(0,a.jsx)(t.a,{href:"/docs/bee/installation/quick-start",children:"Install Bee on your computer"})," to use the encryption feature."]})}),"\n",(0,a.jsx)(t.h1,{id:"download-and-decrypt-a-file",children:"Download and Decrypt a File"}),"\n",(0,a.jsx)(t.p,{children:"To retrieve your file, simply supply the full 64 byte string to the files endpoint, and the Bee client will download and decrypt all the relevant chunks and restore them to their original format."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"curl -OJ http://localhost:1633/bzz/f7b1a45b70ee91d3dbfd98a2a692387f24db7279a9c96c447409e9205cf265baef29bf6aa294264762e33f6a18318562c86383dd8bfea2cec14fae08a8039bf3\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"danger",children:(0,a.jsxs)(t.p,{children:["Never use public gateways when requesting full encrypted references. The hash contains sensitive key information which should be kept private. Run ",(0,a.jsx)(t.a,{href:"/docs/bee/installation/quick-start",children:"your own node"})," to use Bee's encryption features."]})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var a=n(96540);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);