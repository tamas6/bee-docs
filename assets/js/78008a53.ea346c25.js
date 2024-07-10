"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[3384],{96184:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var l=i(17624),s=i(4552);const a={title:"Uninstalling Bee",id:"uninstalling-bee"},t=void 0,r={id:"bee/working-with-bee/uninstalling-bee",title:"Uninstalling Bee",description:"Uninstalling Bee",source:"@site/docs/bee/working-with-bee/uninstalling-bee.md",sourceDirName:"bee/working-with-bee",slug:"/bee/working-with-bee/uninstalling-bee",permalink:"/docs/bee/working-with-bee/uninstalling-bee",draft:!1,unlisted:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/bee/working-with-bee/uninstalling-bee.md",tags:[],version:"current",frontMatter:{title:"Uninstalling Bee",id:"uninstalling-bee"},sidebar:"bee",previous:{title:"Upgrading Bee",permalink:"/docs/bee/working-with-bee/upgrading-bee"},next:{title:"Light Nodes",permalink:"/docs/bee/working-with-bee/light-nodes"}},o={},d=[{value:"Uninstalling Bee",id:"uninstalling-bee",level:2},{value:"Package Manager Install",id:"package-manager-install",level:3},{value:"Debian",id:"debian",level:4},{value:"RPM",id:"rpm",level:4},{value:"Binary Install",id:"binary-install",level:3},{value:"Remove Bee Data Files",id:"remove-bee-data-files",level:2},{value:"Bee",id:"bee",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"uninstalling-bee",children:"Uninstalling Bee"}),"\n",(0,l.jsx)(n.p,{children:"Choose the appropriate uninstall method based on the install method used:"}),"\n",(0,l.jsx)(n.h3,{id:"package-manager-install",children:"Package Manager Install"}),"\n",(0,l.jsxs)(n.p,{children:["This method can be used for package manager based ",(0,l.jsx)(n.a,{href:"/docs/bee/installation/install#shell-script-install",children:"installs"})," of the official Debian, RPM, and Homebrew packages."]}),"\n",(0,l.jsx)(n.admonition,{type:"danger",children:(0,l.jsxs)(n.p,{children:["This will remove your keyfiles so make certain that you have a ",(0,l.jsx)(n.a,{href:"/docs/bee/working-with-bee/backups",children:"full backup"})," of your keys and configuration before uninstalling."]})}),"\n",(0,l.jsx)(n.h4,{id:"debian",children:"Debian"}),"\n",(0,l.jsx)(n.p,{children:"To uninstall Bee and completely remove all associated files including keys and configuration, run:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo apt-get purge bee\n"})}),"\n",(0,l.jsx)(n.h4,{id:"rpm",children:"RPM"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo yum remove bee\n"})}),"\n",(0,l.jsx)(n.h3,{id:"binary-install",children:"Binary Install"}),"\n",(0,l.jsxs)(n.p,{children:["If Bee is installed using the ",(0,l.jsx)(n.a,{href:"/docs/bee/installation/install#shell-script-install",children:"automated shell script"})," or by ",(0,l.jsx)(n.a,{href:"/docs/bee/installation/build-from-source",children:"building from source"}),", Bee can be uninstalled by directly removing the installed file."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo rm `/usr/local/bin/bee`\n"})}),"\n",(0,l.jsx)(n.h2,{id:"remove-bee-data-files",children:"Remove Bee Data Files"}),"\n",(0,l.jsx)(n.p,{children:"To completely remove all Bee files from your system you will also need to remove the config and data files."}),"\n",(0,l.jsx)(n.admonition,{type:"danger",children:(0,l.jsxs)(n.p,{children:["Node keys, password, chunks and state files are stored in the data folder. ",(0,l.jsx)(n.a,{href:"/docs/bee/working-with-bee/backups",children:"Make backups"})," of your data folder to prevent losing keys and data."]})}),"\n",(0,l.jsx)(n.h3,{id:"bee",children:"Bee"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Config folder:"})," Configuration file is stored in ",(0,l.jsx)(n.code,{children:"/etc/bee/"})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Data folder:"})," State, keys, chunks, and other data are stored in ",(0,l.jsx)(n.code,{children:"/var/lib/bee/"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>r,M:()=>t});var l=i(11504);const s={},a=l.createContext(s);function t(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);