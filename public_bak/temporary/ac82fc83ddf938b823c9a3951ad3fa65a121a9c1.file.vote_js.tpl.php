<?php /* Smarty version Smarty-3.1.21-dev, created on 2014-11-12 14:22:03
         compiled from "/Volumes/DATA/Development/funny-project/public/themes/vote_js.tpl" */ ?>
<?php /*%%SmartyHeaderCode:61140674254630a9b0f6744-36956812%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'ac82fc83ddf938b823c9a3951ad3fa65a121a9c1' => 
    array (
      0 => '/Volumes/DATA/Development/funny-project/public/themes/vote_js.tpl',
      1 => 1414799430,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '61140674254630a9b0f6744-36956812',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'baseurl' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.21-dev',
  'unifunc' => 'content_54630a9b128058_63593572',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_54630a9b128058_63593572')) {function content_54630a9b128058_63593572($_smarty_tpl) {?>	
	<?php echo '<script'; ?>
 type="text/javascript">
		$('.unlove').click(function(){
        var id=$(this).attr('entryId');
        if( $(this).hasClass('unloved')){
        $(this).removeClass('unloved');
        likedeg($(this).attr('entryId'),0,-1);
        }else{
        $(this).addClass('unloved');
        if($('#post_love_'+id).hasClass('loved')){
        likedeg($(this).attr('entryId'),-1,1);	
        $('#post_love_'+id).removeClass('loved');
        }else{
        likedeg($(this).attr('entryId'),0,1);	
        }
        }
        });
        $('.vote').click(function(){
        var id=$(this).attr('rel');
        if( $(this).hasClass('loved')){
        $(this).removeClass('loved');
        likedeg($(this).attr('rel'),-1,0);
        }else{
        $(this).addClass('loved');
        if($('#vote-down-btn-'+id).hasClass('unloved')){
        $('#vote-down-btn-'+id).removeClass('unloved');
        likedeg($(this).attr('rel'),1,-1);
        }else{
        likedeg($(this).attr('rel'),1,0);
        }
        }
        });
    function likedeg(p,l,u){
        jQuery.ajax({
            type:'POST',
            url:'<?php echo $_smarty_tpl->tpl_vars['baseurl']->value;?>
'+ '/likedeg.php',
			data:'l='+l+'&pid=' + p +'&u='+u,
            success:function(e){
                $('#love_count_'+p).html(e);
                }
            });
        }
    <?php echo '</script'; ?>
>
	<?php }} ?>
