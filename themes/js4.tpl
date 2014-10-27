{literal}
<script type="text/javascript">
$('.keyboard_link').click(function(){
$("#overlay-shadow").removeClass("hide");
$("#overlay-container").removeClass("hide");
$(".keyboard-instruction").removeClass("hide");
$("#overlay-container").click(function(){
$("#overlay-shadow").addClass("hide");
$("#overlay-container").addClass("hide");
$(".keyboard-instruction").addClass("hide");	
});
});
$('#report-item-link').click(function(){
$('#overlay-shadow').removeClass('hide');
$('#overlay-container').removeClass('hide');
$('#b9gcs-soft-report').removeClass('hide');
});
$('.close-btn').click(function(){
$('#overlay-shadow').addClass('hide');
$('#overlay-container').addClass('hide');
$('#b9gcs-soft-report').addClass('hide');
});
$('.submit-button').click(function(){
var e=0;
if($('input[name="report-reason"]:checked').val()){
if($('input[name="report-reason"]:checked').val()==4){
var x=$('#repost_link').val();
if(! (x.match('{/literal}{$baseurl}{$postfolder}{literal}'))){ 
$('#repost_link').addClass('failed');
e=1;
}else{
$('#repost_link').removeClass('failed');
$('#repost_link').addClass('success');
};
}
}else{
e=1;
}
if(e){
return false;
}else{
var x=$('#repost_link').val();
var n=$('input[name="report-reason"]:checked').val();
sendreport(x,n);
}
});
function sendreport(x,n){
jQuery.ajax({
type:'POST',
url:' {/literal}{$baseurl}{literal}'+ '/report.php',
data:'number='+n+'&repost_link='+x+'&pid=' +  '{/literal}{$p.PID}{literal}' ,
success:function(e){
$('#overlay-shadow').addClass('hide');
$('#overlay-container').addClass('hide');
$('#b9gcs-soft-report').addClass('hide');
}
});
}
</script>
{/literal}