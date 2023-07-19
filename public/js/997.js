"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[997],{2997:(t,e,a)=>{a.r(e),a.d(e,{default:()=>i});const o={props:{errors:Object,applications:Array,current_group:Object},data:function(){return{search:"",editMode:!0,form:this.$inertia.form({appName:null,link_app:null,time:null})}},computed:{filteredList:function(){var t=this;return this.applications.filter((function(e){return e.appName.toLowerCase().includes(t.search.toLowerCase())}))}},reset:function(){this.form=this.$inertia.form({appName:null,link_app:null})},methods:{reset:function(){this.form=this.$inertia.form({appName:null,link_app:null,time:null})},clickApp:function(t){$("#OpenGroupAppTimeModal").modal("hide"),$("#openNotificationTimeGroup").modal("show"),this.form.link_app=t.packageName,this.form.appName=t.appName},close:function(){Bus.$emit("cloesModal"),$("#OpenGroupAppTimeModal").modal("hide"),$("#openNotificationTimeGroup").modal("hide"),this.reset()},lauchApp:function(){var t=this;this.form.post(route("group.runAppGroupWithTime",this.current_group.id),{preserveState:!0,onError:function(t){},onSuccess:function(e){$("#openNotification").modal("hide"),$(".sidebar-mini").css("padding-right","0px"),$("#openNotificationTimeGroup").modal("hide"),t.reset()}})}}};const i=(0,a(1900).Z)(o,(function(){var t=this,e=t._self._c;return t.current_group?e("div",[e("div",{staticClass:"modal fade",staticStyle:{"padding-right":"0px"},attrs:{id:"OpenGroupAppTimeModal",tabindex:"-1",role:"dialog","aria-labelledby":"openAppModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"OpenGroupAppTimeModal"}},[t._v("Launch App")]),t._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.close()}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),e("div",{staticClass:"modal-body"},[e("form",[e("div",{staticClass:"w-full max-w-md p-4 mb-8 mt-8"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"relative w-full px-8 py-3 text-xl rounded-r focus:shadow-outline",attrs:{autocomplete:"off",type:"text",name:"search",placeholder:"Search…"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),t._l(t.filteredList,(function(a,o){return e("ul",{key:o,staticClass:"flex flex-col p-4"},[e("li",{staticClass:"border-gray-200 flex flex-row mb-2",on:{click:function(e){return e.preventDefault(),t.clickApp(a)}}},[e("div",{staticClass:"select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"},[e("div",{staticClass:"flex flex-col rounded-md w-10 h-10 bg-gray-100 justify-center items-center mr-4"},[e("img",{attrs:{src:a.icon,width:"50px"}})]),t._v(" "),e("div",{staticClass:"flex-1 pl-1 mr-16"},[e("div",{staticClass:"font-medium"},[t._v(t._s(a.appName))]),t._v(" "),e("div",{staticClass:"text-gray-600 tex-xl"},[t._v(t._s(a.packageName))])])])])])}))],2)])])])]),t._v(" "),e("div",{staticClass:"modal fade",staticStyle:{width:"100%","padding-right":"0"},attrs:{id:"openNotificationTimeGroup",tabindex:"-1",role:"dialog","aria-labelledby":"openNotificationLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"openNotificationTimeGroup"}},[t._v("Launch App")]),t._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.close()}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),e("div",{staticClass:"modal-body"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.lauchApp.apply(null,arguments)}}},[e("div",{staticClass:"bg-blue-100 rounded-lg py-5 px-6 mb-3 tex-xl text-blue-700 inline-flex items-center w-full",attrs:{role:"alert"}},[e("svg",{staticClass:"w-6 h-6 mr-2 fill-current",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"}})]),t._v(" "),e("p",{staticClass:"ml-2"},[t._v("Are you want to run app   "),e("strong",[t._v(t._s(t.form.appName))]),t._v("  for all device\n                            in   "),e("strong",[t._v(" "+t._s(t.current_group.name))]),t._v("  group")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.form.time,expression:"form.time"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 ml-3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{id:"countries"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"time",e.target.multiple?a:a[0])}}},[e("option",{attrs:{selected:""}},[t._v("Choose a Time")]),t._v(" "),e("option",{attrs:{value:"15"}},[t._v("15 minutes")]),t._v(" "),e("option",{attrs:{value:"30"}},[t._v("30 minutes")]),t._v(" "),e("option",{attrs:{value:"45"}},[t._v("45 minutes")]),t._v(" "),e("option",{attrs:{value:"60"}},[t._v("60 minutes")])]),t._v(" "),t.errors.time?e("div",{staticClass:"text-red-500"},[t._v(t._s(t.errors.time))]):t._e()]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-black text-xl leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.close()}}},[t._v("Close")]),t._v(" "),e("button",{staticClass:"inline-block px-6 py-2.5 bg-gray-800 text-white font-black text-xl leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.lauchApp()}}},[t._v("Run\n                            ")])])])])])])])]):t._e()}),[],!1,null,null,null).exports},1900:(t,e,a)=>{function o(t,e,a,o,i,r,s,n){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=a,c._compiled=!0),o&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=l):i&&(l=n?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}a.d(e,{Z:()=>o})}}]);