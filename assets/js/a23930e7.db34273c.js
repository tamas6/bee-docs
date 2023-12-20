"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[18],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(a),h=n,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||i;return a?o.createElement(m,r(r({ref:t},d),{},{components:a})):o.createElement(m,r({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,r[1]=l;for(var u=2;u<i;u++)r[u]=a[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},61258:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var o=a(87462),n=a(63366),i=(a(67294),a(3905)),r=["components"],l={title:"Publish a Website",id:"publish-a-website"},s=void 0,u={unversionedId:"desktop/publish-a-website",id:"desktop/publish-a-website",title:"Publish a Website",description:"Step by Step Guide",source:"@site/docs/desktop/publish-a-website.md",sourceDirName:"desktop",slug:"/desktop/publish-a-website",permalink:"/docs/desktop/publish-a-website",draft:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/desktop/publish-a-website.md",tags:[],version:"current",frontMatter:{title:"Publish a Website",id:"publish-a-website"},sidebar:"desktop",previous:{title:"Backup and Restore",permalink:"/docs/desktop/backup-restore"},next:{title:"Start a Blog",permalink:"/docs/desktop/start-a-blog"}},d={},p=[{value:"Step by Step Guide",id:"step-by-step-guide",level:2},{value:"Install Swarm Desktop and Deposit Funds",id:"install-swarm-desktop-and-deposit-funds",level:3},{value:"Setup Chequebook",id:"setup-chequebook",level:3},{value:"Publish Website",id:"publish-website",level:3},{value:"Connecting an ENS Domain to Your Website",id:"connecting-an-ens-domain-to-your-website",level:3},{value:"Update the Website: Set up and update a feed",id:"update-the-website-set-up-and-update-a-feed",level:3},{value:"Set up a Feed:",id:"set-up-a-feed",level:4},{value:"Upload Website on Swarm and connect it to the Feed:",id:"upload-website-on-swarm-and-connect-it-to-the-feed",level:4}],c={toc:p},h="wrapper";function m(e){var t=e.components,l=(0,n.Z)(e,r);return(0,i.kt)(h,(0,o.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"step-by-step-guide"},"Step by Step Guide"),(0,i.kt)("h3",{id:"install-swarm-desktop-and-deposit-funds"},"Install Swarm Desktop and Deposit Funds"),(0,i.kt)("p",null,"First, download and ",(0,i.kt)("a",{parentName:"p",href:"/docs/desktop/install"},"install the Swarm Desktop App"),". Next, add xDAI (transaction fees) to your Node Wallet address. If you possess xBZZ (storage fees), you can deposit it alongside the xDAI. Otherwise, you can exchange your xDAI for xBZZ using the Swarm Desktop app."),(0,i.kt)("p",null,"Follow these steps to deposit funds:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Launch the Swarm Desktop App and go to the Account section in the left menu."),(0,i.kt)("li",{parentName:"ol"},"Transfer xDAI to your node wallet address. For safety, we suggest sending no more than 5 to 10 xDAI."),(0,i.kt)("li",{parentName:"ol"},"After funding your wallet, click the Top Up Wallet button on the right side of the screen."),(0,i.kt)("li",{parentName:"ol"},"Select the Use xDAI option."),(0,i.kt)("li",{parentName:"ol"},"Verify your xDAI balance and click Proceed."),(0,i.kt)("li",{parentName:"ol"},"Specify the amount of xDAI to convert to xBZZ and click Swap Now."),(0,i.kt)("li",{parentName:"ol"},"Your Node Wallet address will be credited with xBZZ.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(63908).Z,width:"1634",height:"948"})),(0,i.kt)("h3",{id:"setup-chequebook"},"Setup Chequebook"),(0,i.kt)("p",null,"Your node address is now funded with xDAI and xBZZ. However, to upload data on Swarm, you will need to transfer your funds to the Chequebook contract address."),(0,i.kt)("p",null,"Follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the Account section in the left menu."),(0,i.kt)("li",{parentName:"ol"},"Select the Chequebook tab in the top menu."),(0,i.kt)("li",{parentName:"ol"},"Click the Deposit button."),(0,i.kt)("li",{parentName:"ol"},"Specify the amount of xBZZ to deposit into your Chequebook, which will be used for storage costs.")),(0,i.kt)("h3",{id:"publish-website"},"Publish Website"),(0,i.kt)("p",null,"To publish your website on Swarm, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to the Files tab."),(0,i.kt)("li",{parentName:"ol"},"Click the Add Website button."),(0,i.kt)("li",{parentName:"ol"},"Select your website folder. NOTE: The index.html file should be in the root folder."),(0,i.kt)("li",{parentName:"ol"},"Purchase a Postage Stamp to publish your page. NOTE: Postage stamps cover storage costs for a specified duration."),(0,i.kt)("li",{parentName:"ol"},"Upload the website.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(70531).Z,width:"1280",height:"720"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://api.gateway.ethswarm.org/bzz/6843d3be17364ea0620011430e4db2a26ff781da478493a02d6eb5aae886b8ae/"},"https://api.gateway.ethswarm.org/bzz/6843d3be17364ea0620011430e4db2a26ff781da478493a02d6eb5aae886b8ae/")),(0,i.kt)("h3",{id:"connecting-an-ens-domain-to-your-website"},"Connecting an ENS Domain to Your Website"),(0,i.kt)("p",null,"Associating your ENS domain with a Swarm hash generates a memorable, user-friendly identifier for your website, allowing users to easily locate and access your website without having to recall a lengthy, complex Swarm hash."),(0,i.kt)("p",null,"Initially, you\u2019ll need to register your domain name. To register and manage your ENS domain, you can use the ENS Domains Dapp along with the MetaMask browser extension."),(0,i.kt)("p",null,"After registering your name and connecting MetaMask to the relevant Ethereum account, set the resolver to use the public ENS if you haven\u2019t already."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to My Names and select the name you want to link to your Swarm content."),(0,i.kt)("li",{parentName:"ol"},"Click on ADD/EDIT RECORD."),(0,i.kt)("li",{parentName:"ol"},'From the "add record" dropdown menu, select Content.'),(0,i.kt)("li",{parentName:"ol"},'Enter your Swarm Hash, beginning with "bzz://" and click "Save."')),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(84020).Z,width:"1280",height:"720"})),(0,i.kt)("p",null,"Your website is now available on:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://api.gateway.ethswarm.org/bzz/swarm-devrel.eth/"},"https://api.gateway.ethswarm.org/bzz/swarm-devrel.eth/")),(0,i.kt)("h3",{id:"update-the-website-set-up-and-update-a-feed"},"Update the Website: Set up and update a feed"),(0,i.kt)("p",null,"Swarm feeds allow you to easily create a permanent address for your content stored on Swarm that you can update at any time."),(0,i.kt)("p",null,"If you plan to update your website in the future, it\u2019s recommended that you set up a \u201cFeed\u201d before uploading your website to Swarm. This way, the Swarm Hash connected to your ENS domain will stay the same, even as you change the content behind that hash. This will enable you to update your website\u2019s content without changing the Swarm Hash and incurring Ethereum transaction costs each time you do so."),(0,i.kt)("h4",{id:"set-up-a-feed"},"Set up a Feed:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to to Account"),(0,i.kt)("li",{parentName:"ol"},"Click on Feeds in the top menu"),(0,i.kt)("li",{parentName:"ol"},"Click on Create New Feed"),(0,i.kt)("li",{parentName:"ol"},"Define Identity name"),(0,i.kt)("li",{parentName:"ol"},"And click Create Feed.")),(0,i.kt)("h4",{id:"upload-website-on-swarm-and-connect-it-to-the-feed"},"Upload Website on Swarm and connect it to the Feed:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to to Account"),(0,i.kt)("li",{parentName:"ol"},"Click on Feeds in the top menu"),(0,i.kt)("li",{parentName:"ol"},"Choose the Feed you want to update"),(0,i.kt)("li",{parentName:"ol"},"Click View Feed Page"),(0,i.kt)("li",{parentName:"ol"},"Click the Add Website button."),(0,i.kt)("li",{parentName:"ol"},"Select your website folder. NOTE: The index.html file should be in the root folder."),(0,i.kt)("li",{parentName:"ol"},"Add Postage Stamp to publish your page. NOTE: Postage stamps cover storage costs for a specified duration."),(0,i.kt)("li",{parentName:"ol"},"Upload the website to your Node."),(0,i.kt)("li",{parentName:"ol"},"Connect Feed hash to ENS domain as described above.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(83164).Z,width:"1280",height:"720"})),(0,i.kt)("p",null,"By following these instructions, you can now leverage the benefits of decentralised storage, maintain a censorship-resistant website, and create a user-friendly experience by connecting your site to an ENS domain."))}m.isMDXComponent=!0},63908:function(e,t,a){t.Z=a.p+"assets/images/upload-a-website1-9a7bf23ce92e8efdeccf4c0d888f8124.gif"},70531:function(e,t,a){t.Z=a.p+"assets/images/upload-a-website2-bce37190157d9a4461531cc77c5db23d.gif"},84020:function(e,t,a){t.Z=a.p+"assets/images/upload-a-website3-fc23c1f073a0c55d95b7d08f7132c697.gif"},83164:function(e,t,a){t.Z=a.p+"assets/images/upload-a-website4-955dd24d27a0c99c2518b0c87f7d545d.gif"}}]);