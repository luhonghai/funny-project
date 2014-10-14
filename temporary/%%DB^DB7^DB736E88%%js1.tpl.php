<?php /* Smarty version 2.6.6, created on 2014-10-13 08:34:25
         compiled from js1.tpl */ ?>
<?php echo '
<script type="text/javascript">
function keyfind(e)
{
var code;
if (!e) var e = window.event;
if (e.keyCode) code = e.keyCode;
else if (e.which) code = e.which;
var character = String.fromCharCode(code);
var classes=$(\'.entry-item\').length;
if($(\'#header_searchbar\').css(\'display\')!=\'none\'){
character=0;}
if(character ==\'J\' || character ==\'j\'){
window.location.href=$(\'#next_post\').attr(\'href\');
}
if(character ==\'K\' || character ==\'k\'){
window.location.href=$(\'#prev_post\').attr(\'href\');
}
if(character==\'L\' || character==\'l\'){
$(\'#post_view_love\').trigger(\'click\');
}
}
</script>
'; ?>