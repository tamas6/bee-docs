"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[9149],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),k=o,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||r;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2716:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),l=["components"],i={title:"Backups",id:"backups"},s=void 0,p={unversionedId:"working-with-bee/backups",id:"working-with-bee/backups",title:"Backups",description:"Files",source:"@site/docs/working-with-bee/backups.md",sourceDirName:"working-with-bee",slug:"/working-with-bee/backups",permalink:"/docs/working-with-bee/backups",draft:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/working-with-bee/backups.md",tags:[],version:"current",frontMatter:{title:"Backups",id:"backups"},sidebar:"Balls",previous:{title:"Monitoring Your Node",permalink:"/docs/working-with-bee/monitoring"},next:{title:"Upgrading Bee",permalink:"/docs/working-with-bee/upgrading-bee"}},c={},d=[{value:"Files",id:"files",level:2},{value:"Ubuntu / Debian / Raspbian / CentOS Package Managers",id:"ubuntu--debian--raspbian--centos-package-managers",level:3},{value:"Shell Script Install",id:"shell-script-install",level:3},{value:"Docker Compose",id:"docker-compose",level:3},{value:"Data Types",id:"data-types",level:2},{value:"Keys",id:"keys",level:3},{value:"Statestore",id:"statestore",level:3},{value:"Localstore",id:"localstore",level:3},{value:"Bee Clef",id:"bee-clef",level:2},{value:"Ubuntu / Debian / Raspbian / CentOS Package Managers",id:"ubuntu--debian--raspbian--centos-package-managers-1",level:3},{value:"Manual",id:"manual",level:3},{value:"Restore from Backup",id:"restore-from-backup",level:2}],u={toc:d},k="wrapper";function m(e){var t=e.components,a=(0,o.Z)(e,l);return(0,r.kt)(k,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"files"},"Files"),(0,r.kt)("p",null,"A full Bee node backup includes the ",(0,r.kt)("inlineCode",{parentName:"p"},"keys"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"localstore"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"statestore"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"password")," files. The node should be stopped before taking a backup and not restarted until restoring the node from the backup to prevent the node from getting out of sync with the network."),(0,r.kt)("p",null,"Node key and state data is found in the data directory specified in its ",(0,r.kt)("a",{parentName:"p",href:"configuration"},"configuration"),"."),(0,r.kt)("p",null,"Key data in backup files allows access to Bee node's Gnosis account. If lost or stolen it could lead to the loss of all assets in that account. Multiple backups should be kept in secure locations."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Don't forget - it's not a backup until you're sure the backup files work! Make sure to test restoring from backup files to prevent loss of assets due to data loss or corruption.")),(0,r.kt)("h3",{id:"ubuntu--debian--raspbian--centos-package-managers"},"Ubuntu / Debian / Raspbian / CentOS Package Managers"),(0,r.kt)("p",null,"For Linux installations from package managers ",(0,r.kt)("em",{parentName:"p"},"yum")," or ",(0,r.kt)("em",{parentName:"p"},"apt"),", the data directory is located at:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/var/lib/bee\n")),(0,r.kt)("p",null,"It may also be useful to include the ",(0,r.kt)("inlineCode",{parentName:"p"},"bee.yaml")," config file in a backup so that configuration can be easily restored. The default location of the config file is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/etc/bee\n")),(0,r.kt)("h3",{id:"shell-script-install"},"Shell Script Install"),(0,r.kt)("p",null,"For a ",(0,r.kt)("a",{parentName:"p",href:"/docs/installation/manual"},"shell script installation")," the data directory by default is located at:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/home/<user>/.bee\n")),(0,r.kt)("h3",{id:"docker-compose"},"Docker Compose"),(0,r.kt)("p",null,"When using ",(0,r.kt)("a",{parentName:"p",href:"/docs/installation/docker"},"Docker Compose")," configuration files to run a node, Docker will create a volume for Bee and a volume for Bee Clef."),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"docker cp")," to retrieve the contents of these folders:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker cp bee_bee_1:/home/bee/.bee/ bee\ndocker cp bee_clef_1:/app clef\n")),(0,r.kt)("h2",{id:"data-types"},"Data Types"),(0,r.kt)("p",null,"The data directory contains three directories. Its default location depends on the node install method used."),(0,r.kt)("p",null,"Shell script install:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/home/<user>/.bee\n\u251c\u2500\u2500 keys\n\u2502\xa0\xa0 \u251c\u2500\u2500 libp2p.key\n\u2502\xa0\xa0 \u251c\u2500\u2500 pss.key\n\u2502\xa0\xa0 \u2514\u2500\u2500 swarm.key\n\u251c\u2500\u2500 localstore\n\u2502\xa0\xa0 \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 statestore\n    \u2514\u2500\u2500 ...\n")),(0,r.kt)("p",null,"Package manager install:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/var/lib/bee\n\u251c\u2500\u2500 keys\n\u2502\xa0\xa0 \u251c\u2500\u2500 libp2p.key\n\u2502\xa0\xa0 \u251c\u2500\u2500 pss.key\n\u2502\xa0\xa0 \u2514\u2500\u2500 swarm.key\n\u251c\u2500\u2500 localstore\n\u2502\xa0\xa0 \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 statestore\n    \u2514\u2500\u2500 ...\n")),(0,r.kt)("h3",{id:"keys"},"Keys"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"keys")," directory contains three key files: ",(0,r.kt)("inlineCode",{parentName:"p"},"libp2p_v2.key"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pss.key"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"swarm.key"),". These keys are generated during the Bee node's initialisation and are the most important data to retain for a backup."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"swarm.key")," file allows access to Bee node's Gnosis account. If the key is lost or stolen it could lead to the loss of all assets secured by that key. Multiple backups should be kept in secure locations to prevent loss of assets or unauthorized access.")),(0,r.kt)("p",null,"If using ",(0,r.kt)("strong",{parentName:"p"},"bee-clef"),", see below for information on how to backup the node."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To use ",(0,r.kt)("inlineCode",{parentName:"p"},"swarm.key")," to manage the Gnosis account for a node through Metamask or other wallets,",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/exportSwarmKey"},"exportSwarmKeys")," can be used to\nconvert ",(0,r.kt)("inlineCode",{parentName:"p"},"swarm.key")," to a compatible format.")),(0,r.kt)("h3",{id:"statestore"},"Statestore"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"statestore")," directory retains information related to the node,\nincluding SWAP balances, info on peers, block list, postage stamps, and more."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"As the data in ",(0,r.kt)("inlineCode",{parentName:"p"},"statestore")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"localstore")," continually changes during normal operation of a node, when taking a backup the node should first be stopped and not re-connected to the Swarm network until restoring from the backup (otherwise the ",(0,r.kt)("inlineCode",{parentName:"p"},"statestore")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"localstore")," files will get out of sync with the network). It is possible to restore using out of sync ",(0,r.kt)("inlineCode",{parentName:"p"},"statestore")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"localstore")," files, however it may lead to data loss or unexpected behavior related to chunk uploads, postage stamps, and more. ")),(0,r.kt)("h3",{id:"localstore"},"Localstore"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"localstore")," directory contains chunks locally which are frequently requested,\npinned in the node, or are in the node's neighbourhood of responsibility."),(0,r.kt)("h2",{id:"bee-clef"},"Bee Clef"),(0,r.kt)("p",null,"If Clef is used for key management and transaction signing then Clef data must be backed up and secured in a safe location to prevent loss of access to the node and its assets."),(0,r.kt)("h3",{id:"ubuntu--debian--raspbian--centos-package-managers-1"},"Ubuntu / Debian / Raspbian / CentOS Package Managers"),(0,r.kt)("p",null,"For Linux installations by the package managers ",(0,r.kt)("em",{parentName:"p"},"yum")," or ",(0,r.kt)("em",{parentName:"p"},"apt"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"bee-clef")," data directory is located at:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/var/lib/bee-clef/\n")),(0,r.kt)("p",null,"Configuration files are stored in:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/etc/bee-clef/\n")),(0,r.kt)("h3",{id:"manual"},"Manual"),(0,r.kt)("p",null,"For a manual installation of Clef the default data directory is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"~/.clef\n")),(0,r.kt)("h2",{id:"restore-from-backup"},"Restore from Backup"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Before restoring, make sure to check for any old node data at ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/bee")," from a previous node which has not yet been backed up.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install Bee. See ",(0,r.kt)("a",{parentName:"p",href:"../installation/install"},"install")," page for more info:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"wget https://github.com/ethersphere/bee/releases/download/v1.14.0/bee_1.14.0_amd64.deb\nsudo dpkg -i bee_1.14.0_amd64.deb\n")),(0,r.kt)("p",{parentName:"li"},"Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"bee.yaml")," to include Gnosis Chain RPC endpoint: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"sudo vi /etc/bee/bee.yaml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change ownership of ",(0,r.kt)("inlineCode",{parentName:"p"},"bee")," data folder."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"cd /var/lib/\nsudo chown -R <user>:<user> bee\ncd bee/\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete statestore, keys, localstore, and password files."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"sudo rm -r keys password statestore localstore\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to backup directory and copy files to data folder."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"```\ncp -r keys password statestore localstore /var/lib/bee\n```\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Revert ownership of the data folder. "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"sudo chown -R bee:bee bee\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start ",(0,r.kt)("inlineCode",{parentName:"p"},"bee")," service and check logs to see if Bee node is running properly."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"sudo systemctl restart bee\nsudo journalctl --lines=100 --follow --unit bee      \n")))))}m.isMDXComponent=!0}}]);