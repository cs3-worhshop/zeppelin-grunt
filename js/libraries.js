(function(){var a,b;a=this.jQuery||window.jQuery,b=a(window),a.fn.stick_in_parent=function(c){var d,e,f,g,h,i,j,k,l,m,n;for(null==c&&(c={}),k=c.sticky_class,f=c.inner_scrolling,j=c.recalc_every,i=c.parent,h=c.offset_top,g=c.spacer,e=c.bottoming,null==h&&(h=0),null==i&&(i=void 0),null==f&&(f=!0),null==k&&(k="is_stuck"),null==e&&(e=!0),l=function(c,d,l,m,n,o,p,q){var r,s,t,u,v,w,x,y,z,A,B;if(!c.data("sticky_kit")){if(c.data("sticky_kit",!0),w=c.parent(),null!=i&&(w=w.closest(i)),!w.length)throw"failed to find stick parent";if(t=!1,r=!1,A=null!=g?g&&c.closest(g):a("<div />"),A&&A.css("position",c.css("position")),x=function(){var a,b,e;if(!q)return a=parseInt(w.css("border-top-width"),10),b=parseInt(w.css("padding-top"),10),d=parseInt(w.css("padding-bottom"),10),l=w.offset().top+a+b,m=w.height(),t&&(t=!1,r=!1,null==g&&(c.insertAfter(A),A.detach()),c.css({position:"",top:"",width:"",bottom:""}).removeClass(k),e=!0),n=c.offset().top-parseInt(c.css("margin-top"),10)-h,o=c.outerHeight(!0),p=c.css("float"),A&&A.css({width:c.outerWidth(!0),height:o,display:c.css("display"),"vertical-align":c.css("vertical-align"),"float":p}),e?B():void 0},x(),o!==m)return u=void 0,v=h,z=j,B=function(){var a,i,s,y,B;if(!q)return null!=z&&(z-=1,0>=z&&(z=j,x())),s=b.scrollTop(),null!=u&&(i=s-u),u=s,t?(e&&(y=s+o+v>m+l,r&&!y&&(r=!1,c.css({position:"fixed",bottom:"",top:v}).trigger("sticky_kit:unbottom"))),n>s&&(t=!1,v=h,null==g&&(("left"===p||"right"===p)&&c.insertAfter(A),A.detach()),a={position:"",width:"",top:""},c.css(a).removeClass(k).trigger("sticky_kit:unstick")),f&&(B=b.height(),o+h>B&&(r||(v-=i,v=Math.max(B-o,v),v=Math.min(h,v),t&&c.css({top:v+"px"}))))):s>n&&(t=!0,a={position:"fixed",top:v},a.width="border-box"===c.css("box-sizing")?c.outerWidth()+"px":c.width()+"px",c.css(a).addClass(k),null==g&&(c.after(A),("left"===p||"right"===p)&&A.append(c)),c.trigger("sticky_kit:stick")),t&&e&&(null==y&&(y=s+o+v>m+l),!r&&y)?(r=!0,"static"===w.css("position")&&w.css({position:"relative"}),c.css({position:"absolute",bottom:d,top:"auto"}).trigger("sticky_kit:bottom")):void 0},y=function(){return x(),B()},s=function(){return q=!0,b.off("touchmove",B),b.off("scroll",B),b.off("resize",y),a(document.body).off("sticky_kit:recalc",y),c.off("sticky_kit:detach",s),c.removeData("sticky_kit"),c.css({position:"",bottom:"",top:"",width:""}),w.position("position",""),t?(null==g&&(("left"===p||"right"===p)&&c.insertAfter(A),A.remove()),c.removeClass(k)):void 0},b.on("touchmove",B),b.on("scroll",B),b.on("resize",y),a(document.body).on("sticky_kit:recalc",y),c.on("sticky_kit:detach",s),setTimeout(B,0)}},m=0,n=this.length;n>m;m++)d=this[m],l(a(d));return this}}).call(this),function(a,b,c,d,e){function f(b,c){if(c){var d=c.getAttribute("viewBox"),e=a.createDocumentFragment(),f=c.cloneNode(!0);for(d&&b.setAttribute("viewBox",d);f.childNodes.length;)e.appendChild(f.childNodes[0]);b.appendChild(e)}}function g(){var b=this,c=a.createElement("x"),d=b.s;c.innerHTML=b.responseText,b.onload=function(){d.splice(0).map(function(a){f(a[0],c.querySelector("#"+a[1].replace(/(\W)/g,"\\$1")))})},b.onload()}function h(){for(var e;e=b[0];){var i=e.parentNode,j=e.getAttribute("xlink:href").split("#"),k=j[0],l=j[1];if(i.removeChild(e),k.length){var m=d[k]=d[k]||new XMLHttpRequest;m.s||(m.s=[],m.open("GET",k),m.onload=g,m.send()),m.s.push([i,l]),4===m.readyState&&m.onload()}else f(i,a.getElementById(l))}c(h)}e&&h()}(document,document.getElementsByTagName("use"),window.requestAnimationFrame||window.setTimeout,{},/Trident\/[567]\b/.test(navigator.userAgent)||(navigator.userAgent.match(/AppleWebKit\/(\d+)/)||[])[1]<537),function(a){"use strict";function b(a){return null!==a&&a===a.window}function c(a){return b(a)?a:9===a.nodeType&&a.defaultView}function d(a){var b,d,e={top:0,left:0},f=a&&a.ownerDocument;return b=f.documentElement,"undefined"!=typeof a.getBoundingClientRect&&(e=a.getBoundingClientRect()),d=c(f),{top:e.top+d.pageYOffset-b.clientTop,left:e.left+d.pageXOffset-b.clientLeft}}function e(a){var b="";for(var c in a)a.hasOwnProperty(c)&&(b+=c+":"+a[c]+";");return b}function f(a){if(k.allowEvent(a)===!1)return null;for(var b=null,c=a.target||a.srcElement;null!==c.parentElement;){if(!(c instanceof SVGElement||-1===c.className.indexOf("waves-effect"))){b=c;break}if(c.classList.contains("waves-effect")){b=c;break}c=c.parentElement}return b}function g(b){var c=f(b);null!==c&&(j.show(b,c),"ontouchstart"in a&&(c.addEventListener("touchend",j.hide,!1),c.addEventListener("touchcancel",j.hide,!1)),c.addEventListener("mouseup",j.hide,!1),c.addEventListener("mouseleave",j.hide,!1))}var h=h||{},i=document.querySelectorAll.bind(document),j={duration:750,show:function(a,b){if(2===a.button)return!1;var c=b||this,f=document.createElement("div");f.className="waves-ripple",c.appendChild(f);var g=d(c),h=a.pageY-g.top,i=a.pageX-g.left,k="scale("+c.clientWidth/100*3+")";"touches"in a&&(h=a.touches[0].pageY-g.top,i=a.touches[0].pageX-g.left),f.setAttribute("data-hold",Date.now()),f.setAttribute("data-scale",k),f.setAttribute("data-x",i),f.setAttribute("data-y",h);var l={top:h+"px",left:i+"px"};f.className=f.className+" waves-notransition",f.setAttribute("style",e(l)),f.className=f.className.replace("waves-notransition",""),l["-webkit-transform"]=k,l["-moz-transform"]=k,l["-ms-transform"]=k,l["-o-transform"]=k,l.transform=k,l.opacity="1",l["-webkit-transition-duration"]=j.duration+"ms",l["-moz-transition-duration"]=j.duration+"ms",l["-o-transition-duration"]=j.duration+"ms",l["transition-duration"]=j.duration+"ms",f.setAttribute("style",e(l))},hide:function(a){k.touchup(a);var b=this,c=(1.4*b.clientWidth,null),d=b.getElementsByClassName("waves-ripple");if(!(d.length>0))return!1;c=d[d.length-1];var f=c.getAttribute("data-x"),g=c.getAttribute("data-y"),h=c.getAttribute("data-scale"),i=Date.now()-Number(c.getAttribute("data-hold")),l=350-i;0>l&&(l=0),setTimeout(function(){var a={top:g+"px",left:f+"px",opacity:"0","-webkit-transition-duration":j.duration+"ms","-moz-transition-duration":j.duration+"ms","-o-transition-duration":j.duration+"ms","transition-duration":j.duration+"ms","-webkit-transform":h,"-moz-transform":h,"-ms-transform":h,"-o-transform":h,transform:h};c.setAttribute("style",e(a)),setTimeout(function(){try{b.removeChild(c)}catch(a){return!1}},j.duration)},l)},wrapInput:function(a){for(var b=0;b<a.length;b++){var c=a[b];if("input"===c.tagName.toLowerCase()){var d=c.parentNode;if("i"===d.tagName.toLowerCase()&&-1!==d.className.indexOf("waves-effect"))continue;var e=document.createElement("i");e.className=c.className+" waves-input-wrapper";var f=c.getAttribute("style");f||(f=""),e.setAttribute("style",f),c.className="waves-button-input",c.removeAttribute("style"),d.replaceChild(e,c),e.appendChild(c)}}}},k={touches:0,allowEvent:function(a){var b=!0;return"touchstart"===a.type?k.touches+=1:"touchend"===a.type||"touchcancel"===a.type?setTimeout(function(){k.touches>0&&(k.touches-=1)},500):"mousedown"===a.type&&k.touches>0&&(b=!1),b},touchup:function(a){k.allowEvent(a)}};h.displayEffect=function(b){b=b||{},"duration"in b&&(j.duration=b.duration),j.wrapInput(i(".waves-effect")),"ontouchstart"in a&&document.body.addEventListener("touchstart",g,!1),document.body.addEventListener("mousedown",g,!1)},h.attach=function(b){"input"===b.tagName.toLowerCase()&&(j.wrapInput([b]),b=b.parentElement),"ontouchstart"in a&&b.addEventListener("touchstart",g,!1),b.addEventListener("mousedown",g,!1)},a.Waves=h}(window),function(a){a.fn.appear=function(b,c){var d=a.extend({data:void 0,one:!0,accX:0,accY:0},c);return this.each(function(){var c=a(this);if(c.appeared=!1,!b)return void c.trigger("appear",d.data);var e=a(window),f=function(){if(!c.is(":visible"))return void(c.appeared=!1);var a=e.scrollLeft(),b=e.scrollTop(),f=c.offset(),g=f.left,h=f.top,i=d.accX,j=d.accY,k=c.height(),l=e.height(),m=c.width(),n=e.width();h+k+j>=b&&b+l+j>=h&&g+m+i>=a&&a+n+i>=g?c.appeared||c.trigger("appear",d.data):c.appeared=!1},g=function(){if(c.appeared=!0,d.one){e.unbind("scroll",f);var g=a.inArray(f,a.fn.appear.checks);g>=0&&a.fn.appear.checks.splice(g,1)}b.apply(this,arguments)};d.one?c.one("appear",d.data,g):c.bind("appear",d.data,g),e.scroll(f),a.fn.appear.checks.push(f),f()})},a.extend(a.fn.appear,{checks:[],timeout:null,checkAll:function(){var b=a.fn.appear.checks.length;if(b>0)for(;b--;)a.fn.appear.checks[b]()},run:function(){a.fn.appear.timeout&&clearTimeout(a.fn.appear.timeout),a.fn.appear.timeout=setTimeout(a.fn.appear.checkAll,20)}}),a.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(b,c){var d=a.fn[c];d&&(a.fn[c]=function(){var b=d.apply(this,arguments);return a.fn.appear.run(),b})})}(jQuery),!function(a){function b(a,b){return a.toFixed(b.decimals)}a.fn.countTo=function(b){return b=b||{},a(this).each(function(){function c(){k+=g,j++,d(k),"function"==typeof e.onUpdate&&e.onUpdate.call(h,k),f>j||(i.removeData("countTo"),clearInterval(l.interval),k=e.to,"function"==typeof e.onComplete&&e.onComplete.call(h,k))}function d(a){var b=e.formatter.call(h,a,e);i.text(b)}var e=a.extend({},a.fn.countTo.defaults,{from:a(this).data("from"),to:a(this).data("to"),speed:a(this).data("speed"),refreshInterval:a(this).data("refresh-interval"),decimals:a(this).data("decimals")},b),f=Math.ceil(e.speed/e.refreshInterval),g=(e.to-e.from)/f,h=this,i=a(this),j=0,k=e.from,l=i.data("countTo")||{};i.data("countTo",l),l.interval&&clearInterval(l.interval),l.interval=setInterval(c,e.refreshInterval),d(k)})},a.fn.countTo.defaults={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:b,onUpdate:null,onComplete:null}}(jQuery);