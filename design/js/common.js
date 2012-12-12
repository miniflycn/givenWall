/*!
 * WhiteSnow JavaScript Library v0.1
 * @author miniflycn
 */

(function(__host){
	var host = __host;	
	
	/* ID Selector */
	var $ = function(__id){
		return document.getElementById(__id);
	};
	
	/* onReady */
	var isReady=false;
    var readyList= [];
    var timer;
    var ready = function(fn) {
		if (isReady )
			fn.call( document);
		else
			readyList.push( function() { return fn.call(this);});
		return this;
	};
	
	var onDOMReady = function(){
		for(var i=0;i<readyList.length;i++){
			readyList[i].apply(document);
		}
		readyList = null;
    };
    
	var bindReady = function(evt){
		if(isReady) return;
		isReady=true;
		onDOMReady.call(window);
		if(document.removeEventListener){
			document.removeEventListener("DOMContentLoaded", bindReady, false);
		}else if(document.attachEvent){
			document.detachEvent("onreadystatechange", bindReady);
			if(window == window.top){
				clearInterval(timer);
				timer = null;
			}
		}
	};

	if(document.addEventListener){
		document.addEventListener("DOMContentLoaded", bindReady, false);
	}else if(document.attachEvent){
		document.attachEvent("onreadystatechange", function(){
			if((/loaded|complete/).test(document.readyState))
				bindReady();
		});
		if(window == window.top){
			timer = setInterval(function(){
				try{
					isReady||document.documentElement.doScroll('left');
				}catch(e){
					return;
				}
					bindReady();
			},5);
		}
	}
	
	/* Ajax */
	
	/* Menu */

	/* ShowBox */
	function ShowBox(__id){
	
	}
	
	/* Mount */
	host.$ = $;
	host.ready = ready;
})(this);






function init(){
	var timeout = -1;
	$("menu").onmouseover = function(){
		$("menu").className = "menu_show";
	};
	$("menu").onmouseout = function(){
		$("menu").className = "menu";
	};
	$("button0").onmouseover = function(){
		$("button0").className = "menu_button_show";
	};
	$("button0").onmouseout = function(){
		$("button0").className = "menu_button";
	};
	$("button1").onmouseover = function(){
		$("button1").className = "menu_button_show";
	};
	$("button1").onmouseout = function(){
		$("button1").className = "menu_button";
	};
	$("button2").onmouseover = function(){
		$("button2").className = "menu_button_show";
	};
	$("button2").onmouseout = function(){
		$("button2").className = "menu_button";
	};
	$("message0").onmouseover = function(){
		$("message0").className = "message_show";
	};
	$("message0").onmouseout = function(){
		$("message0").className = "message";
	};
	$("message1").onmouseover = function(){
		$("message1").className = "message_show";
	};
	$("message1").onmouseout = function(){
		$("message1").className = "message";
	};		
	$("message2").onmouseover = function(){
		$("message2").className = "message_show";
	};
	$("message2").onmouseout = function(){
		$("message2").className = "message";
	};
	$("message3").onmouseover = function(){
		$("message3").className = "message_show";
	};
	$("message3").onmouseout = function(){
		$("message3").className = "message";
	};
	$("message4").onmouseover = function(){
		$("message4").className = "message_show";
	};
	$("message4").onmouseout = function(){
		$("message4").className = "message";
	};
}
