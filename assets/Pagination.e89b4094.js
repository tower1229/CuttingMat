import{n as u}from"./index.528966d6.js";import"./ui.e08bd340.js";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-pagination",{staticClass:"pagination",attrs:{background:"","page-sizes":[10,20,30,50],layout:"prev, pager, next, sizes","page-size":e.pageSize,"current-page":e.currentPage,total:e.totalCount},on:{"current-change":function(r){return e.$emit("current-change",r)},"size-change":function(r){return e.$emit("size-change",r)}}})},o=[];const c={props:{pageSize:{type:Number,required:!0,default:10},currentPage:{type:Number,required:!0,default:1},totalCount:{type:Number,required:!0},totalPage:{type:Number,required:!1}},data(){return{}},watch:{totalPage:function(){this.totalPage<this.currentPage&&this.$emit("current-change",1)}}},n={};var s=u(c,i,o,!1,l,"c5c1b40c",null,null);function l(e){for(let t in n)this[t]=n[t]}var g=function(){return s.exports}();export{g as default};
