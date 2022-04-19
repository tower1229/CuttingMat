!function(){var e=document.createElement("style");e.innerHTML=".userEditDialog[data-v-775fb045] .upload_avatar{display:block;width:120px;height:120px;line-height:120px;background:#dedede;text-align:center}.userEditDialog[data-v-775fb045] .upload_avatar img{width:100%;height:100%;object-fit:cover}\n",document.head.appendChild(e),System.register(["./index-legacy.d71519e0.js","./account-legacy.a48f27b0.js","./role-legacy.cd45529b.js","./ui-legacy.d1f3cf38.js"],(function(e,t){"use strict";var a,r,o,n,i,c,l,s,u,d;return{setters:[function(e){a=e.n,r=e._,o=e.d},function(e){n=e.a,i=e.r,c=e.b,l=e.e,s=e.c,u=e.l},function(e){d=e.l},function(){}],execute:function(){var m={},f=a({components:{OrgPicker:function(){return r((function(){return t.import("./OrgPicker-legacy.bed3bf93.js")}),void 0)}},data:function(){var e=this;return{account:n,dialogVisible:!1,loading:!1,list:[],editForm:{id:"",accountNumber:"",accountName:"",password:"",roles:[],state:1},queryParam:{pageSize:10,p:1,accountNumber:"",accountName:""},totalCount:0,totalPage:0,rules:{accountNumber:[{required:!0,message:"请输入账号",trigger:"blur"}],accountName:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{validator:function(t,a,r){a?(""!==e.editForm.checkPass&&e.$refs.editForm.validateField("checkPass"),r()):r(new Error("请输入密码"))},trigger:"blur"}],checkPass:[{validator:function(t,a,r){a?a!==e.editForm.password?r(new Error("两次输入密码不一致!")):r():r(new Error("请再次输入密码"))},trigger:"blur"}],orgId:[{required:!0,message:"请选择所属组织"}]},requestRoles:d}},methods:{resetSearch:function(){this.queryParam={pageSize:10,p:1,accountNumber:"",accountName:""},this.fetchData(!0)},orgAdapter:function(e,t){return t.name||this.editForm.belongOrgName||e},resetPassword:function(e){var t=this;if(!e)return null;this.$confirm("确定重置账号 ".concat(e.accountNumber," 的密码?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.loading=!0,i({id:e.id}).then((function(e){e.data.password?t.$clipboard(e.data.password).then((function(){t.$alert("新密码已复制到剪贴板，请保管好新密码：<code>".concat(e.data.password,"</code>"),{confirmButtonText:"我知道了",dangerouslyUseHTMLString:!0}).then((function(){t.fetchData()}))})).catch((function(){t.$alert("密码已重置，请牢记新密码：<code>".concat(e.data.password,"</code>"),{confirmButtonText:"我知道了",dangerouslyUseHTMLString:!0}).then((function(){t.fetchData()}))})):t.$message.warning("操作失败，请重试")})).catch((function(){t.loading=!1}))}))},edit:function(e){var t=Object.assign({},e);t.roles=Array.isArray(t.roles)?t.roles.map((function(e){return e.roleId})):[],this.editForm=t,this.dialogVisible=!0},save:function(){var e=this;this.$refs.editForm.validate((function(t){if(t){e.loading=!0;var a=o(e.editForm);e.handleCloseDialog(),(a.id?l:c)(a).then((function(){e.fetchData(),e.$message({message:"添加成功",type:"success"})})).catch((function(){e.loading=!1}))}}))},handleCloseDialog:function(){this.dialogVisible=!1,this.editForm={id:"",accountNumber:"",accountName:"",password:"",roles:[],state:1},this.$refs.editForm&&this.$refs.editForm.resetFields()},remove:function(e){var t=this;if(!e)return null;this.$confirm("是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.loading=!0,s({id:e.id}).then((function(){t.fetchData(),t.$message({message:"删除成功",type:"success"})})).catch((function(){t.loading=!1}))}))},fetchData:function(e){var t=this;e&&(this.queryParam.p=1),this.loading=!0,u(this.queryParam).then((function(e){t.loading=!1;var a=e.data;a&&(t.list=a.list,t.totalCount=a.totalCount,t.totalPage=a.totalPage)})).catch((function(){t.loading=!1}))}},created:function(){this.fetchData()}},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[a("ToolBar",[a("el-button",{directives:[{name:"auth",rawName:"v-auth",value:e.account.add,expression:"account.add"}],attrs:{type:"primary",size:"small",icon:"el-icon-plus"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("添加")])],1),a("el-form",{ref:"searchForm",attrs:{inline:"",model:e.queryParam,size:"small"}},[a("el-form-item",{attrs:{label:"账号"}},[a("el-input",{model:{value:e.queryParam.accountNumber,callback:function(t){e.$set(e.queryParam,"accountNumber",t)},expression:"queryParam.accountNumber"}})],1),a("el-form-item",{attrs:{label:"用户名"}},[a("el-input",{model:{value:e.queryParam.accountName,callback:function(t){e.$set(e.queryParam,"accountName",t)},expression:"queryParam.accountName"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){return e.fetchData(!0)}}},[e._v("查询")]),a("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:function(t){return e.resetSearch()}}},[e._v("重置")])],1)],1),a("p",[a("i",{staticClass:"el-icon-info"}),e._v(" 共 "),a("el-button",{attrs:{type:"text"}},[e._v(e._s(e.totalCount))]),e._v(" 条记录 ")],1),a("el-table",{attrs:{data:e.list}},[a("el-table-column",{attrs:{prop:"accountNumber",label:"账号",align:"center"}}),a("el-table-column",{attrs:{prop:"accountName",label:"用户名",align:"center"}}),a("el-table-column",{attrs:{prop:"roleName",label:"角色",align:"center"}}),a("el-table-column",{attrs:{label:"状态",width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.state?[a("span",{staticStyle:{color:"#13ce66"}},[e._v("已启用")])]:[a("span",{staticStyle:{color:"#ff4949"}},[e._v("已禁用")])]]}}])}),a("el-table-column",{attrs:{label:"操作",width:"300",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"auth",rawName:"v-auth",value:e.account.edit,expression:"account.edit"}],attrs:{size:"small"},on:{click:function(a){return e.edit(t.row)}}},[e._v("编辑")]),a("el-button",{directives:[{name:"auth",rawName:"v-auth",value:e.account.resetPassword,expression:"account.resetPassword"}],attrs:{size:"small",type:"warning",plain:""},on:{click:function(a){return e.resetPassword(t.row)}}},[e._v("重置密码")]),a("el-button",{directives:[{name:"auth",rawName:"v-auth",value:e.account.remove,expression:"account.remove"}],attrs:{size:"small",type:"danger",plain:""},on:{click:function(a){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1),a("Pagination",{attrs:{"page-size":e.queryParam.pageSize,"current-page":e.queryParam.p,"total-count":e.totalCount,"total-page":e.totalPage},on:{"current-change":function(t){e.queryParam.p=t,e.fetchData()},"size-change":function(t){e.queryParam.pageSize=t,e.fetchData(!0)}}}),a("el-dialog",{staticClass:"userEditDialog",attrs:{"close-on-click-modal":!1,title:"账号信息",visible:e.dialogVisible,width:"600px"},on:{close:e.handleCloseDialog}},[a("el-form",{ref:"editForm",attrs:{size:"small",rules:e.rules,model:e.editForm,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"头像",prop:"avatar"}},[a("uploader",{staticClass:"upload_avatar",attrs:{accept:"t-image",value:e.editForm.avatar?[{url:e.editForm.avatar}]:[],imgCrop:"","show-file-list":!1,"on-success":function(t){e.$set(e.editForm,"avatar",t.url)}}},[e.editForm.avatar?a("img",{attrs:{src:e.editForm.avatar,alt:""}}):a("span",[e._v("上传头像")])])],1),a("el-form-item",{attrs:{label:"账号",prop:"accountNumber"}},[a("el-input",{attrs:{maxlength:100},model:{value:e.editForm.accountNumber,callback:function(t){e.$set(e.editForm,"accountNumber","string"==typeof t?t.trim():t)},expression:"editForm.accountNumber"}})],1),a("el-form-item",{attrs:{label:"用户名",prop:"accountName"}},[a("el-input",{attrs:{maxlength:100},model:{value:e.editForm.accountName,callback:function(t){e.$set(e.editForm,"accountName","string"==typeof t?t.trim():t)},expression:"editForm.accountName"}})],1),e.editForm.id?e._e():[a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("input-password",{attrs:{autocomplete:"off"},model:{value:e.editForm.password,callback:function(t){e.$set(e.editForm,"password",t)},expression:"editForm.password"}})],1),a("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[a("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.editForm.checkPass,callback:function(t){e.$set(e.editForm,"checkPass",t)},expression:"editForm.checkPass"}})],1)],a("el-form-item",{attrs:{label:"所属组织",prop:"orgId"}},[a("OrgPicker",{attrs:{adapter:e.orgAdapter},on:{change:function(t){return e.$refs.editForm.validateField("orgId")}},model:{value:e.editForm.orgId,callback:function(t){e.$set(e.editForm,"orgId",t)},expression:"editForm.orgId"}})],1),a("el-form-item",{attrs:{label:"角色"}},[a("DictSelect",{attrs:{request:e.requestRoles,labelKey:"name"},model:{value:e.editForm.roleId,callback:function(t){e.$set(e.editForm,"roleId",t)},expression:"editForm.roleId"}})],1),a("el-form-item",{attrs:{label:"状态"}},[a("el-switch",{attrs:{"active-text":"启用","inactive-text":"禁用","active-value":1,"inactive-value":0},model:{value:e.editForm.state,callback:function(t){e.$set(e.editForm,"state",t)},expression:"editForm.state"}})],1)],2),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")]),a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")])],1)],1)],1)}),[],!1,p,"775fb045",null,null);function p(e){for(var t in m)this[t]=m[t]}e("default",function(){return f.exports}())}}}))}();
