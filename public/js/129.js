(self.webpackChunk=self.webpackChunk||[]).push([[129],{4491:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});const s={serverURI:"",fixedLayout:!0,hideLogoOnMobile:!0}},6542:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var s=a(3645),i=a.n(s)()((function(e){return e[1]}));i.push([e.id,".wrapper.fixed_layout .main-header{position:fixed;width:100%}.wrapper.fixed_layout .content-wrapper{padding-top:50px}.wrapper.fixed_layout .main-sidebar{height:100vh;position:fixed}@media (max-width:767px){.wrapper.hide_logo .main-header .logo{display:none}}.logo-lg,.logo-mini{text-align:left}.logo-lg img,.logo-mini img{padding:.4em!important}.logo-lg img{display:-webkit-inline-box;width:25%}.user-panel{height:4em}hr.visible-xs-block{background-color:rgba(0,0,0,.17);border-color:transparent;height:1px;width:100%}",""]);const n=i},7411:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var s=a(3645),i=a.n(s)()((function(e){return e[1]}));i.push([e.id,".sidebar-menu>li>a{padding:12px 15px}.sidebar-menu li.active>a>.fa-angle-left,.sidebar-menu li.active>a>.pull-right-container>.fa-angle-left{-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-name:rotate;animation-name:rotate}.treeview-title{z-index:1}@-webkit-keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(-90deg)}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(-90deg)}}",""]);const n=i},6581:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var s=a(3645),i=a.n(s)()((function(e){return e[1]}));i.push([e.id,".user-panel .image img{border-radius:50%}#searchForm{padding-left:0;padding-right:0}#searchContainer{height:100%;padding-bottom:0}#search{float:right;width:80%}#search-btn{width:20%}",""]);const n=i},3645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a=e(t);return t[2]?"@media ".concat(t[2]," {").concat(a,"}"):a})).join("")},t.i=function(e,a,s){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(s)for(var n=0;n<this.length;n++){var r=this[n][0];null!=r&&(i[r]=!0)}for(var o=0;o<e.length;o++){var l=[].concat(e[o]);s&&i[l[0]]||(a&&(l[2]?l[2]="".concat(a," and ").concat(l[2]):l[2]=a),t.push(l))}},t}},9193:()=>{!function(e,t,a){"use strict";e.fn.hideseek=function(t){t=e.extend({list:".hideseek-data",nodata:"",attribute:"text",matches:!1,highlight:!1,ignore:"",headers:"",navigation:!1,ignore_accents:!1,hidden_mode:!1,min_chars:1},t);return this.each((function(){var a=e(this);a.opts=[],e.map(["list","nodata","attribute","matches","highlight","ignore","headers","navigation","ignore_accents","hidden_mode","min_chars"],(function(e,s){a.opts[e]=a.data(e)||t[e]})),a.opts.headers&&(a.opts.ignore+=a.opts.ignore?", "+a.opts.headers:a.opts.headers);var s=e(a.opts.list);a.opts.navigation&&a.attr("autocomplete","off"),a.opts.hidden_mode&&s.children().hide(),a.keyup((function(t){if(-1==[38,40,13].indexOf(t.keyCode)&&(8==t.keyCode||a.val().length>=a.opts.min_chars)){var i=a.val().toLowerCase();s.children(a.opts.ignore.trim()?":not("+a.opts.ignore+")":"").removeClass("selected").each((function(){var t=("text"!=a.opts.attribute?e(this).attr(a.opts.attribute)||"":e(this).text()).toLowerCase();-1==t.removeAccents(a.opts.ignore_accents).indexOf(i)||i===(!!a.opts.hidden_mode&&"")?e(this).hide():(n(e(this)),a.opts.matches&&null!==i.match(new RegExp(Object.keys(a.opts.matches)[0]))&&(null!==t.match(new RegExp(Object.values(a.opts.matches)[0]))?n(e(this)):e(this).hide())),a.trigger("_after_each")})),a.opts.nodata&&(s.find(".no-results").remove(),s.children(':not([style*="display: none"])').length||(s.children().first().clone().removeHighlight().addClass("no-results").show().prependTo(a.opts.list).text(a.opts.nodata),a.trigger("_after_nodata"))),a.opts.headers&&e(a.opts.headers,s).each((function(){e(this).nextUntil(a.opts.headers).not('[style*="display: none"],'+a.opts.ignore).length?e(this).show():e(this).hide()})),a.trigger("_after")}function n(e){a.opts.highlight?e.removeHighlight().highlight(i).show():e.show()}function r(e){return e.children(".selected:visible")}var o;a.opts.navigation&&(38==t.keyCode?r(s).length?((o=s,r(o).prevAll(":visible:first")).addClass("selected"),r(s).last().removeClass("selected")):s.children(":visible").last().addClass("selected"):40==t.keyCode?r(s).length?(function(e){return r(e).nextAll(":visible:first")}(s).addClass("selected"),r(s).first().removeClass("selected")):s.children(":visible").first().addClass("selected"):13==t.keyCode&&(r(s).find("a").length?document.location=r(s).find("a").attr("href"):a.val(r(s).text())))}))}))},e(document).ready((function(){e('[data-toggle="hideseek"]').hideseek()}))}(jQuery),jQuery.fn.highlight=function(e){function t(e,a){var s=0;if(3==e.nodeType){var i=e.data.removeAccents(!0).toUpperCase().indexOf(a);if(i>=0){var n=document.createElement("mark");n.className="highlight";var r=e.splitText(i);r.splitText(a.length);var o=r.cloneNode(!0);n.appendChild(o),r.parentNode.replaceChild(n,r),s=1}}else if(1==e.nodeType&&e.childNodes&&!/(script|style)/i.test(e.tagName))for(var l=0;l<e.childNodes.length;++l)l+=t(e.childNodes[l],a);return s}return this.length&&e&&e.length?this.each((function(){t(this,e.toUpperCase())})):this},jQuery.fn.removeHighlight=function(){return this.find("mark.highlight").each((function(){with(this.parentNode.firstChild.nodeName,this.parentNode)replaceChild(this.firstChild,this),normalize()})).end()},String.prototype.removeAccents=function(e){return e?this.replace(/[áàãâä]/gi,"a").replace(/[éè¨ê]/gi,"e").replace(/[íìïî]/gi,"i").replace(/[óòöôõ]/gi,"o").replace(/[úùüû]/gi,"u").replace(/[ç]/gi,"c").replace(/[ñ]/gi,"n"):this}},3379:(e,t,a)=>{"use strict";var s,i=function(){return void 0===s&&(s=Boolean(window&&document&&document.all&&!window.atob)),s},n=function(){var e={};return function(t){if(void 0===e[t]){var a=document.querySelector(t);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}e[t]=a}return e[t]}}(),r=[];function o(e){for(var t=-1,a=0;a<r.length;a++)if(r[a].identifier===e){t=a;break}return t}function l(e,t){for(var a={},s=[],i=0;i<e.length;i++){var n=e[i],l=t.base?n[0]+t.base:n[0],c=a[l]||0,d="".concat(l," ").concat(c);a[l]=c+1;var u=o(d),h={css:n[1],media:n[2],sourceMap:n[3]};-1!==u?(r[u].references++,r[u].updater(h)):r.push({identifier:d,updater:v(h,t),references:1}),s.push(d)}return s}function c(e){var t=document.createElement("style"),s=e.attributes||{};if(void 0===s.nonce){var i=a.nc;i&&(s.nonce=i)}if(Object.keys(s).forEach((function(e){t.setAttribute(e,s[e])})),"function"==typeof e.insert)e.insert(t);else{var r=n(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function h(e,t,a,s){var i=a?"":s.media?"@media ".concat(s.media," {").concat(s.css,"}"):s.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var n=document.createTextNode(i),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(n,r[t]):e.appendChild(n)}}function p(e,t,a){var s=a.css,i=a.media,n=a.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),n&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),e.styleSheet)e.styleSheet.cssText=s;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(s))}}var f=null,g=0;function v(e,t){var a,s,i;if(t.singleton){var n=g++;a=f||(f=c(t)),s=h.bind(null,a,n,!1),i=h.bind(null,a,n,!0)}else a=c(t),s=p.bind(null,a,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(a)};return s(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;s(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var a=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var s=0;s<a.length;s++){var i=o(a[s]);r[i].references--}for(var n=l(e,t),c=0;c<a.length;c++){var d=o(a[c]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}a=n}}}},9741:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});const s={data:function(){return{year:(new Date).getFullYear()}}};const i=(0,a(1900).Z)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"main-footer"},[a("strong",[e._v("Copyright © "+e._s(e.year)+"\n  "),a("a",{attrs:{href:"javascript:;"}}),e._v(".")]),e._v(" All rights reserved.\n")])}),[],!1,null,null,null).exports},4054:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});const s={components:{UserMenu:a(2167).Z}};const i=(0,a(1900).Z)(s,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"main-header"},[a("span",{staticClass:"logo-mini"},[a("a",{attrs:{href:"/"}},[a("img",{staticClass:"img-responsive center-block logo",attrs:{src:"/static/img/copilot-logo-white.svg",alt:"Logo"}})])]),e._v(" "),a("nav",{staticClass:"navbar navbar-static-top",attrs:{role:"navigation"}},[a("a",{staticClass:"sidebar-toggle",attrs:{href:"javascript:;","data-toggle":"offcanvas",role:"button"}},[a("span",{staticClass:"sr-only"},[e._v("Toggle navigation")])]),e._v(" "),a("div",{staticClass:"navbar-custom-menu"},[a("ul",{staticClass:"nav navbar-nav"})])])])}],!1,null,null,null).exports},7841:(e,t,a)=>{"use strict";a.d(t,{Z:()=>f});var s=a(9741),i=a(4054),n=a(9491),r=a(809),o=a(2167),l=a(4491);a(9193);const c={components:{DashFooter:s.Z,Header:i.Z,Menu:n.Z,SiderBar:r.Z,UserMenu:o.Z},data:function(){return{classes:{fixed_layout:l.Z.fixedLayout,hide_logo:l.Z.hideLogoOnMobile}}}};var d=a(3379),u=a.n(d),h=a(6542),p={insert:"head",singleton:!1};u()(h.Z,p);h.Z.locals;const f=(0,a(1900).Z)(c,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:["wrapper",e.classes]},[a("Header"),e._v(" "),a("SiderBar"),e._v(" "),a("div",{staticClass:"content-wrapper"},[e._t("default")],2),e._v(" "),a("dash-footer")],1)}),[],!1,null,null,null).exports},9491:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var s=a(6454),i=a(9680);const n={components:{Link:s.rU},mounted:function(){i.Inertia.on("navigate",(function(e){$("body").removeClass("sidebar-open"),console.log("Navigated to ".concat(e.detail.page.url))}))}};var r=a(3379),o=a.n(r),l=a(7411),c={insert:"head",singleton:!1};o()(l.Z,c);l.Z.locals;const d=(0,a(1900).Z)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"sidebar-menu"},[a("li",{staticClass:"header"},[e._v("Device Manager")]),e._v(" "),a("li",{staticClass:"pageli",attrs:{tag:"li"}}),a("li",{class:["Devices/Index"===e.$page.component?"active":""]},[a("Link",{attrs:{href:e.route("device.index"),only:["devices"]}},[a("i",{staticClass:"fa fa-tasks"}),e._v(" Devices\n        ")])],1),e._v(" "),a("li",{staticClass:"pageli",attrs:{tag:"li"}}),e.hasAnyPermission(["user-manager"])?a("li",{class:["Application/Index"===e.$page.component?"active":""]},[a("Link",{attrs:{href:e.route("application.index")}},[a("i",{staticClass:"fa fa-th",attrs:{"aria-hidden":"true"}}),e._v(" Applications\n        ")])],1):e._e(),e._v(" "),a("li",{staticClass:"pageli",attrs:{tag:"li"}}),e.hasAnyPermission(["user-manager"])?a("li",{class:["Window/Index"===e.$page.component?"active":""]},[a("Link",{attrs:{href:e.route("window-app.index")}},[a("i",{staticClass:"fa fa-windows",attrs:{"aria-hidden":"true"}}),e._v(" WinodwApp\n        ")])],1):e._e(),e._v(" "),a("li",{staticClass:"pageli",attrs:{tag:"li"}}),e.hasAnyPermission(["user-manager"])?a("li",{class:["Wifi/Index"===e.$page.component?"active":""]},[a("Link",{attrs:{href:e.route("wifi.index")}},[a("i",{staticClass:"fa fa-wifi",attrs:{"aria-hidden":"true"}}),e._v(" Wifi\n        ")])],1):e._e(),e._v(" "),a("li",{staticClass:"pageli",attrs:{tag:"li"}}),a("li",{class:["Group/Index"===e.$page.component?"active":""]},[a("Link",{attrs:{href:e.route("group.index")}},[a("i",{staticClass:"fa fa-folder-o",attrs:{"aria-hidden":"true"}}),e._v(" Groups\n        ")])],1),e._v(" "),e.hasAnyPermission(["user-manager"])?a("li",{class:["APK/Index"===e.$page.component?"active":""]},[a("Link",{attrs:{href:e.route("apk.index")}},[a("i",{staticClass:"fa fa-file-archive-o",attrs:{"aria-hidden":"true"}}),e._v(" Installing \n        ")])],1):e._e(),e._v(" "),a("li",{staticClass:"header"}),e._v(" "),a("li",{class:["topup"===e.$page.component?"active":""],attrs:{tag:"li"}},[a("Link",{attrs:{href:e.route("topup.index")}},[a("i",{staticClass:"fa fa-shopping-cart",attrs:{"aria-hidden":"true"}}),e._v(" "),a("span",{staticClass:"page"},[e._v("Top Up")])])],1),e._v(" "),a("li",{class:["payment"===e.$page.component?"active":""],attrs:{tag:"li"}},[a("Link",{attrs:{href:e.route("payment.index")}},[a("i",{staticClass:"fa fa-shopping-cart",attrs:{"aria-hidden":"true"}}),e._v(" "),a("span",{staticClass:"page"},[e._v("Bill")])])],1),e._v(" "),e.hasAnyPermission(["user-manager"])?a("li",{staticClass:"header"},[e._v("User managerment")]):e._e(),e._v(" "),e.hasAnyPermission(["user-manager"])?a("li",{staticClass:"treeview"},[e._m(0),e._v(" "),a("ul",{staticClass:"treeview-menu"},[a("li",{class:["Admin/Permission"===e.$page.component?"active":""]},[a("Link",{attrs:{href:e.route("permissions.index")}},[a("i",{staticClass:"fa fa-shield"}),e._v(" Permissions\n        ")])],1),e._v(" "),a("li",{class:["Admin/Roles"===e.$page.component?"active":""]},[a("Link",{attrs:{href:e.route("roles.index")}},[a("i",{staticClass:"fa fa-check-circle"}),e._v(" Roles\n        ")])],1),e._v(" "),a("li",{class:["Admin/User"===e.$page.component?"active":""]},[a("Link",{attrs:{href:e.route("users.index")}},[a("i",{staticClass:"fa fa-users"}),e._v(" Users\n        ")])],1)])]):e._e(),e._v(" "),e.hasAnyPermission(["user-manager"])?a("li",{staticClass:"header"},[e._v("Admin managerment")]):e._e(),e._v(" "),e.hasAnyPermission(["user-manager"])?a("li",{staticClass:"treeview"},[e._m(1),e._v(" "),a("ul",{staticClass:"treeview-menu"},[a("li",{class:["Package/Index"===e.$page.component?"active":""]},[a("Link",{attrs:{href:e.route("package.index")}},[a("i",{staticClass:"fa fa-product-hunt",attrs:{"aria-hidden":"true"}}),e._v(" Package License\n        ")])],1)])]):e._e(),e._v(" "),a("li",{staticClass:"header"},[e._v("Logout")]),e._v(" "),a("li",{staticClass:"pageli",attrs:{tag:"li"}},[a("Link",{attrs:{href:e.route("logout"),method:"post"}},[a("i",{staticClass:"fa fa-sign-out text-yellow"}),e._v(" "),a("span",{staticClass:"page"},[e._v("Logout")])])],1)])}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-list"}),e._v(" "),a("span",{staticClass:"treeview-title"},[e._v("User managerment")]),e._v(" "),a("span",{staticClass:"pull-right-container pull-right"},[a("i",{staticClass:"fa fa-angle-left fa-fw"})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-list"}),e._v(" "),a("span",{staticClass:"treeview-title"},[e._v("Admin managerment")]),e._v(" "),a("span",{staticClass:"pull-right-container pull-right"},[a("i",{staticClass:"fa fa-angle-left fa-fw"})])])}],!1,null,null,null).exports},809:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});const s={components:{Menu:a(9491).Z},mounted:function(){$('[data-toggle="hideseek"]').off().hideseek()}};var i=a(3379),n=a.n(i),r=a(6581),o={insert:"head",singleton:!1};n()(r.Z,o);r.Z.locals;const l=(0,a(1900).Z)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aside",{staticClass:"main-sidebar"},[a("section",{staticClass:"sidebar"},[a("div",{staticClass:"user-panel"},[a("div",{staticClass:"pull-left image"},[e.$page.props.auth.user?a("img",{attrs:{src:e.$page.props.auth.user.avatar}}):e._e()]),e._v(" "),a("div",{staticClass:"pull-left info"},[a("div",[e.$page.props.auth.user?a("p",{staticClass:"white"},[e._v(e._s(e.$page.props.auth.user.name))]):e._e()]),e._v(" "),e._m(0)])]),e._v(" "),a("form",{staticClass:"sidebar-form",attrs:{id:"searchForm"},on:{submit:function(e){e.preventDefault()}}},[e._m(1)]),e._v(" "),a("Menu")],1)])}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"fa fa-circle text-success"}),e._v(" Online\n        ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"input-group",attrs:{id:"searchContainer"}},[a("span",{staticClass:"input-group-btn"},[a("input",{staticClass:"search form-control",attrs:{type:"text",name:"search",id:"search","data-toggle":"hideseek",p:"",laceholder:"Search Menus","data-list":".sidebar-menu"}}),e._v(" "),a("button",{staticClass:"btn btn-flat",attrs:{type:"submit",name:"search",id:"search-btn"}},[a("i",{staticClass:"fa fa-search"})])])])}],!1,null,null,null).exports},2167:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});const s={components:{Link:a(6454).rU},methods:{logout:function(){this.$inertia.post(route("logout"))}}};const i=(0,a(1900).Z)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"dropdown user user-menu"},[a("a",{staticClass:"dropdown-toggle",attrs:{href:"javascript:;","data-toggle":"dropdown"}},[a("img",{staticClass:"user-image",attrs:{src:e.$page.props.auth.user.avatar,alt:"User Image"}}),e._v(" "),a("span",{staticClass:"hidden-xs"},[e._v(e._s(e.$page.props.auth.user.name))])]),e._v(" "),a("ul",{staticClass:"dropdown-menu"},[a("li",{staticClass:"user-header",staticStyle:{height:"auto","min-height":"85px","padding-bottom":"15px"}},[a("p",[a("span",[e._v(e._s(e.$page.props.auth.user.name))]),e._v(" "),e._l(e.$page.props.auth.user.roles,(function(t){return a("small",{key:t},[e._v(e._s(t))])}))],2)]),e._v(" "),a("li",{staticClass:"user-footer"},[a("a",{staticClass:"btn btn-default btn-flat btn-block",on:{click:function(t){return e.logout()}}},[e._v("Logout")])])])])}),[],!1,null,null,null).exports},3129:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});var s=a(6454);const i={layout:a(7841).Z,components:{Link:s.rU},data:function(){return{name:null}},mounted:function(){this.listenEvent()},methods:{listenEvent:function(){window.socketio.on("active-device:App\\Events\\TestEvent",(function(e){console.log(e)}))},getData:function(){axios.get("https://devinfinity.holomia.com/api/v1/player/show/5").then((function(e){console.log(e)})).catch((function(e){console.log(e),console.log("123")}))}}};const n=(0,a(1900).Z)(i,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v(e._s(e.name))])}),[],!1,null,null,null).exports},1900:(e,t,a)=>{"use strict";function s(e,t,a,s,i,n,r,o){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=a,c._compiled=!0),s&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),r?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=l):i&&(l=o?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(e,t){return l.call(t),d(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:c}}a.d(t,{Z:()=>s})}}]);