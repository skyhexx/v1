(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0d94"],{"3Whw":function(t,n,e){},V2x7:function(t,n,e){"use strict";var a=e("3Whw");e.n(a).a},oSe1:function(t,n,e){"use strict";e.r(n);var a=e("sU+0"),o=e("ppSp");for(var s in o)"default"!==s&&function(t){e.d(n,t,(function(){return o[t]}))}(s);e("V2x7");var i=e("KHd+"),r=Object(i.a)(o.default,a.a,a.b,!1,null,"ddeaf034",null);r.options.__file="domains.vue",n.default=r.exports},ppSp:function(t,n,e){"use strict";e.r(n);var a=e("rWN6"),o=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(n,t,(function(){return a[t]}))}(s);n.default=o.a},rWN6:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,o,s,i,r,c,u,l,d=g(e("4d7F")),f=g(e("14Xm")),p=g(e("D3Ub")),h=g(e("0dc3")),m=g(e("YgiN")),v=g(e("uQfT"));function g(t){return t&&t.__esModule?t:{default:t}}n.default={data:function(){return{cns:null,bnb:null,eth:null,pageSize:10,defaultPage:1,domainsData:[],domains:[],subDomains:[],noDomain:!1,loading:null,domainBalance:0}},created:function(){console.log("domains"),console.log(this.isConflux),console.log(this.domainBalance)},mounted:(l=(0,p.default)(f.default.mark((function t(){var n;return f.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(this.isConflux),!(this.domainBalance>0)){t.next=4;break}return t.next=4,this.handleCurrentChange(this.defaultPage);case 4:n=this,this.$nextTick((0,p.default)(f.default.mark((function t(){return f.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.isConflux){t.next=6;break}return n.cns=new m.default,t.next=4,n.loadConfluxDomainCount();case 4:t.next=9;break;case 6:return n.tns=new v.default(n.web3Account,n.chainType),t.next=9,n.loadWeb3DomainCount();case 9:case"end":return t.stop()}}),t,this)}))));case 6:case"end":return t.stop()}}),t,this)}))),function(){return l.apply(this,arguments)}),computed:{hasDomain:function(){return this.domainsData.length>0},connectedAccount:function(){return this.$store.state.wallet.connectedAccount},web3Account:function(){return this.$store.state.web3.account},isConflux:function(){return this.$store.state.web3.walletType==h.default.CONFLUXPORTAL},chainType:function(){return this.$store.state.web3.chainType}},watch:{domainBalance:function(){this.handleCurrentChange(this.defaultPage)}},methods:{test:(u=(0,p.default)(f.default.mark((function t(){return f.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("-----test"),this.tns.setResolver("exchange.bnb","0xf9ddddc4fc86c246e67d07683474653883b3b88d",(function(t,n){console.log(n)})).then((function(t){console.log("mined")})).catch((function(t){console.log(t)})),console.log("-----test----end----");case 3:case"end":return t.stop()}}),t,this)}))),function(){return u.apply(this,arguments)}),load:(c=(0,p.default)(f.default.mark((function t(){return f.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.isConflux){t.next=6;break}return this.cns=new m.default,t.next=4,this.loadConfluxDomainCount();case 4:t.next=9;break;case 6:return this.tns=new v.default(this.web3Account,this.chainType),t.next=9,this.loadWeb3DomainCount();case 9:case"end":return t.stop()}}),t,this)}))),function(){return c.apply(this,arguments)}),handleCurrentChange:(r=(0,p.default)(f.default.mark((function t(n){var e,a;return f.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.domainBalance-(n-1)*this.pageSize-1,(a=this.domainBalance-n*this.pageSize)<0&&(a=0),this.isConflux?this.loadConfluxTokenURIByIndex(e,a):this.loadWeb3TokenURIByIndex(e,a);case 4:case"end":return t.stop()}}),t,this)}))),function(t){return r.apply(this,arguments)}),loadWeb3DomainCount:(i=(0,p.default)(f.default.mark((function t(){var n;return f.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.tns||this.load(),console.log("-----from bnb-------"),t.next=4,this.tns.balanceOf(this.web3Account);case 4:n=t.sent,console.log(n),this.domainBalance=n/1,this.domainBalance>0?this.noDomain=!1:this.noDomain=!0;case 8:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)}),loadWeb3TokenURIByIndex:(s=(0,p.default)(f.default.mark((function t(n,e){var a,o,s,i,r=this;return f.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(this.tns||this.load(),a=[],o=n;o>=e;o--)a.push(o);return console.log(a),this.openLoading(),s=this,i=a.map(function(){var t=(0,p.default)(f.default.mark((function t(n){var e,a,o,i;return f.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.tns.tokenOfOwnerByIndex(r.web3Account,n);case 2:return e=t.sent,t.next=5,s.tns.tokenURI(e);case 5:return a=t.sent,o={},2==(i=a.split(".")).length?(o.type=i[1].toUpperCase(),o.uri=i[0]+"."+i[1],o.tokenId=e.toString(),o.isSubDomain=!1,o.parent=i[1]):3==i.length&&(o.type=i[2].toUpperCase(),o.uri=i[0]+"."+i[1]+"."+i[2],o.tokenId=e.toString(),o.isSubDomain=!0,o.parent=i[1]+"."+i[2]),t.abrupt("return",o);case 10:case"end":return t.stop()}}),t,r)})));return function(n){return t.apply(this,arguments)}}()),t.next=9,d.default.all(i).then((function(t){s.domainsData=t,s.closeLoading()}));case 9:case"end":return t.stop()}}),t,this)}))),function(t,n){return s.apply(this,arguments)}),loadConfluxDomainCount:(o=(0,p.default)(f.default.mark((function t(){var n;return f.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.cns||this.load(),t.next=3,this.cns.balanceOf(this.connectedAccount);case 3:n=t.sent,this.domainBalance=n/1,this.domainBalance>0?this.noDomain=!1:this.noDomain=!0;case 6:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)}),loadConfluxTokenURIByIndex:(a=(0,p.default)(f.default.mark((function t(n,e){var a,o,s,i,r,c,u=this;return f.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.cns||this.load(),""!=this.connectedAccount){t.next=6;break}return a=this.$t("app.error"),o=this.$t("app.errorNoConnect"),this.$notify.error({title:a,message:o,duration:2e3,position:"bottom-right"}),t.abrupt("return");case 6:for(s=[],i=n;i>=e;i--)s.push(i);return console.log(s),this.openLoading(),r=this,c=s.map(function(){var t=(0,p.default)(f.default.mark((function t(n){var e,a,o,s;return f.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.cns.tokenOfOwnerByIndex(u.connectedAccount,n);case 2:return e=t.sent,t.next=5,r.cns.tokenURI(e);case 5:return a=t.sent,o={},2==(s=a.split(".")).length?(o.type=s[1].toUpperCase(),o.uri=s[0]+"."+s[1],o.tokenId=e.toString(),o.isSubDomain=!1,o.parent=s[1]):3==s.length&&(o.type=s[2].toUpperCase(),o.uri=s[0]+"."+s[1]+"."+s[2],o.tokenId=e.toString(),o.isSubDomain=!0,o.parent=s[1]+"."+s[2]),t.abrupt("return",o);case 10:case"end":return t.stop()}}),t,u)})));return function(n){return t.apply(this,arguments)}}()),t.next=14,d.default.all(c).then((function(t){r.domainsData=t,r.closeLoading()}));case 14:case"end":return t.stop()}}),t,this)}))),function(t,n){return a.apply(this,arguments)}),manageDomain:function(t){console.log(t),this.$router.push({path:"/domain/"+t})},openLoading:function(){var t=this.$t("app.loading");this.loading=this.$loading({lock:!0,text:t,spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});var n=this;setTimeout((function(){n.closeLoading()}),1e4)},closeLoading:function(){this.loading.close()},remove:function(t){console.log(t)},subTokenUri:function(t){return t.slice(0,10)+"..."+t.slice(-6)},doCopy:function(t){var n=this.$t("app.copySuccess");this.$copyText(t).then((function(t){this.$message({message:n,type:"success"})}),(function(t){console.log(t)}))},onCopy:function(){var t=this.$t("app.copySuccess");this.$message({message:t,type:"success"})},onSubmit:function(){this.$message("submit!")},onCancel:function(){this.$message({message:"cancel!",type:"warning"})}}}},"sU+0":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app-container"},[t.connectedAccount||t.web3Account?e("div",{staticClass:"my-domains"},[e("div",{staticClass:"left"},[e("div",{staticClass:"title"},[t._v(t._s(t.$t("app.myDomains")))]),t._v(" "),e("div",{staticClass:"total"})]),t._v(" "),e("div",{staticClass:"right"})]):t._e(),t._v(" "),t.hasDomain?e("div",[e("div",{staticClass:"title-row"},[e("div",{staticClass:"left"},[e("div",{staticClass:"token-uri"},[t._v(t._s(t.$t("auction.domain")))]),t._v(" "),e("div",{staticClass:"token-id"},[t._v(t._s(t.$t("auction.domain"))+" ID")])])]),t._v(" "),t._l(t.domainsData,(function(n,a){return e("div",{staticClass:"domains-row"},[e("div",{staticClass:"left"},[e("div",{staticClass:"token-uri"},[t._v(t._s(n.uri))]),t._v(" "),e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:n.tokenId,placement:"top"}},[e("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:n.tokenId,expression:"domain.tokenId",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],staticClass:"token-id"},[t._v(t._s(t.subTokenUri(n.tokenId))+" ")])])],1),t._v(" "),e("div",{staticClass:"right"},[e("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.manageDomain(n.uri)}}},[t._v(t._s(t.$t("app.managerDomain")))])],1)])})),t._v(" "),e("el-pagination",{attrs:{"hide-on-single-page":!0,background:"",layout:"prev, pager, next","page-size":t.pageSize,total:t.domainBalance},on:{"current-change":t.handleCurrentChange}})],2):t._e(),t._v(" "),t.noDomain?e("div",{staticClass:"error-domains-row"},[e("span",[e("svg-icon",{attrs:{"icon-class":"information"}})],1),t._v(" "),e("span",[t._v(t._s(t.$t("app.noDomainYet")))])]):t._e(),t._v(" "),t.connectedAccount||t.web3Account?t._e():e("div",{staticClass:"error-domains-row"},[e("span",[e("svg-icon",{attrs:{"icon-class":"information"}})],1),t._v(" "),e("span",[t._v(t._s(t.$t("app.errorNoConnect")))])])])},o=[];e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return o}))}}]);