(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{358:function(e,t,r){var content=r(364);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(37).default)("51a99204",content,!0,{sourceMap:!1})},359:function(e,t,r){var content=r(366);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(37).default)("46add8e6",content,!0,{sourceMap:!1})},360:function(e,t,r){var content=r(368);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(37).default)("6a6aab91",content,!0,{sourceMap:!1})},361:function(e,t,r){"use strict";t.a=["userId","bestnum","maxtime","maxweight","mintime","minweight","recnum","supplayer","playlessthan","showexp","ownedgames","mechShow","mechHide","disableLS"]},363:function(e,t,r){"use strict";var n=r(358);r.n(n).a},364:function(e,t,r){(e.exports=r(36)(!1)).push([e.i,".col[data-v-66b74b30]{margin-bottom:.5rem}",""])},365:function(e,t,r){"use strict";var n=r(359);r.n(n).a},366:function(e,t,r){(e.exports=r(36)(!1)).push([e.i,".filters.container-fluid{text-align:left;margin-bottom:.5rem}",""])},367:function(e,t,r){"use strict";var n=r(360);r.n(n).a},368:function(e,t,r){(e.exports=r(36)(!1)).push([e.i,".actions{margin-bottom:1rem}",""])},369:function(e,t,r){"use strict";r(14);var n=r(97),o=r(362),l=r(361),c=r(10),m=r.n(c),f={props:{games:{type:Object,required:!0}},data:function(){return{getShareLink:function(){var link="".concat(window.origin,"?userId=").concat(n.a.get("username"),"&"),e=this.$store.state.filters,t=l.a.map(function(param){return e[param]?"".concat(param,"=").concat(e[param]):null}).filter(function(i){return!!i}).join("&");return encodeURI("".concat(link).concat(t))},getList:function(){var e="";return m.a.forEach(this.games,function(t){e+=t.name+" - "+t.comment+"\n"}),e},getARandomGame:function(){var e=m.a.sample(Object(o.a)(this.games,this.$store.state.filters));this.$toast.success("Go play "+e.name,{icon:"fa-play",action:{text:"Link",href:"https://boardgamegeek.com/boardgame/"+e.id}})},views:this.$store.state.views}},methods:{toggleListView:function(){this.$store.commit("views/toggleListView")}}},d=(r(367),r(29)),component=Object(d.a)(f,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"actions",attrs:{fluid:""}},[r("b-row",[r("b-col",{attrs:{sm:"auto"}},[r("b-button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:e.getShareLink(),expression:"getShareLink()"}],attrs:{size:"sm",variant:"primary"},on:{click:function(t){return e.$toast.success("Link copied to clipboard",{icon:"fa-clipboard"})}}},[r("i",{staticClass:"fa fa-share-alt",attrs:{"aria-hidden":"true"}}),e._v("\n        Share This List\n      ")])],1),e._v(" "),r("b-col",{attrs:{sm:"auto"}},[r("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:function(t){return e.getARandomGame()}}},[r("i",{staticClass:"fa fa-random",attrs:{"aria-hidden":"true"}}),e._v("\n        Get Me A Game\n      ")])],1),e._v(" "),r("b-col",{attrs:{sm:"auto"}},[r("b-button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:e.getList(),expression:"getList()"}],attrs:{size:"sm",variant:"primary"},on:{click:function(t){return e.$toast.success("List copied to clipboard",{icon:"fa-clipboard"})}}},[r("i",{staticClass:"fa fa-copy",attrs:{"aria-hidden":"true"}}),e._v("\n        Copy This List\n      ")])],1),e._v(" "),r("b-col",{attrs:{sm:"auto"}},[r("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:function(t){return e.toggleListView()}}},[e.views.listView?r("span",[r("i",{staticClass:"fa fa-th",attrs:{"aria-hidden":"true"}}),e._v("\n          Toggle Grid View\n        ")]):e._e(),e._v(" "),e.views.listView?e._e():r("span",[r("i",{staticClass:"fa fa-list",attrs:{"aria-hidden":"true"}}),e._v("\n          Toggle Table View\n        ")])])],1)],1)],1)},[],!1,null,null,null);t.a=component.exports},370:function(e,t,r){"use strict";r(5),r(3),r(2),r(1),r(4);var n=r(0),o=(r(9),r(44)),l=r(97),c=r(361);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable})),t.push.apply(t,r)}return t}var f=r(193),d={props:{bestnum:{default:0,type:Number},maxtime:{default:0,type:Number},maxweight:{default:0,type:Number},minweight:{default:0,type:Number},mintime:{default:0,type:Number},mechShow:{default:function(){return[]},type:Array},mechHide:{default:function(){return[]},type:Array},ownedgames:{type:Boolean,required:!0},playgreaterthan:{default:0,type:Number},playlessthan:{default:0,type:Number},recnum:{default:0,type:Number},showexp:{default:!!l.a.get("showexp"),type:Boolean},showOwned:{type:Boolean},supplayer:{default:0,type:Number}},data:function(){return{mechOptions:this.getMechOptions(),popoverShow:!1}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(source,!0).forEach(function(t){Object(n.a)(e,t,source[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(source).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))})}return e}({},Object(o.e)(["filters"]),{_filters:function(){var e=this;return c.a.reduce(function(t,r){return t[r]=e[r],t},{})}}),watch:{_filters:function(e){this.filters=e,this.$store.commit("filters/set",e)}},methods:{getMechOptions:function(){return Object.keys(f).map(function(e){return{text:f[e],value:f[e]}})},onClose:function(){this.popoverShow=!1}}},h=(r(365),r(29)),component=Object(h.a)(d,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"filters",attrs:{fluid:""}},[r("b-row",[r("b-col",[r("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],attrs:{variant:"outline-primary",size:"sm"}},[e._v("\n        Toggle Filters\n      ")])],1)],1),e._v(" "),r("b-collapse",{attrs:{id:"collapse1",visible:""}},[r("b-form-group",{attrs:{"label-cols-sm":"2",label:"Players"}},[r("b-row",[r("b-col",{attrs:{sm:"auto"}},[r("b-form-input",{attrs:{type:"number",placeholder:"Best #",min:"1",size:"sm"},model:{value:e.filters.bestnum,callback:function(t){e.$set(e.filters,"bestnum",t)},expression:"filters.bestnum"}})],1),e._v(" "),r("b-col",{attrs:{sm:"auto"}},[r("b-form-input",{attrs:{type:"number",placeholder:"Recommended #",min:"1",size:"sm"},model:{value:e.filters.recnum,callback:function(t){e.$set(e.filters,"recnum",t)},expression:"filters.recnum"}})],1),e._v(" "),r("b-col",{attrs:{sm:"auto"}},[r("b-form-input",{attrs:{type:"number",placeholder:"Supported #",min:"1",size:"sm"},model:{value:e.filters.supplayer,callback:function(t){e.$set(e.filters,"supplayer",t)},expression:"filters.supplayer"}})],1)],1)],1),e._v(" "),r("b-form-group",{attrs:{"label-cols-sm":"2",label:"Play Time"}},[r("b-row",[r("b-col",{attrs:{sm:"auto"}},[r("b-form-input",{attrs:{type:"number",placeholder:"Min Play Time",min:"0",step:"10",size:"sm"},model:{value:e.filters.mintime,callback:function(t){e.$set(e.filters,"mintime",t)},expression:"filters.mintime"}})],1),e._v(" "),r("b-col",{attrs:{sm:"auto"}},[r("b-form-input",{attrs:{type:"number",placeholder:"Max Play Time",min:"0",step:"10",size:"sm"},model:{value:e.filters.maxtime,callback:function(t){e.$set(e.filters,"maxtime",t)},expression:"filters.maxtime"}})],1)],1)],1),e._v(" "),r("b-form-group",{attrs:{"label-cols-sm":"2",label:"Weight"}},[r("b-row",[r("b-col",{attrs:{sm:"auto"}},[r("b-form-input",{attrs:{type:"number",placeholder:"Min Weight",min:"1",step:"0.1",size:"sm"},model:{value:e.filters.minweight,callback:function(t){e.$set(e.filters,"minweight",t)},expression:"filters.minweight"}})],1),e._v(" "),r("b-col",{attrs:{sm:"auto"}},[r("b-form-input",{attrs:{type:"number",placeholder:"Max Weight",min:"1",step:"0.1",size:"sm"},model:{value:e.filters.maxweight,callback:function(t){e.$set(e.filters,"maxweight",t)},expression:"filters.maxweight"}})],1)],1)],1),e._v(" "),r("b-form-group",{attrs:{"label-cols-sm":"2",label:"Plays"}},[r("b-row",[r("b-col",{attrs:{sm:"auto"}},[r("b-form-input",{attrs:{type:"number",placeholder:"Greater Than",min:"0",size:"sm"},model:{value:e.filters.playgreaterthan,callback:function(t){e.$set(e.filters,"playgreaterthan",t)},expression:"filters.playgreaterthan"}})],1),e._v(" "),r("b-col",{attrs:{sm:"auto"}},[r("b-form-input",{attrs:{type:"number",placeholder:"Fewer Than",min:"0",size:"sm"},model:{value:e.filters.playlessthan,callback:function(t){e.$set(e.filters,"playlessthan",t)},expression:"filters.playlessthan"}})],1)],1)],1),e._v(" "),r("b-row",[r("b-col",{attrs:{sm:"auto"}},[r("b-button",{attrs:{id:"mech-filter",size:"sm",variant:"primary"}},[r("i",{staticClass:"fa fa-gear",attrs:{"aria-hidden":"true"}}),e._v("\n          Filter By Mechanisms\n        ")]),e._v(" "),r("b-popover",{attrs:{target:"mech-filter",placement:"bottom",triggers:"click",show:e.popoverShow,content:"Placement"},on:{"update:show":function(t){e.popoverShow=t}}},[r("b-tabs",[r("b-tab",{attrs:{title:"Show",active:""}},[r("b-form-group",[r("b-form-checkbox-group",{attrs:{name:"mechanisms",options:e.mechOptions},model:{value:e.filters.mechShow,callback:function(t){e.$set(e.filters,"mechShow",t)},expression:"filters.mechShow"}})],1)],1),e._v(" "),r("b-tab",{attrs:{title:"Hide"}},[r("b-form-group",[r("b-form-checkbox-group",{attrs:{name:"mechanisms",options:e.mechOptions},model:{value:e.filters.mechHide,callback:function(t){e.$set(e.filters,"mechHide",t)},expression:"filters.mechHide"}})],1)],1)],1),e._v(" "),r("b-btn",{attrs:{size:"sm",variant:"primary"},on:{click:e.onClose}},[e._v("\n            Close\n          ")])],1)],1),e._v(" "),e.showOwned?r("b-col",{attrs:{sm:"auto"}},[r("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:function(t){e.ownedgames=!e.ownedgames}}},[e.ownedgames?r("span",[r("i",{staticClass:"fa fa-users",attrs:{"aria-hidden":"true"}}),e._v("\n            Show All Games\n          ")]):e._e(),e._v(" "),e.ownedgames?e._e():r("span",[r("i",{staticClass:"fa fa-user",attrs:{"aria-hidden":"true"}}),e._v("\n            Show Only Owned Games\n          ")])])],1):e._e()],1)],1)],1)},[],!1,null,null,null);t.a=component.exports},371:function(e,t,r){"use strict";var n=r(362),o=r(10),l=r.n(o),c={props:{games:{type:Object,required:!0}},computed:{filteredGames:function(){var e=Object(n.a)(this.games,this.$store.state.filters);if(e.length){var t=l.a.orderBy(e,[this.sortBy,"average"],[this.asc?"asc":"desc","desc"]);if(t.length>0&&!l.a.get(t[0],"rank")&&l.a.get(t[t.length-1],"rank"))for(;!l.a.get(t[0],"rank");)t.push(t.shift());e=t}return e}}},m=(r(363),r(29)),component=Object(m.a)(c,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header"},[t("b-container",{staticClass:"bv-example-row"},[t("b-row",{attrs:{"align-v":"center"}},this._l(this.filteredGames,function(e){return t("b-col",{key:e.id},[t("a",{attrs:{href:"https://boardgamegeek.com/boardgame/"+e.id}},[t("b-img",{attrs:{width:"100",rounded:"",src:e.imageUrl}})],1)])}),1)],1),this._v("\n  Item count: "+this._s(this.filteredGames.length)+"\n")],1)},[],!1,null,"66b74b30",null);t.a=component.exports},379:function(e,t,r){var content=r(416);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(37).default)("5b466201",content,!0,{sourceMap:!1})},415:function(e,t,r){"use strict";var n=r(379);r.n(n).a},416:function(e,t,r){(e.exports=r(36)(!1)).push([e.i,".container{justify-content:center;align-items:center;text-align:center}.filters .col-sm-auto{padding-bottom:.25rem}",""])},425:function(e,t,r){"use strict";r.r(t);r(5),r(3),r(2),r(1),r(4);var n=r(0),o=r(97),l=r(371),c=r(372),m=r(373),f=r(374),d=r(370),h=r(369),v=r(44),y=r(10),w=r.n(y);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable})),t.push.apply(t,r)}return t}var x={components:{VGrid:l.a,VLoader:m.a,VRefresh:c.a,VTable:f.a,VFilters:d.a,VActions:h.a},data:function(){return{tableHeader:[{key:"",value:"",hide:this.$route.query.noimage},{key:"rank",value:"Rank"},{key:"average",value:"Avg. Rating"},{key:"name",value:"Name"},{key:"weight",value:"Weight"},{key:"playingtime",value:"Length"},{key:"bggbestplayers",value:"Best #Player"},{key:"comment",value:"Comment"}],userId:o.a.get("username")}},computed:Object(v.e)({items:function(e){return w.a.pickBy(e.items.index,["forTrade",!0])},loading:function(e){return!e.pageState.index||!e.pageState.index.loaded},error:function(e){return e.pageState.index?e.pageState.index.error:null},errorMessage:function(e){return e.pageState.index?e.pageState.index.errorMessage:null},views:function(e){return e.views}}),beforeCreate:function(){this.$route.query.userId?o.a.set("username",this.$route.query.userId,3650):this.$route.query.userid?o.a.set("username",this.$route.query.userid,3650):o.a.get("username")||o.a.set("username","Za Warudo",3650)},created:function(){var e=this.$route.query.userId||this.userId;this.fetch({userIds:e,page:"index",disableLS:"true"===o.a.get("disableLS")})},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(source,!0).forEach(function(t){Object(n.a)(e,t,source[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(source).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))})}return e}({},Object(v.c)({fetch:"items/query/fetch"}))},O=(r(415),r(29)),component=Object(O.a)(x,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"container"},[r("div",[e.loading&&!e.error?r("v-loader"):e._e(),e._v(" "),e.loading||e.error?e._e():r("b-container",{staticClass:"bv-example-row"},[r("b-row",[r("b-col",[r("v-filters",{attrs:{"show-owned":""}}),e._v(" "),r("v-actions",{attrs:{games:e.items}})],1)],1),e._v(" "),r("b-row",[r("b-col",[e.views.listView?r("v-table",{attrs:{"default-asc":!0,games:e.items,headers:e.tableHeader}}):e._e(),e._v(" "),e.views.listView?e._e():r("v-grid",{attrs:{games:e.items}})],1)],1)],1),e._v(" "),e.error?r("v-refresh",{attrs:{message:e.errorMessage}}):e._e()],1)])},[],!1,null,null,null);t.default=component.exports}}]);