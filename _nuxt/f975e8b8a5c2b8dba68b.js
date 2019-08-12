(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{375:function(e,t,r){var content=r(384);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(37).default)("b08c633a",content,!0,{sourceMap:!1})},383:function(e,t,r){"use strict";var n=r(375);r.n(n).a},384:function(e,t,r){(e.exports=r(36)(!1)).push([e.i,".container.left{justify-content:left;align-items:left;text-align:left}.input-group{min-width:20rem;width:50%}.help h4{margin-top:1rem}h6{margin-top:.5rem}",""])},423:function(e,t,r){"use strict";r.r(t);r(5),r(3),r(2),r(1),r(4);var n=r(0),o=r(97),l=r(44);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable})),t.push.apply(t,r)}return t}var h={data:function(){return{bestatleast:"true"===o.a.get("bestatleast"),disableLS:"true"===o.a.get("disableLS"),expmin:+o.a.get("expmin"),faq:[{q:'Why are my seeing "Waiting for BGG to process. Please try again later for access."?',a:"This site relies on BGG, the bigger your collection is, the longer it takes for BGG to prepare your data, just be patiently and smash your refresh button."},{q:"Why only subset of my collection is shown?",a:'Only game that is flagged with "Owned" on BGG is shown.'},{q:"Why is the weight/best#/rec# data is not shown for some game?",a:"I only make that kind of data available for the ranked game, or expansion with rating 6 or greater."},{q:"What is the goal/purpose of this site",a:"For me to simply and elegantly filtering (based on things I care about, e.g. Best# of player and play time) down to a game I want to play."},{q:"What game do you have data for?",a:"Up to BGG game id of 240000"},{q:"When is your data updated?",a:"7/31/2018"}],params:[{paramName:"userid",type:"String",usage:"Determine who's collection to load"},{paramName:"noimage",type:"Boolean",usage:"When true, image will not be load in the table to save data on mobile"},{paramName:"showexp",type:"Boolean",usage:"When true, expansions will be shown"},{paramName:"bestnum",type:"Number",usage:"Prepopulate the best # of players filter"},{paramName:"recnum",type:"Number",usage:"Prepopulate the recommended # of player filter"},{paramName:"supplayer",type:"Number",usage:"Prepopulate the supported # of player filter"},{paramName:"maxweight",type:"Number",usage:"Prepopulate the max weight filter"},{paramName:"minweight",type:"Number",usage:"Prepopulate the min weight filter"},{paramName:"maxtime",type:"Number",usage:"Prepopulate the max play time filter"},{paramName:"mintime",type:"Number",usage:"Prepopulate the min play time filter"},{paramName:"playlessthan",type:"Number",usage:"Prepopulate the play less than filter"},{paramName:"disableLS",type:"Boolean",usage:"Disable usage of Local Stroage, which means your collection will be fetch everytime a page is being loaded, rather than once every 24 hours. Should be enabled for collection with more than 1,500 items."}],playername:o.a.get("playername"),showexp:"true"===o.a.get("showexp"),userId:o.a.get("username")}},watch:{bestatleast:function(e){o.a.set("bestatleast",e)},disableLS:function(e){o.a.set("disableLS",e),e?this.$toast.success("Local Storage usage will be disabled",{icon:"fa-check"}):this.$toast.success("Local Storage usage will be enabled",{icon:"fa-check"})},expmin:function(e){o.a.set("expmin",e)},showexp:function(e){o.a.set("showexp",e),e?this.$toast.success("Expansons will be shown",{icon:"fa-check"}):this.$toast.success("Expansons will be hiden",{icon:"fa-check"})}},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(source,!0).forEach(function(t){Object(n.a)(e,t,source[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(source).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))})}return e}({},Object(l.c)({clear:"items/cache/clear"}),{save:function(){o.a.set("username",this.userId),o.a.set("playername",this.playername),this.$toast.success("User ID and player name updated",{icon:"fa-check"})}})},m=(r(383),r(29)),component=Object(m.a)(h,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"container left help"},[r("h4",[e._v("User setting")]),e._v(" "),r("b-input-group",{attrs:{prepend:"User ID"}},[r("b-form-input",{model:{value:e.userId,callback:function(t){e.userId=t},expression:"userId"}}),e._v(" "),r("b-input-group-append",[r("b-btn",{attrs:{variant:"primary"},on:{click:e.save}},[e._v("\n        Save\n      ")])],1)],1),e._v(" "),r("b-input-group",{attrs:{prepend:"Player Name"}},[r("b-form-input",{model:{value:e.playername,callback:function(t){e.playername=t},expression:"playername"}}),e._v(" "),r("b-input-group-append",[r("b-btn",{attrs:{variant:"primary"},on:{click:e.save}},[e._v("\n        Save\n      ")])],1)],1),e._v(" "),r("p",[e._v('\n    You can add multiple(up to 10) user IDs and seperate them by comma, e.g.\n    "userId1,userId2", this will merge the collection of the users. This only\n    work with "Collection" for now, other list won\'t be supported unless there\n    is a popular demand.\n  ')]),e._v(" "),r("h5",[e._v("Collection")]),e._v(" "),r("h6",[e._v("Show Expansions with miniumn rating of:")]),e._v(" "),r("b-input-group",[r("b-input-group-prepend",{attrs:{"is-text":""}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.showexp,expression:"showexp"}],attrs:{id:"show-expansions",type:"checkbox"},domProps:{checked:Array.isArray(e.showexp)?e._i(e.showexp,null)>-1:e.showexp},on:{change:function(t){var r=e.showexp,n=t.target,o=!!n.checked;if(Array.isArray(r)){var l=e._i(r,null);n.checked?l<0&&(e.showexp=r.concat([null])):l>-1&&(e.showexp=r.slice(0,l).concat(r.slice(l+1)))}else e.showexp=o}}})]),e._v(" "),r("b-form-input",{attrs:{type:"number",disabled:!e.showexp},model:{value:e.expmin,callback:function(t){e.expmin=t},expression:"expmin"}})],1),e._v(" "),r("div",[e._v("Note: Only game with rating of 6 or greater has data for weight and best/rec# of players.")]),e._v(" "),r("h6",[e._v("Best number of players filter:")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.bestatleast,expression:"bestatleast"}],attrs:{id:"best-at-least",type:"checkbox"},domProps:{checked:Array.isArray(e.bestatleast)?e._i(e.bestatleast,null)>-1:e.bestatleast},on:{change:function(t){var r=e.bestatleast,n=t.target,o=!!n.checked;if(Array.isArray(r)){var l=e._i(r,null);n.checked?l<0&&(e.bestatleast=r.concat([null])):l>-1&&(e.bestatleast=r.slice(0,l).concat(r.slice(l+1)))}else e.bestatleast=o}}}),e._v('\n  Show "At least" rather than exact, e.g. when input 3, rather showing game played best with 3, it will show 3 and above.\n\n  '),r("h4",[e._v("Clear cache")]),e._v(" "),r("b-button",{attrs:{variant:"warning"},on:{click:e.clear}},[e._v("\n    Clear cache\n  ")]),e._v(" "),r("h4",[e._v("Disable Local Storage")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.disableLS,expression:"disableLS"}],attrs:{id:"disable-local-storage",type:"checkbox"},domProps:{checked:Array.isArray(e.disableLS)?e._i(e.disableLS,null)>-1:e.disableLS},on:{change:function(t){var r=e.disableLS,n=t.target,o=!!n.checked;if(Array.isArray(r)){var l=e._i(r,null);n.checked?l<0&&(e.disableLS=r.concat([null])):l>-1&&(e.disableLS=r.slice(0,l).concat(r.slice(l+1)))}else e.disableLS=o}}}),e._v("\n  Disable Local Storage (should only be used for collection with more than 1,500 items)\n\n  "),r("h4",[e._v("URL params")]),e._v(" "),r("b-table",{attrs:{striped:"",hover:"",items:e.params}}),e._v(" "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Query_string#Structure"}},[e._v("How to use URL params?")]),e._v(" "),r("h4",[e._v("FAQ")]),e._v(" "),e._l(e.faq,function(t){return r("div",{key:t.q},[r("div",[r("b",[e._v("Q: "+e._s(t.q))])]),e._v(" "),r("div",[e._v("A: "+e._s(t.a))])])}),e._v(" "),r("h4",[e._v("Suggestion / Report Bug")]),e._v(" "),r("a",{attrs:{href:"https://github.com/gameshelf/gameshelf.github.io/issues/new"}},[e._v("Open an issue")]),e._v(" "),r("h4",[e._v("Contributors")]),e._v(" "),e._m(0),e._v(" "),r("h4",[e._v("Donate")]),e._v("\n  If you find this site useful and want buy me a drink.\n  "),r("b-button",{attrs:{size:"sm",variant:"primary",href:"https://paypal.me/jotarora",target:"_blank"}},[r("i",{staticClass:"fa fa-paypal",attrs:{"aria-hidden":"true"}}),e._v("\n    PayPal\n  ")])],2)},[function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("junqdu")]),this._v(" "),t("li",[this._v("mattmontgomery")])])}],!1,null,null,null);t.default=component.exports}}]);