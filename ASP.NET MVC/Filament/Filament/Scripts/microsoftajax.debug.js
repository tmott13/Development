<!DOCTYPE html>
<html lang="en">

<head>
	<noscript><meta http-equiv="refresh" content="0; URL=/files/mmintz/F04PL0NSR/microsoftajax.debug.js?nojsmode=1" /></noscript>
<script type="text/javascript">
window.load_start_ms = new Date().getTime();
window.load_log = [];
window.logLoad = function(k) {
	var ms = new Date().getTime();
	window.load_log.push({
		k: k,
		t: (ms-window.load_start_ms)/1000
	})
}
if(self!==top)window.document.write("\u003Cstyle>body * {display:none !important;}\u003C\/style>\u003Ca href=\"#\" onclick="+
"\"top.location.href=window.location.href\" style=\"display:block !important;padding:10px\">Go to Slack.com\u003C\/a>");
</script>


<script type="text/javascript">
window.callSlackAPIUnauthed = function(method, args, callback) {
	var url = '/api/'+method+'?t='+new Date().getTime();
	var req = new XMLHttpRequest();
	
	req.onreadystatechange = function() {
		if (req.readyState == 4) {
			req.onreadystatechange = null;
			var obj;
			
			if (req.status == 200) {
				if (req.responseText.indexOf('{') == 0) {
					try {
						eval('obj = '+req.responseText);
					} catch (err) {
						console.warn('unable to do anything with api rsp');
					}
				}
			}
			
			obj = obj || {
				ok: false	
			}
			
			callback(obj.ok, obj, args);
		}
	}
	
	req.open('POST', url, 1);
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	var args2 = [];
	for (i in args) {
		args2[args2.length] = encodeURIComponent(i)+'='+encodeURIComponent(args[i]);
	}

	req.send(args2.join('&'));
}
</script>
			<meta name="referrer" content="no-referrer">
			<meta name="superfish" content="nofish">
	<script type="text/javascript">



var TS_last_log_date = null;
var TSMakeLogDate = function() {
	var date = new Date();

	var y = date.getFullYear();
	var mo = date.getMonth()+1;
	var d = date.getDate();

	var time = {
	  h: date.getHours(),
	  mi: date.getMinutes(),
	  s: date.getSeconds(),
	  ms: date.getMilliseconds()
	};

	Object.keys(time).map(function(moment, index) {
		if(time[moment] < 10) {
			time[moment] = '0' + time[moment];
		}
	});

	var str = y + '/' + mo + '/' + d + ' ' + time.h + ':' + time.mi + ':' + time.s + '.' + time.ms;
	if (TS_last_log_date) {
		var diff = date-TS_last_log_date;
		//str+= ' ('+diff+'ms)';
	}
	TS_last_log_date = date;
	return str+' ';
}

var TSSSB = {
	

	call: function() {
		return false;
	}

	
}

</script>	<script type="text/javascript">TSSSB.call('didFinishLoading');</script>
	    <meta charset="utf-8">
    <title>MicrosoftAjax.debug.js | Bluetube Slack</title>
    <meta name="author" content="Slack">

							
																
    									
		
		<!-- output_css "core" -->
    <link href="https://slack.global.ssl.fastly.net/fd07/style/rollup-plastic.css" rel="stylesheet" type="text/css">

	<!-- output_css "regular" -->
    <link href="https://slack.global.ssl.fastly.net/133f/style/comments.css" rel="stylesheet" type="text/css">
    <link href="https://slack.global.ssl.fastly.net/806b/style/stars.css" rel="stylesheet" type="text/css">
    <link href="https://slack.global.ssl.fastly.net/2df8/style/print.css" rel="stylesheet" type="text/css">
    <link href="https://slack.global.ssl.fastly.net/38f9/style/files.css" rel="stylesheet" type="text/css">
    <link href="https://slack.global.ssl.fastly.net/1d8a/style/libs/codemirror.css" rel="stylesheet" type="text/css">
    <link href="https://slack.global.ssl.fastly.net/1e63/style/libs/lato-1.css" rel="stylesheet" type="text/css">

	

	
	
	

	<!--[if lt IE 9]>
	<script src="https://slack.global.ssl.fastly.net/ef0d/js/libs/html5shiv.js"></script>
	<![endif]-->

	
<link id="favicon" rel="shortcut icon" href="https://slack.global.ssl.fastly.net/272a/img/icons/favicon-32.png" sizes="16x16 32x32 48x48" type="image/png" />

<link rel="icon" href="https://slack.global.ssl.fastly.net/ba3c/img/icons/app-256.png" sizes="256x256" type="image/png" />

<link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://slack.global.ssl.fastly.net/0dc1/img/icons/ios-152.png" />
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://slack.global.ssl.fastly.net/0dc1/img/icons/ios-144.png" />
<link rel="apple-touch-icon-precomposed" sizes="120x120" href="https://slack.global.ssl.fastly.net/0dc1/img/icons/ios-120.png" />
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://slack.global.ssl.fastly.net/0dc1/img/icons/ios-114.png" />
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://slack.global.ssl.fastly.net/0dc1/img/icons/ios-72.png" />
<link rel="apple-touch-icon-precomposed" href="https://slack.global.ssl.fastly.net/0dc1/img/icons/ios-57.png" />

<meta name="msapplication-TileColor" content="#FFFFFF" />
<meta name="msapplication-TileImage" content="https://slack.global.ssl.fastly.net/272a/img/icons/app-144.png" />	<script>
!function(a,b){function c(a,b){try{if("function"!=typeof a)return a;if(!a.bugsnag){var c=e();a.bugsnag=function(d){if(b&&b.eventHandler&&(u=d),v=c,!y){var e=a.apply(this,arguments);return v=null,e}try{return a.apply(this,arguments)}catch(f){throw l("autoNotify",!0)&&(x.notifyException(f,null,null,"error"),s()),f}finally{v=null}},a.bugsnag.bugsnag=a.bugsnag}return a.bugsnag}catch(d){return a}}function d(){B=!1}function e(){var a=document.currentScript||v;if(!a&&B){var b=document.scripts||document.getElementsByTagName("script");a=b[b.length-1]}return a}function f(a){var b=e();b&&(a.script={src:b.src,content:l("inlineScript",!0)?b.innerHTML:""})}function g(b){var c=l("disableLog"),d=a.console;void 0===d||void 0===d.log||c||d.log("[Bugsnag] "+b)}function h(b,c,d){if(d>=5)return encodeURIComponent(c)+"=[RECURSIVE]";d=d+1||1;try{if(a.Node&&b instanceof a.Node)return encodeURIComponent(c)+"="+encodeURIComponent(r(b));var e=[];for(var f in b)if(b.hasOwnProperty(f)&&null!=f&&null!=b[f]){var g=c?c+"["+f+"]":f,i=b[f];e.push("object"==typeof i?h(i,g,d):encodeURIComponent(g)+"="+encodeURIComponent(i))}return e.join("&")}catch(j){return encodeURIComponent(c)+"="+encodeURIComponent(""+j)}}function i(a,b){if(null==b)return a;a=a||{};for(var c in b)if(b.hasOwnProperty(c))try{a[c]=b[c].constructor===Object?i(a[c],b[c]):b[c]}catch(d){a[c]=b[c]}return a}function j(a,b){a+="?"+h(b)+"&ct=img&cb="+(new Date).getTime();var c=new Image;c.src=a}function k(a){var b={},c=/^data\-([\w\-]+)$/;if(a)for(var d=a.attributes,e=0;e<d.length;e++){var f=d[e];if(c.test(f.nodeName)){var g=f.nodeName.match(c)[1];b[g]=f.value||f.nodeValue}}return b}function l(a,b){C=C||k(J);var c=void 0!==x[a]?x[a]:C[a.toLowerCase()];return"false"===c&&(c=!1),void 0!==c?c:b}function m(a){return a&&a.match(D)?!0:(g("Invalid API key '"+a+"'"),!1)}function n(b,c){var d=l("apiKey");if(m(d)&&A){A-=1;var e=l("releaseStage"),f=l("notifyReleaseStages");if(f){for(var h=!1,k=0;k<f.length;k++)if(e===f[k]){h=!0;break}if(!h)return}var n=[b.name,b.message,b.stacktrace].join("|");if(n!==w){w=n,u&&(c=c||{},c["Last Event"]=q(u));var o={notifierVersion:H,apiKey:d,projectRoot:l("projectRoot")||a.location.protocol+"//"+a.location.host,context:l("context")||a.location.pathname,userId:l("userId"),user:l("user"),metaData:i(i({},l("metaData")),c),releaseStage:e,appVersion:l("appVersion"),url:a.location.href,userAgent:navigator.userAgent,language:navigator.language||navigator.userLanguage,severity:b.severity,name:b.name,message:b.message,stacktrace:b.stacktrace,file:b.file,lineNumber:b.lineNumber,columnNumber:b.columnNumber,payloadVersion:"2"},p=x.beforeNotify;if("function"==typeof p){var r=p(o,o.metaData);if(r===!1)return}return 0===o.lineNumber&&/Script error\.?/.test(o.message)?g("Ignoring cross-domain script error. See https://bugsnag.com/docs/notifiers/js/cors"):(j(l("endpoint")||G,o),void 0)}}}function o(){var a,b,c=10,d="[anonymous]";try{throw new Error("")}catch(e){a="<generated>\n",b=p(e)}if(!b){a="<generated-ie>\n";var f=[];try{for(var h=arguments.callee.caller.caller;h&&f.length<c;){var i=E.test(h.toString())?RegExp.$1||d:d;f.push(i),h=h.caller}}catch(j){g(j)}b=f.join("\n")}return a+b}function p(a){return a.stack||a.backtrace||a.stacktrace}function q(a){var b={millisecondsAgo:new Date-a.timeStamp,type:a.type,which:a.which,target:r(a.target)};return b}function r(a){if(a){var b=a.attributes;if(b){for(var c="<"+a.nodeName.toLowerCase(),d=0;d<b.length;d++)b[d].value&&"null"!=b[d].value.toString()&&(c+=" "+b[d].name+'="'+b[d].value+'"');return c+">"}return a.nodeName}}function s(){z+=1,a.setTimeout(function(){z-=1})}function t(a,b,c){var d=a[b],e=c(d);a[b]=e}var u,v,w,x={},y=!0,z=0,A=10;x.noConflict=function(){return a.Bugsnag=b,x},x.refresh=function(){A=10},x.notifyException=function(a,b,c,d){b&&"string"!=typeof b&&(c=b,b=void 0),c||(c={}),f(c),n({name:b||a.name,message:a.message||a.description,stacktrace:p(a)||o(),file:a.fileName||a.sourceURL,lineNumber:a.lineNumber||a.line,columnNumber:a.columnNumber?a.columnNumber+1:void 0,severity:d||"warning"},c)},x.notify=function(b,c,d,e){n({name:b,message:c,stacktrace:o(),file:a.location.toString(),lineNumber:1,severity:e||"warning"},d)};var B="complete"!==document.readyState;document.addEventListener?(document.addEventListener("DOMContentLoaded",d,!0),a.addEventListener("load",d,!0)):a.attachEvent("onload",d);var C,D=/^[0-9a-f]{32}$/i,E=/function\s*([\w\-$]+)?\s*\(/i,F="https://notify.bugsnag.com/",G=F+"js",H="2.4.7",I=document.getElementsByTagName("script"),J=I[I.length-1];if(a.atob){if(a.ErrorEvent)try{0===new a.ErrorEvent("test").colno&&(y=!1)}catch(K){}}else y=!1;if(l("autoNotify",!0)){t(a,"onerror",function(b){return function(c,d,e,g,h){var i=l("autoNotify",!0),j={};!g&&a.event&&(g=a.event.errorCharacter),f(j),v=null,i&&!z&&n({name:h&&h.name||"window.onerror",message:c,file:d,lineNumber:e,columnNumber:g,stacktrace:h&&p(h)||o(),severity:"error"},j),b&&b(c,d,e,g,h)}});var L=function(a){return function(b,d){if("function"==typeof b){b=c(b);var e=Array.prototype.slice.call(arguments,2);return a(function(){b.apply(this,e)},d)}return a(b,d)}};t(a,"setTimeout",L),t(a,"setInterval",L),a.requestAnimationFrame&&t(a,"requestAnimationFrame",function(a){return function(b){return a(c(b))}}),a.setImmediate&&t(a,"setImmediate",function(a){return function(){var b=Array.prototype.slice.call(arguments);return b[0]=c(b[0]),a.apply(this,b)}}),"EventTarget Window Node ApplicationCache AudioTrackList ChannelMergerNode CryptoOperation EventSource FileReader HTMLUnknownElement IDBDatabase IDBRequest IDBTransaction KeyOperation MediaController MessagePort ModalWindow Notification SVGElementInstance Screen TextTrack TextTrackCue TextTrackList WebSocket WebSocketWorker Worker XMLHttpRequest XMLHttpRequestEventTarget XMLHttpRequestUpload".replace(/\w+/g,function(b){var d=a[b]&&a[b].prototype;d&&d.hasOwnProperty&&d.hasOwnProperty("addEventListener")&&(t(d,"addEventListener",function(a){return function(b,d,e,f){return d&&d.handleEvent&&(d.handleEvent=c(d.handleEvent,{eventHandler:!0})),a.call(this,b,c(d,{eventHandler:!0}),e,f)}}),t(d,"removeEventListener",function(a){return function(b,d,e,f){return a.call(this,b,d,e,f),a.call(this,b,c(d),e,f)}}))})}a.Bugsnag=x,"function"==typeof define&&define.amd?define([],function(){return x}):"object"==typeof module&&"object"==typeof module.exports&&(module.exports=x)}(window,window.Bugsnag);
Bugsnag.apiKey = "2a86b308af5a81d2c9329fedfb4b30c7";
Bugsnag.appVersion = "4ecc5aaac16db02d7ddcd4cf6742cf264e30b63c-1431028947";
Bugsnag.endpoint = "https://errors.slack-core.com/js";
Bugsnag.releaseStage = "prod";
Bugsnag.user = {id:"U03PUV2F9",name:"tanya",email:"tresende@bluetubeinc.com"};
Bugsnag.metaData = {};
Bugsnag.metaData.team = {id:"T032CPD2W",name:"Bluetube",domain:"bluetube"};
Bugsnag.refresh_interval = setInterval(function () { (window.TS && window.TS.client) ? Bugsnag.refresh() : clearInterval(Bugsnag.refresh_interval); }, 15 * 60 * 1000);
</script>			<script type="text/javascript">

	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	ga('create', 'UA-106458-17', 'slack.com');
	ga('send', 'pageview');


	(function(e,c,b,f,d,g,a){e.SlackBeaconObject=d;
	e[d]=e[d]||function(){(e[d].q=e[d].q||[]).push([1*new Date(),arguments])};
	e[d].l=1*new Date();g=c.createElement(b);a=c.getElementsByTagName(b)[0];
	g.async=1;g.src=f;a.parentNode.insertBefore(g,a)
	})(window,document,"script","https://slack.global.ssl.fastly.net/dcf8/js/libs/beacon.js","sb");
	sb('set', 'token', '3307f436963e02d4f9eb85ce5159744c');
	sb('set', 'user_id', 'U03PUV2F9');
	sb('set', 'user_batch', "immediate-launch");
	sb('set', 'user_created', "2015-02-23");
	sb('set', 'name_tag', 'bluetube/tanya');
	sb('track', 'pageview');

	function track(a){ga('send','event','web',a);sb('track',a);}


	
	(function(f,b){if(!b.__SV){var a,e,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(".");2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;"undefined"!==typeof d?c=b[d]=[]:d="mixpanel";c.people=c.people||[];c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");return a};c.people.toString=function(){return c.toString(1)+".people (stub)"};i="disable track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.track_charge people.clear_charges people.delete_user".split(" ");
	for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=f.createElement("script");a.type="text/javascript";a.async=!0;a.src="//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";e=f.getElementsByTagName("script")[0];e.parentNode.insertBefore(a,e)}})(document,window.mixpanel||[]);
	
	mixpanel.init("12d52d8633a5b432975592d13ebd3f34");

	function mixpanel_track(event_name){if(window.mixpanel&&event_name)mixpanel.track(event_name);}

</script>	
</head>

  <body >

		  			<script>
		
			var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
			if (w > 1440) document.querySelector('body').classList.add('widescreen');
		
		</script>
	
  	
	

			<nav id="site_nav" class="no_transition">

	<div id="site_nav_contents">

		<div id="user_menu">
			<div id="user_menu_contents">
				<div id="user_menu_avatar">
										<span class="member_image thumb_48" style="background-image: url('https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2015-04-02/4302270253_83de6fa0d73da98465e7_192.jpg')" data-thumb-size="48" data-member-id="U03PUV2F9"></span>
					<span class="member_image thumb_36" style="background-image: url('https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2015-04-02/4302270253_83de6fa0d73da98465e7_72.jpg')" data-thumb-size="36" data-member-id="U03PUV2F9"></span>
				</div>
				<h3>Signed in as</h3>
				<span id="user_menu_name">tanya</span>
			</div>
		</div>

		<div class="nav_contents">

			<ul class="primary_nav">
				<li><a href="/home"><i class="ts_icon ts_icon_home"></i>Home</a></li>
				<li><a href="/account"><i class="ts_icon ts_icon_user"></i>Account & Profile</a></li>
				<li><a href="/services/new"><i class="ts_icon ts_icon_wrench"></i>Integrations</a></li>
				<li><a href="/archives"><i class="ts_icon ts_icon_inbox"></i>Message Archives</a></li>
				<li><a href="/files"><i class="ts_icon ts_icon_file"></i>Files</a></li>
				<li><a href="/team"><i class="ts_icon ts_icon_team_directory"></i>Team Directory</a></li>
									<li><a href="/stats"><i class="ts_icon ts_icon_dashboard"></i>Statistics</a></li>
													<li><a href="/customize"><i class="ts_icon ts_icon_magic"></i>Customize</a></li>
													<li><a href="/account/team"><i class="ts_icon ts_icon_cog_o"></i>Team Settings</a></li>
							</ul>

			
		</div>

		<div id="footer">

			<ul id="footer_nav">
				<li><a href="/is">Tour</a></li>
				<li><a href="/apps">Apps</a></li>
				<li><a href="/brand-guidelines">Brand Guidelines</a></li>
				<li><a href="/help">Help</a></li>
				<li><a href="https://api.slack.com" target="_blank">API<i class="ts_icon ts_icon_external_link small_left_margin"></i></a></li>
								<li><a href="/pricing">Pricing</a></li>
				<li><a href="/help/requests/new">Contact</a></li>
				<li><a href="/terms-of-service">Policies</a></li>
				<li><a href="http://slackhq.com/" target="_blank">Our Blog</a></li>
				<li><a href="https://slack.com/signout/3080795098?crumb=s-1431029631-72c40fb5c8-%E2%98%83">Sign Out<i class="ts_icon ts_icon_sign_out small_left_margin"></i></a></li>
			</ul>

			<p id="footer_signature">Made with <i class="ts_icon ts_icon_heart"></i> by Slack</p>

		</div>

	</div>
</nav>	
			<header>
							<a id="menu_toggle" class="no_transition">
					<span class="menu_icon"></span>
					<span class="menu_label">Menu</span>
					<span class="vert_divider"></span>
				</a>
				<h1 id="header_team_name" class="inline_block no_transition">
					<a href="/home">
						<i class="ts_icon ts_icon_home" /></i>
						Bluetube
					</a>
				</h1>
				<div class="header_nav">
					<div class="header_btns float_right">
						<a id="team_switcher">
							<i class="ts_icon ts_icon_th_large ts_icon_inherit"></i>
							<span class="block label">Teams</span>
						</a>
						<a href="/help" id="help_link">
							<i class="ts_icon ts_icon_life_ring ts_icon_inherit"></i>
							<span class="block label">Help</span>
						</a>
						<a href="/messages">
							<img src="https://slack.global.ssl.fastly.net/0dc1/img/icons/ios-64.png" srcset="https://slack.global.ssl.fastly.net/0dc1/img/icons/ios-32.png 1x, https://slack.global.ssl.fastly.net/0dc1/img/icons/ios-64.png 2x" />
							<span class="block label">Launch</span>
						</a>
					</div>
								                    <ul id="header_team_nav">
			                        			                            <li class="active">
			                            	<a href="https://bluetube.slack.com/home" target="https://bluetube.slack.com/">
			                            					                            			<i class="ts_icon ts_icon_check_circle_o active_icon"></i>
			                            					                            						                            		<i class="team_icon" style="background-image: url('https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2015-03-10/3994012131_6f7eafa9497341220288_88.jpg');"></i>
				                            				                            		<span class="switcher_label team_name">Bluetube</span>
			                            	</a>
			                            </li>
			                        			                        <li id="add_team_option"><a href="https://slack.com/signin" target="_blank"><i class="ts_icon ts_icon_plus team_icon"></i> <span class="switcher_label">Sign in to another team...</span></a></li>
			                    </ul>
			                				</div>
			
			
		</header>
	
	<div id="page">

		<div id="page_contents" >

<p class="print_only">
	<strong>Created by mmintz on May 7, 2015 at 1:12 PM</strong><br />
	<span class="subtle_silver break_word">https://bluetube.slack.com/files/mmintz/F04PL0NSR/microsoftajax.debug.js</span>
</p>

<div class="file_header_container no_print"></div>

<div class="alert_container">
		<div class="file_public_link_shared alert" style="display: none;">
		
	<i class="ts_icon ts_icon_link"></i> Public Link: <a class="file_public_link" href="https://slack-files.com/T032CPD2W-F04PL0NSR-aff8fe83af" target="new">https://slack-files.com/T032CPD2W-F04PL0NSR-aff8fe83af</a>
</div></div>

<div id="file_page" class="card top_padding">

	<p class="small subtle_silver no_print meta">
		310KB JavaScript/JSON snippet created on <span class="date">May 7th 2015</span>.
		This file is private.		<span class="file_share_list"></span>
	</p>

	<a id="file_action_cog" class="action_cog action_cog_snippet float_right no_print">
		<span>Actions </span><i class="ts_icon ts_icon_cog"></i>
	</a>
	<a id="snippet_expand_toggle" class="float_right no_print">
		<i class="ts_icon ts_icon_expand "></i>
		<i class="ts_icon ts_icon_compress hidden"></i>
	</a>

	<div class="large_bottom_margin clearfix">
		<pre id="file_contents">// Name:        MicrosoftAjax.debug.js
// Assembly:    System.Web.Extensions
// Version:     4.0.0.0
// FileVersion: 4.0.30205.0
//-----------------------------------------------------------------------
// Copyright (C) Microsoft Corporation. All rights reserved.
//-----------------------------------------------------------------------
// MicrosoftAjax.js
// Microsoft AJAX Framework.
 
Function.__typeName = &#039;Function&#039;;
Function.__class = true;
Function.createCallback = function Function$createCallback(method, context) {
    /// &lt;summary locid=&quot;M:J#Function.createCallback&quot; /&gt;
    /// &lt;param name=&quot;method&quot; type=&quot;Function&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;context&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Function&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;method&quot;, type: Function},
        {name: &quot;context&quot;, mayBeNull: true}
    ]);
    if (e) throw e;
    return function() {
        var l = arguments.length;
        if (l &gt; 0) {
            var args = [];
            for (var i = 0; i &lt; l; i++) {
                args[i] = arguments[i];
            }
            args[l] = context;
            return method.apply(this, args);
        }
        return method.call(this, context);
    }
}
Function.createDelegate = function Function$createDelegate(instance, method) {
    /// &lt;summary locid=&quot;M:J#Function.createDelegate&quot; /&gt;
    /// &lt;param name=&quot;instance&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;method&quot; type=&quot;Function&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Function&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;instance&quot;, mayBeNull: true},
        {name: &quot;method&quot;, type: Function}
    ]);
    if (e) throw e;
    return function() {
        return method.apply(instance, arguments);
    }
}
Function.emptyFunction = Function.emptyMethod = function Function$emptyMethod() {
    /// &lt;summary locid=&quot;M:J#Function.emptyMethod&quot; /&gt;
}
Function.validateParameters = function Function$validateParameters(parameters, expectedParameters, validateParameterCount) {
    /// &lt;summary locid=&quot;M:J#Function.validateParameters&quot; /&gt;
    /// &lt;param name=&quot;parameters&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;expectedParameters&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;validateParameterCount&quot; type=&quot;Boolean&quot; optional=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Error&quot; mayBeNull=&quot;true&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;parameters&quot;},
        {name: &quot;expectedParameters&quot;},
        {name: &quot;validateParameterCount&quot;, type: Boolean, optional: true}
    ]);
    if (e) throw e;
    return Function._validateParams(parameters, expectedParameters, validateParameterCount);
}
Function._validateParams = function Function$_validateParams(params, expectedParams, validateParameterCount) {
    var e, expectedLength = expectedParams.length;
    validateParameterCount = validateParameterCount || (typeof(validateParameterCount) === &quot;undefined&quot;);
    e = Function._validateParameterCount(params, expectedParams, validateParameterCount);
    if (e) {
        e.popStackFrame();
        return e;
    }
    for (var i = 0, l = params.length; i &lt; l; i++) {
        var expectedParam = expectedParams[Math.min(i, expectedLength - 1)],
            paramName = expectedParam.name;
        if (expectedParam.parameterArray) {
            paramName += &quot;[&quot; + (i - expectedLength + 1) + &quot;]&quot;;
        }
        else if (!validateParameterCount &amp;&amp; (i &gt;= expectedLength)) {
            break;
        }
        e = Function._validateParameter(params[i], expectedParam, paramName);
        if (e) {
            e.popStackFrame();
            return e;
        }
    }
    return null;
}
Function._validateParameterCount = function Function$_validateParameterCount(params, expectedParams, validateParameterCount) {
    var i, error,
        expectedLen = expectedParams.length,
        actualLen = params.length;
    if (actualLen &lt; expectedLen) {
        var minParams = expectedLen;
        for (i = 0; i &lt; expectedLen; i++) {
            var param = expectedParams[i];
            if (param.optional || param.parameterArray) {
                minParams--;
            }
        }        
        if (actualLen &lt; minParams) {
            error = true;
        }
    }
    else if (validateParameterCount &amp;&amp; (actualLen &gt; expectedLen)) {
        error = true;      
        for (i = 0; i &lt; expectedLen; i++) {
            if (expectedParams[i].parameterArray) {
                error = false; 
                break;
            }
        }  
    }
    if (error) {
        var e = Error.parameterCount();
        e.popStackFrame();
        return e;
    }
    return null;
}
Function._validateParameter = function Function$_validateParameter(param, expectedParam, paramName) {
    var e,
        expectedType = expectedParam.type,
        expectedInteger = !!expectedParam.integer,
        expectedDomElement = !!expectedParam.domElement,
        mayBeNull = !!expectedParam.mayBeNull;
    e = Function._validateParameterType(param, expectedType, expectedInteger, expectedDomElement, mayBeNull, paramName);
    if (e) {
        e.popStackFrame();
        return e;
    }
    var expectedElementType = expectedParam.elementType,
        elementMayBeNull = !!expectedParam.elementMayBeNull;
    if (expectedType === Array &amp;&amp; typeof(param) !== &quot;undefined&quot; &amp;&amp; param !== null &amp;&amp;
        (expectedElementType || !elementMayBeNull)) {
        var expectedElementInteger = !!expectedParam.elementInteger,
            expectedElementDomElement = !!expectedParam.elementDomElement;
        for (var i=0; i &lt; param.length; i++) {
            var elem = param[i];
            e = Function._validateParameterType(elem, expectedElementType,
                expectedElementInteger, expectedElementDomElement, elementMayBeNull,
                paramName + &quot;[&quot; + i + &quot;]&quot;);
            if (e) {
                e.popStackFrame();
                return e;
            }
        }
    }
    return null;
}
Function._validateParameterType = function Function$_validateParameterType(param, expectedType, expectedInteger, expectedDomElement, mayBeNull, paramName) {
    var e, i;
    if (typeof(param) === &quot;undefined&quot;) {
        if (mayBeNull) {
            return null;
        }
        else {
            e = Error.argumentUndefined(paramName);
            e.popStackFrame();
            return e;
        }
    }
    if (param === null) {
        if (mayBeNull) {
            return null;
        }
        else {
            e = Error.argumentNull(paramName);
            e.popStackFrame();
            return e;
        }
    }
    if (expectedType &amp;&amp; expectedType.__enum) {
        if (typeof(param) !== &#039;number&#039;) {
            e = Error.argumentType(paramName, Object.getType(param), expectedType);
            e.popStackFrame();
            return e;
        }
        if ((param % 1) === 0) {
            var values = expectedType.prototype;
            if (!expectedType.__flags || (param === 0)) {
                for (i in values) {
                    if (values[i] === param) return null;
                }
            }
            else {
                var v = param;
                for (i in values) {
                    var vali = values[i];
                    if (vali === 0) continue;
                    if ((vali &amp; param) === vali) {
                        v -= vali;
                    }
                    if (v === 0) return null;
                }
            }
        }
        e = Error.argumentOutOfRange(paramName, param, String.format(Sys.Res.enumInvalidValue, param, expectedType.getName()));
        e.popStackFrame();
        return e;
    }
    if (expectedDomElement &amp;&amp; (!Sys._isDomElement(param) || (param.nodeType === 3))) {
        e = Error.argument(paramName, Sys.Res.argumentDomElement);
        e.popStackFrame();
        return e;
    }
    if (expectedType &amp;&amp; !Sys._isInstanceOfType(expectedType, param)) {
        e = Error.argumentType(paramName, Object.getType(param), expectedType);
        e.popStackFrame();
        return e;
    }
    if (expectedType === Number &amp;&amp; expectedInteger) {
        if ((param % 1) !== 0) {
            e = Error.argumentOutOfRange(paramName, param, Sys.Res.argumentInteger);
            e.popStackFrame();
            return e;
        }
    }
    return null;
}
 
Error.__typeName = &#039;Error&#039;;
Error.__class = true;
Error.create = function Error$create(message, errorInfo) {
    /// &lt;summary locid=&quot;M:J#Error.create&quot; /&gt;
    /// &lt;param name=&quot;message&quot; type=&quot;String&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;errorInfo&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Error&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;message&quot;, type: String, mayBeNull: true, optional: true},
        {name: &quot;errorInfo&quot;, mayBeNull: true, optional: true}
    ]);
    if (e) throw e;
    var err = new Error(message);
    err.message = message;
    if (errorInfo) {
        for (var v in errorInfo) {
            err[v] = errorInfo[v];
        }
    }
    err.popStackFrame();
    return err;
}
Error.argument = function Error$argument(paramName, message) {
    /// &lt;summary locid=&quot;M:J#Error.argument&quot; /&gt;
    /// &lt;param name=&quot;paramName&quot; type=&quot;String&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;message&quot; type=&quot;String&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;paramName&quot;, type: String, mayBeNull: true, optional: true},
        {name: &quot;message&quot;, type: String, mayBeNull: true, optional: true}
    ]);
    if (e) throw e;
    var displayMessage = &quot;Sys.ArgumentException: &quot; + (message ? message : Sys.Res.argument);
    if (paramName) {
        displayMessage += &quot;\n&quot; + String.format(Sys.Res.paramName, paramName);
    }
    var err = Error.create(displayMessage, { name: &quot;Sys.ArgumentException&quot;, paramName: paramName });
    err.popStackFrame();
    return err;
}
Error.argumentNull = function Error$argumentNull(paramName, message) {
    /// &lt;summary locid=&quot;M:J#Error.argumentNull&quot; /&gt;
    /// &lt;param name=&quot;paramName&quot; type=&quot;String&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;message&quot; type=&quot;String&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;paramName&quot;, type: String, mayBeNull: true, optional: true},
        {name: &quot;message&quot;, type: String, mayBeNull: true, optional: true}
    ]);
    if (e) throw e;
    var displayMessage = &quot;Sys.ArgumentNullException: &quot; + (message ? message : Sys.Res.argumentNull);
    if (paramName) {
        displayMessage += &quot;\n&quot; + String.format(Sys.Res.paramName, paramName);
    }
    var err = Error.create(displayMessage, { name: &quot;Sys.ArgumentNullException&quot;, paramName: paramName });
    err.popStackFrame();
    return err;
}
Error.argumentOutOfRange = function Error$argumentOutOfRange(paramName, actualValue, message) {
    /// &lt;summary locid=&quot;M:J#Error.argumentOutOfRange&quot; /&gt;
    /// &lt;param name=&quot;paramName&quot; type=&quot;String&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;actualValue&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;message&quot; type=&quot;String&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;paramName&quot;, type: String, mayBeNull: true, optional: true},
        {name: &quot;actualValue&quot;, mayBeNull: true, optional: true},
        {name: &quot;message&quot;, type: String, mayBeNull: true, optional: true}
    ]);
    if (e) throw e;
    var displayMessage = &quot;Sys.ArgumentOutOfRangeException: &quot; + (message ? message : Sys.Res.argumentOutOfRange);
    if (paramName) {
        displayMessage += &quot;\n&quot; + String.format(Sys.Res.paramName, paramName);
    }
    if (typeof(actualValue) !== &quot;undefined&quot; &amp;&amp; actualValue !== null) {
        displayMessage += &quot;\n&quot; + String.format(Sys.Res.actualValue, actualValue);
    }
    var err = Error.create(displayMessage, {
        name: &quot;Sys.ArgumentOutOfRangeException&quot;,
        paramName: paramName,
        actualValue: actualValue
    });
    err.popStackFrame();
    return err;
}
Error.argumentType = function Error$argumentType(paramName, actualType, expectedType, message) {
    /// &lt;summary locid=&quot;M:J#Error.argumentType&quot; /&gt;
    /// &lt;param name=&quot;paramName&quot; type=&quot;String&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;actualType&quot; type=&quot;Type&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;expectedType&quot; type=&quot;Type&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;message&quot; type=&quot;String&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;paramName&quot;, type: String, mayBeNull: true, optional: true},
        {name: &quot;actualType&quot;, type: Type, mayBeNull: true, optional: true},
        {name: &quot;expectedType&quot;, type: Type, mayBeNull: true, optional: true},
        {name: &quot;message&quot;, type: String, mayBeNull: true, optional: true}
    ]);
    if (e) throw e;
    var displayMessage = &quot;Sys.ArgumentTypeException: &quot;;
    if (message) {
        displayMessage += message;
    }
    else if (actualType &amp;&amp; expectedType) {
        displayMessage +=
            String.format(Sys.Res.argumentTypeWithTypes, actualType.getName(), expectedType.getName());
    }
    else {
        displayMessage += Sys.Res.argumentType;
    }
    if (paramName) {
        displayMessage += &quot;\n&quot; + String.format(Sys.Res.paramName, paramName);
    }
    var err = Error.create(displayMessage, {
        name: &quot;Sys.ArgumentTypeException&quot;,
        paramName: paramName,
        actualType: actualType,
        expectedType: expectedType
    });
    err.popStackFrame();
    return err;
}
Error.argumentUndefined = function Error$argumentUndefined(paramName, message) {
    /// &lt;summary locid=&quot;M:J#Error.argumentUndefined&quot; /&gt;
    /// &lt;param name=&quot;paramName&quot; type=&quot;String&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;message&quot; type=&quot;String&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;paramName&quot;, type: String, mayBeNull: true, optional: true},
        {name: &quot;message&quot;, type: String, mayBeNull: true, optional: true}
    ]);
    if (e) throw e;
    var displayMessage = &quot;Sys.ArgumentUndefinedException: &quot; + (message ? message : Sys.Res.argumentUndefined);
    if (paramName) {
        displayMessage += &quot;\n&quot; + String.format(Sys.Res.paramName, paramName);
    }
    var err = Error.create(displayMessage, { name: &quot;Sys.ArgumentUndefinedException&quot;, paramName: paramName });
    err.popStackFrame();
    return err;
}
Error.format = function Error$format(message) {
    /// &lt;summary locid=&quot;M:J#Error.format&quot; /&gt;
    /// &lt;param name=&quot;message&quot; type=&quot;String&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;message&quot;, type: String, mayBeNull: true, optional: true}
    ]);
    if (e) throw e;
    var displayMessage = &quot;Sys.FormatException: &quot; + (message ? message : Sys.Res.format);
    var err = Error.create(displayMessage, {name: &#039;Sys.FormatException&#039;});
    err.popStackFrame();
    return err;
}
Error.invalidOperation = function Error$invalidOperation(message) {
    /// &lt;summary locid=&quot;M:J#Error.invalidOperation&quot; /&gt;
    /// &lt;param name=&quot;message&quot; type=&quot;String&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;message&quot;, type: String, mayBeNull: true, optional: true}
    ]);
    if (e) throw e;
    var displayMessage = &quot;Sys.InvalidOperationException: &quot; + (message ? message : Sys.Res.invalidOperation);
    var err = Error.create(displayMessage, {name: &#039;Sys.InvalidOperationException&#039;});
    err.popStackFrame();
    return err;
}
Error.notImplemented = function Error$notImplemented(message) {
    /// &lt;summary locid=&quot;M:J#Error.notImplemented&quot; /&gt;
    /// &lt;param name=&quot;message&quot; type=&quot;String&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;message&quot;, type: String, mayBeNull: true, optional: true}
    ]);
    if (e) throw e;
    var displayMessage = &quot;Sys.NotImplementedException: &quot; + (message ? message : Sys.Res.notImplemented);
    var err = Error.create(displayMessage, {name: &#039;Sys.NotImplementedException&#039;});
    err.popStackFrame();
    return err;
}
Error.parameterCount = function Error$parameterCount(message) {
    /// &lt;summary locid=&quot;M:J#Error.parameterCount&quot; /&gt;
    /// &lt;param name=&quot;message&quot; type=&quot;String&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;message&quot;, type: String, mayBeNull: true, optional: true}
    ]);
    if (e) throw e;
    var displayMessage = &quot;Sys.ParameterCountException: &quot; + (message ? message : Sys.Res.parameterCount);
    var err = Error.create(displayMessage, {name: &#039;Sys.ParameterCountException&#039;});
    err.popStackFrame();
    return err;
}
Error.prototype.popStackFrame = function Error$popStackFrame() {
    /// &lt;summary locid=&quot;M:J#checkParam&quot; /&gt;
    if (arguments.length !== 0) throw Error.parameterCount();
    if (typeof(this.stack) === &quot;undefined&quot; || this.stack === null ||
        typeof(this.fileName) === &quot;undefined&quot; || this.fileName === null ||
        typeof(this.lineNumber) === &quot;undefined&quot; || this.lineNumber === null) {
        return;
    }
    var stackFrames = this.stack.split(&quot;\n&quot;);
    var currentFrame = stackFrames[0];
    var pattern = this.fileName + &quot;:&quot; + this.lineNumber;
    while(typeof(currentFrame) !== &quot;undefined&quot; &amp;&amp;
          currentFrame !== null &amp;&amp;
          currentFrame.indexOf(pattern) === -1) {
        stackFrames.shift();
        currentFrame = stackFrames[0];
    }
    var nextFrame = stackFrames[1];
    if (typeof(nextFrame) === &quot;undefined&quot; || nextFrame === null) {
        return;
    }
    var nextFrameParts = nextFrame.match(/@(.*):(\d+)$/);
    if (typeof(nextFrameParts) === &quot;undefined&quot; || nextFrameParts === null) {
        return;
    }
    this.fileName = nextFrameParts[1];
    this.lineNumber = parseInt(nextFrameParts[2]);
    stackFrames.shift();
    this.stack = stackFrames.join(&quot;\n&quot;);
}
 
Object.__typeName = &#039;Object&#039;;
Object.__class = true;
Object.getType = function Object$getType(instance) {
    /// &lt;summary locid=&quot;M:J#Object.getType&quot; /&gt;
    /// &lt;param name=&quot;instance&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Type&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;instance&quot;}
    ]);
    if (e) throw e;
    var ctor = instance.constructor;
    if (!ctor || (typeof(ctor) !== &quot;function&quot;) || !ctor.__typeName || (ctor.__typeName === &#039;Object&#039;)) {
        return Object;
    }
    return ctor;
}
Object.getTypeName = function Object$getTypeName(instance) {
    /// &lt;summary locid=&quot;M:J#Object.getTypeName&quot; /&gt;
    /// &lt;param name=&quot;instance&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;String&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;instance&quot;}
    ]);
    if (e) throw e;
    return Object.getType(instance).getName();
}
 
String.__typeName = &#039;String&#039;;
String.__class = true;
String.prototype.endsWith = function String$endsWith(suffix) {
    /// &lt;summary locid=&quot;M:J#String.endsWith&quot; /&gt;
    /// &lt;param name=&quot;suffix&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Boolean&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;suffix&quot;, type: String}
    ]);
    if (e) throw e;
    return (this.substr(this.length - suffix.length) === suffix);
}
String.prototype.startsWith = function String$startsWith(prefix) {
    /// &lt;summary locid=&quot;M:J#String.startsWith&quot; /&gt;
    /// &lt;param name=&quot;prefix&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Boolean&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;prefix&quot;, type: String}
    ]);
    if (e) throw e;
    return (this.substr(0, prefix.length) === prefix);
}
String.prototype.trim = function String$trim() {
    /// &lt;summary locid=&quot;M:J#String.trim&quot; /&gt;
    /// &lt;returns type=&quot;String&quot;&gt;&lt;/returns&gt;
    if (arguments.length !== 0) throw Error.parameterCount();
    return this.replace(/^\s+|\s+$/g, &#039;&#039;);
}
String.prototype.trimEnd = function String$trimEnd() {
    /// &lt;summary locid=&quot;M:J#String.trimEnd&quot; /&gt;
    /// &lt;returns type=&quot;String&quot;&gt;&lt;/returns&gt;
    if (arguments.length !== 0) throw Error.parameterCount();
    return this.replace(/\s+$/, &#039;&#039;);
}
String.prototype.trimStart = function String$trimStart() {
    /// &lt;summary locid=&quot;M:J#String.trimStart&quot; /&gt;
    /// &lt;returns type=&quot;String&quot;&gt;&lt;/returns&gt;
    if (arguments.length !== 0) throw Error.parameterCount();
    return this.replace(/^\s+/, &#039;&#039;);
}
String.format = function String$format(format, args) {
    /// &lt;summary locid=&quot;M:J#String.format&quot; /&gt;
    /// &lt;param name=&quot;format&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;args&quot; parameterArray=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;String&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;format&quot;, type: String},
        {name: &quot;args&quot;, mayBeNull: true, parameterArray: true}
    ]);
    if (e) throw e;
    return String._toFormattedString(false, arguments);
}
String._toFormattedString = function String$_toFormattedString(useLocale, args) {
    var result = &#039;&#039;;
    var format = args[0];
    for (var i=0;;) {
        var open = format.indexOf(&#039;{&#039;, i);
        var close = format.indexOf(&#039;}&#039;, i);
        if ((open &lt; 0) &amp;&amp; (close &lt; 0)) {
            result += format.slice(i);
            break;
        }
        if ((close &gt; 0) &amp;&amp; ((close &lt; open) || (open &lt; 0))) {
            if (format.charAt(close + 1) !== &#039;}&#039;) {
                throw Error.argument(&#039;format&#039;, Sys.Res.stringFormatBraceMismatch);
            }
            result += format.slice(i, close + 1);
            i = close + 2;
            continue;
        }
        result += format.slice(i, open);
        i = open + 1;
        if (format.charAt(i) === &#039;{&#039;) {
            result += &#039;{&#039;;
            i++;
            continue;
        }
        if (close &lt; 0) throw Error.argument(&#039;format&#039;, Sys.Res.stringFormatBraceMismatch);
        var brace = format.substring(i, close);
        var colonIndex = brace.indexOf(&#039;:&#039;);
        var argNumber = parseInt((colonIndex &lt; 0)? brace : brace.substring(0, colonIndex), 10) + 1;
        if (isNaN(argNumber)) throw Error.argument(&#039;format&#039;, Sys.Res.stringFormatInvalid);
        var argFormat = (colonIndex &lt; 0)? &#039;&#039; : brace.substring(colonIndex + 1);
        var arg = args[argNumber];
        if (typeof(arg) === &quot;undefined&quot; || arg === null) {
            arg = &#039;&#039;;
        }
        if (arg.toFormattedString) {
            result += arg.toFormattedString(argFormat);
        }
        else if (useLocale &amp;&amp; arg.localeFormat) {
            result += arg.localeFormat(argFormat);
        }
        else if (arg.format) {
            result += arg.format(argFormat);
        }
        else
            result += arg.toString();
        i = close + 1;
    }
    return result;
}
 
Boolean.__typeName = &#039;Boolean&#039;;
Boolean.__class = true;
Boolean.parse = function Boolean$parse(value) {
    /// &lt;summary locid=&quot;M:J#Boolean.parse&quot; /&gt;
    /// &lt;param name=&quot;value&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Boolean&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;value&quot;, type: String}
    ], false);
    if (e) throw e;
    var v = value.trim().toLowerCase();
    if (v === &#039;false&#039;) return false;
    if (v === &#039;true&#039;) return true;
    throw Error.argumentOutOfRange(&#039;value&#039;, value, Sys.Res.boolTrueOrFalse);
}
 
Date.__typeName = &#039;Date&#039;;
Date.__class = true;
 
Number.__typeName = &#039;Number&#039;;
Number.__class = true;
 
RegExp.__typeName = &#039;RegExp&#039;;
RegExp.__class = true;
 
if (!window) this.window = this;
window.Type = Function;
Type.__fullyQualifiedIdentifierRegExp = new RegExp(&quot;^[^.0-9 \\s|,;:&amp;*=+\\-()\\[\\]{}^%#@!~\\n\\r\\t\\f\\\\]([^ \\s|,;:&amp;*=+\\-()\\[\\]{}^%#@!~\\n\\r\\t\\f\\\\]*[^. \\s|,;:&amp;*=+\\-()\\[\\]{}^%#@!~\\n\\r\\t\\f\\\\])?$&quot;, &quot;i&quot;);
Type.__identifierRegExp = new RegExp(&quot;^[^.0-9 \\s|,;:&amp;*=+\\-()\\[\\]{}^%#@!~\\n\\r\\t\\f\\\\][^. \\s|,;:&amp;*=+\\-()\\[\\]{}^%#@!~\\n\\r\\t\\f\\\\]*$&quot;, &quot;i&quot;);
Type.prototype.callBaseMethod = function Type$callBaseMethod(instance, name, baseArguments) {
    /// &lt;summary locid=&quot;M:J#Type.callBaseMethod&quot; /&gt;
    /// &lt;param name=&quot;instance&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;name&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;baseArguments&quot; type=&quot;Array&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot; elementMayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;instance&quot;},
        {name: &quot;name&quot;, type: String},
        {name: &quot;baseArguments&quot;, type: Array, mayBeNull: true, optional: true, elementMayBeNull: true}
    ]);
    if (e) throw e;
    var baseMethod = Sys._getBaseMethod(this, instance, name);
    if (!baseMethod) throw Error.invalidOperation(String.format(Sys.Res.methodNotFound, name));
    if (!baseArguments) {
        return baseMethod.apply(instance);
    }
    else {
        return baseMethod.apply(instance, baseArguments);
    }
}
Type.prototype.getBaseMethod = function Type$getBaseMethod(instance, name) {
    /// &lt;summary locid=&quot;M:J#Type.getBaseMethod&quot; /&gt;
    /// &lt;param name=&quot;instance&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;name&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Function&quot; mayBeNull=&quot;true&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;instance&quot;},
        {name: &quot;name&quot;, type: String}
    ]);
    if (e) throw e;
    return Sys._getBaseMethod(this, instance, name);
}
Type.prototype.getBaseType = function Type$getBaseType() {
    /// &lt;summary locid=&quot;M:J#Type.getBaseType&quot; /&gt;
    /// &lt;returns type=&quot;Type&quot; mayBeNull=&quot;true&quot;&gt;&lt;/returns&gt;
    if (arguments.length !== 0) throw Error.parameterCount();
    return (typeof(this.__baseType) === &quot;undefined&quot;) ? null : this.__baseType;
}
Type.prototype.getInterfaces = function Type$getInterfaces() {
    /// &lt;summary locid=&quot;M:J#Type.getInterfaces&quot; /&gt;
    /// &lt;returns type=&quot;Array&quot; elementType=&quot;Type&quot; mayBeNull=&quot;false&quot; elementMayBeNull=&quot;false&quot;&gt;&lt;/returns&gt;
    if (arguments.length !== 0) throw Error.parameterCount();
    var result = [];
    var type = this;
    while(type) {
        var interfaces = type.__interfaces;
        if (interfaces) {
            for (var i = 0, l = interfaces.length; i &lt; l; i++) {
                var interfaceType = interfaces[i];
                if (!Array.contains(result, interfaceType)) {
                    result[result.length] = interfaceType;
                }
            }
        }
        type = type.__baseType;
    }
    return result;
}
Type.prototype.getName = function Type$getName() {
    /// &lt;summary locid=&quot;M:J#Type.getName&quot; /&gt;
    /// &lt;returns type=&quot;String&quot;&gt;&lt;/returns&gt;
    if (arguments.length !== 0) throw Error.parameterCount();
    return (typeof(this.__typeName) === &quot;undefined&quot;) ? &quot;&quot; : this.__typeName;
}
Type.prototype.implementsInterface = function Type$implementsInterface(interfaceType) {
    /// &lt;summary locid=&quot;M:J#Type.implementsInterface&quot; /&gt;
    /// &lt;param name=&quot;interfaceType&quot; type=&quot;Type&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Boolean&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;interfaceType&quot;, type: Type}
    ]);
    if (e) throw e;
    this.resolveInheritance();
    var interfaceName = interfaceType.getName();
    var cache = this.__interfaceCache;
    if (cache) {
        var cacheEntry = cache[interfaceName];
        if (typeof(cacheEntry) !== &#039;undefined&#039;) return cacheEntry;
    }
    else {
        cache = this.__interfaceCache = {};
    }
    var baseType = this;
    while (baseType) {
        var interfaces = baseType.__interfaces;
        if (interfaces) {
            if (Array.indexOf(interfaces, interfaceType) !== -1) {
                return cache[interfaceName] = true;
            }
        }
        baseType = baseType.__baseType;
    }
    return cache[interfaceName] = false;
}
Type.prototype.inheritsFrom = function Type$inheritsFrom(parentType) {
    /// &lt;summary locid=&quot;M:J#Type.inheritsFrom&quot; /&gt;
    /// &lt;param name=&quot;parentType&quot; type=&quot;Type&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Boolean&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;parentType&quot;, type: Type}
    ]);
    if (e) throw e;
    this.resolveInheritance();
    var baseType = this.__baseType;
    while (baseType) {
        if (baseType === parentType) {
            return true;
        }
        baseType = baseType.__baseType;
    }
    return false;
}
Type.prototype.initializeBase = function Type$initializeBase(instance, baseArguments) {
    /// &lt;summary locid=&quot;M:J#Type.initializeBase&quot; /&gt;
    /// &lt;param name=&quot;instance&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;baseArguments&quot; type=&quot;Array&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot; elementMayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;instance&quot;},
        {name: &quot;baseArguments&quot;, type: Array, mayBeNull: true, optional: true, elementMayBeNull: true}
    ]);
    if (e) throw e;
    if (!Sys._isInstanceOfType(this, instance)) throw Error.argumentType(&#039;instance&#039;, Object.getType(instance), this);
    this.resolveInheritance();
    if (this.__baseType) {
        if (!baseArguments) {
            this.__baseType.apply(instance);
        }
        else {
            this.__baseType.apply(instance, baseArguments);
        }
    }
    return instance;
}
Type.prototype.isImplementedBy = function Type$isImplementedBy(instance) {
    /// &lt;summary locid=&quot;M:J#Type.isImplementedBy&quot; /&gt;
    /// &lt;param name=&quot;instance&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Boolean&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;instance&quot;, mayBeNull: true}
    ]);
    if (e) throw e;
    if (typeof(instance) === &quot;undefined&quot; || instance === null) return false;
    var instanceType = Object.getType(instance);
    return !!(instanceType.implementsInterface &amp;&amp; instanceType.implementsInterface(this));
}
Type.prototype.isInstanceOfType = function Type$isInstanceOfType(instance) {
    /// &lt;summary locid=&quot;M:J#Type.isInstanceOfType&quot; /&gt;
    /// &lt;param name=&quot;instance&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Boolean&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;instance&quot;, mayBeNull: true}
    ]);
    if (e) throw e;
    return Sys._isInstanceOfType(this, instance);
}
Type.prototype.registerClass = function Type$registerClass(typeName, baseType, interfaceTypes) {
    /// &lt;summary locid=&quot;M:J#Type.registerClass&quot; /&gt;
    /// &lt;param name=&quot;typeName&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;baseType&quot; type=&quot;Type&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;interfaceTypes&quot; parameterArray=&quot;true&quot; type=&quot;Type&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Type&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;typeName&quot;, type: String},
        {name: &quot;baseType&quot;, type: Type, mayBeNull: true, optional: true},
        {name: &quot;interfaceTypes&quot;, type: Type, parameterArray: true}
    ]);
    if (e) throw e;
    if (!Type.__fullyQualifiedIdentifierRegExp.test(typeName)) throw Error.argument(&#039;typeName&#039;, Sys.Res.notATypeName);
    var parsedName;
    try {
        parsedName = eval(typeName);
    }
    catch(e) {
        throw Error.argument(&#039;typeName&#039;, Sys.Res.argumentTypeName);
    }
    if (parsedName !== this) throw Error.argument(&#039;typeName&#039;, Sys.Res.badTypeName);
    if (Sys.__registeredTypes[typeName]) throw Error.invalidOperation(String.format(Sys.Res.typeRegisteredTwice, typeName));
    if ((arguments.length &gt; 1) &amp;&amp; (typeof(baseType) === &#039;undefined&#039;)) throw Error.argumentUndefined(&#039;baseType&#039;);
    if (baseType &amp;&amp; !baseType.__class) throw Error.argument(&#039;baseType&#039;, Sys.Res.baseNotAClass);
    this.prototype.constructor = this;
    this.__typeName = typeName;
    this.__class = true;
    if (baseType) {
        this.__baseType = baseType;
        this.__basePrototypePending = true;
    }
    Sys.__upperCaseTypes[typeName.toUpperCase()] = this;
    if (interfaceTypes) {
        this.__interfaces = [];
        this.resolveInheritance();
        for (var i = 2, l = arguments.length; i &lt; l; i++) {
            var interfaceType = arguments[i];
            if (!interfaceType.__interface) throw Error.argument(&#039;interfaceTypes[&#039; + (i - 2) + &#039;]&#039;, Sys.Res.notAnInterface);
            for (var methodName in interfaceType.prototype) {
                var method = interfaceType.prototype[methodName];
                if (!this.prototype[methodName]) {
                    this.prototype[methodName] = method;
                }
            }
            this.__interfaces.push(interfaceType);
        }
    }
    Sys.__registeredTypes[typeName] = true;
    return this;
}
Type.prototype.registerInterface = function Type$registerInterface(typeName) {
    /// &lt;summary locid=&quot;M:J#Type.registerInterface&quot; /&gt;
    /// &lt;param name=&quot;typeName&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Type&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;typeName&quot;, type: String}
    ]);
    if (e) throw e;
    if (!Type.__fullyQualifiedIdentifierRegExp.test(typeName)) throw Error.argument(&#039;typeName&#039;, Sys.Res.notATypeName);
    var parsedName;
    try {
        parsedName = eval(typeName);
    }
    catch(e) {
        throw Error.argument(&#039;typeName&#039;, Sys.Res.argumentTypeName);
    }
    if (parsedName !== this) throw Error.argument(&#039;typeName&#039;, Sys.Res.badTypeName);
    if (Sys.__registeredTypes[typeName]) throw Error.invalidOperation(String.format(Sys.Res.typeRegisteredTwice, typeName));
    Sys.__upperCaseTypes[typeName.toUpperCase()] = this;
    this.prototype.constructor = this;
    this.__typeName = typeName;
    this.__interface = true;
    Sys.__registeredTypes[typeName] = true;
    return this;
}
Type.prototype.resolveInheritance = function Type$resolveInheritance() {
    /// &lt;summary locid=&quot;M:J#Type.resolveInheritance&quot; /&gt;
    if (arguments.length !== 0) throw Error.parameterCount();
    if (this.__basePrototypePending) {
        var baseType = this.__baseType;
        baseType.resolveInheritance();
        for (var memberName in baseType.prototype) {
            var memberValue = baseType.prototype[memberName];
            if (!this.prototype[memberName]) {
                this.prototype[memberName] = memberValue;
            }
        }
        delete this.__basePrototypePending;
    }
}
Type.getRootNamespaces = function Type$getRootNamespaces() {
    /// &lt;summary locid=&quot;M:J#Type.getRootNamespaces&quot; /&gt;
    /// &lt;returns type=&quot;Array&quot;&gt;&lt;/returns&gt;
    if (arguments.length !== 0) throw Error.parameterCount();
    return Array.clone(Sys.__rootNamespaces);
}
Type.isClass = function Type$isClass(type) {
    /// &lt;summary locid=&quot;M:J#Type.isClass&quot; /&gt;
    /// &lt;param name=&quot;type&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Boolean&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;type&quot;, mayBeNull: true}
    ]);
    if (e) throw e;
    if ((typeof(type) === &#039;undefined&#039;) || (type === null)) return false;
    return !!type.__class;
}
Type.isInterface = function Type$isInterface(type) {
    /// &lt;summary locid=&quot;M:J#Type.isInterface&quot; /&gt;
    /// &lt;param name=&quot;type&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Boolean&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;type&quot;, mayBeNull: true}
    ]);
    if (e) throw e;
    if ((typeof(type) === &#039;undefined&#039;) || (type === null)) return false;
    return !!type.__interface;
}
Type.isNamespace = function Type$isNamespace(object) {
    /// &lt;summary locid=&quot;M:J#Type.isNamespace&quot; /&gt;
    /// &lt;param name=&quot;object&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Boolean&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;object&quot;, mayBeNull: true}
    ]);
    if (e) throw e;
    if ((typeof(object) === &#039;undefined&#039;) || (object === null)) return false;
    return !!object.__namespace;
}
Type.parse = function Type$parse(typeName, ns) {
    /// &lt;summary locid=&quot;M:J#Type.parse&quot; /&gt;
    /// &lt;param name=&quot;typeName&quot; type=&quot;String&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;ns&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Type&quot; mayBeNull=&quot;true&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;typeName&quot;, type: String, mayBeNull: true},
        {name: &quot;ns&quot;, mayBeNull: true, optional: true}
    ]);
    if (e) throw e;
    var fn;
    if (ns) {
        fn = Sys.__upperCaseTypes[ns.getName().toUpperCase() + &#039;.&#039; + typeName.toUpperCase()];
        return fn || null;
    }
    if (!typeName) return null;
    if (!Type.__htClasses) {
        Type.__htClasses = {};
    }
    fn = Type.__htClasses[typeName];
    if (!fn) {
        fn = eval(typeName);
        if (typeof(fn) !== &#039;function&#039;) throw Error.argument(&#039;typeName&#039;, Sys.Res.notATypeName);
        Type.__htClasses[typeName] = fn;
    }
    return fn;
}
Type.registerNamespace = function Type$registerNamespace(namespacePath) {
    /// &lt;summary locid=&quot;M:J#Type.registerNamespace&quot; /&gt;
    /// &lt;param name=&quot;namespacePath&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;namespacePath&quot;, type: String}
    ]);
    if (e) throw e;
    Type._registerNamespace(namespacePath);
}
Type._registerNamespace = function Type$_registerNamespace(namespacePath) {
    if (!Type.__fullyQualifiedIdentifierRegExp.test(namespacePath)) throw Error.argument(&#039;namespacePath&#039;, Sys.Res.invalidNameSpace);
    var rootObject = window;
    var namespaceParts = namespacePath.split(&#039;.&#039;);
    for (var i = 0; i &lt; namespaceParts.length; i++) {
        var currentPart = namespaceParts[i];
        var ns = rootObject[currentPart];
        var nsType = typeof(ns);
        if ((nsType !== &quot;undefined&quot;) &amp;&amp; (ns !== null)) {
            if (nsType === &quot;function&quot;) {
                throw Error.invalidOperation(String.format(Sys.Res.namespaceContainsClass, namespaceParts.splice(0, i + 1).join(&#039;.&#039;)));
            }
            if ((typeof(ns) !== &quot;object&quot;) || (ns instanceof Array)) {
                throw Error.invalidOperation(String.format(Sys.Res.namespaceContainsNonObject, namespaceParts.splice(0, i + 1).join(&#039;.&#039;)));
            }
        }
        if (!ns) {
            ns = rootObject[currentPart] = {};
        }
        if (!ns.__namespace) {
            if ((i === 0) &amp;&amp; (namespacePath !== &quot;Sys&quot;)) {
                Sys.__rootNamespaces[Sys.__rootNamespaces.length] = ns;
            }
            ns.__namespace = true;
            ns.__typeName = namespaceParts.slice(0, i + 1).join(&#039;.&#039;);
            var parsedName;
            try {
                parsedName = eval(ns.__typeName);
            }
            catch(e) {
                parsedName = null;
            }
            if (parsedName !== ns) {
                delete rootObject[currentPart];
                throw Error.argument(&#039;namespacePath&#039;, Sys.Res.invalidNameSpace);
            }
            ns.getName = function ns$getName() {return this.__typeName;}
        }
        rootObject = ns;
    }
}
Type._checkDependency = function Type$_checkDependency(dependency, featureName) {
    var scripts = Type._registerScript._scripts, isDependent = (scripts ? (!!scripts[dependency]) : false);
    if ((typeof(featureName) !== &#039;undefined&#039;) &amp;&amp; !isDependent) {
        throw Error.invalidOperation(String.format(Sys.Res.requiredScriptReferenceNotIncluded, 
        featureName, dependency));
    }
    return isDependent;
}
Type._registerScript = function Type$_registerScript(scriptName, dependencies) {
    var scripts = Type._registerScript._scripts;
    if (!scripts) {
        Type._registerScript._scripts = scripts = {};
    }
    if (scripts[scriptName]) {
        throw Error.invalidOperation(String.format(Sys.Res.scriptAlreadyLoaded, scriptName));
    }
    scripts[scriptName] = true;
    if (dependencies) {
        for (var i = 0, l = dependencies.length; i &lt; l; i++) {
            var dependency = dependencies[i];
            if (!Type._checkDependency(dependency)) {
                throw Error.invalidOperation(String.format(Sys.Res.scriptDependencyNotFound, scriptName, dependency));
            }
        }
    }
}
Type._registerNamespace(&quot;Sys&quot;);
Sys.__upperCaseTypes = {};
Sys.__rootNamespaces = [Sys];
Sys.__registeredTypes = {};
Sys._isInstanceOfType = function Sys$_isInstanceOfType(type, instance) {
    if (typeof(instance) === &quot;undefined&quot; || instance === null) return false;
    if (instance instanceof type) return true;
    var instanceType = Object.getType(instance);
    return !!(instanceType === type) ||
           (instanceType.inheritsFrom &amp;&amp; instanceType.inheritsFrom(type)) ||
           (instanceType.implementsInterface &amp;&amp; instanceType.implementsInterface(type));
}
Sys._getBaseMethod = function Sys$_getBaseMethod(type, instance, name) {
    if (!Sys._isInstanceOfType(type, instance)) throw Error.argumentType(&#039;instance&#039;, Object.getType(instance), type);
    var baseType = type.getBaseType();
    if (baseType) {
        var baseMethod = baseType.prototype[name];
        return (baseMethod instanceof Function) ? baseMethod : null;
    }
    return null;
}
Sys._isDomElement = function Sys$_isDomElement(obj) {
    var val = false;
    if (typeof (obj.nodeType) !== &#039;number&#039;) {
        var doc = obj.ownerDocument || obj.document || obj;
        if (doc != obj) {
            var w = doc.defaultView || doc.parentWindow;
            val = (w != obj);
        }
        else {
            val = (typeof (doc.body) === &#039;undefined&#039;);
        }
    }
    return !val;
}
 
Array.__typeName = &#039;Array&#039;;
Array.__class = true;
Array.add = Array.enqueue = function Array$enqueue(array, item) {
    /// &lt;summary locid=&quot;M:J#Array.enqueue&quot; /&gt;
    /// &lt;param name=&quot;array&quot; type=&quot;Array&quot; elementMayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;item&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;array&quot;, type: Array, elementMayBeNull: true},
        {name: &quot;item&quot;, mayBeNull: true}
    ]);
    if (e) throw e;
    array[array.length] = item;
}
Array.addRange = function Array$addRange(array, items) {
    /// &lt;summary locid=&quot;M:J#Array.addRange&quot; /&gt;
    /// &lt;param name=&quot;array&quot; type=&quot;Array&quot; elementMayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;items&quot; type=&quot;Array&quot; elementMayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;array&quot;, type: Array, elementMayBeNull: true},
        {name: &quot;items&quot;, type: Array, elementMayBeNull: true}
    ]);
    if (e) throw e;
    array.push.apply(array, items);
}
Array.clear = function Array$clear(array) {
    /// &lt;summary locid=&quot;M:J#Array.clear&quot; /&gt;
    /// &lt;param name=&quot;array&quot; type=&quot;Array&quot; elementMayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;array&quot;, type: Array, elementMayBeNull: true}
    ]);
    if (e) throw e;
    array.length = 0;
}
Array.clone = function Array$clone(array) {
    /// &lt;summary locid=&quot;M:J#Array.clone&quot; /&gt;
    /// &lt;param name=&quot;array&quot; type=&quot;Array&quot; elementMayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Array&quot; elementMayBeNull=&quot;true&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;array&quot;, type: Array, elementMayBeNull: true}
    ]);
    if (e) throw e;
    if (array.length === 1) {
        return [array[0]];
    }
    else {
        return Array.apply(null, array);
    }
}
Array.contains = function Array$contains(array, item) {
    /// &lt;summary locid=&quot;M:J#Array.contains&quot; /&gt;
    /// &lt;param name=&quot;array&quot; type=&quot;Array&quot; elementMayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;item&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Boolean&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;array&quot;, type: Array, elementMayBeNull: true},
        {name: &quot;item&quot;, mayBeNull: true}
    ]);
    if (e) throw e;
    return (Sys._indexOf(array, item) &gt;= 0);
}
Array.dequeue = function Array$dequeue(array) {
    /// &lt;summary locid=&quot;M:J#Array.dequeue&quot; /&gt;
    /// &lt;param name=&quot;array&quot; type=&quot;Array&quot; elementMayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns mayBeNull=&quot;true&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;array&quot;, type: Array, elementMayBeNull: true}
    ]);
    if (e) throw e;
    return array.shift();
}
Array.forEach = function Array$forEach(array, method, instance) {
    /// &lt;summary locid=&quot;M:J#Array.forEach&quot; /&gt;
    /// &lt;param name=&quot;array&quot; type=&quot;Array&quot; elementMayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;method&quot; type=&quot;Function&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;instance&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;array&quot;, type: Array, elementMayBeNull: true},
        {name: &quot;method&quot;, type: Function},
        {name: &quot;instance&quot;, mayBeNull: true, optional: true}
    ]);
    if (e) throw e;
    for (var i = 0, l = array.length; i &lt; l; i++) {
        var elt = array[i];
        if (typeof(elt) !== &#039;undefined&#039;) method.call(instance, elt, i, array);
    }
}
Array.indexOf = function Array$indexOf(array, item, start) {
    /// &lt;summary locid=&quot;M:J#Array.indexOf&quot; /&gt;
    /// &lt;param name=&quot;array&quot; type=&quot;Array&quot; elementMayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;item&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;start&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Number&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;array&quot;, type: Array, elementMayBeNull: true},
        {name: &quot;item&quot;, mayBeNull: true, optional: true},
        {name: &quot;start&quot;, mayBeNull: true, optional: true}
    ]);
    if (e) throw e;
    return Sys._indexOf(array, item, start);
}
Array.insert = function Array$insert(array, index, item) {
    /// &lt;summary locid=&quot;M:J#Array.insert&quot; /&gt;
    /// &lt;param name=&quot;array&quot; type=&quot;Array&quot; elementMayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;index&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;item&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;array&quot;, type: Array, elementMayBeNull: true},
        {name: &quot;index&quot;, mayBeNull: true},
        {name: &quot;item&quot;, mayBeNull: true}
    ]);
    if (e) throw e;
    array.splice(index, 0, item);
}
Array.parse = function Array$parse(value) {
    /// &lt;summary locid=&quot;M:J#Array.parse&quot; /&gt;
    /// &lt;param name=&quot;value&quot; type=&quot;String&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Array&quot; elementMayBeNull=&quot;true&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;value&quot;, type: String, mayBeNull: true}
    ]);
    if (e) throw e;
    if (!value) return [];
    var v = eval(value);
    if (!Array.isInstanceOfType(v)) throw Error.argument(&#039;value&#039;, Sys.Res.arrayParseBadFormat);
    return v;
}
Array.remove = function Array$remove(array, item) {
    /// &lt;summary locid=&quot;M:J#Array.remove&quot; /&gt;
    /// &lt;param name=&quot;array&quot; type=&quot;Array&quot; elementMayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;item&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Boolean&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;array&quot;, type: Array, elementMayBeNull: true},
        {name: &quot;item&quot;, mayBeNull: true}
    ]);
    if (e) throw e;
    var index = Sys._indexOf(array, item);
    if (index &gt;= 0) {
        array.splice(index, 1);
    }
    return (index &gt;= 0);
}
Array.removeAt = function Array$removeAt(array, index) {
    /// &lt;summary locid=&quot;M:J#Array.removeAt&quot; /&gt;
    /// &lt;param name=&quot;array&quot; type=&quot;Array&quot; elementMayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;index&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;array&quot;, type: Array, elementMayBeNull: true},
        {name: &quot;index&quot;, mayBeNull: true}
    ]);
    if (e) throw e;
    array.splice(index, 1);
}
Sys._indexOf = function Sys$_indexOf(array, item, start) {
    if (typeof(item) === &quot;undefined&quot;) return -1;
    var length = array.length;
    if (length !== 0) {
        start = start - 0;
        if (isNaN(start)) {
            start = 0;
        }
        else {
            if (isFinite(start)) {
                start = start - (start % 1);
            }
            if (start &lt; 0) {
                start = Math.max(0, length + start);
            }
        }
        for (var i = start; i &lt; length; i++) {
            if ((typeof(array[i]) !== &quot;undefined&quot;) &amp;&amp; (array[i] === item)) {
                return i;
            }
        }
    }
    return -1;
}
Type._registerScript._scripts = {
	&quot;MicrosoftAjaxCore.js&quot;: true,
	&quot;MicrosoftAjaxGlobalization.js&quot;: true,
	&quot;MicrosoftAjaxSerialization.js&quot;: true,
	&quot;MicrosoftAjaxComponentModel.js&quot;: true,
	&quot;MicrosoftAjaxHistory.js&quot;: true,
	&quot;MicrosoftAjaxNetwork.js&quot; : true,
	&quot;MicrosoftAjaxWebServices.js&quot;: true };
 
Sys.IDisposable = function Sys$IDisposable() {
    throw Error.notImplemented();
}
    function Sys$IDisposable$dispose() {
        throw Error.notImplemented();
    }
Sys.IDisposable.prototype = {
    dispose: Sys$IDisposable$dispose
}
Sys.IDisposable.registerInterface(&#039;Sys.IDisposable&#039;);
 
Sys.StringBuilder = function Sys$StringBuilder(initialText) {
    /// &lt;summary locid=&quot;M:J#Sys.StringBuilder.#ctor&quot; /&gt;
    /// &lt;param name=&quot;initialText&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;initialText&quot;, mayBeNull: true, optional: true}
    ]);
    if (e) throw e;
    this._parts = (typeof(initialText) !== &#039;undefined&#039; &amp;&amp; initialText !== null &amp;&amp; initialText !== &#039;&#039;) ?
        [initialText.toString()] : [];
    this._value = {};
    this._len = 0;
}
    function Sys$StringBuilder$append(text) {
        /// &lt;summary locid=&quot;M:J#Sys.StringBuilder.append&quot; /&gt;
        /// &lt;param name=&quot;text&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;text&quot;, mayBeNull: true}
        ]);
        if (e) throw e;
        this._parts[this._parts.length] = text;
    }
    function Sys$StringBuilder$appendLine(text) {
        /// &lt;summary locid=&quot;M:J#Sys.StringBuilder.appendLine&quot; /&gt;
        /// &lt;param name=&quot;text&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;text&quot;, mayBeNull: true, optional: true}
        ]);
        if (e) throw e;
        this._parts[this._parts.length] =
            ((typeof(text) === &#039;undefined&#039;) || (text === null) || (text === &#039;&#039;)) ?
            &#039;\r\n&#039; : text + &#039;\r\n&#039;;
    }
    function Sys$StringBuilder$clear() {
        /// &lt;summary locid=&quot;M:J#Sys.StringBuilder.clear&quot; /&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        this._parts = [];
        this._value = {};
        this._len = 0;
    }
    function Sys$StringBuilder$isEmpty() {
        /// &lt;summary locid=&quot;M:J#Sys.StringBuilder.isEmpty&quot; /&gt;
        /// &lt;returns type=&quot;Boolean&quot;&gt;&lt;/returns&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        if (this._parts.length === 0) return true;
        return this.toString() === &#039;&#039;;
    }
    function Sys$StringBuilder$toString(separator) {
        /// &lt;summary locid=&quot;M:J#Sys.StringBuilder.toString&quot; /&gt;
        /// &lt;param name=&quot;separator&quot; type=&quot;String&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
        /// &lt;returns type=&quot;String&quot;&gt;&lt;/returns&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;separator&quot;, type: String, mayBeNull: true, optional: true}
        ]);
        if (e) throw e;
        separator = separator || &#039;&#039;;
        var parts = this._parts;
        if (this._len !== parts.length) {
            this._value = {};
            this._len = parts.length;
        }
        var val = this._value;
        if (typeof(val[separator]) === &#039;undefined&#039;) {
            if (separator !== &#039;&#039;) {
                for (var i = 0; i &lt; parts.length;) {
                    if ((typeof(parts[i]) === &#039;undefined&#039;) || (parts[i] === &#039;&#039;) || (parts[i] === null)) {
                        parts.splice(i, 1);
                    }
                    else {
                        i++;
                    }
                }
            }
            val[separator] = this._parts.join(separator);
        }
        return val[separator];
    }
Sys.StringBuilder.prototype = {
    append: Sys$StringBuilder$append,
    appendLine: Sys$StringBuilder$appendLine,
    clear: Sys$StringBuilder$clear,
    isEmpty: Sys$StringBuilder$isEmpty,
    toString: Sys$StringBuilder$toString
}
Sys.StringBuilder.registerClass(&#039;Sys.StringBuilder&#039;);
 
Sys.Browser = {};
Sys.Browser.InternetExplorer = {};
Sys.Browser.Firefox = {};
Sys.Browser.Safari = {};
Sys.Browser.Opera = {};
Sys.Browser.agent = null;
Sys.Browser.hasDebuggerStatement = false;
Sys.Browser.name = navigator.appName;
Sys.Browser.version = parseFloat(navigator.appVersion);
Sys.Browser.documentMode = 0;
if (navigator.userAgent.indexOf(&#039; MSIE &#039;) &gt; -1) {
    Sys.Browser.agent = Sys.Browser.InternetExplorer;
    Sys.Browser.version = parseFloat(navigator.userAgent.match(/MSIE (\d+\.\d+)/)[1]);
    if (Sys.Browser.version &gt;= 8) {
        if (document.documentMode &gt;= 7) {
            Sys.Browser.documentMode = document.documentMode;    
        }
    }
    Sys.Browser.hasDebuggerStatement = true;
}
else if (navigator.userAgent.indexOf(&#039; Firefox/&#039;) &gt; -1) {
    Sys.Browser.agent = Sys.Browser.Firefox;
    Sys.Browser.version = parseFloat(navigator.userAgent.match(/ Firefox\/(\d+\.\d+)/)[1]);
    Sys.Browser.name = &#039;Firefox&#039;;
    Sys.Browser.hasDebuggerStatement = true;
}
else if (navigator.userAgent.indexOf(&#039; AppleWebKit/&#039;) &gt; -1) {
    Sys.Browser.agent = Sys.Browser.Safari;
    Sys.Browser.version = parseFloat(navigator.userAgent.match(/ AppleWebKit\/(\d+(\.\d+)?)/)[1]);
    Sys.Browser.name = &#039;Safari&#039;;
}
else if (navigator.userAgent.indexOf(&#039;Opera/&#039;) &gt; -1) {
    Sys.Browser.agent = Sys.Browser.Opera;
}
 
Sys.EventArgs = function Sys$EventArgs() {
    /// &lt;summary locid=&quot;M:J#Sys.EventArgs.#ctor&quot; /&gt;
    if (arguments.length !== 0) throw Error.parameterCount();
}
Sys.EventArgs.registerClass(&#039;Sys.EventArgs&#039;);
Sys.EventArgs.Empty = new Sys.EventArgs();
 
Sys.CancelEventArgs = function Sys$CancelEventArgs() {
    /// &lt;summary locid=&quot;M:J#Sys.CancelEventArgs.#ctor&quot; /&gt;
    if (arguments.length !== 0) throw Error.parameterCount();
    Sys.CancelEventArgs.initializeBase(this);
    this._cancel = false;
}
    function Sys$CancelEventArgs$get_cancel() {
        /// &lt;value type=&quot;Boolean&quot; locid=&quot;P:J#Sys.CancelEventArgs.cancel&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._cancel;
    }
    function Sys$CancelEventArgs$set_cancel(value) {
        var e = Function._validateParams(arguments, [{name: &quot;value&quot;, type: Boolean}]);
        if (e) throw e;
        this._cancel = value;
    }
Sys.CancelEventArgs.prototype = {
    get_cancel: Sys$CancelEventArgs$get_cancel,
    set_cancel: Sys$CancelEventArgs$set_cancel
}
Sys.CancelEventArgs.registerClass(&#039;Sys.CancelEventArgs&#039;, Sys.EventArgs);
Type.registerNamespace(&#039;Sys.UI&#039;);
 
Sys._Debug = function Sys$_Debug() {
    /// &lt;summary locid=&quot;M:J#Sys.Debug.#ctor&quot; /&gt;
    /// &lt;field name=&quot;isDebug&quot; type=&quot;Boolean&quot; locid=&quot;F:J#Sys.Debug.isDebug&quot;&gt;&lt;/field&gt;
    if (arguments.length !== 0) throw Error.parameterCount();
}
    function Sys$_Debug$_appendConsole(text) {
        if ((typeof(Debug) !== &#039;undefined&#039;) &amp;&amp; Debug.writeln) {
            Debug.writeln(text);
        }
        if (window.console &amp;&amp; window.console.log) {
            window.console.log(text);
        }
        if (window.opera) {
            window.opera.postError(text);
        }
        if (window.debugService) {
            window.debugService.trace(text);
        }
    }
    function Sys$_Debug$_appendTrace(text) {
        var traceElement = document.getElementById(&#039;TraceConsole&#039;);
        if (traceElement &amp;&amp; (traceElement.tagName.toUpperCase() === &#039;TEXTAREA&#039;)) {
            traceElement.value += text + &#039;\n&#039;;
        }
    }
    function Sys$_Debug$assert(condition, message, displayCaller) {
        /// &lt;summary locid=&quot;M:J#Sys.Debug.assert&quot; /&gt;
        /// &lt;param name=&quot;condition&quot; type=&quot;Boolean&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;message&quot; type=&quot;String&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;displayCaller&quot; type=&quot;Boolean&quot; optional=&quot;true&quot;&gt;&lt;/param&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;condition&quot;, type: Boolean},
            {name: &quot;message&quot;, type: String, mayBeNull: true, optional: true},
            {name: &quot;displayCaller&quot;, type: Boolean, optional: true}
        ]);
        if (e) throw e;
        if (!condition) {
            message = (displayCaller &amp;&amp; this.assert.caller) ?
                String.format(Sys.Res.assertFailedCaller, message, this.assert.caller) :
                String.format(Sys.Res.assertFailed, message);
            if (confirm(String.format(Sys.Res.breakIntoDebugger, message))) {
                this.fail(message);
            }
        }
    }
    function Sys$_Debug$clearTrace() {
        /// &lt;summary locid=&quot;M:J#Sys.Debug.clearTrace&quot; /&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        var traceElement = document.getElementById(&#039;TraceConsole&#039;);
        if (traceElement &amp;&amp; (traceElement.tagName.toUpperCase() === &#039;TEXTAREA&#039;)) {
            traceElement.value = &#039;&#039;;
        }
    }
    function Sys$_Debug$fail(message) {
        /// &lt;summary locid=&quot;M:J#Sys.Debug.fail&quot; /&gt;
        /// &lt;param name=&quot;message&quot; type=&quot;String&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;message&quot;, type: String, mayBeNull: true}
        ]);
        if (e) throw e;
        this._appendConsole(message);
        if (Sys.Browser.hasDebuggerStatement) {
            eval(&#039;debugger&#039;);
        }
    }
    function Sys$_Debug$trace(text) {
        /// &lt;summary locid=&quot;M:J#Sys.Debug.trace&quot; /&gt;
        /// &lt;param name=&quot;text&quot;&gt;&lt;/param&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;text&quot;}
        ]);
        if (e) throw e;
        this._appendConsole(text);
        this._appendTrace(text);
    }
    function Sys$_Debug$traceDump(object, name) {
        /// &lt;summary locid=&quot;M:J#Sys.Debug.traceDump&quot; /&gt;
        /// &lt;param name=&quot;object&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;name&quot; type=&quot;String&quot; mayBeNull=&quot;true&quot; optional=&quot;true&quot;&gt;&lt;/param&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;object&quot;, mayBeNull: true},
            {name: &quot;name&quot;, type: String, mayBeNull: true, optional: true}
        ]);
        if (e) throw e;
        var text = this._traceDump(object, name, true);
    }
    function Sys$_Debug$_traceDump(object, name, recursive, indentationPadding, loopArray) {
        name = name? name : &#039;traceDump&#039;;
        indentationPadding = indentationPadding? indentationPadding : &#039;&#039;;
        if (object === null) {
            this.trace(indentationPadding + name + &#039;: null&#039;);
            return;
        }
        switch(typeof(object)) {
            case &#039;undefined&#039;:
                this.trace(indentationPadding + name + &#039;: Undefined&#039;);
                break;
            case &#039;number&#039;: case &#039;string&#039;: case &#039;boolean&#039;:
                this.trace(indentationPadding + name + &#039;: &#039; + object);
                break;
            default:
                if (Date.isInstanceOfType(object) || RegExp.isInstanceOfType(object)) {
                    this.trace(indentationPadding + name + &#039;: &#039; + object.toString());
                    break;
                }
                if (!loopArray) {
                    loopArray = [];
                }
                else if (Array.contains(loopArray, object)) {
                    this.trace(indentationPadding + name + &#039;: ...&#039;);
                    return;
                }
                Array.add(loopArray, object);
                if ((object == window) || (object === document) ||
                    (window.HTMLElement &amp;&amp; (object instanceof HTMLElement)) ||
                    (typeof(object.nodeName) === &#039;string&#039;)) {
                    var tag = object.tagName? object.tagName : &#039;DomElement&#039;;
                    if (object.id) {
                        tag += &#039; - &#039; + object.id;
                    }
                    this.trace(indentationPadding + name + &#039; {&#039; +  tag + &#039;}&#039;);
                }
                else {
                    var typeName = Object.getTypeName(object);
                    this.trace(indentationPadding + name + (typeof(typeName) === &#039;string&#039; ? &#039; {&#039; + typeName + &#039;}&#039; : &#039;&#039;));
                    if ((indentationPadding === &#039;&#039;) || recursive) {
                        indentationPadding += &quot;    &quot;;
                        var i, length, properties, p, v;
                        if (Array.isInstanceOfType(object)) {
                            length = object.length;
                            for (i = 0; i &lt; length; i++) {
                                this._traceDump(object[i], &#039;[&#039; + i + &#039;]&#039;, recursive, indentationPadding, loopArray);
                            }
                        }
                        else {
                            for (p in object) {
                                v = object[p];
                                if (!Function.isInstanceOfType(v)) {
                                    this._traceDump(v, p, recursive, indentationPadding, loopArray);
                                }
                            }
                        }
                    }
                }
                Array.remove(loopArray, object);
        }
    }
Sys._Debug.prototype = {
    _appendConsole: Sys$_Debug$_appendConsole,
    _appendTrace: Sys$_Debug$_appendTrace,
    assert: Sys$_Debug$assert,
    clearTrace: Sys$_Debug$clearTrace,
    fail: Sys$_Debug$fail,
    trace: Sys$_Debug$trace,
    traceDump: Sys$_Debug$traceDump,
    _traceDump: Sys$_Debug$_traceDump
}
Sys._Debug.registerClass(&#039;Sys._Debug&#039;);
Sys.Debug = new Sys._Debug();
    Sys.Debug.isDebug = true;
 
function Sys$Enum$parse(value, ignoreCase) {
    /// &lt;summary locid=&quot;M:J#Sys.Enum.parse&quot; /&gt;
    /// &lt;param name=&quot;value&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;ignoreCase&quot; type=&quot;Boolean&quot; optional=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;value&quot;, type: String},
        {name: &quot;ignoreCase&quot;, type: Boolean, optional: true}
    ]);
    if (e) throw e;
    var values, parsed, val;
    if (ignoreCase) {
        values = this.__lowerCaseValues;
        if (!values) {
            this.__lowerCaseValues = values = {};
            var prototype = this.prototype;
            for (var name in prototype) {
                values[name.toLowerCase()] = prototype[name];
            }
        }
    }
    else {
        values = this.prototype;
    }
    if (!this.__flags) {
        val = (ignoreCase ? value.toLowerCase() : value);
        parsed = values[val.trim()];
        if (typeof(parsed) !== &#039;number&#039;) throw Error.argument(&#039;value&#039;, String.format(Sys.Res.enumInvalidValue, value, this.__typeName));
        return parsed;
    }
    else {
        var parts = (ignoreCase ? value.toLowerCase() : value).split(&#039;,&#039;);
        var v = 0;
        for (var i = parts.length - 1; i &gt;= 0; i--) {
            var part = parts[i].trim();
            parsed = values[part];
            if (typeof(parsed) !== &#039;number&#039;) throw Error.argument(&#039;value&#039;, String.format(Sys.Res.enumInvalidValue, value.split(&#039;,&#039;)[i].trim(), this.__typeName));
            v |= parsed;
        }
        return v;
    }
}
function Sys$Enum$toString(value) {
    /// &lt;summary locid=&quot;M:J#Sys.Enum.toString&quot; /&gt;
    /// &lt;param name=&quot;value&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;String&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;value&quot;, mayBeNull: true, optional: true}
    ]);
    if (e) throw e;
    if ((typeof(value) === &#039;undefined&#039;) || (value === null)) return this.__string;
    if ((typeof(value) != &#039;number&#039;) || ((value % 1) !== 0)) throw Error.argumentType(&#039;value&#039;, Object.getType(value), this);
    var values = this.prototype;
    var i;
    if (!this.__flags || (value === 0)) {
        for (i in values) {
            if (values[i] === value) {
                return i;
            }
        }
    }
    else {
        var sorted = this.__sortedValues;
        if (!sorted) {
            sorted = [];
            for (i in values) {
                sorted[sorted.length] = {key: i, value: values[i]};
            }
            sorted.sort(function(a, b) {
                return a.value - b.value;
            });
            this.__sortedValues = sorted;
        }
        var parts = [];
        var v = value;
        for (i = sorted.length - 1; i &gt;= 0; i--) {
            var kvp = sorted[i];
            var vali = kvp.value;
            if (vali === 0) continue;
            if ((vali &amp; value) === vali) {
                parts[parts.length] = kvp.key;
                v -= vali;
                if (v === 0) break;
            }
        }
        if (parts.length &amp;&amp; v === 0) return parts.reverse().join(&#039;, &#039;);
    }
    throw Error.argumentOutOfRange(&#039;value&#039;, value, String.format(Sys.Res.enumInvalidValue, value, this.__typeName));
}
Type.prototype.registerEnum = function Type$registerEnum(name, flags) {
    /// &lt;summary locid=&quot;M:J#Sys.UI.LineType.#ctor&quot; /&gt;
    /// &lt;param name=&quot;name&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;flags&quot; type=&quot;Boolean&quot; optional=&quot;true&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;name&quot;, type: String},
        {name: &quot;flags&quot;, type: Boolean, optional: true}
    ]);
    if (e) throw e;
    if (!Type.__fullyQualifiedIdentifierRegExp.test(name)) throw Error.argument(&#039;name&#039;, Sys.Res.notATypeName);
    var parsedName;
    try {
        parsedName = eval(name);
    }
    catch(e) {
        throw Error.argument(&#039;name&#039;, Sys.Res.argumentTypeName);
    }
    if (parsedName !== this) throw Error.argument(&#039;name&#039;, Sys.Res.badTypeName);
    if (Sys.__registeredTypes[name]) throw Error.invalidOperation(String.format(Sys.Res.typeRegisteredTwice, name));
    for (var j in this.prototype) {
        var val = this.prototype[j];
        if (!Type.__identifierRegExp.test(j)) throw Error.invalidOperation(String.format(Sys.Res.enumInvalidValueName, j));
        if (typeof(val) !== &#039;number&#039; || (val % 1) !== 0) throw Error.invalidOperation(Sys.Res.enumValueNotInteger);
        if (typeof(this[j]) !== &#039;undefined&#039;) throw Error.invalidOperation(String.format(Sys.Res.enumReservedName, j));
    }
    Sys.__upperCaseTypes[name.toUpperCase()] = this;
    for (var i in this.prototype) {
        this[i] = this.prototype[i];
    }
    this.__typeName = name;
    this.parse = Sys$Enum$parse;
    this.__string = this.toString();
    this.toString = Sys$Enum$toString;
    this.__flags = flags;
    this.__enum = true;
    Sys.__registeredTypes[name] = true;
}
Type.isEnum = function Type$isEnum(type) {
    /// &lt;summary locid=&quot;M:J#Type.isEnum&quot; /&gt;
    /// &lt;param name=&quot;type&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Boolean&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;type&quot;, mayBeNull: true}
    ]);
    if (e) throw e;
    if ((typeof(type) === &#039;undefined&#039;) || (type === null)) return false;
    return !!type.__enum;
}
Type.isFlags = function Type$isFlags(type) {
    /// &lt;summary locid=&quot;M:J#Type.isFlags&quot; /&gt;
    /// &lt;param name=&quot;type&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Boolean&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;type&quot;, mayBeNull: true}
    ]);
    if (e) throw e;
    if ((typeof(type) === &#039;undefined&#039;) || (type === null)) return false;
    return !!type.__flags;
}
Sys.CollectionChange = function Sys$CollectionChange(action, newItems, newStartingIndex, oldItems, oldStartingIndex) {
    /// &lt;summary locid=&quot;M:J#Sys.CollectionChange.#ctor&quot; /&gt;
    /// &lt;param name=&quot;action&quot; type=&quot;Sys.NotifyCollectionChangedAction&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;newItems&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;newStartingIndex&quot; type=&quot;Number&quot; integer=&quot;true&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;oldItems&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;oldStartingIndex&quot; type=&quot;Number&quot; integer=&quot;true&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;field name=&quot;action&quot; type=&quot;Sys.NotifyCollectionChangedAction&quot; locid=&quot;F:J#Sys.CollectionChange.action&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;newItems&quot; type=&quot;Array&quot; mayBeNull=&quot;true&quot; elementMayBeNull=&quot;true&quot; locid=&quot;F:J#Sys.CollectionChange.newItems&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;newStartingIndex&quot; type=&quot;Number&quot; integer=&quot;true&quot; locid=&quot;F:J#Sys.CollectionChange.newStartingIndex&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;oldItems&quot; type=&quot;Array&quot; mayBeNull=&quot;true&quot; elementMayBeNull=&quot;true&quot; locid=&quot;F:J#Sys.CollectionChange.oldItems&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;oldStartingIndex&quot; type=&quot;Number&quot; integer=&quot;true&quot; locid=&quot;F:J#Sys.CollectionChange.oldStartingIndex&quot;&gt;&lt;/field&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;action&quot;, type: Sys.NotifyCollectionChangedAction},
        {name: &quot;newItems&quot;, mayBeNull: true, optional: true},
        {name: &quot;newStartingIndex&quot;, type: Number, mayBeNull: true, integer: true, optional: true},
        {name: &quot;oldItems&quot;, mayBeNull: true, optional: true},
        {name: &quot;oldStartingIndex&quot;, type: Number, mayBeNull: true, integer: true, optional: true}
    ]);
    if (e) throw e;
    this.action = action;
    if (newItems) {
        if (!(newItems instanceof Array)) {
            newItems = [newItems];
        }
    }
    this.newItems = newItems || null;
    if (typeof newStartingIndex !== &quot;number&quot;) {
        newStartingIndex = -1;
    }
    this.newStartingIndex = newStartingIndex;
    if (oldItems) {
        if (!(oldItems instanceof Array)) {
            oldItems = [oldItems];
        }
    }
    this.oldItems = oldItems || null;
    if (typeof oldStartingIndex !== &quot;number&quot;) {
        oldStartingIndex = -1;
    }
    this.oldStartingIndex = oldStartingIndex;
}
Sys.CollectionChange.registerClass(&quot;Sys.CollectionChange&quot;);
Sys.NotifyCollectionChangedAction = function Sys$NotifyCollectionChangedAction() {
    /// &lt;summary locid=&quot;M:J#Sys.NotifyCollectionChangedAction.#ctor&quot; /&gt;
    /// &lt;field name=&quot;add&quot; type=&quot;Number&quot; integer=&quot;true&quot; static=&quot;true&quot; locid=&quot;F:J#Sys.NotifyCollectionChangedAction.add&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;remove&quot; type=&quot;Number&quot; integer=&quot;true&quot; static=&quot;true&quot; locid=&quot;F:J#Sys.NotifyCollectionChangedAction.remove&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;reset&quot; type=&quot;Number&quot; integer=&quot;true&quot; static=&quot;true&quot; locid=&quot;F:J#Sys.NotifyCollectionChangedAction.reset&quot;&gt;&lt;/field&gt;
    if (arguments.length !== 0) throw Error.parameterCount();
    throw Error.notImplemented();
}
Sys.NotifyCollectionChangedAction.prototype = {
    add: 0,
    remove: 1,
    reset: 2
}
Sys.NotifyCollectionChangedAction.registerEnum(&#039;Sys.NotifyCollectionChangedAction&#039;);
Sys.NotifyCollectionChangedEventArgs = function Sys$NotifyCollectionChangedEventArgs(changes) {
    /// &lt;summary locid=&quot;M:J#Sys.NotifyCollectionChangedEventArgs.#ctor&quot; /&gt;
    /// &lt;param name=&quot;changes&quot; type=&quot;Array&quot; elementType=&quot;Sys.CollectionChange&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;changes&quot;, type: Array, elementType: Sys.CollectionChange}
    ]);
    if (e) throw e;
    this._changes = changes;
    Sys.NotifyCollectionChangedEventArgs.initializeBase(this);
}
    function Sys$NotifyCollectionChangedEventArgs$get_changes() {
        /// &lt;value type=&quot;Array&quot; elementType=&quot;Sys.CollectionChange&quot; locid=&quot;P:J#Sys.NotifyCollectionChangedEventArgs.changes&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._changes || [];
    }
Sys.NotifyCollectionChangedEventArgs.prototype = {
    get_changes: Sys$NotifyCollectionChangedEventArgs$get_changes
}
Sys.NotifyCollectionChangedEventArgs.registerClass(&quot;Sys.NotifyCollectionChangedEventArgs&quot;, Sys.EventArgs);
Sys.Observer = function Sys$Observer() {
    throw Error.invalidOperation();
}
Sys.Observer.registerClass(&quot;Sys.Observer&quot;);
Sys.Observer.makeObservable = function Sys$Observer$makeObservable(target) {
    /// &lt;summary locid=&quot;M:J#Sys.Observer.makeObservable&quot; /&gt;
    /// &lt;param name=&quot;target&quot; mayBeNull=&quot;false&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;target&quot;}
    ]);
    if (e) throw e;
    var isArray = target instanceof Array,
        o = Sys.Observer;
    Sys.Observer._ensureObservable(target);
    if (target.setValue === o._observeMethods.setValue) return target;
    o._addMethods(target, o._observeMethods);
    if (isArray) {
        o._addMethods(target, o._arrayMethods);
    }
    return target;
}
Sys.Observer._ensureObservable = function Sys$Observer$_ensureObservable(target) {
    var type = typeof target;
    if ((type === &quot;string&quot;) || (type === &quot;number&quot;) || (type === &quot;boolean&quot;) || (type === &quot;date&quot;)) {
        throw Error.invalidOperation(String.format(Sys.Res.notObservable, type));
    }
}
Sys.Observer._addMethods = function Sys$Observer$_addMethods(target, methods) {
    for (var m in methods) {
        if (target[m] &amp;&amp; (target[m] !== methods[m])) {
            throw Error.invalidOperation(String.format(Sys.Res.observableConflict, m));
        }
        target[m] = methods[m];
    }
}
Sys.Observer._addEventHandler = function Sys$Observer$_addEventHandler(target, eventName, handler) {
    Sys.Observer._getContext(target, true).events._addHandler(eventName, handler);
}
Sys.Observer.addEventHandler = function Sys$Observer$addEventHandler(target, eventName, handler) {
    /// &lt;summary locid=&quot;M:J#Sys.Observer.addEventHandler&quot; /&gt;
    /// &lt;param name=&quot;target&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;eventName&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;handler&quot; type=&quot;Function&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;target&quot;},
        {name: &quot;eventName&quot;, type: String},
        {name: &quot;handler&quot;, type: Function}
    ]);
    if (e) throw e;
    Sys.Observer._ensureObservable(target);
    Sys.Observer._addEventHandler(target, eventName, handler);
}
Sys.Observer._removeEventHandler = function Sys$Observer$_removeEventHandler(target, eventName, handler) {
    Sys.Observer._getContext(target, true).events._removeHandler(eventName, handler);
}
Sys.Observer.removeEventHandler = function Sys$Observer$removeEventHandler(target, eventName, handler) {
    /// &lt;summary locid=&quot;M:J#Sys.Observer.removeEventHandler&quot; /&gt;
    /// &lt;param name=&quot;target&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;eventName&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;handler&quot; type=&quot;Function&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;target&quot;},
        {name: &quot;eventName&quot;, type: String},
        {name: &quot;handler&quot;, type: Function}
    ]);
    if (e) throw e;
    Sys.Observer._ensureObservable(target);
    Sys.Observer._removeEventHandler(target, eventName, handler);
}
Sys.Observer.raiseEvent = function Sys$Observer$raiseEvent(target, eventName, eventArgs) {
    /// &lt;summary locid=&quot;M:J#Sys.Observer.raiseEvent&quot; /&gt;
    /// &lt;param name=&quot;target&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;eventName&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;eventArgs&quot; type=&quot;Sys.EventArgs&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;target&quot;},
        {name: &quot;eventName&quot;, type: String},
        {name: &quot;eventArgs&quot;, type: Sys.EventArgs}
    ]);
    if (e) throw e;
    Sys.Observer._ensureObservable(target);
    var ctx = Sys.Observer._getContext(target);
    if (!ctx) return;
    var handler = ctx.events.getHandler(eventName);
    if (handler) {
        handler(target, eventArgs);
    }
}
Sys.Observer.addPropertyChanged = function Sys$Observer$addPropertyChanged(target, handler) {
    /// &lt;summary locid=&quot;M:J#Sys.Observer.addPropertyChanged&quot; /&gt;
    /// &lt;param name=&quot;target&quot; mayBeNull=&quot;false&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;handler&quot; type=&quot;Function&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;target&quot;},
        {name: &quot;handler&quot;, type: Function}
    ]);
    if (e) throw e;
    Sys.Observer._ensureObservable(target);
    Sys.Observer._addEventHandler(target, &quot;propertyChanged&quot;, handler);
}
Sys.Observer.removePropertyChanged = function Sys$Observer$removePropertyChanged(target, handler) {
    /// &lt;summary locid=&quot;M:J#Sys.Observer.removePropertyChanged&quot; /&gt;
    /// &lt;param name=&quot;target&quot; mayBeNull=&quot;false&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;handler&quot; type=&quot;Function&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;target&quot;},
        {name: &quot;handler&quot;, type: Function}
    ]);
    if (e) throw e;
    Sys.Observer._ensureObservable(target);
    Sys.Observer._removeEventHandler(target, &quot;propertyChanged&quot;, handler);
}
Sys.Observer.beginUpdate = function Sys$Observer$beginUpdate(target) {
    /// &lt;summary locid=&quot;M:J#Sys.Observer.beginUpdate&quot; /&gt;
    /// &lt;param name=&quot;target&quot; mayBeNull=&quot;false&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;target&quot;}
    ]);
    if (e) throw e;
    Sys.Observer._ensureObservable(target);
    Sys.Observer._getContext(target, true).updating = true;
}
Sys.Observer.endUpdate = function Sys$Observer$endUpdate(target) {
    /// &lt;summary locid=&quot;M:J#Sys.Observer.endUpdate&quot; /&gt;
    /// &lt;param name=&quot;target&quot; mayBeNull=&quot;false&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;target&quot;}
    ]);
    if (e) throw e;
    Sys.Observer._ensureObservable(target);
    var ctx = Sys.Observer._getContext(target);
    if (!ctx || !ctx.updating) return;
    ctx.updating = false;
    var dirty = ctx.dirty;
    ctx.dirty = false;
    if (dirty) {
        if (target instanceof Array) {
            var changes = ctx.changes;
            ctx.changes = null;
            Sys.Observer.raiseCollectionChanged(target, changes);
        }
        Sys.Observer.raisePropertyChanged(target, &quot;&quot;);
    }
}
Sys.Observer.isUpdating = function Sys$Observer$isUpdating(target) {
    /// &lt;summary locid=&quot;M:J#Sys.Observer.isUpdating&quot; /&gt;
    /// &lt;param name=&quot;target&quot; mayBeNull=&quot;false&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Boolean&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;target&quot;}
    ]);
    if (e) throw e;
    Sys.Observer._ensureObservable(target);
    var ctx = Sys.Observer._getContext(target);
    return ctx ? ctx.updating : false;
}
Sys.Observer._setValue = function Sys$Observer$_setValue(target, propertyName, value) {
    var getter, setter, mainTarget = target, path = propertyName.split(&#039;.&#039;);
    for (var i = 0, l = (path.length - 1); i &lt; l ; i++) {
        var name = path[i];
        getter = target[&quot;get_&quot; + name]; 
        if (typeof (getter) === &quot;function&quot;) {
            target = getter.call(target);
        }
        else {
            target = target[name];
        }
        var type = typeof (target);
        if ((target === null) || (type === &quot;undefined&quot;)) {
            throw Error.invalidOperation(String.format(Sys.Res.nullReferenceInPath, propertyName));
        }
    }    
    var currentValue, lastPath = path[l];
    getter = target[&quot;get_&quot; + lastPath];
    setter = target[&quot;set_&quot; + lastPath];
    if (typeof(getter) === &#039;function&#039;) {
        currentValue = getter.call(target);
    }
    else {
        currentValue = target[lastPath];
    }
    if (typeof(setter) === &#039;function&#039;) {
        setter.call(target, value);
    }
    else {
        target[lastPath] = value;
    }
    if (currentValue !== value) {
        var ctx = Sys.Observer._getContext(mainTarget);
        if (ctx &amp;&amp; ctx.updating) {
            ctx.dirty = true;
            return;
        };
        Sys.Observer.raisePropertyChanged(mainTarget, path[0]);
    }
}
Sys.Observer.setValue = function Sys$Observer$setValue(target, propertyName, value) {
    /// &lt;summary locid=&quot;M:J#Sys.Observer.setValue&quot; /&gt;
    /// &lt;param name=&quot;target&quot; mayBeNull=&quot;false&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;propertyName&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;value&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;target&quot;},
        {name: &quot;propertyName&quot;, type: String},
        {name: &quot;value&quot;, mayBeNull: true}
    ]);
    if (e) throw e;
    Sys.Observer._ensureObservable(target);
    Sys.Observer._setValue(target, propertyName, value);
}
Sys.Observer.raisePropertyChanged = function Sys$Observer$raisePropertyChanged(target, propertyName) {
    /// &lt;summary locid=&quot;M:J#Sys.Observer.raisePropertyChanged&quot; /&gt;
    /// &lt;param name=&quot;target&quot; mayBeNull=&quot;false&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;propertyName&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    Sys.Observer.raiseEvent(target, &quot;propertyChanged&quot;, new Sys.PropertyChangedEventArgs(propertyName));
}
Sys.Observer.addCollectionChanged = function Sys$Observer$addCollectionChanged(target, handler) {
    /// &lt;summary locid=&quot;M:J#Sys.Observer.addCollectionChanged&quot; /&gt;
    /// &lt;param name=&quot;target&quot; type=&quot;Array&quot; elementMayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;handler&quot; type=&quot;Function&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;target&quot;, type: Array, elementMayBeNull: true},
        {name: &quot;handler&quot;, type: Function}
    ]);
    if (e) throw e;
    Sys.Observer._addEventHandler(target, &quot;collectionChanged&quot;, handler);
}
Sys.Observer.removeCollectionChanged = function Sys$Observer$removeCollectionChanged(target, handler) {
    /// &lt;summary locid=&quot;M:J#Sys.Observer.removeCollectionChanged&quot; /&gt;
    /// &lt;param name=&quot;target&quot; type=&quot;Array&quot; elementMayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;handler&quot; type=&quot;Function&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;target&quot;, type: Array, elementMayBeNull: true},
        {name: &quot;handler&quot;, type: Function}
    ]);
    if (e) throw e;
    Sys.Observer._removeEventHandler(target, &quot;collectionChanged&quot;, handler);
}
Sys.Observer._collectionChange = function Sys$Observer$_collectionChange(target, change) {
    var ctx = Sys.Observer._getContext(target);
    if (ctx &amp;&amp; ctx.updating) {
        ctx.dirty = true;
        var changes = ctx.changes;
        if (!changes) {
            ctx.changes = changes = [change];
        }
        else {
            changes.push(change);
        }
    }
    else {
        Sys.Observer.raiseCollectionChanged(target, [change]);
        Sys.Observer.raisePropertyChanged(target, &#039;length&#039;);
    }
}
Sys.Observer.add = function Sys$Observer$add(target, item) {
    /// &lt;summary locid=&quot;M:J#Sys.Observer.add&quot; /&gt;
    /// &lt;param name=&quot;target&quot; type=&quot;Array&quot; elementMayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;item&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;target&quot;, type: Array, elementMayBeNull: true},
        {name: &quot;item&quot;, mayBeNull: true}
    ]);
    if (e) throw e;
    var change = new Sys.CollectionChange(Sys.NotifyCollectionChangedAction.add, [item], target.length);
    Array.add(target, item);
    Sys.Observer._collectionChange(target, change);
}
Sys.Observer.addRange = function Sys$Observer$addRange(target, items) {
    /// &lt;summary locid=&quot;M:J#Sys.Observer.addRange&quot; /&gt;
    /// &lt;param name=&quot;target&quot; type=&quot;Array&quot; elementMayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;items&quot; type=&quot;Array&quot; elementMayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;target&quot;, type: Array, elementMayBeNull: true},
        {name: &quot;items&quot;, type: Array, elementMayBeNull: true}
    ]);
    if (e) throw e;
    var change = new Sys.CollectionChange(Sys.NotifyCollectionChangedAction.add, items, target.length);
    Array.addRange(target, items);
    Sys.Observer._collectionChange(target, change);
}
Sys.Observer.clear = function Sys$Observer$clear(target) {
    /// &lt;summary locid=&quot;M:J#Sys.Observer.clear&quot; /&gt;
    /// &lt;param name=&quot;target&quot; type=&quot;Array&quot; elementMayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;target&quot;, type: Array, elementMayBeNull: true}
    ]);
    if (e) throw e;
    var oldItems = Array.clone(target);
    Array.clear(target);
    Sys.Observer._collectionChange(target, new Sys.CollectionChange(Sys.NotifyCollectionChangedAction.reset, null, -1, oldItems, 0));
}
Sys.Observer.insert = function Sys$Observer$insert(target, index, item) {
    /// &lt;summary locid=&quot;M:J#Sys.Observer.insert&quot; /&gt;
    /// &lt;param name=&quot;target&quot; type=&quot;Array&quot; elementMayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;index&quot; type=&quot;Number&quot; integer=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;item&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;target&quot;, type: Array, elementMayBeNull: true},
        {name: &quot;index&quot;, type: Number, integer: true},
        {name: &quot;item&quot;, mayBeNull: true}
    ]);
    if (e) throw e;
    Array.insert(target, index, item);
    Sys.Observer._collectionChange(target, new Sys.CollectionChange(Sys.NotifyCollectionChangedAction.add, [item], index));
}
Sys.Observer.remove = function Sys$Observer$remove(target, item) {
    /// &lt;summary locid=&quot;M:J#Sys.Observer.remove&quot; /&gt;
    /// &lt;param name=&quot;target&quot; type=&quot;Array&quot; elementMayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;item&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Boolean&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;target&quot;, type: Array, elementMayBeNull: true},
        {name: &quot;item&quot;, mayBeNull: true}
    ]);
    if (e) throw e;
    var index = Array.indexOf(target, item);
    if (index !== -1) {
        Array.remove(target, item);
        Sys.Observer._collectionChange(target, new Sys.CollectionChange(Sys.NotifyCollectionChangedAction.remove, null, -1, [item], index));
        return true;
    }
    return false;
}
Sys.Observer.removeAt = function Sys$Observer$removeAt(target, index) {
    /// &lt;summary locid=&quot;M:J#Sys.Observer.removeAt&quot; /&gt;
    /// &lt;param name=&quot;target&quot; type=&quot;Array&quot; elementMayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;index&quot; type=&quot;Number&quot; integer=&quot;true&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;target&quot;, type: Array, elementMayBeNull: true},
        {name: &quot;index&quot;, type: Number, integer: true}
    ]);
    if (e) throw e;
    if ((index &gt; -1) &amp;&amp; (index &lt; target.length)) {
        var item = target[index];
        Array.removeAt(target, index);
        Sys.Observer._collectionChange(target, new Sys.CollectionChange(Sys.NotifyCollectionChangedAction.remove, null, -1, [item], index));
    }
}
Sys.Observer.raiseCollectionChanged = function Sys$Observer$raiseCollectionChanged(target, changes) {
    /// &lt;summary locid=&quot;M:J#Sys.Observer.raiseCollectionChanged&quot; /&gt;
    /// &lt;param name=&quot;target&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;changes&quot; type=&quot;Array&quot; elementType=&quot;Sys.CollectionChange&quot;&gt;&lt;/param&gt;
    Sys.Observer.raiseEvent(target, &quot;collectionChanged&quot;, new Sys.NotifyCollectionChangedEventArgs(changes));
}
Sys.Observer._observeMethods = {
    add_propertyChanged: function(handler) {
        Sys.Observer._addEventHandler(this, &quot;propertyChanged&quot;, handler);
    },
    remove_propertyChanged: function(handler) {
        Sys.Observer._removeEventHandler(this, &quot;propertyChanged&quot;, handler);
    },
    addEventHandler: function(eventName, handler) {
        /// &lt;summary locid=&quot;M:J#Sys.Observer.raiseCollectionChanged&quot; /&gt;
        /// &lt;param name=&quot;eventName&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;handler&quot; type=&quot;Function&quot;&gt;&lt;/param&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;eventName&quot;, type: String},
            {name: &quot;handler&quot;, type: Function}
        ]);
        if (e) throw e;
        Sys.Observer._addEventHandler(this, eventName, handler);
    },
    removeEventHandler: function(eventName, handler) {
        /// &lt;summary locid=&quot;M:J#Sys.Observer.raiseCollectionChanged&quot; /&gt;
        /// &lt;param name=&quot;eventName&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;handler&quot; type=&quot;Function&quot;&gt;&lt;/param&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;eventName&quot;, type: String},
            {name: &quot;handler&quot;, type: Function}
        ]);
        if (e) throw e;
        Sys.Observer._removeEventHandler(this, eventName, handler);
    },
    get_isUpdating: function() {
        /// &lt;summary locid=&quot;M:J#Sys.Observer.raiseCollectionChanged&quot; /&gt;
        /// &lt;returns type=&quot;Boolean&quot;&gt;&lt;/returns&gt;
        return Sys.Observer.isUpdating(this);
    },
    beginUpdate: function() {
        /// &lt;summary locid=&quot;M:J#Sys.Observer.raiseCollectionChanged&quot; /&gt;
        Sys.Observer.beginUpdate(this);
    },
    endUpdate: function() {
        /// &lt;summary locid=&quot;M:J#Sys.Observer.raiseCollectionChanged&quot; /&gt;
        Sys.Observer.endUpdate(this);
    },
    setValue: function(name, value) {
        /// &lt;summary locid=&quot;M:J#Sys.Observer.raiseCollectionChanged&quot; /&gt;
        /// &lt;param name=&quot;name&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;value&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;name&quot;, type: String},
            {name: &quot;value&quot;, mayBeNull: true}
        ]);
        if (e) throw e;
        Sys.Observer._setValue(this, name, value);
    },
    raiseEvent: function(eventName, eventArgs) {
        /// &lt;summary locid=&quot;M:J#Sys.Observer.raiseCollectionChanged&quot; /&gt;
        /// &lt;param name=&quot;eventName&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;eventArgs&quot; type=&quot;Sys.EventArgs&quot;&gt;&lt;/param&gt;
        Sys.Observer.raiseEvent(this, eventName, eventArgs);
    },
    raisePropertyChanged: function(name) {
        /// &lt;summary locid=&quot;M:J#Sys.Observer.raiseCollectionChanged&quot; /&gt;
        /// &lt;param name=&quot;name&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
        Sys.Observer.raiseEvent(this, &quot;propertyChanged&quot;, new Sys.PropertyChangedEventArgs(name));
    }
}
Sys.Observer._arrayMethods = {
    add_collectionChanged: function(handler) {
        Sys.Observer._addEventHandler(this, &quot;collectionChanged&quot;, handler);
    },
    remove_collectionChanged: function(handler) {
        Sys.Observer._removeEventHandler(this, &quot;collectionChanged&quot;, handler);
    },
    add: function(item) {
        /// &lt;summary locid=&quot;M:J#Sys.Observer.raiseCollectionChanged&quot; /&gt;
        /// &lt;param name=&quot;item&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
        Sys.Observer.add(this, item);
    },
    addRange: function(items) {
        /// &lt;summary locid=&quot;M:J#Sys.Observer.raiseCollectionChanged&quot; /&gt;
        /// &lt;param name=&quot;items&quot; type=&quot;Array&quot; elementMayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
        Sys.Observer.addRange(this, items);
    },
    clear: function() {
        /// &lt;summary locid=&quot;M:J#Sys.Observer.raiseCollectionChanged&quot; /&gt;
        Sys.Observer.clear(this);
    },
    insert: function(index, item) { 
        /// &lt;summary locid=&quot;M:J#Sys.Observer.raiseCollectionChanged&quot; /&gt;
        /// &lt;param name=&quot;index&quot; type=&quot;Number&quot; integer=&quot;true&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;item&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
        Sys.Observer.insert(this, index, item);
    },
    remove: function(item) {
        /// &lt;summary locid=&quot;M:J#Sys.Observer.raiseCollectionChanged&quot; /&gt;
        /// &lt;param name=&quot;item&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
        /// &lt;returns type=&quot;Boolean&quot;&gt;&lt;/returns&gt;
        return Sys.Observer.remove(this, item);
    },
    removeAt: function(index) {
        /// &lt;summary locid=&quot;M:J#Sys.Observer.raiseCollectionChanged&quot; /&gt;
        /// &lt;param name=&quot;index&quot; type=&quot;Number&quot; integer=&quot;true&quot;&gt;&lt;/param&gt;
        Sys.Observer.removeAt(this, index);
    },
    raiseCollectionChanged: function(changes) {
        /// &lt;summary locid=&quot;M:J#Sys.Observer.raiseCollectionChanged&quot; /&gt;
        /// &lt;param name=&quot;changes&quot; type=&quot;Array&quot; elementType=&quot;Sys.CollectionChange&quot;&gt;&lt;/param&gt;
        Sys.Observer.raiseEvent(this, &quot;collectionChanged&quot;, new Sys.NotifyCollectionChangedEventArgs(changes));
    }
}
Sys.Observer._getContext = function Sys$Observer$_getContext(obj, create) {
    var ctx = obj._observerContext;
    if (ctx) return ctx();
    if (create) {
        return (obj._observerContext = Sys.Observer._createContext())();
    }
    return null;
}
Sys.Observer._createContext = function Sys$Observer$_createContext() {
    var ctx = {
        events: new Sys.EventHandlerList()
    };
    return function() {
        return ctx;
    }
}
Date._appendPreOrPostMatch = function Date$_appendPreOrPostMatch(preMatch, strBuilder) {
    var quoteCount = 0;
    var escaped = false;
    for (var i = 0, il = preMatch.length; i &lt; il; i++) {
        var c = preMatch.charAt(i);
        switch (c) {
        case &#039;\&#039;&#039;:
            if (escaped) strBuilder.append(&quot;&#039;&quot;);
            else quoteCount++;
            escaped = false;
            break;
        case &#039;\\&#039;:
            if (escaped) strBuilder.append(&quot;\\&quot;);
            escaped = !escaped;
            break;
        default:
            strBuilder.append(c);
            escaped = false;
            break;
        }
    }
    return quoteCount;
}
Date._expandFormat = function Date$_expandFormat(dtf, format) {
    if (!format) {
        format = &quot;F&quot;;
    }
    var len = format.length;
    if (len === 1) {
        switch (format) {
        case &quot;d&quot;:
            return dtf.ShortDatePattern;
        case &quot;D&quot;:
            return dtf.LongDatePattern;
        case &quot;t&quot;:
            return dtf.ShortTimePattern;
        case &quot;T&quot;:
            return dtf.LongTimePattern;
        case &quot;f&quot;:
            return dtf.LongDatePattern + &quot; &quot; + dtf.ShortTimePattern;
        case &quot;F&quot;:
            return dtf.FullDateTimePattern;
        case &quot;M&quot;: case &quot;m&quot;:
            return dtf.MonthDayPattern;
        case &quot;s&quot;:
            return dtf.SortableDateTimePattern;
        case &quot;Y&quot;: case &quot;y&quot;:
            return dtf.YearMonthPattern;
        default:
            throw Error.format(Sys.Res.formatInvalidString);
        }
    }
    else if ((len === 2) &amp;&amp; (format.charAt(0) === &quot;%&quot;)) {
        format = format.charAt(1);
    }
    return format;
}
Date._expandYear = function Date$_expandYear(dtf, year) {
    var now = new Date(),
        era = Date._getEra(now);
    if (year &lt; 100) {
        var curr = Date._getEraYear(now, dtf, era);
        year += curr - (curr % 100);
        if (year &gt; dtf.Calendar.TwoDigitYearMax) {
            year -= 100;
        }
    }
    return year;
}
Date._getEra = function Date$_getEra(date, eras) {
    if (!eras) return 0;
    var start, ticks = date.getTime();
    for (var i = 0, l = eras.length; i &lt; l; i += 4) {
        start = eras[i+2];
        if ((start === null) || (ticks &gt;= start)) {
            return i;
        }
    }
    return 0;
}
Date._getEraYear = function Date$_getEraYear(date, dtf, era, sortable) {
    var year = date.getFullYear();
    if (!sortable &amp;&amp; dtf.eras) {
        year -= dtf.eras[era + 3];
    }    
    return year;
}
Date._getParseRegExp = function Date$_getParseRegExp(dtf, format) {
    if (!dtf._parseRegExp) {
        dtf._parseRegExp = {};
    }
    else if (dtf._parseRegExp[format]) {
        return dtf._parseRegExp[format];
    }
    var expFormat = Date._expandFormat(dtf, format);
    expFormat = expFormat.replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, &quot;\\\\$1&quot;);
    var regexp = new Sys.StringBuilder(&quot;^&quot;);
    var groups = [];
    var index = 0;
    var quoteCount = 0;
    var tokenRegExp = Date._getTokenRegExp();
    var match;
    while ((match = tokenRegExp.exec(expFormat)) !== null) {
        var preMatch = expFormat.slice(index, match.index);
        index = tokenRegExp.lastIndex;
        quoteCount += Date._appendPreOrPostMatch(preMatch, regexp);
        if ((quoteCount%2) === 1) {
            regexp.append(match[0]);
            continue;
        }
        switch (match[0]) {
            case &#039;dddd&#039;: case &#039;ddd&#039;:
            case &#039;MMMM&#039;: case &#039;MMM&#039;:
            case &#039;gg&#039;: case &#039;g&#039;:
                regexp.append(&quot;(\\D+)&quot;);
                break;
            case &#039;tt&#039;: case &#039;t&#039;:
                regexp.append(&quot;(\\D*)&quot;);
                break;
            case &#039;yyyy&#039;:
                regexp.append(&quot;(\\d{4})&quot;);
                break;
            case &#039;fff&#039;:
                regexp.append(&quot;(\\d{3})&quot;);
                break;
            case &#039;ff&#039;:
                regexp.append(&quot;(\\d{2})&quot;);
                break;
            case &#039;f&#039;:
                regexp.append(&quot;(\\d)&quot;);
                break;
            case &#039;dd&#039;: case &#039;d&#039;:
            case &#039;MM&#039;: case &#039;M&#039;:
            case &#039;yy&#039;: case &#039;y&#039;:
            case &#039;HH&#039;: case &#039;H&#039;:
            case &#039;hh&#039;: case &#039;h&#039;:
            case &#039;mm&#039;: case &#039;m&#039;:
            case &#039;ss&#039;: case &#039;s&#039;:
                regexp.append(&quot;(\\d\\d?)&quot;);
                break;
            case &#039;zzz&#039;:
                regexp.append(&quot;([+-]?\\d\\d?:\\d{2})&quot;);
                break;
            case &#039;zz&#039;: case &#039;z&#039;:
                regexp.append(&quot;([+-]?\\d\\d?)&quot;);
                break;
            case &#039;/&#039;:
                regexp.append(&quot;(\\&quot; + dtf.DateSeparator + &quot;)&quot;);
                break;
            default:
                Sys.Debug.fail(&quot;Invalid date format pattern&quot;);
        }
        Array.add(groups, match[0]);
    }
    Date._appendPreOrPostMatch(expFormat.slice(index), regexp);
    regexp.append(&quot;$&quot;);
    var regexpStr = regexp.toString().replace(/\s+/g, &quot;\\s+&quot;);
    var parseRegExp = {&#039;regExp&#039;: regexpStr, &#039;groups&#039;: groups};
    dtf._parseRegExp[format] = parseRegExp;
    return parseRegExp;
}
Date._getTokenRegExp = function Date$_getTokenRegExp() {
    return /\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g;
}
Date.parseLocale = function Date$parseLocale(value, formats) {
    /// &lt;summary locid=&quot;M:J#Date.parseLocale&quot; /&gt;
    /// &lt;param name=&quot;value&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;formats&quot; parameterArray=&quot;true&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Date&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;value&quot;, type: String},
        {name: &quot;formats&quot;, mayBeNull: true, optional: true, parameterArray: true}
    ]);
    if (e) throw e;
    return Date._parse(value, Sys.CultureInfo.CurrentCulture, arguments);
}
Date.parseInvariant = function Date$parseInvariant(value, formats) {
    /// &lt;summary locid=&quot;M:J#Date.parseInvariant&quot; /&gt;
    /// &lt;param name=&quot;value&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;formats&quot; parameterArray=&quot;true&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Date&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;value&quot;, type: String},
        {name: &quot;formats&quot;, mayBeNull: true, optional: true, parameterArray: true}
    ]);
    if (e) throw e;
    return Date._parse(value, Sys.CultureInfo.InvariantCulture, arguments);
}
Date._parse = function Date$_parse(value, cultureInfo, args) {
    var i, l, date, format, formats, custom = false;
    for (i = 1, l = args.length; i &lt; l; i++) {
        format = args[i];
        if (format) {
            custom = true;
            date = Date._parseExact(value, format, cultureInfo);
            if (date) return date;
        }
    }
    if (! custom) {
        formats = cultureInfo._getDateTimeFormats();
        for (i = 0, l = formats.length; i &lt; l; i++) {
            date = Date._parseExact(value, formats[i], cultureInfo);
            if (date) return date;
        }
    }
    return null;
}
Date._parseExact = function Date$_parseExact(value, format, cultureInfo) {
    value = value.trim();
    var dtf = cultureInfo.dateTimeFormat,
        parseInfo = Date._getParseRegExp(dtf, format),
        match = new RegExp(parseInfo.regExp).exec(value);
    if (match === null) return null;
    
    var groups = parseInfo.groups,
        era = null, year = null, month = null, date = null, weekDay = null,
        hour = 0, hourOffset, min = 0, sec = 0, msec = 0, tzMinOffset = null,
        pmHour = false;
    for (var j = 0, jl = groups.length; j &lt; jl; j++) {
        var matchGroup = match[j+1];
        if (matchGroup) {
            switch (groups[j]) {
                case &#039;dd&#039;: case &#039;d&#039;:
                    date = parseInt(matchGroup, 10);
                    if ((date &lt; 1) || (date &gt; 31)) return null;
                    break;
                case &#039;MMMM&#039;:
                    month = cultureInfo._getMonthIndex(matchGroup);
                    if ((month &lt; 0) || (month &gt; 11)) return null;
                    break;
                case &#039;MMM&#039;:
                    month = cultureInfo._getAbbrMonthIndex(matchGroup);
                    if ((month &lt; 0) || (month &gt; 11)) return null;
                    break;
                case &#039;M&#039;: case &#039;MM&#039;:
                    month = parseInt(matchGroup, 10) - 1;
                    if ((month &lt; 0) || (month &gt; 11)) return null;
                    break;
                case &#039;y&#039;: case &#039;yy&#039;:
                    year = Date._expandYear(dtf,parseInt(matchGroup, 10));
                    if ((year &lt; 0) || (year &gt; 9999)) return null;
                    break;
                case &#039;yyyy&#039;:
                    year = parseInt(matchGroup, 10);
                    if ((year &lt; 0) || (year &gt; 9999)) return null;
                    break;
                case &#039;h&#039;: case &#039;hh&#039;:
                    hour = parseInt(matchGroup, 10);
                    if (hour === 12) hour = 0;
                    if ((hour &lt; 0) || (hour &gt; 11)) return null;
                    break;
                case &#039;H&#039;: case &#039;HH&#039;:
                    hour = parseInt(matchGroup, 10);
                    if ((hour &lt; 0) || (hour &gt; 23)) return null;
                    break;
                case &#039;m&#039;: case &#039;mm&#039;:
                    min = parseInt(matchGroup, 10);
                    if ((min &lt; 0) || (min &gt; 59)) return null;
                    break;
                case &#039;s&#039;: case &#039;ss&#039;:
                    sec = parseInt(matchGroup, 10);
                    if ((sec &lt; 0) || (sec &gt; 59)) return null;
                    break;
                case &#039;tt&#039;: case &#039;t&#039;:
                    var upperToken = matchGroup.toUpperCase();
                    pmHour = (upperToken === dtf.PMDesignator.toUpperCase());
                    if (!pmHour &amp;&amp; (upperToken !== dtf.AMDesignator.toUpperCase())) return null;
                    break;
                case &#039;f&#039;:
                    msec = parseInt(matchGroup, 10) * 100;
                    if ((msec &lt; 0) || (msec &gt; 999)) return null;
                    break;
                case &#039;ff&#039;:
                    msec = parseInt(matchGroup, 10) * 10;
                    if ((msec &lt; 0) || (msec &gt; 999)) return null;
                    break;
                case &#039;fff&#039;:
                    msec = parseInt(matchGroup, 10);
                    if ((msec &lt; 0) || (msec &gt; 999)) return null;
                    break;
                case &#039;dddd&#039;:
                    weekDay = cultureInfo._getDayIndex(matchGroup);
                    if ((weekDay &lt; 0) || (weekDay &gt; 6)) return null;
                    break;
                case &#039;ddd&#039;:
                    weekDay = cultureInfo._getAbbrDayIndex(matchGroup);
                    if ((weekDay &lt; 0) || (weekDay &gt; 6)) return null;
                    break;
                case &#039;zzz&#039;:
                    var offsets = matchGroup.split(/:/);
                    if (offsets.length !== 2) return null;
                    hourOffset = parseInt(offsets[0], 10);
                    if ((hourOffset &lt; -12) || (hourOffset &gt; 13)) return null;
                    var minOffset = parseInt(offsets[1], 10);
                    if ((minOffset &lt; 0) || (minOffset &gt; 59)) return null;
                    tzMinOffset = (hourOffset * 60) + (matchGroup.startsWith(&#039;-&#039;)? -minOffset : minOffset);
                    break;
                case &#039;z&#039;: case &#039;zz&#039;:
                    hourOffset = parseInt(matchGroup, 10);
                    if ((hourOffset &lt; -12) || (hourOffset &gt; 13)) return null;
                    tzMinOffset = hourOffset * 60;
                    break;
                case &#039;g&#039;: case &#039;gg&#039;:
                    var eraName = matchGroup;
                    if (!eraName || !dtf.eras) return null;
                    eraName = eraName.toLowerCase().trim();
                    for (var i = 0, l = dtf.eras.length; i &lt; l; i += 4) {
                        if (eraName === dtf.eras[i + 1].toLowerCase()) {
                            era = i;
                            break;
                        }
                    }
                    if (era === null) return null;
                    break;
            }
        }
    }
    var result = new Date(), defaultYear, convert = dtf.Calendar.convert;
    if (convert) {
        defaultYear = convert.fromGregorian(result)[0];
    }
    else {
        defaultYear = result.getFullYear();
    }
    if (year === null) {
        year = defaultYear;
    }
    else if (dtf.eras) {
        year += dtf.eras[(era || 0) + 3];
    }
    if (month === null) {
        month = 0;
    }
    if (date === null) {
        date = 1;
    }
    if (convert) {
        result = convert.toGregorian(year, month, date);
        if (result === null) return null;
    }
    else {
        result.setFullYear(year, month, date);
        if (result.getDate() !== date) return null;
        if ((weekDay !== null) &amp;&amp; (result.getDay() !== weekDay)) {
            return null;
        }
    }
    if (pmHour &amp;&amp; (hour &lt; 12)) {
        hour += 12;
    }
    result.setHours(hour, min, sec, msec);
    if (tzMinOffset !== null) {
        var adjustedMin = result.getMinutes() - (tzMinOffset + result.getTimezoneOffset());
        result.setHours(result.getHours() + parseInt(adjustedMin/60, 10), adjustedMin%60);
    }
    return result;
}
Date.prototype.format = function Date$format(format) {
    /// &lt;summary locid=&quot;M:J#Date.format&quot; /&gt;
    /// &lt;param name=&quot;format&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;String&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;format&quot;, type: String}
    ]);
    if (e) throw e;
    return this._toFormattedString(format, Sys.CultureInfo.InvariantCulture);
}
Date.prototype.localeFormat = function Date$localeFormat(format) {
    /// &lt;summary locid=&quot;M:J#Date.localeFormat&quot; /&gt;
    /// &lt;param name=&quot;format&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;String&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;format&quot;, type: String}
    ]);
    if (e) throw e;
    return this._toFormattedString(format, Sys.CultureInfo.CurrentCulture);
}
Date.prototype._toFormattedString = function Date$_toFormattedString(format, cultureInfo) {
    var dtf = cultureInfo.dateTimeFormat,
        convert = dtf.Calendar.convert;
    if (!format || !format.length || (format === &#039;i&#039;)) {
        if (cultureInfo &amp;&amp; cultureInfo.name.length) {
            if (convert) {
                return this._toFormattedString(dtf.FullDateTimePattern, cultureInfo);
            }
            else {
                var eraDate = new Date(this.getTime());
                var era = Date._getEra(this, dtf.eras);
                eraDate.setFullYear(Date._getEraYear(this, dtf, era));
                return eraDate.toLocaleString();
            }
        }
        else {
            return this.toString();
        }
    }
    var eras = dtf.eras,
        sortable = (format === &quot;s&quot;);
    format = Date._expandFormat(dtf, format);
    var ret = new Sys.StringBuilder();
    var hour;
    function addLeadingZero(num) {
        if (num &lt; 10) {
            return &#039;0&#039; + num;
        }
        return num.toString();
    }
    function addLeadingZeros(num) {
        if (num &lt; 10) {
            return &#039;00&#039; + num;
        }
        if (num &lt; 100) {
            return &#039;0&#039; + num;
        }
        return num.toString();
    }
    function padYear(year) {
        if (year &lt; 10) {
            return &#039;000&#039; + year;
        }
        else if (year &lt; 100) {
            return &#039;00&#039; + year;
        }
        else if (year &lt; 1000) {
            return &#039;0&#039; + year;
        }
        return year.toString();
    }
    
    var foundDay, checkedDay, dayPartRegExp = /([^d]|^)(d|dd)([^d]|$)/g;
    function hasDay() {
        if (foundDay || checkedDay) {
            return foundDay;
        }
        foundDay = dayPartRegExp.test(format);
        checkedDay = true;
        return foundDay;
    }
    
    var quoteCount = 0,
        tokenRegExp = Date._getTokenRegExp(),
        converted;
    if (!sortable &amp;&amp; convert) {
        converted = convert.fromGregorian(this);
    }
    for (;;) {
        var index = tokenRegExp.lastIndex;
        var ar = tokenRegExp.exec(format);
        var preMatch = format.slice(index, ar ? ar.index : format.length);
        quoteCount += Date._appendPreOrPostMatch(preMatch, ret);
        if (!ar) break;
        if ((quoteCount%2) === 1) {
            ret.append(ar[0]);
            continue;
        }
        
        function getPart(date, part) {
            if (converted) {
                return converted[part];
            }
            switch (part) {
                case 0: return date.getFullYear();
                case 1: return date.getMonth();
                case 2: return date.getDate();
            }
        }
        switch (ar[0]) {
        case &quot;dddd&quot;:
            ret.append(dtf.DayNames[this.getDay()]);
            break;
        case &quot;ddd&quot;:
            ret.append(dtf.AbbreviatedDayNames[this.getDay()]);
            break;
        case &quot;dd&quot;:
            foundDay = true;
            ret.append(addLeadingZero(getPart(this, 2)));
            break;
        case &quot;d&quot;:
            foundDay = true;
            ret.append(getPart(this, 2));
            break;
        case &quot;MMMM&quot;:
            ret.append((dtf.MonthGenitiveNames &amp;&amp; hasDay())
                ? dtf.MonthGenitiveNames[getPart(this, 1)]
                : dtf.MonthNames[getPart(this, 1)]);
            break;
        case &quot;MMM&quot;:
            ret.append((dtf.AbbreviatedMonthGenitiveNames &amp;&amp; hasDay())
                ? dtf.AbbreviatedMonthGenitiveNames[getPart(this, 1)]
                : dtf.AbbreviatedMonthNames[getPart(this, 1)]);
            break;
        case &quot;MM&quot;:
            ret.append(addLeadingZero(getPart(this, 1) + 1));
            break;
        case &quot;M&quot;:
            ret.append(getPart(this, 1) + 1);
            break;
        case &quot;yyyy&quot;:
            ret.append(padYear(converted ? converted[0] : Date._getEraYear(this, dtf, Date._getEra(this, eras), sortable)));
            break;
        case &quot;yy&quot;:
            ret.append(addLeadingZero((converted ? converted[0] : Date._getEraYear(this, dtf, Date._getEra(this, eras), sortable)) % 100));
            break;
        case &quot;y&quot;:
            ret.append((converted ? converted[0] : Date._getEraYear(this, dtf, Date._getEra(this, eras), sortable)) % 100);
            break;
        case &quot;hh&quot;:
            hour = this.getHours() % 12;
            if (hour === 0) hour = 12;
            ret.append(addLeadingZero(hour));
            break;
        case &quot;h&quot;:
            hour = this.getHours() % 12;
            if (hour === 0) hour = 12;
            ret.append(hour);
            break;
        case &quot;HH&quot;:
            ret.append(addLeadingZero(this.getHours()));
            break;
        case &quot;H&quot;:
            ret.append(this.getHours());
            break;
        case &quot;mm&quot;:
            ret.append(addLeadingZero(this.getMinutes()));
            break;
        case &quot;m&quot;:
            ret.append(this.getMinutes());
            break;
        case &quot;ss&quot;:
            ret.append(addLeadingZero(this.getSeconds()));
            break;
        case &quot;s&quot;:
            ret.append(this.getSeconds());
            break;
        case &quot;tt&quot;:
            ret.append((this.getHours() &lt; 12) ? dtf.AMDesignator : dtf.PMDesignator);
            break;
        case &quot;t&quot;:
            ret.append(((this.getHours() &lt; 12) ? dtf.AMDesignator : dtf.PMDesignator).charAt(0));
            break;
        case &quot;f&quot;:
            ret.append(addLeadingZeros(this.getMilliseconds()).charAt(0));
            break;
        case &quot;ff&quot;:
            ret.append(addLeadingZeros(this.getMilliseconds()).substr(0, 2));
            break;
        case &quot;fff&quot;:
            ret.append(addLeadingZeros(this.getMilliseconds()));
            break;
        case &quot;z&quot;:
            hour = this.getTimezoneOffset() / 60;
            ret.append(((hour &lt;= 0) ? &#039;+&#039; : &#039;-&#039;) + Math.floor(Math.abs(hour)));
            break;
        case &quot;zz&quot;:
            hour = this.getTimezoneOffset() / 60;
            ret.append(((hour &lt;= 0) ? &#039;+&#039; : &#039;-&#039;) + addLeadingZero(Math.floor(Math.abs(hour))));
            break;
        case &quot;zzz&quot;:
            hour = this.getTimezoneOffset() / 60;
            ret.append(((hour &lt;= 0) ? &#039;+&#039; : &#039;-&#039;) + addLeadingZero(Math.floor(Math.abs(hour))) +
                &quot;:&quot; + addLeadingZero(Math.abs(this.getTimezoneOffset() % 60)));
            break;
        case &quot;g&quot;:
        case &quot;gg&quot;:
            if (dtf.eras) {
                ret.append(dtf.eras[Date._getEra(this, eras) + 1]);
            }
            break;
        case &quot;/&quot;:
            ret.append(dtf.DateSeparator);
            break;
        default:
            Sys.Debug.fail(&quot;Invalid date format pattern&quot;);
        }
    }
    return ret.toString();
}
String.localeFormat = function String$localeFormat(format, args) {
    /// &lt;summary locid=&quot;M:J#String.localeFormat&quot; /&gt;
    /// &lt;param name=&quot;format&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;args&quot; parameterArray=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;String&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;format&quot;, type: String},
        {name: &quot;args&quot;, mayBeNull: true, parameterArray: true}
    ]);
    if (e) throw e;
    return String._toFormattedString(true, arguments);
}
Number.parseLocale = function Number$parseLocale(value) {
    /// &lt;summary locid=&quot;M:J#Number.parseLocale&quot; /&gt;
    /// &lt;param name=&quot;value&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Number&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;value&quot;, type: String}
    ], false);
    if (e) throw e;
    return Number._parse(value, Sys.CultureInfo.CurrentCulture);
}
Number.parseInvariant = function Number$parseInvariant(value) {
    /// &lt;summary locid=&quot;M:J#Number.parseInvariant&quot; /&gt;
    /// &lt;param name=&quot;value&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Number&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;value&quot;, type: String}
    ], false);
    if (e) throw e;
    return Number._parse(value, Sys.CultureInfo.InvariantCulture);
}
Number._parse = function Number$_parse(value, cultureInfo) {
    value = value.trim();
    
    if (value.match(/^[+-]?infinity$/i)) {
        return parseFloat(value);
    }
    if (value.match(/^0x[a-f0-9]+$/i)) {
        return parseInt(value);
    }
    var numFormat = cultureInfo.numberFormat;
    var signInfo = Number._parseNumberNegativePattern(value, numFormat, numFormat.NumberNegativePattern);
    var sign = signInfo[0];
    var num = signInfo[1];
    
    if ((sign === &#039;&#039;) &amp;&amp; (numFormat.NumberNegativePattern !== 1)) {
        signInfo = Number._parseNumberNegativePattern(value, numFormat, 1);
        sign = signInfo[0];
        num = signInfo[1];
    }
    if (sign === &#039;&#039;) sign = &#039;+&#039;;
    
    var exponent;
    var intAndFraction;
    var exponentPos = num.indexOf(&#039;e&#039;);
    if (exponentPos &lt; 0) exponentPos = num.indexOf(&#039;E&#039;);
    if (exponentPos &lt; 0) {
        intAndFraction = num;
        exponent = null;
    }
    else {
        intAndFraction = num.substr(0, exponentPos);
        exponent = num.substr(exponentPos + 1);
    }
    
    var integer;
    var fraction;
    var decimalPos = intAndFraction.indexOf(numFormat.NumberDecimalSeparator);
    if (decimalPos &lt; 0) {
        integer = intAndFraction;
        fraction = null;
    }
    else {
        integer = intAndFraction.substr(0, decimalPos);
        fraction = intAndFraction.substr(decimalPos + numFormat.NumberDecimalSeparator.length);
    }
    
    integer = integer.split(numFormat.NumberGroupSeparator).join(&#039;&#039;);
    var altNumGroupSeparator = numFormat.NumberGroupSeparator.replace(/\u00A0/g, &quot; &quot;);
    if (numFormat.NumberGroupSeparator !== altNumGroupSeparator) {
        integer = integer.split(altNumGroupSeparator).join(&#039;&#039;);
    }
    
    var p = sign + integer;
    if (fraction !== null) {
        p += &#039;.&#039; + fraction;
    }
    if (exponent !== null) {
        var expSignInfo = Number._parseNumberNegativePattern(exponent, numFormat, 1);
        if (expSignInfo[0] === &#039;&#039;) {
            expSignInfo[0] = &#039;+&#039;;
        }
        p += &#039;e&#039; + expSignInfo[0] + expSignInfo[1];
    }
    if (p.match(/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/)) {
        return parseFloat(p);
    }
    return Number.NaN;
}
Number._parseNumberNegativePattern = function Number$_parseNumberNegativePattern(value, numFormat, numberNegativePattern) {
    var neg = numFormat.NegativeSign;
    var pos = numFormat.PositiveSign;    
    switch (numberNegativePattern) {
        case 4: 
            neg = &#039; &#039; + neg;
            pos = &#039; &#039; + pos;
        case 3: 
            if (value.endsWith(neg)) {
                return [&#039;-&#039;, value.substr(0, value.length - neg.length)];
            }
            else if (value.endsWith(pos)) {
                return [&#039;+&#039;, value.substr(0, value.length - pos.length)];
            }
            break;
        case 2: 
            neg += &#039; &#039;;
            pos += &#039; &#039;;
        case 1: 
            if (value.startsWith(neg)) {
                return [&#039;-&#039;, value.substr(neg.length)];
            }
            else if (value.startsWith(pos)) {
                return [&#039;+&#039;, value.substr(pos.length)];
            }
            break;
        case 0: 
            if (value.startsWith(&#039;(&#039;) &amp;&amp; value.endsWith(&#039;)&#039;)) {
                return [&#039;-&#039;, value.substr(1, value.length - 2)];
            }
            break;
        default:
            Sys.Debug.fail(&quot;&quot;);
    }
    return [&#039;&#039;, value];
}
Number.prototype.format = function Number$format(format) {
    /// &lt;summary locid=&quot;M:J#Number.format&quot; /&gt;
    /// &lt;param name=&quot;format&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;String&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;format&quot;, type: String}
    ]);
    if (e) throw e;
    return this._toFormattedString(format, Sys.CultureInfo.InvariantCulture);
}
Number.prototype.localeFormat = function Number$localeFormat(format) {
    /// &lt;summary locid=&quot;M:J#Number.localeFormat&quot; /&gt;
    /// &lt;param name=&quot;format&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;String&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;format&quot;, type: String}
    ]);
    if (e) throw e;
    return this._toFormattedString(format, Sys.CultureInfo.CurrentCulture);
}
Number.prototype._toFormattedString = function Number$_toFormattedString(format, cultureInfo) {
    if (!format || (format.length === 0) || (format === &#039;i&#039;)) {
        if (cultureInfo &amp;&amp; (cultureInfo.name.length &gt; 0)) {
            return this.toLocaleString();
        }
        else {
            return this.toString();
        }
    }
    
    var _percentPositivePattern = [&quot;n %&quot;, &quot;n%&quot;, &quot;%n&quot; ];
    var _percentNegativePattern = [&quot;-n %&quot;, &quot;-n%&quot;, &quot;-%n&quot;];
    var _numberNegativePattern = [&quot;(n)&quot;,&quot;-n&quot;,&quot;- n&quot;,&quot;n-&quot;,&quot;n -&quot;];
    var _currencyPositivePattern = [&quot;$n&quot;,&quot;n$&quot;,&quot;$ n&quot;,&quot;n $&quot;];
    var _currencyNegativePattern = [&quot;($n)&quot;,&quot;-$n&quot;,&quot;$-n&quot;,&quot;$n-&quot;,&quot;(n$)&quot;,&quot;-n$&quot;,&quot;n-$&quot;,&quot;n$-&quot;,&quot;-n $&quot;,&quot;-$ n&quot;,&quot;n $-&quot;,&quot;$ n-&quot;,&quot;$ -n&quot;,&quot;n- $&quot;,&quot;($ n)&quot;,&quot;(n $)&quot;];
    function zeroPad(str, count, left) {
        for (var l=str.length; l &lt; count; l++) {
            str = (left ? (&#039;0&#039; + str) : (str + &#039;0&#039;));
        }
        return str;
    }
    
    function expandNumber(number, precision, groupSizes, sep, decimalChar) {
        Sys.Debug.assert(groupSizes.length &gt; 0, &quot;groupSizes must be an array of at least 1&quot;);
        var curSize = groupSizes[0];
        var curGroupIndex = 1;
        var factor = Math.pow(10, precision);
        var rounded = (Math.round(number * factor) / factor);
        if (!isFinite(rounded)) {
            rounded = number;
        }
        number = rounded;
        
        var numberString = number.toString();
        var right = &quot;&quot;;
        var exponent;
        
        
        var split = numberString.split(/e/i);
        numberString = split[0];
        exponent = (split.length &gt; 1 ? parseInt(split[1]) : 0);
        split = numberString.split(&#039;.&#039;);
        numberString = split[0];
        right = split.length &gt; 1 ? split[1] : &quot;&quot;;
        
        var l;
        if (exponent &gt; 0) {
            right = zeroPad(right, exponent, false);
            numberString += right.slice(0, exponent);
            right = right.substr(exponent);
        }
        else if (exponent &lt; 0) {
            exponent = -exponent;
            numberString = zeroPad(numberString, exponent+1, true);
            right = numberString.slice(-exponent, numberString.length) + right;
            numberString = numberString.slice(0, -exponent);
        }
        if (precision &gt; 0) {
            if (right.length &gt; precision) {
                right = right.slice(0, precision);
            }
            else {
                right = zeroPad(right, precision, false);
            }
            right = decimalChar + right;
        }
        else { 
            right = &quot;&quot;;
        }
        var stringIndex = numberString.length-1;
        var ret = &quot;&quot;;
        while (stringIndex &gt;= 0) {
            if (curSize === 0 || curSize &gt; stringIndex) {
                if (ret.length &gt; 0)
                    return numberString.slice(0, stringIndex + 1) + sep + ret + right;
                else
                    return numberString.slice(0, stringIndex + 1) + right;
            }
            if (ret.length &gt; 0)
                ret = numberString.slice(stringIndex - curSize + 1, stringIndex+1) + sep + ret;
            else
                ret = numberString.slice(stringIndex - curSize + 1, stringIndex+1);
            stringIndex -= curSize;
            if (curGroupIndex &lt; groupSizes.length) {
                curSize = groupSizes[curGroupIndex];
                curGroupIndex++;
            }
        }
        return numberString.slice(0, stringIndex + 1) + sep + ret + right;
    }
    var nf = cultureInfo.numberFormat;
    var number = Math.abs(this);
    if (!format)
        format = &quot;D&quot;;
    var precision = -1;
    if (format.length &gt; 1) precision = parseInt(format.slice(1), 10);
    var pattern;
    switch (format.charAt(0)) {
    case &quot;d&quot;:
    case &quot;D&quot;:
        pattern = &#039;n&#039;;
        if (precision !== -1) {
            number = zeroPad(&quot;&quot;+number, precision, true);
        }
        if (this &lt; 0) number = -number;
        break;
    case &quot;c&quot;:
    case &quot;C&quot;:
        if (this &lt; 0) pattern = _currencyNegativePattern[nf.CurrencyNegativePattern];
        else pattern = _currencyPositivePattern[nf.CurrencyPositivePattern];
        if (precision === -1) precision = nf.CurrencyDecimalDigits;
        number = expandNumber(Math.abs(this), precision, nf.CurrencyGroupSizes, nf.CurrencyGroupSeparator, nf.CurrencyDecimalSeparator);
        break;
    case &quot;n&quot;:
    case &quot;N&quot;:
        if (this &lt; 0) pattern = _numberNegativePattern[nf.NumberNegativePattern];
        else pattern = &#039;n&#039;;
        if (precision === -1) precision = nf.NumberDecimalDigits;
        number = expandNumber(Math.abs(this), precision, nf.NumberGroupSizes, nf.NumberGroupSeparator, nf.NumberDecimalSeparator);
        break;
    case &quot;p&quot;:
    case &quot;P&quot;:
        if (this &lt; 0) pattern = _percentNegativePattern[nf.PercentNegativePattern];
        else pattern = _percentPositivePattern[nf.PercentPositivePattern];
        if (precision === -1) precision = nf.PercentDecimalDigits;
        number = expandNumber(Math.abs(this) * 100, precision, nf.PercentGroupSizes, nf.PercentGroupSeparator, nf.PercentDecimalSeparator);
        break;
    default:
        throw Error.format(Sys.Res.formatBadFormatSpecifier);
    }
    var regex = /n|\$|-|%/g;
    var ret = &quot;&quot;;
    for (;;) {
        var index = regex.lastIndex;
        var ar = regex.exec(pattern);
        ret += pattern.slice(index, ar ? ar.index : pattern.length);
        if (!ar)
            break;
        switch (ar[0]) {
        case &quot;n&quot;:
            ret += number;
            break;
        case &quot;$&quot;:
            ret += nf.CurrencySymbol;
            break;
        case &quot;-&quot;:
            if (/[1-9]/.test(number)) {
                ret += nf.NegativeSign;
            }
            break;
        case &quot;%&quot;:
            ret += nf.PercentSymbol;
            break;
        default:
            Sys.Debug.fail(&quot;Invalid number format pattern&quot;);
        }
    }
    return ret;
}
 
Sys.CultureInfo = function Sys$CultureInfo(name, numberFormat, dateTimeFormat) {
    /// &lt;summary locid=&quot;M:J#Sys.CultureInfo.#ctor&quot; /&gt;
    /// &lt;param name=&quot;name&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;numberFormat&quot; type=&quot;Object&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;dateTimeFormat&quot; type=&quot;Object&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;name&quot;, type: String},
        {name: &quot;numberFormat&quot;, type: Object},
        {name: &quot;dateTimeFormat&quot;, type: Object}
    ]);
    if (e) throw e;
    this.name = name;
    this.numberFormat = numberFormat;
    this.dateTimeFormat = dateTimeFormat;
}
    function Sys$CultureInfo$_getDateTimeFormats() {
        if (! this._dateTimeFormats) {
            var dtf = this.dateTimeFormat;
            this._dateTimeFormats =
              [ dtf.MonthDayPattern,
                dtf.YearMonthPattern,
                dtf.ShortDatePattern,
                dtf.ShortTimePattern,
                dtf.LongDatePattern,
                dtf.LongTimePattern,
                dtf.FullDateTimePattern,
                dtf.RFC1123Pattern,
                dtf.SortableDateTimePattern,
                dtf.UniversalSortableDateTimePattern ];
        }
        return this._dateTimeFormats;
    }
    function Sys$CultureInfo$_getIndex(value, a1, a2) {
        var upper = this._toUpper(value),
            i = Array.indexOf(a1, upper);
        if (i === -1) {
            i = Array.indexOf(a2, upper);
        }
        return i;
    }
    function Sys$CultureInfo$_getMonthIndex(value) {
        if (!this._upperMonths) {
            this._upperMonths = this._toUpperArray(this.dateTimeFormat.MonthNames);
            this._upperMonthsGenitive = this._toUpperArray(this.dateTimeFormat.MonthGenitiveNames);
        }
        return this._getIndex(value, this._upperMonths, this._upperMonthsGenitive);
    }
    function Sys$CultureInfo$_getAbbrMonthIndex(value) {
        if (!this._upperAbbrMonths) {
            this._upperAbbrMonths = this._toUpperArray(this.dateTimeFormat.AbbreviatedMonthNames);
            this._upperAbbrMonthsGenitive = this._toUpperArray(this.dateTimeFormat.AbbreviatedMonthGenitiveNames);
        }
        return this._getIndex(value, this._upperAbbrMonths, this._upperAbbrMonthsGenitive);
    }
    function Sys$CultureInfo$_getDayIndex(value) {
        if (!this._upperDays) {
            this._upperDays = this._toUpperArray(this.dateTimeFormat.DayNames);
        }
        return Array.indexOf(this._upperDays, this._toUpper(value));
    }
    function Sys$CultureInfo$_getAbbrDayIndex(value) {
        if (!this._upperAbbrDays) {
            this._upperAbbrDays = this._toUpperArray(this.dateTimeFormat.AbbreviatedDayNames);
        }
        return Array.indexOf(this._upperAbbrDays, this._toUpper(value));
    }
    function Sys$CultureInfo$_toUpperArray(arr) {
        var result = [];
        for (var i = 0, il = arr.length; i &lt; il; i++) {
            result[i] = this._toUpper(arr[i]);
        }
        return result;
    }
    function Sys$CultureInfo$_toUpper(value) {
        return value.split(&quot;\u00A0&quot;).join(&#039; &#039;).toUpperCase();
    }
Sys.CultureInfo.prototype = {
    _getDateTimeFormats: Sys$CultureInfo$_getDateTimeFormats,
    _getIndex: Sys$CultureInfo$_getIndex,
    _getMonthIndex: Sys$CultureInfo$_getMonthIndex,
    _getAbbrMonthIndex: Sys$CultureInfo$_getAbbrMonthIndex,
    _getDayIndex: Sys$CultureInfo$_getDayIndex,
    _getAbbrDayIndex: Sys$CultureInfo$_getAbbrDayIndex,
    _toUpperArray: Sys$CultureInfo$_toUpperArray,
    _toUpper: Sys$CultureInfo$_toUpper
}
Sys.CultureInfo.registerClass(&#039;Sys.CultureInfo&#039;);
Sys.CultureInfo._parse = function Sys$CultureInfo$_parse(value) {
    var dtf = value.dateTimeFormat;
    if (dtf &amp;&amp; !dtf.eras) {
        dtf.eras = value.eras;
    }
    return new Sys.CultureInfo(value.name, value.numberFormat, dtf);
}
Sys.CultureInfo.InvariantCulture = Sys.CultureInfo._parse({&quot;name&quot;:&quot;&quot;,&quot;numberFormat&quot;:{&quot;CurrencyDecimalDigits&quot;:2,&quot;CurrencyDecimalSeparator&quot;:&quot;.&quot;,&quot;IsReadOnly&quot;:true,&quot;CurrencyGroupSizes&quot;:[3],&quot;NumberGroupSizes&quot;:[3],&quot;PercentGroupSizes&quot;:[3],&quot;CurrencyGroupSeparator&quot;:&quot;,&quot;,&quot;CurrencySymbol&quot;:&quot;\u00A4&quot;,&quot;NaNSymbol&quot;:&quot;NaN&quot;,&quot;CurrencyNegativePattern&quot;:0,&quot;NumberNegativePattern&quot;:1,&quot;PercentPositivePattern&quot;:0,&quot;PercentNegativePattern&quot;:0,&quot;NegativeInfinitySymbol&quot;:&quot;-Infinity&quot;,&quot;NegativeSign&quot;:&quot;-&quot;,&quot;NumberDecimalDigits&quot;:2,&quot;NumberDecimalSeparator&quot;:&quot;.&quot;,&quot;NumberGroupSeparator&quot;:&quot;,&quot;,&quot;CurrencyPositivePattern&quot;:0,&quot;PositiveInfinitySymbol&quot;:&quot;Infinity&quot;,&quot;PositiveSign&quot;:&quot;+&quot;,&quot;PercentDecimalDigits&quot;:2,&quot;PercentDecimalSeparator&quot;:&quot;.&quot;,&quot;PercentGroupSeparator&quot;:&quot;,&quot;,&quot;PercentSymbol&quot;:&quot;%&quot;,&quot;PerMilleSymbol&quot;:&quot;\u2030&quot;,&quot;NativeDigits&quot;:[&quot;0&quot;,&quot;1&quot;,&quot;2&quot;,&quot;3&quot;,&quot;4&quot;,&quot;5&quot;,&quot;6&quot;,&quot;7&quot;,&quot;8&quot;,&quot;9&quot;],&quot;DigitSubstitution&quot;:1},&quot;dateTimeFormat&quot;:{&quot;AMDesignator&quot;:&quot;AM&quot;,&quot;Calendar&quot;:{&quot;MinSupportedDateTime&quot;:&quot;@-62135568000000@&quot;,&quot;MaxSupportedDateTime&quot;:&quot;@253402300799999@&quot;,&quot;AlgorithmType&quot;:1,&quot;CalendarType&quot;:1,&quot;Eras&quot;:[1],&quot;TwoDigitYearMax&quot;:2029,&quot;IsReadOnly&quot;:true},&quot;DateSeparator&quot;:&quot;/&quot;,&quot;FirstDayOfWeek&quot;:0,&quot;CalendarWeekRule&quot;:0,&quot;FullDateTimePattern&quot;:&quot;dddd, dd MMMM yyyy HH:mm:ss&quot;,&quot;LongDatePattern&quot;:&quot;dddd, dd MMMM yyyy&quot;,&quot;LongTimePattern&quot;:&quot;HH:mm:ss&quot;,&quot;MonthDayPattern&quot;:&quot;MMMM dd&quot;,&quot;PMDesignator&quot;:&quot;PM&quot;,&quot;RFC1123Pattern&quot;:&quot;ddd, dd MMM yyyy HH\&#039;:\&#039;mm\&#039;:\&#039;ss \&#039;GMT\&#039;&quot;,&quot;ShortDatePattern&quot;:&quot;MM/dd/yyyy&quot;,&quot;ShortTimePattern&quot;:&quot;HH:mm&quot;,&quot;SortableDateTimePattern&quot;:&quot;yyyy\&#039;-\&#039;MM\&#039;-\&#039;dd\&#039;T\&#039;HH\&#039;:\&#039;mm\&#039;:\&#039;ss&quot;,&quot;TimeSeparator&quot;:&quot;:&quot;,&quot;UniversalSortableDateTimePattern&quot;:&quot;yyyy\&#039;-\&#039;MM\&#039;-\&#039;dd HH\&#039;:\&#039;mm\&#039;:\&#039;ss\&#039;Z\&#039;&quot;,&quot;YearMonthPattern&quot;:&quot;yyyy MMMM&quot;,&quot;AbbreviatedDayNames&quot;:[&quot;Sun&quot;,&quot;Mon&quot;,&quot;Tue&quot;,&quot;Wed&quot;,&quot;Thu&quot;,&quot;Fri&quot;,&quot;Sat&quot;],&quot;ShortestDayNames&quot;:[&quot;Su&quot;,&quot;Mo&quot;,&quot;Tu&quot;,&quot;We&quot;,&quot;Th&quot;,&quot;Fr&quot;,&quot;Sa&quot;],&quot;DayNames&quot;:[&quot;Sunday&quot;,&quot;Monday&quot;,&quot;Tuesday&quot;,&quot;Wednesday&quot;,&quot;Thursday&quot;,&quot;Friday&quot;,&quot;Saturday&quot;],&quot;AbbreviatedMonthNames&quot;:[&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;,&quot;May&quot;,&quot;Jun&quot;,&quot;Jul&quot;,&quot;Aug&quot;,&quot;Sep&quot;,&quot;Oct&quot;,&quot;Nov&quot;,&quot;Dec&quot;,&quot;&quot;],&quot;MonthNames&quot;:[&quot;January&quot;,&quot;February&quot;,&quot;March&quot;,&quot;April&quot;,&quot;May&quot;,&quot;June&quot;,&quot;July&quot;,&quot;August&quot;,&quot;September&quot;,&quot;October&quot;,&quot;November&quot;,&quot;December&quot;,&quot;&quot;],&quot;IsReadOnly&quot;:true,&quot;NativeCalendarName&quot;:&quot;Gregorian Calendar&quot;,&quot;AbbreviatedMonthGenitiveNames&quot;:[&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;,&quot;May&quot;,&quot;Jun&quot;,&quot;Jul&quot;,&quot;Aug&quot;,&quot;Sep&quot;,&quot;Oct&quot;,&quot;Nov&quot;,&quot;Dec&quot;,&quot;&quot;],&quot;MonthGenitiveNames&quot;:[&quot;January&quot;,&quot;February&quot;,&quot;March&quot;,&quot;April&quot;,&quot;May&quot;,&quot;June&quot;,&quot;July&quot;,&quot;August&quot;,&quot;September&quot;,&quot;October&quot;,&quot;November&quot;,&quot;December&quot;,&quot;&quot;]},&quot;eras&quot;:[1,&quot;A.D.&quot;,null,0]});
if (typeof(__cultureInfo) === &quot;object&quot;) {
    Sys.CultureInfo.CurrentCulture = Sys.CultureInfo._parse(__cultureInfo);
    delete __cultureInfo;    
}
else {
    Sys.CultureInfo.CurrentCulture = Sys.CultureInfo._parse({&quot;name&quot;:&quot;en-US&quot;,&quot;numberFormat&quot;:{&quot;CurrencyDecimalDigits&quot;:2,&quot;CurrencyDecimalSeparator&quot;:&quot;.&quot;,&quot;IsReadOnly&quot;:false,&quot;CurrencyGroupSizes&quot;:[3],&quot;NumberGroupSizes&quot;:[3],&quot;PercentGroupSizes&quot;:[3],&quot;CurrencyGroupSeparator&quot;:&quot;,&quot;,&quot;CurrencySymbol&quot;:&quot;$&quot;,&quot;NaNSymbol&quot;:&quot;NaN&quot;,&quot;CurrencyNegativePattern&quot;:0,&quot;NumberNegativePattern&quot;:1,&quot;PercentPositivePattern&quot;:0,&quot;PercentNegativePattern&quot;:0,&quot;NegativeInfinitySymbol&quot;:&quot;-Infinity&quot;,&quot;NegativeSign&quot;:&quot;-&quot;,&quot;NumberDecimalDigits&quot;:2,&quot;NumberDecimalSeparator&quot;:&quot;.&quot;,&quot;NumberGroupSeparator&quot;:&quot;,&quot;,&quot;CurrencyPositivePattern&quot;:0,&quot;PositiveInfinitySymbol&quot;:&quot;Infinity&quot;,&quot;PositiveSign&quot;:&quot;+&quot;,&quot;PercentDecimalDigits&quot;:2,&quot;PercentDecimalSeparator&quot;:&quot;.&quot;,&quot;PercentGroupSeparator&quot;:&quot;,&quot;,&quot;PercentSymbol&quot;:&quot;%&quot;,&quot;PerMilleSymbol&quot;:&quot;\u2030&quot;,&quot;NativeDigits&quot;:[&quot;0&quot;,&quot;1&quot;,&quot;2&quot;,&quot;3&quot;,&quot;4&quot;,&quot;5&quot;,&quot;6&quot;,&quot;7&quot;,&quot;8&quot;,&quot;9&quot;],&quot;DigitSubstitution&quot;:1},&quot;dateTimeFormat&quot;:{&quot;AMDesignator&quot;:&quot;AM&quot;,&quot;Calendar&quot;:{&quot;MinSupportedDateTime&quot;:&quot;@-62135568000000@&quot;,&quot;MaxSupportedDateTime&quot;:&quot;@253402300799999@&quot;,&quot;AlgorithmType&quot;:1,&quot;CalendarType&quot;:1,&quot;Eras&quot;:[1],&quot;TwoDigitYearMax&quot;:2029,&quot;IsReadOnly&quot;:false},&quot;DateSeparator&quot;:&quot;/&quot;,&quot;FirstDayOfWeek&quot;:0,&quot;CalendarWeekRule&quot;:0,&quot;FullDateTimePattern&quot;:&quot;dddd, MMMM dd, yyyy h:mm:ss tt&quot;,&quot;LongDatePattern&quot;:&quot;dddd, MMMM dd, yyyy&quot;,&quot;LongTimePattern&quot;:&quot;h:mm:ss tt&quot;,&quot;MonthDayPattern&quot;:&quot;MMMM dd&quot;,&quot;PMDesignator&quot;:&quot;PM&quot;,&quot;RFC1123Pattern&quot;:&quot;ddd, dd MMM yyyy HH\&#039;:\&#039;mm\&#039;:\&#039;ss \&#039;GMT\&#039;&quot;,&quot;ShortDatePattern&quot;:&quot;M/d/yyyy&quot;,&quot;ShortTimePattern&quot;:&quot;h:mm tt&quot;,&quot;SortableDateTimePattern&quot;:&quot;yyyy\&#039;-\&#039;MM\&#039;-\&#039;dd\&#039;T\&#039;HH\&#039;:\&#039;mm\&#039;:\&#039;ss&quot;,&quot;TimeSeparator&quot;:&quot;:&quot;,&quot;UniversalSortableDateTimePattern&quot;:&quot;yyyy\&#039;-\&#039;MM\&#039;-\&#039;dd HH\&#039;:\&#039;mm\&#039;:\&#039;ss\&#039;Z\&#039;&quot;,&quot;YearMonthPattern&quot;:&quot;MMMM, yyyy&quot;,&quot;AbbreviatedDayNames&quot;:[&quot;Sun&quot;,&quot;Mon&quot;,&quot;Tue&quot;,&quot;Wed&quot;,&quot;Thu&quot;,&quot;Fri&quot;,&quot;Sat&quot;],&quot;ShortestDayNames&quot;:[&quot;Su&quot;,&quot;Mo&quot;,&quot;Tu&quot;,&quot;We&quot;,&quot;Th&quot;,&quot;Fr&quot;,&quot;Sa&quot;],&quot;DayNames&quot;:[&quot;Sunday&quot;,&quot;Monday&quot;,&quot;Tuesday&quot;,&quot;Wednesday&quot;,&quot;Thursday&quot;,&quot;Friday&quot;,&quot;Saturday&quot;],&quot;AbbreviatedMonthNames&quot;:[&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;,&quot;May&quot;,&quot;Jun&quot;,&quot;Jul&quot;,&quot;Aug&quot;,&quot;Sep&quot;,&quot;Oct&quot;,&quot;Nov&quot;,&quot;Dec&quot;,&quot;&quot;],&quot;MonthNames&quot;:[&quot;January&quot;,&quot;February&quot;,&quot;March&quot;,&quot;April&quot;,&quot;May&quot;,&quot;June&quot;,&quot;July&quot;,&quot;August&quot;,&quot;September&quot;,&quot;October&quot;,&quot;November&quot;,&quot;December&quot;,&quot;&quot;],&quot;IsReadOnly&quot;:false,&quot;NativeCalendarName&quot;:&quot;Gregorian Calendar&quot;,&quot;AbbreviatedMonthGenitiveNames&quot;:[&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;,&quot;May&quot;,&quot;Jun&quot;,&quot;Jul&quot;,&quot;Aug&quot;,&quot;Sep&quot;,&quot;Oct&quot;,&quot;Nov&quot;,&quot;Dec&quot;,&quot;&quot;],&quot;MonthGenitiveNames&quot;:[&quot;January&quot;,&quot;February&quot;,&quot;March&quot;,&quot;April&quot;,&quot;May&quot;,&quot;June&quot;,&quot;July&quot;,&quot;August&quot;,&quot;September&quot;,&quot;October&quot;,&quot;November&quot;,&quot;December&quot;,&quot;&quot;]},&quot;eras&quot;:[1,&quot;A.D.&quot;,null,0]});
}
Type.registerNamespace(&#039;Sys.Serialization&#039;);
Sys.Serialization.JavaScriptSerializer = function Sys$Serialization$JavaScriptSerializer() {
    /// &lt;summary locid=&quot;M:J#Sys.Serialization.JavaScriptSerializer.#ctor&quot; /&gt;
    if (arguments.length !== 0) throw Error.parameterCount();
}
Sys.Serialization.JavaScriptSerializer.registerClass(&#039;Sys.Serialization.JavaScriptSerializer&#039;);
Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs = [];
Sys.Serialization.JavaScriptSerializer._charsToEscape = [];
Sys.Serialization.JavaScriptSerializer._dateRegEx = new RegExp(&#039;(^|[^\\\\])\\&quot;\\\\/Date\\((-?[0-9]+)(?:[a-zA-Z]|(?:\\+|-)[0-9]{4})?\\)\\\\/\\&quot;&#039;, &#039;g&#039;);
Sys.Serialization.JavaScriptSerializer._escapeChars = {};
Sys.Serialization.JavaScriptSerializer._escapeRegEx = new RegExp(&#039;[&quot;\\\\\\x00-\\x1F]&#039;, &#039;i&#039;);
Sys.Serialization.JavaScriptSerializer._escapeRegExGlobal = new RegExp(&#039;[&quot;\\\\\\x00-\\x1F]&#039;, &#039;g&#039;);
Sys.Serialization.JavaScriptSerializer._jsonRegEx = new RegExp(&#039;[^,:{}\\[\\]0-9.\\-+Eaeflnr-u \\n\\r\\t]&#039;, &#039;g&#039;);
Sys.Serialization.JavaScriptSerializer._jsonStringRegEx = new RegExp(&#039;&quot;(\\\\.|[^&quot;\\\\])*&quot;&#039;, &#039;g&#039;);
Sys.Serialization.JavaScriptSerializer._serverTypeFieldName = &#039;__type&#039;;
Sys.Serialization.JavaScriptSerializer._init = function Sys$Serialization$JavaScriptSerializer$_init() {
    var replaceChars = [&#039;\\u0000&#039;,&#039;\\u0001&#039;,&#039;\\u0002&#039;,&#039;\\u0003&#039;,&#039;\\u0004&#039;,&#039;\\u0005&#039;,&#039;\\u0006&#039;,&#039;\\u0007&#039;,
                        &#039;\\b&#039;,&#039;\\t&#039;,&#039;\\n&#039;,&#039;\\u000b&#039;,&#039;\\f&#039;,&#039;\\r&#039;,&#039;\\u000e&#039;,&#039;\\u000f&#039;,&#039;\\u0010&#039;,&#039;\\u0011&#039;,
                        &#039;\\u0012&#039;,&#039;\\u0013&#039;,&#039;\\u0014&#039;,&#039;\\u0015&#039;,&#039;\\u0016&#039;,&#039;\\u0017&#039;,&#039;\\u0018&#039;,&#039;\\u0019&#039;,
                        &#039;\\u001a&#039;,&#039;\\u001b&#039;,&#039;\\u001c&#039;,&#039;\\u001d&#039;,&#039;\\u001e&#039;,&#039;\\u001f&#039;];
    Sys.Serialization.JavaScriptSerializer._charsToEscape[0] = &#039;\\&#039;;
    Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs[&#039;\\&#039;] = new RegExp(&#039;\\\\&#039;, &#039;g&#039;);
    Sys.Serialization.JavaScriptSerializer._escapeChars[&#039;\\&#039;] = &#039;\\\\&#039;;
    Sys.Serialization.JavaScriptSerializer._charsToEscape[1] = &#039;&quot;&#039;;
    Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs[&#039;&quot;&#039;] = new RegExp(&#039;&quot;&#039;, &#039;g&#039;);
    Sys.Serialization.JavaScriptSerializer._escapeChars[&#039;&quot;&#039;] = &#039;\\&quot;&#039;;
    for (var i = 0; i &lt; 32; i++) {
        var c = String.fromCharCode(i);
        Sys.Serialization.JavaScriptSerializer._charsToEscape[i+2] = c;
        Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs[c] = new RegExp(c, &#039;g&#039;);
        Sys.Serialization.JavaScriptSerializer._escapeChars[c] = replaceChars[i];
    }
}
Sys.Serialization.JavaScriptSerializer._serializeBooleanWithBuilder = function Sys$Serialization$JavaScriptSerializer$_serializeBooleanWithBuilder(object, stringBuilder) {
    stringBuilder.append(object.toString());
}
Sys.Serialization.JavaScriptSerializer._serializeNumberWithBuilder = function Sys$Serialization$JavaScriptSerializer$_serializeNumberWithBuilder(object, stringBuilder) {
    if (isFinite(object)) {
        stringBuilder.append(String(object));
    }
    else {
        throw Error.invalidOperation(Sys.Res.cannotSerializeNonFiniteNumbers);
    }
}
Sys.Serialization.JavaScriptSerializer._serializeStringWithBuilder = function Sys$Serialization$JavaScriptSerializer$_serializeStringWithBuilder(string, stringBuilder) {
    stringBuilder.append(&#039;&quot;&#039;);
    if (Sys.Serialization.JavaScriptSerializer._escapeRegEx.test(string)) {
        if (Sys.Serialization.JavaScriptSerializer._charsToEscape.length === 0) {
            Sys.Serialization.JavaScriptSerializer._init();
        }
        if (string.length &lt; 128) {
            string = string.replace(Sys.Serialization.JavaScriptSerializer._escapeRegExGlobal,
                function(x) { return Sys.Serialization.JavaScriptSerializer._escapeChars[x]; });
        }
        else {
            for (var i = 0; i &lt; 34; i++) {
                var c = Sys.Serialization.JavaScriptSerializer._charsToEscape[i];
                if (string.indexOf(c) !== -1) {
                    if (Sys.Browser.agent === Sys.Browser.Opera || Sys.Browser.agent === Sys.Browser.FireFox) {
                        string = string.split(c).join(Sys.Serialization.JavaScriptSerializer._escapeChars[c]);
                    }
                    else {
                        string = string.replace(Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs[c],
                            Sys.Serialization.JavaScriptSerializer._escapeChars[c]);
                    }
                }
            }
       }
    }
    stringBuilder.append(string);
    stringBuilder.append(&#039;&quot;&#039;);
}
Sys.Serialization.JavaScriptSerializer._serializeWithBuilder = function Sys$Serialization$JavaScriptSerializer$_serializeWithBuilder(object, stringBuilder, sort, prevObjects) {
    var i;
    switch (typeof object) {
    case &#039;object&#039;:
        if (object) {
            if (prevObjects){
                for( var j = 0; j &lt; prevObjects.length; j++) {
                    if (prevObjects[j] === object) {
                        throw Error.invalidOperation(Sys.Res.cannotSerializeObjectWithCycle);
                    }
                }
            }
            else {
                prevObjects = new Array();
            }
            try {
                Array.add(prevObjects, object);
                
                if (Number.isInstanceOfType(object)){
                    Sys.Serialization.JavaScriptSerializer._serializeNumberWithBuilder(object, stringBuilder);
                }
                else if (Boolean.isInstanceOfType(object)){
                    Sys.Serialization.JavaScriptSerializer._serializeBooleanWithBuilder(object, stringBuilder);
                }
                else if (String.isInstanceOfType(object)){
                    Sys.Serialization.JavaScriptSerializer._serializeStringWithBuilder(object, stringBuilder);
                }
            
                else if (Array.isInstanceOfType(object)) {
                    stringBuilder.append(&#039;[&#039;);
                   
                    for (i = 0; i &lt; object.length; ++i) {
                        if (i &gt; 0) {
                            stringBuilder.append(&#039;,&#039;);
                        }
                        Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(object[i], stringBuilder,false,prevObjects);
                    }
                    stringBuilder.append(&#039;]&#039;);
                }
                else {
                    if (Date.isInstanceOfType(object)) {
                        stringBuilder.append(&#039;&quot;\\/Date(&#039;);
                        stringBuilder.append(object.getTime());
                        stringBuilder.append(&#039;)\\/&quot;&#039;);
                        break;
                    }
                    var properties = [];
                    var propertyCount = 0;
                    for (var name in object) {
                        if (name.startsWith(&#039;$&#039;)) {
                            continue;
                        }
                        if (name === Sys.Serialization.JavaScriptSerializer._serverTypeFieldName &amp;&amp; propertyCount !== 0){
                            properties[propertyCount++] = properties[0];
                            properties[0] = name;
                        }
                        else{
                            properties[propertyCount++] = name;
                        }
                    }
                    if (sort) properties.sort();
                    stringBuilder.append(&#039;{&#039;);
                    var needComma = false;
                     
                    for (i=0; i&lt;propertyCount; i++) {
                        var value = object[properties[i]];
                        if (typeof value !== &#039;undefined&#039; &amp;&amp; typeof value !== &#039;function&#039;) {
                            if (needComma) {
                                stringBuilder.append(&#039;,&#039;);
                            }
                            else {
                                needComma = true;
                            }
                           
                            Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(properties[i], stringBuilder, sort, prevObjects);
                            stringBuilder.append(&#039;:&#039;);
                            Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(value, stringBuilder, sort, prevObjects);
                          
                        }
                    }
                stringBuilder.append(&#039;}&#039;);
                }
            }
            finally {
                Array.removeAt(prevObjects, prevObjects.length - 1);
            }
        }
        else {
            stringBuilder.append(&#039;null&#039;);
        }
        break;
    case &#039;number&#039;:
        Sys.Serialization.JavaScriptSerializer._serializeNumberWithBuilder(object, stringBuilder);
        break;
    case &#039;string&#039;:
        Sys.Serialization.JavaScriptSerializer._serializeStringWithBuilder(object, stringBuilder);
        break;
    case &#039;boolean&#039;:
        Sys.Serialization.JavaScriptSerializer._serializeBooleanWithBuilder(object, stringBuilder);
        break;
    default:
        stringBuilder.append(&#039;null&#039;);
        break;
    }
}
Sys.Serialization.JavaScriptSerializer.serialize = function Sys$Serialization$JavaScriptSerializer$serialize(object) {
    /// &lt;summary locid=&quot;M:J#Sys.Serialization.JavaScriptSerializer.serialize&quot; /&gt;
    /// &lt;param name=&quot;object&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;String&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;object&quot;, mayBeNull: true}
    ]);
    if (e) throw e;
    var stringBuilder = new Sys.StringBuilder();
    Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(object, stringBuilder, false);
    return stringBuilder.toString();
}
Sys.Serialization.JavaScriptSerializer.deserialize = function Sys$Serialization$JavaScriptSerializer$deserialize(data, secure) {
    /// &lt;summary locid=&quot;M:J#Sys.Serialization.JavaScriptSerializer.deserialize&quot; /&gt;
    /// &lt;param name=&quot;data&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;secure&quot; type=&quot;Boolean&quot; optional=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;data&quot;, type: String},
        {name: &quot;secure&quot;, type: Boolean, optional: true}
    ]);
    if (e) throw e;
    
    if (data.length === 0) throw Error.argument(&#039;data&#039;, Sys.Res.cannotDeserializeEmptyString);
    try {    
        var exp = data.replace(Sys.Serialization.JavaScriptSerializer._dateRegEx, &quot;$1new Date($2)&quot;);
        
        if (secure &amp;&amp; Sys.Serialization.JavaScriptSerializer._jsonRegEx.test(
             exp.replace(Sys.Serialization.JavaScriptSerializer._jsonStringRegEx, &#039;&#039;))) throw null;
        return eval(&#039;(&#039; + exp + &#039;)&#039;);
    }
    catch (e) {
         throw Error.argument(&#039;data&#039;, Sys.Res.cannotDeserializeInvalidJson);
    }
}
Type.registerNamespace(&#039;Sys.UI&#039;);
 
Sys.EventHandlerList = function Sys$EventHandlerList() {
    /// &lt;summary locid=&quot;M:J#Sys.EventHandlerList.#ctor&quot; /&gt;
    if (arguments.length !== 0) throw Error.parameterCount();
    this._list = {};
}
    function Sys$EventHandlerList$_addHandler(id, handler) {
        Array.add(this._getEvent(id, true), handler);
    }
    function Sys$EventHandlerList$addHandler(id, handler) {
        /// &lt;summary locid=&quot;M:J#Sys.EventHandlerList.addHandler&quot; /&gt;
        /// &lt;param name=&quot;id&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;handler&quot; type=&quot;Function&quot;&gt;&lt;/param&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;id&quot;, type: String},
            {name: &quot;handler&quot;, type: Function}
        ]);
        if (e) throw e;
        this._addHandler(id, handler);
    }
    function Sys$EventHandlerList$_removeHandler(id, handler) {
        var evt = this._getEvent(id);
        if (!evt) return;
        Array.remove(evt, handler);
    }
    function Sys$EventHandlerList$removeHandler(id, handler) {
        /// &lt;summary locid=&quot;M:J#Sys.EventHandlerList.removeHandler&quot; /&gt;
        /// &lt;param name=&quot;id&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;handler&quot; type=&quot;Function&quot;&gt;&lt;/param&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;id&quot;, type: String},
            {name: &quot;handler&quot;, type: Function}
        ]);
        if (e) throw e;
        this._removeHandler(id, handler);
    }
    function Sys$EventHandlerList$getHandler(id) {
        /// &lt;summary locid=&quot;M:J#Sys.EventHandlerList.getHandler&quot; /&gt;
        /// &lt;param name=&quot;id&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
        /// &lt;returns type=&quot;Function&quot;&gt;&lt;/returns&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;id&quot;, type: String}
        ]);
        if (e) throw e;
        var evt = this._getEvent(id);
        if (!evt || (evt.length === 0)) return null;
        evt = Array.clone(evt);
        return function(source, args) {
            for (var i = 0, l = evt.length; i &lt; l; i++) {
                evt[i](source, args);
            }
        };
    }
    function Sys$EventHandlerList$_getEvent(id, create) {
        if (!this._list[id]) {
            if (!create) return null;
            this._list[id] = [];
        }
        return this._list[id];
    }
Sys.EventHandlerList.prototype = {
    _addHandler: Sys$EventHandlerList$_addHandler,
    addHandler: Sys$EventHandlerList$addHandler,
    _removeHandler: Sys$EventHandlerList$_removeHandler,
    removeHandler: Sys$EventHandlerList$removeHandler,
    getHandler: Sys$EventHandlerList$getHandler,
    _getEvent: Sys$EventHandlerList$_getEvent
}
Sys.EventHandlerList.registerClass(&#039;Sys.EventHandlerList&#039;);
Sys.CommandEventArgs = function Sys$CommandEventArgs(commandName, commandArgument, commandSource) {
    /// &lt;summary locid=&quot;M:J#Sys.CommandEventArgs.#ctor&quot; /&gt;
    /// &lt;param name=&quot;commandName&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;commandArgument&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;commandSource&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;commandName&quot;, type: String},
        {name: &quot;commandArgument&quot;, mayBeNull: true},
        {name: &quot;commandSource&quot;, mayBeNull: true}
    ]);
    if (e) throw e;
    Sys.CommandEventArgs.initializeBase(this);
    this._commandName = commandName;
    this._commandArgument = commandArgument;
    this._commandSource = commandSource;
}
    function Sys$CommandEventArgs$get_commandName() {
        /// &lt;value type=&quot;String&quot; locid=&quot;P:J#Sys.CommandEventArgs.commandName&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._commandName;
    }
    function Sys$CommandEventArgs$get_commandArgument() {
        /// &lt;value mayBeNull=&quot;true&quot; locid=&quot;P:J#Sys.CommandEventArgs.commandArgument&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._commandArgument;
    }
    function Sys$CommandEventArgs$get_commandSource() {
        /// &lt;value mayBeNull=&quot;true&quot; locid=&quot;P:J#Sys.CommandEventArgs.commandSource&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._commandSource;
    }
Sys.CommandEventArgs.prototype = {
    _commandName: null,
    _commandArgument: null,
    _commandSource: null,
    get_commandName: Sys$CommandEventArgs$get_commandName,
    get_commandArgument: Sys$CommandEventArgs$get_commandArgument,
    get_commandSource: Sys$CommandEventArgs$get_commandSource
}
Sys.CommandEventArgs.registerClass(&quot;Sys.CommandEventArgs&quot;, Sys.CancelEventArgs);
 
Sys.INotifyPropertyChange = function Sys$INotifyPropertyChange() {
    /// &lt;summary locid=&quot;M:J#Sys.INotifyPropertyChange.#ctor&quot; /&gt;
    if (arguments.length !== 0) throw Error.parameterCount();
    throw Error.notImplemented();
}
    function Sys$INotifyPropertyChange$add_propertyChanged(handler) {
    /// &lt;summary locid=&quot;E:J#Sys.INotifyPropertyChange.propertyChanged&quot; /&gt;
    var e = Function._validateParams(arguments, [{name: &quot;handler&quot;, type: Function}]);
    if (e) throw e;
        throw Error.notImplemented();
    }
    function Sys$INotifyPropertyChange$remove_propertyChanged(handler) {
    var e = Function._validateParams(arguments, [{name: &quot;handler&quot;, type: Function}]);
    if (e) throw e;
        throw Error.notImplemented();
    }
Sys.INotifyPropertyChange.prototype = {
    add_propertyChanged: Sys$INotifyPropertyChange$add_propertyChanged,
    remove_propertyChanged: Sys$INotifyPropertyChange$remove_propertyChanged
}
Sys.INotifyPropertyChange.registerInterface(&#039;Sys.INotifyPropertyChange&#039;);
 
Sys.PropertyChangedEventArgs = function Sys$PropertyChangedEventArgs(propertyName) {
    /// &lt;summary locid=&quot;M:J#Sys.PropertyChangedEventArgs.#ctor&quot; /&gt;
    /// &lt;param name=&quot;propertyName&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;propertyName&quot;, type: String}
    ]);
    if (e) throw e;
    Sys.PropertyChangedEventArgs.initializeBase(this);
    this._propertyName = propertyName;
}
 
    function Sys$PropertyChangedEventArgs$get_propertyName() {
        /// &lt;value type=&quot;String&quot; locid=&quot;P:J#Sys.PropertyChangedEventArgs.propertyName&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._propertyName;
    }
Sys.PropertyChangedEventArgs.prototype = {
    get_propertyName: Sys$PropertyChangedEventArgs$get_propertyName
}
Sys.PropertyChangedEventArgs.registerClass(&#039;Sys.PropertyChangedEventArgs&#039;, Sys.EventArgs);
 
Sys.INotifyDisposing = function Sys$INotifyDisposing() {
    /// &lt;summary locid=&quot;M:J#Sys.INotifyDisposing.#ctor&quot; /&gt;
    if (arguments.length !== 0) throw Error.parameterCount();
    throw Error.notImplemented();
}
    function Sys$INotifyDisposing$add_disposing(handler) {
    /// &lt;summary locid=&quot;E:J#Sys.INotifyDisposing.disposing&quot; /&gt;
    var e = Function._validateParams(arguments, [{name: &quot;handler&quot;, type: Function}]);
    if (e) throw e;
        throw Error.notImplemented();
    }
    function Sys$INotifyDisposing$remove_disposing(handler) {
    var e = Function._validateParams(arguments, [{name: &quot;handler&quot;, type: Function}]);
    if (e) throw e;
        throw Error.notImplemented();
    }
Sys.INotifyDisposing.prototype = {
    add_disposing: Sys$INotifyDisposing$add_disposing,
    remove_disposing: Sys$INotifyDisposing$remove_disposing
}
Sys.INotifyDisposing.registerInterface(&quot;Sys.INotifyDisposing&quot;);
 
Sys.Component = function Sys$Component() {
    /// &lt;summary locid=&quot;M:J#Sys.Component.#ctor&quot; /&gt;
    if (arguments.length !== 0) throw Error.parameterCount();
    if (Sys.Application) Sys.Application.registerDisposableObject(this);
}
    function Sys$Component$get_events() {
        /// &lt;value type=&quot;Sys.EventHandlerList&quot; locid=&quot;P:J#Sys.Component.events&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        if (!this._events) {
            this._events = new Sys.EventHandlerList();
        }
        return this._events;
    }
    function Sys$Component$get_id() {
        /// &lt;value type=&quot;String&quot; locid=&quot;P:J#Sys.Component.id&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._id;
    }
    function Sys$Component$set_id(value) {
        var e = Function._validateParams(arguments, [{name: &quot;value&quot;, type: String}]);
        if (e) throw e;
        if (this._idSet) throw Error.invalidOperation(Sys.Res.componentCantSetIdTwice);
        this._idSet = true;
        var oldId = this.get_id();
        if (oldId &amp;&amp; Sys.Application.findComponent(oldId)) throw Error.invalidOperation(Sys.Res.componentCantSetIdAfterAddedToApp);
        this._id = value;
    }
    function Sys$Component$get_isInitialized() {
        /// &lt;value type=&quot;Boolean&quot; locid=&quot;P:J#Sys.Component.isInitialized&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._initialized;
    }
    function Sys$Component$get_isUpdating() {
        /// &lt;value type=&quot;Boolean&quot; locid=&quot;P:J#Sys.Component.isUpdating&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._updating;
    }
    function Sys$Component$add_disposing(handler) {
        /// &lt;summary locid=&quot;E:J#Sys.Component.disposing&quot; /&gt;
        var e = Function._validateParams(arguments, [{name: &quot;handler&quot;, type: Function}]);
        if (e) throw e;
        this.get_events().addHandler(&quot;disposing&quot;, handler);
    }
    function Sys$Component$remove_disposing(handler) {
        var e = Function._validateParams(arguments, [{name: &quot;handler&quot;, type: Function}]);
        if (e) throw e;
        this.get_events().removeHandler(&quot;disposing&quot;, handler);
    }
    function Sys$Component$add_propertyChanged(handler) {
        /// &lt;summary locid=&quot;E:J#Sys.Component.propertyChanged&quot; /&gt;
        var e = Function._validateParams(arguments, [{name: &quot;handler&quot;, type: Function}]);
        if (e) throw e;
        this.get_events().addHandler(&quot;propertyChanged&quot;, handler);
    }
    function Sys$Component$remove_propertyChanged(handler) {
        var e = Function._validateParams(arguments, [{name: &quot;handler&quot;, type: Function}]);
        if (e) throw e;
        this.get_events().removeHandler(&quot;propertyChanged&quot;, handler);
    }
    function Sys$Component$beginUpdate() {
        this._updating = true;
    }
    function Sys$Component$dispose() {
        if (this._events) {
            var handler = this._events.getHandler(&quot;disposing&quot;);
            if (handler) {
                handler(this, Sys.EventArgs.Empty);
            }
        }
        delete this._events;
        Sys.Application.unregisterDisposableObject(this);
        Sys.Application.removeComponent(this);
    }
    function Sys$Component$endUpdate() {
        this._updating = false;
        if (!this._initialized) this.initialize();
        this.updated();
    }
    function Sys$Component$initialize() {
        this._initialized = true;
    }
    function Sys$Component$raisePropertyChanged(propertyName) {
        /// &lt;summary locid=&quot;M:J#Sys.Component.raisePropertyChanged&quot; /&gt;
        /// &lt;param name=&quot;propertyName&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;propertyName&quot;, type: String}
        ]);
        if (e) throw e;
        if (!this._events) return;
        var handler = this._events.getHandler(&quot;propertyChanged&quot;);
        if (handler) {
            handler(this, new Sys.PropertyChangedEventArgs(propertyName));
        }
    }
    function Sys$Component$updated() {
    }
Sys.Component.prototype = {
    _id: null,
    _idSet: false,
    _initialized: false,
    _updating: false,
    get_events: Sys$Component$get_events,
    get_id: Sys$Component$get_id,
    set_id: Sys$Component$set_id,
    get_isInitialized: Sys$Component$get_isInitialized,
    get_isUpdating: Sys$Component$get_isUpdating,
    add_disposing: Sys$Component$add_disposing,
    remove_disposing: Sys$Component$remove_disposing,
    add_propertyChanged: Sys$Component$add_propertyChanged,
    remove_propertyChanged: Sys$Component$remove_propertyChanged,
    beginUpdate: Sys$Component$beginUpdate,
    dispose: Sys$Component$dispose,
    endUpdate: Sys$Component$endUpdate,
    initialize: Sys$Component$initialize,
    raisePropertyChanged: Sys$Component$raisePropertyChanged,
    updated: Sys$Component$updated
}
Sys.Component.registerClass(&#039;Sys.Component&#039;, null, Sys.IDisposable, Sys.INotifyPropertyChange, Sys.INotifyDisposing);
function Sys$Component$_setProperties(target, properties) {
    /// &lt;summary locid=&quot;M:J#Sys.Component._setProperties&quot; /&gt;
    /// &lt;param name=&quot;target&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;properties&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;target&quot;},
        {name: &quot;properties&quot;}
    ]);
    if (e) throw e;
    var current;
    var targetType = Object.getType(target);
    var isObject = (targetType === Object) || (targetType === Sys.UI.DomElement);
    var isComponent = Sys.Component.isInstanceOfType(target) &amp;&amp; !target.get_isUpdating();
    if (isComponent) target.beginUpdate();
    for (var name in properties) {
        var val = properties[name];
        var getter = isObject ? null : target[&quot;get_&quot; + name];
        if (isObject || typeof(getter) !== &#039;function&#039;) {
            var targetVal = target[name];
            if (!isObject &amp;&amp; typeof(targetVal) === &#039;undefined&#039;) throw Error.invalidOperation(String.format(Sys.Res.propertyUndefined, name));
            if (!val || (typeof(val) !== &#039;object&#039;) || (isObject &amp;&amp; !targetVal)) {
                target[name] = val;
            }
            else {
                Sys$Component$_setProperties(targetVal, val);
            }
        }
        else {
            var setter = target[&quot;set_&quot; + name];
            if (typeof(setter) === &#039;function&#039;) {
                setter.apply(target, [val]);
            }
            else if (val instanceof Array) {
                current = getter.apply(target);
                if (!(current instanceof Array)) throw new Error.invalidOperation(String.format(Sys.Res.propertyNotAnArray, name));
                for (var i = 0, j = current.length, l= val.length; i &lt; l; i++, j++) {
                    current[j] = val[i];
                }
            }
            else if ((typeof(val) === &#039;object&#039;) &amp;&amp; (Object.getType(val) === Object)) {
                current = getter.apply(target);
                if ((typeof(current) === &#039;undefined&#039;) || (current === null)) throw new Error.invalidOperation(String.format(Sys.Res.propertyNullOrUndefined, name));
                Sys$Component$_setProperties(current, val);
            }
            else {
                throw new Error.invalidOperation(String.format(Sys.Res.propertyNotWritable, name));
            }
        }
    }
    if (isComponent) target.endUpdate();
}
function Sys$Component$_setReferences(component, references) {
    for (var name in references) {
        var setter = component[&quot;set_&quot; + name];
        var reference = $find(references[name]);
        if (typeof(setter) !== &#039;function&#039;) throw new Error.invalidOperation(String.format(Sys.Res.propertyNotWritable, name));
        if (!reference) throw Error.invalidOperation(String.format(Sys.Res.referenceNotFound, references[name]));
        setter.apply(component, [reference]);
    }
}
var $create = Sys.Component.create = function Sys$Component$create(type, properties, events, references, element) {
    /// &lt;summary locid=&quot;M:J#Sys.Component.create&quot; /&gt;
    /// &lt;param name=&quot;type&quot; type=&quot;Type&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;properties&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;events&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;references&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;element&quot; domElement=&quot;true&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Sys.UI.Component&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;type&quot;, type: Type},
        {name: &quot;properties&quot;, mayBeNull: true, optional: true},
        {name: &quot;events&quot;, mayBeNull: true, optional: true},
        {name: &quot;references&quot;, mayBeNull: true, optional: true},
        {name: &quot;element&quot;, mayBeNull: true, domElement: true, optional: true}
    ]);
    if (e) throw e;
    if (!type.inheritsFrom(Sys.Component)) {
        throw Error.argument(&#039;type&#039;, String.format(Sys.Res.createNotComponent, type.getName()));
    }
    if (type.inheritsFrom(Sys.UI.Behavior) || type.inheritsFrom(Sys.UI.Control)) {
        if (!element) throw Error.argument(&#039;element&#039;, Sys.Res.createNoDom);
    }
    else if (element) throw Error.argument(&#039;element&#039;, Sys.Res.createComponentOnDom);
    var component = (element ? new type(element): new type());
    var app = Sys.Application;
    var creatingComponents = app.get_isCreatingComponents();
    component.beginUpdate();
    if (properties) {
        Sys$Component$_setProperties(component, properties);
    }
    if (events) {
        for (var name in events) {
            if (!(component[&quot;add_&quot; + name] instanceof Function)) throw new Error.invalidOperation(String.format(Sys.Res.undefinedEvent, name));
            if (!(events[name] instanceof Function)) throw new Error.invalidOperation(Sys.Res.eventHandlerNotFunction);
            component[&quot;add_&quot; + name](events[name]);
        }
    }
    if (component.get_id()) {
        app.addComponent(component);
    }
    if (creatingComponents) {
        app._createdComponents[app._createdComponents.length] = component;
        if (references) {
            app._addComponentToSecondPass(component, references);
        }
        else {
            component.endUpdate();
        }
    }
    else {
        if (references) {
            Sys$Component$_setReferences(component, references);
        }
        component.endUpdate();
    }
    return component;
}
 
Sys.UI.MouseButton = function Sys$UI$MouseButton() {
    /// &lt;summary locid=&quot;M:J#Sys.UI.MouseButton.#ctor&quot; /&gt;
    /// &lt;field name=&quot;leftButton&quot; type=&quot;Number&quot; integer=&quot;true&quot; static=&quot;true&quot; locid=&quot;F:J#Sys.UI.MouseButton.leftButton&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;middleButton&quot; type=&quot;Number&quot; integer=&quot;true&quot; static=&quot;true&quot; locid=&quot;F:J#Sys.UI.MouseButton.middleButton&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;rightButton&quot; type=&quot;Number&quot; integer=&quot;true&quot; static=&quot;true&quot; locid=&quot;F:J#Sys.UI.MouseButton.rightButton&quot;&gt;&lt;/field&gt;
    if (arguments.length !== 0) throw Error.parameterCount();
    throw Error.notImplemented();
}
Sys.UI.MouseButton.prototype = {
    leftButton: 0,
    middleButton: 1,
    rightButton: 2
}
Sys.UI.MouseButton.registerEnum(&quot;Sys.UI.MouseButton&quot;);
 
Sys.UI.Key = function Sys$UI$Key() {
    /// &lt;summary locid=&quot;M:J#Sys.UI.Key.#ctor&quot; /&gt;
    /// &lt;field name=&quot;backspace&quot; type=&quot;Number&quot; integer=&quot;true&quot; static=&quot;true&quot; locid=&quot;F:J#Sys.UI.Key.backspace&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;tab&quot; type=&quot;Number&quot; integer=&quot;true&quot; static=&quot;true&quot; locid=&quot;F:J#Sys.UI.Key.tab&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;enter&quot; type=&quot;Number&quot; integer=&quot;true&quot; static=&quot;true&quot; locid=&quot;F:J#Sys.UI.Key.enter&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;esc&quot; type=&quot;Number&quot; integer=&quot;true&quot; static=&quot;true&quot; locid=&quot;F:J#Sys.UI.Key.esc&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;space&quot; type=&quot;Number&quot; integer=&quot;true&quot; static=&quot;true&quot; locid=&quot;F:J#Sys.UI.Key.space&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;pageUp&quot; type=&quot;Number&quot; integer=&quot;true&quot; static=&quot;true&quot; locid=&quot;F:J#Sys.UI.Key.pageUp&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;pageDown&quot; type=&quot;Number&quot; integer=&quot;true&quot; static=&quot;true&quot; locid=&quot;F:J#Sys.UI.Key.pageDown&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;end&quot; type=&quot;Number&quot; integer=&quot;true&quot; static=&quot;true&quot; locid=&quot;F:J#Sys.UI.Key.end&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;home&quot; type=&quot;Number&quot; integer=&quot;true&quot; static=&quot;true&quot; locid=&quot;F:J#Sys.UI.Key.home&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;left&quot; type=&quot;Number&quot; integer=&quot;true&quot; static=&quot;true&quot; locid=&quot;F:J#Sys.UI.Key.left&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;up&quot; type=&quot;Number&quot; integer=&quot;true&quot; static=&quot;true&quot; locid=&quot;F:J#Sys.UI.Key.up&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;right&quot; type=&quot;Number&quot; integer=&quot;true&quot; static=&quot;true&quot; locid=&quot;F:J#Sys.UI.Key.right&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;down&quot; type=&quot;Number&quot; integer=&quot;true&quot; static=&quot;true&quot; locid=&quot;F:J#Sys.UI.Key.down&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;del&quot; type=&quot;Number&quot; integer=&quot;true&quot; static=&quot;true&quot; locid=&quot;F:J#Sys.UI.Key.del&quot;&gt;&lt;/field&gt;
    if (arguments.length !== 0) throw Error.parameterCount();
    throw Error.notImplemented();
}
Sys.UI.Key.prototype = {
    backspace: 8,
    tab: 9,
    enter: 13,
    esc: 27,
    space: 32,
    pageUp: 33,
    pageDown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    del: 127
}
Sys.UI.Key.registerEnum(&quot;Sys.UI.Key&quot;);
 
Sys.UI.Point = function Sys$UI$Point(x, y) {
    /// &lt;summary locid=&quot;M:J#Sys.UI.Point.#ctor&quot; /&gt;
    /// &lt;param name=&quot;x&quot; type=&quot;Number&quot; integer=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;y&quot; type=&quot;Number&quot; integer=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;field name=&quot;x&quot; type=&quot;Number&quot; integer=&quot;true&quot; locid=&quot;F:J#Sys.UI.Point.x&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;y&quot; type=&quot;Number&quot; integer=&quot;true&quot; locid=&quot;F:J#Sys.UI.Point.y&quot;&gt;&lt;/field&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;x&quot;, type: Number, integer: true},
        {name: &quot;y&quot;, type: Number, integer: true}
    ]);
    if (e) throw e;
    this.x = x;
    this.y = y;
}
Sys.UI.Point.registerClass(&#039;Sys.UI.Point&#039;);
 
Sys.UI.Bounds = function Sys$UI$Bounds(x, y, width, height) {
    /// &lt;summary locid=&quot;M:J#Sys.UI.Bounds.#ctor&quot; /&gt;
    /// &lt;param name=&quot;x&quot; type=&quot;Number&quot; integer=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;y&quot; type=&quot;Number&quot; integer=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;width&quot; type=&quot;Number&quot; integer=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;height&quot; type=&quot;Number&quot; integer=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;field name=&quot;x&quot; type=&quot;Number&quot; integer=&quot;true&quot; locid=&quot;F:J#Sys.UI.Bounds.x&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;y&quot; type=&quot;Number&quot; integer=&quot;true&quot; locid=&quot;F:J#Sys.UI.Bounds.y&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;width&quot; type=&quot;Number&quot; integer=&quot;true&quot; locid=&quot;F:J#Sys.UI.Bounds.width&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;height&quot; type=&quot;Number&quot; integer=&quot;true&quot; locid=&quot;F:J#Sys.UI.Bounds.height&quot;&gt;&lt;/field&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;x&quot;, type: Number, integer: true},
        {name: &quot;y&quot;, type: Number, integer: true},
        {name: &quot;width&quot;, type: Number, integer: true},
        {name: &quot;height&quot;, type: Number, integer: true}
    ]);
    if (e) throw e;
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
}
Sys.UI.Bounds.registerClass(&#039;Sys.UI.Bounds&#039;);
 
Sys.UI.DomEvent = function Sys$UI$DomEvent(eventObject) {
    /// &lt;summary locid=&quot;M:J#Sys.UI.DomEvent.#ctor&quot; /&gt;
    /// &lt;param name=&quot;eventObject&quot;&gt;&lt;/param&gt;
    /// &lt;field name=&quot;altKey&quot; type=&quot;Boolean&quot; locid=&quot;F:J#Sys.UI.DomEvent.altKey&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;button&quot; type=&quot;Sys.UI.MouseButton&quot; locid=&quot;F:J#Sys.UI.DomEvent.button&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;charCode&quot; type=&quot;Number&quot; integer=&quot;true&quot; locid=&quot;F:J#Sys.UI.DomEvent.charCode&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;clientX&quot; type=&quot;Number&quot; integer=&quot;true&quot; locid=&quot;F:J#Sys.UI.DomEvent.clientX&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;clientY&quot; type=&quot;Number&quot; integer=&quot;true&quot; locid=&quot;F:J#Sys.UI.DomEvent.clientY&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;ctrlKey&quot; type=&quot;Boolean&quot; locid=&quot;F:J#Sys.UI.DomEvent.ctrlKey&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;keyCode&quot; type=&quot;Number&quot; integer=&quot;true&quot; locid=&quot;F:J#Sys.UI.DomEvent.keyCode&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;offsetX&quot; type=&quot;Number&quot; integer=&quot;true&quot; locid=&quot;F:J#Sys.UI.DomEvent.offsetX&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;offsetY&quot; type=&quot;Number&quot; integer=&quot;true&quot; locid=&quot;F:J#Sys.UI.DomEvent.offsetY&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;screenX&quot; type=&quot;Number&quot; integer=&quot;true&quot; locid=&quot;F:J#Sys.UI.DomEvent.screenX&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;screenY&quot; type=&quot;Number&quot; integer=&quot;true&quot; locid=&quot;F:J#Sys.UI.DomEvent.screenY&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;shiftKey&quot; type=&quot;Boolean&quot; locid=&quot;F:J#Sys.UI.DomEvent.shiftKey&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;target&quot; locid=&quot;F:J#Sys.UI.DomEvent.target&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;type&quot; type=&quot;String&quot; locid=&quot;F:J#Sys.UI.DomEvent.type&quot;&gt;&lt;/field&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;eventObject&quot;}
    ]);
    if (e) throw e;
    var ev = eventObject;
    var etype = this.type = ev.type.toLowerCase();
    this.rawEvent = ev;
    this.altKey = ev.altKey;
    if (typeof(ev.button) !== &#039;undefined&#039;) {
        this.button = (typeof(ev.which) !== &#039;undefined&#039;) ? ev.button :
            (ev.button === 4) ? Sys.UI.MouseButton.middleButton :
            (ev.button === 2) ? Sys.UI.MouseButton.rightButton :
            Sys.UI.MouseButton.leftButton;
    }
    if (etype === &#039;keypress&#039;) {
        this.charCode = ev.charCode || ev.keyCode;
    }
    else if (ev.keyCode &amp;&amp; (ev.keyCode === 46)) {
        this.keyCode = 127;
    }
    else {
        this.keyCode = ev.keyCode;
    }
    this.clientX = ev.clientX;
    this.clientY = ev.clientY;
    this.ctrlKey = ev.ctrlKey;
    this.target = ev.target ? ev.target : ev.srcElement;
    if (!etype.startsWith(&#039;key&#039;)) {
        if ((typeof(ev.offsetX) !== &#039;undefined&#039;) &amp;&amp; (typeof(ev.offsetY) !== &#039;undefined&#039;)) {
            this.offsetX = ev.offsetX;
            this.offsetY = ev.offsetY;
        }
        else if (this.target &amp;&amp; (this.target.nodeType !== 3) &amp;&amp; (typeof(ev.clientX) === &#039;number&#039;)) {
            var loc = Sys.UI.DomElement.getLocation(this.target);
            var w = Sys.UI.DomElement._getWindow(this.target);
            this.offsetX = (w.pageXOffset || 0) + ev.clientX - loc.x;
            this.offsetY = (w.pageYOffset || 0) + ev.clientY - loc.y;
        }
    }
    this.screenX = ev.screenX;
    this.screenY = ev.screenY;
    this.shiftKey = ev.shiftKey;
}
    function Sys$UI$DomEvent$preventDefault() {
        /// &lt;summary locid=&quot;M:J#Sys.UI.DomEvent.preventDefault&quot; /&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        if (this.rawEvent.preventDefault) {
            this.rawEvent.preventDefault();
        }
        else if (window.event) {
            this.rawEvent.returnValue = false;
        }
    }
    function Sys$UI$DomEvent$stopPropagation() {
        /// &lt;summary locid=&quot;M:J#Sys.UI.DomEvent.stopPropagation&quot; /&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        if (this.rawEvent.stopPropagation) {
            this.rawEvent.stopPropagation();
        }
        else if (window.event) {
            this.rawEvent.cancelBubble = true;
        }
    }
Sys.UI.DomEvent.prototype = {
    preventDefault: Sys$UI$DomEvent$preventDefault,
    stopPropagation: Sys$UI$DomEvent$stopPropagation
}
Sys.UI.DomEvent.registerClass(&#039;Sys.UI.DomEvent&#039;);
var $addHandler = Sys.UI.DomEvent.addHandler = function Sys$UI$DomEvent$addHandler(element, eventName, handler, autoRemove) {
    /// &lt;summary locid=&quot;M:J#Sys.UI.DomEvent.addHandler&quot; /&gt;
    /// &lt;param name=&quot;element&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;eventName&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;handler&quot; type=&quot;Function&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;autoRemove&quot; type=&quot;Boolean&quot; optional=&quot;true&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;element&quot;},
        {name: &quot;eventName&quot;, type: String},
        {name: &quot;handler&quot;, type: Function},
        {name: &quot;autoRemove&quot;, type: Boolean, optional: true}
    ]);
    if (e) throw e;
    Sys.UI.DomEvent._ensureDomNode(element);
    if (eventName === &quot;error&quot;) throw Error.invalidOperation(Sys.Res.addHandlerCantBeUsedForError);
    if (!element._events) {
        element._events = {};
    }
    var eventCache = element._events[eventName];
    if (!eventCache) {
        element._events[eventName] = eventCache = [];
    }
    var browserHandler;
    if (element.addEventListener) {
        browserHandler = function(e) {
            return handler.call(element, new Sys.UI.DomEvent(e));
        }
        element.addEventListener(eventName, browserHandler, false);
    }
    else if (element.attachEvent) {
        browserHandler = function() {
            var e = {};
            try {e = Sys.UI.DomElement._getWindow(element).event} catch(ex) {}
            return handler.call(element, new Sys.UI.DomEvent(e));
        }
        element.attachEvent(&#039;on&#039; + eventName, browserHandler);
    }
    eventCache[eventCache.length] = {handler: handler, browserHandler: browserHandler, autoRemove: autoRemove };
    if (autoRemove) {
        var d = element.dispose;
        if (d !== Sys.UI.DomEvent._disposeHandlers) {
            element.dispose = Sys.UI.DomEvent._disposeHandlers;
            if (typeof(d) !== &quot;undefined&quot;) {
                element._chainDispose = d;
            }
        }
    }
}
var $addHandlers = Sys.UI.DomEvent.addHandlers = function Sys$UI$DomEvent$addHandlers(element, events, handlerOwner, autoRemove) {
    /// &lt;summary locid=&quot;M:J#Sys.UI.DomEvent.addHandlers&quot; /&gt;
    /// &lt;param name=&quot;element&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;events&quot; type=&quot;Object&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;handlerOwner&quot; optional=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;autoRemove&quot; type=&quot;Boolean&quot; optional=&quot;true&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;element&quot;},
        {name: &quot;events&quot;, type: Object},
        {name: &quot;handlerOwner&quot;, optional: true},
        {name: &quot;autoRemove&quot;, type: Boolean, optional: true}
    ]);
    if (e) throw e;
    Sys.UI.DomEvent._ensureDomNode(element);
    for (var name in events) {
        var handler = events[name];
        if (typeof(handler) !== &#039;function&#039;) throw Error.invalidOperation(Sys.Res.cantAddNonFunctionhandler);
        if (handlerOwner) {
            handler = Function.createDelegate(handlerOwner, handler);
        }
        $addHandler(element, name, handler, autoRemove || false);
    }
}
var $clearHandlers = Sys.UI.DomEvent.clearHandlers = function Sys$UI$DomEvent$clearHandlers(element) {
    /// &lt;summary locid=&quot;M:J#Sys.UI.DomEvent.clearHandlers&quot; /&gt;
    /// &lt;param name=&quot;element&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;element&quot;}
    ]);
    if (e) throw e;
    Sys.UI.DomEvent._ensureDomNode(element);
    Sys.UI.DomEvent._clearHandlers(element, false);
}
Sys.UI.DomEvent._clearHandlers = function Sys$UI$DomEvent$_clearHandlers(element, autoRemoving) {
    if (element._events) {
        var cache = element._events;
        for (var name in cache) {
            var handlers = cache[name];
            for (var i = handlers.length - 1; i &gt;= 0; i--) {
                var entry = handlers[i];
                if (!autoRemoving || entry.autoRemove) {
                    $removeHandler(element, name, entry.handler);
                }
            }
        }
        element._events = null;
    }
}
Sys.UI.DomEvent._disposeHandlers = function Sys$UI$DomEvent$_disposeHandlers() {
    Sys.UI.DomEvent._clearHandlers(this, true);
    var d = this._chainDispose, type = typeof(d);
    if (type !== &quot;undefined&quot;) {
        this.dispose = d;
        this._chainDispose = null;
        if (type === &quot;function&quot;) {
            this.dispose();
        }
    }
}
var $removeHandler = Sys.UI.DomEvent.removeHandler = function Sys$UI$DomEvent$removeHandler(element, eventName, handler) {
    /// &lt;summary locid=&quot;M:J#Sys.UI.DomEvent.removeHandler&quot; /&gt;
    /// &lt;param name=&quot;element&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;eventName&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;handler&quot; type=&quot;Function&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;element&quot;},
        {name: &quot;eventName&quot;, type: String},
        {name: &quot;handler&quot;, type: Function}
    ]);
    if (e) throw e;
    Sys.UI.DomEvent._removeHandler(element, eventName, handler);
}
Sys.UI.DomEvent._removeHandler = function Sys$UI$DomEvent$_removeHandler(element, eventName, handler) {
    Sys.UI.DomEvent._ensureDomNode(element);
    var browserHandler = null;
    if ((typeof(element._events) !== &#039;object&#039;) || !element._events) throw Error.invalidOperation(Sys.Res.eventHandlerInvalid);
    var cache = element._events[eventName];
    if (!(cache instanceof Array)) throw Error.invalidOperation(Sys.Res.eventHandlerInvalid);
    for (var i = 0, l = cache.length; i &lt; l; i++) {
        if (cache[i].handler === handler) {
            browserHandler = cache[i].browserHandler;
            break;
        }
    }
    if (typeof(browserHandler) !== &#039;function&#039;) throw Error.invalidOperation(Sys.Res.eventHandlerInvalid);
    if (element.removeEventListener) {
        element.removeEventListener(eventName, browserHandler, false);
    }
    else if (element.detachEvent) {
        element.detachEvent(&#039;on&#039; + eventName, browserHandler);
    }
    cache.splice(i, 1);
}
Sys.UI.DomEvent._ensureDomNode = function Sys$UI$DomEvent$_ensureDomNode(element) {
    if (element.tagName &amp;&amp; (element.tagName.toUpperCase() === &quot;SCRIPT&quot;)) return;
    
    var doc = element.ownerDocument || element.document || element;
    if ((typeof(element.document) !== &#039;object&#039;) &amp;&amp; (element != doc) &amp;&amp; (typeof(element.nodeType) !== &#039;number&#039;)) {
        throw Error.argument(&quot;element&quot;, Sys.Res.argumentDomNode);
    }
}
 
Sys.UI.DomElement = function Sys$UI$DomElement() {
    /// &lt;summary locid=&quot;M:J#Sys.UI.DomElement.#ctor&quot; /&gt;
    if (arguments.length !== 0) throw Error.parameterCount();
    throw Error.notImplemented();
}
Sys.UI.DomElement.registerClass(&#039;Sys.UI.DomElement&#039;);
Sys.UI.DomElement.addCssClass = function Sys$UI$DomElement$addCssClass(element, className) {
    /// &lt;summary locid=&quot;M:J#Sys.UI.DomElement.addCssClass&quot; /&gt;
    /// &lt;param name=&quot;element&quot; domElement=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;className&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;element&quot;, domElement: true},
        {name: &quot;className&quot;, type: String}
    ]);
    if (e) throw e;
    if (!Sys.UI.DomElement.containsCssClass(element, className)) {
        if (element.className === &#039;&#039;) {
            element.className = className;
        }
        else {
            element.className += &#039; &#039; + className;
        }
    }
}
Sys.UI.DomElement.containsCssClass = function Sys$UI$DomElement$containsCssClass(element, className) {
    /// &lt;summary locid=&quot;M:J#Sys.UI.DomElement.containsCssClass&quot; /&gt;
    /// &lt;param name=&quot;element&quot; domElement=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;className&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Boolean&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;element&quot;, domElement: true},
        {name: &quot;className&quot;, type: String}
    ]);
    if (e) throw e;
    return Array.contains(element.className.split(&#039; &#039;), className);
}
Sys.UI.DomElement.getBounds = function Sys$UI$DomElement$getBounds(element) {
    /// &lt;summary locid=&quot;M:J#Sys.UI.DomElement.getBounds&quot; /&gt;
    /// &lt;param name=&quot;element&quot; domElement=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Sys.UI.Bounds&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;element&quot;, domElement: true}
    ]);
    if (e) throw e;
    var offset = Sys.UI.DomElement.getLocation(element);
    return new Sys.UI.Bounds(offset.x, offset.y, element.offsetWidth || 0, element.offsetHeight || 0);
}
var $get = Sys.UI.DomElement.getElementById = function Sys$UI$DomElement$getElementById(id, element) {
    /// &lt;summary locid=&quot;M:J#Sys.UI.DomElement.getElementById&quot; /&gt;
    /// &lt;param name=&quot;id&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;element&quot; domElement=&quot;true&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns domElement=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;id&quot;, type: String},
        {name: &quot;element&quot;, mayBeNull: true, domElement: true, optional: true}
    ]);
    if (e) throw e;
    if (!element) return document.getElementById(id);
    if (element.getElementById) return element.getElementById(id);
    var nodeQueue = [];
    var childNodes = element.childNodes;
    for (var i = 0; i &lt; childNodes.length; i++) {
        var node = childNodes[i];
        if (node.nodeType == 1) {
            nodeQueue[nodeQueue.length] = node;
        }
    }
    while (nodeQueue.length) {
        node = nodeQueue.shift();
        if (node.id == id) {
            return node;
        }
        childNodes = node.childNodes;
        for (i = 0; i &lt; childNodes.length; i++) {
            node = childNodes[i];
            if (node.nodeType == 1) {
                nodeQueue[nodeQueue.length] = node;
            }
        }
    }
    return null;
}
if (document.documentElement.getBoundingClientRect) {
    Sys.UI.DomElement.getLocation = function Sys$UI$DomElement$getLocation(element) {
        /// &lt;summary locid=&quot;M:J#Sys.UI.DomElement.getLocation&quot; /&gt;
        /// &lt;param name=&quot;element&quot; domElement=&quot;true&quot;&gt;&lt;/param&gt;
        /// &lt;returns type=&quot;Sys.UI.Point&quot;&gt;&lt;/returns&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;element&quot;, domElement: true}
        ]);
        if (e) throw e;
        if (element.self || element.nodeType === 9 || 
            (element === document.documentElement) || 
            (element.parentNode === element.ownerDocument.documentElement)) { 
            return new Sys.UI.Point(0, 0);
        }        
        
        var clientRect = element.getBoundingClientRect();
        if (!clientRect) {
            return new Sys.UI.Point(0,0);
        }
        var ex, documentElement = element.ownerDocument.documentElement,
            offsetX = Math.round(clientRect.left) + documentElement.scrollLeft,
            offsetY = Math.round(clientRect.top) + documentElement.scrollTop;
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            try {
                var f = element.ownerDocument.parentWindow.frameElement || null;
                if (f) {
                    var offset = (f.frameBorder === &quot;0&quot; || f.frameBorder === &quot;no&quot;) ? 2 : 0;
                    offsetX += offset;
                    offsetY += offset;
                }
            }
            catch(ex) {
            }
            if (Sys.Browser.version === 7 &amp;&amp; !document.documentMode) {
                var body = document.body,
                    rect = body.getBoundingClientRect(),
                    zoom = (rect.right-rect.left) / body.clientWidth;
                zoom = Math.round(zoom * 100);
                zoom = (zoom - zoom % 5) / 100;
                if (!isNaN(zoom) &amp;&amp; (zoom !== 1)) {
                    offsetX = Math.round(offsetX / zoom);
                    offsetY = Math.round(offsetY / zoom);
                }
            }        
            if ((document.documentMode || 0) &lt; 8) {
                offsetX -= documentElement.clientLeft;
                offsetY -= documentElement.clientTop;
            }
        }
        return new Sys.UI.Point(offsetX, offsetY);
    }
}
else if (Sys.Browser.agent === Sys.Browser.Safari) {
    Sys.UI.DomElement.getLocation = function Sys$UI$DomElement$getLocation(element) {
        /// &lt;summary locid=&quot;M:J#Sys.UI.DomElement.getLocation&quot; /&gt;
        /// &lt;param name=&quot;element&quot; domElement=&quot;true&quot;&gt;&lt;/param&gt;
        /// &lt;returns type=&quot;Sys.UI.Point&quot;&gt;&lt;/returns&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;element&quot;, domElement: true}
        ]);
        if (e) throw e;
        if ((element.window &amp;&amp; (element.window === element)) || element.nodeType === 9) return new Sys.UI.Point(0,0);
        var offsetX = 0, offsetY = 0,
            parent,
            previous = null,
            previousStyle = null,
            currentStyle;
        for (parent = element; parent; previous = parent, previousStyle = currentStyle, parent = parent.offsetParent) {
            currentStyle = Sys.UI.DomElement._getCurrentStyle(parent);
            var tagName = parent.tagName ? parent.tagName.toUpperCase() : null;
            if ((parent.offsetLeft || parent.offsetTop) &amp;&amp;
                ((tagName !== &quot;BODY&quot;) || (!previousStyle || previousStyle.position !== &quot;absolute&quot;))) {
                offsetX += parent.offsetLeft;
                offsetY += parent.offsetTop;
            }
            if (previous &amp;&amp; Sys.Browser.version &gt;= 3) {
                offsetX += parseInt(currentStyle.borderLeftWidth);
                offsetY += parseInt(currentStyle.borderTopWidth);
            }
        }
        currentStyle = Sys.UI.DomElement._getCurrentStyle(element);
        var elementPosition = currentStyle ? currentStyle.position : null;
        if (!elementPosition || (elementPosition !== &quot;absolute&quot;)) {
            for (parent = element.parentNode; parent; parent = parent.parentNode) {
                tagName = parent.tagName ? parent.tagName.toUpperCase() : null;
                if ((tagName !== &quot;BODY&quot;) &amp;&amp; (tagName !== &quot;HTML&quot;) &amp;&amp; (parent.scrollLeft || parent.scrollTop)) {
                    offsetX -= (parent.scrollLeft || 0);
                    offsetY -= (parent.scrollTop || 0);
                }
                currentStyle = Sys.UI.DomElement._getCurrentStyle(parent);
                var parentPosition = currentStyle ? currentStyle.position : null;
                if (parentPosition &amp;&amp; (parentPosition === &quot;absolute&quot;)) break;
            }
        }
        return new Sys.UI.Point(offsetX, offsetY);
    }
}
else {
    Sys.UI.DomElement.getLocation = function Sys$UI$DomElement$getLocation(element) {
        /// &lt;summary locid=&quot;M:J#Sys.UI.DomElement.getLocation&quot; /&gt;
        /// &lt;param name=&quot;element&quot; domElement=&quot;true&quot;&gt;&lt;/param&gt;
        /// &lt;returns type=&quot;Sys.UI.Point&quot;&gt;&lt;/returns&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;element&quot;, domElement: true}
        ]);
        if (e) throw e;
        if ((element.window &amp;&amp; (element.window === element)) || element.nodeType === 9) return new Sys.UI.Point(0,0);
        var offsetX = 0, offsetY = 0,
            parent,
            previous = null,
            previousStyle = null,
            currentStyle = null;
        for (parent = element; parent; previous = parent, previousStyle = currentStyle, parent = parent.offsetParent) {
            var tagName = parent.tagName ? parent.tagName.toUpperCase() : null;
            currentStyle = Sys.UI.DomElement._getCurrentStyle(parent);
            if ((parent.offsetLeft || parent.offsetTop) &amp;&amp;
                !((tagName === &quot;BODY&quot;) &amp;&amp;
                (!previousStyle || previousStyle.position !== &quot;absolute&quot;))) {
                offsetX += parent.offsetLeft;
                offsetY += parent.offsetTop;
            }
            if (previous !== null &amp;&amp; currentStyle) {
                if ((tagName !== &quot;TABLE&quot;) &amp;&amp; (tagName !== &quot;TD&quot;) &amp;&amp; (tagName !== &quot;HTML&quot;)) {
                    offsetX += parseInt(currentStyle.borderLeftWidth) || 0;
                    offsetY += parseInt(currentStyle.borderTopWidth) || 0;
                }
                if (tagName === &quot;TABLE&quot; &amp;&amp;
                    (currentStyle.position === &quot;relative&quot; || currentStyle.position === &quot;absolute&quot;)) {
                    offsetX += parseInt(currentStyle.marginLeft) || 0;
                    offsetY += parseInt(currentStyle.marginTop) || 0;
                }
            }
        }
        currentStyle = Sys.UI.DomElement._getCurrentStyle(element);
        var elementPosition = currentStyle ? currentStyle.position : null;
        if (!elementPosition || (elementPosition !== &quot;absolute&quot;)) {
            for (parent = element.parentNode; parent; parent = parent.parentNode) {
                tagName = parent.tagName ? parent.tagName.toUpperCase() : null;
                if ((tagName !== &quot;BODY&quot;) &amp;&amp; (tagName !== &quot;HTML&quot;) &amp;&amp; (parent.scrollLeft || parent.scrollTop)) {
                    offsetX -= (parent.scrollLeft || 0);
                    offsetY -= (parent.scrollTop || 0);
                    currentStyle = Sys.UI.DomElement._getCurrentStyle(parent);
                    if (currentStyle) {
                        offsetX += parseInt(currentStyle.borderLeftWidth) || 0;
                        offsetY += parseInt(currentStyle.borderTopWidth) || 0;
                    }
                }
            }
        }
        return new Sys.UI.Point(offsetX, offsetY);
    }
}
Sys.UI.DomElement.isDomElement = function Sys$UI$DomElement$isDomElement(obj) {
    /// &lt;summary locid=&quot;M:J#Sys.UI.DomElement.isDomElement&quot; /&gt;
    /// &lt;param name=&quot;obj&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Boolean&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;obj&quot;}
    ]);
    if (e) throw e;
    return Sys._isDomElement(obj);
}
Sys.UI.DomElement.removeCssClass = function Sys$UI$DomElement$removeCssClass(element, className) {
    /// &lt;summary locid=&quot;M:J#Sys.UI.DomElement.removeCssClass&quot; /&gt;
    /// &lt;param name=&quot;element&quot; domElement=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;className&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;element&quot;, domElement: true},
        {name: &quot;className&quot;, type: String}
    ]);
    if (e) throw e;
    var currentClassName = &#039; &#039; + element.className + &#039; &#039;;
    var index = currentClassName.indexOf(&#039; &#039; + className + &#039; &#039;);
    if (index &gt;= 0) {
        element.className = (currentClassName.substr(0, index) + &#039; &#039; +
            currentClassName.substring(index + className.length + 1, currentClassName.length)).trim();
    }
}
Sys.UI.DomElement.resolveElement = function Sys$UI$DomElement$resolveElement(elementOrElementId, containerElement) {
    /// &lt;summary locid=&quot;M:J#Sys.UI.DomElement.resolveElement&quot; /&gt;
    /// &lt;param name=&quot;elementOrElementId&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;containerElement&quot; domElement=&quot;true&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns domElement=&quot;true&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;elementOrElementId&quot;, mayBeNull: true},
        {name: &quot;containerElement&quot;, mayBeNull: true, domElement: true, optional: true}
    ]);
    if (e) throw e;
    var el = elementOrElementId;
    if (!el) return null;
    if (typeof(el) === &quot;string&quot;) {
        el = Sys.UI.DomElement.getElementById(el, containerElement);
        if (!el) {
            throw Error.argument(&quot;elementOrElementId&quot;, String.format(Sys.Res.elementNotFound, elementOrElementId));
        }
    }
    else if(!Sys.UI.DomElement.isDomElement(el)) {
        throw Error.argument(&quot;elementOrElementId&quot;, Sys.Res.expectedElementOrId);
    }
    return el;
}
Sys.UI.DomElement.raiseBubbleEvent = function Sys$UI$DomElement$raiseBubbleEvent(source, args) {
    /// &lt;summary locid=&quot;M:J#Sys.UI.DomElement.raiseBubbleEvent&quot; /&gt;
    /// &lt;param name=&quot;source&quot; domElement=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;args&quot; type=&quot;Sys.EventArgs&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;source&quot;, domElement: true},
        {name: &quot;args&quot;, type: Sys.EventArgs}
    ]);
    if (e) throw e;
    var target = source;
    while (target) {
        var control = target.control;
        if (control &amp;&amp; control.onBubbleEvent &amp;&amp; control.raiseBubbleEvent) {
            Sys.UI.DomElement._raiseBubbleEventFromControl(control, source, args);
            return;
        }
        target = target.parentNode;
    }
}
Sys.UI.DomElement._raiseBubbleEventFromControl = function Sys$UI$DomElement$_raiseBubbleEventFromControl(control, source, args) {
    if (!control.onBubbleEvent(source, args)) {
        control._raiseBubbleEvent(source, args);
    }
}
Sys.UI.DomElement.setLocation = function Sys$UI$DomElement$setLocation(element, x, y) {
    /// &lt;summary locid=&quot;M:J#Sys.UI.DomElement.setLocation&quot; /&gt;
    /// &lt;param name=&quot;element&quot; domElement=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;x&quot; type=&quot;Number&quot; integer=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;y&quot; type=&quot;Number&quot; integer=&quot;true&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;element&quot;, domElement: true},
        {name: &quot;x&quot;, type: Number, integer: true},
        {name: &quot;y&quot;, type: Number, integer: true}
    ]);
    if (e) throw e;
    var style = element.style;
    style.position = &#039;absolute&#039;;
    style.left = x + &quot;px&quot;;
    style.top = y + &quot;px&quot;;
}
Sys.UI.DomElement.toggleCssClass = function Sys$UI$DomElement$toggleCssClass(element, className) {
    /// &lt;summary locid=&quot;M:J#Sys.UI.DomElement.toggleCssClass&quot; /&gt;
    /// &lt;param name=&quot;element&quot; domElement=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;className&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;element&quot;, domElement: true},
        {name: &quot;className&quot;, type: String}
    ]);
    if (e) throw e;
    if (Sys.UI.DomElement.containsCssClass(element, className)) {
        Sys.UI.DomElement.removeCssClass(element, className);
    }
    else {
        Sys.UI.DomElement.addCssClass(element, className);
    }
}
Sys.UI.DomElement.getVisibilityMode = function Sys$UI$DomElement$getVisibilityMode(element) {
    /// &lt;summary locid=&quot;M:J#Sys.UI.DomElement.getVisibilityMode&quot; /&gt;
    /// &lt;param name=&quot;element&quot; domElement=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Sys.UI.VisibilityMode&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;element&quot;, domElement: true}
    ]);
    if (e) throw e;
    return (element._visibilityMode === Sys.UI.VisibilityMode.hide) ?
        Sys.UI.VisibilityMode.hide :
        Sys.UI.VisibilityMode.collapse;
}
Sys.UI.DomElement.setVisibilityMode = function Sys$UI$DomElement$setVisibilityMode(element, value) {
    /// &lt;summary locid=&quot;M:J#Sys.UI.DomElement.setVisibilityMode&quot; /&gt;
    /// &lt;param name=&quot;element&quot; domElement=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;value&quot; type=&quot;Sys.UI.VisibilityMode&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;element&quot;, domElement: true},
        {name: &quot;value&quot;, type: Sys.UI.VisibilityMode}
    ]);
    if (e) throw e;
    Sys.UI.DomElement._ensureOldDisplayMode(element);
    if (element._visibilityMode !== value) {
        element._visibilityMode = value;
        if (Sys.UI.DomElement.getVisible(element) === false) {
            if (element._visibilityMode === Sys.UI.VisibilityMode.hide) {
                element.style.display = element._oldDisplayMode;
            }
            else {
                element.style.display = &#039;none&#039;;
            }
        }
        element._visibilityMode = value;
    }
}
Sys.UI.DomElement.getVisible = function Sys$UI$DomElement$getVisible(element) {
    /// &lt;summary locid=&quot;M:J#Sys.UI.DomElement.getVisible&quot; /&gt;
    /// &lt;param name=&quot;element&quot; domElement=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Boolean&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;element&quot;, domElement: true}
    ]);
    if (e) throw e;
    var style = element.currentStyle || Sys.UI.DomElement._getCurrentStyle(element);
    if (!style) return true;
    return (style.visibility !== &#039;hidden&#039;) &amp;&amp; (style.display !== &#039;none&#039;);
}
Sys.UI.DomElement.setVisible = function Sys$UI$DomElement$setVisible(element, value) {
    /// &lt;summary locid=&quot;M:J#Sys.UI.DomElement.setVisible&quot; /&gt;
    /// &lt;param name=&quot;element&quot; domElement=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;value&quot; type=&quot;Boolean&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;element&quot;, domElement: true},
        {name: &quot;value&quot;, type: Boolean}
    ]);
    if (e) throw e;
    if (value !== Sys.UI.DomElement.getVisible(element)) {
        Sys.UI.DomElement._ensureOldDisplayMode(element);
        element.style.visibility = value ? &#039;visible&#039; : &#039;hidden&#039;;
        if (value || (element._visibilityMode === Sys.UI.VisibilityMode.hide)) {
            element.style.display = element._oldDisplayMode;
        }
        else {
            element.style.display = &#039;none&#039;;
        }
    }
}
Sys.UI.DomElement._ensureOldDisplayMode = function Sys$UI$DomElement$_ensureOldDisplayMode(element) {
    if (!element._oldDisplayMode) {
        var style = element.currentStyle || Sys.UI.DomElement._getCurrentStyle(element);
        element._oldDisplayMode = style ? style.display : null;
        if (!element._oldDisplayMode || element._oldDisplayMode === &#039;none&#039;) {
            switch(element.tagName.toUpperCase()) {
                case &#039;DIV&#039;: case &#039;P&#039;: case &#039;ADDRESS&#039;: case &#039;BLOCKQUOTE&#039;: case &#039;BODY&#039;: case &#039;COL&#039;:
                case &#039;COLGROUP&#039;: case &#039;DD&#039;: case &#039;DL&#039;: case &#039;DT&#039;: case &#039;FIELDSET&#039;: case &#039;FORM&#039;:
                case &#039;H1&#039;: case &#039;H2&#039;: case &#039;H3&#039;: case &#039;H4&#039;: case &#039;H5&#039;: case &#039;H6&#039;: case &#039;HR&#039;:
                case &#039;IFRAME&#039;: case &#039;LEGEND&#039;: case &#039;OL&#039;: case &#039;PRE&#039;: case &#039;TABLE&#039;: case &#039;TD&#039;:
                case &#039;TH&#039;: case &#039;TR&#039;: case &#039;UL&#039;:
                    element._oldDisplayMode = &#039;block&#039;;
                    break;
                case &#039;LI&#039;:
                    element._oldDisplayMode = &#039;list-item&#039;;
                    break;
                default:
                    element._oldDisplayMode = &#039;inline&#039;;
            }
        }
    }
}
Sys.UI.DomElement._getWindow = function Sys$UI$DomElement$_getWindow(element) {
    var doc = element.ownerDocument || element.document || element;
    return doc.defaultView || doc.parentWindow;
}
Sys.UI.DomElement._getCurrentStyle = function Sys$UI$DomElement$_getCurrentStyle(element) {
    if (element.nodeType === 3) return null;
    var w = Sys.UI.DomElement._getWindow(element);
    if (element.documentElement) element = element.documentElement;
    var computedStyle = (w &amp;&amp; (element !== w) &amp;&amp; w.getComputedStyle) ?
        w.getComputedStyle(element, null) :
        element.currentStyle || element.style;
    if (!computedStyle &amp;&amp; (Sys.Browser.agent === Sys.Browser.Safari) &amp;&amp; element.style) {
        var oldDisplay = element.style.display;
        var oldPosition = element.style.position;
        element.style.position = &#039;absolute&#039;;
        element.style.display = &#039;block&#039;;
        var style = w.getComputedStyle(element, null);
        element.style.display = oldDisplay;
        element.style.position = oldPosition;
        computedStyle = {};
        for (var n in style) {
            computedStyle[n] = style[n];
        }
        computedStyle.display = &#039;none&#039;;
    }
    return computedStyle;
}
 
Sys.IContainer = function Sys$IContainer() {
    throw Error.notImplemented();
}
    function Sys$IContainer$addComponent(component) {
        /// &lt;summary locid=&quot;M:J#Sys.IContainer.addComponent&quot; /&gt;
        /// &lt;param name=&quot;component&quot; type=&quot;Sys.Component&quot;&gt;&lt;/param&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;component&quot;, type: Sys.Component}
        ]);
        if (e) throw e;
        throw Error.notImplemented();
    }
    function Sys$IContainer$removeComponent(component) {
        /// &lt;summary locid=&quot;M:J#Sys.IContainer.removeComponent&quot; /&gt;
        /// &lt;param name=&quot;component&quot; type=&quot;Sys.Component&quot;&gt;&lt;/param&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;component&quot;, type: Sys.Component}
        ]);
        if (e) throw e;
        throw Error.notImplemented();
    }
    function Sys$IContainer$findComponent(id) {
        /// &lt;summary locid=&quot;M:J#Sys.IContainer.findComponent&quot; /&gt;
        /// &lt;param name=&quot;id&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
        /// &lt;returns type=&quot;Sys.Component&quot;&gt;&lt;/returns&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;id&quot;, type: String}
        ]);
        if (e) throw e;
        throw Error.notImplemented();
    }
    function Sys$IContainer$getComponents() {
        /// &lt;summary locid=&quot;M:J#Sys.IContainer.getComponents&quot; /&gt;
        /// &lt;returns type=&quot;Array&quot; elementType=&quot;Sys.Component&quot;&gt;&lt;/returns&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        throw Error.notImplemented();
    }
Sys.IContainer.prototype = {
    addComponent: Sys$IContainer$addComponent,
    removeComponent: Sys$IContainer$removeComponent,
    findComponent: Sys$IContainer$findComponent,
    getComponents: Sys$IContainer$getComponents
}
Sys.IContainer.registerInterface(&quot;Sys.IContainer&quot;);
 
Sys.ApplicationLoadEventArgs = function Sys$ApplicationLoadEventArgs(components, isPartialLoad) {
    /// &lt;summary locid=&quot;M:J#Sys.ApplicationLoadEventArgs.#ctor&quot; /&gt;
    /// &lt;param name=&quot;components&quot; type=&quot;Array&quot; elementType=&quot;Sys.Component&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;isPartialLoad&quot; type=&quot;Boolean&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;components&quot;, type: Array, elementType: Sys.Component},
        {name: &quot;isPartialLoad&quot;, type: Boolean}
    ]);
    if (e) throw e;
    Sys.ApplicationLoadEventArgs.initializeBase(this);
    this._components = components;
    this._isPartialLoad = isPartialLoad;
}
 
    function Sys$ApplicationLoadEventArgs$get_components() {
        /// &lt;value type=&quot;Array&quot; elementType=&quot;Sys.Component&quot; locid=&quot;P:J#Sys.ApplicationLoadEventArgs.components&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._components;
    }
    function Sys$ApplicationLoadEventArgs$get_isPartialLoad() {
        /// &lt;value type=&quot;Boolean&quot; locid=&quot;P:J#Sys.ApplicationLoadEventArgs.isPartialLoad&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._isPartialLoad;
    }
Sys.ApplicationLoadEventArgs.prototype = {
    get_components: Sys$ApplicationLoadEventArgs$get_components,
    get_isPartialLoad: Sys$ApplicationLoadEventArgs$get_isPartialLoad
}
Sys.ApplicationLoadEventArgs.registerClass(&#039;Sys.ApplicationLoadEventArgs&#039;, Sys.EventArgs);
 
Sys._Application = function Sys$_Application() {
    /// &lt;summary locid=&quot;M:J#Sys.Application.#ctor&quot; /&gt;
    if (arguments.length !== 0) throw Error.parameterCount();
    Sys._Application.initializeBase(this);
    this._disposableObjects = [];
    this._components = {};
    this._createdComponents = [];
    this._secondPassComponents = [];
    this._unloadHandlerDelegate = Function.createDelegate(this, this._unloadHandler);
    Sys.UI.DomEvent.addHandler(window, &quot;unload&quot;, this._unloadHandlerDelegate);
    this._domReady();
}
    function Sys$_Application$get_isCreatingComponents() {
        /// &lt;value type=&quot;Boolean&quot; locid=&quot;P:J#Sys.Application.isCreatingComponents&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._creatingComponents;
    }
    function Sys$_Application$get_isDisposing() {
        /// &lt;value type=&quot;Boolean&quot; locid=&quot;P:J#Sys.Application.isDisposing&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._disposing;
    }
    function Sys$_Application$add_init(handler) {
        /// &lt;summary locid=&quot;E:J#Sys.Application.init&quot; /&gt;
        var e = Function._validateParams(arguments, [{name: &quot;handler&quot;, type: Function}]);
        if (e) throw e;
        if (this._initialized) {
            handler(this, Sys.EventArgs.Empty);
        }
        else {
            this.get_events().addHandler(&quot;init&quot;, handler);
        }
    }
    function Sys$_Application$remove_init(handler) {
        var e = Function._validateParams(arguments, [{name: &quot;handler&quot;, type: Function}]);
        if (e) throw e;
        this.get_events().removeHandler(&quot;init&quot;, handler);
    }
    function Sys$_Application$add_load(handler) {
        /// &lt;summary locid=&quot;E:J#Sys.Application.load&quot; /&gt;
        var e = Function._validateParams(arguments, [{name: &quot;handler&quot;, type: Function}]);
        if (e) throw e;
        this.get_events().addHandler(&quot;load&quot;, handler);
    }
    function Sys$_Application$remove_load(handler) {
        var e = Function._validateParams(arguments, [{name: &quot;handler&quot;, type: Function}]);
        if (e) throw e;
        this.get_events().removeHandler(&quot;load&quot;, handler);
    }
    function Sys$_Application$add_unload(handler) {
        /// &lt;summary locid=&quot;E:J#Sys.Application.unload&quot; /&gt;
        var e = Function._validateParams(arguments, [{name: &quot;handler&quot;, type: Function}]);
        if (e) throw e;
        this.get_events().addHandler(&quot;unload&quot;, handler);
    }
    function Sys$_Application$remove_unload(handler) {
        var e = Function._validateParams(arguments, [{name: &quot;handler&quot;, type: Function}]);
        if (e) throw e;
        this.get_events().removeHandler(&quot;unload&quot;, handler);
    }
    function Sys$_Application$addComponent(component) {
        /// &lt;summary locid=&quot;M:J#Sys.Application.addComponent&quot; /&gt;
        /// &lt;param name=&quot;component&quot; type=&quot;Sys.Component&quot;&gt;&lt;/param&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;component&quot;, type: Sys.Component}
        ]);
        if (e) throw e;
        var id = component.get_id();
        if (!id) throw Error.invalidOperation(Sys.Res.cantAddWithoutId);
        if (typeof(this._components[id]) !== &#039;undefined&#039;) throw Error.invalidOperation(String.format(Sys.Res.appDuplicateComponent, id));
        this._components[id] = component;
    }
    function Sys$_Application$beginCreateComponents() {
        /// &lt;summary locid=&quot;M:J#Sys.Application.beginCreateComponents&quot; /&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        this._creatingComponents = true;
    }
    function Sys$_Application$dispose() {
        /// &lt;summary locid=&quot;M:J#Sys.Application.dispose&quot; /&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        if (!this._disposing) {
            this._disposing = true;
            if (this._timerCookie) {
                window.clearTimeout(this._timerCookie);
                delete this._timerCookie;
            }
            if (this._endRequestHandler) {
                Sys.WebForms.PageRequestManager.getInstance().remove_endRequest(this._endRequestHandler);
                delete this._endRequestHandler;
            }
            if (this._beginRequestHandler) {
                Sys.WebForms.PageRequestManager.getInstance().remove_beginRequest(this._beginRequestHandler);
                delete this._beginRequestHandler;
            }
            if (window.pageUnload) {
                window.pageUnload(this, Sys.EventArgs.Empty);
            }
            var unloadHandler = this.get_events().getHandler(&quot;unload&quot;);
            if (unloadHandler) {
                unloadHandler(this, Sys.EventArgs.Empty);
            }
            var disposableObjects = Array.clone(this._disposableObjects);
            for (var i = 0, l = disposableObjects.length; i &lt; l; i++) {
                var object = disposableObjects[i];
                if (typeof(object) !== &quot;undefined&quot;) {
                    object.dispose();
                }
            }
            Array.clear(this._disposableObjects);
            Sys.UI.DomEvent.removeHandler(window, &quot;unload&quot;, this._unloadHandlerDelegate);
            if (Sys._ScriptLoader) {
                var sl = Sys._ScriptLoader.getInstance();
                if(sl) {
                    sl.dispose();
                }
            }
            Sys._Application.callBaseMethod(this, &#039;dispose&#039;);
        }
    }
    function Sys$_Application$disposeElement(element, childNodesOnly) {
        /// &lt;summary locid=&quot;M:J#Sys._Application.disposeElement&quot; /&gt;
        /// &lt;param name=&quot;element&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;childNodesOnly&quot; type=&quot;Boolean&quot;&gt;&lt;/param&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;element&quot;},
            {name: &quot;childNodesOnly&quot;, type: Boolean}
        ]);
        if (e) throw e;
        if (element.nodeType === 1) {
            var i, allElements = element.getElementsByTagName(&quot;*&quot;),
                length = allElements.length,
                children = new Array(length);
            for (i = 0; i &lt; length; i++) {
                children[i] = allElements[i];
            }
            for (i = length - 1; i &gt;= 0; i--) {
                var child = children[i];
                var d = child.dispose;
                if (d &amp;&amp; typeof(d) === &quot;function&quot;) {
                    child.dispose();
                }
                else {
                    var c = child.control;
                    if (c &amp;&amp; typeof(c.dispose) === &quot;function&quot;) {
                        c.dispose();
                    }
                }
                var list = child._behaviors;
                if (list) {
                    this._disposeComponents(list);
                }
                list = child._components;
                if (list) {
                    this._disposeComponents(list);
                    child._components = null;
                }
            }
            if (!childNodesOnly) {
                var d = element.dispose;
                if (d &amp;&amp; typeof(d) === &quot;function&quot;) {
                    element.dispose();
                }
                else {
                    var c = element.control;
                    if (c &amp;&amp; typeof(c.dispose) === &quot;function&quot;) {
                        c.dispose();
                    }
                }
                var list = element._behaviors;
                if (list) {
                    this._disposeComponents(list);
                }
                list = element._components;
                if (list) {
                    this._disposeComponents(list);
                    element._components = null;
                }
            }
        }
    }
    function Sys$_Application$endCreateComponents() {
        /// &lt;summary locid=&quot;M:J#Sys.Application.endCreateComponents&quot; /&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        var components = this._secondPassComponents;
        for (var i = 0, l = components.length; i &lt; l; i++) {
            var component = components[i].component;
            Sys$Component$_setReferences(component, components[i].references);
            component.endUpdate();
        }
        this._secondPassComponents = [];
        this._creatingComponents = false;
    }
    function Sys$_Application$findComponent(id, parent) {
        /// &lt;summary locid=&quot;M:J#Sys.Application.findComponent&quot; /&gt;
        /// &lt;param name=&quot;id&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;parent&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
        /// &lt;returns type=&quot;Sys.Component&quot; mayBeNull=&quot;true&quot;&gt;&lt;/returns&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;id&quot;, type: String},
            {name: &quot;parent&quot;, mayBeNull: true, optional: true}
        ]);
        if (e) throw e;
        return (parent ?
            ((Sys.IContainer.isInstanceOfType(parent)) ?
                parent.findComponent(id) :
                parent[id] || null) :
            Sys.Application._components[id] || null);
    }
    function Sys$_Application$getComponents() {
        /// &lt;summary locid=&quot;M:J#Sys.Application.getComponents&quot; /&gt;
        /// &lt;returns type=&quot;Array&quot; elementType=&quot;Sys.Component&quot;&gt;&lt;/returns&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        var res = [];
        var components = this._components;
        for (var name in components) {
            res[res.length] = components[name];
        }
        return res;
    }
    function Sys$_Application$initialize() {
        /// &lt;summary locid=&quot;M:J#Sys.Application.initialize&quot; /&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        if(!this.get_isInitialized() &amp;&amp; !this._disposing) {
            Sys._Application.callBaseMethod(this, &#039;initialize&#039;);
            this._raiseInit();
            if (this.get_stateString) {
                if (Sys.WebForms &amp;&amp; Sys.WebForms.PageRequestManager) {
                    this._beginRequestHandler = Function.createDelegate(this, this._onPageRequestManagerBeginRequest);
                    Sys.WebForms.PageRequestManager.getInstance().add_beginRequest(this._beginRequestHandler);
                    this._endRequestHandler = Function.createDelegate(this, this._onPageRequestManagerEndRequest);
                    Sys.WebForms.PageRequestManager.getInstance().add_endRequest(this._endRequestHandler);
                }
                var loadedEntry = this.get_stateString();
                if (loadedEntry !== this._currentEntry) {
                    this._navigate(loadedEntry);
                }
                else {
                    this._ensureHistory();
                }
            }
            this.raiseLoad();
        }
    }
    function Sys$_Application$notifyScriptLoaded() {
        /// &lt;summary locid=&quot;M:J#Sys.Application.notifyScriptLoaded&quot; /&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
    }
    function Sys$_Application$registerDisposableObject(object) {
        /// &lt;summary locid=&quot;M:J#Sys.Application.registerDisposableObject&quot; /&gt;
        /// &lt;param name=&quot;object&quot; type=&quot;Sys.IDisposable&quot;&gt;&lt;/param&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;object&quot;, type: Sys.IDisposable}
        ]);
        if (e) throw e;
        if (!this._disposing) {
            var objects = this._disposableObjects,
                i = objects.length;
            objects[i] = object;
            object.__msdisposeindex = i;
        }
    }
    function Sys$_Application$raiseLoad() {
        /// &lt;summary locid=&quot;M:J#Sys.Application.raiseLoad&quot; /&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        var h = this.get_events().getHandler(&quot;load&quot;);
        var args = new Sys.ApplicationLoadEventArgs(Array.clone(this._createdComponents), !!this._loaded);
        this._loaded = true;
        if (h) {
            h(this, args);
        }
        if (window.pageLoad) {
            window.pageLoad(this, args);
        }
        this._createdComponents = [];
    }
    function Sys$_Application$removeComponent(component) {
        /// &lt;summary locid=&quot;M:J#Sys.Application.removeComponent&quot; /&gt;
        /// &lt;param name=&quot;component&quot; type=&quot;Sys.Component&quot;&gt;&lt;/param&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;component&quot;, type: Sys.Component}
        ]);
        if (e) throw e;
        var id = component.get_id();
        if (id) delete this._components[id];
    }
    function Sys$_Application$unregisterDisposableObject(object) {
        /// &lt;summary locid=&quot;M:J#Sys.Application.unregisterDisposableObject&quot; /&gt;
        /// &lt;param name=&quot;object&quot; type=&quot;Sys.IDisposable&quot;&gt;&lt;/param&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;object&quot;, type: Sys.IDisposable}
        ]);
        if (e) throw e;
        if (!this._disposing) {
            var i = object.__msdisposeindex;
            if (typeof(i) === &quot;number&quot;) {
                var disposableObjects = this._disposableObjects;
                delete disposableObjects[i];
                delete object.__msdisposeindex;
                if (++this._deleteCount &gt; 1000) {
                    var newArray = [];
                    for (var j = 0, l = disposableObjects.length; j &lt; l; j++) {
                        object = disposableObjects[j];
                        if (typeof(object) !== &quot;undefined&quot;) {
                            object.__msdisposeindex = newArray.length;
                            newArray.push(object);
                        }
                    }
                    this._disposableObjects = newArray;
                    this._deleteCount = 0;
                }
            }
        }
    }
    function Sys$_Application$_addComponentToSecondPass(component, references) {
        this._secondPassComponents[this._secondPassComponents.length] = {component: component, references: references};
    }
    function Sys$_Application$_disposeComponents(list) {
        if (list) {
            for (var i = list.length - 1; i &gt;= 0; i--) {
                var item = list[i];
                if (typeof(item.dispose) === &quot;function&quot;) {
                    item.dispose();
                }
            }
        }
    }
    function Sys$_Application$_domReady() {
        var check, er, app = this;
        function init() { app.initialize(); }
        var onload = function() {
            Sys.UI.DomEvent.removeHandler(window, &quot;load&quot;, onload);
            init();
        }
        Sys.UI.DomEvent.addHandler(window, &quot;load&quot;, onload);
        
        if (document.addEventListener) {
            try {
                document.addEventListener(&quot;DOMContentLoaded&quot;, check = function() {
                    document.removeEventListener(&quot;DOMContentLoaded&quot;, check, false);
                    init();
                }, false);
            }
            catch (er) { }
        }
        else if (document.attachEvent) {
            if ((window == window.top) &amp;&amp; document.documentElement.doScroll) {
                var timeout, el = document.createElement(&quot;div&quot;);
                check = function() {
                    try {
                        el.doScroll(&quot;left&quot;);
                    }
                    catch (er) {
                        timeout = window.setTimeout(check, 0);
                        return;
                    }
                    el = null;
                    init();
                }
                check();
            }
            else {
		document.attachEvent(&quot;onreadystatechange&quot;, check = function() {
                    if (document.readyState === &quot;complete&quot;) {
                        document.detachEvent(&quot;onreadystatechange&quot;, check);
                        init();
                    }
                });
            }
        }
    }
    function Sys$_Application$_raiseInit() {
        var handler = this.get_events().getHandler(&quot;init&quot;);
        if (handler) {
            this.beginCreateComponents();
            handler(this, Sys.EventArgs.Empty);
            this.endCreateComponents();
        }
    }
    function Sys$_Application$_unloadHandler(event) {
        this.dispose();
    }
Sys._Application.prototype = {
    _creatingComponents: false,
    _disposing: false,
    _deleteCount: 0,
    get_isCreatingComponents: Sys$_Application$get_isCreatingComponents,
    get_isDisposing: Sys$_Application$get_isDisposing,
    add_init: Sys$_Application$add_init,
    remove_init: Sys$_Application$remove_init,
    add_load: Sys$_Application$add_load,
    remove_load: Sys$_Application$remove_load,
    add_unload: Sys$_Application$add_unload,
    remove_unload: Sys$_Application$remove_unload,
    addComponent: Sys$_Application$addComponent,
    beginCreateComponents: Sys$_Application$beginCreateComponents,
    dispose: Sys$_Application$dispose,
    disposeElement: Sys$_Application$disposeElement,
    endCreateComponents: Sys$_Application$endCreateComponents,
    findComponent: Sys$_Application$findComponent,
    getComponents: Sys$_Application$getComponents,
    initialize: Sys$_Application$initialize,
    notifyScriptLoaded: Sys$_Application$notifyScriptLoaded,
    registerDisposableObject: Sys$_Application$registerDisposableObject,
    raiseLoad: Sys$_Application$raiseLoad,
    removeComponent: Sys$_Application$removeComponent,
    unregisterDisposableObject: Sys$_Application$unregisterDisposableObject,
    _addComponentToSecondPass: Sys$_Application$_addComponentToSecondPass,
    _disposeComponents: Sys$_Application$_disposeComponents,
    _domReady: Sys$_Application$_domReady,
    _raiseInit: Sys$_Application$_raiseInit,
    _unloadHandler: Sys$_Application$_unloadHandler
}
Sys._Application.registerClass(&#039;Sys._Application&#039;, Sys.Component, Sys.IContainer);
Sys.Application = new Sys._Application();
var $find = Sys.Application.findComponent;
 
Sys.UI.Behavior = function Sys$UI$Behavior(element) {
    /// &lt;summary locid=&quot;M:J#Sys.UI.Behavior.#ctor&quot; /&gt;
    /// &lt;param name=&quot;element&quot; domElement=&quot;true&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;element&quot;, domElement: true}
    ]);
    if (e) throw e;
    Sys.UI.Behavior.initializeBase(this);
    this._element = element;
    var behaviors = element._behaviors;
    if (!behaviors) {
        element._behaviors = [this];
    }
    else {
        behaviors[behaviors.length] = this;
    }
}
    function Sys$UI$Behavior$get_element() {
        /// &lt;value domElement=&quot;true&quot; locid=&quot;P:J#Sys.UI.Behavior.element&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._element;
    }
    function Sys$UI$Behavior$get_id() {
        /// &lt;value type=&quot;String&quot; locid=&quot;P:J#Sys.UI.Behavior.id&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        var baseId = Sys.UI.Behavior.callBaseMethod(this, &#039;get_id&#039;);
        if (baseId) return baseId;
        if (!this._element || !this._element.id) return &#039;&#039;;
        return this._element.id + &#039;$&#039; + this.get_name();
    }
    function Sys$UI$Behavior$get_name() {
        /// &lt;value type=&quot;String&quot; locid=&quot;P:J#Sys.UI.Behavior.name&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        if (this._name) return this._name;
        var name = Object.getTypeName(this);
        var i = name.lastIndexOf(&#039;.&#039;);
        if (i !== -1) name = name.substr(i + 1);
        if (!this.get_isInitialized()) this._name = name;
        return name;
    }
    function Sys$UI$Behavior$set_name(value) {
        var e = Function._validateParams(arguments, [{name: &quot;value&quot;, type: String}]);
        if (e) throw e;
        if ((value === &#039;&#039;) || (value.charAt(0) === &#039; &#039;) || (value.charAt(value.length - 1) === &#039; &#039;))
            throw Error.argument(&#039;value&#039;, Sys.Res.invalidId);
        if (typeof(this._element[value]) !== &#039;undefined&#039;)
            throw Error.invalidOperation(String.format(Sys.Res.behaviorDuplicateName, value));
        if (this.get_isInitialized()) throw Error.invalidOperation(Sys.Res.cantSetNameAfterInit);
        this._name = value;
    }
    function Sys$UI$Behavior$initialize() {
        Sys.UI.Behavior.callBaseMethod(this, &#039;initialize&#039;);
        var name = this.get_name();
        if (name) this._element[name] = this;
    }
    function Sys$UI$Behavior$dispose() {
        Sys.UI.Behavior.callBaseMethod(this, &#039;dispose&#039;);
        var e = this._element;
        if (e) {
            var name = this.get_name();
            if (name) {
                e[name] = null;
            }
            var behaviors = e._behaviors;
            Array.remove(behaviors, this);
            if (behaviors.length === 0) {
                e._behaviors = null;
            }
            delete this._element;
        }
    }
Sys.UI.Behavior.prototype = {
    _name: null,
    get_element: Sys$UI$Behavior$get_element,
    get_id: Sys$UI$Behavior$get_id,
    get_name: Sys$UI$Behavior$get_name,
    set_name: Sys$UI$Behavior$set_name,
    initialize: Sys$UI$Behavior$initialize,
    dispose: Sys$UI$Behavior$dispose
}
Sys.UI.Behavior.registerClass(&#039;Sys.UI.Behavior&#039;, Sys.Component);
Sys.UI.Behavior.getBehaviorByName = function Sys$UI$Behavior$getBehaviorByName(element, name) {
    /// &lt;summary locid=&quot;M:J#Sys.UI.Behavior.getBehaviorByName&quot; /&gt;
    /// &lt;param name=&quot;element&quot; domElement=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;name&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Sys.UI.Behavior&quot; mayBeNull=&quot;true&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;element&quot;, domElement: true},
        {name: &quot;name&quot;, type: String}
    ]);
    if (e) throw e;
    var b = element[name];
    return (b &amp;&amp; Sys.UI.Behavior.isInstanceOfType(b)) ? b : null;
}
Sys.UI.Behavior.getBehaviors = function Sys$UI$Behavior$getBehaviors(element) {
    /// &lt;summary locid=&quot;M:J#Sys.UI.Behavior.getBehaviors&quot; /&gt;
    /// &lt;param name=&quot;element&quot; domElement=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Array&quot; elementType=&quot;Sys.UI.Behavior&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;element&quot;, domElement: true}
    ]);
    if (e) throw e;
    if (!element._behaviors) return [];
    return Array.clone(element._behaviors);
}
Sys.UI.Behavior.getBehaviorsByType = function Sys$UI$Behavior$getBehaviorsByType(element, type) {
    /// &lt;summary locid=&quot;M:J#Sys.UI.Behavior.getBehaviorsByType&quot; /&gt;
    /// &lt;param name=&quot;element&quot; domElement=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;type&quot; type=&quot;Type&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Array&quot; elementType=&quot;Sys.UI.Behavior&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;element&quot;, domElement: true},
        {name: &quot;type&quot;, type: Type}
    ]);
    if (e) throw e;
    var behaviors = element._behaviors;
    var results = [];
    if (behaviors) {
        for (var i = 0, l = behaviors.length; i &lt; l; i++) {
            if (type.isInstanceOfType(behaviors[i])) {
                results[results.length] = behaviors[i];
            }
        }
    }
    return results;
}
 
Sys.UI.VisibilityMode = function Sys$UI$VisibilityMode() {
    /// &lt;summary locid=&quot;M:J#Sys.UI.VisibilityMode.#ctor&quot; /&gt;
    /// &lt;field name=&quot;hide&quot; type=&quot;Number&quot; integer=&quot;true&quot; static=&quot;true&quot; locid=&quot;F:J#Sys.UI.VisibilityMode.hide&quot;&gt;&lt;/field&gt;
    /// &lt;field name=&quot;collapse&quot; type=&quot;Number&quot; integer=&quot;true&quot; static=&quot;true&quot; locid=&quot;F:J#Sys.UI.VisibilityMode.collapse&quot;&gt;&lt;/field&gt;
    if (arguments.length !== 0) throw Error.parameterCount();
    throw Error.notImplemented();
}
Sys.UI.VisibilityMode.prototype = {
    hide: 0,
    collapse: 1
}
Sys.UI.VisibilityMode.registerEnum(&quot;Sys.UI.VisibilityMode&quot;);
 
Sys.UI.Control = function Sys$UI$Control(element) {
    /// &lt;summary locid=&quot;M:J#Sys.UI.Control.#ctor&quot; /&gt;
    /// &lt;param name=&quot;element&quot; domElement=&quot;true&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;element&quot;, domElement: true}
    ]);
    if (e) throw e;
    if (typeof(element.control) !== &#039;undefined&#039;) throw Error.invalidOperation(Sys.Res.controlAlreadyDefined);
    Sys.UI.Control.initializeBase(this);
    this._element = element;
    element.control = this;
    var role = this.get_role();
    if (role) {
        element.setAttribute(&quot;role&quot;, role);
    }
}
    function Sys$UI$Control$get_element() {
        /// &lt;value domElement=&quot;true&quot; locid=&quot;P:J#Sys.UI.Control.element&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._element;
    }
    function Sys$UI$Control$get_id() {
        /// &lt;value type=&quot;String&quot; locid=&quot;P:J#Sys.UI.Control.id&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        if (!this._element) return &#039;&#039;;
        return this._element.id;
    }
    function Sys$UI$Control$set_id(value) {
        var e = Function._validateParams(arguments, [{name: &quot;value&quot;, type: String}]);
        if (e) throw e;
        throw Error.invalidOperation(Sys.Res.cantSetId);
    }
    function Sys$UI$Control$get_parent() {
        /// &lt;value type=&quot;Sys.UI.Control&quot; locid=&quot;P:J#Sys.UI.Control.parent&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        if (this._parent) return this._parent;
        if (!this._element) return null;
        
        var parentElement = this._element.parentNode;
        while (parentElement) {
            if (parentElement.control) {
                return parentElement.control;
            }
            parentElement = parentElement.parentNode;
        }
        return null;
    }
    function Sys$UI$Control$set_parent(value) {
        var e = Function._validateParams(arguments, [{name: &quot;value&quot;, type: Sys.UI.Control}]);
        if (e) throw e;
        if (!this._element) throw Error.invalidOperation(Sys.Res.cantBeCalledAfterDispose);
        var parents = [this];
        var current = value;
        while (current) {
            if (Array.contains(parents, current)) throw Error.invalidOperation(Sys.Res.circularParentChain);
            parents[parents.length] = current;
            current = current.get_parent();
        }
        this._parent = value;
    }
    function Sys$UI$Control$get_role() {
        /// &lt;value type=&quot;String&quot; locid=&quot;P:J#Sys.UI.Control.role&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return null;
    }
    function Sys$UI$Control$get_visibilityMode() {
        /// &lt;value type=&quot;Sys.UI.VisibilityMode&quot; locid=&quot;P:J#Sys.UI.Control.visibilityMode&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        if (!this._element) throw Error.invalidOperation(Sys.Res.cantBeCalledAfterDispose);
        return Sys.UI.DomElement.getVisibilityMode(this._element);
    }
    function Sys$UI$Control$set_visibilityMode(value) {
        var e = Function._validateParams(arguments, [{name: &quot;value&quot;, type: Sys.UI.VisibilityMode}]);
        if (e) throw e;
        if (!this._element) throw Error.invalidOperation(Sys.Res.cantBeCalledAfterDispose);
        Sys.UI.DomElement.setVisibilityMode(this._element, value);
    }
    function Sys$UI$Control$get_visible() {
        /// &lt;value type=&quot;Boolean&quot; locid=&quot;P:J#Sys.UI.Control.visible&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        if (!this._element) throw Error.invalidOperation(Sys.Res.cantBeCalledAfterDispose);
        return Sys.UI.DomElement.getVisible(this._element);
    }
    function Sys$UI$Control$set_visible(value) {
        var e = Function._validateParams(arguments, [{name: &quot;value&quot;, type: Boolean}]);
        if (e) throw e;
        if (!this._element) throw Error.invalidOperation(Sys.Res.cantBeCalledAfterDispose);
        Sys.UI.DomElement.setVisible(this._element, value)
    }
    function Sys$UI$Control$addCssClass(className) {
        /// &lt;summary locid=&quot;M:J#Sys.UI.Control.addCssClass&quot; /&gt;
        /// &lt;param name=&quot;className&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;className&quot;, type: String}
        ]);
        if (e) throw e;
        if (!this._element) throw Error.invalidOperation(Sys.Res.cantBeCalledAfterDispose);
        Sys.UI.DomElement.addCssClass(this._element, className);
    }
    function Sys$UI$Control$dispose() {
        Sys.UI.Control.callBaseMethod(this, &#039;dispose&#039;);
        if (this._element) {
            this._element.control = null;
            delete this._element;
        }
        if (this._parent) delete this._parent;
    }
    function Sys$UI$Control$onBubbleEvent(source, args) {
        /// &lt;summary locid=&quot;M:J#Sys.UI.Control.onBubbleEvent&quot; /&gt;
        /// &lt;param name=&quot;source&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;args&quot; type=&quot;Sys.EventArgs&quot;&gt;&lt;/param&gt;
        /// &lt;returns type=&quot;Boolean&quot;&gt;&lt;/returns&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;source&quot;},
            {name: &quot;args&quot;, type: Sys.EventArgs}
        ]);
        if (e) throw e;
        return false;
    }
    function Sys$UI$Control$raiseBubbleEvent(source, args) {
        /// &lt;summary locid=&quot;M:J#Sys.UI.Control.raiseBubbleEvent&quot; /&gt;
        /// &lt;param name=&quot;source&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;args&quot; type=&quot;Sys.EventArgs&quot;&gt;&lt;/param&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;source&quot;},
            {name: &quot;args&quot;, type: Sys.EventArgs}
        ]);
        if (e) throw e;
        this._raiseBubbleEvent(source, args);
    }
    function Sys$UI$Control$_raiseBubbleEvent(source, args) {
        var currentTarget = this.get_parent();
        while (currentTarget) {
            if (currentTarget.onBubbleEvent(source, args)) {
                return;
            }
            currentTarget = currentTarget.get_parent();
        }
    }
    function Sys$UI$Control$removeCssClass(className) {
        /// &lt;summary locid=&quot;M:J#Sys.UI.Control.removeCssClass&quot; /&gt;
        /// &lt;param name=&quot;className&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;className&quot;, type: String}
        ]);
        if (e) throw e;
        if (!this._element) throw Error.invalidOperation(Sys.Res.cantBeCalledAfterDispose);
        Sys.UI.DomElement.removeCssClass(this._element, className);
    }
    function Sys$UI$Control$toggleCssClass(className) {
        /// &lt;summary locid=&quot;M:J#Sys.UI.Control.toggleCssClass&quot; /&gt;
        /// &lt;param name=&quot;className&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;className&quot;, type: String}
        ]);
        if (e) throw e;
        if (!this._element) throw Error.invalidOperation(Sys.Res.cantBeCalledAfterDispose);
        Sys.UI.DomElement.toggleCssClass(this._element, className);
    }
Sys.UI.Control.prototype = {
    _parent: null,
    _visibilityMode: Sys.UI.VisibilityMode.hide,
    get_element: Sys$UI$Control$get_element,
    get_id: Sys$UI$Control$get_id,
    set_id: Sys$UI$Control$set_id,
    get_parent: Sys$UI$Control$get_parent,
    set_parent: Sys$UI$Control$set_parent,
    get_role: Sys$UI$Control$get_role,
    get_visibilityMode: Sys$UI$Control$get_visibilityMode,
    set_visibilityMode: Sys$UI$Control$set_visibilityMode,
    get_visible: Sys$UI$Control$get_visible,
    set_visible: Sys$UI$Control$set_visible,
    addCssClass: Sys$UI$Control$addCssClass,
    dispose: Sys$UI$Control$dispose,
    onBubbleEvent: Sys$UI$Control$onBubbleEvent,
    raiseBubbleEvent: Sys$UI$Control$raiseBubbleEvent,
    _raiseBubbleEvent: Sys$UI$Control$_raiseBubbleEvent,
    removeCssClass: Sys$UI$Control$removeCssClass,
    toggleCssClass: Sys$UI$Control$toggleCssClass
}
Sys.UI.Control.registerClass(&#039;Sys.UI.Control&#039;, Sys.Component);
Sys.HistoryEventArgs = function Sys$HistoryEventArgs(state) {
    /// &lt;summary locid=&quot;M:J#Sys.HistoryEventArgs.#ctor&quot; /&gt;
    /// &lt;param name=&quot;state&quot; type=&quot;Object&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;state&quot;, type: Object}
    ]);
    if (e) throw e;
    Sys.HistoryEventArgs.initializeBase(this);
    this._state = state;
}
    function Sys$HistoryEventArgs$get_state() {
        /// &lt;value type=&quot;Object&quot; locid=&quot;P:J#Sys.HistoryEventArgs.state&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._state;
    }
Sys.HistoryEventArgs.prototype = {
    get_state: Sys$HistoryEventArgs$get_state
}
Sys.HistoryEventArgs.registerClass(&#039;Sys.HistoryEventArgs&#039;, Sys.EventArgs);
Sys.Application._appLoadHandler = null;
Sys.Application._beginRequestHandler = null;
Sys.Application._clientId = null;
Sys.Application._currentEntry = &#039;&#039;;
Sys.Application._endRequestHandler = null;
Sys.Application._history = null;
Sys.Application._enableHistory = false;
Sys.Application._historyEnabledInScriptManager = false;
Sys.Application._historyFrame = null;
Sys.Application._historyInitialized = false;
Sys.Application._historyPointIsNew = false;
Sys.Application._ignoreTimer = false;
Sys.Application._initialState = null;
Sys.Application._state = {};
Sys.Application._timerCookie = 0;
Sys.Application._timerHandler = null;
Sys.Application._uniqueId = null;
Sys._Application.prototype.get_stateString = function Sys$_Application$get_stateString() {
    /// &lt;summary locid=&quot;M:J#Sys._Application.get_stateString&quot; /&gt;
    if (arguments.length !== 0) throw Error.parameterCount();
    var hash = null;
    
    if (Sys.Browser.agent === Sys.Browser.Firefox) {
        var href = window.location.href;
        var hashIndex = href.indexOf(&#039;#&#039;);
        if (hashIndex !== -1) {
            hash = href.substring(hashIndex + 1);
        }
        else {
            hash = &quot;&quot;;
        }
        return hash;
    }
    else {
        hash = window.location.hash;
    }
    
    if ((hash.length &gt; 0) &amp;&amp; (hash.charAt(0) === &#039;#&#039;)) {
        hash = hash.substring(1);
    }
    return hash;
};
Sys._Application.prototype.get_enableHistory = function Sys$_Application$get_enableHistory() {
    /// &lt;summary locid=&quot;M:J#Sys._Application.get_enableHistory&quot; /&gt;
    if (arguments.length !== 0) throw Error.parameterCount();
    return this._enableHistory;
};
Sys._Application.prototype.set_enableHistory = function Sys$_Application$set_enableHistory(value) {
    if (this._initialized &amp;&amp; !this._initializing) {
        throw Error.invalidOperation(Sys.Res.historyCannotEnableHistory);
    }
    else if (this._historyEnabledInScriptManager &amp;&amp; !value) {
        throw Error.invalidOperation(Sys.Res.invalidHistorySettingCombination);
    }
    this._enableHistory = value;
};
Sys._Application.prototype.add_navigate = function Sys$_Application$add_navigate(handler) {
    /// &lt;summary locid=&quot;E:J#Sys.Application.navigate&quot; /&gt;
    /// &lt;param name=&quot;handler&quot; type=&quot;Function&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;handler&quot;, type: Function}
    ]);
    if (e) throw e;
    this.get_events().addHandler(&quot;navigate&quot;, handler);
};
Sys._Application.prototype.remove_navigate = function Sys$_Application$remove_navigate(handler) {
    /// &lt;summary locid=&quot;M:J#Sys._Application.remove_navigate&quot; /&gt;
    /// &lt;param name=&quot;handler&quot; type=&quot;Function&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;handler&quot;, type: Function}
    ]);
    if (e) throw e;
    this.get_events().removeHandler(&quot;navigate&quot;, handler);
};
Sys._Application.prototype.addHistoryPoint = function Sys$_Application$addHistoryPoint(state, title) {
    /// &lt;summary locid=&quot;M:J#Sys.Application.addHistoryPoint&quot; /&gt;
    /// &lt;param name=&quot;state&quot; type=&quot;Object&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;title&quot; type=&quot;String&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;state&quot;, type: Object},
        {name: &quot;title&quot;, type: String, mayBeNull: true, optional: true}
    ]);
    if (e) throw e;
    if (!this._enableHistory) throw Error.invalidOperation(Sys.Res.historyCannotAddHistoryPointWithHistoryDisabled);
    for (var n in state) {
        var v = state[n];
        var t = typeof(v);
        if ((v !== null) &amp;&amp; ((t === &#039;object&#039;) || (t === &#039;function&#039;) || (t === &#039;undefined&#039;))) {
            throw Error.argument(&#039;state&#039;, Sys.Res.stateMustBeStringDictionary);
        }
    }
    this._ensureHistory();
    var initialState = this._state;
    for (var key in state) {
        var value = state[key];
        if (value === null) {
            if (typeof(initialState[key]) !== &#039;undefined&#039;) {
                delete initialState[key];
            }
        }
        else {
            initialState[key] = value;
        }
    }
    var entry = this._serializeState(initialState);
    this._historyPointIsNew = true;
    this._setState(entry, title);
    this._raiseNavigate();
};
Sys._Application.prototype.setServerId = function Sys$_Application$setServerId(clientId, uniqueId) {
    /// &lt;summary locid=&quot;M:J#Sys.Application.setServerId&quot; /&gt;
    /// &lt;param name=&quot;clientId&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;uniqueId&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;clientId&quot;, type: String},
        {name: &quot;uniqueId&quot;, type: String}
    ]);
    if (e) throw e;
    this._clientId = clientId;
    this._uniqueId = uniqueId;
};
Sys._Application.prototype.setServerState = function Sys$_Application$setServerState(value) {
    /// &lt;summary locid=&quot;M:J#Sys.Application.setServerState&quot; /&gt;
    /// &lt;param name=&quot;value&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;value&quot;, type: String}
    ]);
    if (e) throw e;
    this._ensureHistory();
    this._state.__s = value;
    this._updateHiddenField(value);
};
Sys._Application.prototype._deserializeState = function Sys$_Application$_deserializeState(entry) {
    var result = {};
    entry = entry || &#039;&#039;;
    var serverSeparator = entry.indexOf(&#039;&amp;&amp;&#039;);
    if ((serverSeparator !== -1) &amp;&amp; (serverSeparator + 2 &lt; entry.length)) {
        result.__s = entry.substr(serverSeparator + 2);
        entry = entry.substr(0, serverSeparator);
    }
    var tokens = entry.split(&#039;&amp;&#039;);
    for (var i = 0, l = tokens.length; i &lt; l; i++) {
        var token = tokens[i];
        var equal = token.indexOf(&#039;=&#039;);
        if ((equal !== -1) &amp;&amp; (equal + 1 &lt; token.length)) {
            var name = token.substr(0, equal);
            var value = token.substr(equal + 1);
            result[name] = decodeURIComponent(value);
        }
    }
    return result;
};
Sys._Application.prototype._enableHistoryInScriptManager = function Sys$_Application$_enableHistoryInScriptManager() {
    this._enableHistory = true;
    this._historyEnabledInScriptManager = true;
};
Sys._Application.prototype._ensureHistory = function Sys$_Application$_ensureHistory() {
    if (!this._historyInitialized &amp;&amp; this._enableHistory) {
        if ((Sys.Browser.agent === Sys.Browser.InternetExplorer) &amp;&amp; (Sys.Browser.documentMode &lt; 8)) {
            this._historyFrame = document.getElementById(&#039;__historyFrame&#039;);
            if (!this._historyFrame) throw Error.invalidOperation(Sys.Res.historyMissingFrame);
            this._ignoreIFrame = true;
        }
        this._timerHandler = Function.createDelegate(this, this._onIdle);
        this._timerCookie = window.setTimeout(this._timerHandler, 100);
        
        try {
            this._initialState = this._deserializeState(this.get_stateString());
        } catch(e) {}
        
        this._historyInitialized = true;
    }
};
Sys._Application.prototype._navigate = function Sys$_Application$_navigate(entry) {
    this._ensureHistory();
    var state = this._deserializeState(entry);
    
    if (this._uniqueId) {
        var oldServerEntry = this._state.__s || &#039;&#039;;
        var newServerEntry = state.__s || &#039;&#039;;
        if (newServerEntry !== oldServerEntry) {
            this._updateHiddenField(newServerEntry);
            __doPostBack(this._uniqueId, newServerEntry);
            this._state = state;
            return;
        }
    }
    this._setState(entry);
    this._state = state;
    this._raiseNavigate();
};
Sys._Application.prototype._onIdle = function Sys$_Application$_onIdle() {
    delete this._timerCookie;
    
    var entry = this.get_stateString();
    if (entry !== this._currentEntry) {
        if (!this._ignoreTimer) {
            this._historyPointIsNew = false;
            this._navigate(entry);
        }
    }
    else {
        this._ignoreTimer = false;
    }
    this._timerCookie = window.setTimeout(this._timerHandler, 100);
};
Sys._Application.prototype._onIFrameLoad = function Sys$_Application$_onIFrameLoad(entry) {
    this._ensureHistory();
    if (!this._ignoreIFrame) {
        this._historyPointIsNew = false;
        this._navigate(entry);
    }
    this._ignoreIFrame = false;
};
Sys._Application.prototype._onPageRequestManagerBeginRequest = function Sys$_Application$_onPageRequestManagerBeginRequest(sender, args) {
    this._ignoreTimer = true;
    this._originalTitle = document.title;
};
Sys._Application.prototype._onPageRequestManagerEndRequest = function Sys$_Application$_onPageRequestManagerEndRequest(sender, args) {
    var dataItem = args.get_dataItems()[this._clientId];
    var originalTitle = this._originalTitle;
    this._originalTitle = null;
    var eventTarget = document.getElementById(&quot;__EVENTTARGET&quot;);
    if (eventTarget &amp;&amp; eventTarget.value === this._uniqueId) {
        eventTarget.value = &#039;&#039;;
    }
    if (typeof(dataItem) !== &#039;undefined&#039;) {
        this.setServerState(dataItem);
        this._historyPointIsNew = true;
    }
    else {
        this._ignoreTimer = false;
    }
    var entry = this._serializeState(this._state);
    if (entry !== this._currentEntry) {
        this._ignoreTimer = true;
        if (typeof(originalTitle) === &quot;string&quot;) {
            if (Sys.Browser.agent !== Sys.Browser.InternetExplorer || Sys.Browser.version &gt; 7) {
                var newTitle = document.title;
                document.title = originalTitle;
                this._setState(entry);
                document.title = newTitle;
            }
            else {
                this._setState(entry);
            }
            this._raiseNavigate();
        }
        else {
            this._setState(entry);
            this._raiseNavigate();
        }
    }
};
Sys._Application.prototype._raiseNavigate = function Sys$_Application$_raiseNavigate() {
    var isNew = this._historyPointIsNew;
    var h = this.get_events().getHandler(&quot;navigate&quot;);
    var stateClone = {};
    for (var key in this._state) {
        if (key !== &#039;__s&#039;) {
            stateClone[key] = this._state[key];
        }
    }
    var args = new Sys.HistoryEventArgs(stateClone);
    if (h) {
        h(this, args);
    }
    if (!isNew) {
        var err;
        try {
            if ((Sys.Browser.agent === Sys.Browser.Firefox) &amp;&amp; window.location.hash &amp;&amp;
                (!window.frameElement || window.top.location.hash)) {
                (Sys.Browser.version &lt; 3.5) ?
                    window.history.go(0) :
                    location.hash = this.get_stateString();
            }
        }
        catch(err) {
        }
    }
};
Sys._Application.prototype._serializeState = function Sys$_Application$_serializeState(state) {
    var serialized = [];
    for (var key in state) {
        var value = state[key];
        if (key === &#039;__s&#039;) {
            var serverState = value;
        }
        else {
            if (key.indexOf(&#039;=&#039;) !== -1) throw Error.argument(&#039;state&#039;, Sys.Res.stateFieldNameInvalid);
            serialized[serialized.length] = key + &#039;=&#039; + encodeURIComponent(value);
        }
    }
    return serialized.join(&#039;&amp;&#039;) + (serverState ? &#039;&amp;&amp;&#039; + serverState : &#039;&#039;);
};
Sys._Application.prototype._setState = function Sys$_Application$_setState(entry, title) {
    if (this._enableHistory) {
        entry = entry || &#039;&#039;;
        if (entry !== this._currentEntry) {
            if (window.theForm) {
                var action = window.theForm.action;
                var hashIndex = action.indexOf(&#039;#&#039;);
                window.theForm.action = ((hashIndex !== -1) ? action.substring(0, hashIndex) : action) + &#039;#&#039; + entry;
            }
        
            if (this._historyFrame &amp;&amp; this._historyPointIsNew) {
                this._ignoreIFrame = true;
                var frameDoc = this._historyFrame.contentWindow.document;
                frameDoc.open(&quot;javascript:&#039;&lt;html&gt;&lt;/html&gt;&#039;&quot;);
                frameDoc.write(&quot;&lt;html&gt;&lt;head&gt;&lt;title&gt;&quot; + (title || document.title) +
                    &quot;&lt;/title&gt;&lt;scri&quot; + &quot;pt type=\&quot;text/javascript\&quot;&gt;parent.Sys.Application._onIFrameLoad(&quot; + 
                    Sys.Serialization.JavaScriptSerializer.serialize(entry) +
                    &quot;);&lt;/scri&quot; + &quot;pt&gt;&lt;/head&gt;&lt;body&gt;&lt;/body&gt;&lt;/html&gt;&quot;);
                frameDoc.close();
            }
            this._ignoreTimer = false;
            this._currentEntry = entry;
            if (this._historyFrame || this._historyPointIsNew) {
                var currentHash = this.get_stateString();
                if (entry !== currentHash) {
                    var loc = document.location;
                    if (loc.href.length - loc.hash.length + entry.length &gt; 2048) {
                        throw Error.invalidOperation(String.format(Sys.Res.urlTooLong, 2048));
                    }
                    window.location.hash = entry;
                    this._currentEntry = this.get_stateString();
                    if ((typeof(title) !== &#039;undefined&#039;) &amp;&amp; (title !== null)) {
                        document.title = title;
                    }
                }
            }
            this._historyPointIsNew = false;
        }
    }
};
Sys._Application.prototype._updateHiddenField = function Sys$_Application$_updateHiddenField(value) {
    if (this._clientId) {
        var serverStateField = document.getElementById(this._clientId);
        if (serverStateField) {
            serverStateField.value = value;
        }
    }
};
 
if (!window.XMLHttpRequest) {
    window.XMLHttpRequest = function window$XMLHttpRequest() {
        var progIDs = [ &#039;Msxml2.XMLHTTP.3.0&#039;, &#039;Msxml2.XMLHTTP&#039; ];
        for (var i = 0, l = progIDs.length; i &lt; l; i++) {
            try {
                return new ActiveXObject(progIDs[i]);
            }
            catch (ex) {
            }
        }
        return null;
    }
}
Type.registerNamespace(&#039;Sys.Net&#039;);
 
Sys.Net.WebRequestExecutor = function Sys$Net$WebRequestExecutor() {
    /// &lt;summary locid=&quot;M:J#Sys.Net.WebRequestExecutor.#ctor&quot; /&gt;
    if (arguments.length !== 0) throw Error.parameterCount();
    this._webRequest = null;
    this._resultObject = null;
}
    function Sys$Net$WebRequestExecutor$get_webRequest() {
        /// &lt;value type=&quot;Sys.Net.WebRequest&quot; locid=&quot;P:J#Sys.Net.WebRequestExecutor.webRequest&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._webRequest;
    }
    function Sys$Net$WebRequestExecutor$_set_webRequest(value) {
        if (this.get_started()) {
            throw Error.invalidOperation(String.format(Sys.Res.cannotCallOnceStarted, &#039;set_webRequest&#039;));
        }
        this._webRequest = value;
    }
    function Sys$Net$WebRequestExecutor$get_started() {
        /// &lt;value type=&quot;Boolean&quot; locid=&quot;P:J#Sys.Net.WebRequestExecutor.started&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        throw Error.notImplemented();
    }
    function Sys$Net$WebRequestExecutor$get_responseAvailable() {
        /// &lt;value type=&quot;Boolean&quot; locid=&quot;P:J#Sys.Net.WebRequestExecutor.responseAvailable&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        throw Error.notImplemented();
    }
    function Sys$Net$WebRequestExecutor$get_timedOut() {
        /// &lt;value type=&quot;Boolean&quot; locid=&quot;P:J#Sys.Net.WebRequestExecutor.timedOut&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        throw Error.notImplemented();
    }
    function Sys$Net$WebRequestExecutor$get_aborted() {
        /// &lt;value type=&quot;Boolean&quot; locid=&quot;P:J#Sys.Net.WebRequestExecutor.aborted&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        throw Error.notImplemented();
    }
    function Sys$Net$WebRequestExecutor$get_responseData() {
        /// &lt;value type=&quot;String&quot; locid=&quot;P:J#Sys.Net.WebRequestExecutor.responseData&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        throw Error.notImplemented();
    }
    function Sys$Net$WebRequestExecutor$get_statusCode() {
        /// &lt;value type=&quot;Number&quot; locid=&quot;P:J#Sys.Net.WebRequestExecutor.statusCode&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        throw Error.notImplemented();
    }
    function Sys$Net$WebRequestExecutor$get_statusText() {
        /// &lt;value type=&quot;String&quot; locid=&quot;P:J#Sys.Net.WebRequestExecutor.statusText&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        throw Error.notImplemented();
    }
    function Sys$Net$WebRequestExecutor$get_xml() {
        /// &lt;value locid=&quot;P:J#Sys.Net.WebRequestExecutor.xml&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        throw Error.notImplemented();
    }
    function Sys$Net$WebRequestExecutor$get_object() {
        /// &lt;value locid=&quot;P:J#Sys.Net.WebRequestExecutor.object&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        if (!this._resultObject) {
            this._resultObject = Sys.Serialization.JavaScriptSerializer.deserialize(this.get_responseData());
        }
        return this._resultObject;
    }
    function Sys$Net$WebRequestExecutor$executeRequest() {
        /// &lt;summary locid=&quot;M:J#Sys.Net.WebRequestExecutor.executeRequest&quot; /&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        throw Error.notImplemented();
    }
    function Sys$Net$WebRequestExecutor$abort() {
        /// &lt;summary locid=&quot;M:J#Sys.Net.WebRequestExecutor.abort&quot; /&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        throw Error.notImplemented();
    }
    function Sys$Net$WebRequestExecutor$getResponseHeader(header) {
        /// &lt;summary locid=&quot;M:J#Sys.Net.WebRequestExecutor.getResponseHeader&quot; /&gt;
        /// &lt;param name=&quot;header&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;header&quot;, type: String}
        ]);
        if (e) throw e;
        throw Error.notImplemented();
    }
    function Sys$Net$WebRequestExecutor$getAllResponseHeaders() {
        /// &lt;summary locid=&quot;M:J#Sys.Net.WebRequestExecutor.getAllResponseHeaders&quot; /&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        throw Error.notImplemented();
    }
Sys.Net.WebRequestExecutor.prototype = {
    get_webRequest: Sys$Net$WebRequestExecutor$get_webRequest,
    _set_webRequest: Sys$Net$WebRequestExecutor$_set_webRequest,
    get_started: Sys$Net$WebRequestExecutor$get_started,
    get_responseAvailable: Sys$Net$WebRequestExecutor$get_responseAvailable,
    get_timedOut: Sys$Net$WebRequestExecutor$get_timedOut,
    get_aborted: Sys$Net$WebRequestExecutor$get_aborted,
    get_responseData: Sys$Net$WebRequestExecutor$get_responseData,
    get_statusCode: Sys$Net$WebRequestExecutor$get_statusCode,
    get_statusText: Sys$Net$WebRequestExecutor$get_statusText,
    get_xml: Sys$Net$WebRequestExecutor$get_xml,
    get_object: Sys$Net$WebRequestExecutor$get_object,
    executeRequest: Sys$Net$WebRequestExecutor$executeRequest,
    abort: Sys$Net$WebRequestExecutor$abort,
    getResponseHeader: Sys$Net$WebRequestExecutor$getResponseHeader,
    getAllResponseHeaders: Sys$Net$WebRequestExecutor$getAllResponseHeaders
}
Sys.Net.WebRequestExecutor.registerClass(&#039;Sys.Net.WebRequestExecutor&#039;);
 
Sys.Net.XMLDOM = function Sys$Net$XMLDOM(markup) {
    /// &lt;summary locid=&quot;M:J#Sys.Net.XMLDOM.#ctor&quot; /&gt;
    /// &lt;param name=&quot;markup&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;markup&quot;, type: String}
    ]);
    if (e) throw e;
    if (!window.DOMParser) {
        var progIDs = [ &#039;Msxml2.DOMDocument.3.0&#039;, &#039;Msxml2.DOMDocument&#039; ];
        for (var i = 0, l = progIDs.length; i &lt; l; i++) {
            try {
                var xmlDOM = new ActiveXObject(progIDs[i]);
                xmlDOM.async = false;
                xmlDOM.loadXML(markup);
                xmlDOM.setProperty(&#039;SelectionLanguage&#039;, &#039;XPath&#039;);
                return xmlDOM;
            }
            catch (ex) {
            }
        }
    }
    else {
        try {
            var domParser = new window.DOMParser();
            return domParser.parseFromString(markup, &#039;text/xml&#039;);
        }
        catch (ex) {
        }
    }
    return null;
}
Sys.Net.XMLHttpExecutor = function Sys$Net$XMLHttpExecutor() {
    /// &lt;summary locid=&quot;M:J#Sys.Net.XMLHttpExecutor.#ctor&quot; /&gt;
    if (arguments.length !== 0) throw Error.parameterCount();
    Sys.Net.XMLHttpExecutor.initializeBase(this);
    var _this = this;
    this._xmlHttpRequest = null;
    this._webRequest = null;
    this._responseAvailable = false;
    this._timedOut = false;
    this._timer = null;
    this._aborted = false;
    this._started = false;
    this._onReadyStateChange = (function () {
        
        if (_this._xmlHttpRequest.readyState === 4 ) {
            try {
                if (typeof(_this._xmlHttpRequest.status) === &quot;undefined&quot;) {
                    return;
                }
            }
            catch(ex) {
                return;
            }
            
            _this._clearTimer();
            _this._responseAvailable = true;
                _this._webRequest.completed(Sys.EventArgs.Empty);
                if (_this._xmlHttpRequest != null) {
                    _this._xmlHttpRequest.onreadystatechange = Function.emptyMethod;
                    _this._xmlHttpRequest = null;
                }
        }
    });
    this._clearTimer = (function() {
        if (_this._timer != null) {
            window.clearTimeout(_this._timer);
            _this._timer = null;
        }
    });
    this._onTimeout = (function() {
        if (!_this._responseAvailable) {
            _this._clearTimer();
            _this._timedOut = true;
            _this._xmlHttpRequest.onreadystatechange = Function.emptyMethod;
            _this._xmlHttpRequest.abort();
            _this._webRequest.completed(Sys.EventArgs.Empty);
            _this._xmlHttpRequest = null;
        }
    });
}
    function Sys$Net$XMLHttpExecutor$get_timedOut() {
        /// &lt;value type=&quot;Boolean&quot; locid=&quot;P:J#Sys.Net.XMLHttpExecutor.timedOut&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._timedOut;
    }
    function Sys$Net$XMLHttpExecutor$get_started() {
        /// &lt;value type=&quot;Boolean&quot; locid=&quot;P:J#Sys.Net.XMLHttpExecutor.started&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._started;
    }
    function Sys$Net$XMLHttpExecutor$get_responseAvailable() {
        /// &lt;value type=&quot;Boolean&quot; locid=&quot;P:J#Sys.Net.XMLHttpExecutor.responseAvailable&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._responseAvailable;
    }
    function Sys$Net$XMLHttpExecutor$get_aborted() {
        /// &lt;value type=&quot;Boolean&quot; locid=&quot;P:J#Sys.Net.XMLHttpExecutor.aborted&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._aborted;
    }
    function Sys$Net$XMLHttpExecutor$executeRequest() {
        /// &lt;summary locid=&quot;M:J#Sys.Net.XMLHttpExecutor.executeRequest&quot; /&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        this._webRequest = this.get_webRequest();
        if (this._started) {
            throw Error.invalidOperation(String.format(Sys.Res.cannotCallOnceStarted, &#039;executeRequest&#039;));
        }
        if (this._webRequest === null) {
            throw Error.invalidOperation(Sys.Res.nullWebRequest);
        }
        var body = this._webRequest.get_body();
        var headers = this._webRequest.get_headers();
        this._xmlHttpRequest = new XMLHttpRequest();
        this._xmlHttpRequest.onreadystatechange = this._onReadyStateChange;
        var verb = this._webRequest.get_httpVerb();
        this._xmlHttpRequest.open(verb, this._webRequest.getResolvedUrl(), true );
        this._xmlHttpRequest.setRequestHeader(&quot;X-Requested-With&quot;, &quot;XMLHttpRequest&quot;);
        if (headers) {
            for (var header in headers) {
                var val = headers[header];
                if (typeof(val) !== &quot;function&quot;)
                    this._xmlHttpRequest.setRequestHeader(header, val);
            }
        }
        if (verb.toLowerCase() === &quot;post&quot;) {
            if ((headers === null) || !headers[&#039;Content-Type&#039;]) {
                this._xmlHttpRequest.setRequestHeader(&#039;Content-Type&#039;, &#039;application/x-www-form-urlencoded; charset=utf-8&#039;);
            }
            if (!body) {
                body = &quot;&quot;;
            }
        }
        var timeout = this._webRequest.get_timeout();
        if (timeout &gt; 0) {
            this._timer = window.setTimeout(Function.createDelegate(this, this._onTimeout), timeout);
        }
        this._xmlHttpRequest.send(body);
        this._started = true;
    }
    function Sys$Net$XMLHttpExecutor$getResponseHeader(header) {
        /// &lt;summary locid=&quot;M:J#Sys.Net.XMLHttpExecutor.getResponseHeader&quot; /&gt;
        /// &lt;param name=&quot;header&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
        /// &lt;returns type=&quot;String&quot;&gt;&lt;/returns&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;header&quot;, type: String}
        ]);
        if (e) throw e;
        if (!this._responseAvailable) {
            throw Error.invalidOperation(String.format(Sys.Res.cannotCallBeforeResponse, &#039;getResponseHeader&#039;));
        }
        if (!this._xmlHttpRequest) {
            throw Error.invalidOperation(String.format(Sys.Res.cannotCallOutsideHandler, &#039;getResponseHeader&#039;));
        }
        var result;
        try {
            result = this._xmlHttpRequest.getResponseHeader(header);
        } catch (e) {
        }
        if (!result) result = &quot;&quot;;
        return result;
    }
    function Sys$Net$XMLHttpExecutor$getAllResponseHeaders() {
        /// &lt;summary locid=&quot;M:J#Sys.Net.XMLHttpExecutor.getAllResponseHeaders&quot; /&gt;
        /// &lt;returns type=&quot;String&quot;&gt;&lt;/returns&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        if (!this._responseAvailable) {
            throw Error.invalidOperation(String.format(Sys.Res.cannotCallBeforeResponse, &#039;getAllResponseHeaders&#039;));
        }
        if (!this._xmlHttpRequest) {
            throw Error.invalidOperation(String.format(Sys.Res.cannotCallOutsideHandler, &#039;getAllResponseHeaders&#039;));
        }
        return this._xmlHttpRequest.getAllResponseHeaders();
    }
    function Sys$Net$XMLHttpExecutor$get_responseData() {
        /// &lt;value type=&quot;String&quot; locid=&quot;P:J#Sys.Net.XMLHttpExecutor.responseData&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        if (!this._responseAvailable) {
            throw Error.invalidOperation(String.format(Sys.Res.cannotCallBeforeResponse, &#039;get_responseData&#039;));
        }
        if (!this._xmlHttpRequest) {
            throw Error.invalidOperation(String.format(Sys.Res.cannotCallOutsideHandler, &#039;get_responseData&#039;));
        }
        return this._xmlHttpRequest.responseText;
    }
    function Sys$Net$XMLHttpExecutor$get_statusCode() {
        /// &lt;value type=&quot;Number&quot; locid=&quot;P:J#Sys.Net.XMLHttpExecutor.statusCode&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        if (!this._responseAvailable) {
            throw Error.invalidOperation(String.format(Sys.Res.cannotCallBeforeResponse, &#039;get_statusCode&#039;));
        }
        if (!this._xmlHttpRequest) {
            throw Error.invalidOperation(String.format(Sys.Res.cannotCallOutsideHandler, &#039;get_statusCode&#039;));
        }
        var result = 0;
        try {
            result = this._xmlHttpRequest.status;
        }
        catch(ex) {
        }
        return result;
    }
    function Sys$Net$XMLHttpExecutor$get_statusText() {
        /// &lt;value type=&quot;String&quot; locid=&quot;P:J#Sys.Net.XMLHttpExecutor.statusText&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        if (!this._responseAvailable) {
            throw Error.invalidOperation(String.format(Sys.Res.cannotCallBeforeResponse, &#039;get_statusText&#039;));
        }
        if (!this._xmlHttpRequest) {
            throw Error.invalidOperation(String.format(Sys.Res.cannotCallOutsideHandler, &#039;get_statusText&#039;));
        }
        return this._xmlHttpRequest.statusText;
    }
    function Sys$Net$XMLHttpExecutor$get_xml() {
        /// &lt;value locid=&quot;P:J#Sys.Net.XMLHttpExecutor.xml&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        if (!this._responseAvailable) {
            throw Error.invalidOperation(String.format(Sys.Res.cannotCallBeforeResponse, &#039;get_xml&#039;));
        }
        if (!this._xmlHttpRequest) {
            throw Error.invalidOperation(String.format(Sys.Res.cannotCallOutsideHandler, &#039;get_xml&#039;));
        }
        var xml = this._xmlHttpRequest.responseXML;
        if (!xml || !xml.documentElement) {
            xml = Sys.Net.XMLDOM(this._xmlHttpRequest.responseText);
            if (!xml || !xml.documentElement)
                return null;
        }
        else if (navigator.userAgent.indexOf(&#039;MSIE&#039;) !== -1) {
            xml.setProperty(&#039;SelectionLanguage&#039;, &#039;XPath&#039;);
        }
        if (xml.documentElement.namespaceURI === &quot;http://www.mozilla.org/newlayout/xml/parsererror.xml&quot; &amp;&amp;
            xml.documentElement.tagName === &quot;parsererror&quot;) {
            return null;
        }
        
        if (xml.documentElement.firstChild &amp;&amp; xml.documentElement.firstChild.tagName === &quot;parsererror&quot;) {
            return null;
        }
        
        return xml;
    }
    function Sys$Net$XMLHttpExecutor$abort() {
        /// &lt;summary locid=&quot;M:J#Sys.Net.XMLHttpExecutor.abort&quot; /&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        if (!this._started) {
            throw Error.invalidOperation(Sys.Res.cannotAbortBeforeStart);
        }
        if (this._aborted || this._responseAvailable || this._timedOut)
            return;
        this._aborted = true;
        this._clearTimer();
        if (this._xmlHttpRequest &amp;&amp; !this._responseAvailable) {
            this._xmlHttpRequest.onreadystatechange = Function.emptyMethod;
            this._xmlHttpRequest.abort();
            
            this._xmlHttpRequest = null;            
            this._webRequest.completed(Sys.EventArgs.Empty);
        }
    }
Sys.Net.XMLHttpExecutor.prototype = {
    get_timedOut: Sys$Net$XMLHttpExecutor$get_timedOut,
    get_started: Sys$Net$XMLHttpExecutor$get_started,
    get_responseAvailable: Sys$Net$XMLHttpExecutor$get_responseAvailable,
    get_aborted: Sys$Net$XMLHttpExecutor$get_aborted,
    executeRequest: Sys$Net$XMLHttpExecutor$executeRequest,
    getResponseHeader: Sys$Net$XMLHttpExecutor$getResponseHeader,
    getAllResponseHeaders: Sys$Net$XMLHttpExecutor$getAllResponseHeaders,
    get_responseData: Sys$Net$XMLHttpExecutor$get_responseData,
    get_statusCode: Sys$Net$XMLHttpExecutor$get_statusCode,
    get_statusText: Sys$Net$XMLHttpExecutor$get_statusText,
    get_xml: Sys$Net$XMLHttpExecutor$get_xml,
    abort: Sys$Net$XMLHttpExecutor$abort
}
Sys.Net.XMLHttpExecutor.registerClass(&#039;Sys.Net.XMLHttpExecutor&#039;, Sys.Net.WebRequestExecutor);
 
Sys.Net._WebRequestManager = function Sys$Net$_WebRequestManager() {
    /// &lt;summary locid=&quot;P:J#Sys.Net.WebRequestManager.#ctor&quot; /&gt;
    if (arguments.length !== 0) throw Error.parameterCount();
    this._defaultTimeout = 0;
    this._defaultExecutorType = &quot;Sys.Net.XMLHttpExecutor&quot;;
}
    function Sys$Net$_WebRequestManager$add_invokingRequest(handler) {
        /// &lt;summary locid=&quot;E:J#Sys.Net.WebRequestManager.invokingRequest&quot; /&gt;
        var e = Function._validateParams(arguments, [{name: &quot;handler&quot;, type: Function}]);
        if (e) throw e;
        this._get_eventHandlerList().addHandler(&quot;invokingRequest&quot;, handler);
    }
    function Sys$Net$_WebRequestManager$remove_invokingRequest(handler) {
        var e = Function._validateParams(arguments, [{name: &quot;handler&quot;, type: Function}]);
        if (e) throw e;
        this._get_eventHandlerList().removeHandler(&quot;invokingRequest&quot;, handler);
    }
    function Sys$Net$_WebRequestManager$add_completedRequest(handler) {
        /// &lt;summary locid=&quot;E:J#Sys.Net.WebRequestManager.completedRequest&quot; /&gt;
        var e = Function._validateParams(arguments, [{name: &quot;handler&quot;, type: Function}]);
        if (e) throw e;
        this._get_eventHandlerList().addHandler(&quot;completedRequest&quot;, handler);
    }
    function Sys$Net$_WebRequestManager$remove_completedRequest(handler) {
        var e = Function._validateParams(arguments, [{name: &quot;handler&quot;, type: Function}]);
        if (e) throw e;
        this._get_eventHandlerList().removeHandler(&quot;completedRequest&quot;, handler);
    }
    function Sys$Net$_WebRequestManager$_get_eventHandlerList() {
        if (!this._events) {
            this._events = new Sys.EventHandlerList();
        }
        return this._events;
    }
    function Sys$Net$_WebRequestManager$get_defaultTimeout() {
        /// &lt;value type=&quot;Number&quot; locid=&quot;P:J#Sys.Net.WebRequestManager.defaultTimeout&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._defaultTimeout;
    }
    function Sys$Net$_WebRequestManager$set_defaultTimeout(value) {
        var e = Function._validateParams(arguments, [{name: &quot;value&quot;, type: Number}]);
        if (e) throw e;
        if (value &lt; 0) {
            throw Error.argumentOutOfRange(&quot;value&quot;, value, Sys.Res.invalidTimeout);
        }
        this._defaultTimeout = value;
    }
    function Sys$Net$_WebRequestManager$get_defaultExecutorType() {
        /// &lt;value type=&quot;String&quot; locid=&quot;P:J#Sys.Net.WebRequestManager.defaultExecutorType&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._defaultExecutorType;
    }
    function Sys$Net$_WebRequestManager$set_defaultExecutorType(value) {
        var e = Function._validateParams(arguments, [{name: &quot;value&quot;, type: String}]);
        if (e) throw e;
        this._defaultExecutorType = value;
    }
    function Sys$Net$_WebRequestManager$executeRequest(webRequest) {
        /// &lt;summary locid=&quot;M:J#Sys.Net.WebRequestManager.executeRequest&quot; /&gt;
        /// &lt;param name=&quot;webRequest&quot; type=&quot;Sys.Net.WebRequest&quot;&gt;&lt;/param&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;webRequest&quot;, type: Sys.Net.WebRequest}
        ]);
        if (e) throw e;
        var executor = webRequest.get_executor();
        if (!executor) {
            var failed = false;
            try {
                var executorType = eval(this._defaultExecutorType);
                executor = new executorType();
            } catch (e) {
                failed = true;
            }
            if (failed  || !Sys.Net.WebRequestExecutor.isInstanceOfType(executor) || !executor) {
                throw Error.argument(&quot;defaultExecutorType&quot;, String.format(Sys.Res.invalidExecutorType, this._defaultExecutorType));
            }
            webRequest.set_executor(executor);
        }
        if (executor.get_aborted()) {
            return;
        }
        var evArgs = new Sys.Net.NetworkRequestEventArgs(webRequest);
        var handler = this._get_eventHandlerList().getHandler(&quot;invokingRequest&quot;);
        if (handler) {
            handler(this, evArgs);
        }
        if (!evArgs.get_cancel()) {
            executor.executeRequest();
        }
    }
Sys.Net._WebRequestManager.prototype = {
    add_invokingRequest: Sys$Net$_WebRequestManager$add_invokingRequest,
    remove_invokingRequest: Sys$Net$_WebRequestManager$remove_invokingRequest,
    add_completedRequest: Sys$Net$_WebRequestManager$add_completedRequest,
    remove_completedRequest: Sys$Net$_WebRequestManager$remove_completedRequest,
    _get_eventHandlerList: Sys$Net$_WebRequestManager$_get_eventHandlerList,
    get_defaultTimeout: Sys$Net$_WebRequestManager$get_defaultTimeout,
    set_defaultTimeout: Sys$Net$_WebRequestManager$set_defaultTimeout,
    get_defaultExecutorType: Sys$Net$_WebRequestManager$get_defaultExecutorType,
    set_defaultExecutorType: Sys$Net$_WebRequestManager$set_defaultExecutorType,
    executeRequest: Sys$Net$_WebRequestManager$executeRequest
}
Sys.Net._WebRequestManager.registerClass(&#039;Sys.Net._WebRequestManager&#039;);
Sys.Net.WebRequestManager = new Sys.Net._WebRequestManager();
 
Sys.Net.NetworkRequestEventArgs = function Sys$Net$NetworkRequestEventArgs(webRequest) {
    /// &lt;summary locid=&quot;M:J#Sys.Net.NetworkRequestEventArgs.#ctor&quot; /&gt;
    /// &lt;param name=&quot;webRequest&quot; type=&quot;Sys.Net.WebRequest&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;webRequest&quot;, type: Sys.Net.WebRequest}
    ]);
    if (e) throw e;
    Sys.Net.NetworkRequestEventArgs.initializeBase(this);
    this._webRequest = webRequest;
}
    function Sys$Net$NetworkRequestEventArgs$get_webRequest() {
        /// &lt;value type=&quot;Sys.Net.WebRequest&quot; locid=&quot;P:J#Sys.Net.NetworkRequestEventArgs.webRequest&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._webRequest;
    }
Sys.Net.NetworkRequestEventArgs.prototype = {
    get_webRequest: Sys$Net$NetworkRequestEventArgs$get_webRequest
}
Sys.Net.NetworkRequestEventArgs.registerClass(&#039;Sys.Net.NetworkRequestEventArgs&#039;, Sys.CancelEventArgs);
 
Sys.Net.WebRequest = function Sys$Net$WebRequest() {
    /// &lt;summary locid=&quot;M:J#Sys.Net.WebRequest.#ctor&quot; /&gt;
    if (arguments.length !== 0) throw Error.parameterCount();
    this._url = &quot;&quot;;
    this._headers = { };
    this._body = null;
    this._userContext = null;
    this._httpVerb = null;
    this._executor = null;
    this._invokeCalled = false;
    this._timeout = 0;
}
    function Sys$Net$WebRequest$add_completed(handler) {
    /// &lt;summary locid=&quot;E:J#Sys.Net.WebRequest.completed&quot; /&gt;
    var e = Function._validateParams(arguments, [{name: &quot;handler&quot;, type: Function}]);
    if (e) throw e;
        this._get_eventHandlerList().addHandler(&quot;completed&quot;, handler);
    }
    function Sys$Net$WebRequest$remove_completed(handler) {
    var e = Function._validateParams(arguments, [{name: &quot;handler&quot;, type: Function}]);
    if (e) throw e;
        this._get_eventHandlerList().removeHandler(&quot;completed&quot;, handler);
    }
    function Sys$Net$WebRequest$completed(eventArgs) {
        /// &lt;summary locid=&quot;M:J#Sys.Net.WebRequest.completed&quot; /&gt;
        /// &lt;param name=&quot;eventArgs&quot; type=&quot;Sys.EventArgs&quot;&gt;&lt;/param&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;eventArgs&quot;, type: Sys.EventArgs}
        ]);
        if (e) throw e;
        var handler = Sys.Net.WebRequestManager._get_eventHandlerList().getHandler(&quot;completedRequest&quot;);
        if (handler) {
            handler(this._executor, eventArgs);
        }
        handler = this._get_eventHandlerList().getHandler(&quot;completed&quot;);
        if (handler) {
            handler(this._executor, eventArgs);
        }
    }
    function Sys$Net$WebRequest$_get_eventHandlerList() {
        if (!this._events) {
            this._events = new Sys.EventHandlerList();
        }
        return this._events;
    }
    function Sys$Net$WebRequest$get_url() {
        /// &lt;value type=&quot;String&quot; locid=&quot;P:J#Sys.Net.WebRequest.url&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._url;
    }
    function Sys$Net$WebRequest$set_url(value) {
        var e = Function._validateParams(arguments, [{name: &quot;value&quot;, type: String}]);
        if (e) throw e;
        this._url = value;
    }
    function Sys$Net$WebRequest$get_headers() {
        /// &lt;value locid=&quot;P:J#Sys.Net.WebRequest.headers&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._headers;
    }
    function Sys$Net$WebRequest$get_httpVerb() {
        /// &lt;value type=&quot;String&quot; locid=&quot;P:J#Sys.Net.WebRequest.httpVerb&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        if (this._httpVerb === null) {
            if (this._body === null) {
                return &quot;GET&quot;;
            }
            return &quot;POST&quot;;
        }
        return this._httpVerb;
    }
    function Sys$Net$WebRequest$set_httpVerb(value) {
        var e = Function._validateParams(arguments, [{name: &quot;value&quot;, type: String}]);
        if (e) throw e;
        if (value.length === 0) {
            throw Error.argument(&#039;value&#039;, Sys.Res.invalidHttpVerb);
        }
        this._httpVerb = value;
    }
    function Sys$Net$WebRequest$get_body() {
        /// &lt;value mayBeNull=&quot;true&quot; locid=&quot;P:J#Sys.Net.WebRequest.body&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._body;
    }
    function Sys$Net$WebRequest$set_body(value) {
        var e = Function._validateParams(arguments, [{name: &quot;value&quot;, mayBeNull: true}]);
        if (e) throw e;
        this._body = value;
    }
    function Sys$Net$WebRequest$get_userContext() {
        /// &lt;value mayBeNull=&quot;true&quot; locid=&quot;P:J#Sys.Net.WebRequest.userContext&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._userContext;
    }
    function Sys$Net$WebRequest$set_userContext(value) {
        var e = Function._validateParams(arguments, [{name: &quot;value&quot;, mayBeNull: true}]);
        if (e) throw e;
        this._userContext = value;
    }
    function Sys$Net$WebRequest$get_executor() {
        /// &lt;value type=&quot;Sys.Net.WebRequestExecutor&quot; locid=&quot;P:J#Sys.Net.WebRequest.executor&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._executor;
    }
    function Sys$Net$WebRequest$set_executor(value) {
        var e = Function._validateParams(arguments, [{name: &quot;value&quot;, type: Sys.Net.WebRequestExecutor}]);
        if (e) throw e;
        if (this._executor !== null &amp;&amp; this._executor.get_started()) {
            throw Error.invalidOperation(Sys.Res.setExecutorAfterActive);
        }
        this._executor = value;
        this._executor._set_webRequest(this);
    }
    function Sys$Net$WebRequest$get_timeout() {
        /// &lt;value type=&quot;Number&quot; locid=&quot;P:J#Sys.Net.WebRequest.timeout&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        if (this._timeout === 0) {
            return Sys.Net.WebRequestManager.get_defaultTimeout();
        }
        return this._timeout;
    }
    function Sys$Net$WebRequest$set_timeout(value) {
        var e = Function._validateParams(arguments, [{name: &quot;value&quot;, type: Number}]);
        if (e) throw e;
        if (value &lt; 0) {
            throw Error.argumentOutOfRange(&quot;value&quot;, value, Sys.Res.invalidTimeout);
        }
        this._timeout = value;
    }
    function Sys$Net$WebRequest$getResolvedUrl() {
        /// &lt;summary locid=&quot;M:J#Sys.Net.WebRequest.getResolvedUrl&quot; /&gt;
        /// &lt;returns type=&quot;String&quot;&gt;&lt;/returns&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return Sys.Net.WebRequest._resolveUrl(this._url);
    }
    function Sys$Net$WebRequest$invoke() {
        /// &lt;summary locid=&quot;M:J#Sys.Net.WebRequest.invoke&quot; /&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        if (this._invokeCalled) {
            throw Error.invalidOperation(Sys.Res.invokeCalledTwice);
        }
        Sys.Net.WebRequestManager.executeRequest(this);
        this._invokeCalled = true;
    }
Sys.Net.WebRequest.prototype = {
    add_completed: Sys$Net$WebRequest$add_completed,
    remove_completed: Sys$Net$WebRequest$remove_completed,
    completed: Sys$Net$WebRequest$completed,
    _get_eventHandlerList: Sys$Net$WebRequest$_get_eventHandlerList,
    get_url: Sys$Net$WebRequest$get_url,
    set_url: Sys$Net$WebRequest$set_url,
    get_headers: Sys$Net$WebRequest$get_headers,
    get_httpVerb: Sys$Net$WebRequest$get_httpVerb,
    set_httpVerb: Sys$Net$WebRequest$set_httpVerb,
    get_body: Sys$Net$WebRequest$get_body,
    set_body: Sys$Net$WebRequest$set_body,
    get_userContext: Sys$Net$WebRequest$get_userContext,
    set_userContext: Sys$Net$WebRequest$set_userContext,
    get_executor: Sys$Net$WebRequest$get_executor,
    set_executor: Sys$Net$WebRequest$set_executor,
    get_timeout: Sys$Net$WebRequest$get_timeout,
    set_timeout: Sys$Net$WebRequest$set_timeout,
    getResolvedUrl: Sys$Net$WebRequest$getResolvedUrl,
    invoke: Sys$Net$WebRequest$invoke
}
Sys.Net.WebRequest._resolveUrl = function Sys$Net$WebRequest$_resolveUrl(url, baseUrl) {
    if (url &amp;&amp; url.indexOf(&#039;://&#039;) !== -1) {
        return url;
    }
    if (!baseUrl || baseUrl.length === 0) {
        var baseElement = document.getElementsByTagName(&#039;base&#039;)[0];
        if (baseElement &amp;&amp; baseElement.href &amp;&amp; baseElement.href.length &gt; 0) {
            baseUrl = baseElement.href;
        }
        else {
            baseUrl = document.URL;
        }
    }
    var qsStart = baseUrl.indexOf(&#039;?&#039;);
    if (qsStart !== -1) {
        baseUrl = baseUrl.substr(0, qsStart);
    }
    qsStart = baseUrl.indexOf(&#039;#&#039;);
    if (qsStart !== -1) {
        baseUrl = baseUrl.substr(0, qsStart);
    }
    baseUrl = baseUrl.substr(0, baseUrl.lastIndexOf(&#039;/&#039;) + 1);
    if (!url || url.length === 0) {
        return baseUrl;
    }
    if (url.charAt(0) === &#039;/&#039;) {
        var slashslash = baseUrl.indexOf(&#039;://&#039;);
        if (slashslash === -1) {
            throw Error.argument(&quot;baseUrl&quot;, Sys.Res.badBaseUrl1);
        }
        var nextSlash = baseUrl.indexOf(&#039;/&#039;, slashslash + 3);
        if (nextSlash === -1) {
            throw Error.argument(&quot;baseUrl&quot;, Sys.Res.badBaseUrl2);
        }
        return baseUrl.substr(0, nextSlash) + url;
    }
    else {
        var lastSlash = baseUrl.lastIndexOf(&#039;/&#039;);
        if (lastSlash === -1) {
            throw Error.argument(&quot;baseUrl&quot;, Sys.Res.badBaseUrl3);
        }
        return baseUrl.substr(0, lastSlash+1) + url;
    }
}
Sys.Net.WebRequest._createQueryString = function Sys$Net$WebRequest$_createQueryString(queryString, encodeMethod, addParams) {
    encodeMethod = encodeMethod || encodeURIComponent;
    var i = 0, obj, val, arg, sb = new Sys.StringBuilder();
    if (queryString) {
        for (arg in queryString) {
            obj = queryString[arg];
            if (typeof(obj) === &quot;function&quot;) continue;
            val = Sys.Serialization.JavaScriptSerializer.serialize(obj);
            if (i++) {
                sb.append(&#039;&amp;&#039;);
            }
            sb.append(arg);
            sb.append(&#039;=&#039;);
            sb.append(encodeMethod(val));
        }
    }
    if (addParams) {
        if (i) {
            sb.append(&#039;&amp;&#039;);
        }
        sb.append(addParams);
    }
    return sb.toString();
}
Sys.Net.WebRequest._createUrl = function Sys$Net$WebRequest$_createUrl(url, queryString, addParams) {
    if (!queryString &amp;&amp; !addParams) {
        return url;
    }
    var qs = Sys.Net.WebRequest._createQueryString(queryString, null, addParams);
    return qs.length
        ? url + ((url &amp;&amp; url.indexOf(&#039;?&#039;) &gt;= 0) ? &quot;&amp;&quot; : &quot;?&quot;) + qs
        : url;
}
Sys.Net.WebRequest.registerClass(&#039;Sys.Net.WebRequest&#039;);
 
Sys._ScriptLoaderTask = function Sys$_ScriptLoaderTask(scriptElement, completedCallback) {
    /// &lt;summary locid=&quot;M:J#Sys._ScriptLoaderTask.#ctor&quot; /&gt;
    /// &lt;param name=&quot;scriptElement&quot; domElement=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;completedCallback&quot; type=&quot;Function&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;scriptElement&quot;, domElement: true},
        {name: &quot;completedCallback&quot;, type: Function}
    ]);
    if (e) throw e;
    this._scriptElement = scriptElement;
    this._completedCallback = completedCallback;
}
    function Sys$_ScriptLoaderTask$get_scriptElement() {
        /// &lt;value domElement=&quot;true&quot; locid=&quot;P:J#Sys._ScriptLoaderTask.scriptElement&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._scriptElement;
    }
    function Sys$_ScriptLoaderTask$dispose() {
        if(this._disposed) {
            return;
        }
        this._disposed = true;
        this._removeScriptElementHandlers();
        Sys._ScriptLoaderTask._clearScript(this._scriptElement);
        this._scriptElement = null;
    }
    function Sys$_ScriptLoaderTask$execute() {
        /// &lt;summary locid=&quot;M:J#Sys._ScriptLoaderTask.execute&quot; /&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        this._addScriptElementHandlers();
        var headElements = document.getElementsByTagName(&#039;head&#039;);
        if (headElements.length === 0) {
             throw new Error.invalidOperation(Sys.Res.scriptLoadFailedNoHead);
        }
        else {
             headElements[0].appendChild(this._scriptElement);
        }
    }
    function Sys$_ScriptLoaderTask$_addScriptElementHandlers() {
        this._scriptLoadDelegate = Function.createDelegate(this, this._scriptLoadHandler);
        
        if (Sys.Browser.agent !== Sys.Browser.InternetExplorer) {
            this._scriptElement.readyState = &#039;loaded&#039;;
            $addHandler(this._scriptElement, &#039;load&#039;, this._scriptLoadDelegate);
        }
        else {
            $addHandler(this._scriptElement, &#039;readystatechange&#039;, this._scriptLoadDelegate);
        }    
        if (this._scriptElement.addEventListener) {
            this._scriptErrorDelegate = Function.createDelegate(this, this._scriptErrorHandler);
            this._scriptElement.addEventListener(&#039;error&#039;, this._scriptErrorDelegate, false);
        }
    }
    function Sys$_ScriptLoaderTask$_removeScriptElementHandlers() {
        if(this._scriptLoadDelegate) {
            var scriptElement = this.get_scriptElement();
            if (Sys.Browser.agent !== Sys.Browser.InternetExplorer) {
                $removeHandler(scriptElement, &#039;load&#039;, this._scriptLoadDelegate);
            }
            else {
                $removeHandler(scriptElement, &#039;readystatechange&#039;, this._scriptLoadDelegate);
            }
            if (this._scriptErrorDelegate) {
                this._scriptElement.removeEventListener(&#039;error&#039;, this._scriptErrorDelegate, false);
                this._scriptErrorDelegate = null;
            }
            this._scriptLoadDelegate = null;
        }
    }
    function Sys$_ScriptLoaderTask$_scriptErrorHandler() {
        if(this._disposed) {
            return;
        }
        
        this._completedCallback(this.get_scriptElement(), false);
    }
    function Sys$_ScriptLoaderTask$_scriptLoadHandler() {
        if(this._disposed) {
            return;
        }
        var scriptElement = this.get_scriptElement();
        if ((scriptElement.readyState !== &#039;loaded&#039;) &amp;&amp;
            (scriptElement.readyState !== &#039;complete&#039;)) {
            return;
        }
        
        this._completedCallback(scriptElement, true);
    }
Sys._ScriptLoaderTask.prototype = {
    get_scriptElement: Sys$_ScriptLoaderTask$get_scriptElement,
    dispose: Sys$_ScriptLoaderTask$dispose,
    execute: Sys$_ScriptLoaderTask$execute,
    _addScriptElementHandlers: Sys$_ScriptLoaderTask$_addScriptElementHandlers,    
    _removeScriptElementHandlers: Sys$_ScriptLoaderTask$_removeScriptElementHandlers,    
    _scriptErrorHandler: Sys$_ScriptLoaderTask$_scriptErrorHandler,
    _scriptLoadHandler: Sys$_ScriptLoaderTask$_scriptLoadHandler  
}
Sys._ScriptLoaderTask.registerClass(&quot;Sys._ScriptLoaderTask&quot;, null, Sys.IDisposable);
Sys._ScriptLoaderTask._clearScript = function Sys$_ScriptLoaderTask$_clearScript(scriptElement) {
    if (!Sys.Debug.isDebug) {
        scriptElement.parentNode.removeChild(scriptElement);
    }
}
Type.registerNamespace(&#039;Sys.Net&#039;);
 
Sys.Net.WebServiceProxy = function Sys$Net$WebServiceProxy() {
}
    function Sys$Net$WebServiceProxy$get_timeout() {
        /// &lt;value type=&quot;Number&quot; locid=&quot;P:J#Sys.Net.WebServiceProxy.timeout&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._timeout || 0;
    }
    function Sys$Net$WebServiceProxy$set_timeout(value) {
        var e = Function._validateParams(arguments, [{name: &quot;value&quot;, type: Number}]);
        if (e) throw e;
        if (value &lt; 0) { throw Error.argumentOutOfRange(&#039;value&#039;, value, Sys.Res.invalidTimeout); }
        this._timeout = value;
    }
    function Sys$Net$WebServiceProxy$get_defaultUserContext() {
        /// &lt;value mayBeNull=&quot;true&quot; locid=&quot;P:J#Sys.Net.WebServiceProxy.defaultUserContext&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return (typeof(this._userContext) === &quot;undefined&quot;) ? null : this._userContext;
    }
    function Sys$Net$WebServiceProxy$set_defaultUserContext(value) {
        var e = Function._validateParams(arguments, [{name: &quot;value&quot;, mayBeNull: true}]);
        if (e) throw e;
        this._userContext = value;
    }
    function Sys$Net$WebServiceProxy$get_defaultSucceededCallback() {
        /// &lt;value type=&quot;Function&quot; mayBeNull=&quot;true&quot; locid=&quot;P:J#Sys.Net.WebServiceProxy.defaultSucceededCallback&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._succeeded || null;
    }
    function Sys$Net$WebServiceProxy$set_defaultSucceededCallback(value) {
        var e = Function._validateParams(arguments, [{name: &quot;value&quot;, type: Function, mayBeNull: true}]);
        if (e) throw e;
        this._succeeded = value;
    }
    function Sys$Net$WebServiceProxy$get_defaultFailedCallback() {
        /// &lt;value type=&quot;Function&quot; mayBeNull=&quot;true&quot; locid=&quot;P:J#Sys.Net.WebServiceProxy.defaultFailedCallback&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._failed || null;
    }
    function Sys$Net$WebServiceProxy$set_defaultFailedCallback(value) {
        var e = Function._validateParams(arguments, [{name: &quot;value&quot;, type: Function, mayBeNull: true}]);
        if (e) throw e;
        this._failed = value;
    }
    function Sys$Net$WebServiceProxy$get_enableJsonp() {
        /// &lt;value type=&quot;Boolean&quot; locid=&quot;P:J#Sys.Net.WebServiceProxy.enableJsonp&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return !!this._jsonp;
    }
    function Sys$Net$WebServiceProxy$set_enableJsonp(value) {
        var e = Function._validateParams(arguments, [{name: &quot;value&quot;, type: Boolean}]);
        if (e) throw e;
        this._jsonp = value;
    }
    function Sys$Net$WebServiceProxy$get_path() {
        /// &lt;value type=&quot;String&quot; locid=&quot;P:J#Sys.Net.WebServiceProxy.path&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._path || null;
    }
    function Sys$Net$WebServiceProxy$set_path(value) {
        var e = Function._validateParams(arguments, [{name: &quot;value&quot;, type: String}]);
        if (e) throw e;
        this._path = value;
    }
    function Sys$Net$WebServiceProxy$get_jsonpCallbackParameter() {
        /// &lt;value type=&quot;String&quot; locid=&quot;P:J#Sys.Net.WebServiceProxy.jsonpCallbackParameter&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._callbackParameter || &quot;callback&quot;;
    }
    function Sys$Net$WebServiceProxy$set_jsonpCallbackParameter(value) {
        var e = Function._validateParams(arguments, [{name: &quot;value&quot;, type: String}]);
        if (e) throw e;
        this._callbackParameter = value;
    }
    function Sys$Net$WebServiceProxy$_invoke(servicePath, methodName, useGet, params, onSuccess, onFailure, userContext) {
        /// &lt;summary locid=&quot;M:J#Sys.Net.WebServiceProxy._invoke&quot; /&gt;
        /// &lt;param name=&quot;servicePath&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;methodName&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;useGet&quot; type=&quot;Boolean&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;params&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;onSuccess&quot; type=&quot;Function&quot; mayBeNull=&quot;true&quot; optional=&quot;true&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;onFailure&quot; type=&quot;Function&quot; mayBeNull=&quot;true&quot; optional=&quot;true&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;userContext&quot; mayBeNull=&quot;true&quot; optional=&quot;true&quot;&gt;&lt;/param&gt;
        /// &lt;returns type=&quot;Sys.Net.WebRequest&quot; mayBeNull=&quot;true&quot;&gt;&lt;/returns&gt;
        var e = Function._validateParams(arguments, [
            {name: &quot;servicePath&quot;, type: String},
            {name: &quot;methodName&quot;, type: String},
            {name: &quot;useGet&quot;, type: Boolean},
            {name: &quot;params&quot;},
            {name: &quot;onSuccess&quot;, type: Function, mayBeNull: true, optional: true},
            {name: &quot;onFailure&quot;, type: Function, mayBeNull: true, optional: true},
            {name: &quot;userContext&quot;, mayBeNull: true, optional: true}
        ]);
        if (e) throw e;
        onSuccess = onSuccess || this.get_defaultSucceededCallback();
        onFailure = onFailure || this.get_defaultFailedCallback();
        if (userContext === null || typeof userContext === &#039;undefined&#039;) userContext = this.get_defaultUserContext();
        return Sys.Net.WebServiceProxy.invoke(servicePath, methodName, useGet, params, onSuccess, onFailure, userContext, this.get_timeout(), this.get_enableJsonp(), this.get_jsonpCallbackParameter());
    }
Sys.Net.WebServiceProxy.prototype = {
    get_timeout: Sys$Net$WebServiceProxy$get_timeout,
    set_timeout: Sys$Net$WebServiceProxy$set_timeout,
    get_defaultUserContext: Sys$Net$WebServiceProxy$get_defaultUserContext,
    set_defaultUserContext: Sys$Net$WebServiceProxy$set_defaultUserContext,
    get_defaultSucceededCallback: Sys$Net$WebServiceProxy$get_defaultSucceededCallback,
    set_defaultSucceededCallback: Sys$Net$WebServiceProxy$set_defaultSucceededCallback,
    get_defaultFailedCallback: Sys$Net$WebServiceProxy$get_defaultFailedCallback,
    set_defaultFailedCallback: Sys$Net$WebServiceProxy$set_defaultFailedCallback,
    get_enableJsonp: Sys$Net$WebServiceProxy$get_enableJsonp,
    set_enableJsonp: Sys$Net$WebServiceProxy$set_enableJsonp,
    get_path: Sys$Net$WebServiceProxy$get_path,
    set_path: Sys$Net$WebServiceProxy$set_path,
    get_jsonpCallbackParameter: Sys$Net$WebServiceProxy$get_jsonpCallbackParameter,
    set_jsonpCallbackParameter: Sys$Net$WebServiceProxy$set_jsonpCallbackParameter,
    _invoke: Sys$Net$WebServiceProxy$_invoke
}
Sys.Net.WebServiceProxy.registerClass(&#039;Sys.Net.WebServiceProxy&#039;);
Sys.Net.WebServiceProxy.invoke = function Sys$Net$WebServiceProxy$invoke(servicePath, methodName, useGet, params, onSuccess, onFailure, userContext, timeout, enableJsonp, jsonpCallbackParameter) {
    /// &lt;summary locid=&quot;M:J#Sys.Net.WebServiceProxy.invoke&quot; /&gt;
    /// &lt;param name=&quot;servicePath&quot; type=&quot;String&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;methodName&quot; type=&quot;String&quot; mayBeNull=&quot;true&quot; optional=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;useGet&quot; type=&quot;Boolean&quot; optional=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;params&quot; mayBeNull=&quot;true&quot; optional=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;onSuccess&quot; type=&quot;Function&quot; mayBeNull=&quot;true&quot; optional=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;onFailure&quot; type=&quot;Function&quot; mayBeNull=&quot;true&quot; optional=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;userContext&quot; mayBeNull=&quot;true&quot; optional=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;timeout&quot; type=&quot;Number&quot; optional=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;enableJsonp&quot; type=&quot;Boolean&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;jsonpCallbackParameter&quot; type=&quot;String&quot; optional=&quot;true&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;returns type=&quot;Sys.Net.WebRequest&quot; mayBeNull=&quot;true&quot;&gt;&lt;/returns&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;servicePath&quot;, type: String},
        {name: &quot;methodName&quot;, type: String, mayBeNull: true, optional: true},
        {name: &quot;useGet&quot;, type: Boolean, optional: true},
        {name: &quot;params&quot;, mayBeNull: true, optional: true},
        {name: &quot;onSuccess&quot;, type: Function, mayBeNull: true, optional: true},
        {name: &quot;onFailure&quot;, type: Function, mayBeNull: true, optional: true},
        {name: &quot;userContext&quot;, mayBeNull: true, optional: true},
        {name: &quot;timeout&quot;, type: Number, optional: true},
        {name: &quot;enableJsonp&quot;, type: Boolean, mayBeNull: true, optional: true},
        {name: &quot;jsonpCallbackParameter&quot;, type: String, mayBeNull: true, optional: true}
    ]);
    if (e) throw e;
    var schemeHost = (enableJsonp !== false) ? Sys.Net.WebServiceProxy._xdomain.exec(servicePath) : null,
        tempCallback, jsonp = schemeHost &amp;&amp; (schemeHost.length === 3) &amp;&amp; 
            ((schemeHost[1] !== location.protocol) || (schemeHost[2] !== location.host));
    useGet = jsonp || useGet;
    if (jsonp) {
        jsonpCallbackParameter = jsonpCallbackParameter || &quot;callback&quot;;
        tempCallback = &quot;_jsonp&quot; + Sys._jsonp++;
    }
    if (!params) params = {};
    var urlParams = params;
    if (!useGet || !urlParams) urlParams = {};
    var script, error, timeoutcookie = null, loader, body = null,
        url = Sys.Net.WebRequest._createUrl(methodName
            ? (servicePath+&quot;/&quot;+encodeURIComponent(methodName))
            : servicePath, urlParams, jsonp ? (jsonpCallbackParameter + &quot;=Sys.&quot; + tempCallback) : null);
    if (jsonp) {
        script = document.createElement(&quot;script&quot;);
        script.src = url;
        loader = new Sys._ScriptLoaderTask(script, function(script, loaded) {
            if (!loaded || tempCallback) {
                jsonpComplete({ Message: String.format(Sys.Res.webServiceFailedNoMsg, methodName) }, -1);
            }
        });
        function jsonpComplete(data, statusCode) {
            if (timeoutcookie !== null) {
                window.clearTimeout(timeoutcookie);
                timeoutcookie = null;
            }
            loader.dispose();
            delete Sys[tempCallback];
            tempCallback = null; 
            if ((typeof(statusCode) !== &quot;undefined&quot;) &amp;&amp; (statusCode !== 200)) {
                if (onFailure) {
                    error = new Sys.Net.WebServiceError(false,
                            data.Message || String.format(Sys.Res.webServiceFailedNoMsg, methodName),
                            data.StackTrace || null,
                            data.ExceptionType || null,
                            data);
                    error._statusCode = statusCode;
                    onFailure(error, userContext, methodName);
                }
                else {
                    if (data.StackTrace &amp;&amp; data.Message) {
                        error = data.StackTrace + &quot;-- &quot; + data.Message;
                    }
                    else {
                        error = data.StackTrace || data.Message;
                    }
                    error = String.format(error ? Sys.Res.webServiceFailed : Sys.Res.webServiceFailedNoMsg, methodName, error);
                    throw Sys.Net.WebServiceProxy._createFailedError(methodName, String.format(Sys.Res.webServiceFailed, methodName, error));
                }
            }
            else if (onSuccess) {
                onSuccess(data, userContext, methodName);
            }
        }
        Sys[tempCallback] = jsonpComplete;
        loader.execute();
        return null;
    }
    var request = new Sys.Net.WebRequest();
    request.set_url(url);
    request.get_headers()[&#039;Content-Type&#039;] = &#039;application/json; charset=utf-8&#039;;
    if (!useGet) {
        body = Sys.Serialization.JavaScriptSerializer.serialize(params);
        if (body === &quot;{}&quot;) body = &quot;&quot;;
    }
    request.set_body(body);
    request.add_completed(onComplete);
    if (timeout &amp;&amp; timeout &gt; 0) request.set_timeout(timeout);
    request.invoke();
    
    function onComplete(response, eventArgs) {
        if (response.get_responseAvailable()) {
            var statusCode = response.get_statusCode();
            var result = null;
           
            try {
                var contentType = response.getResponseHeader(&quot;Content-Type&quot;);
                if (contentType.startsWith(&quot;application/json&quot;)) {
                    result = response.get_object();
                }
                else if (contentType.startsWith(&quot;text/xml&quot;)) {
                    result = response.get_xml();
                }
                else {
                    result = response.get_responseData();
                }
            } catch (ex) {
            }
            var error = response.getResponseHeader(&quot;jsonerror&quot;);
            var errorObj = (error === &quot;true&quot;);
            if (errorObj) {
                if (result) {
                    result = new Sys.Net.WebServiceError(false, result.Message, result.StackTrace, result.ExceptionType, result);
                }
            }
            else if (contentType.startsWith(&quot;application/json&quot;)) {
                result = (!result || (typeof(result.d) === &quot;undefined&quot;)) ? result : result.d;
            }
            if (((statusCode &lt; 200) || (statusCode &gt;= 300)) || errorObj) {
                if (onFailure) {
                    if (!result || !errorObj) {
                        result = new Sys.Net.WebServiceError(false , String.format(Sys.Res.webServiceFailedNoMsg, methodName));
                    }
                    result._statusCode = statusCode;
                    onFailure(result, userContext, methodName);
                }
                else {
                    if (result &amp;&amp; errorObj) {
                        error = result.get_exceptionType() + &quot;-- &quot; + result.get_message();
                    }
                    else {
                        error = response.get_responseData();
                    }
                    throw Sys.Net.WebServiceProxy._createFailedError(methodName, String.format(Sys.Res.webServiceFailed, methodName, error));
                }
            }
            else if (onSuccess) {
                onSuccess(result, userContext, methodName);
            }
        }
        else {
            var msg;
            if (response.get_timedOut()) {
                msg = String.format(Sys.Res.webServiceTimedOut, methodName);
            }
            else {
                msg = String.format(Sys.Res.webServiceFailedNoMsg, methodName)
            }
            if (onFailure) {
                onFailure(new Sys.Net.WebServiceError(response.get_timedOut(), msg, &quot;&quot;, &quot;&quot;), userContext, methodName);
            }
            else {
                throw Sys.Net.WebServiceProxy._createFailedError(methodName, msg);
            }
        }
    }
    return request;
}
Sys.Net.WebServiceProxy._createFailedError = function Sys$Net$WebServiceProxy$_createFailedError(methodName, errorMessage) {
    var displayMessage = &quot;Sys.Net.WebServiceFailedException: &quot; + errorMessage;
    var e = Error.create(displayMessage, { &#039;name&#039;: &#039;Sys.Net.WebServiceFailedException&#039;, &#039;methodName&#039;: methodName });
    e.popStackFrame();
    return e;
}
Sys.Net.WebServiceProxy._defaultFailedCallback = function Sys$Net$WebServiceProxy$_defaultFailedCallback(err, methodName) {
    var error = err.get_exceptionType() + &quot;-- &quot; + err.get_message();
    throw Sys.Net.WebServiceProxy._createFailedError(methodName, String.format(Sys.Res.webServiceFailed, methodName, error));
}
Sys.Net.WebServiceProxy._generateTypedConstructor = function Sys$Net$WebServiceProxy$_generateTypedConstructor(type) {
    return function(properties) {
        if (properties) {
            for (var name in properties) {
                this[name] = properties[name];
            }
        }
        this.__type = type;
    }
}
Sys._jsonp = 0;
Sys.Net.WebServiceProxy._xdomain = /^\s*([a-zA-Z0-9\+\-\.]+\:)\/\/([^?#\/]+)/;
 
Sys.Net.WebServiceError = function Sys$Net$WebServiceError(timedOut, message, stackTrace, exceptionType, errorObject) {
    /// &lt;summary locid=&quot;M:J#Sys.Net.WebServiceError.#ctor&quot; /&gt;
    /// &lt;param name=&quot;timedOut&quot; type=&quot;Boolean&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;message&quot; type=&quot;String&quot; mayBeNull=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;stackTrace&quot; type=&quot;String&quot; mayBeNull=&quot;true&quot; optional=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;exceptionType&quot; type=&quot;String&quot; mayBeNull=&quot;true&quot; optional=&quot;true&quot;&gt;&lt;/param&gt;
    /// &lt;param name=&quot;errorObject&quot; type=&quot;Object&quot; mayBeNull=&quot;true&quot; optional=&quot;true&quot;&gt;&lt;/param&gt;
    var e = Function._validateParams(arguments, [
        {name: &quot;timedOut&quot;, type: Boolean},
        {name: &quot;message&quot;, type: String, mayBeNull: true},
        {name: &quot;stackTrace&quot;, type: String, mayBeNull: true, optional: true},
        {name: &quot;exceptionType&quot;, type: String, mayBeNull: true, optional: true},
        {name: &quot;errorObject&quot;, type: Object, mayBeNull: true, optional: true}
    ]);
    if (e) throw e;
    this._timedOut = timedOut;
    this._message = message;
    this._stackTrace = stackTrace;
    this._exceptionType = exceptionType;
    this._errorObject = errorObject;
    this._statusCode = -1;
}
    function Sys$Net$WebServiceError$get_timedOut() {
        /// &lt;value type=&quot;Boolean&quot; locid=&quot;P:J#Sys.Net.WebServiceError.timedOut&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._timedOut;
    }
    function Sys$Net$WebServiceError$get_statusCode() {
        /// &lt;value type=&quot;Number&quot; locid=&quot;P:J#Sys.Net.WebServiceError.statusCode&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._statusCode;
    }
    function Sys$Net$WebServiceError$get_message() {
        /// &lt;value type=&quot;String&quot; locid=&quot;P:J#Sys.Net.WebServiceError.message&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._message;
    }
    function Sys$Net$WebServiceError$get_stackTrace() {
        /// &lt;value type=&quot;String&quot; locid=&quot;P:J#Sys.Net.WebServiceError.stackTrace&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._stackTrace || &quot;&quot;;
    }
    function Sys$Net$WebServiceError$get_exceptionType() {
        /// &lt;value type=&quot;String&quot; locid=&quot;P:J#Sys.Net.WebServiceError.exceptionType&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._exceptionType || &quot;&quot;;
    }
    function Sys$Net$WebServiceError$get_errorObject() {
        /// &lt;value type=&quot;Object&quot; locid=&quot;P:J#Sys.Net.WebServiceError.errorObject&quot;&gt;&lt;/value&gt;
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._errorObject || null;
    }
Sys.Net.WebServiceError.prototype = {
    get_timedOut: Sys$Net$WebServiceError$get_timedOut,
    get_statusCode: Sys$Net$WebServiceError$get_statusCode,
    get_message: Sys$Net$WebServiceError$get_message,
    get_stackTrace: Sys$Net$WebServiceError$get_stackTrace,
    get_exceptionType: Sys$Net$WebServiceError$get_exceptionType,
    get_errorObject: Sys$Net$WebServiceError$get_errorObject
}
Sys.Net.WebServiceError.registerClass(&#039;Sys.Net.WebServiceError&#039;);


Type.registerNamespace(&#039;Sys&#039;);

Sys.Res={
&#039;argumentTypeName&#039;:&#039;Value is not the name of an existing type.&#039;,
&#039;cantBeCalledAfterDispose&#039;:&#039;Can\&#039;t be called after dispose.&#039;,
&#039;componentCantSetIdAfterAddedToApp&#039;:&#039;The id property of a component can\&#039;t be set after it\&#039;s been added to the Application object.&#039;,
&#039;behaviorDuplicateName&#039;:&#039;A behavior with name \&#039;{0}\&#039; already exists or it is the name of an existing property on the target element.&#039;,
&#039;notATypeName&#039;:&#039;Value is not a valid type name.&#039;,
&#039;elementNotFound&#039;:&#039;An element with id \&#039;{0}\&#039; could not be found.&#039;,
&#039;stateMustBeStringDictionary&#039;:&#039;The state object can only have null and string fields.&#039;,
&#039;boolTrueOrFalse&#039;:&#039;Value must be \&#039;true\&#039; or \&#039;false\&#039;.&#039;,
&#039;scriptLoadFailedNoHead&#039;:&#039;ScriptLoader requires pages to contain a &lt;head&gt; element.&#039;,
&#039;stringFormatInvalid&#039;:&#039;The format string is invalid.&#039;,
&#039;referenceNotFound&#039;:&#039;Component \&#039;{0}\&#039; was not found.&#039;,
&#039;enumReservedName&#039;:&#039;\&#039;{0}\&#039; is a reserved name that can\&#039;t be used as an enum value name.&#039;,
&#039;circularParentChain&#039;:&#039;The chain of control parents can\&#039;t have circular references.&#039;,
&#039;namespaceContainsNonObject&#039;:&#039;Object {0} already exists and is not an object.&#039;,
&#039;undefinedEvent&#039;:&#039;\&#039;{0}\&#039; is not an event.&#039;,
&#039;propertyUndefined&#039;:&#039;\&#039;{0}\&#039; is not a property or an existing field.&#039;,
&#039;observableConflict&#039;:&#039;Object already contains a member with the name \&#039;{0}\&#039;.&#039;,
&#039;historyCannotEnableHistory&#039;:&#039;Cannot set enableHistory after initialization.&#039;,
&#039;eventHandlerInvalid&#039;:&#039;Handler was not added through the Sys.UI.DomEvent.addHandler method.&#039;,
&#039;scriptLoadFailedDebug&#039;:&#039;The script \&#039;{0}\&#039; failed to load. Check for:\r\n Inaccessible path.\r\n Script errors. (IE) Enable \&#039;Display a notification about every script error\&#039; under advanced settings.&#039;,
&#039;propertyNotWritable&#039;:&#039;\&#039;{0}\&#039; is not a writable property.&#039;,
&#039;enumInvalidValueName&#039;:&#039;\&#039;{0}\&#039; is not a valid name for an enum value.&#039;,
&#039;controlAlreadyDefined&#039;:&#039;A control is already associated with the element.&#039;,
&#039;addHandlerCantBeUsedForError&#039;:&#039;Can\&#039;t add a handler for the error event using this method. Please set the window.onerror property instead.&#039;,
&#039;cantAddNonFunctionhandler&#039;:&#039;Can\&#039;t add a handler that is not a function.&#039;,
&#039;invalidNameSpace&#039;:&#039;Value is not a valid namespace identifier.&#039;,
&#039;notAnInterface&#039;:&#039;Value is not a valid interface.&#039;,
&#039;eventHandlerNotFunction&#039;:&#039;Handler must be a function.&#039;,
&#039;propertyNotAnArray&#039;:&#039;\&#039;{0}\&#039; is not an Array property.&#039;,
&#039;namespaceContainsClass&#039;:&#039;Object {0} already exists as a class, enum, or interface.&#039;,
&#039;typeRegisteredTwice&#039;:&#039;Type {0} has already been registered. The type may be defined multiple times or the script file that defines it may have already been loaded. A possible cause is a change of settings during a partial update.&#039;,
&#039;cantSetNameAfterInit&#039;:&#039;The name property can\&#039;t be set on this object after initialization.&#039;,
&#039;historyMissingFrame&#039;:&#039;For the history feature to work in IE, the page must have an iFrame element with id \&#039;__historyFrame\&#039; pointed to a page that gets its title from the \&#039;title\&#039; query string parameter and calls Sys.Application._onIFrameLoad() on the parent window. This can be done by setting EnableHistory to true on ScriptManager.&#039;,
&#039;appDuplicateComponent&#039;:&#039;Two components with the same id \&#039;{0}\&#039; can\&#039;t be added to the application.&#039;,
&#039;historyCannotAddHistoryPointWithHistoryDisabled&#039;:&#039;A history point can only be added if enableHistory is set to true.&#039;,
&#039;baseNotAClass&#039;:&#039;Value is not a class.&#039;,
&#039;expectedElementOrId&#039;:&#039;Value must be a DOM element or DOM element Id.&#039;,
&#039;methodNotFound&#039;:&#039;No method found with name \&#039;{0}\&#039;.&#039;,
&#039;arrayParseBadFormat&#039;:&#039;Value must be a valid string representation for an array. It must start with a \&#039;[\&#039; and end with a \&#039;]\&#039;.&#039;,
&#039;stateFieldNameInvalid&#039;:&#039;State field names must not contain any \&#039;=\&#039; characters.&#039;,
&#039;cantSetId&#039;:&#039;The id property can\&#039;t be set on this object.&#039;,
&#039;stringFormatBraceMismatch&#039;:&#039;The format string contains an unmatched opening or closing brace.&#039;,
&#039;enumValueNotInteger&#039;:&#039;An enumeration definition can only contain integer values.&#039;,
&#039;propertyNullOrUndefined&#039;:&#039;Cannot set the properties of \&#039;{0}\&#039; because it returned a null value.&#039;,
&#039;argumentDomNode&#039;:&#039;Value must be a DOM element or a text node.&#039;,
&#039;componentCantSetIdTwice&#039;:&#039;The id property of a component can\&#039;t be set more than once.&#039;,
&#039;createComponentOnDom&#039;:&#039;Value must be null for Components that are not Controls or Behaviors.&#039;,
&#039;createNotComponent&#039;:&#039;{0} does not derive from Sys.Component.&#039;,
&#039;createNoDom&#039;:&#039;Value must not be null for Controls and Behaviors.&#039;,
&#039;cantAddWithoutId&#039;:&#039;Can\&#039;t add a component that doesn\&#039;t have an id.&#039;,
&#039;urlTooLong&#039;:&#039;The history state must be small enough to not make the url larger than {0} characters.&#039;,
&#039;notObservable&#039;:&#039;Instances of type \&#039;{0}\&#039; cannot be observed.&#039;,
&#039;badTypeName&#039;:&#039;Value is not the name of the type being registered or the name is a reserved word.&#039;,
&#039;argumentInteger&#039;:&#039;Value must be an integer.&#039;,
&#039;invokeCalledTwice&#039;:&#039;Cannot call invoke more than once.&#039;,
&#039;webServiceFailed&#039;:&#039;The server method \&#039;{0}\&#039; failed with the following error: {1}&#039;,
&#039;argumentType&#039;:&#039;Object cannot be converted to the required type.&#039;,
&#039;argumentNull&#039;:&#039;Value cannot be null.&#039;,
&#039;scriptAlreadyLoaded&#039;:&#039;The script \&#039;{0}\&#039; has been referenced multiple times. If referencing Microsoft AJAX scripts explicitly, set the MicrosoftAjaxMode property of the ScriptManager to Explicit.&#039;,
&#039;scriptDependencyNotFound&#039;:&#039;The script \&#039;{0}\&#039; failed to load because it is dependent on script \&#039;{1}\&#039;.&#039;,
&#039;formatBadFormatSpecifier&#039;:&#039;Format specifier was invalid.&#039;,
&#039;requiredScriptReferenceNotIncluded&#039;:&#039;\&#039;{0}\&#039; requires that you have included a script reference to \&#039;{1}\&#039;.&#039;,
&#039;webServiceFailedNoMsg&#039;:&#039;The server method \&#039;{0}\&#039; failed.&#039;,
&#039;argumentDomElement&#039;:&#039;Value must be a DOM element.&#039;,
&#039;invalidExecutorType&#039;:&#039;Could not create a valid Sys.Net.WebRequestExecutor from: {0}.&#039;,
&#039;cannotCallBeforeResponse&#039;:&#039;Cannot call {0} when responseAvailable is false.&#039;,
&#039;actualValue&#039;:&#039;Actual value was {0}.&#039;,
&#039;enumInvalidValue&#039;:&#039;\&#039;{0}\&#039; is not a valid value for enum {1}.&#039;,
&#039;scriptLoadFailed&#039;:&#039;The script \&#039;{0}\&#039; could not be loaded.&#039;,
&#039;parameterCount&#039;:&#039;Parameter count mismatch.&#039;,
&#039;cannotDeserializeEmptyString&#039;:&#039;Cannot deserialize empty string.&#039;,
&#039;formatInvalidString&#039;:&#039;Input string was not in a correct format.&#039;,
&#039;invalidTimeout&#039;:&#039;Value must be greater than or equal to zero.&#039;,
&#039;cannotAbortBeforeStart&#039;:&#039;Cannot abort when executor has not started.&#039;,
&#039;argument&#039;:&#039;Value does not fall within the expected range.&#039;,
&#039;cannotDeserializeInvalidJson&#039;:&#039;Cannot deserialize. The data does not correspond to valid JSON.&#039;,
&#039;invalidHttpVerb&#039;:&#039;httpVerb cannot be set to an empty or null string.&#039;,
&#039;nullWebRequest&#039;:&#039;Cannot call executeRequest with a null webRequest.&#039;,
&#039;eventHandlerInvalid&#039;:&#039;Handler was not added through the Sys.UI.DomEvent.addHandler method.&#039;,
&#039;cannotSerializeNonFiniteNumbers&#039;:&#039;Cannot serialize non finite numbers.&#039;,
&#039;argumentUndefined&#039;:&#039;Value cannot be undefined.&#039;,
&#039;webServiceInvalidReturnType&#039;:&#039;The server method \&#039;{0}\&#039; returned an invalid type. Expected type: {1}&#039;,
&#039;servicePathNotSet&#039;:&#039;The path to the web service has not been set.&#039;,
&#039;argumentTypeWithTypes&#039;:&#039;Object of type \&#039;{0}\&#039; cannot be converted to type \&#039;{1}\&#039;.&#039;,
&#039;cannotCallOnceStarted&#039;:&#039;Cannot call {0} once started.&#039;,
&#039;badBaseUrl1&#039;:&#039;Base URL does not contain ://.&#039;,
&#039;badBaseUrl2&#039;:&#039;Base URL does not contain another /.&#039;,
&#039;badBaseUrl3&#039;:&#039;Cannot find last / in base URL.&#039;,
&#039;setExecutorAfterActive&#039;:&#039;Cannot set executor after it has become active.&#039;,
&#039;paramName&#039;:&#039;Parameter name: {0}&#039;,
&#039;nullReferenceInPath&#039;:&#039;Null reference while evaluating data path: \&#039;{0}\&#039;.&#039;,
&#039;cannotCallOutsideHandler&#039;:&#039;Cannot call {0} outside of a completed event handler.&#039;,
&#039;cannotSerializeObjectWithCycle&#039;:&#039;Cannot serialize object with cyclic reference within child properties.&#039;,
&#039;format&#039;:&#039;One of the identified items was in an invalid format.&#039;,
&#039;assertFailedCaller&#039;:&#039;Assertion Failed: {0}\r\nat {1}&#039;,
&#039;argumentOutOfRange&#039;:&#039;Specified argument was out of the range of valid values.&#039;,
&#039;webServiceTimedOut&#039;:&#039;The server method \&#039;{0}\&#039; timed out.&#039;,
&#039;notImplemented&#039;:&#039;The method or operation is not implemented.&#039;,
&#039;assertFailed&#039;:&#039;Assertion Failed: {0}&#039;,
&#039;invalidOperation&#039;:&#039;Operation is not valid due to the current state of the object.&#039;,
&#039;breakIntoDebugger&#039;:&#039;{0}\r\n\r\nBreak into debugger?&#039;
};</pre>

		<p class="file_page_meta no_print" style="line-height: 1.5rem;">
			<label class="checkbox normal mini float_right no_top_padding no_min_width">
				<input type="checkbox" id="file_preview_wrap_cb"> wrap long lines
			</label>
		</p>

	</div>

	<div id="comments_holder" class="clearfix clear_both">
	<div class="col span_1_of_6"></div>
	<div class="col span_4_of_6 no_right_padding">
		<div id="file_page_comments">
					</div>	
		<form action="https://bluetube.slack.com/files/mmintz/F04PL0NSR/microsoftajax.debug.js" 
		id="file_comment_form" 
					class="comment_form"
				method="post">
			<a href="/team/tanya" class="member_preview_link" data-member-id="U03PUV2F9" >
			<span class="member_image thumb_36" style="background-image: url('https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2015-04-02/4302270253_83de6fa0d73da98465e7_72.jpg')" data-thumb-size="36" data-member-id="U03PUV2F9"></span>
		</a>		
		<input type="hidden" name="addcomment" value="1" />
	<input type="hidden" name="crumb" value="s-1431029631-dcb1196aaf-☃" />

	<textarea id="file_comment" data-el-id-to-keep-in-view="file_comment_submit_btn" class="comment_input small_bottom_margin" name="comment" wrap="virtual" ></textarea>
	<span class="input_note float_left cloud_silver file_comment_tip">cmd+enter to submit</span>	<button id="file_comment_submit_btn" type="submit" class="btn float_right  ladda-button" data-style="expand-right"><span class="ladda-label">Add Comment</span></button>
</form>

<form action="https://bluetube.slack.com/files/mmintz/F04PL0NSR/microsoftajax.debug.js" 
		id="file_edit_comment_form" 
					class="edit_comment_form hidden"
				method="post">
	<textarea id="file_edit_comment" class="comment_input small_bottom_margin" name="comment" wrap="virtual"></textarea><br>
	<span class="input_note float_left cloud_silver file_comment_tip">cmd+enter to submit</span>	<input type="submit" class="save btn float_right " value="Save Changes" />
	<button class="cancel btn btn_outline float_right small_right_margin ">Cancel</button>
</form>	
	</div>
	<div class="col span_1_of_6"></div>
</div>
</div>

	

		
	</div>
	<div id="overlay"></div>
</div>




<script type="text/javascript">
var cdn_url = 'https://slack.global.ssl.fastly.net';
</script>
			<script type="text/javascript">
<!--
	// common boot_data
	var boot_data = {
		start_ms: new Date().getTime(),
		app: 'web',
		is_mobile: false,
		user_id: 'U03PUV2F9',
		version_ts: '1431028947',
		version_uid: '4ecc5aaac16db02d7ddcd4cf6742cf264e30b63c',
		redir_domain: 'slack-redir.net',
		api_url: '/api/',
		team_url: 'https://bluetube.slack.com/',
		image_proxy_url: 'https://slack-imgs.com/',
		api_token: 'xoxs-3080795098-3810988519-3810988699-532b4b8e27',

		feature_status: false,
		feature_search_attachments: false,
		feature_archive_viewer: true,

		feature_reactions: false,
		feature_fullscreen_modals: false,
		feature_spaces: false,
		feature_a11y_keyboard_shortcuts: false,
		feature_email_integration: false,
		feature_email_ingestion: false,
		feature_attachments_inline: false,
		feature_cmd_autocomplete: true,
		feature_ms_on_space: true,
		feature_flexpane_rework: true,
		feature_fix_files: false,
		feature_chat_sounds: false,
		feature_require_at: true,
		feature_image_proxy: true,
		feature_channel_eventlog_client: true,
		feature_bot_users: true,
		feature_muting: true,
		feature_macssb1_banner: true,
		feature_winssb1_banner: true,
		feature_latest_event_ts: true,
		feature_no_redirects_in_ssb: true,
		feature_referer_policy: true,
		feature_client_exif_orientation_on_uploads: true,
		feature_lato_fonts: true,
		feature_at_channel_warning: true,
		feature_at_channel_warning_non_admin_message: true,
		feature_pins: true,
		feature_join_leave_rollups: true,
		feature_bot_message_label: true,
		feature_oldest_msg_storing: true,
		feature_new_btns_in_channel_list: true,
		feature_box_plugin: true,
		feature_post_previews: false,
		feature_pricing_page_refresh: false,
		feature_client_date_formatting: false,
		feature_more_field_in_message_attachments: false,
		feature_user_hidden_msgs: false,
		feature_prompt_to_share: false,
		feature_file_url_private_conversion: false,
		feature_spaces_in_windows: false,
		feature_screenhero: false,
		feature_msg_input_revisions: false,
		feature_combined_menu: false,
		feature_lazy_load_pins: true,
		feature_simple_latest: true,
		feature_channel_page_toggle_refactor: true,
		feature_admin_sort_by_join_date: false,

		img: {
			app_icon: 'https://slack.global.ssl.fastly.net/272a/img/slack_growl_icon.png'
		},
		page_needs_custom_emoji: false
	};



	// client boot data
			boot_data.login_data = JSON.parse('{\"ok\":true,\"self\":{\"id\":\"U03PUV2F9\",\"name\":\"tanya\",\"prefs\":{\"highlight_words\":\"\",\"user_colors\":\"\",\"color_names_in_list\":true,\"growls_enabled\":true,\"tz\":\"America\\/Los_Angeles\",\"push_dm_alert\":true,\"push_mention_alert\":true,\"push_everything\":false,\"push_idle_wait\":2,\"push_sound\":\"b2.mp3\",\"push_loud_channels\":\"\",\"push_mention_channels\":\"\",\"push_loud_channels_set\":\"\",\"email_alerts\":\"instant\",\"email_alerts_sleep_until\":0,\"email_misc\":true,\"email_weekly\":true,\"welcome_message_hidden\":false,\"all_channels_loud\":false,\"loud_channels\":\"\",\"never_channels\":\"\",\"loud_channels_set\":\"\",\"show_member_presence\":true,\"search_sort\":\"timestamp\",\"expand_inline_imgs\":true,\"expand_internal_inline_imgs\":true,\"expand_snippets\":false,\"posts_formatting_guide\":true,\"seen_welcome_2\":true,\"seen_ssb_prompt\":false,\"search_only_my_channels\":false,\"emoji_mode\":\"default\",\"emoji_use\":\"{\\\"simple_smile\\\":6,\\\"smiley\\\":1,\\\"confused\\\":1,\\\"smile\\\":1,\\\"raised_hands\\\":2,\\\"scream\\\":1,\\\"heart_eyes\\\":1,\\\"astonished\\\":1,\\\"joy\\\":2,\\\"flushed\\\":1,\\\"fearful\\\":1,\\\"satisfied\\\":1,\\\"stuck_out_tongue_winking_eye\\\":1}\",\"has_invited\":false,\"has_uploaded\":true,\"has_created_channel\":false,\"search_exclude_channels\":\"\",\"messages_theme\":\"default\",\"webapp_spellcheck\":true,\"no_joined_overlays\":false,\"no_created_overlays\":false,\"dropbox_enabled\":false,\"seen_user_menu_tip_card\":true,\"seen_team_menu_tip_card\":true,\"seen_channel_menu_tip_card\":true,\"seen_message_input_tip_card\":true,\"seen_channels_tip_card\":true,\"seen_domain_invite_reminder\":false,\"seen_member_invite_reminder\":false,\"seen_flexpane_tip_card\":true,\"seen_search_input_tip_card\":true,\"mute_sounds\":false,\"arrow_history\":false,\"tab_ui_return_selects\":true,\"obey_inline_img_limit\":true,\"new_msg_snd\":\"knock_brush.mp3\",\"collapsible\":false,\"collapsible_by_click\":true,\"require_at\":true,\"mac_ssb_bounce\":\"\",\"mac_ssb_bullet\":true,\"expand_non_media_attachments\":true,\"show_typing\":true,\"pagekeys_handled\":true,\"last_snippet_type\":\"csharp\",\"display_real_names_override\":0,\"time24\":false,\"enter_is_special_in_tbt\":false,\"graphic_emoticons\":false,\"convert_emoticons\":true,\"autoplay_chat_sounds\":true,\"ss_emojis\":true,\"sidebar_behavior\":\"\",\"mark_msgs_read_immediately\":true,\"start_scroll_at_oldest\":true,\"snippet_editor_wrap_long_lines\":false,\"ls_disabled\":false,\"sidebar_theme\":\"monument_theme\",\"sidebar_theme_custom_values\":\"{\\\"column_bg\\\":\\\"#0D7E83\\\",\\\"menu_bg\\\":\\\"#076570\\\",\\\"active_item\\\":\\\"#F79F66\\\",\\\"active_item_text\\\":\\\"#FFFFFF\\\",\\\"hover_item\\\":\\\"#D37C71\\\",\\\"text_color\\\":\\\"#FFFFFF\\\",\\\"active_presence\\\":\\\"#F79F66\\\",\\\"badge\\\":\\\"#F15340\\\"}\",\"f_key_search\":false,\"k_key_omnibox\":true,\"speak_growls\":false,\"mac_speak_voice\":\"com.apple.speech.synthesis.voice.Alex\",\"mac_speak_speed\":250,\"comma_key_prefs\":false,\"at_channel_suppressed_channels\":\"\",\"push_at_channel_suppressed_channels\":\"\",\"prompted_for_email_disabling\":false,\"full_text_extracts\":false,\"no_text_in_notifications\":false,\"muted_channels\":\"\",\"no_macssb1_banner\":false,\"no_winssb1_banner\":true,\"privacy_policy_seen\":true,\"search_exclude_bots\":false,\"fuzzy_matching\":false,\"load_lato_2\":false,\"fuller_timestamps\":false,\"last_seen_at_channel_warning\":0,\"enable_flexpane_rework\":false,\"flex_resize_window\":false,\"msg_preview\":false,\"msg_preview_displaces\":true,\"msg_preview_persistent\":true,\"emoji_autocomplete_big\":false,\"winssb_run_from_tray\":true,\"two_factor_auth_enabled\":false,\"mentions_exclude_at_channels\":true,\"confirm_clear_all_unreads\":true,\"box_enabled\":false},\"created\":1424705604},\"team\":{\"id\":\"T032CPD2W\",\"name\":\"Bluetube\",\"email_domain\":\"bluetubeinc.com\",\"domain\":\"bluetube\",\"msg_edit_window_mins\":-1,\"prefs\":{\"default_channels\":[\"C032CPD3G\",\"C032CPD3Q\"],\"disable_builtin_loading\":true,\"msg_edit_window_mins\":-1,\"allow_message_deletion\":true,\"hide_referers\":true,\"display_real_names\":false,\"who_can_at_everyone\":\"regular\",\"who_can_at_channel\":\"ra\",\"warn_before_at_channel\":\"always\",\"who_can_create_channels\":\"regular\",\"who_can_archive_channels\":\"regular\",\"who_can_create_groups\":\"ra\",\"who_can_post_general\":\"ra\",\"who_can_kick_channels\":\"admin\",\"who_can_kick_groups\":\"regular\",\"retention_type\":0,\"retention_duration\":0,\"group_retention_type\":0,\"group_retention_duration\":0,\"dm_retention_type\":0,\"dm_retention_duration\":0,\"require_at_for_mention\":0,\"compliance_export_start\":0},\"icon\":{\"image_34\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-10\\/3994012131_6f7eafa9497341220288_34.jpg\",\"image_44\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-10\\/3994012131_6f7eafa9497341220288_44.jpg\",\"image_68\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-10\\/3994012131_6f7eafa9497341220288_68.jpg\",\"image_88\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-10\\/3994012131_6f7eafa9497341220288_88.jpg\",\"image_102\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-10\\/3994012131_6f7eafa9497341220288_102.jpg\",\"image_132\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-10\\/3994012131_6f7eafa9497341220288_132.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-10\\/3994012131_6f7eafa9497341220288_original.jpg\"},\"over_storage_limit\":false,\"plan\":\"std\"},\"latest_event_ts\":\"1431029031.000000\",\"channels\":[{\"id\":\"C041R1N6C\",\"name\":\"agile-process\",\"is_channel\":true,\"created\":1426472981,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03A6TU4C\",\"name\":\"all_wac_division_apps\",\"is_channel\":true,\"created\":1420569545,\"creator\":\"U036WP3S3\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C0374MCKK\",\"name\":\"arts-for-learning\",\"is_channel\":true,\"created\":1418843733,\"creator\":\"U032RTT9W\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03CDS3ML\",\"name\":\"aso-website\",\"is_channel\":true,\"created\":1421331315,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C045XSGLG\",\"name\":\"beer\",\"is_channel\":true,\"created\":1427483224,\"creator\":\"U039WM8DH\",\"is_archived\":false,\"is_general\":false,\"has_pins\":true,\"is_member\":true,\"members\":[\"U032CQTJ8\",\"U032CTTUY\",\"U032RTT9W\",\"U033BKK1K\",\"U038AG18Y\",\"U038XGY0F\",\"U039WM8DH\",\"U039WNK7H\",\"U03DE5QBA\",\"U03KGFP73\",\"U03MQ0M2Y\",\"U03PUV2F9\",\"U03V84DTK\"],\"topic\":{\"value\":\"\",\"creator\":\"\",\"last_set\":0},\"purpose\":{\"value\":\"See title\",\"creator\":\"U039WM8DH\",\"last_set\":1427483224}},{\"id\":\"C03L3QC3A\",\"name\":\"bluetube-website\",\"is_channel\":true,\"created\":1423622909,\"creator\":\"U032LFXM6\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C0374K0FQ\",\"name\":\"bso-general\",\"is_channel\":true,\"created\":1418831841,\"creator\":\"U036TD3JD\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03QJNF7L\",\"name\":\"bti-internal-systems\",\"is_channel\":true,\"created\":1424834860,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C032CPKTJ\",\"name\":\"care-logistics\",\"is_channel\":true,\"created\":1416883144,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C042W06TN\",\"name\":\"cincinnatisymphony\",\"is_channel\":true,\"created\":1426705304,\"creator\":\"U032RTT9W\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03KGS093\",\"name\":\"cincy\",\"is_channel\":true,\"created\":1423501897,\"creator\":\"U032CTTUY\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03GDK8Q6\",\"name\":\"code-snippets\",\"is_channel\":true,\"created\":1422548858,\"creator\":\"U033BKK1K\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03BH39UT\",\"name\":\"creative-\",\"is_channel\":true,\"created\":1421100532,\"creator\":\"U032KR334\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03BSFY5Z\",\"name\":\"dads-garage\",\"is_channel\":true,\"created\":1421177250,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C039WNERZ\",\"name\":\"dev-leads\",\"is_channel\":true,\"created\":1420481755,\"creator\":\"U032J83D3\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03Q8PRMH\",\"name\":\"developers\",\"is_channel\":true,\"created\":1424792563,\"creator\":\"U032EEACT\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":true,\"members\":[\"U032CTTUY\",\"U032EEACT\",\"U032J83D3\",\"U033BKK1K\",\"U03410F2D\",\"U036TD3JD\",\"U036Y41KA\",\"U0375UZCY\",\"U03888XHK\",\"U038XK99Z\",\"U0394E3G8\",\"U039WM8DH\",\"U039WNK7H\",\"U03AYUTPC\",\"U03KGFP73\",\"U03KGJTD3\",\"U03MQ0M2Y\",\"U03PUV2F9\"],\"topic\":{\"value\":\"\",\"creator\":\"\",\"last_set\":0},\"purpose\":{\"value\":\"Got a cool dev tool to share? Got some badass code to share? Well this is the channel for it.\",\"creator\":\"U032EEACT\",\"last_set\":1424792563}},{\"id\":\"C03AQD6QA\",\"name\":\"ece\",\"is_channel\":true,\"created\":1420746522,\"creator\":\"U032KR334\",\"is_archived\":true,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C04JW1MJX\",\"name\":\"ep-testing-team\",\"is_channel\":true,\"created\":1430148254,\"creator\":\"U03DE5QBA\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C032BCPEM\",\"name\":\"event-point\",\"is_channel\":true,\"created\":1416885237,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03UW4M20\",\"name\":\"event-point-dev\",\"is_channel\":true,\"created\":1425923864,\"creator\":\"U032CTTUY\",\"is_archived\":false,\"is_general\":false,\"has_pins\":true,\"is_member\":false},{\"id\":\"C03BH5V6B\",\"name\":\"eventpoint-public\",\"is_channel\":true,\"created\":1421101095,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03L3RKEC\",\"name\":\"filament\",\"is_channel\":true,\"created\":1423623274,\"creator\":\"U032LFXM6\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C032SL6EU\",\"name\":\"gemba\",\"is_channel\":true,\"created\":1417020197,\"creator\":\"U032CQTJ8\",\"is_archived\":true,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C032CPD3G\",\"name\":\"general\",\"is_channel\":true,\"created\":1416883046,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":true,\"has_pins\":false,\"is_member\":true,\"members\":[\"U032CPD30\",\"U032CQDHW\",\"U032CQTJ8\",\"U032CTTUY\",\"U032EEACT\",\"U032GM2F6\",\"U032J83D3\",\"U032KR334\",\"U032LFXM6\",\"U032QKTG1\",\"U032RTT9W\",\"U032S2EN4\",\"U033BKK1K\",\"U03410F2D\",\"U036SQ8JX\",\"U036TD3JD\",\"U036WP3S3\",\"U036Y1HHU\",\"U036Y41KA\",\"U0375CPKF\",\"U0375HR4G\",\"U0375UZCY\",\"U03888XHK\",\"U038AG18Y\",\"U038BFPLU\",\"U038XGY0F\",\"U038XK99Z\",\"U038ZA4HT\",\"U0393BBN7\",\"U0394E3G8\",\"U039WM8DH\",\"U039WNK7H\",\"U03AYUTPC\",\"U03BRSJC2\",\"U03DE5QBA\",\"U03E0RDH2\",\"U03KGFP73\",\"U03KGJTD3\",\"U03MQ0M2Y\",\"U03PUV2F9\",\"U03PWRY86\",\"U03UQM7AB\",\"U03V84DTK\",\"U04JW0PKV\"],\"topic\":{\"value\":\"\",\"creator\":\"\",\"last_set\":0},\"purpose\":{\"value\":\"This channel is for team-wide communication and announcements. All team members are in this channel.\",\"creator\":\"\",\"last_set\":0}},{\"id\":\"C032D8ZFG\",\"name\":\"general-lyric-support\",\"is_channel\":true,\"created\":1416889563,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C032D3VMW\",\"name\":\"general-mobile-chat\",\"is_channel\":true,\"created\":1416887127,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C039ZSJR0\",\"name\":\"grubsorceressmolly\",\"is_channel\":true,\"created\":1420499941,\"creator\":\"U032KR334\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C036WVAS1\",\"name\":\"high_kiosk_countdown\",\"is_channel\":true,\"created\":1418766952,\"creator\":\"U036WP3S3\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03GGDSBC\",\"name\":\"interview-candidates\",\"is_channel\":true,\"created\":1422563484,\"creator\":\"U036WP3S3\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C032CPN9S\",\"name\":\"jackson-healthcare\",\"is_channel\":true,\"created\":1416883158,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03LQ9VEE\",\"name\":\"jca_marketing\",\"is_channel\":true,\"created\":1423762931,\"creator\":\"U038AG18Y\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C032D4VP0\",\"name\":\"kc-apex\",\"is_channel\":true,\"created\":1416887584,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C0341FJAY\",\"name\":\"kc-ece-healthies\",\"is_channel\":true,\"created\":1417631278,\"creator\":\"U032CQTJ8\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C037LDV5T\",\"name\":\"kc-gemba\",\"is_channel\":true,\"created\":1419001178,\"creator\":\"U032CQTJ8\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03L7S62B\",\"name\":\"kc-pst-cert\",\"is_channel\":true,\"created\":1423669687,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03JHLBFE\",\"name\":\"kc-services-sitecore\",\"is_channel\":true,\"created\":1423152949,\"creator\":\"U032CQTJ8\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C039GU8K3\",\"name\":\"kennedy-center\",\"is_channel\":true,\"created\":1420216650,\"creator\":\"U036WP3S3\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C04HF0XGB\",\"name\":\"logix\",\"is_channel\":true,\"created\":1429804047,\"creator\":\"U032CQTJ8\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C032D8Z80\",\"name\":\"lyric-opera-syos\",\"is_channel\":true,\"created\":1416889536,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03GDAD72\",\"name\":\"lyric-opera-updates\",\"is_channel\":true,\"created\":1422547375,\"creator\":\"U032EEACT\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C046TGWSW\",\"name\":\"lyric-redesign\",\"is_channel\":true,\"created\":1427745109,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03JEKNLR\",\"name\":\"lyric-testing-team\",\"is_channel\":true,\"created\":1423147986,\"creator\":\"U032RTT9W\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C032LRWFE\",\"name\":\"mac-users\",\"is_channel\":true,\"created\":1416956779,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C041YRP21\",\"name\":\"march-madness\",\"is_channel\":true,\"created\":1426534718,\"creator\":\"U032CTTUY\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C036WT6GF\",\"name\":\"marketing\",\"is_channel\":true,\"created\":1418766346,\"creator\":\"U032GM2F6\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C0389102V\",\"name\":\"micromeritics\",\"is_channel\":true,\"created\":1419357732,\"creator\":\"U032LFXM6\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03BT5XSL\",\"name\":\"micromeritics-errors\",\"is_channel\":true,\"created\":1421169730,\"creator\":\"U033BKK1K\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03A8BJSM\",\"name\":\"mixer-radio\",\"is_channel\":true,\"created\":1420599810,\"creator\":\"U032CQTJ8\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03V90X8L\",\"name\":\"mixer-radio-app\",\"is_channel\":true,\"created\":1426002152,\"creator\":\"U032RTT9W\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C039Y3G3G\",\"name\":\"mohawk\",\"is_channel\":true,\"created\":1420483859,\"creator\":\"U032KR334\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03TSMJ9Y\",\"name\":\"mohawk-public\",\"is_channel\":true,\"created\":1425592045,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C036WV7SF\",\"name\":\"nyphil-maintenance\",\"is_channel\":true,\"created\":1418766935,\"creator\":\"U036TD3JD\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03894ZJM\",\"name\":\"nyphil_gtm\",\"is_channel\":true,\"created\":1419359015,\"creator\":\"U036WP3S3\",\"is_archived\":true,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03F97KSB\",\"name\":\"operations\",\"is_channel\":true,\"created\":1422296967,\"creator\":\"U032CQTJ8\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C04EAHQ2E\",\"name\":\"osf\",\"is_channel\":true,\"created\":1429284994,\"creator\":\"U036WP3S3\",\"is_archived\":true,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03BEE36A\",\"name\":\"phone_system\",\"is_channel\":true,\"created\":1421073093,\"creator\":\"U038AG18Y\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C036VUW1J\",\"name\":\"pregis\",\"is_channel\":true,\"created\":1418748584,\"creator\":\"U032CQTJ8\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03UQ5RPX\",\"name\":\"q-biz\",\"is_channel\":true,\"created\":1425908836,\"creator\":\"U032RTT9W\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C032CPD3Q\",\"name\":\"random\",\"is_channel\":true,\"created\":1416883046,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":true,\"members\":[\"U032CPD30\",\"U032CQTJ8\",\"U032CTTUY\",\"U032EEACT\",\"U032GM2F6\",\"U032J83D3\",\"U032KR334\",\"U032LFXM6\",\"U032RTT9W\",\"U032S2EN4\",\"U033BKK1K\",\"U03410F2D\",\"U036SQ8JX\",\"U036TD3JD\",\"U036WP3S3\",\"U036Y1HHU\",\"U036Y41KA\",\"U0375CPKF\",\"U0375HR4G\",\"U0375UZCY\",\"U03888XHK\",\"U038AG18Y\",\"U038BFPLU\",\"U038XGY0F\",\"U038XK99Z\",\"U038ZA4HT\",\"U0393BBN7\",\"U0394E3G8\",\"U039WM8DH\",\"U039WNK7H\",\"U03AYUTPC\",\"U03BRSJC2\",\"U03DE5QBA\",\"U03E0RDH2\",\"U03KGFP73\",\"U03KGJTD3\",\"U03MQ0M2Y\",\"U03PUV2F9\",\"U03PWRY86\",\"U03UQM7AB\",\"U03V84DTK\",\"U04JW0PKV\"],\"topic\":{\"value\":\"\",\"creator\":\"\",\"last_set\":0},\"purpose\":{\"value\":\"A place for non-work banter, links, articles of interest, humor or anything else which you\'d like concentrated in some place other than work-related channels.\",\"creator\":\"\",\"last_set\":0}},{\"id\":\"C03KGSJBV\",\"name\":\"recruiting\",\"is_channel\":true,\"created\":1423502005,\"creator\":\"U036WP3S3\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03EG7C1L\",\"name\":\"resourcing\",\"is_channel\":true,\"created\":1421967439,\"creator\":\"U032CQTJ8\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C036WL4FR\",\"name\":\"sales\",\"is_channel\":true,\"created\":1418764321,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C049BJS9K\",\"name\":\"salesforce-ats\",\"is_channel\":true,\"created\":1428087862,\"creator\":\"U03BRSJC2\",\"is_archived\":true,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03739G5R\",\"name\":\"sea-tow-android\",\"is_channel\":true,\"created\":1418831661,\"creator\":\"U032EEACT\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C034K1HVB\",\"name\":\"sea-tow-ios\",\"is_channel\":true,\"created\":1417805991,\"creator\":\"U032CQTJ8\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C034132R9\",\"name\":\"sea-tow-mobile\",\"is_channel\":true,\"created\":1417641010,\"creator\":\"U032CQTJ8\",\"is_archived\":true,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C032H9166\",\"name\":\"sea-tow-raygun\",\"is_channel\":true,\"created\":1416931095,\"creator\":\"U032CQDHW\",\"is_archived\":true,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C032L795G\",\"name\":\"seatow-web\",\"is_channel\":true,\"created\":1416951810,\"creator\":\"U032J83D3\",\"is_archived\":true,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C036WN0KD\",\"name\":\"seattle-symphony\",\"is_channel\":true,\"created\":1418764906,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C032BGZU3\",\"name\":\"sitecore-general\",\"is_channel\":true,\"created\":1416887105,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C032JPT2J\",\"name\":\"st-mobile-vesl-web\",\"is_channel\":true,\"created\":1416941544,\"creator\":\"U032CQTJ8\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C038YNBRM\",\"name\":\"straz-center\",\"is_channel\":true,\"created\":1419879012,\"creator\":\"U032EEACT\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03LBDRD4\",\"name\":\"suite22\",\"is_channel\":true,\"created\":1423678590,\"creator\":\"U032LFXM6\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03K09WB6\",\"name\":\"tessitura\",\"is_channel\":true,\"created\":1423260331,\"creator\":\"U036WP3S3\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03NFCZEU\",\"name\":\"tessitura-framework\",\"is_channel\":true,\"created\":1424277122,\"creator\":\"U032RTT9W\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C04GHL3MX\",\"name\":\"tessitura-one-page\",\"is_channel\":true,\"created\":1429652012,\"creator\":\"U036WP3S3\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03LA0VFH\",\"name\":\"tessitura-software\",\"is_channel\":true,\"created\":1423681298,\"creator\":\"U032EEACT\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03FD6CA0\",\"name\":\"the-newsroom\",\"is_channel\":true,\"created\":1422306329,\"creator\":\"U038XGY0F\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":true,\"members\":[\"U032CPD30\",\"U032CQTJ8\",\"U032CTTUY\",\"U032GM2F6\",\"U032J83D3\",\"U032KR334\",\"U032LFXM6\",\"U032QKTG1\",\"U032S2EN4\",\"U03410F2D\",\"U036SQ8JX\",\"U036TD3JD\",\"U036WP3S3\",\"U036Y1HHU\",\"U0375CPKF\",\"U0375HR4G\",\"U0375UZCY\",\"U038AG18Y\",\"U038BFPLU\",\"U038XGY0F\",\"U038ZA4HT\",\"U0393BBN7\",\"U0394E3G8\",\"U039WNK7H\",\"U03E0RDH2\",\"U03MQ0M2Y\",\"U03PUV2F9\"],\"topic\":{\"value\":\"\",\"creator\":\"\",\"last_set\":0},\"purpose\":{\"value\":\"Retweets, Likes, and Shares! We want to know whats trending in YOUR world of social media. Want to share? Link it here! Everyone is welcome to join and it only takes a couple seconds.\",\"creator\":\"U038XGY0F\",\"last_set\":1422553878}},{\"id\":\"C03HRDMCC\",\"name\":\"ticket-alternative\",\"is_channel\":true,\"created\":1422979032,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C048A1JSX\",\"name\":\"tlcc-planning\",\"is_channel\":true,\"created\":1427895629,\"creator\":\"U038AG18Y\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03FCKZT0\",\"name\":\"ui\",\"is_channel\":true,\"created\":1422303288,\"creator\":\"U036WP3S3\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03K8KYRC\",\"name\":\"ux\",\"is_channel\":true,\"created\":1423409128,\"creator\":\"U032S2EN4\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C0390JTDC\",\"name\":\"virtualusergroups\",\"is_channel\":true,\"created\":1419888111,\"creator\":\"U038XGY0F\",\"is_archived\":false,\"is_general\":false,\"has_pins\":true,\"is_member\":false},{\"id\":\"C0374H72Z\",\"name\":\"wac_digital\",\"is_channel\":true,\"created\":1418842478,\"creator\":\"U036WP3S3\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C036WJ98F\",\"name\":\"windows-users\",\"is_channel\":true,\"created\":1418763748,\"creator\":\"U033BKK1K\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03MU9EP4\",\"name\":\"wrench-heads\",\"is_channel\":true,\"created\":1424131764,\"creator\":\"U032CPD30\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C04GYTCFL\",\"name\":\"xamarin-dev-days\",\"is_channel\":true,\"created\":1429825971,\"creator\":\"U038XGY0F\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false},{\"id\":\"C03JZK0QE\",\"name\":\"xamarin-forms\",\"is_channel\":true,\"created\":1423256390,\"creator\":\"U032S2EN4\",\"is_archived\":false,\"is_general\":false,\"has_pins\":false,\"is_member\":false}],\"groups\":[],\"ims\":[{\"id\":\"D03PUV2H5\",\"is_im\":true,\"user\":\"USLACKBOT\",\"created\":1424705604,\"is_user_deleted\":false},{\"id\":\"D03PUV2H9\",\"is_im\":true,\"user\":\"U032CPD30\",\"created\":1424705604,\"is_user_deleted\":false},{\"id\":\"D03PUV2HD\",\"is_im\":true,\"user\":\"U032CQDHW\",\"created\":1424705604,\"is_user_deleted\":true},{\"id\":\"D03PUV2K3\",\"is_im\":true,\"user\":\"U032CTTUY\",\"created\":1424705604,\"is_user_deleted\":false},{\"id\":\"D03PUV2JV\",\"is_im\":true,\"user\":\"U032EEACT\",\"created\":1424705604,\"is_user_deleted\":false},{\"id\":\"D03PWVB8S\",\"is_im\":true,\"user\":\"U032J83D3\",\"created\":1424706198,\"is_user_deleted\":false},{\"id\":\"D03PVNT99\",\"is_im\":true,\"user\":\"U032LFXM6\",\"created\":1424709208,\"is_user_deleted\":false},{\"id\":\"D03PUV2KV\",\"is_im\":true,\"user\":\"U032S2EN4\",\"created\":1424705604,\"is_user_deleted\":false},{\"id\":\"D03PUV2JP\",\"is_im\":true,\"user\":\"U033BKK1K\",\"created\":1424705604,\"is_user_deleted\":false},{\"id\":\"D03S9MDNL\",\"is_im\":true,\"user\":\"U03410F2D\",\"created\":1425304732,\"is_user_deleted\":false},{\"id\":\"D04L1QWNH\",\"is_im\":true,\"user\":\"U03888XHK\",\"created\":1430333291,\"is_user_deleted\":false},{\"id\":\"D03PUV2KM\",\"is_im\":true,\"user\":\"U038BFPLU\",\"created\":1424705604,\"is_user_deleted\":false},{\"id\":\"D03PUV2KB\",\"is_im\":true,\"user\":\"U038ZA4HT\",\"created\":1424705604,\"is_user_deleted\":false},{\"id\":\"D03PUV2JK\",\"is_im\":true,\"user\":\"U0394E3G8\",\"created\":1424705604,\"is_user_deleted\":false},{\"id\":\"D03PW6SF5\",\"is_im\":true,\"user\":\"U03BRSJC2\",\"created\":1424711265,\"is_user_deleted\":false},{\"id\":\"D03PUV2J1\",\"is_im\":true,\"user\":\"U03KGFP73\",\"created\":1424705604,\"is_user_deleted\":false},{\"id\":\"D03V9GHC5\",\"is_im\":true,\"user\":\"U03PWRY86\",\"created\":1426015122,\"is_user_deleted\":false},{\"id\":\"D04JW0PSD\",\"is_im\":true,\"user\":\"U04JW0PKV\",\"created\":1430148141,\"is_user_deleted\":false}],\"users\":[{\"id\":\"U032EEACT\",\"name\":\"acastro\",\"deleted\":false,\"status\":null,\"color\":\"674b1b\",\"real_name\":\"Andres Castro\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Andres\",\"last_name\":\"Castro\",\"title\":\"Code Messiah\",\"skype\":\"\",\"phone\":\"(678) 712-4609\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-23\\/4149406144_0e5a9838ef6f3f241b0c_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-23\\/4149406144_0e5a9838ef6f3f241b0c_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-23\\/4149406144_0e5a9838ef6f3f241b0c_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-23\\/4149406144_0e5a9838ef6f3f241b0c_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-23\\/4149406144_0e5a9838ef6f3f241b0c_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-23\\/4149406144_0e5a9838ef6f3f241b0c_original.jpg\",\"real_name\":\"Andres Castro\",\"real_name_normalized\":\"Andres Castro\",\"email\":\"acastro@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U036Y41KA\",\"name\":\"adan\",\"deleted\":false,\"status\":null,\"color\":\"9e3997\",\"real_name\":\"adan phun\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"adan\",\"last_name\":\"phun\",\"title\":\"\",\"skype\":\"aphun.bluetube\",\"phone\":\"\",\"real_name\":\"adan phun\",\"real_name_normalized\":\"adan phun\",\"email\":\"aphun@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/e29569826ef841168ca906591bbc05e9.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0010-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/e29569826ef841168ca906591bbc05e9.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0010-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/e29569826ef841168ca906591bbc05e9.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0010-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/e29569826ef841168ca906591bbc05e9.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0010-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/e29569826ef841168ca906591bbc05e9.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0010.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03AYUTPC\",\"name\":\"aidan\",\"deleted\":false,\"status\":null,\"color\":\"de5f24\",\"real_name\":\"\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"real_name\":\"\",\"real_name_normalized\":\"\",\"email\":\"aarrowood@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/74bd96727841efc0f9b341df36364afd.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0018-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/74bd96727841efc0f9b341df36364afd.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0018-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/74bd96727841efc0f9b341df36364afd.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F272a%2Fimg%2Favatars%2Fava_0018-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/74bd96727841efc0f9b341df36364afd.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0018-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/74bd96727841efc0f9b341df36364afd.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0018.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03V0KRQS\",\"name\":\"alexandern\",\"deleted\":false,\"status\":null,\"color\":\"965d1b\",\"real_name\":\"Alexander Nessel\",\"tz\":\"America\\/Los_Angeles\",\"tz_label\":\"Pacific Daylight Time\",\"tz_offset\":-25200,\"profile\":{\"first_name\":\"Alexander\",\"last_name\":\"Nessel\",\"real_name\":\"Alexander Nessel\",\"real_name_normalized\":\"Alexander Nessel\",\"email\":\"alexandern@eventpoint.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/c11921eefebb75cb15d872b95bf14d33.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F272a%2Fimg%2Favatars%2Fava_0001-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/c11921eefebb75cb15d872b95bf14d33.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0001-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/c11921eefebb75cb15d872b95bf14d33.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0001-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/c11921eefebb75cb15d872b95bf14d33.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0001-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/c11921eefebb75cb15d872b95bf14d33.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0001.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":true,\"is_ultra_restricted\":true,\"is_bot\":false},{\"id\":\"U0406RJ4D\",\"name\":\"amaffetone\",\"deleted\":false,\"status\":null,\"color\":\"bc3663\",\"real_name\":\"amy Maffetone\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"amy\",\"last_name\":\"Maffetone\",\"real_name\":\"amy Maffetone\",\"real_name_normalized\":\"amy Maffetone\",\"email\":\"amaffetone70@gmail.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/bb2541926c84ac576dc0bb390e3a18a2.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0018-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/bb2541926c84ac576dc0bb390e3a18a2.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0018-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/bb2541926c84ac576dc0bb390e3a18a2.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F272a%2Fimg%2Favatars%2Fava_0018-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/bb2541926c84ac576dc0bb390e3a18a2.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0018-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/bb2541926c84ac576dc0bb390e3a18a2.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0018.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":true,\"is_ultra_restricted\":true,\"is_bot\":false},{\"id\":\"U036Y1HHU\",\"name\":\"amitvimawala\",\"deleted\":false,\"status\":null,\"color\":\"db3150\",\"real_name\":\"Amit Vimawala\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Amit\",\"last_name\":\"Vimawala\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-16\\/3236107944_8802c5250e296d69a238_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-16\\/3236107944_8802c5250e296d69a238_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-16\\/3236107944_8802c5250e296d69a238_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-16\\/3236107944_8802c5250e296d69a238_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-16\\/3236107944_8802c5250e296d69a238_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-16\\/3236107944_8802c5250e296d69a238_original.jpg\",\"title\":\"What can I do to put you in a Mobile App today?\",\"skype\":\"\",\"phone\":\"6785240261\",\"real_name\":\"Amit Vimawala\",\"real_name_normalized\":\"Amit Vimawala\",\"email\":\"avimawala@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03V84DTK\",\"name\":\"amy\",\"deleted\":false,\"status\":null,\"color\":\"e85d72\",\"real_name\":\"Amy Newbold\",\"tz\":\"America\\/Los_Angeles\",\"tz_label\":\"Pacific Daylight Time\",\"tz_offset\":-25200,\"profile\":{\"first_name\":\"Amy\",\"last_name\":\"Newbold\",\"title\":\"\",\"skype\":\"\",\"phone\":\"678-712-2115 ext. 307\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-29\\/4681725163_f6de1ab89c404306080e_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-29\\/4681725163_f6de1ab89c404306080e_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-29\\/4681725163_f6de1ab89c404306080e_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-29\\/4681725163_f6de1ab89c404306080e_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-29\\/4681725163_f6de1ab89c404306080e_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-29\\/4681725163_f6de1ab89c404306080e_original.jpg\",\"real_name\":\"Amy Newbold\",\"real_name_normalized\":\"Amy Newbold\",\"email\":\"anewbold@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03VABG5F\",\"name\":\"amylutz\",\"deleted\":false,\"status\":null,\"color\":\"dc7dbb\",\"real_name\":\"\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"real_name\":\"\",\"real_name_normalized\":\"\",\"email\":\"amy_lutz@mohawkind.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/4fb1f606fdb75c255e7287acceb80be6.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0008-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/4fb1f606fdb75c255e7287acceb80be6.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0008-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/4fb1f606fdb75c255e7287acceb80be6.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0008-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/4fb1f606fdb75c255e7287acceb80be6.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0008-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/4fb1f606fdb75c255e7287acceb80be6.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0008.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":true,\"is_ultra_restricted\":true,\"is_bot\":false},{\"id\":\"U032S2EN4\",\"name\":\"andrew\",\"deleted\":false,\"status\":null,\"color\":\"99a949\",\"real_name\":\"Andrew Cotten\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Andrew\",\"last_name\":\"Cotten \",\"title\":\"\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242299583_f4dbdf585861cb123e8f_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242299583_f4dbdf585861cb123e8f_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242299583_f4dbdf585861cb123e8f_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242299583_f4dbdf585861cb123e8f_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242299583_f4dbdf585861cb123e8f_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242299583_f4dbdf585861cb123e8f_original.jpg\",\"real_name\":\"Andrew Cotten\",\"real_name_normalized\":\"Andrew Cotten\",\"email\":\"acotten@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U0416F19N\",\"name\":\"andyt\",\"deleted\":false,\"status\":null,\"color\":\"9d8eee\",\"real_name\":\"\",\"tz\":\"America\\/Denver\",\"tz_label\":\"Mountain Daylight Time\",\"tz_offset\":-21600,\"profile\":{\"real_name\":\"\",\"real_name_normalized\":\"\",\"email\":\"andyt@eventpoint.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/ae1fc9b969e5b11cea991a60e423558c.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0002-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/ae1fc9b969e5b11cea991a60e423558c.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0002-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/ae1fc9b969e5b11cea991a60e423558c.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F272a%2Fimg%2Favatars%2Fava_0002-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/ae1fc9b969e5b11cea991a60e423558c.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0002-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/ae1fc9b969e5b11cea991a60e423558c.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0002.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":true,\"is_ultra_restricted\":true,\"is_bot\":false},{\"id\":\"U033BKK1K\",\"name\":\"ben\",\"deleted\":false,\"status\":\"forever\",\"color\":\"4cc091\",\"real_name\":\"Ben McCrary\",\"tz\":\"America\\/New_York\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Ben\",\"last_name\":\"McCrary\",\"title\":\"Winner\",\"skype\":\"bmccrary.bluetube\",\"phone\":\"\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-08\\/3167659131_ca4bde875f830f8890b9_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-08\\/3167659131_ca4bde875f830f8890b9_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-08\\/3167659131_ca4bde875f830f8890b9_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-08\\/3167659131_ca4bde875f830f8890b9_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-08\\/3167659131_ca4bde875f830f8890b9_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-08\\/3167659131_ca4bde875f830f8890b9_original.jpg\",\"real_name\":\"Ben McCrary\",\"real_name_normalized\":\"Ben McCrary\",\"email\":\"bmccrary@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03KGFP73\",\"name\":\"bhumphrey\",\"deleted\":false,\"status\":null,\"color\":\"84b22f\",\"real_name\":\"Brent Humphrey\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Brent\",\"last_name\":\"Humphrey\",\"title\":\"Software Developer\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-27\\/3871018646_107017df8b99ccd39018_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-27\\/3871018646_107017df8b99ccd39018_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-27\\/3871018646_107017df8b99ccd39018_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-27\\/3871018646_107017df8b99ccd39018_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-27\\/3871018646_107017df8b99ccd39018_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-27\\/3871018646_107017df8b99ccd39018_original.jpg\",\"real_name\":\"Brent Humphrey\",\"real_name_normalized\":\"Brent Humphrey\",\"email\":\"bhumphrey@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U038XK99Z\",\"name\":\"brian\",\"deleted\":false,\"status\":null,\"color\":\"d55aef\",\"real_name\":\"Brian Santisi\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Brian\",\"last_name\":\"Santisi\",\"title\":\"Developer\",\"skype\":\"\",\"phone\":\"how are you today\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-18\\/4094954175_6a3df39882d41ae72fe5_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-18\\/4094954175_6a3df39882d41ae72fe5_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-18\\/4094954175_6a3df39882d41ae72fe5_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-18\\/4094954175_6a3df39882d41ae72fe5_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-18\\/4094954175_6a3df39882d41ae72fe5_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-18\\/4094954175_6a3df39882d41ae72fe5_original.jpg\",\"real_name\":\"Brian Santisi\",\"real_name_normalized\":\"Brian Santisi\",\"email\":\"bsantisi@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U038XGY0F\",\"name\":\"bryttney\",\"deleted\":false,\"status\":null,\"color\":\"50a0cf\",\"real_name\":\"Bryttney Murphy\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Bryttney\",\"last_name\":\"Murphy\",\"title\":\"Marketing Magician\",\"skype\":\"\",\"phone\":\"(404) 545-3595\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-29\\/3304675502_3aec3d188084431da240_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-29\\/3304675502_3aec3d188084431da240_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-29\\/3304675502_3aec3d188084431da240_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-29\\/3304675502_3aec3d188084431da240_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-29\\/3304675502_3aec3d188084431da240_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-29\\/3304675502_3aec3d188084431da240_original.jpg\",\"real_name\":\"Bryttney Murphy\",\"real_name_normalized\":\"Bryttney Murphy\",\"email\":\"bmurphy@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U032CQDHW\",\"name\":\"c0lby\",\"deleted\":true,\"profile\":{\"first_name\":\"Colby\",\"last_name\":\"Williams\",\"skype\":\"williams.colby\",\"phone\":\"(678) 619-2227\",\"title\":\"Mobile Lead\",\"real_name\":\"Colby Williams\",\"real_name_normalized\":\"Colby Williams\",\"email\":\"cwilliams@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/876eb91bb4ef83811db02cf5386bdc5f.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0006-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/876eb91bb4ef83811db02cf5386bdc5f.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0006-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/876eb91bb4ef83811db02cf5386bdc5f.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0006-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/876eb91bb4ef83811db02cf5386bdc5f.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0006-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/876eb91bb4ef83811db02cf5386bdc5f.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0006.png\"}},{\"id\":\"U032RTT9W\",\"name\":\"cjackson\",\"deleted\":false,\"status\":null,\"color\":\"2b6836\",\"real_name\":\"Carol Jackson\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Carol\",\"last_name\":\"Jackson\",\"real_name\":\"Carol Jackson\",\"real_name_normalized\":\"Carol Jackson\",\"email\":\"cjackson@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/1fbceb7900308404da440cc5fabe602f.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/1fbceb7900308404da440cc5fabe602f.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/1fbceb7900308404da440cc5fabe602f.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/1fbceb7900308404da440cc5fabe602f.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/1fbceb7900308404da440cc5fabe602f.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012.png\"},\"is_admin\":true,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03UQM7AB\",\"name\":\"cmixon\",\"deleted\":false,\"status\":null,\"color\":\"7d414c\",\"real_name\":\"\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"real_name\":\"\",\"real_name_normalized\":\"\",\"email\":\"cmixon@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/8742efcedd90ed9b08681978acff5cf7.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0019-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/8742efcedd90ed9b08681978acff5cf7.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F272a%2Fimg%2Favatars%2Fava_0019-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/8742efcedd90ed9b08681978acff5cf7.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F272a%2Fimg%2Favatars%2Fava_0019-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/8742efcedd90ed9b08681978acff5cf7.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0019-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/8742efcedd90ed9b08681978acff5cf7.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0019.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U032QKTG1\",\"name\":\"dkellogg\",\"deleted\":false,\"status\":null,\"color\":\"df3dc0\",\"real_name\":\"Dave Kellogg\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Dave\",\"last_name\":\"Kellogg\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-21\\/3475974638_19078fc0ff75acf14812_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-21\\/3475974638_19078fc0ff75acf14812_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-21\\/3475974638_19078fc0ff75acf14812_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-21\\/3475974638_19078fc0ff75acf14812_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-21\\/3475974638_19078fc0ff75acf14812_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-21\\/3475974638_19078fc0ff75acf14812_original.jpg\",\"real_name\":\"Dave Kellogg\",\"real_name_normalized\":\"Dave Kellogg\",\"email\":\"dkellogg@bluetubeinc.com\"},\"is_admin\":true,\"is_owner\":true,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03QBSCN5\",\"name\":\"ericscott\",\"deleted\":false,\"status\":null,\"color\":\"a72f79\",\"real_name\":\"Eric Scott\",\"tz\":\"America\\/Los_Angeles\",\"tz_label\":\"Pacific Daylight Time\",\"tz_offset\":-25200,\"profile\":{\"first_name\":\"Eric\",\"last_name\":\"Scott\",\"real_name\":\"Eric Scott\",\"real_name_normalized\":\"Eric Scott\",\"email\":\"erics@eventpoint.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/f2ad15d1a94dd87b2cee2dc0cebb2b10.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0002-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/f2ad15d1a94dd87b2cee2dc0cebb2b10.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0002-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/f2ad15d1a94dd87b2cee2dc0cebb2b10.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F272a%2Fimg%2Favatars%2Fava_0002-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/f2ad15d1a94dd87b2cee2dc0cebb2b10.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0002-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/f2ad15d1a94dd87b2cee2dc0cebb2b10.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0002.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":true,\"is_ultra_restricted\":true,\"is_bot\":false},{\"id\":\"U032CPD30\",\"name\":\"grantmarkdavies\",\"deleted\":false,\"status\":null,\"color\":\"9f69e7\",\"real_name\":\"Grant Davies\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Grant\",\"last_name\":\"Davies\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-24\\/3079275933_96b3d645bd9abda68a88_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-24\\/3079275933_96b3d645bd9abda68a88_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-24\\/3079275933_96b3d645bd9abda68a88_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-24\\/3079275933_96b3d645bd9abda68a88_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-24\\/3079275933_96b3d645bd9abda68a88_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-24\\/3079275933_96b3d645bd9abda68a88_original.jpg\",\"skype\":\"grantmarkdavies\",\"phone\":\"6782697647\",\"title\":\"Chief Limey Officer\",\"real_name\":\"Grant Davies\",\"real_name_normalized\":\"Grant Davies\",\"email\":\"gdavies@bluetubeinc.com\"},\"is_admin\":true,\"is_owner\":true,\"is_primary_owner\":true,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U032KR334\",\"name\":\"heather\",\"deleted\":false,\"status\":null,\"color\":\"684b6c\",\"real_name\":\"\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"real_name\":\"\",\"real_name_normalized\":\"\",\"email\":\"hbaird@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/268a3e6f4ddd8c6345ad0783131781b2.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0014-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/268a3e6f4ddd8c6345ad0783131781b2.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0014-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/268a3e6f4ddd8c6345ad0783131781b2.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0014-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/268a3e6f4ddd8c6345ad0783131781b2.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0014-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/268a3e6f4ddd8c6345ad0783131781b2.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0014.png\"},\"is_admin\":true,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U0393BBN7\",\"name\":\"ilene\",\"deleted\":false,\"status\":null,\"color\":\"43761b\",\"real_name\":\"Ilene Peguero\",\"tz\":\"America\\/New_York\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Ilene\",\"last_name\":\"Peguero\",\"title\":\"\",\"skype\":\"ipeguero_2\",\"phone\":\"\",\"real_name\":\"Ilene Peguero\",\"real_name_normalized\":\"Ilene Peguero\",\"email\":\"ipeguero@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/376cb012e3d999a094d105c833a07fd2.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0006-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/376cb012e3d999a094d105c833a07fd2.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0006-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/376cb012e3d999a094d105c833a07fd2.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0006-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/376cb012e3d999a094d105c833a07fd2.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0006-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/376cb012e3d999a094d105c833a07fd2.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0006.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U036TD3JD\",\"name\":\"jayschiappa\",\"deleted\":false,\"status\":null,\"color\":\"5a4592\",\"real_name\":\"Jay Schiappa\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Jay\",\"last_name\":\"Schiappa\",\"skype\":\"jayschiappa.bluetube\",\"phone\":\"678-619-2228\",\"title\":\"Team Lead - PFA\",\"real_name\":\"Jay Schiappa\",\"real_name_normalized\":\"Jay Schiappa\",\"email\":\"jschiappa@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/b1007c7e1183464905d827b4cfbc6091.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0017-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/b1007c7e1183464905d827b4cfbc6091.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0017-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/b1007c7e1183464905d827b4cfbc6091.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0017-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/b1007c7e1183464905d827b4cfbc6091.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0017-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/b1007c7e1183464905d827b4cfbc6091.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0017.png\"},\"is_admin\":true,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U032J83D3\",\"name\":\"jchen\",\"deleted\":false,\"status\":null,\"color\":\"e0a729\",\"real_name\":\"Jonathan Chen\",\"tz\":\"America\\/New_York\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Jonathan\",\"last_name\":\"Chen\",\"title\":\"Senior Software Engineer\",\"skype\":\"jchen.bluetube\",\"phone\":\"770-862-8533\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-05\\/3336877603_2af1179eaefcffa840d2_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-05\\/3336877603_2af1179eaefcffa840d2_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-05\\/3336877603_2af1179eaefcffa840d2_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-05\\/3336877603_2af1179eaefcffa840d2_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-05\\/3336877603_2af1179eaefcffa840d2_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-05\\/3336877603_2af1179eaefcffa840d2_original.jpg\",\"real_name\":\"Jonathan Chen\",\"real_name_normalized\":\"Jonathan Chen\",\"email\":\"jchen@bluetubeinc.com\"},\"is_admin\":true,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U038BFPLU\",\"name\":\"jeremy\",\"deleted\":false,\"status\":null,\"color\":\"ea2977\",\"real_name\":\"Jeremy Herring\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Jeremy\",\"last_name\":\"Herring\",\"title\":\"Things\",\"skype\":\"\",\"phone\":\"7702959192\",\"real_name\":\"Jeremy Herring\",\"real_name_normalized\":\"Jeremy Herring\",\"email\":\"jherring@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/18357e1c2da859e8e2d989c5bc357c65.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0026-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/18357e1c2da859e8e2d989c5bc357c65.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0026-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/18357e1c2da859e8e2d989c5bc357c65.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F272a%2Fimg%2Favatars%2Fava_0026-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/18357e1c2da859e8e2d989c5bc357c65.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0026-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/18357e1c2da859e8e2d989c5bc357c65.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F272a%2Fimg%2Favatars%2Fava_0026.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03UYA8TZ\",\"name\":\"jesse_horne\",\"deleted\":false,\"status\":null,\"color\":\"4d5e26\",\"real_name\":\"Jesse Horne\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Jesse\",\"last_name\":\"Horne\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-09\\/3987661664_bcf8a5cbaddd4f0b9b9a_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-09\\/3987661664_bcf8a5cbaddd4f0b9b9a_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-09\\/3987661664_bcf8a5cbaddd4f0b9b9a_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-09\\/3987661664_bcf8a5cbaddd4f0b9b9a_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-09\\/3987661664_bcf8a5cbaddd4f0b9b9a_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-09\\/3987661664_bcf8a5cbaddd4f0b9b9a_original.jpg\",\"skype\":\"itlstudios\",\"phone\":\"561-702-2116\",\"real_name\":\"Jesse Horne\",\"real_name_normalized\":\"Jesse Horne\",\"email\":\"jesse_horne@mohawkind.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":true,\"is_ultra_restricted\":true,\"is_bot\":false},{\"id\":\"U033TMYCL\",\"name\":\"jgluck\",\"deleted\":true,\"profile\":{\"real_name\":\"\",\"real_name_normalized\":\"\",\"email\":\"jgluck@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/bbaa8cc82ff17d02af750bb68c08a0a1.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0013-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/bbaa8cc82ff17d02af750bb68c08a0a1.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0013-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/bbaa8cc82ff17d02af750bb68c08a0a1.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0013-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/bbaa8cc82ff17d02af750bb68c08a0a1.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0013-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/bbaa8cc82ff17d02af750bb68c08a0a1.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0013.png\"}},{\"id\":\"U0375UZCY\",\"name\":\"jgreene\",\"deleted\":false,\"status\":null,\"color\":\"c386df\",\"real_name\":\"Jaavan Greene\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242728781_3c5888b6290ac2059b7d_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242728781_3c5888b6290ac2059b7d_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242728781_3c5888b6290ac2059b7d_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242728781_3c5888b6290ac2059b7d_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242728781_3c5888b6290ac2059b7d_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242728781_3c5888b6290ac2059b7d_original.jpg\",\"first_name\":\"Jaavan\",\"last_name\":\"Greene\",\"title\":\"Verb\",\"skype\":\"jaavan.greene\",\"phone\":\"404\",\"real_name\":\"Jaavan Greene\",\"real_name_normalized\":\"Jaavan Greene\",\"email\":\"jgreene@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03GJS1H8\",\"name\":\"jwballard\",\"deleted\":false,\"status\":null,\"color\":\"8d4b84\",\"real_name\":\"John Ballard\",\"tz\":\"America\\/Los_Angeles\",\"tz_label\":\"Pacific Daylight Time\",\"tz_offset\":-25200,\"profile\":{\"first_name\":\"John\",\"last_name\":\"Ballard\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-30\\/3571860614_9e97bef3095c8d923b8b_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-30\\/3571860614_9e97bef3095c8d923b8b_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-30\\/3571860614_9e97bef3095c8d923b8b_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-30\\/3571860614_9e97bef3095c8d923b8b_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-30\\/3571860614_9e97bef3095c8d923b8b_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-30\\/3571860614_9e97bef3095c8d923b8b_original.jpg\",\"title\":\"\",\"skype\":\"\",\"phone\":\"2063007818\",\"real_name\":\"John Ballard\",\"real_name_normalized\":\"John Ballard\",\"email\":\"johnb@eventpoint.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":true,\"is_ultra_restricted\":true,\"is_bot\":false},{\"id\":\"U03UXKWG1\",\"name\":\"kevin_leclair\",\"deleted\":false,\"status\":null,\"color\":\"aba727\",\"real_name\":\"\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"real_name\":\"\",\"real_name_normalized\":\"\",\"email\":\"kevin_leclair@mohawkind.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/c13147c5bc43797f8a327e08f37a959d.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0006-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/c13147c5bc43797f8a327e08f37a959d.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0006-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/c13147c5bc43797f8a327e08f37a959d.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0006-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/c13147c5bc43797f8a327e08f37a959d.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0006-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/c13147c5bc43797f8a327e08f37a959d.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0006.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":true,\"is_ultra_restricted\":true,\"is_bot\":false},{\"id\":\"U032LFXM6\",\"name\":\"keyur\",\"deleted\":false,\"status\":null,\"color\":\"5b89d5\",\"real_name\":\"Keyur Vimawala\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Keyur\",\"last_name\":\"Vimawala\",\"real_name\":\"Keyur Vimawala\",\"real_name_normalized\":\"Keyur Vimawala\",\"email\":\"kvimawala@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/9aaaebb8948e3b1b528a7f9594fb3603.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0019-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/9aaaebb8948e3b1b528a7f9594fb3603.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F272a%2Fimg%2Favatars%2Fava_0019-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/9aaaebb8948e3b1b528a7f9594fb3603.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F272a%2Fimg%2Favatars%2Fava_0019-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/9aaaebb8948e3b1b528a7f9594fb3603.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0019-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/9aaaebb8948e3b1b528a7f9594fb3603.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0019.png\"},\"is_admin\":true,\"is_owner\":true,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U047J3LHP\",\"name\":\"kinglovedesign\",\"deleted\":false,\"status\":null,\"color\":\"8469bc\",\"real_name\":\"Amber Love\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Amber\",\"last_name\":\"Love\",\"real_name\":\"Amber Love\",\"real_name_normalized\":\"Amber Love\",\"email\":\"amber@kinglovedesign.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/bca77263e8e119ad7b03dcb4fa5ff1cd.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0021-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/bca77263e8e119ad7b03dcb4fa5ff1cd.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0021-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/bca77263e8e119ad7b03dcb4fa5ff1cd.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0021-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/bca77263e8e119ad7b03dcb4fa5ff1cd.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0021-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/bca77263e8e119ad7b03dcb4fa5ff1cd.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F272a%2Fimg%2Favatars%2Fava_0021.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":true,\"is_ultra_restricted\":true,\"is_bot\":false},{\"id\":\"U036SQ8JX\",\"name\":\"kkohler\",\"deleted\":false,\"status\":null,\"color\":\"bb86b7\",\"real_name\":\"Kevin Kohler\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Kevin\",\"last_name\":\"Kohler\",\"title\":\"\",\"skype\":\"\",\"phone\":\"\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-25\\/3840932163_d8ad496cc7a635db3bcd_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-25\\/3840932163_d8ad496cc7a635db3bcd_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-25\\/3840932163_d8ad496cc7a635db3bcd_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-25\\/3840932163_d8ad496cc7a635db3bcd_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-25\\/3840932163_d8ad496cc7a635db3bcd_72.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-25\\/3840932163_d8ad496cc7a635db3bcd_original.jpg\",\"real_name\":\"Kevin Kohler\",\"real_name_normalized\":\"Kevin Kohler\",\"email\":\"kkohler@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U04JW0PKV\",\"name\":\"ksamples\",\"deleted\":false,\"status\":null,\"color\":\"73769d\",\"real_name\":\"Karen Samples\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Karen\",\"last_name\":\"Samples\",\"real_name\":\"Karen Samples\",\"real_name_normalized\":\"Karen Samples\",\"email\":\"ksamples@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/23c46452f25cb44ca233b3c38ba459de.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0023-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/23c46452f25cb44ca233b3c38ba459de.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F272a%2Fimg%2Favatars%2Fava_0023-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/23c46452f25cb44ca233b3c38ba459de.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F272a%2Fimg%2Favatars%2Fava_0023-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/23c46452f25cb44ca233b3c38ba459de.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0023-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/23c46452f25cb44ca233b3c38ba459de.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0023.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U032GM2F6\",\"name\":\"lance\",\"deleted\":false,\"status\":null,\"color\":\"e96699\",\"real_name\":\"Lance Hayden\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Lance\",\"last_name\":\"Hayden\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-25\\/3083283037_2fe617f3d3e8201bc8b6_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-25\\/3083283037_2fe617f3d3e8201bc8b6_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-25\\/3083283037_2fe617f3d3e8201bc8b6_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-25\\/3083283037_2fe617f3d3e8201bc8b6_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-25\\/3083283037_2fe617f3d3e8201bc8b6_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-25\\/3083283037_2fe617f3d3e8201bc8b6_original.jpg\",\"title\":\"Marketing Manager\",\"skype\":\"lance.bluetube\",\"phone\":\"7707227870\",\"real_name\":\"Lance Hayden\",\"real_name_normalized\":\"Lance Hayden\",\"email\":\"lhayden@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U0375CPKF\",\"name\":\"mattbaker\",\"deleted\":false,\"status\":null,\"color\":\"385a86\",\"real_name\":\"Matt Baker\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Matt\",\"last_name\":\"Baker\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-16\\/3741939211_765ce42d0b8b03ac88fb_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-16\\/3741939211_765ce42d0b8b03ac88fb_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-16\\/3741939211_765ce42d0b8b03ac88fb_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-16\\/3741939211_765ce42d0b8b03ac88fb_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-16\\/3741939211_765ce42d0b8b03ac88fb_72.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-16\\/3741939211_765ce42d0b8b03ac88fb_original.jpg\",\"real_name\":\"Matt Baker\",\"real_name_normalized\":\"Matt Baker\",\"email\":\"mbaker@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03888XHK\",\"name\":\"mmintz\",\"deleted\":false,\"status\":null,\"color\":\"a63024\",\"real_name\":\"Matt Mintz\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Matt\",\"last_name\":\"Mintz\",\"real_name\":\"Matt Mintz\",\"real_name_normalized\":\"Matt Mintz\",\"email\":\"mmintz@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/e3568511339f7e21a0cb7175d90f4af9.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0009-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/e3568511339f7e21a0cb7175d90f4af9.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0009-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/e3568511339f7e21a0cb7175d90f4af9.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0009-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/e3568511339f7e21a0cb7175d90f4af9.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0009-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/e3568511339f7e21a0cb7175d90f4af9.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0009.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U036WP3S3\",\"name\":\"molly\",\"deleted\":false,\"status\":null,\"color\":\"235e5b\",\"real_name\":\"molly\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"molly\",\"last_name\":\"\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-16\\/3236139848_3f090a3de0abc389b512_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-16\\/3236139848_3f090a3de0abc389b512_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-16\\/3236139848_3f090a3de0abc389b512_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-16\\/3236139848_3f090a3de0abc389b512_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-16\\/3236139848_3f090a3de0abc389b512_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-16\\/3236139848_3f090a3de0abc389b512_original.jpg\",\"skype\":\"molly.holmes507\",\"phone\":\"7708152111\",\"title\":\"Tasks on tasks\",\"real_name\":\"molly\",\"real_name_normalized\":\"molly\",\"email\":\"mholmes@bluetubeinc.com\"},\"is_admin\":true,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U038ZA4HT\",\"name\":\"mpence\",\"deleted\":false,\"status\":null,\"color\":\"d1707d\",\"real_name\":\"Matt Pence\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"phone\":\"\",\"first_name\":\"Matt\",\"last_name\":\"Pence\",\"title\":\"#FF7777\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-03\\/3907691665_e03b4b44e8758c009041_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-03\\/3907691665_e03b4b44e8758c009041_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-03\\/3907691665_e03b4b44e8758c009041_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-03\\/3907691665_e03b4b44e8758c009041_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-03\\/3907691665_e03b4b44e8758c009041_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-03\\/3907691665_e03b4b44e8758c009041_original.jpg\",\"skype\":\"\",\"real_name\":\"Matt Pence\",\"real_name_normalized\":\"Matt Pence\",\"email\":\"mpence@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U032CTTUY\",\"name\":\"naterickard\",\"deleted\":false,\"status\":null,\"color\":\"3c989f\",\"real_name\":\"Nate Rickard\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Nate\",\"last_name\":\"Rickard\",\"title\":\"\",\"skype\":\"Nate.Rickard\",\"phone\":\"(513) 445-3383 x404\",\"real_name\":\"Nate Rickard\",\"real_name_normalized\":\"Nate Rickard\",\"email\":\"nrickard@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/7364fbe739f78581b7d26c95759b48ee.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/7364fbe739f78581b7d26c95759b48ee.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/7364fbe739f78581b7d26c95759b48ee.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/7364fbe739f78581b7d26c95759b48ee.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/7364fbe739f78581b7d26c95759b48ee.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012.png\"},\"is_admin\":true,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U039WM8DH\",\"name\":\"nickf\",\"deleted\":false,\"status\":null,\"color\":\"8f4a2b\",\"real_name\":\"\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"real_name\":\"\",\"real_name_normalized\":\"\",\"email\":\"nfisher@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/b5eb9ed6695891b65e65f183f9008d8f.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0020-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/b5eb9ed6695891b65e65f183f9008d8f.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0020-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/b5eb9ed6695891b65e65f183f9008d8f.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0020-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/b5eb9ed6695891b65e65f183f9008d8f.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0020-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/b5eb9ed6695891b65e65f183f9008d8f.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0020.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03PWRY86\",\"name\":\"nicole\",\"deleted\":false,\"status\":null,\"color\":\"619a4f\",\"real_name\":\"Nicole Baker\",\"tz\":\"America\\/Los_Angeles\",\"tz_label\":\"Pacific Daylight Time\",\"tz_offset\":-25200,\"profile\":{\"first_name\":\"Nicole\",\"last_name\":\"Baker\",\"title\":\"UX\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-24\\/3828115919_749c4cbb32f07bcd1f6f_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-24\\/3828115919_749c4cbb32f07bcd1f6f_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-24\\/3828115919_749c4cbb32f07bcd1f6f_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-24\\/3828115919_749c4cbb32f07bcd1f6f_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-24\\/3828115919_749c4cbb32f07bcd1f6f_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-24\\/3828115919_749c4cbb32f07bcd1f6f_original.jpg\",\"real_name\":\"Nicole Baker\",\"real_name_normalized\":\"Nicole Baker\",\"email\":\"nbaker@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U039WNK7H\",\"name\":\"nlines\",\"deleted\":false,\"status\":null,\"color\":\"902d59\",\"real_name\":\"Noel Lines\",\"tz\":\"America\\/New_York\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Noel\",\"last_name\":\"Lines\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-09\\/3375993774_a288c42e00ab26ddd04d_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-09\\/3375993774_a288c42e00ab26ddd04d_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-09\\/3375993774_a288c42e00ab26ddd04d_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-09\\/3375993774_a288c42e00ab26ddd04d_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-09\\/3375993774_a288c42e00ab26ddd04d_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-09\\/3375993774_a288c42e00ab26ddd04d_original.jpg\",\"skype\":\"\",\"phone\":\"4047710519\",\"title\":\"Web and Mobile Developer\",\"real_name\":\"Noel Lines\",\"real_name_normalized\":\"Noel Lines\",\"email\":\"nlines@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U038AG18Y\",\"name\":\"paulpezzano\",\"deleted\":false,\"status\":null,\"color\":\"5870dd\",\"real_name\":\"\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"real_name\":\"\",\"real_name_normalized\":\"\",\"email\":\"ppezzano@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/1d239fe6f0daccd9aa2ced278a4935b6.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/1d239fe6f0daccd9aa2ced278a4935b6.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/1d239fe6f0daccd9aa2ced278a4935b6.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/1d239fe6f0daccd9aa2ced278a4935b6.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/1d239fe6f0daccd9aa2ced278a4935b6.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012.png\"},\"is_admin\":true,\"is_owner\":true,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03410F2D\",\"name\":\"pk\",\"deleted\":false,\"status\":null,\"color\":\"d58247\",\"real_name\":\"Pranav Khandelwal\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Pranav\",\"last_name\":\"Khandelwal\",\"title\":\"=7\",\"skype\":\"\",\"phone\":\"\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-26\\/4207461195_153722599086442589c4_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-26\\/4207461195_153722599086442589c4_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-26\\/4207461195_153722599086442589c4_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-26\\/4207461195_153722599086442589c4_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-26\\/4207461195_153722599086442589c4_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-26\\/4207461195_153722599086442589c4_original.jpg\",\"real_name\":\"Pranav Khandelwal\",\"real_name_normalized\":\"Pranav Khandelwal\",\"email\":\"pkhandelwal@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03KGJTD3\",\"name\":\"pschreck\",\"deleted\":false,\"status\":null,\"color\":\"4ec0d6\",\"real_name\":\"Peter Schreck\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Peter\",\"last_name\":\"Schreck\",\"phone\":\"Where do I add a photo.\",\"title\":\"Peter\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-09\\/4392332779_85928f1ad0d2625ed0bf_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-09\\/4392332779_85928f1ad0d2625ed0bf_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-09\\/4392332779_85928f1ad0d2625ed0bf_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-09\\/4392332779_85928f1ad0d2625ed0bf_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-09\\/4392332779_85928f1ad0d2625ed0bf_72.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-09\\/4392332779_85928f1ad0d2625ed0bf_original.jpg\",\"real_name\":\"Peter Schreck\",\"real_name_normalized\":\"Peter Schreck\",\"email\":\"pschreck@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03V54P5X\",\"name\":\"reilly\",\"deleted\":false,\"status\":null,\"color\":\"bd9336\",\"real_name\":\"\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-10\\/3993632770_546849d6935a658f86ff_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-10\\/3993632770_546849d6935a658f86ff_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-10\\/3993632770_546849d6935a658f86ff_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-10\\/3993632770_546849d6935a658f86ff_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-10\\/3993632770_546849d6935a658f86ff_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-03-10\\/3993632770_546849d6935a658f86ff_original.jpg\",\"real_name\":\"\",\"real_name_normalized\":\"\",\"email\":\"reilly@leapcommunication.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":true,\"is_ultra_restricted\":true,\"is_bot\":false},{\"id\":\"U0375HR4G\",\"name\":\"roppell\",\"deleted\":true,\"profile\":{\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242353761_e1c71e3422faca79a97a_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242353761_e1c71e3422faca79a97a_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242353761_e1c71e3422faca79a97a_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242353761_e1c71e3422faca79a97a_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242353761_e1c71e3422faca79a97a_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-17\\/3242353761_e1c71e3422faca79a97a_original.jpg\",\"real_name\":\"\",\"real_name_normalized\":\"\",\"email\":\"rpoppell@bluetubeinc.com\"}},{\"id\":\"U03DE5QBA\",\"name\":\"sopheyschrull\",\"deleted\":false,\"status\":null,\"color\":\"827327\",\"real_name\":\"Sophey Schrull\",\"tz\":\"America\\/New_York\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Sophey\",\"last_name\":\"Schrull\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-30\\/3572526644_853059c58d1dabe7a396_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-30\\/3572526644_853059c58d1dabe7a396_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-30\\/3572526644_853059c58d1dabe7a396_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-30\\/3572526644_853059c58d1dabe7a396_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-30\\/3572526644_853059c58d1dabe7a396_72.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-30\\/3572526644_853059c58d1dabe7a396_original.jpg\",\"real_name\":\"Sophey Schrull\",\"real_name_normalized\":\"Sophey Schrull\",\"email\":\"sschrull@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03MQ0M2Y\",\"name\":\"summit\",\"deleted\":false,\"status\":\"out for a walk, be back soon\",\"color\":\"e23f99\",\"real_name\":\"Summit Patel\",\"tz\":\"America\\/New_York\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Summit\",\"last_name\":\"Patel\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-25\\/3841658570_2ac9bf29c1b01e148cea_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-25\\/3841658570_2ac9bf29c1b01e148cea_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-25\\/3841658570_2ac9bf29c1b01e148cea_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-25\\/3841658570_2ac9bf29c1b01e148cea_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-25\\/3841658570_2ac9bf29c1b01e148cea_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-02-25\\/3841658570_2ac9bf29c1b01e148cea_original.jpg\",\"real_name\":\"Summit Patel\",\"real_name_normalized\":\"Summit Patel\",\"email\":\"spatel@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U032CQTJ8\",\"name\":\"sydney\",\"deleted\":false,\"status\":null,\"color\":\"e7392d\",\"real_name\":\"Sydney Blount\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Sydney\",\"last_name\":\"Blount\",\"title\":\"\",\"skype\":\"sydneyblount\",\"phone\":\"6787122115x514\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-25\\/3087392037_26e5b7d4a17fa7d6c799_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-25\\/3087392037_26e5b7d4a17fa7d6c799_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-25\\/3087392037_26e5b7d4a17fa7d6c799_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-25\\/3087392037_26e5b7d4a17fa7d6c799_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-25\\/3087392037_26e5b7d4a17fa7d6c799_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-11-25\\/3087392037_26e5b7d4a17fa7d6c799_original.jpg\",\"real_name\":\"Sydney Blount\",\"real_name_normalized\":\"Sydney Blount\",\"email\":\"sblount@bluetubeinc.com\"},\"is_admin\":true,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03PUV2F9\",\"name\":\"tanya\",\"deleted\":false,\"status\":null,\"color\":\"e475df\",\"real_name\":\"Tanya Resende\",\"tz\":\"America\\/Los_Angeles\",\"tz_label\":\"Pacific Daylight Time\",\"tz_offset\":-25200,\"profile\":{\"first_name\":\"Tanya\",\"last_name\":\"Resende\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-02\\/4302270253_83de6fa0d73da98465e7_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-02\\/4302270253_83de6fa0d73da98465e7_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-02\\/4302270253_83de6fa0d73da98465e7_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-02\\/4302270253_83de6fa0d73da98465e7_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-02\\/4302270253_83de6fa0d73da98465e7_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-04-02\\/4302270253_83de6fa0d73da98465e7_original.jpg\",\"real_name\":\"Tanya Resende\",\"real_name_normalized\":\"Tanya Resende\",\"email\":\"tresende@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03BRSJC2\",\"name\":\"theabashiru\",\"deleted\":false,\"status\":null,\"color\":\"a2a5dc\",\"real_name\":\"Thea Bashiru\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"first_name\":\"Thea\",\"last_name\":\"Bashiru\",\"title\":\"Sr. Recruiter\",\"skype\":\"\",\"phone\":\"(678) 650-0994\",\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-13\\/3399315205_2800ebac33fd765a5c33_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-13\\/3399315205_2800ebac33fd765a5c33_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-13\\/3399315205_2800ebac33fd765a5c33_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-13\\/3399315205_2800ebac33fd765a5c33_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-13\\/3399315205_2800ebac33fd765a5c33_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2015-01-13\\/3399315205_2800ebac33fd765a5c33_original.jpg\",\"real_name\":\"Thea Bashiru\",\"real_name_normalized\":\"Thea Bashiru\",\"email\":\"tbashiru@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03E0RDH2\",\"name\":\"todd\",\"deleted\":false,\"status\":null,\"color\":\"3c8c69\",\"real_name\":\"\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"real_name\":\"\",\"real_name_normalized\":\"\",\"email\":\"twascom@bluetubeinc.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/c614b78286706ebeb876717f236ef453.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/c614b78286706ebeb876717f236ef453.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/c614b78286706ebeb876717f236ef453.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/c614b78286706ebeb876717f236ef453.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/c614b78286706ebeb876717f236ef453.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0012.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"U03V475GK\",\"name\":\"willeyk\",\"deleted\":false,\"status\":null,\"color\":\"dd8527\",\"real_name\":\"\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"real_name\":\"\",\"real_name_normalized\":\"\",\"email\":\"krista_willey@mohawkind.com\",\"image_24\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/1fdaea6782abfeed2c9a9866e5f1e3fc.jpg?s=24&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0023-24.png\",\"image_32\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/1fdaea6782abfeed2c9a9866e5f1e3fc.jpg?s=32&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F272a%2Fimg%2Favatars%2Fava_0023-32.png\",\"image_48\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/1fdaea6782abfeed2c9a9866e5f1e3fc.jpg?s=48&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F272a%2Fimg%2Favatars%2Fava_0023-48.png\",\"image_72\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/1fdaea6782abfeed2c9a9866e5f1e3fc.jpg?s=72&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0023-72.png\",\"image_192\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/1fdaea6782abfeed2c9a9866e5f1e3fc.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F3654%2Fimg%2Favatars%2Fava_0023.png\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":true,\"is_ultra_restricted\":true,\"is_bot\":false},{\"id\":\"U0394E3G8\",\"name\":\"wrenn\",\"deleted\":false,\"status\":null,\"color\":\"e06b56\",\"real_name\":\"\",\"tz\":\"America\\/Indiana\\/Indianapolis\",\"tz_label\":\"Eastern Daylight Time\",\"tz_offset\":-14400,\"profile\":{\"image_24\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-30\\/3309502067_d7840962a92ff6773c86_24.jpg\",\"image_32\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-30\\/3309502067_d7840962a92ff6773c86_32.jpg\",\"image_48\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-30\\/3309502067_d7840962a92ff6773c86_48.jpg\",\"image_72\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-30\\/3309502067_d7840962a92ff6773c86_72.jpg\",\"image_192\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-30\\/3309502067_d7840962a92ff6773c86_192.jpg\",\"image_original\":\"https:\\/\\/s3-us-west-2.amazonaws.com\\/slack-files2\\/avatars\\/2014-12-30\\/3309502067_d7840962a92ff6773c86_original.jpg\",\"real_name\":\"\",\"real_name_normalized\":\"\",\"email\":\"wrenn@bluetubeinc.com\"},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false},{\"id\":\"USLACKBOT\",\"name\":\"slackbot\",\"deleted\":false,\"status\":null,\"color\":\"757575\",\"real_name\":\"Slack Bot\",\"tz\":null,\"tz_label\":\"Pacific Daylight Time\",\"tz_offset\":-25200,\"profile\":{\"first_name\":\"Slack\",\"last_name\":\"Bot\",\"image_24\":\"https:\\/\\/slack-assets2.s3-us-west-2.amazonaws.com\\/10068\\/img\\/slackbot_24.png\",\"image_32\":\"https:\\/\\/slack-assets2.s3-us-west-2.amazonaws.com\\/10068\\/img\\/slackbot_32.png\",\"image_48\":\"https:\\/\\/slack-assets2.s3-us-west-2.amazonaws.com\\/10068\\/img\\/slackbot_48.png\",\"image_72\":\"https:\\/\\/slack-assets2.s3-us-west-2.amazonaws.com\\/10068\\/img\\/slackbot_72.png\",\"image_192\":\"https:\\/\\/slack-assets2.s3-us-west-2.amazonaws.com\\/10068\\/img\\/slackbot_192.png\",\"real_name\":\"Slack Bot\",\"real_name_normalized\":\"Slack Bot\",\"email\":null},\"is_admin\":false,\"is_owner\":false,\"is_primary_owner\":false,\"is_restricted\":false,\"is_ultra_restricted\":false,\"is_bot\":false}],\"bots\":[{\"id\":\"B00\",\"name\":\"dropbox\",\"deleted\":false,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/20653\\/img\\/services\\/dropbox_48.png\"}},{\"id\":\"B03M464UT\",\"name\":\"giphy\",\"deleted\":false,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/24853\\/plugins\\/giphy\\/assets\\/bot_48.png\"}},{\"id\":\"B039Y5376\",\"name\":\"hangouts\",\"deleted\":false,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/11591\\/img\\/services\\/hangouts_48.png\"}},{\"id\":\"B039Y2AJ5\",\"name\":\"incoming-webhook\",\"deleted\":false,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/12078\\/img\\/services\\/incoming-webhook_48.png\"}},{\"id\":\"B03A39BTD\",\"name\":\"incoming-webhook\",\"deleted\":false,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/12078\\/img\\/services\\/incoming-webhook_48.png\"}},{\"id\":\"B03A39T61\",\"name\":\"incoming-webhook\",\"deleted\":false,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/12078\\/img\\/services\\/incoming-webhook_48.png\"}},{\"id\":\"B03L3RL9U\",\"name\":\"incoming-webhook\",\"deleted\":false,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/12078\\/img\\/services\\/incoming-webhook_48.png\"}},{\"id\":\"B032BB90V\",\"name\":\"jira\",\"deleted\":false,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/14542\\/img\\/services\\/jira_48.png\"}},{\"id\":\"B032FMKLF\",\"name\":\"raygun\",\"deleted\":false,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/19049\\/img\\/services\\/raygun_48.png\"}},{\"id\":\"B03BT5Y8S\",\"name\":\"raygun\",\"deleted\":false,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/19049\\/img\\/services\\/raygun_48.png\"}},{\"id\":\"B03GP10H5\",\"name\":\"raygun\",\"deleted\":false,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/19049\\/img\\/services\\/raygun_48.png\"}},{\"id\":\"B032KHEKD\",\"name\":\"twitter\",\"deleted\":false,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/20653\\/img\\/services\\/twitter_48.png\"}},{\"id\":\"B032M2CC8\",\"name\":\"twitter\",\"deleted\":false,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/20653\\/img\\/services\\/twitter_48.png\"}},{\"id\":\"B048DUBQ5\",\"name\":\"zapier\",\"deleted\":false,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/7bf4\\/img\\/services\\/zapier_48.png\"}},{\"id\":\"B032JSHGM\",\"name\":\"jenkins\",\"deleted\":true,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/20653\\/img\\/services\\/jenkins-ci_48.png\"}},{\"id\":\"B039Z0JKL\",\"name\":\"incoming-webhook\",\"deleted\":true,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/12078\\/img\\/services\\/incoming-webhook_48.png\"}},{\"id\":\"B039Z1RBN\",\"name\":\"incoming-webhook\",\"deleted\":true,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/12078\\/img\\/services\\/incoming-webhook_48.png\"}},{\"id\":\"B03AELQ0Q\",\"name\":\"slash-commands\",\"deleted\":true,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/23267\\/plugins\\/slash_commands\\/assets\\/bot_48.png\"}},{\"id\":\"B03C5GXG4\",\"name\":\"slash-commands\",\"deleted\":true,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/23267\\/plugins\\/slash_commands\\/assets\\/bot_48.png\"}},{\"id\":\"B03C3HT75\",\"name\":\"slackbot\",\"deleted\":true,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/20492\\/plugins\\/slackbot\\/assets\\/bot_48.png\"}},{\"id\":\"B03C5J29W\",\"name\":\"slackbot\",\"deleted\":true,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/20492\\/plugins\\/slackbot\\/assets\\/bot_48.png\"}},{\"id\":\"B03DCKTE0\",\"name\":\"raygun\",\"deleted\":true,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/19049\\/img\\/services\\/raygun_48.png\"}},{\"id\":\"B048U9KMX\",\"name\":\"incoming-webhook\",\"deleted\":true,\"icons\":{\"image_48\":\"https:\\/\\/slack.global.ssl.fastly.net\\/4324\\/img\\/services\\/incoming-webhook_48.png\"}}],\"svn_rev\":\"dev\",\"min_svn_rev\":99999,\"version_ts\":1431028947,\"min_version_ts\":1430492037,\"cache_version\":\"v7-dog\"}');
	
//-->
</script>			
			
		
	<!-- output_js "core" -->
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/fe49/js/rollup-core_required.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/c212/js/libs/bootstrap_plastic.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/4bdd/js/libs/fastclick.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/8556/js/libs/headroom.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/c15e/js/plastic.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/97c2/js/TS.web.js" crossorigin="anonymous"></script>

			<!-- output_js "secondary" -->
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/ea93/js/rollup-secondary_required.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/33c4/js/TS.storage.js" crossorigin="anonymous"></script>

		<!-- output_js "regular" -->
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/fdb7/js/TS.web.comments.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/f758/js/TS.web.file.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/2eab/js/libs/codemirror.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/9e78/js/codemirror_load.js" crossorigin="anonymous"></script>

		<script type="text/javascript">
	<!--
		boot_data.page_needs_custom_emoji = true;
		
		boot_data.file = JSON.parse('{\"id\":\"F04PL0NSR\",\"created\":1431029536,\"timestamp\":1431029536,\"name\":\"MicrosoftAjax.debug.js\",\"title\":\"MicrosoftAjax.debug.js\",\"mimetype\":\"text\\/plain\",\"filetype\":\"javascript\",\"pretty_type\":\"JavaScript\\/JSON\",\"user\":\"U03888XHK\",\"editable\":true,\"size\":317934,\"mode\":\"snippet\",\"is_external\":false,\"external_type\":\"\",\"is_public\":false,\"public_url_shared\":false,\"url\":\"https:\\/\\/slack-files.com\\/files-pub\\/T032CPD2W-F04PL0NSR-aff8fe83af\\/microsoftajax.debug.js\",\"url_download\":\"https:\\/\\/slack-files.com\\/files-pub\\/T032CPD2W-F04PL0NSR-aff8fe83af\\/download\\/microsoftajax.debug.js\",\"url_private\":\"https:\\/\\/files.slack.com\\/files-pri\\/T032CPD2W-F04PL0NSR\\/microsoftajax.debug.js\",\"url_private_download\":\"https:\\/\\/files.slack.com\\/files-pri\\/T032CPD2W-F04PL0NSR\\/download\\/microsoftajax.debug.js\",\"permalink\":\"https:\\/\\/bluetube.slack.com\\/files\\/mmintz\\/F04PL0NSR\\/microsoftajax.debug.js\",\"permalink_public\":\"https:\\/\\/slack-files.com\\/T032CPD2W-F04PL0NSR-aff8fe83af\",\"edit_link\":\"https:\\/\\/bluetube.slack.com\\/files\\/mmintz\\/F04PL0NSR\\/microsoftajax.debug.js\\/edit\",\"preview\":\"\\/\\/ Name:        MicrosoftAjax.debug.js\\n\\/\\/ Assembly:    System.Web.Extensions\\n\\/\\/ Version:     4.0.0.0\\n\\/\\/ FileVersion: 4.0.30205.0\\n\\/\\/-----------------------------------------------------------------------\\n\\/\\/ Copyright (C) Microsoft Corporation. All rights reserved.\\n\\/\\/-----------------------------------------------------------------------\\n\\/\\/ MicrosoftAjax.js\\n\\/\\/ Microsoft AJAX Framework.\\n \",\"preview_highlight\":\"<div class=\\\"sssh-code\\\"><div class=\\\"sssh-line\\\"><pre><span class=\\\"sssh-comment\\\">\\/\\/ Name:        MicrosoftAjax.debug.js<\\/span><\\/pre><\\/div>\\n<div class=\\\"sssh-line\\\"><pre><span class=\\\"sssh-comment\\\">\\/\\/ Assembly:    System.Web.Extensions<\\/span><\\/pre><\\/div>\\n<div class=\\\"sssh-line\\\"><pre><span class=\\\"sssh-comment\\\">\\/\\/ Version:     4.0.0.0<\\/span><\\/pre><\\/div>\\n<div class=\\\"sssh-line\\\"><pre><span class=\\\"sssh-comment\\\">\\/\\/ FileVersion: 4.0.30205.0<\\/span><\\/pre><\\/div>\\n<div class=\\\"sssh-line\\\"><pre><span class=\\\"sssh-comment\\\">\\/\\/-----------------------------------------------------------------------<\\/span><\\/pre><\\/div>\\n<div class=\\\"sssh-line\\\"><pre><span class=\\\"sssh-comment\\\">\\/\\/ Copyright (C) Microsoft Corporation. All rights reserved.<\\/span><\\/pre><\\/div>\\n<div class=\\\"sssh-line\\\"><pre><span class=\\\"sssh-comment\\\">\\/\\/-----------------------------------------------------------------------<\\/span><\\/pre><\\/div>\\n<div class=\\\"sssh-line\\\"><pre><span class=\\\"sssh-comment\\\">\\/\\/ MicrosoftAjax.js<\\/span><\\/pre><\\/div>\\n<div class=\\\"sssh-line\\\"><pre><span class=\\\"sssh-comment\\\">\\/\\/ Microsoft AJAX Framework.<\\/span><\\/pre><\\/div>\\n<div class=\\\"sssh-line\\\"><pre> <\\/pre><\\/div>\\n<div class=\\\"sssh-line\\\"><pre><\\/pre><\\/div>\\n<\\/div>\",\"lines\":7157,\"lines_more\":7147,\"channels\":[],\"groups\":[],\"ims\":[\"D04L1QWNH\"],\"comments_count\":0}');
		boot_data.file.comments = JSON.parse('[]');

		

		var g_editor;

		$(function(){

			var wrap_long_lines = !!TS.model.code_wrap_long_lines;

			g_editor = CodeMirror(function(elt){
				var content = document.getElementById("file_contents");
				content.parentNode.replaceChild(elt, content);
			}, {
				value: $('#file_contents').text(),
				lineNumbers: true,
				matchBrackets: true,
				indentUnit: 4,
				indentWithTabs: true,
				enterMode: "keep",
				tabMode: "shift",
				viewportMargin: Infinity,
				readOnly: true,
				lineWrapping: wrap_long_lines
			});

			$('#file_preview_wrap_cb').bind('change', function(e) {
				TS.model.code_wrap_long_lines = $(this).prop('checked');
				g_editor.setOption('lineWrapping', TS.model.code_wrap_long_lines);
			})

			$('#file_preview_wrap_cb').prop('checked', wrap_long_lines);

			CodeMirror.switchSlackMode(g_editor, 'javascript');
		});

		
		$('#file_comment').css('overflow', 'hidden').autogrow();
	//-->
	</script>

			<script type="text/javascript">TS.boot(boot_data);</script>
	<!-- slack-www252 / 2015-05-07 13:13:51 / v4ecc5aaac16db02d7ddcd4cf6742cf264e30b63c -->

</body>
</html>