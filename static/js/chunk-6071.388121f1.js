(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6071"],{"3Ci3":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MAX_UINT256=e.ZERO_BYTES32=e.ZERO_ADDRESS=void 0;var a=n("W6Pm");e.ZERO_ADDRESS="0x0000000000000000000000000000000000000000",e.ZERO_BYTES32="0x0000000000000000000000000000000000000000000000000000000000000000",e.MAX_UINT256=new a.BN("2").pow(new a.BN("256")).sub(new a.BN("1"))},Ddmz:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=e.supportTld=["cfx","bnb","defi","ht"];e.default={supportTld:a}},DlDH:function(t,e,n){"use strict";var a=n("lxq4");n.n(a).a},Iawr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Notification=void 0;var a=i(n("iCc5")),s=i(n("V7oC"));function i(t){return t&&t.__esModule?t:{default:t}}var r=e.Notification=function(){function t(){(0,a.default)(this,t)}return(0,s.default)(t,null,[{key:"notify",value:function(t,e,n,a,s){t.$notify({title:e,message:n,type:a,duration:s})}},{key:"info",value:function(t,e,n,a){t.$notify.info({title:e,message:n,duration:a})}},{key:"success",value:function(t,e,n,a){t.$notify({title:e,message:n,type:"success",duration:a})}},{key:"error",value:function(t,e,n,a){t.$notify.error({title:e,message:n,duration:a})}}]),t}();e.default=r},Jml6:function(t,e,n){"use strict";n.r(e);var a=n("TaJd"),s=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e.default=s.a},KCoV:function(t){t.exports=[{inputs:[{internalType:"address",name:"factory",type:"address"},{internalType:"uint256",name:"totalSupply",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{constant:!0,inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}]},OtWP:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ConfluxBuy=void 0;var a=o(n("14Xm")),s=o(n("D3Ub")),i=o(n("iCc5")),r=o(n("V7oC"));n("kB5k");function o(t){return t&&t.__esModule?t:{default:t}}var u=n("ewEw"),c=n("jzF0").Conflux,l=n("V7M8"),p=e.ConfluxBuy=function(){function t(e,n){(0,i.default)(this,t),this.conflux=window.confluxJS,this.confluxReader=new c({url:u[e][n].provider,defaultGasPrice:100,defaultGas:1e7}),this.contract=this.conflux.Contract({abi:l,address:u[e][n].buyMinter})}var e;return(0,r.default)(t,[{key:"buy",value:(e=(0,s.default)(a.default.mark((function t(e){return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contract.buy(e).sendTransaction({from:this.conflux.defaultAccount,gas:1e6}).confirmed();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})}]),t}();e.default=p},TaJd:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=b(n("14Xm")),s=b(n("D3Ub")),i=n("Iawr"),r=n("3Ci3"),o=n("kB5k"),u=b(n("0dc3")),c=b(n("WEEN")),l=b(n("mG4U")),p=n("Ddmz"),d=b(n("YgiN")),f=b(n("rfZM")),h=b(n("OtWP")),y=b(n("JpVX")),v=b(n("y4m1")),m=b(n("o3DP"));b(n("+zsH"));function b(t){return t&&t.__esModule?t:{default:t}}var g,w,x,T,_,k,C,P=n("ewEw");e.default={components:{collapse:c.default},data:function(){return{domains:[],parseDomain:[],isShoudMoreLong:!1,errorTLD:!1,cns:null,cusdt:null,cbuy:null,cusdtBalance:0,busdtBalance:0,isActive:!1,inputPrice:"",isApproved:!1,isApproving:!1,isPaying:!1,isSuccessPayed:!1,confluxUsdtInstance:null,confluxBuyInstance:null,web3BuyInstance:null,web3UsdtInstance:null}},computed:{web3Account:function(){return this.$store.state.web3.account},isConflux:function(){return this.$store.state.web3.walletType==u.default.CONFLUXPORTAL},chainType:function(){return this.$store.state.web3.chainType},chainId:function(){return this.$store.state.web3.chainId},inputPrice2:{get:function(){return this.inputPrice},set:function(t){}},chainChanged:function(){return this.$store.state.web3.chainType}},mounted:(C=(0,s.default)(a.default.mark((function t(){var e;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this,this.$nextTick((function(){e.init(),e.searchDomain()}));case 2:case"end":return t.stop()}}),t,this)}))),function(){return C.apply(this,arguments)}),created:function(){this.getEventData()},watch:{inputPrice2:function(){this.init()},chainChanged:function(){console.log("chain changed"),this.$store.dispatch("updateCFXDomainPage",0),this.$store.dispatch("updateBNBDomainPage",0),this.$nextTick((function(){this.init(),this.searchDomain()}))}},methods:{init:(k=(0,s.default)(a.default.mark((function t(){var e;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.isConflux){t.next=8;break}return this.confluxBuyInstance=new h.default(this.chainType,this.chainId),this.confluxUsdtInstance=new f.default(this.chainType,this.chainId),t.next=5,this.confluxUsdtInstance.balanceOf(this.web3Account);case 5:this.cusdtBalance=t.sent,t.next=14;break;case 8:return this.web3BuyInstance=new v.default(this.web3Account,this.chainType,this.chainId),this.web3UsdtInstance=new m.default(this.web3Account,this.chainType,this.chainId),t.next=12,this.web3UsdtInstance.balanceOf(this.web3Account);case 12:e=t.sent,this.busdtBalance=e/Math.pow(10,18);case 14:this.getApprovedUSDT();case 15:case"end":return t.stop()}}),t,this)}))),function(){return k.apply(this,arguments)}),buy:(_=(0,s.default)(a.default.mark((function t(){var e,n,r,u,c=this;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.parseDomain[0].split("."),n=e[0],r=new o.BigNumber(this.inputPrice)*Math.pow(10,18),console.log(n),console.log(r),this.isPaying=!0,i.Notification.info(this,this.$t("search.pay"),this.$t("notify.sureWallet"),5e3),!this.isConflux){t.next=26;break}return t.prev=8,t.next=11,this.confluxBuyInstance.buy(n);case 11:this.$store.dispatch("updateCFXDomainPage",0),i.Notification.success(this,this.$t("notify.success"),this.$t("search.buySuccess"),3e3),this.isPaying=!1,this.isSuccessPayed=!0,this.init(),t.next=24;break;case 18:return t.prev=18,t.t0=t.catch(8),console.log(t.t0.code),4001==t.t0.code?i.Notification.error(this,this.$t("app.error"),this.$t("notify.userDenied"),5e3):i.Notification.error(this,this.$t("app.error"),this.$t("notify.payError"),5e3),this.isPaying=!1,t.abrupt("return");case 24:t.next=29;break;case 26:console.log(this.isPaying),u=this,this.web3BuyInstance.buy(n,(function(t,e){})).then(function(){var t=(0,s.default)(a.default.mark((function t(e){return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i.Notification.success(u,u.$t("notify.success"),u.$t("search.buySuccess"),3e3),c.$store.dispatch("updateBNBDomainPage",0),c.isPaying=!1,c.isSuccessPayed=!0,c.init();case 5:case"end":return t.stop()}}),t,c)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){4001==t.code?i.Notification.error(c,c.$t("app.error"),c.$t("notify.userDenied"),5e3):i.Notification.error(c,c.$t("app.error"),c.$t("notify.payError"),5e3),c.isPaying=!1}));case 29:case"end":return t.stop()}}),t,this,[[8,18]])}))),function(){return _.apply(this,arguments)}),approve:(T=(0,s.default)(a.default.mark((function t(){var e,n=this;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=this.web3Account){t.next=3;break}return i.Notification.error(this,this.$t("app.error"),this.$t("app.errorNoConnect"),5e3),t.abrupt("return");case 3:if(i.Notification.info(this,this.$t("search.approve"),this.$t("notify.sureWallet"),5e3),this.isApproving=!0,!this.isConflux){t.next=20;break}return t.prev=6,t.next=9,this.confluxUsdtInstance.approve(P[this.chainType][this.chainId].buyMinter,r.MAX_UINT256);case 9:i.Notification.success(this,this.$t("notify.success"),this.$t("notify.approveSuccess"),5e3),this.getApprovedUSDT(),t.next=18;break;case 13:return t.prev=13,t.t0=t.catch(6),4001==t.t0.code?i.Notification.error(this,this.$t("app.error"),this.$t("notify.userDenied"),5e3):i.Notification.error(this,this.$t("app.error"),this.$t("notify.approveError"),5e3),this.isApproving=!1,t.abrupt("return");case 18:t.next=22;break;case 20:e=this,this.web3UsdtInstance.approve(P[this.chainType][this.chainId].buyMinter,r.MAX_UINT256,(function(t,e){})).then(function(){var t=(0,s.default)(a.default.mark((function t(s){return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i.Notification.success(e,e.$t("notify.success"),e.$t("notify.approveSuccess"),5e3),e.getApprovedUSDT();case 2:case"end":return t.stop()}}),t,n)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){4001==t.code?i.Notification.error(e,e.$t("app.error"),e.$t("notify.userDenied"),5e3):i.Notification.error(e,e.$t("app.error"),e.$t("notify.approveError"),5e3),n.isApproving=!1}));case 22:case"end":return t.stop()}}),t,this,[[6,13]])}))),function(){return T.apply(this,arguments)}),getApprovedUSDT:(x=(0,s.default)(a.default.mark((function t(){var e,n;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=this.web3Account){t.next=2;break}return t.abrupt("return");case 2:if(!this.isConflux){t.next=10;break}return t.next=5,this.confluxUsdtInstance.allowance(this.web3Account,P[this.chainType][this.chainId].buyMinter);case 5:e=t.sent,console.log(new o.BigNumber(e/Math.pow(10,18)).toString()),e>=this.inputPrice*Math.pow(10,18)?this.isApproved=!0:this.isApproved=!1,t.next=15;break;case 10:return t.next=12,this.web3UsdtInstance.allowance(this.web3Account,P[this.chainType][this.chainId].buyMinter);case 12:n=t.sent,console.log(n/1),n>=this.inputPrice*Math.pow(10,18)?this.isApproved=!0:this.isApproved=!1;case 15:case"end":return t.stop()}}),t,this)}))),function(){return x.apply(this,arguments)}),toogle:(w=(0,s.default)(a.default.mark((function t(e){return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.inputPrice=e.toFixed(2),this.isActive=!this.isActive,this.isActive&&(this.isApproving=!1,this.isPaying=!1);case 3:case"end":return t.stop()}}),t,this)}))),function(t){return w.apply(this,arguments)}),searchDomain:function(){""!=this.$route.query.name&&(this.domain=this.$route.query.name,this.$store.dispatch("SearchDomain",this.domain),null!=this.domain&&this.handleTimeOut())},getEventData:function(){var t=this;l.default.$on("searchEventFromSearchBar",(function(e){var n=e;t.domain=n,t.$router.push({path:"/search",query:{name:n}}),t.parseDomainFun(n)}))},parseDomainFun:function(t){this.isSuccessPayed=!1;var e=t.replace(/[^a-z0-9.]/g,"");this.isActive=!1;for(var n=e.length,a=0,s=0;s<n;s++)"."==e.charAt(s)&&(a+=1);if(0==a){var i=new Array;for(var r in p.supportTld)i.push(e+"."+p.supportTld[r]);this.parseDomain=i,this.errorTLD=!1}else{if(1!=a&&2!=a)return this.errorTLD=!0,void console.log("Error TLD");var o=e.split("."),u=o.slice(-1)[0];if(u.length>0&&-1==p.supportTld.indexOf(u))return console.log("Error TLD"),void(this.errorTLD=!0);this.errorTLD=!1;i=new Array;for(var r in p.supportTld)1==a?i.push(o.slice(0,1)[0]+"."+p.supportTld[r]):2==a&&i.push(o.slice(0,1)[0]+"."+o.slice(1,2)[0]+"."+p.supportTld[r]);this.parseDomain=i}this.getDomainInfo(this.parseDomain)},handleTimeOut:function(){var t=this;setTimeout((function(){t.parseDomainFun(t.domain)}),500)},getDomainInfo:(g=(0,s.default)(a.default.mark((function t(e){var n,s,i,r,o,u,c;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.openLoading(),n=new d.default(this.chainType,this.chainId),s=new y.default(this.web3Account,this.chainType,this.chainId),i=[],r=0;case 5:if(!(r<this.parseDomain.length)){t.next=86;break}if(o={},!this.isConflux){t.next=26;break}if(".cfx"!=e[r].substr(-4)){t.next=24;break}return t.next=11,n.exists(e[r]);case 11:u=t.sent,o.isExist=u,o.resolver="",o.tokenURI=e[r],o.owner="owner",o.isPremium=e[r].split(".")[0].length<=5,this.isShoudMoreLong=e[r].split(".")[0].length<5,c=this.price(e[r]),o.price=c,i.push(o);case 24:t.next=83;break;case 26:if(".bnb"!=e[r].substr(-4)||"BNB"!=this.chainType){t.next=45;break}return t.next=29,s.exists(e[r]);case 29:return u=t.sent,o.isExist=u,o.resolver="",o.tokenURI=e[r],o.owner="owner",o.isPremium=e[r].split(".")[0].length<=5,this.isShoudMoreLong=e[r].split(".")[0].length<5,t.next=41,this.web3BuyInstance.price(e[r].split(".")[0]);case 41:c=t.sent,o.price=c/Math.pow(10,18),e[r].split(".")[0].length<5&&(o.price=""),i.push(o);case 45:if("defi"!=e[r].substr(-4)||"ETH"!=this.chainType){t.next=64;break}return t.next=48,s.exists(e[r]);case 48:return u=t.sent,o.isExist=u,o.resolver="",o.tokenURI=e[r],o.owner="owner",o.isPremium=e[r].split(".")[0].length<=5,this.isShoudMoreLong=e[r].split(".")[0].length<5,t.next=60,this.web3BuyInstance.price(e[r].split(".")[0]);case 60:c=t.sent,o.price=c/Math.pow(10,18),e[r].split(".")[0].length<5&&(o.price=""),i.push(o);case 64:if(".ht"!=e[r].substr(-3)||"HT"!=this.chainType){t.next=83;break}return t.next=67,s.exists(e[r]);case 67:return u=t.sent,o.isExist=u,o.resolver="",o.tokenURI=e[r],o.owner="owner",o.isPremium=e[r].split(".")[0].length<=5,this.isShoudMoreLong=e[r].split(".")[0].length<5,t.next=79,this.web3BuyInstance.price(e[r].split(".")[0]);case 79:c=t.sent,o.price=c/Math.pow(10,18),e[r].split(".")[0].length<5&&(o.price=""),i.push(o);case 83:r++,t.next=5;break;case 86:this.domains=i,this.closeLoading();case 88:case"end":return t.stop()}}),t,this)}))),function(t){return g.apply(this,arguments)}),price:function(t){var e=t.length-4;return 5==e?250:6==e?100:7==e?60:e>=8?30:void 0},openLoading:function(){var t=this.$t("app.searching");this.loading=this.$loading({lock:!0,text:t,spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});var e=this;setTimeout((function(){e.closeLoading()}),1e4)},closeLoading:function(){this.loading.close()},awaitWraper:function(t){return t.then((function(t){return[null,t]})).catch((function(t){return[t,null]}))},onSubmit:function(){this.$message("submit!")},onCancel:function(){this.$message({message:"cancel!",type:"warning"})}}}},TiIK:function(t,e,n){"use strict";n.r(e);var a=n("yTJW"),s=n("Jml6");for(var i in s)"default"!==i&&function(t){n.d(e,t,(function(){return s[t]}))}(i);n("DlDH");var r=n("KHd+"),o=Object(r.a)(s.default,a.a,a.b,!1,null,"2e775d92",null);o.options.__file="search.vue",e.default=o.exports},V7M8:function(t){t.exports=[{inputs:[{internalType:"contract Registry",name:"registry",type:"address"},{internalType:"address",name:"resolver",type:"address"},{internalType:"contract ERC20",name:"usdt",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"_usdtToken",outputs:[{internalType:"contract ERC20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"label",type:"string"}],name:"buy",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"label",type:"string"}],name:"price",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"string",name:"s",type:"string"}],name:"strlen",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"pure",type:"function"}]},WEEN:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a="0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out",s={"before-enter":function(t){t.style.transition=a,t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0},enter:function(t){t.dataset.oldOverflow=t.style.overflow,0!==t.scrollHeight?(t.style.height=t.scrollHeight+"px",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom):(t.style.height="",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom),t.style.overflow="hidden"},"after-enter":function(t){t.style.transition="",t.style.height="",t.style.overflow=t.dataset.oldOverflow},"before-leave":function(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.height=t.scrollHeight+"px",t.style.overflow="hidden"},leave:function(t){0!==t.scrollHeight&&(t.style.transition=a,t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0)},"after-leave":function(t){t.style.transition="",t.style.height="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom}};e.default={name:"collapseTransition",functional:!0,render:function(t,e){var n=e.children;return t("transition",{on:s},n)}}},lxq4:function(t,e,n){},o3DP:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Web3ERC20=void 0;var a=c(n("14Xm")),s=c(n("D3Ub")),i=c(n("iCc5")),r=c(n("V7oC")),o=c(n("meUc")),u=n("kB5k");n("3Ci3");function c(t){return t&&t.__esModule?t:{default:t}}var l=n("ewEw"),p=n("KCoV"),d=e.Web3ERC20=function(){function t(e,n,a){if((0,i.default)(this,t),this.web3=new o.default(window.detectProvider),this.trustUSDT=l[n][a].trustUSDT,console.log(e),""!=e)this.account=e;else{var s=this;this.web3.eth.getAccounts((function(t,e){s.account=e[0]}))}this.contract=new this.web3.eth.Contract(p,this.trustUSDT),this.contractReader=new this.web3.eth.Contract(p,this.trustUSDT),this.defaultGasPrice=2e10}var e,n,c,d;return(0,r.default)(t,[{key:"balanceOf",value:(d=(0,s.default)(a.default.mark((function t(e){var n;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractReader.methods.balanceOf(e).call();case 2:return n=t.sent,t.next=5,this.getPrecision();case 5:return t.sent,t.abrupt("return",new u.BigNumber(n));case 7:case"end":return t.stop()}}),t,this)}))),function(t){return d.apply(this,arguments)})},{key:"getPrecision",value:(c=(0,s.default)(a.default.mark((function t(){var e;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractReader.methods.decimals.call();case 2:return e=t.sent,t.abrupt("return",(0,u.BigNumber)(10).pow((0,u.BigNumber)(e)));case 4:case"end":return t.stop()}}),t,this)}))),function(){return c.apply(this,arguments)})},{key:"allowance",value:(n=(0,s.default)(a.default.mark((function t(e,n){var s;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractReader.methods.allowance(e,n).call();case 2:return s=t.sent,t.next=5,this.getPrecision();case 5:return t.sent,t.abrupt("return",(0,u.BigNumber)(s).div(1e19));case 7:case"end":return t.stop()}}),t,this)}))),function(t,e){return n.apply(this,arguments)})},{key:"approve",value:(e=(0,s.default)(a.default.mark((function t(e,n,s){var i,r,o;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=this.defaultGasPrice,r=this.contract.methods.approve(e,n),t.next=4,r.estimateGas({value:0,from:this.account,to:this.trustUSDT});case 4:return o=t.sent,t.abrupt("return",r.send({from:this.account,gasPrice:i,gas:Math.round(1.1*o)},s));case 6:case"end":return t.stop()}}),t,this)}))),function(t,n,a){return e.apply(this,arguments)})}]),t}();e.default=d},rfZM:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ConfluxERC20=void 0;var a=u(n("14Xm")),s=u(n("D3Ub")),i=u(n("iCc5")),r=u(n("V7oC")),o=n("kB5k");function u(t){return t&&t.__esModule?t:{default:t}}var c=n("ewEw"),l=n("jzF0").Conflux,p=n("KCoV"),d=e.ConfluxERC20=function(){function t(e,n){(0,i.default)(this,t),this.conflux=window.confluxJS,this.confluxReader=new l({url:c[e][n].provider,defaultGasPrice:100,defaultGas:1e6}),this.contractReader=this.confluxReader.Contract({abi:p,address:c[e][n].trustUSDT}),this.contract=this.conflux.Contract({abi:p,address:c[e][n].trustUSDT})}var e,n,u,d,f,h,y,v;return(0,r.default)(t,[{key:"symbol",value:(v=(0,s.default)(a.default.mark((function t(){return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractReader.symbol.call();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(){return v.apply(this,arguments)})},{key:"decimals",value:(y=(0,s.default)(a.default.mark((function t(){var e;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractReader.decimals.call();case 2:return e=t.sent,t.abrupt("return",(0,o.BigNumber)(e)/1);case 4:case"end":return t.stop()}}),t,this)}))),function(){return y.apply(this,arguments)})},{key:"getPrecision",value:(h=(0,s.default)(a.default.mark((function t(){var e;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractReader.decimals().call();case 2:return e=t.sent,t.abrupt("return",(0,o.BigNumber)(10).pow((0,o.BigNumber)(e)));case 4:case"end":return t.stop()}}),t,this)}))),function(){return h.apply(this,arguments)})},{key:"balanceOf",value:(f=(0,s.default)(a.default.mark((function t(e){var n;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractReader.balanceOf(e).call();case 2:return n=t.sent,t.t0=new o.BigNumber(parseInt(n.toString(),10)),t.next=6,this.getPrecision();case 6:return t.t1=t.sent,t.abrupt("return",t.t0.div.call(t.t0,t.t1));case 8:case"end":return t.stop()}}),t,this)}))),function(t){return f.apply(this,arguments)})},{key:"approve",value:(d=(0,s.default)(a.default.mark((function t(e,n){return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contract.approve(e,n).sendTransaction({from:this.conflux.defaultAccount}).confirmed();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(t,e){return d.apply(this,arguments)})},{key:"totalSupply",value:(u=(0,s.default)(a.default.mark((function t(){var e;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractReader.totalSupply().call();case 2:return e=t.sent,t.t0=new o.BigNumber(parseInt(e.toString(),10)),t.next=6,this.getPrecision();case 6:return t.t1=t.sent,t.abrupt("return",t.t0.div.call(t.t0,t.t1));case 8:case"end":return t.stop()}}),t,this)}))),function(){return u.apply(this,arguments)})},{key:"totalSupply2",value:(n=(0,s.default)(a.default.mark((function t(){var e;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contract.totalSupply().call();case 2:return e=t.sent,t.t0=new o.BigNumber(parseInt(e.toString(),10)),t.next=6,this.getPrecision();case 6:return t.t1=t.sent,t.abrupt("return",t.t0.div.call(t.t0,t.t1));case 8:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"allowance",value:(e=(0,s.default)(a.default.mark((function t(e,n){var s,i;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractReader.allowance(e,n).call();case 2:return s=t.sent,t.next=5,this.getPrecision();case 5:return i=t.sent,t.abrupt("return",(0,o.BigNumber)(s).div(i));case 7:case"end":return t.stop()}}),t,this)}))),function(t,n){return e.apply(this,arguments)})}]),t}();e.default=d},y4m1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Web3Buy=void 0;var a=u(n("14Xm")),s=u(n("D3Ub")),i=u(n("iCc5")),r=u(n("V7oC")),o=u(n("meUc"));n("kB5k"),n("3Ci3");function u(t){return t&&t.__esModule?t:{default:t}}var c=n("ewEw"),l=(n("KCoV"),n("V7M8")),p=e.Web3Buy=function(){function t(e,n,a){(0,i.default)(this,t),this.web3=new o.default(window.detectProvider),this.buyMinter=c[n][a].buyMinter,this.account=e,this.contract=new this.web3.eth.Contract(l,c[n][a].buyMinter),this.defaultGasPrice=2e10}var e,n;return(0,r.default)(t,[{key:"price",value:(n=(0,s.default)(a.default.mark((function t(e){return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contract.methods.price(e).call();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"buy",value:(e=(0,s.default)(a.default.mark((function t(e,n){var s,i,r;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=this.defaultGasPrice,i=this.contract.methods.buy(e),t.next=4,i.estimateGas({value:0,from:this.account,to:this.buyMinter});case 4:return r=t.sent,t.abrupt("return",i.send({from:this.account,gasPrice:s,gas:Math.round(1.1*r)},n));case 6:case"end":return t.stop()}}),t,this)}))),function(t,n){return e.apply(this,arguments)})}]),t}();e.default=p},yTJW:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[t.isShoudMoreLong?n("div",{staticClass:"should-more-long"},[t._v("\n    "+t._s(t.$t("app.pleaseSearch5length"))+"\n  ")]):t._e(),t._v(" "),t._l(t.domains,(function(e,a){return t.errorTLD?t._e():n("div",{staticClass:"search-row-wrapper"},[n("div",{staticClass:"search-domain-row",class:{borderBottomHidden:!t.isActive}},[n("div",{staticClass:"left"},[n("div",{staticClass:"coin-svg"},[".cfx"==e.tokenURI.substr(-4)?n("svg-icon",{attrs:{"icon-class":"cfx"}}):t._e(),t._v(" "),".bnb"==e.tokenURI.substr(-4)?n("svg-icon",{attrs:{"icon-class":"bnb"}}):t._e(),t._v(" "),"defi"==e.tokenURI.substr(-4)?n("svg-icon",{attrs:{"icon-class":"eth"}}):t._e(),t._v(" "),".ht"==e.tokenURI.substr(-3)?n("svg-icon",{attrs:{"icon-class":"ht"}}):t._e()],1),t._v(" "),n("div",{staticClass:"coin-domain"},[t._v(t._s(e.tokenURI))])]),t._v(" "),n("div",{staticClass:"right"},[e.isExist?t._e():n("span",{staticClass:"price"},[t._v(t._s(e.price?"$"+e.price:""))]),t._v(" "),e.isPremium?n("span",{staticClass:"premium"},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.$t("app.premium"),placement:"top"}},[n("svg-icon",{attrs:{"icon-class":"crown"}})],1)],1):t._e(),t._v(" "),e.isExist?n("el-button",{attrs:{type:"primary",plain:"",loading:!1}},[t._v(t._s(t.$t("app.alreadyRegistry")))]):t._e(),t._v(" "),!e.isExist&&e.tokenURI.split(".")[0].length>=5?n("el-button",{attrs:{type:"primary",plain:"",loading:!1},on:{click:function(n){t.toogle(e.price)}}},[t._v(t._s(t.$t("app.avaiableRegistry")))]):t._e(),t._v(" "),e.tokenURI.split(".")[0].length<5&&!e.isExist?n("el-button",{attrs:{type:"primary",plain:"",loading:!1,disabled:""}},[t._v(t._s(t.$t("app.notStart")))]):t._e()],1)]),t._v(" "),n("collapse",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"buy-container"},[n("div",{staticClass:"container"},[n("div",{staticClass:"title"},["CFX"==t.chainType?n("span",[t._v(t._s(t.$t("search.payBycUSDT")))]):t._e(),t._v(" "),"BNB"==t.chainType?n("span",[t._v(t._s(t.$t("search.payByBUSDT")))]):t._e(),t._v(" "),"ETH"==t.chainType?n("span",[t._v(t._s(t.$t("search.payByUSDT")))]):t._e(),t._v(" "),"HT"==t.chainType?n("span",[t._v(t._s(t.$t("search.payByHUSD")))]):t._e()]),t._v(" "),n("div",{staticClass:"order"},[n("div",{staticClass:"row"},[n("div",{staticClass:"amount"},[n("div",{staticClass:"left"},[t._v(t._s(t.$t("search.amount")))]),t._v(" "),n("div",{staticClass:"right"},[t._v(t._s(t.$t("app.balance"))+" "+t._s(t.isConflux?t.cusdtBalance.toFixed(2):t.busdtBalance.toFixed(2))+" \n                    "),"CFX"==t.chainType?n("span",[t._v("cUSDT")]):t._e(),t._v(" "),"BNB"==t.chainType?n("span",[t._v("BUSDT")]):t._e(),t._v(" "),"ETH"==t.chainType?n("span",[t._v("USDT")]):t._e(),t._v(" "),"HT"==t.chainType?n("span",[t._v("HUSD")]):t._e()])]),t._v(" "),n("div",{staticStyle:{"margin-top":"5px"}},[n("el-input",{attrs:{placeholder:""},model:{value:t.inputPrice2,callback:function(e){t.inputPrice2=e},expression:"inputPrice2"}},[n("i",{staticStyle:{display:"flex","align-items":"center",width:"30px",height:"30px","margin-top":"5px"},attrs:{slot:"suffix"},slot:"suffix"},[n("svg-icon",{attrs:{"icon-class":"tether"}})],1)])],1)]),t._v(" "),"CFX"==t.chainType?n("div",{staticClass:"row"},[n("div",{staticClass:"tips"},[n("a",{attrs:{target:"_blank",href:"https://www.confluxscan.io/token/0x8b8689c7f3014a4d86e4d1d0daaf74a47f5e0f27"}},[t._v(t._s(t.$t("search.cUSDTPeg")))])])]):t._e(),t._v(" "),"BNB"==t.chainType?n("div",{staticClass:"row"},[n("div",{staticClass:"tips"},[n("a",{attrs:{target:"_blank",href:"https://bscscan.com/token/0x55d398326f99059ff775485246999027b3197955"}},[t._v(t._s(t.$t("search.bUSDTPeg")))])])]):t._e(),t._v(" "),"ETH"==t.chainType?n("div",{staticClass:"row"},[n("div",{staticClass:"tips"},[n("a",{attrs:{target:"_blank",href:"https://etherscan.io/address/0xdac17f958d2ee523a2206206994597c13d831ec7"}},[t._v(t._s(t.$t("search.USDTPeg")))])])]):t._e(),t._v(" "),"HT"==t.chainType?n("div",{staticClass:"row"},[n("div",{staticClass:"tips"},[n("a",{attrs:{target:"_blank",href:"https://scan.hecochain.com/token/0x0298c2b32eae4da002a15f36fdf7615bea3da047"}},[t._v(t._s(t.$t("search.HUSDPeg")))])])]):t._e()]),t._v(" "),n("div",{staticClass:"button-box",staticStyle:{"margin-top":"5px"}},[t.isApproved?n("el-button",{attrs:{loading:t.isPaying,disabled:t.isSuccessPayed,type:"primary"},on:{click:function(e){t.buy()}}},[t._v(t._s(t.$t("search.pay")))]):t._e(),t._v(" "),t.isApproved?t._e():n("el-button",{attrs:{loading:t.isApproving,plain:"",type:"primary"},on:{click:function(e){t.approve()}}},[t._v(t._s(t.$t("search.approve")))])],1)])])])],1)})),t._v(" "),t.errorTLD?n("div",{staticClass:"search-domain-row"},[n("div",{staticClass:"left"},[n("div",{staticClass:"coin-domain",staticStyle:{color:"#F86161","font-size":"18px"}},[t._v(t._s(t.$t("app.errorTLD")))])])]):t._e(),t._v(" "),0!=t.domains.length||t.errorTLD?t._e():n("div",{staticClass:"error-domains-row"},[n("span",[n("svg-icon",{attrs:{"icon-class":"searching"}})],1),t._v(" "),n("span",[t._v(t._s(t.$t("app.findYourDomain")))])])],2)},s=[];n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return s}))}}]);