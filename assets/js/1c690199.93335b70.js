"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[5768],{61556:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var r=o(17624),n=o(4552);const t={title:"Backups",id:"backups"},i=void 0,a={id:"bee/working-with-bee/backups",title:"Backups",description:"Files",source:"@site/docs/bee/working-with-bee/backups.md",sourceDirName:"bee/working-with-bee",slug:"/bee/working-with-bee/backups",permalink:"/docs/bee/working-with-bee/backups",draft:!1,unlisted:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/bee/working-with-bee/backups.md",tags:[],version:"current",frontMatter:{title:"Backups",id:"backups"},sidebar:"bee",previous:{title:"Monitoring Your Node",permalink:"/docs/bee/working-with-bee/monitoring"},next:{title:"Upgrading Bee",permalink:"/docs/bee/working-with-bee/upgrading-bee"}},d={},l=[{value:"Files",id:"files",level:2},{value:"Ubuntu / Debian / Raspbian / CentOS package managers",id:"ubuntu--debian--raspbian--centos-package-managers",level:3},{value:"Binary package install",id:"binary-package-install",level:3},{value:"Docker Compose",id:"docker-compose",level:3},{value:"Data types",id:"data-types",level:2},{value:"Keys",id:"keys",level:3},{value:"Statestore",id:"statestore",level:3},{value:"Localstore",id:"localstore",level:3},{value:"Backup Your node",id:"backup-your-node",level:2},{value:"Export keys",id:"export-keys",level:3},{value:"View key and password for wallet import",id:"view-key-and-password-for-wallet-import",level:3},{value:"Metamask Import",id:"metamask-import",level:2},{value:"Get private key from keystore and password",id:"get-private-key-from-keystore-and-password",level:3},{value:"Restore from backup",id:"restore-from-backup",level:2},{value:"Import Clef Keys",id:"import-clef-keys",level:2},{value:"Step 1: From /bee-clef directory, print out keystore and password and keystore and save for the next step:",id:"step-1-from-bee-clef-directory-print-out-keystore-and-password-and-keystore-and-save-for-the-next-step",level:3},{value:"Keystore (throwaway example):",id:"keystore-throwaway-example",level:4},{value:"Password",id:"password",level:4},{value:"Step 2: Import Clef Keys",id:"step-2-import-clef-keys",level:3},{value:"Check your settings",id:"check-your-settings",level:4},{value:"Import keys",id:"import-keys",level:4},{value:"Import password",id:"import-password",level:4},{value:"Import keystore",id:"import-keystore",level:4}];function c(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,n.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"files",children:"Files"}),"\n",(0,r.jsxs)(s.p,{children:["A full Bee node backup includes the ",(0,r.jsx)(s.code,{children:"keys"}),", ",(0,r.jsx)(s.code,{children:"localstore"}),", ",(0,r.jsx)(s.code,{children:"statestore"}),", and ",(0,r.jsx)(s.code,{children:"password"})," files. The node should be stopped before taking a backup and not restarted until restoring the node from the backup to prevent the node from getting out of sync with the network."]}),"\n",(0,r.jsxs)(s.p,{children:["Node key and state data is found in the data directory specified in its ",(0,r.jsx)(s.a,{href:"configuration",children:"configuration"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"Key data in backup files allows access to Bee node's Gnosis account. If lost or stolen it could lead to the loss of all assets in that account. Multiple backups should be kept in secure locations."}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsx)(s.p,{children:"Don't forget - it's not a backup until you're sure the backup files work! Make sure to test restoring from backup files to prevent loss of assets due to data loss or corruption."})}),"\n",(0,r.jsx)(s.h3,{id:"ubuntu--debian--raspbian--centos-package-managers",children:"Ubuntu / Debian / Raspbian / CentOS package managers"}),"\n",(0,r.jsxs)(s.p,{children:["For Linux installations from package managers ",(0,r.jsx)(s.em,{children:"yum"})," or ",(0,r.jsx)(s.em,{children:"apt"}),", the data directory is located at:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"/var/lib/bee\n"})}),"\n",(0,r.jsxs)(s.p,{children:["It may also be useful to include the ",(0,r.jsx)(s.code,{children:"bee.yaml"})," config file in a backup so that configuration can be easily restored. The default location of the config file is:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"/etc/bee\n"})}),"\n",(0,r.jsx)(s.h3,{id:"binary-package-install",children:"Binary package install"}),"\n",(0,r.jsxs)(s.p,{children:["If you installed Bee using the ",(0,r.jsx)(s.a,{href:"/docs/bee/installation/install#shell-script-install",children:"automated shell script"})," or by ",(0,r.jsx)(s.a,{href:"/docs/bee/installation/build-from-source",children:"building Bee from source"}),", your data directory will typically be located at:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"/home/<user>/.bee\n"})}),"\n",(0,r.jsx)(s.h3,{id:"docker-compose",children:"Docker Compose"}),"\n",(0,r.jsxs)(s.p,{children:["When using ",(0,r.jsx)(s.a,{href:"/docs/bee/installation/docker",children:"Docker Compose"})," configuration files to run a node, Docker will create a volume for Bee."]}),"\n",(0,r.jsxs)(s.p,{children:["Use ",(0,r.jsx)(s.code,{children:"docker cp"})," to retrieve the contents of these folders:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"docker cp bee_bee_1:/home/bee/.bee/ bee\n"})}),"\n",(0,r.jsx)(s.h2,{id:"data-types",children:"Data types"}),"\n",(0,r.jsx)(s.p,{children:"The data directory contains three directories. Its default location depends on the node install method used."}),"\n",(0,r.jsx)(s.p,{children:"Shell script install:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"/home/<user>/.bee\n\u251c\u2500\u2500 keys\n\u2502\xa0\xa0 \u251c\u2500\u2500 libp2p.key\n\u2502\xa0\xa0 \u251c\u2500\u2500 pss.key\n\u2502\xa0\xa0 \u2514\u2500\u2500 swarm.key\n\u251c\u2500\u2500 localstore\n\u2502\xa0\xa0 \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 statestore\n    \u2514\u2500\u2500 ...\n"})}),"\n",(0,r.jsx)(s.p,{children:"Package manager install:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"/var/lib/bee\n\u251c\u2500\u2500 keys\n\u2502\xa0\xa0 \u251c\u2500\u2500 libp2p.key\n\u2502\xa0\xa0 \u251c\u2500\u2500 pss.key\n\u2502\xa0\xa0 \u2514\u2500\u2500 swarm.key\n\u251c\u2500\u2500 localstore\n\u2502\xa0\xa0 \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 statestore\n    \u2514\u2500\u2500 ...\n"})}),"\n",(0,r.jsx)(s.h3,{id:"keys",children:"Keys"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"keys"})," directory contains three key files: ",(0,r.jsx)(s.code,{children:"libp2p_v2.key"}),", ",(0,r.jsx)(s.code,{children:"pss.key"}),", and ",(0,r.jsx)(s.code,{children:"swarm.key"}),". These keys are generated during the Bee node's initialisation and are the most important data to retain for a backup."]}),"\n",(0,r.jsx)(s.admonition,{type:"danger",children:(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"swarm.key"})," file allows access to Bee node's Gnosis account. If the key is lost or stolen it could lead to the loss of all assets secured by that key. Multiple backups should be kept in secure locations to prevent loss of assets or unauthorized access."]})}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsxs)(s.p,{children:["To use ",(0,r.jsx)(s.code,{children:"swarm.key"})," to manage the Gnosis account for a node through Metamask or other wallets, ",(0,r.jsx)(s.a,{href:"https://github.com/ethersphere/exportSwarmKey",children:"exportSwarmKeys"})," can be used to convert ",(0,r.jsx)(s.code,{children:"swarm.key"})," to a compatible format."]})}),"\n",(0,r.jsx)(s.h3,{id:"statestore",children:"Statestore"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"statestore"})," directory retains information related to the node,\nincluding SWAP balances, info on peers, block list, postage stamps, and more."]}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsxs)(s.p,{children:["As the data in ",(0,r.jsx)(s.code,{children:"statestore"})," and ",(0,r.jsx)(s.code,{children:"localstore"})," continually changes during normal operation of a node, when taking a backup the node should first be stopped and not re-connected to the Swarm network until restoring from the backup (otherwise the ",(0,r.jsx)(s.code,{children:"statestore"})," and ",(0,r.jsx)(s.code,{children:"localstore"})," files will get out of sync with the network). It is possible to restore using out of sync ",(0,r.jsx)(s.code,{children:"statestore"})," and ",(0,r.jsx)(s.code,{children:"localstore"})," files, however it may lead to data loss or unexpected behavior related to chunk uploads, postage stamps, and more."]})}),"\n",(0,r.jsx)(s.h3,{id:"localstore",children:"Localstore"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"localstore"})," directory contains chunks locally which are frequently requested, pinned in the node, or are in the node's neighbourhood of responsibility."]}),"\n",(0,r.jsx)(s.h2,{id:"backup-your-node",children:"Backup Your node"}),"\n",(0,r.jsxs)(s.p,{children:["Copy entire ",(0,r.jsx)(s.code,{children:"bee"})," data folder to fully backup node. This will do a full backup of ",(0,r.jsx)(s.code,{children:"statestore"}),". ",(0,r.jsx)(s.code,{children:"localstore"}),", and ",(0,r.jsx)(s.code,{children:"key"})," files into the newly created ",(0,r.jsx)(s.code,{children:"/backup"})," directory. Make sure to save the backup directory to a safe location."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"mkdir backup\nsudo cp -r /var/lib/bee/ backup\n"})}),"\n",(0,r.jsx)(s.h3,{id:"export-keys",children:"Export keys"}),"\n",(0,r.jsxs)(s.p,{children:["If you only need to export your node's blockchain keys, you need to export the ",(0,r.jsx)(s.code,{children:"swarm.key"})," UTC / JSON keystore file and the ",(0,r.jsx)(s.code,{children:"password"})," file used to encrypt it. First create a directory for your keys and then export, make sure to save the newly created ",(0,r.jsx)(s.code,{children:"keystore"})," directory in a safe location."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"mkdir keystore\nsudo cp -r /var/lib/bee/keys/swarm.key /var/lib/bee/password keystore    \n\n"})}),"\n",(0,r.jsx)(s.h3,{id:"view-key-and-password-for-wallet-import",children:"View key and password for wallet import"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"sudo cat /var/lib/bee/keys/swarm.key \nsudo cat /var/lib/bee/password\n"})}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsxs)(s.p,{children:["Note that ",(0,r.jsx)(s.code,{children:"swarm.key"})," is in UTC / JSON keystores format and is encrypted by default by your password file inside the ",(0,r.jsx)(s.code,{children:"/bee"})," directory. Make sure to export both the ",(0,r.jsx)(s.code,{children:"swarm.key"})," file and the ",(0,r.jsx)(s.code,{children:"password"})," file in order to secure your wallet. If you need your private key exported from the keystore file, you may use one of a variety of Ethereum wallets which support exporting private keys from UTC files (such as ",(0,r.jsx)(s.a,{href:"https://metamask.io/",children:"Metamask"}),", however we offer no guarantees for any software, make sure you trust it completely before using it)."]})}),"\n",(0,r.jsx)(s.h2,{id:"metamask-import",children:"Metamask Import"}),"\n",(0,r.jsx)(s.p,{children:"If you wish to import your blockchain account to a wallet such as Metamask, you can simply print out your keystore file and password and use those data to import into the wallet:"}),"\n",(0,r.jsx)(s.h3,{id:"get-private-key-from-keystore-and-password",children:"Get private key from keystore and password"}),"\n",(0,r.jsx)(s.p,{children:"To import to Metamask:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Get your ",(0,r.jsx)(s.code,{children:"swarm.key"})," and ",(0,r.jsx)(s.code,{children:"password"})," as described in the section above."]}),"\n",(0,r.jsx)(s.li,{children:'Go to Metamask and click "Account 1" --\x3e "Import Account"'}),"\n",(0,r.jsx)(s.li,{children:'Choose the "Select Type" dropdown menu and choose "JSON file"'}),"\n",(0,r.jsx)(s.li,{children:"Paste the password (Make sure to do this first)"}),"\n",(0,r.jsx)(s.li,{children:"Upload exported JSON file"}),"\n",(0,r.jsx)(s.li,{children:'Click "Import"'}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"To export your private key:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:'Go to Metamask and click "Account 1" to view the dropdown menu of all accounts'}),"\n",(0,r.jsx)(s.li,{children:"Click the three dots next to the account you want to export"}),"\n",(0,r.jsx)(s.li,{children:'Click "Account details"'}),"\n",(0,r.jsx)(s.li,{children:'Click "Show private key"'}),"\n",(0,r.jsx)(s.li,{children:"Enter your Metamask password (not your keystore password)"}),"\n",(0,r.jsx)(s.li,{children:"Copy your private key to a safe location"}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"restore-from-backup",children:"Restore from backup"}),"\n",(0,r.jsx)(s.admonition,{type:"danger",children:(0,r.jsxs)(s.p,{children:["Before restoring, make sure to check for any old node data at ",(0,r.jsx)(s.code,{children:"/var/lib/bee"})," from a previous node which has not yet been backed up, and back it up if needed."]})}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Install Bee. See ",(0,r.jsx)(s.a,{href:"/docs/bee/installation/install/",children:"install"})," page for more info."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Change ownership of ",(0,r.jsx)(s.code,{children:"bee"})," data folder."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"sudo chown -R /var/lib/bee\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Delete statestore, keys, localstore, and password files."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"sudo rm -r /var/lib/bee\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Navigate to backup directory and copy files to data folder."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"cp -r /<path-to-backup>/bee /var/lib/\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Revert ownership of the data folder."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"sudo chown -R bee:bee /var/lib/bee\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Start ",(0,r.jsx)(s.code,{children:"bee"})," service and check logs to see if Bee node is running properly."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"sudo systemctl restart bee\nsudo journalctl --lines=100 --follow --unit bee      \n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"import-clef-keys",children:"Import Clef Keys"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://github.com/ethersphere/bee-clef",children:"Bee Clef"})," is the deprecated external signer for Bee. Node operators are recommended to remove Clef from their setup in order to ensure their nodes continue to operate smoothly through future updates. Below is a guide for importing Clef keys into a non-Clef setup. See the ",(0,r.jsx)(s.a,{href:"https://discord.com/channels/799027393297514537/811553590170353685",children:"#node-operators Discord channel"})," for more support from other node operators and channel admins."]}),"\n",(0,r.jsx)(s.h3,{id:"step-1-from-bee-clef-directory-print-out-keystore-and-password-and-keystore-and-save-for-the-next-step",children:"Step 1: From /bee-clef directory, print out keystore and password and keystore and save for the next step:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.em,{children:["Notice: You may need to ",(0,r.jsx)(s.code,{children:"sudo chown -R user:user /bee-clef"})," if you do not already have access"]})}),"\n",(0,r.jsx)(s.admonition,{type:"danger",children:(0,r.jsx)(s.p,{children:"This is a throwaway account so we are sharing the keystore and password for this guide, never share your keystore or password like this!"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:o(28460).c+"",width:"1248",height:"820"})}),"\n",(0,r.jsx)(s.p,{children:"Follow the steps shown in the screenshot above to print out clef keystore."}),"\n",(0,r.jsx)(s.h4,{id:"keystore-throwaway-example",children:"Keystore (throwaway example):"}),"\n",(0,r.jsx)(s.p,{children:"Copy the output shown in the screenshot:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{"address":"1199e0674661ed795ead3182d5a5407e5d609612","crypto":{"cipher":"aes-128-ctr","ciphertext":"bcd47f40e970658f10be215833acebc60e5826935484be75009bb43c71472a7a","cipherparams":{"iv":"84137379119a5547888cfc8ea425ce7d"},"kdf":"scrypt","kdfparams":{"dklen":32,"n":4096,"p":6,"r":8,"salt":"d555e66cbe0779d33eb088f50a345c6da5eed6f84ac6f418f9b0b731d721d2ac"},"mac":"48e7b3967d804ab54cd3610070d74a45f7f2eca4195eb6e82f289c4ce3332383"},"id":"e2e2eef3-8fd2-40f5-8f5d-a54c716110db","version":3}\n'})}),"\n",(0,r.jsx)(s.h4,{id:"password",children:"Password"}),"\n",(0,r.jsxs)(s.p,{children:["Again copy the output, make sure you are printing the password file in ",(0,r.jsx)(s.code,{children:"/passwords"})," whose title matches the address of the account you are exporting (i.e., after the ",(0,r.jsx)(s.code,{children:"bee-0_"})," portion of the password file name the address of the wallet is printed starting with ",(0,r.jsx)(s.code,{children:"1199e..."})," )"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"nd_UePSEWHLHa8drvl4TYR1W2QPNlKov"})}),"\n",(0,r.jsx)(s.h3,{id:"step-2-import-clef-keys",children:"Step 2: Import Clef Keys"}),"\n",(0,r.jsx)(s.h4,{id:"check-your-settings",children:"Check your settings"}),"\n",(0,r.jsxs)(s.p,{children:["Make sure you have removed clef related entries from your settings, such as ",(0,r.jsx)(s.code,{children:"clef-signer-enable"})," and ",(0,r.jsx)(s.code,{children:"clef-signer-endpoint"})]}),"\n",(0,r.jsx)(s.h4,{id:"import-keys",children:"Import keys"}),"\n",(0,r.jsxs)(s.p,{children:["Navigate to your bee install location. For our example it is installed at the default ",(0,r.jsx)(s.code,{children:"/var/lib/bee"}),":"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.em,{children:["Notice: You may need to ",(0,r.jsx)(s.code,{children:"sudo chown -R user:user /bee"})," if you do not already have access"]})}),"\n",(0,r.jsx)(s.admonition,{type:"danger",children:(0,r.jsxs)(s.p,{children:["From here you may have accounts here which you have not yet backed up. As the following steps to import your bee-clef keys will erase any keys you have currently, make sure to ",(0,r.jsx)(s.a,{href:"https://docs.ethswarm.org/docs/bee/working-with-bee/backups#keys",children:"backup"})," any keys you already have here."]})}),"\n",(0,r.jsx)(s.h4,{id:"import-password",children:"Import password"}),"\n",(0,r.jsxs)(s.p,{children:["From ",(0,r.jsx)(s.code,{children:"/var/lib/bee"})," open your password file using ",(0,r.jsx)(s.code,{children:"vi"})," and overwrite it with the password you copied from step 1, and save the changes. ",(0,r.jsx)(s.em,{children:"(Make sure you have the original password backed up if you want to save the account already there.)"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:o(17276).c+"",width:"1006",height:"561"})}),"\n",(0,r.jsx)(s.h4,{id:"import-keystore",children:"Import keystore"}),"\n",(0,r.jsxs)(s.p,{children:["First navigate to ",(0,r.jsx)(s.code,{children:"/var/lib/bee/keys"})," and delete the ",(0,r.jsx)(s.code,{children:"libp2p_v2.key"})," and ",(0,r.jsx)(s.code,{children:"pss.key"})," files using ",(0,r.jsx)(s.code,{children:"rm libp2p_v2.key pss.key"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Next, open the ",(0,r.jsx)(s.code,{children:"swarm.key"})," file using ",(0,r.jsx)(s.code,{children:"vi"})," and paste the keystore you copied from the first step, then save and close the file."]}),"\n",(0,r.jsxs)(s.p,{children:["Finally, give permissions back to ",(0,r.jsx)(s.code,{children:"bee"})," with:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"sudo chown -R bee:bee /bee\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Now your import is complete, simply restart your bee to allow it to regenerate your ",(0,r.jsx)(s.code,{children:"pss.key"})," and ",(0,r.jsx)(s.code,{children:"libp2p_v2.key"})," files"]})]})}function h(e={}){const{wrapper:s}={...(0,n.M)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28460:(e,s,o)=>{o.d(s,{c:()=>r});const r=o.p+"assets/images/clef_import_01-9dd7e0024dd3aa384af3e88576d4e59a.png"},17276:(e,s,o)=>{o.d(s,{c:()=>r});const r=o.p+"assets/images/clef_import_02-938c45a737af74726acbc2b8cae99ab6.png"},4552:(e,s,o)=>{o.d(s,{I:()=>a,M:()=>i});var r=o(11504);const n={},t=r.createContext(n);function i(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);