	<div class="footer">
        <div>
			<p>
				{if $smarty.session.USERID ne ""}
					You are logged in as {$smarty.session.USERNAME|stripslashes} - <a href={$mobileurl}/logout>logout</a>
				{else}  
					You are logged in as a visitor. <a href="{$mobileurl}/login">Login</a> to be able to vote
				{/if}
        	<p>&copy; 2012 {$site_name}. <a target="_blank" href="http://www.best9gagclonescript.com">Best9GagCloneScript.com Mobile Module V 1.0</a></p>
        </div>
    </div>
</body>
</html>