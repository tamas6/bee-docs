"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[6728],{56336:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=t(17624),r=t(4552);const s={title:"Connectivity",id:"connectivity"},i=void 0,a={id:"bee/installation/connectivity",title:"Connectivity",description:"To fully connect to the swarm, your Bee node needs to be able to both",source:"@site/docs/bee/installation/connectivity.md",sourceDirName:"bee/installation",slug:"/bee/installation/connectivity",permalink:"/docs/bee/installation/connectivity",draft:!1,unlisted:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/bee/installation/connectivity.md",tags:[],version:"current",frontMatter:{title:"Connectivity",id:"connectivity"},sidebar:"bee",previous:{title:"Docker",permalink:"/docs/bee/installation/docker"},next:{title:"Fund Your Node",permalink:"/docs/bee/installation/fund-your-node"}},c={},l=[{value:"Networking Basics",id:"networking-basics",level:3},{value:"Your IP Address",id:"your-ip-address",level:2},{value:"Datacenters and Computers Connected Directly to the Internet",id:"datacenters-and-computers-connected-directly-to-the-internet",level:3},{value:"Home, Commercial and Business Networks and Other Networks Behind NAT",id:"home-commercial-and-business-networks-and-other-networks-behind-nat",level:3},{value:"Navigating Through the NAT",id:"navigating-through-the-nat",level:4},{value:"Automatic: Universal Plug and Play (UPnP)",id:"automatic-universal-plug-and-play-upnp",level:5},{value:"Manual: Configure Your Router and Bee",id:"manual-configure-your-router-and-bee",level:5},{value:"Debugging Connectivity",id:"debugging-connectivity",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"To fully connect to the swarm, your Bee node needs to be able to both\nsend and receive messages from the outside world. Normally, your\nrouter will not allow other IP's on the Internet to connect, unless\nyou have initiated the connection. Bees welcome newcomers in the\nswarm, as long as they play by the rules! If a node misbehaves, we\nwill simply add it to a list of blocked nodes and refuse future\nconnections from them."}),"\n",(0,o.jsxs)(n.p,{children:["Here at Swarm, every Bee counts! To make sure all Bees can join the\nswarm, below you will find a detailed guide to navigating your way\nthrough your network and making out into the wild so you can buzz\naround fellow bees and maximise your chances of earning xBZZ. If\nyou still have problems, please join us in our ",(0,o.jsx)(n.a,{href:"https://discord.gg/wdghaQsGq5",children:"Discord\nserver"})," and we'll help you find the\nway! \ud83d\udc1d \ud83d\udc1d \ud83d\udc1d \ud83d\udc1d \ud83d\udc1d"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["To ensure your Bee has the best chance of participating in the swarm,\nyou must ensure your Bee is able to handle ",(0,o.jsxs)(n.strong,{children:["both incoming and\noutgoing connections from the global Internet to its p2p port\n(",(0,o.jsx)(n.code,{children:"1634"})," by default)"]}),". See below for a detailed guide on how to make sure\nthis is the case, or for the 1337: check your\n",(0,o.jsx)(n.code,{children:"http://localhost:1633/addresses"})," to see which public IP and port\nlibp2p is advertising and verify its connectivity to the rest of the\nInternet! You may need to alter your Bee nodes ",(0,o.jsx)(n.code,{children:"nat-addr"}),"\nconfiguration. \ud83e\udd13"]})}),"\n",(0,o.jsx)(n.h3,{id:"networking-basics",children:"Networking Basics"}),"\n",(0,o.jsxs)(n.p,{children:["In a network, each computer is assigned an IP address. Each IP address\nis then subdivided into thousands of ",(0,o.jsx)(n.em,{children:"sockets"})," or ",(0,o.jsx)(n.em,{children:"ports"}),", each of\nwhich has an incoming and outgoing component."]}),"\n",(0,o.jsx)(n.p,{children:"In a completely trusted network of computers, any connections to or\nfrom any of these ports are allowed. However, to protect ourselves\nfrom nefarious actors when we join the wider Internet, it is sometimes\nimportant to filter this traffic so that some of these ports are off\nlimits to the public."}),"\n",(0,o.jsxs)(n.p,{children:["In order to allow messages to our p2p port from other Bee nodes that\nwe have previously not connected, we must ensure that our network is\nset up to receive incoming connections (on port ",(0,o.jsx)(n.code,{children:"1634"})," by default)."]}),"\n",(0,o.jsx)(n.admonition,{type:"danger",children:(0,o.jsxs)(n.p,{children:["There are also some ports which you should never expose to the outside Internet. Make sure that your ",(0,o.jsx)(n.code,{children:"api-addr"})," (default ",(0,o.jsx)(n.code,{children:"1633"}),") is never exposed to the internet. It is good practice to employ one or more firewalls that block traffic on every port except for those you are expecting to be open. If you do not use a firewall, make sure to change the default ",(0,o.jsx)(n.code,{children:"api-addr"})," from ",(0,o.jsx)(n.code,{children:"1633"})," to ",(0,o.jsx)(n.code,{children:"127.0.0.1:1633"})," so that it is not publicly exposed."]})}),"\n",(0,o.jsx)(n.h2,{id:"your-ip-address",children:"Your IP Address"}),"\n",(0,o.jsxs)(n.p,{children:["When you connect to the Internet, you are assigned a unique number\ncalled an IP Address. IP stands for ",(0,o.jsx)(n.strong,{children:"Internet Protocol"}),". The most\nprevalent IP version used is ",(0,o.jsx)(n.em,{children:"still"})," the archaic\n",(0,o.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/IPv4",children:"IPv4"})," which was invented way back\nin 1981. IPv6 is available but not well used. Due to the mitigation of\nthe deficiencies inherent in the IPv4 standard, we may encounter some\ncomplications."]}),"\n",(0,o.jsx)(n.h3,{id:"datacenters-and-computers-connected-directly-to-the-internet",children:"Datacenters and Computers Connected Directly to the Internet"}),"\n",(0,o.jsx)(n.p,{children:"If you are renting space in a datacenter, the chances are that your computer will be connected directly to the real Internet. This means that the IP of your networking interface will be directly set to be the same as your public IP."}),"\n",(0,o.jsx)(n.p,{children:"You can investigate this by running:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"ifconfig\n"})}),"\n",(0,o.jsx)(n.p,{children:"or"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"ip address\n"})}),"\n",(0,o.jsx)(n.p,{children:"Your output should contain something like:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet 178.128.196.191  netmask 255.255.240.0  broadcast 178.128.207.255\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Here we can see our computer's ",(0,o.jsx)(n.strong,{children:"public IP address"}),"\n",(0,o.jsx)(n.code,{children:"178.128.196.191"}),". This is the address that is used by other computers\nwe connect to over the Internet. We can verify this using a third\nparty service such as ",(0,o.jsx)(n.em,{children:"icanhazip"})," or ",(0,o.jsx)(n.em,{children:"ifconfig"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"curl icanhazip.com --ipv4\n"})}),"\n",(0,o.jsx)(n.p,{children:"or"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"curl ifconfig.co --ipv4\n"})}),"\n",(0,o.jsx)(n.p,{children:"The response something contain something like:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"178.128.196.191\n"})}),"\n",(0,o.jsx)(n.p,{children:"With Bee running, try to connect to your Bee's p2p port using the public IP adddress from another computer:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"nc -zv 178.128.196.191 1634\n"})}),"\n",(0,o.jsx)(n.p,{children:"If you have success, congratulations!"}),"\n",(0,o.jsxs)(n.p,{children:["If this still doesn't work for you, see the last part of ",(0,o.jsx)(n.em,{children:"Manual: Configure Your Router and Bee"})," section below, as you may need to configure your ",(0,o.jsx)(n.code,{children:"nat-addr"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"home-commercial-and-business-networks-and-other-networks-behind-nat",children:"Home, Commercial and Business Networks and Other Networks Behind NAT"}),"\n",(0,o.jsxs)(n.p,{children:["To address the\n",(0,o.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/IPv4_address_exhaustion",children:"scarcity of IP numbers"}),",\nNetwork Address Translation (NAT) was implemented. This approach\ncreates a smaller, private network which many devices connect to in\norder to share a public IP address. Traffic destined for the Internet\nat large is then mediated by another specialised computer. In the\ncases of the a home network, this computer is the familiar home\nrouter, normally also used to provide a WiFi network."]}),"\n",(0,o.jsx)(n.p,{children:"If we run the above commands to find the computer's IP in this scenario, we will see a different output."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"ip address\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"en0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500\n\t...\n\tinet 192.168.0.10 netmask 0xffffff00 broadcast 192.168.0.255\n\t...\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Here we can see that, instead of the public IP address, we can see\nthat our computer's IP address is ",(0,o.jsx)(n.code,{children:"192.168.0.10"}),". This is part of the\nIP address space that the Internet Engineering Task Force has\ndesignated for\n",(0,o.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Private_network",children:"private networks"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["As this IP won't work on the global Internet, our router remembers\nthat our computer has been assigned this IP. It then uses ",(0,o.jsx)(n.em,{children:"Network\nAddress Translation"})," (NAT) to modify all requests from our computer to\nanother computer somewhere in the Internet. As the requests pass\nthrough the router it changes our local IP to the public IP of the\nrouter, and vice versa when the responses are sent back, from the\npublic IP to the local one."]}),"\n",(0,o.jsx)(n.h4,{id:"navigating-through-the-nat",children:"Navigating Through the NAT"}),"\n",(0,o.jsx)(n.p,{children:"The presence of NAT presents two problems for p2p networking."}),"\n",(0,o.jsx)(n.p,{children:"The first is that it can be difficult for programs running on our computer to know our real public IP as it is not explicitly known by our computer's networking interface, which is configured with a private network IP. This is a relatively easy problem to solve as we can simply discover our public IP and then specify it in Bee's configuration, or indeed determine it using other means."}),"\n",(0,o.jsxs)(n.p,{children:["The second issue is that our router has only 65535 ports to expose to\nthe public network, however, ",(0,o.jsx)(n.em,{children:"each device on your private network"})," is\ncapable of exposing 65535 ",(0,o.jsx)(n.em,{children:"each"}),". To the global Internet, it appears\nthat there is only one set of ports to connect to, whereas, in actual\nfact, there is a full set of ports for each of the devices which are\nconnected to the private network. To solve this second problem,\nrouters commonly employ an approach known as ",(0,o.jsx)(n.em,{children:"port forwarding"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Bee's solution to these problems come in two flavours, automatic and manual."}),"\n",(0,o.jsx)(n.h5,{id:"automatic-universal-plug-and-play-upnp",children:"Automatic: Universal Plug and Play (UPnP)"}),"\n",(0,o.jsx)(n.p,{children:"UPnP is a protocol designed to simplify the administration of NAT and\nport forwarding for the end user by providing an API from which\nsoftware running within the network can use to ask the router for the\npublic IP and to request for ports to be forwarded to the private IP\nof the computer running the software."}),"\n",(0,o.jsx)(n.admonition,{title:"UPnP is a security risk!",type:"danger",children:(0,o.jsxs)(n.p,{children:["UPnP is a security risk as it allows any host or process inside\n(sometimes also outside) your network to open arbitrary ports which\nmay be used to transfer malicious traffic, for example a\n",(0,o.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Remote_desktop_software#RAT",children:"RAT"}),". UPnP\ncan also be used to determine your IP, and in the case of using ToR or\na VPN, your ",(0,o.jsx)(n.em,{children:"real"})," public IP. We urge you to disable UPnP on your\nrouter and use manual port forwarding as described below."]})}),"\n",(0,o.jsx)(n.p,{children:"Bee will use UPnP to determine your public IP, which is required for various internal processes."}),"\n",(0,o.jsxs)(n.p,{children:["In addition to this, a request will be sent to your router to ask it\nto forward a random one of its ports, which are exposed directly to\nthe Internet, to the Bee p2p port (default ",(0,o.jsx)(n.code,{children:"1634"}),") which your computer\nis exposing only to the private network. Doing this creates a tunnel\nthrough which other Bee's may connect to your computer safely."]}),"\n",(0,o.jsx)(n.p,{children:"If you start your Bee node in a private network with UPnP available, the output of the addresses endpoint of your API will look something like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'[\n  "/ip4/127.0.0.1/tcp/1634/p2p/16Uiu2HAm5zcoBFWmqjDTwGy9RXepBFF8idy6Pr312obMwwxdJSUP",\n  "/ip4/192.168.0.10/tcp/1634/p2p/16Uiu2HAm5zcoBFWmqjDTwGy9RXepBFF8idy6Pr312obMwwxdJSUP",\n  "/ip6/::1/tcp/1634/p2p/16Uiu2HAm5zcoBFWmqjDTwGy9RXepBFF8idy6Pr312obMwwxdJSUP",\n  "/ip4/86.98.94.9/tcp/20529/p2p/16Uiu2HAm5zcoBFWmqjDTwGy9RXepBFF8idy6Pr312obMwwxdJSUP"\n]\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Note that the port in the external\n",(0,o.jsx)(n.a,{href:"https://docs.libp2p.io/concepts/addressing/",children:"multiaddress"})," is the\nrouter's randomly selected ",(0,o.jsx)(n.code,{children:"20529"})," which is forwarded by the router to\n",(0,o.jsx)(n.code,{children:"192.168.0.10:1634"}),". These addresses in this multiaddress are also\nknown as the underlay addresses."]}),"\n",(0,o.jsx)(n.h5,{id:"manual-configure-your-router-and-bee",children:"Manual: Configure Your Router and Bee"}),"\n",(0,o.jsxs)(n.p,{children:["Inspecting the underlay addresses in the output of the addresses\nendpoint of our API, we can see addresses only for ",(0,o.jsx)(n.em,{children:"localhost"}),"\n",(0,o.jsx)(n.code,{children:"127.0.0.1"})," and our ",(0,o.jsx)(n.em,{children:"private network IP"})," ",(0,o.jsx)(n.code,{children:"192.168.0.10"}),". Bee must be\nhaving trouble navigating our NAT."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'[\n  "/ip4/127.0.0.1/tcp/1634/p2p/16Uiu2HAm8Hs91MzWuXfUyKrYaj3h8K8gzvRqzSK5gP9TNCwypkJB",\n  "/ip4/192.168.0.10/tcp/1634/p2p/16Uiu2HAm8Hs91MzWuXfUyKrYaj3h8K8gzvRqzSK5gP9TNCwypkJB",\n  "/ip6/::1/tcp/1634/p2p/16Uiu2HAm8Hs91MzWuXfUyKrYaj3h8K8gzvRqzSK5gP9TNCwypkJB"\n]\n'})}),"\n",(0,o.jsx)(n.p,{children:"To help fix the first problem, let's determine our public IP address."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"curl icanhazip.com\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"86.98.94.9\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now we can simply supply this IP in our Bee configuration on startup."}),"\n",(0,o.jsx)(n.p,{children:"Solving our second problem is a little more difficult as we will need to interact with our router's firmware, which is a little cranky."}),"\n",(0,o.jsxs)(n.p,{children:["Each router is different, but the concept is usually the same. Log in to your router by navigating your browser to your router's configuration user interface, usually at ",(0,o.jsx)(n.a,{href:"http://192.168.0.1",children:"http://192.168.0.1"}),". You will need to log in with a password. Sadly, passwords are often left to be the defaults, which can be found readily on the Internet."]}),"\n",(0,o.jsxs)(n.p,{children:["Once logged in, find the interface to set up port forwarding. The ",(0,o.jsx)(n.a,{href:"https://portforward.com/router.htm",children:"Port Forward"})," website provides some good information, or you may refer to your router manual or provider."]}),"\n",(0,o.jsxs)(n.p,{children:["Here, we will then set up a rule that forwards port ",(0,o.jsx)(n.code,{children:"1634"})," of our\nprivate IP address ",(0,o.jsx)(n.code,{children:"192.168.0.10"})," to the same port ",(0,o.jsx)(n.code,{children:"1634"})," of our\npublic IP."]}),"\n",(0,o.jsxs)(n.p,{children:["Now, when requests arrive at our public address ",(0,o.jsx)(n.code,{children:"86.98.94.9:1634"})," they\nare modified by our router and forwarded to our private IP and port\n",(0,o.jsx)(n.code,{children:"192.168.0.10:1634"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Sometimes this can be a little tricky, so let's verify we are able to make a TCP connection using ",(0,o.jsx)(n.a,{href:"https://nmap.org/ncat/",children:"netcat"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["First, with Bee ",(0,o.jsx)(n.strong,{children:"not"})," running, let's set up a simple TCP listener using Netcat on the same machine we would like to run Bee on."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"nc -l 0.0.0.0 1634\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"nc -zv 86.98.94.9 1634\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Connection to 86.98.94.9 port 1834 [tcp/*] succeeded!\n"})}),"\n",(0,o.jsx)(n.p,{children:"Success! \u2728"}),"\n",(0,o.jsx)(n.p,{children:"If this didn't work for you, check out our Debugging Connectivity guide below."}),"\n",(0,o.jsxs)(n.p,{children:["If it did, let's start our Bee node with the ",(0,o.jsx)(n.code,{children:"--nat-addr"})," configured."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"bee start --nat-addr 86.98.94.9:1634\n"})}),"\n",(0,o.jsx)(n.p,{children:"Checking our addresses endpoint again, we can now see that Bee has been able to successfully assign a public address! Congratulations, your Bee is now connected to the outside world!"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'[\n  "/ip4/127.0.0.1/tcp/1634/p2p/16Uiu2HAm8Hs91MzWuXfUyKrYaj3h8K8gzvRqzSK5gP9TNCwypkJB",\n  "/ip4/192.168.0.10/tcp/1634/p2p/16Uiu2HAm8Hs91MzWuXfUyKrYaj3h8K8gzvRqzSK5gP9TNCwypkJB",\n  "/ip6/::1/tcp/1634/p2p/16Uiu2HAm8Hs91MzWuXfUyKrYaj3h8K8gzvRqzSK5gP9TNCwypkJB",\n  "/ip4/86.98.94.9/tcp/1634/p2p/16Uiu2HAm8Hs91MzWuXfUyKrYaj3h8K8gzvRqzSK5gP9TNCwypkJB"\n]\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"If you are regularly connecting and disconnecting to a network, you\nmay also want to use your router's firmware to configure the router to\nreserve and only assign the same local network IP from its DHCP pool\nto your computer's MAC address. This will ensure that your Bee\nseamlessly connects when you rejoin the network!"})}),"\n",(0,o.jsx)(n.h3,{id:"debugging-connectivity",children:"Debugging Connectivity"}),"\n",(0,o.jsx)(n.p,{children:"The above guide navigates your NAT, but there are still a few hurdles to overcome. To make sure there is a clear path from your computer to the outside world, let's follow our Bee's journey from the inside out."}),"\n",(0,o.jsx)(n.p,{children:"Let's set up a netcat listener on all interfaces on the computer we'd\nlike to run Bee on as we have above."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"nc -l 0.0.0.0 1634\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now, let's verify we're able to connect to netcat by checking the connection from our local machine."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"nc -zv 127.0.0.1 1634\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Connection to 127.0.0.1 port 1634 [tcp/*] succeeded!\n"})}),"\n",(0,o.jsx)(n.p,{children:"This should be a no brainer, the connection between localhost in not normally mediated."}),"\n",(0,o.jsxs)(n.p,{children:["If there is a problem here, the problem is with some other software running on your operating system or your operating system itself. Try a different port, such as ",(0,o.jsx)(n.code,{children:"1734"})," and turning off any unneccesary software. If this doesn't work, you may need to try a different operating system environment. Please get in touch and we'll try to help!"]}),"\n",(0,o.jsx)(n.p,{children:"If we were successful, let's move on to the next stage."}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"If you are not able to get access to some firewall settings, or\notherwise debug incoming connectivity, don't worry! All is not\nlost. Bee can function just fine with just outgoing\nconnections. However, if you can, it is worth the effort to allow\nincoming connections, as the whole swarm will benefit from the\nincreased connectivity."})}),"\n",(0,o.jsx)(n.p,{children:"Let's find out what our IP looks like to the Internet."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"curl icanhazip.com\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"86.98.94.9\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now try to connect to your port using the global IP."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"nc -zv 86.98.94.9 1634\n"})}),"\n",(0,o.jsx)(n.p,{children:"If this is successful, our Bee node's path is clear!"}),"\n",(0,o.jsx)(n.p,{children:"If not, we can try a few things to make sure there are no barriers stopping us from getting through."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Check your computer's firewall."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Sometimes your computer is configured to prevent connections. If you\nare on a private network mediated by NAT, you can check if this is\nthe problem by trying to connect from another device on your network\nusing the local IP ",(0,o.jsx)(n.code,{children:"nc -zv 192.168.0.10 1634"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Ubuntu uses ",(0,o.jsx)(n.a,{href:"https://help.ubuntu.com/community/UFW",children:"UFW"}),", MacOS can\nbe configured using the ",(0,o.jsx)(n.em,{children:"Firewall"})," tab in the ",(0,o.jsx)(n.em,{children:"Security & Privacy"}),"\nsection of ",(0,o.jsx)(n.em,{children:"System Preferences"}),". Windows uses\n",(0,o.jsx)(n.a,{href:"https://support.microsoft.com/en-us/help/4028544/windows-10-turn-microsoft-defender-firewall-on-or-off",children:"Defender Firewall"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["For each of these firewalls, set a special rule to allow UDP and TCP\ntraffic to pass through on port ",(0,o.jsx)(n.code,{children:"1634"}),". You may want to limit this\ntraffic to the Bee application only."]}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Check your ingress' firewall."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"For a datacenter hired server, this configuration will often take\nplace in somewhere in the web user interface. Refer to your server\nhosting provider's documentation to work out how to open ports to\nthe open Internet. Ensure that both TCP and UDP traffic are allowed."}),"\n",(0,o.jsx)(n.p,{children:"Similarly, if you are connecting from within a private network, you\nmay find that the port is blocked by the router. Each router is\ndifferent, so consult your router's firware documentation to make\nsure there are no firewalls in place blocking traffic on your Bee's\ndesignated p2p port."}),"\n",(0,o.jsxs)(n.p,{children:["You may check this using netcat by trying to connect using your\ncomputer's public IP, as above ",(0,o.jsx)(n.code,{children:"nc -zv 86.98.94.9 1634"}),"."]}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"Docker"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Docker adds another level of complexity."}),"\n",(0,o.jsxs)(n.p,{children:["To debug docker connectivity issues, we may use netcat as above to\ncheck port connections are working as expected. Double check that\nyou are exposing the right ports to your local network, either by\nusing the command line flags or in your docker-compose.yaml. You\nshould be able to successfully check the connection locally using\neg. ",(0,o.jsx)(n.code,{children:"nc -zv localhost 1634"})," then follow instructions above to make\nsure your local network has the correct ports exposed to the\nInternet."]}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"Something else entirely?"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Networking is a complex topic, but it keeps us all together. If you\nstill can't connect to your Bee, get in touch via ",(0,o.jsx)(n.a,{href:"http://beehive.ethswarm.org/",children:"The\nBeehive"})," and we'll do our best to get\nyou connected. In the swarm, no Bee is left behind."]})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>i});var o=t(11504);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);