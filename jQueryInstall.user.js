// ==UserScript==  
// @name		jQuery Installer
// @version		1.0.2
// @author		larryhou@foxmail.com
// @namespace	https://github.com/larryhou
// @description	所有网站安装jQuery
// ==/UserScript== 

function install()
{
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "http://larryhou.github.io/jquery-1.11.3.min.js";
	document.head.appendChild(script);
}

install();