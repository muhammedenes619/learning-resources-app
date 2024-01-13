(function(){"use strict";var e={5402:function(e,t,n){var o=n(9242),r=n(3396);function i(e,t,n,o,i,s){const l=(0,r.up)("the-header"),u=(0,r.up)("the-resources");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l),(0,r.Wm)(u)],64)}function s(e,t,n,o,i,s){const l=(0,r.up)("base-button"),u=(0,r.up)("base-card");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[(0,r.Wm)(l,{mode:s.storedResourceButtonMode,onClick:t[0]||(t[0]=e=>i.selectedTab="stored-resources")},{default:(0,r.w5)((()=>[(0,r.Uk)("Stored Resources")])),_:1},8,["mode"]),(0,r.Wm)(l,{mode:s.addResourceButtonMode,onClick:t[1]||(t[1]=e=>i.selectedTab="add-resource")},{default:(0,r.w5)((()=>[(0,r.Uk)("Add Resources")])),_:1},8,["mode"])])),_:1}),((0,r.wg)(),(0,r.j4)(r.Ob,null,[((0,r.wg)(),(0,r.j4)((0,r.LL)(i.selectedTab)))],1024))])}function l(e,t,n,o,i,s){const l=(0,r.up)("single-resource");return(0,r.wg)(),(0,r.iD)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.storedResources,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e.id},[(0,r.Wm)(l,{id:e.id,title:e.title,description:e.description,link:e.link},null,8,["id","title","description","link"])])))),128))])}var u=n(7139);const d=["href"];function c(e,t,n,o,i,s){const l=(0,r.up)("base-button"),c=(0,r.up)("base-card");return(0,r.wg)(),(0,r.j4)(c,null,{default:(0,r.w5)((()=>[(0,r._)("header",null,[(0,r._)("h2",null,(0,u.zw)(n.title),1),(0,r.Wm)(l,{onClick:t[0]||(t[0]=e=>s.deleteResource(n.id)),mode:"flat"},{default:(0,r.w5)((()=>[(0,r.Uk)(" Delete ")])),_:1})]),(0,r._)("p",null,(0,u.zw)(n.description),1),(0,r._)("a",{href:n.link},"Visit Site",8,d)])),_:1})}var a={name:"SingleResource",props:["id","title","description","link"],inject:["deleteResource"]},p=n(89);const f=(0,p.Z)(a,[["render",c],["__scopeId","data-v-888354d4"]]);var v=f,h={inject:["storedResources"],components:{SingleResource:v}};const _=(0,p.Z)(h,[["render",l],["__scopeId","data-v-2b605022"]]);var m=_;const g=e=>((0,r.dD)("data-v-4f0ddb1e"),e=e(),(0,r.Cn)(),e),b={action:""},w=g((()=>(0,r._)("label",{for:"title"},"Title",-1))),k={class:"form-control"},R=g((()=>(0,r._)("label",{for:"description"},"Description",-1))),D={class:"form-control"},I=g((()=>(0,r._)("label",{for:"link"},"Link",-1))),T={class:"form-control"},j=g((()=>(0,r._)("h2",null,"Sorry !!",-1))),y=g((()=>(0,r._)("p",null,"Please fill all info",-1)));function C(e,t,n,i,s,l){const u=(0,r.up)("base-button"),d=(0,r.up)("base-card"),c=(0,r.up)("base-error");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r._)("form",b,[w,(0,r._)("div",k,[(0,r.wy)((0,r._)("input",{type:"text",name:"title",id:"title",placeholder:"Title","onUpdate:modelValue":t[0]||(t[0]=e=>s.inputTitle=e)},null,512),[[o.nr,s.inputTitle]])]),R,(0,r._)("div",D,[(0,r.wy)((0,r._)("textarea",{name:"description",id:"description",placeholder:"Description","onUpdate:modelValue":t[1]||(t[1]=e=>s.inputDescription=e)},null,512),[[o.nr,s.inputDescription]])]),I,(0,r._)("div",T,[(0,r.wy)((0,r._)("input",{type:"link",name:"link",id:"link",placeholder:"Link","onUpdate:modelValue":t[2]||(t[2]=e=>s.inputLink=e)},null,512),[[o.nr,s.inputLink]])]),(0,r.Wm)(u,{type:"submit",onClick:(0,o.iM)(l.saveResource,["prevent"])},{default:(0,r.w5)((()=>[(0,r.Uk)("Add Resource")])),_:1},8,["onClick"])])])),_:1}),s.dialogIsActive?((0,r.wg)(),(0,r.j4)(c,{key:0,onCloseDialog:l.closeDialog},{header:(0,r.w5)((()=>[j])),default:(0,r.w5)((()=>[y])),actions:(0,r.w5)((()=>[(0,r.Wm)(u,{onClick:l.closeDialog},{default:(0,r.w5)((()=>[(0,r.Uk)("Close")])),_:1},8,["onClick"])])),_:1},8,["onCloseDialog"])):(0,r.kq)("",!0)],64)}var W={inject:["addNewResource"],data(){return{inputTitle:"",inputDescription:"",inputLink:"",dialogIsActive:!1}},methods:{closeDialog(){this.dialogIsActive=!1},saveResource(){if(""===this.inputDescription.trim()||""===this.inputLink.trim()||""===this.inputTitle.trim())this.dialogIsActive=!0;else{const e={id:Date().toString(),title:this.inputTitle,description:this.inputDescription,link:this.inputLink};console.log(e.id),this.addNewResource(e)}}}};const O=(0,p.Z)(W,[["render",C],["__scopeId","data-v-4f0ddb1e"]]);var L=O,Z={components:{StoredResources:m,AddResource:L},computed:{addResourceButtonMode(){return"add-resource"!==this.selectedTab?"flat":null},storedResourceButtonMode(){return"stored-resources"!==this.selectedTab?"flat":null}},data(){return{selectedTab:"stored-resources",storedResources:[{id:"testId",title:"Vue js",description:"vue js documentation",link:"https://vuejs.org"},{id:"googleId",title:"google",description:"google js documentation",link:"https://google.com"}]}},methods:{addNewResource(e){this.storedResources.unshift(e),this.selectedTab="stored-resources"},deleteResource(e){console.log("delete",e);let t=this.storedResources.findIndex((t=>t.id===e));this.storedResources.splice(t,1)}},provide(){return{storedResources:this.storedResources,addNewResource:this.addNewResource,deleteResource:this.deleteResource}}};const x=(0,p.Z)(Z,[["render",s]]);var U=x,A={components:{TheResources:U},data(){return{}}};const B=(0,p.Z)(A,[["render",i]]);var S=B;function $(e,t,n,o,i,s){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.WI)(e.$slots,"default",{},void 0,!0)])}var M={};const H=(0,p.Z)(M,[["render",$],["__scopeId","data-v-b0532d0e"]]);var N=H;function V(e,t,n,o,i,s){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("button",{class:(0,u.C_)(n.mode)},[(0,r.WI)(e.$slots,"default",{},void 0,!0)],2)])}var Y={props:["mode"]};const E=(0,p.Z)(Y,[["render",V],["__scopeId","data-v-2d26e041"]]);var P=E;const z=e=>((0,r.dD)("data-v-d400b768"),e=e(),(0,r.Cn)(),e),q={open:""},F=z((()=>(0,r._)("h2",null,"Error",-1)));function K(e,t,n,o,i,s){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",{onClick:t[0]||(t[0]=t=>e.$emit("close-dialog"))}),(0,r._)("dialog",q,[(0,r._)("header",null,[(0,r.WI)(e.$slots,"header",{},(()=>[F]),!0)]),(0,r._)("section",null,[(0,r.WI)(e.$slots,"default",{},void 0,!0)]),(0,r._)("menu",null,[(0,r.WI)(e.$slots,"actions",{},void 0,!0)])])],64)}var G={};const J=(0,p.Z)(G,[["render",K],["__scopeId","data-v-d400b768"]]);var Q=J;const X=e=>((0,r.dD)("data-v-d5c05e86"),e=e(),(0,r.Cn)(),e),ee=X((()=>(0,r._)("h1",null,"Remember These Resources",-1)));function te(e,t,n,o,i,s){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("header",null,[(0,r.WI)(e.$slots,"default",{},(()=>[ee]),!0)])])}var ne={};const oe=(0,p.Z)(ne,[["render",te],["__scopeId","data-v-d5c05e86"]]);var re=oe;const ie=(0,o.ri)(S);ie.component("base-card",N),ie.component("BaseButton",P),ie.component("BaseError",Q),ie.component("TheHeader",re),ie.mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var s=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var l=!0,u=0;u<o.length;u++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(l=!1,i<s&&(s=i));if(l){e.splice(c--,1);var d=r();void 0!==d&&(t=d)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,s=o[0],l=o[1],u=o[2],d=0;if(s.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(u)var c=u(n)}for(t&&t(o);d<s.length;d++)i=s[d],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},o=self["webpackChunklearning_resources_app"]=self["webpackChunklearning_resources_app"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(5402)}));o=n.O(o)})();
//# sourceMappingURL=app.c145997d.js.map