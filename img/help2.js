/* public domain */
'use strict';

var makeHelp = function() {
	if (!get("credit"))
		return;
	var helpbg = create("div");
	helpbg.id = "helpbg";
	get("credit").appendChild(helpbg);
	var help = get("help");
	
	help.src = "fukuno.js/help-icon.png"; // createImage("3c4242020c100010");
	
	var tc = get("helptipscontent");
	if (tc == null)
		return;
	
	var h = tc.offsetHeight;
	var h0 = h;
	var w = tc.offsetWidth; // 40以上
	var div = get("helptips");
	div.style.position = "absolute";
	div.style.display = "inline-block";
	div.style.posLeft = 0;
	div.style.posTop = 0;
//	div.offsetWidth = w;
//	div.offsetHeight = h;
	div.style.posWidth = w;
	div.style.posHeight = h;
	div.style.border = "2px solid black";
	div.style.background = '#fff';
	div.style.visibility = 'hidden';
	var tipsimg = new Image();
	tipsimg.src = "fukuno.js/help-arrow-down.png"; // createImage('fe7c381000000000'); //8244281000000000');
	tipsimg.style.position = "absolute";
	tipsimg.style.left = (w / 3) + 'px';
	tipsimg.style.marginTop = (h0 + 2 + 4) + "px";
	div.appendChild(tipsimg);
//	div.appendChild(div2);
	
	
//	document.body.appendChild(div);
	help.tips = div;
	
	var showTips = function() {
		var tips = get("helptips");
		tips.style.visibility = "visible";
		//tips.style.posTop = this.offsetTop - tips.offsetHeight - 4;
		//tips.style.posLeft = this.offsetLeft - tips.offsetWidth / 3 + 3;
		tips.style.top = (this.offsetTop - tips.offsetHeight - 4) + "px";
		tips.style.left = (this.offsetLeft - tips.offsetWidth / 3 + 3) + "px";

		helpbg.style.position = "absolute";
		helpbg.style.top = "0px";
		helpbg.style.width = document.body.scrollWidth + "px";
		var h = document.body.clientHeight;
		if (h < document.body.scrollHeight)
			h = document.body.scrollHeight;
		helpbg.style.height = (document.body.scrollHeight + 30) + "px";
		helpbg.style.visibility = "visible";
		helpbg.onclick = function() {
			this.style.visibility = "hidden";
			get("helptips").style.visibility = "hidden";
		};
	};
	help.onmouseover = showTips;
	help.onmouseout = function() {
//		get("tips").style.visibility = 'hidden';
	};
	/*
	help.onclick = function() {
		if (get('tips').style.visibility == 'hidden')
			showTips();
		else
			get('tips').style.visibility = 'hidden';
	};
	*/
	div.onclick = function() {
		get("helptips").style.visibility = 'hidden';
		helpbg.style.visibility = 'hidden';
	};
}

// help2 added

var link = create("link");
link.setAttribute("rel", "stylesheet");
link.setAttribute("type", "text/css");
link.setAttribute("href", "fukuno.js/base.css");
document.head.appendChild(link);
link = null;

window.addEventListener("load", function() {
	makeHelp();
}, false);

// google analytics
if (location.href.indexOf("localhost") == -1) {
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-31459240-1']); // taisukef
	_gaq.push(['_trackPageview']);
	
	(function() {
		var ga = document.createElement('script');
		ga.type = 'text/javascript';
		ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ga, s);
	})();
}
