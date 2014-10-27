var recoverToLogin = document.getElementById("recover-to-login");
var loginToRecover = document.getElementById("login-to-recover");
var email = document.getElementById("login-email-block");
var pass = document.getElementById("login-password-block");
var username = document.getElementById("login-username-block");
var rememberme = document.getElementById("login-rememberme-block");

loginToRecover.onclick = function(){
	email.style.display = "block";
	pass.style.display = "none";
	username.style.display = "none";
	rememberme.style.display = "none";
}

recoverToLogin.onclick = function(){
	email.style.display = "none";
	pass.style.display = "block";
	username.style.display = "block";
	rememberme.style.display = "block";
}

window.onload = function(){
	email.style.display = "none";
	pass.style.display = "block";
	username.style.display = "block";
	rememberme.style.display = "block";
}