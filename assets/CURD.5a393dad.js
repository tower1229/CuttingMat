import{n as d,_ as s,d as o,b as c}from"./index.528966d6.js";import"./ui.e08bd340.js";var h=function(){var e=this,i=e.$createElement,r=e._self._c||i;return r("div",[r("el-table",e._b({ref:"table",attrs:{data:e.list},on:{select:function(t,a){return e.$emit("select",t,a)},"select-all":function(t){return e.$emit("select-all",t)},"selection-change":function(t){return e.$emit("selection-change",t)},"cell-mouse-enter":function(t,a,l,n){return e.$emit("cell-mouse-enter",t,a,l,n)},"cell-mouse-leave":function(t,a,l,n){return e.$emit("cell-mouse-leave",t,a,l,n)},"cell-click":function(t,a,l,n){return e.$emit("cell-click",t,a,l,n)},"cell-dblclick":function(t,a,l,n){return e.$emit("cell-dblclick",t,a,l,n)},"row-click":function(t,a,l){return e.$emit("row-click",t,a,l)},"row-contextmenu":function(t,a,l){return e.$emit("row-click",t,a,l)},"row-dblclick":function(t,a,l){return e.$emit("row-dblclick",t,a,l)},"header-click":function(t,a){return e.$emit("header-click",t,a)},"header-contextmenu":function(t,a){return e.$emit("header-contextmenu",t,a)},"sort-change":function(t,a,l){return e.$emit("sort-change",t,a,l)},"filter-change":function(t){return e.$emit("filter-change",t)},"current-change":function(t,a){return e.$emit("current-change",t,a)},"header-dragend":function(t,a,l,n){return e.$emit("header-dragend",t,a,l,n)},"expand-change":function(t,a){return e.$emit("expand-change",t,a)}}},"el-table",Object.assign({border:!0,"default-expand-all":!0,"row-key":"id"},e.tableAttribute),!1),[r("template",{slot:"append"},[e._t("append")],2),e.selectionNode&&e.selectionNode.type==="selection"?r("el-table-column",e._b({},"el-table-column",e.selectionNode,!1)):e._e(),e._l(e.columnsData,function(t,a){return r("CURDColumn",{key:"col"+a,attrs:{column:t},scopedSlots:e._u([e._l(Object.keys(e.$scopedSlots),function(l){return{key:l,fn:function(n){return[e._t(l,null,{column:n.column,row:n.row,prop:n.prop})]}}})],null,!0)})})],2),e.showPagination?r("Pagination",{attrs:{"page-size":e.queryParamFinnal.pageSize,"current-page":e.queryParamFinnal.p,"total-count":e.totalCount,"total-page":e.totalPage},on:{"current-change":e.handleCurrentChange}}):e._e(),r("el-dialog",e._b({attrs:{visible:e.dialogVisible},on:{close:e.handleCloseDialog}},"el-dialog",Object.assign({title:"\u8BE6\u60C5",width:"800px","close-on-click-modal":!1,"append-to-body":!0},e.dialogAttribute),!1),[e.dialogVisible?r("CURDForm",{ref:"editForm",attrs:{model:e.modelData,default:e.editForm,action:e.editScope,formAttribute:e.formAttribute}}):e._e(),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("\u786E \u5B9A")]),r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("\u53D6 \u6D88")])],1)],1)],1)},f=[];const m={props:{api:{type:Object,required:!0},model:{type:Object,required:!0,default(){return{accountName:{type:"string",default:null,label:"\u7528\u6237\u540D",control:"el-input",controlOption:{},scope:["create","update"],required:!1,validator:null,message:null,asynValid:!1}}}},columns:{type:Array,required:!0,default(){return[{hidden:!1,slotName:""}]}},dataKey:{type:String,required:!1,default:"id"},immediate:{type:Boolean,required:!1,default:!0},queryParam:{type:Object,required:!1,default(){return{}}},getItemFromDetaiApi:{type:Boolean,required:!1,default:!1},tableAttribute:{type:Object,required:!1,default(){return{}}},dialogAttribute:{type:Object,required:!1,default(){return{}}},formAttribute:{type:Object,required:!1,default(){return{}}}},filters:{formatterFilter(e,i,r,t,a){return typeof a=="function"?a(i,r,e,t):e}},components:{CURDForm:()=>s(()=>import("./CURDForm.b434a400.js"),["assets/CURDForm.b434a400.js","assets/CURD.c29b3f84.css","assets/index.528966d6.js","assets/index.ceda03b6.css","assets/ui.e08bd340.js"]),CURDColumn:()=>s(()=>import("./CURDColumn.00cc194f.js"),["assets/CURDColumn.00cc194f.js","assets/CURD.c29b3f84.css","assets/index.528966d6.js","assets/index.ceda03b6.css","assets/ui.e08bd340.js"])},data(){return{dialogVisible:!1,loading:!1,list:[],editForm:{},editScope:"",queryParamFinnal:{p:1,pageSize:10},totalCount:0,totalPage:0,selectionNode:null,table:{clearSelection:()=>this.$refs.table.clearSelection(),toggleRowSelection:(e,i)=>this.$refs.table.toggleRowSelection(e,i),toggleAllSelection:()=>this.$refs.table.toggleAllSelection(),toggleRowExpansion:(e,i)=>this.$refs.table.toggleRowExpansion(e,i),setCurrentRow:e=>this.$refs.table.setCurrentRow(e),clearSort:()=>this.$refs.table.clearSort(),clearFilter:e=>this.$refs.table.clearFilter(e),doLayout:()=>this.$refs.table.doLayout(),sort:(e,i)=>this.$refs.table.clearFilter(e,i)},form:{validate:e=>this.$refs.editForm.validate(e),validateField:(e,i)=>this.$refs.editForm.validateField(e,i),resetFields:()=>this.$refs.editForm.resetFields(),clearValidate:()=>this.$refs.editForm.clearValidate()}}},computed:{showPagination(){return this.list.length&&this.totalCount&&this.totalPage},modelKey(){return Object.keys(this.model)},modelData(){let e=Object.assign({},this.model);return this.modelKey.forEach(i=>{let r=Object.assign({},e[i]);e[i]=Object.assign({type:"string",default:{array:[],object:{}}[r.type]||null,control:{boolean:"el-switch",array:"DictCheckbox"}[r.type]||"el-input",scope:["create","update"],required:!!r.required},r),r.control==="el-input"&&(r.controlOption=Object.assign({maxlength:100},r.controlOption))}),e},modelValue(){let e={};return this.modelKey.map(i=>{e[i]=this.modelData[i].default}),e},columnsData(){return this.columns.filter(e=>e.type==="selection"?(this.selectionNode=Object.assign({},e),!1):!e.hidden).map(e=>{let i=Object.assign({align:"center"},e);return(i.type==="selection"||i.type==="expand")&&console.warn('BaseCURD\u7EC4\u4EF6\uFF1Acolumns=>type\u5C5E\u6027\u53EA\u652F\u6301"default"\u548C"index"'),i})}},watch:{loading(){this.$emit("loading-state",this.loading)}},methods:{handleCurrentChange:function(e){this.queryParamFinnal.p=e,this.fetchList()},create(){this.editForm=Object.assign({},this.modelValue),this.editScope="create",this.dialogVisible=!0},update:async function(e){this.editForm=this.getItemFromDetaiApi?await this.fetchDetail(e[this.dataKey]):o(e),this.editScope="update",this.dialogVisible=!0},save(){this.$refs.editForm.validate(e=>{if(e){let i=o(this.editForm);this.handleCloseDialog();let r=this.api[this.editScope];if(typeof r!="function")return console.warn(`api.${this.editScope}()\u672A\u5B9A\u4E49`);this.loading=!0,r(i).then(t=>{t.status===200?(this.$message({message:"\u64CD\u4F5C\u6210\u529F",type:"success"}),this.fetchList()):this.$message({message:"\u64CD\u4F5C\u5931\u8D25",type:"warning"})}).catch(()=>{this.loading=!1})}})},delete(e){if(!e||!e[this.dataKey])return console.warn(`api.delete(): \u53C2\u6570${this.dataKey}\u65E0\u6548`);this.$confirm("\u662F\u5426\u5220\u9664?","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{this.loading=!0,this.api.delete({[this.dataKey]:e[this.dataKey]}).then(i=>{i.status===200?(this.fetchList(),this.$message({message:"\u5220\u9664\u6210\u529F",type:"success"})):this.$message({message:"\u5220\u9664\u5931\u8D25",type:"warning"})}).catch(()=>{this.loading=!1})}).catch(()=>{})},handleCloseDialog:function(){this.dialogVisible=!1,this.editForm=Object.assign({},this.modelValue)},fetchDetail:function(e){return e?(this.loading=!0,this.api.detail({[this.dataKey]:e}).then(i=>(this.loading=!1,i.data)).catch(()=>{this.loading=!1})):console.warn(`api.detail(): \u53C2\u6570${this.dataKey}\u65E0\u6548`)},fetchList:function(e){e&&(this.queryParamFinnal.p=1),this.loading=!0,this.api.list(this.queryParamFinnal).then(i=>{this.loading=!1;const r=i.data;Array.isArray(r)?this.list=c(r):Array.isArray(r.list)&&(this.list=c(r.list),this.totalCount=r.totalCount,this.totalPage=r.totalPage)}).catch(()=>{this.loading=!1})},search(){Object.assign(this.queryParamFinnal,this.queryParam,{p:this.queryParamFinnal.p,pageSize:this.queryParamFinnal.pageSize}),this.fetchList(!0)}},created(){let e=["list","detail","create","update","delete"].filter(i=>typeof this.api[i]!="function");e.length&&console.warn(`${e.map(i=>"api."+i+"()").join("\u3001")}\u672A\u5B9A\u4E49`),this.immediate&&this.search()}},u={};var p=d(m,h,f,!1,g,"7b33b81e",null,null);function g(e){for(let i in u)this[i]=u[i]}var _=function(){return p.exports}();export{_ as default};
