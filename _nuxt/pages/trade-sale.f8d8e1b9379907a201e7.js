webpackJsonp([2],{"/ECn":function(e,t,a){"use strict";var r=a("vazq"),n=a("4Pqn"),s=!1;var i=function(e){s||a("miPo")},o=a("VU/8")(r.a,n.a,!1,i,"data-v-2a7bbe90",null);o.options.__file="components/v-grid.vue",t.a=o.exports},"037f":function(e,t,a){var r=a("1oyr"),n=a("p0bc"),s=a("wSKX"),i=n?function(e,t){return n(e,"toString",{configurable:!0,enumerable:!1,value:r(t),writable:!0})}:s;e.exports=i},"1Rsn":function(e,t,a){var r=a("HIG/");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,a("rjj0").default)("400fe51c",r,!1,{sourceMap:!1})},"1hYh":function(e,t,a){"use strict";var r=a("Dd8w"),n=a.n(r),s=a("w64q"),i=a("/ECn"),o=a("FeY4"),c=a("lrWY"),l=a("IUAt"),u=a("W/XQ"),d=a("i/vw"),f=a("NYxO"),m=a("M4fF"),p=a.n(m);t.a={beforeCreate:function(){this.$route.query.userId?s.a.set("username",this.$route.query.userId,3650):this.$route.query.userid?s.a.set("username",this.$route.query.userid,3650):s.a.get("username")||s.a.set("username","Za Warudo",3650)},components:{VGrid:i.a,VLoader:c.a,VRefresh:o.a,VTable:l.a,VFilters:u.a,VActions:d.a},created:function(){var e=this.$route.query.userId||this.userId;this.fetch({userIds:e,page:"index"})},computed:Object(f.mapState)({items:function(e){return p.a.pickBy(e.items.index,["forTrade",!0])},loading:function(e){return!e.pageState.index||!e.pageState.index.loaded},error:function(e){return e.pageState.index?e.pageState.index.error:null},errorMessage:function(e){return e.pageState.index?e.pageState.index.errorMessage:null},views:function(e){return e.views}}),data:function(){return{tableHeader:[{key:"",value:"",hide:this.$route.query.noimage},{key:"rank",value:"Rank"},{key:"average",value:"Avg. Rating"},{key:"name",value:"Name"},{key:"weight",value:"Weight"},{key:"playingtime",value:"Length"},{key:"bggbestplayers",value:"Best #Player"},{key:"comment",value:"Comment"}],userId:s.a.get("username")}},methods:n()({},Object(f.mapActions)({fetch:"items/query/fetch"}))}},"1oyr":function(e,t){e.exports=function(e){return function(){return e}}},"4Pqn":function(e,t,a){"use strict";var r=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header"},[t("b-container",{staticClass:"bv-example-row"},[t("b-row",{attrs:{"align-v":"center"}},this._l(this.filteredGames,function(e){return t("b-col",{key:e.id},[t("a",{attrs:{href:"https://boardgamegeek.com/boardgame/"+e.id}},[t("b-img",{attrs:{width:"100",rounded:"",src:e.imageUrl}})],1)])}))],1),this._v("\n  Item count: "+this._s(this.filteredGames.length)+"\n")],1)};r._withStripped=!0;var n={render:r,staticRenderFns:[]};t.a=n},"6oYb":function(e,t,a){"use strict";var r=a("w64q"),n=a("xg6U"),s=a("M4fF");t.a={computed:{filteredGames:function(){var e=void 0;if(e="latest-100-plays"===this.$route.name?this.games:Object(n.a)(this.games,this.$store.state.filters),s.keys(e).length){var t=s.orderBy(e,[this.sortBy,"average"],[this.asc?"asc":"desc","desc"]);if(t.length>0&&!s.get(t[0],"rank")&&s.get(t[t.length-1],"rank"))for(;!s.get(t[0],"rank");)t.push(t.shift());e=t}return e}},created:function(){var e=r.a.get("username");(e=e.split(",")).length>1&&e[e.length-1]&&(this.singleUser=!1),this.userId=e[0];var t=r.a.get("playername").split(",");this.playerNameMap={};for(var a=0;a<t.length;a++)this.playerNameMap[e[a]]=t[a]},data:function(){return{asc:s.get(this,"defaultAsc",!0),singleUser:!0,sortBy:this.defaultSort||"rank",userId:void 0}},filters:{number:function(e){return e?(e=parseFloat(e)).toFixed(2):""},priority:function(e){switch(e){case"1":return"Must have";case"2":return"Love to have";case"3":return"Like to have";case"4":return"Thinking about it";default:return"Don't buy this"}}},methods:{hasHeader:function(e,t){if(t){var a=s.find(this.headers,["key",e]);return!!a&&!a.hide}return s.find(this.headers,["key",e])},getOwners:function(e){var t=this,a="";return s.forEach(e,function(e,r){e.own&&(t.playerNameMap[r]?a+=t.playerNameMap[r]+"\n":a+=r+"\n")}),a},getRatingColor:function(e,t){return t?s.floor(e):s.ceil(e)},getUserRatings:function(e){var t=this,a="";return s.forEach(e,function(e,r){e.rating&&(t.playerNameMap[r]?a+=t.playerNameMap[r]+": "+e.rating+"\n":a+=r+": "+e.rating+"\n")}),a},getUserPlays:function(e){var t=this,a="";return s.forEach(e,function(e,r){e.numplays&&(t.playerNameMap[r]?a+=t.playerNameMap[r]+": "+e.numplays+"\n":a+=r+": "+e.numplays+"\n")}),a},getWeightColor:function(e){return e>4?"heavy":e>3.5?"medium-heavy":e>3?"medium":e>2.5?"medium-light":"light"},sort:function(e){e&&(e===this.sortBy?this.asc=!this.asc:(this.asc=!0,this.sortBy=e))}},props:{defaultAsc:{type:Boolean},defaultSort:{type:String},extFilters:{type:Object},games:{type:Object},headers:{type:Array}}}},"6qWE":function(e,t,a){"use strict";var r=a("fZjL"),n=a.n(r),s=a("Dd8w"),i=a.n(s),o=a("NYxO"),c=a("w64q"),l=a("V/Ux"),u=a("/jQ0");t.a={data:function(){return{mechOptions:this.getMechOptions(),popoverShow:!1}},computed:i()({},Object(o.mapState)(["filters"]),{_filters:function(){var e=this;return l.a.reduce(function(t,a){return t[a]=e[a],t},{})}}),watch:{_filters:function(e){this.filters=e,this.$store.commit("filters/set",e)}},methods:{getMechOptions:function(){return n()(u).map(function(e){return{text:u[e],value:u[e]}})},onClose:function(){this.popoverShow=!1}},props:{bestnum:{type:Number},maxtime:{type:Number},maxweight:{type:Number},minweight:{type:Number},mintime:{type:Number},mechShow:{default:function(){return[]},type:Array},mechHide:{default:function(){return[]},type:Array},ownedgames:{type:Boolean},playlessthan:{type:Number},recnum:{type:Number},showexp:{default:!!c.a.get("showexp"),type:Boolean},showOwned:{type:Boolean},supplayer:{type:Number}}}},"8++/":function(e,t){e.exports=function(e){return e!=e}},"8AZL":function(e,t){e.exports=function(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}},"8X3u":function(e,t,a){var r=a("sjBb");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,a("rjj0").default)("49d66dad",r,!1,{sourceMap:!1})},Aemx:function(e,t,a){var r=a("Hxdr"),n=a("faGK"),s=a("YkxI"),i=a("XoYR"),o=s(function(e){var t=r(e,i);return t.length&&t[0]===e[0]?n(t):[]});e.exports=o},AnPL:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".loader[data-v-69d78885]{border:16px solid #f3f3f3;border-top:16px solid #3498db;border-radius:50%;width:80px;width:5rem;height:80px;height:5rem;-webkit-animation:spin-data-v-69d78885 2s linear infinite;animation:spin-data-v-69d78885 2s linear infinite}@-webkit-keyframes spin-data-v-69d78885{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin-data-v-69d78885{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""])},FeY4:function(e,t,a){"use strict";var r=a("nzKf"),n=a("vMdB"),s=!1;var i=function(e){s||a("1Rsn")},o=a("VU/8")(r.a,n.a,!1,i,"data-v-5c0363d9",null);o.options.__file="components/v-refresh.vue",t.a=o.exports},Fp5l:function(e,t,a){var r=a("bGc4"),n=a("UnEC");e.exports=function(e){return n(e)&&r(e)}},G8ar:function(e,t,a){var r=a("cdq7"),n=a("8++/"),s=a("i6nN");e.exports=function(e,t,a){return t==t?s(e,t,a):r(e,n,a)}},GGbL:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{staticClass:"filters",attrs:{fluid:""}},[a("b-row",[a("b-col",[a("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],attrs:{variant:"outline-primary",size:"sm"}},[e._v("Toggle Filters")])],1)],1),a("b-collapse",{attrs:{visible:"",id:"collapse1"}},[a("b-form-group",{attrs:{horizontal:"","label-cols":2,label:"Players"}},[a("b-row",[a("b-col",{attrs:{sm:"auto"}},[a("b-form-input",{attrs:{type:"number",placeholder:"Best #",min:"1",size:"sm"},model:{value:e.filters.bestnum,callback:function(t){e.$set(e.filters,"bestnum",t)},expression:"filters.bestnum"}})],1),a("b-col",{attrs:{sm:"auto"}},[a("b-form-input",{attrs:{type:"number",placeholder:"Recommended #",min:"1",size:"sm"},model:{value:e.filters.recnum,callback:function(t){e.$set(e.filters,"recnum",t)},expression:"filters.recnum"}})],1),a("b-col",{attrs:{sm:"auto"}},[a("b-form-input",{attrs:{type:"number",placeholder:"Supported #",min:"1",size:"sm"},model:{value:e.filters.supplayer,callback:function(t){e.$set(e.filters,"supplayer",t)},expression:"filters.supplayer"}})],1)],1)],1),a("b-form-group",{attrs:{horizontal:"","label-cols":2,label:"Play Time"}},[a("b-row",[a("b-col",{attrs:{sm:"auto"}},[a("b-form-input",{attrs:{type:"number",placeholder:"Min Play Time",min:"0",step:"10",size:"sm"},model:{value:e.filters.mintime,callback:function(t){e.$set(e.filters,"mintime",t)},expression:"filters.mintime"}})],1),a("b-col",{attrs:{sm:"auto"}},[a("b-form-input",{attrs:{type:"number",placeholder:"Max Play Time",min:"0",step:"10",size:"sm"},model:{value:e.filters.maxtime,callback:function(t){e.$set(e.filters,"maxtime",t)},expression:"filters.maxtime"}})],1)],1)],1),a("b-form-group",{attrs:{horizontal:"","label-cols":2,label:"Weight"}},[a("b-row",[a("b-col",{attrs:{sm:"auto"}},[a("b-form-input",{attrs:{type:"number",placeholder:"Min Weight",min:"1",step:"0.1",size:"sm"},model:{value:e.filters.minweight,callback:function(t){e.$set(e.filters,"minweight",t)},expression:"filters.minweight"}})],1),a("b-col",{attrs:{sm:"auto"}},[a("b-form-input",{attrs:{type:"number",placeholder:"Max Weight",min:"1",step:"0.1",size:"sm"},model:{value:e.filters.maxweight,callback:function(t){e.$set(e.filters,"maxweight",t)},expression:"filters.maxweight"}})],1)],1)],1),a("b-form-group",{attrs:{horizontal:"","label-cols":2,label:"Plays"}},[a("b-row",[a("b-col",{attrs:{sm:"auto"}},[a("b-form-input",{attrs:{type:"number",placeholder:"Fewer Than",min:"0",size:"sm"},model:{value:e.filters.playlessthan,callback:function(t){e.$set(e.filters,"playlessthan",t)},expression:"filters.playlessthan"}})],1)],1)],1),a("b-row",[a("b-col",{attrs:{sm:"auto"}},[a("b-button",{attrs:{size:"sm",id:"mech-filter",variant:"primary"}},[a("i",{staticClass:"fa fa-gear",attrs:{"aria-hidden":"true"}}),e._v("\n          Filter By Mechanisms\n        ")]),a("b-popover",{attrs:{target:"mech-filter",placement:"bottom",triggers:"click",show:e.popoverShow,content:"Placement"},on:{"update:show":function(t){e.popoverShow=t}}},[a("b-tabs",[a("b-tab",{attrs:{title:"Show",active:""}},[a("b-form-group",[a("b-form-checkbox-group",{attrs:{name:"mechanisms",options:e.mechOptions},model:{value:e.filters.mechShow,callback:function(t){e.$set(e.filters,"mechShow",t)},expression:"filters.mechShow"}})],1)],1),a("b-tab",{attrs:{title:"Hide"}},[a("b-form-group",[a("b-form-checkbox-group",{attrs:{name:"mechanisms",options:e.mechOptions},model:{value:e.filters.mechHide,callback:function(t){e.$set(e.filters,"mechHide",t)},expression:"filters.mechHide"}})],1)],1)],1),a("b-btn",{attrs:{size:"sm",variant:"primary"},on:{click:e.onClose}},[e._v("Close")])],1)],1),e.showOwned?a("b-col",{attrs:{sm:"auto"}},[a("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:function(t){e.ownedgames=!e.ownedgames}}},[e.ownedgames?a("span",[a("i",{staticClass:"fa fa-users",attrs:{"aria-hidden":"true"}}),e._v("\n            Show All Games\n          ")]):e._e(),e.ownedgames?e._e():a("span",[a("i",{staticClass:"fa fa-user",attrs:{"aria-hidden":"true"}}),e._v("\n            Show Only Owned Games\n          ")])])],1):e._e()],1)],1)],1)};r._withStripped=!0;var n={render:r,staticRenderFns:[]};t.a=n},"HIG/":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"",""])},IUAt:function(e,t,a){"use strict";var r=a("6oYb"),n=a("vbYg"),s=!1;var i=function(e){s||a("lnnR")},o=a("VU/8")(r.a,n.a,!1,i,"data-v-a56dc668",null);o.options.__file="components/v-table.vue",t.a=o.exports},JUs9:function(e,t,a){var r=a("G8ar");e.exports=function(e,t){return!(null==e||!e.length)&&r(e,t,0)>-1}},M6Wl:function(e,t,a){var r=a("rpnb"),n=a("ktak");e.exports=function(e,t){return e&&r(e,t,n)}},OsjG:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("1hYh"),n=a("z8Xk"),s=!1;var i=function(e){s||a("jQjh")},o=a("VU/8")(r.a,n.a,!1,i,null,null);o.options.__file="pages/trade-sale.vue",t.default=o.exports},Q2wK:function(e,t,a){var r=a("8AZL"),n=Math.max;e.exports=function(e,t,a){return t=n(void 0===t?e.length-1:t,0),function(){for(var s=arguments,i=-1,o=n(s.length-t,0),c=Array(o);++i<o;)c[i]=s[t+i];i=-1;for(var l=Array(t+1);++i<t;)l[i]=s[i];return l[t]=a(c),r(e,this,l)}}},RMIX:function(e,t,a){var r=a("tH4e");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,a("rjj0").default)("1c60ff31",r,!1,{sourceMap:!1})},Rb4D:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".col[data-v-2a7bbe90]{margin-bottom:8px;margin-bottom:.5rem}",""])},RyI1:function(e,t,a){var r=a("lb6C"),n=a("eShC"),s=a("JyYQ"),i=a("NGEn");e.exports=function(e,t){return(i(e)?r:n)(e,s(t,3))}},"V/Ux":function(e,t,a){"use strict";t.a=["userId","bestnum","maxtime","maxweight","mintime","minweight","recnum","supplayer","playlessthan","showexp","ownedgames","mechShow","mechHide"]},VmPm:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".container{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}.filters .col-sm-auto{padding-bottom:4px;padding-bottom:.25rem}",""])},"W/XQ":function(e,t,a){"use strict";var r=a("6qWE"),n=a("GGbL"),s=!1;var i=function(e){s||a("8X3u")},o=a("VU/8")(r.a,n.a,!1,i,null,null);o.options.__file="components/v-filters.vue",t.a=o.exports},WCTY:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{staticClass:"actions",attrs:{fluid:""}},[a("b-row",[a("b-col",{attrs:{sm:"auto"}},[a("b-button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:e.getShareLink(),expression:"getShareLink()"}],attrs:{size:"sm",variant:"primary"},on:{click:function(t){e.$toast.success("Link copied to clipboard",{icon:"fa-clipboard"})}}},[a("i",{staticClass:"fa fa-share-alt",attrs:{"aria-hidden":"true"}}),e._v("\n        Share This List\n      ")])],1),a("b-col",{attrs:{sm:"auto"}},[a("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:function(t){e.getARandomGame()}}},[a("i",{staticClass:"fa fa-random",attrs:{"aria-hidden":"true"}}),e._v("\n        Get Me A Game\n      ")])],1),a("b-col",{attrs:{sm:"auto"}},[a("b-button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:e.getList(),expression:"getList()"}],attrs:{size:"sm",variant:"primary"},on:{click:function(t){e.$toast.success("List copied to clipboard",{icon:"fa-clipboard"})}}},[a("i",{staticClass:"fa fa-share-alt",attrs:{"aria-hidden":"true"}}),e._v("\n        Copy This List\n      ")])],1),a("b-col",{attrs:{sm:"auto"}},[a("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:function(t){e.toggleListView()}}},[e.views.listView?a("span",[a("i",{staticClass:"fa fa-th",attrs:{"aria-hidden":"true"}}),e._v("\n          Toggle Grid View\n        ")]):e._e(),e.views.listView?e._e():a("span",[a("i",{staticClass:"fa fa-list",attrs:{"aria-hidden":"true"}}),e._v("\n          Toggle Table View\n        ")])])],1)],1)],1)};r._withStripped=!0;var n={render:r,staticRenderFns:[]};t.a=n},WHce:function(e,t,a){var r=a("037f"),n=a("Zk5a")(r);e.exports=n},XoYR:function(e,t,a){var r=a("Fp5l");e.exports=function(e){return r(e)?e:[]}},YkxI:function(e,t,a){var r=a("wSKX"),n=a("Q2wK"),s=a("WHce");e.exports=function(e,t){return s(n(e,t,r),e+"")}},Zk5a:function(e,t){var a=800,r=16,n=Date.now;e.exports=function(e){var t=0,s=0;return function(){var i=n(),o=r-(i-s);if(s=i,o>0){if(++t>=a)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}},cdq7:function(e,t){e.exports=function(e,t,a,r){for(var n=e.length,s=a+(r?1:-1);r?s--:++s<n;)if(t(e[s],s,e))return s;return-1}},eShC:function(e,t,a){var r=a("v9aJ");e.exports=function(e,t){var a=[];return r(e,function(e,r,n){t(e,r,n)&&a.push(e)}),a}},faGK:function(e,t,a){var r=a("7YkW"),n=a("JUs9"),s=a("s96k"),i=a("Hxdr"),o=a("S7p9"),c=a("dmQx"),l=Math.min;e.exports=function(e,t,a){for(var u=a?s:n,d=e[0].length,f=e.length,m=f,p=Array(f),h=1/0,g=[];m--;){var v=e[m];m&&t&&(v=i(v,o(t))),h=l(v.length,h),p[m]=!a&&(t||d>=120&&v.length>=120)?new r(m&&v):void 0}v=e[0];var b=-1,y=p[0];e:for(;++b<d&&g.length<h;){var w=v[b],x=t?t(w):w;if(w=a||0!==w?w:0,!(y?c(y,x):u(g,x,a))){for(m=f;--m;){var _=p[m];if(!(_?c(_,x):u(e[m],x,a)))continue e}y&&y.push(x),g.push(w)}}return g}},"i/vw":function(e,t,a){"use strict";var r=a("nvAO"),n=a("WCTY"),s=!1;var i=function(e){s||a("RMIX")},o=a("VU/8")(r.a,n.a,!1,i,null,null);o.options.__file="components/v-actions.vue",t.a=o.exports},i6nN:function(e,t){e.exports=function(e,t,a){for(var r=a-1,n=e.length;++r<n;)if(e[r]===t)return r;return-1}},jQjh:function(e,t,a){var r=a("VmPm");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,a("rjj0").default)("d79aac9c",r,!1,{sourceMap:!1})},lnnR:function(e,t,a){var r=a("znWP");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,a("rjj0").default)("5091dcf4",r,!1,{sourceMap:!1})},lrWY:function(e,t,a){"use strict";var r=a("wtds"),n=a("qR6Y"),s=!1;var i=function(e){s||a("oLaH")},o=a("VU/8")(r.a,n.a,!1,i,"data-v-69d78885",null);o.options.__file="components/v-loader.vue",t.a=o.exports},miPo:function(e,t,a){var r=a("Rb4D");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,a("rjj0").default)("1cbddcca",r,!1,{sourceMap:!1})},nvAO:function(e,t,a){"use strict";var r=a("w64q"),n=a("xg6U"),s=a("V/Ux"),i=a("M4fF"),o=a.n(i);t.a={data:function(){return{getShareLink:function(){var e=window.origin+"?userId="+r.a.get("username")+"&",t=this.$store.state.filters,a=s.a.map(function(e){return t[e]?e+"="+t[e]:null}).filter(function(e){return!!e}).join("&");return encodeURI(""+e+a)},getList:function(){var e=Object(n.a)(this.$store.state.items[this.$route.name],this.$store.state.filters),t="";return o.a.forEach(e,function(e){t+=e.name+" - "+e.comment+"\n"}),t},getARandomGame:function(){var e=Object(n.a)(this.$store.state.items[this.$route.name],this.$store.state.filters),t=Math.floor(Math.random()*e.length);this.$toast.success("Go play "+e[t].name,{icon:"fa-play",action:{text:"Link",href:"https://boardgamegeek.com/boardgame/"+e[t].id}})},views:this.$store.state.views}},methods:{toggleListView:function(){this.$store.commit("views/toggleListView")}}}},nzKf:function(e,t,a){"use strict";t.a={methods:{refresh:function(){location.reload()}},props:{message:{type:String}}}},oLaH:function(e,t,a){var r=a("AnPL");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,a("rjj0").default)("25d3f2f4",r,!1,{sourceMap:!1})},pQJ6:function(e,t,a){var r=a("bGc4");e.exports=function(e,t){return function(a,n){if(null==a)return a;if(!r(a))return e(a,n);for(var s=a.length,i=t?s:-1,o=Object(a);(t?i--:++i<s)&&!1!==n(o[i],i,o););return a}}},qR6Y:function(e,t,a){"use strict";var r=function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"loader"})};r._withStripped=!0;var n={render:r,staticRenderFns:[]};t.a=n},rpnb:function(e,t,a){var r=a("tHks")();e.exports=r},s96k:function(e,t){e.exports=function(e,t,a){for(var r=-1,n=null==e?0:e.length;++r<n;)if(a(t,e[r]))return!0;return!1}},sjBb:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".filters.container-fluid{text-align:left;margin-bottom:8px;margin-bottom:.5rem}",""])},tH4e:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".actions{margin-bottom:16px;margin-bottom:1rem}",""])},tHks:function(e,t){e.exports=function(e){return function(t,a,r){for(var n=-1,s=Object(t),i=r(t),o=i.length;o--;){var c=i[e?o:++n];if(!1===a(s[c],c,s))break}return t}}},v9aJ:function(e,t,a){var r=a("M6Wl"),n=a("pQJ6")(r);e.exports=n},vMdB:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[e._v("\n    "+e._s(e.message)+"\n    "),a("button",{on:{click:function(t){e.refresh()}}},[e._v("Refresh")])])};r._withStripped=!0;var n={render:r,staticRenderFns:[]};t.a=n},vazq:function(e,t,a){"use strict";var r=a("xg6U"),n=a("M4fF"),s=a.n(n);t.a={computed:{filteredGames:function(){var e=Object(r.a)(this.games,this.$store.state.filters);if(e.length){var t=s.a.orderBy(e,[this.sortBy,"average"],[this.asc?"asc":"desc","desc"]);if(t.length>0&&!s.a.get(t[0],"rank")&&s.a.get(t[t.length-1],"rank"))for(;!s.a.get(t[0],"rank");)t.push(t.shift());e=t}return e}},props:{games:{type:Object}}}},vbYg:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.games?a("table",{staticClass:"table table-striped"},[a("thead",[a("tr",e._l(e.headers,function(t){return t.hide?e._e():a("th",{key:t.key,class:[t.key],attrs:{scope:"col"},on:{click:function(a){e.sort(t.key)}}},[a("span",[e._v("\n            "+e._s(t.value)+"\n            "),e.sortBy===t.key?a("i",{staticClass:"fa",class:{"fa-arrow-down":!e.asc,"fa-arrow-up":e.asc},attrs:{"aria-hidden":"true"}}):e._e()])])}))]),a("tbody",e._l(e.filteredGames,function(t){return a("tr",{key:t.id},[e.hasHeader("",!0)?a("td",[a("a",{attrs:{href:"https://boardgamegeek.com/boardgame/"+t.id}},[a("b-img",{attrs:{width:"75",src:t.imageUrl}})],1)]):e._e(),e.hasHeader("rank")?a("td",[e._v(e._s(t.rank))]):e._e(),e.hasHeader("average")?a("td",[a("span",{staticClass:"badge",class:["badge-"+e.getRatingColor(t.average,!0)]},[e._v(e._s(e._f("number")(t.average)))])]):e._e(),e.hasHeader("rating")&&e.singleUser?a("td",[t.users[e.userId].rating?a("span",{staticClass:"badge",class:["badge-"+e.getRatingColor(t.users[e.userId].rating)]},[e._v(e._s(t.users[e.userId].rating))]):e._e()]):e._e(),e.hasHeader("rating")&&!e.singleUser?a("td",[t.rating?a("span",{staticClass:"badge",class:["badge-"+e.getRatingColor(t.rating)]},[e._v("\n            "+e._s(e._f("number")(t.rating))+"\n          ")]):e._e(),t.rating?a("i",{directives:[{name:"b-popover",rawName:"v-b-popover.hover",value:e.getUserRatings(t.users),expression:"getUserRatings(item.users)",modifiers:{hover:!0}}],staticClass:"fa fa-users",attrs:{"aria-hidden":"true",title:"Individual Ratings"}}):e._e()]):e._e(),e.hasHeader("name")?a("td",{staticClass:"name"},[a("a",{attrs:{href:"https://boardgamegeek.com/boardgame/"+t.id}},[e._v(e._s(t.name))]),!e.singleUser&&e.getOwners(t.users)?a("i",{directives:[{name:"b-popover",rawName:"v-b-popover.hover",value:e.getOwners(t.users),expression:"getOwners(item.users)",modifiers:{hover:!0}}],staticClass:"fa fa-users",attrs:{"aria-hidden":"true",title:"Owners"}}):e._e()]):e._e(),e.hasHeader("date")?a("td",{staticClass:"date"},[a("a",[e._v(e._s(t.date))])]):e._e(),e.hasHeader("weight")?a("td",[a("span",{staticClass:"badge",class:["badge-"+e.getWeightColor(t.weight)]},[e._v(e._s(e._f("number")(t.weight)))])]):e._e(),e.hasHeader("playingtime")?a("td",[e._v(e._s(t.playingtime)+" mins")]):e._e(),e.hasHeader("bggbestplayers")?a("td",{staticClass:"best-player"},[e._v(e._s(t.bggbestplayers))]):e._e(),e.hasHeader("numplays")&&e.singleUser?a("td",{staticClass:"num-plays"},[e._v(e._s(t.users[e.userId].numplays))]):e._e(),e.hasHeader("numplays")&&!e.singleUser?a("td",{staticClass:"num-plays"},[e._v("\n          "+e._s(t.numplays)+"\n          "),t.numplays?a("i",{directives:[{name:"b-popover",rawName:"v-b-popover.hover",value:e.getUserPlays(t.users),expression:"getUserPlays(item.users)",modifiers:{hover:!0}}],staticClass:"fa fa-users",attrs:{"aria-hidden":"true",title:"Individual Plays"}}):e._e()]):e._e(),e.hasHeader("wishlistpriority")?a("td",{staticClass:"wishlist-priority"},[e._v("\n          "+e._s(e._f("priority")(t.wishlistpriority))+"\n        ")]):e._e(),e.hasHeader("comment")?a("td",{staticClass:"comment"},[e._v("\n          "+e._s(t.comment)+"\n        ")]):e._e(),e.hasHeader("mech")?a("td",{staticClass:"mech"},[a("ul",e._l(t.mech,function(t){return a("li",{key:t},[e._v(e._s(t))])}))]):e._e()])}))]):e._e(),e._v("\n  Item count: "+e._s(e.filteredGames.length)+"\n")])};r._withStripped=!0;var n={render:r,staticRenderFns:[]};t.a=n},w64q:function(e,t,a){"use strict";var r=a("Zrlr"),n=a.n(r),s=a("wxAW"),i=a.n(s),o=function(){function e(){n()(this,e)}return i()(e,null,[{key:"set",value:function(e,t,a){a||(a=3650);var r=new Date;r.setTime(r.getTime()+24*a*60*60*1e3);var n="expires="+r.toUTCString();document.cookie=e+"="+t+";"+n+";path=/"}},{key:"get",value:function(e){for(var t=e+"=",a=decodeURIComponent(document.cookie).split(";"),r=0;r<a.length;r++){for(var n=a[r];" "===n.charAt(0);)n=n.substring(1);if(0===n.indexOf(t))return n.substring(t.length,n.length)}return""}}]),e}();t.a=o},wtds:function(e,t,a){"use strict";t.a={}},xg6U:function(e,t,a){"use strict";t.a=function(e,t){var a=s.a.get("bestatleast"),r=s.a.get("showexp"),i=s.a.get("expmin");return o()(e,function(e){var s=!1;if("object"!==(void 0===t?"undefined":n()(t))&&(t={}),a&&"false"!==a){var o=l()(e,"bggbestplayers","").split(",").pop();o&&(s=+o>=t.bestnum)}else s=l()(e,"bggbestplayers","").split(",").includes(t.bestnum);var c=!0;t.mechShow&&t.mechShow.length>0&&(c=d()(t.mechShow,e.mech).length===t.mechShow.length),t.mechHide&&t.mechHide.length>0&&c&&(c=!d()(t.mechHide,e.mech).length>0);var u=(!t.bestnum||s)&&(!t.recnum||l()(e,"bggrecplayers","").split(",").includes(t.recnum))&&(!t.mintime||e.playingtime>=t.mintime)&&(!t.maxtime||e.playingtime<=t.maxtime)&&(!t.supplayer||e.minplayer<=t.supplayer&&e.maxplayer>=t.supplayer)&&(!t.maxweight||e.weight<=t.maxweight)&&(!t.minweight||e.weight>=t.minweight)&&("false"===r&&"e"!==e.type||"true"===r)&&("true"===r&&"e"===e.type&&e.average>=i||"e"!==e.type)&&(!t.playlessthan||e.numplays<=t.playlessthan)&&("boolean"!=typeof t.ownedgames||!t.ownedgames||e.own)&&c;return u})};var r=a("pFYg"),n=a.n(r),s=a("w64q"),i=a("RyI1"),o=a.n(i),c=a("Q7hp"),l=a.n(c),u=a("Aemx"),d=a.n(u)},z8Xk:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"container"},[a("div",[e.loading&&!e.error?a("v-loader"):e._e(),e.loading||e.error?e._e():a("b-container",{staticClass:"bv-example-row"},[a("b-row",[a("b-col",[a("v-filters",{attrs:{showOwned:""}}),a("v-actions")],1)],1),a("b-row",[a("b-col",[e.views.listView?a("v-table",{attrs:{"default-asc":!0,games:e.items,headers:e.tableHeader}}):e._e(),e.views.listView?e._e():a("v-grid",{attrs:{games:e.items}})],1)],1)],1),e.error?a("v-refresh",{attrs:{message:e.errorMessage}}):e._e()],1)])};r._withStripped=!0;var n={render:r,staticRenderFns:[]};t.a=n},znWP:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".mech ul[data-v-a56dc668]{font-size:small;margin-bottom:0;text-align:left}.comment[data-v-a56dc668]{text-align:left;max-width:50vh}.numplays[data-v-a56dc668],.rank[data-v-a56dc668]{min-width:80px;min-width:5rem}.playingtime[data-v-a56dc668],.weight[data-v-a56dc668],.wishlist-priority[data-v-a56dc668]{min-width:96px;min-width:6rem}.average[data-v-a56dc668],.rating[data-v-a56dc668]{min-width:128px;min-width:8rem}.best-player[data-v-a56dc668],.rec-player[data-v-a56dc668]{max-width:64px;max-width:4rem;overflow:hidden;text-overflow:ellipsis}.table td[data-v-a56dc668],.table th[data-v-a56dc668]{padding:4px;padding:.25rem}.table th[data-v-a56dc668]:hover{cursor:pointer}.table td[data-v-a56dc668]{vertical-align:inherit}.name a[data-v-a56dc668]:hover{text-decoration:none}.badge[data-v-a56dc668]{font-size:100%}.badge-10[data-v-a56dc668]{background:#0c0}.badge-9[data-v-a56dc668]{background:#3c9}.badge-8[data-v-a56dc668]{background:#6f9}.badge-7[data-v-a56dc668]{background:#9ff}.badge-6[data-v-a56dc668]{background:#99f}.badge-5[data-v-a56dc668]{background:#c9f}.badge-4[data-v-a56dc668]{background:#f6c}.badge-3[data-v-a56dc668]{background:#f69}.badge-2[data-v-a56dc668]{background:#f36}.badge-1[data-v-a56dc668]{background:red}.badge-0[data-v-a56dc668]{background:gray}.badge-heavy[data-v-a56dc668]{background:purple;color:#fff}.badge-medium-heavy[data-v-a56dc668]{background:#a3529f;color:#fff}.badge-medium[data-v-a56dc668]{background:#c38bbf}.badge-medium-light[data-v-a56dc668]{background:#e2c5df}.badge-light[data-v-a56dc668]{background:#fff}",""])}});