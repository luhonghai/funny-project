var baseurl = BASE_URL;
var avataurl = AVATAR_URL;

$("#tabs ul li:first").addClass("active");
$("#tabs ul li a:first").addClass("active");
$.getJSON(baseurl+"/topusers?t=tuan&ajax=1", function(data) {
    for (var i=0;i<data.length;i++){
        if (i==5)
        {
            break;
        }
        user = data[i];
        if(user.profilepicture == ''){
            user.profilepicture = 'noprofilepicture.jpg'
        }
        $("#tabs div.current").append('<div class="over"><div class="over_info" id="avatar"><a href="/user/'+user.username+'"><img id="avatar" alt="Avatar" src="'+ avataurl + user.profilepicture+'" /></a></div><div class="over_info" id="information"><p><strong><a href="/user/'+user.username+'">'+user.fullname+'</a></strong></p><p>Số bài:&nbsp'+formatMoney(user.TOTAL,0)+' - Điểm:&nbsp'+formatMoney(user.LIKES,0)+'</p><p>Tổng lượt xem:&nbsp'+formatMoney(user.VIEWS,0)+'</p></div><div id="rank"><img id="rank" alt="rank" src="'+baseurl+'/images/'+(i+1)+'.png" /></div><div class="clear"></div></div>');
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
    $.getJSON(baseurl+"/topusers?t="+top+"&ajax=1", function(data) {
        $("#tabs div.current").html('');
        for (var i=0;i<data.length;i++){
            if (i==5)
            {
                break;
            }
            var user = data[i];
            if(user.profilepicture == ''){
                user.profilepicture = 'noprofilepicture.jpg'
            }
            $("#tabs div.current").append('<div class="over"><div class="over_info" id="avatar"><a href="user/'+user.username+'"><img id="avatar" alt="Avatar" src="'+ avataurl + user.profilepicture+'" /></a></div><div class="over_info" id="information"><p><strong><a href="user/'+user.username+'">'+user.fullname+'</a></strong></p><p>Số bài:&nbsp'+formatMoney(user.TOTAL,0)+' - Điểm:&nbsp'+formatMoney(user.LIKES,0)+'</p><p>Tổng lượt xem:&nbsp'+formatMoney(user.VIEWS,0)+'</p></div><div id="rank"><img id="rank" alt="rank" src="'+baseurl+'/images/'+(i+1)+'.png" /></div><div class="clear"></div></div>');
        }
    });
});



function formatMoney(n, c, d, t){
    c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};



$(document).ready(function(){
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 20) {
                $('#nav').css("position","fixed").css("top","0").css("box-shadow","0 2px 4px #333");
            }
            else{
                $('#nav').css("position","relative").css("box-shadow","none");
            }
        });
    });
});

$('.searchButton').click(function(){
    $('#header_searchbar').toggle('slow');
});

function rmt(l) { var img = new Image(); img.src = l; document.getElementById('tmp-img').appendChild(img); }
function myWindow(location, address, gaCategory, gaAction, entryLink) { var w = 640; var h = 460; var sTop = window.screen.height/2-(h/2); var sLeft = window.screen.width/2-(w/2); var sharer = window.open(address, "Share on Facebook", "status=1,height="+h+",width="+w+",top="+sTop+",left="+sLeft+",resizable=0"); }