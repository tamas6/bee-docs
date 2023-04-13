"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[1139],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),h=a,f=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1937:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={title:"Store with Encryption",id:"store-with-encryption"},s=void 0,l={unversionedId:"access-the-swarm/store-with-encryption",id:"access-the-swarm/store-with-encryption",title:"Store with Encryption",description:"In Swarm, all data is public by default. To protect sensitive content, it must be encrypted so that only authorised users are able to decrypt and then view the plaintext content.",source:"@site/docs/access-the-swarm/store-with-encryption.md",sourceDirName:"access-the-swarm",slug:"/access-the-swarm/store-with-encryption",permalink:"/docs/access-the-swarm/store-with-encryption",draft:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/access-the-swarm/store-with-encryption.md",tags:[],version:"current",frontMatter:{title:"Store with Encryption",id:"store-with-encryption"},sidebar:"Balls",previous:{title:"Direct upload",permalink:"/docs/access-the-swarm/direct-upload"},next:{title:"Host Your Website on Swarm",permalink:"/docs/access-the-swarm/host-your-website"}},p={},u=[],d={toc:u},h="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(h,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In Swarm, all data is ",(0,o.kt)("em",{parentName:"p"},"public")," by default. To protect sensitive content, it must be encrypted so that only authorised users are able to decrypt and then view the plaintext content."),(0,o.kt)("p",null,"The Bee client provides a facility to encrypt files and directories while uploading which are only able to be read by users with access to the corresponding decryption key."),(0,o.kt)("h1",{id:"encrypt-and-upload-a-file"},"Encrypt and Upload a File"),(0,o.kt)("p",null,"To encrypt a file simply include the ",(0,o.kt)("inlineCode",{parentName:"p"},"Swarm-Encrypt: true")," header with your HTTP request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -F file=@bee.jpg -H "Swarm-Postage-Batch-Id: 78a26be9b42317fe6f0cbea3e47cbd0cf34f533db4e9c91cf92be40eb2968264" -H "Swarm-Encrypt: true" http://localhost:1633/bzz\n')),(0,o.kt)("p",null,"When successful, the Bee client will return a 64 byte reference, instead of the usual 32 bytes."),(0,o.kt)("p",null,"More information on how to buy a postage stamp batch and get its batch id can be found ",(0,o.kt)("a",{parentName:"p",href:"/docs/access-the-swarm/keep-your-data-alive"},"here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "reference": "f7b1a45b70ee91d3dbfd98a2a692387f24db7279a9c96c447409e9205cf265baef29bf6aa294264762e33f6a18318562c86383dd8bfea2cec14fae08a8039bf3"\n}\n')),(0,o.kt)("p",null,"Here we see that, when using the Bee node's encryption function, the reference hash that is returned is 128 hex characters long. The first 64 characters of this is the familiar Swarm address - the reference that allows us to retrieve the data from the swarm. This is the same reference we would get uploading unencrypted files using Bee, so it is safe to share."),(0,o.kt)("p",null,"The second part of the reference is a 64 character decryption key which is required to decrypt the referenced content and view the original data in the clear. This is sensitive key material and must be kept private."),(0,o.kt)("p",null,"It is important that this data not be sent in requests to a public gateway as this would mean that gateway would be able to decrypt your data. However, if you are running a node on your local machine, you may safely use the API bound to ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost"),". The key material is never exposed to the network so your data remains safe."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Encryption is disabled by default on all Swarm Gateways to keep your data safe. ",(0,o.kt)("a",{parentName:"p",href:"/docs/installation/quick-start"},"Install Bee on your computer")," to use the encryption feature.")),(0,o.kt)("h1",{id:"download-and-decrypt-a-file"},"Download and Decrypt a File"),(0,o.kt)("p",null,"To retrieve your file, simply supply the full 64 byte string to the files endpoint, and the Bee client will download and decrypt all the relevant chunks and restore them to their original format."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -OJ http://localhost:1633/files/f7b1a45b70ee91d3dbfd98a2a692387f24db7279a9c96c447409e9205cf265baef29bf6aa294264762e33f6a18318562c86383dd8bfea2cec14fae08a8039bf3\n")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Never use public gateways when requesting full encrypted references. The hash contains sensitive key information which should be kept private. Run ",(0,o.kt)("a",{parentName:"p",href:"/docs/installation/quick-start"},"your own node")," to use Bee's encryption features.")))}f.isMDXComponent=!0}}]);