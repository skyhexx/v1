(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-13a2"],{"/Z9z":function(t,e,i){"use strict";i.r(e);var n=i("X5Gd"),s=i("kGjL");for(var r in s)"default"!==r&&function(t){i.d(e,t,(function(){return s[t]}))}(r);var a=i("KHd+"),o=Object(a.a)(s.default,n.a,n.b,!1,null,null,null);o.options.__file="vue-count-down.vue",e.default=o.exports},39:function(t,e){},"9d2b":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=l(i("14Xm")),s=l(i("D3Ub")),r=l(i("0dc3")),a=i("kB5k"),o=l(i("/Z9z")),u=l(i("7E63")),c=(l(i("rfZM")),i("ewEw")),d=i("Iawr"),h=i("3Ci3"),f=l(i("P20i"));l(i("Lv2y"));function l(t){return t&&t.__esModule?t:{default:t}}var p,v,b,m,A,g,w,k,y,x,_,$=i("LAvi"),T=i("zGU6").toChecksumAddress;e.default={components:{"count-down":o.default},data:function(){return{status:9,bidAmount:"",countDown:0,endTime:"1603967637",tokenId:"---",highbidder:"---",price:"---",tokenURI:"",trustAuction:null,trustAuctionService:null,usdt:null,trustUsdt:null,usdtBalance:0,approveUSDTValue:0,isOwner:!1,isHighBidder:!1,isClosing:!1,isEnding:!1,isBidding:!1,isApproving:!1,isApproved:!1,isShouldPay:!1,isShouldClose:!1,disableApproveButton:!0,domain:{}}},created:(_=(0,s.default)(n.default.mark((function t(){var e;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.$route.path,this.tokenURI=e.split("/")[2],this.init();case 3:case"end":return t.stop()}}),t,this)}))),function(){return _.apply(this,arguments)}),computed:{web3Account:function(){return this.$store.state.web3.account},isConflux:function(){return this.$store.state.web3.walletType==r.default.CONFLUXPORTAL},chainType:function(){return this.$store.state.web3.chainType},isApprovedState:function(){return this.isApproved},usdtInstance:function(){return this.$store.state.web3.usdt},trustUsdtInstance:function(){return this.$store.state.web3.bnbUsdt}},methods:{init:(x=(0,s.default)(n.default.mark((function t(){var e;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this,this.$nextTick((0,s.default)(n.default.mark((function t(){return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isConflux){t.next=9;break}if(e.trustAuction=new u.default,this.usdtIntance){t.next=5;break}return t.next=5,this.$store.dispatch("loading","CFX");case 5:e.loadAuctionInfo(),e.getApproveUSDT(),t.next=15;break;case 9:if(e.trustAuctionService=new f.default(e.web3Account,e.chainType),this.trustUsdtInstance){t.next=13;break}return t.next=13,this.$store.dispatch("loadingBnb","BNB");case 13:e.loadWeb3AuctionInfo(),e.getWeb3ApproveUSDT();case 15:case"end":return t.stop()}}),t,this)}))));case 2:case"end":return t.stop()}}),t,this)}))),function(){return x.apply(this,arguments)}),loadWeb3AuctionInfo:(y=(0,s.default)(n.default.mark((function t(){var e,i,s,r,o,u,d;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.trustAuctionService.getAuctionIndex(c.bnbTokenAddress,this.tokenURI);case 2:return e=t.sent,i=$.hash(this.tokenURI),t.next=6,this.trustAuctionService.getAuctionByIndex(c.bnbTokenAddress,e);case 6:if(s=t.sent,r="0x"+new a.BigNumber(s.tokenId).toString(16),i==r){t.next=10;break}return t.abrupt("return");case 10:return s.id,this.status=s.status/1,T(this.web3Account)==T(s.seller)&&(this.isOwner=!0),T(this.web3Account)==T(s.bidder)&&(this.isHighBidder=!0),o=s.tokenId,this.tokenId=o.toString(),"0x0000000000000000000000000000000000000000"==s.bidder?this.highbidder=s.seller:this.highbidder=s.bidder,u=s.price/Math.pow(10,18),this.price=u.toFixed(2),this.countDown=s.expiresAt/1-(new Date).getTime()/1e3,this.countDown<0&&(this.countDown=0,0==this.status&&("0x0000000000000000000000000000000000000000"!=s.bidder?this.isShouldPay=!0:this.isShouldClose=!0)),this.status>0&&(this.countDown=0),t.next=25,this.trustUsdtInstance.balanceOf(this.web3Account);case 25:d=t.sent,this.usdtBalance=d.div(1e19).toFixed(2),this.getApproveUSDT();case 28:case"end":return t.stop()}}),t,this)}))),function(){return y.apply(this,arguments)}),loadAuctionInfo:(k=(0,s.default)(n.default.mark((function t(){var e,i,s,r,o,u,d;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.trustAuction.getAuctionIndex(c.tokenAddress,this.tokenURI);case 2:return e=t.sent,i=$.hash(this.tokenURI),t.next=6,this.trustAuction.getAuctionByIndex(c.tokenAddress,e);case 6:if(s=t.sent,r="0x"+new a.BigNumber(s.tokenId).toString(16),i==r){t.next=10;break}return t.abrupt("return");case 10:return s.id,this.status=s.status/1,this.web3Account==s.seller&&(this.isOwner=!0),this.web3Account==s.bidder&&(this.isHighBidder=!0),o=s.tokenId,this.tokenId=o.toString(),"0x0000000000000000000000000000000000000000"==s.bidder?this.highbidder=s.seller:this.highbidder=s.bidder,u=s.price/Math.pow(10,18),this.price=u.toFixed(2),this.countDown=s.expiresAt/1-(new Date).getTime()/1e3,this.countDown<0&&(this.countDown=0,0==this.status&&("0x0000000000000000000000000000000000000000"!=s.bidder?this.isShouldPay=!0:this.isShouldClose=!0)),this.status>0&&(this.countDown=0),t.next=25,this.usdtInstance.balanceOf(this.web3Account);case 25:d=t.sent,this.usdtBalance=d.toFixed(2);case 27:case"end":return t.stop()}}),t,this)}))),function(){return k.apply(this,arguments)}),closeAuction:(w=(0,s.default)(n.default.mark((function t(){var e,i=this;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.isClosing=!0,d.Notification.info(this,this.$t("auction.close"),this.$t("notify.sureWallet"),5e3),!this.isConflux){t.next=17;break}return t.prev=3,t.next=6,this.trustAuction.closeAuction(c.tokenAddress,this.tokenURI);case 6:d.Notification.success(this,this.$t("notify.success"),this.$t("auction.closeSuccess"),3e3),this.$store.dispatch("updateCFXAuctionPage",0),this.loadAuctionInfo(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(3),4001==t.t0.code?d.Notification.error(this,this.$t("app.error"),this.$t("notify.userDenied"),5e3):d.Notification.error(this,this.$t("app.error"),this.$t("notify.closeAuctionError"),5e3);case 14:this.isClosing=!1,t.next=19;break;case 17:e=this,this.trustAuctionService.closeAuction(c.bnbTokenAddress,this.tokenURI,(function(t,e){console.log(e)})).then(function(){var t=(0,s.default)(n.default.mark((function t(s){return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.loadWeb3AuctionInfo(),e.isClosing=!1,d.Notification.success(e,e.$t("notify.success"),e.$t("auction.closeSuccess"),3e3),e.$store.dispatch("updateBNBAuctionPage",0);case 4:case"end":return t.stop()}}),t,i)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){4001==t.code?d.Notification.error(i,i.$t("app.error"),i.$t("notify.userDenied"),5e3):d.Notification.error(i,i.$t("app.error"),i.$t("notify.closeAuctionError"),5e3),i.isClosing=!1}));case 19:case"end":return t.stop()}}),t,this,[[3,11]])}))),function(){return w.apply(this,arguments)}),bidAuction:(g=(0,s.default)(n.default.mark((function t(){var e,i,r=this;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.isOwner){t.next=3;break}return d.Notification.error(this,this.$t("app.error"),this.$t("auction.youCanBidYours"),3e3),t.abrupt("return");case 3:if(0!=this.countDown){t.next=6;break}return d.Notification.error(this,this.$t("app.error"),this.$t("auction.auctionIsOver"),3e3),t.abrupt("return");case 6:if(e=Number(this.bidAmount),!(this.approveUSDTValue<e)){t.next=10;break}return d.Notification.error(this,this.$t("app.error"),this.$t("auction.shouldApproveUSDT"),3e3),t.abrupt("return");case 10:if(!(this.usdtBalance<e)){t.next=13;break}return d.Notification.error(this,this.$t("app.error"),this.$t("auction.shouldHaveEngouhUSDT"),3e3),t.abrupt("return");case 13:if(!(e>=parseInt(this.price,10)+10)){t.next=34;break}if(this.isBidding=!0,d.Notification.info(this,this.$t("auction.bid"),this.$t("notify.sureWallet"),5e3),!this.isConflux){t.next=30;break}return t.prev=17,t.next=20,this.trustAuction.bidAuction(c.tokenAddress,this.tokenURI,e*Math.pow(10,18));case 20:d.Notification.success(this,this.$t("notify.success"),this.$t("auction.bidSuccess"),3e3),this.loadAuctionInfo(),t.next=27;break;case 24:t.prev=24,t.t0=t.catch(17),4001==t.t0.code?d.Notification.error(this,this.$t("app.error"),this.$t("notify.userDenied"),5e3):d.Notification.error(this,this.$t("app.error"),this.$t("notify.bidError"),5e3);case 27:this.isBidding=!1,t.next=32;break;case 30:i=this,this.trustAuctionService.bidAuction(c.bnbTokenAddress,this.tokenURI,new a.BigNumber(e*Math.pow(10,18)),(function(t,e){console.log(e)})).then(function(){var t=(0,s.default)(n.default.mark((function t(e){return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i.loadWeb3AuctionInfo(),d.Notification.success(i,i.$t("notify.success"),i.$t("auction.bidSuccess"),3e3),i.isBidding=!1;case 3:case"end":return t.stop()}}),t,r)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){4001==t.code?d.Notification.error(r,r.$t("app.error"),r.$t("notify.userDenied"),5e3):d.Notification.error(r,r.$t("app.error"),r.$t("notify.bidError"),5e3),r.isBidding=!1}));case 32:t.next=35;break;case 34:d.Notification.error(this,this.$t("app.error"),this.$t("app.bidTip"),3e3);case 35:case"end":return t.stop()}}),t,this,[[17,24]])}))),function(){return g.apply(this,arguments)}),endAuction:(A=(0,s.default)(n.default.mark((function t(){var e,i=this;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(this.countDown>0)){t.next=3;break}return d.Notification.error(this,this.$t("app.error"),this.$t("auction.auctionIsNotOver"),3e3),t.abrupt("return");case 3:if(d.Notification.info(this,this.$t("auction.endAuction"),this.$t("notify.sureWallet"),5e3),this.isEnding=!0,!this.isConflux){t.next=20;break}return t.prev=6,t.next=9,this.trustAuction.finishAuction(c.tokenAddress,this.tokenURI);case 9:d.Notification.success(this,this.$t("notify.success"),this.$t("auction.endAuctionSuccess"),3e3),this.$store.dispatch("updateCFXDomainPage",0),this.loadAuctionInfo(),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(6),4001==t.t0.code?d.Notification.error(this,this.$t("app.error"),this.$t("notify.userDenied"),5e3):d.Notification.error(this,this.$t("app.error"),this.$t("notify.endAuctionError"),5e3);case 17:this.isEnding=!0,t.next=22;break;case 20:e=this,this.trustAuctionService.finishAuction(c.bnbTokenAddress,this.tokenURI,(function(t,e){})).then(function(){var t=(0,s.default)(n.default.mark((function t(s){return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.loadWeb3AuctionInfo(),d.Notification.success(e,e.$t("notify.success"),e.$t("auction.endAuctionSuccess"),3e3),e.$store.dispatch("updateBNBDomainPage",0),e.isEnding=!0;case 4:case"end":return t.stop()}}),t,i)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){4001==t.code?d.Notification.error(i,i.$t("app.error"),i.$t("notify.userDenied"),5e3):d.Notification.error(i,i.$t("app.error"),i.$t("notify.endAuctionError"),5e3),i.isEnding=!0}));case 22:case"end":return t.stop()}}),t,this,[[6,14]])}))),function(){return A.apply(this,arguments)}),getWeb3ApproveUSDT:(m=(0,s.default)(n.default.mark((function t(){var e;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.trustUsdtInstance.allowance(this.web3Account,c.bnbAuctionAddress);case 2:e=t.sent,console.log(e/1),this.approveUSDTValue=e,this.approveUSDTValue>1.0999999999999*this.price?(this.isApproved=!0,console.log(this.isApproved)):this.disableApproveButton=!1;case 6:case"end":return t.stop()}}),t,this)}))),function(){return m.apply(this,arguments)}),approveWeb3USDT:(b=(0,s.default)(n.default.mark((function t(){var e,i,r=this;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=this.web3Account){t.next=2;break}return t.abrupt("return");case 2:this.isApproving=!0,e=h.MAX_UINT256,i=this,this.trustUsdtInstance.approve(c.bnbAuctionAddress,e,(function(t,e){console.log(e)})).then(function(){var t=(0,s.default)(n.default.mark((function t(e){return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i.isApproving=!1,i.getWeb3ApproveUSDT();case 2:case"end":return t.stop()}}),t,r)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){4001==t.code?d.Notification.error(r,r.$t("app.error"),r.$t("notify.userDenied"),5e3):d.Notification.error(r,r.$t("app.error"),r.$t("notify.approveError"),5e3),r.isApproving=!1}));case 6:case"end":return t.stop()}}),t,this)}))),function(){return b.apply(this,arguments)}),getApproveUSDT:(v=(0,s.default)(n.default.mark((function t(){var e;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.isConflux){t.next=3;break}return this.getWeb3ApproveUSDT(),t.abrupt("return");case 3:return t.next=5,this.usdtInstance.allowance(this.web3Account,c.trustAuctionAddress);case 5:e=t.sent,console.log(e/Math.pow(10,18)),this.approveUSDTValue=e,this.approveUSDTValue>1.0999999999999*this.price?(this.isApproved=!0,console.log(this.isApproved)):(this.disableApproveButton=!1,this.isApproved=!1);case 9:case"end":return t.stop()}}),t,this)}))),function(){return v.apply(this,arguments)}),approveUSDT:(p=(0,s.default)(n.default.mark((function t(){var e;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.isConflux){t.next=3;break}return this.approveWeb3USDT(),t.abrupt("return");case 3:if(""!=this.web3Account){t.next=5;break}return t.abrupt("return");case 5:return d.Notification.info(this,this.$t("search.approve"),this.$t("notify.sureWallet"),5e3),this.isApproving=!0,e=h.MAX_UINT256,t.prev=8,t.next=11,this.usdtInstance.approve(c.trustAuctionAddress,e);case 11:this.getApproveUSDT(),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(8),4001==t.t0.code?d.Notification.error(this,this.$t("app.error"),this.$t("notify.userDenied"),5e3):d.Notification.error(this,this.$t("app.error"),this.$t("notify.approveError"),5e3);case 17:console.log("close approving"),this.isApproving=!1;case 19:case"end":return t.stop()}}),t,this,[[8,14]])}))),function(){return p.apply(this,arguments)}),subTokenUri:function(t){return t.slice(0,10)+"..."+t.slice(-6)},back:function(){console.log("back"),this.$router.back(-1)}}}},CFwr:function(t,e,i){},Iawr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Notification=void 0;var n=r(i("iCc5")),s=r(i("V7oC"));function r(t){return t&&t.__esModule?t:{default:t}}var a=e.Notification=function(){function t(){(0,n.default)(this,t)}return(0,s.default)(t,null,[{key:"notify",value:function(t,e,i,n,s){t.$notify({title:e,message:i,type:n,duration:s})}},{key:"info",value:function(t,e,i,n){t.$notify.info({title:e,message:i,duration:n})}},{key:"success",value:function(t,e,i,n){t.$notify({title:e,message:i,type:"success",duration:n})}},{key:"error",value:function(t,e,i,n){t.$notify.error({title:e,message:i,duration:n})}}]),t}();e.default=a},P20i:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TrustAuctionService=void 0;var n=d(i("14Xm")),s=d(i("D3Ub")),r=d(i("iCc5")),a=d(i("V7oC")),o=d(i("meUc")),u=i("ewEw"),c=i("kB5k");function d(t){return t&&t.__esModule?t:{default:t}}i("jzF0").Conflux;var h=i("LAvi"),f=i("FHO2"),l=e.TrustAuctionService=function(){function t(e,i){if((0,r.default)(this,t),this.web3=new o.default(window.detectProvider),"BNB"==i?this.web3Reader=new o.default(new o.default.providers.HttpProvider(u.bnbProvider)):"ETH"==i&&(this.web3Reader=new o.default(new o.default.providers.HttpProvider(u.ethProvider))),""!=e)this.account=e;else{var n=this;this.web3.eth.getAccounts((function(t,e){n.account=e[0]}))}this.auctionWriter=new this.web3.eth.Contract(f,u.bnbAuctionAddress),this.auctionReader=new this.web3.eth.Contract(f,u.bnbAuctionAddress),this.defaultGasPrice=2e10}var e,i,d,l,p,v,b,m,A,g,w,k,y;return(0,a.default)(t,[{key:"getUserCreateAuctionCount",value:(y=(0,s.default)(n.default.mark((function t(e,i){return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.auctionReader.methods.getUserCreateAuctionCount(e,i).call();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(t,e){return y.apply(this,arguments)})},{key:"getUserCreateAuctionById",value:(k=(0,s.default)(n.default.mark((function t(e,i,s){return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.auctionReader.methods.getUserCreateAuctionById(e,i,s).call();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(t,e,i){return k.apply(this,arguments)})},{key:"getUserBiddedAuctionCount",value:(w=(0,s.default)(n.default.mark((function t(e,i){return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.auctionReader.methods.getUserBiddedAuctionCount(e,i).call();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(t,e){return w.apply(this,arguments)})},{key:"getUserBiddedAuctionById",value:(g=(0,s.default)(n.default.mark((function t(e,i,s){return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.auctionReader.methods.getUserBiddedAuctionById(e,i,s).call();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(t,e,i){return g.apply(this,arguments)})},{key:"getAuctionIdForTokenURI",value:(A=(0,s.default)(n.default.mark((function t(e,i){var s;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=h.hash(i),t.next=3,this.auctionReader.methods.auctionId(e,s).call();case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)}))),function(t,e){return A.apply(this,arguments)})},{key:"getAuctionIndex",value:(m=(0,s.default)(n.default.mark((function t(e,i){var s;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=h.hash(i),t.next=3,this.auctionReader.methods.getAuctionIndex(e,s).call();case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)}))),function(t,e){return m.apply(this,arguments)})},{key:"getAuctionCount",value:(b=(0,s.default)(n.default.mark((function t(e){return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.auctionReader.methods.getAuctionCount(e).call();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(t){return b.apply(this,arguments)})},{key:"getAuctionByIndex",value:(v=(0,s.default)(n.default.mark((function t(e,i){return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.auctionReader.methods.getAuctionByIndex(e,i).call();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(t,e){return v.apply(this,arguments)})},{key:"getAuctionByDomain",value:(p=(0,s.default)(n.default.mark((function t(e,i){var s;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=h.hash(i),t.next=3,this.auctionReader.methods.getAuctionByTokenId(e,s).call();case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)}))),function(t,e){return p.apply(this,arguments)})},{key:"createAuction",value:(l=(0,s.default)(n.default.mark((function t(e,i,s,r,a){var o,d,f,l;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=h.hash(i),console.log(e),console.log(o),console.log(s/1),console.log(r),d=this.auctionWriter.methods.createAuction(e,o,new c.BigNumber(s),r),t.next=8,d.estimateGas({value:0,from:this.account,to:u.bnbAuctionAddress});case 8:return f=t.sent,l=this.defaultGasPrice,t.abrupt("return",d.send({from:this.account,gasPrice:l,gas:Math.round(1.1*f)},a));case 11:case"end":return t.stop()}}),t,this)}))),function(t,e,i,n,s){return l.apply(this,arguments)})},{key:"bidAuction",value:(d=(0,s.default)(n.default.mark((function t(e,i,s,r){var a,o,c,d;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=h.hash(i),o=this.auctionWriter.methods.bidAuction(e,a,s),t.next=4,o.estimateGas({value:0,from:this.account,to:u.bnbAuctionAddress});case 4:return c=t.sent,d=this.defaultGasPrice,t.abrupt("return",o.send({from:this.account,gasPrice:d,gas:Math.round(1.1*c)},r));case 7:case"end":return t.stop()}}),t,this)}))),function(t,e,i,n){return d.apply(this,arguments)})},{key:"finishAuction",value:(i=(0,s.default)(n.default.mark((function t(e,i,s){var r,a,o,c;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=h.hash(i),a=this.auctionWriter.methods.bidAuction(e,r),t.next=4,a.estimateGas({value:0,from:this.account,to:u.bnbAuctionAddress});case 4:return o=t.sent,c=this.defaultGasPrice,t.abrupt("return",a.send({from:this.account,gasPrice:c,gas:Math.round(1.1*o)},s));case 7:case"end":return t.stop()}}),t,this)}))),function(t,e,n){return i.apply(this,arguments)})},{key:"closeAuction",value:(e=(0,s.default)(n.default.mark((function t(e,i,s){var r,a,o,c;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=h.hash(i),a=this.auctionWriter.methods.closeAuction(e,r),t.next=4,a.estimateGas({value:0,from:this.account,to:u.bnbAuctionAddress});case 4:return o=t.sent,c=this.defaultGasPrice,t.abrupt("return",a.send({from:this.account,gasPrice:c,gas:Math.round(1.1*o)},s));case 7:case"end":return t.stop()}}),t,this)}))),function(t,i,n){return e.apply(this,arguments)})},{key:"awaitWraper",value:function(t){return t.then((function(t){return t})).catch((function(t){return t}))}}]),t}();e.default=l},X5Gd:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._t("default",[["timer"===t.model?[t._v(t._s(t.time.day)+t._s(t.$t("time.day"))+" "+t._s(t.time.hour)+t._s(t.$t("time.hour"))+" "+t._s(t.time.minute)+t._s(t.$t("time.minute"))+" "+t._s(t.time.second)+t._s(t.$t("time.second")))]:[t._v(t._s(t.restCount))]]],{day:t.time.day,hour:t.time.hour,minute:t.time.minute,second:t.time.second,restCount:t.restCount})],2)},s=[];i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return s}))},YEpA:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,s=i("EJiy"),r=(n=s)&&n.__esModule?n:{default:n};e.default={data:function(){return{endTimestamp:0,timer:null,restCount:0,time:{day:0,hour:0,minute:0,second:0}}},props:{endTime:{type:[Number,Date,String]},count:{type:Number,default:0},step:{type:Number,default:1},model:{type:String,default:"timer"}},beforeDestroy:function(){this.clearTimer()},watch:{endTime:{immediate:!0,handler:function(t){t&&this.restart()}},count:{immediate:!0,handler:function(t){t>0&&this.restart(t)}}},computed:{stepTime:function(){return"timer"===this.model?1e3:1e3*Math.max(this.step,1)}},methods:{parseDate:function(t){return"number"==typeof t||"string"==typeof t&&-1===t.indexOf("-")?parseInt(10===t.toString().length?1e3*t:t):"string"==typeof t?new Date(t).getTime():"object"===(0,r.default)(void 0===t?"undefined":(0,r.default)(t))&&t.getTime()},clearTimer:function(){this.timer&&clearTimeout(this.timer)},triggerTimer:function(){var t=this,e=this;this.render(),this.timer=setTimeout((function(){("timer"===e.model?t.getRestTime():--t.restCount)<0?(e.$emit("ended"),e.$emit("update:count",0)):e.triggerTimer()}),this.stepTime)},render:function(){var t=this,e={};if("timer"===this.model){var i=this.getRestTime();this.time.day=this.formatNumber(Math.floor(i/86400)),this.time.hour=this.formatNumber(Math.floor(i%86400/3600)),this.time.minute=this.formatNumber(Math.floor(i%3600/60)),this.time.second=this.formatNumber(Math.floor(i%60)),this.restCount=i,e={day:this.time.day,hour:this.time.hour,minute:this.time.minute,second:this.time.second}}else e={restCount:this.restCount};this.$nextTick((function(){t.$emit("update",e)}))},formatNumber:function(t,e){return t<10?(t=Math.max(t,0),e?"0"+t:t.toString()):t.toString()},getRestTime:function(){return Math.round((this.endTimestamp-Date.now())/1e3)},restart:function(t){this.clearTimer(),"timer"===this.model?t>0?(this.endTimestamp=Date.now()+1e3*t,this.triggerTimer()):this.count>0?(this.endTimestamp=Date.now()+1e3*this.count,this.triggerTimer()):this.endTime&&(this.endTimestamp=this.parseDate(this.endTime),this.endTimestamp&&this.triggerTimer()):t>0?(this.restCount=t,this.triggerTimer()):this.count>0&&(this.restCount=this.count,this.triggerTimer())}}}},Zury:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"auction_detail"},[i("div",{staticClass:"left"},[i("div",{staticClass:"back-icon",on:{click:function(e){t.back()}}},[i("svg-icon",{attrs:{"icon-class":"back"}})],1)]),t._v(" "),i("div",{staticClass:"center"},[i("div",{staticClass:"title"}),t._v(" "),i("div",{staticClass:"token-uri"},[t._v(t._s(t.tokenURI))])]),t._v(" "),i("div",{staticClass:"right"})]),t._v(" "),i("div",{staticClass:"auction_operation"},[i("div",{staticClass:"price"},[0==t.status?i("div",{staticClass:"status atAuction"},[t._v("• "+t._s(t.isShouldClose?t.$t("auction.shouldClose"):t.isShouldPay?t.$t("auction.shouldPay"):t.$t("app.atAuction")))]):t._e(),t._v(" "),1==t.status?i("div",{staticClass:"status sold"},[t._v("• "+t._s(t.$t("app.sold")))]):t._e(),t._v(" "),2==t.status?i("div",{staticClass:"status closed"},[t._v("• "+t._s(t.$t("app.closed")))]):t._e(),t._v(" "),9==t.status?i("div",{staticClass:"status closed"},[t._v("---")]):t._e(),t._v(" "),i("div",{staticClass:"current-title"},[t._v(t._s(t.$t("app.currentPrice")))]),t._v(" "),i("div",{staticClass:"current-price"},[t._v(t._s(t.price)+" $")]),t._v(" "),i("div",{staticClass:"box"},[i("div",{staticClass:"tokenid"},[i("div",{staticClass:"title"},[t._v(t._s(t.$t("auction.domain"))+" ID")]),t._v(" "),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.tokenId,placement:"top"}},[i("div",{staticClass:"sub-title"},[t._v(t._s(t.subTokenUri(t.tokenId)))])])],1),t._v(" "),i("div",{staticClass:"high-bidder"},[i("div",{staticClass:"title"},[t._v(t._s(t.$t("app.highBidder")))]),t._v(" "),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.highbidder,placement:"top"}},[i("div",{staticClass:"sub-title"},[t._v(t._s(t.subTokenUri(t.highbidder)))])])],1)]),t._v(" "),t.isOwner?i("div",{staticStyle:{"text-align":"center","margin-bottom":"20px"}},[i("el-button",{staticStyle:{width:"60%"},attrs:{loading:t.isClosing,disabled:2==t.status,type:"primary"},on:{click:function(e){t.closeAuction()}}},[t._v(t._s(t.$t("auction.close")))])],1):t._e(),t._v(" "),t.isHighBidder?i("div",{staticStyle:{"text-align":"center","margin-bottom":"20px"}},[i("div",{staticStyle:{margin:"30px auto","font-size":"14px",width:"60%",padding:"5px","text-align":"left",background:"#F5F6FA","border-radius":"5px"}},[t._v("\n        "+t._s(t.$t("auction.yourAreTheHighestBidder"))+"\n      ")]),t._v(" "),i("el-button",{staticStyle:{width:"60%"},attrs:{loading:t.isEnding,disabled:t.countDown>0||1==t.status||2==t.status,type:"success"},on:{click:function(e){t.endAuction()}}},[t._v(t._s(t.$t("auction.endAuction")))])],1):t._e()]),t._v(" "),i("div",{staticClass:"bid"},[i("div",{staticClass:"title"},[t._v(t._s(t.$t("app.joinTheAuction")))]),t._v(" "),i("div",{staticClass:"timer"},[i("count-down",{attrs:{model:"timer",count:t.countDown,endTime:t.endTime}})],1),t._v(" "),i("div",{staticClass:"input"},[i("span",[t._v(t._s(t.$t("app.balance"))+" "),i("span",[t._v(t._s(t.usdtBalance)+" \n        "),"CFX"==t.chainType?i("span",[t._v("cUSDT")]):t._e(),t._v(" "),"BNB"==t.chainType?i("span",[t._v("BUSDT")]):t._e(),t._v(" "),"ETH"==t.chainType?i("span",[t._v("USDT")]):t._e()])]),t._v(" "),i("el-input",{attrs:{placeholder:t.$t("app.bidAmount"),oninput:"value=value.replace(/[^0-9.]/g,'')",type:"number",step:"10"},on:{change:t.getApproveUSDT,blur:t.getApproveUSDT},model:{value:t.bidAmount,callback:function(e){t.bidAmount=e},expression:"bidAmount"}}),t._v(" "),i("span",{staticClass:"tip"},[t._v(t._s(t.$t("app.bidTip")))])],1),t._v(" "),t.isApprovedState?t._e():i("div",{staticClass:"bid-button"},[i("el-button",{attrs:{type:"primary",disabled:2==t.status||1==t.status||t.disableApproveButton,plain:"",loading:t.isApproving},on:{click:function(e){t.approveUSDT()}}},[t._v(t._s(t.$t("auction.approve")))])],1),t._v(" "),t.isApprovedState?i("div",{staticClass:"bid-button"},[i("el-button",{attrs:{type:"primary",disabled:2==t.status||1==t.status,loading:t.isBidding},on:{click:function(e){t.bidAuction()}}},[t._v(t._s(t.$t("app.bid")))])],1):t._e()])])])},s=[];i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return s}))},hB0A:function(t,e,i){"use strict";var n=i("CFwr");i.n(n).a},hJIv:function(t,e,i){"use strict";i.r(e);var n=i("Zury"),s=i("nk6e");for(var r in s)"default"!==r&&function(t){i.d(e,t,(function(){return s[t]}))}(r);i("hB0A");var a=i("KHd+"),o=Object(a.a)(s.default,n.a,n.b,!1,null,"363bd721",null);o.options.__file="auction_detail.vue",e.default=o.exports},kGjL:function(t,e,i){"use strict";i.r(e);var n=i("YEpA"),s=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e.default=s.a},nk6e:function(t,e,i){"use strict";i.r(e);var n=i("9d2b"),s=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e.default=s.a}}]);