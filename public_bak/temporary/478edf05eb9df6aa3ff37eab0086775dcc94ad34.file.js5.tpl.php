<?php /* Smarty version Smarty-3.1.21-dev, created on 2014-11-12 14:22:03
         compiled from "/Volumes/DATA/Development/funny-project/public/themes/js5.tpl" */ ?>
<?php /*%%SmartyHeaderCode:69750603254630a9b3573c9-03115360%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '478edf05eb9df6aa3ff37eab0086775dcc94ad34' => 
    array (
      0 => '/Volumes/DATA/Development/funny-project/public/themes/js5.tpl',
      1 => 1414799430,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '69750603254630a9b3573c9-03115360',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'baseurl' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.21-dev',
  'unifunc' => 'content_54630a9b39e0d7_46912636',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_54630a9b39e0d7_46912636')) {function content_54630a9b39e0d7_46912636($_smarty_tpl) {?>
<?php echo '<script'; ?>
 type="text/javascript">
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
$('.report').click(function(){
$('#report_entry_id').val($(this).attr('entryId'));	
$('#repost_link').val('<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
/p/' + $(this).attr('entryId'));	
$('#overlay-shadow').removeClass('hide');
$('#overlay-container').removeClass('hide');
$('#scriptolution-soft-report').removeClass('hide');
});
$('.close-btn').click(function(){
$('#overlay-shadow').addClass('hide');
$('#overlay-container').addClass('hide');
$('#scriptolution-soft-report').addClass('hide');
});
$('#report-submit').click(function(){
var e=0;
if($('input[name="report-reason"]:checked').val()){
if($('input[name="report-reason"]:checked').val()==4){
var x=$('#repost_link').val();
if(! (x.match('<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
'))){ 
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
var pid=$('#report_entry_id').val();
var x=$('#repost_link').val();
var n=$('input[name="report-reason"]:checked').val();
sendreport(x,n,pid);
}
});
function sendreport(x,n,pid){
jQuery.ajax({
type:'POST',
url:' <?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
'+ '/report.php',
data:'number='+n+'&repost_link='+x+'&pid=' + pid,
success:function(e){
$('#overlay-shadow').addClass('hide');
$('#overlay-container').addClass('hide');
$('#scriptolution-soft-report').addClass('hide');
alert('Cảm ơn bạn đã báo cáo bài vi phạm.');
}
});
}
<?php echo '</script'; ?>
>
<?php }} ?>
