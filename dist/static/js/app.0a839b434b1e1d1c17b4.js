webpackJsonp([1],{124:function(t,a,e){"use strict";var i=e(62),s=e(352),n=e(347),l=e.n(n);i.a.use(s.a),a.a=new s.a({routes:[{path:"/",name:"Home",component:l.a}]})},125:function(t,a,e){"use strict";var i=e(62),s=e(355);i.a.use(s.a),a.a=new s.a.Store({state:{loading:!1},mutations:{changeLoading:function(t,a){t.loading=a}}})},127:function(t,a){},128:function(t,a){},129:function(t,a,e){e(337);var i=e(61)(e(148),e(350),null,null);t.exports=i.exports},147:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),function(t){var a=e(126),i=(e.n(a),e(62)),s=e(123),n=e.n(s),l=e(129),o=e.n(l),c=e(124),r=e(125);e(127),e(128),i.a.config.productionTip=!1,t.axios=n.a,t.url=window.location.href.split("/"),t.url=t.url[0]+"//"+t.url[2],t.axios.defaults.baseURL=t.url,"http://localhost:8080"===t.url&&(t.url="http://localhost:6100",t.axios.defaults.baseURL="http://localhost:6100"),new i.a({el:"#app",router:c.a,store:r.a,template:"<App/>",components:{App:o.a}})}.call(a,e(32))},148:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"app"}},149:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"Modal"}},150:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e(354),s=e.n(i),n=e(345),l=e.n(n);a.default={name:"UploadModal",components:{Modal:l.a,Dropzone:s.a},data:function(){return{show:!1}},computed:{uploadUrl:function(){return window.url+"/files"}},methods:{toggle:function(){this.show=!this.show,!1===this.show&&this.$parent.reload()}}}},151:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),function(t){var i=e(339),s=e.n(i),n=e(346),l=e.n(n);a.default={name:"hello",components:{UploadModal:l.a},data:function(){return{files:null,list:"icons"}},computed:{},methods:{fileLink:function(a){return t.url+"/files/"+a},reload:function(){var t=this;console.log("Reloading..."),this.$store.commit("changeLoading",!0),window.axios.get("/files").then(function(a){console.log("HTTP OK:",a),t.$store.commit("changeLoading",!1),t.files=a.data}).catch(function(a){console.warn("HTTP ERR:",a),t.$store.commit("changeLoading",!1)})},toggleIconsList:function(){console.log("Toggling view..."),"icons"===this.list?this.list="list":this.list="icons"},showUpload:function(){console.log("Showing upload..."),this.$refs.upload.toggle()},hasPreview:function(t){switch(t){case"image/jpeg":case"image/png":case"image/svg":case"image/bmp":case"image/x-windows-bmp":case"image/gif":case"image/x-icon":case"image/pjpeg":case"image/x-jps":case"image/tiff":case"image/x-tiff":return!0}return!1},previewImage:function(t){return"background-image: url("+this.fileLink(t)+")"},fileIcon:function(t){var a="fa fa-";switch(t.split("/")[0]){case"image":a+="file-image-o";break;case"video":a+="file-video-o";break;case"audio":a+="file-sound-o";break;case"text":a+="file-text-o";break;default:a+="file"}switch(t){case"application/pdf":a="fa fa-file-pdf-o";break;case"application/excel":case"application/vnd.ms-excel":case"application/x-excel":case"application/x-msexcel":a="fa fa-file-excel-o";break;case"application/vnd.sun.xml.calc":case"application/vnd.sun.xml.calc.template":case"application/vnd.kde.kspread":case"application/vnd.stardivision.calc":a="fa fa-table";break;case"application/msword":a="fa fa-file-word-o";break;case"application/vnd.oasis.opendocument.text":case"application/vnd.sun.xml.writer":case"application/vnd.sun.xml.writer.template":case"application/vnd.kde.kword":case"application/vnd.sun.xml.writer.global":case"application/vnd.stardivision.writer":case"application/vnd.stardivision.writer-global":a="fa fa-file-text-o";break;case"application/x-compressed":case"application/x-zip-compressed":case"application/zip":case"multipart/x-zip":case"application/x-gzip":case"application/x-bzip2":case"application/x-bzip":case"application/x-tar":case"application/x-rar-compressed":case"application/x-7z-compressed":case"application/x-ace-compressed":a="fa fa-file-zip-o";break;case"text/xml":case"text/html":case"application/javascript":case"application/json":case"text/css":case"application/x-php":case"application/x-python":case"application/xhtml+xml":a="fa fa-file-code-o"}return a}},filters:{filesize:function(t){return s()(t)}},mounted:function(){this.reload()}}}.call(a,e(32))},335:function(t,a){},336:function(t,a){},337:function(t,a){},338:function(t,a){},344:function(t,a){t.exports="data:image/png;base64,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"},345:function(t,a,e){e(338);var i=e(61)(e(149),e(351),null,null);t.exports=i.exports},346:function(t,a,e){e(335);var i=e(61)(e(150),e(348),null,null);t.exports=i.exports},347:function(t,a,e){e(336);var i=e(61)(e(151),e(349),"data-v-199e80de",null);t.exports=i.exports},348:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.show?e("modal",{on:{close:t.toggle}},[e("dropzone",{attrs:{id:"dz",url:t.uploadUrl,showRemoveLink:!1,thumbnailHeight:100,thumbnailWidth:100,maxFileSizeInMB:1e12,useFontAwesome:!0,maxNumberOfFiles:1e6},slot:"body"}),t._v(" "),e("h3",{slot:"header"},[t._v("File Upload")]),t._v(" "),e("span",{slot:"close-button-title"},[t._v("Hide")])],1):t._e()},staticRenderFns:[]}},349:function(t,a,e){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("UploadModal",{ref:"upload"}),t._v(" "),e("nav",{staticClass:"nav has-shadow"},[t._m(0),t._v(" "),e("div",{staticClass:"nav-right"},[e("div",{staticClass:"nav-item"},[e("div",{staticClass:"field is-grouped"},[e("p",{staticClass:"control"},[e("button",{staticClass:"button is-secondary",attrs:{title:"Toggle view"},on:{click:t.toggleIconsList}},[e("span",{staticClass:"icon"},["list"===t.list?e("i",{staticClass:"fa fa-th-large"}):t._e(),t._v(" "),"icons"===t.list?e("i",{staticClass:"fa fa-th-list"}):t._e()])])]),t._v(" "),e("p",{staticClass:"control"},[e("button",{staticClass:"button is-secondary",attrs:{title:"Refresh files"},on:{click:t.reload}},[t._m(1)])]),t._v(" "),e("p",{staticClass:"control"},[e("button",{staticClass:"button is-primary",attrs:{title:"Upload files"},on:{click:t.showUpload}},[t._m(2)])])])])])]),t._v(" "),"icons"===t.list?e("div",{attrs:{id:"list-icons"}},t._l(t.files,function(a,i){return e("a",{staticClass:"file",attrs:{href:t.fileLink(i),target:"_blank",title:i}},[t.hasPreview(a.mime)?e("span",{staticClass:"ic preview",style:t.previewImage(i)}):e("span",{staticClass:"ic"},[e("i",{class:t.fileIcon(a.mime)})]),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(i))]),t._v(" "),e("span",{staticClass:"size"},[t._v(t._s(t._f("filesize")(a.size)))])])})):t._e(),t._v(" "),"list"===t.list?e("div",{attrs:{id:"list-list"}},[e("table",{staticClass:"table"},[e("tbody",t._l(t.files,function(a,i){return e("tr",[e("td",[e("span",{staticClass:"icon"},[e("i",{class:t.fileIcon(a.mime)})])]),t._v(" "),e("td",[e("a",{staticClass:"file",attrs:{href:t.fileLink(i),target:"_blank"}},[t._v(t._s(i))])]),t._v(" "),e("td",[t._v(t._s(t._f("filesize")(a.size)))])])}))])]):t._e()],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"nav-left"},[i("div",{staticClass:"nav-item"},[i("img",{attrs:{src:e(344),alt:"SuperFreight logo"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"icon"},[e("i",{staticClass:"fa fa-refresh"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"icon"},[e("i",{staticClass:"fa fa-upload"})])}]}},350:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]}},351:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("transition",{attrs:{name:"modal"}},[e("div",{staticClass:"modal-mask"},[e("div",{staticClass:"modal-wrapper"},[e("div",{staticClass:"modal-container"},[e("div",{staticClass:"modal-header"},[t._t("header",[t._v("Title")])],2),t._v(" "),e("div",{staticClass:"modal-body"},[t._t("body",[t._v("\n            Modal Content\n          ")])],2),t._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"button modal-default-button",on:{click:function(a){t.$emit("close")}}},[t._t("close-button-title",[t._v("Close")])],2)])])])])])},staticRenderFns:[]}}},[147]);
//# sourceMappingURL=app.0a839b434b1e1d1c17b4.js.map