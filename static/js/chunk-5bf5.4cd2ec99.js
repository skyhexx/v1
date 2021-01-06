(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5bf5"],{45:function(e,t){},"7E63":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ConfluxAuction=void 0;var a=s(n("14Xm")),i=s(n("D3Ub")),r=s(n("iCc5")),u=s(n("V7oC"));n("kB5k");function s(e){return e&&e.__esModule?e:{default:e}}var d=n("ewEw"),o=n("jzF0"),p=o.Conflux,c=o.format,l=n("LAvi"),y=n("FHO2"),f=t.ConfluxAuction=function(){function e(t,n){(0,r.default)(this,e),this.conflux=window.confluxJS,this.confluxReader=new p({url:d[t][n].provider,defaultGasPrice:100,defaultGas:2e6}),this.auctionReader=this.confluxReader.Contract({abi:y,address:d[t][n].auction}),this.auctionWriter=this.conflux.Contract({abi:y,address:d[t][n].auction})}var t,n,s,o,f,m,h,T,A,x,w,v,b;return(0,u.default)(e,[{key:"getUserCreateAuctionCount",value:(b=(0,i.default)(a.default.mark((function e(t,n){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.awaitWraper(this.auctionReader.getUserCreateAuctionCount(t,n).call());case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e,t){return b.apply(this,arguments)})},{key:"getUserCreateAuctionById",value:(v=(0,i.default)(a.default.mark((function e(t,n,i){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.awaitWraper(this.auctionReader.getUserCreateAuctionById(t,n,i).call());case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e,t,n){return v.apply(this,arguments)})},{key:"getUserBiddedAuctionCount",value:(w=(0,i.default)(a.default.mark((function e(t,n){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.awaitWraper(this.auctionReader.getUserBiddedAuctionCount(t,n).call());case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e,t){return w.apply(this,arguments)})},{key:"getUserBiddedAuctionById",value:(x=(0,i.default)(a.default.mark((function e(t,n,i){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.awaitWraper(this.auctionReader.getUserBiddedAuctionById(t,n,i).call());case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e,t,n){return x.apply(this,arguments)})},{key:"getAuctionIdForTokenURI",value:(A=(0,i.default)(a.default.mark((function e(t,n){var i;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.hash(n),e.next=3,this.awaitWraper(this.auctionReader.auctionId(t,i).call());case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)}))),function(e,t){return A.apply(this,arguments)})},{key:"getAuctionIndex",value:(T=(0,i.default)(a.default.mark((function e(t,n){var i;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.hash(n),e.next=3,this.awaitWraper(this.auctionReader.getAuctionIndex(t,i).call());case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)}))),function(e,t){return T.apply(this,arguments)})},{key:"getAuctionCount",value:(h=(0,i.default)(a.default.mark((function e(t){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.awaitWraper(this.auctionReader.getAuctionCount(t).call());case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e){return h.apply(this,arguments)})},{key:"getAuctionByIndex",value:(m=(0,i.default)(a.default.mark((function e(t,n){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.awaitWraper(this.auctionReader.getAuctionByIndex(t,n).call());case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e,t){return m.apply(this,arguments)})},{key:"getAuctionByDomain",value:(f=(0,i.default)(a.default.mark((function e(t,n){var i;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.hash(n),e.next=3,this.auctionReader.getAuctionByTokenId(t,i).call();case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)}))),function(e,t){return f.apply(this,arguments)})},{key:"createAuction",value:(o=(0,i.default)(a.default.mark((function e(t,n,i,r){var u,s,d;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=l.hash(n),s=this.auctionWriter.createAuction(t,u,i,r),e.next=4,s.estimateGasAndCollateral({from:this.conflux.defaultAccount});case 4:return d=e.sent,e.next=7,s.sendTransaction({from:this.conflux.defaultAccount,value:0,gas:c.big(d.gasUsed).times(1.1).toFixed(0),gasPrice:1,storageLimit:d.storageCollateralized}).confirmed();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)}))),function(e,t,n,a){return o.apply(this,arguments)})},{key:"bidAuction",value:(s=(0,i.default)(a.default.mark((function e(t,n,i){var r,u,s;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.hash(n),u=this.auctionWriter.bidAuction(t,r,i),e.next=4,u.estimateGasAndCollateral({from:this.conflux.defaultAccount});case 4:return s=e.sent,e.next=7,u.sendTransaction({from:this.conflux.defaultAccount,value:0,gas:c.big(s.gasUsed).times(1.1).toFixed(0),gasPrice:1,storageLimit:s.storageCollateralized}).confirmed();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)}))),function(e,t,n){return s.apply(this,arguments)})},{key:"finishAuction",value:(n=(0,i.default)(a.default.mark((function e(t,n){var i,r,u;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.hash(n),r=this.auctionWriter.finishAuction(t,i),e.next=4,r.estimateGasAndCollateral({from:this.conflux.defaultAccount});case 4:return u=e.sent,e.next=7,r.sendTransaction({from:this.conflux.defaultAccount,value:0,gas:c.big(u.gasUsed).times(1.1).toFixed(0),gasPrice:1,storageLimit:u.storageCollateralized}).confirmed();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)}))),function(e,t){return n.apply(this,arguments)})},{key:"closeAuction",value:(t=(0,i.default)(a.default.mark((function e(t,n){var i,r,u;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.hash(n),r=this.auctionWriter.closeAuction(t,i),e.next=4,r.estimateGasAndCollateral({from:this.conflux.defaultAccount});case 4:return u=e.sent,e.next=7,r.sendTransaction({from:this.conflux.defaultAccount,value:0,gas:c.big(u.gasUsed).times(1.1).toFixed(0),gasPrice:1,storageLimit:u.storageCollateralized}).confirmed();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)}))),function(e,n){return t.apply(this,arguments)})},{key:"awaitWraper",value:function(e){return e.then((function(e){return e})).catch((function(e){return e}))}}]),e}();t.default=f},FHO2:function(e){e.exports=[{inputs:[{internalType:"address",name:"_usdtToken",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"address",name:"seller",type:"address"},{indexed:!0,internalType:"address",name:"bidder",type:"address"},{indexed:!0,internalType:"address",name:"tokenAddress",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"price",type:"uint256"},{indexed:!1,internalType:"uint256",name:"expiresAt",type:"uint256"}],name:"AuctionBidded",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!0,internalType:"address",name:"seller",type:"address"},{indexed:!0,internalType:"address",name:"tokenAddress",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"price",type:"uint256"},{indexed:!1,internalType:"uint256",name:"expiresAt",type:"uint256"},{indexed:!1,internalType:"bytes",name:"fingerprint",type:"bytes"}],name:"AuctionClosed",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!0,internalType:"address",name:"seller",type:"address"},{indexed:!0,internalType:"address",name:"tokenAddress",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"price",type:"uint256"},{indexed:!1,internalType:"uint256",name:"expiresAt",type:"uint256"},{indexed:!1,internalType:"bytes",name:"fingerprint",type:"bytes"}],name:"AuctionCreated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"address",name:"seller",type:"address"},{indexed:!0,internalType:"address",name:"bidder",type:"address"},{indexed:!0,internalType:"address",name:"tokenAddress",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"price",type:"uint256"},{indexed:!1,internalType:"uint256",name:"expiresAt",type:"uint256"}],name:"AuctionFilled",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"_ownerCutPerMillion",type:"uint256"}],name:"ChangedOwnerCutPerMillion",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Paused",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Unpaused",type:"event"},{inputs:[],name:"ERC721Composable_ValidateFingerprint",outputs:[{internalType:"bytes4",name:"",type:"bytes4"}],stateMutability:"view",type:"function"},{inputs:[],name:"ERC721_Interface",outputs:[{internalType:"bytes4",name:"",type:"bytes4"}],stateMutability:"view",type:"function"},{inputs:[],name:"ERC721_Received",outputs:[{internalType:"bytes4",name:"",type:"bytes4"}],stateMutability:"view",type:"function"},{inputs:[],name:"MAX_BID_DURATION",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"MIN_BID_DURATION",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"ONE_MILLION",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"}],name:"auctionId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"globalAuctionId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"ownerCutPerMillion",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"usdtToken",outputs:[{internalType:"contract ERC20Interface",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"},{internalType:"address",name:"_who",type:"address"}],name:"getUserCreateAuctionCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"},{internalType:"address",name:"_who",type:"address"},{internalType:"uint256",name:"_id",type:"uint256"}],name:"getUserCreateAuctionById",outputs:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"address",name:"seller",type:"address"},{internalType:"address",name:"bidder",type:"address"},{internalType:"address",name:"tokenAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"price",type:"uint256"},{internalType:"enum TrustAuction.AuctionStatus",name:"status",type:"uint8"},{internalType:"uint256",name:"expiresAt",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"},{internalType:"address",name:"_who",type:"address"}],name:"getUserBiddedAuctionCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"},{internalType:"address",name:"_who",type:"address"},{internalType:"uint256",name:"_id",type:"uint256"}],name:"getUserBiddedAuctionById",outputs:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"address",name:"seller",type:"address"},{internalType:"address",name:"bidder",type:"address"},{internalType:"address",name:"tokenAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"price",type:"uint256"},{internalType:"enum TrustAuction.AuctionStatus",name:"status",type:"uint8"},{internalType:"uint256",name:"expiresAt",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"},{internalType:"uint256",name:"_tokenId",type:"uint256"},{internalType:"uint256",name:"_price",type:"uint256"},{internalType:"uint256",name:"_duration",type:"uint256"}],name:"createAuction",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"},{internalType:"uint256",name:"_tokenId",type:"uint256"},{internalType:"uint256",name:"_price",type:"uint256"},{internalType:"uint256",name:"_duration",type:"uint256"},{internalType:"bytes",name:"_fingerprint",type:"bytes"}],name:"createAuction",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"},{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"getAuctionIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"}],name:"getAuctionCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"},{internalType:"uint256",name:"_index",type:"uint256"}],name:"getAuctionByIndex",outputs:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"address",name:"seller",type:"address"},{internalType:"address",name:"bidder",type:"address"},{internalType:"address",name:"tokenAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"price",type:"uint256"},{internalType:"enum TrustAuction.AuctionStatus",name:"status",type:"uint8"},{internalType:"uint256",name:"expiresAt",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"},{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"getAuctionByTokenId",outputs:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"address",name:"seller",type:"address"},{internalType:"address",name:"bidder",type:"address"},{internalType:"address",name:"tokenAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"price",type:"uint256"},{internalType:"enum TrustAuction.AuctionStatus",name:"status",type:"uint8"},{internalType:"uint256",name:"expiresAt",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"},{internalType:"uint256",name:"_auctionId",type:"uint256"}],name:"getAuctionByAuctionId",outputs:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"address",name:"seller",type:"address"},{internalType:"address",name:"bidder",type:"address"},{internalType:"address",name:"tokenAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"price",type:"uint256"},{internalType:"uint256",name:"expiresAt",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"},{internalType:"uint256",name:"_tokenId",type:"uint256"},{internalType:"uint256",name:"_price",type:"uint256"}],name:"bidAuction",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"},{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"finishAuction",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"},{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"closeAuction",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_ownerCutPerMillion",type:"uint256"}],name:"setOwnerCutPerMillion",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"},{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"getOwnerByTokenId",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"pause",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"unpause",outputs:[],stateMutability:"nonpayable",type:"function"}]},SzfC:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Web3AuctionService=void 0;var a=o(n("14Xm")),i=o(n("D3Ub")),r=o(n("iCc5")),u=o(n("V7oC")),s=o(n("meUc")),d=n("kB5k");function o(e){return e&&e.__esModule?e:{default:e}}var p=n("ewEw"),c=(n("jzF0").Conflux,n("LAvi")),l=n("FHO2"),y=t.Web3AuctionService=function(){function e(t,n,a){if((0,r.default)(this,e),this.web3=new s.default(window.detectProvider),this.auctionAddress=p[n][a].auction,""!=t)this.account=t;else{var i=this;this.web3.eth.getAccounts((function(e,t){i.account=t[0]}))}this.auctionWriter=new this.web3.eth.Contract(l,this.auctionAddress),this.auctionReader=new this.web3.eth.Contract(l,this.auctionAddress),this.defaultGasPrice=2e10}var t,n,o,y,f,m,h,T,A,x,w,v,b;return(0,u.default)(e,[{key:"getUserCreateAuctionCount",value:(b=(0,i.default)(a.default.mark((function e(t,n){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auctionReader.methods.getUserCreateAuctionCount(t,n).call();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e,t){return b.apply(this,arguments)})},{key:"getUserCreateAuctionById",value:(v=(0,i.default)(a.default.mark((function e(t,n,i){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auctionReader.methods.getUserCreateAuctionById(t,n,i).call();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e,t,n){return v.apply(this,arguments)})},{key:"getUserBiddedAuctionCount",value:(w=(0,i.default)(a.default.mark((function e(t,n){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auctionReader.methods.getUserBiddedAuctionCount(t,n).call();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e,t){return w.apply(this,arguments)})},{key:"getUserBiddedAuctionById",value:(x=(0,i.default)(a.default.mark((function e(t,n,i){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auctionReader.methods.getUserBiddedAuctionById(t,n,i).call();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e,t,n){return x.apply(this,arguments)})},{key:"getAuctionIdForTokenURI",value:(A=(0,i.default)(a.default.mark((function e(t,n){var i;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.hash(n),e.next=3,this.auctionReader.methods.auctionId(t,i).call();case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)}))),function(e,t){return A.apply(this,arguments)})},{key:"getAuctionIndex",value:(T=(0,i.default)(a.default.mark((function e(t,n){var i;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.hash(n),e.next=3,this.auctionReader.methods.getAuctionIndex(t,i).call();case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)}))),function(e,t){return T.apply(this,arguments)})},{key:"getAuctionCount",value:(h=(0,i.default)(a.default.mark((function e(t){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auctionReader.methods.getAuctionCount(t).call();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e){return h.apply(this,arguments)})},{key:"getAuctionByIndex",value:(m=(0,i.default)(a.default.mark((function e(t,n){return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auctionReader.methods.getAuctionByIndex(t,n).call();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e,t){return m.apply(this,arguments)})},{key:"getAuctionByDomain",value:(f=(0,i.default)(a.default.mark((function e(t,n){var i;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.hash(n),e.next=3,this.auctionReader.methods.getAuctionByTokenId(t,i).call();case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)}))),function(e,t){return f.apply(this,arguments)})},{key:"createAuction",value:(y=(0,i.default)(a.default.mark((function e(t,n,i,r,u){var s,o,p,l;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=c.hash(n),console.log(t),console.log(s),console.log(i/1),console.log(r),o=this.auctionWriter.methods.createAuction(t,s,new d.BigNumber(i),r),e.next=8,o.estimateGas({value:0,from:this.account,to:this.auctionAddress});case 8:return p=e.sent,l=this.defaultGasPrice,e.abrupt("return",o.send({from:this.account,gasPrice:l,gas:Math.round(1.1*p)},u));case 11:case"end":return e.stop()}}),e,this)}))),function(e,t,n,a,i){return y.apply(this,arguments)})},{key:"bidAuction",value:(o=(0,i.default)(a.default.mark((function e(t,n,i,r){var u,s,d,o;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=c.hash(n),s=this.auctionWriter.methods.bidAuction(t,u,i),e.next=4,s.estimateGas({value:0,from:this.account,to:this.auctionAddress});case 4:return d=e.sent,o=this.defaultGasPrice,e.abrupt("return",s.send({from:this.account,gasPrice:o,gas:Math.round(1.1*d)},r));case 7:case"end":return e.stop()}}),e,this)}))),function(e,t,n,a){return o.apply(this,arguments)})},{key:"finishAuction",value:(n=(0,i.default)(a.default.mark((function e(t,n,i){var r,u,s,d;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.hash(n),u=this.auctionWriter.methods.finishAuction(t,r),e.next=4,u.estimateGas({value:0,from:this.account,to:this.auctionAddress});case 4:return s=e.sent,d=this.defaultGasPrice,e.abrupt("return",u.send({from:this.account,gasPrice:d,gas:Math.round(1.2*s)},i));case 7:case"end":return e.stop()}}),e,this)}))),function(e,t,a){return n.apply(this,arguments)})},{key:"closeAuction",value:(t=(0,i.default)(a.default.mark((function e(t,n,i){var r,u,s,d;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.hash(n),u=this.auctionWriter.methods.closeAuction(t,r),e.next=4,u.estimateGas({value:0,from:this.account,to:this.auctionAddress});case 4:return s=e.sent,d=this.defaultGasPrice,e.abrupt("return",u.send({from:this.account,gasPrice:d,gas:Math.round(1.1*s)},i));case 7:case"end":return e.stop()}}),e,this)}))),function(e,n,a){return t.apply(this,arguments)})},{key:"awaitWraper",value:function(e){return e.then((function(e){return e})).catch((function(e){return e}))}}]),e}();t.default=y}}]);