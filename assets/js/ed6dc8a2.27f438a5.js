(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[7106],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,v=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(v,i(i({ref:t},p),{},{components:n})):r.createElement(v,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2101:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],l={title:"Developer mode",id:"bee-dev-mode"},c={unversionedId:"bee-developers/bee-dev-mode",id:"bee-developers/bee-dev-mode",isDocsHomePage:!1,title:"Developer mode",description:"You can start the bee in dev mode by running the command:",source:"@site/docs/bee-developers/dev-mode.md",sourceDirName:"bee-developers",slug:"/bee-developers/bee-dev-mode",permalink:"/docs/bee-developers/bee-dev-mode",editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/bee-developers/dev-mode.md",version:"current",frontMatter:{title:"Developer mode",id:"bee-dev-mode"},sidebar:"Balls",previous:{title:"Useful Developer Info",permalink:"/docs/bee-developers/useful-dev-info"},next:{title:"FAQ",permalink:"/docs/FAQ"}},s=[{value:"Configuration options",id:"configuration-options",children:[]}],p={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can start the bee in ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," mode by running the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bee dev\n")),(0,a.kt)("p",null,"It will start an instance with volatile persistence all back-ends mocked."),(0,a.kt)("p",null,"As a developer you interact with all the usual HTTP endpoints, for instance you can buy postage stamps and use them to upload files, which will be saved to memory."),(0,a.kt)("h2",{id:"configuration-options"},"Configuration options"),(0,a.kt)("p",null,"It accepts the same configuration options as a normal bee but it will ignore the ones that are not relevant (accounting, networking, blockchain etc)."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"restricted")," mode but don't provide an admin password it will use the default value 'hello'.\nThen you can use it in your header: ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer OmhlbGxv")))))}d.isMDXComponent=!0}}]);