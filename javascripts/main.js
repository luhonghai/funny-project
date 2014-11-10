var baseurl = BASE_URL;
var avataurl = AVATAR_URL;


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

function likedeg(p,l,u){
    jQuery.ajax({
        type:'POST',
        url: baseurl+ '/likedeg.php',
        data:'l='+l+'&pid='+p+'&u='+u,
        success:function(e){
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


$(document).ready(function () {

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
                user = data[i];
                if (user.profilepicture == '') {
                    user.profilepicture = 'noprofilepicture.jpg'
                }
                $("#tabs div.current").append('<div class="over"><div class="over_info" id="avatar"><a href="/user/' + user.username + '"><img id="avatar" alt="Avatar" src="' + avataurl + user.profilepicture + '" /></a></div><div class="over_info" id="information"><p><strong><a href="/user/' + user.username + '">' + user.fullname + '</a></strong></p><p>Số bài:&nbsp' + formatMoney(user.TOTAL, 0) + ' - Điểm:&nbsp' + formatMoney(user.LIKES, 0) + '</p><p>Tổng lượt xem:&nbsp' + formatMoney(user.VIEWS, 0) + '</p></div><div id="rank"><img id="rank" alt="rank" src="' + baseurl + '/images/' + (i + 1) + '.png" /></div><div class="clear"></div></div>');
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
                    $("#tabs div.current").append('<div class="over"><div class="over_info" id="avatar"><a href="user/' + user.username + '"><img id="avatar" alt="Avatar" src="' + avataurl + user.profilepicture + '" /></a></div><div class="over_info" id="information"><p><strong><a href="user/' + user.username + '">' + user.fullname + '</a></strong></p><p>Số bài:&nbsp' + formatMoney(user.TOTAL, 0) + ' - Điểm:&nbsp' + formatMoney(user.LIKES, 0) + '</p><p>Tổng lượt xem:&nbsp' + formatMoney(user.VIEWS, 0) + '</p></div><div id="rank"><img id="rank" alt="rank" src="' + baseurl + '/images/' + (i + 1) + '.png" /></div><div class="clear"></div></div>');
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

});


