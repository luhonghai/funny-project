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


