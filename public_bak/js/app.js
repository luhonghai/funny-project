function isIE(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");return t>0||!!navigator.userAgent.match(/Trident.*rv\:11\./)}function changeFavicon(e){var t=document.createElement("link"),i=document.getElementById("dynamic-favicon");t.id="dynamic-favicon",t.rel="shortcut icon",t.href=e,i&&document.head.removeChild(i),document.head.appendChild(t)}function rmt(e){var t=new Image;t.src=e,document.getElementById("tmp-img").appendChild(t)}function myWindow(e,t){{var i=640,n=460,o=window.screen.height/2-n/2,s=window.screen.width/2-i/2;window.open(t,"Share on Facebook","status=1,height="+n+",width="+i+",top="+o+",left="+s+",resizable=0")}}function likedeg(e,t,i){jQuery.ajax({type:"POST",url:baseurl+"/likedeg.php",data:"l="+t+"&pid="+e+"&u="+i,success:function(e){$("#love_count").html(e)}})}function ulikedeg(e,t,i){jQuery.ajax({type:"POST",url:baseurl+"/votegag.php",data:"l="+t+"&pid="+e+"&u="+i,success:function(t){$("#love_count_"+e).html(t)}})}function formatMoney(e,t,n,o){return t=isNaN(t=Math.abs(t))?2:t,n=void 0==n?".":n,o=void 0==o?",":o,s=0>e?"-":"",i=parseInt(e=Math.abs(+e||0).toFixed(t))+"",j=(j=i.length)>3?j%3:0,s+(j?i.substr(0,j)+o:"")+i.substr(j).replace(/(\d{3})(?=\d)/g,"$1"+o)+(t?n+Math.abs(e-i).toFixed(t).slice(2):"")}function sendinvitation(e,t){jQuery.ajax({type:"POST",url:baseurl+"/sendinvitation.php",data:"email="+e+"&csrf="+t,success:function(e){""!=e?alert(e):($("#request-invite-loading").css("display","none"),$("#request-invite-block").css("display","none"),$("#signup-desc").css("display","none"),$("#signup-desc-done").css("display","block"))}})}!function(e){"use strict";function t(){}function i(e,t){if(o)return t.indexOf(e);for(var i=t.length;i--;)if(t[i]===e)return i;return-1}var n=t.prototype,o=Array.prototype.indexOf?!0:!1;n._getEvents=function(){return this._events||(this._events={})},n.getListeners=function(e){var t,i,n=this._getEvents();if("object"==typeof e){t={};for(i in n)n.hasOwnProperty(i)&&e.test(i)&&(t[i]=n[i])}else t=n[e]||(n[e]=[]);return t},n.getListenersAsObject=function(e){var t,i=this.getListeners(e);return i instanceof Array&&(t={},t[e]=i),t||i},n.addListener=function(e,t){var n,o=this.getListenersAsObject(e);for(n in o)o.hasOwnProperty(n)&&-1===i(t,o[n])&&o[n].push(t);return this},n.on=n.addListener,n.defineEvent=function(e){return this.getListeners(e),this},n.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},n.removeListener=function(e,t){var n,o,s=this.getListenersAsObject(e);for(o in s)s.hasOwnProperty(o)&&(n=i(t,s[o]),-1!==n&&s[o].splice(n,1));return this},n.off=n.removeListener,n.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},n.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},n.manipulateListeners=function(e,t,i){var n,o,s=e?this.removeListener:this.addListener,a=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(n=i.length;n--;)s.call(this,t,i[n]);else for(n in t)t.hasOwnProperty(n)&&(o=t[n])&&("function"==typeof o?s.call(this,n,o):a.call(this,n,o));return this},n.removeEvent=function(e){var t,i=typeof e,n=this._getEvents();if("string"===i)delete n[e];else if("object"===i)for(t in n)n.hasOwnProperty(t)&&e.test(t)&&delete n[t];else delete this._events;return this},n.emitEvent=function(e,t){var i,n,o,s=this.getListenersAsObject(e);for(n in s)if(s.hasOwnProperty(n))for(i=s[n].length;i--;)o=t?s[n][i].apply(null,t):s[n][i](),o===!0&&this.removeListener(e,s[n][i]);return this},n.trigger=n.emitEvent,n.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},"function"==typeof define&&define.amd?define(function(){return t}):e.EventEmitter=t}(this),function(e){"use strict";var t=document.documentElement,i=function(){};t.addEventListener?i=function(e,t,i){e.addEventListener(t,i,!1)}:t.attachEvent&&(i=function(t,i,n){t[i+n]=n.handleEvent?function(){var t=e.event;t.target=t.target||t.srcElement,n.handleEvent.call(n,t)}:function(){var i=e.event;i.target=i.target||i.srcElement,n.call(t,i)},t.attachEvent("on"+i,t[i+n])});var n=function(){};t.removeEventListener?n=function(e,t,i){e.removeEventListener(t,i,!1)}:t.detachEvent&&(n=function(e,t,i){e.detachEvent("on"+t,e[t+i]);try{delete e[t+i]}catch(n){e[t+i]=void 0}});var o={bind:i,unbind:n};"function"==typeof define&&define.amd?define(o):e.eventie=o}(this),function(e){"use strict";function t(e,t){for(var i in t)e[i]=t[i];return e}function i(e){return"[object Array]"===l.call(e)}function n(e){var t=[];if(i(e))t=e;else if("number"==typeof e.length)for(var n=0,o=e.length;o>n;n++)t.push(e[n]);else t.push(e);return t}function o(e,i){function o(e,i,a){if(!(this instanceof o))return new o(e,i);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=n(e),this.options=t({},this.options),"function"==typeof i?a=i:t(this.options,i),a&&this.on("always",a),this.getImages(),s&&(this.jqDeferred=new s.Deferred);var r=this;setTimeout(function(){r.check()})}function l(e){this.img=e}o.prototype=new e,o.prototype.options={},o.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var i=this.elements[e];"IMG"===i.nodeName&&this.addImage(i);for(var n=i.querySelectorAll("img"),o=0,s=n.length;s>o;o++){var a=n[o];this.addImage(a)}}},o.prototype.addImage=function(e){var t=new l(e);this.images.push(t)},o.prototype.check=function(){function e(e,o){return t.options.debug&&r&&a.log("confirm",e,o),t.progress(e),i++,i===n&&t.complete(),!0}var t=this,i=0,n=this.images.length;if(this.hasAnyBroken=!1,!n)return void this.complete();for(var o=0;n>o;o++){var s=this.images[o];s.on("confirm",e),s.check()}},o.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emit("progress",this,e),this.jqDeferred&&this.jqDeferred.notify(this,e)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emit(e,this),this.emit("always",this),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},s&&(s.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(s(this))});var c={};return l.prototype=new e,l.prototype.check=function(){var e=c[this.img.src];if(e)return void this.useCached(e);if(c[this.img.src]=this,this.img.complete&&void 0!==this.img.naturalWidth)return void this.confirm(0!==this.img.naturalWidth,"naturalWidth");var t=this.proxyImage=new Image;i.bind(t,"load",this),i.bind(t,"error",this),t.src=this.img.src},l.prototype.useCached=function(e){if(e.isConfirmed)this.confirm(e.isLoaded,"cached was confirmed");else{var t=this;e.on("confirm",function(e){return t.confirm(e.isLoaded,"cache emitted confirmed"),!0})}},l.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},l.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},l.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindProxyEvents()},l.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindProxyEvents()},l.prototype.unbindProxyEvents=function(){i.unbind(this.proxyImage,"load",this),i.unbind(this.proxyImage,"error",this)},o}var s=e.jQuery,a=e.console,r=void 0!==a,l=Object.prototype.toString;"function"==typeof define&&define.amd?define(["eventEmitter","eventie"],o):e.imagesLoaded=o(e.EventEmitter,e.eventie)}(window),function(e,t,i){t.infinitescroll=function(e,i,n){this.element=t(n),this._create(e,i)},t.infinitescroll.defaults={loading:{finished:i,finishedMsg:"<em>Congratulations, you've reached the end of the internet.</em>",img:"http://www.infinite-scroll.com/loading.gif",msg:null,msgText:"<em>Loading the next set of posts...</em>",selector:null,speed:"fast",start:i},state:{isDuringAjax:!1,isInvalidPage:!1,isDestroyed:!1,isDone:!1,isPaused:!1,currPage:1},callback:i,debug:!1,behavior:i,binder:t(e),nextSelector:"div.navigation a:first",navSelector:"div.navigation",contentSelector:null,extraScrollPx:150,itemSelector:"div.post",animate:!1,pathParse:i,dataType:"html",appendCallback:!0,bufferPx:40,errorCallback:function(){},infid:0,pixelsFromNavToBottom:i,path:i},t.infinitescroll.prototype={_binding:function(e){var t=this,n=t.options;return n.behavior&&this["_binding_"+n.behavior]!==i?void this["_binding_"+n.behavior].call(this):"bind"!==e&&"unbind"!==e?(this._debug("Binding value  "+e+" not valid"),!1):("unbind"==e?this.options.binder.unbind("smartscroll.infscr."+t.options.infid):this.options.binder[e]("smartscroll.infscr."+t.options.infid,function(){t.scroll()}),void this._debug("Binding",e))},_create:function(e,n){if(!this._validate(e))return!1;var o=this.options=t.extend(!0,{},t.infinitescroll.defaults,e),s=t(o.nextSelector).attr("href");return o.contentSelector=o.contentSelector||this.element,o.loading.selector=o.loading.selector||o.contentSelector,s?(o.path=this._determinepath(s),o.loading.msg=t('<div id="infscr-loading"><img alt="Loading..." src="'+o.loading.img+'" /><div>'+o.loading.msgText+"</div></div>"),(new Image).src=o.loading.img,o.pixelsFromNavToBottom=t(document).height()-t(o.navSelector).offset().top,o.loading.start=o.loading.start||function(){t(o.navSelector).hide(),o.loading.msg.appendTo(o.loading.selector).show(o.loading.speed,function(){beginAjax(o)})},o.loading.finished=o.loading.finished||function(){o.loading.msg.fadeOut("normal")},o.callback=function(e,s){o.behavior&&e["_callback_"+o.behavior]!==i&&e["_callback_"+o.behavior].call(t(o.contentSelector)[0],s),n&&n.call(t(o.contentSelector)[0],s)},void this._setup()):void this._debug("Navigation selector not found")},_debug:function(){return this.options.debug?e.console&&console.log.call(console,arguments):void 0},_determinepath:function(e){var t=this.options;if(t.behavior&&this["_determinepath_"+t.behavior]!==i)return void this["_determinepath_"+t.behavior].call(this,e);if(t.pathParse)return this._debug("pathParse manual"),t.pathParse;if(e.match(/^(.*?)\b2\b(.*?$)/))e=e.match(/^(.*?)\b2\b(.*?$)/).slice(1);else if(e.match(/^(.*?)2(.*?$)/)){if(e.match(/^(.*?page=)2(\/.*|$)/))return e=e.match(/^(.*?page=)2(\/.*|$)/).slice(1);e=e.match(/^(.*?)2(.*?$)/).slice(1)}else{if(e.match(/^(.*?page=)1(\/.*|$)/))return e=e.match(/^(.*?page=)1(\/.*|$)/).slice(1);this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com."),t.state.isInvalidPage=!0}return this._debug("determinePath",e),e},_error:function(e){var t=this.options;return t.behavior&&this["_error_"+t.behavior]!==i?void this["_error_"+t.behavior].call(this,e):("destroy"!==e&&"end"!==e&&(e="unknown"),this._debug("Error",e),"end"==e&&this._showdonemsg(),t.state.isDone=!0,t.state.currPage=1,t.state.isPaused=!1,void this._binding("unbind"))},_loadcallback:function(n,o){var s,a=this.options,r=this.options.callback,l=a.state.isDone?"done":a.appendCallback?"append":"no-append";if(a.behavior&&this["_loadcallback_"+a.behavior]!==i)return void this["_loadcallback_"+a.behavior].call(this,n,o);switch(l){case"done":return this._showdonemsg(),!1;case"no-append":"html"==a.dataType&&(o="<div>"+o+"</div>",o=t(o).find(a.itemSelector));break;case"append":var c=n.children();if(0==c.length)return this._error("end");for(s=document.createDocumentFragment();n[0].firstChild;)s.appendChild(n[0].firstChild);this._debug("contentSelector",t(a.contentSelector)[0]),t(a.contentSelector)[0].appendChild(s),o=c.get()}if(a.loading.finished.call(t(a.contentSelector)[0],a),a.animate){var d=t(e).scrollTop()+t("#infscr-loading").height()+a.extraScrollPx+"px";t("html,body").animate({scrollTop:d},800,function(){a.state.isDuringAjax=!1})}a.animate||(a.state.isDuringAjax=!1),r(this,o)},_nearbottom:function(){var n=this.options,o=0+t(document).height()-n.binder.scrollTop()-t(e).height();return n.behavior&&this["_nearbottom_"+n.behavior]!==i?void this["_nearbottom_"+n.behavior].call(this):(this._debug("math:",o,n.pixelsFromNavToBottom),o-n.bufferPx<n.pixelsFromNavToBottom)},_pausing:function(e){var t=this.options;if(t.behavior&&this["_pausing_"+t.behavior]!==i)return void this["_pausing_"+t.behavior].call(this,e);switch("pause"!==e&&"resume"!==e&&null!==e&&this._debug("Invalid argument. Toggling pause value instead"),e=!e||"pause"!=e&&"resume"!=e?"toggle":e){case"pause":t.state.isPaused=!0;break;case"resume":t.state.isPaused=!1;break;case"toggle":t.state.isPaused=!t.state.isPaused}return this._debug("Paused",t.state.isPaused),!1},_setup:function(){var e=this.options;return e.behavior&&this["_setup_"+e.behavior]!==i?void this["_setup_"+e.behavior].call(this):(this._binding("bind"),!1)},_showdonemsg:function(){var e=this.options;return e.behavior&&this["_showdonemsg_"+e.behavior]!==i?void this["_showdonemsg_"+e.behavior].call(this):(e.loading.msg.find("img").hide().parent().find("div").html(e.loading.finishedMsg).animate({opacity:1},2e3,function(){t(this).parent().fadeOut("normal")}),void e.errorCallback.call(t(e.contentSelector)[0],"done"))},_validate:function(e){for(var i in e)return i.indexOf&&i.indexOf("Selector")>-1&&0===t(e[i]).length?(this._debug("Your "+i+" found no elements."),!1):!0},bind:function(){this._binding("bind")},destroy:function(){return this.options.state.isDestroyed=!0,this._error("destroy")},pause:function(){this._pausing("pause")},resume:function(){this._pausing("resume")},retrieve:function(e){{var n,o,s,a,r=this,l=r.options,c=l.path,e=e||null;e?e:l.state.currPage}return beginAjax=function(e){switch(e.state.currPage++,r._debug("heading into ajax",c),n=t(t(e.contentSelector).is("table")?"<tbody/>":"<div/>"),o=c.join(e.state.currPage),s="html"==e.dataType||"json"==e.dataType?e.dataType:"html+callback",e.appendCallback&&"html"==e.dataType&&(s+="+callback"),s){case"html+callback":r._debug("Using HTML via .load() method"),n.load(o+" "+e.itemSelector,null,function(e){r._loadcallback(n,e)});break;case"html":case"json":r._debug("Using "+s.toUpperCase()+" via $.ajax() method"),t.ajax({url:o,dataType:e.dataType,complete:function(e,t){a="undefined"!=typeof e.isResolved?e.isResolved():"success"===t||"notmodified"===t,a?r._loadcallback(n,e.responseText):r._error("end")}})}},l.behavior&&this["retrieve_"+l.behavior]!==i?void this["retrieve_"+l.behavior].call(this,e):l.state.isDestroyed?(this._debug("Instance is destroyed"),!1):(l.state.isDuringAjax=!0,void l.loading.start.call(t(l.contentSelector)[0],l))},scroll:function(){var e=this.options,t=e.state;return e.behavior&&this["scroll_"+e.behavior]!==i?void this["scroll_"+e.behavior].call(this):void(t.isDuringAjax||t.isInvalidPage||t.isDone||t.isDestroyed||t.isPaused||this._nearbottom()&&this.retrieve())},toggle:function(){this._pausing()},unbind:function(){this._binding("unbind")},update:function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))}},t.fn.infinitescroll=function(e,i){var n=typeof e;switch(n){case"string":var o=Array.prototype.slice.call(arguments,1);this.each(function(){var i=t.data(this,"infinitescroll");return i&&t.isFunction(i[e])&&"_"!==e.charAt(0)?void i[e].apply(i,o):!1});break;case"object":this.each(function(){var n=t.data(this,"infinitescroll");n?n.update(e):t.data(this,"infinitescroll",new t.infinitescroll(e,i,this))})}return this};var n,o=t.event;o.special.smartscroll={setup:function(){t(this).bind("scroll",o.special.smartscroll.handler)},teardown:function(){t(this).unbind("scroll",o.special.smartscroll.handler)},handler:function(e,i){var o=this,s=arguments;e.type="smartscroll",n&&clearTimeout(n),n=setTimeout(function(){t.event.handle.apply(o,s)},"execAsap"===i?0:100)}},t.fn.smartscroll=function(e){return e?this.bind("smartscroll",e):this.trigger("smartscroll",["execAsap"])}}(window,jQuery),function(e){function t(e){return"object"==typeof e?e:{top:e,left:e}}var i=e.scrollTo=function(t,i,n){e(window).scrollTo(t,i,n)};i.defaults={axis:"xy",duration:parseFloat(e.fn.jquery)>=1.3?0:1},i.window=function(){return e(window)._scrollable()},e.fn._scrollable=function(){return this.map(function(){var t=this,i=!t.nodeName||-1!=e.inArray(t.nodeName.toLowerCase(),["iframe","#document","html","body"]);if(!i)return t;var n=(t.contentWindow||t).document||t.ownerDocument||t;return e.browser.safari||"BackCompat"==n.compatMode?n.body:n.documentElement})},e.fn.scrollTo=function(n,o,s){return"object"==typeof o&&(s=o,o=0),"function"==typeof s&&(s={onAfter:s}),"max"==n&&(n=9e9),s=e.extend({},i.defaults,s),o=o||s.speed||s.duration,s.queue=s.queue&&s.axis.length>1,s.queue&&(o/=2),s.offset=t(s.offset),s.over=t(s.over),this._scrollable().each(function(){function a(e){c.animate(u,o,s.easing,e&&function(){e.call(this,n,s)})}var r,l=this,c=e(l),d=n,u={},h=c.is("html,body");switch(typeof d){case"number":case"string":if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(d)){d=t(d);break}d=e(d,this);case"object":(d.is||d.style)&&(r=(d=e(d)).offset())}e.each(s.axis.split(""),function(e,t){var n="x"==t?"Left":"Top",o=n.toLowerCase(),f="scroll"+n,p=l[f],v=i.max(l,t);if(r)u[f]=r[o]+(h?0:p-c.offset()[o]),s.margin&&(u[f]-=parseInt(d.css("margin"+n))||0,u[f]-=parseInt(d.css("border"+n+"Width"))||0),u[f]+=s.offset[o]||0,s.over[o]&&(u[f]+=d["x"==t?"width":"height"]()*s.over[o]);else{var g=d[o];u[f]=g.slice&&"%"==g.slice(-1)?parseFloat(g)/100*v:g}/^\d+$/.test(u[f])&&(u[f]=u[f]<=0?0:Math.min(u[f],v)),!e&&s.queue&&(p!=u[f]&&a(s.onAfterFirst),delete u[f])}),a(s.onAfter)}).end()},i.max=function(t,i){var n="x"==i?"Width":"Height",o="scroll"+n;if(!e(t).is("html,body"))return t[o]-e(t)[n.toLowerCase()]();var s="client"+n,a=t.ownerDocument.documentElement,r=t.ownerDocument.body;return Math.max(a[o],r[o])-Math.min(a[s],r[s])}}(jQuery);var baseurl=BASE_URL,avataurl=AVATAR_URL,asseturl=ASSET_URL;document.head=document.head||document.getElementsByTagName("head")[0],$(document).ready(function(){function e(){var t=Date.now();return t-j>15e3&&18==k&&(x=0,k=0,j=Date.now()),16==k?x>6?(x=0,k=18,changeFavicon(asseturl+"/images/favicon/favicon.png"),void setTimeout(e,100)):(changeFavicon(x%2==0?asseturl+"/images/favicon/favicon.png":asseturl+"/images/favicon/faviconb.png"),x++,void setTimeout(e,500)):(16>k&&(changeFavicon(asseturl+"/images/favicon/favicon"+k+".png"),k++),void setTimeout(e,100))}var t=$("#recover-to-login"),i=$("#login-to-recover"),n=$("#login-email-block"),o=$("#login-password-block"),s=$("#login-username-block");t.length&&i.length&&n.length&&o.length&&s.length&&(n.hide(),o.show(),s.show(),i.click(function(){n.show(),o.hide(),s.hide()}),t.click(function(){n.hide(),o.show(),s.show()}));var a=$("#no-facebook-account"),r=$("#get-email-invitation");a.length&&r.length&&(a.click(function(){$(".message").css("display","none"),$("#request-invite-block").css("display","block")}),r.click(function(){sendinvitation($("#signup-request-email").val(),$("#CSRFToken").val()),$("#request-invite-loading").css("display","block")})),$(function(){$(window).scroll(function(){$(this).scrollTop()>20?$("#nav").css("position","fixed").css("top","0").css("box-shadow","0 2px 4px #333"):$("#nav").css("position","relative").css("box-shadow","none")})});var l=$("#tabs");"undefined"!=typeof l&&null!=l&&l.length&&($("#tabs ul li:first").addClass("active"),$("#tabs ul li a:first").addClass("active"),$.getJSON(baseurl+"/topusers?t=tuan&ajax=1",function(e){for(var t=0;t<e.length&&5!=t;t++){var i=e[t];""==i.profilepicture&&(i.profilepicture="noprofilepicture.jpg");var n=['<div class="over"><div class="over_info" id="avatar"><a href="/user/',i.username,'"><img id="avatar" alt="Avatar" src="',avataurl,"/",i.profilepicture,'" /></a></div><div class="over_info" id="information"><p><strong><a href="/user/',i.username,'">',i.fullname,"</a></strong></p><p>S\u1ed1 b\xe0i:&nbsp",formatMoney(i.TOTAL,0)," - \u0110i\u1ec3m:&nbsp",formatMoney(i.LIKES,0),"</p><p>T\u1ed5ng l\u01b0\u1ee3t xem:&nbsp",formatMoney(i.VIEWS,0),'</p></div><div id="rank"><img id="rank" alt="rank" src="',asseturl,"/images/"+(t+1),'.png" /></div><div class="clear"></div></div>'];$("#tabs div.current").append(n.join(""))}}),$("#tabs ul li").click(function(){$("#tabs div.current").html("<center><p><p>Em \u0111ang c\u1ed1 \u0111\xe2y th\xedm ch\u1edd t\xfd nha...</p></center>"),$("#tabs ul li").removeClass("active"),$("#tabs ul li a").removeClass("active");var e=$("#tabs ul li").index(this);$("#tabs ul li:eq("+e+")").addClass("active"),$("#tabs ul li a:eq("+e+")").addClass("active");var t=$("#tabs ul li a:eq("+e+")").attr("data");$.getJSON(baseurl+"/topusers?t="+t+"&ajax=1",function(e){$("#tabs div.current").html("");for(var t=0;t<e.length&&5!=t;t++){var i=e[t];""==i.profilepicture&&(i.profilepicture="noprofilepicture.jpg");var n=['<div class="over"><div class="over_info" id="avatar"><a href="/user/',i.username,'"><img id="avatar" alt="Avatar" src="',avataurl,"/",i.profilepicture,'" /></a></div><div class="over_info" id="information"><p><strong><a href="/user/',i.username,'">',i.fullname,"</a></strong></p><p>S\u1ed1 b\xe0i:&nbsp",formatMoney(i.TOTAL,0)," - \u0110i\u1ec3m:&nbsp",formatMoney(i.LIKES,0),"</p><p>T\u1ed5ng l\u01b0\u1ee3t xem:&nbsp",formatMoney(i.VIEWS,0),'</p></div><div id="rank"><img id="rank" alt="rank" src="',asseturl,"/images/"+(t+1),'.png" /></div><div class="clear"></div></div>'];$("#tabs div.current").append(n.join(""))}})}));var c=$(".searchButton");"undefined"!=typeof c&&null!=c&&c.length&&c.click(function(){$("#header_searchbar").toggle("slow")}),function(e,t,i){var n,o=e.getElementsByTagName(t)[0];e.getElementById(i)||(n=e.createElement(t),n.id=i,n.src="//connect.facebook.net/vi_VN/sdk.js#xfbml=1&appId="+APP_FACEBOOK+"&version=v2.0",o.parentNode.insertBefore(n,o))}(document,"script","facebook-jssdk"),function(e,t,i,n,o,s,a){e.GoogleAnalyticsObject=o,e[o]=e[o]||function(){(e[o].q=e[o].q||[]).push(arguments)},e[o].l=1*new Date,s=t.createElement(i),a=t.getElementsByTagName(i)[0],s.async=1,s.src=n,a.parentNode.insertBefore(s,a)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create",GA_ID,"auto"),ga("require","displayfeatures"),ga("require","linkid","linkid.js"),ga("set","&uid",CURRENT_USER_ID),ga("send","pageview");var d=$("#backtotop");"undefined"!=typeof d&&null!=d&&d.length&&($(window).scroll(function(){$(this).scrollTop()>100?d.fadeIn():d.fadeOut()}),d.click(function(){return $("body,html").animate({scrollTop:0},800),!1}));var u=$("#moving-boxes");if("undefined"!=typeof u&&null!=u&&u.length){var h=u.offset().top;$(window).scroll(function(){var e=$(window).scrollTop();e>h&&(u.css("position","fixed"),u.css("top","50px"),u.css("z-index","0")),h>=e&&(u.css("position","static"),u.css("top","!important"),u.css("z-index","!important"))})}var f=$("#post-control-bar");if("undefined"!=typeof f&&null!=f&&f.length){var p=f.offset().top;$(window).scroll(function(){var e=$(window).scrollTop();e>p&&($("#post-control-bar").addClass("topbarfixed"),f.css("position","fixed"),f.css("top","42px"),f.css("z-index","10")),p>=e&&($("#post-control-bar").removeClass("topbarfixed"),f.css("position","absolute"),f.css("top","auto"),f.css("z-index","!important"))})}var v=$(".badge-buzz-more");"undefined"!=typeof v&&null!=v&&v.length&&v.click(function(){var e=parseInt($("#jsid-buzz-block").attr("data-boxIndex"),10),t=parseInt($("#jsid-buzz-block").attr("data-boxIndexMax"),10),i=parseInt($(this).attr("data-change"),10),n=e+i;n>=0&&t>=n&&($$("#jsid-buzz-block").set("data-boxIndex",n),$$(".badge-buzz-post-batch").setStyle("display","none"),$$(".badge-buzz-post-batch-"+n).setStyle("display",""),$$("#jsid-popular-prev").setStyle("color",0===n?"grey":"#00A5F0"),$$("#jsid-popular-prev").setStyle("cursor",0===n?"default":"pointer"),$$("#jsid-popular-next").setStyle("color",n===t?"grey":"#00A5F0"),$$("#jsid-popular-next").setStyle("cursor",n===t?"default":"popular"))});var g=$("#moving-like");if("undefined"!=typeof g&&null!=g&&g.length){var m=g.offset().top;$(window).scroll(function(){var e=$(window).scrollTop();e>m&&($("#moving-like").css("position","fixed"),$("#moving-like").css("top","41px"),$("#moving-like").css("z-index","200")),m>=e&&($("#moving-like").css("position","static"),$("#moving-like").css("top","!important"),$("#moving-like").css("z-index","!important"))})}var b=$(".unlove");"undefined"!=typeof b&&null!=b&&b.length&&b.click(function(){var e=$(this).attr("entryId");$(this).hasClass("unloved")?($(this).removeClass("unloved"),ulikedeg($(this).attr("entryId"),0,-1)):($(this).addClass("unloved"),$("#post_love_"+e).hasClass("loved")?(ulikedeg($(this).attr("entryId"),-1,1),$("#post_love_"+e).removeClass("loved")):ulikedeg($(this).attr("entryId"),0,1))});var y=$(".vote");"undefined"!=typeof y&&null!=y&&y.length&&y.click(function(){var e=$(this).attr("rel");$(this).hasClass("loved")?($(this).removeClass("loved"),ulikedeg($(this).attr("rel"),-1,0)):($(this).addClass("loved"),$("#vote-down-btn-"+e).hasClass("unloved")?($("#vote-down-btn-"+e).removeClass("unloved"),ulikedeg($(this).attr("rel"),1,-1)):ulikedeg($(this).attr("rel"),1,0))});var w=$(".voteButton1");"undefined"!=typeof w&&null!=w&&w.length&&w.click(function(){var e=$(this).attr("entryId");$(this).hasClass("downVoted")?($(this).removeClass("downVoted"),likedeg($(this).attr("entryId"),0,-1)):($(this).addClass("downVoted"),$("#post_love_"+e).hasClass("upVoted")?(likedeg($(this).attr("entryId"),-1,1),$("#post_love_"+e).removeClass("upVoted")):likedeg($(this).attr("entryId"),0,1))});var _=$(".voteButton2");"undefined"!=typeof _&&null!=_&&_.length&&_.click(function(){var e=$(this).attr("rel");$(this).hasClass("upVoted")?($(this).removeClass("upVoted"),likedeg($(this).attr("rel"),-1,0)):($(this).addClass("upVoted"),$("#vote-down-btn-"+e).hasClass("downVoted")?($("#vote-down-btn-"+e).removeClass("downVoted"),likedeg($(this).attr("rel"),1,-1)):likedeg($(this).attr("rel"),1,0))}),$(".gag-link").length&&$(".b9gcs-stop").length&&($(document).keydown(function(e){if(39==e.keyCode||75==e.keyCode){var t=new Array,i=new Array,n=new Array,o=0;$(".gag-link").each(function(){t[o]=$(this).attr("id"),i[o]=$(this).offset().top,n[o]=$(this).height(),o++});for(var s=$(window).scrollTop(),a=0,r=0;a<t.length;){if(i[a]+n[a]-39>s&&s>=i[a]-39){var r=a;break}a++}r==t.length-1&&$("#go-next").click(),$.scrollTo(i[r+1]-38)}if(37==e.keyCode||74==e.keyCode){var t=new Array,i=new Array,n=new Array,o=0;$(".gag-link").each(function(){t[o]=$(this).attr("id"),i[o]=$(this).offset().top,n[o]=$(this).height(),o++});for(var s=$(window).scrollTop(),a=0,r=0;a<t.length;){if(i[a]+n[a]-39>s&&s>=i[a]-39){var r=a;break}a++}$.scrollTo(i[r-1]-38)}if(76==e.keyCode){var t=new Array,i=new Array,o=0;$(".gag-link").each(function(){t[o]=$(this).attr("gagId"),i[o]=$(this).offset().top,o++});for(var s=$(window).scrollTop(),a=0;a<t.length&&!(i[a]>s);)a++;$.scrollTo(".gag-link:eq("+a+")"),$("#post_love_"+t[a]).trigger("click")}if(72==e.keyCode){var t=new Array,i=new Array,o=0;$(".gag-link").each(function(){t[o]=$(this).attr("gagId"),i[o]=$(this).offset().top,o++});for(var s=$(window).scrollTop(),a=0;a<t.length&&!(i[a]>s);)a++;$.scrollTo(".gag-link:eq("+a+")"),$("#vote-down-btn-"+t[a]).trigger("click")}}),$(window).scroll(function(){var e=new Array,t=new Array,i=new Array,n=0;$(".gag-link").each(function(){e[n]=$(this).attr("gagId"),t[n]=$(this).offset().top,i[n]=$(this).height(),n++});for(var o=$(window).scrollTop(),s=0,a=0;s<e.length;){if(t[s]+i[s]>o&&o>t[s]){var a=s;break}s++}var r=($(window).height(),$("#action-"+e[0]).height()+35);o>t[a]+i[a]-r||o<t[0]?($(".b9gcs-stop").css("position","static"),$(".b9gcs-stop").css("top","!important")):(0==a&&o>=t[a]||a>=1)&&($("#action-"+e[a]).css("position","fixed"),$("#action-"+e[a]).css("top","55px"))}));var k=18,x=0,j=Date.now();e()});