!function(){function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function t(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}System.register(["./index-legacy.efaf6321.js"],(function(e,r){"use strict";var n,o,a,s,i,c,l,d=document.createElement("style");return d.textContent=".wrap[data-v-0b2b6482]{width:100%;display:flex;flex-direction:column;align-items:center}.pic[data-v-0b2b6482]{width:80%;min-height:100px;margin-top:30px;border-radius:24px;transition:box-shadow .3s ease}.shadow[data-v-0b2b6482]{box-shadow:0 0 14px 2px rgba(0,0,0,.4)}\n",document.head.appendChild(d),{setters:[function(e){n=e.V,o=e.n,a=e.E,s=e.L,i=e.m,c=e.a,l=e.u}],execute:function(){var r=n.extend({props:{pic:{type:String,required:!0}},data:function(){return{loaded:!1}},methods:{handleLoad:function(){this.loaded=!0}}}),d=o(r,(function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"wrap"},[t("img",{staticClass:"pic",class:e.loaded?"shadow":"",attrs:{src:e.pic,alt:"dog"},on:{load:e.handleLoad}})])}),[],!1,null,"0b2b6482",null,null).exports,u=n.extend({created:function(){this.changeTitle("Pics of ".concat(this.$route.params.breed)),this.getDogsPics()},components:{ErrStatus:a,LoadingDots:s,Pic:d},data:function(){return{showErr:!1,loading:!0,pics:[]}},methods:t(t({},i(l,["changeTitle"])),{},{getDogsPics:function(){var e=this;c.get("https://dog.ceo/api/breed/".concat(this.$route.params.breed,"/images/random/10")).then((function(t){console.log(t.data),"success"===t.data.status?(console.log(t.data.message),e.pics=t.data.message,e.loading=!1):(console.log("error"),e.handleError())})).catch((function(t){console.log(t),e.handleError()}))},handleError:function(){this.showErr=!0,this.loading=!1}}),beforeRouteLeave:function(e,t,r){"dogsBreedList"===e.name&&this.changeTitle("Dogs Breeds List"),r()}});e("default",o(u,(function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",[e.loading?t("LoadingDots"):e._e(),e.showErr?t("ErrStatus"):e._e(),e._l(e.pics,(function(r,n){return t("Pic",{key:n,style:{marginBottom:n===e.pics.length-1?"80px":"0"},attrs:{pic:r}})}))],2)}),[],!1,null,"6734f098",null,null).exports)}}}))}();
