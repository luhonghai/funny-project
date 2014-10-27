	<form name="langselecten" id="langselecten" method="post" style="padding:0; margin:0">
    <input type="hidden" name="language" value="en" />
    </form>
    <form name="langselectes" id="langselectes" method="post" style="padding:0; margin:0">
    <input type="hidden" name="language" value="es" />
    </form>
    <form name="langselectfr" id="langselectfr" method="post" style="padding:0; margin:0">
    <input type="hidden" name="language" value="fr" />
    </form>
    <form name="langselectde" id="langselectde" method="post" style="padding:0; margin:0">
    <input type="hidden" name="language" value="de" />
    </form>
    <form name="langselectpt" id="langselectpt" method="post" style="padding:0; margin:0">
    <input type="hidden" name="language" value="pt" />
    </form>
    <form name="langselectru" id="langselectru" method="post" style="padding:0; margin:0">
    <input type="hidden" name="language" value="ru" />
    </form>
    <form name="langselecttr" id="langselecttr" method="post" style="padding:0; margin:0">
    <input type="hidden" name="language" value="tr" />
    </form>
    
    <div id='lang'>
        <ul>
            <div class='tip-border'></div>
            <li><a href="#" onclick="document.langselecten.submit();">english</a></li>
            <li><a href="#" onclick="document.langselectes.submit();">espa&ntilde;ol</a></li>
            <li><a href="#" onclick="document.langselectfr.submit();">fran&#xE7;ais</a></li>
            <li><a href="#" onclick="document.langselectde.submit();">deutsch</a></li>
            <li><a href="#" onclick="document.langselectpt.submit();">portugu&#234;s</a></li>
            <li><a href="#" onclick="document.langselectru.submit();">pусский</a></li>
            <li><a href="#" onclick="document.langselecttr.submit();">t&uuml;rk&ccedil;e</a></li>
        </ul>
    </div>
    
    {literal}
    <script type="text/javascript">
    $(function() {
    $('.lang').toggle(
    function() {    
    $('.lang').text("x");
    $('#lang').css({ display: 'block', opacity: 1}); 
    },
    function() {
    $('.lang').html($('#lang_button').attr('label'));
    $('#lang').css({ display: ''});
    }
    );
    });
    </script>
    {/literal}