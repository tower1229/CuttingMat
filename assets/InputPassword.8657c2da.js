import{n as e}from"./index.e87509cf.js";import"./ui.ab87dbd1.js";const t=function(e){let t="";for(let r=0;r<e.length;r++)t=e.charAt(r)+t;return t};const r=e({name:"input-password",model:{prop:"value",event:"change"},props:{name:{type:String,required:!1,default:""},value:{type:[String,Number],required:!1,default:""},placeholder:{type:String,required:!1,default:"请输入密码"},size:{type:String,required:!1,default:""},minlength:{type:Number,require:!1,default:8},maxlength:{type:Number,require:!1,default:20},suffixIcon:{type:String,required:!1,default:""},prefixIcon:{type:String,required:!1,default:""},autocomplete:{type:String,required:!1,default:"off"},showPassword:{type:Boolean,required:!1,default:!0},disabled:{type:Boolean,required:!1,default:!1},readonly:{type:Boolean,required:!1,default:!1},clearable:{type:Boolean,required:!1,default:!1},autofocus:{type:Boolean,required:!1,default:!1},format:{type:Function,required:!1,default:e=>e>=0&&e<25?"弱":e>=25&&e<50?"中":e>=50&&e<75?"强":"很强"},color:{type:Array,required:!1,default:()=>["#F56C6C","#E6A23C","#9fcc8a","#67c23a"]}},data:()=>({myValue:null}),computed:{score(){return function(e,r){let a=0,n=0,l=0,s=0,o=0,i=0,u=0,p=0,d=0,c=0,f=0,h=0,m=0,g=0,y=0,I=0,x=0,b=0,v=0,S="",q="",w="";if(r=r||6,e){a=parseInt(4*e.length),n=e.length;let C=e.replace(/\s+/g,"").split(/\s*/),_=C.length;for(let e=0;e<_;e++){C[e].match(/[A-Z]/g)?(""!==S&&S+1==e&&h++,S=e,l++):C[e].match(/[a-z]/g)?(""!==q&&q+1==e&&m++,q=e,s++):C[e].match(/[0-9]/g)?(e>0&&e<_-1&&u++,""!==w&&w+1==e&&g++,w=e,o++):C[e].match(/[^a-zA-Z0-9_]/g)&&(e>0&&e<_-1&&u++,i++);let t=!1;for(let r=0;r<_;r++)C[e]==C[r]&&e!=r&&(t=!0,f+=Math.abs(_/(r-e)));t&&(c++,d=_-c,f=d?Math.ceil(f/d):Math.ceil(f))}for(let r=0;r<23;r++){let a="abcdefghijklmnopqrstuvwxyz".substring(r,parseInt(r+3)),n=t(a);-1==e.toLowerCase().indexOf(a)&&-1==e.toLowerCase().indexOf(n)||y++}for(let r=0;r<8;r++){let a="01234567890".substring(r,parseInt(r+3)),n=t(a);-1==e.toLowerCase().indexOf(a)&&-1==e.toLowerCase().indexOf(n)||I++}for(let r=0;r<8;r++){let a="~!@#$%^&*()_+,./".substring(r,parseInt(r+3)),n=t(a);-1==e.toLowerCase().indexOf(a)&&-1==e.toLowerCase().indexOf(n)||x++}l>0&&l<n&&(a=parseInt(a+2*(n-l))),s>0&&s<n&&(a=parseInt(a+2*(n-s))),o>0&&o<n&&(a=parseInt(a+4*o)),i>0&&(a=parseInt(a+6*i)),u>0&&(a=parseInt(a+2*u)),(s>0||l>0)&&0===i&&0===o&&(a=parseInt(a-n)),0===s&&0===l&&0===i&&o>0&&(a=parseInt(a-n)),s>0&&v++,l>0&&v++,i>0&&v++,o>0&&v++,c>0&&(a=parseInt(a-f)),h>0&&(a=parseInt(a-2*h)),m>0&&(a=parseInt(a-2*m)),g>0&&(a=parseInt(a-2*g)),y>0&&(a=parseInt(a-3*y)),I>0&&(a=parseInt(a-3*I)),x>0&&(a=parseInt(a-3*x));let L=[n,l,s,o,i],A=["nLength","nAlphaUC","nAlphaLC","nNumber","nSymbol"],V=L.length;for(let e=0;e<V;e++){let t=0;"nLength"==A[e]&&(t=parseInt(r-1)),(L[e]==parseInt(t+1)||L[e]>parseInt(t+1))&&b++}p=b;let z=4;e.length>=r&&(z=3),p>z&&(a=parseInt(a+2*p)),a>100?a=100:a<0&&(a=0)}return v<2&&(a=0),{nScore:a,category:v}}(this.myValue,this.minlength).nScore},scoreStyle(){let e;for(let t=0;t<this.color.length;t++){const r=parseInt((t+1)/this.color.length*100),a=parseInt(t/this.color.length*100);if(this.score<r&&this.score>=a){e=t;break}}return{textStyle:{color:this.color[e]},progressStyle:{width:`${parseInt((e+1)/this.color.length*100)}%`,background:`linear-gradient(\n            to right,\n            ${this.color[e]},\n            ${this.color[e]} 12px,\n            transparent 12px,\n            transparent\n          ) 0  0/16px 100%`}}}},watch:{value:{handler(e){this.myValue=e},immediate:!0},myValue:{handler(){this.$emit("change",this.myValue)},immediate:!0}},methods:{handleInput(e){if(null==e)return null;this.myValue=e.toString().trim().replace(/[^a-zA-Z0-9!@#$%^&*(),./]/g,""),this.$emit("verify",this.score)}}},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"input-password"},[t("el-input",{attrs:{name:e.name,value:e.myValue,placeholder:e.placeholder,size:e.size,maxlength:e.maxlength,minlength:e.minlength,"suffix-icon":e.suffixIcon,"prefix-icon":e.prefixIcon,autocomplete:e.autocomplete,"show-password":e.showPassword,disabled:e.disabled,readonly:e.readonly,clearable:e.clearable,autofocus:e.autofocus},on:{input:e.handleInput},nativeOn:{"!paste":function(e){return e.preventDefault(),(!1).apply(null,arguments)},"!copy":function(e){return e.preventDefault(),(!1).apply(null,arguments)},"!cut":function(e){return e.preventDefault(),(!1).apply(null,arguments)}}},[e.myValue?t("div",{attrs:{slot:"append"},slot:"append"},[t("div",{staticClass:"_text",style:e.scoreStyle.textStyle},[e._v(" "+e._s(e.format(e.score))+" ")]),t("div",{staticClass:"_progress"},[t("div",{staticClass:"_bar",style:e.scoreStyle.progressStyle})])]):e._e()])],1)}),[],!1,null,"29109053",null,null).exports;export{r as default};
