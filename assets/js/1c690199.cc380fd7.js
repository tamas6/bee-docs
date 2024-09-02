"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[3047],{36142:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var n=s(74848),r=s(28453);const t={title:"Backups",id:"backups"},a=void 0,i={id:"bee/working-with-bee/backups",title:"Backups",description:"Files",source:"@site/docs/bee/working-with-bee/backups.md",sourceDirName:"bee/working-with-bee",slug:"/bee/working-with-bee/backups",permalink:"/docs/bee/working-with-bee/backups",draft:!1,unlisted:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/bee/working-with-bee/backups.md",tags:[],version:"current",frontMatter:{title:"Backups",id:"backups"},sidebar:"bee",previous:{title:"Monitoring Your Node",permalink:"/docs/bee/working-with-bee/monitoring"},next:{title:"Upgrading Bee",permalink:"/docs/bee/working-with-bee/upgrading-bee"}},d={},l=[{value:"Files",id:"files",level:2},{value:"Ubuntu / Debian / Raspbian / CentOS package managers",id:"ubuntu--debian--raspbian--centos-package-managers",level:3},{value:"Binary package install",id:"binary-package-install",level:3},{value:"Docker Compose",id:"docker-compose",level:3},{value:"Data types",id:"data-types",level:3},{value:"Keys",id:"keys",level:3},{value:"Statestore and Localstore.",id:"statestore-and-localstore",level:3},{value:"Back-up your node data",id:"back-up-your-node-data",level:2},{value:"Back-up your password",id:"back-up-your-password",level:3},{value:"Back-up blockchain keys only",id:"back-up-blockchain-keys-only",level:3},{value:"Metamask Import",id:"metamask-import",level:2},{value:"View key and password for wallet import",id:"view-key-and-password-for-wallet-import",level:3},{value:"Get private key from keystore and password",id:"get-private-key-from-keystore-and-password",level:3},{value:"Restore from backup",id:"restore-from-backup",level:2}];function c(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"files",children:"Files"}),"\n",(0,n.jsxs)(o.p,{children:["A full Bee node backup includes the ",(0,n.jsx)(o.code,{children:"kademlia-metrics"}),",  ",(0,n.jsx)(o.code,{children:"keys"}),",  ",(0,n.jsx)(o.code,{children:"localstore"}),",  ",(0,n.jsx)(o.code,{children:"password"}),",  ",(0,n.jsx)(o.code,{children:"stamperstore"}),",  ",(0,n.jsx)(o.code,{children:"statestore"}),", and ",(0,n.jsx)(o.code,{children:"password"})," files. The node should be stopped before taking a backup and not restarted until restoring the node from the backup to prevent the node from getting out of sync with the network."]}),"\n",(0,n.jsxs)(o.p,{children:["A node's data including keys and stamp data are found in the data directory specified in its ",(0,n.jsx)(o.a,{href:"configuration",children:"configuration"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["Key data in backup files allows access to Bee node's Gnosis account. If lost or stolen it could lead to the loss of all assets in that account. Furthermore the ",(0,n.jsx)(o.code,{children:"stamperstore"})," contains postage stamp data, and postage stamps will not be recoverable if it is lost."]}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsx)(o.p,{children:"Don't forget - it's not a backup until you're sure the backup files work! Make sure to test restoring from backup files to prevent loss of assets due to data loss or corruption."})}),"\n",(0,n.jsx)(o.h3,{id:"ubuntu--debian--raspbian--centos-package-managers",children:"Ubuntu / Debian / Raspbian / CentOS package managers"}),"\n",(0,n.jsxs)(o.p,{children:["For Linux installations from package managers ",(0,n.jsx)(o.em,{children:"yum"})," or ",(0,n.jsx)(o.em,{children:"apt"}),", the data directory is located at:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"/var/lib/bee\n"})}),"\n",(0,n.jsxs)(o.p,{children:["It may also be useful to include the ",(0,n.jsx)(o.code,{children:"bee.yaml"})," config file in a backup so that configuration can be easily restored. The default location of the config file is:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"/etc/bee\n"})}),"\n",(0,n.jsx)(o.p,{children:"This guide uses the default package manager location for the data folder, make sure to change the commands to match your data folder's location if it in a different directory."}),"\n",(0,n.jsx)(o.h3,{id:"binary-package-install",children:"Binary package install"}),"\n",(0,n.jsxs)(o.p,{children:["If you installed Bee using the ",(0,n.jsx)(o.a,{href:"/docs/bee/installation/install#shell-script-install",children:"automated shell script"})," or by ",(0,n.jsx)(o.a,{href:"/docs/bee/installation/build-from-source",children:"building Bee from source"}),", your data directory will typically be located at:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"/home/<user>/.bee\n"})}),"\n",(0,n.jsx)(o.h3,{id:"docker-compose",children:"Docker Compose"}),"\n",(0,n.jsxs)(o.p,{children:["When using ",(0,n.jsx)(o.a,{href:"/docs/bee/installation/docker",children:"Docker Compose"})," configuration files to run a node, Docker will create a volume for Bee."]}),"\n",(0,n.jsxs)(o.p,{children:["Use ",(0,n.jsx)(o.code,{children:"docker cp"})," to retrieve the contents of these folders:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"docker cp bee_bee_1:/home/bee/.bee/ bee\n"})}),"\n",(0,n.jsx)(o.h3,{id:"data-types",children:"Data types"}),"\n",(0,n.jsx)(o.p,{children:"The data directory contains three directories. Its default location depends on the node install method used."}),"\n",(0,n.jsxs)(o.p,{children:["For shell script install the location is ",(0,n.jsx)(o.code,{children:"/home/<user>/.bee"})," and for package manager installs it is ",(0,n.jsx)(o.code,{children:"/var/lib/bee"}),". The directory structure is as follows:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"\u251c\u2500\u2500 kademlia-metrics\n\u2502\xa0\xa0 \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 keys\n\u2502\xa0\xa0 \u251c\u2500\u2500 libp2p.key\n\u2502\xa0\xa0 \u251c\u2500\u2500 libp2p_v2.key\n\u2502\xa0\xa0 \u251c\u2500\u2500 pss.key\n\u2502\xa0\xa0 \u2514\u2500\u2500 swarm.key\n\u251c\u2500\u2500 localstore\n\u2502\xa0\xa0 \u251c\u2500\u2500 indexstore\n\u2502\xa0\xa0 \u2514\u2500\u2500 sharky\n\u251c\u2500\u2500 password\n\u251c\u2500\u2500 stamperstore\n\u2502\xa0\xa0 \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 statestore\n\u2502\xa0\xa0 \u2514\u2500\u2500 ...\n"})}),"\n",(0,n.jsx)(o.h3,{id:"keys",children:"Keys"}),"\n",(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.code,{children:"keys"})," directory contains three key files: ",(0,n.jsx)(o.code,{children:"libp2p.key"}),",  ",(0,n.jsx)(o.code,{children:"libp2p_v2.key"}),",  ",(0,n.jsx)(o.code,{children:"pss.key"}),",  ",(0,n.jsx)(o.code,{children:"swarm.key"}),",. These keys are generated during the Bee node's initialisation and are required for maintaining access to your node."]}),"\n",(0,n.jsx)(o.admonition,{type:"danger",children:(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.code,{children:"swarm.key"})," file allows access to Bee node's Gnosis Chain account. If the key is lost or stolen it could lead to the loss of all assets secured by that key."]})}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsxs)(o.p,{children:["To use ",(0,n.jsx)(o.code,{children:"swarm.key"})," to manage the Gnosis account for a node through Metamask or other wallets, ",(0,n.jsx)(o.a,{href:"https://github.com/ethersphere/exportSwarmKey",children:"exportSwarmKeys"})," can be used to convert ",(0,n.jsx)(o.code,{children:"swarm.key"})," to a compatible format."]})}),"\n",(0,n.jsx)(o.h3,{id:"statestore-and-localstore",children:"Statestore and Localstore."}),"\n",(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.code,{children:"statestore"})," retains data related to its operation, and the ",(0,n.jsx)(o.code,{children:"localstore"})," contains chunks locally which are frequently requested, pinned in the node, or are in the node's neighbourhood of responsibility."]}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsxs)(o.p,{children:["As the data in ",(0,n.jsx)(o.code,{children:"statestore"})," and ",(0,n.jsx)(o.code,{children:"localstore"})," continually changes during normal operation of a node, when taking a backup the node should first be stopped and not re-connected to the Swarm network until restoring from the backup (otherwise the ",(0,n.jsx)(o.code,{children:"statestore"})," and ",(0,n.jsx)(o.code,{children:"localstore"})," files will get out of sync with the network). It is possible to restore using out of sync ",(0,n.jsx)(o.code,{children:"statestore"})," and ",(0,n.jsx)(o.code,{children:"localstore"})," files, however it may lead to data loss or unexpected behavior related to chunk uploads, postage stamps, and more."]})}),"\n",(0,n.jsx)(o.h2,{id:"back-up-your-node-data",children:"Back-up your node data"}),"\n",(0,n.jsxs)(o.p,{children:["Copy entire ",(0,n.jsx)(o.code,{children:"bee"})," data folder to fully backup your node. This will do a full backup of ",(0,n.jsx)(o.code,{children:"kademlia-metrics"}),",  ",(0,n.jsx)(o.code,{children:"keys"}),",  ",(0,n.jsx)(o.code,{children:"localstore"}),",  ",(0,n.jsx)(o.code,{children:"stamperstore"}),", ",(0,n.jsx)(o.code,{children:"password"}),", and ",(0,n.jsx)(o.code,{children:"statestore"}),", files into a newly created ",(0,n.jsx)(o.code,{children:"/backup"})," directory. Make sure to save the backup directory to a safe location."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"mkdir backup\nsudo cp -r /var/lib/bee/ backup\n"})}),"\n",(0,n.jsx)(o.h3,{id:"back-up-your-password",children:"Back-up your password"}),"\n",(0,n.jsxs)(o.p,{children:["Depending on your configuration, your password may not be located in the ",(0,n.jsx)(o.code,{children:"/bee"})," data directory which was copied in the previous step. If it has been specified in an environment variable or in your ",(0,n.jsxs)(o.a,{href:"/docs/bee/working-with-bee/configuration#default-data-and-config-directories",children:[(0,n.jsx)(o.code,{children:"bee.yaml"})," configuration file"]}),", make sure to copy it and save it together with the rest of your backup files or write it down in a safe place."]}),"\n",(0,n.jsx)(o.h3,{id:"back-up-blockchain-keys-only",children:"Back-up blockchain keys only"}),"\n",(0,n.jsxs)(o.p,{children:["If you only need to export your node's blockchain keys, you need to export the ",(0,n.jsx)(o.code,{children:"swarm.key"})," UTC / JSON keystore file and the ",(0,n.jsx)(o.code,{children:"password"})," file used to encrypt it. First create a directory for your keys and then copy your keys to that directory."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"mkdir keystore\nsudo cp -r /var/lib/bee/keys/swarm.key /var/lib/bee/password keystore    \n"})}),"\n",(0,n.jsx)(o.h2,{id:"metamask-import",children:"Metamask Import"}),"\n",(0,n.jsx)(o.p,{children:"If you wish to import your blockchain account to a wallet such as Metamask, you can simply print out your keystore file and password and use those data to import into the wallet:"}),"\n",(0,n.jsx)(o.h3,{id:"view-key-and-password-for-wallet-import",children:"View key and password for wallet import"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"sudo cat /var/lib/bee/keys/swarm.key \nsudo cat /var/lib/bee/password\n"})}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsxs)(o.p,{children:["Note that ",(0,n.jsx)(o.code,{children:"swarm.key"})," is in UTC / JSON keystores format and is encrypted by default by your password file inside the ",(0,n.jsx)(o.code,{children:"/bee"})," directory. Make sure to export both the ",(0,n.jsx)(o.code,{children:"swarm.key"})," file and the ",(0,n.jsx)(o.code,{children:"password"})," file in order to secure your wallet. If you need your private key exported from the keystore file, you may use one of a variety of Ethereum wallets which support exporting private keys from UTC files (such as ",(0,n.jsx)(o.a,{href:"https://metamask.io/",children:"Metamask"}),", however we offer no guarantees for any software, make sure you trust it completely before using it)."]})}),"\n",(0,n.jsx)(o.h3,{id:"get-private-key-from-keystore-and-password",children:"Get private key from keystore and password"}),"\n",(0,n.jsx)(o.p,{children:"To import to Metamask:"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["View and copy your ",(0,n.jsx)(o.code,{children:"swarm.key"})," and ",(0,n.jsx)(o.code,{children:"password"})," as shown above"]}),"\n",(0,n.jsx)(o.li,{children:'Go to Metamask and click "Account 1" --\x3e "Import Account"'}),"\n",(0,n.jsx)(o.li,{children:'Choose the "Select Type" dropdown menu and choose "JSON file"'}),"\n",(0,n.jsx)(o.li,{children:"Paste the password (Make sure to do this first)"}),"\n",(0,n.jsx)(o.li,{children:"Upload exported JSON file"}),"\n",(0,n.jsx)(o.li,{children:'Click "Import"'}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"To export your private key:"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsx)(o.li,{children:'Go to Metamask and click "Account 1" to view the dropdown menu of all accounts'}),"\n",(0,n.jsx)(o.li,{children:"Click the three dots next to the account you want to export"}),"\n",(0,n.jsx)(o.li,{children:'Click "Account details"'}),"\n",(0,n.jsx)(o.li,{children:'Click "Show private key"'}),"\n",(0,n.jsx)(o.li,{children:"Enter your Metamask password (not your keystore password)"}),"\n",(0,n.jsx)(o.li,{children:"Copy your private key to a safe location"}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"restore-from-backup",children:"Restore from backup"}),"\n",(0,n.jsx)(o.admonition,{type:"danger",children:(0,n.jsxs)(o.p,{children:["Before restoring, make sure to check for any old node data at ",(0,n.jsx)(o.code,{children:"/var/lib/bee"})," from a previous node which has not yet been backed up, and back it up if needed."]})}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["Install Bee. See ",(0,n.jsx)(o.a,{href:"/docs/bee/installation/install/",children:"install"})," page for more info."]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["Delete ",(0,n.jsx)(o.code,{children:"/bee"})," folder which was generated during install"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"sudo rm -r /var/lib/bee\n"})}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Navigate to backup directory and copy files to data folder."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"sudo cp -r /<path-to-backup>/. /var/lib/bee\n"})}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Revert ownership of the data folder."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"sudo chown -R bee:bee /var/lib/bee\n"})}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["Start ",(0,n.jsx)(o.code,{children:"bee"})," service and check logs to see if Bee node is running properly."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"sudo systemctl restart bee\nsudo journalctl --lines=100 --follow --unit bee      \n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,o,s)=>{s.d(o,{R:()=>a,x:()=>i});var n=s(96540);const r={},t=n.createContext(r);function a(e){const o=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(t.Provider,{value:o},e.children)}}}]);