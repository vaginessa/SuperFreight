webpackJsonp([1],{124:function(t,e,n){"use strict";var a=n(61),s=n(347),i=n(343),r=n.n(i);a.a.use(s.a),e.a=new s.a({routes:[{path:"/",name:"Home",component:r.a}]})},125:function(t,e,n){"use strict";var a=n(61),s=n(349);a.a.use(s.a),e.a=new s.a.Store({state:{loading:!1},mutations:{changeLoading:function(t,e){t.loading=e}}})},127:function(t,e){},128:function(t,e){},129:function(t,e,n){n(335);var a=n(89)(n(148),n(345),null,null);t.exports=a.exports},147:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var e=n(126),a=(n.n(e),n(61)),s=n(123),i=n.n(s),r=n(129),o=n.n(r),c=n(124),l=n(125);n(127),n(128),a.a.config.productionTip=!1,t.axios=i.a,t.url=window.location.href.split("/"),t.url=t.url[0]+"//"+t.url[2],t.axios.defaults.baseURL=t.url,"http://localhost:8080"===t.url&&(t.url="http://localhost:6100/",t.axios.defaults.baseURL="http://localhost:6100/"),new a.a({el:"#app",router:c.a,store:l.a,template:"<App/>",components:{App:o.a}})}.call(e,n(32))},148:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},149:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Navigation",data:function(){return{}}}},150:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var a=n(342),s=n.n(a),i=n(337),r=n.n(i);e.default={name:"hello",components:{Navigation:s.a},data:function(){return{files:null}},computed:{},methods:{fileLink:function(e){return t.url+"files/"+e},refresh:function(){var t=this;console.log("Refreshing..."),this.$store.commit("changeLoading",!0),window.axios.get("/files").then(function(e){console.log("HTTP OK:",e),t.$store.commit("changeLoading",!1),t.files=e.data}).catch(function(e){console.warn("HTTP ERR:",e),t.$store.commit("changeLoading",!1)})}},filters:{filesize:function(t){return r()(t)}},mounted:function(){this.refresh()}}}.call(e,n(32))},334:function(t,e){},335:function(t,e){},336:function(t,e){},342:function(t,e,n){n(336);var a=n(89)(n(149),n(346),"data-v-4ec45e89",null);t.exports=a.exports},343:function(t,e,n){n(334);var a=n(89)(n(150),n(344),"data-v-199e80de",null);t.exports=a.exports},344:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navigation"),t._v(" "),n("div",{attrs:{id:"list"}},t._l(t.files,function(e,a){return n("a",{staticClass:"file",attrs:{href:t.fileLink(a),target:"_blank"}},[t._m(0,!0),t._v(" "),n("span",{staticClass:"name"},[t._v(t._s(a))]),t._v(" "),n("span",{staticClass:"size"},[t._v(t._s(t._f("filesize")(e.size)))])])}))],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon"},[n("i",{staticClass:"fa fa-file"})])}]}},345:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},346:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"nav has-shadow"},[n("div",{staticClass:"nav-left"}),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"nav-right nav-menu"},[n("div",{staticClass:"nav-item"},[n("div",{staticClass:"field is-grouped"},[n("p",{staticClass:"control"},[n("a",{staticClass:"button is-default",attrs:{click:t.$parent.refresh()}},[t._m(2),t._v(" "),n("span",[t._v("Refresh")])])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-center"},[n("div",{staticClass:"nav-item"},[n("strong",[t._v("SuperFreight")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"nav-toggle"},[n("span"),t._v(" "),n("span"),t._v(" "),n("span")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon"},[n("i",{staticClass:"fa fa-refresh"})])}]}}},[147]);
//# sourceMappingURL=app.0119657b72e111b9d8f9.js.map