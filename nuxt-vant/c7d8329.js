(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{365:function(t,e,n){"use strict";n(19),n(366)},366:function(t,e,n){},367:function(t,e,n){"use strict";n(19),n(368)},368:function(t,e,n){},369:function(t,e,n){"use strict";var o=n(17),c=n(114),r=n(7),h=n(91),l=n(163),f=n(113),d=n(14),v=n(70),m=Object(o.a)("swipe"),w=m[0],y=m[1];e.a=w({mixins:[f.a,Object(d.b)("vanSwipe"),Object(v.a)((function(t,e){t(window,"resize",this.resize,!0),t(window,"orientationchange",this.resize,!0),t(window,"visibilitychange",this.onVisibilityChange),e?this.initialize():this.clear()}))],props:{width:[Number,String],height:[Number,String],autoplay:[Number,String],vertical:Boolean,lazyRender:Boolean,indicatorColor:String,loop:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},touchable:{type:Boolean,default:!0},initialSwipe:{type:[Number,String],default:0},showIndicators:{type:Boolean,default:!0},stopPropagation:{type:Boolean,default:!0}},data:function(){return{rect:null,offset:0,active:0,deltaX:0,deltaY:0,swiping:!1,computedWidth:0,computedHeight:0}},watch:{children:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t>0?this.autoPlay():this.clear()}},computed:{count:function(){return this.children.length},maxCount:function(){return Math.ceil(Math.abs(this.minOffset)/this.size)},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t,e=this.vertical?"height":"width",n=this.vertical?"width":"height";return(t={})[e]=this.trackSize+"px",t[n]=this[n]?this[n]+"px":"",t.transitionDuration=(this.swiping?0:this.duration)+"ms",t.transform="translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)",t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}},minOffset:function(){return(this.vertical?this.rect.height:this.rect.width)-this.size*this.count}},mounted:function(){this.bindTouchEvent(this.$refs.track)},methods:{initialize:function(t){if(void 0===t&&(t=+this.initialSwipe),this.$el&&!Object(c.a)(this.$el)){clearTimeout(this.timer);var rect=this.$el.getBoundingClientRect();this.rect=rect,this.swiping=!0,this.active=t,this.computedWidth=Math.round(+this.width||rect.width),this.computedHeight=Math.round(+this.height||rect.height),this.offset=this.getTargetOffset(t),this.children.forEach((function(t){t.offset=0})),this.autoPlay()}},resize:function(){this.initialize(this.activeIndicator)},onVisibilityChange:function(){document.hidden?this.clear():this.autoPlay()},onTouchStart:function(t){this.touchable&&(this.clear(),this.touchStartTime=Date.now(),this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&(Object(r.c)(t,this.stopPropagation),this.move({offset:this.delta})))},onTouchEnd:function(){if(this.touchable&&this.swiping){var t=this.size,e=this.delta,n=e/(Date.now()-this.touchStartTime);if((Math.abs(n)>.25||Math.abs(e)>t/2)&&this.isCorrectDirection){var o=this.vertical?this.offsetY:this.offsetX,c=0;c=this.loop?o>0?e>0?-1:1:0:-Math[e>0?"ceil":"floor"](e/t),this.move({pace:c,emitChange:!0})}else e&&this.move({pace:0});this.swiping=!1,this.autoPlay()}},getTargetActive:function(t){var e=this.active,n=this.count,o=this.maxCount;return t?this.loop?Object(l.b)(e+t,-1,n):Object(l.b)(e+t,0,o):e},getTargetOffset:function(t,e){void 0===e&&(e=0);var n=t*this.size;this.loop||(n=Math.min(n,-this.minOffset));var o=Math.round(e-n);return this.loop||(o=Object(l.b)(o,this.minOffset,0)),o},move:function(t){var e=t.pace,n=void 0===e?0:e,o=t.offset,c=void 0===o?0:o,r=t.emitChange,h=this.loop,l=this.count,f=this.active,d=this.children,v=this.trackSize,m=this.minOffset;if(!(l<=1)){var w=this.getTargetActive(n),y=this.getTargetOffset(w,c);if(h){if(d[0]&&y!==m){var j=y<m;d[0].offset=j?v:0}if(d[l-1]&&0!==y){var z=y>0;d[l-1].offset=z?-v:0}}this.active=w,this.offset=y,r&&w!==f&&this.$emit("change",this.activeIndicator)}},prev:function(){var t=this;this.correctPosition(),this.resetTouchStatus(),Object(h.b)((function(){t.swiping=!1,t.move({pace:-1,emitChange:!0})}))},next:function(){var t=this;this.correctPosition(),this.resetTouchStatus(),Object(h.b)((function(){t.swiping=!1,t.move({pace:1,emitChange:!0})}))},swipeTo:function(t,e){var n=this;void 0===e&&(e={}),this.correctPosition(),this.resetTouchStatus(),Object(h.b)((function(){var o;o=n.loop&&t===n.count?0===n.active?0:t:t%n.count,e.immediate?Object(h.b)((function(){n.swiping=!1})):n.swiping=!1,n.move({pace:o-n.active,emitChange:!0})}))},correctPosition:function(){this.swiping=!0,this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,e=this.autoplay;e>0&&this.count>1&&(this.clear(),this.timer=setTimeout((function(){t.next(),t.autoPlay()}),e))},genIndicator:function(){var t=this,e=this.$createElement,n=this.count,o=this.activeIndicator,slot=this.slots("indicator");return slot||(this.showIndicators&&n>1?e("div",{class:y("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(n)).map((function(n,c){return e("i",{class:y("indicator",{active:c===o}),style:c===o?t.indicatorStyle:null})}))]):void 0)}},render:function(){var t=arguments[0];return t("div",{class:y()},[t("div",{ref:"track",style:this.trackStyle,class:y("track",{vertical:this.vertical})},[this.slots()]),this.genIndicator()])}})},370:function(t,e,n){"use strict";var o=n(4),c=n(17),r=n(14),h=Object(c.a)("swipe-item"),l=h[0],f=h[1];e.a=l({mixins:[Object(r.a)("vanSwipe")],data:function(){return{offset:0,mounted:!1}},mounted:function(){var t=this;this.$nextTick((function(){t.mounted=!0}))},computed:{style:function(){var style={},t=this.parent,e=t.size,n=t.vertical;return style[n?"height":"width"]=e+"px",this.offset&&(style.transform="translate"+(n?"Y":"X")+"("+this.offset+"px)"),style},shouldRender:function(){var t=this.index,e=this.parent,n=this.mounted;if(!e.lazyRender)return!0;if(!n)return!1;var o=e.activeIndicator,c=e.count-1;return t===o||t===(0===o?c:o-1)||t===(o===c?0:o+1)}},render:function(){var t=arguments[0];return t("div",{class:f(),style:this.style,on:Object(o.a)({},this.$listeners)},[this.shouldRender&&this.slots()])}})},376:function(t,e,n){},393:function(t,e,n){"use strict";n(376)},399:function(t,e,n){"use strict";n.r(e);n(365);var o=n(370),c=(n(367),{layout:"layout-with-footer",components:{"van-swipe":n(369).a,"van-swipe-item":o.a},data:function(){return{images:["https://img.yzcdn.cn/2.jpg","https://img.yzcdn.cn/2.jpg"],goods:[{id:"001",name:"进口香蕉",price:"2",img:"https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"},{id:"002",name:"陕西蜜梨",price:"6.9",img:"https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg"},{id:"003",name:"美国伽力果",price:"26.8",img:"https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg"},{id:"004",name:"智利进口车厘子精选",price:"388",img:"//img11.360buyimg.com/n7/jfs/t23839/6/2329458134/547797/e0c3ca7d/5b7cb504Ne746d2e6.jpg"},{id:"005",name:"番石榴红心 红心芭乐",price:"29.8",img:"//img12.360buyimg.com/n7/jfs/t26923/229/2278521880/129730/fb691af5/5bfea71aN28106a4b.jpg"},{id:"006",name:"云南哀牢山冰糖橙",price:"52.9",img:"//img11.360buyimg.com/n7/jfs/t26266/170/2255460292/191195/143b9753/5bfcfcacNfbb9cfd6.jpg"}]}},methods:{goDetail:function(t){this.$router.push({path:"/goods-detail",query:{id:t.id}})}}}),r=(n(393),n(28)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[n("van-swipe",{attrs:{autoplay:3e3,"indicator-color":"white"}},t._l(t.images,(function(image,t){return n("van-swipe-item",{key:t},[n("v-img",{staticClass:"banner",attrs:{src:image,width:"100"}})],1)})),1),t._v(" "),n("van-row",{staticClass:"goods"},[n("van-cell",{attrs:{title:"热销商品",icon:"fire-o"}}),t._v(" "),n("van-row",t._l(t.goods,(function(e,o){return n("van-col",{key:o,attrs:{span:"12"}},[n("div",{staticClass:"block",on:{click:function(n){return t.goDetail(e)}}},[n("v-img",{staticClass:"good-img",attrs:{src:e.img,width:"100"}}),t._v(" "),n("p",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"price"},[t._v(t._s(t._f("price")(e.price)))])],1)])})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);