"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[3829],{49167:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=t(74848),r=t(28453),i=t(11470),o=t(19365);const s={title:"Configuration",id:"configuration"},l=void 0,c={id:"bee/working-with-bee/configuration",title:"Configuration",description:"Default Data and Config Directories",source:"@site/docs/bee/working-with-bee/configuration.md",sourceDirName:"bee/working-with-bee",slug:"/bee/working-with-bee/configuration",permalink:"/docs/bee/working-with-bee/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/bee/working-with-bee/configuration.md",tags:[],version:"current",frontMatter:{title:"Configuration",id:"configuration"},sidebar:"bee",previous:{title:"Introduction",permalink:"/docs/bee/working-with-bee/introduction"},next:{title:"Bee API",permalink:"/docs/bee/working-with-bee/bee-api"}},d={},u=[{value:"Default Data and Config Directories",id:"default-data-and-config-directories",level:2},{value:"Bee Service Default Directories",id:"bee-service-default-directories",level:3},{value:"<code>bee start</code> Default Directories",id:"bee-start-default-directories",level:3},{value:"Configuration Methods and Priority",id:"configuration-methods-and-priority",level:2},{value:"Command Line Arguments",id:"command-line-arguments",level:3},{value:"Environment variables",id:"environment-variables",level:3},{value:"YAML configuration file",id:"yaml-configuration-file",level:3},{value:"Manually generating a config file for <code>bee start</code>",id:"manually-generating-a-config-file-for-bee-start",level:2},{value:"Restoring default config files for Bee service",id:"restoring-default-config-files-for-bee-service",level:2},{value:"Sepolia Testnet Configuration",id:"sepolia-testnet-configuration",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"default-data-and-config-directories",children:"Default Data and Config Directories"}),"\n",(0,a.jsx)(n.p,{children:"Depending on the operating system and startup method used, the default data and configuration directories for your node will differ."}),"\n",(0,a.jsx)(n.h3,{id:"bee-service-default-directories",children:"Bee Service Default Directories"}),"\n",(0,a.jsxs)(n.p,{children:["When installed using a package manager, Bee is set up to run as a service with default data and configuration  directories set up automatically during the installation. The examples below include default directories for Linux and macOS. You can find the complete details of default directories for different operating systems in the ",(0,a.jsx)(n.code,{children:"bee.yaml"})," files included in the ",(0,a.jsx)(n.a,{href:"https://github.com/ethersphere/bee/tree/master/packaging",children:"packaging folder of the Bee repo"}),"."]}),"\n",(0,a.jsxs)(i.A,{defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"MacOS arm64 (Apple Silicon)",value:"macos-arm64"},{label:"MacOS amd64 (Intel)",value:"macos-amd64"}],children:[(0,a.jsxs)(o.A,{value:"linux",children:[(0,a.jsx)(n.p,{children:"The default data folder and config file locations:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"data-dir: /var/lib/bee\nconfig: /etc/bee/bee.yaml\n"})})]}),(0,a.jsxs)(o.A,{value:"macos-arm64",children:[(0,a.jsx)(n.p,{children:"The default data folder and config file locations:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"data-dir: /opt/homebrew/var/lib/swarm-bee\nconfig: /opt/homebrew/etc/swarm-bee/bee.yaml\n"})})]}),(0,a.jsxs)(o.A,{value:"macos-amd64",children:[(0,a.jsx)(n.p,{children:"The default data folder and config file locations:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"data-dir: /usr/local/var/lib/swarm-bee/\nconfig: /usr/local/etc/swarm-bee/bee.yaml\n"})})]})]}),"\n",(0,a.jsxs)(n.h3,{id:"bee-start-default-directories",children:[(0,a.jsx)(n.code,{children:"bee start"})," Default Directories"]}),"\n",(0,a.jsxs)(n.p,{children:["For all operating systems, the default data and config directories for the ",(0,a.jsx)(n.code,{children:"bee start"})," startup method can be found using the ",(0,a.jsx)(n.code,{children:"bee printconfig"})," command:"]}),"\n",(0,a.jsxs)(n.p,{children:["This will print out a complete default Bee node configuration file to the terminal, the ",(0,a.jsx)(n.code,{children:"config"})," and ",(0,a.jsx)(n.code,{children:"data-dir"})," values show the default directories for your system:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"config: /root/.bee.yaml\ndata-dir: /root/.bee\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["The default directories for your system may differ from the example above, so make sure to run the ",(0,a.jsx)(n.code,{children:"bee printconfig"})," command to view the default directories for your system."]})}),"\n",(0,a.jsx)(n.h2,{id:"configuration-methods-and-priority",children:"Configuration Methods and Priority"}),"\n",(0,a.jsx)(n.p,{children:"There are three methods of configuration which each have different priority levels. Configuration is processed in the following ascending order of preference:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Command Line Arguments"}),"\n",(0,a.jsx)(n.li,{children:"Environment Variables"}),"\n",(0,a.jsx)(n.li,{children:"YAML Configuration File"}),"\n"]}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.p,{children:["All three methods may be used when running Bee using ",(0,a.jsx)(n.code,{children:"bee start"}),"."]}),(0,a.jsxs)(n.p,{children:["However when Bee is started as a service with tools like ",(0,a.jsx)(n.code,{children:"systemctl"})," or ",(0,a.jsx)(n.code,{children:"brew services"}),", only the YAML configuration file is supported by default."]})]}),"\n",(0,a.jsx)(n.h3,{id:"command-line-arguments",children:"Command Line Arguments"}),"\n",(0,a.jsxs)(n.p,{children:["Run ",(0,a.jsx)(n.code,{children:"bee start --help"})," in your Terminal to list the available command line arguments as follows:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'Start a Swarm node\n\nUsage:\n  bee start [flags]\n\nFlags:\n      --allow-private-cidrs                      allow to advertise private CIDRs to the public network\n      --api-addr string                          HTTP API listen address (default "127.0.0.1:1633")\n      --block-time uint                          chain block time (default 15)\n      --blockchain-rpc-endpoint string           rpc blockchain endpoint\n      --bootnode strings                         initial nodes to connect to\n      --bootnode-mode                            cause the node to always accept incoming connections\n      --cache-capacity uint                      cache capacity in chunks, multiply by 4096 to get approximate capacity in bytes (default 1000000)\n      --cache-retrieval                          enable forwarded content caching (default true)\n      --chequebook-enable                        enable chequebook (default true)\n      --cors-allowed-origins strings             origins with CORS headers enabled\n      --data-dir string                          data directory (default "/home/noah/.bee")\n      --db-block-cache-capacity uint             size of block cache of the database in bytes (default 33554432)\n      --db-disable-seeks-compaction              disables db compactions triggered by seeks (default true)\n      --db-open-files-limit uint                 number of open files allowed by database (default 200)\n      --db-write-buffer-size uint                size of the database write buffer in bytes (default 33554432)\n      --full-node                                cause the node to start in full mode\n  -h, --help                                     help for start\n      --mainnet                                  triggers connect to main net bootnodes. (default true)\n      --nat-addr string                          NAT exposed address\n      --neighborhood-suggester string            suggester for target neighborhood (default "https://api.swarmscan.io/v1/network/neighborhoods/suggestion")\n      --network-id uint                          ID of the Swarm network (default 1)\n      --p2p-addr string                          P2P listen address (default ":1634")\n      --p2p-ws-enable                            enable P2P WebSocket transport\n      --password string                          password for decrypting keys\n      --password-file string                     path to a file that contains password for decrypting keys\n      --payment-early-percent int                percentage below the peers payment threshold when we initiate settlement (default 50)\n      --payment-threshold string                 threshold in BZZ where you expect to get paid from your peers (default "13500000")\n      --payment-tolerance-percent int            excess debt above payment threshold in percentages where you disconnect from your peer (default 25)\n      --postage-stamp-address string             postage stamp contract address\n      --postage-stamp-start-block uint           postage stamp contract start block number\n      --pprof-mutex                              enable pprof mutex profile\n      --pprof-profile                            enable pprof block profile\n      --price-oracle-address string              price oracle contract address\n      --redistribution-address string            redistribution contract address\n      --resolver-options strings                 ENS compatible API endpoint for a TLD and with contract address, can be repeated, format [tld:][contract-addr@]url\n      --resync                                   forces the node to resync postage contract data\n      --staking-address string                   staking contract address\n      --statestore-cache-capacity uint           lru memory caching capacity in number of statestore entries (default 100000)\n      --static-nodes strings                     protect nodes from getting kicked out on bootnode\n      --storage-incentives-enable                enable storage incentives feature (default true)\n      --swap-deployment-gas-price string         gas price in wei to use for deployment and funding\n      --swap-enable                              enable swap\n      --swap-endpoint string                     swap blockchain endpoint\n      --swap-factory-address string              swap factory addresses\n      --swap-initial-deposit string              initial deposit if deploying a new chequebook (default "0")\n      --target-neighborhood string               neighborhood to target in binary format (ex: 111111001) for mining the initial overlay\n      --token-encryption-key string              admin username to get the security token\n      --tracing-enable                           enable tracing\n      --tracing-endpoint string                  endpoint to send tracing data (default "127.0.0.1:6831")\n      --tracing-host string                      host to send tracing data\n      --tracing-port string                      port to send tracing data\n      --tracing-service-name string              service name identifier for tracing (default "bee")\n      --use-postage-snapshot                     bootstrap node using postage snapshot from the network\n      --verbosity string                         log verbosity level 0=silent, 1=error, 2=warn, 3=info, 4=debug, 5=trace (default "info")\n      --warmup-time duration                     time to warmup the node before some major protocols can be kicked off (default 5m0s)\n      --welcome-message string                   send a welcome message string during handshakes\n      --withdrawal-addresses-whitelist strings   withdrawal target addresses\n\nGlobal Flags:\n      --config string   config file (default is $HOME/.bee.yaml)  \n'})}),"\n",(0,a.jsx)(n.h3,{id:"environment-variables",children:"Environment variables"}),"\n",(0,a.jsx)(n.p,{children:"Bee config may also be passed using environment variables."}),"\n",(0,a.jsx)(n.p,{children:"Environment variables are set as variables in your operating system's\nsession or systemd configuration file. To set an environment variable,\ntype the following in your terminal session."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"export VARIABLE_NAME=variableValue\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Verify if it is correctly set by running ",(0,a.jsx)(n.code,{children:"echo $VARIABLE_NAME"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["All available configuration options are available as ",(0,a.jsx)(n.code,{children:"BEE"})," prefixed,\ncapitalised, and underscored environment variables, e.g. ",(0,a.jsx)(n.code,{children:"--api-addr"})," becomes ",(0,a.jsx)(n.code,{children:"BEE_API_ADDR"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"yaml-configuration-file",children:"YAML configuration file"}),"\n",(0,a.jsxs)(n.p,{children:["You can view the default contents of the ",(0,a.jsx)(n.code,{children:"bee.yaml"})," configuration file using the ",(0,a.jsx)(n.code,{children:"bee printconfig"})," command:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"bee printconfig\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'# allow to advertise private CIDRs to the public network\nallow-private-cidrs: false\n# HTTP API listen address\napi-addr: 127.0.0.1:1633\n# chain block time\nblock-time: "15"\n# rpc blockchain endpoint\nblockchain-rpc-endpoint: ""\n# initial nodes to connect to\nbootnode: []\n# cause the node to always accept incoming connections\nbootnode-mode: false\n# cache capacity in chunks, multiply by 4096 to get approximate capacity in bytes\ncache-capacity: "1000000"\n# enable forwarded content caching\ncache-retrieval: true\n# enable chequebook\nchequebook-enable: true\n# config file (default is $HOME/.bee.yaml)\nconfig: /root/.bee.yaml\n# origins with CORS headers enabled\ncors-allowed-origins: []\n# data directory\ndata-dir: /root/.bee\n# size of block cache of the database in bytes\ndb-block-cache-capacity: "33554432"\n# disables db compactions triggered by seeks\ndb-disable-seeks-compaction: true\n# number of open files allowed by database\ndb-open-files-limit: "200"\n# size of the database write buffer in bytes\ndb-write-buffer-size: "33554432"\n# cause the node to start in full mode\nfull-node: false\n# help for printconfig\nhelp: false\n# triggers connect to main net bootnodes.\nmainnet: true\n# NAT exposed address\nnat-addr: ""\n# suggester for target neighborhood\nneighborhood-suggester: https://api.swarmscan.io/v1/network/neighborhoods/suggestion\n# ID of the Swarm network\nnetwork-id: "1"\n# P2P listen address\np2p-addr: :1634\n# enable P2P WebSocket transport\np2p-ws-enable: false\n# password for decrypting keys\npassword: ""\n# path to a file that contains password for decrypting keys\npassword-file: ""\n# percentage below the peers payment threshold when we initiate settlement\npayment-early-percent: 50\n# threshold in BZZ where you expect to get paid from your peers\npayment-threshold: "13500000"\n# excess debt above payment threshold in percentages where you disconnect from your peer\npayment-tolerance-percent: 25\n# postage stamp contract address\npostage-stamp-address: ""\n# postage stamp contract start block number\npostage-stamp-start-block: "0"\n# enable pprof mutex profile\npprof-mutex: false\n# enable pprof block profile\npprof-profile: false\n# price oracle contract address\nprice-oracle-address: ""\n# redistribution contract address\nredistribution-address: ""\n# ENS compatible API endpoint for a TLD and with contract address, can be repeated, format [tld:][contract-addr@]url\nresolver-options: []\n# forces the node to resync postage contract data\nresync: false\n# staking contract address\nstaking-address: ""\n# lru memory caching capacity in number of statestore entries\nstatestore-cache-capacity: "100000"\n# protect nodes from getting kicked out on bootnode\nstatic-nodes: []\n# enable storage incentives feature\nstorage-incentives-enable: true\n# gas price in wei to use for deployment and funding\nswap-deployment-gas-price: ""\n# enable swap\nswap-enable: false\n# swap blockchain endpoint\nswap-endpoint: ""\n# swap factory addresses\nswap-factory-address: ""\n# initial deposit if deploying a new chequebook\nswap-initial-deposit: "0"\n# neighborhood to target in binary format (ex: 111111001) for mining the initial overlay\ntarget-neighborhood: ""\n# admin username to get the security token\ntoken-encryption-key: ""\n# enable tracing\ntracing-enable: false\n# endpoint to send tracing data\ntracing-endpoint: 127.0.0.1:6831\n# host to send tracing data\ntracing-host: ""\n# port to send tracing data\ntracing-port: ""\n# service name identifier for tracing\ntracing-service-name: bee\n# bootstrap node using postage snapshot from the network\nuse-postage-snapshot: false\n# log verbosity level 0=silent, 1=error, 2=warn, 3=info, 4=debug, 5=trace\nverbosity: info\n# time to warmup the node before some major protocols can be kicked off\nwarmup-time: 5m0s\n# send a welcome message string during handshakes\nwelcome-message: ""\n# withdrawal target addresses\nwithdrawal-addresses-whitelist: []\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Note that depending on whether Bee is started directly with the ",(0,a.jsx)(n.code,{children:"bee start"})," command or started as a service with ",(0,a.jsx)(n.code,{children:"systemctl"})," / ",(0,a.jsx)(n.code,{children:"brew services"}),", the default directory for the YAML configuration file (shown in the ",(0,a.jsx)(n.code,{children:"config"})," option above) ",(0,a.jsx)(n.a,{href:"/docs/bee/working-with-bee/configuration",children:"will be different"}),"."]})}),"\n",(0,a.jsx)(n.p,{children:"To change your node's configuration, simply edit the YAML file and restart Bee:"}),"\n",(0,a.jsxs)(i.A,{defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"MacOS arm64 (Apple Silicon)",value:"macos-arm64"},{label:"MacOS amd64 (Intel)",value:"macos-amd64"}],children:[(0,a.jsxs)(o.A,{value:"linux",children:[(0,a.jsx)(n.p,{children:"Open the config file for editing:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo vi /etc/bee/bee.yaml\n"})}),(0,a.jsx)(n.p,{children:"After saving your changes, restart your node:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo systemctl restart bee\n"})})]}),(0,a.jsxs)(o.A,{value:"macos-arm64",children:[(0,a.jsx)(n.p,{children:"Open the config file for editing:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo vi /opt/homebrew/etc/swarm-bee/bee.yaml\n"})}),(0,a.jsx)(n.p,{children:"After saving your changes, restart your node:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"brew services restart swarm-bee\n"})})]}),(0,a.jsxs)(o.A,{value:"macos-amd64",children:[(0,a.jsx)(n.p,{children:"Open the config file for editing:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo vi /usr/local/etc/swarm-bee/bee.yaml\n"})}),(0,a.jsx)(n.p,{children:"After saving your changes, restart your node:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"brew services restart swarm-bee\n"})})]})]}),"\n",(0,a.jsxs)(n.h2,{id:"manually-generating-a-config-file-for-bee-start",children:["Manually generating a config file for ",(0,a.jsx)(n.code,{children:"bee start"})]}),"\n",(0,a.jsxs)(n.p,{children:["No YAML file is generated during installation in the default config directory used when Bee is started with ",(0,a.jsx)(n.code,{children:"bee start"}),", so you must generate one if you wish to use a YAML file to specify your configuration options. To do this you can use the ",(0,a.jsx)(n.code,{children:"bee printconfig"})," command to print out a set of default options and save it to a new file in the default location:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"bee printconfig &> $HOME/.bee.yaml\n"})}),"\n",(0,a.jsx)(n.h2,{id:"restoring-default-config-files-for-bee-service",children:"Restoring default config files for Bee service"}),"\n",(0,a.jsxs)(n.p,{children:["You can find the default configurations for your system in the ",(0,a.jsx)(n.a,{href:"https://github.com/ethersphere/bee/tree/master/packaging",children:"packaging folder of the Bee repo"}),". If your configuration file is missing you can simply copy the contents of the file into a new ",(0,a.jsx)(n.code,{children:"bee.yaml"})," file in the default configuration directory shown in the ",(0,a.jsx)(n.code,{children:"bee.yaml"})," file for your system."]}),"\n",(0,a.jsx)(n.h2,{id:"sepolia-testnet-configuration",children:"Sepolia Testnet Configuration"}),"\n",(0,a.jsxs)(n.p,{children:["In order to operate a Bee node on the Sepolia testnet, update your configuration to use the options shown in the example below. Make sure that you replace the ",(0,a.jsx)(n.code,{children:"blockchain-rpc-endpoint"})," option value with your own valid Sepolia RPC endpoint. If you choose to use a 3rd party RPC provider like ",(0,a.jsx)(n.a,{href:"https://www.infura.io/",children:"Infura"}),", make sure to ",(0,a.jsx)(n.a,{href:"https://docs.infura.io/api/network-endpoints",children:"check in the docs"})," that the endpoint format is up to date, and also make sure that you have filled in your own API key which you can find from the ",(0,a.jsx)(n.a,{href:"https://app.infura.io",children:"Infura web app"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Also make sure to fund your node with Sepolia ETH rather than xDAI to pay for gas on the Sepolia testnet. There are many public faucets you can use to obtain Sepolia ETH, such as ",(0,a.jsx)(n.a,{href:"https://www.infura.io/faucet/sepolia",children:"this one from Infura"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["To get Sepolia BZZ (sBZZ) you can use ",(0,a.jsx)(n.a,{href:"https://app.uniswap.org/swap?outputCurrency=0x543dDb01Ba47acB11de34891cD86B675F04840db&inputCurrency=ETH",children:"this Uniswap market"}),", just make sure that you've switched to the Sepolia network in your browser wallet."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'data-dir: /home/username/bee/sepolia\nfull-node: true\nmainnet: false\npassword: password\nblockchain-rpc-endpoint: wss://sepolia.infura.io/ws/v3/<API-KEY>\nswap-enable: true\nverbosity: 5\nwelcome-message: "welcome-from-the-hive"\nwarmup-time: 30s\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Here ",(0,a.jsx)(n.code,{children:"bootnode"})," was changed to use the testnet bootnode, ",(0,a.jsx)(n.code,{children:"mainnet"})," has been set to ",(0,a.jsx)(n.code,{children:"false"}),", ",(0,a.jsx)(n.code,{children:"network-id"})," has been changed from the default Swarm network id of 1 to the Swarm testnet id of 10, and ",(0,a.jsx)(n.code,{children:"blockchain-rpc-endpoint"})," has been changed to use an RPC endpoint for the Sepolia testnet rather than Gnosis Chain."]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var a=t(34164);const r={tabItem:"tabItem_Ymn6"};var i=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>j});var a=t(96540),r=t(34164),i=t(23104),o=t(56347),s=t(205),l=t(57485),c=t(31682),d=t(89466);function u(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=h(e),[o,l]=(0,a.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const r=null!=(n=a.find((e=>e.default)))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,u]=f({queryString:t,groupId:r}),[g,b]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[r,i]=(0,d.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),m=(()=>{const e=null!=c?c:g;return p({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{m&&l(m)}),[m]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error("Can't select invalid tab value="+e);l(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var b=t(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(74848);function w(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=s[t].value;r!==a&&(c(n),o(r))},u=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var a;const n=l.indexOf(e.currentTarget)+1;t=null!=(a=l[n])?a:l[0];break}case"ArrowLeft":{var r;const n=l.indexOf(e.currentTarget)-1;t=null!=(r=l[n])?r:l[l.length-1];break}}null==(n=t)||n.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,r.A)("tabs__item",m.tabItem,null==i?void 0:i.className,{"tabs__item--active":a===n}),children:null!=t?t:n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function x(e){const n=g(e);return(0,y.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,y.jsx)(w,{...e,...n}),(0,y.jsx)(v,{...e,...n})]})}function j(e){const n=(0,b.A)();return(0,y.jsx)(x,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var a=t(96540);const r={},i=a.createContext(r);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);