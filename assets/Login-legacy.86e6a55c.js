!function(){var t=document.createElement("style");t.innerHTML=".loginPage[data-v-4ecbd241]{background:url(/template-element-ui/assets/b.af6c9463.jpg) center no-repeat;background-size:cover}.login-form[data-v-4ecbd241]{width:320px;background:#fff;border-radius:10px;padding:20px 40px;margin:auto}.main-title[data-v-4ecbd241]{font-size:28px;color:#257ff7;margin-bottom:40px;text-align:center}.sub-title[data-v-4ecbd241]{font-size:18px;font-weight:400;text-align:center;color:#257ff7;margin-bottom:20px}.sub-title ._text[data-v-4ecbd241]{display:inline-block;line-height:1.4;border-bottom:3px solid #257ff7}.des[data-v-4ecbd241]{text-align:center;color:#999;margin-bottom:2em}.submit-item[data-v-4ecbd241]{margin-top:20px}.submit-button[data-v-4ecbd241]{width:100%}.footer-info[data-v-4ecbd241]{position:fixed;left:0;right:0;bottom:0;text-align:center;font-size:.9em;color:#999}.footer-info ._s[data-v-4ecbd241]{display:inline-block;margin:0 .5em}\n",document.head.appendChild(t),System.register(["./index-legacy.d71519e0.js","./ui-legacy.d1f3cf38.js"],(function(t,e){"use strict";var a,r,n,i;return{setters:[function(t){a=t.n,r=t._,n=t.l,i=t.e},function(){}],execute:function(){var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex-row align-center justify-center loginPage"},[a("div",[a("h1",{staticClass:"main-title"},[t._v("平台名称文字占位符后台管理系统")]),a("el-form",{ref:"validForm",staticClass:"login-form",attrs:{model:t.formData,rules:t.rules},nativeOn:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[a("h2",{staticClass:"sub-title"},[a("span",{staticClass:"_text"},[t._v("请登录")])]),a("el-form-item",{attrs:{prop:"account"}},[a("el-input",{attrs:{autofocus:!0,placeholder:"输入用户名"},model:{value:t.formData.account,callback:function(e){t.$set(t.formData,"account",e)},expression:"formData.account"}})],1),a("el-form-item",{attrs:{prop:"password"}},[a("el-input",{attrs:{placeholder:"输入密码",type:"password","show-password":""},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}})],1),a("el-form-item",{attrs:{prop:"captcha"}},[a("inputCapthaImage",{ref:"validCode"})],1),a("div",[a("el-checkbox",{attrs:{value:t.$store.state.rememberLogin},on:{change:function(e){return t.$store.set("rememberLogin",e)}}},[t._v("记住我")])],1),a("el-form-item",{staticClass:"submit-item"},[a("el-button",{staticClass:"submit-button",attrs:{"native-type":"submit",type:"primary",loading:t.loading}},[t._v("登录")])],1)],1),a("div",{staticClass:"footer-info"},[t._v(" @2022 版权所有 占位文字 "),a("span",{staticClass:"_s"},[t._v("|")]),t._v(" Github： "),a("el-link",{attrs:{type:"primary",href:"https://github.com/cutting-mat",target:"_blank"}},[t._v("cutting-mat")])],1)],1)])},s={},c=a({components:{inputCapthaImage:function(){return r((function(){return e.import("./InputCaptchaImage-legacy.8fb94563.js")}),void 0)}},data:function(){var t=this;return{loading:!1,formData:{account:"",password:"",captcha:""},rules:{account:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:30,message:"长度在 3 到 30 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:30,message:"长度在 6 到 30 个字符",trigger:"blur"}],captcha:[{validator:function(){return new Promise((function(e,a){if(!t.formData.captcha)return t.$refs.validCode.valid().then((function(a){t.formData.captcha=a,e()})).catch(a);e()}))},trigger:"blur"}]}}},methods:{login:function(){var t=this;if(this.loading)return null;this.loading=!0,this.$refs.validForm.validate((function(e){e?n(t.formData).then((function(e){200===e.status?(t.loading=!1,i.emit("login",{redirect:t.$router.currentRoute.query.redirect||"/",data:e.data})):t.$message({message:"登陆失败",type:"warning"})})).catch((function(){t.loading=!1})):t.loading=!1}))}}},o,[],!1,l,"4ecbd241",null,null);function l(t){for(var e in s)this[e]=s[e]}t("default",function(){return c.exports}())}}}))}();
