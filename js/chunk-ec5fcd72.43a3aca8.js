(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ec5fcd72"],{"4dbe":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-select",t._b({on:{change:function(e){return t.$emit("change",e)}},model:{value:t.bindValue,callback:function(e){t.bindValue=e},expression:"bindValue"}},"el-select",t.attribute,!1),[t.nullAble?n("el-option",{attrs:{label:t.placeholder,value:null}}):t._e(),t._l(t.list,(function(e){return n("el-option",{key:e.value,attrs:{label:e[t.labelKey],value:e[t.valueKey]}})}))],2)},r=[],u=n("a34a"),a=n.n(u),c=n("c7b2"),l=n("5ac4");function o(t,e,n,i,r,u,a){try{var c=t[u](a),l=c.value}catch(o){return void n(o)}c.done?e(l):Promise.resolve(l).then(i,r)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var u=t.apply(e,n);function a(t){o(u,i,r,a,c,"next",t)}function c(t){o(u,i,r,a,c,"throw",t)}a(void 0)}))}}var s={model:{prop:"value",event:"change"},props:{load:{type:[String,Function],required:!0},value:{type:[String,Number],required:!1},valueKey:{type:String,required:!1,default:"id"},labelKey:{type:String,required:!1,default:"value"},nullAble:{type:Boolean,required:!1,default:!0},placeholder:{type:String,required:!1,default:"请选择"},attribute:{type:Object,required:!1,default:function(){return{}}},loadTransfer:{type:Function,required:!1,default:function(t){return t.data}}},data:function(){return{bindValue:null,list:[]}},watch:{value:{handler:function(){this.value&&(this.bindValue=this.value)},immediate:!0}},methods:{fetchDict:function(){var t=this;Object(l["itemList"])({dictCode:this.load},{cache:!0}).then((function(e){t.list=c["e"].buildTree(e.data)}))},fetchRemoteData:function(){var t=d(a.a.mark((function t(){return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=this,t.next=3,this.load();case 3:t.t1=t.sent,this.list=t.t0.loadTransfer.call(t.t0,t.t1);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.load&&this.load.split?this.fetchDict():"function"===typeof this.load&&this.fetchRemoteData()}},f=s,p=n("2877"),h=Object(p["a"])(f,i,r,!1,null,"3185609b",null);e["default"]=h.exports},"5ac4":function(t,e,n){"use strict";n.r(e),n.d(e,"list",(function(){return r})),n.d(e,"add",(function(){return u})),n.d(e,"edit",(function(){return a})),n.d(e,"remove",(function(){return c})),n.d(e,"itemList",(function(){return l})),n.d(e,"itemAdd",(function(){return o})),n.d(e,"itemEdit",(function(){return d})),n.d(e,"itemRemove",(function(){return s}));var i=n("c7b2"),r=function(t){return i["b"].get("/dict/s",{params:t})},u=function(t){return i["b"].post("/dict",t)},a=function(t){return i["b"].put("/dict",t)},c=function(t){return i["b"].delete("/dict",{params:t})},l=function(t,e){return i["b"].get("/dict/item/s",{params:t},e)},o=function(t){return i["b"].post("/dict/item",t)},d=function(t){return i["b"].put("/dict/item",t)},s=function(t){return i["b"].delete("/dict/item",{params:t})}},a34a:function(t,e,n){t.exports=n("96cf")}}]);