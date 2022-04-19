import{e as s,a as l}from"./auth.19da349a.js";import{n}from"./index.528966d6.js";import"./ui.e08bd340.js";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-form",{ref:"form",staticClass:"auth_email",attrs:{model:t.formData,rules:t.rules,"label-position":"left","v-loading":t.loading}},[e("el-form-item",[t._v("\u5B89\u5168\u90AE\u7BB1\uFF1A"+t._s(t.anonymousEmail))]),e("el-form-item",{attrs:{prop:"inputEmail"}},[e("el-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u5B89\u5168\u90AE\u7BB1","prefix-icon":"el-icon-message"},model:{value:t.formData.inputEmail,callback:function(i){t.$set(t.formData,"inputEmail",i)},expression:"formData.inputEmail"}})],1),e("el-form-item",{attrs:{prop:"userInput"}},[e("el-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"},model:{value:t.formData.userInput,callback:function(i){t.$set(t.formData,"userInput",i)},expression:"formData.userInput"}},[e("countdownButton",{ref:"countdownButton",attrs:{slot:"append",count:30},on:{click:t.sendValidCode},slot:"append"},[t._v("\u83B7\u53D6\u9A8C\u8BC1\u7801")])],1)],1),e("el-form-item",[e("el-button",{staticStyle:{width:"100%"},attrs:{"native-type":"button",type:"primary"},on:{click:t.handleSubmit}},[t._v("\u7ACB\u5373\u9A8C\u8BC1")])],1)],1)},u=[];const m={data(){return{loading:!1,formData:{id:null,userInput:null,inputEmail:null},rules:{inputEmail:[{validator:(a,e,i)=>{e?(this.userEmail!==e&&i(new Error("\u90AE\u7BB1\u4E0D\u6B63\u786E")),i()):i(new Error("\u8BF7\u8F93\u5165\u5B89\u5168\u90AE\u7BB1"))}}],userInput:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",trigger:"blur"},{min:4,max:6,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u9A8C\u8BC1\u7801",trigger:"blur"}]}}},computed:{userEmail(){return this.$store.state.user.email},anonymousEmail(){if(this.userEmail){const t=this.userEmail.split("@")[0].split("");return`${t.map((e,i)=>i===0||i===t.length-1?e:"*").join("")}@${this.userEmail.split("@")[1]}`}return""}},methods:{sendValidCode(){this.$refs.form.validateField("inputEmail",t=>{t||(this.loading=!0,s({email:this.formData.inputEmail}).then(a=>{this.loading=!1,a.status===200?(this.formData.id=a.data.id,this.$refs.countdownButton.start()):this.$message.warning("\u9A8C\u8BC1\u90AE\u4EF6\u53D1\u9001\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5")}).catch(()=>{this.loading=!1}))})},handleSubmit(){this.$refs.form.validateField("userInput",t=>{t||(this.loading=!0,l(this.formData).then(a=>{this.loading=!1,a.status===200?this.$emit("success",a.data):(this.$refs.form.resetFields(),this.$message.warning("\u9A8C\u8BC1\u5931\u8D25"))}).catch(()=>{this.loading=!1}))})}}},r={};var d=n(m,o,u,!1,f,"7061ce22",null,null);function f(t){for(let a in r)this[a]=r[a]}var _=function(){return d.exports}();export{_ as default};
