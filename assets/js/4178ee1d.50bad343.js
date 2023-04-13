"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[3859],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return b}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(t),f=a,b=c["".concat(l,".").concat(f)]||c[f]||d[f]||o;return t?r.createElement(b,i(i({ref:n},s),{},{components:t})):r.createElement(b,i({ref:n},s))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7607:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],p={title:"API and Debug API",id:"api-reference"},l=void 0,u={unversionedId:"api-reference/api-reference",id:"api-reference/api-reference",title:"API and Debug API",description:"The Bee node exposes two HTTP API endpoints, the API and the Debug API. These endpoints are the primary interfaces to a running Bee node. API-endpoints can be queried using familiar HTTP requests, and will respond with a semantically accurate HTTP status and error codes as well as data payloads in JSON format where appropriate.",source:"@site/docs/api-reference/api-reference.md",sourceDirName:"api-reference",slug:"/api-reference/",permalink:"/docs/api-reference/",draft:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/api-reference/api-reference.md",tags:[],version:"current",frontMatter:{title:"API and Debug API",id:"api-reference"},sidebar:"Balls",previous:{title:"PSS Messaging",permalink:"/docs/dapps-on-swarm/pss"},next:{title:"Useful Developer Info",permalink:"/docs/bee-developers/useful-dev-info"}},s={},c=[{value:"API",id:"api",level:2},{value:'<a href="/api" target="_blank" rel="noopener noreferrer">Bee API reference.</a>',id:"bee-api-reference",level:3},{value:"Debug API",id:"debug-api",level:2},{value:'<a href="/debug-api" target="_blank" rel="noopener noreferrer">Debug API reference.</a>',id:"debug-api-reference",level:3}],d={toc:c},f="wrapper";function b(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)(f,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Bee node exposes two HTTP API endpoints, the ",(0,o.kt)("inlineCode",{parentName:"p"},"API")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Debug API"),". These endpoints are the primary interfaces to a ",(0,o.kt)("em",{parentName:"p"},"running")," Bee node. API-endpoints can be queried using familiar HTTP requests, and will respond with a semantically accurate ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"},"HTTP status and error codes")," as well as data payloads in ",(0,o.kt)("a",{parentName:"p",href:"https://www.json.org/json-en.html"},"JSON")," format where appropriate."),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("p",null,"The API-endpoint exposes all functionality to upload and download content to and from the Swarm network. By default, it runs on port ",(0,o.kt)("inlineCode",{parentName:"p"},":1633"),"."),(0,o.kt)("p",null,"Detailed information about Bee API endpoint can be found here:"),(0,o.kt)("h3",{id:"bee-api-reference"},(0,o.kt)("a",{href:"/api",target:"_blank",rel:"noopener noreferrer"},"Bee API reference.")),(0,o.kt)("h2",{id:"debug-api"},"Debug API"),(0,o.kt)("p",null,"The Debug API is disabled by default but can be enabled by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"debug-api-enable")," configuration option to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),". The Debug API exposes functionality to inspect the state of your Bee node while it is running, as well as some other features that should not be exposed to the public Internet. The Debug API runs on port ",(0,o.kt)("inlineCode",{parentName:"p"},":1635")," by default."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For a new installation of Bee, the Debug API endpoint is not yet\nexposed for security reasons. To enable the Debug API endpoints, set\n",(0,o.kt)("inlineCode",{parentName:"p"},"--debug-api-enable")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," in your ",(0,o.kt)("a",{parentName:"p",href:"/docs/working-with-bee/configuration"},"configuration\nfile")," and restart your Bee.")),(0,o.kt)("h3",{id:"debug-api-reference"},(0,o.kt)("a",{href:"/debug-api",target:"_blank",rel:"noopener noreferrer"},"Debug API reference.")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Your Debug API should not be exposed to the public Internet, make sure that your network has a firewall which blocks port ",(0,o.kt)("inlineCode",{parentName:"p"},"1635"),", or bind the Debug API to ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost"))))}b.isMDXComponent=!0}}]);