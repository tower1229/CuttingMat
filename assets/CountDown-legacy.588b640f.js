System.register(["./index-legacy.33a97e20.js","./ui-legacy.e48c6bce.js"],(function(e){"use strict";var t;return{setters:[function(e){t=e.n},function(){}],execute:function(){e("default",t({name:"count-down",emits:["start","end"],props:{count:{type:Number,required:!0},format:{type:Function,default:function(e){return"".concat(e,"s")}}},data:function(){return{renderNumber:null,timer:null}},methods:{start:function(){var e=this;return new Promise((function(t){e.renderNumber=e.count,e.timer=setInterval((function(){e.renderNumber-1>0?e.renderNumber--:(e.reset(),t(),e.$emit("end"))}),1e3),e.$emit("start")}))},reset:function(){this.timer=clearInterval(this.timer),this.renderNumber=null}}},(function(){var e=this,t=e._self._c;return t("span",{staticClass:"countdown"},[e.renderNumber?t("span",[e._v(" "+e._s(e.format(e.renderNumber))+" ")]):e._t("default")],2)}),[],!1,null,"701710d5",null,null).exports)}}}));
