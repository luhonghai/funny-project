/**
 *  imagesLoaded PACKAGED v3.0.2
 */

(function(e){"use strict";function t(){}function n(e,t){if(r)return t.indexOf(e);for(var n=t.length;n--;)if(t[n]===e)return n;return-1}var i=t.prototype,r=Array.prototype.indexOf?!0:!1;i._getEvents=function(){return this._events||(this._events={})},i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,t){var i,r=this.getListenersAsObject(e);for(i in r)r.hasOwnProperty(i)&&-1===n(t,r[i])&&r[i].push(t);return this},i.on=i.addListener,i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,t){var i,r,s=this.getListenersAsObject(e);for(r in s)s.hasOwnProperty(r)&&(i=n(t,s[r]),-1!==i&&s[r].splice(i,1));return this},i.off=i.removeListener,i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,s=e?this.removeListener:this.addListener,o=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)s.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?s.call(this,i,r):o.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.emitEvent=function(e,t){var n,i,r,s=this.getListenersAsObject(e);for(i in s)if(s.hasOwnProperty(i))for(n=s[i].length;n--;)r=t?s[i][n].apply(null,t):s[i][n](),r===!0&&this.removeListener(e,s[i][n]);return this},i.trigger=i.emitEvent,i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},"function"==typeof define&&define.amd?define(function(){return t}):e.EventEmitter=t})(this),function(e){"use strict";var t=document.documentElement,n=function(){};t.addEventListener?n=function(e,t,n){e.addEventListener(t,n,!1)}:t.attachEvent&&(n=function(t,n,i){t[n+i]=i.handleEvent?function(){var t=e.event;t.target=t.target||t.srcElement,i.handleEvent.call(i,t)}:function(){var n=e.event;n.target=n.target||n.srcElement,i.call(t,n)},t.attachEvent("on"+n,t[n+i])});var i=function(){};t.removeEventListener?i=function(e,t,n){e.removeEventListener(t,n,!1)}:t.detachEvent&&(i=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var r={bind:n,unbind:i};"function"==typeof define&&define.amd?define(r):e.eventie=r}(this),function(e){"use strict";function t(e,t){for(var n in t)e[n]=t[n];return e}function n(e){return"[object Array]"===a.call(e)}function i(e){var t=[];if(n(e))t=e;else if("number"==typeof e.length)for(var i=0,r=e.length;r>i;i++)t.push(e[i]);else t.push(e);return t}function r(e,n){function r(e,n,o){if(!(this instanceof r))return new r(e,n);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=i(e),this.options=t({},this.options),"function"==typeof n?o=n:t(this.options,n),o&&this.on("always",o),this.getImages(),s&&(this.jqDeferred=new s.Deferred);var h=this;setTimeout(function(){h.check()})}function a(e){this.img=e}r.prototype=new e,r.prototype.options={},r.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);for(var i=n.querySelectorAll("img"),r=0,s=i.length;s>r;r++){var o=i[r];this.addImage(o)}}},r.prototype.addImage=function(e){var t=new a(e);this.images.push(t)},r.prototype.check=function(){function e(e,r){return t.options.debug&&h&&o.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var s=this.images[r];s.on("confirm",e),s.check()}},r.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emit("progress",this,e),this.jqDeferred&&this.jqDeferred.notify(this,e)},r.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emit(e,this),this.emit("always",this),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},s&&(s.fn.imagesLoaded=function(e,t){var n=new r(this,e,t);return n.jqDeferred.promise(s(this))});var f={};return a.prototype=new e,a.prototype.check=function(){var e=f[this.img.src];if(e)return this.useCached(e),void 0;if(f[this.img.src]=this,this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this.proxyImage=new Image;n.bind(t,"load",this),n.bind(t,"error",this),t.src=this.img.src},a.prototype.useCached=function(e){if(e.isConfirmed)this.confirm(e.isLoaded,"cached was confirmed");else{var t=this;e.on("confirm",function(e){return t.confirm(e.isLoaded,"cache emitted confirmed"),!0})}},a.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},a.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},a.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindProxyEvents()},a.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindProxyEvents()},a.prototype.unbindProxyEvents=function(){n.unbind(this.proxyImage,"load",this),n.unbind(this.proxyImage,"error",this)},r}var s=e.jQuery,o=e.console,h=o!==void 0,a=Object.prototype.toString;"function"==typeof define&&define.amd?define(["eventEmitter","eventie"],r):e.imagesLoaded=r(e.EventEmitter,e.eventie)}(window);
/**
 * Infinite Scroll version 2.0b2.110713
 */

