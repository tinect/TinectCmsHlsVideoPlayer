!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/bundles/tinectcmshlsvideoplayer/",n(n.s="XVMU")}({"+8ob":function(e,t,n){},"02Z+":function(e,t,n){var i=n("2bEq");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n("SZ7m").default)("07bb5b7d",i,!0,{})},"2/H6":function(e,t,n){var i=n("+8ob");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n("SZ7m").default)("4722a11e",i,!0,{})},"2bEq":function(e,t,n){},"70CH":function(e,t,n){},GRMM:function(e,t){e.exports='{% block sw_cms_element_tinecthlsvideo_preview %}\n    <div class="sw-cms-el-preview-tinecthlsvideo">\n        <img :src="\'/tinectcmshlsvideoplayer/static/img/cms/preview_hls.jpg\' | asset">\n    </div>\n{% endblock %}\n'},PP25:function(e,t,n){},RHXf:function(e,t,n){var i=n("70CH");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n("SZ7m").default)("49b34e9c",i,!0,{})},SZ7m:function(e,t,n){"use strict";function i(e,t){for(var n=[],i={},o=0;o<t.length;o++){var l=t[o],s=l[0],c={id:e+":"+o,css:l[1],media:l[2],sourceMap:l[3]};i[s]?i[s].parts.push(c):n.push(i[s]={id:s,parts:[c]})}return n}n.r(t),n.d(t,"default",(function(){return m}));var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l={},s=o&&(document.head||document.getElementsByTagName("head")[0]),c=null,r=0,a=!1,d=function(){},u=null,p="data-vue-ssr-id",v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e,t,n,o){a=n,u=o||{};var s=i(e,t);return f(s),function(t){for(var n=[],o=0;o<s.length;o++){var c=s[o];(r=l[c.id]).refs--,n.push(r)}t?f(s=i(e,t)):s=[];for(o=0;o<n.length;o++){var r;if(0===(r=n[o]).refs){for(var a=0;a<r.parts.length;a++)r.parts[a]();delete l[r.id]}}}}function f(e){for(var t=0;t<e.length;t++){var n=e[t],i=l[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(g(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var s=[];for(o=0;o<n.parts.length;o++)s.push(g(n.parts[o]));l[n.id]={id:n.id,refs:1,parts:s}}}}function h(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function g(e){var t,n,i=document.querySelector("style["+p+'~="'+e.id+'"]');if(i){if(a)return d;i.parentNode.removeChild(i)}if(v){var o=r++;i=c||(c=h()),t=y.bind(null,i,o,!1),n=y.bind(null,i,o,!0)}else i=h(),t=_.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}var w,b=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")});function y(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var l=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(l,s[t]):e.appendChild(l)}}function _(e,t){var n=t.css,i=t.media,o=t.sourceMap;if(i&&e.setAttribute("media",i),u.ssrId&&e.setAttribute(p,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},XVMU:function(e,t,n){"use strict";n.r(t);var i=n("yG9V"),o=n("ulYB"),l=n("epLw"),s=n.n(l);Shopware.Component.register("sw-cms-block-tinecthlsvideo",{template:s.a});var c=n("sLtc"),r=n.n(c);n("02Z+");Shopware.Component.register("sw-cms-preview-tinecthlsvideo",{template:r.a}),Shopware.Service("cmsService").registerCmsBlock({name:"tinecthlsvideo",label:"tinecthlsvideo.label",category:"video",component:"sw-cms-block-tinecthlsvideo",previewComponent:"sw-cms-preview-tinecthlsvideo",defaultConfig:{marginBottom:"0",marginTop:"0",marginLeft:"0",marginRight:"0",sizingMode:"boxed"},slots:{content:"tinecthlsvideo"}});var a=n("yvcg"),d=n.n(a),u=(n("2/H6"),Shopware),p=u.Component,v=u.Mixin;p.register("sw-cms-el-tinecthlsvideo",{template:d.a,mixins:[v.getByName("cms-element")],watch:{cmsPageState:{deep:!0,handler:function(){this.$forceUpdate()}}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.initElementConfig("tinecthlsvideo"),this.initElementData("tinecthlsvideo")}}});var m=n("pKTJ"),f=n.n(m),h=(n("m1sK"),Shopware),g=h.Component,w=h.Mixin;g.register("sw-cms-el-config-tinecthlsvideo",{template:f.a,mixins:[w.getByName("cms-element")],inject:["repositoryFactory"],created:function(){this.createdComponent()},methods:{createdComponent:function(){this.initElementConfig("tinecthlsvideo")}}});var b=n("GRMM"),y=n.n(b);n("RHXf");Shopware.Component.register("sw-cms-el-preview-tinecthlsvideo",{template:y.a}),Shopware.Service("cmsService").registerCmsElement({name:"tinecthlsvideo",label:"tinecthlsvideo.label",component:"sw-cms-el-tinecthlsvideo",configComponent:"sw-cms-el-config-tinecthlsvideo",previewComponent:"sw-cms-el-preview-tinecthlsvideo",defaultConfig:{thumbnailurl:{source:"static",value:""},playlisturl:{source:"static",value:""},autoplay:{source:"static",value:!1},loop:{source:"static",value:!1},muted:{source:"static",value:!1},videoposition:{source:"static",value:!1},optionalwidth:{source:"static",value:""}}}),Shopware.Locale.extend("de-DE",i),Shopware.Locale.extend("en-GB",o)},epLw:function(e,t){e.exports='{% block sw_cms_block_tinecthlsvideo %}\n    <div class="sw-cms-block-tinecthlsvideo">\n        <slot name="content">\n            {% block sw_cms_block_tinecthlsvideo_slot %}{% endblock %}\n        </slot>\n    </div>\n{% endblock %}\n'},m1sK:function(e,t,n){var i=n("PP25");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n("SZ7m").default)("60851aa8",i,!0,{})},pKTJ:function(e,t){e.exports='{% block sw_cms_el_config_colorstage %}\n    <div class="sw-cms-el-config-tinecthlsvideo">\n\n        {% block sw_cms_el_text_config_content %}\n\n            <sw-text-field :label="$tc(\'tinecthlsvideo.playlisturl\')"\n                           v-model="element.config.playlisturl.value">\n            </sw-text-field>\n\n            <sw-text-field :label="$tc(\'tinecthlsvideo.thumbnailurl\')"\n                           v-model="element.config.thumbnailurl.value">\n            </sw-text-field>\n\n            <div class="sw-cms-el-config-tinecthlsvideo__position">\n                <sw-select-field :label="$tc(\'tinecthlsvideo.videoposition\')"\n                                 v-model="element.config.videoposition.value">\n                    <option value="" v-html="$tc(\'tinecthlsvideo.left\')"></option>\n                    <option value="align-self-center" v-html="$tc(\'tinecthlsvideo.center\')"></option>\n                    <option value="align-self-end" v-html="$tc(\'tinecthlsvideo.right\')"></option>\n                </sw-select-field>\n\n                <sw-number-field :label="$tc(\'tinecthlsvideo.optionalwidth\')"\n                                 numberType="int"\n                                 v-model="element.config.optionalwidth.value">\n                </sw-number-field>\n            </div>\n\n\n            <div class="sw-cms-el-config-tinecthlsvideo__controls">\n                <sw-switch-field\n                    :label="$tc(\'tinecthlsvideo.autoplay\')"\n                    v-model="element.config.autoplay.value">\n                </sw-switch-field>\n\n                <sw-switch-field\n                    :label="$tc(\'tinecthlsvideo.loop\')"\n                    v-model="element.config.loop.value">\n                </sw-switch-field>\n\n                <sw-switch-field\n                    :label="$tc(\'tinecthlsvideo.muted\')"\n                    v-model="element.config.muted.value">\n                </sw-switch-field>\n            </div>\n        {% endblock %}\n    </div>\n{% endblock %}\n\n'},sLtc:function(e,t){e.exports='{% block sw_cms_block_tinecthlsvideo_preview %}\n    <div class="sw-cms-preview-tinecthlsvideo">\n        <img :src="\'/tinectcmshlsvideoplayer/static/img/cms/preview_hls.jpg\' | asset">\n    </div>\n{% endblock %}\n'},ulYB:function(e){e.exports=JSON.parse('{"tinecthlsvideo":{"label":"HLS Video Element","thumbnailurl":"Thumbnail URL","playlisturl":"Playlist URL","videoposition":"Video position","autoplay":"Autoplay","loop":"Loop","muted":"Muted","controls":"Controls","optionalwidth":"Optional width (px)","left":"Left","center":"Center","right":"Right"}}')},yG9V:function(e){e.exports=JSON.parse('{"tinecthlsvideo":{"label":"HLS Video Element","thumbnailurl":"Thumbnail URL","playlisturl":"Playlist URL","videoposition":"Videoposition","autoplay":"Autoplay","loop":"Loop","muted":"Stummgeschaltet","controls":"Einstellungen","optionalwidth":"Optionale Breite (in Pixeln)","left":"Links","center":"Mitte","right":"Rechts"}}')},yvcg:function(e,t){e.exports="{% block sw_cms_element_tinecthlsvideo %}\n    <div class=\"tinecthlsvideo\">\n        <div :class=\"[\n            'tinecthlsvideo-wrapper',\n            (element.config.videoposition.value ? element.config.videoposition.value : ''),\n        ]\" :style=\"{\n            'max-width': (element.config.optionalwidth.value ? element.config.optionalwidth.value + 'px' : '100%')\n         }\">\n\n            <img v-if=\"element.config.thumbnailurl.value\" :src=\"element.config.thumbnailurl.value\">\n            <img v-else :src=\"'/tinectcmshlsvideoplayer/static/img/cms/component_hls.jpg' | asset\">\n        </div>\n    </div>\n{% endblock %}\n"}});