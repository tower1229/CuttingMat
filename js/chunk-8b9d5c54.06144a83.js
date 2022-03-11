(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b9d5c54"],{ff47:function(t,e,a){"use strict";a.r(e),a.d(e,"list",(function(){return n})),a.d(e,"detail",(function(){return o})),a.d(e,"add",(function(){return i})),a.d(e,"edit",(function(){return c})),a.d(e,"remove",(function(){return s}));var r=a("c7b2"),n=function(t){return r["b"].get("/role/s",{params:t})},o=function(t){return r["b"].get("/role",{params:t})},i=function(t){return r["b"].post("/role",t)},c=function(t){return r["b"].put("/role",t)},s=function(t){return r["b"].delete("/role",{params:t})}},ffb8:function(t,e,a){"use strict";a.r(e);var r={};a.r(r),a.d(r,"list",(function(){return c})),a.d(r,"detail",(function(){return s})),a.d(r,"add",(function(){return l})),a.d(r,"edit",(function(){return u})),a.d(r,"remove",(function(){return d})),a.d(r,"resetPassword",(function(){return m}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen",value:t.loading,expression:"loading",modifiers:{fullscreen:!0}}],staticClass:"scrollbar blockLayout"},[a("div",{staticClass:"flex-row align-center toolBar"},[a("div",{staticClass:"flex-1"}),a("el-button",{directives:[{name:"auth",rawName:"v-auth",value:t.account.add,expression:"account.add"}],attrs:{type:"primary",size:"small",icon:"el-icon-plus"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("添加")])],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list}},[a("el-table-column",{attrs:{prop:"accountNumber",label:"账号",align:"center"}}),a("el-table-column",{attrs:{prop:"accountName",label:"用户名",align:"center"}}),a("el-table-column",{attrs:{prop:"roleName",label:"角色",align:"center"}}),a("el-table-column",{attrs:{label:"状态",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.state?[a("span",{staticStyle:{color:"#13ce66"}},[t._v("已启用")])]:[a("span",{staticStyle:{color:"#ff4949"}},[t._v("已禁用")])]]}}])}),a("el-table-column",{attrs:{label:"操作",width:"300",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{directives:[{name:"auth",rawName:"v-auth",value:t.account.edit,expression:"account.edit"}],attrs:{size:"mini"},on:{click:function(a){return t.edit(e.row)}}},[t._v("编辑")]),a("el-button",{directives:[{name:"auth",rawName:"v-auth",value:t.account.resetPassword,expression:"account.resetPassword"}],attrs:{size:"mini",type:"warning"},on:{click:function(a){return t.resetPassword(e.row)}}},[t._v("重置密码")]),a("el-button",{directives:[{name:"auth",rawName:"v-auth",value:t.account.remove,expression:"account.remove"}],attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.remove(e.row)}}},[t._v("删除")])]}}])})],1),a("Pagination",{attrs:{"page-size":t.queryParam.pageSize,"current-page":t.queryParam.p,"total-count":t.totalCount,"total-page":t.totalPage},on:{"current-change":t.handleCurrentChange}}),a("el-dialog",{attrs:{"close-on-click-modal":!1,title:"账号信息",visible:t.dialogVisible,width:"800px"},on:{close:t.handleCloseDialog}},[a("el-form",{ref:"editForm",attrs:{size:"small",rules:t.rules,model:t.editForm,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"账号",prop:"accountNumber"}},[a("el-input",{attrs:{maxlength:100},model:{value:t.editForm.accountNumber,callback:function(e){t.$set(t.editForm,"accountNumber","string"===typeof e?e.trim():e)},expression:"editForm.accountNumber"}})],1),a("el-form-item",{attrs:{label:"用户名",prop:"accountName"}},[a("el-input",{attrs:{maxlength:100},model:{value:t.editForm.accountName,callback:function(e){t.$set(t.editForm,"accountName","string"===typeof e?e.trim():e)},expression:"editForm.accountName"}})],1),t.editForm.id?t._e():[a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:t.editForm.password,callback:function(e){t.$set(t.editForm,"password",e)},expression:"editForm.password"}})],1),a("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[a("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:t.editForm.checkPass,callback:function(e){t.$set(t.editForm,"checkPass",e)},expression:"editForm.checkPass"}})],1)],a("el-form-item",{attrs:{label:"所属组织",prop:"orgId"}},[a("OrgPicker",{attrs:{adapter:t.orgAdapter},on:{change:function(e){return t.$refs.editForm.validateField("orgId")}},model:{value:t.editForm.orgId,callback:function(e){t.$set(t.editForm,"orgId",e)},expression:"editForm.orgId"}})],1),a("el-form-item",{attrs:{label:"角色"}},[a("DictSelect",{attrs:{load:t.requestRoles,labelKey:"name"},model:{value:t.editForm.roleId,callback:function(e){t.$set(t.editForm,"roleId",e)},expression:"editForm.roleId"}})],1),a("el-form-item",{attrs:{label:"状态"}},[a("el-switch",{attrs:{"active-text":"启用","inactive-text":"禁用","active-value":1,"inactive-value":0},model:{value:t.editForm.state,callback:function(e){t.$set(t.editForm,"state",e)},expression:"editForm.state"}})],1)],2),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("确 定")]),a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")])],1)],1)],1)},o=[],i=a("c7b2"),c=function(t){return i["b"].get("/account/s",{params:t})},s=function(t){return i["b"].get("/account",{params:t})},l=function(t){return i["b"].post("/account",t)},u=function(t){return i["b"].put("/account",t)},d=function(t){return i["b"].delete("/account",{params:t})},m=function(t){return i["b"].put("/account/reset",t)},f=a("ff47"),p={components:{OrgPicker:function(t){return a.e("chunk-d3e9d55c").then(function(){var e=[a("152a")];t.apply(null,e)}.bind(this)).catch(a.oe)}},data:function(){var t=this,e=function(e,a,r){a?(""!==t.editForm.checkPass&&t.$refs.editForm.validateField("checkPass"),r()):r(new Error("请输入密码"))},a=function(e,a,r){a?a!==t.editForm.password?r(new Error("两次输入密码不一致!")):r():r(new Error("请再次输入密码"))};return{account:r,dialogVisible:!1,loading:!1,list:[],editForm:{id:"",accountNumber:"",accountName:"",password:"",roles:[],state:1},queryParam:{pageSize:10,p:1},totalCount:0,totalPage:0,rules:{accountNumber:[{required:!0,message:"请输入账号",trigger:"blur"}],accountName:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{validator:e,trigger:"blur"}],checkPass:[{validator:a,trigger:"blur"}],orgId:[{required:!0,message:"请选择所属组织"}]},requestRoles:f["list"]}},methods:{orgAdapter:function(t,e){return e.name||this.editForm.belongOrgName||t},handleCurrentChange:function(t){this.queryParam.p=t,this.fetchData()},resetPassword:function(t){var e=this;if(!t)return null;this.$confirm("确定重置账号 ".concat(t.accountNumber," 的密码?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.loading=!0,m({id:t.id}).then((function(t){e.fetchData(),e.$alert("密码已重置，请牢记新密码：<code>".concat(t.data.password,"</code>"),{confirmButtonText:"我知道了",dangerouslyUseHTMLString:!0})})).catch((function(){e.loading=!1}))}))},edit:function(t){var e=Object.assign({},t);e.roles=Array.isArray(e.roles)?e.roles.map((function(t){return t.roleId})):[],this.editForm=e,this.dialogVisible=!0},save:function(){var t=this;this.$refs["editForm"].validate((function(e){if(e){t.loading=!0;var a=i["e"].deepcopy(t.editForm);t.handleCloseDialog();var r=a.id?u:l;r(a).then((function(){t.fetchData(),t.$message({message:"添加成功",type:"success"})})).catch((function(){t.loading=!1}))}}))},handleCloseDialog:function(){this.dialogVisible=!1,this.editForm={id:"",accountNumber:"",accountName:"",password:"",roles:[],state:1},this.$refs.editForm&&this.$refs.editForm.resetFields()},remove:function(t){var e=this;if(!t)return null;this.$confirm("是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.loading=!0,d({id:t.id}).then((function(){e.fetchData(),e.$message({message:"删除成功",type:"success"})})).catch((function(){e.loading=!1}))}))},fetchData:function(t){var e=this;t&&(this.queryParam.p=1),this.loading=!0,c(this.queryParam).then((function(t){e.loading=!1;var a=t.data;a&&(e.list=a.list,e.totalCount=a.totalCount,e.totalPage=a.totalPage)})).catch((function(){e.loading=!1}))}},created:function(){this.fetchData()}},g=p,h=a("2877"),b=Object(h["a"])(g,n,o,!1,null,"5d99adcc",null);e["default"]=b.exports}}]);