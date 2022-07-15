!function(){var e=document.createElement("style");e.innerHTML=".resourceEditFrom[data-v-46692e6a]{width:430px}\n",document.head.appendChild(e),System.register(["./index-legacy.33a97e20.js","./resource-legacy.398a1f20.js","./ui-legacy.e48c6bce.js"],(function(e,t){"use strict";var r,i,o,a,n;return{setters:[function(e){r=e.n,i=e._,o=e.d,a=e.b},function(e){n=e.r},function(){}],execute:function(){e("default",r({components:{TheResourcePicker:function(){return i((function(){return t.import("./TheResourcePicker-legacy.6a67a951.js")}),void 0)}},data:function(){var e=this;return{resource:n,loading:!1,list:[],editForm:{pid:null,method:"get",name:"",url:"",type:0},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"},{min:1,max:100,message:"长度 1 到 100 个字符",trigger:"blur"}],url:[{required:!0,message:"请输入路由/URL",trigger:"blur"}],method:[{validator:function(t,r,i){if(1===e.editForm.type&&!r)return i(new Error("请填写Method!"));i()},trigger:"blur"}]},requestMethods:[{label:"GET"},{label:"POST"},{label:"PUT"},{label:"DELETE"}]}},methods:{edit:function(e){this.editForm=o(e),this.editForm.method=this.editForm.method.toLowerCase()},append:function(e){this.editForm={pid:e.id,name:"",route:"",type:0}},addResource:function(e){this.editForm={pid:e.id,method:"get",name:"",url:"",type:1}},save:function(){var e=this;this.$refs.editForm.validate((function(t){if(t){var r=o(e.editForm),i=n;Array.isArray(r.pid)&&(r.pid=r.pid.pop()),r.method&&(r.method=r.method.toLowerCase()),e.loading=!0,(r.id?i.edit:i.add)(r).then((function(){e.fetchData(),e.$message({message:"添加成功",type:"success"})})).catch((function(){e.loading=!1}))}}))},resetFrom:function(){this.editForm={pid:"",name:"",route:""},this.$refs.editForm&&this.$refs.editForm.resetFields()},remove:function(e){var t=this;if(!e||!e.id)return null;var r=n;this.$confirm("是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.loading=!0,r.remove({id:e.id}).then((function(){t.fetchData(),t.$message({message:"删除成功",type:"success"})})).catch((function(){t.loading=!1}))}))},fetchData:function(){var e=this;this.loading=!0,this.$store.getPermission({cache:"update"}).then((function(t){e.loading=!1,e.list=a(t.menus.concat(t.resources))})).catch((function(){e.loading=!1}))}},created:function(){this.fetchData()}},(function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"flex-col"},[t("ToolBar"),t("div",{staticClass:"flex-1 flex-row"},[t("div",{staticClass:"resourceWrap flex-1 scrollbar"},[t("TheResourcePicker",{attrs:{listdata:e.list},on:{edit:e.edit,append:e.append,"add-resource":e.addResource,remove:e.remove}})],1),t("el-form",{ref:"editForm",staticClass:"resourceEditFrom",attrs:{size:"small",rules:e.rules,model:e.editForm,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"名称",prop:"name"}},[t("el-input",{attrs:{maxlength:100},model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name","string"==typeof t?t.trim():t)},expression:"editForm.name"}})],1),1===e.editForm.type?t("el-form-item",{attrs:{label:"方法",prop:"method"}},[t("el-radio-group",{model:{value:e.editForm.method,callback:function(t){e.$set(e.editForm,"method",t)},expression:"editForm.method"}},e._l(e.requestMethods,(function(r,i){return t("el-radio",{key:"m"+i,attrs:{label:r.label.toLowerCase()}},[e._v(e._s(r.label))])})),1)],1):e._e(),1===e.editForm.type?t("el-form-item",{attrs:{label:"URL",prop:"url"}},[t("el-input",{model:{value:e.editForm.url,callback:function(t){e.$set(e.editForm,"url","string"==typeof t?t.trim():t)},expression:"editForm.url"}})],1):t("el-form-item",{attrs:{label:"路由",prop:"route"}},[t("el-input",{attrs:{maxlength:100},model:{value:e.editForm.route,callback:function(t){e.$set(e.editForm,"route","string"==typeof t?t.trim():t)},expression:"editForm.route"}})],1),t("el-form-item",{attrs:{label:"父级"}},[t("el-cascader",{attrs:{options:e.list,props:{checkStrictly:!0,label:"name",value:"id"}},model:{value:e.editForm.pid,callback:function(t){e.$set(e.editForm,"pid",t)},expression:"editForm.pid"}})],1),t("el-form-item",{attrs:{label:"序号"}},[t("el-input",{attrs:{type:"number"},model:{value:e.editForm.orderNum,callback:function(t){e.$set(e.editForm,"orderNum","string"==typeof t?t.trim():t)},expression:"editForm.orderNum"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保 存")]),t("el-button",{on:{click:e.resetFrom}},[e._v("重 置")])],1)],1)],1)],1)}),[],!1,null,"46692e6a",null,null).exports)}}}))}();
