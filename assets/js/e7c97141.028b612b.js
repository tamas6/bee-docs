(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{101:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),d=l(a),u=n,m=d["".concat(i,".").concat(u)]||d[u]||p[u]||o;return a?r.a.createElement(m,c(c({ref:t},b),{},{components:a})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var b=2;b<o;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},95:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),o=(a(0),a(101)),i={title:"Upload a Directory",id:"upload-a-directory"},c={unversionedId:"getting-started/upload-a-directory",id:"getting-started/upload-a-directory",isDocsHomePage:!1,title:"Upload a Directory",description:"It is possible to use Bee to upload whole directory structures at once.",source:"@site/docs/getting-started/upload-a-directory.md",slug:"/getting-started/upload-a-directory",permalink:"/docs/getting-started/upload-a-directory",editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/getting-started/upload-a-directory.md",version:"current",sidebar:"Balls",previous:{title:"Upload and Download Files",permalink:"/docs/getting-started/upload-and-download"},next:{title:"Host Your Website on Swarm",permalink:"/docs/getting-started/host-your-website-using-ens"}},s=[{value:"Upload the Directory Containing Your Website",id:"upload-the-directory-containing-your-website",children:[]}],b={toc:s};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"It is possible to use Bee to upload whole directory structures at once. "),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If an uploaded directory contain an ",Object(o.b)("inlineCode",{parentName:"p"},"index.html")," file. When you navigate to the directory in a web browser, it will automatically be served to users from our ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://gateway.ethswarm.org"}),"Swarm gateways")," as if it were a website hosted by a normal web server! You can use this feature to host unstoppable websites in Swarm."))),Object(o.b)("p",null,"This feature makes use of the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.gnu.org/software/tar/"}),"tar")," command line utility to package the directory into a single file that can then uploaded to the Bee API for processing and distributed into the swarm for later retrieval."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"G-zip compression is not supported the current version of Bee, so make sure not to use the ",Object(o.b)("inlineCode",{parentName:"p"},"-z")," flag when using the ",Object(o.b)("inlineCode",{parentName:"p"},"tar")," command!"))),Object(o.b)("h2",{id:"upload-the-directory-containing-your-website"},"Upload the Directory Containing Your Website"),Object(o.b)("p",null,"First, use the ",Object(o.b)("inlineCode",{parentName:"p"},"tar")," command line utility to create an archive containing all the files of your directory. If uploading a website, we must take care to ensure that the ",Object(o.b)("inlineCode",{parentName:"p"},"index.html")," file is at the root of the directory tree."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"tree build\n> \nmy_website\n\u251c\u2500\u2500 assets\n\u2502\xa0\xa0 \u2514\u2500\u2500 style.css\n\u251c\u2500\u2500 index.html\n\u2514\u2500\u2500 error.html\n")),Object(o.b)("p",null,"Use the following command to ensure that the tar package maintains the correct directory structure."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd my_website\ntar -cf tar -cf ../my_website.tar .\n")),Object(o.b)("p",null,"Next, simply POST the ",Object(o.b)("inlineCode",{parentName:"p"},"tar")," file as binary data to Bee's ",Object(o.b)("inlineCode",{parentName:"p"},"dir")," endpoint, taking care to include the header ",Object(o.b)("inlineCode",{parentName:"p"},"Content Type: application/x-tar"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'curl \\\n    -X POST \\\n    -H "Content-Type: application/x-tar" \\\n    -H "Swarm-Index-Document: index.html" \\\n    -H "Swarm-Error-Document: error.html" \\\n    --data-binary @my_website.tar http://localhost:1633/dirs\n')),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"For instances where a Single Page App has a javascript router which handles url queries itself, simple pass ",Object(o.b)("inlineCode",{parentName:"p"},"index.html")," as the error document, and Bee will pass over control to the javascript served by the ",Object(o.b)("inlineCode",{parentName:"p"},"index.html")," file in the circumstance that a path does not yield a file from the manifest. "))),Object(o.b)("p",null,"When the upload is successful, Bee will return a json document containing the Swarm Reference."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{"reference":"b25c89a401d9f26811680476619a1eb4a4e189e614bc6161cbfd8b343214917b"}\n')),Object(o.b)("p",null,"Now, simply navigate your browser to view the reference using the ",Object(o.b)("inlineCode",{parentName:"p"},"bzz")," endpoint and your website will be served!"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:1633/bzz/b25c89a401d9f26811680476619a1eb4a4e189e614bc6161cbfd8b343214917b/index.html"}),"http://localhost:1633/bzz/b25c89a...214917b/index.html")," "),Object(o.b)("p",null,"Other files are served at their relative paths, e.g."),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:1633/bzz/b25c89a401d9f26811680476619a1eb4a4e189e614bc6161cbfd8b343214917b/assets/style.css"}),"http://localhost:1633/bzz/b25c89a...214917b/assets/style.css")," "),Object(o.b)("p",null,"Once your data has been ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/advanced/tags"}),"fully processed into the network"),", you will then be able to retrieve it from any Bee node."),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://gateway.ethswarm.org/bzz/b25c89a401d9f26811680476619a1eb4a4e189e614bc6161cbfd8b343214917b/index.html"}),"https://gateway.ethswarm.org/bzz/b25c89a...214917b/index.html")),Object(o.b)("p",null,"If you are not able to download your file from a different Bee node, you may be experiencing connection issues, see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/installation/connectivity"}),"troubleshooting connectivity")," for assistance."),Object(o.b)("p",null,":::warn\nNot all directory structures, as supported by tar, can be supported in Bee.\nThe reason is that not all valid directory structures are valid paths\nfor an HTTP router (e.g. paths that are in a parent directory to the root).\nBee will accept and upload the invalid directory structures, but some of\nyour content might not be accessible.\n:::"))}l.isMDXComponent=!0}}]);