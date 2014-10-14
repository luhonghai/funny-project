	{literal}
	<script type="text/javascript">
    $('.vote').click(function(){
        if( $(this).hasClass('loved')){
            $(this).removeClass('loved');
        likedeg(-1,$(this).attr('rel'));
        }else{
        likedeg(1,$(this).attr('rel'));
        $(this).addClass('loved');
        }
        });
    function likedeg(x,p){
        jQuery.ajax({
            type:'POST',
            url:'{/literal}{$baseurl}{literal}'+ '/likedeg.php',
            data:'art='+x+'&pid=' + p,
            success:function(e){
                $('#love_count_'+p).html(e);
                }
            });
        }
    </script>
	{/literal}