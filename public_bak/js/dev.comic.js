
jQuery.iAccordion = {
    build : function(options)
    {
        return this.each(
            function()
            {
                if (!options.headerSelector || !options.panelSelector)
                    return;
                var el = this;
                el.accordionCfg = {
                    panelHeight			: options.panelHeight||300,
                    headerSelector		: options.headerSelector,
                    panelSelector		: options.panelSelector,
                    activeClass			: options.activeClass||'fakeAccordionClass',
                    hoverClass			: options.hoverClass||'fakeAccordionClass',
                    onShow				: options.onShow && typeof options.onShow == 'function' ? options.onShow : false,
                    onHide				: options.onShow && typeof options.onHide == 'function' ? options.onHide : false,
                    onClick				: options.onClick && typeof options.onClick == 'function' ? options.onClick : false,
                    headers				: jQuery(options.headerSelector, this),
                    panels				: jQuery(options.panelSelector, this),
                    speed				: options.speed||400,
                    currentPanel		: options.currentPanel||0
                };
                el.accordionCfg.panels
                    .hide()
                    .css('height', '1px')
                    .eq(0)
                    .css(
                    {
                        height: el.accordionCfg.panelHeight + 'px',
                        display: 'block'
                    }
                )
                    .end();

                el.accordionCfg.headers
                    .each(
                    function(nr)
                    {
                        this.accordionPos = nr;
                    }
                )
                    .hover(
                    function()
                    {
                        jQuery(this).addClass(el.accordionCfg.hoverClass);
                    },
                    function()
                    {
                        jQuery(this).removeClass(el.accordionCfg.hoverClass);
                    }
                )
                    .bind(
                    'click',
                    function(e)
                    {
                        if (el.accordionCfg.currentPanel == this.accordionPos)
                            return;
                        el.accordionCfg.headers
                            .eq(el.accordionCfg.currentPanel)
                            .removeClass(el.accordionCfg.activeClass)
                            .end()
                            .eq(this.accordionPos)
                            .addClass(el.accordionCfg.activeClass)
                            .end();
                        el.accordionCfg.panels
                            .eq(el.accordionCfg.currentPanel)
                            .animate(
                            {height:0},
                            el.accordionCfg.speed,
                            function()
                            {
                                this.style.display = 'none';
                                if (el.accordionCfg.onHide) {
                                    el.accordionCfg.onHide.apply(el, [this]);
                                }
                            }
                        )
                            .end()
                            .eq(this.accordionPos)
                            .show()
                            .animate (
                            {height:el.accordionCfg.panelHeight},
                            el.accordionCfg.speed,
                            function()
                            {
                                this.style.display = 'block';
                                if (el.accordionCfg.onShow) {
                                    el.accordionCfg.onShow.apply(el, [this]);
                                }
                            }
                        )
                            .end();

                        if (el.accordionCfg.onClick) {
                            el.accordionCfg.onClick.apply(
                                el,
                                [
                                    this,
                                    el.accordionCfg.panels.get(this.accordionPos),
                                    el.accordionCfg.headers.get(el.accordionCfg.currentPanel),
                                    el.accordionCfg.panels.get(el.accordionCfg.currentPanel)
                                ]
                            );
                        }
                        el.accordionCfg.currentPanel = this.accordionPos;
                    }
                )
                    .eq(0)
                    .addClass(el.accordionCfg.activeClass)
                    .end();
                jQuery(this)
                    .css('height', jQuery(this).css('height'))
                    .css('overflow', 'hidden');
            }
        );
    }
};

jQuery.fn.Accordion = jQuery.iAccordion.build;

jQuery.iCarousel = {

    build : function(options)
    {
        return this.each(
            function()
            {
                var el = this;
                var increment = 2*Math.PI/360;
                var maxRotation = 2*Math.PI;
                if(jQuery(el).css('position') != 'relative' && jQuery(el).css('position') != 'absolute') {
                    jQuery(el).css('position', 'relative');
                }
                el.carouselCfg = {
                    items : jQuery(options.items, this),
                    itemWidth : options.itemWidth,
                    itemHeight : options.itemHeight,
                    itemMinWidth : options.itemMinWidth,
                    maxRotation : maxRotation,
                    size : jQuery.iUtil.getSize(this),
                    position : jQuery.iUtil.getPosition(this),
                    start : Math.PI/2,
                    rotationSpeed : options.rotationSpeed,
                    reflectionSize : options.reflections,
                    reflections : [],
                    protectRotation : false,
                    increment: 2*Math.PI/360
                };
                el.carouselCfg.radiusX = (el.carouselCfg.size.w - el.carouselCfg.itemWidth)/2;
                el.carouselCfg.radiusY =  (el.carouselCfg.size.h - el.carouselCfg.itemHeight - el.carouselCfg.itemHeight * el.carouselCfg.reflectionSize)/2;
                el.carouselCfg.step =  2*Math.PI/el.carouselCfg.items.size();
                el.carouselCfg.paddingX = el.carouselCfg.size.w/2;
                el.carouselCfg.paddingY = el.carouselCfg.size.h/2 - el.carouselCfg.itemHeight * el.carouselCfg.reflectionSize;
                var reflexions = document.createElement('div');
                jQuery(reflexions)
                    .css(
                    {
                        position: 'absolute',
                        zIndex: 1,
                        top: 0,
                        left: 0
                    }
                );
                jQuery(el).append(reflexions);
                el.carouselCfg.items
                    .each(
                    function(nr)
                    {
                        image = jQuery('img', this).get(0);
                        height = parseInt(el.carouselCfg.itemHeight*el.carouselCfg.reflectionSize);
                        if (jQuery.browser.msie) {
                            canvas = document.createElement('img');
                            jQuery(canvas).css('position', 'absolute');
                            canvas.src = image.src;
                            canvas.style.filter = 'flipv progid:DXImageTransform.Microsoft.Alpha(opacity=60, style=1, finishOpacity=0, startx=0, starty=0, finishx=0)';

                        } else {
                            canvas = document.createElement('canvas');
                            if (canvas.getContext) {
                                context = canvas.getContext("2d");
                                canvas.style.position = 'absolute';
                                canvas.style.height = height +'px';
                                canvas.style.width = el.carouselCfg.itemWidth+'px';
                                canvas.height = height;
                                canvas.width = el.carouselCfg.itemWidth;
                                context.save();

                                context.translate(0,height);
                                context.scale(1,-1);

                                context.drawImage(
                                    image,
                                    0,
                                    0,
                                    el.carouselCfg.itemWidth,
                                    height
                                );

                                context.restore();

                                context.globalCompositeOperation = "destination-out";
                                var gradient = context.createLinearGradient(
                                    0,
                                    0,
                                    0,
                                    height
                                );

                                gradient.addColorStop(1, "rgba(255, 255, 255, 1)");
                                gradient.addColorStop(0, "rgba(255, 255, 255, 0.6)");

                                context.fillStyle = gradient;
                                if (navigator.appVersion.indexOf('WebKit') != -1) {
                                    context.fill();
                                } else {
                                    context.fillRect(
                                        0,
                                        0,
                                        el.carouselCfg.itemWidth,
                                        height
                                    );
                                }
                            }
                        }

                        el.carouselCfg.reflections[nr] = canvas;
                        jQuery(reflexions).append(canvas);
                    }
                )
                    .bind(
                    'mouseover',
                    function(e)
                    {
                        el.carouselCfg.protectRotation = true;
                        el.carouselCfg.speed = el.carouselCfg.increment*0.1 * el.carouselCfg.speed / Math.abs(el.carouselCfg.speed);
                        return false;
                    }
                )
                    .bind(
                    'mouseout',
                    function(e)
                    {
                        el.carouselCfg.protectRotation = false;
                        return false;
                    }
                );
                jQuery.iCarousel.positionItems(el);
                el.carouselCfg.speed = el.carouselCfg.increment*0.2;
                el.carouselCfg.rotationTimer = window.setInterval(
                    function()
                    {
                        el.carouselCfg.start += el.carouselCfg.speed;
                        if (el.carouselCfg.start > maxRotation)
                            el.carouselCfg.start = 0;
                        jQuery.iCarousel.positionItems(el);
                    },
                    20
                );
                jQuery(el)
                    .bind(
                    'mouseout',
                    function()
                    {
                        el.carouselCfg.speed = el.carouselCfg.increment*0.2 * el.carouselCfg.speed / Math.abs(el.carouselCfg.speed);
                    }
                )
                    .bind(
                    'mousemove',
                    function(e)
                    {
                        if (el.carouselCfg.protectRotation == false) {
                            pointer = jQuery.iUtil.getPointer(e);
                            mousex =  el.carouselCfg.size.w - pointer.x + el.carouselCfg.position.x;
                            el.carouselCfg.speed = el.carouselCfg.rotationSpeed * el.carouselCfg.increment * (el.carouselCfg.size.w/2 - mousex) / (el.carouselCfg.size.w/2);
                        }
                    }
                );
            }
        );
    },

    positionItems : function(el)
    {
        el.carouselCfg.items.each(
            function (nr)
            {
                angle = el.carouselCfg.start+nr*el.carouselCfg.step;
                x = el.carouselCfg.radiusX*Math.cos(angle);
                y = el.carouselCfg.radiusY*Math.sin(angle) ;
                itemZIndex = parseInt(100*(el.carouselCfg.radiusY+y)/(2*el.carouselCfg.radiusY));
                parte = (el.carouselCfg.radiusY+y)/(2*el.carouselCfg.radiusY);

                width = parseInt((el.carouselCfg.itemWidth - el.carouselCfg.itemMinWidth) * parte + el.carouselCfg.itemMinWidth);
                height = parseInt(width * el.carouselCfg.itemHeight / el.carouselCfg.itemWidth);
                this.style.top = el.carouselCfg.paddingY + y - height/2 + "px";
                this.style.left = el.carouselCfg.paddingX + x - width/2 + "px";
                this.style.width = width + "px";
                this.style.height = height + "px";
                this.style.zIndex = itemZIndex;
                el.carouselCfg.reflections[nr].style.top = parseInt(el.carouselCfg.paddingY + y + height - 1 - height/2) + "px";
                el.carouselCfg.reflections[nr].style.left = parseInt(el.carouselCfg.paddingX + x - width/2) + "px";
                el.carouselCfg.reflections[nr].style.width = width + "px";
                el.carouselCfg.reflections[nr].style.height = parseInt(height * el.carouselCfg.reflectionSize) + "px";
            }
        );
    }
};
jQuery.fn.Carousel = jQuery.iCarousel.build;

jQuery.extend({
    /**
     *
     * @param Integer p period step in animation
     * @param Integer n current time
     * @param Mixed firstNum begin value
     * @param Mixed delta change in
     * @param Integer duration duration
     */
    easing :  {
        linear: function(p, n, firstNum, delta, duration) {
            return ((-Math.cos(p*Math.PI)/2) + 0.5) * delta + firstNum;
        },

        easein: function(p, n, firstNum, delta, duration) {
            return delta*(n/=duration)*n*n + firstNum;
        },

        easeout: function(p, n, firstNum, delta, duration) {
            return -delta * ((n=n/duration-1)*n*n*n - 1) + firstNum;
        },

        easeboth: function(p, n, firstNum, delta, duration) {
            if ((n/=duration/2) < 1)
                return delta/2*n*n*n*n + firstNum;
            return -delta/2 * ((n-=2)*n*n*n - 2) + firstNum;
        },

        bounceout: function(p, n, firstNum, delta, duration) {
            if ((n/=duration) < (1/2.75)) {
                return delta*(7.5625*n*n) + firstNum;
            } else if (n < (2/2.75)) {
                return delta*(7.5625*(n-=(1.5/2.75))*n + .75) + firstNum;
            } else if (n < (2.5/2.75)) {
                return delta*(7.5625*(n-=(2.25/2.75))*n + .9375) + firstNum;
            } else {
                return delta*(7.5625*(n-=(2.625/2.75))*n + .984375) + firstNum;
            }
        },

        bouncein: function(p, n, firstNum, delta, duration) {
            if (jQuery.easing.bounceout)
                return delta - jQuery.easing.bounceout (p, duration - n, 0, delta, duration) + firstNum;
            return firstNum + delta;
        },

        bounceboth: function(p, n, firstNum, delta, duration) {
            if (jQuery.easing.bouncein && jQuery.easing.bounceout)
                if (n < duration/2)
                    return jQuery.easing.bouncein(p, n*2, 0, delta, duration) * .5 + firstNum;
            return jQuery.easing.bounceout(p, n*2-duration, 0, delta, duration) * .5 + delta*.5 + firstNum;
            return firstNum + delta;
        },

        elasticin: function(p, n, firstNum, delta, duration) {
            var a, s;
            if (n == 0)
                return firstNum;
            if ((n/=duration)==1)
                return firstNum+delta;
            a = delta * 0.3;
            p=duration*.3;
            if (a < Math.abs(delta)) {
                a=delta;
                s=p/4;
            } else {
                s = p/(2*Math.PI) * Math.asin (delta/a);
            }
            return -(a*Math.pow(2,10*(n-=1)) * Math.sin( (n*duration-s)*(2*Math.PI)/p )) + firstNum;
        },

        elasticout:function(p, n, firstNum, delta, duration) {
            var a, s;
            if (n==0)
                return firstNum;
            if ((n/=duration/2)==2)
                return firstNum + delta;
            a = delta * 0.3;
            p=duration*.3;
            if (a < Math.abs(delta)){
                a = delta;
                s=p/4;
            } else {
                s = p/(2*Math.PI) * Math.asin (delta/a);
            }
            return a*Math.pow(2,-10*n) * Math.sin( (n*duration-s)*(2*Math.PI)/p ) + delta + firstNum;
        },

        elasticboth: function(p, n, firstNum, delta, duration) {
            var a, s;
            if (n==0)
                return firstNum;
            if ((n/=duration/2)==2)
                return firstNum + delta;
            a = delta * 0.3;
            p=duration*.3;
            if (a < Math.abs(delta)){
                a = delta;
                s=p/4;
            } else {
                s = p/(2*Math.PI) * Math.asin (delta/a);
            }
            if (n < 1) {
                return -.5*(a*Math.pow(2,10*(n-=1)) * Math.sin( (n*duration-s)*(2*Math.PI)/p )) + firstNum;
            }
            return a*Math.pow(2,-10*(n-=1)) * Math.sin( (n*duration-s)*(2*Math.PI)/p )*.5 + delta + firstNum;
        }
    }
});


jQuery.iFisheye = {

    build : function(options)
    {

        return this.each(
            function()
            {
                var el = this;
                el.fisheyeCfg = {
                    items : jQuery(options.items, this),
                    container: jQuery(options.container, this),
                    pos : jQuery.iUtil.getPosition(this),
                    itemWidth: options.itemWidth,
                    itemsText: options.itemsText,
                    proximity: options.proximity,
                    valign: options.valign,
                    halign: options.halign,
                    maxWidth : options.maxWidth
                };
                jQuery.iFisheye.positionContainer(el, 0);
                jQuery(window).bind(
                    'resize',
                    function()
                    {
                        el.fisheyeCfg.pos = jQuery.iUtil.getPosition(el);
                        jQuery.iFisheye.positionContainer(el, 0);
                        jQuery.iFisheye.positionItems(el);
                    }
                );
                jQuery.iFisheye.positionItems(el);
                el.fisheyeCfg.items
                    .bind(
                    'mouseover',
                    function()
                    {
                        var itemEle = jQuery(el.fisheyeCfg.itemsText, this).get(0);
                        if (typeof itemEle != 'undefined' && itemEle != null) {
                            itemEle.style.display = 'block';
                        }
                    }
                )
                    .bind(
                    'mouseout',
                    function()
                    {
                        var itemEle = jQuery(el.fisheyeCfg.itemsText, this).get(0);
                        if (typeof itemEle != 'undefined' && itemEle != null) {
                            itemEle.style.display = 'none';
                        }
                    }
                );
                jQuery(document).bind(
                    'mousemove',
                    function(e)
                    {
                        var pointer = jQuery.iUtil.getPointer(e);
                        var toAdd = 0;
                        if (el.fisheyeCfg.halign && el.fisheyeCfg.halign == 'center')
                            var posx = pointer.x - el.fisheyeCfg.pos.x - (el.offsetWidth - el.fisheyeCfg.itemWidth * el.fisheyeCfg.items.size())/2 - el.fisheyeCfg.itemWidth/2;
                        else if (el.fisheyeCfg.halign && el.fisheyeCfg.halign == 'right')
                            var posx = pointer.x - el.fisheyeCfg.pos.x - el.offsetWidth + el.fisheyeCfg.itemWidth * el.fisheyeCfg.items.size();
                        else
                            var posx = pointer.x - el.fisheyeCfg.pos.x;
                        var posy = Math.pow(pointer.y - el.fisheyeCfg.pos.y - el.offsetHeight/2,2);
                        el.fisheyeCfg.items.each(
                            function(nr)
                            {
                                distance = Math.sqrt(
                                    Math.pow(posx - nr*el.fisheyeCfg.itemWidth, 2)
                                    + posy
                                );
                                distance -= el.fisheyeCfg.itemWidth/2;

                                distance = distance < 0 ? 0 : distance;
                                distance = distance > el.fisheyeCfg.proximity ? el.fisheyeCfg.proximity : distance;
                                distance = el.fisheyeCfg.proximity - distance;

                                extraWidth = el.fisheyeCfg.maxWidth * distance/el.fisheyeCfg.proximity;

                                this.style.width = el.fisheyeCfg.itemWidth + extraWidth + 'px';
                                this.style.left = el.fisheyeCfg.itemWidth * nr + toAdd + 'px';
                                toAdd += extraWidth;
                            }
                        );
                        jQuery.iFisheye.positionContainer(el, toAdd);
                    }
                );
            }
        )
    },

    positionContainer : function(el, toAdd)
    {
        if (el.fisheyeCfg.halign)
            if (el.fisheyeCfg.halign == 'center')
                el.fisheyeCfg.container.get(0).style.left = (el.offsetWidth - el.fisheyeCfg.itemWidth * el.fisheyeCfg.items.size())/2 - toAdd/2 + 'px';
            else if (el.fisheyeCfg.halign == 'left')
                el.fisheyeCfg.container.get(0).style.left =  - toAdd/el.fisheyeCfg.items.size() + 'px';
            else if (el.fisheyeCfg.halign == 'right')
                el.fisheyeCfg.container.get(0).style.left =  (el.offsetWidth - el.fisheyeCfg.itemWidth * el.fisheyeCfg.items.size()) - toAdd/2 + 'px';
        el.fisheyeCfg.container.get(0).style.width = el.fisheyeCfg.itemWidth * el.fisheyeCfg.items.size() + toAdd + 'px';
    },

    positionItems : function(el)
    {
        el.fisheyeCfg.items.each(
            function(nr)
            {
                this.style.width = el.fisheyeCfg.itemWidth + 'px';
                this.style.left = el.fisheyeCfg.itemWidth * nr + 'px';
            }
        );
    }
};

jQuery.fn.Fisheye = jQuery.iFisheye.build;


jQuery.iAuto = {
    helper : null,
    content : null,
    iframe: null,
    timer : null,
    lastValue: null,
    currentValue: null,
    subject: null,
    selectedItem : null,
    items: null,

    empty : function()
    {
        jQuery.iAuto.content.empty();
        if (jQuery.iAuto.iframe) {
            jQuery.iAuto.iframe.hide();
        }
    },

    clear : function()
    {
        jQuery.iAuto.items = null;
        jQuery.iAuto.selectedItem = null;
        jQuery.iAuto.lastValue = jQuery.iAuto.subject.value;
        if(jQuery.iAuto.helper.css('display') == 'block') {
            if (jQuery.iAuto.subject.autoCFG.fx) {
                switch(jQuery.iAuto.subject.autoCFG.fx.type) {
                    case 'fade':
                        jQuery.iAuto.helper.fadeOut(jQuery.iAuto.subject.autoCFG.fx.duration, jQuery.iAuto.empty);
                        break;
                    case 'slide':
                        jQuery.iAuto.helper.SlideOutUp(jQuery.iAuto.subject.autoCFG.fx.duration, jQuery.iAuto.empty);
                        break;
                    case 'blind':
                        jQuery.iAuto.helper.BlindUp(jQuery.iAuto.subject.autoCFG.fx.duration, jQuery.iAuto.empty);
                        break;
                }
            } else {
                jQuery.iAuto.helper.hide();
            }
            if (jQuery.iAuto.subject.autoCFG.onHide)
                jQuery.iAuto.subject.autoCFG.onHide.apply(jQuery.iAuto.subject, [jQuery.iAuto.helper, jQuery.iAuto.iframe]);
        } else {
            jQuery.iAuto.empty();
        }
        window.clearTimeout(jQuery.iAuto.timer);
    },

    update : function ()
    {
        var subject = jQuery.iAuto.subject;
        var subjectValue = jQuery.iAuto.getFieldValues(subject);
        //var selectionStart = jQuery.iAuto.getSelectionStart(subject);
        if (subject && subjectValue.item != jQuery.iAuto.lastValue && subjectValue.item.length >= subject.autoCFG.minchars) {
            jQuery.iAuto.lastValue = subjectValue.item;
            jQuery.iAuto.currentValue = subjectValue.item;

            data = {
                field: jQuery(subject).attr('name')||'field',
                value: subjectValue.item
            };

            jQuery.ajax(
                {
                    type: 'POST',
                    data: jQuery.param(data),
                    success: function(xml)
                    {
                        subject.autoCFG.lastSuggestion = jQuery('item',xml);
                        size = subject.autoCFG.lastSuggestion.size();
                        if (size > 0) {
                            var toWrite = '';
                            subject.autoCFG.lastSuggestion.each(
                                function(nr)
                                {
                                    toWrite += '<li rel="' + jQuery('value', this).text() + '" dir="' + nr + '" style="cursor: default;">' + jQuery('text', this).text() + '</li>';
                                }
                            );
                            if (subject.autoCFG.autofill) {
                                var valueToAdd = jQuery('value', subject.autoCFG.lastSuggestion.get(0)).text();
                                subject.value = subjectValue.pre + valueToAdd + subject.autoCFG.multipleSeparator + subjectValue.post;
                                jQuery.iAuto.selection(
                                    subject,
                                    subjectValue.item.length != valueToAdd.length ? (subjectValue.pre.length + subjectValue.item.length) : valueToAdd.length,
                                    subjectValue.item.length != valueToAdd.length ? (subjectValue.pre.length + valueToAdd.length) : valueToAdd.length
                                );
                            }

                            if (size > 0) {
                                jQuery.iAuto.writeItems(subject, toWrite);
                            } else {
                                jQuery.iAuto.clear();
                            }
                        } else {
                            jQuery.iAuto.clear();
                        }
                    },
                    url : subject.autoCFG.source
                }
            );
        }
    },

    writeItems : function(subject, toWrite)
    {
        jQuery.iAuto.content.html(toWrite);
        jQuery.iAuto.items = jQuery('li', jQuery.iAuto.content.get(0));
        jQuery.iAuto.items
            .mouseover(jQuery.iAuto.hoverItem)
            .bind('click', jQuery.iAuto.clickItem);
        var position = jQuery.iUtil.getPosition(subject);
        var size = jQuery.iUtil.getSize(subject);
        jQuery.iAuto.helper
            .css('top', position.y + size.hb + 'px')
            .css('left', position.x +  'px')
            .addClass(subject.autoCFG.helperClass);
        if (jQuery.iAuto.iframe) {
            jQuery.iAuto.iframe
                .css('display', 'block')
                .css('top', position.y + size.hb + 'px')
                .css('left', position.x +  'px')
                .css('width', jQuery.iAuto.helper.css('width'))
                .css('height', jQuery.iAuto.helper.css('height'));
        }
        jQuery.iAuto.selectedItem = 0;
        jQuery.iAuto.items.get(0).className = subject.autoCFG.selectClass;
        jQuery.iAuto.applyOn(subject,subject.autoCFG.lastSuggestion.get(0), 'onHighlight');

        if (jQuery.iAuto.helper.css('display') == 'none') {
            if (subject.autoCFG.inputWidth) {
                var borders = jQuery.iUtil.getPadding(subject, true);
                var paddings = jQuery.iUtil.getBorder(subject, true);
                jQuery.iAuto.helper.css('width', subject.offsetWidth - (jQuery.boxModel ? (borders.l + borders.r + paddings.l + paddings.r) : 0 ) + 'px');
            }
            if (subject.autoCFG.fx) {
                switch(subject.autoCFG.fx.type) {
                    case 'fade':
                        jQuery.iAuto.helper.fadeIn(subject.autoCFG.fx.duration);
                        break;
                    case 'slide':
                        jQuery.iAuto.helper.SlideInUp(subject.autoCFG.fx.duration);
                        break;
                    case 'blind':
                        jQuery.iAuto.helper.BlindDown(subject.autoCFG.fx.duration);
                        break;
                }
            } else {
                jQuery.iAuto.helper.show();
            }

            if (jQuery.iAuto.subject.autoCFG.onShow)
                jQuery.iAuto.subject.autoCFG.onShow.apply(jQuery.iAuto.subject, [jQuery.iAuto.helper, jQuery.iAuto.iframe]);
        }
    },

    checkCache : function()
    {
        var subject = this;
        if (subject.autoCFG.lastSuggestion) {

            jQuery.iAuto.lastValue = subject.value;
            jQuery.iAuto.currentValue = subject.value;

            var toWrite = '';
            subject.autoCFG.lastSuggestion.each(
                function(nr)
                {
                    value = jQuery('value', this).text().toLowerCase();
                    inputValue = subject.value.toLowerCase();
                    if (value.indexOf(inputValue) == 0) {
                        toWrite += '<li rel="' + jQuery('value', this).text() + '" dir="' + nr + '" style="cursor: default;">' + jQuery('text', this).text() + '</li>';
                    }
                }
            );

            if (toWrite != '') {
                jQuery.iAuto.writeItems(subject, toWrite);

                this.autoCFG.inCache = true;
                return;
            }
        }
        subject.autoCFG.lastSuggestion = null;
        this.autoCFG.inCache = false;
    },

    selection : function(field, start, end)
    {
        if (field.createTextRange) {
            var selRange = field.createTextRange();
            selRange.collapse(true);
            selRange.moveStart("character", start);
            selRange.moveEnd("character", - end + start);
            selRange.select();
        } else if (field.setSelectionRange) {
            field.setSelectionRange(start, end);
        } else {
            if (field.selectionStart) {
                field.selectionStart = start;
                field.selectionEnd = end;
            }
        }
        field.focus();
    },

    getSelectionStart : function(field)
    {
        if (field.selectionStart)
            return field.selectionStart;
        else if(field.createTextRange) {
            var selRange = document.selection.createRange();
            var selRange2 = selRange.duplicate();
            return 0 - selRange2.moveStart('character', -100000);
            //result.end = result.start + range.text.length;
            /*var selRange = document.selection.createRange();
             var isCollapsed = selRange.compareEndPoints("StartToEnd", selRange) == 0;
             if (!isCollapsed)
             selRange.collapse(true);
             var bookmark = selRange.getBookmark();
             return bookmark.charCodeAt(2) - 2;*/
        }
    },

    getFieldValues : function(field)
    {
        var fieldData = {
            value: field.value,
            pre: '',
            post: '',
            item: ''
        };

        if(field.autoCFG.multiple) {
            var finishedPre = false;
            var selectionStart = jQuery.iAuto.getSelectionStart(field)||0;
            var chunks = fieldData.value.split(field.autoCFG.multipleSeparator);
            for (var i=0; i<chunks.length; i++) {
                if(
                    (fieldData.pre.length + chunks[i].length >= selectionStart
                    ||
                    selectionStart == 0)
                    &&
                    !finishedPre
                ) {
                    if (fieldData.pre.length <= selectionStart)
                        fieldData.item = chunks[i];
                    else
                        fieldData.post += chunks[i] + (chunks[i] != '' ? field.autoCFG.multipleSeparator : '');
                    finishedPre = true;
                } else if (finishedPre){
                    fieldData.post += chunks[i] + (chunks[i] != '' ? field.autoCFG.multipleSeparator : '');
                }
                if(!finishedPre) {
                    fieldData.pre += chunks[i] + (chunks.length > 1 ? field.autoCFG.multipleSeparator : '');
                }
            }
        } else {
            fieldData.item = fieldData.value;
        }
        return fieldData;
    },

    autocomplete : function(e)
    {
        window.clearTimeout(jQuery.iAuto.timer);
        var subject = jQuery.iAuto.getFieldValues(this);

        var pressedKey = e.charCode || e.keyCode || -1;
        if (/13|27|35|36|38|40|9/.test(pressedKey) && jQuery.iAuto.items) {
            if (window.event) {
                window.event.cancelBubble = true;
                window.event.returnValue = false;
            } else {
                e.preventDefault();
                e.stopPropagation();
            }
            if (jQuery.iAuto.selectedItem != null)
                jQuery.iAuto.items.get(jQuery.iAuto.selectedItem||0).className = '';
            else
                jQuery.iAuto.selectedItem = -1;
            switch(pressedKey) {
                //enter
                case 9:
                case 13:
                    if (jQuery.iAuto.selectedItem == -1)
                        jQuery.iAuto.selectedItem = 0;
                    var selectedItem = jQuery.iAuto.items.get(jQuery.iAuto.selectedItem||0);
                    var valueToAdd = selectedItem.getAttribute('rel');
                    this.value = subject.pre + valueToAdd + this.autoCFG.multipleSeparator + subject.post;
                    jQuery.iAuto.lastValue = subject.item;
                    jQuery.iAuto.selection(
                        this,
                        subject.pre.length + valueToAdd.length + this.autoCFG.multipleSeparator.length,
                        subject.pre.length + valueToAdd.length + this.autoCFG.multipleSeparator.length
                    );
                    jQuery.iAuto.clear();
                    if (this.autoCFG.onSelect) {
                        iteration = parseInt(selectedItem.getAttribute('dir'))||0;
                        jQuery.iAuto.applyOn(this,this.autoCFG.lastSuggestion.get(iteration), 'onSelect');
                    }
                    if (this.scrollIntoView)
                        this.scrollIntoView(false);
                    return pressedKey != 13;
                    break;
                //escape
                case 27:
                    this.value = subject.pre + jQuery.iAuto.lastValue + this.autoCFG.multipleSeparator + subject.post;
                    this.autoCFG.lastSuggestion = null;
                    jQuery.iAuto.clear();
                    if (this.scrollIntoView)
                        this.scrollIntoView(false);
                    return false;
                    break;
                //end
                case 35:
                    jQuery.iAuto.selectedItem = jQuery.iAuto.items.size() - 1;
                    break;
                //home
                case 36:
                    jQuery.iAuto.selectedItem = 0;
                    break;
                //up
                case 38:
                    jQuery.iAuto.selectedItem --;
                    if (jQuery.iAuto.selectedItem < 0)
                        jQuery.iAuto.selectedItem = jQuery.iAuto.items.size() - 1;
                    break;
                case 40:
                    jQuery.iAuto.selectedItem ++;
                    if (jQuery.iAuto.selectedItem == jQuery.iAuto.items.size())
                        jQuery.iAuto.selectedItem = 0;
                    break;
            }
            jQuery.iAuto.applyOn(this,this.autoCFG.lastSuggestion.get(jQuery.iAuto.selectedItem||0), 'onHighlight');
            jQuery.iAuto.items.get(jQuery.iAuto.selectedItem||0).className = this.autoCFG.selectClass;
            if (jQuery.iAuto.items.get(jQuery.iAuto.selectedItem||0).scrollIntoView)
                jQuery.iAuto.items.get(jQuery.iAuto.selectedItem||0).scrollIntoView(false);
            if(this.autoCFG.autofill) {
                var valToAdd = jQuery.iAuto.items.get(jQuery.iAuto.selectedItem||0).getAttribute('rel');
                this.value = subject.pre + valToAdd + this.autoCFG.multipleSeparator + subject.post;
                if(jQuery.iAuto.lastValue.length != valToAdd.length)
                    jQuery.iAuto.selection(
                        this,
                        subject.pre.length + jQuery.iAuto.lastValue.length,
                        subject.pre.length + valToAdd.length
                    );
            }
            return false;
        }
        jQuery.iAuto.checkCache.apply(this);

        if (this.autoCFG.inCache == false) {
            if (subject.item != jQuery.iAuto.lastValue && subject.item.length >= this.autoCFG.minchars)
                jQuery.iAuto.timer = window.setTimeout(jQuery.iAuto.update, this.autoCFG.delay);
            if (jQuery.iAuto.items) {
                jQuery.iAuto.clear();
            }
        }
        return true;
    },

    applyOn: function(field, item, type)
    {
        if (field.autoCFG[type]) {
            var data = {};
            childs = item.getElementsByTagName('*');
            for(i=0; i<childs.length; i++){
                data[childs[i].tagName] = childs[i].firstChild.nodeValue;
            }
            field.autoCFG[type].apply(field,[data]);
        }
    },

    hoverItem : function(e)
    {
        if (jQuery.iAuto.items) {
            if (jQuery.iAuto.selectedItem != null)
                jQuery.iAuto.items.get(jQuery.iAuto.selectedItem||0).className = '';
            jQuery.iAuto.items.get(jQuery.iAuto.selectedItem||0).className = '';
            jQuery.iAuto.selectedItem = parseInt(this.getAttribute('dir'))||0;
            jQuery.iAuto.items.get(jQuery.iAuto.selectedItem||0).className = jQuery.iAuto.subject.autoCFG.selectClass;
        }
    },

    clickItem : function(event)
    {
        window.clearTimeout(jQuery.iAuto.timer);

        event = event || jQuery.event.fix( window.event );
        event.preventDefault();
        event.stopPropagation();
        var subject = jQuery.iAuto.getFieldValues(jQuery.iAuto.subject);
        var valueToAdd = this.getAttribute('rel');
        jQuery.iAuto.subject.value = subject.pre + valueToAdd + jQuery.iAuto.subject.autoCFG.multipleSeparator + subject.post;
        jQuery.iAuto.lastValue = this.getAttribute('rel');
        jQuery.iAuto.selection(
            jQuery.iAuto.subject,
            subject.pre.length + valueToAdd.length + jQuery.iAuto.subject.autoCFG.multipleSeparator.length,
            subject.pre.length + valueToAdd.length + jQuery.iAuto.subject.autoCFG.multipleSeparator.length
        );
        jQuery.iAuto.clear();
        if (jQuery.iAuto.subject.autoCFG.onSelect) {
            iteration = parseInt(this.getAttribute('dir'))||0;
            jQuery.iAuto.applyOn(jQuery.iAuto.subject,jQuery.iAuto.subject.autoCFG.lastSuggestion.get(iteration), 'onSelect');
        }

        return false;
    },

    protect : function(e)
    {
        pressedKey = e.charCode || e.keyCode || -1;
        if (/13|27|35|36|38|40/.test(pressedKey) && jQuery.iAuto.items) {
            if (window.event) {
                window.event.cancelBubble = true;
                window.event.returnValue = false;
            } else {
                e.preventDefault();
                e.stopPropagation();
            }
            return false;
        }
    },

    build : function(options)
    {
        if (!options.source || !jQuery.iUtil) {
            return;
        }

        if (!jQuery.iAuto.helper) {
            if (jQuery.browser.msie) {
                jQuery('body', document).append('<iframe style="display:none;position:absolute;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0);" id="autocompleteIframe" src="javascript:false;" frameborder="0" scrolling="no"></iframe>');
                jQuery.iAuto.iframe = jQuery('#autocompleteIframe');
            }
            jQuery('body', document).append('<div id="autocompleteHelper" style="position: absolute; top: 0; left: 0; z-index: 30001; display: none;"><ul style="margin: 0;padding: 0; list-style: none; z-index: 30002;">&nbsp;</ul></div>');
            jQuery.iAuto.helper = jQuery('#autocompleteHelper');
            jQuery.iAuto.content = jQuery('ul', jQuery.iAuto.helper);
        }

        return this.each(
            function()
            {
                if (this.tagName != 'INPUT' && this.getAttribute('type') != 'text' )
                    return;
                this.autoCFG = {};
                this.autoCFG.source = options.source;
                this.autoCFG.minchars = Math.abs(parseInt(options.minchars)||1);
                this.autoCFG.helperClass = options.helperClass ? options.helperClass : '';
                this.autoCFG.selectClass = options.selectClass ? options.selectClass : '';
                this.autoCFG.onSelect = options.onSelect && options.onSelect.constructor == Function ? options.onSelect : null;
                this.autoCFG.onShow = options.onShow && options.onShow.constructor == Function ? options.onShow : null;
                this.autoCFG.onHide = options.onHide && options.onHide.constructor == Function ? options.onHide : null;
                this.autoCFG.onHighlight = options.onHighlight && options.onHighlight.constructor == Function ? options.onHighlight : null;
                this.autoCFG.inputWidth = options.inputWidth||false;
                this.autoCFG.multiple = options.multiple||false;
                this.autoCFG.multipleSeparator = this.autoCFG.multiple ? (options.multipleSeparator||', '):'';
                this.autoCFG.autofill = options.autofill ? true : false;
                this.autoCFG.delay = Math.abs(parseInt(options.delay)||1000);
                if (options.fx && options.fx.constructor == Object) {
                    if (!options.fx.type || !/fade|slide|blind/.test(options.fx.type)) {
                        options.fx.type = 'slide';
                    }
                    if (options.fx.type == 'slide' && !jQuery.fx.slide)
                        return;
                    if (options.fx.type == 'blind' && !jQuery.fx.BlindDirection)
                        return;

                    options.fx.duration = Math.abs(parseInt(options.fx.duration)||400);
                    if (options.fx.duration > this.autoCFG.delay) {
                        options.fx.duration = this.autoCFG.delay - 100;
                    }
                    this.autoCFG.fx = options.fx;
                }
                this.autoCFG.lastSuggestion = null;
                this.autoCFG.inCache = false;

                jQuery(this)
                    .attr('autocomplete', 'off')
                    .focus(
                    function()
                    {
                        jQuery.iAuto.subject = this;
                        jQuery.iAuto.lastValue = this.value;
                    }
                )
                    .keypress(jQuery.iAuto.protect)
                    .keyup(jQuery.iAuto.autocomplete)

                    .blur(
                    function()
                    {
                        jQuery.iAuto.timer = window.setTimeout(jQuery.iAuto.clear, 200);
                    }
                );
            }
        );
    }
};
jQuery.fn.Autocomplete = jQuery.iAuto.build;


jQuery.iAutoscroller = {
    timer: null,
    elToScroll: null,
    elsToScroll: null,
    step: 10,
    /**
     * This is called to start autoscrolling
     * @param DOMElement el the element used as reference
     * @param Array els collection of elements to scroll
     * @param Integer step the pixels scroll on each step
     * @param Integer interval miliseconds between each step
     */
    start: function(el, els, step, interval)
    {
        jQuery.iAutoscroller.elToScroll = el;
        jQuery.iAutoscroller.elsToScroll = els;
        jQuery.iAutoscroller.step = parseInt(step)||10;
        jQuery.iAutoscroller.timer = window.setInterval(jQuery.iAutoscroller.doScroll, parseInt(interval)||40);
    },

    //private function
    doScroll : function()
    {
        for (i=0;i<jQuery.iAutoscroller.elsToScroll.length; i++) {
            if(!jQuery.iAutoscroller.elsToScroll[i].parentData) {
                jQuery.iAutoscroller.elsToScroll[i].parentData = jQuery.extend(
                    jQuery.iUtil.getPositionLite(jQuery.iAutoscroller.elsToScroll[i]),
                    jQuery.iUtil.getSizeLite(jQuery.iAutoscroller.elsToScroll[i]),
                    jQuery.iUtil.getScroll(jQuery.iAutoscroller.elsToScroll[i])
                );
            } else {
                jQuery.iAutoscroller.elsToScroll[i].parentData.t = jQuery.iAutoscroller.elsToScroll[i].scrollTop;
                jQuery.iAutoscroller.elsToScroll[i].parentData.l = jQuery.iAutoscroller.elsToScroll[i].scrollLeft;
            }

            if (jQuery.iAutoscroller.elToScroll.dragCfg && jQuery.iAutoscroller.elToScroll.dragCfg.init == true) {
                elementData = {
                    x : jQuery.iAutoscroller.elToScroll.dragCfg.nx,
                    y : jQuery.iAutoscroller.elToScroll.dragCfg.ny,
                    wb : jQuery.iAutoscroller.elToScroll.dragCfg.oC.wb,
                    hb : jQuery.iAutoscroller.elToScroll.dragCfg.oC.hb
                };
            } else {
                elementData = jQuery.extend(
                    jQuery.iUtil.getPositionLite(jQuery.iAutoscroller.elToScroll),
                    jQuery.iUtil.getSizeLite(jQuery.iAutoscroller.elToScroll)
                );
            }
            if (
                jQuery.iAutoscroller.elsToScroll[i].parentData.t > 0
                &&
                jQuery.iAutoscroller.elsToScroll[i].parentData.y + jQuery.iAutoscroller.elsToScroll[i].parentData.t > elementData.y) {
                jQuery.iAutoscroller.elsToScroll[i].scrollTop -= jQuery.iAutoscroller.step;
            } else if (jQuery.iAutoscroller.elsToScroll[i].parentData.t <= jQuery.iAutoscroller.elsToScroll[i].parentData.h && jQuery.iAutoscroller.elsToScroll[i].parentData.t + jQuery.iAutoscroller.elsToScroll[i].parentData.hb < elementData.y + elementData.hb) {
                jQuery.iAutoscroller.elsToScroll[i].scrollTop += jQuery.iAutoscroller.step;
            }
            if (jQuery.iAutoscroller.elsToScroll[i].parentData.l > 0 && jQuery.iAutoscroller.elsToScroll[i].parentData.x + jQuery.iAutoscroller.elsToScroll[i].parentData.l > elementData.x) {
                jQuery.iAutoscroller.elsToScroll[i].scrollLeft -= jQuery.iAutoscroller.step;
            } else if (jQuery.iAutoscroller.elsToScroll[i].parentData.l <= jQuery.iAutoscroller.elsToScroll[i].parentData.wh && jQuery.iAutoscroller.elsToScroll[i].parentData.l + jQuery.iAutoscroller.elsToScroll[i].parentData.wb < elementData.x + elementData.wb) {
                jQuery.iAutoscroller.elsToScroll[i].scrollLeft += jQuery.iAutoscroller.step;
            }
        }
    },
    /**
     * This is called to stop autoscrolling
     */
    stop: function()
    {
        window.clearInterval(jQuery.iAutoscroller.timer);
        jQuery.iAutoscroller.elToScroll = null;
        jQuery.iAutoscroller.elsToScroll = null;
        for (i in jQuery.iAutoscroller.elsToScroll) {
            jQuery.iAutoscroller.elsToScroll[i].parentData = null;
        }
    }
};



jQuery.iDrag =	{
    helper : null,
    dragged: null,
    destroy : function()
    {
        return this.each(
            function ()
            {
                if (this.isDraggable) {
                    this.dragCfg.dhe.unbind('mousedown', jQuery.iDrag.draginit);
                    this.dragCfg = null;
                    this.isDraggable = false;
                    if(jQuery.browser.msie) {
                        this.unselectable = "off";
                    } else {
                        this.style.MozUserSelect = '';
                        this.style.KhtmlUserSelect = '';
                        this.style.userSelect = '';
                    }
                }
            }
        );
    },
    draginit : function (e)
    {
        if (jQuery.iDrag.dragged != null) {
            jQuery.iDrag.dragstop(e);
            return false;
        }
        var elm = this.dragElem;
        jQuery(document)
            .bind('mousemove', jQuery.iDrag.dragmove)
            .bind('mouseup', jQuery.iDrag.dragstop);
        elm.dragCfg.pointer = jQuery.iUtil.getPointer(e);
        elm.dragCfg.currentPointer = elm.dragCfg.pointer;
        elm.dragCfg.init = false;
        elm.dragCfg.fromHandler = this != this.dragElem;
        jQuery.iDrag.dragged = elm;
        if (elm.dragCfg.si && this != this.dragElem) {
            parentPos = jQuery.iUtil.getPosition(elm.parentNode);
            sliderSize = jQuery.iUtil.getSize(elm);
            sliderPos = {
                x : parseInt(jQuery.css(elm,'left')) || 0,
                y : parseInt(jQuery.css(elm,'top')) || 0
            };
            dx = elm.dragCfg.currentPointer.x - parentPos.x - sliderSize.wb/2 - sliderPos.x;
            dy = elm.dragCfg.currentPointer.y - parentPos.y - sliderSize.hb/2 - sliderPos.y;
            jQuery.iSlider.dragmoveBy(elm, [dx, dy]);
        }
        return jQuery.selectKeyHelper||false;
    },

    dragstart : function(e)
    {
        var elm = jQuery.iDrag.dragged;
        elm.dragCfg.init = true;

        var dEs = elm.style;

        elm.dragCfg.oD = jQuery.css(elm,'display');
        elm.dragCfg.oP = jQuery.css(elm,'position');
        if (!elm.dragCfg.initialPosition)
            elm.dragCfg.initialPosition = elm.dragCfg.oP;

        elm.dragCfg.oR = {
            x : parseInt(jQuery.css(elm,'left')) || 0,
            y : parseInt(jQuery.css(elm,'top')) || 0
        };
        elm.dragCfg.diffX = 0;
        elm.dragCfg.diffY = 0;
        if (jQuery.browser.msie) {
            var oldBorder = jQuery.iUtil.getBorder(elm, true);
            elm.dragCfg.diffX = oldBorder.l||0;
            elm.dragCfg.diffY = oldBorder.t||0;
        }

        elm.dragCfg.oC = jQuery.extend(
            jQuery.iUtil.getPosition(elm),
            jQuery.iUtil.getSize(elm)
        );
        if (elm.dragCfg.oP != 'relative' && elm.dragCfg.oP != 'absolute') {
            dEs.position = 'relative';
        }

        jQuery.iDrag.helper.empty();
        var clonedEl = elm.cloneNode(true);

        jQuery(clonedEl).css(
            {
                display:	'block',
                left:		'0px',
                top: 		'0px'
            }
        );
        clonedEl.style.marginTop = '0';
        clonedEl.style.marginRight = '0';
        clonedEl.style.marginBottom = '0';
        clonedEl.style.marginLeft = '0';
        jQuery.iDrag.helper.append(clonedEl);

        var dhs = jQuery.iDrag.helper.get(0).style;

        if (elm.dragCfg.autoSize) {
            dhs.width = 'auto';
            dhs.height = 'auto';
        } else {
            dhs.height = elm.dragCfg.oC.hb + 'px';
            dhs.width = elm.dragCfg.oC.wb + 'px';
        }

        dhs.display = 'block';
        dhs.marginTop = '0px';
        dhs.marginRight = '0px';
        dhs.marginBottom = '0px';
        dhs.marginLeft = '0px';

        //remeasure the clone to check if the size was changed by user's functions
        jQuery.extend(
            elm.dragCfg.oC,
            jQuery.iUtil.getSize(clonedEl)
        );

        if (elm.dragCfg.cursorAt) {
            if (elm.dragCfg.cursorAt.left) {
                elm.dragCfg.oR.x += elm.dragCfg.pointer.x - elm.dragCfg.oC.x - elm.dragCfg.cursorAt.left;
                elm.dragCfg.oC.x = elm.dragCfg.pointer.x - elm.dragCfg.cursorAt.left;
            }
            if (elm.dragCfg.cursorAt.top) {
                elm.dragCfg.oR.y += elm.dragCfg.pointer.y - elm.dragCfg.oC.y - elm.dragCfg.cursorAt.top;
                elm.dragCfg.oC.y = elm.dragCfg.pointer.y - elm.dragCfg.cursorAt.top;
            }
            if (elm.dragCfg.cursorAt.right) {
                elm.dragCfg.oR.x += elm.dragCfg.pointer.x - elm.dragCfg.oC.x -elm.dragCfg.oC.hb + elm.dragCfg.cursorAt.right;
                elm.dragCfg.oC.x = elm.dragCfg.pointer.x - elm.dragCfg.oC.wb + elm.dragCfg.cursorAt.right;
            }
            if (elm.dragCfg.cursorAt.bottom) {
                elm.dragCfg.oR.y += elm.dragCfg.pointer.y - elm.dragCfg.oC.y - elm.dragCfg.oC.hb + elm.dragCfg.cursorAt.bottom;
                elm.dragCfg.oC.y = elm.dragCfg.pointer.y - elm.dragCfg.oC.hb + elm.dragCfg.cursorAt.bottom;
            }
        }
        elm.dragCfg.nx = elm.dragCfg.oR.x;
        elm.dragCfg.ny = elm.dragCfg.oR.y;

        if (elm.dragCfg.insideParent || elm.dragCfg.containment == 'parent') {
            parentBorders = jQuery.iUtil.getBorder(elm.parentNode, true);
            elm.dragCfg.oC.x = elm.offsetLeft + (jQuery.browser.msie ? 0 : jQuery.browser.opera ? -parentBorders.l : parentBorders.l);
            elm.dragCfg.oC.y = elm.offsetTop + (jQuery.browser.msie ? 0 : jQuery.browser.opera ? -parentBorders.t : parentBorders.t);
            jQuery(elm.parentNode).append(jQuery.iDrag.helper.get(0));
        }
        if (elm.dragCfg.containment) {
            jQuery.iDrag.getContainment(elm);
            elm.dragCfg.onDragModifier.containment = jQuery.iDrag.fitToContainer;
        }

        if (elm.dragCfg.si) {
            jQuery.iSlider.modifyContainer(elm);
        }

        dhs.left = elm.dragCfg.oC.x - elm.dragCfg.diffX + 'px';
        dhs.top = elm.dragCfg.oC.y - elm.dragCfg.diffY + 'px';
        //resize the helper to fit the clone
        dhs.width = elm.dragCfg.oC.wb + 'px';
        dhs.height = elm.dragCfg.oC.hb + 'px';

        jQuery.iDrag.dragged.dragCfg.prot = false;

        if (elm.dragCfg.gx) {
            elm.dragCfg.onDragModifier.grid = jQuery.iDrag.snapToGrid;
        }
        if (elm.dragCfg.zIndex != false) {
            jQuery.iDrag.helper.css('zIndex', elm.dragCfg.zIndex);
        }
        if (elm.dragCfg.opacity) {
            jQuery.iDrag.helper.css('opacity', elm.dragCfg.opacity);
            if (window.ActiveXObject) {
                jQuery.iDrag.helper.css('filter', 'alpha(opacity=' + elm.dragCfg.opacity * 100 + ')');
            }
        }

        if(elm.dragCfg.frameClass) {
            jQuery.iDrag.helper.addClass(elm.dragCfg.frameClass);
            jQuery.iDrag.helper.get(0).firstChild.style.display = 'none';
        }
        if (elm.dragCfg.onStart)
            elm.dragCfg.onStart.apply(elm, [clonedEl, elm.dragCfg.oR.x, elm.dragCfg.oR.y]);
        if (jQuery.iDrop && jQuery.iDrop.count > 0 ){
            jQuery.iDrop.highlight(elm);
        }
        if (elm.dragCfg.ghosting == false) {
            dEs.display = 'none';
        }
        return false;
    },

    getContainment : function(elm)
    {
        if (elm.dragCfg.containment.constructor == String) {
            if (elm.dragCfg.containment == 'parent') {
                elm.dragCfg.cont = jQuery.extend(
                    {x:0,y:0},
                    jQuery.iUtil.getSize(elm.parentNode)
                );
                var contBorders = jQuery.iUtil.getBorder(elm.parentNode, true);
                elm.dragCfg.cont.w = elm.dragCfg.cont.wb - contBorders.l - contBorders.r;
                elm.dragCfg.cont.h = elm.dragCfg.cont.hb - contBorders.t - contBorders.b;
            } else if (elm.dragCfg.containment == 'document') {
                var clnt = jQuery.iUtil.getClient();
                elm.dragCfg.cont = {
                    x : 0,
                    y : 0,
                    w : clnt.w,
                    h : clnt.h
                };
            }
        } else if (elm.dragCfg.containment.constructor == Array) {
            elm.dragCfg.cont = {
                x : parseInt(elm.dragCfg.containment[0])||0,
                y : parseInt(elm.dragCfg.containment[1])||0,
                w : parseInt(elm.dragCfg.containment[2])||0,
                h : parseInt(elm.dragCfg.containment[3])||0
            };
        }
        elm.dragCfg.cont.dx = elm.dragCfg.cont.x - elm.dragCfg.oC.x;
        elm.dragCfg.cont.dy = elm.dragCfg.cont.y - elm.dragCfg.oC.y;
    },

    hidehelper : function(dragged)
    {
        if (dragged.dragCfg.insideParent || dragged.dragCfg.containment == 'parent') {
            jQuery('body', document).append(jQuery.iDrag.helper.get(0));
        }
        jQuery.iDrag.helper.empty().hide().css('opacity', 1);
        if (window.ActiveXObject) {
            jQuery.iDrag.helper.css('filter', 'alpha(opacity=100)');
        }
    },

    dragstop : function(e)
    {

        jQuery(document)
            .unbind('mousemove', jQuery.iDrag.dragmove)
            .unbind('mouseup', jQuery.iDrag.dragstop);

        if (jQuery.iDrag.dragged == null) {
            return;
        }
        var dragged = jQuery.iDrag.dragged;

        jQuery.iDrag.dragged = null;

        if (dragged.dragCfg.init == false) {
            return false;
        }
        if (dragged.dragCfg.so == true) {
            jQuery(dragged).css('position', dragged.dragCfg.oP);
        }
        var dEs = dragged.style;

        if (dragged.si) {
            jQuery.iDrag.helper.css('cursor', 'move');
        }
        if(dragged.dragCfg.frameClass) {
            jQuery.iDrag.helper.removeClass(dragged.dragCfg.frameClass);
        }

        if (dragged.dragCfg.revert == false) {
            if (dragged.dragCfg.fx > 0) {
                if (!dragged.dragCfg.axis || dragged.dragCfg.axis == 'horizontally') {
                    var x = new jQuery.fx(dragged,{duration:dragged.dragCfg.fx}, 'left');
                    x.custom(dragged.dragCfg.oR.x,dragged.dragCfg.nRx);
                }
                if (!dragged.dragCfg.axis || dragged.dragCfg.axis == 'vertically') {
                    var y = new jQuery.fx(dragged,{duration:dragged.dragCfg.fx}, 'top');
                    y.custom(dragged.dragCfg.oR.y,dragged.dragCfg.nRy);
                }
            } else {
                if (!dragged.dragCfg.axis || dragged.dragCfg.axis == 'horizontally')
                    dragged.style.left = dragged.dragCfg.nRx + 'px';
                if (!dragged.dragCfg.axis || dragged.dragCfg.axis == 'vertically')
                    dragged.style.top = dragged.dragCfg.nRy + 'px';
            }
            jQuery.iDrag.hidehelper(dragged);
            if (dragged.dragCfg.ghosting == false) {
                jQuery(dragged).css('display', dragged.dragCfg.oD);
            }
        } else if (dragged.dragCfg.fx > 0) {
            dragged.dragCfg.prot = true;
            var dh = false;
            if(jQuery.iDrop && jQuery.iSort && dragged.dragCfg.so) {
                dh = jQuery.iUtil.getPosition(jQuery.iSort.helper.get(0));
            }
            jQuery.iDrag.helper.animate(
                {
                    left : dh ? dh.x : dragged.dragCfg.oC.x,
                    top : dh ? dh.y : dragged.dragCfg.oC.y
                },
                dragged.dragCfg.fx,
                function()
                {
                    dragged.dragCfg.prot = false;
                    if (dragged.dragCfg.ghosting == false) {
                        dragged.style.display = dragged.dragCfg.oD;
                    }
                    jQuery.iDrag.hidehelper(dragged);
                }
            );
        } else {
            jQuery.iDrag.hidehelper(dragged);
            if (dragged.dragCfg.ghosting == false) {
                jQuery(dragged).css('display', dragged.dragCfg.oD);
            }
        }

        if (jQuery.iDrop && jQuery.iDrop.count > 0 ){
            jQuery.iDrop.checkdrop(dragged);
        }
        if (jQuery.iSort && dragged.dragCfg.so) {
            jQuery.iSort.check(dragged);
        }
        if (dragged.dragCfg.onChange && (dragged.dragCfg.nRx != dragged.dragCfg.oR.x || dragged.dragCfg.nRy != dragged.dragCfg.oR.y)){
            dragged.dragCfg.onChange.apply(dragged, dragged.dragCfg.lastSi||[0,0,dragged.dragCfg.nRx,dragged.dragCfg.nRy]);
        }
        if (dragged.dragCfg.onStop)
            dragged.dragCfg.onStop.apply(dragged);
        return false;
    },

    snapToGrid : function(x, y, dx, dy)
    {
        if (dx != 0)
            dx = parseInt((dx + (this.dragCfg.gx * dx/Math.abs(dx))/2)/this.dragCfg.gx) * this.dragCfg.gx;
        if (dy != 0)
            dy = parseInt((dy + (this.dragCfg.gy * dy/Math.abs(dy))/2)/this.dragCfg.gy) * this.dragCfg.gy;
        return {
            dx : dx,
            dy : dy,
            x: 0,
            y: 0
        };
    },

    fitToContainer : function(x, y, dx, dy)
    {
        dx = Math.min(
            Math.max(dx,this.dragCfg.cont.dx),
            this.dragCfg.cont.w + this.dragCfg.cont.dx - this.dragCfg.oC.wb
        );
        dy = Math.min(
            Math.max(dy,this.dragCfg.cont.dy),
            this.dragCfg.cont.h + this.dragCfg.cont.dy - this.dragCfg.oC.hb
        );

        return {
            dx : dx,
            dy : dy,
            x: 0,
            y: 0
        }
    },

    dragmove : function(e)
    {
        if (jQuery.iDrag.dragged == null || jQuery.iDrag.dragged.dragCfg.prot == true) {
            return;
        }

        var dragged = jQuery.iDrag.dragged;

        dragged.dragCfg.currentPointer = jQuery.iUtil.getPointer(e);
        if (dragged.dragCfg.init == false) {
            distance = Math.sqrt(Math.pow(dragged.dragCfg.pointer.x - dragged.dragCfg.currentPointer.x, 2) + Math.pow(dragged.dragCfg.pointer.y - dragged.dragCfg.currentPointer.y, 2));
            if (distance < dragged.dragCfg.snapDistance){
                return;
            } else {
                jQuery.iDrag.dragstart(e);
            }
        }

        var dx = dragged.dragCfg.currentPointer.x - dragged.dragCfg.pointer.x;
        var dy = dragged.dragCfg.currentPointer.y - dragged.dragCfg.pointer.y;

        for (var i in dragged.dragCfg.onDragModifier) {
            var newCoords = dragged.dragCfg.onDragModifier[i].apply(dragged, [dragged.dragCfg.oR.x + dx, dragged.dragCfg.oR.y + dy, dx, dy]);
            if (newCoords && newCoords.constructor == Object) {
                dx = i != 'user' ? newCoords.dx : (newCoords.x - dragged.dragCfg.oR.x);
                dy = i != 'user' ? newCoords.dy : (newCoords.y - dragged.dragCfg.oR.y);
            }
        }

        dragged.dragCfg.nx = dragged.dragCfg.oC.x + dx - dragged.dragCfg.diffX;
        dragged.dragCfg.ny = dragged.dragCfg.oC.y + dy - dragged.dragCfg.diffY;

        if (dragged.dragCfg.si && (dragged.dragCfg.onSlide || dragged.dragCfg.onChange)) {
            jQuery.iSlider.onSlide(dragged, dragged.dragCfg.nx, dragged.dragCfg.ny);
        }

        if(dragged.dragCfg.onDrag)
            dragged.dragCfg.onDrag.apply(dragged, [dragged.dragCfg.oR.x + dx, dragged.dragCfg.oR.y + dy]);

        if (!dragged.dragCfg.axis || dragged.dragCfg.axis == 'horizontally') {
            dragged.dragCfg.nRx = dragged.dragCfg.oR.x + dx;
            jQuery.iDrag.helper.get(0).style.left = dragged.dragCfg.nx + 'px';
        }
        if (!dragged.dragCfg.axis || dragged.dragCfg.axis == 'vertically') {
            dragged.dragCfg.nRy = dragged.dragCfg.oR.y + dy;
            jQuery.iDrag.helper.get(0).style.top = dragged.dragCfg.ny + 'px';
        }

        if (jQuery.iDrop && jQuery.iDrop.count > 0 ){
            jQuery.iDrop.checkhover(dragged);
        }
        return false;
    },

    build : function(o)
    {
        if (!jQuery.iDrag.helper) {
            jQuery('body',document).append('<div id="dragHelper"></div>');
            jQuery.iDrag.helper = jQuery('#dragHelper');
            var el = jQuery.iDrag.helper.get(0);
            var els = el.style;
            els.position = 'absolute';
            els.display = 'none';
            els.cursor = 'move';
            els.listStyle = 'none';
            els.overflow = 'hidden';
            if (window.ActiveXObject) {
                el.unselectable = "on";
            } else {
                els.mozUserSelect = 'none';
                els.userSelect = 'none';
                els.KhtmlUserSelect = 'none';
            }
        }
        if (!o) {
            o = {};
        }
        return this.each(
            function()
            {
                if (this.isDraggable || !jQuery.iUtil)
                    return;
                if (window.ActiveXObject) {
                    this.onselectstart = function(){return false;};
                    this.ondragstart = function(){return false;};
                }
                var el = this;
                var dhe = o.handle ? jQuery(this).find(o.handle) : jQuery(this);
                if(jQuery.browser.msie) {
                    dhe.each(
                        function()
                        {
                            this.unselectable = "on";
                        }
                    );
                } else {
                    dhe.css('-moz-user-select', 'none');
                    dhe.css('user-select', 'none');
                    dhe.css('-khtml-user-select', 'none');
                }
                this.dragCfg = {
                    dhe: dhe,
                    revert : o.revert ? true : false,
                    ghosting : o.ghosting ? true : false,
                    so : o.so ? o.so : false,
                    si : o.si ? o.si : false,
                    insideParent : o.insideParent ? o.insideParent : false,
                    zIndex : o.zIndex ? parseInt(o.zIndex)||0 : false,
                    opacity : o.opacity ? parseFloat(o.opacity) : false,
                    fx : parseInt(o.fx)||null,
                    hpc : o.hpc ? o.hpc : false,
                    onDragModifier : {},
                    pointer : {},
                    onStart : o.onStart && o.onStart.constructor == Function ? o.onStart : false,
                    onStop : o.onStop && o.onStop.constructor == Function ? o.onStop : false,
                    onChange : o.onChange && o.onChange.constructor == Function ? o.onChange : false,
                    axis : /vertically|horizontally/.test(o.axis) ? o.axis : false,
                    snapDistance : o.snapDistance ? parseInt(o.snapDistance)||0 : 0,
                    cursorAt: o.cursorAt ? o.cursorAt : false,
                    autoSize : o.autoSize ? true : false,
                    frameClass : o.frameClass || false

                };
                if (o.onDragModifier && o.onDragModifier.constructor == Function)
                    this.dragCfg.onDragModifier.user = o.onDragModifier;
                if (o.onDrag && o.onDrag.constructor == Function)
                    this.dragCfg.onDrag = o.onDrag;
                if (o.containment && ((o.containment.constructor == String && (o.containment == 'parent' || o.containment == 'document')) || (o.containment.constructor == Array && o.containment.length == 4) )) {
                    this.dragCfg.containment = o.containment;
                }
                if(o.fractions) {
                    this.dragCfg.fractions = o.fractions;
                }
                if(o.grid){
                    if(typeof o.grid == 'number'){
                        this.dragCfg.gx = parseInt(o.grid)||1;
                        this.dragCfg.gy = parseInt(o.grid)||1;
                    } else if (o.grid.length == 2) {
                        this.dragCfg.gx = parseInt(o.grid[0])||1;
                        this.dragCfg.gy = parseInt(o.grid[1])||1;
                    }
                }
                if (o.onSlide && o.onSlide.constructor == Function) {
                    this.dragCfg.onSlide = o.onSlide;
                }

                this.isDraggable = true;
                dhe.each(
                    function(){
                        this.dragElem = el;
                    }
                );
                dhe.bind('mousedown', jQuery.iDrag.draginit);
            }
        )
    }
};

/**
 * Destroy an existing draggable on a collection of elements
 *
 * @name DraggableDestroy
 * @descr Destroy a draggable
 * @type jQuery
 * @cat Plugins/Interface
 * @example $('#drag2').DraggableDestroy();
 */

jQuery.fn.extend(
    {
        DraggableDestroy : jQuery.iDrag.destroy,
        Draggable : jQuery.iDrag.build
    }
);


jQuery.iDrop = {
    fit : function (zonex, zoney, zonew, zoneh)
    {
        return 	zonex <= jQuery.iDrag.dragged.dragCfg.nx &&
        (zonex + zonew) >= (jQuery.iDrag.dragged.dragCfg.nx + jQuery.iDrag.dragged.dragCfg.oC.w) &&
        zoney <= jQuery.iDrag.dragged.dragCfg.ny &&
        (zoney + zoneh) >= (jQuery.iDrag.dragged.dragCfg.ny + jQuery.iDrag.dragged.dragCfg.oC.h) ? true :false;
    },
    intersect : function (zonex, zoney, zonew, zoneh)
    {
        return 	! ( zonex > (jQuery.iDrag.dragged.dragCfg.nx + jQuery.iDrag.dragged.dragCfg.oC.w)
        || (zonex + zonew) < jQuery.iDrag.dragged.dragCfg.nx
        || zoney > (jQuery.iDrag.dragged.dragCfg.ny + jQuery.iDrag.dragged.dragCfg.oC.h)
        || (zoney + zoneh) < jQuery.iDrag.dragged.dragCfg.ny
        ) ? true :false;
    },
    pointer : function (zonex, zoney, zonew, zoneh)
    {
        return	zonex < jQuery.iDrag.dragged.dragCfg.currentPointer.x
        && (zonex + zonew) > jQuery.iDrag.dragged.dragCfg.currentPointer.x
        && zoney < jQuery.iDrag.dragged.dragCfg.currentPointer.y
        && (zoney + zoneh) > jQuery.iDrag.dragged.dragCfg.currentPointer.y
            ? true :false;
    },
    overzone : false,
    highlighted : {},
    count : 0,
    zones : {},

    highlight : function (elm)
    {
        if (jQuery.iDrag.dragged == null) {
            return;
        }
        var i;
        jQuery.iDrop.highlighted = {};
        var oneIsSortable = false;
        for (i in jQuery.iDrop.zones) {
            if (jQuery.iDrop.zones[i] != null) {
                var iEL = jQuery.iDrop.zones[i].get(0);
                if (jQuery(jQuery.iDrag.dragged).is('.' + iEL.dropCfg.a)) {
                    if (iEL.dropCfg.m == false) {
                        iEL.dropCfg.p = jQuery.extend(
                            jQuery.iUtil.getPositionLite(iEL),
                            jQuery.iUtil.getSizeLite(iEL)
                        );//jQuery.iUtil.getPos(iEL);
                        iEL.dropCfg.m = true;
                    }
                    if (iEL.dropCfg.ac) {
                        jQuery.iDrop.zones[i].addClass(iEL.dropCfg.ac);
                    }
                    jQuery.iDrop.highlighted[i] = jQuery.iDrop.zones[i];
                    //if (jQuery.iSort && jQuery.iDrag.dragged.dragCfg.so) {
                    if (jQuery.iSort && iEL.dropCfg.s && jQuery.iDrag.dragged.dragCfg.so) {
                        iEL.dropCfg.el = jQuery('.' + iEL.dropCfg.a, iEL);
                        elm.style.display = 'none';
                        jQuery.iSort.measure(iEL);
                        iEL.dropCfg.os = jQuery.iSort.serialize(jQuery.attr(iEL, 'id')).hash;
                        elm.style.display = elm.dragCfg.oD;
                        oneIsSortable = true;
                    }
                    if (iEL.dropCfg.onActivate) {
                        iEL.dropCfg.onActivate.apply(jQuery.iDrop.zones[i].get(0), [jQuery.iDrag.dragged]);
                    }
                }
            }
        }
        //if (jQuery.iSort && jQuery.iDrag.dragged.dragCfg.so) {
        if (oneIsSortable) {
            jQuery.iSort.start();
        }
    },
    /**
     * remeasure the droppable
     *
     * useful when the positions/dimensions for droppables
     * are changed while dragging a element
     *
     * this works for sortables too but with a greate processor
     * penality because remeasures each sort items too
     */
    remeasure : function()
    {
        jQuery.iDrop.highlighted = {};
        for (i in jQuery.iDrop.zones) {
            if (jQuery.iDrop.zones[i] != null) {
                var iEL = jQuery.iDrop.zones[i].get(0);
                if (jQuery(jQuery.iDrag.dragged).is('.' + iEL.dropCfg.a)) {
                    iEL.dropCfg.p = jQuery.extend(
                        jQuery.iUtil.getPositionLite(iEL),
                        jQuery.iUtil.getSizeLite(iEL)
                    );
                    if (iEL.dropCfg.ac) {
                        jQuery.iDrop.zones[i].addClass(iEL.dropCfg.ac);
                    }
                    jQuery.iDrop.highlighted[i] = jQuery.iDrop.zones[i];

                    if (jQuery.iSort && iEL.dropCfg.s && jQuery.iDrag.dragged.dragCfg.so) {
                        iEL.dropCfg.el = jQuery('.' + iEL.dropCfg.a, iEL);
                        elm.style.display = 'none';
                        jQuery.iSort.measure(iEL);
                        elm.style.display = elm.dragCfg.oD;
                    }
                }
            }
        }
    },

    checkhover : function (e)
    {
        if (jQuery.iDrag.dragged == null) {
            return;
        }
        jQuery.iDrop.overzone = false;
        var i;
        var applyOnHover = false;
        var hlt = 0;
        for (i in jQuery.iDrop.highlighted)
        {
            var iEL = jQuery.iDrop.highlighted[i].get(0);
            if (
                jQuery.iDrop.overzone == false
                &&
                jQuery.iDrop[iEL.dropCfg.t](
                    iEL.dropCfg.p.x,
                    iEL.dropCfg.p.y,
                    iEL.dropCfg.p.wb,
                    iEL.dropCfg.p.hb
                )

            ) {
                if (iEL.dropCfg.hc && iEL.dropCfg.h == false) {
                    jQuery.iDrop.highlighted[i].addClass(iEL.dropCfg.hc);
                }
                //chec if onHover function has to be called
                if (iEL.dropCfg.h == false &&iEL.dropCfg.onHover) {
                    applyOnHover = true;
                }
                iEL.dropCfg.h = true;
                jQuery.iDrop.overzone = iEL;
                //if(jQuery.iSort && jQuery.iDrag.dragged.dragCfg.so) {
                if(jQuery.iSort && iEL.dropCfg.s && jQuery.iDrag.dragged.dragCfg.so) {
                    jQuery.iSort.helper.get(0).className = iEL.dropCfg.shc;
                    jQuery.iSort.checkhover(iEL);
                }
                hlt ++;
            } else if(iEL.dropCfg.h == true) {
                //onOut function
                if (iEL.dropCfg.onOut) {
                    iEL.dropCfg.onOut.apply(iEL, [e, jQuery.iDrag.helper.get(0).firstChild, iEL.dropCfg.fx]);
                }
                if (iEL.dropCfg.hc) {
                    jQuery.iDrop.highlighted[i].removeClass(iEL.dropCfg.hc);
                }
                iEL.dropCfg.h = false;
            }
        }
        if (jQuery.iSort && !jQuery.iDrop.overzone && jQuery.iDrag.dragged.so) {
            jQuery.iSort.helper.get(0).style.display = 'none';
            //jQuery('body').append(jQuery.iSort.helper.get(0));
        }
        //call onhover
        if(applyOnHover) {
            jQuery.iDrop.overzone.dropCfg.onHover.apply(jQuery.iDrop.overzone, [e, jQuery.iDrag.helper.get(0).firstChild]);
        }
    },
    checkdrop : function (e)
    {
        var i;
        for (i in jQuery.iDrop.highlighted) {
            var iEL = jQuery.iDrop.highlighted[i].get(0);
            if (iEL.dropCfg.ac) {
                jQuery.iDrop.highlighted[i].removeClass(iEL.dropCfg.ac);
            }
            if (iEL.dropCfg.hc) {
                jQuery.iDrop.highlighted[i].removeClass(iEL.dropCfg.hc);
            }
            if(iEL.dropCfg.s) {
                jQuery.iSort.changed[jQuery.iSort.changed.length] = i;
            }
            if (iEL.dropCfg.onDrop && iEL.dropCfg.h == true) {
                iEL.dropCfg.h = false;
                iEL.dropCfg.onDrop.apply(iEL, [e, iEL.dropCfg.fx]);
            }
            iEL.dropCfg.m = false;
            iEL.dropCfg.h  = false;
        }
        jQuery.iDrop.highlighted = {};
    },
    destroy : function()
    {
        return this.each(
            function()
            {
                if (this.isDroppable) {
                    if (this.dropCfg.s) {
                        id = jQuery.attr(this,'id');
                        jQuery.iSort.collected[id] = null;
                        jQuery('.' + this.dropCfg.a, this).DraggableDestroy();
                    }
                    jQuery.iDrop.zones['d' + this.idsa] = null;
                    this.isDroppable = false;
                    this.f = null;
                }
            }
        );
    },
    build : function (o)
    {
        return this.each(
            function()
            {
                if (this.isDroppable == true || !o.accept || !jQuery.iUtil || !jQuery.iDrag){
                    return;
                }
                this.dropCfg = {
                    a : o.accept,
                    ac: o.activeclass||false,
                    hc:	o.hoverclass||false,
                    shc: o.helperclass||false,
                    onDrop:	o.ondrop||o.onDrop||false,
                    onHover: o.onHover||o.onhover||false,
                    onOut: o.onOut||o.onout||false,
                    onActivate: o.onActivate||false,
                    t: o.tolerance && ( o.tolerance == 'fit' || o.tolerance == 'intersect') ? o.tolerance : 'pointer',
                    fx: o.fx ? o.fx : false,
                    m: false,
                    h: false
                };
                if (o.sortable == true && jQuery.iSort) {
                    id = jQuery.attr(this,'id');
                    jQuery.iSort.collected[id] = this.dropCfg.a;
                    this.dropCfg.s = true;
                    if(o.onChange) {
                        this.dropCfg.onChange = o.onChange;
                        this.dropCfg.os = jQuery.iSort.serialize(id).hash;
                    }
                }
                this.isDroppable = true;
                this.idsa = parseInt(Math.random() * 10000);
                jQuery.iDrop.zones['d' + this.idsa] = jQuery(this);
                jQuery.iDrop.count ++;
            }
        );
    }
};

/**
 * Destroy an existing droppable on a collection of elements
 *
 * @name DroppableDestroy
 * @descr Destroy a droppable
 * @type jQuery
 * @cat Plugins/Interface
 * @example $('#drag2').DroppableDestroy();
 */

jQuery.fn.extend(
    {
        DroppableDestroy : jQuery.iDrop.destroy,
        Droppable : jQuery.iDrop.build
    }
);


/**
 * Recalculate all Droppables
 *
 * @name $.recallDroppables
 * @type jQuery
 * @cat Plugins/Interface
 * @example $.recallDroppable();
 */

jQuery.recallDroppables = jQuery.iDrop.remeasure;



jQuery.iExpander =
{
    helper : null,
    expand : function()
    {

        text = this.value;
        if (!text)
            return;
        style = {
            fontFamily: jQuery(this).css('fontFamily')||'',
            fontSize: jQuery(this).css('fontSize')||'',
            fontWeight: jQuery(this).css('fontWeight')||'',
            fontStyle: jQuery(this).css('fontStyle')||'',
            fontStretch: jQuery(this).css('fontStretch')||'',
            fontVariant: jQuery(this).css('fontVariant')||'',
            letterSpacing: jQuery(this).css('letterSpacing')||'',
            wordSpacing: jQuery(this).css('wordSpacing')||''
        };
        jQuery.iExpander.helper.css(style);
        html = jQuery.iExpander.htmlEntities(text);
        html = html.replace(new RegExp( "\\n", "g" ), "<br />");
        jQuery.iExpander.helper.html('pW');
        spacer = jQuery.iExpander.helper.get(0).offsetWidth;
        jQuery.iExpander.helper.html(html);
        width = jQuery.iExpander.helper.get(0).offsetWidth + spacer;
        if (this.Expander.limit && width > this.Expander.limit[0]) {
            width = this.Expander.limit[0];
        }
        this.style.width = width + 'px';
        if (this.tagName == 'TEXTAREA') {
            height = jQuery.iExpander.helper.get(0).offsetHeight + spacer;
            if (this.Expander.limit && height > this.Expander.limit[1]) {
                height = this.Expander.limit[1];
            }
            this.style.height = height + 'px';
        }
    },
    htmlEntities : function(text)
    {
        entities = {
            '&':'&amp;',
            '<':'&lt;',
            '>':'&gt;',
            '"':'&quot;'
        };
        for(i in entities) {
            text = text.replace(new RegExp(i,'g'),entities[i]);
        }
        return text;
    },
    build : function(limit)
    {
        if (jQuery.iExpander.helper == null) {
            jQuery('body', document).append('<div id="expanderHelper" style="position: absolute; top: 0; left: 0; visibility: hidden;"></div>');
            jQuery.iExpander.helper = jQuery('#expanderHelper');
        }
        return this.each(
            function()
            {
                if (/TEXTAREA|INPUT/.test(this.tagName)) {
                    if (this.tagName == 'INPUT') {
                        elType = this.getAttribute('type');
                        if (!/text|password/.test(elType)) {
                            return;
                        }
                    }
                    if (limit && (limit.constructor == Number || (limit.constructor == Array && limit.length == 2))) {
                        if (limit.constructor == Number)
                            limit = [limit, limit];
                        else {
                            limit[0] = parseInt(limit[0])||400;
                            limit[1] = parseInt(limit[1])||400;
                        }
                        this.Expander = {
                            limit : limit
                        };
                    }
                    jQuery(this)
                        .blur(jQuery.iExpander.expand)
                        .keyup(jQuery.iExpander.expand)
                        .keypress(jQuery.iExpander.expand);
                    jQuery.iExpander.expand.apply(this);
                }
            }
        );
    }
};

jQuery.fn.Autoexpand = jQuery.iExpander.build;


jQuery.fxCheckTag = function(e)
{
    if (/^tr$|^td$|^tbody$|^caption$|^thead$|^tfoot$|^col$|^colgroup$|^th$|^body$|^header$|^script$|^frame$|^frameset$|^option$|^optgroup$|^meta$/i.test(e.nodeName) )
        return false;
    else
        return true;
};

/**
 * Destroy the wrapper used for some animations
 */
jQuery.fx.destroyWrapper = function(e, old)
{
    var c = e.firstChild;
    var cs = c.style;
    cs.position = old.position;
    cs.marginTop = old.margins.t;
    cs.marginLeft = old.margins.l;
    cs.marginBottom = old.margins.b;
    cs.marginRight = old.margins.r;
    cs.top = old.top + 'px';
    cs.left = old.left + 'px';
    e.parentNode.insertBefore(c, e);
    e.parentNode.removeChild(e);
};

/**
 * Builds a wrapper used for some animations
 */
jQuery.fx.buildWrapper = function(e)
{
    if (!jQuery.fxCheckTag(e))
        return false;
    var t = jQuery(e);
    var es = e.style;
    var restoreStyle = false;

    if (t.css('display') == 'none') {
        oldVisibility = t.css('visibility');
        t.css('visibility', 'hidden').show();
        restoreStyle = true;
    }
    var oldStyle = {};
    oldStyle.position = t.css('position');
    oldStyle.sizes = jQuery.iUtil.getSize(e);
    oldStyle.margins = jQuery.iUtil.getMargins(e);

    var oldFloat = e.currentStyle ? e.currentStyle.styleFloat : t.css('float');
    oldStyle.top = parseInt(t.css('top'))||0;
    oldStyle.left = parseInt(t.css('left'))||0;
    var wid = 'w_' + parseInt(Math.random() * 10000);
    var wr = document.createElement(/^img$|^br$|^input$|^hr$|^select$|^textarea$|^object$|^iframe$|^button$|^form$|^table$|^ul$|^dl$|^ol$/i.test(e.nodeName) ? 'div' : e.nodeName);
    jQuery.attr(wr,'id', wid);
    var wrapEl = jQuery(wr).addClass('fxWrapper');
    var wrs = wr.style;
    var top = 0;
    var left = 0;
    if (oldStyle.position == 'relative' || oldStyle.position == 'absolute'){
        top = oldStyle.top;
        left = oldStyle.left;
    }

    wrs.top = top + 'px';
    wrs.left = left + 'px';
    wrs.position = oldStyle.position != 'relative' && oldStyle.position != 'absolute' ? 'relative' : oldStyle.position;
    wrs.height = oldStyle.sizes.hb + 'px';
    wrs.width = oldStyle.sizes.wb + 'px';
    wrs.marginTop = oldStyle.margins.t;
    wrs.marginRight = oldStyle.margins.r;
    wrs.marginBottom = oldStyle.margins.b;
    wrs.marginLeft = oldStyle.margins.l;
    wrs.overflow = 'hidden';
    if (jQuery.browser.msie) {
        wrs.styleFloat = oldFloat;
    } else {
        wrs.cssFloat = oldFloat;
    }
    if (jQuery.browser == "msie") {
        es.filter = "alpha(opacity=" + 0.999*100 + ")";
    }
    es.opacity = 0.999;
    //t.wrap(wr);
    e.parentNode.insertBefore(wr, e);
    wr.appendChild(e);
    es.marginTop = '0px';
    es.marginRight = '0px';
    es.marginBottom = '0px';
    es.marginLeft = '0px';
    es.position = 'absolute';
    es.listStyle = 'none';
    es.top = '0px';
    es.left = '0px';
    if (restoreStyle) {
        t.hide();
        es.visibility = oldVisibility;
    }
    return {oldStyle:oldStyle, wrapper:jQuery(wr)};
};

/**
 * named colors
 */
jQuery.fx.namedColors = {
    aqua:[0,255,255],
    azure:[240,255,255],
    beige:[245,245,220],
    black:[0,0,0],
    blue:[0,0,255],
    brown:[165,42,42],
    cyan:[0,255,255],
    darkblue:[0,0,139],
    darkcyan:[0,139,139],
    darkgrey:[169,169,169],
    darkgreen:[0,100,0],
    darkkhaki:[189,183,107],
    darkmagenta:[139,0,139],
    darkolivegreen:[85,107,47],
    darkorange:[255,140,0],
    darkorchid:[153,50,204],
    darkred:[139,0,0],
    darksalmon:[233,150,122],
    darkviolet:[148,0,211],
    fuchsia:[255,0,255],
    gold:[255,215,0],
    green:[0,128,0],
    indigo:[75,0,130],
    khaki:[240,230,140],
    lightblue:[173,216,230],
    lightcyan:[224,255,255],
    lightgreen:[144,238,144],
    lightgrey:[211,211,211],
    lightpink:[255,182,193],
    lightyellow:[255,255,224],
    lime:[0,255,0],
    magenta:[255,0,255],
    maroon:[128,0,0],
    navy:[0,0,128],
    olive:[128,128,0],
    orange:[255,165,0],
    pink:[255,192,203],
    purple:[128,0,128],
    red:[255,0,0],
    silver:[192,192,192],
    white:[255,255,255],
    yellow:[255,255,0]
};

/**
 * parses a color to an object for reg, green and blue
 */
jQuery.fx.parseColor = function(color, notColor)
{
    if (jQuery.fx.namedColors[color])
        return {
            r: jQuery.fx.namedColors[color][0],
            g: jQuery.fx.namedColors[color][1],
            b: jQuery.fx.namedColors[color][2]
        };
    else if (result = /^rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)$/.exec(color))
        return {
            r: parseInt(result[1]),
            g: parseInt(result[2]),
            b: parseInt(result[3])
        };
    else if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)$/.exec(color))
        return {
            r: parseFloat(result[1])*2.55,
            g: parseFloat(result[2])*2.55,
            b: parseFloat(result[3])*2.55
        };
    else if (result = /^#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/.exec(color))
        return {
            r: parseInt("0x"+ result[1] + result[1]),
            g: parseInt("0x" + result[2] + result[2]),
            b: parseInt("0x" + result[3] + result[3])
        };
    else if (result = /^#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/.exec(color))
        return {
            r: parseInt("0x" + result[1]),
            g: parseInt("0x" + result[2]),
            b: parseInt("0x" + result[3])
        };
    else
        return notColor == true ? false : {r: 255, g: 255, b: 255};
};
/**
 * CSS rules that can be animated
 */
jQuery.fx.cssProps = {
    borderBottomWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderTopWidth:1,
    bottom:1,
    fontSize:1,
    height:1,
    left:1,
    letterSpacing:1,
    lineHeight:1,
    marginBottom:1,
    marginLeft:1,
    marginRight:1,
    marginTop:1,
    maxHeight:1,
    maxWidth:1,
    minHeight:1,
    minWidth:1,
    opacity:1,
    outlineOffset:1,
    outlineWidth:1,
    paddingBottom:1,
    paddingLeft:1,
    paddingRight:1,
    paddingTop:1,
    right:1,
    textIndent:1,
    top:1,
    width:1,
    zIndex:1
};
/**
 * CSS color rules that can be animated
 */
jQuery.fx.colorCssProps = {
    backgroundColor:1,
    borderBottomColor:1,
    borderLeftColor:1,
    borderRightColor:1,
    borderTopColor:1,
    color:1,
    outlineColor:1
};

jQuery.fx.cssSides = ['Top', 'Right', 'Bottom', 'Left'];
jQuery.fx.cssSidesEnd = {
    'borderWidth': ['border', 'Width'],
    'borderColor': ['border', 'Color'],
    'margin': ['margin', ''],
    'padding': ['padding', '']
};

/**
 * Overwrite animation to use new FX function
 */
jQuery.fn.extend({

    animate: function( prop, speed, easing, callback ) {
        return this.queue(function(){
            var opt = jQuery.speed(speed, easing, callback);
            var e = new jQuery.fxe( this, opt, prop );

        });
    },
    pause: function(speed, callback) {
        return this.queue(function(){
            var opt = jQuery.speed(speed, callback);
            var e = new jQuery.pause( this, opt );
        });
    },
    stop : function(step) {
        return this.each(function(){
            if (this.animationHandler)
                jQuery.stopAnim(this, step);

        });
    },
    stopAll : function(step) {
        return this.each(function(){
            if (this.animationHandler)
                jQuery.stopAnim(this, step);
            if ( this.queue && this.queue['fx'] )
                this.queue.fx = [];
        });
    }
});
/**
 * Improved FXC function that aniamtes collection of properties per timer. Accepts inline styles and class names to animate
 */
jQuery.extend({
        pause: function(elem, options)
        {
            var z = this, values;
            z.step = function()
            {
                if ( jQuery.isFunction( options.complete ) )
                    options.complete.apply( elem );
            };
            z.timer=setInterval(function(){z.step();},options.duration);
            elem.animationHandler = z;
        },
        easing :  {
            linear: function(p, n, firstNum, delta, duration) {
                return ((-Math.cos(p*Math.PI)/2) + 0.5) * delta + firstNum;
            }
        },
        fxe: function( elem, options, prop ){
            var z = this, values;

            // The styles
            var y = elem.style;
            var oldOverflow = jQuery.css(elem, "overflow");
            var oldDisplay= jQuery.css(elem, "display");
            var props = {};
            z.startTime = (new Date()).getTime();
            options.easing = options.easing && jQuery.easing[options.easing] ? options.easing : 'linear';

            z.getValues = function(tp, vp)
            {
                if (jQuery.fx.cssProps[tp]) {
                    if (vp == 'show' || vp == 'hide' || vp == 'toggle') {
                        if ( !elem.orig ) elem.orig = {};
                        var r = parseFloat( jQuery.curCSS(elem, tp) );
                        elem.orig[tp] = r && r > -10000 ? r : (parseFloat( jQuery.css(elem,tp) )||0);
                        vp = vp == 'toggle' ? ( oldDisplay == 'none' ? 'show' : 'hide') : vp;
                        options[vp] = true;
                        props[tp] = vp == 'show' ? [0, elem.orig[tp]] : [elem.orig[tp], 0];
                        if (tp != 'opacity')
                            y[tp] = props[tp][0] + (tp != 'zIndex' && tp != 'fontWeight' ? 'px':'');
                        else
                            jQuery.attr(y, "opacity", props[tp][0]);
                    } else {
                        props[tp] = [parseFloat( jQuery.curCSS(elem, tp) ), parseFloat(vp)||0];
                    }
                } else if (jQuery.fx.colorCssProps[tp])
                    props[tp] = [jQuery.fx.parseColor(jQuery.curCSS(elem, tp)), jQuery.fx.parseColor(vp)];
                else if(/^margin$|padding$|border$|borderColor$|borderWidth$/i.test(tp)) {
                    var m = vp.replace(/\s+/g, ' ').replace(/rgb\s*\(\s*/g,'rgb(').replace(/\s*,\s*/g,',').replace(/\s*\)/g,')').match(/([^\s]+)/g);
                    switch(tp){
                        case 'margin':
                        case 'padding':
                        case 'borderWidth':
                        case 'borderColor':
                            m[3] = m[3]||m[1]||m[0];
                            m[2] = m[2]||m[0];
                            m[1] = m[1]||m[0];
                            for(var i = 0; i < jQuery.fx.cssSides.length; i++) {
                                var nmp = jQuery.fx.cssSidesEnd[tp][0] + jQuery.fx.cssSides[i] + jQuery.fx.cssSidesEnd[tp][1];
                                props[nmp] = tp == 'borderColor' ?
                                    [jQuery.fx.parseColor(jQuery.curCSS(elem, nmp)), jQuery.fx.parseColor(m[i])]
                                    : [parseFloat( jQuery.curCSS(elem, nmp) ), parseFloat(m[i])];
                            }
                            break;
                        case 'border':
                            for(var i = 0; i< m.length; i++) {
                                var floatVal = parseFloat(m[i]);
                                var sideEnd = !isNaN(floatVal) ? 'Width' : (!/transparent|none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset/i.test(m[i]) ? 'Color' : false);
                                if (sideEnd) {
                                    for(var j = 0; j < jQuery.fx.cssSides.length; j++) {
                                        nmp = 'border' + jQuery.fx.cssSides[j] + sideEnd;
                                        props[nmp] = sideEnd == 'Color' ?
                                            [jQuery.fx.parseColor(jQuery.curCSS(elem, nmp)), jQuery.fx.parseColor(m[i])]
                                            : [parseFloat( jQuery.curCSS(elem, nmp) ), floatVal];
                                    }
                                } else {
                                    y['borderStyle'] = m[i];
                                }
                            }
                            break;
                    }
                } else {
                    y[tp] = vp;
                }
                return false;
            };

            for(p in prop) {
                if (p == 'style') {
                    var newStyles = jQuery.parseStyle(prop[p]);
                    for (np in newStyles) {
                        this.getValues(np, newStyles[np]);
                    }
                } else if (p == 'className') {
                    if (document.styleSheets)
                        for (var i=0; i<document.styleSheets.length; i++){
                            var cssRules = document.styleSheets[i].cssRules||document.styleSheets[i].rules||null;
                            if (cssRules) {
                                for (var j=0; j<cssRules.length; j++) {
                                    if(cssRules[j].selectorText == '.' + prop[p]) {
                                        var rule = new RegExp('\.' + prop[p] + ' {');
                                        var styles = cssRules[j].style.cssText;
                                        var newStyles = jQuery.parseStyle(styles.replace(rule, '').replace(/}/g, ''));
                                        for (np in newStyles) {
                                            this.getValues(np, newStyles[np]);
                                        }
                                    }
                                }
                            }
                        }
                } else {
                    this.getValues(p, prop[p]);
                }
            }
            y.display = oldDisplay == 'none' ? 'block' : oldDisplay;
            y.overflow = 'hidden';

            /*if (options.show)
             y.display = "";*/

            z.step = function(){
                var t = (new Date()).getTime();
                if (t > options.duration + z.startTime) {
                    clearInterval(z.timer);
                    z.timer = null;
                    for (p in props) {
                        if ( p == "opacity" )
                            jQuery.attr(y, "opacity", props[p][1]);
                        else if (typeof props[p][1] == 'object')
                            y[p] = 'rgb(' + props[p][1].r +',' + props[p][1].g +',' + props[p][1].b +')';
                        else
                            y[p] = props[p][1] + (p != 'zIndex' && p != 'fontWeight' ? 'px':'');
                    }
                    if ( options.hide || options.show )
                        for ( var p in elem.orig )
                            if (p == "opacity")
                                jQuery.attr(y, p, elem.orig[p]);
                            else
                                y[p] = "";
                    y.display = options.hide ? 'none' : (oldDisplay !='none' ? oldDisplay : 'block');
                    y.overflow = oldOverflow;
                    elem.animationHandler = null;
                    if ( jQuery.isFunction( options.complete ) )
                        options.complete.apply( elem );
                } else {
                    var n = t - this.startTime;
                    var pr = n / options.duration;
                    for (p in props) {
                        if (typeof props[p][1] == 'object') {
                            y[p] = 'rgb('
                            + parseInt(jQuery.easing[options.easing](pr, n,  props[p][0].r, (props[p][1].r-props[p][0].r), options.duration))
                            + ','
                            + parseInt(jQuery.easing[options.easing](pr, n,  props[p][0].g, (props[p][1].g-props[p][0].g), options.duration))
                            + ','
                            + parseInt(jQuery.easing[options.easing](pr, n,  props[p][0].b, (props[p][1].b-props[p][0].b), options.duration))
                            +')';
                        } else {
                            var pValue = jQuery.easing[options.easing](pr, n,  props[p][0], (props[p][1]-props[p][0]), options.duration);
                            if ( p == "opacity" )
                                jQuery.attr(y, "opacity", pValue);
                            else
                                y[p] = pValue + (p != 'zIndex' && p != 'fontWeight' ? 'px':'');
                        }
                    }

                }
            };
            z.timer=setInterval(function(){z.step();},13);
            elem.animationHandler = z;
        },
        stopAnim: function(elem, step)
        {
            if (step)
                elem.animationHandler.startTime -= 100000000;
            else {
                window.clearInterval(elem.animationHandler.timer);
                elem.animationHandler = null;
                jQuery.dequeue(elem, "fx");
            }
        }
    }
);

jQuery.parseStyle = function(styles) {
    var newStyles = {};
    if (typeof styles == 'string') {
        styles = styles.toLowerCase().split(';');
        for(var i=0; i< styles.length; i++){
            rule = styles[i].split(':');
            if (rule.length == 2) {
                newStyles[jQuery.trim(rule[0].replace(/\-(\w)/g,function(m,c){return c.toUpperCase();}))] = jQuery.trim(rule[1]);
            }
        }
    }
    return newStyles;
};


jQuery.fn.extend(
    {
        /**
         * @name BlindUp
         * @description blinds the element up
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        BlindUp : function (speed, callback, easing)
        {
            return this.queue('interfaceFX',function(){
                new jQuery.fx.BlindDirection(this, speed, callback, 'up', easing);
            });
        },

        /**
         * @name BlindDown
         * @description blinds the element down
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        BlindDown : function (speed, callback, easing)
        {
            return this.queue('interfaceFX',function(){
                new jQuery.fx.BlindDirection(this, speed, callback, 'down', easing);
            });
        },

        /**
         * @name BlindToggleVertically
         * @description blinds the element up or down
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        BlindToggleVertically : function (speed, callback, easing)
        {
            return this.queue('interfaceFX',function(){
                new jQuery.fx.BlindDirection(this, speed, callback, 'togglever', easing);
            });
        },

        /**
         * @name BlindLeft
         * @description blinds the element left
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        BlindLeft : function (speed, callback, easing)
        {
            return this.queue('interfaceFX',function(){
                new jQuery.fx.BlindDirection(this, speed, callback, 'left', easing);
            });
        },

        /**
         * @name BlindRight
         * @description blinds the element right
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        BlindRight : function (speed, callback, easing)
        {
            return this.queue('interfaceFX',function(){
                new jQuery.fx.BlindDirection(this, speed, callback, 'right', easing);
            });
        },

        /**
         * @name BlindToggleHorizontally
         * @description blinds the element left and right
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        BlindToggleHorizontally : function (speed, callback, easing)
        {
            return this.queue('interfaceFX',function(){
                new jQuery.fx.BlindDirection(this, speed, callback, 'togglehor', easing);
            });
        }
    }
);

jQuery.fx.BlindDirection = function (e, speed, callback, direction, easing)
{
    if (!jQuery.fxCheckTag(e)) {
        jQuery.dequeue(e, 'interfaceFX');
        return false;
    }
    var z = this;
    z.el = jQuery(e);
    z.size = jQuery.iUtil.getSize(e);
    z.easing = typeof callback == 'string' ? callback : easing||null;
    if (!e.ifxFirstDisplay)
        e.ifxFirstDisplay = z.el.css('display');
    if ( direction == 'togglever') {
        direction = z.el.css('display') == 'none' ? 'down' : 'up';
    } else if (direction == 'togglehor') {
        direction = z.el.css('display') == 'none' ? 'right' : 'left';
    }
    z.el.show();
    z.speed = speed;
    z.callback = typeof callback == 'function' ? callback : null;
    z.fx = jQuery.fx.buildWrapper(e);
    z.direction = direction;
    z.complete = function()
    {
        if (z.callback && z.callback.constructor == Function) {
            z.callback.apply(z.el.get(0));
        }
        if(z.direction == 'down' || z.direction == 'right'){
            z.el.css('display', z.el.get(0).ifxFirstDisplay == 'none' ? 'block' : z.el.get(0).ifxFirstDisplay);
        } else {
            z.el.hide();
        }
        jQuery.fx.destroyWrapper(z.fx.wrapper.get(0), z.fx.oldStyle);
        jQuery.dequeue(z.el.get(0), 'interfaceFX');
    };
    switch (z.direction) {
        case 'up':
            fxh = new jQuery.fx(
                z.fx.wrapper.get(0),
                jQuery.speed(
                    z.speed,
                    z.easing,
                    z.complete
                ),
                'height'
            );
            fxh.custom(z.fx.oldStyle.sizes.hb, 0);
            break;
        case 'down':
            z.fx.wrapper.css('height', '1px');
            z.el.show();
            fxh = new jQuery.fx(
                z.fx.wrapper.get(0),
                jQuery.speed(
                    z.speed,
                    z.easing,
                    z.complete
                ),
                'height'
            );
            fxh.custom(0, z.fx.oldStyle.sizes.hb);
            break;
        case 'left':
            fxh = new jQuery.fx(
                z.fx.wrapper.get(0),
                jQuery.speed(
                    z.speed,
                    z.easing,
                    z.complete
                ),
                'width'
            );
            fxh.custom(z.fx.oldStyle.sizes.wb, 0);
            break;
        case 'right':
            z.fx.wrapper.css('width', '1px');
            z.el.show();
            fxh = new jQuery.fx(
                z.fx.wrapper.get(0),
                jQuery.speed(
                    z.speed,
                    z.easing,
                    z.complete
                ),
                'width'
            );
            fxh.custom(0, z.fx.oldStyle.sizes.wb);
            break;
    }
};


jQuery.fn.Bounce = function (hight, callback) {
    return this.queue('interfaceFX', function(){
        if (!jQuery.fxCheckTag(this)) {
            jQuery.dequeue(this, 'interfaceFX');
            return false;
        }
        var e = new jQuery.fx.iBounce(this, hight, callback);
        e.bounce();
    });
};
jQuery.fx.iBounce = function (e, hight, callback)
{
    var z = this;
    z.el = jQuery(e);
    z.el.show();
    z.callback = callback;
    z.hight = parseInt(hight)||40;
    z.oldStyle = {};
    z.oldStyle.position = z.el.css('position');
    z.oldStyle.top = parseInt(z.el.css('top'))||0;
    z.oldStyle.left = parseInt(z.el.css('left'))||0;

    if (z.oldStyle.position != 'relative' && z.oldStyle.position != 'absolute') {
        z.el.css('position', 'relative');
    }

    z.times = 5;
    z.cnt = 1;

    z.bounce = function ()
    {
        z.cnt ++;
        z.e = new jQuery.fx(
            z.el.get(0),
            {
                duration: 120,
                complete : function ()
                {
                    z.e = new jQuery.fx(
                        z.el.get(0),
                        {
                            duration: 80,
                            complete : function ()
                            {
                                z.hight = parseInt(z.hight/2);
                                if (z.cnt <= z.times)
                                    z.bounce();
                                else {
                                    z.el.css('position', z.oldStyle.position).css('top', z.oldStyle.top + 'px').css('left', z.oldStyle.left + 'px');
                                    jQuery.dequeue(z.el.get(0), 'interfaceFX');
                                    if (z.callback && z.callback.constructor == Function) {
                                        z.callback.apply(z.el.get(0));
                                    }
                                }
                            }
                        },
                        'top'
                    );
                    z.e.custom (z.oldStyle.top-z.hight, z.oldStyle.top);
                }
            },
            'top'
        );
        z.e.custom (z.oldStyle.top, z.oldStyle.top-z.hight);
    };

};


jQuery.fn.extend(
    {
        /**
         * @name DropOutDown
         * @description drops the element out down
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        DropOutDown : function (speed, callback, easing) {
            return this.queue('interfaceFX',function(){
                new jQuery.fx.DropOutDirectiont(this, speed, callback, 'down', 'out', easing);
            });
        },

        /**
         * @name DropInDown
         * @description drops the element in down
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        DropInDown : function (speed, callback, easing) {
            return this.queue('interfaceFX',function(){
                new jQuery.fx.DropOutDirectiont(this,  speed, callback, 'down', 'in', easing);
            });
        },

        /**
         * @name DropToggleDown
         * @description drops the element in/out down
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        DropToggleDown : function (speed, callback, easing) {
            return this.queue('interfaceFX',function(){
                new jQuery.fx.DropOutDirectiont(this,  speed, callback, 'down', 'toggle', easing);
            });
        },

        /**
         * @name DropOutUp
         * @description drops the element out up
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        DropOutUp : function (speed, callback, easing) {
            return this.queue('interfaceFX',function(){
                new jQuery.fx.DropOutDirectiont(this, speed, callback, 'up', 'out', easing);
            });
        },

        /**
         * @name DropInUp
         * @description drops the element in up
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        DropInUp : function (speed, callback, easing) {
            return this.queue('interfaceFX',function(){
                new jQuery.fx.DropOutDirectiont(this,  speed, callback, 'up', 'in', easing);
            });
        },

        /**
         * @name DropToggleUp
         * @description drops the element in/out up
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        DropToggleUp : function (speed, callback, easing) {
            return this.queue('interfaceFX',function(){
                new jQuery.fx.DropOutDirectiont(this,  speed, callback, 'up', 'toggle', easing);
            });
        },

        /**
         * @name DropOutLeft
         * @description drops the element out left
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        DropOutLeft : function (speed, callback, easing) {
            return this.queue('interfaceFX',function(){
                new jQuery.fx.DropOutDirectiont(this, speed, callback, 'left', 'out', easing);
            });
        },

        /**
         * @name DropInLeft
         * @description drops the element in left
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        DropInLeft : function (speed, callback, easing) {
            return this.queue('interfaceFX',function(){
                new jQuery.fx.DropOutDirectiont(this,  speed, callback, 'left', 'in', easing);
            });
        },

        /**
         * @name DropToggleLeft
         * @description drops the element in/out left
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        DropToggleLeft : function (speed, callback, easing) {
            return this.queue('interfaceFX',function(){
                new jQuery.fx.DropOutDirectiont(this,  speed, callback, 'left', 'toggle', easing);
            });
        },

        /**
         * @name DropOutRight
         * @description drops the element out right
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        DropOutRight : function (speed, callback, easing) {
            return this.queue('interfaceFX',function(){
                new jQuery.fx.DropOutDirectiont(this, speed, callback, 'right', 'out', easing);
            });
        },

        /**
         * @name DropInRight
         * @description drops the element in right
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        DropInRight : function (speed, callback, easing) {
            return this.queue('interfaceFX',function(){
                new jQuery.fx.DropOutDirectiont(this,  speed, callback, 'right', 'in', easing);
            });
        },

        /**
         * @name DropToggleRight
         * @description drops the element in/out right
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        DropToggleRight : function (speed, callback, easing) {
            return this.queue('interfaceFX',function(){
                new jQuery.fx.DropOutDirectiont(this,  speed, callback, 'right', 'toggle', easing);
            });
        }
    }
);

jQuery.fx.DropOutDirectiont = function (e, speed, callback, direction, type, easing)
{
    if (!jQuery.fxCheckTag(e)) {
        jQuery.dequeue(e, 'interfaceFX');
        return false;
    }
    var z = this;
    z.el = jQuery(e);
    z.easing = typeof callback == 'string' ? callback : easing||null;
    z.oldStyle = {};
    z.oldStyle.position = z.el.css('position');
    z.oldStyle.top = z.el.css('top');
    z.oldStyle.left = z.el.css('left');
    if (!e.ifxFirstDisplay)
        e.ifxFirstDisplay = z.el.css('display');
    if ( type == 'toggle') {
        type = z.el.css('display') == 'none' ? 'in' : 'out';
    }
    z.el.show();

    if (z.oldStyle.position != 'relative' && z.oldStyle.position != 'absolute') {
        z.el.css('position', 'relative');
    }
    z.type = type;
    callback = typeof callback == 'function' ? callback : null;
    /*sizes = ['em','px','pt','%'];
     for(i in sizes) {
     if (z.oldStyle.top.indexOf(sizes[i])>0) {
     z.topUnit = sizes[1];
     z.topSize = parseFloat(z.oldStyle.top)||0;
     }
     if (z.oldStyle.left.indexOf(sizes[i])>0) {
     z.leftUnit = sizes[1];
     z.leftSize = parseFloat(z.oldStyle.left)||0;
     }
     }*/

    directionIncrement = 1;
    switch (direction){
        case 'up':
            z.e = new jQuery.fx(z.el.get(0), jQuery.speed(speed - 15, z.easing,callback), 'top');
            z.point = parseFloat(z.oldStyle.top)||0;
            z.unit = z.topUnit;
            directionIncrement = -1;
            break;
        case 'down':
            z.e = new jQuery.fx(z.el.get(0), jQuery.speed(speed - 15, z.easing,callback), 'top');
            z.point = parseFloat(z.oldStyle.top)||0;
            z.unit = z.topUnit;
            break;
        case 'right':
            z.e = new jQuery.fx(z.el.get(0), jQuery.speed(speed - 15, z.easing,callback), 'left');
            z.point = parseFloat(z.oldStyle.left)||0;
            z.unit = z.leftUnit;
            break;
        case 'left':
            z.e = new jQuery.fx(z.el.get(0), jQuery.speed(speed - 15, z.easing,callback), 'left');
            z.point = parseFloat(z.oldStyle.left)||0;
            z.unit = z.leftUnit;
            directionIncrement = -1;
            break;
    }
    z.e2 = new jQuery.fx(
        z.el.get(0),
        jQuery.speed
        (
            speed, z.easing,
            function()
            {
                z.el.css(z.oldStyle);
                if (z.type == 'out') {
                    z.el.css('display', 'none');
                } else
                    z.el.css('display', z.el.get(0).ifxFirstDisplay == 'none' ? 'block' : z.el.get(0).ifxFirstDisplay);

                jQuery.dequeue(z.el.get(0), 'interfaceFX');
            }
        ),
        'opacity'
    );
    if (type == 'in') {
        z.e.custom(z.point+ 100*directionIncrement, z.point);
        z.e2.custom(0,1);
    } else {
        z.e.custom(z.point, z.point + 100*directionIncrement);
        z.e2.custom(1,0);
    }
};


jQuery.fn.extend(
    {
        /**
         * @name Fold
         * @description folds the element
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Integer height the height in pixels to fold element to
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        Fold : function (speed, height, callback, easing)
        {
            return this.queue('interfaceFX',function(){
                new jQuery.fx.DoFold(this, speed, height, callback, 'fold', easing);
            });
        },

        /**
         * @name UnFold
         * @description unfolds the element
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Integer height the height in pixels to unfold element to
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        UnFold : function (speed, height, callback, easing)
        {
            return this.queue('interfaceFX',function(){
                new jQuery.fx.DoFold(this, speed, height, callback, 'unfold', easing);
            });
        },

        /**
         * @name FoldToggle
         * @description folds/unfolds the element
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Integer height the height in pixels to folds/unfolds element to
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        FoldToggle : function (speed, height, callback, easing)
        {
            return this.queue('interfaceFX',function(){
                new jQuery.fx.DoFold(this, speed, height, callback, 'toggle', easing);
            });
        }
    }
);

jQuery.fx.DoFold = function (e, speed, height, callback, type, easing)
{
    if (!jQuery.fxCheckTag(e)) {
        jQuery.dequeue(e, 'interfaceFX');
        return false;
    }
    var z = this;
    z.el = jQuery(e);
    z.easing = typeof callback == 'string' ? callback : easing||null;
    z.callback = typeof callback == 'function' ? callback : null;
    if ( type == 'toggle') {
        type = z.el.css('display') == 'none' ? 'unfold' : 'fold';
    }
    //z.el.show();
    z.speed = speed;
    z.height = height && height.constructor == Number ? height : 20;
    z.fx = jQuery.fx.buildWrapper(e);
    z.type = type;
    z.complete = function()
    {
        if (z.callback && z.callback.constructor == Function) {
            z.callback.apply(z.el.get(0));
        }
        if(z.type == 'unfold'){
            z.el.show();
        } else {
            z.el.hide();
        }
        jQuery.fx.destroyWrapper(z.fx.wrapper.get(0), z.fx.oldStyle);
        jQuery.dequeue(z.el.get(0), 'interfaceFX');
    };
    if ( z.type == 'unfold') {
        z.el.show();
        z.fx.wrapper.css('height', z.height + 'px').css('width', '1px');

        z.ef = new jQuery.fx(
            z.fx.wrapper.get(0),
            jQuery.speed (
                z.speed,
                z.easing,
                function()
                {
                    z.ef = new jQuery.fx(
                        z.fx.wrapper.get(0),
                        jQuery.speed(
                            z.speed,
                            z.easing,
                            z.complete
                        ),
                        'height'
                    );
                    z.ef.custom(z.height, z.fx.oldStyle.sizes.hb);
                }
            ),
            'width'
        );
        z.ef.custom(0, z.fx.oldStyle.sizes.wb);
    } else {
        z.ef = new jQuery.fx(
            z.fx.wrapper.get(0),
            jQuery.speed(
                z.speed,
                z.easing,
                function()
                {
                    z.ef = new jQuery.fx(
                        z.fx.wrapper.get(0),
                        jQuery.speed(
                            z.speed,
                            z.easing,
                            z.complete
                        ),
                        'width'
                    );
                    z.ef.custom(z.fx.oldStyle.sizes.wb, 0);
                }
            ),
            'height'
        );
        z.ef.custom(z.fx.oldStyle.sizes.hb, z.height);
    }
};


jQuery.fn.Highlight = function(speed, color, callback, easing) {
    return this.queue(
        'interfaceColorFX',
        function()
        {
            this.oldStyleAttr = jQuery(this).attr("style") || '';
            easing = typeof callback == 'string' ? callback : easing||null;
            callback = typeof callback == 'function' ? callback : null;
            var oldColor = jQuery(this).css('backgroundColor');
            var parentEl = this.parentNode;
            while(oldColor == 'transparent' && parentEl) {
                oldColor = jQuery(parentEl).css('backgroundColor');
                parentEl = parentEl.parentNode;
            }
            jQuery(this).css('backgroundColor', color);


            /* In IE, style is a object.. */
            if(typeof this.oldStyleAttr == 'object') this.oldStyleAttr = this.oldStyleAttr["cssText"];

            jQuery(this).animate(
                {'backgroundColor':oldColor},
                speed,
                easing,
                function() {
                    jQuery.dequeue(this, 'interfaceColorFX');
                    if(typeof jQuery(this).attr("style") == 'object') {
                        jQuery(this).attr("style")["cssText"] = "";
                        jQuery(this).attr("style")["cssText"] = this.oldStyleAttr;
                    } else {
                        jQuery(this).attr("style", this.oldStyleAttr);
                    }
                    if (callback)
                        callback.apply(this);
                }
            );
        }
    );
};


jQuery.fn.extend(
    {
        /**
         * @name CloseVertically
         * @description closes the element vertically
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        CloseVertically : function (speed, callback, easing) {
            return this.queue('interfaceFX', function(){
                new jQuery.fx.OpenClose(this, speed, callback, 'vertically', 'close', easing);
            });
        },

        /**
         * @name CloseHorizontally
         * @description closes the element horizontally
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        CloseHorizontally : function (speed, callback, easing) {
            return this.queue('interfaceFX', function(){
                new jQuery.fx.OpenClose(this, speed, callback, 'horizontally', 'close', easing);
            });
        },

        /**
         * @name SwitchHorizontally
         * @description opens/closes the element horizontally
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        SwitchHorizontally : function (speed, callback, easing)
        {
            return this.queue('interfaceFX', function(){
                if (jQuery.css(this, 'display') == 'none') {
                    new jQuery.fx.OpenClose(this, speed, callback, 'horizontally', 'open', easing);
                } else {
                    new jQuery.fx.OpenClose(this, speed, callback, 'horizontally', 'close', easing);
                }
            });
        },

        /**
         * @name SwitchVertically
         * @description opens/closes the element vertically
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        SwitchVertically : function (speed, callback, easing)
        {
            return this.queue('interfaceFX', function(){
                if (jQuery.css(this, 'display') == 'none') {
                    new jQuery.fx.OpenClose(this, speed, callback, 'vertically', 'open', easing);
                } else {
                    new jQuery.fx.OpenClose(this, speed, callback, 'vertically', 'close', easing);
                }
            });
        },

        /**
         * @name OpenVertically
         * @description opens the element vertically
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        OpenVertically : function (speed, callback, easing) {
            return this.queue('interfaceFX', function(){
                new jQuery.fx.OpenClose(this, speed, callback, 'vertically', 'open', easing);
            });
        },

        /**
         * @name OpenHorizontally
         * @description opens the element horizontally
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        OpenHorizontally : function (speed, callback, easing) {
            return this.queue('interfaceFX', function(){
                new jQuery.fx.OpenClose(this, speed, callback, 'horizontally', 'open', easing);
            });
        }
    }
);

jQuery.fx.OpenClose = function (e, speed, callback, direction, type, easing)
{
    if (!jQuery.fxCheckTag(e)) {
        jQuery.dequeue(e, 'interfaceFX');
        return false;
    }
    var z = this;
    var restoreStyle = false;
    z.el = jQuery(e);
    z.easing = typeof callback == 'string' ? callback : easing||null;
    z.callback = typeof callback == 'function' ? callback : null;
    z.type = type;
    z.speed = speed;
    z.oldP = jQuery.iUtil.getSize(e);
    z.oldStyle = {};
    z.oldStyle.position = z.el.css('position');
    z.oldStyle.display = z.el.css('display');
    if (z.oldStyle.display == 'none') {
        oldVisibility = z.el.css('visibility');
        z.el.show();
        restoreStyle = true;
    }
    z.oldStyle.top = z.el.css('top');
    z.oldStyle.left = z.el.css('left');
    if (restoreStyle) {
        z.el.hide();
        z.el.css('visibility', oldVisibility);
    }
    z.oldStyle.width = z.oldP.w + 'px';
    z.oldStyle.height = z.oldP.h + 'px';
    z.oldStyle.overflow = z.el.css('overflow');
    z.oldP.top = parseInt(z.oldStyle.top)||0;
    z.oldP.left = parseInt(z.oldStyle.left)||0;
    //z.el.show();

    if (z.oldStyle.position != 'relative' && z.oldStyle.position != 'absolute') {
        z.el.css('position', 'relative');
    }
    z.el.css('overflow', 'hidden')
        .css('height', type == 'open' && direction == 'vertically' ? 1 : z.oldP.h + 'px')
        .css('width', type == 'open' && direction == 'horizontally' ? 1 : z.oldP.w + 'px');

    z.complete = function()
    {
        z.el.css(z.oldStyle);
        if (z.type == 'close')
            z.el.hide();
        else
            z.el.show();
        jQuery.dequeue(z.el.get(0), 'interfaceFX');
    };

    switch (direction) {
        case 'vertically':
            z.eh = new jQuery.fx(
                z.el.get(0),
                jQuery.speed(speed-15, z.easing, callback),
                'height'
            );
            z.et = new jQuery.fx(
                z.el.get(0),
                jQuery.speed(
                    z.speed,
                    z.easing,
                    z.complete
                ),
                'top'
            );
            if (z.type == 'close') {
                z.eh.custom(z.oldP.h,0);
                z.et.custom(z.oldP.top, z.oldP.top + z.oldP.h/2);
            } else {
                z.eh.custom(0, z.oldP.h);
                z.et.custom(z.oldP.top + z.oldP.h/2, z.oldP.top);
            }
            break;
        case 'horizontally':
            z.eh = new jQuery.fx(
                z.el.get(0),
                jQuery.speed(speed-15, z.easing, callback),
                'width'
            );
            z.et = new jQuery.fx(
                z.el.get(0),
                jQuery.speed(
                    z.speed,
                    z.easing,
                    z.complete
                ),
                'left'
            );
            if (z.type == 'close') {
                z.eh.custom(z.oldP.w,0);
                z.et.custom(z.oldP.left, z.oldP.left + z.oldP.w/2);
            } else {
                z.eh.custom(0, z.oldP.w);
                z.et.custom(z.oldP.left + z.oldP.w/2, z.oldP.left);
            }
            break;
    }
};


jQuery.fn.Pulsate = function(speed, times, callback) {
    return this.queue('interfaceFX',function(){
        if (!jQuery.fxCheckTag(this)) {
            jQuery.dequeue(this, 'interfaceFX');
            return false;
        }
        var fx = new jQuery.fx.Pulsate(this, speed, times, callback);
        fx.pulse();
    });
};

jQuery.fx.Pulsate = function (el, speed, times, callback)
{
    var z = this;
    z.times = times;
    z.cnt = 1;
    z.el = el;
    z.speed = speed;
    z.callback = callback;
    jQuery(z.el).show();
    z.pulse = function()
    {
        z.cnt ++;
        z.e = new jQuery.fx(
            z.el,
            jQuery.speed(
                z.speed,
                function(){
                    z.ef = new jQuery.fx(
                        z.el,
                        jQuery.speed(
                            z.speed,
                            function()
                            {
                                if (z.cnt <= z.times)
                                    z.pulse();
                                else {
                                    jQuery.dequeue(z.el, 'interfaceFX');
                                    if (z.callback && z.callback.constructor == Function) {
                                        z.callback.apply(z.el);
                                    }
                                }
                            }
                        ),
                        'opacity'
                    );
                    z.ef.custom(0,1);
                }
            ),
            'opacity'
        );
        z.e.custom(1,0);
    };
};


jQuery.fn.extend(
    {
        /**
         * @name Grow
         * @description scales the element from 0 to intitial size
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        Grow : function(speed, callback, easing) {
            return this.queue('interfaceFX',function(){
                new jQuery.fx.Scale(this, speed, 1, 100, true, callback, 'grow', easing);
            });
        },

        /**
         * @name Shrink
         * @description scales the element from intitial size to 0
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        Shrink : function(speed, callback, easing) {
            return this.queue('interfaceFX',function(){
                new jQuery.fx.Scale(this, speed, 100, 1, true, callback, 'shrink', easing);
            });
        },

        /**
         * @name Puff
         * @description makes element to dispear by scalling to 150% and fading it out
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        Puff : function(speed, callback, easing) {
            return this.queue('interfaceFX',function(){
                var easing = easing || 'easeout';
                new jQuery.fx.Scale(this, speed, 100, 150, true, callback, 'puff', easing);
            });
        },

        /**
         * @name Scale
         * @description scales the element
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Integer from initial scalling procentage
         * @param Integer to final scalling procentage
         * @param Boolean reastore whatever to restore the initital scalling procentage when animation ends
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        Scale : function(speed, from, to, restore, callback, easing) {
            return this.queue('interfaceFX',function(){
                new jQuery.fx.Scale(this, speed, from, to, restore, callback, 'Scale', easing);
            });
        }
    }
);

jQuery.fx.Scale = function (e, speed, from, to, restore, callback, type, easing)
{
    if (!jQuery.fxCheckTag(e)) {
        jQuery.dequeue(e, 'interfaceFX');
        return false;
    }
    var z = this;
    z.el = jQuery(e);
    z.from = parseInt(from) || 100;
    z.to = parseInt(to) || 100;
    z.easing = typeof callback == 'string' ? callback : easing||null;
    z.callback = typeof callback == 'function' ? callback : null;
    z.duration = jQuery.speed(speed).duration;
    z.restore = restore|| null;
    z.oldP = jQuery.iUtil.getSize(e);
    z.oldStyle = {
        width: z.el.css('width'),
        height: z.el.css('height'),
        fontSize: z.el.css('fontSize')||'100%',
        position : z.el.css('position'),
        display : z.el.css('display'),
        top : z.el.css('top'),
        left : z.el.css('left'),
        overflow : z.el.css('overflow'),
        borderTopWidth : z.el.css('borderTopWidth'),
        borderRightWidth : z.el.css('borderRightWidth'),
        borderBottomWidth : z.el.css('borderBottomWidth'),
        borderLeftWidth : z.el.css('borderLeftWidth'),
        paddingTop : z.el.css('paddingTop'),
        paddingRight : z.el.css('paddingRight'),
        paddingBottom : z.el.css('paddingBottom'),
        paddingLeft : z.el.css('paddingLeft')
    };
    z.width = parseInt(z.oldStyle.width)||e.offsetWidth||0;
    z.height = parseInt(z.oldStyle.height)||e.offsetHeight||0;
    z.top = parseInt(z.oldStyle.top)||0;
    z.left = parseInt(z.oldStyle.left)||0;
    sizes = ['em','px','pt','%'];
    for(i in sizes) {
        if (z.oldStyle.fontSize.indexOf(sizes[i])>0) {
            z.fontUnit = sizes[i];
            z.fontSize = parseFloat(z.oldStyle.fontSize);
        }
        if (z.oldStyle.borderTopWidth.indexOf(sizes[i])>0) {
            z.borderTopUnit = sizes[i];
            z.borderTopSize = parseFloat(z.oldStyle.borderTopWidth)||0;
        }
        if (z.oldStyle.borderRightWidth.indexOf(sizes[i])>0) {
            z.borderRightUnit = sizes[i];
            z.borderRightSize = parseFloat(z.oldStyle.borderRightWidth)||0;
        }
        if (z.oldStyle.borderBottomWidth.indexOf(sizes[i])>0) {
            z.borderBottomUnit = sizes[i];
            z.borderBottomSize = parseFloat(z.oldStyle.borderBottomWidth)||0;
        }
        if (z.oldStyle.borderLeftWidth.indexOf(sizes[i])>0) {
            z.borderLeftUnit = sizes[i];
            z.borderLeftSize = parseFloat(z.oldStyle.borderLeftWidth)||0;
        }
        if (z.oldStyle.paddingTop.indexOf(sizes[i])>0) {
            z.paddingTopUnit = sizes[i];
            z.paddingTopSize = parseFloat(z.oldStyle.paddingTop)||0;
        }
        if (z.oldStyle.paddingRight.indexOf(sizes[i])>0) {
            z.paddingRightUnit = sizes[i];
            z.paddingRightSize = parseFloat(z.oldStyle.paddingRight)||0;
        }
        if (z.oldStyle.paddingBottom.indexOf(sizes[i])>0) {
            z.paddingBottomUnit = sizes[i];
            z.paddingBottomSize = parseFloat(z.oldStyle.paddingBottom)||0;
        }
        if (z.oldStyle.paddingLeft.indexOf(sizes[i])>0) {
            z.paddingLeftUnit = sizes[i];
            z.paddingLeftSize = parseFloat(z.oldStyle.paddingLeft)||0;
        }
    }


    if (z.oldStyle.position != 'relative' && z.oldStyle.position != 'absolute') {
        z.el.css('position', 'relative');
    }
    z.el.css('overflow', 'hidden');
    z.type = type;
    switch(z.type)
    {
        case 'grow':
            z.startTop = z.top + z.oldP.h/2;
            z.endTop = z.top;
            z.startLeft = z.left + z.oldP.w/2;
            z.endLeft = z.left;
            break;
        case 'shrink':
            z.endTop = z.top + z.oldP.h/2;
            z.startTop = z.top;
            z.endLeft = z.left + z.oldP.w/2;
            z.startLeft = z.left;
            break;
        case 'puff':
            z.endTop = z.top - z.oldP.h/4;
            z.startTop = z.top;
            z.endLeft = z.left - z.oldP.w/4;
            z.startLeft = z.left;
            break;
    }
    z.firstStep = false;
    z.t=(new Date).getTime();
    z.clear = function(){clearInterval(z.timer);z.timer=null;};
    z.step = function(){
        if (z.firstStep == false) {
            z.el.show();
            z.firstStep = true;
        }
        var t = (new Date).getTime();
        var n = t - z.t;
        var p = n / z.duration;
        if (t >= z.duration+z.t) {
            setTimeout(
                function(){
                    o = 1;
                    if (z.type) {
                        t = z.endTop;
                        l = z.endLeft;
                        if (z.type == 'puff')
                            o = 0;
                    }
                    z.zoom(z.to, l, t, true, o);
                },
                13
            );
            z.clear();
        } else {
            o = 1;
            if (!jQuery.easing || !jQuery.easing[z.easing]) {
                s = ((-Math.cos(p*Math.PI)/2) + 0.5) * (z.to-z.from) + z.from;
            } else {
                s = jQuery.easing[z.easing](p, n, z.from, (z.to-z.from), z.duration);
            }
            if (z.type) {
                if (!jQuery.easing || !jQuery.easing[z.easing]) {
                    t = ((-Math.cos(p*Math.PI)/2) + 0.5) * (z.endTop-z.startTop) + z.startTop;
                    l = ((-Math.cos(p*Math.PI)/2) + 0.5) * (z.endLeft-z.startLeft) + z.startLeft;
                    if (z.type == 'puff')
                        o = ((-Math.cos(p*Math.PI)/2) + 0.5) * (-0.9999) + 0.9999;
                } else {
                    t = jQuery.easing[z.easing](p, n, z.startTop, (z.endTop-z.startTop), z.duration);
                    l = jQuery.easing[z.easing](p, n, z.startLeft, (z.endLeft-z.startLeft), z.duration);
                    if (z.type == 'puff')
                        o = jQuery.easing[z.easing](p, n, 0.9999, -0.9999, z.duration);
                }
            }
            z.zoom(s, l, t, false, o);
        }
    };
    z.timer=setInterval(function(){z.step();},13);
    z.zoom = function(percent, left, top, finish, opacity)
    {
        z.el
            .css('height', z.height * percent/100 + 'px')
            .css('width', z.width * percent/100 + 'px')
            .css('left', left + 'px')
            .css('top', top + 'px')
            .css('fontSize', z.fontSize * percent /100 + z.fontUnit);
        if (z.borderTopSize)
            z.el.css('borderTopWidth', z.borderTopSize * percent /100 + z.borderTopUnit);
        if (z.borderRightSize)
            z.el.css('borderRightWidth', z.borderRightSize * percent /100 + z.borderRightUnit);
        if (z.borderBottomSize)
            z.el.css('borderBottomWidth', z.borderBottomSize * percent /100 + z.borderBottomUnit);
        if (z.borderLeftSize)
            z.el.css('borderLeftWidth', z.borderLeftSize * percent /100 + z.borderLeftUnit);
        if (z.paddingTopSize)
            z.el.css('paddingTop', z.paddingTopSize * percent /100 + z.paddingTopUnit);
        if (z.paddingRightSize)
            z.el.css('paddingRight', z.paddingRightSize * percent /100 + z.paddingRightUnit);
        if (z.paddingBottomSize)
            z.el.css('paddingBottom', z.paddingBottomSize * percent /100 + z.paddingBottomUnit);
        if (z.paddingLeftSize)
            z.el.css('paddingLeft', z.paddingLeftSize * percent /100 + z.paddingLeftUnit);
        if (z.type == 'puff') {
            if (window.ActiveXObject)
                z.el.get(0).style.filter = "alpha(opacity=" + opacity*100 + ")";
            z.el.get(0).style.opacity = opacity;
        }
        if (finish){
            if (z.restore){
                z.el.css(z.oldStyle);
            }
            if (z.type == 'shrink' || z.type == 'puff'){
                z.el.css('display', 'none');
                if (z.type == 'puff') {
                    if (window.ActiveXObject)
                        z.el.get(0).style.filter = "alpha(opacity=" + 100 + ")";
                    z.el.get(0).style.opacity = 1;
                }
            }else
                z.el.css('display', 'block');
            if (z.callback)
                z.callback.apply(z.el.get(0));

            jQuery.dequeue(z.el.get(0), 'interfaceFX');
        }
    };
};


jQuery.fn.extend (
    {
        /**
         * @name ScrollTo
         * @description scrolls the document until the lement gets into viewport
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param String axis (optional) whatever to scroll on vertical, horizontal or both axis ['vertical'|'horizontal'|null]
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        ScrollTo : function(speed, axis, easing) {
            o = jQuery.speed(speed);
            return this.queue('interfaceFX',function(){
                new jQuery.fx.ScrollTo(this, o, axis, easing);
            });
        },
        /**
         * @name ScrollToAnchors
         * @description all links to '#elementId' will animate scroll
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param String axis (optional) whatever to scroll on vertical, horizontal or both axis ['vertical'|'horizontal'|null]
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        /*inspired by David Maciejewski www.macx.de*/
        ScrollToAnchors : function(speed, axis, easing) {
            return this.each(
                function()
                {
                    jQuery('a[@href*="#"]', this).click(
                        function(e)
                        {
                            parts = this.href.split('#');
                            jQuery('#' + parts[1]).ScrollTo(speed, axis, easing);
                            return false;
                        }
                    );
                }
            )
        }
    }
);

jQuery.fx.ScrollTo = function (e, o, axis, easing)
{
    var z = this;
    z.o = o;
    z.e = e;
    z.axis = /vertical|horizontal/.test(axis) ? axis : false;
    z.easing = easing;
    p = jQuery.iUtil.getPosition(e);
    s = jQuery.iUtil.getScroll();
    z.clear = function(){clearInterval(z.timer);z.timer=null;jQuery.dequeue(z.e, 'interfaceFX');};
    z.t=(new Date).getTime();
    s.h = s.h > s.ih ? (s.h - s.ih) : s.h;
    s.w = s.w > s.iw ? (s.w - s.iw) : s.w;
    z.endTop = p.y > s.h ? s.h : p.y;
    z.endLeft = p.x > s.w ? s.w : p.x;
    z.startTop = s.t;
    z.startLeft = s.l;
    z.step = function(){
        var t = (new Date).getTime();
        var n = t - z.t;
        var p = n / z.o.duration;
        if (t >= z.o.duration+z.t) {
            z.clear();
            setTimeout(function(){z.scroll(z.endTop, z.endLeft)},13);
        } else {
            if (!z.axis || z.axis == 'vertical') {
                if (!jQuery.easing || !jQuery.easing[z.easing]) {
                    st = ((-Math.cos(p*Math.PI)/2) + 0.5) * (z.endTop-z.startTop) + z.startTop;
                } else {
                    st = jQuery.easing[z.easing](p, n, z.startTop, (z.endTop - z.startTop), z.o.duration);
                }
            } else {
                st = z.startTop;
            }
            if (!z.axis || z.axis == 'horizontal') {
                if (!jQuery.easing || !jQuery.easing[z.easing]) {
                    sl = ((-Math.cos(p*Math.PI)/2) + 0.5) * (z.endLeft-z.startLeft) + z.startLeft;
                } else {
                    sl = jQuery.easing[z.easing](p, n, z.startLeft, (z.endLeft - z.startLeft), z.o.duration);
                }
            } else {
                sl = z.startLeft;
            }
            z.scroll(st, sl);
        }
    };
    z.scroll = function (t, l){window.scrollTo(l, t);};
    z.timer=setInterval(function(){z.step();},13);
};


jQuery.fn.Shake = function (times, callback) {
    return this.queue('interfaceFX',function(){
        if (!jQuery.fxCheckTag(this)) {
            jQuery.dequeue(this, 'interfaceFX');
            return false;
        }
        var e = new jQuery.fx.Shake(this, times, callback);
        e.shake();
    });
};
jQuery.fx.Shake = function (e, times, callback)
{
    var z = this;
    z.el = jQuery(e);
    z.el.show();
    z.times = parseInt(times)||3;
    z.callback = callback;
    z.cnt = 1;
    z.oldStyle = {};
    z.oldStyle.position = z.el.css('position');
    z.oldStyle.top = parseInt(z.el.css('top'))||0;
    z.oldStyle.left = parseInt(z.el.css('left'))||0;

    if (z.oldStyle.position != 'relative' && z.oldStyle.position != 'absolute') {
        z.el.css('position', 'relative');
    }

    z.shake = function ()
    {
        z.cnt ++;

        z.e = new jQuery.fx(
            z.el.get(0),
            {
                duration: 60,
                complete : function ()
                {
                    z.e = new jQuery.fx(
                        z.el.get(0),
                        {
                            duration: 60,
                            complete : function ()
                            {
                                z.e = new jQuery.fx(
                                    e,
                                    {
                                        duration: 60,
                                        complete: function(){
                                            if (z.cnt <= z.times)
                                                z.shake();
                                            else {
                                                z.el.css('position', z.oldStyle.position).css('top', z.oldStyle.top + 'px').css('left', z.oldStyle.left + 'px');
                                                jQuery.dequeue(z.el.get(0), 'interfaceFX');
                                                if (z.callback && z.callback.constructor == Function) {
                                                    z.callback.apply(z.el.get(0));
                                                }
                                            }
                                        }
                                    },
                                    'left'
                                );
                                z.e.custom (z.oldStyle.left-20, z.oldStyle.left);
                            }
                        },
                        'left'
                    );
                    z.e.custom (z.oldStyle.left+20, z.oldStyle.left-20);
                }
            },
            'left'
        );
        z.e.custom (z.oldStyle.left, z.oldStyle.left+20);
    };

};



jQuery.fn.extend(
    {
        /**
         * @name SlideInUp
         * @description slides the element in up
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        SlideInUp : function (speed,callback, easing)
        {
            return this.queue('interfaceFX', function(){
                new jQuery.fx.slide(this, speed, callback, 'up', 'in', easing);
            });
        },

        /**
         * @name SlideOutUp
         * @description slides the element out up
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        SlideOutUp : function (speed,callback, easing)
        {
            return this.queue('interfaceFX', function(){
                new jQuery.fx.slide(this, speed, callback, 'up', 'out', easing);
            });
        },

        /**
         * @name SlideToggleUp
         * @description slides the element in/out up
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        SlideToggleUp : function (speed,callback, easing)
        {
            return this.queue('interfaceFX', function(){
                new jQuery.fx.slide(this, speed, callback, 'up', 'toggle', easing);
            });
        },

        /**
         * @name SlideInDown
         * @description slides the element in down
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        SlideInDown : function (speed,callback, easing)
        {
            return this.queue('interfaceFX', function(){
                new jQuery.fx.slide(this, speed, callback, 'down', 'in', easing);
            });
        },

        /**
         * @name SlideOutDown
         * @description slides the element out down
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        SlideOutDown : function (speed,callback, easing)
        {
            return this.queue('interfaceFX', function(){
                new jQuery.fx.slide(this, speed, callback, 'down', 'out', easing);
            });
        },

        /**
         * @name SlideToggleDown
         * @description slides the element in/out down
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        SlideToggleDown : function (speed,callback, easing)
        {
            return this.queue('interfaceFX', function(){
                new jQuery.fx.slide(this, speed, callback, 'down', 'toggle', easing);
            });
        },

        /**
         * @name SlideInLeft
         * @description slides the element in left
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        SlideInLeft : function (speed,callback, easing)
        {
            return this.queue('interfaceFX', function(){
                new jQuery.fx.slide(this, speed, callback, 'left', 'in', easing);
            });
        },

        /**
         * @name SlideOutLeft
         * @description slides the element out left
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        SlideOutLeft :  function (speed,callback, easing)
        {
            return this.queue('interfaceFX', function(){
                new jQuery.fx.slide(this, speed, callback, 'left', 'out', easing);
            });
        },

        /**
         * @name SlideToggleLeft
         * @description slides the element in/out left
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        SlideToggleLeft : function (speed,callback, easing)
        {
            return this.queue('interfaceFX', function(){
                new jQuery.fx.slide(this, speed, callback, 'left', 'toggle', easing);
            });
        },

        /**
         * @name SlideInRight
         * @description slides the element in right
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        SlideInRight : function (speed,callback, easing)
        {
            return this.queue('interfaceFX', function(){
                new jQuery.fx.slide(this, speed, callback, 'right', 'in', easing);
            });
        },

        /**
         * @name SlideOutRight
         * @description slides the element out right
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        SlideOutRight : function (speed,callback, easing)
        {
            return this.queue('interfaceFX', function(){
                new jQuery.fx.slide(this, speed, callback, 'right', 'out', easing);
            });
        },

        /**
         * @name SlideToggleRight
         * @description slides the element in/out right
         * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
         * @param Function callback (optional) A function to be executed whenever the animation completes.
         * @param String easing (optional) The name of the easing effect that you want to use.
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        SlideToggleRight : function (speed,callback, easing)
        {
            return this.queue('interfaceFX', function(){
                new jQuery.fx.slide(this, speed, callback, 'right', 'toggle', easing);
            });
        }
    }
);

jQuery.fx.slide = function(e, speed, callback, direction, type, easing)
{
    if (!jQuery.fxCheckTag(e)) {
        jQuery.dequeue(e, 'interfaceFX');
        return false;
    }
    var z = this;
    z.el = jQuery(e);
    z.easing = typeof callback == 'string' ? callback : easing||null;
    z.callback = typeof callback == 'function' ? callback : null;
    if ( type == 'toggle') {
        type = z.el.css('display') == 'none' ? 'in' : 'out';
    }
    if (!e.ifxFirstDisplay)
        e.ifxFirstDisplay = z.el.css('display');
    z.el.show();

    z.speed = speed;
    z.fx = jQuery.fx.buildWrapper(e);

    z.type = type;
    z.direction = direction;
    z.complete = function()
    {
        if(z.type == 'out')
            z.el.css('visibility', 'hidden');
        jQuery.fx.destroyWrapper(z.fx.wrapper.get(0), z.fx.oldStyle);
        if(z.type == 'in'){
            z.el.css('display', z.el.get(0).ifxFirstDisplay == 'none' ? 'block' : z.el.get(0).ifxFirstDisplay);
        } else {
            z.el.css('display', 'none');
            z.el.css('visibility', 'visible');
        }
        if (z.callback && z.callback.constructor == Function) {
            z.callback.apply(z.el.get(0));
        }
        jQuery.dequeue(z.el.get(0), 'interfaceFX');
    };
    switch (z.direction) {
        case 'up':
            z.ef = new jQuery.fx(
                z.el.get(0),
                jQuery.speed(
                    z.speed,
                    z.easing,
                    z.complete
                ),
                'top'
            );
            z.efx = new jQuery.fx(
                z.fx.wrapper.get(0),
                jQuery.speed(
                    z.speed,
                    z.easing
                ),
                'height'
            );
            if (z.type == 'in') {
                z.ef.custom (-z.fx.oldStyle.sizes.hb, 0);
                z.efx.custom(0, z.fx.oldStyle.sizes.hb);
            } else {
                z.ef.custom (0, -z.fx.oldStyle.sizes.hb);
                z.efx.custom (z.fx.oldStyle.sizes.hb, 0);
            }
            break;
        case 'down':
            z.ef = new jQuery.fx(
                z.el.get(0),
                jQuery.speed(
                    z.speed,
                    z.easing,
                    z.complete
                ),
                'top'
            );
            if (z.type == 'in') {
                z.ef.custom (z.fx.oldStyle.sizes.hb, 0);
            } else {
                z.ef.custom (0, z.fx.oldStyle.sizes.hb);
            }
            break;
        case 'left':
            z.ef = new jQuery.fx(
                z.el.get(0),
                jQuery.speed(
                    z.speed,
                    z.easing,
                    z.complete
                ),
                'left'
            );
            z.efx = new jQuery.fx(
                z.fx.wrapper.get(0),
                jQuery.speed(
                    z.speed,
                    z.easing
                ),
                'width'
            );
            if (z.type == 'in') {
                z.ef.custom (-z.fx.oldStyle.sizes.wb, 0);
                z.efx.custom (0, z.fx.oldStyle.sizes.wb);
            } else {
                z.ef.custom (0, -z.fx.oldStyle.sizes.wb);
                z.efx.custom (z.fx.oldStyle.sizes.wb, 0);
            }
            break;
        case 'right':
            z.ef = new jQuery.fx(
                z.el.get(0),
                jQuery.speed(
                    z.speed,
                    z.easing,
                    z.complete
                ),
                'left'
            );
            if (z.type == 'in') {
                z.ef.custom (z.fx.oldStyle.sizes.wb, 0);
            } else {
                z.ef.custom (0, z.fx.oldStyle.sizes.wb);
            }
            break;
    }
};


jQuery.transferHelper = null;

jQuery.fn.TransferTo = function(o)
{
    return this.queue('interfaceFX', function(){
        new jQuery.fx.itransferTo(this, o);
    });
};
jQuery.fx.itransferTo = function(e, o)
{

    if(jQuery.transferHelper == null)
    {
        jQuery('body', document).append('<div id="transferHelper"></div>');
        jQuery.transferHelper = jQuery('#transferHelper');
    }
    jQuery.transferHelper.css('display', 'block').css('position', 'absolute');

    var z = this;
    z.el = jQuery(e);
    if(!o || !o.to) {
        return;
    }

    if (o.to.constructor == String && document.getElementById(o.to)) {
        o.to = document.getElementById(o.to);
    } else if ( !o.to.childNodes ) {
        return;
    }

    if (!o.duration) {
        o.duration = 500;
    }
    z.duration = o.duration;
    z.to = o.to;
    z.classname = o.className;
    z.complete = o.complete;
    if (z.classname) {
        jQuery.transferHelper.addClass(z.classname);
    }
    z.diffWidth = 0;
    z.diffHeight = 0;

    if(jQuery.boxModel) {
        z.diffWidth = (parseInt(jQuery.transferHelper.css('borderLeftWidth')) || 0 )
        + (parseInt(jQuery.transferHelper.css('borderRightWidth')) || 0)
        + (parseInt(jQuery.transferHelper.css('paddingLeft')) || 0)
        + (parseInt(jQuery.transferHelper.css('paddingRight')) || 0);
        z.diffHeight = (parseInt(jQuery.transferHelper.css('borderTopWidth')) || 0 )
        + (parseInt(jQuery.transferHelper.css('borderBottomWidth')) || 0)
        + (parseInt(jQuery.transferHelper.css('paddingTop')) || 0)
        + (parseInt(jQuery.transferHelper.css('paddingBottom')) || 0);
    }
    z.start = jQuery.extend(
        jQuery.iUtil.getPosition(z.el.get(0)),
        jQuery.iUtil.getSize(z.el.get(0))
    );
    z.end = jQuery.extend(
        jQuery.iUtil.getPosition(z.to),
        jQuery.iUtil.getSize(z.to)
    );
    z.start.wb -= z.diffWidth;
    z.start.hb -= z.diffHeight;
    z.end.wb -= z.diffWidth;
    z.end.hb -= z.diffHeight;
    z.callback = o.complete;

    // Execute the transfer
    jQuery.transferHelper
        .css('width', z.start.wb + 'px')
        .css('height', z.start.hb + 'px')
        .css('top', z.start.y + 'px')
        .css('left', z.start.x + 'px')
        .animate(
        {
            top: z.end.y,
            left: z.end.x,
            width: z.end.wb,
            height: z.end.hb
        },
        z.duration,
        function()
        {
            // Set correct classname
            if(z.classname)
                jQuery.transferHelper.removeClass(z.classname);
            jQuery.transferHelper.css('display', 'none');

            // Callback
            if (z.complete && z.complete.constructor == Function) {
                z.complete.apply(z.el.get(0), [z.to]);
            }
            // Done
            jQuery.dequeue(z.el.get(0), 'interfaceFX');
        }
    );
};


jQuery.ImageBox = {
    options : {
        border				: 10,
        loaderSRC			: 'images/loading.gif',
        closeHTML			: '<img src="images/close.jpg" />',
        overlayOpacity		: 0.8,
        textImage			: 'Showing image',
        textImageFrom		: 'from',
        fadeDuration		: 400
    },
    imageLoaded : false,
    firstResize : false,
    currentRel : null,
    animationInProgress : false,
    opened : false,

    keyPressed : function(event)
    {
        if(!jQuery.ImageBox.opened || jQuery.ImageBox.animationInProgress)
            return;
        var pressedKey = event.charCode || event.keyCode || -1;
        switch (pressedKey)
        {
            //end
            case 35:
                if (jQuery.ImageBox.currentRel)
                    jQuery.ImageBox.start(null, jQuery('a[@rel=' + jQuery.ImageBox.currentRel+ ']:last').get(0));
                break;
            //home
            case 36:
                if (jQuery.ImageBox.currentRel)
                    jQuery.ImageBox.start(null, jQuery('a[@rel=' + jQuery.ImageBox.currentRel+ ']:first').get(0));
                break;
            //left
            case 37:
            //backspace
            case 8:
            //page up
            case 33:
            //p
            case 80:
            case 112:
                var prevEl = jQuery('#ImageBoxPrevImage');
                if(prevEl.get(0).onclick != null) {
                    prevEl.get(0).onclick.apply(prevEl.get(0));
                }
                break;
            //up
            case 38:
                break;
            //right
            case 39:
            //page down
            case 34:
            //space
            case 32:
            //n
            case 110:
            case 78:
                var nextEl = jQuery('#ImageBoxNextImage');
                if(nextEl.get(0).onclick != null) {
                    nextEl.get(0).onclick.apply(nextEl.get(0));
                }
                break;
            //down;
            case 40:
                break;
            //escape
            case 27:
                jQuery.ImageBox.hideImage();
                break;
        }
    },

    init : function(options)
    {
        if (options)
            jQuery.extend(jQuery.ImageBox.options, options);
        if (window.event) {
            jQuery('body',document).bind('keyup', jQuery.ImageBox.keyPressed);
        } else {
            jQuery(document).bind('keyup', jQuery.ImageBox.keyPressed);
        }
        jQuery('a').each(
            function()
            {
                el 				= jQuery(this);
                relAttr 		= el.attr('rel')||'';
                hrefAttr 		= el.attr('href')||'';
                imageTypes 		= /\.jpg|\.jpeg|\.png|\.gif|\.bmp/g;
                if (hrefAttr.toLowerCase().match(imageTypes) != null && relAttr.toLowerCase().indexOf('imagebox') == 0) {
                    el.bind('click', jQuery.ImageBox.start);
                }
            }
        );
        if (jQuery.browser.msie) {
            iframe = document.createElement('iframe');
            jQuery(iframe)
                .attr(
                {
                    id			: 'ImageBoxIframe',
                    src			: 'javascript:false;',
                    frameborder	: 'no',
                    scrolling	: 'no'
                }
            )
                .css (
                {
                    display		: 'none',
                    position	: 'absolute',
                    top			: '0',
                    left		: '0',
                    filter		: 'progid:DXImageTransform.Microsoft.Alpha(opacity=0)'
                }
            );
            jQuery('body').append(iframe);
        }

        overlay	= document.createElement('div');
        jQuery(overlay)
            .attr('id', 'ImageBoxOverlay')
            .css(
            {
                position	: 'absolute',
                display		: 'none',
                top			: '0',
                left		: '0',
                opacity		: 0
            }
        )
            .append(document.createTextNode(' '))
            .bind('click', jQuery.ImageBox.hideImage);

        captionText = document.createElement('div');
        jQuery(captionText)
            .attr('id', 'ImageBoxCaptionText')
            .css(
            {
                paddingLeft		: jQuery.ImageBox.options.border + 'px'
            }
        )
            .append(document.createTextNode(' '));

        captionImages = document.createElement('div');
        jQuery(captionImages)
            .attr('id', 'ImageBoxCaptionImages')
            .css(
            {
                paddingLeft		: jQuery.ImageBox.options.border + 'px',
                paddingBottom	: jQuery.ImageBox.options.border + 'px'
            }
        )
            .append(document.createTextNode(' '));

        closeEl = document.createElement('a');
        jQuery(closeEl)
            .attr(
            {
                id			: 'ImageBoxClose',
                href		: '#'
            }
        )
            .css(
            {
                position	: 'absolute',
                right		: jQuery.ImageBox.options.border + 'px',
                top			: '0'
            }
        )
            .append(jQuery.ImageBox.options.closeHTML)
            .bind('click', jQuery.ImageBox.hideImage);

        captionEl = document.createElement('div');
        jQuery(captionEl)
            .attr('id', 'ImageBoxCaption')
            .css(
            {
                position	: 'relative',
                textAlign	: 'left',
                margin		: '0 auto',
                zIndex		: 1
            }
        )
            .append(captionText)
            .append(captionImages)
            .append(closeEl);

        loader = document.createElement('img');
        loader.src = jQuery.ImageBox.options.loaderSRC;
        jQuery(loader)
            .attr('id', 'ImageBoxLoader')
            .css(
            {
                position	: 'absolute'
            }
        );

        prevImage = document.createElement('a');
        jQuery(prevImage)
            .attr(
            {
                id			: 'ImageBoxPrevImage',
                href		: '#'
            }
        )
            .css(
            {
                position		: 'absolute',
                display			: 'none',
                overflow		: 'hidden',
                textDecoration	: 'none'
            }
        )
            .append(document.createTextNode(' '));

        nextImage = document.createElement('a');
        jQuery(nextImage)
            .attr(
            {
                id			: 'ImageBoxNextImage',
                href		: '#'
            }
        )
            .css(
            {
                position		: 'absolute',
                overflow		: 'hidden',
                textDecoration	: 'none'
            }
        )
            .append(document.createTextNode(' '));

        container = document.createElement('div');
        jQuery(container)
            .attr('id', 'ImageBoxContainer')
            .css(
            {
                display		: 'none',
                position	: 'relative',
                overflow	: 'hidden',
                textAlign	: 'left',
                margin		: '0 auto',
                top			: '0',
                left		: '0',
                zIndex		: 2
            }
        )
            .append([loader, prevImage, nextImage]);

        outerContainer = document.createElement('div');
        jQuery(outerContainer)
            .attr('id', 'ImageBoxOuterContainer')
            .css(
            {
                display		: 'none',
                position	: 'absolute',
                overflow	: 'hidden',
                top			: '0',
                left		: '0',
                textAlign	: 'center',
                backgroundColor : 'transparent',
                lineHeigt	: '0'
            }
        )
            .append([container,captionEl]);

        jQuery('body')
            .append(overlay)
            .append(outerContainer);
    },

    start : function(e, elm)
    {
        el = elm ? jQuery(elm) : jQuery(this);
        linkRel =  el.attr('rel');
        var totalImages, iteration, prevImage, nextImage;
        if (linkRel != 'imagebox') {
            jQuery.ImageBox.currentRel = linkRel;
            gallery = jQuery('a[@rel=' + linkRel + ']');
            totalImages = gallery.size();
            iteration = gallery.index(elm ? elm : this);
            prevImage = gallery.get(iteration - 1);
            nextImage = gallery.get(iteration + 1);
        }
        imageSrc =  el.attr('href');
        captionText = el.attr('title');
        pageSize = jQuery.iUtil.getScroll();
        overlay = jQuery('#ImageBoxOverlay');
        if (!jQuery.ImageBox.opened) {
            jQuery.ImageBox.opened = true;
            if (jQuery.browser.msie) {
                jQuery('#ImageBoxIframe')
                    .css ('height', Math.max(pageSize.ih,pageSize.h) + 'px')
                    .css ('width', Math.max(pageSize.iw,pageSize.w) + 'px')
                    .show();
            }
            overlay
                .css ('height', Math.max(pageSize.ih,pageSize.h) + 'px')
                .css ('width', Math.max(pageSize.iw,pageSize.w) + 'px')
                .show()
                .fadeTo(
                300,
                jQuery.ImageBox.options.overlayOpacity,
                function()
                {
                    jQuery.ImageBox.loadImage(
                        imageSrc,
                        captionText,
                        pageSize,
                        totalImages,
                        iteration,
                        prevImage,
                        nextImage
                    );
                }
            );
            jQuery('#ImageBoxOuterContainer').css ('width', Math.max(pageSize.iw,pageSize.w) + 'px');
        } else {
            jQuery('#ImageBoxPrevImage').get(0).onclick = null;
            jQuery('#ImageBoxNextImage').get(0).onclick = null;
            jQuery.ImageBox.loadImage(
                imageSrc,
                captionText,
                pageSize,
                totalImages,
                iteration,
                prevImage,
                nextImage
            );
        }
        return false;
    },

    loadImage : function(imageSrc, captiontext, pageSize, totalImages, iteration, prevImage, nextImage)
    {
        jQuery('#ImageBoxCurrentImage').remove();
        prevImageEl = jQuery('#ImageBoxPrevImage');
        prevImageEl.hide();
        nextImageEl = jQuery('#ImageBoxNextImage');
        nextImageEl.hide();
        loader = jQuery('#ImageBoxLoader');
        container = jQuery('#ImageBoxContainer');
        outerContainer = jQuery('#ImageBoxOuterContainer');
        captionEl = jQuery('#ImageBoxCaption').css('visibility', 'hidden');
        jQuery('#ImageBoxCaptionText').html(captionText);
        jQuery.ImageBox.animationInProgress = true;
        if (totalImages)
            jQuery('#ImageBoxCaptionImages').html(
                jQuery.ImageBox.options.textImage
                + ' ' + (iteration + 1) + ' '
                + jQuery.ImageBox.options.textImageFrom
                + ' ' + totalImages
            );
        if (prevImage) {
            prevImageEl.get(0).onclick = function()
            {
                this.blur();
                jQuery.ImageBox.start(null, prevImage);
                return false;
            };
        }
        if (nextImage) {
            nextImageEl.get(0).onclick =function()
            {
                this.blur();
                jQuery.ImageBox.start(null, nextImage);
                return false;
            };
        }
        loader.show();
        containerSize = jQuery.iUtil.getSize(container.get(0));
        containerW = Math.max(containerSize.wb, loader.get(0).width + jQuery.ImageBox.options.border * 2);
        containerH = Math.max(containerSize.hb, loader.get(0).height + jQuery.ImageBox.options.border * 2);
        loader
            .css(
            {
                left	: (containerW - loader.get(0).width)/2 + 'px',
                top		: (containerH - loader.get(0).height)/2 + 'px'
            }
        );
        container
            .css(
            {
                width	: containerW + 'px',
                height	: containerH + 'px'
            }
        )
            .show();
        clientSize = jQuery.iUtil.getClient();
        outerContainer
            .css('top', pageSize.t +  (clientSize.h / 15) + 'px');
        if (outerContainer.css('display') == 'none') {
            outerContainer
                .show()
                .fadeIn(
                jQuery.ImageBox.options.fadeDuration
            );
        }
        imageEl = new Image;
        jQuery(imageEl)
            .attr('id', 'ImageBoxCurrentImage')
            .bind('load',
            function()
            {
                containerW = imageEl.width + jQuery.ImageBox.options.border * 2;
                containerH = imageEl.height + jQuery.ImageBox.options.border * 2;
                loader.hide();
                container.animate(
                    {
                        height		: containerH
                    },
                    containerSize.hb != containerH ? jQuery.ImageBox.options.fadeDuration : 1,
                    function()
                    {
                        container.animate(
                            {
                                width		: containerW
                            },
                            containerSize.wb != containerW ? jQuery.ImageBox.options.fadeDuration : 1,
                            function()
                            {
                                container.prepend(imageEl);
                                jQuery(imageEl)
                                    .css(
                                    {
                                        position	: 'absolute',
                                        left		: jQuery.ImageBox.options.border + 'px',
                                        top			: jQuery.ImageBox.options.border + 'px'
                                    }
                                )
                                    .fadeIn(
                                    jQuery.ImageBox.options.fadeDuration,
                                    function()
                                    {
                                        captionSize = jQuery.iUtil.getSize(captionEl.get(0));
                                        if (prevImage) {
                                            prevImageEl
                                                .css(
                                                {
                                                    left	: jQuery.ImageBox.options.border + 'px',
                                                    top		: jQuery.ImageBox.options.border + 'px',
                                                    width	: containerW/2 - jQuery.ImageBox.options.border * 3 + 'px',
                                                    height	: containerH - jQuery.ImageBox.options.border * 2 + 'px'
                                                }
                                            )
                                                .show();
                                        }
                                        if (nextImage) {
                                            nextImageEl
                                                .css(
                                                {
                                                    left	: containerW/2 + jQuery.ImageBox.options.border * 2 + 'px',
                                                    top		: jQuery.ImageBox.options.border + 'px',
                                                    width	: containerW/2 - jQuery.ImageBox.options.border * 3 + 'px',
                                                    height	: containerH - jQuery.ImageBox.options.border * 2 + 'px'
                                                }
                                            )
                                                .show();
                                        }
                                        captionEl
                                            .css(
                                            {
                                                width		: containerW + 'px',
                                                top			: - captionSize.hb + 'px',
                                                visibility	: 'visible'
                                            }
                                        )
                                            .animate(
                                            {
                                                top		: -1
                                            },
                                            jQuery.ImageBox.options.fadeDuration,
                                            function()
                                            {
                                                jQuery.ImageBox.animationInProgress = false;
                                            }
                                        );
                                    }
                                );
                            }
                        );
                    }
                );
            }
        );
        imageEl.src = imageSrc;

    },

    hideImage : function()
    {
        jQuery('#ImageBoxCurrentImage').remove();
        jQuery('#ImageBoxOuterContainer').hide();
        jQuery('#ImageBoxCaption').css('visibility', 'hidden');
        jQuery('#ImageBoxOverlay').fadeTo(
            300,
            0,
            function(){
                jQuery(this).hide();
                if (jQuery.browser.msie) {
                    jQuery('#ImageBoxIframe').hide();
                }
            }
        );
        jQuery('#ImageBoxPrevImage').get(0).onclick = null;
        jQuery('#ImageBoxNextImage').get(0).onclick = null;
        jQuery.ImageBox.currentRel = null;
        jQuery.ImageBox.opened = false;
        jQuery.ImageBox.animationInProgress = false;
        return false;
    }
};



jQuery.iResize = {
    resizeElement: null,
    resizeDirection: null,
    dragged: null,
    pointer: null,
    sizes: null,
    position: null,
    /**
     * internal: Start function
     */
    startDrag: function(e) {
        jQuery.iResize.dragged = (this.dragEl) ? this.dragEl: this;
        jQuery.iResize.pointer = jQuery.iUtil.getPointer(e);

        // Save original size
        jQuery.iResize.sizes = {
            width: parseInt(jQuery(jQuery.iResize.dragged).css('width')) || 0,
            height: parseInt(jQuery(jQuery.iResize.dragged).css('height')) || 0
        };

        // Save original position
        jQuery.iResize.position = {
            top: parseInt(jQuery(jQuery.iResize.dragged).css('top')) || 0,
            left: parseInt(jQuery(jQuery.iResize.dragged).css('left')) || 0
        };

        // Assign event handlers
        jQuery(document)
            .bind('mousemove', jQuery.iResize.moveDrag)
            .bind('mouseup', jQuery.iResize.stopDrag);

        // Callback?
        if (typeof jQuery.iResize.dragged.resizeOptions.onDragStart === 'function') {
            jQuery.iResize.dragged.resizeOptions.onDragStart.apply(jQuery.iResize.dragged);
        }
        return false;
    },
    /**
     * internal: Stop function
     */
    stopDrag: function(e) {
        // Unbind event handlers
        jQuery(document)
            .unbind('mousemove', jQuery.iResize.moveDrag)
            .unbind('mouseup', jQuery.iResize.stopDrag);

        // Callback?
        if (typeof jQuery.iResize.dragged.resizeOptions.onDragStop === 'function') {
            jQuery.iResize.dragged.resizeOptions.onDragStop.apply(jQuery.iResize.dragged);
        }

        // Remove dragged element
        jQuery.iResize.dragged = null;
    },
    /**
     * internal: Move function
     */
    moveDrag: function(e) {
        if (!jQuery.iResize.dragged) {
            return;
        }

        pointer = jQuery.iUtil.getPointer(e);

        // Calculate new positions
        newTop = jQuery.iResize.position.top - jQuery.iResize.pointer.y + pointer.y;
        newLeft = jQuery.iResize.position.left - jQuery.iResize.pointer.x + pointer.x;
        newTop = Math.max(
            Math.min(newTop, jQuery.iResize.dragged.resizeOptions.maxBottom - jQuery.iResize.sizes.height),
            jQuery.iResize.dragged.resizeOptions.minTop
        );
        newLeft = Math.max(
            Math.min(newLeft, jQuery.iResize.dragged.resizeOptions.maxRight- jQuery.iResize.sizes.width),
            jQuery.iResize.dragged.resizeOptions.minLeft
        );

        // Callback
        if (typeof jQuery.iResize.dragged.resizeOptions.onDrag === 'function') {
            var newPos = jQuery.iResize.dragged.resizeOptions.onDrag.apply(jQuery.iResize.dragged, [newLeft, newTop]);
            if (typeof newPos == 'array' && newPos.length == 2) {
                newLeft = newPos[0];
                newTop = newPos[1];
            }
        }

        // Update the element
        jQuery.iResize.dragged.style.top = newTop + 'px';
        jQuery.iResize.dragged.style.left = newLeft + 'px';

        return false;
    },
    start: function(e) {
        // Bind event handlers
        jQuery(document)
            .bind('mousemove', jQuery.iResize.move)
            .bind('mouseup', jQuery.iResize.stop);

        // Initialize resizable
        jQuery.iResize.resizeElement = this.resizeElement;
        jQuery.iResize.resizeDirection = this.resizeDirection;
        jQuery.iResize.pointer = jQuery.iUtil.getPointer(e);
        jQuery.iResize.sizes = {
            width: parseInt(jQuery(this.resizeElement).css('width'))||0,
            height: parseInt(jQuery(this.resizeElement).css('height'))||0
        };
        jQuery.iResize.position = {
            top: parseInt(jQuery(this.resizeElement).css('top'))||0,
            left: parseInt(jQuery(this.resizeElement).css('left'))||0
        };

        // Callback function
        if (jQuery.iResize.resizeElement.resizeOptions.onStart) {
            jQuery.iResize.resizeElement.resizeOptions.onStart.apply(jQuery.iResize.resizeElement, [this]);
        }

        return false;
    },
    stop: function() {
        // Unbind event handlers
        jQuery(document)
            .unbind('mousemove', jQuery.iResize.move)
            .unbind('mouseup', jQuery.iResize.stop);

        // Callback function
        if (jQuery.iResize.resizeElement.resizeOptions.onStop) {
            jQuery.iResize.resizeElement.resizeOptions.onStop.apply(jQuery.iResize.resizeElement, [jQuery.iResize.resizeDirection]);
        }

        // Unbind
        jQuery.iResize.resizeElement = null;
        jQuery.iResize.resizeDirection = null;
    },
    getWidth: function(dx, side) {
        return Math.min(
            Math.max(jQuery.iResize.sizes.width + dx * side, jQuery.iResize.resizeElement.resizeOptions.minWidth),
            jQuery.iResize.resizeElement.resizeOptions.maxWidth
        );
    },
    getHeight: function(dy, side) {
        return Math.min(
            Math.max(jQuery.iResize.sizes.height + dy * side, jQuery.iResize.resizeElement.resizeOptions.minHeight),
            jQuery.iResize.resizeElement.resizeOptions.maxHeight
        );
    },
    getHeightMinMax: function(height) {
        return Math.min(
            Math.max(height, jQuery.iResize.resizeElement.resizeOptions.minHeight),
            jQuery.iResize.resizeElement.resizeOptions.maxHeight
        );
    },
    move: function(e) {
        if (jQuery.iResize.resizeElement == null) {
            return;
        }

        pointer = jQuery.iUtil.getPointer(e);
        dx = pointer.x - jQuery.iResize.pointer.x;
        dy = pointer.y - jQuery.iResize.pointer.y;

        newSizes = {
            width: jQuery.iResize.sizes.width,
            height: jQuery.iResize.sizes.height
        };
        newPosition = {
            top: jQuery.iResize.position.top,
            left: jQuery.iResize.position.left
        };

        switch (jQuery.iResize.resizeDirection){
            case 'e':
                newSizes.width = jQuery.iResize.getWidth(dx,1);
                break;
            case 'se':
                newSizes.width = jQuery.iResize.getWidth(dx,1);
                newSizes.height = jQuery.iResize.getHeight(dy,1);
                break;
            case 'w':
                newSizes.width = jQuery.iResize.getWidth(dx,-1);
                newPosition.left = jQuery.iResize.position.left - newSizes.width + jQuery.iResize.sizes.width;
                break;
            case 'sw':
                newSizes.width = jQuery.iResize.getWidth(dx,-1);
                newPosition.left = jQuery.iResize.position.left - newSizes.width + jQuery.iResize.sizes.width;
                newSizes.height = jQuery.iResize.getHeight(dy,1);
                break;
            case 'nw':
                newSizes.height = jQuery.iResize.getHeight(dy,-1);
                newPosition.top = jQuery.iResize.position.top - newSizes.height + jQuery.iResize.sizes.height;
                newSizes.width = jQuery.iResize.getWidth(dx,-1);
                newPosition.left = jQuery.iResize.position.left - newSizes.width + jQuery.iResize.sizes.width;
                break;
            case 'n':
                newSizes.height = jQuery.iResize.getHeight(dy,-1);
                newPosition.top = jQuery.iResize.position.top - newSizes.height + jQuery.iResize.sizes.height;
                break;
            case 'ne':
                newSizes.height = jQuery.iResize.getHeight(dy,-1);
                newPosition.top = jQuery.iResize.position.top - newSizes.height + jQuery.iResize.sizes.height;
                newSizes.width = jQuery.iResize.getWidth(dx,1);
                break;
            case 's':
                newSizes.height = jQuery.iResize.getHeight(dy,1);
                break;
        }

        if (jQuery.iResize.resizeElement.resizeOptions.ratio) {
            if (jQuery.iResize.resizeDirection == 'n' || jQuery.iResize.resizeDirection == 's')
                nWidth = newSizes.height * jQuery.iResize.resizeElement.resizeOptions.ratio;
            else
                nWidth = newSizes.width;
            nHeight = jQuery.iResize.getHeightMinMax(nWidth * jQuery.iResize.resizeElement.resizeOptions.ratio);
            nWidth = nHeight / jQuery.iResize.resizeElement.resizeOptions.ratio;

            switch (jQuery.iResize.resizeDirection){
                case 'n':
                case 'nw':
                case 'ne':
                    newPosition.top += newSizes.height - nHeight;
                    break;
            }

            switch (jQuery.iResize.resizeDirection){
                case 'nw':
                case 'w':
                case 'sw':
                    newPosition.left += newSizes.width - nWidth;
                    break;
            }

            newSizes.height = nHeight;
            newSizes.width = nWidth;
        }

        if (newPosition.top < jQuery.iResize.resizeElement.resizeOptions.minTop) {
            nHeight = newSizes.height + newPosition.top - jQuery.iResize.resizeElement.resizeOptions.minTop;
            newPosition.top = jQuery.iResize.resizeElement.resizeOptions.minTop;

            if (jQuery.iResize.resizeElement.resizeOptions.ratio) {
                nWidth = nHeight / jQuery.iResize.resizeElement.resizeOptions.ratio;
                switch (jQuery.iResize.resizeDirection){
                    case 'nw':
                    case 'w':
                    case 'sw':
                        newPosition.left += newSizes.width - nWidth;
                        break;
                }
                newSizes.width = nWidth;
            }
            newSizes.height = nHeight;
        }

        if (newPosition.left < jQuery.iResize.resizeElement.resizeOptions.minLeft ) {
            nWidth = newSizes.width + newPosition.left - jQuery.iResize.resizeElement.resizeOptions.minLeft;
            newPosition.left = jQuery.iResize.resizeElement.resizeOptions.minLeft;

            if (jQuery.iResize.resizeElement.resizeOptions.ratio) {
                nHeight = nWidth * jQuery.iResize.resizeElement.resizeOptions.ratio;
                switch (jQuery.iResize.resizeDirection){
                    case 'n':
                    case 'nw':
                    case 'ne':
                        newPosition.top += newSizes.height - nHeight;
                        break;
                }
                newSizes.height = nHeight;
            }
            newSizes.width = nWidth;
        }

        if (newPosition.top + newSizes.height > jQuery.iResize.resizeElement.resizeOptions.maxBottom) {
            newSizes.height = jQuery.iResize.resizeElement.resizeOptions.maxBottom - newPosition.top;
            if (jQuery.iResize.resizeElement.resizeOptions.ratio) {
                newSizes.width = newSizes.height / jQuery.iResize.resizeElement.resizeOptions.ratio;
            }

        }

        if (newPosition.left + newSizes.width > jQuery.iResize.resizeElement.resizeOptions.maxRight) {
            newSizes.width = jQuery.iResize.resizeElement.resizeOptions.maxRight - newPosition.left;
            if (jQuery.iResize.resizeElement.resizeOptions.ratio) {
                newSizes.height = newSizes.width * jQuery.iResize.resizeElement.resizeOptions.ratio;
            }

        }

        var newDimensions = false;
        if (jQuery.iResize.resizeElement.resizeOptions.onResize) {
            newDimensions = jQuery.iResize.resizeElement.resizeOptions.onResize.apply( jQuery.iResize.resizeElement, [ newSizes, newPosition ] );
            if (newDimensions) {
                if (newDimensions.sizes) {
                    jQuery.extend(newSizes, newDimensions.sizes);
                }

                if (newDimensions.position) {
                    jQuery.extend(newPosition, newDimensions.position);
                }
            }
        }
        elS = jQuery.iResize.resizeElement.style;
        elS.left = newPosition.left + 'px';
        elS.top = newPosition.top + 'px';
        elS.width = newSizes.width + 'px';
        elS.height = newSizes.height + 'px';

        return false;
    },
    /**
     * Builds the resizable
     */
    build: function(options) {
        if (!options || !options.handlers || options.handlers.constructor != Object) {
            return;
        }

        return this.each(
            function() {
                var el = this;
                el.resizeOptions = options;
                el.resizeOptions.minWidth = options.minWidth || 10;
                el.resizeOptions.minHeight = options.minHeight || 10;
                el.resizeOptions.maxWidth = options.maxWidth || 3000;
                el.resizeOptions.maxHeight = options.maxHeight || 3000;
                el.resizeOptions.minTop = options.minTop || -1000;
                el.resizeOptions.minLeft = options.minLeft || -1000;
                el.resizeOptions.maxRight = options.maxRight || 3000;
                el.resizeOptions.maxBottom = options.maxBottom || 3000;
                elPosition = jQuery(el).css('position');
                if (!(elPosition == 'relative' || elPosition == 'absolute')) {
                    el.style.position = 'relative';
                }

                directions = /n|ne|e|se|s|sw|w|nw/g;
                for (i in el.resizeOptions.handlers) {
                    if (i.toLowerCase().match(directions) != null) {
                        if (el.resizeOptions.handlers[i].constructor == String) {
                            handle = jQuery(el.resizeOptions.handlers[i]);
                            if (handle.size() > 0) {
                                el.resizeOptions.handlers[i] = handle.get(0);
                            }
                        }

                        if (el.resizeOptions.handlers[i].tagName) {
                            el.resizeOptions.handlers[i].resizeElement = el;
                            el.resizeOptions.handlers[i].resizeDirection = i;
                            jQuery(el.resizeOptions.handlers[i]).bind('mousedown', jQuery.iResize.start);
                        }
                    }
                }

                if (el.resizeOptions.dragHandle) {
                    if (typeof el.resizeOptions.dragHandle === 'string') {
                        handleEl = jQuery(el.resizeOptions.dragHandle);
                        if (handleEl.size() > 0) {
                            handleEl.each(function() {
                                this.dragEl = el;
                            });
                            handleEl.bind('mousedown', jQuery.iResize.startDrag);
                        }
                    } else if (el.resizeOptions.dragHandle == true) {
                        jQuery(this).bind('mousedown', jQuery.iResize.startDrag);
                    }
                }
            }
        );
    },
    /**
     * Destroys the resizable
     */
    destroy: function() {
        return this.each(
            function() {
                var el = this;

                // Unbind the handlers
                for (i in el.resizeOptions.handlers) {
                    el.resizeOptions.handlers[i].resizeElement = null;
                    el.resizeOptions.handlers[i].resizeDirection = null;
                    jQuery(el.resizeOptions.handlers[i]).unbind('mousedown', jQuery.iResize.start);
                }

                // Remove the draghandle
                if (el.resizeOptions.dragHandle) {
                    if (typeof el.resizeOptions.dragHandle === 'string') {
                        handle = jQuery(el.resizeOptions.dragHandle);
                        if (handle.size() > 0) {
                            handle.unbind('mousedown', jQuery.iResize.startDrag);
                        }
                    } else if (el.resizeOptions.dragHandle == true) {
                        jQuery(this).unbind('mousedown', jQuery.iResize.startDrag);
                    }
                }

                // Reset the options
                el.resizeOptions = null;
            }
        );
    }
};


jQuery.fn.extend ({
    /**
     * Create a resizable element with a number of advanced options including callback, dragging
     *
     * @name Resizable
     * @description Create a resizable element with a number of advanced options including callback, dragging
     * @param Hash hash A hash of parameters. All parameters are optional.
     * @option Hash handlers hash with keys for each resize direction (e, es, s, sw, w, nw, n) and value string selection
     * @option Integer minWidth (optional) the minimum width that element can be resized to
     * @option Integer maxWidth (optional) the maximum width that element can be resized to
     * @option Integer minHeight (optional) the minimum height that element can be resized to
     * @option Integer maxHeight (optional) the maximum height that element can be resized to
     * @option Integer minTop (optional) the minmum top position to wich element can be moved to
     * @option Integer minLeft (optional) the minmum left position to wich element can be moved to
     * @option Integer maxRight (optional) the maximum right position to wich element can be moved to
     * @option Integer maxBottom (optional) the maximum bottom position to wich element can be moved to
     * @option Float ratio (optional) the ratio between width and height to constrain elements sizes to that ratio
     * @option Mixed dragHandle (optional) true to make the element draggable, string selection for drag handle
     * @option Function onDragStart (optional) A function to be executed whenever the dragging starts
     * @option Function onDragStop (optional) A function to be executed whenever the dragging stops
     * @option Function onDrag (optional) A function to be executed whenever the element is dragged
     * @option Function onStart (optional) A function to be executed whenever the element starts to be resized
     * @option Function onStop (optional) A function to be executed whenever the element stops to be resized
     * @option Function onResize (optional) A function to be executed whenever the element is resized
     * @type jQuery
     * @cat Plugins/Interface
     * @author Stefan Petre
     */
    Resizable: jQuery.iResize.build,
    /**
     * Destroy a resizable
     *
     * @name ResizableDestroy
     * @description Destroy a resizable
     * @type jQuery
     * @cat Plugins/Interface
     * @author Stefan Petre
     */
    ResizableDestroy: jQuery.iResize.destroy
});


jQuery.selectHelper = null;
jQuery.selectKeyHelper = false;
jQuery.selectdrug = null;
jQuery.selectCurrent = [];	// For current selection
jQuery.selectKeyDown = function(e) {
    var pressedKey = e.charCode || e.keyCode || -1;
    if (pressedKey == 17 || pressedKey == 16) {
        jQuery.selectKeyHelper = true;
    }
};
jQuery.selectKeyUp = function(e) {
    jQuery.selectKeyHelper = false;
};
jQuery.selectstart = function(e) {
    this.f.pointer = jQuery.iUtil.getPointer(e);
    this.f.pos = jQuery.extend(
        jQuery.iUtil.getPosition(this),
        jQuery.iUtil.getSize(this)
    );

    this.f.scr = jQuery.iUtil.getScroll(this);
    this.f.pointer.x -= this.f.pos.x;
    this.f.pointer.y -= this.f.pos.y;
    jQuery(this).append(jQuery.selectHelper.get(0));
    if (this.f.hc)
        jQuery.selectHelper.addClass(this.f.hc).css('display','block');
    jQuery.selectHelper.css(
        {
            display: 'block',
            width: '0px',
            height: '0px'
        }
    );
    if (this.f.o) {
        jQuery.selectHelper.css('opacity', this.f.o);
    }

    jQuery.selectdrug = this;
    jQuery.selectedone = false;
    jQuery.selectCurrent = [];	// For current selection state
    this.f.el.each(
        function ()
        {
            this.pos = {
                x: this.offsetLeft + (this.currentStyle && !jQuery.browser.opera ?parseInt(this.currentStyle.borderLeftWidth)||0:0) + (jQuery.selectdrug.scrollLeft||0),
                y: this.offsetTop + (this.currentStyle && !jQuery.browser.opera ?parseInt(this.currentStyle.borderTopWidth)||0:0) + (jQuery.selectdrug.scrollTop||0),
                wb: this.offsetWidth,
                hb: this.offsetHeight
            };
            if (this.s == true) {
                if (jQuery.selectKeyHelper == false) {
                    this.s = false;
                    jQuery(this).removeClass(jQuery.selectdrug.f.sc);
                } else {
                    jQuery.selectedone = true;

                    // Save current state
                    jQuery.selectCurrent[jQuery.selectCurrent.length] = jQuery.attr(this,'id');
                }
            }
        }
    );
    jQuery.selectcheck.apply(this, [e]);
    jQuery(document)
        .bind('mousemove', jQuery.selectcheck)
        .bind('mouseup', jQuery.selectstop);
    return false;
};
jQuery.selectcheck = function(e)
{
    if(!jQuery.selectdrug)
        return;
    jQuery.selectcheckApply.apply(jQuery.selectdrug, [e]);
};
jQuery.selectcheckApply = function(e)
{
    if(!jQuery.selectdrug)
        return;
    var pointer = jQuery.iUtil.getPointer(e);

    var scr = jQuery.iUtil.getScroll(jQuery.selectdrug);
    pointer.x += scr.l - this.f.scr.l - this.f.pos.x;
    pointer.y += scr.t - this.f.scr.t - this.f.pos.y;

    var sx = Math.min(pointer.x, this.f.pointer.x);
    var sw = Math.min(Math.abs(pointer.x - this.f.pointer.x), Math.abs(this.f.scr.w - sx));
    var sy = Math.min(pointer.y, this.f.pointer.y);
    var sh = Math.min(Math.abs(pointer.y - this.f.pointer.y), Math.abs(this.f.scr.h - sy));
    if (this.scrollTop > 0 && pointer.y - 20 < this.scrollTop) {
        var diff = Math.min(scr.t, 10);
        sy -= diff;
        sh += diff;
        this.scrollTop -= diff;
    } else if (this.scrollTop+ this.f.pos.h < this.f.scr.h && pointer.y + 20 > this.scrollTop + this.f.pos.h) {
        var diff = Math.min(this.f.scr.h - this.scrollTop, 10);
        this.scrollTop += diff;
        if (this.scrollTop != scr.t)
            sh += diff;
    }
    if (this.scrollLeft > 0 && pointer.x - 20 < this.scrollLeft) {
        var diff = Math.min(scr.l, 10);
        sx -= diff;
        sw += diff;
        this.scrollLeft -= diff;
    } else if (this.scrollLeft+ this.f.pos.w < this.f.scr.w && pointer.x + 20 > this.scrollLeft + this.f.pos.w) {
        var diff = Math.min(this.f.scr.w - this.scrollLeft, 10);
        this.scrollLeft += diff;
        if (this.scrollLeft != scr.l)
            sw += diff;
    }
    jQuery.selectHelper.css(
        {
            left:	sx + 'px',
            top:	sy + 'px',
            width:	sw + 'px',
            height:	sh + 'px'
        }
    );
    jQuery.selectHelper.l = sx + this.f.scr.l;
    jQuery.selectHelper.t = sy + this.f.scr.t;
    jQuery.selectHelper.r = jQuery.selectHelper.l + sw;
    jQuery.selectHelper.b = jQuery.selectHelper.t + sh;
    jQuery.selectedone = false;
    this.f.el.each(
        function () {
            // Locate the current element in the current selection
            iIndex = jQuery.selectCurrent.indexOf(jQuery.attr(this, 'id'));
            // In case we are currently OVER an item
            if (
                ! ( this.pos.x > jQuery.selectHelper.r
                || (this.pos.x + this.pos.wb) < jQuery.selectHelper.l
                || this.pos.y > jQuery.selectHelper.b
                || (this.pos.y + this.pos.hb) < jQuery.selectHelper.t
                )
            )
            {
                jQuery.selectedone = true;
                if (this.s != true) {
                    this.s = true;
                    jQuery(this).addClass(jQuery.selectdrug.f.sc);
                }

                // Check to see if this item was previously selected, if so, unselect it
                if (iIndex != -1) {
                    this.s = false;
                    jQuery(this).removeClass(jQuery.selectdrug.f.sc);
                }
            } else if (
                (this.s == true) &&
                (iIndex == -1)
            ) {
                // If the item was marked as selected, but it was not selected when you started dragging unselect it.
                this.s = false;
                jQuery(this).removeClass(jQuery.selectdrug.f.sc);
            } else if (
                (!this.s) &&
                (jQuery.selectKeyHelper == true) &&
                (iIndex != -1)
            ) {
                // Reselect the item if:
                // - we ARE multiselecting,
                // - dragged over an allready selected object (so it got unselected)
                // - But then dragged the selection out of it again.
                this.s = true;
                jQuery(this).addClass(jQuery.selectdrug.f.sc);
            }
        }
    );
    return false;
};
jQuery.selectstop = function(e)
{
    if(!jQuery.selectdrug)
        return;
    jQuery.selectstopApply.apply(jQuery.selectdrug, [e]);
};
jQuery.selectstopApply = function(e)
{
    jQuery(document)
        .unbind('mousemove', jQuery.selectcheck)
        .unbind('mouseup', jQuery.selectstop);
    if(!jQuery.selectdrug)
        return;
    jQuery.selectHelper.css('display','none');
    if (this.f.hc)
        jQuery.selectHelper.removeClass(this.f.hc);
    jQuery.selectdrug = false;
    jQuery('body').append(jQuery.selectHelper.get(0));
    //
    // In case we have selected some new items..
    if (jQuery.selectedone == true) {
        if (this.f.onselect)
            this.f.onselect(jQuery.Selectserialize(jQuery.attr(this,'id')));
    } else {
        if (this.f.onselectstop)
            this.f.onselectstop(jQuery.Selectserialize(jQuery.attr(this,'id')));
    }
    // Reset current selection
    jQuery.selectCurrent = [];
};

jQuery.Selectserialize = function(s)
{
    var h = '';
    var o = [];
    if (a = jQuery('#' + s)) {
        a.get(0).f.el.each(
            function ()
            {
                if (this.s == true) {
                    if (h.length > 0) {
                        h += '&';
                    }
                    h += s + '[]=' + jQuery.attr(this,'id');
                    o[o.length] = jQuery.attr(this,'id');
                }
            }
        );
    }
    return {hash:h, o:o};
};
jQuery.fn.Selectable = function(o)
{
    if (!jQuery.selectHelper) {
        jQuery('body',document).append('<div id="selectHelper"></div>').bind('keydown', jQuery.selectKeyDown).bind('keyup', jQuery.selectKeyUp);
        jQuery.selectHelper = jQuery('#selectHelper');
        jQuery.selectHelper.css(
            {
                position:	'absolute',
                display:	'none'
            }
        );

        if (window.event) {
            jQuery('body',document).bind('keydown', jQuery.selectKeyDown).bind('keyup', jQuery.selectKeyUp);
        } else {
            jQuery(document).bind('keydown', jQuery.selectKeyDown).bind('keyup', jQuery.selectKeyUp);
        }
    }

    if (!o) {
        o = {};
    }
    return this.each(
        function()
        {
            if (this.isSelectable)
                return;
            this.isSelectable = true;
            this.f = {
                a : o.accept,
                o : o.opacity ? parseFloat(o.opacity) : false,
                sc : o.selectedclass ? o.selectedclass : false,
                hc : o.helperclass ? o.helperclass : false,
                onselect : o.onselect ? o.onselect : false,
                onselectstop : o.onselectstop ? o.onselectstop : false
            };
            this.f.el = jQuery('.' + o.accept);
            jQuery(this).bind('mousedown', jQuery.selectstart).css('position', 'relative');
        }
    );
};



jQuery.iSlider = {
    tabindex : 1,
    set : function (values)
    {
        var values = values;
        return this.each(
            function()
            {
                this.slideCfg.sliders.each(
                    function (key)
                    {
                        jQuery.iSlider.dragmoveBy(this,values[key]);
                    }
                );
            }
        );
    },

    get : function()
    {
        var values = [];
        this.each(
            function(slider)
            {
                if (this.isSlider) {
                    values[slider] = [];
                    var elm = this;
                    var sizes = jQuery.iUtil.getSize(this);
                    this.slideCfg.sliders.each(
                        function (key)
                        {
                            var x = this.offsetLeft;
                            var y = this.offsetTop;
                            xproc = parseInt(x * 100 / (sizes.w - this.offsetWidth));
                            yproc = parseInt(y * 100 / (sizes.h - this.offsetHeight));
                            values[slider][key] = [xproc||0, yproc||0, x||0, y||0];
                        }
                    );
                }
            }
        );
        return values;
    },

    modifyContainer : function (elm)
    {
        elm.dragCfg.containerMaxx = elm.dragCfg.cont.w - elm.dragCfg.oC.wb;
        elm.dragCfg.containerMaxy = elm.dragCfg.cont.h - elm.dragCfg.oC.hb;
        if (elm.SliderContainer.slideCfg.restricted ) {
            next = elm.SliderContainer.slideCfg.sliders.get(elm.SliderIteration+1);
            if (next) {
                elm.dragCfg.cont.w = (parseInt(jQuery(next).css('left'))||0) + elm.dragCfg.oC.wb;
                elm.dragCfg.cont.h = (parseInt(jQuery(next).css('top'))||0) + elm.dragCfg.oC.hb;
            }
            prev = elm.SliderContainer.slideCfg.sliders.get(elm.SliderIteration-1);
            if (prev) {
                var prevLeft = parseInt(jQuery(prev).css('left'))||0;
                var prevTop = parseInt(jQuery(prev).css('left'))||0;
                elm.dragCfg.cont.x += prevLeft;
                elm.dragCfg.cont.y += prevTop;
                elm.dragCfg.cont.w -= prevLeft;
                elm.dragCfg.cont.h -= prevTop;
            }
        }
        elm.dragCfg.maxx = elm.dragCfg.cont.w - elm.dragCfg.oC.wb;
        elm.dragCfg.maxy = elm.dragCfg.cont.h - elm.dragCfg.oC.hb;
        if(elm.dragCfg.fractions) {
            elm.dragCfg.gx = ((elm.dragCfg.cont.w - elm.dragCfg.oC.wb)/elm.dragCfg.fractions) || 1;
            elm.dragCfg.gy = ((elm.dragCfg.cont.h - elm.dragCfg.oC.hb)/elm.dragCfg.fractions) || 1;
            elm.dragCfg.fracW = elm.dragCfg.maxx / elm.dragCfg.fractions;
            elm.dragCfg.fracH = elm.dragCfg.maxy / elm.dragCfg.fractions;
        }

        elm.dragCfg.cont.dx = elm.dragCfg.cont.x - elm.dragCfg.oR.x;
        elm.dragCfg.cont.dy = elm.dragCfg.cont.y - elm.dragCfg.oR.y;

        jQuery.iDrag.helper.css('cursor', 'default');
    },

    onSlide : function(elm, x, y)
    {
        if (elm.dragCfg.fractions) {
            xfrac = parseInt(x/elm.dragCfg.fracW);
            xproc = xfrac * 100 / elm.dragCfg.fractions;
            yfrac = parseInt(y/elm.dragCfg.fracH);
            yproc = yfrac * 100 / elm.dragCfg.fractions;
        } else {
            xproc = parseInt(x * 100 / elm.dragCfg.containerMaxx);
            yproc = parseInt(y * 100 / elm.dragCfg.containerMaxy);
        }
        elm.dragCfg.lastSi = [xproc||0, yproc||0, x||0, y||0];
        if (elm.dragCfg.onSlide)
            elm.dragCfg.onSlide.apply(elm, elm.dragCfg.lastSi);
    },

    dragmoveByKey : function (event)
    {
        pressedKey = event.charCode || event.keyCode || -1;

        switch (pressedKey)
        {
            //end
            case 35:
                jQuery.iSlider.dragmoveBy(this.dragElem, [2000, 2000] );
                break;
            //home
            case 36:
                jQuery.iSlider.dragmoveBy(this.dragElem, [-2000, -2000] );
                break;
            //left
            case 37:
                jQuery.iSlider.dragmoveBy(this.dragElem, [-this.dragElem.dragCfg.gx||-1, 0] );
                break;
            //up
            case 38:
                jQuery.iSlider.dragmoveBy(this.dragElem, [0, -this.dragElem.dragCfg.gy||-1] );
                break;
            //right
            case 39:
                jQuery.iSlider.dragmoveBy(this.dragElem, [this.dragElem.dragCfg.gx||1, 0] );
                break;
            //down;
            case 40:
                jQuery.iDrag.dragmoveBy(this.dragElem, [0, this.dragElem.dragCfg.gy||1] );
                break;
        }
    },

    dragmoveBy : function (elm, position)
    {
        if (!elm.dragCfg) {
            return;
        }

        elm.dragCfg.oC = jQuery.extend(
            jQuery.iUtil.getPosition(elm),
            jQuery.iUtil.getSize(elm)
        );

        elm.dragCfg.oR = {
            x : parseInt(jQuery.css(elm, 'left'))||0,
            y : parseInt(jQuery.css(elm, 'top'))||0
        };

        elm.dragCfg.oP = jQuery.css(elm, 'position');
        if (elm.dragCfg.oP != 'relative' && elm.dragCfg.oP != 'absolute') {
            elm.style.position = 'relative';
        }

        jQuery.iDrag.getContainment(elm);
        jQuery.iSlider.modifyContainer(elm);

        dx = parseInt(position[0]) || 0;
        dy = parseInt(position[1]) || 0;

        nx = elm.dragCfg.oR.x + dx;
        ny = elm.dragCfg.oR.y + dy;
        if(elm.dragCfg.fractions) {
            newCoords = jQuery.iDrag.snapToGrid.apply(elm, [nx, ny, dx, dy]);
            if (newCoords.constructor == Object) {
                dx = newCoords.dx;
                dy = newCoords.dy;
            }
            nx = elm.dragCfg.oR.x + dx;
            ny = elm.dragCfg.oR.y + dy;
        }

        newCoords = jQuery.iDrag.fitToContainer.apply(elm, [nx, ny, dx, dy]);
        if (newCoords && newCoords.constructor == Object) {
            dx = newCoords.dx;
            dy = newCoords.dy;
        }

        nx = elm.dragCfg.oR.x + dx;
        ny = elm.dragCfg.oR.y + dy;

        if (elm.dragCfg.si && (elm.dragCfg.onSlide || elm.dragCfg.onChange)) {
            jQuery.iSlider.onSlide(elm, nx, ny);
        }
        nx = !elm.dragCfg.axis || elm.dragCfg.axis == 'horizontally' ? nx : elm.dragCfg.oR.x||0;
        ny = !elm.dragCfg.axis || elm.dragCfg.axis == 'vertically' ? ny : elm.dragCfg.oR.y||0;
        elm.style.left = nx + 'px';
        elm.style.top = ny + 'px';
    },

    build : function(o) {
        return this.each(
            function()
            {
                if (this.isSlider == true || !o.accept || !jQuery.iUtil || !jQuery.iDrag || !jQuery.iDrop){
                    return;
                }
                toDrag = jQuery(o.accept, this);
                if (toDrag.size() == 0) {
                    return;
                }
                var params = {
                    containment: 'parent',
                    si : true,
                    onSlide : o.onSlide && o.onSlide.constructor == Function ? o.onSlide : null,
                    onChange : o.onChange && o.onChange.constructor == Function ? o.onChange : null,
                    handle: this,
                    opacity: o.opacity||false
                };
                if (o.fractions && parseInt(o.fractions)) {
                    params.fractions = parseInt(o.fractions)||1;
                    params.fractions = params.fractions > 0 ? params.fractions : 1;
                }
                if (toDrag.size() == 1)
                    toDrag.Draggable(params);
                else {
                    jQuery(toDrag.get(0)).Draggable(params);
                    params.handle = null;
                    toDrag.Draggable(params);
                }
                toDrag.keydown(jQuery.iSlider.dragmoveByKey);
                toDrag.attr('tabindex',jQuery.iSlider.tabindex++);

                this.isSlider = true;
                this.slideCfg = {};
                this.slideCfg.onslide = params.onslide;
                this.slideCfg.fractions = params.fractions;
                this.slideCfg.sliders = toDrag;
                this.slideCfg.restricted = o.restricted ? true : false;
                sliderEl = this;
                sliderEl.slideCfg.sliders.each(
                    function(nr)
                    {
                        this.SliderIteration = nr;
                        this.SliderContainer = sliderEl;
                    }
                );
                if (o.values && o.values.constructor == Array) {
                    for (i = o.values.length -1; i>=0;i--) {
                        if (o.values[i].constructor == Array && o.values[i].length == 2) {
                            el = this.slideCfg.sliders.get(i);
                            if (el.tagName) {
                                jQuery.iSlider.dragmoveBy(el, o.values[i]);
                            }
                        }
                    }
                }
            }
        );
    }
};
jQuery.fn.extend(
    {
        /**
         * Create a slider width options
         *
         * @name Slider
         * @description Create a slider width options
         * @param Hash hash A hash of parameters. All parameters are optional.
         * @option Mixed accepts string to select slider indicators or DOMElement slider indicator
         * @option Integer factions (optional) number of sgments to divide and snap slider
         * @option Function onSlide (optional) A function to be executed whenever slider indicator it is moved
         * @option Function onChanged (optional) A function to be executed whenever slider indicator was moved
         * @option Array values (optional) Initial values for slider indicators
         * @option Boolean restricted (optional) if true the slider indicator can not be moved beyond adjacent indicators
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        Slider : jQuery.iSlider.build,
        /**
         * Set value/position for slider indicators
         *
         * @name SliderSetValues
         * @description Set value/position for slider indicators
         * @param Array values array width values for each indicator
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        SliderSetValues : jQuery.iSlider.set,
        /**
         * Get value/position for slider indicators
         *
         * @name SliderSetValues
         * @description Get value/position for slider indicators
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        SliderGetValues : jQuery.iSlider.get
    }
);



jQuery.islideshow = {
    slideshows: [],
    gonext : function()
    {
        this.blur();
        slideshow = this.parentNode;
        id = jQuery.attr(slideshow, 'id');
        if (jQuery.islideshow.slideshows[id] != null) {
            window.clearInterval(jQuery.islideshow.slideshows[id]);
        }
        slide = slideshow.ss.currentslide + 1;
        if (slideshow.ss.images.length < slide) {
            slide = 1;
        }
        images = jQuery('img', slideshow.ss.holder);
        slideshow.ss.currentslide = slide;
        if (images.size() > 0) {
            images.fadeOut(
                slideshow.ss.fadeDuration,
                jQuery.islideshow.showImage
            );
        }
    },
    goprev : function()
    {
        this.blur();
        slideshow = this.parentNode;
        id = jQuery.attr(slideshow, 'id');
        if (jQuery.islideshow.slideshows[id] != null) {
            window.clearInterval(jQuery.islideshow.slideshows[id]);
        }
        slide = slideshow.ss.currentslide - 1;
        images = jQuery('img', slideshow.ss.holder);
        if (slide < 1) {
            slide = slideshow.ss.images.length ;
        }
        slideshow.ss.currentslide = slide;
        if (images.size() > 0) {
            images.fadeOut(
                slideshow.ss.fadeDuration,
                jQuery.islideshow.showImage
            );
        }
    },
    timer : function (c)
    {
        slideshow = document.getElementById(c);
        if (slideshow.ss.random) {
            slide = slideshow.ss.currentslide;
            while(slide == slideshow.ss.currentslide) {
                slide = 1 + parseInt(Math.random() * slideshow.ss.images.length);
            }
        } else {
            slide = slideshow.ss.currentslide + 1;
            if (slideshow.ss.images.length < slide) {
                slide = 1;
            }
        }
        images = jQuery('img', slideshow.ss.holder);
        slideshow.ss.currentslide = slide;
        if (images.size() > 0) {
            images.fadeOut(
                slideshow.ss.fadeDuration,
                jQuery.islideshow.showImage
            );
        }
    },
    go : function(o)
    {
        var slideshow;
        if (o && o.constructor == Object) {
            if (o.loader) {
                slideshow = document.getElementById(o.loader.slideshow);
                url = window.location.href.split("#");
                o.loader.onload = null;
                if (url.length == 2) {
                    slide = parseInt(url[1]);
                    show = url[1].replace(slide,'');
                    if (jQuery.attr(slideshow,'id') != show) {
                        slide = 1;
                    }
                } else {
                    slide = 1;
                }
            }
            if(o.link) {
                o.link.blur();
                slideshow = o.link.parentNode.parentNode;
                id = jQuery.attr(slideshow, 'id');
                if (jQuery.islideshow.slideshows[id] != null) {
                    window.clearInterval(jQuery.islideshow.slideshows[id]);
                }
                url = o.link.href.split("#");
                slide = parseInt(url[1]);
                show = url[1].replace(slide,'');
                if (jQuery.attr(slideshow,'id') != show) {
                    slide = 1;
                }
            }
            if (slideshow.ss.images.length < slide || slide < 1) {
                slide = 1;
            }
            slideshow.ss.currentslide = slide;
            slidePos = jQuery.iUtil.getSize(slideshow);
            slidePad = jQuery.iUtil.getPadding(slideshow);
            slideBor = jQuery.iUtil.getBorder(slideshow);
            if (slideshow.ss.prevslide) {
                slideshow.ss.prevslide.o.css('display', 'none');
            }
            if (slideshow.ss.nextslide) {
                slideshow.ss.nextslide.o.css('display', 'none');
            }

            //center loader
            if (slideshow.ss.loader) {
                y = parseInt(slidePad.t) + parseInt(slideBor.t);
                if (slideshow.ss.slideslinks) {
                    if (slideshow.ss.slideslinks.linksPosition == 'top') {
                        y += slideshow.ss.slideslinks.dimm.hb;
                    } else {
                        slidePos.h -= slideshow.ss.slideslinks.dimm.hb;
                    }
                }
                if (slideshow.ss.slideCaption) {
                    if (slideshow.ss.slideCaption && slideshow.ss.slideCaption.captionPosition == 'top') {
                        y += slideshow.ss.slideCaption.dimm.hb;
                    } else {
                        slidePos.h -= slideshow.ss.slideCaption.dimm.hb;
                    }
                }
                if (!slideshow.ss.loaderWidth) {
                    slideshow.ss.loaderHeight = o.loader ? o.loader.height : (parseInt(slideshow.ss.loader.css('height'))||0);
                    slideshow.ss.loaderWidth = o.loader ? o.loader.width : (parseInt(slideshow.ss.loader.css('width'))||0);
                }

                slideshow.ss.loader.css('top', y + (slidePos.h - slideshow.ss.loaderHeight)/2 + 'px');
                slideshow.ss.loader.css('left', (slidePos.wb - slideshow.ss.loaderWidth)/2 + 'px');
                slideshow.ss.loader.css('display', 'block');
            }

            //getimage
            images = jQuery('img', slideshow.ss.holder);
            if (images.size() > 0) {
                images.fadeOut(
                    slideshow.ss.fadeDuration,
                    jQuery.islideshow.showImage
                );
            } else {
                lnk = jQuery('a', slideshow.ss.slideslinks.o).get(slide-1);
                jQuery(lnk).addClass(slideshow.ss.slideslinks.activeLinkClass);
                var img = new Image();
                img.slideshow = jQuery.attr(slideshow,'id');
                img.slide = slide-1;
                img.src = slideshow.ss.images[slideshow.ss.currentslide-1].src ;
                if (img.complete) {
                    img.onload = null;
                    jQuery.islideshow.display.apply(img);
                } else {
                    img.onload = jQuery.islideshow.display;
                }
                //slideshow.ss.holder.html('<img src="' + slideshow.ss.images[slide-1].src + '" />');
                if (slideshow.ss.slideCaption) {
                    slideshow.ss.slideCaption.o.html(slideshow.ss.images[slide-1].caption);
                }
                //jQuery('img', slideshow.ss.holder).bind('load',jQuery.slideshowDisplay);
            }
        }
    },
    showImage : function()
    {
        slideshow = this.parentNode.parentNode;
        slideshow.ss.holder.css('display','none');
        if (slideshow.ss.slideslinks.activeLinkClass) {
            lnk = jQuery('a', slideshow.ss.slideslinks.o).removeClass(slideshow.ss.slideslinks.activeLinkClass).get(slideshow.ss.currentslide - 1);
            jQuery(lnk).addClass(slideshow.ss.slideslinks.activeLinkClass);
        }
        //slideshow.ss.holder.html('<img src="' + slideshow.ss.images[slideshow.ss.currentslide - 1].src + '" />');

        var img = new Image();
        img.slideshow = jQuery.attr(slideshow,'id');
        img.slide = slideshow.ss.currentslide - 1;
        img.src = slideshow.ss.images[slideshow.ss.currentslide - 1].src ;
        if (img.complete) {
            img.onload = null;
            jQuery.islideshow.display.apply(img);
        } else {
            img.onload = jQuery.islideshow.display;
        }
        if (slideshow.ss.slideCaption) {
            slideshow.ss.slideCaption.o.html(slideshow.ss.images[slideshow.ss.currentslide-1].caption);
        }
        //jQuery('img', slideshow.ss.holder).bind('load',jQuery.slideshowDisplay);
    },
    display : function ()
    {
        slideshow = document.getElementById(this.slideshow);
        if (slideshow.ss.prevslide) {
            slideshow.ss.prevslide.o.css('display', 'none');
        }
        if (slideshow.ss.nextslide) {
            slideshow.ss.nextslide.o.css('display', 'none');
        }
        slidePos = jQuery.iUtil.getSize(slideshow);
        y = 0;
        if (slideshow.ss.slideslinks) {
            if (slideshow.ss.slideslinks.linksPosition == 'top') {
                y += slideshow.ss.slideslinks.dimm.hb;
            } else {
                slidePos.h -= slideshow.ss.slideslinks.dimm.hb;
            }
        }
        if (slideshow.ss.slideCaption) {
            if (slideshow.ss.slideCaption && slideshow.ss.slideCaption.captionPosition == 'top') {
                y += slideshow.ss.slideCaption.dimm.hb;
            } else {
                slidePos.h -= slideshow.ss.slideCaption.dimm.hb;
            }
        }
        par = jQuery('.slideshowHolder', slideshow);
        y = y + (slidePos.h - this.height)/2 ;
        x = (slidePos.wb - this.width)/2;
        slideshow.ss.holder.css('top', y + 'px').css('left', x + 'px').html('<img src="' + this.src + '" />');
        slideshow.ss.holder.fadeIn(slideshow.ss.fadeDuration);
        nextslide = slideshow.ss.currentslide + 1;
        if (nextslide > slideshow.ss.images.length) {
            nextslide = 1;
        }
        prevslide = slideshow.ss.currentslide - 1;
        if (prevslide < 1) {
            prevslide = slideshow.ss.images.length;
        }
        slideshow.ss.nextslide.o
            .css('display','block')
            .css('top', y + 'px')
            .css('left', x + 2 * this.width/3 + 'px')
            .css('width', this.width/3 + 'px')
            .css('height', this.height + 'px')
            .attr('title', slideshow.ss.images[nextslide-1].caption);
        slideshow.ss.nextslide.o.get(0).href = '#' + nextslide + jQuery.attr(slideshow, 'id');
        slideshow.ss.prevslide.o
            .css('display','block')
            .css('top', y + 'px')
            .css('left', x + 'px')
            .css('width', this.width/3 + 'px')
            .css('height', this.height + 'px')
            .attr('title', slideshow.ss.images[prevslide-1].caption);
        slideshow.ss.prevslide.o.get(0).href = '#' + prevslide + jQuery.attr(slideshow, 'id');
    },
    build : function(o)
    {
        if (!o || !o.container || jQuery.islideshow.slideshows[o.container])
            return;
        var container = jQuery('#' + o.container);
        var el = container.get(0);

        if (el.style.position != 'absolute' && el.style.position != 'relative') {
            el.style.position = 'relative';
        }
        el.style.overflow = 'hidden';
        if (container.size() == 0)
            return;
        el.ss = {};

        el.ss.images = o.images ? o.images : [];
        el.ss.random = o.random && o.random == true || false;
        imgs = el.getElementsByTagName('IMG');
        for(i = 0; i< imgs.length; i++) {
            indic = el.ss.images.length;
            el.ss.images[indic] = {src:imgs[i].src, caption:imgs[i].title||imgs[i].alt||''};
        }

        if (el.ss.images.length == 0) {
            return;
        }

        el.ss.oP = jQuery.extend(
            jQuery.iUtil.getPosition(el),
            jQuery.iUtil.getSize(el)
        );
        el.ss.oPad = jQuery.iUtil.getPadding(el);
        el.ss.oBor = jQuery.iUtil.getBorder(el);
        t = parseInt(el.ss.oPad.t) + parseInt(el.ss.oBor.t);
        b = parseInt(el.ss.oPad.b) + parseInt(el.ss.oBor.b);
        jQuery('img', el).remove();
        el.ss.fadeDuration = o.fadeDuration ? o.fadeDuration : 500;
        if (o.linksPosition || o.linksClass || o.activeLinkClass) {
            el.ss.slideslinks = {};
            container.append('<div class="slideshowLinks"></div>');
            el.ss.slideslinks.o = jQuery('.slideshowLinks', el);
            if (o.linksClass) {
                el.ss.slideslinks.linksClass = o.linksClass;
                el.ss.slideslinks.o.addClass(o.linksClass);
            }
            if (o.activeLinkClass) {
                el.ss.slideslinks.activeLinkClass = o.activeLinkClass;
            }
            el.ss.slideslinks.o.css('position','absolute').css('width', el.ss.oP.w + 'px');
            if (o.linksPosition && o.linksPosition == 'top') {
                el.ss.slideslinks.linksPosition = 'top';
                el.ss.slideslinks.o.css('top',t + 'px');
            } else {
                el.ss.slideslinks.linksPosition = 'bottom';
                el.ss.slideslinks.o.css('bottom',b + 'px');
            }
            el.ss.slideslinks.linksSeparator = o.linksSeparator ? o.linksSeparator : ' ';
            for (var i=0; i<el.ss.images.length; i++) {
                indic = parseInt(i) + 1;
                el.ss.slideslinks.o.append('<a href="#' + indic + o.container + '" class="slideshowLink" title="' + el.ss.images[i].caption + '">' + indic + '</a>' + (indic != el.ss.images.length ? el.ss.slideslinks.linksSeparator : ''));
            }
            jQuery('a', el.ss.slideslinks.o).bind(
                'click',
                function()
                {
                    jQuery.islideshow.go({link:this})
                }
            );
            el.ss.slideslinks.dimm = jQuery.iUtil.getSize(el.ss.slideslinks.o.get(0));
        }
        if (o.captionPosition || o.captionClass) {
            el.ss.slideCaption = {};
            container.append('<div class="slideshowCaption">&nbsp;</div>');
            el.ss.slideCaption.o = jQuery('.slideshowCaption', el);
            if (o.captionClass) {
                el.ss.slideCaption.captionClass = o.captionClass;
                el.ss.slideCaption.o.addClass(o.captionClass);
            }
            el.ss.slideCaption.o.css('position','absolute').css('width', el.ss.oP.w + 'px');
            if (o.captionPosition&& o.captionPosition == 'top') {
                el.ss.slideCaption.captionPosition = 'top';
                el.ss.slideCaption.o.css('top', (el.ss.slideslinks && el.ss.slideslinks.linksPosition == 'top' ? el.ss.slideslinks.dimm.hb + t : t) + 'px');
            } else {
                el.ss.slideCaption.captionPosition = 'bottom';
                el.ss.slideCaption.o.css('bottom', (el.ss.slideslinks && el.ss.slideslinks.linksPosition == 'bottom' ? el.ss.slideslinks.dimm.hb + b : b) + 'px');
            }
            el.ss.slideCaption.dimm = jQuery.iUtil.getSize(el.ss.slideCaption.o.get(0));
        }

        if (o.nextslideClass) {
            el.ss.nextslide = {nextslideClass:o.nextslideClass};
            container.append('<a href="#2' + o.container + '" class="slideshowNextSlide">&nbsp;</a>');
            el.ss.nextslide.o = jQuery('.slideshowNextSlide', el);
            el.ss.nextslide.o.css('position', 'absolute').css('display', 'none').css('overflow','hidden').css('fontSize', '30px').addClass(el.ss.nextslide.nextslideClass);
            el.ss.nextslide.o.bind('click', jQuery.islideshow.gonext);
        }
        if (o.prevslideClass) {
            el.ss.prevslide= {prevslideClass:o.prevslideClass};
            container.append('<a href="#0' + o.container + '" class="slideshowPrevslide">&nbsp;</a>');
            el.ss.prevslide.o = jQuery('.slideshowPrevslide', el);
            el.ss.prevslide.o.css('position', 'absolute').css('display', 'none').css('overflow','hidden').css('fontSize', '30px').addClass(el.ss.prevslide.prevslideClass);
            el.ss.prevslide.o.bind('click', jQuery.islideshow.goprev);
        }

        container.prepend('<div class="slideshowHolder"></div>');
        el.ss.holder = jQuery('.slideshowHolder', el);
        el.ss.holder.css('position','absolute').css('top','0px').css('left','0px').css('display', 'none');
        if (o.loader) {
            container.prepend('<div class="slideshowLoader" style="display: none;"><img src="' + o.loader + '" /></div>');
            el.ss.loader = jQuery('.slideshowLoader', el);
            el.ss.loader.css('position', 'absolute');
            var img = new Image();
            img.slideshow = o.container;
            img.src = o.loader;
            if (img.complete) {
                img.onload = null;
                jQuery.islideshow.go({loader:img});
            } else {
                img.onload = function()
                {
                    jQuery.islideshow.go({loader:this});
                };
            }
        } else {
            jQuery.islideshow.go({container:el});
        }

        if(o.autoplay) {
            time = parseInt(o.autoplay) * 1000;
        }
        jQuery.islideshow.slideshows[o.container] = o.autoplay ? window.setInterval('jQuery.islideshow.timer(\'' + o.container + '\')', time) : null;
    }
};
jQuery.slideshow = jQuery.islideshow.build;


jQuery.iSort = {
    changed : [],
    collected : {},
    helper : false,
    inFrontOf: null,

    start : function ()
    {
        if (jQuery.iDrag.dragged == null) {
            return;
        }
        var shs, margins,c, cs;

        jQuery.iSort.helper.get(0).className = jQuery.iDrag.dragged.dragCfg.hpc;
        shs = jQuery.iSort.helper.get(0).style;
        shs.display = 'block';
        jQuery.iSort.helper.oC = jQuery.extend(
            jQuery.iUtil.getPosition(jQuery.iSort.helper.get(0)),
            jQuery.iUtil.getSize(jQuery.iSort.helper.get(0))
        );

        shs.width = jQuery.iDrag.dragged.dragCfg.oC.wb + 'px';
        shs.height = jQuery.iDrag.dragged.dragCfg.oC.hb + 'px';
        //shs.cssFloat = jQuery.iDrag.dragged.dragCfg.oF;
        margins = jQuery.iUtil.getMargins(jQuery.iDrag.dragged);
        shs.marginTop = margins.t;
        shs.marginRight = margins.r;
        shs.marginBottom = margins.b;
        shs.marginLeft = margins.l;
        if (jQuery.iDrag.dragged.dragCfg.ghosting == true) {
            c = jQuery.iDrag.dragged.cloneNode(true);
            cs = c.style;
            cs.marginTop = '0px';
            cs.marginRight = '0px';
            cs.marginBottom = '0px';
            cs.marginLeft = '0px';
            cs.display = 'block';
            jQuery.iSort.helper.empty().append(c);
        }
        jQuery(jQuery.iDrag.dragged).after(jQuery.iSort.helper.get(0));
        jQuery.iDrag.dragged.style.display = 'none';
    },

    check : function (e)
    {
        if (!e.dragCfg.so && jQuery.iDrop.overzone.sortable) {
            if (e.dragCfg.onStop)
                e.dragCfg.onStop.apply(dragged);
            jQuery(e).css('position', e.dragCfg.initialPosition || e.dragCfg.oP);
            jQuery(e).DraggableDestroy();
            jQuery(jQuery.iDrop.overzone).SortableAddItem(e);
        }
        jQuery.iSort.helper.removeClass(e.dragCfg.hpc).html('&nbsp;');
        jQuery.iSort.inFrontOf = null;
        var shs = jQuery.iSort.helper.get(0).style;
        shs.display = 'none';
        jQuery.iSort.helper.after(e);
        if (e.dragCfg.fx > 0) {
            jQuery(e).fadeIn(e.dragCfg.fx);
        }
        jQuery('body').append(jQuery.iSort.helper.get(0));
        var ts = [];
        var fnc = false;
        for(var i=0; i<jQuery.iSort.changed.length; i++){
            var iEL = jQuery.iDrop.zones[jQuery.iSort.changed[i]].get(0);
            var id = jQuery.attr(iEL, 'id');
            var ser = jQuery.iSort.serialize(id);
            if (iEL.dropCfg.os != ser.hash) {
                iEL.dropCfg.os = ser.hash;
                if (fnc == false && iEL.dropCfg.onChange) {
                    fnc = iEL.dropCfg.onChange;
                }
                ser.id = id;
                ts[ts.length] = ser;
            }
        }
        jQuery.iSort.changed = [];
        if (fnc != false && ts.length > 0) {
            fnc(ts);
        }
    },

    checkhover : function(e,o)
    {
        if (!jQuery.iDrag.dragged)
            return;
        var cur = false;
        var i = 0;
        if ( e.dropCfg.el.size() > 0) {
            for (i = e.dropCfg.el.size(); i >0; i--) {
                if (e.dropCfg.el.get(i-1) != jQuery.iDrag.dragged) {
                    if (!e.sortCfg.floats) {
                        if (
                            (e.dropCfg.el.get(i-1).pos.y + e.dropCfg.el.get(i-1).pos.hb/2) > jQuery.iDrag.dragged.dragCfg.ny
                        ) {
                            cur = e.dropCfg.el.get(i-1);
                        } else {
                            break;
                        }
                    } else {
                        if (
                            (e.dropCfg.el.get(i-1).pos.x + e.dropCfg.el.get(i-1).pos.wb/2) > jQuery.iDrag.dragged.dragCfg.nx &&
                            (e.dropCfg.el.get(i-1).pos.y + e.dropCfg.el.get(i-1).pos.hb/2) > jQuery.iDrag.dragged.dragCfg.ny
                        ) {
                            cur = e.dropCfg.el.get(i-1);
                        }
                    }
                }
            }
        }
        //helpos = jQuery.iUtil.getPos(jQuery.iSort.helper.get(0));
        if (cur && jQuery.iSort.inFrontOf != cur) {
            jQuery.iSort.inFrontOf = cur;
            jQuery(cur).before(jQuery.iSort.helper.get(0));
        } else if(!cur && (jQuery.iSort.inFrontOf != null || jQuery.iSort.helper.get(0).parentNode != e) ) {
            jQuery.iSort.inFrontOf = null;
            jQuery(e).append(jQuery.iSort.helper.get(0));
        }
        jQuery.iSort.helper.get(0).style.display = 'block';
    },

    measure : function (e)
    {
        if (jQuery.iDrag.dragged == null) {
            return;
        }
        e.dropCfg.el.each (
            function ()
            {
                this.pos = jQuery.extend(
                    jQuery.iUtil.getSizeLite(this),
                    jQuery.iUtil.getPositionLite(this)
                );
            }
        );
    },

    serialize : function(s)
    {
        var i;
        var h = '';
        var o = {};
        if (s) {
            if (jQuery.iSort.collected[s] ) {
                o[s] = [];
                jQuery('#' + s + ' .' + jQuery.iSort.collected[s]).each(
                    function ()
                    {
                        if (h.length > 0) {
                            h += '&';
                        }
                        h += s + '[]=' + jQuery.attr(this,'id');
                        o[s][o[s].length] = jQuery.attr(this,'id');
                    }
                );
            } else {
                for ( a in s) {
                    if (jQuery.iSort.collected[s[a]] ) {
                        o[s[a]] = [];
                        jQuery('#' + s[a] + ' .' + jQuery.iSort.collected[s[a]]).each(
                            function ()
                            {
                                if (h.length > 0) {
                                    h += '&';
                                }
                                h += s[a] + '[]=' + jQuery.attr(this,'id');
                                o[s[a]][o[s[a]].length] = jQuery.attr(this,'id');
                            }
                        );
                    }
                }
            }
        } else {
            for ( i in jQuery.iSort.collected){
                o[i] = [];
                jQuery('#' + i + ' .' + jQuery.iSort.collected[i]).each(
                    function ()
                    {
                        if (h.length > 0) {
                            h += '&';
                        }
                        h += i + '[]=' + jQuery.attr(this,'id');
                        o[i][o[i].length] = jQuery.attr(this,'id');
                    }
                );
            }
        }
        return {hash:h, o:o};
    },

    addItem : function (e)
    {
        if ( !e.childNodes ) {
            return;
        }
        return this.each(
            function ()
            {
                if(!this.sortCfg || !jQuery(e).is('.' +  this.sortCfg.accept))
                    jQuery(e).addClass(this.sortCfg.accept);
                jQuery(e).Draggable(this.sortCfg.dragCfg);
            }
        );
    },

    destroy: function()
    {
        return this.each(
            function()
            {
                jQuery('.' + this.sortCfg.accept).DraggableDestroy();
                jQuery(this).DroppableDestroy();
                this.sortCfg = null;
                this.isSortable = null;
            }
        );
    },

    build : function (o)
    {
        if (o.accept && jQuery.iUtil && jQuery.iDrag && jQuery.iDrop) {
            if (!jQuery.iSort.helper) {
                jQuery('body',document).append('<div id="sortHelper">&nbsp;</div>');
                jQuery.iSort.helper = jQuery('#sortHelper');
                jQuery.iSort.helper.get(0).style.display = 'none';
            }
            this.Droppable(
                {
                    accept :  o.accept,
                    activeclass : o.activeclass ? o.activeclass : false,
                    hoverclass : o.hoverclass ? o.hoverclass : false,
                    helperclass : o.helperclass ? o.helperclass : false,
                    /*onDrop: function (drag, fx)
                     {
                     jQuery.iSort.helper.after(drag);
                     if (fx > 0) {
                     jQuery(drag).fadeIn(fx);
                     }
                     },*/
                    onHover: o.onHover||o.onhover,
                    onOut: o.onOut||o.onout,
                    sortable : true,
                    onChange : 	o.onChange||o.onchange,
                    fx : o.fx ? o.fx : false,
                    ghosting : o.ghosting ? true : false,
                    tolerance: o.tolerance ? o.tolerance : 'intersect'
                }
            );

            return this.each(
                function()
                {
                    var dragCfg = {
                        revert : o.revert? true : false,
                        zindex : 3000,
                        opacity : o.opacity ? parseFloat(o.opacity) : false,
                        hpc : o.helperclass ? o.helperclass : false,
                        fx : o.fx ? o.fx : false,
                        so : true,
                        ghosting : o.ghosting ? true : false,
                        handle: o.handle ? o.handle : null,
                        containment: o.containment ? o.containment : null,
                        onStart : o.onStart && o.onStart.constructor == Function ? o.onStart : false,
                        onDrag : o.onDrag && o.onDrag.constructor == Function ? o.onDrag : false,
                        onStop : o.onStop && o.onStop.constructor == Function ? o.onStop : false,
                        axis : /vertically|horizontally/.test(o.axis) ? o.axis : false,
                        snapDistance : o.snapDistance ? parseInt(o.snapDistance)||0 : false,
                        cursorAt: o.cursorAt ? o.cursorAt : false
                    };
                    jQuery('.' + o.accept, this).Draggable(dragCfg);
                    this.isSortable = true;
                    this.sortCfg = {
                        accept :  o.accept,
                        revert : o.revert? true : false,
                        zindex : 3000,
                        opacity : o.opacity ? parseFloat(o.opacity) : false,
                        hpc : o.helperclass ? o.helperclass : false,
                        fx : o.fx ? o.fx : false,
                        so : true,
                        ghosting : o.ghosting ? true : false,
                        handle: o.handle ? o.handle : null,
                        containment: o.containment ? o.containment : null,
                        floats: o.floats ? true : false,
                        dragCfg : dragCfg
                    }
                }
            );
        }
    }
};

jQuery.fn.extend(
    {
        Sortable : jQuery.iSort.build,
        /**
         * A new item can be added to a sortable by adding it to the DOM and then adding it via
         * SortableAddItem.
         *
         * @name SortableAddItem
         * @param DOMElement elem A DOM Element to add to the sortable list
         * @example $('#sortable1').append('<li id="newitem">new item</li>')
         *                         .SortableAddItem($("#new_item")[0])
         * @type jQuery
         * @cat Plugins/Interface
         */
        SortableAddItem : jQuery.iSort.addItem,
        /**
         * Destroy a sortable
         *
         * @name SortableDestroy
         * @example $('#sortable1').SortableDestroy();
         * @type jQuery
         * @cat Plugins/Interface
         */
        SortableDestroy: jQuery.iSort.destroy
    }
);

/**
 * This function returns the hash and an object (can be used as arguments for $.post) for every
 * sortable in the page or specific sortables. The hash is based on the 'id' attributes of
 * container and items.
 *
 * @params String sortable The id of the sortable to serialize
 * @name $.SortSerialize
 * @type String
 * @cat Plugins/Interface
 */

jQuery.SortSerialize = jQuery.iSort.serialize;



jQuery.iTooltip = {
    current : null,
    focused : false,
    oldTitle : null,
    focus : function(e)
    {
        jQuery.iTooltip.focused = true;
        jQuery.iTooltip.show(e, this, true);
    },
    hidefocused : function(e)
    {
        if (jQuery.iTooltip.current != this)
            return ;
        jQuery.iTooltip.focused = false;
        jQuery.iTooltip.hide(e, this);
    },
    show : function(e, el, focused)
    {
        if (jQuery.iTooltip.current != null)
            return ;
        if (!el) {
            el = this;
        }

        jQuery.iTooltip.current = el;
        pos = jQuery.extend(
            jQuery.iUtil.getPosition(el),
            jQuery.iUtil.getSize(el)
        );
        jEl = jQuery(el);
        title = jEl.attr('title');
        href = jEl.attr('href');
        if (title) {
            jQuery.iTooltip.oldTitle = title;
            jEl.attr('title','');
            jQuery('#tooltipTitle').html(title);
            if (href)
                jQuery('#tooltipURL').html(href.replace('http://', ''));
            else
                jQuery('#tooltipURL').html('');
            helper = jQuery('#tooltipHelper');
            if(el.tooltipCFG.className){
                helper.get(0).className = el.tooltipCFG.className;
            } else {
                helper.get(0).className = '';
            }
            helperSize = jQuery.iUtil.getSize(helper.get(0));
            filteredPosition = focused && el.tooltipCFG.position == 'mouse' ? 'bottom' : el.tooltipCFG.position;

            switch (filteredPosition) {
                case 'top':
                    ny = pos.y - helperSize.hb;
                    nx = pos.x;
                    break;
                case 'left' :
                    ny = pos.y;
                    nx = pos.x - helperSize.wb;
                    break;
                case 'right' :
                    ny = pos.y;
                    nx = pos.x + pos.wb;
                    break;
                case 'mouse' :
                    jQuery('body').bind('mousemove', jQuery.iTooltip.mousemove);
                    pointer = jQuery.iUtil.getPointer(e);
                    ny = pointer.y + 15;
                    nx = pointer.x + 15;
                    break;
                default :
                    ny = pos.y + pos.hb;
                    nx = pos.x;
                    break;
            }
            helper.css(
                {
                    top 	: ny + 'px',
                    left	: nx + 'px'
                }
            );
            if (el.tooltipCFG.delay == false) {
                helper.show();
            } else {
                helper.fadeIn(el.tooltipCFG.delay);
            }
            if (el.tooltipCFG.onShow)
                el.tooltipCFG.onShow.apply(el);
            jEl.bind('mouseout',jQuery.iTooltip.hide)
                .bind('blur',jQuery.iTooltip.hidefocused);
        }
    },
    mousemove : function(e)
    {
        if (jQuery.iTooltip.current == null) {
            jQuery('body').unbind('mousemove', jQuery.iTooltip.mousemove);
            return;
        }
        pointer = jQuery.iUtil.getPointer(e);
        jQuery('#tooltipHelper').css(
            {
                top 	: pointer.y + 15 + 'px',
                left	: pointer.x + 15 + 'px'
            }
        );
    },
    hide : function(e, el)
    {
        var itemEle = jQuery(el.fisheyeCfg.itemsText, this).get(0);
        if (typeof itemEle != 'undefined' && itemEle != null) {
            itemEle.style.display = 'block';
        }
        if (!el) {
            el = this;
        }
        if (jQuery.iTooltip.focused != true && jQuery.iTooltip.current == el) {
            jQuery.iTooltip.current = null;
            jQuery('#tooltipHelper').fadeOut(1);
            jQuery(el)
                .attr('title',jQuery.iTooltip.oldTitle)
                .unbind('mouseout', jQuery.iTooltip.hide)
                .unbind('blur', jQuery.iTooltip.hidefocused);
            if (el.tooltipCFG.onHide)
                el.tooltipCFG.onHide.apply(el);
            jQuery.iTooltip.oldTitle = null;
        }
    },
    build : function(options)
    {
        if (!jQuery.iTooltip.helper)
        {
            jQuery('body').append('<div id="tooltipHelper"><div id="tooltipTitle"></div><div id="tooltipURL"></div></div>');
            jQuery('#tooltipHelper').css(
                {
                    position:	'absolute',
                    zIndex:		3000,
                    display: 	'none'
                }
            );
            jQuery.iTooltip.helper = true;
        }
        return this.each(
            function(){
                if(jQuery.attr(this,'title')) {
                    this.tooltipCFG = {
                        position	: /top|bottom|left|right|mouse/.test(options.position) ? options.position : 'bottom',
                        className	: options.className ? options.className : false,
                        delay		: options.delay ? options.delay : false,
                        onShow		: options.onShow && options.onShow.constructor == Function ? options.onShow : false,
                        onHide		: options.onHide && options.onHide.constructor == Function ? options.onHide : false
                    };
                    var el = jQuery(this);
                    el.bind('mouseover',jQuery.iTooltip.show);
                    el.bind('focus',jQuery.iTooltip.focus);
                }
            }
        );
    }
};

jQuery.fn.ToolTip = jQuery.iTooltip.build;



jQuery.iTTabs =
{
    doTab : function(e)
    {
        pressedKey = e.charCode || e.keyCode || -1;
        if (pressedKey == 9) {
            if (window.event) {
                window.event.cancelBubble = true;
                window.event.returnValue = false;
            } else {
                e.preventDefault();
                e.stopPropagation();
            }
            if (this.createTextRange) {
                document.selection.createRange().text="\t";
                this.onblur = function() { this.focus(); this.onblur = null; };
            } else if (this.setSelectionRange) {
                start = this.selectionStart;
                end = this.selectionEnd;
                this.value = this.value.substring(0, start) + "\t" + this.value.substr(end);
                this.setSelectionRange(start + 1, start + 1);
                this.focus();
            }
            return false;
        }
    },
    destroy : function()
    {
        return this.each(
            function()
            {
                if (this.hasTabsEnabled && this.hasTabsEnabled == true) {
                    jQuery(this).unbind('keydown', jQuery.iTTabs.doTab);
                    this.hasTabsEnabled = false;
                }
            }
        );
    },
    build : function()
    {
        return this.each(
            function()
            {
                if (this.tagName == 'TEXTAREA' && (!this.hasTabsEnabled || this.hasTabsEnabled == false)) {
                    jQuery(this).bind('keydown', jQuery.iTTabs.doTab);
                    this.hasTabsEnabled = true;
                }
            }
        );
    }
};

jQuery.fn.extend (
    {
        /**
         * Enable tabs in textareas
         *
         * @name EnableTabs
         * @description Enable tabs in textareas
         *
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        EnableTabs : jQuery.iTTabs.build,
        /**
         * Disable tabs in textareas
         *
         * @name DisableTabs
         * @description Disable tabs in textareas
         *
         * @type jQuery
         * @cat Plugins/Interface
         * @author Stefan Petre
         */
        DisableTabs : jQuery.iTTabs.destroy
    }
);


jQuery.iUtil = {
    getPosition : function(e)
    {
        var x = 0;
        var y = 0;
        var es = e.style;
        var restoreStyles = false;
        if (jQuery(e).css('display') == 'none') {
            var oldVisibility = es.visibility;
            var oldPosition = es.position;
            restoreStyles = true;
            es.visibility = 'hidden';
            es.display = 'block';
            es.position = 'absolute';
        }
        var el = e;
        while (el){
            x += el.offsetLeft + (el.currentStyle && !jQuery.browser.opera ?parseInt(el.currentStyle.borderLeftWidth)||0:0);
            y += el.offsetTop + (el.currentStyle && !jQuery.browser.opera ?parseInt(el.currentStyle.borderTopWidth)||0:0);
            el = el.offsetParent;
        }
        el = e;
        while (el && el.tagName  && el.tagName.toLowerCase() != 'body')
        {
            x -= el.scrollLeft||0;
            y -= el.scrollTop||0;
            el = el.parentNode;
        }
        if (restoreStyles == true) {
            es.display = 'none';
            es.position = oldPosition;
            es.visibility = oldVisibility;
        }
        return {x:x, y:y};
    },
    getPositionLite : function(el)
    {
        var x = 0, y = 0;
        while(el) {
            x += el.offsetLeft || 0;
            y += el.offsetTop || 0;
            el = el.offsetParent;
        }
        return {x:x, y:y};
    },
    getSize : function(e)
    {
        var w = jQuery.css(e,'width');
        var h = jQuery.css(e,'height');
        var wb = 0;
        var hb = 0;
        var es = e.style;
        if (jQuery(e).css('display') != 'none') {
            wb = e.offsetWidth;
            hb = e.offsetHeight;
        } else {
            var oldVisibility = es.visibility;
            var oldPosition = es.position;
            es.visibility = 'hidden';
            es.display = 'block';
            es.position = 'absolute';
            wb = e.offsetWidth;
            hb = e.offsetHeight;
            es.display = 'none';
            es.position = oldPosition;
            es.visibility = oldVisibility;
        }
        return {w:w, h:h, wb:wb, hb:hb};
    },
    getSizeLite : function(el)
    {
        return {
            wb:el.offsetWidth||0,
            hb:el.offsetHeight||0
        };
    },
    getClient : function(e)
    {
        var h, w, de;
        if (e) {
            w = e.clientWidth;
            h = e.clientHeight;
        } else {
            de = document.documentElement;
            w = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
            h = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight;
        }
        return {w:w,h:h};
    },
    getScroll : function (e)
    {
        var t=0, l=0, w=0, h=0, iw=0, ih=0;
        if (e && e.nodeName.toLowerCase() != 'body') {
            t = e.scrollTop;
            l = e.scrollLeft;
            w = e.scrollWidth;
            h = e.scrollHeight;
            iw = 0;
            ih = 0;
        } else  {
            if (document.documentElement) {
                t = document.documentElement.scrollTop;
                l = document.documentElement.scrollLeft;
                w = document.documentElement.scrollWidth;
                h = document.documentElement.scrollHeight;
            } else if (document.body) {
                t = document.body.scrollTop;
                l = document.body.scrollLeft;
                w = document.body.scrollWidth;
                h = document.body.scrollHeight;
            }
            iw = self.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0;
            ih = self.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0;
        }
        return { t: t, l: l, w: w, h: h, iw: iw, ih: ih };
    },
    getMargins : function(e, toInteger)
    {
        var el = jQuery(e);
        var t = el.css('marginTop') || '';
        var r = el.css('marginRight') || '';
        var b = el.css('marginBottom') || '';
        var l = el.css('marginLeft') || '';
        if (toInteger)
            return {
                t: parseInt(t)||0,
                r: parseInt(r)||0,
                b: parseInt(b)||0,
                l: parseInt(l)
            };
        else
            return {t: t, r: r,	b: b, l: l};
    },
    getPadding : function(e, toInteger)
    {
        var el = jQuery(e);
        var t = el.css('paddingTop') || '';
        var r = el.css('paddingRight') || '';
        var b = el.css('paddingBottom') || '';
        var l = el.css('paddingLeft') || '';
        if (toInteger)
            return {
                t: parseInt(t)||0,
                r: parseInt(r)||0,
                b: parseInt(b)||0,
                l: parseInt(l)
            };
        else
            return {t: t, r: r,	b: b, l: l};
    },
    getBorder : function(e, toInteger)
    {
        var el = jQuery(e);
        var t = el.css('borderTopWidth') || '';
        var r = el.css('borderRightWidth') || '';
        var b = el.css('borderBottomWidth') || '';
        var l = el.css('borderLeftWidth') || '';
        if (toInteger)
            return {
                t: parseInt(t)||0,
                r: parseInt(r)||0,
                b: parseInt(b)||0,
                l: parseInt(l)||0
            };
        else
            return {t: t, r: r,	b: b, l: l};
    },
    getPointer : function(event)
    {
        var x = event.pageX || (event.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft)) || 0;
        var y = event.pageY || (event.clientY + (document.documentElement.scrollTop || document.body.scrollTop)) || 0;
        return {x:x, y:y};
    },
    traverseDOM : function(nodeEl, func)
    {
        func(nodeEl);
        nodeEl = nodeEl.firstChild;
        while(nodeEl){
            jQuery.iUtil.traverseDOM(nodeEl, func);
            nodeEl = nodeEl.nextSibling;
        }
    },
    purgeEvents : function(nodeEl)
    {
        jQuery.iUtil.traverseDOM(
            nodeEl,
            function(el)
            {
                for(var attr in el){
                    if(typeof el[attr] === 'function') {
                        el[attr] = null;
                    }
                }
            }
        );
    },
    centerEl : function(el, axis)
    {
        var clientScroll = jQuery.iUtil.getScroll();
        var windowSize = jQuery.iUtil.getSize(el);
        if (!axis || axis == 'vertically')
            jQuery(el).css(
                {
                    top: clientScroll.t + ((Math.max(clientScroll.h,clientScroll.ih) - clientScroll.t - windowSize.hb)/2) + 'px'
                }
            );
        if (!axis || axis == 'horizontally')
            jQuery(el).css(
                {
                    left:	clientScroll.l + ((Math.max(clientScroll.w,clientScroll.iw) - clientScroll.l - windowSize.wb)/2) + 'px'
                }
            );
    },
    fixPNG : function (el, emptyGIF) {
        var images = jQuery('img[@src*="png"]', el||document), png;
        images.each( function() {
            png = this.src;
            this.src = emptyGIF;
            this.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + png + "')";
        });
    }
};

// Helper function to support older browsers!
[].indexOf || (Array.prototype.indexOf = function(v, n){
    n = (n == null) ? 0 : n;
    var m = this.length;
    for (var i=n; i<m; i++)
        if (this[i] == v)
            return i;
    return -1;
});
(function ($) {
    // Monkey patch jQuery 1.3.1+ css() method to support CSS 'transform'
    // property uniformly across Safari/Chrome/Webkit, Firefox 3.5+, IE 9+, and Opera 11+.
    // 2009-2011 Zachary Johnson www.zachstronaut.com
    // Updated 2011.05.04 (May the fourth be with you!)
    function getTransformProperty(element)
    {
        // Try transform first for forward compatibility
        // In some versions of IE9, it is critical for msTransform to be in
        // this list before MozTranform.
        var properties = ['transform', 'WebkitTransform', 'msTransform', 'MozTransform', 'OTransform'];
        var p;
        while (p = properties.shift())
        {
            if (typeof element.style[p] != 'undefined')
            {
                return p;
            }
        }
        
        // Default to transform also
        return 'transform';
    }
    
    var _propsObj = null;
    
    var proxied = $.fn.css;
    $.fn.css = function (arg, val)
    {
        // Temporary solution for current 1.6.x incompatibility, while
        // preserving 1.3.x compatibility, until I can rewrite using CSS Hooks
        if (_propsObj === null)
        {
            if (typeof $.cssProps != 'undefined')
            {
                _propsObj = $.cssProps;
            }
            else if (typeof $.props != 'undefined')
            {
                _propsObj = $.props;
            }
            else
            {
                _propsObj = {}
            }
        }
        
        // Find the correct browser specific property and setup the mapping using
        // $.props which is used internally by jQuery.attr() when setting CSS
        // properties via either the css(name, value) or css(properties) method.
        // The problem with doing this once outside of css() method is that you
        // need a DOM node to find the right CSS property, and there is some risk
        // that somebody would call the css() method before body has loaded or any
        // DOM-is-ready events have fired.
        if
        (
            typeof _propsObj['transform'] == 'undefined'
            &&
            (
                arg == 'transform'
                ||
                (
                    typeof arg == 'object'
                    && typeof arg['transform'] != 'undefined'
                )
            )
        )
        {
            _propsObj['transform'] = getTransformProperty(this.get(0));
        }
        
        // We force the property mapping here because jQuery.attr() does
        // property mapping with jQuery.props when setting a CSS property,
        // but curCSS() does *not* do property mapping when *getting* a
        // CSS property.  (It probably should since it manually does it
        // for 'float' now anyway... but that'd require more testing.)
        //
        // But, only do the forced mapping if the correct CSS property
        // is not 'transform' and is something else.
        if (_propsObj['transform'] != 'transform')
        {
            // Call in form of css('transform' ...)
            if (arg == 'transform')
            {
                arg = _propsObj['transform'];
                
                // User wants to GET the transform CSS, and in jQuery 1.4.3
                // calls to css() for transforms return a matrix rather than
                // the actual string specified by the user... avoid that
                // behavior and return the string by calling jQuery.style()
                // directly
                if (typeof val == 'undefined' && jQuery.style)
                {
                    return jQuery.style(this.get(0), arg);
                }
            }

            // Call in form of css({'transform': ...})
            else if
            (
                typeof arg == 'object'
                && typeof arg['transform'] != 'undefined'
            )
            {
                arg[_propsObj['transform']] = arg['transform'];
                delete arg['transform'];
            }
        }
        
        return proxied.apply(this, arguments);
    };
})(jQuery);
function Base() {
};
Base.version = "1.0.1";
Base.prototype = {
	extend: function(source, value) {
		var extend = Base.prototype.extend;
		if (arguments.length == 2) {
			var ancestor = this[source];
			// overriding?
			if ((ancestor instanceof Function) && (value instanceof Function) &&
				ancestor.valueOf() != value.valueOf() && /\binherit\b/.test(value)) {
				var method = value;
				value = function() {
					var previous = this.inherit;
					this.inherit = ancestor;
					var returnValue = method.apply(this, arguments);
					this.inherit = previous;
					return returnValue;
				};
				// point to the underlying method
				value.valueOf = function() {
					return method;
				};
				value.toString = function() {
					return String(method);
				};
			}
			return this[source] = value;
		} else if (source) {
			var _prototype = {toSource: null};
			// do the "toString" and other methods manually
			var _protected = ["toString", "valueOf"];
			// if we are prototyping then include the constructor
			if (Base._prototyping) _protected[2] = "constructor";
			for (var i = 0; (name = _protected[i]); i++) {
				if (source[name] != _prototype[name]) {
					extend.call(this, name, source[name]);
				}
			}
			// copy each of the source object's properties to this object
			for (var name in source) {
				if (!_prototype[name]) {
					extend.call(this, name, source[name]);
				}
			}
		}
		return this;
	},

	inherit: function() {
		// call this method from any other method to invoke that method's ancestor
	}
};

Base.extend = function(_instance, _static) {	
	var extend = Base.prototype.extend;
	if (!_instance) _instance = {};
	// create the constructor
	if (_instance.constructor == Object) {
		_instance.constructor = new Function;
	}
	// build the prototype
	Base._prototyping = true;
	var _prototype = new this;
	extend.call(_prototype, _instance);
	var constructor = _prototype.constructor;
	_prototype.constructor = this;
	delete Base._prototyping;
	// create the wrapper for the constructor function
	var klass = function() {
		if (!Base._prototyping) constructor.apply(this, arguments);
		this.constructor = klass;
	};
	klass.prototype = _prototype;
	// build the class interface
	klass.extend = this.extend;
	klass.toString = function() {
		return String(constructor);
	};
	extend.call(klass, _static);
	// support singletons
	var object = constructor ? klass : _prototype;
	// class initialisation
	if (object.init instanceof Function) object.init();
	return object;
};

/*  Prototype JavaScript framework, version 1.4.0
 *  (c) 2005 Sam Stephenson <sam@conio.net>
 *
 *  Prototype is freely distributable under the terms of an MIT-style license.
 *  For details, see the Prototype web site: http://prototype.conio.net/
 *
/*--------------------------------------------------------------------------*/
Function.prototype.bindAsEventListener = function(object) {
  var __method = this;
  return function(event) {
    return __method.call(object, event || window.event);
  }
}
if (!window.CanvasRenderingContext2D) {

(function () {

  var G_vmlCanvasManager_ = {
    init: function (opt_doc) {
      var doc = opt_doc || document;
      if (/MSIE/.test(navigator.userAgent) && !window.opera) {
        var self = this;
        doc.attachEvent("onreadystatechange", function () {
          self.init_(doc);
        });
      }
    },

    init_: function (doc, e) {
      if (doc.readyState == "complete") {
        // create xmlns
        if (!doc.namespaces["g_vml_"]) {
          doc.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml");
        }

        // setup default css
        var ss = doc.createStyleSheet();
        ss.cssText = "canvas{display:inline-block;overflow:hidden;" +
            "text-align:left;}" +
            "canvas *{behavior:url(#default#VML)}";

        // find all canvas elements
        var els = doc.getElementsByTagName("canvas");
        for (var i = 0; i < els.length; i++) {
          if (!els[i].getContext) {
            this.initElement(els[i]);
          }
        }
      }
    },

    fixElement_: function (el) {
      // in IE before version 5.5 we would need to add HTML: to the tag name
      // but we do not care about IE before version 6
      var outerHTML = el.outerHTML;
      var newEl = document.createElement(outerHTML);
      // if the tag is still open IE has created the children as siblings and
      // it has also created a tag with the name "/FOO"
      if (outerHTML.slice(-2) != "/>") {
        var tagName = "/" + el.tagName;
        var ns;
        // remove content
        while ((ns = el.nextSibling) && ns.tagName != tagName) {
          ns.removeNode();
        }
        // remove the incorrect closing tag
        if (ns) {
          ns.removeNode();
        }
      }
      el.parentNode.replaceChild(newEl, el);
      return newEl;
    },

    /**
     * Public initializes a canvas element so that it can be used as canvas
     * element from now on. This is called automatically before the page is
     * loaded but if you are creating elements using createElement yuo need to
     * make sure this is called on the element.
     * @param el {HTMLElement} The canvas element to initialize.
     */
    initElement: function (el) {
      el = this.fixElement_(el);
      el.getContext = function () {
        if (this.context_) {
          return this.context_;
        }
        return this.context_ = new CanvasRenderingContext2D_(this);
      };

      var self = this; //bind
      el.attachEvent("onpropertychange", function (e) {
        // we need to watch changes to width and height
        switch (e.propertyName) {
          case "width":
          case "height":
            // coord size changed?
            break;
        }
      });

      // if style.height is set

      var attrs = el.attributes;
      if (attrs.width && attrs.width.specified) {
        // TODO: use runtimeStyle and coordsize
        // el.getContext().setWidth_(attrs.width.nodeValue);
        el.style.width = attrs.width.nodeValue + "px";
      }
      if (attrs.height && attrs.height.specified) {
        // TODO: use runtimeStyle and coordsize
        // el.getContext().setHeight_(attrs.height.nodeValue);
        el.style.height = attrs.height.nodeValue + "px";
      }
      //el.getContext().setCoordsize_()
    }
  };

  G_vmlCanvasManager_.init();

  // precompute "00" to "FF"
  var dec2hex = [];
  for (var i = 0; i < 16; i++) {
    for (var j = 0; j < 16; j++) {
      dec2hex[i * 16 + j] = i.toString(16) + j.toString(16);
    }
  }

  function createMatrixIdentity() {
    return [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ];
  }

  function matrixMultiply(m1, m2) {
    var result = createMatrixIdentity();

    for (var x = 0; x < 3; x++) {
      for (var y = 0; y < 3; y++) {
        var sum = 0;

        for (var z = 0; z < 3; z++) {
          sum += m1[x][z] * m2[z][y];
        }

        result[x][y] = sum;
      }
    }
    return result;
  }

  function copyState(o1, o2) {
    o2.fillStyle     = o1.fillStyle;
    o2.lineCap       = o1.lineCap;
    o2.lineJoin      = o1.lineJoin;
    o2.lineWidth     = o1.lineWidth;
    o2.miterLimit    = o1.miterLimit;
    o2.shadowBlur    = o1.shadowBlur;
    o2.shadowColor   = o1.shadowColor;
    o2.shadowOffsetX = o1.shadowOffsetX;
    o2.shadowOffsetY = o1.shadowOffsetY;
    o2.strokeStyle   = o1.strokeStyle;
  }

  function processStyle(styleString) {
    var str, alpha = 1;

    styleString = String(styleString);
    if (styleString.substring(0, 3) == "rgb") {
      var start = styleString.indexOf("(", 3);
      var end = styleString.indexOf(")", start + 1);
      var guts = styleString.substring(start + 1, end).split(",");

      str = "#";
      for (var i = 0; i < 3; i++) {
        str += dec2hex[parseInt(guts[i])];
      }

      if ((guts.length == 4) && (styleString.substr(3, 1) == "a")) {
        alpha = guts[3];
      }
    } else {
      str = styleString;
    }

    return [str, alpha];
  }

  function processLineCap(lineCap) {
    switch (lineCap) {
      case "butt":
        return "flat";
      case "round":
        return "round";
      case "square":
      default:
        return "square";
    }
  }

  /**
   * This class implements CanvasRenderingContext2D interface as described by
   * the WHATWG.
   * @param surfaceElement {HTMLElement} The element that the 2D context should
   * be associated with
   */
   function CanvasRenderingContext2D_(surfaceElement) {
    this.m_ = createMatrixIdentity();
    this.element_ = surfaceElement;

    this.mStack_ = [];
    this.aStack_ = [];
    this.currentPath_ = [];

    // Canvas context properties
    this.strokeStyle = "#000";
    this.fillStyle = "#ccc";

    this.lineWidth = 1;
    this.lineJoin = "miter";
    this.lineCap = "butt";
    this.miterLimit = 10;
    this.globalAlpha = 1;
  };

  var contextPrototype = CanvasRenderingContext2D_.prototype;
  contextPrototype.clearRect = function() {
    this.element_.innerHTML = "";
    this.currentPath_ = [];
  };

  contextPrototype.beginPath = function() {
    // TODO: Branch current matrix so that save/restore has no effect
    //       as per safari docs.

    this.currentPath_ = [];
  };

  contextPrototype.moveTo = function(aX, aY) {
    this.currentPath_.push({type: "moveTo", x: aX, y: aY});
  };

  contextPrototype.lineTo = function(aX, aY) {
    this.currentPath_.push({type: "lineTo", x: aX, y: aY});
  };

  contextPrototype.bezierCurveTo = function(aCP1x, aCP1y,
                                            aCP2x, aCP2y,
                                            aX, aY) {
    this.currentPath_.push({type: "bezierCurveTo",
                           cp1x: aCP1x,
                           cp1y: aCP1y,
                           cp2x: aCP2x,
                           cp2y: aCP2y,
                           x: aX,
                           y: aY});
  };

  contextPrototype.quadraticCurveTo = function(aCPx, aCPy, aX, aY) {
    // VML's qb produces different output to Firefox's
    // FF's behaviour seems to have changed in 1.5.0.1, check this
    this.bezierCurveTo(aCPx, aCPy, aCPx, aCPy, aX, aY);
  };

  contextPrototype.arc = function(aX, aY, aRadius,
                                  aStartAngle, aEndAngle, aClockwise) {
    if (!aClockwise) {
      var t = aStartAngle;
      aStartAngle = aEndAngle;
      aEndAngle = t;
    }

    var xStart = aX + (Math.cos(aStartAngle) * aRadius);
	var yStart = aY + Math.round(Math.sin(aStartAngle) * aRadius);

    var xEnd = aX + (Math.cos(aEndAngle) * aRadius);
	var yEnd = aY + Math.round(Math.sin(aEndAngle) * aRadius);

    this.currentPath_.push({type: "arc",
                           x: aX,
                           y: aY,
                           radius: aRadius,
                           xStart: xStart,
                           yStart: yStart,
                           xEnd: xEnd,
                           yEnd: yEnd});

  };

  contextPrototype.rect = function(aX, aY, aWidth, aHeight) {
    this.moveTo(aX, aY);
    this.lineTo(aX + aWidth, aY);
    this.lineTo(aX + aWidth, aY + aHeight);
    this.lineTo(aX, aY + aHeight);
    this.closePath();
  };

  contextPrototype.strokeRect = function(aX, aY, aWidth, aHeight) {
    // Will destroy any existing path (same as FF behaviour)
    this.beginPath();
    this.moveTo(aX, aY);
    this.lineTo(aX + aWidth, aY);
    this.lineTo(aX + aWidth, aY + aHeight);
    this.lineTo(aX, aY + aHeight);
    this.closePath();
    this.stroke();
  };

  contextPrototype.fillRect = function(aX, aY, aWidth, aHeight) {
    // Will destroy any existing path (same as FF behaviour)
    this.beginPath();
    this.moveTo(aX, aY);
    this.lineTo(aX + aWidth, aY);
    this.lineTo(aX + aWidth, aY + aHeight);
    this.lineTo(aX, aY + aHeight);
    this.closePath();
    this.fill();
  };

  contextPrototype.createLinearGradient = function(aX0, aY0, aX1, aY1) {
    var gradient = new CanvasGradient_("gradient");
    return gradient;
  };

  contextPrototype.createRadialGradient = function(aX0, aY0,
                                                   aR0, aX1,
                                                   aY1, aR1) {
    var gradient = new CanvasGradient_("gradientradial");
    gradient.radius1_ = aR0;
    gradient.radius2_ = aR1;
    gradient.focus_.x = aX0;
    gradient.focus_.y = aY0;
    return gradient;
  };

  contextPrototype.drawImage = function (image, var_args) {
    var dx, dy, dw, dh, sx, sy, sw, sh;
    var w = image.width;
    var h = image.height;

    if (arguments.length == 3) {
      dx = arguments[1];
      dy = arguments[2];
      sx = sy = 0;
      sw = dw = w;
      sh = dh = h;
    } else if (arguments.length == 5) {
      dx = arguments[1];
      dy = arguments[2];
      dw = arguments[3];
      dh = arguments[4];
      sx = sy = 0;
      sw = w;
      sh = h;
    } else if (arguments.length == 9) {
      sx = arguments[1];
      sy = arguments[2];
      sw = arguments[3];
      sh = arguments[4];
      dx = arguments[5];
      dy = arguments[6];
      dw = arguments[7];
      dh = arguments[8];
    } else {
      throw "Invalid number of arguments";
    }

    var d = this.getCoords_(dx, dy);

    var w2 = (sw / 2);
    var h2 = (sh / 2);

    var vmlStr = [];

    // For some reason that I've now forgotten, using divs didn't work
    vmlStr.push(' <g_vml_:group',
                ' coordsize="100,100"',
                ' coordorigin="0, 0"' ,
                ' style="width:100px;height:100px;position:absolute;');

    // If filters are necessary (rotation exists), create them
    // filters are bog-slow, so only create them if abbsolutely necessary
    // The following check doesn't account for skews (which don't exist
    // in the canvas spec (yet) anyway.

    if (this.m_[0][0] != 1 || this.m_[0][1]) {
      var filter = [];

      // Note the 12/21 reversal
      filter.push("M11='", this.m_[0][0], "',",
                  "M12='", this.m_[1][0], "',",
                  "M21='", this.m_[0][1], "',",
                  "M22='", this.m_[1][1], "',",
                  "Dx='", d.x, "',",
                  "Dy='", d.y, "'");

      // Bounding box calculation (need to minimize displayed area so that
      // filters don't waste time on unused pixels.
      var max = d;
      var c2 = this.getCoords_(dx+dw, dy);
      var c3 = this.getCoords_(dx, dy+dh);
      var c4 = this.getCoords_(dx+dw, dy+dh);

      max.x = Math.max(max.x, c2.x, c3.x, c4.x);
      max.y = Math.max(max.y, c2.y, c3.y, c4.y);

      vmlStr.push(" padding:0 ", Math.floor(max.x), "px ", Math.floor(max.y),
                  "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",
                  filter.join(""), ", sizingmethod='clip');")
    } else {
      vmlStr.push(" top:", d.y, "px;left:", d.x, "px;")
    }

    vmlStr.push(' ">' ,
                '<g_vml_:image src="', image.src, '"',
                ' style="width:', dw, ';',
                ' height:', dh, ';"',
                ' cropleft="', sx / w, '"',
                ' croptop="', sy / h, '"',
                ' cropright="', (w - sx - sw) / w, '"',
                ' cropbottom="', (h - sy - sh) / h, '"',
                ' />',
                '</g_vml_:group>');

    this.element_.insertAdjacentHTML("BeforeEnd",
                                    vmlStr.join(""));
  };

  contextPrototype.stroke = function(aFill) {
    var lineStr = [];
    var lineOpen = false;
    var a = processStyle(aFill ? this.fillStyle : this.strokeStyle);
    var color = a[0];
    var opacity = a[1] * this.globalAlpha;

    lineStr.push('<g_vml_:shape',
                 ' fillcolor="', color, '"',
                 ' filled="', Boolean(aFill), '"',
                 ' style="position:absolute;width:10;height:10;"',
                 ' coordorigin="0 0" coordsize="10 10"',
                 ' stroked="', !aFill, '"',
                 ' strokeweight="', this.lineWidth, '"',
                 ' strokecolor="', color, '"',
                 ' path="');

    var newSeq = false;
    var min = {x: null, y: null};
    var max = {x: null, y: null};

    for (var i = 0; i < this.currentPath_.length; i++) {
      var p = this.currentPath_[i];

      if (p.type == "moveTo") {
        lineStr.push(" m ");
        var c = this.getCoords_(p.x, p.y);
        lineStr.push(Math.floor(c.x), ",", Math.floor(c.y));
      } else if (p.type == "lineTo") {
        lineStr.push(" l ");
        var c = this.getCoords_(p.x, p.y);
        lineStr.push(Math.floor(c.x), ",", Math.floor(c.y));
      } else if (p.type == "close") {
        lineStr.push(" x ");
      } else if (p.type == "bezierCurveTo") {
        lineStr.push(" c ");
        var c = this.getCoords_(p.x, p.y);
        var c1 = this.getCoords_(p.cp1x, p.cp1y);
        var c2 = this.getCoords_(p.cp2x, p.cp2y);
        lineStr.push(Math.floor(c1.x), ",", Math.floor(c1.y), ",",
                     Math.floor(c2.x), ",", Math.floor(c2.y), ",",
                     Math.floor(c.x), ",", Math.floor(c.y));
      } else if (p.type == "arc") {
        lineStr.push(" ar ");
        var c  = this.getCoords_(p.x, p.y);
        var cStart = this.getCoords_(p.xStart, p.yStart);
        var cEnd = this.getCoords_(p.xEnd, p.yEnd);

        // TODO: FIX (matricies (scale+rotation) now buggered this up)
        //       VML arc also doesn't seem able to do rotated non-circular
        //       arcs without parent grouping.
        var absXScale = this.m_[0][0];
        var absYScale = this.m_[1][1];

        lineStr.push(Math.floor(c.x - absXScale * p.radius), ",",
                     Math.floor(c.y - absYScale * p.radius), " ",
                     Math.floor(c.x + absXScale * p.radius), ",",
                     Math.floor(c.y + absYScale * p.radius), " ",
                     Math.floor(cStart.x), ",", Math.floor(cStart.y), " ",
                     Math.floor(cEnd.x), ",", Math.floor(cEnd.y));
      }


      // TODO: Following is broken for curves due to
      //       move to proper paths.

      // Figure out dimensions so we can do gradient fills
      // properly
      if(c) {
        if (min.x == null || c.x < min.x) {
          min.x = c.x;
        }
        if (max.x == null || c.x > max.x) {
          max.x = c.x;
        }
        if (min.y == null || c.y < min.y) {
          min.y = c.y;
        }
        if (max.y == null || c.y > max.y) {
          max.y = c.y;
        }
      }
    }
    lineStr.push(' ">');

    if (typeof this.fillStyle == "object") {
      var focus = {x: "50%", y: "50%"};
      var width = (max.x - min.x);
      var height = (max.y - min.y);
      var dimension = (width > height) ? width : height;

      focus.x = Math.floor((this.fillStyle.focus_.x / width) * 100 + 50) + "%";
      focus.y = Math.floor((this.fillStyle.focus_.y / height) * 100 + 50) + "%";

      var colors = [];

      // inside radius (%)
      if (this.fillStyle.type_ == "gradientradial") {
        var inside = (this.fillStyle.radius1_ / dimension * 100);

        // percentage that outside radius exceeds inside radius
        var expansion = (this.fillStyle.radius2_ / dimension * 100) - inside;
      } else {
        var inside = 0;
        var expansion = 100;
      }

      var insidecolor = {offset: null, color: null};
      var outsidecolor = {offset: null, color: null};

      // We need to sort 'colors' by percentage, from 0 > 100 otherwise ie
      // won't interpret it correctly
      this.fillStyle.colors_.sort(function (cs1, cs2) {
        return cs1.offset - cs2.offset;
      });

      for (var i = 0; i < this.fillStyle.colors_.length; i++) {
        var fs = this.fillStyle.colors_[i];

        colors.push( (fs.offset * expansion) + inside, "% ", fs.color, ",");

        if (fs.offset > insidecolor.offset || insidecolor.offset == null) {
          insidecolor.offset = fs.offset;
          insidecolor.color = fs.color;
        }

        if (fs.offset < outsidecolor.offset || outsidecolor.offset == null) {
          outsidecolor.offset = fs.offset;
          outsidecolor.color = fs.color;
        }
      }
      colors.pop();

      lineStr.push('<g_vml_:fill',
                   ' color="', outsidecolor.color, '"',
                   ' color2="', insidecolor.color, '"',
                   ' type="', this.fillStyle.type_, '"',
                   ' focusposition="', focus.x, ', ', focus.y, '"',
                   ' colors="', colors.join(""), '"',
                   ' opacity="', opacity, '" />');
    } else if (aFill) {
      lineStr.push('<g_vml_:fill color="', color, '" opacity="', opacity, '" />');
    } else {
      lineStr.push(
        '<g_vml_:stroke',
        ' opacity="', opacity,'"',
        ' joinstyle="', this.lineJoin, '"',
        ' miterlimit="', this.miterLimit, '"',
        ' endcap="', processLineCap(this.lineCap) ,'"',
        ' weight="', this.lineWidth, 'px"',
        ' color="', color,'" />'
      );
    }

    lineStr.push("</g_vml_:shape>");

    this.element_.insertAdjacentHTML("beforeEnd", lineStr.join(""));

    this.currentPath_ = [];
  };

  contextPrototype.fill = function() {
    this.stroke(true);
  }

  contextPrototype.closePath = function() {
    this.currentPath_.push({type: "close"});
  };

  /**
   * @private
   */
  contextPrototype.getCoords_ = function(aX, aY) {
    return {
      x: (aX * this.m_[0][0] + aY * this.m_[1][0] + this.m_[2][0]),
      y: (aX * this.m_[0][1] + aY * this.m_[1][1] + this.m_[2][1])
    }
  };

  contextPrototype.save = function() {
    var o = {};
    copyState(this, o);
    this.aStack_.push(o);
    this.mStack_.push(this.m_);
    this.m_ = matrixMultiply(createMatrixIdentity(), this.m_);
  };

  contextPrototype.restore = function() {
    copyState(this.aStack_.pop(), this);
    this.m_ = this.mStack_.pop();
  };

  contextPrototype.translate = function(aX, aY) {
    var m1 = [
      [1,  0,  0],
      [0,  1,  0],
      [aX, aY, 1]
    ];

    this.m_ = matrixMultiply(m1, this.m_);
  };

  contextPrototype.rotate = function(aRot) {
    var c = Math.cos(aRot);
    var s = Math.sin(aRot);

    var m1 = [
      [c,  s, 0],
      [-s, c, 0],
      [0,  0, 1]
    ];

    this.m_ = matrixMultiply(m1, this.m_);
  };

  contextPrototype.scale = function(aX, aY) {
    var m1 = [
      [aX, 0,  0],
      [0,  aY, 0],
      [0,  0,  1]
    ];

    this.m_ = matrixMultiply(m1, this.m_);
  };

  /******** STUBS ********/
  contextPrototype.clip = function() {
    // TODO: Implement
  };

  contextPrototype.arcTo = function() {
    // TODO: Implement
  };

  contextPrototype.createPattern = function() {
    return new CanvasPattern_;
  };

  // Gradient / Pattern Stubs
  function CanvasGradient_(aType) {
    this.type_ = aType;
    this.radius1_ = 0;
    this.radius2_ = 0;
    this.colors_ = [];
    this.focus_ = {x: 0, y: 0};
  }

  CanvasGradient_.prototype.addColorStop = function(aOffset, aColor) {
    aColor = processStyle(aColor);
    this.colors_.push({offset: 1-aOffset, color: aColor});
  };

  function CanvasPattern_() {}

  // set up externs
  G_vmlCanvasManager = G_vmlCanvasManager_;
  CanvasRenderingContext2D = CanvasRenderingContext2D_;
  CanvasGradient = CanvasGradient_;
  CanvasPattern = CanvasPattern_;

})();

} // if
var CanvasWidget = Base.extend({
	canvas: null,
	context: null,
	position: null,
	widgetListeners: null,

	/**
	 * constuctor
	 * 
	 * @param {String} canvasName - the id of the corresponding canvas html element
	 * @param {Array} position - the absolute position of the canvas html elemnt, {x:#,y:#}
	 */
	constructor: function(canvasElementID, position) {
		this.canvas = document.getElementById(canvasElementID);
		this.context = this.canvas.getContext('2d');
		this.drawWidget();
		this.initMouseListeners();
		this.position = position;
		this.widgetListeners = new Array();
	},

	/**
	 * Initializes all the mouse listeners for the widget.
	 */
	initMouseListeners: function() {
		this.mouseMoveTrigger = new Function();
		if (document.all) {
			this.canvas.attachEvent("onmousedown", this.mouseDownActionPerformed.bindAsEventListener(this));
			this.canvas.attachEvent("onmousemove", this.mouseMoveActionPerformed.bindAsEventListener(this));
			this.canvas.attachEvent("onmouseup", this.mouseUpActionPerformed.bindAsEventListener(this));
			this.canvas.attachEvent("onmouseout", this.mouseUpActionPerformed.bindAsEventListener(this));
		} else {
			this.canvas.addEventListener("mousedown", this.mouseDownActionPerformed.bindAsEventListener(this), false);
			this.canvas.addEventListener("mousemove", this.mouseMoveActionPerformed.bindAsEventListener(this), false);
			this.canvas.addEventListener("mouseup", this.mouseUpActionPerformed.bindAsEventListener(this), false);
			this.canvas.addEventListener("mouseout", this.mouseUpActionPerformed.bindAsEventListener(this), false);
		}
	},

	/**
	 * Triggered by any mousedown event on the widget. This function calls 
	 * checkWidgetMouseEvent() and links the mousemove listener to checkWidgetEvent().
	 *
	 * Override this function if you want direct access to mousedown events.
	 *
	 * @param {Event} e
	*/
	mouseDownActionPerformed: function(e) {
		this.mouseMoveTrigger = function(e) {
			this.checkWidgetEvent(e);
		}
		this.checkWidgetEvent(e);
	},
	
	/**
	 * Triggered by any mousemove event on the widget. 
	 *
	 * Override this function if you want direct access to mousemove events.
	 *
	 * @param {Event} e
	*/
	mouseMoveActionPerformed: function(e) {
		this.mouseMoveTrigger(e);
	},
	
	/**
	 * Triggered by any mouseup or mouseout event on the widget. 
	 *
	 * Override this function if you want direct access to mouseup events.
	 *
	 * @param {Event} e
	*/
	mouseUpActionPerformed: function(e) {
		this.mouseMoveTrigger = new Function();
	},

	/**
	 * Called by the mousedown and mousemove event listeners by default.
	 *
	 * This function must be implemented by any class extending CPWidget.
	 *
	 * @param {Event} e
	*/
	checkWidgetMouseEvent: function(e) {},
	
	/**
	 * Draws the widget.
	 *
	 * This function must be implemented by any class extending CPWidget.
	 *
	*/
	drawWidget: function() {},

	/**
	 * Used to add event listeners directly to the widget.  Listeners registered 
	 * with this function are triggered every time the widget's state changes.
	 *
	 * @param {Function} eventListener
	*/
	addWidgetListener: function(eventListener) {
		this.widgetListeners[this.widgetListeners.length] = eventListener;
	},
	
	/**
	 * Executs all functions registered as widgetListeners.  Should be called every time 
	 * the widget's state changes.
	*/
	callWidgetListeners: function() {
		if(this.widgetListeners.length != 0) {
			for(var i=0; i < this.widgetListeners.length; i++) 
				this.widgetListeners[i]();
		}
	},
	
	/**
	 * Helper function to get the mouse position relative to the canvas position.
	 *
	 * @param {Event} e
	*/
	getCanvasMousePos: function(e) {
		// Patch: This will take care of scrollbar positions different of 0
		return {x: e.clientX - this.position.x + $(window).scrollLeft(), y: e.clientY - this.position.y + $(window).scrollTop()};
	}

});

var CanvasHelper = {
	canvasExists: function(canvasName) {
		var canvas = document.getElementById(canvasName);
		return canvas.getContext('2d');
	}
}
var preDrawActionCallback;

var CanvasPainter = CanvasWidget.extend({
	canvasInterface: "",
	contextI: "",

	canvasWidth: 0,
	canvasHeight: 0,

	startPos: {x:-1,y:-1},
	curPos: {x:-1,y:-1},

	drawColor: "rgb(0,0,0)",  //need to change to drawColor...

	drawActions: null,
	curDrawAction: 0,

	cpMouseDownState: false,

	/***
		init(String canvasName, String canvasInterfaceName, Array position) 
				initializes the canvas elements, adds event handlers and 
				pulls height and width information from the canvas element

		Parameters:
			canvasName - the name of the bottom canvas element
			canvasInterfaceName - the name of the top canvas element
			canvasPos - the absolution position of both canvas elements, used for mouse tracking. 
				ex. {x: 10, y: 10}
	***/

	constructor: function(canvasName, canvasInterfaceName, position, preDrawAction) {
		this.canvasInterface = document.getElementById(canvasInterfaceName);
		this.contextI = this.canvasInterface.getContext("2d");
		this.inherit(canvasName, position);
		this.canvasHeight = this.canvas.getAttribute('height');
		this.canvasWidth = this.canvas.getAttribute('width');
		this.drawActions = [this.drawBrush, this.drawPencil, this.drawLine, this.drawRectangle, this.drawCircle, this.clearCanvas];
		preDrawActionCallback = preDrawAction;
	},

	initMouseListeners: function() {
		this.mouseMoveTrigger = new Function();
		if(document.all) {
			this.canvasInterface.attachEvent("onmousedown", this.mouseDownActionPerformed.bindAsEventListener(this));
			this.canvasInterface.attachEvent("onmousemove", this.mouseMoveActionPerformed.bindAsEventListener(this));
			this.canvasInterface.attachEvent("onmouseup", this.mouseUpActionPerformed.bindAsEventListener(this));
			attachEvent("mouseup", this.mouseUpActionPerformed.bindAsEventListener(this));
		} else {
			this.canvasInterface.addEventListener("mousedown", this.mouseDownActionPerformed.bindAsEventListener(this), false);
			this.canvasInterface.addEventListener("mousemove", this.mouseMoveActionPerformed.bindAsEventListener(this), false);
			this.canvasInterface.addEventListener("mouseup", this.mouseUpActionPerformed.bindAsEventListener(this), false);
			addEventListener("mouseup", this.mouseUpActionPerformed.bindAsEventListener(this), false);
		}
		
		// Patch: This fixes the following issue in Chrome:
		// If you draw under an image, the whole page gets selected.
		this.canvasInterface.onmousedown = function() { return false; }
	},


	mouseDownActionPerformed: function(e) {
		// Perform a callback here
		if (typeof preDrawActionCallback == 'function') {
			preDrawActionCallback();
		}
		
		this.startPos = this.getCanvasMousePos(e, this.position);
		this.context.lineJoin = "round";
		//Link mousemove event to the cpMouseMove Function through the wrapper
		this.mouseMoveTrigger = function(e) {
			this.cpMouseMove(e);
		};
		
		// Patch: When we have a pencil in hand, we may want to draw a single dot
		// on the canvas. Also, this changes the functionality of the 'pencil'. Now
		// you need to hold the mouse down, in order to draw a pencil line. Which is
		// far more intuitive than pressing once, then move the mouse, then press again.
		if(this.curDrawAction == 1) {
			this.cpMouseMove(e);
		}
    },
	
	cpMouseMove: function(e) {
		this.setColor(this.drawColor);
		this.curPos = this.getCanvasMousePos(e, this.position);

		if(this.curDrawAction == 0) {
			this.drawBrush(this.startPos, this.curPos, this.context);
			this.callWidgetListeners();
			this.startPos = this.curPos;
		} else if(this.curDrawAction == 1) {
			this.drawPencil(this.startPos, this.curPos, this.context);
			this.callWidgetListeners();
			this.startPos = this.curPos;
		} else if(this.curDrawAction == 2) {
			this.contextI.lineWidth = this.context.lineWidth;
			this.contextI.clearRect(0,0,400,400);
			this.drawLine(this.startPos, this.curPos, this.contextI);
		} else if(this.curDrawAction == 3) {
			this.contextI.clearRect(0,0,400,400);
			this.drawRectangle(this.startPos, this.curPos, this.contextI);
		} else if(this.curDrawAction == 4) {
			this.contextI.clearRect(0,0,400,400);
			this.drawCircle(this.startPos, this.curPos, this.contextI);
		}
		this.cpMouseDownState = true;
	},

	mouseUpActionPerformed: function(e) {
		if(!this.cpMouseDownState) return;
		this.curPos = this.getCanvasMousePos(e, this.position);
		if(this.curDrawAction > 1) {
			this.setColor(this.drawColor);
			this.drawActions[this.curDrawAction](this.startPos, this.curPos, this.context, false);
			this.clearInterface();
			this.callWidgetListeners();
		}
		this.mouseMoveTrigger = new Function();
		this.cpMouseDownState = false;
	},

	//Draw Functions
	drawRectangle: function(pntFrom, pntTo, context) {
		context.beginPath();
		context.fillRect(pntFrom.x, pntFrom.y, pntTo.x - pntFrom.x, pntTo.y - pntFrom.y);
		context.closePath();
	},
	drawCircle: function (pntFrom, pntTo, context) {
		var centerX = Math.max(pntFrom.x,pntTo.x) - Math.abs(pntFrom.x - pntTo.x)/2;
		var centerY = Math.max(pntFrom.y,pntTo.y) - Math.abs(pntFrom.y - pntTo.y)/2;
		context.beginPath();
		var distance = Math.sqrt(Math.pow(pntFrom.x - pntTo.x,2) + Math.pow(pntFrom.y - pntTo.y,2));
		context.arc(centerX, centerY, distance/2,0,Math.PI*2 ,true);
		context.fill();
		context.closePath();
	},
	drawLine: function(pntFrom, pntTo, context) {
		context.beginPath();
		context.moveTo(pntFrom.x,pntFrom.y);
		context.lineTo(pntTo.x,pntTo.y);
		context.stroke();
		context.closePath();
	},
	drawPencil: function(pntFrom, pntTo, context) {
		context.save();
		context.beginPath();
		context.lineCap = "round";
		context.moveTo(pntFrom.x,pntFrom.y);
		context.lineTo(pntTo.x,pntTo.y);
		context.stroke();
		context.closePath();
		context.restore();
	},
	drawBrush: function(pntFrom, pntTo, context) {
		context.beginPath();
		context.moveTo(pntFrom.x, pntFrom.y);
		context.lineTo(pntTo.x, pntTo.y);
		context.stroke();
		context.closePath();
	},
	clearCanvas: function(context) {
		canvasPainter.context.beginPath();
		canvasPainter.context.clearRect(0,0,canvasPainter.canvasWidth,canvasPainter.canvasHeight);
		canvasPainter.context.closePath();
	},
	clearInterface: function() {
		this.contextI.beginPath();
		this.contextI.clearRect(0,0,this.canvasWidth,this.canvasHeight);
		this.contextI.closePath();
	},
	
	//Setter Methods
	setColor: function(color) {
		this.context.fillStyle = color;
		this.context.strokeStyle = color;
		this.contextI.fillStyle = color;
		this.contextI.strokeStyle = color;
		this.drawColor = color;
	},

	setLineWidth: function(lineWidth) {
		this.context.lineWidth = lineWidth;
		this.contextI.lineWidth = lineWidth;
	},
	
	//TODO: look into the event responce/calling for this function
	setDrawAction: function(action) {
		if(action == 5) {
			var lastAction = this.curDrawAction;
			this.curDrawAction = action;
			this.callWidgetListeners();
			this.curDrawAction = lastAction;
			this.clearCanvas(this.context);
		} else {
			this.curDrawAction = action;
			this.context.fillStyle = this.drawColor;
			this.context.strokeStyle = this.drawColor;
		}
	},
	
	getDistance: function(pntFrom, pntTo) {
		return Math.sqrt(Math.pow(pntFrom.x - pntTo.x,2) + Math.pow(pntFrom.y - pntTo.y,2));
	},
	
	// Patch: Resize function
	resize: function(width, height) {
		var saveImageData;
		// Note: Firefox throws an exception here. But when we catch
		// it, we may proceed just fine.
		try {
			saveImageData = this.context.getImageData(0, 0,
				Math.min(this.canvasWidth, width), Math.min(this.canvasHeight, height));
		}
		catch(err) { }
		
		this.canvas.setAttribute('height', height);
		this.canvas.setAttribute('width', width);
		this.canvasInterface.setAttribute('height', height);
		this.canvasInterface.setAttribute('width', width);
		this.canvasHeight = height;
		this.canvasWidth = width;
		
		if (saveImageData)
			this.context.putImageData(saveImageData, 0, 0);
	}
});
(function($) {
$.fn.batchImageLoad = function(options) {
	var images = $(this);
	var totalImagesCount = images.size();
	var elementsLoaded = 0;

	// Init
	$.fn.batchImageLoad.defaults = {
		loadingCompleteCallback: null
	}
    var opts = $.extend({}, $.fn.batchImageLoad.defaults, options);
		
	// Start
	images.each(function() {
		// The image has already been loaded (cached)
		if ($(this)[0].complete) {
			totalImagesCount--;
		// The image is loading, so attach the listener
		} else {
			$(this).load(function() {
				elementsLoaded++;
					
				// An image has been loaded
				if (elementsLoaded >= totalImagesCount)
					if (opts.loadingCompleteCallback) opts.loadingCompleteCallback();
			});
			$(this).error(function() {
				elementsLoaded++;
					
				// The image has errored
				if (elementsLoaded >= totalImagesCount)
					if (opts.loadingCompleteCallback) opts.loadingCompleteCallback();
			});
		}
	});

	// There are no unloaded images
	if (totalImagesCount <= 0)
		if (opts.loadingCompleteCallback) opts.loadingCompleteCallback();
};
})(jQuery);
(function(jQuery) {
		  
	var self = null;
 
	jQuery.fn.autogrow = function(o)
	{	
		return this.each(function() {
			new jQuery.autogrow(this, o);
		});
	};
	

    /**
     * The autogrow object.
     *
     * @constructor
     * @name jQuery.autogrow
     * @param Object e The textarea to create the autogrow for.
     * @param Hash o A set of key/value pairs to set as configuration properties.
     * @cat Plugins/autogrow
     */
	
	jQuery.autogrow = function (e, o)
	{
		this.options		  	= o || {};
		this.dummy			  	= null;
		this.interval	 	  	= null;
		this.line_height	  	= this.options.lineHeight || parseInt(jQuery(e).css('line-height'));
		this.min_height		  	= this.options.minHeight || parseInt(jQuery(e).css('min-height'));
		this.max_height		  	= this.options.maxHeight || parseInt(jQuery(e).css('max-height'));;
		this.textarea		  	= jQuery(e);
		
		if(this.line_height == NaN)
		  this.line_height = 0;
		
		// Only one textarea activated at a time, the one being used
		this.init();
	};
	
	jQuery.autogrow.fn = jQuery.autogrow.prototype = {
    autogrow: '1.2.2'
  };
	
 	jQuery.autogrow.fn.extend = jQuery.autogrow.extend = jQuery.extend;
	
	jQuery.autogrow.fn.extend({
						 
		init: function() {			
			var self = this;			
			this.textarea.css({overflow: 'hidden', display: 'block'});
			this.textarea.bind('focus', function() { self.startExpand() } ).bind('blur', function() { self.stopExpand() });
			this.checkExpand();	
		},
						 
		startExpand: function() {				
		  var self = this;
			this.interval = window.setInterval(function() {self.checkExpand()}, 400);
		},
		
		stopExpand: function() {
			clearInterval(this.interval);	
		},
		
		checkExpand: function() {
			
			if (this.dummy == null)
			{
				this.dummy = jQuery('<div></div>');
				this.dummy.css({
												'font-size'  : this.textarea.css('font-size'),
												'font-family': this.textarea.css('font-family'),
												'width'      : this.textarea.css('width'),
												'padding'    : this.textarea.css('padding'),
												'line-height': this.line_height + 'px',
												'overflow-x' : 'hidden',
												'position'   : 'absolute',
												'top'        : 0,
												'left'		 : -9999
												}).appendTo('body');
			}
			
			// Strip HTML tags
			var html = this.textarea.val().replace(/(<|>)/g, '');
			
			// IE is different, as per usual
			if ($.browser.msie)
			{
				html = html.replace(/\n/g, '<BR>new');
			}
			else
			{
				html = html.replace(/\n/g, '<br>new');
			}
			
			if (this.dummy.html() != html)
			{
				this.dummy.html(html);	
				
				if (this.max_height > 0 && (this.dummy.height() + this.line_height > this.max_height))
				{
					this.textarea.css('overflow-y', 'auto');	
				}
				else
				{
					this.textarea.css('overflow-y', 'hidden');
					if (this.textarea.height() < this.dummy.height() + this.line_height || (this.dummy.height() < this.textarea.height()))
					{	
						this.textarea.animate({height: (this.dummy.height() + this.line_height) + 'px'}, 100);	
					}
				}
			}
		}
						 
	 });
})(jQuery);
(function(i){if(/1\.(0|1|2)\.(0|1|2)/.test(i.fn.jquery)||/^1.1/.test(i.fn.jquery)){alert("blockUI requires jQuery v1.2.3 or later!  You are using v"+i.fn.jquery);return}i.fn._fadeIn=i.fn.fadeIn;var c=function(){};var j=document.documentMode||0;var e=i.browser.msie&&((i.browser.version<8&&!j)||j<8);var f=i.browser.msie&&/MSIE 6.0/.test(navigator.userAgent)&&!j;i.blockUI=function(p){d(window,p)};i.unblockUI=function(p){h(window,p)};i.growlUI=function(t,r,s,p){var q=i('<div class="growlUI"></div>');if(t){q.append("<h1>"+t+"</h1>")}if(r){q.append("<h2>"+r+"</h2>")}if(s==undefined){s=3000}i.blockUI({message:q,fadeIn:700,fadeOut:1000,centerY:false,timeout:s,showOverlay:false,onUnblock:p,css:i.blockUI.defaults.growlCSS})};i.fn.block=function(p){return this.unblock({fadeOut:0}).each(function(){if(i.css(this,"position")=="static"){this.style.position="relative"}if(i.browser.msie){this.style.zoom=1}d(this,p)})};i.fn.unblock=function(p){return this.each(function(){h(this,p)})};i.blockUI.version=2.31;i.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:true,theme:false,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:0.6,cursor:"wait"},growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:0.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:false,baseZ:1000,centerX:true,centerY:true,allowBodyStretch:true,bindEvents:true,constrainTabKey:true,fadeIn:200,fadeOut:400,timeout:0,showOverlay:true,focusInput:true,applyPlatformOpacityRules:true,onBlock:null,onUnblock:null,quirksmodeOffsetHack:4};var b=null;var g=[];function d(r,F){var A=(r==window);var w=F&&F.message!==undefined?F.message:undefined;F=i.extend({},i.blockUI.defaults,F||{});F.overlayCSS=i.extend({},i.blockUI.defaults.overlayCSS,F.overlayCSS||{});var C=i.extend({},i.blockUI.defaults.css,F.css||{});var N=i.extend({},i.blockUI.defaults.themedCSS,F.themedCSS||{});w=w===undefined?F.message:w;if(A&&b){h(window,{fadeOut:0})}if(w&&typeof w!="string"&&(w.parentNode||w.jquery)){var I=w.jquery?w[0]:w;var P={};i(r).data("blockUI.history",P);P.el=I;P.parent=I.parentNode;P.display=I.style.display;P.position=I.style.position;if(P.parent){P.parent.removeChild(I)}}var B=F.baseZ;var M=(i.browser.msie||F.forceIframe)?i('<iframe class="blockUI" style="z-index:'+(B++)+';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+F.iframeSrc+'"></iframe>'):i('<div class="blockUI" style="display:none"></div>');var L=i('<div class="blockUI blockOverlay" style="z-index:'+(B++)+';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');var K;if(F.theme&&A){var G='<div class="blockUI blockMsg blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+B+';display:none;position:fixed"><div class="ui-widget-header ui-dialog-titlebar blockTitle">'+(F.title||"&nbsp;")+'</div><div class="ui-widget-content ui-dialog-content"></div></div>';K=i(G)}else{K=A?i('<div class="blockUI blockMsg blockPage" style="z-index:'+B+';display:none;position:fixed"></div>'):i('<div class="blockUI blockMsg blockElement" style="z-index:'+B+';display:none;position:absolute"></div>')}if(w){if(F.theme){K.css(N);K.addClass("ui-widget-content")}else{K.css(C)}}if(!F.applyPlatformOpacityRules||!(i.browser.mozilla&&/Linux/.test(navigator.platform))){L.css(F.overlayCSS)}L.css("position",A?"fixed":"absolute");if(i.browser.msie||F.forceIframe){M.css("opacity",0)}var y=[M,L,K],O=A?i("body"):i(r);i.each(y,function(){this.appendTo(O)});if(F.theme&&F.draggable&&i.fn.draggable){K.draggable({handle:".ui-dialog-titlebar",cancel:"li"})}var v=e&&(!i.boxModel||i("object,embed",A?null:r).length>0);if(f||v){if(A&&F.allowBodyStretch&&i.boxModel){i("html,body").css("height","100%")}if((f||!i.boxModel)&&!A){var E=m(r,"borderTopWidth"),J=m(r,"borderLeftWidth");var x=E?"(0 - "+E+")":0;var D=J?"(0 - "+J+")":0}i.each([M,L,K],function(t,S){var z=S[0].style;z.position="absolute";if(t<2){A?z.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.boxModel?0:"+F.quirksmodeOffsetHack+') + "px"'):z.setExpression("height",'this.parentNode.offsetHeight + "px"');A?z.setExpression("width",'jQuery.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):z.setExpression("width",'this.parentNode.offsetWidth + "px"');if(D){z.setExpression("left",D)}if(x){z.setExpression("top",x)}}else{if(F.centerY){if(A){z.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"')}z.marginTop=0}else{if(!F.centerY&&A){var Q=(F.css&&F.css.top)?parseInt(F.css.top):0;var R="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+Q+') + "px"';z.setExpression("top",R)}}}})}if(w){if(F.theme){K.find(".ui-widget-content").append(w)}else{K.append(w)}if(w.jquery||w.nodeType){i(w).show()}}if((i.browser.msie||F.forceIframe)&&F.showOverlay){M.show()}if(F.fadeIn){var H=F.onBlock?F.onBlock:c;var q=(F.showOverlay&&!w)?H:c;var p=w?H:c;if(F.showOverlay){L._fadeIn(F.fadeIn,q)}if(w){K._fadeIn(F.fadeIn,p)}}else{if(F.showOverlay){L.show()}if(w){K.show()}if(F.onBlock){F.onBlock()}}l(1,r,F);if(A){b=K[0];g=i(":input:enabled:visible",b);if(F.focusInput){setTimeout(o,20)}}else{a(K[0],F.centerX,F.centerY)}if(F.timeout){var u=setTimeout(function(){A?i.unblockUI(F):i(r).unblock(F)},F.timeout);i(r).data("blockUI.timeout",u)}}function h(s,t){var r=(s==window);var q=i(s);var u=q.data("blockUI.history");var v=q.data("blockUI.timeout");if(v){clearTimeout(v);q.removeData("blockUI.timeout")}t=i.extend({},i.blockUI.defaults,t||{});l(0,s,t);var p;if(r){p=i("body").children().filter(".blockUI").add("body > .blockUI")}else{p=i(".blockUI",s)}if(r){b=g=null}if(t.fadeOut){p.fadeOut(t.fadeOut);setTimeout(function(){k(p,u,t,s)},t.fadeOut)}else{k(p,u,t,s)}}function k(p,s,r,q){p.each(function(t,u){if(this.parentNode){this.parentNode.removeChild(this)}});if(s&&s.el){s.el.style.display=s.display;s.el.style.position=s.position;if(s.parent){s.parent.appendChild(s.el)}i(q).removeData("blockUI.history")}if(typeof r.onUnblock=="function"){r.onUnblock(q,r)}}function l(p,t,u){var s=t==window,r=i(t);if(!p&&(s&&!b||!s&&!r.data("blockUI.isBlocked"))){return}if(!s){r.data("blockUI.isBlocked",p)}if(!u.bindEvents||(p&&!u.showOverlay)){return}var q="mousedown mouseup keydown keypress";p?i(document).bind(q,u,n):i(document).unbind(q,n)}function n(s){if(s.keyCode&&s.keyCode==9){if(b&&s.data.constrainTabKey){var r=g;var q=!s.shiftKey&&s.target==r[r.length-1];var p=s.shiftKey&&s.target==r[0];if(q||p){setTimeout(function(){o(p)},10);return false}}}if(i(s.target).parents("div.blockMsg").length>0){return true}return i(s.target).parents().children().filter("div.blockUI").length==0}function o(p){if(!g){return}var q=g[p===true?g.length-1:0];if(q){q.focus()}}function a(w,q,A){var z=w.parentNode,v=w.style;var r=((z.offsetWidth-w.offsetWidth)/2)-m(z,"borderLeftWidth");var u=((z.offsetHeight-w.offsetHeight)/2)-m(z,"borderTopWidth");if(q){v.left=r>0?(r+"px"):"0"}if(A){v.top=u>0?(u+"px"):"0"}}function m(q,r){return parseInt(i.css(q,r))||0}})(jQuery);
(function ($) {
	var ColorPicker = function () {
		var
			ids = {},
			inAction,
			charMin = 65,
			visible,
			tpl = '<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div></div>',
			defaults = {
				eventName: 'click',
				onShow: function () {},
				onBeforeShow: function(){},
				onHide: function () {},
				onChange: function () {},
				onSubmit: function () {},
				color: 'ff0000',
				livePreview: true,
				flat: false
			},
			fillRGBFields = function  (hsb, cal) {
				var rgb = HSBToRGB(hsb);
				$(cal).data('colorpicker').fields
					.eq(1).val(rgb.r).end()
					.eq(2).val(rgb.g).end()
					.eq(3).val(rgb.b).end();
			},
			fillHSBFields = function  (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(4).val(hsb.h).end()
					.eq(5).val(hsb.s).end()
					.eq(6).val(hsb.b).end();
			},
			fillHexFields = function (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(0).val(HSBToHex(hsb)).end();
			},
			setSelector = function (hsb, cal) {
				$(cal).data('colorpicker').selector.css('backgroundColor', '#' + HSBToHex({h: hsb.h, s: 100, b: 100}));
				$(cal).data('colorpicker').selectorIndic.css({
					left: parseInt(150 * hsb.s/100, 10),
					top: parseInt(150 * (100-hsb.b)/100, 10)
				});
			},
			setHue = function (hsb, cal) {
				$(cal).data('colorpicker').hue.css('top', parseInt(150 - 150 * hsb.h/360, 10));
			},
			setCurrentColor = function (hsb, cal) {
				$(cal).data('colorpicker').currentColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			setNewColor = function (hsb, cal) {
				$(cal).data('colorpicker').newColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			keyDown = function (ev) {
				var pressedKey = ev.charCode || ev.keyCode || -1;
				if ((pressedKey > charMin && pressedKey <= 90) || pressedKey == 32) {
					return false;
				}
				var cal = $(this).parent().parent();
				if (cal.data('colorpicker').livePreview === true) {
					change.apply(this);
				}
			},
			change = function (ev) {
				var cal = $(this).parent().parent(), col;
				if (this.parentNode.className.indexOf('_hex') > 0) {
					cal.data('colorpicker').color = col = HexToHSB(fixHex(this.value));
				} else if (this.parentNode.className.indexOf('_hsb') > 0) {
					cal.data('colorpicker').color = col = fixHSB({
						h: parseInt(cal.data('colorpicker').fields.eq(4).val(), 10),
						s: parseInt(cal.data('colorpicker').fields.eq(5).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(6).val(), 10)
					});
				} else {
					cal.data('colorpicker').color = col = RGBToHSB(fixRGB({
						r: parseInt(cal.data('colorpicker').fields.eq(1).val(), 10),
						g: parseInt(cal.data('colorpicker').fields.eq(2).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(3).val(), 10)
					}));
				}
				if (ev) {
					fillRGBFields(col, cal.get(0));
					fillHexFields(col, cal.get(0));
					fillHSBFields(col, cal.get(0));
				}
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
				cal.data('colorpicker').onChange.apply(cal, [col, HSBToHex(col), HSBToRGB(col)]);
			},
			blur = function (ev) {
				var cal = $(this).parent().parent();
				cal.data('colorpicker').fields.parent().removeClass('colorpicker_focus');
			},
			focus = function () {
				charMin = this.parentNode.className.indexOf('_hex') > 0 ? 70 : 65;
				$(this).parent().parent().data('colorpicker').fields.parent().removeClass('colorpicker_focus');
				$(this).parent().addClass('colorpicker_focus');
			},
			downIncrement = function (ev) {
				var field = $(this).parent().find('input').focus();
				var current = {
					el: $(this).parent().addClass('colorpicker_slider'),
					max: this.parentNode.className.indexOf('_hsb_h') > 0 ? 360 : (this.parentNode.className.indexOf('_hsb') > 0 ? 100 : 255),
					y: ev.pageY,
					field: field,
					val: parseInt(field.val(), 10),
					preview: $(this).parent().parent().data('colorpicker').livePreview					
				};
				$(document).bind('mouseup', current, upIncrement);
				$(document).bind('mousemove', current, moveIncrement);
			},
			moveIncrement = function (ev) {
				ev.data.field.val(Math.max(0, Math.min(ev.data.max, parseInt(ev.data.val + ev.pageY - ev.data.y, 10))));
				if (ev.data.preview) {
					change.apply(ev.data.field.get(0), [true]);
				}
				return false;
			},
			upIncrement = function (ev) {
				change.apply(ev.data.field.get(0), [true]);
				ev.data.el.removeClass('colorpicker_slider').find('input').focus();
				$(document).unbind('mouseup', upIncrement);
				$(document).unbind('mousemove', moveIncrement);
				return false;
			},
			downHue = function (ev) {
				var current = {
					cal: $(this).parent(),
					y: $(this).offset().top
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).bind('mouseup', current, upHue);
				$(document).bind('mousemove', current, moveHue);
			},
			moveHue = function (ev) {
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(4)
						.val(parseInt(360*(150 - Math.max(0,Math.min(150,(ev.pageY - ev.data.y))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upHue = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).unbind('mouseup', upHue);
				$(document).unbind('mousemove', moveHue);
				return false;
			},
			downSelector = function (ev) {
				var current = {
					cal: $(this).parent(),
					pos: $(this).offset()
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).bind('mouseup', current, upSelector);
				$(document).bind('mousemove', current, moveSelector);
			},
			moveSelector = function (ev) {
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(6)
						.val(parseInt(100*(150 - Math.max(0,Math.min(150,(ev.pageY - ev.data.pos.top))))/150, 10))
						.end()
						.eq(5)
						.val(parseInt(100*(Math.max(0,Math.min(150,(ev.pageX - ev.data.pos.left))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upSelector = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).unbind('mouseup', upSelector);
				$(document).unbind('mousemove', moveSelector);
				return false;
			},
			enterSubmit = function (ev) {
				$(this).addClass('colorpicker_focus');
			},
			leaveSubmit = function (ev) {
				$(this).removeClass('colorpicker_focus');
			},
			clickSubmit = function (ev) {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').color;
				cal.data('colorpicker').origColor = col;
				setCurrentColor(col, cal.get(0));
				cal.data('colorpicker').onSubmit(col, HSBToHex(col), HSBToRGB(col), cal.data('colorpicker').el);
			},
			show = function (ev) {
				var cal = $('#' + $(this).data('colorpickerId'));
				cal.data('colorpicker').onBeforeShow.apply(this, [cal.get(0)]);
				var pos = $(this).offset();
				var viewPort = getViewport();
				var top = pos.top + this.offsetHeight;
				var left = pos.left;
				if (top + 176 > viewPort.t + viewPort.h) {
					top -= this.offsetHeight + 176;
				}
				if (left + 356 > viewPort.l + viewPort.w) {
					left -= 356;
				}
				cal.css({left: left + 'px', top: top + 'px'});
				if (cal.data('colorpicker').onShow.apply(this, [cal.get(0)]) != false) {
					cal.show();
				}
				$(document).bind('mousedown', {cal: cal}, hide);
				return false;
			},
			hide = function (ev) {
				if (!isChildOf(ev.data.cal.get(0), ev.target, ev.data.cal.get(0))) {
					if (ev.data.cal.data('colorpicker').onHide.apply(this, [ev.data.cal.get(0)]) != false) {
						ev.data.cal.hide();
					}
					$(document).unbind('mousedown', hide);
				}
			},
			isChildOf = function(parentEl, el, container) {
				if (parentEl == el) {
					return true;
				}
				if (parentEl.contains) {
					return parentEl.contains(el);
				}
				if ( parentEl.compareDocumentPosition ) {
					return !!(parentEl.compareDocumentPosition(el) & 16);
				}
				var prEl = el.parentNode;
				while(prEl && prEl != container) {
					if (prEl == parentEl)
						return true;
					prEl = prEl.parentNode;
				}
				return false;
			},
			getViewport = function () {
				var m = document.compatMode == 'CSS1Compat';
				return {
					l : window.pageXOffset || (m ? document.documentElement.scrollLeft : document.body.scrollLeft),
					t : window.pageYOffset || (m ? document.documentElement.scrollTop : document.body.scrollTop),
					w : window.innerWidth || (m ? document.documentElement.clientWidth : document.body.clientWidth),
					h : window.innerHeight || (m ? document.documentElement.clientHeight : document.body.clientHeight)
				};
			},
			fixHSB = function (hsb) {
				return {
					h: Math.min(360, Math.max(0, hsb.h)),
					s: Math.min(100, Math.max(0, hsb.s)),
					b: Math.min(100, Math.max(0, hsb.b))
				};
			}, 
			fixRGB = function (rgb) {
				return {
					r: Math.min(255, Math.max(0, rgb.r)),
					g: Math.min(255, Math.max(0, rgb.g)),
					b: Math.min(255, Math.max(0, rgb.b))
				};
			},
			fixHex = function (hex) {
				var len = 6 - hex.length;
				if (len > 0) {
					var o = [];
					for (var i=0; i<len; i++) {
						o.push('0');
					}
					o.push(hex);
					hex = o.join('');
				}
				return hex;
			}, 
			HexToRGB = function (hex) {
				var hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
				return {r: hex >> 16, g: (hex & 0x00FF00) >> 8, b: (hex & 0x0000FF)};
			},
			HexToHSB = function (hex) {
				return RGBToHSB(HexToRGB(hex));
			},
			RGBToHSB = function (rgb) {
				var hsb = {
					h: 0,
					s: 0,
					b: 0
				};
				var min = Math.min(rgb.r, rgb.g, rgb.b);
				var max = Math.max(rgb.r, rgb.g, rgb.b);
				var delta = max - min;
				hsb.b = max;
				if (max != 0) {
					
				}
				hsb.s = max != 0 ? 255 * delta / max : 0;
				if (hsb.s != 0) {
					if (rgb.r == max) {
						hsb.h = (rgb.g - rgb.b) / delta;
					} else if (rgb.g == max) {
						hsb.h = 2 + (rgb.b - rgb.r) / delta;
					} else {
						hsb.h = 4 + (rgb.r - rgb.g) / delta;
					}
				} else {
					hsb.h = -1;
				}
				hsb.h *= 60;
				if (hsb.h < 0) {
					hsb.h += 360;
				}
				hsb.s *= 100/255;
				hsb.b *= 100/255;
				return hsb;
			},
			HSBToRGB = function (hsb) {
				var rgb = {};
				var h = Math.round(hsb.h);
				var s = Math.round(hsb.s*255/100);
				var v = Math.round(hsb.b*255/100);
				if(s == 0) {
					rgb.r = rgb.g = rgb.b = v;
				} else {
					var t1 = v;
					var t2 = (255-s)*v/255;
					var t3 = (t1-t2)*(h%60)/60;
					if(h==360) h = 0;
					if(h<60) {rgb.r=t1;	rgb.b=t2; rgb.g=t2+t3}
					else if(h<120) {rgb.g=t1; rgb.b=t2;	rgb.r=t1-t3}
					else if(h<180) {rgb.g=t1; rgb.r=t2;	rgb.b=t2+t3}
					else if(h<240) {rgb.b=t1; rgb.r=t2;	rgb.g=t1-t3}
					else if(h<300) {rgb.b=t1; rgb.g=t2;	rgb.r=t2+t3}
					else if(h<360) {rgb.r=t1; rgb.g=t2;	rgb.b=t1-t3}
					else {rgb.r=0; rgb.g=0;	rgb.b=0}
				}
				return {r:Math.round(rgb.r), g:Math.round(rgb.g), b:Math.round(rgb.b)};
			},
			RGBToHex = function (rgb) {
				var hex = [
					rgb.r.toString(16),
					rgb.g.toString(16),
					rgb.b.toString(16)
				];
				$.each(hex, function (nr, val) {
					if (val.length == 1) {
						hex[nr] = '0' + val;
					}
				});
				return hex.join('');
			},
			HSBToHex = function (hsb) {
				return RGBToHex(HSBToRGB(hsb));
			},
			restoreOriginal = function () {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').origColor;
				cal.data('colorpicker').color = col;
				fillRGBFields(col, cal.get(0));
				fillHexFields(col, cal.get(0));
				fillHSBFields(col, cal.get(0));
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
			};
		return {
			init: function (opt) {
				opt = $.extend({}, defaults, opt||{});
				if (typeof opt.color == 'string') {
					opt.color = HexToHSB(opt.color);
				} else if (opt.color.r != undefined && opt.color.g != undefined && opt.color.b != undefined) {
					opt.color = RGBToHSB(opt.color);
				} else if (opt.color.h != undefined && opt.color.s != undefined && opt.color.b != undefined) {
					opt.color = fixHSB(opt.color);
				} else {
					return this;
				}
				return this.each(function () {
					if (!$(this).data('colorpickerId')) {
						var options = $.extend({}, opt);
						options.origColor = opt.color;
						var id = 'collorpicker_' + parseInt(Math.random() * 1000);
						$(this).data('colorpickerId', id);
						var cal = $(tpl).attr('id', id);
						if (options.flat) {
							cal.appendTo(this).show();
						} else {
							cal.appendTo(document.body);
						}
						options.fields = cal
											.find('input')
												.bind('keyup', keyDown)
												.bind('change', change)
												.bind('blur', blur)
												.bind('focus', focus);
						cal
							.find('span').bind('mousedown', downIncrement).end()
							.find('>div.colorpicker_current_color').bind('click', restoreOriginal);
						options.selector = cal.find('div.colorpicker_color').bind('mousedown', downSelector);
						options.selectorIndic = options.selector.find('div div');
						options.el = this;
						options.hue = cal.find('div.colorpicker_hue div');
						cal.find('div.colorpicker_hue').bind('mousedown', downHue);
						options.newColor = cal.find('div.colorpicker_new_color');
						options.currentColor = cal.find('div.colorpicker_current_color');
						cal.data('colorpicker', options);
						cal.find('div.colorpicker_submit')
							.bind('mouseenter', enterSubmit)
							.bind('mouseleave', leaveSubmit)
							.bind('click', clickSubmit);
						fillRGBFields(options.color, cal.get(0));
						fillHSBFields(options.color, cal.get(0));
						fillHexFields(options.color, cal.get(0));
						setHue(options.color, cal.get(0));
						setSelector(options.color, cal.get(0));
						setCurrentColor(options.color, cal.get(0));
						setNewColor(options.color, cal.get(0));
						if (options.flat) {
							cal.css({
								position: 'relative',
								display: 'block'
							});
						} else {
							$(this).bind(options.eventName, show);
						}
					}
				});
			},
			showPicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						show.apply(this);
					}
				});
			},
			hidePicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						$('#' + $(this).data('colorpickerId')).hide();
					}
				});
			},
			setColor: function(col) {
				if (typeof col == 'string') {
					col = HexToHSB(col);
				} else if (col.r != undefined && col.g != undefined && col.b != undefined) {
					col = RGBToHSB(col);
				} else if (col.h != undefined && col.s != undefined && col.b != undefined) {
					col = fixHSB(col);
				} else {
					return this;
				}
				return this.each(function(){
					if ($(this).data('colorpickerId')) {
						var cal = $('#' + $(this).data('colorpickerId'));
						cal.data('colorpicker').color = col;
						cal.data('colorpicker').origColor = col;
						fillRGBFields(col, cal.get(0));
						fillHSBFields(col, cal.get(0));
						fillHexFields(col, cal.get(0));
						setHue(col, cal.get(0));
						setSelector(col, cal.get(0));
						setCurrentColor(col, cal.get(0));
						setNewColor(col, cal.get(0));
					}
				});
			}
		};
	}();
	$.fn.extend({
		ColorPicker: ColorPicker.init,
		ColorPickerHide: ColorPicker.hidePicker,
		ColorPickerShow: ColorPicker.showPicker,
		ColorPickerSetColor: ColorPicker.setColor
	});
})(jQuery)
jQuery.fn.repeatedclick = function (f, options) {
    var defaults = {
        duration  : 350,
        speed     : 0.85,
        min       : 50
    };

    var opts = jQuery.extend(defaults, options);

    if (typeof jQuery.repeatedEvents === 'undefined') {
        jQuery.repeatedEvents = [];
    }

    if (typeof jQuery.repeatedElements === 'undefined') {
        jQuery.repeatedElements = [];
    }

    jQuery.repeatedEvents.push(f);
    jQuery.repeatedElements.push(this);

    var eventNum = jQuery.repeatedEvents.length - 1;

    return this.each(function () {
        repeatedEvent = function (eventNum, duration) {
            jQuery.repeatedElements[eventNum].each(
                jQuery.repeatedEvents[eventNum]
            );

            repeatedEventTimer = setTimeout(
                'repeatedEvent(' + eventNum + ', ' +
                (duration > opts.min ? duration * opts.speed : duration) + ')',
                duration
            );
        };

        jQuery(this).mousedown(function () {
            jQuery.repeatedEventDuration = opts.duration;
            repeatedEvent(eventNum, opts.duration);
        });

        var clearRepeatedEvent = function () {
            if (typeof repeatedEventTimer !== 'undefined') {
                clearInterval(repeatedEventTimer);
            }
        };

        jQuery(this).mouseout(clearRepeatedEvent);
        jQuery(this).mouseup(clearRepeatedEvent);
    });
};
jQuery(function() {
  jQuery('head').append('<style type="text/css">[draggable=true] {-webkit-user-drag: element; -webkit-user-select: none; -moz-user-select: none;}</style>');
});

(function( $ ){
  $.fn.imgDrop = function(options){
    return this.each(function(){
      
      var self = $(this);
      var settings = new Object;
	  
      settings.imageHandler = function(file) {
        self.reader = new FileReader();
        var img = $('<img/>');
		
        self.reader.onload = function(event){
          img.attr('src', event.target.result);
		  settings.afterDrop(img, self);
        };
		
		self.reader.onerror = function(event) {
			switch(event.target.error.code) {
				case event.target.error.NOT_FOUND_ERR:
					alert('File Not Found!');
					break;
				
				case event.target.error.NOT_READABLE_ERR:
					alert('File is not readable');
					break;
				
				case event.target.error.ABORT_ERR:
					break; // noop
				
				default:
					alert('An error occurred reading this file.');
			}
		};
		
		self.reader.onabort = function(event) {
			alert('File read cancelled');
		};

        self.reader.readAsDataURL(file);
      },
      settings.afterDrop = function(element, dropTarget){
        $(element).appendTo(dropTarget);
      },
      settings.accepts = {'image': settings.imageHandler};

	  if(typeof options.beforeDrop == 'function') {
        settings.beforeDrop = options.beforeDrop;
      }
      if(typeof options.afterDrop == 'function') {
        settings.afterDrop = options.afterDrop;
      }
	  if(typeof options.afterAllDrop == 'function') {
        settings.afterAllDrop = options.afterAllDrop;
      }

      // Tells the browser that we *can* drop on this target
      self.bind('dragover dragenter', function(event){
        if(event.preventDefault){
          event.preventDefault();
        }
        return false;
      });
      self.bind('drop', function(event){
        //do not allow the browser to handle the default drop behavior.
        if(event.preventDefault){
          event.preventDefault();
        }

        //jQuery normalizes the events to be cross-browser
        //get the dataTransfer from the original Event in modern browsers
        var dataTransfer = event.originalEvent.dataTransfer;
        //and bail if we can't continue
        if(!dataTransfer)
          return false;
        if(!dataTransfer.files || dataTransfer.files.length == 0)
          return false;

		settings.beforeDrop();
		// Give time for the beforeDrop to kick in, otherwise we block the UI
		//setTimeout(function() {
			for(var i=0; i < dataTransfer.files.length; i++){
			  var file = dataTransfer.files[i];

			  var handler = null;
			  //find the handler based matching the accept string
			  for(var type in settings.accepts){
				if(file.type.match(type)){
				  handler = settings.accepts[type];
				  break;
				}
			  }
			  
			  //if no handler was found, go on to the next file.
			  if(!handler) {
				continue;
			  }
			  
			  handler(file);
			}
			
			settings.afterAllDrop();
		//}, 500);
		
        return false;
      });
    });
  };
})(jQuery);
(function(c,g){function k(){}function h(a){s=[a]}function e(a,l,m){return a&&a.apply(l.context||l,m)}function i(a){function l(b){!n++&&g(function(){p();q&&(t[d]={s:[b]});z&&(b=z.apply(a,[b]));e(a.success,a,[b,A]);e(B,a,[a,A])},0)}function m(b){!n++&&g(function(){p();q&&b!=C&&(t[d]=b);e(a.error,a,[a,b]);e(B,a,[a,b])},0)}a=c.extend({},D,a);var B=a.complete,z=a.dataFilter,E=a.callbackParameter,F=a.callback,R=a.cache,q=a.pageCache,G=a.charset,d=a.url,f=a.data,H=a.timeout,r,n=0,p=k;a.abort=function(){!n++&& p()};if(e(a.beforeSend,a,[a])===false||n)return a;d=d||u;f=f?typeof f=="string"?f:c.param(f,a.traditional):u;d+=f?(/\?/.test(d)?"&":"?")+f:u;E&&(d+=(/\?/.test(d)?"&":"?")+escape(E)+"=?");!R&&!q&&(d+=(/\?/.test(d)?"&":"?")+"_"+(new Date).getTime()+"=");d=d.replace(/=\?(&|$)/,"="+F+"$1");q&&(r=t[d])?r.s?l(r.s[0]):m(r):g(function(b,o,v){if(!n){v=H>0&&g(function(){m(C)},H);p=function(){v&&clearTimeout(v);b[I]=b[w]=b[J]=b[x]=null;j[K](b);o&&j[K](o)};window[F]=h;b=c(L)[0];b.id=M+S++;if(G)b[T]=G;var O=function(y){(b[w]|| k)();y=s;s=undefined;y?l(y[0]):m(N)};if(P.msie){b.event=w;b.htmlFor=b.id;b[I]=function(){b.readyState=="loaded"&&O()}}else{b[x]=b[J]=O;P.opera?(o=c(L)[0]).text="jQuery('#"+b.id+"')[0]."+x+"()":b[Q]=Q}b.src=d;j.insertBefore(b,j.firstChild);o&&j.insertBefore(o,j.firstChild)}},0);return a}var Q="async",T="charset",u="",N="error",M="_jqjsp",w="onclick",x="on"+N,J="onload",I="onreadystatechange",K="removeChild",L="<script/>",A="success",C="timeout",P=c.browser,j=c("head")[0]||document.documentElement, t={},S=0,s,D={callback:M,url:location.href};i.setup=function(a){c.extend(D,a)};c.jsonp=i})(jQuery,setTimeout); jQuery.getImageData=function(c){var g=/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;if(c.url){var k=location.protocol==="https:",h="";if(c.server&&g.test(c.server)&&c.server.indexOf("https:")&&(k||c.url.indexOf("https:")))h=c.server;else{h=!c.url.indexOf("https:")||k?"https://img-to-json.appspot":"http://img-to-json.maxnov";h+=".com/?callback=?"}$.jsonp({url:h,data:{url:escape(c.url)},dataType:"jsonp",timeout:1E4,success:function(e){var i=new Image;$(i).load(function(){this.width= e.width;this.height=e.height;typeof c.success==typeof Function&&c.success(this)}).attr("src",e.data)},error:function(e,i){typeof c.error==typeof Function&&c.error(e,i)}})}else typeof c.error==typeof Function&&c.error(null,"no_url")};
(function() {

var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64DecodeChars = new Array(
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
    52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
    -1,  0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
    -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

function base64encode(str) {
    var out, i, len;
    var c1, c2, c3;

    len = str.length;
    i = 0;
    out = "";
    while(i < len) {
	c1 = str.charCodeAt(i++) & 0xff;
	if(i == len)
	{
	    out += base64EncodeChars.charAt(c1 >> 2);
	    out += base64EncodeChars.charAt((c1 & 0x3) << 4);
	    out += "==";
	    break;
	}
	c2 = str.charCodeAt(i++);
	if(i == len)
	{
	    out += base64EncodeChars.charAt(c1 >> 2);
	    out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
	    out += base64EncodeChars.charAt((c2 & 0xF) << 2);
	    out += "=";
	    break;
	}
	c3 = str.charCodeAt(i++);
	out += base64EncodeChars.charAt(c1 >> 2);
	out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
	out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >>6));
	out += base64EncodeChars.charAt(c3 & 0x3F);
    }
    return out;
}

function base64decode(str) {
    var c1, c2, c3, c4;
    var i, len, out;

    len = str.length;
    i = 0;
    out = "";
    while(i < len) {
	/* c1 */
	do {
	    c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
	} while(i < len && c1 == -1);
	if(c1 == -1)
	    break;

	/* c2 */
	do {
	    c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
	} while(i < len && c2 == -1);
	if(c2 == -1)
	    break;

	out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

	/* c3 */
	do {
	    c3 = str.charCodeAt(i++) & 0xff;
	    if(c3 == 61)
		return out;
	    c3 = base64DecodeChars[c3];
	} while(i < len && c3 == -1);
	if(c3 == -1)
	    break;

	out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

	/* c4 */
	do {
	    c4 = str.charCodeAt(i++) & 0xff;
	    if(c4 == 61)
		return out;
	    c4 = base64DecodeChars[c4];
	} while(i < len && c4 == -1);
	if(c4 == -1)
	    break;
	out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
    }
    return out;
}

if (!window.btoa) window.btoa = base64encode;
if (!window.atob) window.atob = base64decode;

})();
var Canvas2Image = (function() {

	// check if we have canvas support
	var bHasCanvas = false;
	var oCanvas = document.createElement("canvas");
	if (oCanvas.getContext("2d")) {
		bHasCanvas = true;
	}

	// no canvas, bail out.
	if (!bHasCanvas) {
		return {
			saveAsBMP : function(){},
			saveAsPNG : function(){},
			saveAsJPEG : function(){}
		}
	}

	var bHasImageData = !!(oCanvas.getContext("2d").getImageData);
	var bHasDataURL = !!(oCanvas.toDataURL);
	var bHasBase64 = !!(window.btoa);

	var strDownloadMime = "image/octet-stream";

	// ok, we're good
	var readCanvasData = function(oCanvas) {
		var iWidth = parseInt(oCanvas.width);
		var iHeight = parseInt(oCanvas.height);
		return oCanvas.getContext("2d").getImageData(0,0,iWidth,iHeight);
	}

	// base64 encodes either a string or an array of charcodes
	var encodeData = function(data) {
		var strData = "";
		if (typeof data == "string") {
			strData = data;
		} else {
			var aData = data;
			for (var i=0;i<aData.length;i++) {
				strData += String.fromCharCode(aData[i]);
			}
		}
		return btoa(strData);
	}

	// creates a base64 encoded string containing BMP data
	// takes an imagedata object as argument
	var createBMP = function(oData) {
		var aHeader = [];
	
		var iWidth = oData.width;
		var iHeight = oData.height;

		aHeader.push(0x42); // magic 1
		aHeader.push(0x4D); 
	
		var iFileSize = iWidth*iHeight*3 + 54; // total header size = 54 bytes
		aHeader.push(iFileSize % 256); iFileSize = Math.floor(iFileSize / 256);
		aHeader.push(iFileSize % 256); iFileSize = Math.floor(iFileSize / 256);
		aHeader.push(iFileSize % 256); iFileSize = Math.floor(iFileSize / 256);
		aHeader.push(iFileSize % 256);

		aHeader.push(0); // reserved
		aHeader.push(0);
		aHeader.push(0); // reserved
		aHeader.push(0);

		aHeader.push(54); // dataoffset
		aHeader.push(0);
		aHeader.push(0);
		aHeader.push(0);

		var aInfoHeader = [];
		aInfoHeader.push(40); // info header size
		aInfoHeader.push(0);
		aInfoHeader.push(0);
		aInfoHeader.push(0);

		var iImageWidth = iWidth;
		aInfoHeader.push(iImageWidth % 256); iImageWidth = Math.floor(iImageWidth / 256);
		aInfoHeader.push(iImageWidth % 256); iImageWidth = Math.floor(iImageWidth / 256);
		aInfoHeader.push(iImageWidth % 256); iImageWidth = Math.floor(iImageWidth / 256);
		aInfoHeader.push(iImageWidth % 256);
	
		var iImageHeight = iHeight;
		aInfoHeader.push(iImageHeight % 256); iImageHeight = Math.floor(iImageHeight / 256);
		aInfoHeader.push(iImageHeight % 256); iImageHeight = Math.floor(iImageHeight / 256);
		aInfoHeader.push(iImageHeight % 256); iImageHeight = Math.floor(iImageHeight / 256);
		aInfoHeader.push(iImageHeight % 256);
	
		aInfoHeader.push(1); // num of planes
		aInfoHeader.push(0);
	
		aInfoHeader.push(24); // num of bits per pixel
		aInfoHeader.push(0);
	
		aInfoHeader.push(0); // compression = none
		aInfoHeader.push(0);
		aInfoHeader.push(0);
		aInfoHeader.push(0);
	
		var iDataSize = iWidth*iHeight*3; 
		aInfoHeader.push(iDataSize % 256); iDataSize = Math.floor(iDataSize / 256);
		aInfoHeader.push(iDataSize % 256); iDataSize = Math.floor(iDataSize / 256);
		aInfoHeader.push(iDataSize % 256); iDataSize = Math.floor(iDataSize / 256);
		aInfoHeader.push(iDataSize % 256); 
	
		for (var i=0;i<16;i++) {
			aInfoHeader.push(0);	// these bytes not used
		}
	
		var iPadding = (4 - ((iWidth * 3) % 4)) % 4;

		var aImgData = oData.data;

		var strPixelData = "";
		var y = iHeight;
		do {
			var iOffsetY = iWidth*(y-1)*4;
			var strPixelRow = "";
			for (var x=0;x<iWidth;x++) {
				var iOffsetX = 4*x;

				strPixelRow += String.fromCharCode(aImgData[iOffsetY+iOffsetX+2]);
				strPixelRow += String.fromCharCode(aImgData[iOffsetY+iOffsetX+1]);
				strPixelRow += String.fromCharCode(aImgData[iOffsetY+iOffsetX]);
			}
			for (var c=0;c<iPadding;c++) {
				strPixelRow += String.fromCharCode(0);
			}
			strPixelData += strPixelRow;
		} while (--y);

		var strEncoded = encodeData(aHeader.concat(aInfoHeader)) + encodeData(strPixelData);

		return strEncoded;
	}


	// sends the generated file to the client
	var saveFile = function(strData) {
		document.location.href = strData;
	}

	var makeDataURI = function(strData, strMime) {
		return "data:" + strMime + ";base64," + strData;
	}

	// generates a <img> object containing the imagedata
	var makeImageObject = function(strSource) {
		var oImgElement = document.createElement("img");
		oImgElement.src = strSource;
		return oImgElement;
	}

	var scaleCanvas = function(oCanvas, iWidth, iHeight) {
		if (iWidth && iHeight) {
			var oSaveCanvas = document.createElement("canvas");
			oSaveCanvas.width = iWidth;
			oSaveCanvas.height = iHeight;
			oSaveCanvas.style.width = iWidth+"px";
			oSaveCanvas.style.height = iHeight+"px";

			var oSaveCtx = oSaveCanvas.getContext("2d");

			oSaveCtx.drawImage(oCanvas, 0, 0, oCanvas.width, oCanvas.height, 0, 0, iWidth, iHeight);
			return oSaveCanvas;
		}
		return oCanvas;
	}

	return {

		saveAsPNG : function(oCanvas, bReturnImg, iWidth, iHeight) {
			if (!bHasDataURL) {
				return false;
			}
			var oScaledCanvas = scaleCanvas(oCanvas, iWidth, iHeight);
			var strData = oScaledCanvas.toDataURL("image/png");
			if (bReturnImg) {
				return makeImageObject(strData);
			} else {
				saveFile(strData.replace("image/png", strDownloadMime));
			}
			return true;
		},

		saveAsJPEG : function(oCanvas, bReturnImg, iWidth, iHeight) {
			if (!bHasDataURL) {
				return false;
			}

			var oScaledCanvas = scaleCanvas(oCanvas, iWidth, iHeight);
			var strMime = "image/jpeg";
			var strData = oScaledCanvas.toDataURL(strMime);
	
			// check if browser actually supports jpeg by looking for the mime type in the data uri.
			// if not, return false
			if (strData.indexOf(strMime) != 5) {
				return false;
			}

			if (bReturnImg) {
				return makeImageObject(strData);
			} else {
				saveFile(strData.replace(strMime, strDownloadMime));
			}
			return true;
		},

		saveAsBMP : function(oCanvas, bReturnImg, iWidth, iHeight) {
			if (!(bHasImageData && bHasBase64)) {
				return false;
			}

			var oScaledCanvas = scaleCanvas(oCanvas, iWidth, iHeight);

			var oData = readCanvasData(oScaledCanvas);
			var strImgData = createBMP(oData);
			if (bReturnImg) {
				return makeImageObject(makeDataURI(strImgData, "image/bmp"));
			} else {
				saveFile(makeDataURI(strImgData, strDownloadMime));
			}
			return true;
		}
	};

})();
/*mousewheel*/
(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);
/*custom scrollbar*/
(function(c){var b={init:function(e){var f={set_width:false,set_height:false,horizontalScroll:false,scrollInertia:950,mouseWheel:true,mouseWheelPixels:"auto",autoDraggerLength:true,autoHideScrollbar:false,snapAmount:null,snapOffset:0,scrollButtons:{enable:false,scrollType:"continuous",scrollSpeed:"auto",scrollAmount:40},advanced:{updateOnBrowserResize:true,updateOnContentResize:false,autoExpandHorizontalScroll:false,autoScrollOnFocus:true,normalizeMouseWheelDelta:false},contentTouchScroll:true,callbacks:{onScrollStart:function(){},onScroll:function(){},onTotalScroll:function(){},onTotalScrollBack:function(){},onTotalScrollOffset:0,onTotalScrollBackOffset:0,whileScrolling:function(){}},theme:"light"},e=c.extend(true,f,e);return this.each(function(){var m=c(this);if(e.set_width){m.css("width",e.set_width)}if(e.set_height){m.css("height",e.set_height)}if(!c(document).data("mCustomScrollbar-index")){c(document).data("mCustomScrollbar-index","1")}else{var t=parseInt(c(document).data("mCustomScrollbar-index"));c(document).data("mCustomScrollbar-index",t+1)}m.wrapInner("<div class='mCustomScrollBox mCS-"+e.theme+"' id='mCSB_"+c(document).data("mCustomScrollbar-index")+"' style='position:relative; height:100%; overflow:hidden; max-width:100%;' />").addClass("mCustomScrollbar _mCS_"+c(document).data("mCustomScrollbar-index"));var g=m.children(".mCustomScrollBox");if(e.horizontalScroll){g.addClass("mCSB_horizontal").wrapInner("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />");var k=g.children(".mCSB_h_wrapper");k.wrapInner("<div class='mCSB_container' style='position:absolute; left:0;' />").children(".mCSB_container").css({width:k.children().outerWidth(),position:"relative"}).unwrap()}else{g.wrapInner("<div class='mCSB_container' style='position:relative; top:0;' />")}var o=g.children(".mCSB_container");if(c.support.touch){o.addClass("mCS_touch")}o.after("<div class='mCSB_scrollTools' style='position:absolute;'><div class='mCSB_draggerContainer'><div class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' style='position:relative;'></div></div><div class='mCSB_draggerRail'></div></div></div>");var l=g.children(".mCSB_scrollTools"),h=l.children(".mCSB_draggerContainer"),q=h.children(".mCSB_dragger");if(e.horizontalScroll){q.data("minDraggerWidth",q.width())}else{q.data("minDraggerHeight",q.height())}if(e.scrollButtons.enable){if(e.horizontalScroll){l.prepend("<a class='mCSB_buttonLeft' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonRight' oncontextmenu='return false;'></a>")}else{l.prepend("<a class='mCSB_buttonUp' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonDown' oncontextmenu='return false;'></a>")}}g.bind("scroll",function(){if(!m.is(".mCS_disabled")){g.scrollTop(0).scrollLeft(0)}});m.data({mCS_Init:true,mCustomScrollbarIndex:c(document).data("mCustomScrollbar-index"),horizontalScroll:e.horizontalScroll,scrollInertia:e.scrollInertia,scrollEasing:"mcsEaseOut",mouseWheel:e.mouseWheel,mouseWheelPixels:e.mouseWheelPixels,autoDraggerLength:e.autoDraggerLength,autoHideScrollbar:e.autoHideScrollbar,snapAmount:e.snapAmount,snapOffset:e.snapOffset,scrollButtons_enable:e.scrollButtons.enable,scrollButtons_scrollType:e.scrollButtons.scrollType,scrollButtons_scrollSpeed:e.scrollButtons.scrollSpeed,scrollButtons_scrollAmount:e.scrollButtons.scrollAmount,autoExpandHorizontalScroll:e.advanced.autoExpandHorizontalScroll,autoScrollOnFocus:e.advanced.autoScrollOnFocus,normalizeMouseWheelDelta:e.advanced.normalizeMouseWheelDelta,contentTouchScroll:e.contentTouchScroll,onScrollStart_Callback:e.callbacks.onScrollStart,onScroll_Callback:e.callbacks.onScroll,onTotalScroll_Callback:e.callbacks.onTotalScroll,onTotalScrollBack_Callback:e.callbacks.onTotalScrollBack,onTotalScroll_Offset:e.callbacks.onTotalScrollOffset,onTotalScrollBack_Offset:e.callbacks.onTotalScrollBackOffset,whileScrolling_Callback:e.callbacks.whileScrolling,bindEvent_scrollbar_drag:false,bindEvent_content_touch:false,bindEvent_scrollbar_click:false,bindEvent_mousewheel:false,bindEvent_buttonsContinuous_y:false,bindEvent_buttonsContinuous_x:false,bindEvent_buttonsPixels_y:false,bindEvent_buttonsPixels_x:false,bindEvent_focusin:false,bindEvent_autoHideScrollbar:false,mCSB_buttonScrollRight:false,mCSB_buttonScrollLeft:false,mCSB_buttonScrollDown:false,mCSB_buttonScrollUp:false});if(e.horizontalScroll){if(m.css("max-width")!=="none"){if(!e.advanced.updateOnContentResize){e.advanced.updateOnContentResize=true}}}else{if(m.css("max-height")!=="none"){var s=false,r=parseInt(m.css("max-height"));if(m.css("max-height").indexOf("%")>=0){s=r,r=m.parent().height()*s/100}m.css("overflow","hidden");g.css("max-height",r)}}m.mCustomScrollbar("update");if(e.advanced.updateOnBrowserResize){var i,j=c(window).width(),u=c(window).height();c(window).bind("resize."+m.data("mCustomScrollbarIndex"),function(){if(i){clearTimeout(i)}i=setTimeout(function(){if(!m.is(".mCS_disabled")&&!m.is(".mCS_destroyed")){var w=c(window).width(),v=c(window).height();if(j!==w||u!==v){if(m.css("max-height")!=="none"&&s){g.css("max-height",m.parent().height()*s/100)}m.mCustomScrollbar("update");j=w;u=v}}},150)})}if(e.advanced.updateOnContentResize){var p;if(e.horizontalScroll){var n=o.outerWidth()}else{var n=o.outerHeight()}p=setInterval(function(){if(e.horizontalScroll){if(e.advanced.autoExpandHorizontalScroll){o.css({position:"absolute",width:"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:o.outerWidth(),position:"relative"}).unwrap()}var v=o.outerWidth()}else{var v=o.outerHeight()}if(v!=n){m.mCustomScrollbar("update");n=v}},300)}})},update:function(){var n=c(this),k=n.children(".mCustomScrollBox"),q=k.children(".mCSB_container");q.removeClass("mCS_no_scrollbar");n.removeClass("mCS_disabled mCS_destroyed");k.scrollTop(0).scrollLeft(0);var y=k.children(".mCSB_scrollTools"),o=y.children(".mCSB_draggerContainer"),m=o.children(".mCSB_dragger");if(n.data("horizontalScroll")){var A=y.children(".mCSB_buttonLeft"),t=y.children(".mCSB_buttonRight"),f=k.width();if(n.data("autoExpandHorizontalScroll")){q.css({position:"absolute",width:"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:q.outerWidth(),position:"relative"}).unwrap()}var z=q.outerWidth()}else{var w=y.children(".mCSB_buttonUp"),g=y.children(".mCSB_buttonDown"),r=k.height(),i=q.outerHeight()}if(i>r&&!n.data("horizontalScroll")){y.css("display","block");var s=o.height();if(n.data("autoDraggerLength")){var u=Math.round(r/i*s),l=m.data("minDraggerHeight");if(u<=l){m.css({height:l})}else{if(u>=s-10){var p=s-10;m.css({height:p})}else{m.css({height:u})}}m.children(".mCSB_dragger_bar").css({"line-height":m.height()+"px"})}var B=m.height(),x=(i-r)/(s-B);n.data("scrollAmount",x).mCustomScrollbar("scrolling",k,q,o,m,w,g,A,t);var D=Math.abs(q.position().top);n.mCustomScrollbar("scrollTo",D,{scrollInertia:0,trigger:"internal"})}else{if(z>f&&n.data("horizontalScroll")){y.css("display","block");var h=o.width();if(n.data("autoDraggerLength")){var j=Math.round(f/z*h),C=m.data("minDraggerWidth");if(j<=C){m.css({width:C})}else{if(j>=h-10){var e=h-10;m.css({width:e})}else{m.css({width:j})}}}var v=m.width(),x=(z-f)/(h-v);n.data("scrollAmount",x).mCustomScrollbar("scrolling",k,q,o,m,w,g,A,t);var D=Math.abs(q.position().left);n.mCustomScrollbar("scrollTo",D,{scrollInertia:0,trigger:"internal"})}else{k.unbind("mousewheel focusin");if(n.data("horizontalScroll")){m.add(q).css("left",0)}else{m.add(q).css("top",0)}y.css("display","none");q.addClass("mCS_no_scrollbar");n.data({bindEvent_mousewheel:false,bindEvent_focusin:false})}}},scrolling:function(h,p,m,j,w,e,A,v){var k=c(this);if(!k.data("bindEvent_scrollbar_drag")){var n,o;if(c.support.msPointer){j.bind("MSPointerDown",function(H){H.preventDefault();k.data({on_drag:true});j.addClass("mCSB_dragger_onDrag");var G=c(this),J=G.offset(),F=H.originalEvent.pageX-J.left,I=H.originalEvent.pageY-J.top;if(F<G.width()&&F>0&&I<G.height()&&I>0){n=I;o=F}});c(document).bind("MSPointerMove."+k.data("mCustomScrollbarIndex"),function(H){H.preventDefault();if(k.data("on_drag")){var G=j,J=G.offset(),F=H.originalEvent.pageX-J.left,I=H.originalEvent.pageY-J.top;D(n,o,I,F)}}).bind("MSPointerUp."+k.data("mCustomScrollbarIndex"),function(x){k.data({on_drag:false});j.removeClass("mCSB_dragger_onDrag")})}else{j.bind("mousedown touchstart",function(H){H.preventDefault();H.stopImmediatePropagation();var G=c(this),K=G.offset(),F,J;if(H.type==="touchstart"){var I=H.originalEvent.touches[0]||H.originalEvent.changedTouches[0];F=I.pageX-K.left;J=I.pageY-K.top}else{k.data({on_drag:true});j.addClass("mCSB_dragger_onDrag");F=H.pageX-K.left;J=H.pageY-K.top}if(F<G.width()&&F>0&&J<G.height()&&J>0){n=J;o=F}}).bind("touchmove",function(H){H.preventDefault();H.stopImmediatePropagation();var K=H.originalEvent.touches[0]||H.originalEvent.changedTouches[0],G=c(this),J=G.offset(),F=K.pageX-J.left,I=K.pageY-J.top;D(n,o,I,F)});c(document).bind("mousemove."+k.data("mCustomScrollbarIndex"),function(H){if(k.data("on_drag")){var G=j,J=G.offset(),F=H.pageX-J.left,I=H.pageY-J.top;D(n,o,I,F)}}).bind("mouseup."+k.data("mCustomScrollbarIndex"),function(x){k.data({on_drag:false});j.removeClass("mCSB_dragger_onDrag")})}k.data({bindEvent_scrollbar_drag:true})}function D(G,H,I,F){if(k.data("horizontalScroll")){k.mCustomScrollbar("scrollTo",(j.position().left-(H))+F,{moveDragger:true,trigger:"internal"})}else{k.mCustomScrollbar("scrollTo",(j.position().top-(G))+I,{moveDragger:true,trigger:"internal"})}}if(c.support.touch&&k.data("contentTouchScroll")){if(!k.data("bindEvent_content_touch")){var l,B,r,s,u,C,E;p.bind("touchstart",function(x){x.stopImmediatePropagation();l=x.originalEvent.touches[0]||x.originalEvent.changedTouches[0];B=c(this);r=B.offset();u=l.pageX-r.left;s=l.pageY-r.top;C=s;E=u});p.bind("touchmove",function(x){x.preventDefault();x.stopImmediatePropagation();l=x.originalEvent.touches[0]||x.originalEvent.changedTouches[0];B=c(this).parent();r=B.offset();u=l.pageX-r.left;s=l.pageY-r.top;if(k.data("horizontalScroll")){k.mCustomScrollbar("scrollTo",E-u,{trigger:"internal"})}else{k.mCustomScrollbar("scrollTo",C-s,{trigger:"internal"})}})}}if(!k.data("bindEvent_scrollbar_click")){m.bind("click",function(F){var x=(F.pageY-m.offset().top)*k.data("scrollAmount"),y=c(F.target);if(k.data("horizontalScroll")){x=(F.pageX-m.offset().left)*k.data("scrollAmount")}if(y.hasClass("mCSB_draggerContainer")||y.hasClass("mCSB_draggerRail")){k.mCustomScrollbar("scrollTo",x,{trigger:"internal",scrollEasing:"draggerRailEase"})}});k.data({bindEvent_scrollbar_click:true})}if(k.data("mouseWheel")){if(!k.data("bindEvent_mousewheel")){h.bind("mousewheel",function(H,J){var G,F=k.data("mouseWheelPixels"),x=Math.abs(p.position().top),I=j.position().top,y=m.height()-j.height();if(k.data("normalizeMouseWheelDelta")){if(J<0){J=-1}else{J=1}}if(F==="auto"){F=100+Math.round(k.data("scrollAmount")/2)}if(k.data("horizontalScroll")){I=j.position().left;y=m.width()-j.width();x=Math.abs(p.position().left)}if((J>0&&I!==0)||(J<0&&I!==y)){H.preventDefault();H.stopImmediatePropagation()}G=x-(J*F);k.mCustomScrollbar("scrollTo",G,{trigger:"internal"})});k.data({bindEvent_mousewheel:true})}}if(k.data("scrollButtons_enable")){if(k.data("scrollButtons_scrollType")==="pixels"){if(k.data("horizontalScroll")){v.add(A).unbind("mousedown touchstart MSPointerDown mouseup MSPointerUp mouseout MSPointerOut touchend",i,g);k.data({bindEvent_buttonsContinuous_x:false});if(!k.data("bindEvent_buttonsPixels_x")){v.bind("click",function(x){x.preventDefault();q(Math.abs(p.position().left)+k.data("scrollButtons_scrollAmount"))});A.bind("click",function(x){x.preventDefault();q(Math.abs(p.position().left)-k.data("scrollButtons_scrollAmount"))});k.data({bindEvent_buttonsPixels_x:true})}}else{e.add(w).unbind("mousedown touchstart MSPointerDown mouseup MSPointerUp mouseout MSPointerOut touchend",i,g);k.data({bindEvent_buttonsContinuous_y:false});if(!k.data("bindEvent_buttonsPixels_y")){e.bind("click",function(x){x.preventDefault();q(Math.abs(p.position().top)+k.data("scrollButtons_scrollAmount"))});w.bind("click",function(x){x.preventDefault();q(Math.abs(p.position().top)-k.data("scrollButtons_scrollAmount"))});k.data({bindEvent_buttonsPixels_y:true})}}function q(x){if(!j.data("preventAction")){j.data("preventAction",true);k.mCustomScrollbar("scrollTo",x,{trigger:"internal"})}}}else{if(k.data("horizontalScroll")){v.add(A).unbind("click");k.data({bindEvent_buttonsPixels_x:false});if(!k.data("bindEvent_buttonsContinuous_x")){v.bind("mousedown touchstart MSPointerDown",function(y){y.preventDefault();var x=z();k.data({mCSB_buttonScrollRight:setInterval(function(){k.mCustomScrollbar("scrollTo",Math.abs(p.position().left)+x,{trigger:"internal",scrollEasing:"easeOutCirc"})},17)})});var i=function(x){x.preventDefault();clearInterval(k.data("mCSB_buttonScrollRight"))};v.bind("mouseup touchend MSPointerUp mouseout MSPointerOut",i);A.bind("mousedown touchstart MSPointerDown",function(y){y.preventDefault();var x=z();k.data({mCSB_buttonScrollLeft:setInterval(function(){k.mCustomScrollbar("scrollTo",Math.abs(p.position().left)-x,{trigger:"internal",scrollEasing:"easeOutCirc"})},17)})});var g=function(x){x.preventDefault();clearInterval(k.data("mCSB_buttonScrollLeft"))};A.bind("mouseup touchend MSPointerUp mouseout MSPointerOut",g);k.data({bindEvent_buttonsContinuous_x:true})}}else{e.add(w).unbind("click");k.data({bindEvent_buttonsPixels_y:false});if(!k.data("bindEvent_buttonsContinuous_y")){e.bind("mousedown touchstart MSPointerDown",function(y){y.preventDefault();var x=z();k.data({mCSB_buttonScrollDown:setInterval(function(){k.mCustomScrollbar("scrollTo",Math.abs(p.position().top)+x,{trigger:"internal",scrollEasing:"easeOutCirc"})},17)})});var t=function(x){x.preventDefault();clearInterval(k.data("mCSB_buttonScrollDown"))};e.bind("mouseup touchend MSPointerUp mouseout MSPointerOut",t);w.bind("mousedown touchstart MSPointerDown",function(y){y.preventDefault();var x=z();k.data({mCSB_buttonScrollUp:setInterval(function(){k.mCustomScrollbar("scrollTo",Math.abs(p.position().top)-x,{trigger:"internal",scrollEasing:"easeOutCirc"})},17)})});var f=function(x){x.preventDefault();clearInterval(k.data("mCSB_buttonScrollUp"))};w.bind("mouseup touchend MSPointerUp mouseout MSPointerOut",f);k.data({bindEvent_buttonsContinuous_y:true})}}function z(){var x=k.data("scrollButtons_scrollSpeed");if(k.data("scrollButtons_scrollSpeed")==="auto"){x=Math.round((k.data("scrollInertia")+100)/40)}return x}}}if(k.data("autoScrollOnFocus")){if(!k.data("bindEvent_focusin")){h.bind("focusin",function(){h.scrollTop(0).scrollLeft(0);var x=c(document.activeElement);if(x.is("input,textarea,select,button,a[tabindex],area,object")){var G=p.position().top,y=x.position().top,F=h.height()-x.outerHeight();if(k.data("horizontalScroll")){G=p.position().left;y=x.position().left;F=h.width()-x.outerWidth()}if(G+y<0||G+y>F){k.mCustomScrollbar("scrollTo",y,{trigger:"internal"})}}});k.data({bindEvent_focusin:true})}}if(k.data("autoHideScrollbar")){if(!k.data("bindEvent_autoHideScrollbar")){h.bind("mouseenter",function(x){h.addClass("mCS-mouse-over");d.showScrollbar.call(h.children(".mCSB_scrollTools"))}).bind("mouseleave touchend",function(x){h.removeClass("mCS-mouse-over");if(x.type==="mouseleave"){d.hideScrollbar.call(h.children(".mCSB_scrollTools"))}});k.data({bindEvent_autoHideScrollbar:true})}}},scrollTo:function(e,f){var i=c(this),o={moveDragger:false,trigger:"external",callbacks:true,scrollInertia:i.data("scrollInertia"),scrollEasing:i.data("scrollEasing")},f=c.extend(o,f),p,g=i.children(".mCustomScrollBox"),k=g.children(".mCSB_container"),r=g.children(".mCSB_scrollTools"),j=r.children(".mCSB_draggerContainer"),h=j.children(".mCSB_dragger"),t=draggerSpeed=f.scrollInertia,q,s,m,l;if(!k.hasClass("mCS_no_scrollbar")){i.data({mCS_trigger:f.trigger});if(i.data("mCS_Init")){f.callbacks=false}if(e||e===0){if(typeof(e)==="number"){if(f.moveDragger){p=e;if(i.data("horizontalScroll")){e=h.position().left*i.data("scrollAmount")}else{e=h.position().top*i.data("scrollAmount")}draggerSpeed=0}else{p=e/i.data("scrollAmount")}}else{if(typeof(e)==="string"){var v;if(e==="top"){v=0}else{if(e==="bottom"&&!i.data("horizontalScroll")){v=k.outerHeight()-g.height()}else{if(e==="left"){v=0}else{if(e==="right"&&i.data("horizontalScroll")){v=k.outerWidth()-g.width()}else{if(e==="first"){v=i.find(".mCSB_container").find(":first")}else{if(e==="last"){v=i.find(".mCSB_container").find(":last")}else{v=i.find(e)}}}}}}if(v.length===1){if(i.data("horizontalScroll")){e=v.position().left}else{e=v.position().top}p=e/i.data("scrollAmount")}else{p=e=v}}}if(i.data("horizontalScroll")){if(i.data("onTotalScrollBack_Offset")){s=-i.data("onTotalScrollBack_Offset")}if(i.data("onTotalScroll_Offset")){l=g.width()-k.outerWidth()+i.data("onTotalScroll_Offset")}if(p<0){p=e=0;clearInterval(i.data("mCSB_buttonScrollLeft"));if(!s){q=true}}else{if(p>=j.width()-h.width()){p=j.width()-h.width();e=g.width()-k.outerWidth();clearInterval(i.data("mCSB_buttonScrollRight"));if(!l){m=true}}else{e=-e}}var n=i.data("snapAmount");if(n){e=Math.round(e/n)*n-i.data("snapOffset")}d.mTweenAxis.call(this,h[0],"left",Math.round(p),draggerSpeed,f.scrollEasing);d.mTweenAxis.call(this,k[0],"left",Math.round(e),t,f.scrollEasing,{onStart:function(){if(f.callbacks&&!i.data("mCS_tweenRunning")){u("onScrollStart")}if(i.data("autoHideScrollbar")){d.showScrollbar.call(r)}},onUpdate:function(){if(f.callbacks){u("whileScrolling")}},onComplete:function(){if(f.callbacks){u("onScroll");if(q||(s&&k.position().left>=s)){u("onTotalScrollBack")}if(m||(l&&k.position().left<=l)){u("onTotalScroll")}}h.data("preventAction",false);i.data("mCS_tweenRunning",false);if(i.data("autoHideScrollbar")){if(!g.hasClass("mCS-mouse-over")){d.hideScrollbar.call(r)}}}})}else{if(i.data("onTotalScrollBack_Offset")){s=-i.data("onTotalScrollBack_Offset")}if(i.data("onTotalScroll_Offset")){l=g.height()-k.outerHeight()+i.data("onTotalScroll_Offset")}if(p<0){p=e=0;clearInterval(i.data("mCSB_buttonScrollUp"));if(!s){q=true}}else{if(p>=j.height()-h.height()){p=j.height()-h.height();e=g.height()-k.outerHeight();clearInterval(i.data("mCSB_buttonScrollDown"));if(!l){m=true}}else{e=-e}}var n=i.data("snapAmount");if(n){e=Math.round(e/n)*n-i.data("snapOffset")}d.mTweenAxis.call(this,h[0],"top",Math.round(p),draggerSpeed,f.scrollEasing);d.mTweenAxis.call(this,k[0],"top",Math.round(e),t,f.scrollEasing,{onStart:function(){if(f.callbacks&&!i.data("mCS_tweenRunning")){u("onScrollStart")}if(i.data("autoHideScrollbar")){d.showScrollbar.call(r)}},onUpdate:function(){if(f.callbacks){u("whileScrolling")}},onComplete:function(){if(f.callbacks){u("onScroll");if(q||(s&&k.position().top>=s)){u("onTotalScrollBack")}if(m||(l&&k.position().top<=l)){u("onTotalScroll")}}h.data("preventAction",false);i.data("mCS_tweenRunning",false);if(i.data("autoHideScrollbar")){if(!g.hasClass("mCS-mouse-over")){d.hideScrollbar.call(r)}}}})}if(i.data("mCS_Init")){i.data({mCS_Init:false})}}}function u(w){this.mcs={top:k.position().top,left:k.position().left,draggerTop:h.position().top,draggerLeft:h.position().left,topPct:Math.round((100*Math.abs(k.position().top))/Math.abs(k.outerHeight()-g.height())),leftPct:Math.round((100*Math.abs(k.position().left))/Math.abs(k.outerWidth()-g.width()))};switch(w){case"onScrollStart":i.data("mCS_tweenRunning",true).data("onScrollStart_Callback").call(i,this.mcs);break;case"whileScrolling":i.data("whileScrolling_Callback").call(i,this.mcs);break;case"onScroll":i.data("onScroll_Callback").call(i,this.mcs);break;case"onTotalScrollBack":i.data("onTotalScrollBack_Callback").call(i,this.mcs);break;case"onTotalScroll":i.data("onTotalScroll_Callback").call(i,this.mcs);break}}},stop:function(){var g=c(this),e=g.children().children(".mCSB_container"),f=g.children().children().children().children(".mCSB_dragger");d.mTweenAxisStop.call(this,e[0]);d.mTweenAxisStop.call(this,f[0])},disable:function(e){var j=c(this),f=j.children(".mCustomScrollBox"),h=f.children(".mCSB_container"),g=f.children(".mCSB_scrollTools"),i=g.children().children(".mCSB_dragger");f.unbind("mousewheel focusin mouseenter mouseleave touchend");h.unbind("touchstart touchmove");if(e){if(j.data("horizontalScroll")){i.add(h).css("left",0)}else{i.add(h).css("top",0)}}g.css("display","none");h.addClass("mCS_no_scrollbar");j.data({bindEvent_mousewheel:false,bindEvent_focusin:false,bindEvent_content_touch:false,bindEvent_autoHideScrollbar:false}).addClass("mCS_disabled")},destroy:function(){var e=c(this);e.removeClass("mCustomScrollbar _mCS_"+e.data("mCustomScrollbarIndex")).addClass("mCS_destroyed").children().children(".mCSB_container").unwrap().children().unwrap().siblings(".mCSB_scrollTools").remove();c(document).unbind("mousemove."+e.data("mCustomScrollbarIndex")+" mouseup."+e.data("mCustomScrollbarIndex")+" MSPointerMove."+e.data("mCustomScrollbarIndex")+" MSPointerUp."+e.data("mCustomScrollbarIndex"));c(window).unbind("resize."+e.data("mCustomScrollbarIndex"))}},d={showScrollbar:function(){this.stop().animate({opacity:1},"fast")},hideScrollbar:function(){this.stop().animate({opacity:0},"fast")},mTweenAxis:function(g,i,h,f,o,y){var y=y||{},v=y.onStart||function(){},p=y.onUpdate||function(){},w=y.onComplete||function(){};var n=t(),l,j=0,r=g.offsetTop,s=g.style;if(i==="left"){r=g.offsetLeft}var m=h-r;q();e();function t(){if(window.performance&&window.performance.now){return window.performance.now()}else{if(window.performance&&window.performance.webkitNow){return window.performance.webkitNow()}else{if(Date.now){return Date.now()}else{return new Date().getTime()}}}}function x(){if(!j){v.call()}j=t()-n;u();if(j>=g._time){g._time=(j>g._time)?j+l-(j-g._time):j+l-1;if(g._time<j+1){g._time=j+1}}if(g._time<f){g._id=_request(x)}else{w.call()}}function u(){if(f>0){g.currVal=k(g._time,r,m,f,o);s[i]=Math.round(g.currVal)+"px"}else{s[i]=h+"px"}p.call()}function e(){l=1000/60;g._time=j+l;_request=(!window.requestAnimationFrame)?function(z){u();return setTimeout(z,0.01)}:window.requestAnimationFrame;g._id=_request(x)}function q(){if(g._id==null){return}if(!window.requestAnimationFrame){clearTimeout(g._id)}else{window.cancelAnimationFrame(g._id)}g._id=null}function k(B,A,F,E,C){switch(C){case"linear":return F*B/E+A;break;case"easeOutQuad":B/=E;return -F*B*(B-2)+A;break;case"easeInOutQuad":B/=E/2;if(B<1){return F/2*B*B+A}B--;return -F/2*(B*(B-2)-1)+A;break;case"easeOutCubic":B/=E;B--;return F*(B*B*B+1)+A;break;case"easeOutQuart":B/=E;B--;return -F*(B*B*B*B-1)+A;break;case"easeOutQuint":B/=E;B--;return F*(B*B*B*B*B+1)+A;break;case"easeOutCirc":B/=E;B--;return F*Math.sqrt(1-B*B)+A;break;case"easeOutSine":return F*Math.sin(B/E*(Math.PI/2))+A;break;case"easeOutExpo":return F*(-Math.pow(2,-10*B/E)+1)+A;break;case"mcsEaseOut":var D=(B/=E)*B,z=D*B;return A+F*(0.499999999999997*z*D+-2.5*D*D+5.5*z+-6.5*D+4*B);break;case"draggerRailEase":B/=E/2;if(B<1){return F/2*B*B*B+A}B-=2;return F/2*(B*B*B+2)+A;break}}},mTweenAxisStop:function(e){if(e._id==null){return}if(!window.requestAnimationFrame){clearTimeout(e._id)}else{window.cancelAnimationFrame(e._id)}e._id=null},rafPolyfill:function(){var f=["ms","moz","webkit","o"],e=f.length;while(--e>-1&&!window.requestAnimationFrame){window.requestAnimationFrame=window[f[e]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[f[e]+"CancelAnimationFrame"]||window[f[e]+"CancelRequestAnimationFrame"]}}};d.rafPolyfill.call();c.support.touch=!!("ontouchstart" in window);c.support.msPointer=window.navigator.msPointerEnabled;var a=("https:"==document.location.protocol)?"https:":"http:";c.event.special.mousewheel||document.write('<script src="'+a+'//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.0.6/jquery.mousewheel.min.js"><\/script>');c.fn.mCustomScrollbar=function(e){if(b[e]){return b[e].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof e==="object"||!e){return b.init.apply(this,arguments)}else{c.error("Method "+e+" does not exist")}}}})(jQuery);
﻿eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('3Q={};3Q.69=4(y){6 z=1;6 g=y.8k;6 3M=y.87;6 E=y.7Z+"18/7W/";6 M=7R.7Q.7O();6 J;6 X=0;6 I=2;6 K="3F";6 A=5;6 W=0;6 q=[];4 c(a){6 b=1W.5d.3C("; ");1Q(6 d=b.21-1;d>=0;d--){6 e=b[d].3C("=");14(a=e[0]){11 7L(e[1])}}11"~"}4 x(a,b){1W.5d=a+"="+7J(b)}4 a(b,d){6 e=c(b);14(e.1B("~"+d+"~")!=-1){11 1k}e+=d+"~";x(b,e);11 1x}4 n(b){11 a("7I",b)}4 4E(){6 a=3y.3v.4W(3y.3v.7H("/")+1);1Y=a.1B(".");14(1Y>-1){a=a.7C(0,1Y)}11 a}4 p(a){14(a!="2W"&&a.1B("1D")>=0){6 b=a.1B("1D(")+"1D(".21;6 c=a.1B("2V)");11 1P(a.4W(b,c))}1q{11 0}}4 d(a,b){6 c=p($(a).13("1j"));6 e=1P(c)+1P(b);e="1D("+e+"2V)";14($(a).13("1j").1B("1D")>=0){$(a).13("1j",$(a).13("1j").24("1D("+c+"2V)",e))}1q{14($(a).13("1j")=="2W"){$(a).13("1j",e)}1q{$(a).13("1j",e+" "+$(a).13("1j"))}}11 1k}4 f(a,b){V();14(b){R(a)}1q{U(a)}11 1k}4 2R(a){a.19().19().1s();11 1k}4 Z(a,b){6 c=a.19().19().1c("1E.1v");6 d=1P(c.13("1t-1X").24("2n",""))+b;c.13("1t-1X",""+d+"2n");11 1k}4 B(a){6 b=$(a).19().19().1c("1E.1v");6 c=b.13("1t-2P");14(c=="2d"){b.13("1t-2P","")}1q{b.13("1t-2P","2d")}11 1k}4 F(a){6 b=$(a).19().19().1c("1E.1v");6 c=b.13("1t-1r");14(c=="25"){b.13("1t-1r","")}1q{b.13("1t-1r","25")}11 1k}4 D(a){6 b=a.19().19().1c(".1y");6 c=b.13("1j");14(c.1B("2k(-1)")>=0){b.13("4k","");b.13("1j",b.13("1j").24("2k(-1)",""))}1q{b.13("4k","7B");b.13("1j",b.13("1j")!="2W"?b.13("1j")+" 2k(-1)":"2k(-1)")}11 1k}4 v(a){6 b=$("<18>").2O(4(){}).1w("17",a).23().1H($("2N"))}6 L=4(h,i,j,k){14(i.1B("1p:")==-1&&!(/7A/.1R(i))){i=P(h,i)}$.3a({1F:"36",1T:3M+"/4X/51.35",1p:"5c="+i,2s:4(b){6 c="1O"+W;W++;6 g,2q=1W.5k("18");2q.1d="Bạn có 1Gể kéo 1Gả 49 2gỗ 3sác và 3p đổi kí2g 1Gước của ả1e";2q.4n="1y";2q.17=b;g=$(2q);g.1w("1p-17-1T",i);g.4u("4w",4(a){a.2J()});$("<12 9=\'1O 2I\' 1N=\'"+c+"\'><12 9=\'1a\'><8 9=\'1s\'><18 9=\'1h\' 1d=\'Xóa\' 17=\'"+E+"3k.1f\' /></8><8 9=\'26\'><18 9=\'1h\' 1d=\'Dí1e vào 3h\' 17=\'"+E+"3d.1f\' /></8><8 9=\'2H\'><18 9=\'1h\' 1d=\'2G 29ái\' 17=\'"+E+"46.1f\' /></8><8 9=\'2D\'><18 9=\'1h\' 1d=\'2G 39ải\' 17=\'"+E+"4d.1f\' /></8><8 9=\'2w\'><18 9=\'1h\' 1d=\'Lật 3m\' 17=\'"+E+"4l.1f\' /></8><8 9=\'2e\'><18 9=\'1h\' 1d=\'3r\' 17=\'"+E+"3b.1f\' /></8></12></12>").2L(g).1H("#2u").3n(4(){$("#"+c+" > 12.1a").2v()},4(){$("#"+c+" > 12.1a").23()}).3z({34:"3c"});$("#"+c+" > 12.1a > 8.1s").1b(4(){11 2R($(15))});$("#"+c+" > 12.1a > 8.26").1b(4(){11 f($(15).19().19(),1x)});$("#"+c+" > 12.1a > 8.2H").2x(4(){11 d($(15).19().19().1c(".1y"),-1)},{2y:0,2z:0.2,2a:2A});$("#"+c+" > 12.1a > 8.2D").2x(4(){11 d($(15).19().19().1c(".1y"),1)},{2y:0,2z:0.2,2a:2A});$("#"+c+" > 12.1a > 8.2w").1b(4(){11 D($(15))});$("#"+c+" > 12.1a > 8.2e").1b(4(){11 e($(15).19().19())});$("#"+c+" > 18").2B(4(){14(k){k()}$("#"+c+" > 12.1a > 8.1s").2C("1b")});$("#"+c+" > 18").2O(4(){6 a="#"+c+" > 18";a=\'$("\'+a+\'")\';44(a+".2m({47: 1x, 48: 1x});",0);14(j){j(c)}})},2B:4(){14(k){k()}}})};3Q.7z=L;4 e(d){6 f=d.1c("18.1y");L("",f.1w("1p-17-1T"),4(a){6 b=$("#"+a);b.1c("18.1y").1w("1r",f.1w("1r"));b.13("z-2F",1P(d.13("z-2F"))+1);6 c=d.1A();c.1m+=50;c.1n+=50;b.13(c)})}4 w(a){6 b=a.1c("1E.1v");6 c=3j();c.1c("1E.1v").1w("1r",b.1w("1r")).1z(b.1z());6 d=a.1A();d.1m+=50;d.1n+=50;c.13(d);11 c}4 3j(){6 e="1O"+W;$("<12 9=\'1O 2I\' 1N=\'"+e+"\'><12 9=\'1a 7x\'><8 9=\'1s\'><18 9=\'1h\' 1d=\'Xóa\' 17=\'"+E+"3k.1f\' /></8><18 9=\'1h\' 1d=\'7v 7tển - 4t và kéo 1Gả\' 17=\'"+E+"7q.1f\' /><8 9=\'4v\'><18 9=\'1h\' 1d=\'2oọn màu\' 17=\'"+E+"7p.1f\' /></8><8 9=\'26\'><18 9=\'1h\' 1d=\'Dí1e vào 3h\' 17=\'"+E+"3d.1f\' /></8><8 9=\'4K\'><18 9=\'1h\' 1d=\'7nảm 1X\' 17=\'"+E+"7j.1f\' /></8><8 9=\'4P\'><18 9=\'1h\' 1d=\'Tă1g 1X\' 17=\'"+E+"75.1f\' /></8><8 9=\'2d\'><18 9=\'1h\' 1d=\'Bôi đậm\' 17=\'"+E+"74.1f\' /></8><8 9=\'25\'><18 9=\'1h\' 1d=\'2oữ 4Zê1g\' 17=\'"+E+"73.1f\' /></8><8 9=\'2e\'><18 9=\'1h\' 1d=\'3r\' 17=\'"+E+"3b.1f\' /></8></12><1E 1r=\'1t-1X: 52\' 72=\'1k\' 9=\'1v\'>4t vào đây để 3p đổi nội 6Y. Ấn \'6W\' để 6Pố1g dò1g.</1E></12>").1H("#2u").3n(4(){$("#"+e+" > 12.1a").2v();$("#"+e+" > .1v").5a("5b")},4(){$("#"+e+" > 12.1a").23();$("#"+e+" > .1v").6O("5b")}).3z({6L:{6I:".2I",2a:3D},34:"3c"});$("#"+e).1c(".1v").6B({6z:30,6v:16});$("#"+e+" > 12.1a > 8.1s").1b(4(){11 2R($(15))});$("#"+e+" > 12.1a > 8.4v").5j({1S:"#3F",5o:4(a){$(a).3R(3D);11 1k},3S:4(a,b,c,d){$(d).3T();$(d).19().19().1c("1E.1v").13("1S","#"+b)},3U:4(a,b,c){$("#"+e).1c("1E.1v").13("1S","#"+b)}});$("#"+e+" > 12.1a > 8.26").1b(4(){11 f($(15).19().19(),1k)});$("#"+e+" > 12.1a > 8.4P").1b(4(){11 Z($(15),3)});$("#"+e+" > 12.1a > 8.4K").1b(4(){11 Z($(15),-3)});$("#"+e+" > 12.1a > 8.2d").1b(4(){11 B($(15))});$("#"+e+" > 12.1a > 8.25").1b(4(){11 F($(15))});$("#"+e+" > 12.1a > 8.2e").1b(4(){11 w($(15).19().19())});W++;11 $("#"+e)}4 6s(a){6 b=$(a).1c("6r > a > 18");6 c=b.1X();14(c>0){b.3W({3X:4(){$("#3Y").23();$("#3Z").2v()}})}1q{$("#3Y").1C("6n 37 6k!")}}4 Y(c,d){$("#3Z").23();h("45 ...");$.6f({1T:c,2s:4(a){L("",a.17,4(){d.1u("1L");o()})},2B:4(a,b){o()}});11 1k}4 l(f){f.1C("");f.2b(4(){6 a=$("#6e"),4c=$(15).1z();b(a,4c)});$.6d({6b:{}});$.4f(g+"3g/4h.4i?4j",4(e){$.2r(e,4(c,d){$("<3i 1M=\'"+c+"\'></3i>").1H(f);$.2r(d,4(a,b){f.8m(\'3i[1M="\'+c+\'"]\').2L("<2Q 22=\'"+a+"\'>"+b+"</2Q>")})});f.1z("68").2C("2b")})}4 b(d,e){h("Đ2S tải bộ ả1e: "+$("#4r 2Q:64").1U());d.1c(".1I-1J").1C("");$.4f(s(e),4(c){$.2r(c,4(a,b){d.1c(".1I-1J").2L("<a 9=\'1I-4x\' 3v=\'#61\' 1p-4z=\'"+e+"\' 1p-4A=\'"+a+"\' ><18 17=\'"+P(e,a)+"\' /></a>")});$(".1I-1J .1I-4x").1b(4(a){a.2J();6 b=$(15).1p("4z"),4B=$(15).1p("4A");L(b,4B)});$(".1I-1J").1c("a > 18").3W({3X:o});d.5Z({5X:80,5W:"a",5Q:"8",1J:".1I-1J",5N:80,5M:0,5L:"5C"});14($(".1I-1J").1l()>5B){$(".1I-1J").13("1m","5A")}})}4 s(a){11 g+"3g/"+a+"/4h.4i?4j"}4 P(a,b,c){14(a!=""){11 g+"3g/"+a+"/37/"+b}1q{11 b}}4 k(a){X+=a;H();T(a);t(a);6 b=$("#5x");6 c=J.7.1i.1o/X;1Q(6 d=X-a;d<X;d++){6 e=$("<12 1N=\'4R"+d+"\'>").1H(b).13({3w:"4T","1U-4U":"4V",1m:"-5w",1n:(d*c+5v)+"2n"});$("<2i 1F=\'4Y\' 1Z=\'1Z\' 9=\'2Z\' 1p-31=\'"+d+"\' 1N=\'2Z"+d+"\' />").1H(e).53($("<1M 1Q=\'2Z"+d+"\'>Đườ1g dọc</1M>")).5u($("<54>"));$("<2i 1F=\'4Y\' 1Z=\'1Z\' 9=\'32\' 1p-31=\'"+d+"\' 1N=\'32"+d+"\' />").1H(e).53($("<1M 1Q=\'32"+d+"\'>Đườ1g 3m</1M>"))}}4 T(a){6 b=J.7.1i.1o/X;J.7.1V();J.7.57="#33";J.7.5s(0,(X-a)*b,J.7.1i.1l,J.7.1i.1o);J.7.27()}4 t(a){6 b=J.7.1i.1o/X;J.7.1V();J.7.2p="#3F";J.7.3G=2;J.7.3H();1Q(6 c=0;c<=a;c++){6 d=((X-a+c)*b);d==0?d=1:d-=1;J.7.28(0,d);J.7.2c(J.7.1i.1l,d)}J.7.28(1,(X-a)*b);J.7.2c(1,J.7.1i.1o);J.7.28(J.7.1i.1l-1,(X-a)*b);J.7.2c(J.7.1i.1l-1,J.7.1i.1o);J.7.28(J.7.1i.1l/2,(X-a)*b);J.7.2c(J.7.1i.1l/2,J.7.1i.1o);J.7.3J();J.7.3K();J.7.27()}4 C(a,b){J.7.1V();6 c=J.7.1i.1o/X;J.7.3G=2;14(b){J.7.2p="#3L"}1q{J.7.2p="#33"}J.7.3H();J.7.28(J.7.1i.1l/2,a*c+(a==0?2:0));J.7.2c(J.7.1i.1l/2,(a+1)*c-2);J.7.3J();J.7.3K();J.7.27()}4 j(a,b){J.7.1V();6 c=J.7.1i.1o/X;J.7.3G=2;14(b){J.7.2p="#3L"}1q{J.7.2p="#33"}J.7.3H();J.7.28(2,(a+1)*c-1);J.7.2c(J.7.1i.1l-2,(a+1)*c-1);J.7.3J();J.7.3K();J.7.27()}4 i(){14(X>1){X-=1;$("#4R"+X).1s();H()}}4 H(){14(J){6 a=$("#1K").1l()/2;6 b=a/1.5r;J.6R(a*2,b*X)}J.3O($("#3P").5l("2Q","22"))}4 V(){6 a=$("#1K")[0];6 b=5m.5n(a,1x);q.5q(b.17)}4 r(){14(q.21>0){6 a=2f 3N();a.5h=4(){J.7.2t(15,0,0,15.1l,15.1o)};a.17=q.5t()}}4 G(a){6 b=2f 3N();b.17=(a.2Y?a.2Y("17"):1k)||a.17;11 b.1l}4 S(a){6 b=2f 3N();b.17=(a.2Y?a.2Y("17"):1k)||a.17;11 b.1o}4 4N(e,f){6 i=$(".1O").5y();i.5z(4(a,b){6 c=$(a).13("z-2F");6 d=$(b).13("z-2F");11(c<d)?-1:(c>d)?1:0});$.2r(i,4(){14($(15).1c(".1y").21>0){R($(15))}1q{14($(15).1c(".1v").21>0){U($(15))}}});Q();6 j=$("#1K")[0];6 k=5m.5n(j,1x);k.1N="4L";q=[];$("#4J").5D().5a("5E");6 l=$("#4J")[0];$("2N").5F("5G 5H 5I");l.5J(k);6 m="5K 1b 4I 4H 3q 5O 5P 1V 4F 5R 4I 5S 5T!";6 n=$("#4L").1w("17");$(l).5U("<12 9=\'5V 2U\' 1r=\'1U-4U:1m\'><p>Hãy đặt 3oêu đề 5Y ả1e của bạn để đă1g lên 4C. Bạn cũ1g có 1Gể lưu ả1e về máy để đă1g 60.<54><b>2oú ý:</b> 4yô1g đă1g ả1e 1Gử 4Zệm để 29á1e 62 tại 4C.</p><p 9=\'63\'><1M 2T=\'1d\'>65êu đề của ả1e</1M><2i 1F=\'1U\' 2T=\'66\' 9=\'1U 67\' 1r=\'4p:4m;6a-4V:3f\'  /><2i 1F=\'6c\' 2T=\'3q\' 22=\'"+n+"\' /><2i 1N=\'3e\' 1F=\'4b\' 9=\'2M 3e\' 22=\'Đă1g ả1e\' 1r=\'1o:6g\' /></p></12>");$(".2U #3e").38("1b",4(b){b.2J();14($("#6h-6i").13("4p")!="4m-6j"){43("Bạn cần đă1g 1eập 29ước.");11}14($(".2U .1U").1z().6l()==""){43("Bạn 39ải 1eập 3oêu đề.");11}h("Đ2S đă1g ả1e...");$.3a({1T:g+"4b.35",1F:"36",1p:"1d="+$(".2U .1U").1z()+"&6m="+n,2s:4(a){41.6o=6p;1n.3y.24(a)},6q:4(){o()}})})}6 N;4 O(){N=N||1W.5i("6t");6 b=$.3a({1F:"36",1T:3M+"/4X/51.35",1p:"5c="+N.17,2s:4(a){N.17=a}})}4 Q(){6 a=J.7.1i.1o-N.1o;J.7.2t(N,6u,a-5,5g,20)}4 m(a){6 b=p($(a).13("1j"));6 c=$(a).1A();14(b!=0){6 d=$(a).13("1j");$(a).13("1j",$(a).13("1j").24("1D("+b+"2V)","1D(6w)"));c=$(a).1A();$(a).13("1j",d)}11 c}4 R(a){J.7.1V();6 b=$("#1K").1A();6 c=a.1c(".1y")[0];6 d=m(c);d.1m-=b.1m;d.1n-=b.1n;6 e=$(c).1l();6 f=$(c).1o();6 g=p($(c).13("1j"));6 h=$(c).13("1j").1B("2k")>=0;14(g!=0){14(g<0){g=6x+g}J.7.6y(d.1m+(e/2),d.1n+(f/2));J.7.1D(g*(3E.6A/5g));14(h){J.7.5f(-1,1)}J.7.2t(c,0,0,G(c),S(c),(-1*e)/2,(-1*f)/2,e,f)}1q{6 i=d.1m;6 j=d.1n;14(h){J.7.5f(-1,1);i=(i*-1)-e}J.7.2t(c,i,j,e,f)}J.7.27();a.1s()}4 U(a){J.7.1V();6 b=$("#1K").1A();6 c=a.1c(".1v");6 d=1P(c.13("1t-1X").24("2n",""));6 e=c.13("1t-2P")=="2d"?"2d ":"";6 f=c.13("1t-1r")=="25"?"25 ":"";6 g=c.13("1t-6C");J.7.6D="1n";J.7.57=c.13("1S");J.7.1t=e+f+d+"2n "+g;6 h=c.1z().3C("\\n");6 i=$(c).1A();i.1m-=b.1m;i.1n-=b.1n;1Q(6 j=0;j<h.21;j++){J.7.6E(h[j],i.1m,i.1n+j*d)}J.7.27();a.1s()}4 6F(a,b){11 3E.6G(3E.6H()*(b-a+1))+a}4 u(a){$("#5e").13("1S","#"+a);14(J){J.6J("#"+a)}}4 h(a){$.6K({13:{3B:"2W",6M:"52",6N:"#3L","-3A-3B-59":"3f","-6Q-3B-59":"3f",5p:1,1S:"#33"},6S:6T,6U:a})}4 o(){$.6V()}$.2K={6X:(M.56(/.+(?:6Z|4F|70|71)[\\/: ]([\\d.]+)/)||[0,"0"])[1],55:/3A/.1R(M),3x:/3x/.1R(M),3u:/3u/.1R(M)&&!/3x/.1R(M),3t:/3t/.1R(M)&&!/(76|3A)/.1R(M)};$.77.78=4(b){11 15.2r(4(){6 a=$(15);1Y=a.3w();a.13({3w:"4T",79:0,7a:0,1n:1Y.1n,1m:1Y.1m});14(b){a.1s().1H("2N")}})};$(41).2O(4(){$("1i").1l($("#2u").1l());J=2f 7b("1K","7c",{x:$("#1K").1A().1m,y:$("#1K").1A().1n},V);14(X==0){k(I)}J.7d(1);J.3O(A);l($("#4r"));o();14(n(4E())){6 a="";6 b="";14($.2K.3u){b="Ứ1g dụ1g này 3sô1g hỗ 29ợ 29ì1e 7eệt 7f 7g. Bạn hãy sử dụ1g 7h, 7i 4Oặc 7k!";a="37/7l.1f"}14(b!=""){b="<12><12 1r=\'7m: 1m\'><18 17=\'"+a+"\'></12><12>"+b+"</12><12 1r=\'4M: 7o\'></12></12>";$("#4G").1C(b);$("#4G").1u({3l:1x,2m:1k,2M:{7r:4(){$(15).1C("");$(15).1u("1L")}}})}}O()});$(1W).7s(4(){h("Đ2S tải...");$("#4s").1u({1l:7u,3l:1x,2m:1k,4q:1k,2M:{"7w, đã 4o !":4(){$(15).1u("1L");4N("7y")},"2oưa 4o, 3oếp tục sửa":4(){$(15).1u("1L")}}});$("#2E").1u({3l:1x,2m:1k,4q:1k,2M:{"2oèn ả1e":4(){6 a=$("#4g").1z();$2l=$(15);$2l.1c(".2X").1C("");14(a!=""){h("Đ2S 2gèn ả1e...");L("",a,4(){$2l.1u("1L");o()},4(){$2l.1c(".2X").1C("4yô1g đú1g đị1e dạ1g ả1e 4Oặc ả1e 7Dá lớn.");o()})}1q{$2l.1c(".2X").1C("7E lò1g 1eập 7F.")}},"Bỏ 7G":4(){$(15).1u("1L")}},1L:4(a,b){$("#4g").1z("");$("#58").1z("");$("#2E").1c(".2X").1C("")}});4 4D(i){6 j=i.3V.7K;1Q(6 k=0,2h;2h=j[k];k++){14(!2h.1F.56("3q.*")){7M}6 l=2f 7N();l.5h=(4(h){11 4(b){6 c="1O"+W;W++;6 g,2j=1W.5k("18");2j.1d="Bạn có 1Gể kéo 1Gả 49 2gỗ 3sác và 3p đổi kí2g 1Gước của ả1e";2j.4n="1y";2j.17=b.3V.7P;g=$(2j);g.1w("1p-17-1T",2T);g.4u("4w",4(a){a.2J()});$("<12 9=\'1O 2I\' 1N=\'"+c+"\'><12 9=\'1a\'><8 9=\'1s\'><18 9=\'1h\' 1d=\'Xóa\' 17=\'"+E+"3k.1f\' /></8><8 9=\'26\'><18 9=\'1h\' 1d=\'Dí1e vào 3h\' 17=\'"+E+"3d.1f\' /></8><8 9=\'2H\'><18 9=\'1h\' 1d=\'2G 29ái\' 17=\'"+E+"46.1f\' /></8><8 9=\'2D\'><18 9=\'1h\' 1d=\'2G 39ải\' 17=\'"+E+"4d.1f\' /></8><8 9=\'2w\'><18 9=\'1h\' 1d=\'Lật 3m\' 17=\'"+E+"4l.1f\' /></8><8 9=\'2e\'><18 9=\'1h\' 1d=\'3r\' 17=\'"+E+"3b.1f\' /></8></12></12>").2L(g).1H("#2u").3n(4(){$("#"+c+" > 12.1a").2v()},4(){$("#"+c+" > 12.1a").23()}).3z({34:"3c"});$("#"+c+" > 12.1a > 8.1s").1b(4(){11 2R($(15))});$("#"+c+" > 12.1a > 8.26").1b(4(){11 f($(15).19().19(),1x)});$("#"+c+" > 12.1a > 8.2H").2x(4(){11 d($(15).19().19().1c(".1y"),-1)},{2y:0,2z:0.2,2a:2A});$("#"+c+" > 12.1a > 8.2D").2x(4(){11 d($(15).19().19().1c(".1y"),1)},{2y:0,2z:0.2,2a:2A});$("#"+c+" > 12.1a > 8.2w").1b(4(){11 D($(15))});$("#"+c+" > 12.1a > 8.2e").1b(4(){11 e($(15).19().19())});$("#"+c+" > 18").2B(4(){14(4a){4a()}$("#"+c+" > 12.1a > 8.1s").2C("1b")});$("#"+c+" > 18").2O(4(){6 a="#"+c+" > 18";a=\'$("\'+a+\'")\';44(a+".2m({47: 1x, 48: 1x});",0);14(42){42(c)}})}})(2h);l.7S(2h);$("#2E").1u("1L")}}1W.5i("58").7T("2b",4D,1k);$("#7U").1b(4(){k(1)});$("#7V").1b(i);$("#4S").1b(4(){14(7X("7Y 4e 81 4e 82 83 4M 4H 1i?")){$(".1O").1s();J.4S();14(X>I){84(X>I){i()}}1q{14(X<I){k(I-X)}}T(X);t(X);q=[]}});$("#85").1b(3j);$("#86").1b(4(){$("#4s").1u("3I")});$("#88").1b(4(){$("#2E").1u("3I")});$("#89").1b(4(){$("#8a").1u("3I")});14($.2K.3t||$.2K.55){$("2N").8b({8c:4(){h("45 ...")},8d:4(a){L("",a.1w("17"))},8e:4(){o()}})}$("#8f").1b(4(){r()});$("#5e").5j({1S:K,5o:4(a){$(a).3R(3D);11 1k},3S:4(a,b,c,d){$(d).3T()},3U:4(a,b,c){u(b)}});$("#3P").5l({2a:1,8g:50,8h:"8i",22:A,2b:4(a,b){J.3O(b.22)},8j:4(a,b){$("#4Q").2C("1b")}});$("#4Q").1b(4(){6 a=$(15).1A();a.1m+=10;a.1n+=20;$("#3P").8l()});u(K);$(".2Z").38("2b",4(){C(1P($(15).1w("1p-31")),$(15).40(":1Z"))});$(".32").38("2b",4(){j(1P($(15).1w("1p-31")),$(15).40(":1Z"))})})};',62,519,('||||function||var|context|span|class||||||||||||||||||||||||||||||||||||||||||||||||||||||return|div|css|if|this||src|img|parent|objectControllerContainer|click|find|title|nh|png|ng|objectController|canvas|transform|false|width|left|top|height|data|else|style|remove|font|dialog|speechTextBox|attr|true|faceImage|val|offset|indexOf|html|rotate|textarea|type|th|appendTo|dock|container|drawingCanvas|close|label|id|face|parseInt|for|test|color|url|text|save|document|size|pos|checked||length|value|hide|replace|italic|sendToBack|restore|moveTo|tr|min|change|lineTo|bold|cloneFace|new|ch|am|input|ao|scaleX|dlg|resizable|px|Ch|strokeStyle|al|each|success|drawImage|canvasContainer|show|flipHorizontal|repeatedclick|duration|speed|100|error|trigger|rotateRight|promptContainer|index|Xoay|rotateLeft|draggableFace|preventDefault|browser|append|buttons|body|load|weight|option|ad|ang|name|readySubmit|deg|none|errorText|getAttribute|verLineController||row|horLineController|fff|cursor|php|POST|images|live|ph|ajax|application_double|move|shape_move_backwards|submitButton|10px|packs|khung|optgroup|ab|delete|modal|ngang|hover|ti|thay|image|Clone|kh|mozilla|msie|href|position|opera|location|draggable|webkit|border|split|500|Math|000000|lineWidth|beginPath|open|closePath|stroke|000|ba|Image|setLineWidth|brushSizeSlider|RageComic|fadeIn|onSubmit|ColorPickerHide|onChange|target|batchImageLoad|loadingCompleteCallback|flickrLoading|flickrResult|is|window|successCallback|alert|setTimeout|Importing|shape_rotate_anticlockwise|aspectRatio|autoHide|sang|failCallback|submit|aj|shape_rotate_clockwise|you|getJSON|txtImportUrl|manifest|json|153998|filter|shape_flip_horizontal|inline|className|xong|display|autoOpen|drpPacks|exportContainer|Click|bind|changeColor|dragstart|item|Kh|pack|icon|ak|' + BASE_URL + '|ah|ag|it|startUpMessageContainer|the|on|blank_content|decrease|canvasImage|clear|ac|ho|increase|brushSize|lineControllerContainer|clearCanvas|absolute|align|right|substring|builder|checkbox|nghi||image2json|15px|before|br|safari|match|fillStyle|fileToUpload|radius|addClass|withBorder|imageUrl|cookie|customWidget|scale|180|onload|getElementById|ColorPicker|createElement|slider|Canvas2Image|saveAsPNG|onShow|opacity|push|3333|fillRect|pop|after|150|110px|drawingCanvasContainer|get|sort|0px|900|center|empty|completedComicSubmission|unbind|dragover|dragenter|drop|appendChild|Right|halign|proximity|itemWidth|below|and|itemsText|locally|your|computer|prepend|inputForm|items|maxWidth|cho|Fisheye|sau|rageface|spam|required|selected|Ti|Caption|largeWidth|troll|initialize|margin|headers|hidden|ajaxSetup|toolbar|getImageData|32px|profile|username|block|found|trim|imageData|No|onbeforeunload|null|complete|li|af|watermark|455|lineHeight|0deg|360|translate|minHeight|PI|autogrow|family|textBaseline|fillText|aa|floor|random|group|setColor|blockUI|stack|padding|backgroundColor|removeClass|xu|moz|resize|baseZ|9999|message|unblockUI|Enter|version|dung|rv|ra|ie|spellcheck|text_italic|text_bold|text_uppercase|compatible|fn|makeAbsolute|marginLeft|marginTop|CanvasPainter|drawingCanvasInterface|setDrawAction|duy|Internet|Explorer|Chrome|Firefox|text_lowercase|Safari|messageLol|float|Gi|both|color_wheel|arrow_out|Ok|ready|chuy|400|Di|OK|objectControllerContainerText|memebase|addFace|http|fliph|substr|qu|Vui|URL|qua|lastIndexOf|pWrD4jBo|escape|files|unescape|continue|FileReader|toLowerCase|result|userAgent|navigator|readAsDataURL|addEventListener|addFrameCtrl|removeFrameCtrl|ragecomic|confirm|Are|cdnRoot||sure|want|to|while|addTextCtrl|exportCanvas|builderUrl|importImage|flickrImport|flickrContainer|imgDrop|beforeDrop|afterDrop|afterAllDrop|undoBrush|max|orientation|vertical|stop|packRoot|slideToggle|children').split('|'),0,{}))
