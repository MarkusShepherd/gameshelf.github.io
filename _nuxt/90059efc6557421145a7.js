(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{330:function(e,t,r){var content=r(336);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("51a99204",content,!0,{sourceMap:!1})},331:function(e,t,r){var content=r(341);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("46add8e6",content,!0,{sourceMap:!1})},332:function(e,t,r){var content=r(343);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("6a6aab91",content,!0,{sourceMap:!1})},333:function(e,t,r){"use strict";t.a=["userId","bestnum","maxtime","maxweight","mintime","minweight","recnum","supplayer","playlessthan","showexp","ownedgames","mechShow","mechHide"]},335:function(e,t,r){"use strict";var n=r(330);r.n(n).a},336:function(e,t,r){(e.exports=r(7)(!1)).push([e.i,".col[data-v-66b74b30]{margin-bottom:.5rem}",""])},337:function(e,t,r){"use strict";var n=r(5),o=r(21),l=r(29),c=r(155),m=r(72),f=r(17),d=r(73).f,h=r(100).f,v=r(16).f,y=r(338).trim,w=n.Number,x=w,_=w.prototype,k="Number"==l(r(99)(_)),N="trim"in String.prototype,$=function(e){var t=m(e,!1);if("string"==typeof t&&t.length>2){var r,n,o,l=(t=N?t.trim():y(t,3)).charCodeAt(0);if(43===l||45===l){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===l){switch(t.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+t}for(var code,c=t.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,n)}}return+t};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof w&&(k?f(function(){_.valueOf.call(r)}):"Number"!=l(r))?c(new x($(t)),r,w):$(t)};for(var S,I=r(11)?d(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;I.length>O;O++)o(x,S=I[O])&&!o(w,S)&&v(w,S,h(x,S));w.prototype=_,_.constructor=w,r(18)(n,"Number",w)}},338:function(e,t,r){var n=r(10),o=r(28),l=r(17),c=r(339),m="["+c+"]",f=RegExp("^"+m+m+"*"),d=RegExp(m+m+"*$"),h=function(e,t,r){var o={},m=l(function(){return!!c[e]()||"​"!="​"[e]()}),f=o[e]=m?t(v):c[e];r&&(o[r]=f),n(n.P+n.F*m,"String",o)},v=h.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(f,"")),2&t&&(e=e.replace(d,"")),e};e.exports=h},339:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},340:function(e,t,r){"use strict";var n=r(331);r.n(n).a},341:function(e,t,r){(e.exports=r(7)(!1)).push([e.i,".filters.container-fluid{text-align:left;margin-bottom:.5rem}",""])},342:function(e,t,r){"use strict";var n=r(332);r.n(n).a},343:function(e,t,r){(e.exports=r(7)(!1)).push([e.i,".actions{margin-bottom:1rem}",""])},344:function(e,t,r){"use strict";r(27),r(9);var n=r(71),o=r(334),l=r(333),c=r(1),m=r.n(c),f={props:{games:{type:Object,required:!0}},data:function(){return{getShareLink:function(){var link="".concat(window.origin,"?userId=").concat(n.a.get("username"),"&"),e=this.$store.state.filters,t=l.a.map(function(param){return e[param]?"".concat(param,"=").concat(e[param]):null}).filter(function(i){return!!i}).join("&");return encodeURI("".concat(link).concat(t))},getList:function(){var e="";return m.a.forEach(this.games,function(t){e+=t.name+" - "+t.comment+"\n"}),e},getARandomGame:function(){var e=m.a.sample(Object(o.a)(this.games,this.$store.state.filters));this.$toast.success("Go play "+e.name,{icon:"fa-play",action:{text:"Link",href:"https://boardgamegeek.com/boardgame/"+e.id}})},views:this.$store.state.views}},methods:{toggleListView:function(){this.$store.commit("views/toggleListView")}}},d=(r(342),r(15)),component=Object(d.a)(f,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"actions",attrs:{fluid:""}},[r("b-row",[r("b-col",{attrs:{sm:"auto"}},[r("b-button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:e.getShareLink(),expression:"getShareLink()"}],attrs:{size:"sm",variant:"primary"},on:{click:function(t){return e.$toast.success("Link copied to clipboard",{icon:"fa-clipboard"})}}},[r("i",{staticClass:"fa fa-share-alt",attrs:{"aria-hidden":"true"}}),e._v("\n        Share This List\n      ")])],1),e._v(" "),r("b-col",{attrs:{sm:"auto"}},[r("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:function(t){return e.getARandomGame()}}},[r("i",{staticClass:"fa fa-random",attrs:{"aria-hidden":"true"}}),e._v("\n        Get Me A Game\n      ")])],1),e._v(" "),r("b-col",{attrs:{sm:"auto"}},[r("b-button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:e.getList(),expression:"getList()"}],attrs:{size:"sm",variant:"primary"},on:{click:function(t){return e.$toast.success("List copied to clipboard",{icon:"fa-clipboard"})}}},[r("i",{staticClass:"fa fa-copy",attrs:{"aria-hidden":"true"}}),e._v("\n        Copy This List\n      ")])],1),e._v(" "),r("b-col",{attrs:{sm:"auto"}},[r("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:function(t){return e.toggleListView()}}},[e.views.listView?r("span",[r("i",{staticClass:"fa fa-th",attrs:{"aria-hidden":"true"}}),e._v("\n          Toggle Grid View\n        ")]):e._e(),e._v(" "),e.views.listView?e._e():r("span",[r("i",{staticClass:"fa fa-list",attrs:{"aria-hidden":"true"}}),e._v("\n          Toggle Table View\n        ")])])],1)],1)],1)},[],!1,null,null,null);t.a=component.exports},345:function(e,t,r){"use strict";var n=r(334),o=r(1),l=r.n(o),c={props:{games:{type:Object,required:!0}},computed:{filteredGames:function(){var e=Object(n.a)(this.games,this.$store.state.filters);if(e.length){var t=l.a.orderBy(e,[this.sortBy,"average"],[this.asc?"asc":"desc","desc"]);if(t.length>0&&!l.a.get(t[0],"rank")&&l.a.get(t[t.length-1],"rank"))for(;!l.a.get(t[0],"rank");)t.push(t.shift());e=t}return e}}},m=(r(335),r(15)),component=Object(m.a)(c,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header"},[t("b-container",{staticClass:"bv-example-row"},[t("b-row",{attrs:{"align-v":"center"}},this._l(this.filteredGames,function(e){return t("b-col",{key:e.id},[t("a",{attrs:{href:"https://boardgamegeek.com/boardgame/"+e.id}},[t("b-img",{attrs:{width:"100",rounded:"",src:e.imageUrl}})],1)])}),1)],1),this._v("\n  Item count: "+this._s(this.filteredGames.length)+"\n")],1)},[],!1,null,"66b74b30",null);t.a=component.exports},346:function(e,t,r){"use strict";r(9),r(74);var n=r(4),o=(r(337),r(24)),l=r(71),c=r(333),m=r(156),f={props:{bestnum:{type:Number,required:!0},maxtime:{type:Number,required:!0},maxweight:{type:Number,required:!0},minweight:{type:Number,required:!0},mintime:{type:Number,required:!0},mechShow:{default:function(){return[]},type:Array,required:!0},mechHide:{default:function(){return[]},type:Array,required:!0},ownedgames:{type:Boolean,required:!0},playgreaterthan:{type:Number,required:!0},playlessthan:{type:Number,required:!0},recnum:{type:Number,required:!0},showexp:{default:!!l.a.get("showexp"),type:Boolean,required:!0},showOwned:{type:Boolean,required:!0},supplayer:{type:Number,required:!0}},data:function(){return{mechOptions:this.getMechOptions(),popoverShow:!1}},computed:Object(n.a)({},Object(o.e)(["filters"]),{_filters:function(){var e=this;return c.a.reduce(function(t,r){return t[r]=e[r],t},{})}}),watch:{_filters:function(e){this.filters=e,this.$store.commit("filters/set",e)}},methods:{getMechOptions:function(){return Object.keys(m).map(function(e){return{text:m[e],value:m[e]}})},onClose:function(){this.popoverShow=!1}}},d=(r(340),r(15)),component=Object(d.a)(f,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"filters",attrs:{fluid:""}},[r("b-row",[r("b-col",[r("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],attrs:{variant:"outline-primary",size:"sm"}},[e._v("\n        Toggle Filters\n      ")])],1)],1),e._v(" "),r("b-collapse",{attrs:{id:"collapse1",visible:""}},[r("b-form-group",{attrs:{horizontal:"","label-cols":2,label:"Players"}},[r("b-row",[r("b-col",{attrs:{sm:"auto"}},[r("b-form-input",{attrs:{type:"number",placeholder:"Best #",min:"1",size:"sm"},model:{value:e.filters.bestnum,callback:function(t){e.$set(e.filters,"bestnum",t)},expression:"filters.bestnum"}})],1),e._v(" "),r("b-col",{attrs:{sm:"auto"}},[r("b-form-input",{attrs:{type:"number",placeholder:"Recommended #",min:"1",size:"sm"},model:{value:e.filters.recnum,callback:function(t){e.$set(e.filters,"recnum",t)},expression:"filters.recnum"}})],1),e._v(" "),r("b-col",{attrs:{sm:"auto"}},[r("b-form-input",{attrs:{type:"number",placeholder:"Supported #",min:"1",size:"sm"},model:{value:e.filters.supplayer,callback:function(t){e.$set(e.filters,"supplayer",t)},expression:"filters.supplayer"}})],1)],1)],1),e._v(" "),r("b-form-group",{attrs:{horizontal:"","label-cols":2,label:"Play Time"}},[r("b-row",[r("b-col",{attrs:{sm:"auto"}},[r("b-form-input",{attrs:{type:"number",placeholder:"Min Play Time",min:"0",step:"10",size:"sm"},model:{value:e.filters.mintime,callback:function(t){e.$set(e.filters,"mintime",t)},expression:"filters.mintime"}})],1),e._v(" "),r("b-col",{attrs:{sm:"auto"}},[r("b-form-input",{attrs:{type:"number",placeholder:"Max Play Time",min:"0",step:"10",size:"sm"},model:{value:e.filters.maxtime,callback:function(t){e.$set(e.filters,"maxtime",t)},expression:"filters.maxtime"}})],1)],1)],1),e._v(" "),r("b-form-group",{attrs:{horizontal:"","label-cols":2,label:"Weight"}},[r("b-row",[r("b-col",{attrs:{sm:"auto"}},[r("b-form-input",{attrs:{type:"number",placeholder:"Min Weight",min:"1",step:"0.1",size:"sm"},model:{value:e.filters.minweight,callback:function(t){e.$set(e.filters,"minweight",t)},expression:"filters.minweight"}})],1),e._v(" "),r("b-col",{attrs:{sm:"auto"}},[r("b-form-input",{attrs:{type:"number",placeholder:"Max Weight",min:"1",step:"0.1",size:"sm"},model:{value:e.filters.maxweight,callback:function(t){e.$set(e.filters,"maxweight",t)},expression:"filters.maxweight"}})],1)],1)],1),e._v(" "),r("b-form-group",{attrs:{horizontal:"","label-cols":2,label:"Plays"}},[r("b-row",[r("b-col",{attrs:{sm:"auto"}},[r("b-form-input",{attrs:{type:"number",placeholder:"Greater Than",min:"0",size:"sm"},model:{value:e.filters.playgreaterthan,callback:function(t){e.$set(e.filters,"playgreaterthan",t)},expression:"filters.playgreaterthan"}})],1),e._v(" "),r("b-col",{attrs:{sm:"auto"}},[r("b-form-input",{attrs:{type:"number",placeholder:"Fewer Than",min:"0",size:"sm"},model:{value:e.filters.playlessthan,callback:function(t){e.$set(e.filters,"playlessthan",t)},expression:"filters.playlessthan"}})],1)],1)],1),e._v(" "),r("b-row",[r("b-col",{attrs:{sm:"auto"}},[r("b-button",{attrs:{id:"mech-filter",size:"sm",variant:"primary"}},[r("i",{staticClass:"fa fa-gear",attrs:{"aria-hidden":"true"}}),e._v("\n          Filter By Mechanisms\n        ")]),e._v(" "),r("b-popover",{attrs:{target:"mech-filter",placement:"bottom",triggers:"click",show:e.popoverShow,content:"Placement"},on:{"update:show":function(t){e.popoverShow=t}}},[r("b-tabs",[r("b-tab",{attrs:{title:"Show",active:""}},[r("b-form-group",[r("b-form-checkbox-group",{attrs:{name:"mechanisms",options:e.mechOptions},model:{value:e.filters.mechShow,callback:function(t){e.$set(e.filters,"mechShow",t)},expression:"filters.mechShow"}})],1)],1),e._v(" "),r("b-tab",{attrs:{title:"Hide"}},[r("b-form-group",[r("b-form-checkbox-group",{attrs:{name:"mechanisms",options:e.mechOptions},model:{value:e.filters.mechHide,callback:function(t){e.$set(e.filters,"mechHide",t)},expression:"filters.mechHide"}})],1)],1)],1),e._v(" "),r("b-btn",{attrs:{size:"sm",variant:"primary"},on:{click:e.onClose}},[e._v("\n            Close\n          ")])],1)],1),e._v(" "),e.showOwned?r("b-col",{attrs:{sm:"auto"}},[r("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:function(t){e.ownedgames=!e.ownedgames}}},[e.ownedgames?r("span",[r("i",{staticClass:"fa fa-users",attrs:{"aria-hidden":"true"}}),e._v("\n            Show All Games\n          ")]):e._e(),e._v(" "),e.ownedgames?e._e():r("span",[r("i",{staticClass:"fa fa-user",attrs:{"aria-hidden":"true"}}),e._v("\n            Show Only Owned Games\n          ")])])],1):e._e()],1)],1)],1)},[],!1,null,null,null);t.a=component.exports},357:function(e,t,r){var content=r(397);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("36873827",content,!0,{sourceMap:!1})},396:function(e,t,r){"use strict";var n=r(357);r.n(n).a},397:function(e,t,r){(e.exports=r(7)(!1)).push([e.i,".container{justify-content:center;align-items:center;text-align:center}.filters .col-sm-auto{padding-bottom:.25rem}.popover{max-width:32rem}",""])},400:function(e,t,r){"use strict";r.r(t);var n=r(4),o=r(71),l=r(334),c=r(346),m=r(344),f=r(345),d=r(348),h=r(347),v=r(349),y=r(24),w=r(1),x=r.n(w),_={components:{VGrid:f.a,VLoader:d.a,VRefresh:h.a,VTable:v.a,VActions:m.a,VFilters:c.a},data:function(){return{tableHeader:[{key:"",value:"",hide:this.$route.query.noimage},{key:"rank",value:"Rank"},{key:"average",value:"Avg. Rating"},{key:"rating",value:"User Rating"},{key:"name",value:"Name"},{key:"weight",value:"Weight"},{key:"playingtime",value:"Length"},{key:"bggbestplayers",value:"Best #Player"},{key:"numplays",value:"Plays"},{key:"mech",value:"Mechanisms"}],userId:o.a.get("username")}},computed:Object(y.e)({items:function(e){return x.a.pickBy(e.items.index,["own",!0])},loading:function(e){return!e.pageState.index||!e.pageState.index.loaded},error:function(e){return e.pageState.index?e.pageState.index.error:null},errorMessage:function(e){return e.pageState.index?e.pageState.index.errorMessage:null},views:function(e){return e.views}}),beforeCreate:function(){this.$route.query.userId?o.a.set("username",this.$route.query.userId):this.$route.query.userid?o.a.set("username",this.$route.query.userid):o.a.get("username")||o.a.set("username","Za Warudo"),this.$route.query.showexp?o.a.set("showexp",!0):""===o.a.get("showexp")&&o.a.set("showexp",!1)},created:function(){this.$store.commit("filters/reset",this.$route.query),this.$store.commit("filters/setOwned",!0);var e=this.$route.query.userId||this.userId;this.fetch({userIds:e,page:"index"})},methods:Object(n.a)({filteredItem:l.a},Object(y.c)({fetch:"items/query/fetch"}))},k=(r(396),r(15)),component=Object(k.a)(_,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"container"},[r("div",[e.loading&&!e.error?r("v-loader"):e._e(),e._v(" "),e.loading||e.error?e._e():r("b-container",{staticClass:"bv-example-row"},[r("b-row",[r("b-col",[r("v-filters",{attrs:{ownedgames:""}}),e._v(" "),r("v-actions",{attrs:{games:e.items}})],1)],1),e._v(" "),r("b-row",[r("b-col",[e.views.listView?r("v-table",{attrs:{"default-asc":!0,games:e.items,headers:e.tableHeader}}):e._e(),e._v(" "),e.views.listView?e._e():r("v-grid",{attrs:{games:e.items}})],1)],1)],1),e._v(" "),e.error?r("v-refresh",{attrs:{message:e.errorMessage}}):e._e()],1)])},[],!1,null,null,null);t.default=component.exports}}]);