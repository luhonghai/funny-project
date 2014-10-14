<?php /* Smarty version 2.6.6, created on 2014-10-13 10:03:27
         compiled from vote_js.tpl */ ?>
	<?php echo '
	<script type="text/javascript">
    $(\'.vote\').click(function(){
        if( $(this).hasClass(\'loved\')){
            $(this).removeClass(\'loved\');
        likedeg(-1,$(this).attr(\'rel\'));
        }else{
        likedeg(1,$(this).attr(\'rel\'));
        $(this).addClass(\'loved\');
        }
        });
    function likedeg(x,p){
        jQuery.ajax({
            type:\'POST\',
            url:\'';  echo $this->_tpl_vars['baseurl'];  echo '\'+ \'/likedeg.php\',
            data:\'art=\'+x+\'&pid=\' + p,
            success:function(e){
                $(\'#love_count_\'+p).html(e);
                }
            });
        }
    </script>
	'; ?>