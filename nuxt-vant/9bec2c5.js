(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{360:function(t,e,n){"use strict";n(19),n(32),n(39),n(361)},361:function(t,e,n){},362:function(t,e,n){},363:function(t,e,n){"use strict";var r=n(13),o=n.n(r),c=n(17),l=n(15),d=n(12),f=Object(c.a)("tag"),h=f[0],m=f[1];function v(t,e,n,r){var c,f=e.type,mark=e.mark,h=e.plain,v=e.color,y=e.round,x=e.size,style=((c={})[h?"color":"backgroundColor"]=v,c);e.textColor&&(style.color=e.textColor);var k={mark:mark,plain:h,round:y};x&&(k[x]=x);var S=e.closeable&&t(d.a,{attrs:{name:"cross"},class:m("close"),on:{click:function(t){t.stopPropagation(),Object(l.a)(r,"close")}}});return t("transition",{attrs:{name:e.closeable?"van-fade":null}},[t("span",o()([{key:"content",style:style,class:m([k,f])},Object(l.b)(r,!0)]),[null==n.default?void 0:n.default(),S])])}v.props={size:String,mark:Boolean,color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean,type:{type:String,default:"default"}},e.a=h(v)},364:function(t,e,n){"use strict";var r=n(17),o=n(164),c=Object(r.a)("checkbox"),l=c[0],d=c[1];e.a=l({mixins:[Object(o.a)({bem:d,role:"checkbox",parent:"vanCheckbox"})],computed:{checked:{get:function(){return this.parent?-1!==this.parent.value.indexOf(this.name):this.value},set:function(t){this.parent?this.setParentValue(t):this.$emit("input",t)}}},watch:{value:function(t){this.$emit("change",t)}},methods:{toggle:function(t){var e=this;void 0===t&&(t=!this.checked),clearTimeout(this.toggleTask),this.toggleTask=setTimeout((function(){e.checked=t}))},setParentValue:function(t){var e=this.parent,n=e.value.slice();if(t){if(e.max&&n.length>=e.max)return;-1===n.indexOf(this.name)&&(n.push(this.name),e.$emit("input",n))}else{var r=n.indexOf(this.name);-1!==r&&(n.splice(r,1),e.$emit("input",n))}}}})},371:function(t,e,n){},377:function(t,e,n){"use strict";var r=n(3),o=n(76),c=n(378),l=n(237),d=n(5),f=1..toFixed,h=Math.floor,m=function(t,e,n){return 0===e?n:e%2==1?m(t,e-1,n*t):m(t*t,e/2,n)};r({target:"Number",proto:!0,forced:f&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!d((function(){f.call({})}))},{toFixed:function(t){var e,n,r,d,f=c(this),v=o(t),data=[0,0,0,0,0,0],y="",x="0",k=function(t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=h(r/1e7)},S=function(t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=h(n/t),n=n%t*1e7},L=function(){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=String(data[t]);s=""===s?e:s+l.call("0",7-e.length)+e}return s};if(v<0||v>20)throw RangeError("Incorrect fraction digits");if(f!=f)return"NaN";if(f<=-1e21||f>=1e21)return String(f);if(f<0&&(y="-",f=-f),f>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(f*m(2,69,1))-69)<0?f*m(2,-e,1):f/m(2,e,1),n*=4503599627370496,(e=52-e)>0){for(k(0,n),r=v;r>=7;)k(1e7,0),r-=7;for(k(m(10,r,1),0),r=e-1;r>=23;)S(1<<23),r-=23;S(1<<r),k(1,1),S(2),x=L()}else k(0,n),k(1<<-e,0),x=L()+l.call("0",v);return x=v>0?y+((d=x.length)<=v?"0."+l.call("0",v-d)+x:x.slice(0,d-v)+"."+x.slice(d-v)):y+x}})},378:function(t,e,n){var r=n(57);t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},379:function(t,e,n){},380:function(t,e,n){},381:function(t,e,n){},382:function(t,e,n){},383:function(t,e,n){"use strict";n(371)},394:function(t,e,n){"use strict";n.r(e);n(236),n(161),n(377),n(19),n(379);var r=n(17),o=n(115),c=n(14),l=Object(r.a)("checkbox-group"),d=l[0],f=l[1],h=d({mixins:[Object(c.b)("vanCheckbox"),o.a],props:{max:[Number,String],disabled:Boolean,direction:String,iconSize:[Number,String],checkedColor:String,value:{type:Array,default:function(){return[]}}},watch:{value:function(t){this.$emit("change",t)}},methods:{toggleAll:function(t){if(!1!==t){var e=this.children;t||(e=e.filter((function(t){return!t.checked})));var n=e.map((function(t){return t.name}));this.$emit("input",n)}else this.$emit("input",[])}},render:function(){var t=arguments[0];return t("div",{class:f([this.direction])},[this.slots()])}}),m=(n(32),n(39),n(121),n(160),n(380),n(13)),v=n.n(m),y=n(15),x=n(12),k=n(66),S=Object(r.a)("submit-bar"),L=S[0],j=S[1],O=S[2];function w(t,e,n,r){var o=e.tip,c=e.price,l=e.tipIcon;return t("div",v()([{class:j({unfit:!e.safeAreaInsetBottom})},Object(y.b)(r)]),[n.top&&n.top(),function(){if(n.tip||o)return t("div",{class:j("tip")},[l&&t(x.a,{class:j("tip-icon"),attrs:{name:l}}),o&&t("span",{class:j("tip-text")},[o]),n.tip&&n.tip()])}(),t("div",{class:j("bar")},[n.default&&n.default(),function(){if("number"==typeof c){var n=(c/100).toFixed(e.decimalLength).split("."),r=e.decimalLength?"."+n[1]:"";return t("div",{style:{textAlign:e.textAlign?e.textAlign:""},class:j("text")},[t("span",[e.label||O("label")]),t("span",{class:j("price")},[e.currency,t("span",{class:j("price","integer")},[n[0]]),r]),e.suffixLabel&&t("span",{class:j("suffix-label")},[e.suffixLabel])])}}(),t(k.a,{attrs:{round:!0,type:e.buttonType,color:e.buttonColor,loading:e.loading,disabled:e.disabled,text:e.loading?"":e.buttonText},class:j("button",e.buttonType),on:{click:function(){Object(y.a)(r,"submit")}}})])])}w.props={tip:String,label:String,price:Number,tipIcon:String,loading:Boolean,disabled:Boolean,textAlign:String,buttonText:String,buttonColor:String,suffixLabel:String,safeAreaInsetBottom:{type:Boolean,default:!0},decimalLength:{type:[Number,String],default:2},currency:{type:String,default:"¥"},buttonType:{type:String,default:"danger"}};var $=L(w),z=(n(360),n(364)),B=(n(381),n(362),n(382),n(1)),C=n(363),N=n(43),E=Object(r.a)("image"),I=E[0],P=E[1],T=I({props:{src:String,fit:String,alt:String,round:Boolean,width:[Number,String],height:[Number,String],radius:[Number,String],lazyLoad:Boolean,showError:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},errorIcon:{type:String,default:"photo-fail"},loadingIcon:{type:String,default:"photo"}},data:function(){return{loading:!0,error:!1}},watch:{src:function(){this.loading=!0,this.error=!1}},computed:{style:function(){var style={};return Object(B.c)(this.width)&&(style.width=Object(N.a)(this.width)),Object(B.c)(this.height)&&(style.height=Object(N.a)(this.height)),Object(B.c)(this.radius)&&(style.overflow="hidden",style.borderRadius=Object(N.a)(this.radius)),style}},created:function(){var t=this.$Lazyload;t&&B.b&&(t.$on("loaded",this.onLazyLoaded),t.$on("error",this.onLazyLoadError))},beforeDestroy:function(){var t=this.$Lazyload;t&&(t.$off("loaded",this.onLazyLoaded),t.$off("error",this.onLazyLoadError))},methods:{onLoad:function(t){this.loading=!1,this.$emit("load",t)},onLazyLoaded:function(t){t.el===this.$refs.image&&this.loading&&this.onLoad()},onLazyLoadError:function(t){t.el!==this.$refs.image||this.error||this.onError()},onError:function(t){this.error=!0,this.loading=!1,this.$emit("error",t)},onClick:function(t){this.$emit("click",t)},genPlaceholder:function(){var t=this.$createElement;return this.loading&&this.showLoading?t("div",{class:P("loading")},[this.slots("loading")||t(x.a,{attrs:{name:this.loadingIcon},class:P("loading-icon")})]):this.error&&this.showError?t("div",{class:P("error")},[this.slots("error")||t(x.a,{attrs:{name:this.errorIcon},class:P("error-icon")})]):void 0},genImage:function(){var t=this.$createElement,e={class:P("img"),attrs:{alt:this.alt},style:{objectFit:this.fit}};if(!this.error)return this.lazyLoad?t("img",v()([{ref:"image",directives:[{name:"lazy",value:this.src}]},e])):t("img",v()([{attrs:{src:this.src},on:{load:this.onLoad,error:this.onError}},e]))}},render:function(){var t=arguments[0];return t("div",{class:P({round:this.round}),style:this.style,on:{click:this.onClick}},[this.genImage(),this.genPlaceholder(),this.slots()])}}),_=Object(r.a)("card"),F=_[0],A=_[1];function G(t,e,n,r){var o,c=e.thumb,l=n.num||Object(B.c)(e.num),d=n.price||Object(B.c)(e.price),f=n["origin-price"]||Object(B.c)(e.originPrice),h=l||d||f||n.bottom;function m(t){Object(y.a)(r,"click-thumb",t)}function x(){if(n.tag||e.tag)return t("div",{class:A("tag")},[n.tag?n.tag():t(C.a,{attrs:{mark:!0,type:"danger"}},[e.tag])])}return t("div",v()([{class:A()},Object(y.b)(r,!0)]),[t("div",{class:A("header")},[function(){if(n.thumb||c)return t("a",{attrs:{href:e.thumbLink},class:A("thumb"),on:{click:m}},[n.thumb?n.thumb():t(T,{attrs:{src:c,width:"100%",height:"100%",fit:"cover","lazy-load":e.lazyLoad}}),x()])}(),t("div",{class:A("content",{centered:e.centered})},[t("div",[n.title?n.title():e.title?t("div",{class:[A("title"),"van-multi-ellipsis--l2"]},[e.title]):void 0,n.desc?n.desc():e.desc?t("div",{class:[A("desc"),"van-ellipsis"]},[e.desc]):void 0,null==n.tags?void 0:n.tags()]),h&&t("div",{class:"van-card__bottom"},[null==(o=n["price-top"])?void 0:o.call(n),function(){if(d)return t("div",{class:A("price")},[n.price?n.price():(r=e.price.toString().split("."),t("div",[t("span",{class:A("price-currency")},[e.currency]),t("span",{class:A("price-integer")},[r[0]]),".",t("span",{class:A("price-decimal")},[r[1]])]))]);var r}(),function(){if(f){var slot=n["origin-price"];return t("div",{class:A("origin-price")},[slot?slot():e.currency+" "+e.originPrice])}}(),function(){if(l)return t("div",{class:A("num")},[n.num?n.num():"x"+e.num])}(),null==n.bottom?void 0:n.bottom()])])]),function(){if(n.footer)return t("div",{class:A("footer")},[n.footer()])}()])}G.props={tag:String,desc:String,thumb:String,title:String,centered:Boolean,lazyLoad:Boolean,thumbLink:String,num:[Number,String],price:[Number,String],originPrice:[Number,String],currency:{type:String,default:"¥"}};var J={layout:"layout-with-footer",components:{"van-card":F(G),"van-checkbox":z.a,"van-submit-bar":$,"van-checkbox-group":h},data:function(){return{checkedGoods:["1","2","3"],goods:[{id:"1",title:"进口香蕉",desc:"约250g，2根",price:200,num:1,thumb:"https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"},{id:"2",title:"陕西蜜梨",desc:"约600g",price:690,num:1,thumb:"https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg"},{id:"3",title:"美国伽力果",desc:"约680g/3个",price:2680,num:1,thumb:"https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg"}]}},computed:{submitBarText:function(){var t=this.checkedGoods.length;return"结算"+(t?"(".concat(t,")"):"")},totalPrice:function(){var t=this;return this.goods.reduce((function(e,n){return e+(-1!==t.checkedGoods.indexOf(n.id)?n.price:0)}),0)}},methods:{formatPrice:function(t){return(t/100).toFixed(2)},onSubmit:function(){this.$toast("点击结算")}}},R=(n(383),n(28)),component=Object(R.a)(J,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cart"},[n("van-checkbox-group",{staticClass:"card-goods",model:{value:t.checkedGoods,callback:function(e){t.checkedGoods=e},expression:"checkedGoods"}},t._l(t.goods,(function(e){return n("van-checkbox",{key:e.id,staticClass:"card-goods__item",attrs:{name:e.id}},[n("van-card",{attrs:{title:e.title,desc:e.desc,num:e.num,price:t.formatPrice(e.price),thumb:e.thumb}})],1)})),1),t._v(" "),n("van-submit-bar",{attrs:{price:t.totalPrice,disabled:!t.checkedGoods.length,"button-text":t.submitBarText},on:{submit:t.onSubmit}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);