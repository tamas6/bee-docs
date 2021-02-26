(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{101:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t(0),r=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),s=function(e){var a=r.a.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),b=n,m=u["".concat(i,".").concat(b)]||u[b]||p[b]||o;return t?r.a.createElement(m,c(c({ref:a},d),{},{components:t})):r.a.createElement(m,c({ref:a},d))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<o;d++)i[d]=t[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},83:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return l})),t.d(a,"default",(function(){return s}));var n=t(3),r=t(7),o=(t(0),t(101)),i={title:"Upload and Download Files",id:"upload-and-download"},c={unversionedId:"getting-started/upload-and-download",id:"getting-started/upload-and-download",isDocsHomePage:!1,title:"Upload and Download Files",description:"Bee provides a convenient way of uploading your data into the Swarm. Once your data has been uploaded, it will be distributed and stored by a worldwide network of p2p nodes, and made available from Swarm's web gateways.",source:"@site/docs/getting-started/upload-and-download.md",slug:"/getting-started/upload-and-download",permalink:"/docs/getting-started/upload-and-download",editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/getting-started/upload-and-download.md",version:"current",sidebar:"Balls",previous:{title:"Working With Your Node",permalink:"/docs/getting-started/working-with-your-node"},next:{title:"Upload a Directory",permalink:"/docs/getting-started/upload-a-directory"}},l=[{value:"Quick Upload",id:"quick-upload",children:[]},{value:"Download",id:"download",children:[]},{value:"Public Gateways",id:"public-gateways",children:[]}],d={toc:l};function s(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},d,t,{components:a,mdxType:"MDXLayout"}),Object(o.a)("p",null,"Bee provides a convenient way of uploading your data into the Swarm. Once your data has been uploaded, it will be distributed and stored by a worldwide network of p2p nodes, and made available from Swarm's ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://gateway.ethswarm.org"}),"web gateways"),"."),Object(o.a)("h3",{id:"quick-upload"},"Quick Upload"),Object(o.a)("p",null,"Once your Bee node is running, a HTTP API is enabled for you to interact with. The command line utility ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://ec.haxx.se/http/http-multipart"}),"curl")," is a great way to interact with a Bee node's API."),Object(o.a)("p",null,"First, let's check to see if the API is running as expected..."),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl http://localhost:1633\n")),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{}),"Ethereum Swarm Bee\n")),Object(o.a)("p",null,"Once running, a file can be uploaded by making an HTTP POST request to the ",Object(o.a)("inlineCode",{parentName:"p"},"files")," endpoint of the Bee API."),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl -F file=@bee.jpg http://localhost:1633/files\n")),Object(o.a)("p",null,"We may also pass the appropriate mime type in the ",Object(o.a)("inlineCode",{parentName:"p"},"Content-Type")," header, and a file name to the ",Object(o.a)("inlineCode",{parentName:"p"},"name")," query parameter so that the file will be correctly handled by web browsers and other applications."),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),'curl --data-binary @bee.jpg  -H "Content-Type: video/jpg" "http://localhost:1633/files?name=bee.jpg"\n')),Object(o.a)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(o.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.a)("p",{parentName:"div"},"Data uploaded to the swarm is always public. In Swarm, sensitive files must be ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"/docs/getting-started/store-with-encryption"}),"encrypted")," before uploading to ensure their contents always remains private."))),Object(o.a)("p",null,"When succesful, a json formatted response will be returned, containing a ",Object(o.a)("strong",{parentName:"p"},"swarm reference")," or ",Object(o.a)("strong",{parentName:"p"},"hash")," which is the ",Object(o.a)("em",{parentName:"p"},"address")," of the uploaded file, for example:"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{"reference":"042d4fe94b946e2cb51196a8c136b8cc335156525bf1ad7e86356c2402291dd4"}\n')),Object(o.a)("p",null,"Keep this ",Object(o.a)("em",{parentName:"p"},"address")," safe, as we'll use it to retrieve our content later on."),Object(o.a)("p",null,"In Swarm, every piece of data has a unique ",Object(o.a)("em",{parentName:"p"},"address")," which is a unique and reproducible cryptographic hash digest. If you upload the same file twice, you will always receive the same hash. This makes working with data in Swarm super secure!"),Object(o.a)("div",{className:"admonition admonition-info alert alert--info"},Object(o.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.a)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.a)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.a)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.a)("p",{parentName:"div"},"If you are uploading a large file it is useful to track the status of your upload as it is processed into the network. Head over to the advanced usage section to learn how to ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"/docs/advanced/tags"}),"follow the status of your upload"),". "),Object(o.a)("p",{parentName:"div"},"Once your file has been ",Object(o.a)("strong",{parentName:"p"},"completely synced with the network"),", you will be able to turn off your computer and other nodes will take over to serve the data for you!"))),Object(o.a)("h2",{id:"download"},"Download"),Object(o.a)("p",null,"Once your file is uploaded into Swarm, it can be retrieved with a simple HTTP GET request."),Object(o.a)("p",null,"Substitute the ",Object(o.a)("em",{parentName:"p"},"hash")," in the last part of the url to be the reference to your own data."),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"curl -OJ http://localhost:1633/files/042d4fe94b946e2cb51196a8c136b8cc335156525bf1ad7e86356c2402291dd4\n")),Object(o.a)("p",null,"You may even simply navigate to the URL in your browser:"),Object(o.a)("p",null,Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:1633/files/042d4fe94b946e2cb51196a8c136b8cc335156525bf1ad7e86356c2402291dd4"}),"http://localhost:1633/files/042d4fe...2291dd4")),Object(o.a)("h2",{id:"public-gateways"},"Public Gateways"),Object(o.a)("p",null,"To share files with someone who isn't running a Bee node yet, simply change the host in the link to be one of our public gateways. Send the link to your friends, and they will be able to download the file too!"),Object(o.a)("p",null,Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://gateway.ethswarm.org/files/042d4fe94b946e2cb51196a8c136b8cc335156525bf1ad7e86356c2402291dd4"}),"https://gateway.ethswarm.org/files/042d4fe...2291dd4")))}s.isMDXComponent=!0}}]);