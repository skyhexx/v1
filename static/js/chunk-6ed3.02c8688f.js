(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6ed3"],{"+kG1":function(t,e,s){"use strict";s.r(e);var n=s("q62x"),i=s("ys1c");for(var a in i)"default"!==a&&function(t){s.d(e,t,(function(){return i[t]}))}(a);s("Lqqj");var r=s("KHd+"),o=Object(r.a)(i.default,n.a,n.b,!1,null,"b5a85a08",null);o.options.__file="domain_detail.vue",e.default=o.exports},44:function(t,e){},45:function(t,e){},Ddmz:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=e.supportTld=["cfx"];e.default={supportTld:n}},EIFw:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n=p(s("EJiy")),i=p(s("14Xm")),a=p(s("D3Ub")),r=p(s("Kw5r")),o=p(s("0dc3")),l=s("Ddmz"),c=p(s("YgiN")),u=p(s("uQfT")),d=s("Iawr");function p(t){return t&&t.__esModule?t:{default:t}}var h=s("gBkH"),f=s("LAvi"),v=s("lOTI"),w=s("G3SR");r.default.directive("Alphabet",{inserted:function(t){var e=t.querySelector(".el-input__inner");e.onkeyup=function(t){e.value=e.value.replace(/[^A-Za-z0-9]/g,"")},e.onblur=function(t){e.value=e.value.replace(/[^A-Za-z0-9]/g,"")}}});var b,m,_,g,I,x,y,C,S,k,$,D,A,N,F,R,T,H,O,P,E,W={path:"",service:"ipfs",host:"ipfs.infura.io",port:5001,protocol:"https",timeout:2e4,verbose:!1};e.default={components:{FileUpload:h},data:function(){return{activeName:"first",walletAddressInput:[{name:"BTC",address:""},{name:"ETH",address:""},{name:"CFX",address:""},{name:"ZEC",address:""}],parserDomain:"",isSubDomain:!1,owner:"",resolver:"",newResolver:"",ipfsHash:"",newResolverInputShow:!1,newOwner:"",newOwnerInputShow:!1,newIPFSHash:"",newIPFSInputShow:!1,subLabel:"",parent:"",detail:"",domainsData:[],isInvalidDomain:!1,isInvalidTld:!1,isExist:!1,isNotExit:!1,isSaveAddress:!1,isSaveResolver:!1,isSaveOwner:!1,isSaveIPFSCID:!1,isAddSubDomain:!1,tld:"",files:[],fileList:[],buffer:"",ipfs:null,fileDatas:[],isUploaing:!1,cidHash:"",cns:null,tns:null,node:null}},mounted:(E=(0,a.default)(i.default.mark((function t(){var e,s;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.$route.path,this.parserDomain=e.split("/")[2],console.log(this.parserDomain.split(".")),3==this.parserDomain.split(".").length&&(this.isSubDomain=!0),this.checkDomainIsSupport(this.parserDomain),console.log(this.parserDomain),s=this,this.$nextTick((0,a.default)(i.default.mark((function t(){return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.isConflux?(s.cns=new c.default,s.getConfluxDomainInfo(s.parserDomain)):(s.tns=new u.default(this.web3Account,"BNB"),s.getWeb3DomainInfo(s.parserDomain)),s.ipfs=v(W);case 2:case"end":return t.stop()}}),t,this)}))));case 9:case"end":return t.stop()}}),t,this)}))),function(){return E.apply(this,arguments)}),computed:{connectedAccount:function(){return this.$store.state.wallet.connectedAccount},chainID:function(){return parseInt(this.$store.state.wallet.chainId)},web3Account:function(){return this.$store.state.web3.account},isConflux:function(){return this.$store.state.web3.walletType==o.default.CONFLUXPORTAL},chainType:function(){return this.$store.state.web3.chainType}},methods:{openWebsite:function(){window.open("https://ipfs.infura.io/ipfs/"+this.cidHash,"_blank")},uploadWebsite:(P=(0,a.default)(i.default.mark((function t(){var e,s,n=this;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(this.isUploaing=!0,e=function(){var t=n.files[s].file,e=n.files[s].name,i=new window.FileReader;i.readAsArrayBuffer(t),i.onloadend=function(){return n.convertToBuffer(e,i)}},s=0;s<this.files.length;s++)e();case 4:case"end":return t.stop()}}),t,this)}))),function(){return P.apply(this,arguments)}),convertToBuffer:(O=(0,a.default)(i.default.mark((function e(s,n){var a,r;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.from(n.result);case 2:if(a=e.sent,this.buffer=a,r={path:s,content:a},this.fileDatas.push(r),4!=this.fileDatas.length){e.next=9;break}return e.next=9,this.addFile(this.fileDatas);case 9:case"end":return e.stop()}}),e,this)}))),function(t,e){return O.apply(this,arguments)}),addFile:(H=(0,a.default)(i.default.mark((function t(e){var s,n,a,r=this;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),s={wrapWithDirectory:!1,progress:function(t){return console.log("received: "+t)}},n=this,t.next=5,this.ipfs.id();case 5:a=t.sent,console.log(a),this.ipfs.add(e,s).then((function(t){console.log(t),n.cidHash=t.cid.string,n.isUploaing=!1})).catch((function(t){console.log(t),n.isUploaing=!1,d.Notification.error(r,r.$t("app.error"),r.$t("app.errorUploading"),6e3)}));case 8:case"end":return t.stop()}}),t,this)}))),function(t){return H.apply(this,arguments)}),checkDomainIsSupport:function(t){var e=t.split(".").reverse();if(!(e.length>3))return 3==e.length?(this.parent=e[1]+"."+e[0],this.isSubDomain=!0):2==e.length?this.parent=e[0]:1==e.length&&(this.isConflux?(this.parent="cfx",this.parserDomain=e[0]+".cfx"):("BNB"==this.chainType&&(this.parent="bnb",this.parserDomain=e[0]+".bnb"),"ETH"==this.chainType&&(this.parent="defi",this.parserDomain=e[0]+".defi"))),e.length>1&&-1==l.supportTld.indexOf(e[0])?(this.isInvalidTld=!0,void(this.tld=e[0].toUpperCase())):void 0;this.isInvalidDomain=!0},getWeb3DomainInfo:(T=(0,a.default)(i.default.mark((function t(e){var s;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f.hash(e),t.next=3,this.tns.exists(e);case 3:if(s=t.sent,this.isExist=s,this.isNotExit=!s,!s){t.next=16;break}return t.next=9,this.tns.owner(e);case 9:return this.owner=t.sent,t.next=12,this.tns.resolver(e);case 12:this.resolver=t.sent,""==this.resolver||this.getWeb3IPFSHash(e),this.getWeb3Address(e),this.getWeb3SubTokenURI(e);case 16:case"end":return t.stop()}}),t,this)}))),function(t){return T.apply(this,arguments)}),getConfluxDomainInfo:(R=(0,a.default)(i.default.mark((function t(e){var s;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f.hash(e),t.next=3,this.cns.exists(e);case 3:if(s=t.sent,this.isExist=s,this.isNotExit=!s,!s){t.next=23;break}return t.next=9,this.cns.owner(e);case 9:return this.owner=t.sent,t.next=12,this.cns.resolver(e);case 12:if(this.resolver=t.sent,(0,n.default)(this.resolver)==(0,n.default)("string")){t.next=17;break}this.resolver="",t.next=19;break;case 17:return t.next=19,this.getConfluxIPFSHash(e);case 19:console.log(this.owner),console.log(this.resolver),this.getAddresses(e),this.getSubTokenURI(e);case 23:case"end":return t.stop()}}),t,this)}))),function(t){return R.apply(this,arguments)}),getWeb3Resolver:(F=(0,a.default)(i.default.mark((function t(e){return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f.hash(e),t.next=3,this.tns.resolver(e);case 3:this.resolver=t.sent;case 4:case"end":return t.stop()}}),t,this)}))),function(t){return F.apply(this,arguments)}),getResolver:(N=(0,a.default)(i.default.mark((function t(e){return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f.hash(e),t.next=3,this.cns.resolver(e);case 3:this.resolver=t.sent;case 4:case"end":return t.stop()}}),t,this)}))),function(t){return N.apply(this,arguments)}),getWeb3Owner:(A=(0,a.default)(i.default.mark((function t(e){return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.tns.owner(e);case 2:this.owner=t.sent;case 3:case"end":return t.stop()}}),t,this)}))),function(t){return A.apply(this,arguments)}),getOwner:(D=(0,a.default)(i.default.mark((function t(e){return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f.hash(e),t.next=3,this.cns.owner(e);case 3:this.owner=t.sent;case 4:case"end":return t.stop()}}),t,this)}))),function(t){return D.apply(this,arguments)}),getWeb3SubTokenURI:($=(0,a.default)(i.default.mark((function t(e){var s,n,a,r,o;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.tns.getSubTokenURI(this.parserDomain);case 2:for(s=t.sent,n=[],a=0;a<s.length;a++)r=f.hash(s[a]),(o={}).uri=s[a],o.tokenId=r,n.push(o);this.domainsData=n;case 6:case"end":return t.stop()}}),t,this)}))),function(t){return $.apply(this,arguments)}),getSubTokenURI:(k=(0,a.default)(i.default.mark((function t(e){var s,n,a,r,o;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.cns.getSubTokenURI(this.parserDomain);case 2:for(s=t.sent,n=[],a=0;a<s.length;a++)r=f.hash(s[a]),(o={}).uri=s[a],o.tokenId=r,n.push(o);this.domainsData=n,console.log(s);case 7:case"end":return t.stop()}}),t,this)}))),function(t){return k.apply(this,arguments)}),getWeb3IPFSHash:(S=(0,a.default)(i.default.mark((function t(e){var s;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.resolver){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this.tns.get(e,"ipfs.value");case 4:""!=(s=t.sent)&&(this.ipfsHash=s);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return S.apply(this,arguments)}),getConfluxIPFSHash:(C=(0,a.default)(i.default.mark((function t(e){var s;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.resolver){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this.cns.get(e,"ipfs.value");case 4:(s=t.sent).data||"object"!=(void 0===s?"undefined":(0,n.default)(s))&&(this.ipfsHash=s);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return C.apply(this,arguments)}),getWeb3Address:(y=(0,a.default)(i.default.mark((function t(e){var s,n,a,r;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.resolver){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this.tns.get(e,"wallet.ZEC.address");case 4:return""!=(s=t.sent)&&(this.walletAddressInput[3].address=s),t.next=8,this.tns.get(e,"wallet.BTC.address");case 8:return""!=(n=t.sent)&&(this.walletAddressInput[0].address=n),t.next=12,this.tns.get(e,"wallet.ETH.address");case 12:return""!=(a=t.sent)&&(this.walletAddressInput[1].address=a),t.next=16,this.tns.get(e,"wallet.CFX.address");case 16:return""!=(r=t.sent)&&(this.walletAddressInput[2].address=r),t.next=20,this.tns.get(e,"wallet.ZEC.address");case 20:""!=(s=t.sent)&&(this.walletAddressInput[3].address=s);case 22:case"end":return t.stop()}}),t,this)}))),function(t){return y.apply(this,arguments)}),getAddresses:(x=(0,a.default)(i.default.mark((function t(e){var s,a,r,o;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.resolver){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this.cns.get(e,"wallet.BTC.address");case 4:return s=t.sent,console.log("------------------"),console.log(s),s.data||("object"!=(void 0===s?"undefined":(0,n.default)(s))&&(this.walletAddressInput[0].address=s),console.log(void 0===s?"undefined":(0,n.default)(s))),t.next=10,this.cns.get(e,"wallet.ETH.address");case 10:return(a=t.sent).data||"object"!=(void 0===a?"undefined":(0,n.default)(a))&&(this.walletAddressInput[1].address=a),t.next=14,this.cns.get(e,"wallet.CFX.address");case 14:return(r=t.sent).data||"object"!=(void 0===r?"undefined":(0,n.default)(r))&&(this.walletAddressInput[2].address=r),t.next=18,this.cns.get(e,"wallet.ZEC.address");case 18:(o=t.sent).data||"object"!=(void 0===o?"undefined":(0,n.default)(o))&&(this.walletAddressInput[3].address=o);case 20:case"end":return t.stop()}}),t,this)}))),function(t){return x.apply(this,arguments)}),echo:function(){var t=this.$route.path;console.log(t);var e=t.split("/");console.log(e),console.log(this.parserDomain),console.log(this.isSubDomain);this.parserDomain.split(".")[1];console.log(l.supportTld)},changeNewResolver:(I=(0,a.default)(i.default.mark((function t(){var e;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=this.newResolver){t.next=3;break}return d.Notification.error(this,this.$t("app.error"),this.$t("app.inputRightResolver"),6e3),t.abrupt("return");case 3:if(console.log(this.newResolver),this.isSaveResolver=!0,d.Notification.info(this,this.$t("notify.setResolver"),this.$t("notify.sureWallet"),5e3),!this.isConflux){t.next=14;break}return t.next=9,this.cns.setResolver(this.parserDomain,this.newResolver);case 9:this.getResolver(this.parserDomain),d.Notification.success(this,this.$t("notify.success"),this.$t("notify.setResolverSuccess"),6e3),this.isSaveResolver=!1,t.next=16;break;case 14:e=this,this.tns.setResolver(this.parserDomain,this.newResolver,(function(t,e){})).then((function(t){d.Notification.success(e,e.$t("notify.success"),e.$t("notify.setResolverSuccess"),6e3),e.getWeb3Resolver(e.parserDomain),e.isSaveResolver=!1})).catch((function(t){console.log(t)}));case 16:case"end":return t.stop()}}),t,this)}))),function(){return I.apply(this,arguments)}),saveChange:(g=(0,a.default)(i.default.mark((function t(){var e,s,n,a,r,o,l,c;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.walletAddressInput.length,s=0;case 2:if(!(s<e)){t.next=12;break}if(""==this.walletAddressInput[s].address){t.next=9;break}if(n=null,"CFX"==this.walletAddressInput[s].name?(a="0x1"==this.walletAddressInput[s].address.substr(0,3),n=w.validate(this.walletAddressInput[s].address,"ETH")&&a):n=w.validate(this.walletAddressInput[s].address,this.walletAddressInput[s].name),n){t.next=9;break}return"CFX"==this.walletAddressInput[s].name?d.Notification.error(this,"CFX"+this.$t("app.addressError"),this.$t("app.checkAddress"),3e3):d.Notification.error(this,this.walletAddressInput[s].name+this.$t("app.addressError"),this.$t("app.checkAddress"),3e3),t.abrupt("return");case 9:s++,t.next=2;break;case 12:if(this.resolver){t.next=15;break}return d.Notification.error(this,this.$t("app.error"),this.$t("notify.setResolverFirst"),6e3),t.abrupt("return");case 15:for(r=[],o=[],l=!1,s=0;s<this.walletAddressInput.length;s++)"BTC"==this.walletAddressInput[s].name&&this.walletAddressInput[s].address&&(r.push("wallet.BTC.address"),o.push(this.walletAddressInput[s].address)),"ETH"==this.walletAddressInput[s].name&&this.walletAddressInput[s].address&&(r.push("wallet.ETH.address"),o.push(this.walletAddressInput[s].address)),"CFX"==this.walletAddressInput[s].name&&this.walletAddressInput[s].address&&(r.push("wallet.CFX.address"),o.push(this.walletAddressInput[s].address)),"ZEC"==this.walletAddressInput[s].name&&this.walletAddressInput[s].address&&(r.push("wallet.ZEC.address"),o.push(this.walletAddressInput[s].address)),l=l||""!=this.walletAddressInput[s].address;if(l){t.next=22;break}return d.Notification.error(this,this.$t("app.error"),this.$t("app.inputRightAddress"),6e3),t.abrupt("return");case 22:if(this.isSaveAddress=!0,d.Notification.info(this,this.$t("notify.addWalletAddress"),this.$t("notify.sureWallet"),5e3),c=this,!this.isConflux){t.next=33;break}return t.next=28,this.cns.setMulti(this.parserDomain,r,o);case 28:this.getAddresses(this.parserDomain),d.Notification.success(this,this.$t("notify.success"),this.$t("notify.addWalletAddressSuccess"),5e3),this.isSaveAddress=!1,t.next=34;break;case 33:this.tns.setMulti(this.parserDomain,r,o,(function(t,e){console.log(e)})).then((function(t){d.Notification.success(c,c.$t("notify.success"),c.$t("notify.addWalletAddressSuccess"),6e3),c.isSaveAddress=!1})).catch((function(t){console.log(t)}));case 34:case"end":return t.stop()}}),t,this)}))),function(){return g.apply(this,arguments)}),changeNewOwner:(_=(0,a.default)(i.default.mark((function t(){var e;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=this.newOwner){t.next=3;break}return d.Notification.error(this,this.$t("app.error"),this.$t("app.inputRightOwner"),6e3),t.abrupt("return");case 3:if(console.log(this.newOwner),this.isSaveOwner=!0,d.Notification.info(this,this.$t("notify.setOwner"),this.$t("notify.sureWallet"),5e3),!this.isConflux){t.next=14;break}return t.next=9,this.cns.setOwner(this.newOwner,this.parserDomain);case 9:this.getOwner(this.parserDomain),d.Notification.success(this,this.$t("notify.success"),this.$t("notify.setOwnerSuccess"),6e3),this.isSaveOwner=!1,t.next=16;break;case 14:e=this,this.tns.setOwner(this.newOwner,this.parserDomain,(function(t,e){console.log(e)})).then((function(t){d.Notification.success(e,e.$t("notify.success"),e.$t("notify.setOwnerSuccess"),6e3),e.getWeb3Owner(e.parserDomain),e.isSaveOwner=!1})).catch((function(t){console.log(t)}));case 16:case"end":return t.stop()}}),t,this)}))),function(){return _.apply(this,arguments)}),changeNewIPFS:(m=(0,a.default)(i.default.mark((function t(){var e;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.resolver){t.next=3;break}return d.Notification.error(this,this.$t("app.error"),this.$t("notify.setResolverFirst"),6e3),t.abrupt("return");case 3:if(""!=this.newIPFSHash){t.next=6;break}return d.Notification.error(this,this.$t("app.error"),this.$t("app.typeNewIpfsHash"),6e3),t.abrupt("return");case 6:if(46===this.newIPFSHash.length&&this.newIPFSHash.startsWith("Qm")){t.next=9;break}return d.Notification.error(this,this.$t("app.error"),this.$t("app.ipfsHashInvalid"),6e3),t.abrupt("return");case 9:if(console.log(this.newIPFSHash),this.isSaveIPFSCID=!0,d.Notification.info(this,this.$t("notify.setIPFSHash"),this.$t("notify.sureWallet"),5e3),!this.isConflux){t.next=20;break}return t.next=15,this.cns.set(this.parserDomain,"ipfs.value",this.newIPFSHash);case 15:this.getConfluxIPFSHash(this.parserDomain),d.Notification.success(this,this.$t("notify.success"),this.$t("notify.setIPFSHashSuccess"),6e3),this.isSaveIPFSCID=!1,t.next=22;break;case 20:e=this,this.tns.set(this.parserDomain,"ipfs.value",this.newIPFSHash,(function(t,e){console.log(e)})).then((function(t){d.Notification.success(e,e.$t("notify.success"),e.$t("notify.setIPFSHashSuccess"),6e3),e.getWeb3IPFSHash(e.parserDomain),e.isSaveIPFSCID=!1})).catch((function(t){console.log(t)}));case 22:d.Notification.success(this,this.$t("notify.success"),this.$t("notify.setIPFSHashSuccess"),6e3);case 23:case"end":return t.stop()}}),t,this)}))),function(){return m.apply(this,arguments)}),addSubDomain:(b=(0,a.default)(i.default.mark((function t(){var e,s;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=this.subLabel){t.next=3;break}return d.Notification.error(this,this.$t("app.error"),this.$t("app.typeANewName"),6e3),t.abrupt("return");case 3:if(e=this.subLabel.toLowerCase(),console.log(e),this.isAddSubDomain=!0,d.Notification.info(this,this.$t("notify.addSubDomain"),this.$t("notify.sureWallet"),5e3),!this.isConflux){t.next=15;break}return t.next=10,this.cns.mintSubURI(this.owner,this.parserDomain,e);case 10:this.getSubTokenURI(this.parserDomain),d.Notification.success(this,this.$t("notify.success"),this.$t("notify.addSubDomainSuccess"),6e3),this.isAddSubDomain=!1,t.next=17;break;case 15:s=this,this.tns.mintSubURI(this.owner,this.parserDomain,e,(function(t,e){console.log(e)})).then((function(t){d.Notification.success(s,s.$t("notify.success"),s.$t("notify.addSubDomainSuccess"),6e3),s.getWeb3SubTokenURI(s.parserDomain),s.isAddSubDomain=!1})).catch((function(t){console.log(t)}));case 17:case"end":return t.stop()}}),t,this)}))),function(){return b.apply(this,arguments)}),manageDomain:function(t){console.log(t);var e=this.$router.resolve({path:"/domain/"+t});window.open(e.href,"_blank")},subTokenUri:function(t){return t.slice(0,10)+"..."+t.slice(-6)},doCopy:function(t){this.$copyText(t).then((function(t){this.$message({message:"复制成功",type:"success"})}),(function(t){console.log(t)}))},onCopy:function(){this.$message({message:"复制成功",type:"success"})},onSubmit:function(){this.$message("submit!")},onCancel:function(){this.$message({message:"cancel!",type:"warning"})}}}}).call(this,s("tjlA").Buffer)},Iawr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Notification=void 0;var n=a(s("iCc5")),i=a(s("V7oC"));function a(t){return t&&t.__esModule?t:{default:t}}var r=e.Notification=function(){function t(){(0,n.default)(this,t)}return(0,i.default)(t,null,[{key:"notify",value:function(t,e,s,n,i){t.$notify({title:e,message:s,type:n,duration:i})}},{key:"info",value:function(t,e,s,n){t.$notify.info({title:e,message:s,duration:n})}},{key:"success",value:function(t,e,s,n){t.$notify({title:e,message:s,type:"success",duration:n})}},{key:"error",value:function(t,e,s,n){t.$notify.error({title:e,message:s,duration:n})}}]),t}();e.default=r},Lqqj:function(t,e,s){"use strict";var n=s("cjCQ");s.n(n).a},cjCQ:function(t,e,s){},q62x:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-container"},[t.isExist?s("div",{staticClass:"my-domains"},[s("div",{staticClass:"left"},[s("div",{staticClass:"title",on:{click:function(e){t.echo()}}},[t._v(t._s(t.parserDomain))]),t._v(" "),s("div",{staticClass:"total"})]),t._v(" "),s("div",{staticClass:"right"})]):t._e(),t._v(" "),t.isExist?s("div",[s("div",{staticClass:"domains-tabbar"},[s("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[s("el-tab-pane",{attrs:{label:t.$t("app.resolver"),name:"first"}},[s("div",{staticClass:"resolver"},[s("div",{staticClass:"title"},[t._v("Resolver")]),t._v(" "),s("div",{staticClass:"address",on:{click:function(e){t.newResolverInputShow=!t.newResolverInputShow}}},[t.resolver?t._e():s("span",[t._v(t._s(t.$t("app.resolverIsNotSet")))]),t._v(" "),t.resolver?s("span",[t._v(t._s(t.resolver))]):t._e()]),t._v(" "),t.newResolverInputShow?s("div",{staticStyle:{"margin-top":"20px"}},[s("el-input",{attrs:{placeholder:t.$t("app.inputNewResolerAddress")},model:{value:t.newResolver,callback:function(e){t.newResolver=e},expression:"newResolver"}},[s("el-button",{attrs:{slot:"append",loading:t.isSaveResolver,disabled:t.isSaveResolver,type:"primary"},on:{click:function(e){t.changeNewResolver()}},slot:"append"},[t._v(t._s(t.$t("button.sure")))])],1)],1):t._e()]),t._v(" "),s("div",{staticClass:"add-address"},[s("div",{staticClass:"title"},[t._v(t._s(t.$t("app.addCryptoAddress")))]),t._v(" "),s("div",{staticClass:"subtitle"},[t._v(t._s(t.$t("app.addYourCryptoAddressToDomain")))]),t._v(" "),s("div",{staticClass:"input-address"},[s("div",{staticClass:"row"},[s("div",{staticClass:"left"},[t._v(t._s(t.$t("app.currency")))]),t._v(" "),s("div",{staticClass:"right"},[t._v(t._s(t.$t("app.address")))])]),t._v(" "),t._l(t.walletAddressInput,(function(e){return s("div",{staticClass:"row"},[s("div",{staticClass:"left"},[t._v(t._s(e.name))]),t._v(" "),s("div",{staticClass:"right"},[s("el-input",{attrs:{placeholder:t.$t("app.enterYourWalletAddress")},model:{value:e.address,callback:function(s){t.$set(e,"address",s)},expression:"item.address"}})],1)])})),t._v(" "),s("div",{staticClass:"center"},[s("el-button",{attrs:{type:"primary",loading:t.isSaveAddress,disabled:t.isSaveAddress},on:{click:function(e){t.saveChange()}}},[t._v(t._s(t.$t("app.saveChange")))])],1)],2)])]),t._v(" "),s("el-tab-pane",{attrs:{label:t.$t("app.manage"),name:"second"}},[s("div",{staticClass:"resolver"},[s("div",{staticClass:"title"},[t._v("Owner")]),t._v(" "),s("div",{staticClass:"address",on:{click:function(e){t.newOwnerInputShow=!t.newOwnerInputShow}}},[t._v(t._s(t.owner)+" ")]),t._v(" "),t.newOwnerInputShow?s("div",{staticStyle:{"margin-top":"20px"}},[s("el-input",{attrs:{placeholder:t.$t("app.inputRightOwner")},model:{value:t.newOwner,callback:function(e){t.newOwner=e},expression:"newOwner"}},[s("el-button",{attrs:{slot:"append",loading:t.isSaveOwner,disabled:t.isSaveOwner,type:"primary"},on:{click:function(e){t.changeNewOwner()}},slot:"append"},[t._v(t._s(t.$t("button.sure")))])],1),t._v(" "),s("div",{staticClass:"warning"},[t._v(t._s(t.$t("app.warnChangeOwner")))])],1):t._e()]),t._v(" "),s("div",{staticClass:"mint-subdomain"},[s("div",{staticClass:"title"},[t._v(t._s(t.$t("app.addSubDomain")))]),t._v(" "),s("div",{staticClass:"subtitle"},[t._v(t._s(t.$t("app.addSubDomainInfo")))]),t._v(" "),s("div",{staticClass:"subtitle"},[s("div",{staticClass:"row"},[s("div",{staticClass:"tips"},[t._v(t._s(t.$t("app.subLabelTips")))])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"left"},[t._v(t._s(t.$t("app.subdomainName")))]),t._v(" "),s("div",{staticClass:"right"},[s("el-input",{directives:[{name:"Alphabet",rawName:"v-Alphabet"}],attrs:{disabled:t.isSubDomain,placeholder:t.$t("app.typeANewName")},model:{value:t.subLabel,callback:function(e){t.subLabel=e},expression:"subLabel"}})],1)]),t._v(" "),s("div",{staticClass:"center"},[s("el-button",{attrs:{disabled:t.isSubDomain||t.isAddSubDomain,loading:t.isAddSubDomain,type:"primary"},on:{click:function(e){t.addSubDomain()}}},[t._v(t._s(t.$t("app.addSubDomain")))])],1)]),t._v(" "),t.domainsData.length>0?s("div",{staticClass:"subdomain-list"},[s("div",{staticClass:"title-row"},[s("div",{staticClass:"left"},[s("div",{staticClass:"token-uri"},[t._v(t._s(t.$t("app.subDomain")))]),t._v(" "),s("div",{staticClass:"token-id"},[t._v(t._s(t.$t("app.subTokenId")))])])]),t._v(" "),t._l(t.domainsData,(function(e,n){return s("div",{staticClass:"domains-row"},[s("div",{staticClass:"left"},[s("div",{staticClass:"token-uri"},[t._v(t._s(e.uri))]),t._v(" "),s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.tokenId,placement:"top"}},[s("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.tokenId,expression:"domain.tokenId",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],staticClass:"token-id"},[t._v(t._s(t.subTokenUri(e.tokenId))+" ")])])],1),t._v(" "),s("div",{staticClass:"right"},[s("el-dropdown",[s("span",{staticClass:"el-dropdown-link"},[s("el-button",{attrs:{type:"primary",plain:""},on:{click:function(s){t.manageDomain(e.uri)}}},[t._v(t._s(t.$t("app.managerDomain")))])],1),t._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"})],1)],1)])}))],2):t._e()])]),t._v(" "),s("el-tab-pane",{attrs:{label:t.$t("app.website"),name:"third"}},[s("div",{staticClass:"resolver"},[s("div",{staticClass:"title"},[t._v("IPFS CID")]),t._v(" "),s("div",{staticClass:"address",on:{click:function(e){t.newIPFSInputShow=!t.newIPFSInputShow}}},[t.ipfsHash?t._e():s("span",[t._v(t._s(t.$t("app.ipfsHashIsNotSet")))]),t._v(" "),t.ipfsHash?s("span",[t._v(t._s(t.ipfsHash))]):t._e()]),t._v(" "),t.newIPFSInputShow?s("div",{staticStyle:{"margin-top":"20px"}},[s("el-input",{attrs:{placeholder:t.$t("app.typeNewIpfsHash")},model:{value:t.newIPFSHash,callback:function(e){t.newIPFSHash=e},expression:"newIPFSHash"}},[s("el-button",{attrs:{slot:"append",loading:t.isSaveIPFSCID,disabled:t.isSaveIPFSCID,type:"primary"},on:{click:function(e){t.changeNewIPFS()}},slot:"append"},[t._v(t._s(t.$t("button.sure")))])],1)],1):t._e()]),t._v(" "),s("div",{staticClass:"upload",attrs:{id:"select_frame"}},[s("div",{staticClass:"title"},[t._v(t._s(t.$t("app.uploadFileToIPFS")))]),t._v(" "),s("div",{staticClass:"ipfs-upload-drag select-container"},[s("div",{staticClass:"upload"},[t.files.length?s("ul",t._l(t.files,(function(e,n){return s("li",{key:e.id},[s("span",[t._v(t._s(e.name))]),t._v(" -\n                      "),s("span",[t._v(t._s(e.size)+" bytes")]),t._v(" -\n                      "),e.error?s("span",[t._v(t._s(e.error))]):e.success?s("span",[t._v("success")]):e.active?s("span",[t._v("active")]):s("span")])}))):s("div",[s("div",[s("div",{staticClass:"text-center"},[s("h4",[t._v(t._s(t.$t("app.dragFileHere"))),s("br"),s("br"),t._v(t._s(t.$t("app.or")))]),t._v(" "),s("label",{staticClass:"btn btn-lg btn-primary",staticStyle:{cursor:"pointer"},attrs:{for:"file"}},[t._v(t._s(t.$t("app.selectFile")))])])])]),t._v(" "),s("div",{staticClass:"ipfs-upload-btn"},[s("file-upload",{ref:"upload",staticClass:"btn btn-primary",attrs:{"post-action":"/upload/post",multiple:!0,drop:!0,"drop-directory":!0,multiple:"",webkitdirectory:"",mozdirectory:"true",directory:""},model:{value:t.files,callback:function(e){t.files=e},expression:"files"}},[s("i",{staticClass:"fa fa-plus"})])],1)])]),t._v(" "),s("div",{staticClass:"center"},[s("br"),t._v(" "),s("el-button",{attrs:{type:"primary",loading:t.isUploaing},on:{click:function(e){t.uploadWebsite()}}},[t._v(t._s(t.$t("app.confirmUpload")))]),t._v(" "),s("br"),s("br")],1),t._v(" "),""!=t.cidHash?s("div",{staticClass:"center"},[s("br"),t._v(" "),s("div",{staticClass:"cid-hash"},[t._v(t._s(t.$t("app.yourIPFSCid"))+": "),s("span",{staticStyle:{color:"#2CD370"}},[t._v(t._s(t.cidHash))])]),t._v(" "),s("a",{on:{click:function(e){t.openWebsite()}}},[s("div",{staticClass:"cid-preview"},[t._v(t._s(t.$t("app.clickAndView")))])]),t._v(" "),s("br"),s("br")]):t._e()])])],1)],1)]):t._e(),t._v(" "),t.isInvalidDomain?s("div",{staticClass:"error-domains-row"},[s("span",[s("svg-icon",{attrs:{"icon-class":"error"}})],1),t._v(" "),s("span",[t._v(t._s(t.$t("app.formatError")))])]):t._e(),t._v(" "),t.isInvalidTld?s("div",{staticClass:"error-domains-row"},[s("span",[s("svg-icon",{attrs:{"icon-class":"error"}})],1),t._v(" "),s("span",[t._v(t._s(t.tld)+" "+t._s(t.$t("app.isNotSupportTLD"))+" ")])]):t._e(),t._v(" "),!t.isNotExit||t.isInvalidTld||t.isInvalidDomain?t._e():s("div",{staticClass:"error-domains-row"},[s("span",[s("svg-icon",{attrs:{"icon-class":"error"}})],1),t._v(" "),s("span",[t._v(t._s(t.$t("app.theDomainIsNotRegistor")))])])])},i=[];s.d(e,"a",(function(){return n})),s.d(e,"b",(function(){return i}))},ys1c:function(t,e,s){"use strict";s.r(e);var n=s("EIFw"),i=s.n(n);for(var a in n)"default"!==a&&function(t){s.d(e,t,(function(){return n[t]}))}(a);e.default=i.a}}]);