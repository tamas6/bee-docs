"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[6298],{36724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=n(74848),a=n(28453);const r={title:"Access Control",id:"act"},o=void 0,i={id:"develop/tools-and-features/act",title:"Access Control",description:'This is guide contains a detailed explanation of how to use the ACT feature, but does not cover its higher level concepts. To better understand how ACT works and why to use it, read the ACT page in the "Learn" section.',source:"@site/docs/develop/tools-and-features/access-control.md",sourceDirName:"develop/tools-and-features",slug:"/develop/tools-and-features/act",permalink:"/docs/develop/tools-and-features/act",draft:!1,unlisted:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/develop/tools-and-features/access-control.md",tags:[],version:"current",frontMatter:{title:"Access Control",id:"act"},sidebar:"develop",previous:{title:"Starting a Test Network",permalink:"/docs/develop/tools-and-features/starting-a-test-network"},next:{title:"Introduction",permalink:"/docs/develop/contribute/introduction"}},d={},c=[{value:"Upload",id:"upload",level:3},{value:"Download",id:"download",level:3},{value:"Grantee management",id:"grantee-management",level:3},{value:"Create",id:"create",level:4},{value:"Patch",id:"patch",level:4},{value:"Get",id:"get",level:4}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["This is guide contains a detailed explanation of how to use the ACT feature, but does not cover its higher level concepts. To better understand how ACT works and why to use it, read ",(0,s.jsx)(t.a,{href:"/docs/learn/technology/act",children:'the ACT page in the "Learn" section'}),"."]})}),"\n",(0,s.jsxs)(t.p,{children:["In this section we'll provide information on how to use the ",(0,s.jsx)(t.strong,{children:"swarm-cli"})," to upload, download data with ACT or update the grantee list."]}),"\n",(0,s.jsx)(t.h3,{id:"upload",children:"Upload"}),"\n",(0,s.jsx)(t.p,{children:"Uploading data without ACT to the network remains unchanged."}),"\n",(0,s.jsxs)(t.p,{children:["To upload with ACT use the ",(0,s.jsx)(t.strong,{children:"act"})," and ",(0,s.jsx)(t.strong,{children:"act-history-address"})," flags following the ",(0,s.jsx)(t.strong,{children:"upload"})," command:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"swarm-cli upload test.txt --act --stamp $stamp_id --act-history-address $swarm_history_address\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Here ",(0,s.jsx)(t.strong,{children:"act"})," indicates that the file provided shall be uploaded using ACT.\nThe ",(0,s.jsx)(t.strong,{children:"act-history-address"})," flag is the reference of the historical version of the ACT. It can be omitted, in which case the data is uploaded to a new history. If provided, then the data will be uploaded to that history as the latest version. In both cases the timestamp of the upload is taken as the key of the history entry.\nIf the provided ",(0,s.jsx)(t.strong,{children:"act-history-address"})," is invalid then the request will fail with a not found error."]}),"\n",(0,s.jsx)(t.p,{children:"The response returns the newly created reference encrypted with ACT and the header contains history reference."}),"\n",(0,s.jsx)(t.h3,{id:"download",children:"Download"}),"\n",(0,s.jsx)(t.p,{children:"Downloading data which was uploaded without ACT from the network remains unchanged."}),"\n",(0,s.jsxs)(t.p,{children:["To download with ACT use the ",(0,s.jsx)(t.strong,{children:"act"}),", ",(0,s.jsx)(t.strong,{children:"act-publisher"}),", ",(0,s.jsx)(t.strong,{children:"act-timestamp"})," and ",(0,s.jsx)(t.strong,{children:"act-history-address"})," flags following the ",(0,s.jsx)(t.strong,{children:"download"})," command:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"swarm-cli download $swarm_hash test.txt --act --act-history-address $swarm_history_address --act-publisher $public_key --timestamp $timestamp\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Here ",(0,s.jsx)(t.strong,{children:"act"})," indicates that the ",(0,s.jsx)(t.strong,{children:"swarm_hash"})," shall be decrypted using the content publisher's public key as ",(0,s.jsx)(t.strong,{children:"act-publisher"})," and the lookup table mentioned above. The ",(0,s.jsx)(t.strong,{children:"act-history-address"})," flag is the reference of the historical version of the ACT based on the timestamp provided, however the ",(0,s.jsx)(t.strong,{children:"act-timestamp"})," flag can be omitted in which case the current timestamp is used."]}),"\n",(0,s.jsxs)(t.p,{children:["If the ",(0,s.jsx)(t.strong,{children:"act-history-address"})," or ",(0,s.jsx)(t.strong,{children:"act-publisher"}),' flags are omitted then the request is treated as a "usual" download.\nIf the data was uploaded with ACT and we try to download it without the ACT flags then the request will fail with a not found error.']}),"\n",(0,s.jsx)(t.h3,{id:"grantee-management",children:"Grantee management"}),"\n",(0,s.jsx)(t.p,{children:"Updating a grantee list literally means patching a json file containing the list of grantee swarm public keys."}),"\n",(0,s.jsx)(t.h4,{id:"create",children:"Create"}),"\n",(0,s.jsx)(t.p,{children:"A brand new grantee list can be created using the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"swarm-cli grantee create grantees.json --stamp $stamp_id\n"})}),"\n",(0,s.jsxs)(t.p,{children:["where ",(0,s.jsx)(t.strong,{children:"grantees.json"})," shall contain the key ",(0,s.jsx)(t.strong,{children:"grantees"})," with the list of public keys:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "grantees": [\n    "03ec55e9fb2aefb8600f69142abaad79311516c232b28919d66efb4d41bce15bfa",\n    "03fdcab22b455ce08a481d929a4cb9f447752545818eded1ad1785c51581e822c6"\n  ]\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The response returns the newly created and encrypted grantee list and the history reference. Only the publisher can decrypt and therefore access the list.\nIf ",(0,s.jsx)(t.strong,{children:"act-history-address"})," is provided then the grantee list is uploaded as the newest version under that history."]}),"\n",(0,s.jsx)(t.h4,{id:"patch",children:"Patch"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"swarm-cli grantee patch grantees-patch.json --reference $grantee_reference --history $grantee_history_reference --stamp $stamp_id\n"})}),"\n",(0,s.jsxs)(t.p,{children:["where ",(0,s.jsx)(t.strong,{children:"grantees.json"})," shall contain the keys ",(0,s.jsx)(t.strong,{children:"add"})," and ",(0,s.jsx)(t.strong,{children:"revoke"})," with the list of public keys for granting and revoking access, respectively:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "add": ["03fdcab22b455ce08a481d929a4cb9f447752545818eded1ad1785c51581e822c6"],\n  "revoke": [\n    "03ec55e9fb2aefb8600f69142abaad79311516c232b28919d66efb4d41bce15bfa"\n  ]\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"reference"})," flag indicates the already existing encrypted grantee list reference that needs to be updated.\nThe ",(0,s.jsx)(t.strong,{children:"grantee_history_reference"})," indicates the reference of historical version of the list, where the encrypted list reference is added as a metadata to the history entry with the key ",(0,s.jsx)(t.strong,{children:'"encryptedglref"'})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Limitation"}),": If an update is called again within a second from the latest upload/update of a grantee list, then mantaray save fails with an invalid input error, because the key (timestamp) already exists, hence a new fork is not created."]}),"\n",(0,s.jsx)(t.h4,{id:"get",children:"Get"}),"\n",(0,s.jsx)(t.p,{children:"As stated above, only the publisher can decrypt and therefore access the list with the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"swarm-cli grantee get $grantee_reference\n"})}),"\n",(0,s.jsx)(t.p,{children:"which simply returns the latest version of the list."}),"\n",(0,s.jsxs)(t.p,{children:["Non-authorized access causes the request to fail with a not found error.\nFor each of the above operations, if the provided ",(0,s.jsx)(t.strong,{children:"act-history-address"})," or ",(0,s.jsx)(t.strong,{children:"reference"})," is invalid then the request will fail with a not found error."]})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(96540);const a={},r=s.createContext(a);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);