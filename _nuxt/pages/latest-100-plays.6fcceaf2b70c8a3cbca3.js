webpackJsonp([4],{"037f":function(e,t,a){var r=a("1oyr"),n=a("p0bc"),s=a("wSKX"),i=n?function(e,t){return n(e,"toString",{configurable:!0,enumerable:!1,value:r(t),writable:!0})}:s;e.exports=i},"1Rsn":function(e,t,a){var r=a("HIG/");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,a("rjj0").default)("400fe51c",r,!1,{sourceMap:!1})},"1oyr":function(e,t){e.exports=function(e){return function(){return e}}},"4L7U":function(e,t,a){var r=a("5fHS");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,a("rjj0").default)("2ac04b44",r,!1,{sourceMap:!1})},"5fHS":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".container{min-height:100vh;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}.links{padding-top:15px}.filter{padding-bottom:8px;padding-bottom:.5rem}.table th:hover{cursor:default!important}",""])},"6oYb":function(e,t,a){"use strict";var r=a("w64q"),n=a("xg6U"),s=a("M4fF");t.a={computed:{filteredGames:function(){var e=void 0;if(e="latest-100-plays"===this.$route.name?this.games:Object(n.a)(this.games,this.$store.state.filters),s.keys(e).length){var t=s.orderBy(e,[this.sortBy,"average"],[this.asc?"asc":"desc","desc"]);if(t.length>0&&!s.get(t[0],"rank")&&s.get(t[t.length-1],"rank"))for(;!s.get(t[0],"rank");)t.push(t.shift());e=t}return e}},created:function(){var e=r.a.get("username");(e=e.split(",")).length>1&&e[e.length-1]&&(this.singleUser=!1),this.userId=e[0];var t=r.a.get("playername").split(",");this.playerNameMap={};for(var a=0;a<t.length;a++)this.playerNameMap[e[a]]=t[a]},data:function(){return{asc:s.get(this,"defaultAsc",!0),singleUser:!0,sortBy:this.defaultSort||"rank",userId:void 0}},filters:{number:function(e){return e?(e=parseFloat(e)).toFixed(2):""},priority:function(e){switch(e){case"1":return"Must have";case"2":return"Love to have";case"3":return"Like to have";case"4":return"Thinking about it";default:return"Don't buy this"}}},methods:{hasHeader:function(e,t){if(t){var a=s.find(this.headers,["key",e]);return!!a&&!a.hide}return s.find(this.headers,["key",e])},getOwners:function(e){var t=this,a="";return s.forEach(e,function(e,r){e.own&&(t.playerNameMap[r]?a+=t.playerNameMap[r]+"\n":a+=r+"\n")}),a},getRatingColor:function(e,t){return t?s.floor(e):s.ceil(e)},getUserRatings:function(e){var t=this,a="";return s.forEach(e,function(e,r){e.rating&&(t.playerNameMap[r]?a+=t.playerNameMap[r]+": "+e.rating+"\n":a+=r+": "+e.rating+"\n")}),a},getUserPlays:function(e){var t=this,a="";return s.forEach(e,function(e,r){e.numplays&&(t.playerNameMap[r]?a+=t.playerNameMap[r]+": "+e.numplays+"\n":a+=r+": "+e.numplays+"\n")}),a},getWeightColor:function(e){return e>4?"heavy":e>3.5?"medium-heavy":e>3?"medium":e>2.5?"medium-light":"light"},sort:function(e){e&&(e===this.sortBy?this.asc=!this.asc:(this.asc=!0,this.sortBy=e))}},props:{defaultAsc:{type:Boolean},defaultSort:{type:String},extFilters:{type:Object},games:{type:Object},headers:{type:Array}}}},"8++/":function(e,t){e.exports=function(e){return e!=e}},"8AZL":function(e,t){e.exports=function(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}},A7Co:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"container"},[a("div",[e.loading?a("v-loader"):e._e(),e.loading||e.waitingForBGG?e._e():a("b-container",{staticClass:"bv-example-row"},[a("b-row",[a("b-col",[a("v-table",{attrs:{games:e.items,headers:e.tableHeader,"default-asc":!1,"default-sort":"date"}})],1)],1)],1),e.waitingForBGG?a("v-refresh"):e._e()],1)])};r._withStripped=!0;var n={render:r,staticRenderFns:[]};t.a=n},Aemx:function(e,t,a){var r=a("Hxdr"),n=a("faGK"),s=a("YkxI"),i=a("XoYR"),o=s(function(e){var t=r(e,i);return t.length&&t[0]===e[0]?n(t):[]});e.exports=o},AnPL:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".loader[data-v-69d78885]{border:16px solid #f3f3f3;border-top:16px solid #3498db;border-radius:50%;width:80px;width:5rem;height:80px;height:5rem;-webkit-animation:spin-data-v-69d78885 2s linear infinite;animation:spin-data-v-69d78885 2s linear infinite}@-webkit-keyframes spin-data-v-69d78885{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin-data-v-69d78885{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""])},FeY4:function(e,t,a){"use strict";var r=a("nzKf"),n=a("vMdB"),s=!1;var i=function(e){s||a("1Rsn")},o=a("VU/8")(r.a,n.a,!1,i,"data-v-5c0363d9",null);o.options.__file="components/v-refresh.vue",t.a=o.exports},Fp5l:function(e,t,a){var r=a("bGc4"),n=a("UnEC");e.exports=function(e){return n(e)&&r(e)}},G8ar:function(e,t,a){var r=a("cdq7"),n=a("8++/"),s=a("i6nN");e.exports=function(e,t,a){return t==t?s(e,t,a):r(e,n,a)}},"HIG/":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"",""])},IUAt:function(e,t,a){"use strict";var r=a("6oYb"),n=a("vbYg"),s=!1;var i=function(e){s||a("lnnR")},o=a("VU/8")(r.a,n.a,!1,i,"data-v-a56dc668",null);o.options.__file="components/v-table.vue",t.a=o.exports},JUs9:function(e,t,a){var r=a("G8ar");e.exports=function(e,t){return!(null==e||!e.length)&&r(e,t,0)>-1}},M6Wl:function(e,t,a){var r=a("rpnb"),n=a("ktak");e.exports=function(e,t){return e&&r(e,t,n)}},Q2wK:function(e,t,a){var r=a("8AZL"),n=Math.max;e.exports=function(e,t,a){return t=n(void 0===t?e.length-1:t,0),function(){for(var s=arguments,i=-1,o=n(s.length-t,0),u=Array(o);++i<o;)u[i]=s[t+i];i=-1;for(var c=Array(t+1);++i<t;)c[i]=s[i];return c[t]=a(u),r(e,this,c)}}},RyI1:function(e,t,a){var r=a("lb6C"),n=a("eShC"),s=a("JyYQ"),i=a("NGEn");e.exports=function(e,t){return(i(e)?r:n)(e,s(t,3))}},WHce:function(e,t,a){var r=a("037f"),n=a("Zk5a")(r);e.exports=n},XoYR:function(e,t,a){var r=a("Fp5l");e.exports=function(e){return r(e)?e:[]}},YkxI:function(e,t,a){var r=a("wSKX"),n=a("Q2wK"),s=a("WHce");e.exports=function(e,t){return s(n(e,t,r),e+"")}},Zk5a:function(e,t){var a=800,r=16,n=Date.now;e.exports=function(e){var t=0,s=0;return function(){var i=n(),o=r-(i-s);if(s=i,o>0){if(++t>=a)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}},cdq7:function(e,t){e.exports=function(e,t,a,r){for(var n=e.length,s=a+(r?1:-1);r?s--:++s<n;)if(t(e[s],s,e))return s;return-1}},eShC:function(e,t,a){var r=a("v9aJ");e.exports=function(e,t){var a=[];return r(e,function(e,r,n){t(e,r,n)&&a.push(e)}),a}},faGK:function(e,t,a){var r=a("7YkW"),n=a("JUs9"),s=a("s96k"),i=a("Hxdr"),o=a("S7p9"),u=a("dmQx"),c=Math.min;e.exports=function(e,t,a){for(var d=a?s:n,l=e[0].length,f=e.length,p=f,g=Array(f),h=1/0,v=[];p--;){var m=e[p];p&&t&&(m=i(m,o(t))),h=c(m.length,h),g[p]=!a&&(t||l>=120&&m.length>=120)?new r(p&&m):void 0}m=e[0];var b=-1,y=g[0];e:for(;++b<l&&v.length<h;){var _=m[b],w=t?t(_):_;if(_=a||0!==_?_:0,!(y?u(y,w):d(v,w,a))){for(p=f;--p;){var x=g[p];if(!(x?u(x,w):d(e[p],w,a)))continue e}y&&y.push(w),v.push(_)}}return v}},heOS:function(e,t,a){"use strict";var r=a("mtWM"),n=a.n(r),s=a("w64q"),i=a("FeY4"),o=a("lrWY"),u=a("IUAt"),c=a("SFXu"),d=a.n(c),l=a("M4fF");t.a={beforeCreate:function(){this.$route.query.userId?s.a.set("username",this.$route.query.userId,3650):this.$route.query.userid?s.a.set("username",this.$route.query.userid,3650):s.a.get("username")||s.a.set("username","Za Warudo",3650)},components:{VRefresh:i.a,VLoader:o.a,VTable:u.a},created:function(){var e=this,t=this.$route.query.userId||this.userId;return t=t.split(",").slice(0,9),n.a.get("https://www.boardgamegeek.com/xmlapi2/plays",{params:{username:t[0].trim()}}).then(function(t){if(e.loading=!1,200===t.status){var a=(new d.a).xml2js(t.data),r={};l.forEach(a.plays.play,function(e){r[e._id]={comment:e.comments,date:e._date,id:e._id,name:e.item._name}}),e.$data.items=r}}).catch(function(){e.loading=!1,e.waitingForBGG=!0})},data:function(){return{items:{},loading:!0,tableHeader:[{key:"name",value:"Name"},{key:"date",value:"Date"},{key:"comment",value:"Comment"}],userId:s.a.get("username"),waitingForBGG:!1}}}},i6nN:function(e,t){e.exports=function(e,t,a){for(var r=a-1,n=e.length;++r<n;)if(e[r]===t)return r;return-1}},lnnR:function(e,t,a){var r=a("znWP");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,a("rjj0").default)("5091dcf4",r,!1,{sourceMap:!1})},lrWY:function(e,t,a){"use strict";var r=a("wtds"),n=a("qR6Y"),s=!1;var i=function(e){s||a("oLaH")},o=a("VU/8")(r.a,n.a,!1,i,"data-v-69d78885",null);o.options.__file="components/v-loader.vue",t.a=o.exports},nzKf:function(e,t,a){"use strict";t.a={methods:{refresh:function(){location.reload()}},props:{message:{type:String}}}},oLaH:function(e,t,a){var r=a("AnPL");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,a("rjj0").default)("25d3f2f4",r,!1,{sourceMap:!1})},pQJ6:function(e,t,a){var r=a("bGc4");e.exports=function(e,t){return function(a,n){if(null==a)return a;if(!r(a))return e(a,n);for(var s=a.length,i=t?s:-1,o=Object(a);(t?i--:++i<s)&&!1!==n(o[i],i,o););return a}}},qR6Y:function(e,t,a){"use strict";var r=function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"loader"})};r._withStripped=!0;var n={render:r,staticRenderFns:[]};t.a=n},rpnb:function(e,t,a){var r=a("tHks")();e.exports=r},s96k:function(e,t){e.exports=function(e,t,a){for(var r=-1,n=null==e?0:e.length;++r<n;)if(a(t,e[r]))return!0;return!1}},tHks:function(e,t){e.exports=function(e){return function(t,a,r){for(var n=-1,s=Object(t),i=r(t),o=i.length;o--;){var u=i[e?o:++n];if(!1===a(s[u],u,s))break}return t}}},tplh:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("heOS"),n=a("A7Co"),s=!1;var i=function(e){s||a("4L7U")},o=a("VU/8")(r.a,n.a,!1,i,null,null);o.options.__file="pages/latest-100-plays.vue",t.default=o.exports},v9aJ:function(e,t,a){var r=a("M6Wl"),n=a("pQJ6")(r);e.exports=n},vMdB:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[e._v("\n    "+e._s(e.message)+"\n    "),a("button",{on:{click:function(t){e.refresh()}}},[e._v("Refresh")])])};r._withStripped=!0;var n={render:r,staticRenderFns:[]};t.a=n},vbYg:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.games?a("table",{staticClass:"table table-striped"},[a("thead",[a("tr",e._l(e.headers,function(t){return t.hide?e._e():a("th",{key:t.key,class:[t.key],attrs:{scope:"col"},on:{click:function(a){e.sort(t.key)}}},[a("span",[e._v("\n            "+e._s(t.value)+"\n            "),e.sortBy===t.key?a("i",{staticClass:"fa",class:{"fa-arrow-down":!e.asc,"fa-arrow-up":e.asc},attrs:{"aria-hidden":"true"}}):e._e()])])}))]),a("tbody",e._l(e.filteredGames,function(t){return a("tr",{key:t.id},[e.hasHeader("",!0)?a("td",[a("a",{attrs:{href:"https://boardgamegeek.com/boardgame/"+t.id}},[a("b-img",{attrs:{width:"75",src:t.imageUrl}})],1)]):e._e(),e.hasHeader("rank")?a("td",[e._v(e._s(t.rank))]):e._e(),e.hasHeader("average")?a("td",[a("span",{staticClass:"badge",class:["badge-"+e.getRatingColor(t.average,!0)]},[e._v(e._s(e._f("number")(t.average)))])]):e._e(),e.hasHeader("rating")&&e.singleUser?a("td",[t.users[e.userId].rating?a("span",{staticClass:"badge",class:["badge-"+e.getRatingColor(t.users[e.userId].rating)]},[e._v(e._s(t.users[e.userId].rating))]):e._e()]):e._e(),e.hasHeader("rating")&&!e.singleUser?a("td",[t.rating?a("span",{staticClass:"badge",class:["badge-"+e.getRatingColor(t.rating)]},[e._v("\n            "+e._s(e._f("number")(t.rating))+"\n          ")]):e._e(),t.rating?a("i",{directives:[{name:"b-popover",rawName:"v-b-popover.hover",value:e.getUserRatings(t.users),expression:"getUserRatings(item.users)",modifiers:{hover:!0}}],staticClass:"fa fa-users",attrs:{"aria-hidden":"true",title:"Individual Ratings"}}):e._e()]):e._e(),e.hasHeader("name")?a("td",{staticClass:"name"},[a("a",{attrs:{href:"https://boardgamegeek.com/boardgame/"+t.id}},[e._v(e._s(t.name))]),!e.singleUser&&e.getOwners(t.users)?a("i",{directives:[{name:"b-popover",rawName:"v-b-popover.hover",value:e.getOwners(t.users),expression:"getOwners(item.users)",modifiers:{hover:!0}}],staticClass:"fa fa-users",attrs:{"aria-hidden":"true",title:"Owners"}}):e._e()]):e._e(),e.hasHeader("date")?a("td",{staticClass:"date"},[a("a",[e._v(e._s(t.date))])]):e._e(),e.hasHeader("weight")?a("td",[a("span",{staticClass:"badge",class:["badge-"+e.getWeightColor(t.weight)]},[e._v(e._s(e._f("number")(t.weight)))])]):e._e(),e.hasHeader("playingtime")?a("td",[e._v(e._s(t.playingtime)+" mins")]):e._e(),e.hasHeader("bggbestplayers")?a("td",{staticClass:"best-player"},[e._v(e._s(t.bggbestplayers))]):e._e(),e.hasHeader("numplays")&&e.singleUser?a("td",{staticClass:"num-plays"},[e._v(e._s(t.users[e.userId].numplays))]):e._e(),e.hasHeader("numplays")&&!e.singleUser?a("td",{staticClass:"num-plays"},[e._v("\n          "+e._s(t.numplays)+"\n          "),t.numplays?a("i",{directives:[{name:"b-popover",rawName:"v-b-popover.hover",value:e.getUserPlays(t.users),expression:"getUserPlays(item.users)",modifiers:{hover:!0}}],staticClass:"fa fa-users",attrs:{"aria-hidden":"true",title:"Individual Plays"}}):e._e()]):e._e(),e.hasHeader("wishlistpriority")?a("td",{staticClass:"wishlist-priority"},[e._v("\n          "+e._s(e._f("priority")(t.wishlistpriority))+"\n        ")]):e._e(),e.hasHeader("comment")?a("td",{staticClass:"comment"},[e._v("\n          "+e._s(t.comment)+"\n        ")]):e._e(),e.hasHeader("mech")?a("td",{staticClass:"mech"},[a("ul",e._l(t.mech,function(t){return a("li",{key:t},[e._v(e._s(t))])}))]):e._e()])}))]):e._e(),e._v("\n  Item count: "+e._s(e.filteredGames.length)+"\n")])};r._withStripped=!0;var n={render:r,staticRenderFns:[]};t.a=n},w64q:function(e,t,a){"use strict";var r=a("Zrlr"),n=a.n(r),s=a("wxAW"),i=a.n(s),o=function(){function e(){n()(this,e)}return i()(e,null,[{key:"set",value:function(e,t,a){a||(a=3650);var r=new Date;r.setTime(r.getTime()+24*a*60*60*1e3);var n="expires="+r.toUTCString();document.cookie=e+"="+t+";"+n+";path=/"}},{key:"get",value:function(e){for(var t=e+"=",a=decodeURIComponent(document.cookie).split(";"),r=0;r<a.length;r++){for(var n=a[r];" "===n.charAt(0);)n=n.substring(1);if(0===n.indexOf(t))return n.substring(t.length,n.length)}return""}}]),e}();t.a=o},wtds:function(e,t,a){"use strict";t.a={}},xg6U:function(e,t,a){"use strict";t.a=function(e,t){var a=s.a.get("bestatleast"),r=s.a.get("showexp"),i=s.a.get("expmin");return o()(e,function(e){var s=!1;if("object"!==(void 0===t?"undefined":n()(t))&&(t={}),a&&"false"!==a){var o=c()(e,"bggbestplayers","").split(",").pop();o&&(s=+o>=t.bestnum)}else s=c()(e,"bggbestplayers","").split(",").includes(t.bestnum);var u=!0;t.mechShow&&t.mechShow.length>0&&(u=l()(t.mechShow,e.mech).length===t.mechShow.length),t.mechHide&&t.mechHide.length>0&&u&&(u=!l()(t.mechHide,e.mech).length>0);var d=(!t.bestnum||s)&&(!t.recnum||c()(e,"bggrecplayers","").split(",").includes(t.recnum))&&(!t.mintime||e.playingtime>=t.mintime)&&(!t.maxtime||e.playingtime<=t.maxtime)&&(!t.supplayer||e.minplayer<=t.supplayer&&e.maxplayer>=t.supplayer)&&(!t.maxweight||e.weight<=t.maxweight)&&(!t.minweight||e.weight>=t.minweight)&&("false"===r&&"e"!==e.type||"true"===r)&&("true"===r&&"e"===e.type&&e.average>=i||"e"!==e.type)&&(!t.playlessthan||e.numplays<=t.playlessthan)&&("boolean"!=typeof t.ownedgames||!t.ownedgames||e.own)&&u;return d})};var r=a("pFYg"),n=a.n(r),s=a("w64q"),i=a("RyI1"),o=a.n(i),u=a("Q7hp"),c=a.n(u),d=a("Aemx"),l=a.n(d)},znWP:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,".mech ul[data-v-a56dc668]{font-size:small;margin-bottom:0;text-align:left}.comment[data-v-a56dc668]{text-align:left;max-width:50vh}.numplays[data-v-a56dc668],.rank[data-v-a56dc668]{min-width:80px;min-width:5rem}.playingtime[data-v-a56dc668],.weight[data-v-a56dc668],.wishlist-priority[data-v-a56dc668]{min-width:96px;min-width:6rem}.average[data-v-a56dc668],.rating[data-v-a56dc668]{min-width:128px;min-width:8rem}.best-player[data-v-a56dc668],.rec-player[data-v-a56dc668]{max-width:64px;max-width:4rem;overflow:hidden;text-overflow:ellipsis}.table td[data-v-a56dc668],.table th[data-v-a56dc668]{padding:4px;padding:.25rem}.table th[data-v-a56dc668]:hover{cursor:pointer}.table td[data-v-a56dc668]{vertical-align:inherit}.name a[data-v-a56dc668]:hover{text-decoration:none}.badge[data-v-a56dc668]{font-size:100%}.badge-10[data-v-a56dc668]{background:#0c0}.badge-9[data-v-a56dc668]{background:#3c9}.badge-8[data-v-a56dc668]{background:#6f9}.badge-7[data-v-a56dc668]{background:#9ff}.badge-6[data-v-a56dc668]{background:#99f}.badge-5[data-v-a56dc668]{background:#c9f}.badge-4[data-v-a56dc668]{background:#f6c}.badge-3[data-v-a56dc668]{background:#f69}.badge-2[data-v-a56dc668]{background:#f36}.badge-1[data-v-a56dc668]{background:red}.badge-0[data-v-a56dc668]{background:gray}.badge-heavy[data-v-a56dc668]{background:purple;color:#fff}.badge-medium-heavy[data-v-a56dc668]{background:#a3529f;color:#fff}.badge-medium[data-v-a56dc668]{background:#c38bbf}.badge-medium-light[data-v-a56dc668]{background:#e2c5df}.badge-light[data-v-a56dc668]{background:#fff}",""])}});