"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[849],{4690:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var n=s(74848),a=s(28453);const o={title:"Install",id:"install"},i=void 0,d={id:"desktop/install",title:"Install",description:"Download and Install Swarm Desktop",source:"@site/docs/desktop/install.md",sourceDirName:"desktop",slug:"/desktop/install",permalink:"/docs/desktop/install",draft:!1,unlisted:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/desktop/install.md",tags:[],version:"current",frontMatter:{title:"Install",id:"install"},sidebar:"desktop",previous:{title:"Introduction",permalink:"/docs/desktop/introduction"},next:{title:"Configuration",permalink:"/docs/desktop/configuration"}},r={},l=[{value:"Download and Install Swarm Desktop",id:"download-and-install-swarm-desktop",level:2},{value:"What Just Happened?",id:"what-just-happened",level:4},{value:"&quot;Ultra-light&quot; and &quot;Light&quot; Nodes",id:"ultra-light-and-light-nodes",level:3},{value:"Tour of Swarm Desktop",id:"tour-of-swarm-desktop",level:2},{value:"Info Tab",id:"info-tab",level:3},{value:"Files Tab",id:"files-tab",level:3},{value:"Account Tab",id:"account-tab",level:3},{value:"Settings Tab",id:"settings-tab",level:3},{value:"Status Tab",id:"status-tab",level:3}];function h(e){const t={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"download-and-install-swarm-desktop",children:"Download and Install Swarm Desktop"}),"\n",(0,n.jsxs)(t.p,{children:["Installing the Swarm Desktop app takes only a few clicks. To get started, simply download and install the Swarm Desktop app for your operating system. Installers are available for Windows, Linux, and OSX. You can find download links for Swarm Desktop at the Swarm ",(0,n.jsx)(t.a,{href:"https://www.ethswarm.org/build/desktop",children:"homepage"})," and you can find installers for specific operating systems at the ",(0,n.jsx)(t.a,{href:"https://github.com/ethersphere/swarm-desktop/releases",children:"releases page"})," of the Swarm Desktop GitHub repo."]}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"Swarm Desktop is in Beta and currently includes the Sentry application monitoring and bug reporting software which automatically collects data in order to help improve the software."})}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"This project is in beta state. There might (and most probably will) be changes in the future to its API and working. Also, no guarantees can be made about its stability, efficiency, and security at this stage."})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://www.ethswarm.org/build/desktop",children:(0,n.jsx)(t.img,{src:s(45005).A+"",width:"2542",height:"1193"})}),"\n",(0,n.jsx)(t.em,{children:"Ethswarm.org Swarm Desktop Page"})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/ethersphere/swarm-desktop/releases",children:(0,n.jsx)(t.img,{src:s(43055).A+"",width:"1890",height:"1277"})}),"\n",(0,n.jsx)(t.em,{children:"Swarm Desktop GitHub Releases Page"})]}),"\n",(0,n.jsx)(t.p,{children:"After running the installer, a window will pop up and display the installation status:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(50046).A+"",width:"1482",height:"1096"})}),"\n",(0,n.jsx)(t.p,{children:'Once the installation is complete, Swarm Desktop will open up in your default browser in a new window to the "Info" tab of the app:'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(28960).A+"",width:"2546",height:"1213"})}),"\n",(0,n.jsx)(t.p,{children:'If the installation went smoothly, you should see the message "Your node is connected" above the "Access Content" button along with a status message of "Node OK".'}),"\n",(0,n.jsx)(t.h4,{id:"what-just-happened",children:"What Just Happened?"}),"\n",(0,n.jsx)(t.p,{children:"Running the Swarm Desktop app for the first time set up a new Bee node on your system. The installation process generated and saved private keys for your node in the Swarm Desktop's data directory. Those keys were used to start up a new Bee node in ultra-light mode."}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["If your Swarm Desktop files are accidentally deleted or become corrupted you will lose access to any assets or data which are secured using those keys. Make sure to ",(0,n.jsx)(t.a,{href:"/docs/desktop/backup-restore",children:"backup your keys"}),"."]})}),"\n",(0,n.jsx)(t.h3,{id:"ultra-light-and-light-nodes",children:'"Ultra-light" and "Light" Nodes'}),"\n",(0,n.jsxs)(t.p,{children:['Swarm Desktop by default starts up a node in "ultra-light" mode. When running in ultra-light mode Swarm Desktop  limited to only downloading data from Swarm. Moreover, it\'s limited to downloading only within the free threshold allowed by other nodes. For instructions on switching to light mode see the ',(0,n.jsx)(t.a,{href:"/docs/desktop/configuration",children:"configuration section"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"tour-of-swarm-desktop",children:"Tour of Swarm Desktop"}),"\n",(0,n.jsx)(t.h3,{id:"info-tab",children:"Info Tab"}),"\n",(0,n.jsx)(t.p,{children:'The "Info" tab gives you a quick view of your Swarm Desktop\'s status. From here we can quickly see if the node is connected to Swarm, whether the node is funded, and whether its chequebook contract is set up. On a new install of Swarm Desktop, the node should be connected, but the wallet and chequebook will not have been set up yet.'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(18693).A+"",width:"2560",height:"1367"})}),"\n",(0,n.jsx)(t.h3,{id:"files-tab",children:"Files Tab"}),"\n",(0,n.jsxs)(t.p,{children:['From "Files" tab you can input a Swarm hash in order to download the file associated with the hash. See this full ',(0,n.jsx)(t.a,{href:"/docs/desktop/access-content",children:"guide for downloading"})," using Swarm Desktop."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(85900).A+"",width:"2560",height:"1372"})}),"\n",(0,n.jsx)(t.h3,{id:"account-tab",children:"Account Tab"}),"\n",(0,n.jsx)(t.p,{children:'From the "Account" tab you can view your Swarm Desktop node\'s Gnosis Chain address and associated xBZZ and xDAI balances.'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(34756).A+"",width:"2560",height:"1372"})}),"\n",(0,n.jsx)(t.h3,{id:"settings-tab",children:"Settings Tab"}),"\n",(0,n.jsxs)(t.p,{children:['From the "Settings" tab you can view important settings values. Note that the Blockchain RPC URL and ENS resolver URL are already filled in, and only the Blockchain RPC URL is modifiable through this tab. If you wish to modify other settings see the ',(0,n.jsx)(t.a,{href:"/docs/desktop/configuration",children:" configuration page"})," for detailed instructions."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(86854).A+"",width:"2560",height:"1373"})}),"\n",(0,n.jsx)(t.h3,{id:"status-tab",children:"Status Tab"}),"\n",(0,n.jsx)(t.p,{children:'From the "Status" tab you can see a quick overview of the health of your Swarm Desktop\'s Bee node.'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(1511).A+"",width:"2560",height:"1357"})})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},45005:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/desktop-homepage-dl-12a08bb9260fcf5a022cbb087f24f6e9.png"},50046:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/desktop-install-downloading-1fa3a12d14bb0b11efaabe0f7be96723.png"},28960:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/desktop-new-install-8e60389ae653e767c6b1c64367149eb8.png"},43055:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/desktop-releases-dl-cba1154cb87d19016ee3ac3211ba3584.png"},34756:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/swarm-desktop-account-tab-33af042045830c434520ca470eeee8a3.png"},85900:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/swarm-desktop-files-tab-c38ee8216a81a02bc4ca6528a3ffd165.png"},18693:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/swarm-desktop-info-tab-d11651491dd2935fd14699edaf17cb5d.png"},86854:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/swarm-desktop-settings-tab-583e639cac14116c03fb1193f427af8f.png"},1511:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/swarm-desktop-status-tab-c11b2013c1c54f4998d52819263bd766.png"},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>d});var n=s(96540);const a={},o=n.createContext(a);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);