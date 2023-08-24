"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[7999],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),b=a,m=c["".concat(u,".").concat(b)]||c[b]||d[b]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},94789:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Upgrading Bee",id:"upgrading-bee"},u=void 0,l={unversionedId:"bee/working-with-bee/upgrading-bee",id:"bee/working-with-bee/upgrading-bee",title:"Upgrading Bee",description:"Keep a close eye on the",source:"@site/docs/bee/working-with-bee/upgrade.md",sourceDirName:"bee/working-with-bee",slug:"/bee/working-with-bee/upgrading-bee",permalink:"/docs/bee/working-with-bee/upgrading-bee",draft:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/bee/working-with-bee/upgrade.md",tags:[],version:"current",frontMatter:{title:"Upgrading Bee",id:"upgrading-bee"},sidebar:"bee",previous:{title:"Backups",permalink:"/docs/bee/working-with-bee/backups"},next:{title:"Uninstalling Bee",permalink:"/docs/bee/working-with-bee/uninstalling-bee"}},p={},c=[{value:"Upgrade Procedure",id:"upgrade-procedure",level:2},{value:"Ubuntu / Debian / Raspbian",id:"ubuntu--debian--raspbian",level:3},{value:"Manual Installations",id:"manual-installations",level:4},{value:"Docker",id:"docker",level:4},{value:"Upgrading from a mainnet v1.5.x series to a mainnet v1.6.x series",id:"upgrading-from-a-mainnet-v15x-series-to-a-mainnet-v16x-series",level:3}],d={toc:c},b="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(b,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Keep a close eye on the\n",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/vQcngMzZ9c"},"#bee-node-updates")," channel in our\n",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/wdghaQsGq5"},"Discord Server")," for information on the\nlatest software updates for Bee. It's very important to keep Bee up to\ndate to benefit from security updates and ensure you are able to\nproperly interact with the swarm."),(0,o.kt)("h2",{id:"upgrade-procedure"},"Upgrade Procedure"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Bee sure to ",(0,o.kt)("a",{parentName:"p",href:"/docs/bee/working-with-bee/backups"},"back up")," your keys and ",(0,o.kt)("a",{parentName:"p",href:"/docs/bee/working-with-bee/cashing-out"},"cash out your cheques")," to make sure your xBZZ is safe before applying updates.")),(0,o.kt)("h3",{id:"ubuntu--debian--raspbian"},"Ubuntu / Debian / Raspbian"),(0,o.kt)("p",null,"To upgrade Bee, simply stop the Bee service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl stop bee\n")),(0,o.kt)("p",null,"Now follow the ",(0,o.kt)("a",{parentName:"p",href:"/docs/bee/installation/install"},"installation instructions")," to download the new package and install the new version, as you would during a new installation."),(0,o.kt)("p",null,"You will be greeted by the following prompt:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Configuration file '/etc/bee/bee.yaml'\n ==> Modified (by you or by a script) since installation.\n ==> Package distributor has shipped an updated version.\n   What would you like to do about it ?  Your options are:\n    Y or I  : install the package maintainer's version\n    N or O  : keep your currently-installed version\n      D     : show the differences between the versions\n      Z     : start a shell to examine the situation\n The default action is to keep your current version.\n*** bee.yaml (Y/I/N/O/D/Z) [default=N] ?\n")),(0,o.kt)("p",null,"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"N")," to keep your current data and keys."),(0,o.kt)("p",null,"You may now start your node again:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl start bee\n")),(0,o.kt)("h4",{id:"manual-installations"},"Manual Installations"),(0,o.kt)("p",null,"To upgrade your manual installation, simply stop Bee, replace the Bee binary and restart."),(0,o.kt)("h4",{id:"docker"},"Docker"),(0,o.kt)("p",null,"To upgrade your docker installation, simply increment the version number in your configurations and restart."),(0,o.kt)("h3",{id:"upgrading-from-a-mainnet-v15x-series-to-a-mainnet-v16x-series"},"Upgrading from a mainnet v1.5.x series to a mainnet v1.6.x series"),(0,o.kt)("p",null,"Bee v1.6.x contains a completely new data storage format called Sharky."),(0,o.kt)("p",null,"As part of these changes, existing data must be migrated to the new data structure expected by\nthe 1.5.x client. This will happen automatically, but ",(0,o.kt)("strong",{parentName:"p"},"may require extra space")," and cause a spike in cpu requirements for the duration of the migration."),(0,o.kt)("p",null,"If you can not accommodate approximately 3x (2x might even be enough) as much disk space as is currently being used by your Bee ",(0,o.kt)("inlineCode",{parentName:"p"},"datadir"),", you may want to run ",(0,o.kt)("inlineCode",{parentName:"p"},"bee db nuke")," before upgrading (but after stopping the Bee service) to resync your nodes content from the network. If you have ",(0,o.kt)("strong",{parentName:"p"},"locally pinned content")," please ensure you have a local backup so that you can restamp and restore it to the network in case of disaster."))}m.isMDXComponent=!0}}]);