(function(window,$,undefined){$.infinitescroll=function infscr(options,callback,element){this.element=$(element);this._create(options,callback);};$.infinitescroll.defaults={loading:{finished:undefined,finishedMsg:"<em>Congratulations, you've reached the end of the internet.</em>",img:"http://www.infinite-scroll.com/loading.gif",msg:null,msgText:"<em>Loading the next set of posts...</em>",selector:null,speed:'fast',start:undefined},state:{isDuringAjax:false,isInvalidPage:false,isDestroyed:false,isDone:false,isPaused:false,currPage:1},callback:undefined,debug:false,behavior:undefined,binder:$(window),nextSelector:"div.navigation a:first",navSelector:"div.navigation",contentSelector:null,extraScrollPx:150,itemSelector:"div.post",animate:false,pathParse:undefined,dataType:'html',appendCallback:true,bufferPx:40,errorCallback:function(){},infid:0,pixelsFromNavToBottom:undefined,path:undefined};$.infinitescroll.prototype={_binding:function infscr_binding(binding){var instance=this,opts=instance.options;if(!!opts.behavior&&this['_binding_'+opts.behavior]!==undefined){this['_binding_'+opts.behavior].call(this);return;}
if(binding!=='bind'&&binding!=='unbind'){this._debug('Binding value  '+binding+' not valid')
return false;}
if(binding=='unbind'){(this.options.binder).unbind('smartscroll.infscr.'+instance.options.infid);}else{(this.options.binder)[binding]('smartscroll.infscr.'+instance.options.infid,function(){instance.scroll();});};this._debug('Binding',binding);},_create:function infscr_create(options,callback){if(!this._validate(options)){return false;}
var opts=this.options=$.extend(true,{},$.infinitescroll.defaults,options),relurl=/(.*?\/\/).*?(\/.*)/,path=$(opts.nextSelector).attr('href');opts.contentSelector=opts.contentSelector||this.element;opts.loading.selector=opts.loading.selector||opts.contentSelector;if(!path){this._debug('Navigation selector not found');return;}
opts.path=this._determinepath(path);opts.loading.msg=$('<div id="infscr-loading"><img alt="Loading..." src="'+opts.loading.img+'" /><div>'+opts.loading.msgText+'</div></div>');(new Image()).src=opts.loading.img;opts.pixelsFromNavToBottom=$(document).height()-$(opts.navSelector).offset().top;opts.loading.start=opts.loading.start||function(){$(opts.navSelector).hide();opts.loading.msg.appendTo(opts.loading.selector).show(opts.loading.speed,function(){beginAjax(opts);});};opts.loading.finished=opts.loading.finished||function(){opts.loading.msg.fadeOut('normal');};opts.callback=function(instance,data){if(!!opts.behavior&&instance['_callback_'+opts.behavior]!==undefined){instance['_callback_'+opts.behavior].call($(opts.contentSelector)[0],data);}
if(callback){callback.call($(opts.contentSelector)[0],data);}};this._setup();},_debug:function infscr_debug(){if(this.options.debug){return window.console&&console.log.call(console,arguments);}},_determinepath:function infscr_determinepath(path){var opts=this.options;if(!!opts.behavior&&this['_determinepath_'+opts.behavior]!==undefined){this['_determinepath_'+opts.behavior].call(this,path);return;}
if(!!opts.pathParse){this._debug('pathParse manual');return opts.pathParse;}else if(path.match(/^(.*?)\b2\b(.*?$)/)){path=path.match(/^(.*?)\b2\b(.*?$)/).slice(1);}else if(path.match(/^(.*?)2(.*?$)/)){if(path.match(/^(.*?page=)2(\/.*|$)/)){path=path.match(/^(.*?page=)2(\/.*|$)/).slice(1);return path;}
path=path.match(/^(.*?)2(.*?$)/).slice(1);}else{if(path.match(/^(.*?page=)1(\/.*|$)/)){path=path.match(/^(.*?page=)1(\/.*|$)/).slice(1);return path;}else{this._debug('Sorry, we couldn\'t parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com.');opts.state.isInvalidPage=true;}}
this._debug('determinePath',path);return path;},_error:function infscr_error(xhr){var opts=this.options;if(!!opts.behavior&&this['_error_'+opts.behavior]!==undefined){this['_error_'+opts.behavior].call(this,xhr);return;}
if(xhr!=='destroy'&&xhr!=='end'){xhr='unknown';}
this._debug('Error',xhr);if(xhr=='end'){this._showdonemsg();}
opts.state.isDone=true;opts.state.currPage=1;opts.state.isPaused=false;this._binding('unbind');},_loadcallback:function infscr_loadcallback(box,data){var opts=this.options,callback=this.options.callback,result=(opts.state.isDone)?'done':(!opts.appendCallback)?'no-append':'append',frag;if(!!opts.behavior&&this['_loadcallback_'+opts.behavior]!==undefined){this['_loadcallback_'+opts.behavior].call(this,box,data);return;}
switch(result){case'done':this._showdonemsg();return false;break;case'no-append':if(opts.dataType=='html'){data='<div>'+data+'</div>';data=$(data).find(opts.itemSelector);};break;case'append':var children=box.children();if(children.length==0){return this._error('end');}
frag=document.createDocumentFragment();while(box[0].firstChild){frag.appendChild(box[0].firstChild);}
this._debug('contentSelector',$(opts.contentSelector)[0])
$(opts.contentSelector)[0].appendChild(frag);data=children.get();break;}
opts.loading.finished.call($(opts.contentSelector)[0],opts)
if(opts.animate){var scrollTo=$(window).scrollTop()+$('#infscr-loading').height()+opts.extraScrollPx+'px';$('html,body').animate({scrollTop:scrollTo},800,function(){opts.state.isDuringAjax=false;});}
if(!opts.animate)opts.state.isDuringAjax=false;callback(this,data);},_nearbottom:function infscr_nearbottom(){var opts=this.options,pixelsFromWindowBottomToBottom=0+$(document).height()-(opts.binder.scrollTop())-$(window).height();if(!!opts.behavior&&this['_nearbottom_'+opts.behavior]!==undefined){this['_nearbottom_'+opts.behavior].call(this);return;}
this._debug('math:',pixelsFromWindowBottomToBottom,opts.pixelsFromNavToBottom);return(pixelsFromWindowBottomToBottom-opts.bufferPx<opts.pixelsFromNavToBottom);},_pausing:function infscr_pausing(pause){var opts=this.options;if(!!opts.behavior&&this['_pausing_'+opts.behavior]!==undefined){this['_pausing_'+opts.behavior].call(this,pause);return;}
if(pause!=='pause'&&pause!=='resume'&&pause!==null){this._debug('Invalid argument. Toggling pause value instead');};pause=(pause&&(pause=='pause'||pause=='resume'))?pause:'toggle';switch(pause){case'pause':opts.state.isPaused=true;break;case'resume':opts.state.isPaused=false;break;case'toggle':opts.state.isPaused=!opts.state.isPaused;break;}
this._debug('Paused',opts.state.isPaused);return false;},_setup:function infscr_setup(){var opts=this.options;if(!!opts.behavior&&this['_setup_'+opts.behavior]!==undefined){this['_setup_'+opts.behavior].call(this);return;}
this._binding('bind');return false;},_showdonemsg:function infscr_showdonemsg(){var opts=this.options;if(!!opts.behavior&&this['_showdonemsg_'+opts.behavior]!==undefined){this['_showdonemsg_'+opts.behavior].call(this);return;}
opts.loading.msg.find('img').hide().parent().find('div').html(opts.loading.finishedMsg).animate({opacity:1},2000,function(){$(this).parent().fadeOut('normal');});opts.errorCallback.call($(opts.contentSelector)[0],'done');},_validate:function infscr_validate(opts){for(var key in opts){if(key.indexOf&&key.indexOf('Selector')>-1&&$(opts[key]).length===0){this._debug('Your '+key+' found no elements.');return false;}
return true;}},bind:function infscr_bind(){this._binding('bind');},destroy:function infscr_destroy(){this.options.state.isDestroyed=true;return this._error('destroy');},pause:function infscr_pause(){this._pausing('pause');},resume:function infscr_resume(){this._pausing('resume');},retrieve:function infscr_retrieve(pageNum){var instance=this,opts=instance.options,path=opts.path,box,frag,desturl,method,condition,pageNum=pageNum||null,getPage=(!!pageNum)?pageNum:opts.state.currPage;beginAjax=function infscr_ajax(opts){opts.state.currPage++;instance._debug('heading into ajax',path);box=$(opts.contentSelector).is('table')?$('<tbody/>'):$('<div/>');desturl=path.join(opts.state.currPage);method=(opts.dataType=='html'||opts.dataType=='json')?opts.dataType:'html+callback';if(opts.appendCallback&&opts.dataType=='html')method+='+callback'
switch(method){case'html+callback':instance._debug('Using HTML via .load() method');box.load(desturl+' '+opts.itemSelector,null,function infscr_ajax_callback(responseText){instance._loadcallback(box,responseText);});break;case'html':case'json':instance._debug('Using '+(method.toUpperCase())+' via $.ajax() method');$.ajax({url:desturl,dataType:opts.dataType,complete:function infscr_ajax_callback(jqXHR,textStatus){condition=(typeof(jqXHR.isResolved)!=='undefined')?(jqXHR.isResolved()):(textStatus==="success"||textStatus==="notmodified");(condition)?instance._loadcallback(box,jqXHR.responseText):instance._error('end');}});break;}};if(!!opts.behavior&&this['retrieve_'+opts.behavior]!==undefined){this['retrieve_'+opts.behavior].call(this,pageNum);return;}
if(opts.state.isDestroyed){this._debug('Instance is destroyed');return false;};opts.state.isDuringAjax=true;opts.loading.start.call($(opts.contentSelector)[0],opts);},scroll:function infscr_scroll(){var opts=this.options,state=opts.state;if(!!opts.behavior&&this['scroll_'+opts.behavior]!==undefined){this['scroll_'+opts.behavior].call(this);return;}
if(state.isDuringAjax||state.isInvalidPage||state.isDone||state.isDestroyed||state.isPaused)return;if(!this._nearbottom())return;this.retrieve();},toggle:function infscr_toggle(){this._pausing();},unbind:function infscr_unbind(){this._binding('unbind');},update:function infscr_options(key){if($.isPlainObject(key)){this.options=$.extend(true,this.options,key);}}}
$.fn.infinitescroll=function infscr_init(options,callback){var thisCall=typeof options;switch(thisCall){case'string':var args=Array.prototype.slice.call(arguments,1);this.each(function(){var instance=$.data(this,'infinitescroll');if(!instance){return false;}
if(!$.isFunction(instance[options])||options.charAt(0)==="_"){return false;}
instance[options].apply(instance,args);});break;case'object':this.each(function(){var instance=$.data(this,'infinitescroll');if(instance){instance.update(options);}else{$.data(this,'infinitescroll',new $.infinitescroll(options,callback,this));}});break;}
return this;};var event=$.event,scrollTimeout;event.special.smartscroll={setup:function(){$(this).bind("scroll",event.special.smartscroll.handler);},teardown:function(){$(this).unbind("scroll",event.special.smartscroll.handler);},handler:function(event,execAsap){var context=this,args=arguments;event.type="smartscroll";if(scrollTimeout){clearTimeout(scrollTimeout);}
scrollTimeout=setTimeout(function(){$.event.handle.apply(context,args);},execAsap==="execAsap"?0:100);}};$.fn.smartscroll=function(fn){return fn?this.bind("smartscroll",fn):this.trigger("smartscroll",["execAsap"]);};})(window,jQuery);
/**
 * jQuery.ScrollTo 1.4.2
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);
var baseurl = BASE_URL;
var avataurl = AVATAR_URL;
var asseturl = ASSET_URL;

function isIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    return (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./));
}

document.head = document.head || document.getElementsByTagName('head')[0];

function changeFavicon(src) {
    var link = document.createElement('link'),
        oldLink = document.getElementById('dynamic-favicon');
    link.id = 'dynamic-favicon';
    link.rel = 'shortcut icon';
    link.href = src;
    if (oldLink) {
        document.head.removeChild(oldLink);
    }
    document.head.appendChild(link);
}

function rmt(l) {
    var img = new Image();
    img.src = l;
    document.getElementById('tmp-img').appendChild(img);
}
function myWindow(location, address, gaCategory, gaAction, entryLink) {
    var w = 640;
    var h = 460;
    var sTop = window.screen.height / 2 - (h / 2);
    var sLeft = window.screen.width / 2 - (w / 2);
    var sharer = window.open(address, "Share on Facebook", "status=1,height=" + h + ",width=" + w + ",top=" + sTop + ",left=" + sLeft + ",resizable=0");
}

function likedeg(p, l, u) {
    jQuery.ajax({
        type: 'POST',
        url: baseurl + '/likedeg.php',
        data: 'l=' + l + '&pid=' + p + '&u=' + u,
        success: function (e) {
            $('#love_count').html(e);
        }
    });
}

function ulikedeg(p, l, u) {
    jQuery.ajax({
        type: 'POST',
        url: baseurl + '/votegag.php',
        data: 'l=' + l + '&pid=' + p + '&u=' + u,
        success: function (e) {
            $('#love_count_' + p).html(e);
        }
    });
}

function formatMoney(n, c, d, t) {
    c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

function sendinvitation(email, csrf) {
    jQuery.ajax({
        type: 'POST',
        url: baseurl + '/sendinvitation.php',
        data: 'email=' + email + '&csrf=' + csrf,
        success: function (e) {
            if (e != "") {
                alert(e);
            } else {
                $('#request-invite-loading').css('display', 'none');
                $('#request-invite-block').css('display', 'none');
                $('#signup-desc').css('display', 'none');
                $('#signup-desc-done').css('display', 'block');
            }
        }
    });
}


$(document).ready(function () {
    /**
     * Login section
     */

    var $recoverToLogin = $("#recover-to-login");
    var $loginToRecover = $("#login-to-recover");
    var $email = $("#login-email-block");
    var $pass = $("#login-password-block");
    var $username = $("#login-username-block");
    if ($recoverToLogin.length && $loginToRecover.length
        && $email.length && $pass.length && $username.length) {
        $email.hide();
        $pass.show();
        $username.show();
        $loginToRecover.click(function () {
            $email.show();
            $pass.hide();
            $username.hide();
        });
        $recoverToLogin.click(function () {
            $email.hide();
            $pass.show();
            $username.show();
        })
    }

    /**
     *  Signup section
     */
    var $noFacebookAccount = $('#no-facebook-account');
    var $getEmailInvitation = $('#get-email-invitation');
    if ($noFacebookAccount.length && $getEmailInvitation.length) {
        $noFacebookAccount.click(function () {
            $('.message').css('display', 'none');
            $('#request-invite-block').css('display', 'block');

        });
        $getEmailInvitation.click(function () {
            sendinvitation($('#signup-request-email').val(), $('#CSRFToken').val());
            $('#request-invite-loading').css('display', 'block');
        });
    }


    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 20) {
                $('#nav').css("position", "fixed").css("top", "0").css("box-shadow", "0 2px 4px #333");
            }
            else {
                $('#nav').css("position", "relative").css("box-shadow", "none");
            }
        });
    });

    var $tabMenu = $("#tabs");
    if (typeof $tabMenu != 'undefined' && $tabMenu != null && $tabMenu.length) {
        $("#tabs ul li:first").addClass("active");
        $("#tabs ul li a:first").addClass("active");
        $.getJSON(baseurl + "/topusers?t=tuan&ajax=1", function (data) {
            for (var i = 0; i < data.length; i++) {
                if (i == 5) {
                    break;
                }
                var user = data[i];
                if (user.profilepicture == '') {
                    user.profilepicture = 'noprofilepicture.jpg'
                }
                var tmpHtml = ['<div class="over"><div class="over_info" id="avatar"><a href="/user/',
                    user.username,
                    '"><img id="avatar" alt="Avatar" src="',
                    avataurl,
                    '/',
                    user.profilepicture,
                    '" /></a></div><div class="over_info" id="information"><p><strong><a href="/user/',
                    user.username,
                    '">',
                    user.fullname,
                    '</a></strong></p><p>Số bài:&nbsp',
                    formatMoney(user.TOTAL, 0),
                    ' - Điểm:&nbsp',
                    formatMoney(user.LIKES, 0),
                    '</p><p>Tổng lượt xem:&nbsp',
                    formatMoney(user.VIEWS, 0),
                    '</p></div><div id="rank"><img id="rank" alt="rank" src="',
                    asseturl,
                    '/images/' + (i + 1),
                    '.png" /></div><div class="clear"></div></div>'];
                $("#tabs div.current").append(tmpHtml.join(''));
            }
        });
        $("#tabs ul li").click(function () {
            $("#tabs div.current").html('<center><p><p>Em đang cố đây thím chờ tý nha...</p></center>');
            $("#tabs ul li").removeClass('active');
            $("#tabs ul li a").removeClass('active');
            var a = $("#tabs ul li").index(this);
            $("#tabs ul li:eq(" + a + ")").addClass("active");
            $("#tabs ul li a:eq(" + a + ")").addClass("active");
            var top = $("#tabs ul li a:eq(" + a + ")").attr("data");
            $.getJSON(baseurl + "/topusers?t=" + top + "&ajax=1", function (data) {
                $("#tabs div.current").html('');
                for (var i = 0; i < data.length; i++) {
                    if (i == 5) {
                        break;
                    }
                    var user = data[i];
                    if (user.profilepicture == '') {
                        user.profilepicture = 'noprofilepicture.jpg'
                    }
                    var tmpHtml = ['<div class="over"><div class="over_info" id="avatar"><a href="/user/',
                        user.username,
                        '"><img id="avatar" alt="Avatar" src="',
                        avataurl,
                        '/',
                        user.profilepicture,
                        '" /></a></div><div class="over_info" id="information"><p><strong><a href="/user/',
                        user.username,
                        '">',
                        user.fullname,
                        '</a></strong></p><p>Số bài:&nbsp',
                        formatMoney(user.TOTAL, 0),
                        ' - Điểm:&nbsp',
                        formatMoney(user.LIKES, 0),
                        '</p><p>Tổng lượt xem:&nbsp',
                        formatMoney(user.VIEWS, 0),
                        '</p></div><div id="rank"><img id="rank" alt="rank" src="',
                        asseturl,
                        '/images/' + (i + 1),
                        '.png" /></div><div class="clear"></div></div>'];
                    $("#tabs div.current").append(tmpHtml.join(''));
                }
            });
        });
    }

    /**
     * Search button
     */
    var $btnSearch = $('.searchButton');
    if (typeof  $btnSearch != 'undefined' && $btnSearch != null && $btnSearch.length) {
        $btnSearch.click(function () {
            $('#header_searchbar').toggle('slow');
        });
    }

    /**
     * Facebook API
     */

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&appId=" + APP_FACEBOOK + "&version=v2.0";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    /**
     * Google Analytics
     */
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

    ga('create', GA_ID, 'auto');
    ga('require', 'displayfeatures');
    ga('require', 'linkid', 'linkid.js');
    ga('set', '&uid', CURRENT_USER_ID);
    ga('send', 'pageview');

    /**
     * Back to top animation
     */
    var $backtotop = $('#backtotop');
    if (typeof $backtotop != 'undefined' && $backtotop != null && $backtotop.length) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $backtotop.fadeIn()
            } else {
                $backtotop.fadeOut()
            }
        });

        $backtotop.click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false
        });
    }

    /**
     *  Ads section
     */
    var $movingBoxes = $('#moving-boxes');
    if (typeof $movingBoxes != 'undefined' && $movingBoxes != null && $movingBoxes.length) {
        var adloca = $movingBoxes.offset().top;
        $(window).scroll(function () {
            var curloca = $(window).scrollTop();
            if (curloca > adloca) {
                $movingBoxes.css('position', 'fixed');
                $movingBoxes.css('top', '50px');
                $movingBoxes.css('z-index', '0');
            }
            if (curloca <= adloca) {
                $movingBoxes.css('position', 'static');
                $movingBoxes.css('top', '!important');
                $movingBoxes.css('z-index', '!important');
            }
        });
    }


    var $postControlBar = $('#post-control-bar');
    if (typeof $postControlBar != 'undefined' && $postControlBar != null && $postControlBar.length) {
        var adloca2 = $postControlBar.offset().top;

        $(window).scroll(function () {
            var curloca2 = $(window).scrollTop();
            if (curloca2 > adloca2) {
                $('#post-control-bar').addClass('topbarfixed');
                $postControlBar.css('position', 'fixed');
                $postControlBar.css('top', '42px');
                $postControlBar.css('z-index', '10');
            }
            if (curloca2 <= adloca2) {
                $('#post-control-bar').removeClass('topbarfixed');
                $postControlBar.css('position', 'absolute');
                $postControlBar.css('top', 'auto');
                $postControlBar.css('z-index', '!important');
            }
        });
    }
    var $badgeBuzzMore = $('.badge-buzz-more');
    if (typeof $badgeBuzzMore != 'undefined' && $badgeBuzzMore != null && $badgeBuzzMore.length) {
        $badgeBuzzMore.click(function () {
            var currIndex = parseInt($("#jsid-buzz-block").attr('data-boxIndex'), 10);
            var maxIndex = parseInt($("#jsid-buzz-block").attr('data-boxIndexMax'), 10);
            var change = parseInt($(this).attr('data-change'), 10);
            var newIndex = currIndex + change;
            if (newIndex >= 0 && newIndex <= maxIndex) {
                $$("#jsid-buzz-block").set("data-boxIndex", newIndex);
                $$(".badge-buzz-post-batch").setStyle("display", "none");
                $$(".badge-buzz-post-batch-" + newIndex).setStyle("display", "");
                $$("#jsid-popular-prev").setStyle("color", newIndex === 0 ? "grey" : "#00A5F0");
                $$("#jsid-popular-prev").setStyle("cursor", newIndex === 0 ? "default" : "pointer");
                $$("#jsid-popular-next").setStyle("color", newIndex === maxIndex ? "grey" : "#00A5F0");
                $$("#jsid-popular-next").setStyle("cursor", newIndex === maxIndex ? "default" : "popular");
            }
        });
    }
    var $movingLike = $('#moving-like');
    if (typeof  $movingLike != 'undefined' && $movingLike != null && $movingLike.length) {
        var vloca = $movingLike.offset().top;
        $(window).scroll(function () {
            var curloca = $(window).scrollTop();
            if (curloca > vloca) {
                $('#moving-like').css('position', 'fixed');
                $('#moving-like').css('top', '41px');
                $('#moving-like').css('z-index', '200');
            }
            if (curloca <= vloca) {
                $('#moving-like').css('position', 'static');
                $('#moving-like').css('top', '!important');
                $('#moving-like').css('z-index', '!important');
            }
        });
    }

    /**
     *  Vote section
     */
    var $btnUnlove = $('.unlove');
    if (typeof $btnUnlove != 'undefined' && $btnUnlove != null && $btnUnlove.length) {
        $btnUnlove.click(function () {
            var id = $(this).attr('entryId');
            if ($(this).hasClass('unloved')) {
                $(this).removeClass('unloved');
                ulikedeg($(this).attr('entryId'), 0, -1);
            } else {
                $(this).addClass('unloved');
                if ($('#post_love_' + id).hasClass('loved')) {
                    ulikedeg($(this).attr('entryId'), -1, 1);
                    $('#post_love_' + id).removeClass('loved');
                } else {
                    ulikedeg($(this).attr('entryId'), 0, 1);
                }
            }
        });
    }
    var $btnVote = $('.vote');
    if (typeof $btnVote != 'undefined' && $btnVote != null && $btnVote.length) {
        $btnVote.click(function () {
            var id = $(this).attr('rel');
            if ($(this).hasClass('loved')) {
                $(this).removeClass('loved');
                ulikedeg($(this).attr('rel'), -1, 0);
            } else {
                $(this).addClass('loved');
                if ($('#vote-down-btn-' + id).hasClass('unloved')) {
                    $('#vote-down-btn-' + id).removeClass('unloved');
                    ulikedeg($(this).attr('rel'), 1, -1);
                } else {
                    ulikedeg($(this).attr('rel'), 1, 0);
                }
            }
        });
    }
    var $btnVote1 = $('.voteButton1');
    if (typeof $btnVote1 != 'undefined' && $btnVote1 != null && $btnVote1.length) {
        $btnVote1.click(function () {
            var id = $(this).attr('entryId');
            if ($(this).hasClass('downVoted')) {
                $(this).removeClass('downVoted');
                likedeg($(this).attr('entryId'), 0, -1);
            } else {
                $(this).addClass('downVoted');
                if ($('#post_love_' + id).hasClass('upVoted')) {
                    likedeg($(this).attr('entryId'), -1, 1);
                    $('#post_love_' + id).removeClass('upVoted');
                } else {
                    likedeg($(this).attr('entryId'), 0, 1);
                }
            }
        });
    }
    var $btnVote2 = $('.voteButton2');
    if (typeof  $btnVote2 != 'undefined' && $btnVote2 != null && $btnVote2.length) {
        $btnVote2.click(function () {
            var id = $(this).attr('rel');
            if ($(this).hasClass('upVoted')) {
                $(this).removeClass('upVoted');
                likedeg($(this).attr('rel'), -1, 0);
            } else {
                $(this).addClass('upVoted');
                if ($('#vote-down-btn-' + id).hasClass('downVoted')) {
                    $('#vote-down-btn-' + id).removeClass('downVoted');
                    likedeg($(this).attr('rel'), 1, -1);
                } else {
                    likedeg($(this).attr('rel'), 1, 0);
                }
            }

        });
    }


    /**
     *  Gag link auto scroll
     */
    if ($('.gag-link').length && $('.b9gcs-stop').length) {
        $(document).keydown(function (e) {
            if (e.keyCode == 39 || e.keyCode == 75) {
                var a = new Array();
                var b = new Array();
                var c = new Array();
                var i = 0;
                $('.gag-link').each(function () {
                    a[i] = $(this).attr('id');
                    b[i] = $(this).offset().top;
                    c[i] = $(this).height();
                    i++;
                });
                var curloc = $(window).scrollTop();
                var j = 0;
                var k = 0;
                for (; j < a.length;) {
                    if (b[j] + c[j] - 39 > curloc && curloc >= b[j] - 39) {
                        var k = j;
                        break;
                    }
                    j++;
                }
                if (k == a.length - 1) {
                    $('#go-next').click();
                }
                $.scrollTo(b[k + 1] - 38);
            }

            if (e.keyCode == 37 || e.keyCode == 74) {
                var a = new Array();
                var b = new Array();
                var c = new Array();
                var i = 0;
                $('.gag-link').each(function () {
                    a[i] = $(this).attr('id');
                    b[i] = $(this).offset().top;
                    c[i] = $(this).height();
                    i++;
                });
                var curloc = $(window).scrollTop();
                var j = 0;
                var k = 0;
                for (; j < a.length;) {
                    if (b[j] + c[j] - 39 > curloc && curloc >= b[j] - 39) {
                        var k = j;
                        break;
                    }
                    j++;
                }
                $.scrollTo(b[k - 1] - 38);
            }

            if (e.keyCode == 76) {
                var a = new Array();
                var b = new Array();
                var i = 0;
                $('.gag-link').each(function () {
                    a[i] = $(this).attr('gagId');
                    b[i] = $(this).offset().top;
                    i++;
                });
                var curloc = $(window).scrollTop();
                var j = 0;
                for (; j < a.length;) {
                    if (b[j] > curloc) {
                        break;
                    }
                    j++;
                }
                $.scrollTo('.gag-link:eq(' + (j) + ')');
                $('#post_love_' + a[j]).trigger('click');
            }

            if (e.keyCode == 72) {
                var a = new Array();
                var b = new Array();
                var i = 0;
                $('.gag-link').each(function () {
                    a[i] = $(this).attr('gagId');
                    b[i] = $(this).offset().top;
                    i++;
                });
                var curloc = $(window).scrollTop();
                var j = 0;
                for (; j < a.length;) {
                    if (b[j] > curloc) {
                        break;
                    }
                    j++;
                }
                $.scrollTo('.gag-link:eq(' + (j) + ')');
                $('#vote-down-btn-' + a[j]).trigger('click');
            }
        });

        $(window).scroll(function () {
            var a = new Array();
            var b = new Array();
            var c = new Array();
            var i = 0;
            $('.gag-link').each(function () {
                a[i] = $(this).attr('gagId');
                b[i] = $(this).offset().top;
                c[i] = $(this).height();
                i++;
            });
            var curloc = $(window).scrollTop();
            var j = 0;
            var k = 0;
            for (; j < a.length;) {
                if (b[j] + c[j] > curloc && curloc > b[j]) {
                    var k = j;
                    break;
                }
                j++;
            }
            var winh = $(window).height();
            var ach = $('#action-' + a[0]).height() + 35;
            if ((curloc > (b[k] + c[k] - ach)) || curloc < b[0]) {
                $('.b9gcs-stop').css('position', 'static');
                $('.b9gcs-stop').css('top', '!important');
            }
            else {
                if ((k == 0 && curloc >= b[k]) || k >= 1) {
                    $('#action-' + a[k]).css('position', 'fixed');
                    $('#action-' + a[k]).css('top', '55px');
                }
            }
        });
    }

    /**
     *  Fun favicon
     */

    var current_fav = 18;
    var beep_fav = 0;
    var last_fav_update = Date.now();

    function update_fav() {
        var current_fav_update = Date.now();
        if ((current_fav_update - last_fav_update ) > 15000 && current_fav == 18) {
            beep_fav = 0;
            current_fav = 0;
            last_fav_update = Date.now();
        }

        if (current_fav == 16) {
            if (beep_fav > 6) {
                beep_fav = 0;
                current_fav = 18;
                changeFavicon(asseturl + "/images/favicon/favicon.png");
                setTimeout(update_fav, 100);
                return;
            } else {
                if (beep_fav % 2 == 0) {
                    changeFavicon(asseturl + "/images/favicon/favicon.png");
                } else {
                    changeFavicon(asseturl + "/images/favicon/faviconb.png");
                }
                beep_fav++;
                setTimeout(update_fav, 500);
                return;
            }
        }
        if (current_fav < 16) {
            changeFavicon(asseturl + "/images/favicon/favicon" + current_fav + ".png")
            current_fav++;
        }
        setTimeout(update_fav, 100);
    }

    update_fav();
});


