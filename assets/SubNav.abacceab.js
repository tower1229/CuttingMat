import{n as t,M as e,d as i}from"./index.c0cac681.js";import"./ui.98a3144a.js";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.showMenu?i("div",{staticClass:"custom-menu scrollbar"},[i("el-menu",{attrs:{"default-active":t.activeIndex,router:"","unique-opened":""}},[t._l(t.list,(function(e,n){return[e.children&&e.children.length?i("el-submenu",{key:"nav"+n,attrs:{route:e,index:e.name}},[i("div",{staticClass:"first flex-row align-center",attrs:{slot:"title"},slot:"title"},[i("i",{class:["ico",e.meta&&e.meta.icon||"el-icon-s-order"]}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(e.meta&&e.meta.title||e.name)+" ")])]),t._l(e.children,(function(e,n){return[e.children&&e.children.length?[i("el-menu-item",{key:"child"+n,staticClass:"second",attrs:{route:e,index:e.name}},[i("span",{staticClass:"flex-row align-center",attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(e.meta&&e.meta.title||e.name)+" ")])]),t._l(e.children,(function(e,n){return i("el-menu-item",{key:"grandson"+n,staticClass:"third",attrs:{route:e,index:e.name}},[i("span",{staticClass:"flex-row align-center",attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(e.meta&&e.meta.title||e.name)+" ")])])}))]:i("el-menu-item",{key:"child2"+n,staticClass:"second",attrs:{route:e,index:e.name}},[i("span",{staticClass:"flex-row align-center",attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(e.meta&&e.meta.title||e.name)+" ")])])]}))],2):i("el-menu-item",{key:"nav"+n,staticClass:"flex-row align-center one",attrs:{route:e,index:e.name}},[i("i",{class:["ico",e.meta&&e.meta.icon||"el-icon-s-order"]}),i("span",{attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(e.meta&&e.meta.title||e.name)+" ")])])]}))],2)],1):t._e()},s=[];let a=function(t,e){return t.filter((t=>!t.meta||!t.meta.hide)).map((t=>{const n=i(t);let s=0===n.path.indexOf("/")?n.path:[e,n.path].join("/"===e?"":"/");return n.fullPath=s,n.meta||(n.meta={}),Array.isArray(n.children)&&(n.children=a(n.children,s)),n}))};const l={props:{subMenu:{type:Boolean,required:!1,default:!1}},data(){return{state:this.$store.state,list:[],showMenu:!0}},computed:{menu:function(){return[...this.$AccessControl?this.state.DynamicRoute[0].children:a(e[0].children)]},activeIndex(){return this.$route.meta&&this.$route.meta.belong?this.$route.meta.belong:this.$route.name}},watch:{$route:{handler(t){if(!this.subMenu)return null;let e=-1;if(Array.isArray(this.list)&&(e=this.list.findIndex((e=>0===t.path.indexOf(e.fullPath)))),-1===e){let t,e=this.menu.slice();for(let i=0;i<e.length;i++)if(0===this.$route.path.indexOf(e[i].path)&&e[i].children){t=e[i].children;break}this.list=t,this.showMenu=!1,this.$nextTick((()=>{this.showMenu=!0}))}},immediate:!0}},created(){this.subMenu||(this.list=this.menu)}},r={};var o=t(l,n,s,!1,c,"f743994c",null,null);function c(t){for(let e in r)this[e]=r[e]}var u=function(){return o.exports}();export{u as default};
