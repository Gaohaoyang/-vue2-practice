System.register(["./index-legacy.efaf6321.js"],(function(e,t){"use strict";var s,o,n=document.createElement("style");return n.textContent=".message[data-v-c937edb6]{font-size:20px}\n",document.head.appendChild(n),{setters:[function(e){s=e.n,o=e.L}],execute:function(){var t=s({props:["todo"]},(function(){var e=this,t=e._self._c;return t("div",[t("li",[e._v(e._s(e.todo.text))])])}),[],!1,null,"928df4ae",null,null).exports;e("default",s({data:function(){return{message:"Hello World!",hoverMessage:"hover",seen:!0,todos:[{id:0,text:"学习 JavaScript"},{id:1,text:"学习 Vue"},{id:2,text:"整个牛项目"}]}},methods:{},computed:{reverseMessage:function(){return this.message.split("").reverse().join("")}},components:{LearnViewItem:t,LoadingDots:o},beforeCreate:function(){},created:function(){console.log("created",this.message)},beforeMount:function(){console.log("beforeMount",this.message)},mounted:function(){console.log("mounted",this.message)},beforeUpdate:function(){console.log("beforeUpdate",this.message)},updated:function(){console.log("updated",this.message)},beforeDestroy:function(){console.log("beforeDestroy",this.message)},destroyed:function(){console.log("destroyed",this.message)}},(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"message"},[e._v(" "+e._s(e.message)+" ")]),t("div",[e._v(" "+e._s(e.reverseMessage)+" ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),t("div",[t("span",{attrs:{title:e.hoverMessage}},[e._v("鼠标悬停几秒钟查看此处动态绑定的提示信息！")])]),e.seen?t("p",[e._v("现在你看到我了")]):e._e(),t("ol",e._l(e.todos,(function(e){return t("LearnViewItem",{key:e.id,attrs:{todo:e}})})),1),t("LoadingDots")],1)}),[],!1,null,"c937edb6",null,null).exports)}}}));
